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
        "word": "alsa-seq"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Address",
          "name": "Address",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Address.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Address",
          "module": "Sound.ALSA.Sequencer.Address",
          "name": "Address",
          "package": "alsa-seq",
          "partial": "Address",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Address.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Address",
          "name": "T",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Address.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Address",
          "module": "Sound.ALSA.Sequencer.Address",
          "name": "T",
          "package": "alsa-seq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Address.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Address",
          "name": "Cons",
          "package": "alsa-seq",
          "signature": "Cons",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Address.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Address",
          "module": "Sound.ALSA.Sequencer.Address",
          "name": "Cons",
          "package": "alsa-seq",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Address.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Address",
          "name": "broadcast",
          "package": "alsa-seq",
          "signature": "T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Address.html#broadcast",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Address",
          "module": "Sound.ALSA.Sequencer.Address",
          "name": "broadcast",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Address.html#v:broadcast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Address",
          "name": "client",
          "package": "alsa-seq",
          "signature": "T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Address.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Address",
          "module": "Sound.ALSA.Sequencer.Address",
          "name": "client",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Address.html#v:client"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the given string into sequencer address.\nThe client and port are separated by either colon or period, e.g. 128:1.\nThe function also accepts client names or prefixes thereof.\nThrows \u003ccode\u003e(Errno 2)\u003c/code\u003e exception if no client name matches.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Address",
          "name": "parse",
          "package": "alsa-seq",
          "signature": "T mode-\u003e String-\u003e IO T",
          "type": "function"
        },
        "index": {
          "description": "Parse the given string into sequencer address The client and port are separated by either colon or period e.g The function also accepts client names or prefixes thereof Throws Errno exception if no client name matches",
          "hierarchy": "Sound ALSA Sequencer Address",
          "module": "Sound.ALSA.Sequencer.Address",
          "name": "parse",
          "normalized": "T a-\u003eString-\u003eIO T",
          "package": "alsa-seq",
          "signature": "T mode-\u003eString-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Address.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Address",
          "name": "port",
          "package": "alsa-seq",
          "signature": "T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Address.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Address",
          "module": "Sound.ALSA.Sequencer.Address",
          "name": "port",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Address.html#v:port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe address of all subscribed ports.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Address",
          "name": "subscribers",
          "package": "alsa-seq",
          "signature": "T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Address.html#subscribers",
          "type": "function"
        },
        "index": {
          "description": "The address of all subscribed ports",
          "hierarchy": "Sound ALSA Sequencer Address",
          "module": "Sound.ALSA.Sequencer.Address",
          "name": "subscribers",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Address.html#v:subscribers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Address",
          "name": "systemAnnounce",
          "package": "alsa-seq",
          "signature": "T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Address.html#systemAnnounce",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Address",
          "module": "Sound.ALSA.Sequencer.Address",
          "name": "systemAnnounce",
          "package": "alsa-seq",
          "partial": "Announce",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Address.html#v:systemAnnounce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Address",
          "name": "systemTimer",
          "package": "alsa-seq",
          "signature": "T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Address.html#systemTimer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Address",
          "module": "Sound.ALSA.Sequencer.Address",
          "name": "systemTimer",
          "package": "alsa-seq",
          "partial": "Timer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Address.html#v:systemTimer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Address",
          "name": "unknown",
          "package": "alsa-seq",
          "signature": "T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Address.html#unknown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Address",
          "module": "Sound.ALSA.Sequencer.Address",
          "name": "unknown",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Address.html#v:unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains functions for working with sequencer clients.\n Reference:\n \u003ca\u003ehttp://www.alsa-project.org/alsa-doc/alsa-lib/group___seq_client.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "Info",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Client-Info.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains functions for working with sequencer clients Reference http www.alsa-project.org alsa-doc alsa-lib group seq client.html",
          "hierarchy": "Sound ALSA Sequencer Client Info",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "Info",
          "package": "alsa-seq",
          "partial": "Info",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-Info.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "T",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-ClientInfo.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client Info",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "T",
          "package": "alsa-seq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-Info.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "clone",
          "package": "alsa-seq",
          "signature": "T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-ClientInfo.html#clone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client Info",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "clone",
          "normalized": "T-\u003eIO T",
          "package": "alsa-seq",
          "signature": "T-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-Info.html#v:clone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new information area filled with data about the sequencer client.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "copy",
          "package": "alsa-seq",
          "signature": "T-\u003e T-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Create new information area filled with data about the sequencer client",
          "hierarchy": "Sound ALSA Sequencer Client Info",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "copy",
          "normalized": "T-\u003eT-\u003eIO()",
          "package": "alsa-seq",
          "signature": "T-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-Info.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "filterAdd",
          "package": "alsa-seq",
          "signature": "T -\u003e e -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Client-Info.html#filterAdd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client Info",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "filterAdd",
          "normalized": "T-\u003ea-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Add",
          "signature": "T-\u003ee-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-Info.html#v:filterAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "filterCheck",
          "package": "alsa-seq",
          "signature": "T -\u003e e -\u003e IO Bool",
          "source": "src/Sound-ALSA-Sequencer-Client-Info.html#filterCheck",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client Info",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "filterCheck",
          "normalized": "T-\u003ea-\u003eIO Bool",
          "package": "alsa-seq",
          "partial": "Check",
          "signature": "T-\u003ee-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-Info.html#v:filterCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "filterClear",
          "package": "alsa-seq",
          "signature": "T -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Client-Info.html#filterClear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client Info",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "filterClear",
          "normalized": "T-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Clear",
          "signature": "T-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-Info.html#v:filterClear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "filterDel",
          "package": "alsa-seq",
          "signature": "T -\u003e e -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Client-Info.html#filterDel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client Info",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "filterDel",
          "normalized": "T-\u003ea-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Del",
          "signature": "T-\u003ee-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-Info.html#v:filterDel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "get",
          "package": "alsa-seq",
          "signature": "T mode -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-ClientInfo.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client Info",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "get",
          "normalized": "T a-\u003eIO T",
          "package": "alsa-seq",
          "signature": "T mode-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-Info.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the content of an object to a newly created object.\n\u003c/p\u003e\u003cp\u003eCreate a new information area filled with data about an arbitrary client.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "getAny",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-ClientInfo.html#getAny",
          "type": "function"
        },
        "index": {
          "description": "Copy the content of an object to newly created object Create new information area filled with data about an arbitrary client",
          "hierarchy": "Sound ALSA Sequencer Client Info",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "getAny",
          "normalized": "T a-\u003eT-\u003eIO T",
          "package": "alsa-seq",
          "partial": "Any",
          "signature": "T mode-\u003eT-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-Info.html#v:getAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "getBroadcastFilter",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Bool",
          "source": "src/Sound-ALSA-Sequencer-Marshal-ClientInfo.html#getBroadcastFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client Info",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "getBroadcastFilter",
          "normalized": "T-\u003eIO Bool",
          "package": "alsa-seq",
          "partial": "Broadcast Filter",
          "signature": "T-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-Info.html#v:getBroadcastFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "getClient",
          "package": "alsa-seq",
          "signature": "T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-ClientInfo.html#getClient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client Info",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "getClient",
          "normalized": "T-\u003eIO T",
          "package": "alsa-seq",
          "partial": "Client",
          "signature": "T-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-Info.html#v:getClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate an uninitialized object. (Not exported)\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "getErrorBounce",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Bool",
          "source": "src/Sound-ALSA-Sequencer-Marshal-ClientInfo.html#getErrorBounce",
          "type": "function"
        },
        "index": {
          "description": "Allocate an uninitialized object Not exported",
          "hierarchy": "Sound ALSA Sequencer Client Info",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "getErrorBounce",
          "normalized": "T-\u003eIO Bool",
          "package": "alsa-seq",
          "partial": "Error Bounce",
          "signature": "T-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-Info.html#v:getErrorBounce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "getEventLost",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Word",
          "source": "src/Sound-ALSA-Sequencer-Marshal-ClientInfo.html#getEventLost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client Info",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "getEventLost",
          "normalized": "T-\u003eIO Word",
          "package": "alsa-seq",
          "partial": "Event Lost",
          "signature": "T-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-Info.html#v:getEventLost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "getName",
          "package": "alsa-seq",
          "signature": "T -\u003e IO String",
          "source": "src/Sound-ALSA-Sequencer-Marshal-ClientInfo.html#getName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client Info",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "getName",
          "normalized": "T-\u003eIO String",
          "package": "alsa-seq",
          "partial": "Name",
          "signature": "T-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-Info.html#v:getName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "getNumPorts",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Word",
          "source": "src/Sound-ALSA-Sequencer-Marshal-ClientInfo.html#getNumPorts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client Info",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "getNumPorts",
          "normalized": "T-\u003eIO Word",
          "package": "alsa-seq",
          "partial": "Num Ports",
          "signature": "T-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-Info.html#v:getNumPorts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "getType",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Type",
          "source": "src/Sound-ALSA-Sequencer-Marshal-ClientInfo.html#getType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client Info",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "getType",
          "normalized": "T-\u003eIO Type",
          "package": "alsa-seq",
          "partial": "Type",
          "signature": "T-\u003eIO Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-Info.html#v:getType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "queryFirst",
          "package": "alsa-seq",
          "signature": "T mode -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Client-Info.html#queryFirst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client Info",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "queryFirst",
          "normalized": "T a-\u003eIO T",
          "package": "alsa-seq",
          "partial": "First",
          "signature": "T mode-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-Info.html#v:queryFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "queryLoop",
          "package": "alsa-seq",
          "signature": "T mode -\u003e (T -\u003e IO a) -\u003e IO [a]",
          "source": "src/Sound-ALSA-Sequencer-Client-Info.html#queryLoop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client Info",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "queryLoop",
          "normalized": "T a-\u003e(T-\u003eIO b)-\u003eIO[b]",
          "package": "alsa-seq",
          "partial": "Loop",
          "signature": "T mode-\u003e(T-\u003eIO a)-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-Info.html#v:queryLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "queryLoop_",
          "package": "alsa-seq",
          "signature": "T mode -\u003e (T -\u003e IO ()) -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Client-Info.html#queryLoop_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client Info",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "queryLoop_",
          "normalized": "T a-\u003e(T-\u003eIO())-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Loop",
          "signature": "T mode-\u003e(T-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-Info.html#v:queryLoop_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet information about the client with the next biggest identifier.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "queryNext",
          "package": "alsa-seq",
          "signature": "T mode-\u003e T-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Get information about the client with the next biggest identifier",
          "hierarchy": "Sound ALSA Sequencer Client Info",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "queryNext",
          "normalized": "T a-\u003eT-\u003eIO Bool",
          "package": "alsa-seq",
          "partial": "Next",
          "signature": "T mode-\u003eT-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-Info.html#v:queryNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the information for the sequencer client based on the data\n in the given information area.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "set",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Marshal-ClientInfo.html#set",
          "type": "function"
        },
        "index": {
          "description": "Set the information for the sequencer client based on the data in the given information area",
          "hierarchy": "Sound ALSA Sequencer Client Info",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "set",
          "normalized": "T a-\u003eT-\u003eIO()",
          "package": "alsa-seq",
          "signature": "T mode-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-Info.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "setBroadcastFilter",
          "package": "alsa-seq",
          "signature": "T -\u003e Bool -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Marshal-ClientInfo.html#setBroadcastFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client Info",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "setBroadcastFilter",
          "normalized": "T-\u003eBool-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Broadcast Filter",
          "signature": "T-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-Info.html#v:setBroadcastFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "setClient",
          "package": "alsa-seq",
          "signature": "T -\u003e T -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Marshal-ClientInfo.html#setClient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client Info",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "setClient",
          "normalized": "T-\u003eT-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Client",
          "signature": "T-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-Info.html#v:setClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "setErrorBounce",
          "package": "alsa-seq",
          "signature": "T -\u003e Bool -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Marshal-ClientInfo.html#setErrorBounce",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client Info",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "setErrorBounce",
          "normalized": "T-\u003eBool-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Error Bounce",
          "signature": "T-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-Info.html#v:setErrorBounce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "setName",
          "package": "alsa-seq",
          "signature": "T -\u003e String -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Marshal-ClientInfo.html#setName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client Info",
          "module": "Sound.ALSA.Sequencer.Client.Info",
          "name": "setName",
          "normalized": "T-\u003eString-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Name",
          "signature": "T-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-Info.html#v:setName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "InfoMonad",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Client-InfoMonad.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client InfoMonad",
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "InfoMonad",
          "package": "alsa-seq",
          "partial": "Info Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-InfoMonad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "T",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Client-InfoMonad.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client InfoMonad",
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "T",
          "package": "alsa-seq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-InfoMonad.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "get",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T a -\u003e IO a",
          "source": "src/Sound-ALSA-Sequencer-Client-InfoMonad.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client InfoMonad",
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "get",
          "normalized": "T a-\u003eT b-\u003eIO b",
          "package": "alsa-seq",
          "signature": "T mode-\u003eT a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-InfoMonad.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "getBroadcastFilter",
          "package": "alsa-seq",
          "signature": "T Bool",
          "source": "src/Sound-ALSA-Sequencer-Client-InfoMonad.html#getBroadcastFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client InfoMonad",
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "getBroadcastFilter",
          "package": "alsa-seq",
          "partial": "Broadcast Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-InfoMonad.html#v:getBroadcastFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "getClient",
          "package": "alsa-seq",
          "signature": "T T",
          "source": "src/Sound-ALSA-Sequencer-Client-InfoMonad.html#getClient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client InfoMonad",
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "getClient",
          "package": "alsa-seq",
          "partial": "Client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-InfoMonad.html#v:getClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "getErrorBounce",
          "package": "alsa-seq",
          "signature": "T Bool",
          "source": "src/Sound-ALSA-Sequencer-Client-InfoMonad.html#getErrorBounce",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client InfoMonad",
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "getErrorBounce",
          "package": "alsa-seq",
          "partial": "Error Bounce",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-InfoMonad.html#v:getErrorBounce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "getEventLost",
          "package": "alsa-seq",
          "signature": "T Word",
          "source": "src/Sound-ALSA-Sequencer-Client-InfoMonad.html#getEventLost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client InfoMonad",
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "getEventLost",
          "package": "alsa-seq",
          "partial": "Event Lost",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-InfoMonad.html#v:getEventLost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "getName",
          "package": "alsa-seq",
          "signature": "T String",
          "source": "src/Sound-ALSA-Sequencer-Client-InfoMonad.html#getName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client InfoMonad",
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "getName",
          "package": "alsa-seq",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-InfoMonad.html#v:getName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "getNumPorts",
          "package": "alsa-seq",
          "signature": "T Word",
          "source": "src/Sound-ALSA-Sequencer-Client-InfoMonad.html#getNumPorts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client InfoMonad",
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "getNumPorts",
          "package": "alsa-seq",
          "partial": "Num Ports",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-InfoMonad.html#v:getNumPorts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "getType",
          "package": "alsa-seq",
          "signature": "T Type",
          "source": "src/Sound-ALSA-Sequencer-Client-InfoMonad.html#getType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client InfoMonad",
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "getType",
          "package": "alsa-seq",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-InfoMonad.html#v:getType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "modify",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T a -\u003e IO a",
          "source": "src/Sound-ALSA-Sequencer-Client-InfoMonad.html#modify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client InfoMonad",
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "modify",
          "normalized": "T a-\u003eT b-\u003eIO b",
          "package": "alsa-seq",
          "signature": "T mode-\u003eT a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-InfoMonad.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "run",
          "package": "alsa-seq",
          "signature": "T a -\u003e T -\u003e IO a",
          "source": "src/Sound-ALSA-Sequencer-Client-InfoMonad.html#run",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client InfoMonad",
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "run",
          "normalized": "T a-\u003eT-\u003eIO a",
          "package": "alsa-seq",
          "signature": "T a-\u003eT-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-InfoMonad.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "setBroadcastFilter",
          "package": "alsa-seq",
          "signature": "Bool -\u003e T ()",
          "source": "src/Sound-ALSA-Sequencer-Client-InfoMonad.html#setBroadcastFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client InfoMonad",
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "setBroadcastFilter",
          "normalized": "Bool-\u003eT()",
          "package": "alsa-seq",
          "partial": "Broadcast Filter",
          "signature": "Bool-\u003eT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-InfoMonad.html#v:setBroadcastFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "setClient",
          "package": "alsa-seq",
          "signature": "T -\u003e T ()",
          "source": "src/Sound-ALSA-Sequencer-Client-InfoMonad.html#setClient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client InfoMonad",
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "setClient",
          "normalized": "T-\u003eT()",
          "package": "alsa-seq",
          "partial": "Client",
          "signature": "T-\u003eT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-InfoMonad.html#v:setClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "setErrorBounce",
          "package": "alsa-seq",
          "signature": "Bool -\u003e T ()",
          "source": "src/Sound-ALSA-Sequencer-Client-InfoMonad.html#setErrorBounce",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client InfoMonad",
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "setErrorBounce",
          "normalized": "Bool-\u003eT()",
          "package": "alsa-seq",
          "partial": "Error Bounce",
          "signature": "Bool-\u003eT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-InfoMonad.html#v:setErrorBounce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "setName",
          "package": "alsa-seq",
          "signature": "String -\u003e T ()",
          "source": "src/Sound-ALSA-Sequencer-Client-InfoMonad.html#setName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client InfoMonad",
          "module": "Sound.ALSA.Sequencer.Client.InfoMonad",
          "name": "setName",
          "normalized": "String-\u003eT()",
          "package": "alsa-seq",
          "partial": "Name",
          "signature": "String-\u003eT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client-InfoMonad.html#v:setName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains functions for working with sequencer clients.\n Reference:\n \u003ca\u003ehttp://www.alsa-project.org/alsa-doc/alsa-lib/group___seq_client.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.ALSA.Sequencer.Client",
          "name": "Client",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Client.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains functions for working with sequencer clients Reference http www.alsa-project.org alsa-doc alsa-lib group seq client.html",
          "hierarchy": "Sound ALSA Sequencer Client",
          "module": "Sound.ALSA.Sequencer.Client",
          "name": "Client",
          "package": "alsa-seq",
          "partial": "Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of client identifiers.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Client",
          "name": "T",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Client.html#T",
          "type": "newtype"
        },
        "index": {
          "description": "The type of client identifiers",
          "hierarchy": "Sound ALSA Sequencer Client",
          "module": "Sound.ALSA.Sequencer.Client",
          "name": "T",
          "package": "alsa-seq",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe different types of clients.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Client",
          "name": "Type",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Client.html#Type",
          "type": "data"
        },
        "index": {
          "description": "The different types of clients",
          "hierarchy": "Sound ALSA Sequencer Client",
          "module": "Sound.ALSA.Sequencer.Client",
          "name": "Type",
          "package": "alsa-seq",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client",
          "name": "Cons",
          "package": "alsa-seq",
          "signature": "Cons Word8",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Client.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client",
          "module": "Sound.ALSA.Sequencer.Client",
          "name": "Cons",
          "package": "alsa-seq",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client",
          "name": "Kernel",
          "package": "alsa-seq",
          "signature": "Kernel",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Client.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client",
          "module": "Sound.ALSA.Sequencer.Client",
          "name": "Kernel",
          "package": "alsa-seq",
          "partial": "Kernel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client.html#v:Kernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client",
          "name": "User",
          "package": "alsa-seq",
          "signature": "User",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Client.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client",
          "module": "Sound.ALSA.Sequencer.Client",
          "name": "User",
          "package": "alsa-seq",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client.html#v:User"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client",
          "name": "broadcast",
          "package": "alsa-seq",
          "signature": "T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Client.html#broadcast",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client",
          "module": "Sound.ALSA.Sequencer.Client",
          "name": "broadcast",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client.html#v:broadcast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the client identifier for the sequencer.\n A convinience function.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Client",
          "name": "getId",
          "package": "alsa-seq",
          "signature": "T mode -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Client.html#getId",
          "type": "function"
        },
        "index": {
          "description": "Get the client identifier for the sequencer convinience function",
          "hierarchy": "Sound ALSA Sequencer Client",
          "module": "Sound.ALSA.Sequencer.Client",
          "name": "getId",
          "normalized": "T a-\u003eIO T",
          "package": "alsa-seq",
          "partial": "Id",
          "signature": "T mode-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client.html#v:getId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the name for the sequencer client.\n A convinience function.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Client",
          "name": "setName",
          "package": "alsa-seq",
          "signature": "T mode -\u003e String -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Client.html#setName",
          "type": "function"
        },
        "index": {
          "description": "Set the name for the sequencer client convinience function",
          "hierarchy": "Sound ALSA Sequencer Client",
          "module": "Sound.ALSA.Sequencer.Client",
          "name": "setName",
          "normalized": "T a-\u003eString-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Name",
          "signature": "T mode-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client.html#v:setName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client",
          "name": "subscribers",
          "package": "alsa-seq",
          "signature": "T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Client.html#subscribers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client",
          "module": "Sound.ALSA.Sequencer.Client",
          "name": "subscribers",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client.html#v:subscribers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client",
          "name": "system",
          "package": "alsa-seq",
          "signature": "T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Client.html#system",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client",
          "module": "Sound.ALSA.Sequencer.Client",
          "name": "system",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client.html#v:system"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Client",
          "name": "unknown",
          "package": "alsa-seq",
          "signature": "T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Client.html#unknown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Client",
          "module": "Sound.ALSA.Sequencer.Client",
          "name": "unknown",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Client.html#v:unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Concurrent",
          "name": "Concurrent",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Concurrent.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Concurrent",
          "module": "Sound.ALSA.Sequencer.Concurrent",
          "name": "Concurrent",
          "package": "alsa-seq",
          "partial": "Concurrent",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Concurrent.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA thread-compatible version of \u003ccode\u003eSound.ALSA.Sequencer.Event.drainBuffer\u003c/code\u003e.\n This call is always blocking but will not block other threads.  The\n sequencer, however, must be set non-blocking or this will not work as\n expected.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Concurrent",
          "name": "drainOutput",
          "package": "alsa-seq",
          "signature": "T mode -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Concurrent.html#drainOutput",
          "type": "function"
        },
        "index": {
          "description": "thread-compatible version of Sound.ALSA.Sequencer.Event.drainBuffer This call is always blocking but will not block other threads The sequencer however must be set non-blocking or this will not work as expected",
          "hierarchy": "Sound ALSA Sequencer Concurrent",
          "module": "Sound.ALSA.Sequencer.Concurrent",
          "name": "drainOutput",
          "normalized": "T a-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Output",
          "signature": "T mode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Concurrent.html#v:drainOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA thread-compatible version of \u003ccode\u003eSound.ALSA.Sequencer.Event.input\u003c/code\u003e.\n This call is always blocking (unless there are already event in the input\n buffer) but will not block other threads.  The sequencer, however, must be\n set non-blocking or this will not work as expected.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Concurrent",
          "name": "input",
          "package": "alsa-seq",
          "signature": "T mode -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Concurrent.html#input",
          "type": "function"
        },
        "index": {
          "description": "thread-compatible version of Sound.ALSA.Sequencer.Event.input This call is always blocking unless there are already event in the input buffer but will not block other threads The sequencer however must be set non-blocking or this will not work as expected",
          "hierarchy": "Sound ALSA Sequencer Concurrent",
          "module": "Sound.ALSA.Sequencer.Concurrent",
          "name": "input",
          "normalized": "T a-\u003eIO T",
          "package": "alsa-seq",
          "signature": "T mode-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Concurrent.html#v:input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA thread-compatible version of \u003ccode\u003eSound.ALSA.Sequencer.Event.output\u003c/code\u003e.\n This call is always blocking (unless there is space in the output\n buffer) but will not block other threads.  The sequencer, however, must be\n set non-blocking or this will not work as expected.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Concurrent",
          "name": "output",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e IO Word",
          "source": "src/Sound-ALSA-Sequencer-Concurrent.html#output",
          "type": "function"
        },
        "index": {
          "description": "thread-compatible version of Sound.ALSA.Sequencer.Event.output This call is always blocking unless there is space in the output buffer but will not block other threads The sequencer however must be set non-blocking or this will not work as expected",
          "hierarchy": "Sound ALSA Sequencer Concurrent",
          "module": "Sound.ALSA.Sequencer.Concurrent",
          "name": "output",
          "normalized": "T a-\u003eT-\u003eIO Word",
          "package": "alsa-seq",
          "signature": "T mode-\u003eT-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Concurrent.html#v:output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait until new input is available or new output may be drained\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Concurrent",
          "name": "threadWaitDuplex",
          "package": "alsa-seq",
          "signature": "T mode -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Concurrent.html#threadWaitDuplex",
          "type": "function"
        },
        "index": {
          "description": "Wait until new input is available or new output may be drained",
          "hierarchy": "Sound ALSA Sequencer Concurrent",
          "module": "Sound.ALSA.Sequencer.Concurrent",
          "name": "threadWaitDuplex",
          "normalized": "T a-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Wait Duplex",
          "signature": "T mode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Concurrent.html#v:threadWaitDuplex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for new input to be available from the sequencer (even if there is already input in the buffer)\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Concurrent",
          "name": "threadWaitInput",
          "package": "alsa-seq",
          "signature": "T mode -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Concurrent.html#threadWaitInput",
          "type": "function"
        },
        "index": {
          "description": "Wait for new input to be available from the sequencer even if there is already input in the buffer",
          "hierarchy": "Sound ALSA Sequencer Concurrent",
          "module": "Sound.ALSA.Sequencer.Concurrent",
          "name": "threadWaitInput",
          "normalized": "T a-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Wait Input",
          "signature": "T mode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Concurrent.html#v:threadWaitInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait until new output may be drained from the buffer to the sequencer (even if the output buffer is already empty)\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Concurrent",
          "name": "threadWaitOutput",
          "package": "alsa-seq",
          "signature": "T mode -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Concurrent.html#threadWaitOutput",
          "type": "function"
        },
        "index": {
          "description": "Wait until new output may be drained from the buffer to the sequencer even if the output buffer is already empty",
          "hierarchy": "Sound ALSA Sequencer Concurrent",
          "module": "Sound.ALSA.Sequencer.Concurrent",
          "name": "threadWaitOutput",
          "normalized": "T a-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Wait Output",
          "signature": "T mode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Concurrent.html#v:threadWaitOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Connect",
          "name": "Connect",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Connect.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Connect",
          "module": "Sound.ALSA.Sequencer.Connect",
          "name": "Connect",
          "package": "alsa-seq",
          "partial": "Connect",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Connect.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Connect",
          "name": "T",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Connect.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Connect",
          "module": "Sound.ALSA.Sequencer.Connect",
          "name": "T",
          "package": "alsa-seq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Connect.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Connect",
          "name": "Cons",
          "package": "alsa-seq",
          "signature": "Cons",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Connect.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Connect",
          "module": "Sound.ALSA.Sequencer.Connect",
          "name": "Cons",
          "package": "alsa-seq",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Connect.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple subscription (w/o exclusive & time conversion).\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Connect",
          "name": "createFrom",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Connect.html#createFrom",
          "type": "function"
        },
        "index": {
          "description": "Simple subscription exclusive time conversion",
          "hierarchy": "Sound ALSA Sequencer Connect",
          "module": "Sound.ALSA.Sequencer.Connect",
          "name": "createFrom",
          "normalized": "T a-\u003eT-\u003eT-\u003eIO T",
          "package": "alsa-seq",
          "partial": "From",
          "signature": "T mode-\u003eT-\u003eT-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Connect.html#v:createFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple subscription (w/o exclusive & time conversion).\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Connect",
          "name": "createTo",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Connect.html#createTo",
          "type": "function"
        },
        "index": {
          "description": "Simple subscription exclusive time conversion",
          "hierarchy": "Sound ALSA Sequencer Connect",
          "module": "Sound.ALSA.Sequencer.Connect",
          "name": "createTo",
          "normalized": "T a-\u003eT-\u003eT-\u003eIO T",
          "package": "alsa-seq",
          "partial": "To",
          "signature": "T mode-\u003eT-\u003eT-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Connect.html#v:createTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple disconnection.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Connect",
          "name": "deleteFrom",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e T -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Connect.html#deleteFrom",
          "type": "function"
        },
        "index": {
          "description": "Simple disconnection",
          "hierarchy": "Sound ALSA Sequencer Connect",
          "module": "Sound.ALSA.Sequencer.Connect",
          "name": "deleteFrom",
          "normalized": "T a-\u003eT-\u003eT-\u003eIO()",
          "package": "alsa-seq",
          "partial": "From",
          "signature": "T mode-\u003eT-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Connect.html#v:deleteFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple disconnection.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Connect",
          "name": "deleteTo",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e T -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Connect.html#deleteTo",
          "type": "function"
        },
        "index": {
          "description": "Simple disconnection",
          "hierarchy": "Sound ALSA Sequencer Connect",
          "module": "Sound.ALSA.Sequencer.Connect",
          "name": "deleteTo",
          "normalized": "T a-\u003eT-\u003eT-\u003eIO()",
          "package": "alsa-seq",
          "partial": "To",
          "signature": "T mode-\u003eT-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Connect.html#v:deleteTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Connect",
          "name": "dest",
          "package": "alsa-seq",
          "signature": "T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Connect.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Connect",
          "module": "Sound.ALSA.Sequencer.Connect",
          "name": "dest",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Connect.html#v:dest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Connect",
          "name": "fromSubscribers",
          "package": "alsa-seq",
          "signature": "T -\u003e T",
          "source": "src/Sound-ALSA-Sequencer-Connect.html#fromSubscribers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Connect",
          "module": "Sound.ALSA.Sequencer.Connect",
          "name": "fromSubscribers",
          "normalized": "T-\u003eT",
          "package": "alsa-seq",
          "partial": "Subscribers",
          "signature": "T-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Connect.html#v:fromSubscribers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Connect",
          "name": "reverse",
          "package": "alsa-seq",
          "signature": "T -\u003e T",
          "source": "src/Sound-ALSA-Sequencer-Connect.html#reverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Connect",
          "module": "Sound.ALSA.Sequencer.Connect",
          "name": "reverse",
          "normalized": "T-\u003eT",
          "package": "alsa-seq",
          "signature": "T-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Connect.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Connect",
          "name": "source",
          "package": "alsa-seq",
          "signature": "T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Connect.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Connect",
          "module": "Sound.ALSA.Sequencer.Connect",
          "name": "source",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Connect.html#v:source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Connect",
          "name": "toSubscribers",
          "package": "alsa-seq",
          "signature": "T -\u003e T",
          "source": "src/Sound-ALSA-Sequencer-Connect.html#toSubscribers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Connect",
          "module": "Sound.ALSA.Sequencer.Connect",
          "name": "toSubscribers",
          "normalized": "T-\u003eT",
          "package": "alsa-seq",
          "partial": "Subscribers",
          "signature": "T-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Connect.html#v:toSubscribers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemporary subscription.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Connect",
          "name": "withFrom",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e T -\u003e (T -\u003e IO a) -\u003e IO a",
          "source": "src/Sound-ALSA-Sequencer-Connect.html#withFrom",
          "type": "function"
        },
        "index": {
          "description": "Temporary subscription",
          "hierarchy": "Sound ALSA Sequencer Connect",
          "module": "Sound.ALSA.Sequencer.Connect",
          "name": "withFrom",
          "normalized": "T a-\u003eT-\u003eT-\u003e(T-\u003eIO b)-\u003eIO b",
          "package": "alsa-seq",
          "partial": "From",
          "signature": "T mode-\u003eT-\u003eT-\u003e(T-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Connect.html#v:withFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemporary subscription.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Connect",
          "name": "withTo",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e T -\u003e (T -\u003e IO a) -\u003e IO a",
          "source": "src/Sound-ALSA-Sequencer-Connect.html#withTo",
          "type": "function"
        },
        "index": {
          "description": "Temporary subscription",
          "hierarchy": "Sound ALSA Sequencer Connect",
          "module": "Sound.ALSA.Sequencer.Connect",
          "name": "withTo",
          "normalized": "T a-\u003eT-\u003eT-\u003e(T-\u003eIO b)-\u003eIO b",
          "package": "alsa-seq",
          "partial": "To",
          "signature": "T mode-\u003eT-\u003eT-\u003e(T-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Connect.html#v:withTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.Accessor",
          "name": "Accessor",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Event-Accessor.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event Accessor",
          "module": "Sound.ALSA.Sequencer.Event.Accessor",
          "name": "Accessor",
          "package": "alsa-seq",
          "partial": "Accessor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-Accessor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.Accessor",
          "name": "body",
          "package": "alsa-seq",
          "signature": "T T Data",
          "source": "src/Sound-ALSA-Sequencer-Event-Accessor.html#body",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event Accessor",
          "module": "Sound.ALSA.Sequencer.Event.Accessor",
          "name": "body",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-Accessor.html#v:body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.Accessor",
          "name": "connect",
          "package": "alsa-seq",
          "signature": "T T T",
          "source": "src/Sound-ALSA-Sequencer-Event-Accessor.html#connect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event Accessor",
          "module": "Sound.ALSA.Sequencer.Event.Accessor",
          "name": "connect",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-Accessor.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.Accessor",
          "name": "dest",
          "package": "alsa-seq",
          "signature": "T T T",
          "source": "src/Sound-ALSA-Sequencer-Event-Accessor.html#dest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event Accessor",
          "module": "Sound.ALSA.Sequencer.Event.Accessor",
          "name": "dest",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-Accessor.html#v:dest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.Accessor",
          "name": "highPriority",
          "package": "alsa-seq",
          "signature": "T T Bool",
          "source": "src/Sound-ALSA-Sequencer-Event-Accessor.html#highPriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event Accessor",
          "module": "Sound.ALSA.Sequencer.Event.Accessor",
          "name": "highPriority",
          "package": "alsa-seq",
          "partial": "Priority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-Accessor.html#v:highPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.Accessor",
          "name": "queue",
          "package": "alsa-seq",
          "signature": "T T T",
          "source": "src/Sound-ALSA-Sequencer-Event-Accessor.html#queue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event Accessor",
          "module": "Sound.ALSA.Sequencer.Event.Accessor",
          "name": "queue",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-Accessor.html#v:queue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.Accessor",
          "name": "source",
          "package": "alsa-seq",
          "signature": "T T T",
          "source": "src/Sound-ALSA-Sequencer-Event-Accessor.html#source",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event Accessor",
          "module": "Sound.ALSA.Sequencer.Event.Accessor",
          "name": "source",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-Accessor.html#v:source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.Accessor",
          "name": "tag",
          "package": "alsa-seq",
          "signature": "T T Tag",
          "source": "src/Sound-ALSA-Sequencer-Event-Accessor.html#tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event Accessor",
          "module": "Sound.ALSA.Sequencer.Event.Accessor",
          "name": "tag",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-Accessor.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.Accessor",
          "name": "time",
          "package": "alsa-seq",
          "signature": "T T T",
          "source": "src/Sound-ALSA-Sequencer-Event-Accessor.html#time",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event Accessor",
          "module": "Sound.ALSA.Sequencer.Event.Accessor",
          "name": "time",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-Accessor.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.Accessor",
          "name": "timeStamp",
          "package": "alsa-seq",
          "signature": "T T Stamp",
          "source": "src/Sound-ALSA-Sequencer-Event-Accessor.html#timeStamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event Accessor",
          "module": "Sound.ALSA.Sequencer.Event.Accessor",
          "name": "timeStamp",
          "package": "alsa-seq",
          "partial": "Stamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-Accessor.html#v:timeStamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module allows to cancel events according to some criteria.\nIn all cases other than \u003ccode\u003e\u003ca\u003esetInput\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esetOutput\u003c/a\u003e\u003c/code\u003e\nthe criteria are combined by logical AND.\nFor every criterion we provide three kinds of accessors:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eset\u003c/code\u003e: enable a criterion\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eput\u003c/code\u003e: enable or disable a criterion\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eget\u003c/code\u003e: query, whether the criterion is enabled or disabled.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eCurrently only the \u003ccode\u003eset\u003c/code\u003e functions are really usable.\nThe \u003ccode\u003eput\u003c/code\u003e and \u003ccode\u003eget\u003c/code\u003e functions would become useful\nfor manipulating the remove criterion record, that ALSA maintains.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "RemoveMonad",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Event-RemoveMonad.html",
          "type": "module"
        },
        "index": {
          "description": "This module allows to cancel events according to some criteria In all cases other than setInput and setOutput the criteria are combined by logical AND For every criterion we provide three kinds of accessors set enable criterion put enable or disable criterion get query whether the criterion is enabled or disabled Currently only the set functions are really usable The put and get functions would become useful for manipulating the remove criterion record that ALSA maintains",
          "hierarchy": "Sound ALSA Sequencer Event RemoveMonad",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "RemoveMonad",
          "package": "alsa-seq",
          "partial": "Remove Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-RemoveMonad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "T",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Event-RemoveMonad.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event RemoveMonad",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "T",
          "package": "alsa-seq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-RemoveMonad.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "getChannel",
          "package": "alsa-seq",
          "signature": "T (Maybe Channel)",
          "source": "src/Sound-ALSA-Sequencer-Event-RemoveMonad.html#getChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event RemoveMonad",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "getChannel",
          "package": "alsa-seq",
          "partial": "Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-RemoveMonad.html#v:getChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "getDest",
          "package": "alsa-seq",
          "signature": "T (Maybe (T, T))",
          "source": "src/Sound-ALSA-Sequencer-Event-RemoveMonad.html#getDest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event RemoveMonad",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "getDest",
          "normalized": "T(Maybe(T,T))",
          "package": "alsa-seq",
          "partial": "Dest",
          "signature": "T(Maybe(T,T))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-RemoveMonad.html#v:getDest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "getIgnoreOff",
          "package": "alsa-seq",
          "signature": "T Bool",
          "source": "src/Sound-ALSA-Sequencer-Event-RemoveMonad.html#getIgnoreOff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event RemoveMonad",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "getIgnoreOff",
          "package": "alsa-seq",
          "partial": "Ignore Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-RemoveMonad.html#v:getIgnoreOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "getInput",
          "package": "alsa-seq",
          "signature": "T Bool",
          "source": "src/Sound-ALSA-Sequencer-Event-RemoveMonad.html#getInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event RemoveMonad",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "getInput",
          "package": "alsa-seq",
          "partial": "Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-RemoveMonad.html#v:getInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "getOutput",
          "package": "alsa-seq",
          "signature": "T Bool",
          "source": "src/Sound-ALSA-Sequencer-Event-RemoveMonad.html#getOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event RemoveMonad",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "getOutput",
          "package": "alsa-seq",
          "partial": "Output",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-RemoveMonad.html#v:getOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "getTag",
          "package": "alsa-seq",
          "signature": "T (Maybe Tag)",
          "source": "src/Sound-ALSA-Sequencer-Event-RemoveMonad.html#getTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event RemoveMonad",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "getTag",
          "package": "alsa-seq",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-RemoveMonad.html#v:getTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "getTime",
          "package": "alsa-seq",
          "signature": "T (Maybe Ordering, Stamp)",
          "source": "src/Sound-ALSA-Sequencer-Event-RemoveMonad.html#getTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event RemoveMonad",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "getTime",
          "normalized": "T(Maybe Ordering,Stamp)",
          "package": "alsa-seq",
          "partial": "Time",
          "signature": "T(Maybe Ordering,Stamp)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-RemoveMonad.html#v:getTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "putChannel",
          "package": "alsa-seq",
          "signature": "Maybe Channel -\u003e T ()",
          "source": "src/Sound-ALSA-Sequencer-Event-RemoveMonad.html#putChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event RemoveMonad",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "putChannel",
          "normalized": "Maybe Channel-\u003eT()",
          "package": "alsa-seq",
          "partial": "Channel",
          "signature": "Maybe Channel-\u003eT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-RemoveMonad.html#v:putChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "putDest",
          "package": "alsa-seq",
          "signature": "Maybe (T, T) -\u003e T ()",
          "source": "src/Sound-ALSA-Sequencer-Event-RemoveMonad.html#putDest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event RemoveMonad",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "putDest",
          "normalized": "Maybe(T,T)-\u003eT()",
          "package": "alsa-seq",
          "partial": "Dest",
          "signature": "Maybe(T,T)-\u003eT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-RemoveMonad.html#v:putDest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "putEventType",
          "package": "alsa-seq",
          "signature": "Maybe e -\u003e T ()",
          "source": "src/Sound-ALSA-Sequencer-Event-RemoveMonad.html#putEventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event RemoveMonad",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "putEventType",
          "normalized": "Maybe a-\u003eT()",
          "package": "alsa-seq",
          "partial": "Event Type",
          "signature": "Maybe e-\u003eT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-RemoveMonad.html#v:putEventType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "putIgnoreOff",
          "package": "alsa-seq",
          "signature": "Bool -\u003e T ()",
          "source": "src/Sound-ALSA-Sequencer-Event-RemoveMonad.html#putIgnoreOff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event RemoveMonad",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "putIgnoreOff",
          "normalized": "Bool-\u003eT()",
          "package": "alsa-seq",
          "partial": "Ignore Off",
          "signature": "Bool-\u003eT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-RemoveMonad.html#v:putIgnoreOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "putInput",
          "package": "alsa-seq",
          "signature": "Bool -\u003e T ()",
          "source": "src/Sound-ALSA-Sequencer-Event-RemoveMonad.html#putInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event RemoveMonad",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "putInput",
          "normalized": "Bool-\u003eT()",
          "package": "alsa-seq",
          "partial": "Input",
          "signature": "Bool-\u003eT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-RemoveMonad.html#v:putInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "putOutput",
          "package": "alsa-seq",
          "signature": "Bool -\u003e T ()",
          "source": "src/Sound-ALSA-Sequencer-Event-RemoveMonad.html#putOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event RemoveMonad",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "putOutput",
          "normalized": "Bool-\u003eT()",
          "package": "alsa-seq",
          "partial": "Output",
          "signature": "Bool-\u003eT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-RemoveMonad.html#v:putOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "putTag",
          "package": "alsa-seq",
          "signature": "Maybe Tag -\u003e T ()",
          "source": "src/Sound-ALSA-Sequencer-Event-RemoveMonad.html#putTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event RemoveMonad",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "putTag",
          "normalized": "Maybe Tag-\u003eT()",
          "package": "alsa-seq",
          "partial": "Tag",
          "signature": "Maybe Tag-\u003eT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-RemoveMonad.html#v:putTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "putTime",
          "package": "alsa-seq",
          "signature": "Maybe Ordering -\u003e Stamp -\u003e T ()",
          "source": "src/Sound-ALSA-Sequencer-Event-RemoveMonad.html#putTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event RemoveMonad",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "putTime",
          "normalized": "Maybe Ordering-\u003eStamp-\u003eT()",
          "package": "alsa-seq",
          "partial": "Time",
          "signature": "Maybe Ordering-\u003eStamp-\u003eT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-RemoveMonad.html#v:putTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove events according to the given conditions\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "run",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T a -\u003e IO a",
          "source": "src/Sound-ALSA-Sequencer-Event-RemoveMonad.html#run",
          "type": "function"
        },
        "index": {
          "description": "Remove events according to the given conditions",
          "hierarchy": "Sound ALSA Sequencer Event RemoveMonad",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "run",
          "normalized": "T a-\u003eT b-\u003eIO b",
          "package": "alsa-seq",
          "signature": "T mode-\u003eT a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-RemoveMonad.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "setChannel",
          "package": "alsa-seq",
          "signature": "Channel -\u003e T ()",
          "source": "src/Sound-ALSA-Sequencer-Event-RemoveMonad.html#setChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event RemoveMonad",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "setChannel",
          "normalized": "Channel-\u003eT()",
          "package": "alsa-seq",
          "partial": "Channel",
          "signature": "Channel-\u003eT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-RemoveMonad.html#v:setChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eALSA maintainers say, that destination address and queue are checked together,\nat least in the kernel buffer.\nHowever up to ALSA-1.0.22 the check for the queue is missing in libasound\nfor the local buffer.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "setDest",
          "package": "alsa-seq",
          "signature": "(T, T) -\u003e T ()",
          "source": "src/Sound-ALSA-Sequencer-Event-RemoveMonad.html#setDest",
          "type": "function"
        },
        "index": {
          "description": "ALSA maintainers say that destination address and queue are checked together at least in the kernel buffer However up to ALSA-1.0.22 the check for the queue is missing in libasound for the local buffer",
          "hierarchy": "Sound ALSA Sequencer Event RemoveMonad",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "setDest",
          "normalized": "(T,T)-\u003eT()",
          "package": "alsa-seq",
          "partial": "Dest",
          "signature": "(T,T)-\u003eT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-RemoveMonad.html#v:setDest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "setEventType",
          "package": "alsa-seq",
          "signature": "e -\u003e T ()",
          "source": "src/Sound-ALSA-Sequencer-Event-RemoveMonad.html#setEventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event RemoveMonad",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "setEventType",
          "normalized": "a-\u003eT()",
          "package": "alsa-seq",
          "partial": "Event Type",
          "signature": "e-\u003eT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-RemoveMonad.html#v:setEventType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNoteOff events are kept in any case.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "setIgnoreOff",
          "package": "alsa-seq",
          "signature": "T ()",
          "source": "src/Sound-ALSA-Sequencer-Event-RemoveMonad.html#setIgnoreOff",
          "type": "function"
        },
        "index": {
          "description": "NoteOff events are kept in any case",
          "hierarchy": "Sound ALSA Sequencer Event RemoveMonad",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "setIgnoreOff",
          "normalized": "T()",
          "package": "alsa-seq",
          "partial": "Ignore Off",
          "signature": "T()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-RemoveMonad.html#v:setIgnoreOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll events in the local input buffer are removed.\nThe conditions are not checked for these events.\nThis is equivalent to \u003ccode\u003e\u003ca\u003edropInputBuffer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "setInput",
          "package": "alsa-seq",
          "signature": "T ()",
          "source": "src/Sound-ALSA-Sequencer-Event-RemoveMonad.html#setInput",
          "type": "function"
        },
        "index": {
          "description": "All events in the local input buffer are removed The conditions are not checked for these events This is equivalent to dropInputBuffer",
          "hierarchy": "Sound ALSA Sequencer Event RemoveMonad",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "setInput",
          "normalized": "T()",
          "package": "alsa-seq",
          "partial": "Input",
          "signature": "T()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-RemoveMonad.html#v:setInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatching events in the local output buffer are removed, too.\nMatching events in the kernel buffer are removed in any case.\nIf there are no further conditions,\nthen this is equivalent to \u003ccode\u003e\u003ca\u003edropOutputBuffer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "setOutput",
          "package": "alsa-seq",
          "signature": "T ()",
          "source": "src/Sound-ALSA-Sequencer-Event-RemoveMonad.html#setOutput",
          "type": "function"
        },
        "index": {
          "description": "Matching events in the local output buffer are removed too Matching events in the kernel buffer are removed in any case If there are no further conditions then this is equivalent to dropOutputBuffer",
          "hierarchy": "Sound ALSA Sequencer Event RemoveMonad",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "setOutput",
          "normalized": "T()",
          "package": "alsa-seq",
          "partial": "Output",
          "signature": "T()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-RemoveMonad.html#v:setOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "setTag",
          "package": "alsa-seq",
          "signature": "Tag -\u003e T ()",
          "source": "src/Sound-ALSA-Sequencer-Event-RemoveMonad.html#setTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event RemoveMonad",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "setTag",
          "normalized": "Tag-\u003eT()",
          "package": "alsa-seq",
          "partial": "Tag",
          "signature": "Tag-\u003eT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-RemoveMonad.html#v:setTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "setTime",
          "package": "alsa-seq",
          "signature": "Ordering -\u003e Stamp -\u003e T ()",
          "source": "src/Sound-ALSA-Sequencer-Event-RemoveMonad.html#setTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event RemoveMonad",
          "module": "Sound.ALSA.Sequencer.Event.RemoveMonad",
          "name": "setTime",
          "normalized": "Ordering-\u003eStamp-\u003eT()",
          "package": "alsa-seq",
          "partial": "Time",
          "signature": "Ordering-\u003eStamp-\u003eT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event-RemoveMonad.html#v:setTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains functions for working with events.\n Reference:\n \u003ca\u003ehttp://www.alsa-project.org/alsa-doc/alsa-lib/group___seq_event.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Event",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Event.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains functions for working with events Reference http www.alsa-project.org alsa-doc alsa-lib group seq event.html",
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Event",
          "package": "alsa-seq",
          "partial": "Event",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "AddrEv",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#AddrEv",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "AddrEv",
          "package": "alsa-seq",
          "partial": "Addr Ev",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#t:AddrEv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Channel",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Channel",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Channel",
          "package": "alsa-seq",
          "partial": "Channel",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#t:Channel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "ConnEv",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#ConnEv",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "ConnEv",
          "package": "alsa-seq",
          "partial": "Conn Ev",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#t:ConnEv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Ctrl",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Ctrl",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Ctrl",
          "package": "alsa-seq",
          "partial": "Ctrl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#t:Ctrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "CtrlEv",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#CtrlEv",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "CtrlEv",
          "package": "alsa-seq",
          "partial": "Ctrl Ev",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#t:CtrlEv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Custom",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Custom",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Custom",
          "package": "alsa-seq",
          "partial": "Custom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#t:Custom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "CustomEv",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#CustomEv",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "CustomEv",
          "package": "alsa-seq",
          "partial": "Custom Ev",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#t:CustomEv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Data",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Data",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Data",
          "package": "alsa-seq",
          "partial": "Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#t:Data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Duration",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Duration",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Duration",
          "package": "alsa-seq",
          "partial": "Duration",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#t:Duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "EmptyEv",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#EmptyEv",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "EmptyEv",
          "package": "alsa-seq",
          "partial": "Empty Ev",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#t:EmptyEv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "ExtEv",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#ExtEv",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "ExtEv",
          "package": "alsa-seq",
          "partial": "Ext Ev",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#t:ExtEv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Note",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Note",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Note",
          "package": "alsa-seq",
          "partial": "Note",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#t:Note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "NoteEv",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#NoteEv",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "NoteEv",
          "package": "alsa-seq",
          "partial": "Note Ev",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#t:NoteEv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Parameter",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Parameter",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Parameter",
          "package": "alsa-seq",
          "partial": "Parameter",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#t:Parameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Pitch",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Pitch",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Pitch",
          "package": "alsa-seq",
          "partial": "Pitch",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#t:Pitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "QueueEv",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#QueueEv",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "QueueEv",
          "package": "alsa-seq",
          "partial": "Queue Ev",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#t:QueueEv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "T",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "T",
          "package": "alsa-seq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Tag",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Tag",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Tag",
          "package": "alsa-seq",
          "partial": "Tag",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#t:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Tempo",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Tempo",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Tempo",
          "package": "alsa-seq",
          "partial": "Tempo",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#t:Tempo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Type",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Type",
          "type": "class"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Type",
          "package": "alsa-seq",
          "partial": "Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Value",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Value",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Value",
          "package": "alsa-seq",
          "partial": "Value",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Velocity",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Velocity",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Velocity",
          "package": "alsa-seq",
          "partial": "Velocity",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#t:Velocity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "ANote",
          "package": "alsa-seq",
          "signature": "ANote",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#NoteEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "ANote",
          "package": "alsa-seq",
          "partial": "ANote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:ANote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "AddrEv",
          "package": "alsa-seq",
          "signature": "AddrEv AddrEv T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "AddrEv",
          "package": "alsa-seq",
          "partial": "Addr Ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:AddrEv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Bounce",
          "package": "alsa-seq",
          "signature": "Bounce",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#ExtEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Bounce",
          "package": "alsa-seq",
          "partial": "Bounce",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:Bounce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "ChanPress",
          "package": "alsa-seq",
          "signature": "ChanPress",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#CtrlEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "ChanPress",
          "package": "alsa-seq",
          "partial": "Chan Press",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:ChanPress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Channel",
          "package": "alsa-seq",
          "signature": "Channel",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Channel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Channel",
          "package": "alsa-seq",
          "partial": "Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:Channel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "ClientChange",
          "package": "alsa-seq",
          "signature": "ClientChange",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#AddrEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "ClientChange",
          "package": "alsa-seq",
          "partial": "Client Change",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:ClientChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "ClientExit",
          "package": "alsa-seq",
          "signature": "ClientExit",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#AddrEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "ClientExit",
          "package": "alsa-seq",
          "partial": "Client Exit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:ClientExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "ClientStart",
          "package": "alsa-seq",
          "signature": "ClientStart",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#AddrEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "ClientStart",
          "package": "alsa-seq",
          "partial": "Client Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:ClientStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "ConnEv",
          "package": "alsa-seq",
          "signature": "ConnEv ConnEv T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "ConnEv",
          "package": "alsa-seq",
          "partial": "Conn Ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:ConnEv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Cons",
          "package": "alsa-seq",
          "signature": "Cons",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Cons",
          "package": "alsa-seq",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Control14",
          "package": "alsa-seq",
          "signature": "Control14",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#CtrlEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Control14",
          "package": "alsa-seq",
          "partial": "Control",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:Control14"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Controller",
          "package": "alsa-seq",
          "signature": "Controller",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#CtrlEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Controller",
          "package": "alsa-seq",
          "partial": "Controller",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:Controller"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Ctrl",
          "package": "alsa-seq",
          "signature": "Ctrl",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Ctrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Ctrl",
          "package": "alsa-seq",
          "partial": "Ctrl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:Ctrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "CtrlEv",
          "package": "alsa-seq",
          "signature": "CtrlEv CtrlEv Ctrl",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "CtrlEv",
          "package": "alsa-seq",
          "partial": "Ctrl Ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:CtrlEv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Custom",
          "package": "alsa-seq",
          "signature": "Custom",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Custom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Custom",
          "package": "alsa-seq",
          "partial": "Custom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:Custom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "CustomEv",
          "package": "alsa-seq",
          "signature": "CustomEv CustomEv Custom",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "CustomEv",
          "package": "alsa-seq",
          "partial": "Custom Ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:CustomEv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Duration",
          "package": "alsa-seq",
          "signature": "Duration",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Duration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Duration",
          "package": "alsa-seq",
          "partial": "Duration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:Duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Echo",
          "package": "alsa-seq",
          "signature": "Echo",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#CustomEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Echo",
          "package": "alsa-seq",
          "partial": "Echo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:Echo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "EmptyEv",
          "package": "alsa-seq",
          "signature": "EmptyEv EmptyEv",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "EmptyEv",
          "package": "alsa-seq",
          "partial": "Empty Ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:EmptyEv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "ExtEv",
          "package": "alsa-seq",
          "signature": "ExtEv ExtEv ByteString",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "ExtEv",
          "package": "alsa-seq",
          "partial": "Ext Ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:ExtEv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "KeyPress",
          "package": "alsa-seq",
          "signature": "KeyPress",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#NoteEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "KeyPress",
          "package": "alsa-seq",
          "partial": "Key Press",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:KeyPress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "KeySign",
          "package": "alsa-seq",
          "signature": "KeySign",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#CtrlEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "KeySign",
          "package": "alsa-seq",
          "partial": "Key Sign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:KeySign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "NonRegParam",
          "package": "alsa-seq",
          "signature": "NonRegParam",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#CtrlEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "NonRegParam",
          "package": "alsa-seq",
          "partial": "Non Reg Param",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:NonRegParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "None",
          "package": "alsa-seq",
          "signature": "None",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#EmptyEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "None",
          "package": "alsa-seq",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:None"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Note",
          "package": "alsa-seq",
          "signature": "Note",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Note",
          "package": "alsa-seq",
          "partial": "Note",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:Note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "NoteEv",
          "package": "alsa-seq",
          "signature": "NoteEv NoteEv Note",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "NoteEv",
          "package": "alsa-seq",
          "partial": "Note Ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:NoteEv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "NoteOff",
          "package": "alsa-seq",
          "signature": "NoteOff",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#NoteEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "NoteOff",
          "package": "alsa-seq",
          "partial": "Note Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:NoteOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "NoteOn",
          "package": "alsa-seq",
          "signature": "NoteOn",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#NoteEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "NoteOn",
          "package": "alsa-seq",
          "partial": "Note On",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:NoteOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "OSS",
          "package": "alsa-seq",
          "signature": "OSS",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#CustomEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "OSS",
          "package": "alsa-seq",
          "partial": "OSS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:OSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Parameter",
          "package": "alsa-seq",
          "signature": "Parameter",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Parameter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Parameter",
          "package": "alsa-seq",
          "partial": "Parameter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:Parameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "PgmChange",
          "package": "alsa-seq",
          "signature": "PgmChange",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#CtrlEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "PgmChange",
          "package": "alsa-seq",
          "partial": "Pgm Change",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:PgmChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Pitch",
          "package": "alsa-seq",
          "signature": "Pitch",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Pitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Pitch",
          "package": "alsa-seq",
          "partial": "Pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:Pitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "PitchBend",
          "package": "alsa-seq",
          "signature": "PitchBend",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#CtrlEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "PitchBend",
          "package": "alsa-seq",
          "partial": "Pitch Bend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:PitchBend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "PortChange",
          "package": "alsa-seq",
          "signature": "PortChange",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#AddrEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "PortChange",
          "package": "alsa-seq",
          "partial": "Port Change",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:PortChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "PortExit",
          "package": "alsa-seq",
          "signature": "PortExit",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#AddrEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "PortExit",
          "package": "alsa-seq",
          "partial": "Port Exit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:PortExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "PortStart",
          "package": "alsa-seq",
          "signature": "PortStart",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#AddrEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "PortStart",
          "package": "alsa-seq",
          "partial": "Port Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:PortStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "PortSubscribed",
          "package": "alsa-seq",
          "signature": "PortSubscribed",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#ConnEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "PortSubscribed",
          "package": "alsa-seq",
          "partial": "Port Subscribed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:PortSubscribed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "PortUnsubscribed",
          "package": "alsa-seq",
          "signature": "PortUnsubscribed",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#ConnEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "PortUnsubscribed",
          "package": "alsa-seq",
          "partial": "Port Unsubscribed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:PortUnsubscribed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "QFrame",
          "package": "alsa-seq",
          "signature": "QFrame",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#CtrlEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "QFrame",
          "package": "alsa-seq",
          "partial": "QFrame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:QFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "QueueClock",
          "package": "alsa-seq",
          "signature": "QueueClock",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#QueueEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "QueueClock",
          "package": "alsa-seq",
          "partial": "Queue Clock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:QueueClock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "QueueContinue",
          "package": "alsa-seq",
          "signature": "QueueContinue",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#QueueEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "QueueContinue",
          "package": "alsa-seq",
          "partial": "Queue Continue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:QueueContinue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "QueueEv",
          "package": "alsa-seq",
          "signature": "QueueEv QueueEv T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "QueueEv",
          "package": "alsa-seq",
          "partial": "Queue Ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:QueueEv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "QueueSetPosTick",
          "package": "alsa-seq",
          "signature": "QueueSetPosTick !Tick",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#QueueEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "QueueSetPosTick",
          "package": "alsa-seq",
          "partial": "Queue Set Pos Tick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:QueueSetPosTick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "QueueSetPosTime",
          "package": "alsa-seq",
          "signature": "QueueSetPosTime !T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#QueueEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "QueueSetPosTime",
          "package": "alsa-seq",
          "partial": "Queue Set Pos Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:QueueSetPosTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "QueueSkew",
          "package": "alsa-seq",
          "signature": "QueueSkew !Skew",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#QueueEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "QueueSkew",
          "package": "alsa-seq",
          "partial": "Queue Skew",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:QueueSkew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "QueueStart",
          "package": "alsa-seq",
          "signature": "QueueStart",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#QueueEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "QueueStart",
          "package": "alsa-seq",
          "partial": "Queue Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:QueueStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "QueueStop",
          "package": "alsa-seq",
          "signature": "QueueStop",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#QueueEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "QueueStop",
          "package": "alsa-seq",
          "partial": "Queue Stop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:QueueStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "QueueSyncPos",
          "package": "alsa-seq",
          "signature": "QueueSyncPos !Position",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#QueueEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "QueueSyncPos",
          "package": "alsa-seq",
          "partial": "Queue Sync Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:QueueSyncPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "QueueTempo",
          "package": "alsa-seq",
          "signature": "QueueTempo !Tempo",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#QueueEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "QueueTempo",
          "package": "alsa-seq",
          "partial": "Queue Tempo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:QueueTempo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "QueueTick",
          "package": "alsa-seq",
          "signature": "QueueTick",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#QueueEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "QueueTick",
          "package": "alsa-seq",
          "partial": "Queue Tick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:QueueTick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "RegParam",
          "package": "alsa-seq",
          "signature": "RegParam",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#CtrlEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "RegParam",
          "package": "alsa-seq",
          "partial": "Reg Param",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:RegParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Reset",
          "package": "alsa-seq",
          "signature": "Reset",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#EmptyEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Reset",
          "package": "alsa-seq",
          "partial": "Reset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:Reset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Sensing",
          "package": "alsa-seq",
          "signature": "Sensing",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#EmptyEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Sensing",
          "package": "alsa-seq",
          "partial": "Sensing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:Sensing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "SongPos",
          "package": "alsa-seq",
          "signature": "SongPos",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#CtrlEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "SongPos",
          "package": "alsa-seq",
          "partial": "Song Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:SongPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "SongSel",
          "package": "alsa-seq",
          "signature": "SongSel",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#CtrlEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "SongSel",
          "package": "alsa-seq",
          "partial": "Song Sel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:SongSel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "SysEx",
          "package": "alsa-seq",
          "signature": "SysEx",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#ExtEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "SysEx",
          "package": "alsa-seq",
          "partial": "Sys Ex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:SysEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Tag",
          "package": "alsa-seq",
          "signature": "Tag",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Tag",
          "package": "alsa-seq",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Tempo",
          "package": "alsa-seq",
          "signature": "Tempo",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Tempo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Tempo",
          "package": "alsa-seq",
          "partial": "Tempo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:Tempo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "TimeSign",
          "package": "alsa-seq",
          "signature": "TimeSign",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#CtrlEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "TimeSign",
          "package": "alsa-seq",
          "partial": "Time Sign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:TimeSign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "TuneRequest",
          "package": "alsa-seq",
          "signature": "TuneRequest",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#EmptyEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "TuneRequest",
          "package": "alsa-seq",
          "partial": "Tune Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:TuneRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Unknown",
          "package": "alsa-seq",
          "signature": "Unknown",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#EmptyEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Unknown",
          "package": "alsa-seq",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "User0",
          "package": "alsa-seq",
          "signature": "User0",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#CustomEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "User0",
          "package": "alsa-seq",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:User0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "User1",
          "package": "alsa-seq",
          "signature": "User1",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#CustomEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "User1",
          "package": "alsa-seq",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:User1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "User2",
          "package": "alsa-seq",
          "signature": "User2",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#CustomEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "User2",
          "package": "alsa-seq",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:User2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "User3",
          "package": "alsa-seq",
          "signature": "User3",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#CustomEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "User3",
          "package": "alsa-seq",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:User3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "User4",
          "package": "alsa-seq",
          "signature": "User4",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#CustomEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "User4",
          "package": "alsa-seq",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:User4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "User5",
          "package": "alsa-seq",
          "signature": "User5",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#CustomEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "User5",
          "package": "alsa-seq",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:User5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "User6",
          "package": "alsa-seq",
          "signature": "User6",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#CustomEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "User6",
          "package": "alsa-seq",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:User6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "User7",
          "package": "alsa-seq",
          "signature": "User7",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#CustomEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "User7",
          "package": "alsa-seq",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:User7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "User8",
          "package": "alsa-seq",
          "signature": "User8",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#CustomEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "User8",
          "package": "alsa-seq",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:User8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "User9",
          "package": "alsa-seq",
          "signature": "User9",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#CustomEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "User9",
          "package": "alsa-seq",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:User9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "UserVar0",
          "package": "alsa-seq",
          "signature": "UserVar0",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#ExtEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "UserVar0",
          "package": "alsa-seq",
          "partial": "User Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:UserVar0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "UserVar1",
          "package": "alsa-seq",
          "signature": "UserVar1",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#ExtEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "UserVar1",
          "package": "alsa-seq",
          "partial": "User Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:UserVar1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "UserVar2",
          "package": "alsa-seq",
          "signature": "UserVar2",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#ExtEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "UserVar2",
          "package": "alsa-seq",
          "partial": "User Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:UserVar2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "UserVar3",
          "package": "alsa-seq",
          "signature": "UserVar3",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#ExtEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "UserVar3",
          "package": "alsa-seq",
          "partial": "User Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:UserVar3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "UserVar4",
          "package": "alsa-seq",
          "signature": "UserVar4",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#ExtEv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "UserVar4",
          "package": "alsa-seq",
          "partial": "User Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:UserVar4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Value",
          "package": "alsa-seq",
          "signature": "Value",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Value",
          "package": "alsa-seq",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Velocity",
          "package": "alsa-seq",
          "signature": "Velocity",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Velocity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "Velocity",
          "package": "alsa-seq",
          "partial": "Velocity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:Velocity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "body",
          "package": "alsa-seq",
          "signature": "Data",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "body",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "ctrlChannel",
          "package": "alsa-seq",
          "signature": "Channel",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Ctrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "ctrlChannel",
          "package": "alsa-seq",
          "partial": "Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:ctrlChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "ctrlParam",
          "package": "alsa-seq",
          "signature": "Parameter",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Ctrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "ctrlParam",
          "package": "alsa-seq",
          "partial": "Param",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:ctrlParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "ctrlValue",
          "package": "alsa-seq",
          "signature": "Value",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Ctrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "ctrlValue",
          "package": "alsa-seq",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:ctrlValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "custom0",
          "package": "alsa-seq",
          "signature": "Word32",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Custom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "custom0",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:custom0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "custom1",
          "package": "alsa-seq",
          "signature": "Word32",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Custom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "custom1",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:custom1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "custom2",
          "package": "alsa-seq",
          "signature": "Word32",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Custom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "custom2",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:custom2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "customZero",
          "package": "alsa-seq",
          "signature": "Custom",
          "source": "src/Sound-ALSA-Sequencer-Event.html#customZero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "customZero",
          "package": "alsa-seq",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:customZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "dest",
          "package": "alsa-seq",
          "signature": "T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "dest",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:dest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrain output buffer to sequencer.\n This function drains all pending events on the output buffer.\n The function returns immediately after the events are sent to the queues\n regardless whether the events are processed or not.\n To get synchronization with the all event processes,\n use \u003ccode\u003e\u003ca\u003esyncOutputQueue\u003c/a\u003e\u003c/code\u003e after calling this function.\n Throws an exception on error.\n See also: \u003ccode\u003e\u003ca\u003eoutput\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esyncOutputQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "drainOutput",
          "package": "alsa-seq",
          "signature": "T mode-\u003e IO Word",
          "type": "function"
        },
        "index": {
          "description": "Drain output buffer to sequencer This function drains all pending events on the output buffer The function returns immediately after the events are sent to the queues regardless whether the events are processed or not To get synchronization with the all event processes use syncOutputQueue after calling this function Throws an exception on error See also output syncOutputQueue",
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "drainOutput",
          "normalized": "T a-\u003eIO Word",
          "package": "alsa-seq",
          "partial": "Output",
          "signature": "T mode-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:drainOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove events from both the user-space input buffer,\n and the kernel-space sequencer queue.\n See also: \u003ccode\u003e\u003ca\u003edropInputBuffer\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eremoveOutput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "dropInput",
          "package": "alsa-seq",
          "signature": "T mode -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Event.html#dropInput",
          "type": "function"
        },
        "index": {
          "description": "Remove events from both the user-space input buffer and the kernel-space sequencer queue See also dropInputBuffer removeOutput",
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "dropInput",
          "normalized": "T a-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Input",
          "signature": "T mode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:dropInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove events from the user-space input buffer.\n See also: \u003ccode\u003e\u003ca\u003edropInput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "dropInputBuffer",
          "package": "alsa-seq",
          "signature": "T mode -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Event.html#dropInputBuffer",
          "type": "function"
        },
        "index": {
          "description": "Remove events from the user-space input buffer See also dropInput",
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "dropInputBuffer",
          "normalized": "T a-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Input Buffer",
          "signature": "T mode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:dropInputBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove events from both the user-space output buffer,\n and the kernel-space sequencer queue.\n See also: \u003ccode\u003e\u003ca\u003edrainOutput\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edropOutputBuffer\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eremoveOutput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "dropOutput",
          "package": "alsa-seq",
          "signature": "T mode -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Event.html#dropOutput",
          "type": "function"
        },
        "index": {
          "description": "Remove events from both the user-space output buffer and the kernel-space sequencer queue See also drainOutput dropOutputBuffer removeOutput",
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "dropOutput",
          "normalized": "T a-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Output",
          "signature": "T mode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:dropOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove events from the user-space output buffer.\n See also: \u003ccode\u003e\u003ca\u003edropOutput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "dropOutputBuffer",
          "package": "alsa-seq",
          "signature": "T mode -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Event.html#dropOutputBuffer",
          "type": "function"
        },
        "index": {
          "description": "Remove events from the user-space output buffer See also dropOutput",
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "dropOutputBuffer",
          "normalized": "T a-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Output Buffer",
          "signature": "T mode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:dropOutputBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the first event in output buffer.\n Throws \u003ccode\u003e(Errno 2)\u003c/code\u003e exception if output buffer is empty.\n See also \u003ccode\u003e\u003ca\u003eoutput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "extractOutput",
          "package": "alsa-seq",
          "signature": "T mode-\u003e IO T",
          "type": "function"
        },
        "index": {
          "description": "Extract the first event in output buffer Throws Errno exception if output buffer is empty See also output",
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "extractOutput",
          "normalized": "T a-\u003eIO T",
          "package": "alsa-seq",
          "partial": "Output",
          "signature": "T mode-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:extractOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "forConnection",
          "package": "alsa-seq",
          "signature": "T -\u003e Data -\u003e T",
          "source": "src/Sound-ALSA-Sequencer-Event.html#forConnection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "forConnection",
          "normalized": "T-\u003eData-\u003eT",
          "package": "alsa-seq",
          "partial": "Connection",
          "signature": "T-\u003eData-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:forConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "forSourcePort",
          "package": "alsa-seq",
          "signature": "T -\u003e Data -\u003e T",
          "source": "src/Sound-ALSA-Sequencer-Event.html#forSourcePort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "forSourcePort",
          "normalized": "T-\u003eData-\u003eT",
          "package": "alsa-seq",
          "partial": "Source Port",
          "signature": "T-\u003eData-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:forSourcePort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "highPriority",
          "package": "alsa-seq",
          "signature": "Bool",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "highPriority",
          "package": "alsa-seq",
          "partial": "Priority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:highPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an event from the input buffer.\n If the input buffer is empty, then it is filled with data from the\n sequencer queue.  If there is no data in the sequencer queue,\n then the process is either put to sleep (if the sequencer is operating\n in blocking mode), or we throw \u003ccode\u003eEAGAIN\u003c/code\u003e (if the sequence is operating\n in non-blocking mode).\n\u003c/p\u003e\u003cp\u003eWe may also throw \u003ccode\u003eENOSPC\u003c/code\u003e, which means that the sequencer queue\n over-run and some events were lost (this clears the input buffer).\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "input",
          "package": "alsa-seq",
          "signature": "T mode -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Event.html#input",
          "type": "function"
        },
        "index": {
          "description": "Get an event from the input buffer If the input buffer is empty then it is filled with data from the sequencer queue If there is no data in the sequencer queue then the process is either put to sleep if the sequencer is operating in blocking mode or we throw EAGAIN if the sequence is operating in non-blocking mode We may also throw ENOSPC which means that the sequencer queue over-run and some events were lost this clears the input buffer",
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "input",
          "normalized": "T a-\u003eIO T",
          "package": "alsa-seq",
          "signature": "T mode-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of events in the input buffer.\n If the input buffer is empty and the boolean argument is true,\n then try to fill the input buffer with data from the sequencer queue.\n See also: \u003ccode\u003e\u003ca\u003einput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "inputPending",
          "package": "alsa-seq",
          "signature": "T mode-\u003e Bool-\u003e IO Word",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of events in the input buffer If the input buffer is empty and the boolean argument is true then try to fill the input buffer with data from the sequencer queue See also input",
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "inputPending",
          "normalized": "T a-\u003eBool-\u003eIO Word",
          "package": "alsa-seq",
          "partial": "Pending",
          "signature": "T mode-\u003eBool-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:inputPending"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "normalVelocity",
          "package": "alsa-seq",
          "signature": "Velocity",
          "source": "src/Sound-ALSA-Sequencer-Event.html#normalVelocity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "normalVelocity",
          "package": "alsa-seq",
          "partial": "Velocity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:normalVelocity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "noteChannel",
          "package": "alsa-seq",
          "signature": "Channel",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "noteChannel",
          "package": "alsa-seq",
          "partial": "Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:noteChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "noteDuration",
          "package": "alsa-seq",
          "signature": "Duration",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "noteDuration",
          "package": "alsa-seq",
          "partial": "Duration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:noteDuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "noteNote",
          "package": "alsa-seq",
          "signature": "Pitch",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "noteNote",
          "package": "alsa-seq",
          "partial": "Note",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:noteNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "noteOffVelocity",
          "package": "alsa-seq",
          "signature": "Velocity",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "noteOffVelocity",
          "package": "alsa-seq",
          "partial": "Off Velocity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:noteOffVelocity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "noteVelocity",
          "package": "alsa-seq",
          "signature": "Velocity",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "noteVelocity",
          "package": "alsa-seq",
          "partial": "Velocity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:noteVelocity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "offVelocity",
          "package": "alsa-seq",
          "signature": "Velocity",
          "source": "src/Sound-ALSA-Sequencer-Event.html#offVelocity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "offVelocity",
          "package": "alsa-seq",
          "partial": "Velocity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:offVelocity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput an event and drain the buffer, if it became full.\n Throws exceptions.\n See also: \u003ccode\u003e\u003ca\u003eoutputDirect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eoutputBuffer\u003c/a\u003e\u003c/code\u003e,\n           \u003ccode\u003e\u003ca\u003eoutputPending\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edrainOutput\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edropOutput\u003c/a\u003e\u003c/code\u003e,\n           \u003ccode\u003e\u003ca\u003eextractOutput\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eremoveOutput\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "output",
          "package": "alsa-seq",
          "signature": "T mode-\u003e T-\u003e IO Word",
          "type": "function"
        },
        "index": {
          "description": "Output an event and drain the buffer if it became full Throws exceptions See also outputDirect outputBuffer outputPending drainOutput dropOutput extractOutput removeOutput",
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "output",
          "normalized": "T a-\u003eT-\u003eIO Word",
          "package": "alsa-seq",
          "signature": "T mode-\u003eT-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput an event without draining the buffer.\n Throws \u003ccode\u003e-EAGAIN\u003c/code\u003e if the buffer becomes full.\n See also \u003ccode\u003e\u003ca\u003eoutput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "outputBuffer",
          "package": "alsa-seq",
          "signature": "T mode-\u003e T-\u003e IO Word",
          "type": "function"
        },
        "index": {
          "description": "Output an event without draining the buffer Throws EAGAIN if the buffer becomes full See also output",
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "outputBuffer",
          "normalized": "T a-\u003eT-\u003eIO Word",
          "package": "alsa-seq",
          "partial": "Buffer",
          "signature": "T mode-\u003eT-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:outputBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput an event directly to the sequencer, NOT through the output buffer.\n If an error occurs, then we throw an exception.\n See also \u003ccode\u003e\u003ca\u003eoutput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "outputDirect",
          "package": "alsa-seq",
          "signature": "T mode-\u003e T-\u003e IO Word",
          "type": "function"
        },
        "index": {
          "description": "Output an event directly to the sequencer NOT through the output buffer If an error occurs then we throw an exception See also output",
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "outputDirect",
          "normalized": "T a-\u003eT-\u003eIO Word",
          "package": "alsa-seq",
          "partial": "Direct",
          "signature": "T mode-\u003eT-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:outputDirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the size (in bytes) of pending events on output buffer.\n See also \u003ccode\u003e\u003ca\u003eoutput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "outputPending",
          "package": "alsa-seq",
          "signature": "T mode-\u003e IO Word",
          "type": "function"
        },
        "index": {
          "description": "Return the size in bytes of pending events on output buffer See also output",
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "outputPending",
          "normalized": "T a-\u003eIO Word",
          "package": "alsa-seq",
          "partial": "Pending",
          "signature": "T mode-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:outputPending"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "queue",
          "package": "alsa-seq",
          "signature": "T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "queue",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:queue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the first event in output buffer.\n Throws an exception on error.\n See also \u003ccode\u003e\u003ca\u003eoutput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "removeOutput",
          "package": "alsa-seq",
          "signature": "T mode -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Event.html#removeOutput",
          "type": "function"
        },
        "index": {
          "description": "Remove the first event in output buffer Throws an exception on error See also output",
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "removeOutput",
          "normalized": "T a-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Output",
          "signature": "T mode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:removeOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an ALSA sequencer event from very few information.\nMost fields are initialized with sensible defaults.\nYou may use this as a start and alter its fields for your special needs.\n\u003c/p\u003e\u003cpre\u003e (Event.simple myAddr (Event.simpleNote (Event.Channel 0) (Event.Pitch 60) Event.normalVelocity)) {Event.dest = destAddr}\n\u003c/pre\u003e",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "simple",
          "package": "alsa-seq",
          "signature": "T -\u003e Data -\u003e T",
          "source": "src/Sound-ALSA-Sequencer-Event.html#simple",
          "type": "function"
        },
        "index": {
          "description": "Construct an ALSA sequencer event from very few information Most fields are initialized with sensible defaults You may use this as start and alter its fields for your special needs Event.simple myAddr Event.simpleNote Event.Channel Event.Pitch Event.normalVelocity Event.dest destAddr",
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "simple",
          "normalized": "T-\u003eData-\u003eT",
          "package": "alsa-seq",
          "signature": "T-\u003eData-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:simple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a note whose unspecified fields contain 0.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "simpleNote",
          "package": "alsa-seq",
          "signature": "Channel -\u003e Pitch -\u003e Velocity -\u003e Note",
          "source": "src/Sound-ALSA-Sequencer-Event.html#simpleNote",
          "type": "function"
        },
        "index": {
          "description": "Make note whose unspecified fields contain",
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "simpleNote",
          "normalized": "Channel-\u003ePitch-\u003eVelocity-\u003eNote",
          "package": "alsa-seq",
          "partial": "Note",
          "signature": "Channel-\u003ePitch-\u003eVelocity-\u003eNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:simpleNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "source",
          "package": "alsa-seq",
          "signature": "T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "source",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait until all events of the client are processed.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "syncOutputQueue",
          "package": "alsa-seq",
          "signature": "T mode -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Event.html#syncOutputQueue",
          "type": "function"
        },
        "index": {
          "description": "Wait until all events of the client are processed",
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "syncOutputQueue",
          "normalized": "T a-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Output Queue",
          "signature": "T mode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:syncOutputQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "tag",
          "package": "alsa-seq",
          "signature": "Tag",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "tag",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "time",
          "package": "alsa-seq",
          "signature": "T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "time",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "unChannel",
          "package": "alsa-seq",
          "signature": "Word8",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Channel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "unChannel",
          "package": "alsa-seq",
          "partial": "Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:unChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "unDuration",
          "package": "alsa-seq",
          "signature": "Word32",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Duration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "unDuration",
          "package": "alsa-seq",
          "partial": "Duration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:unDuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "unParameter",
          "package": "alsa-seq",
          "signature": "Word32",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Parameter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "unParameter",
          "package": "alsa-seq",
          "partial": "Parameter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:unParameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "unPitch",
          "package": "alsa-seq",
          "signature": "Word8",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Pitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "unPitch",
          "package": "alsa-seq",
          "partial": "Pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:unPitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "unTag",
          "package": "alsa-seq",
          "signature": "Word8",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "unTag",
          "package": "alsa-seq",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:unTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "unTempo",
          "package": "alsa-seq",
          "signature": "Int32",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Tempo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "unTempo",
          "package": "alsa-seq",
          "partial": "Tempo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:unTempo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "unValue",
          "package": "alsa-seq",
          "signature": "Int32",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "unValue",
          "package": "alsa-seq",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:unValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "unVelocity",
          "package": "alsa-seq",
          "signature": "Word8",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Event.html#Velocity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Event",
          "module": "Sound.ALSA.Sequencer.Event",
          "name": "unVelocity",
          "package": "alsa-seq",
          "partial": "Velocity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Event.html#v:unVelocity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Poll",
          "name": "Poll",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Poll.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Poll",
          "module": "Sound.ALSA.Sequencer.Poll",
          "name": "Poll",
          "package": "alsa-seq",
          "partial": "Poll",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Poll.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Poll",
          "name": "descriptors",
          "package": "alsa-seq",
          "signature": "T mode -\u003e Events -\u003e IO [Fd]",
          "source": "src/Sound-ALSA-Sequencer-Poll.html#descriptors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Poll",
          "module": "Sound.ALSA.Sequencer.Poll",
          "name": "descriptors",
          "normalized": "T a-\u003eEvents-\u003eIO[Fd]",
          "package": "alsa-seq",
          "signature": "T mode-\u003eEvents-\u003eIO[Fd]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Poll.html#v:descriptors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains functions for working with ports.\n Reference:\n \u003ca\u003ehttp://www.alsa-project.org/alsa-doc/alsa-lib/group___seq_port.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "Info",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Port-Info.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains functions for working with ports Reference http www.alsa-project.org alsa-doc alsa-lib group seq port.html",
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "Info",
          "package": "alsa-seq",
          "partial": "Info",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "T",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "T",
          "package": "alsa-seq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "clone",
          "package": "alsa-seq",
          "signature": "T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#clone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "clone",
          "normalized": "T-\u003eIO T",
          "package": "alsa-seq",
          "signature": "T-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:clone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Sound.ALSA.Sequencer.Port.Info\",\"Sound.ALSA.Sequencer.Queue.Info\",\"Sound.ALSA.Sequencer.Queue.Tempo\",\"Sound.ALSA.Sequencer.Queue.Timer\",\"Sound.ALSA.Sequencer.Subscribe.Query\",\"Sound.ALSA.Sequencer.Subscribe\"]",
          "name": "copy",
          "package": "alsa-seq",
          "signature": "T-\u003e T-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:copy\",\"http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Info.html#v:copy\",\"http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Tempo.html#v:copy\",\"http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Timer.html#v:copy\",\"http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe-Query.html#v:copy\",\"http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe.html#v:copy\"]"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "copy",
          "normalized": "T-\u003eT-\u003eIO()",
          "package": "alsa-seq",
          "signature": "T-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the information for the sequencer port\nbased on the data in the given information area.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "get",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#get",
          "type": "function"
        },
        "index": {
          "description": "Set the information for the sequencer port based on the data in the given information area",
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "get",
          "normalized": "T a-\u003eT-\u003eIO T",
          "package": "alsa-seq",
          "signature": "T mode-\u003eT-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getAddr",
          "package": "alsa-seq",
          "signature": "T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#getAddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getAddr",
          "normalized": "T-\u003eIO T",
          "package": "alsa-seq",
          "partial": "Addr",
          "signature": "T-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:getAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getAny",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#getAny",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getAny",
          "normalized": "T a-\u003eT-\u003eT-\u003eIO T",
          "package": "alsa-seq",
          "partial": "Any",
          "signature": "T mode-\u003eT-\u003eT-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:getAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getCapability",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Cap",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#getCapability",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getCapability",
          "normalized": "T-\u003eIO Cap",
          "package": "alsa-seq",
          "partial": "Capability",
          "signature": "T-\u003eIO Cap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:getCapability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getClient",
          "package": "alsa-seq",
          "signature": "T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#getClient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getClient",
          "normalized": "T-\u003eIO T",
          "package": "alsa-seq",
          "partial": "Client",
          "signature": "T-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:getClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getMidiChannels",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Word",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#getMidiChannels",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getMidiChannels",
          "normalized": "T-\u003eIO Word",
          "package": "alsa-seq",
          "partial": "Midi Channels",
          "signature": "T-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:getMidiChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getMidiVoices",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Word",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#getMidiVoices",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getMidiVoices",
          "normalized": "T-\u003eIO Word",
          "package": "alsa-seq",
          "partial": "Midi Voices",
          "signature": "T-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:getMidiVoices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getName",
          "package": "alsa-seq",
          "signature": "T -\u003e IO String",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#getName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getName",
          "normalized": "T-\u003eIO String",
          "package": "alsa-seq",
          "partial": "Name",
          "signature": "T-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:getName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getPort",
          "package": "alsa-seq",
          "signature": "T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#getPort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getPort",
          "normalized": "T-\u003eIO T",
          "package": "alsa-seq",
          "partial": "Port",
          "signature": "T-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:getPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getPortSpecified",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Bool",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#getPortSpecified",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getPortSpecified",
          "normalized": "T-\u003eIO Bool",
          "package": "alsa-seq",
          "partial": "Port Specified",
          "signature": "T-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:getPortSpecified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getReadUse",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Word",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#getReadUse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getReadUse",
          "normalized": "T-\u003eIO Word",
          "package": "alsa-seq",
          "partial": "Read Use",
          "signature": "T-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:getReadUse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the content of an object to a newly created object.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getSynthVoices",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Word",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#getSynthVoices",
          "type": "function"
        },
        "index": {
          "description": "Copy the content of an object to newly created object",
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getSynthVoices",
          "normalized": "T-\u003eIO Word",
          "package": "alsa-seq",
          "partial": "Synth Voices",
          "signature": "T-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:getSynthVoices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getTimestampQueue",
          "package": "alsa-seq",
          "signature": "T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#getTimestampQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getTimestampQueue",
          "normalized": "T-\u003eIO T",
          "package": "alsa-seq",
          "partial": "Timestamp Queue",
          "signature": "T-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:getTimestampQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getTimestampReal",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Bool",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#getTimestampReal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getTimestampReal",
          "normalized": "T-\u003eIO Bool",
          "package": "alsa-seq",
          "partial": "Timestamp Real",
          "signature": "T-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:getTimestampReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the content of one object into another.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getTimestamping",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Bool",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#getTimestamping",
          "type": "function"
        },
        "index": {
          "description": "Copy the content of one object into another",
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getTimestamping",
          "normalized": "T-\u003eIO Bool",
          "package": "alsa-seq",
          "partial": "Timestamping",
          "signature": "T-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:getTimestamping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getWriteUse",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Word",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#getWriteUse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "getWriteUse",
          "normalized": "T-\u003eIO Word",
          "package": "alsa-seq",
          "partial": "Write Use",
          "signature": "T-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:getWriteUse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet information about the first port on our client.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "queryFirst",
          "package": "alsa-seq",
          "signature": "T mode -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#queryFirst",
          "type": "function"
        },
        "index": {
          "description": "Get information about the first port on our client",
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "queryFirst",
          "normalized": "T a-\u003eIO T",
          "package": "alsa-seq",
          "partial": "First",
          "signature": "T mode-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:queryFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "queryLoop",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e (T -\u003e IO a) -\u003e IO [a]",
          "source": "src/Sound-ALSA-Sequencer-Port-Info.html#queryLoop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "queryLoop",
          "normalized": "T a-\u003eT-\u003e(T-\u003eIO b)-\u003eIO[b]",
          "package": "alsa-seq",
          "partial": "Loop",
          "signature": "T mode-\u003eT-\u003e(T-\u003eIO a)-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:queryLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "queryLoop_",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e (T -\u003e IO ()) -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Port-Info.html#queryLoop_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "queryLoop_",
          "normalized": "T a-\u003eT-\u003e(T-\u003eIO())-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Loop",
          "signature": "T mode-\u003eT-\u003e(T-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:queryLoop_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet information about the port with the next biggest identifier.\n If a matching port is found, then its information is stored in the\n given area and \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "queryNext",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e IO Bool",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#queryNext",
          "type": "function"
        },
        "index": {
          "description": "Get information about the port with the next biggest identifier If matching port is found then its information is stored in the given area and True is returned",
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "queryNext",
          "normalized": "T a-\u003eT-\u003eIO Bool",
          "package": "alsa-seq",
          "partial": "Next",
          "signature": "T mode-\u003eT-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:queryNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "set",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e T -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#set",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "set",
          "normalized": "T a-\u003eT-\u003eT-\u003eIO()",
          "package": "alsa-seq",
          "signature": "T mode-\u003eT-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "setAddr",
          "package": "alsa-seq",
          "signature": "T -\u003e T -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#setAddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "setAddr",
          "normalized": "T-\u003eT-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Addr",
          "signature": "T-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:setAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "setCapability",
          "package": "alsa-seq",
          "signature": "T -\u003e Cap -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#setCapability",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "setCapability",
          "normalized": "T-\u003eCap-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Capability",
          "signature": "T-\u003eCap-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:setCapability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "setClient",
          "package": "alsa-seq",
          "signature": "T -\u003e T -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#setClient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "setClient",
          "normalized": "T-\u003eT-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Client",
          "signature": "T-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:setClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "setMidiChannels",
          "package": "alsa-seq",
          "signature": "T -\u003e Word -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#setMidiChannels",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "setMidiChannels",
          "normalized": "T-\u003eWord-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Midi Channels",
          "signature": "T-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:setMidiChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "setMidiVoices",
          "package": "alsa-seq",
          "signature": "T -\u003e Word -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#setMidiVoices",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "setMidiVoices",
          "normalized": "T-\u003eWord-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Midi Voices",
          "signature": "T-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:setMidiVoices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "setName",
          "package": "alsa-seq",
          "signature": "T -\u003e String -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#setName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "setName",
          "normalized": "T-\u003eString-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Name",
          "signature": "T-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:setName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "setPort",
          "package": "alsa-seq",
          "signature": "T -\u003e T -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#setPort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "setPort",
          "normalized": "T-\u003eT-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Port",
          "signature": "T-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:setPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "setPortSpecified",
          "package": "alsa-seq",
          "signature": "T -\u003e Bool -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#setPortSpecified",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "setPortSpecified",
          "normalized": "T-\u003eBool-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Port Specified",
          "signature": "T-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:setPortSpecified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "setSynthVoices",
          "package": "alsa-seq",
          "signature": "T -\u003e Word -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#setSynthVoices",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "setSynthVoices",
          "normalized": "T-\u003eWord-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Synth Voices",
          "signature": "T-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:setSynthVoices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the port address.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "setTimestampQueue",
          "package": "alsa-seq",
          "signature": "T -\u003e T -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#setTimestampQueue",
          "type": "function"
        },
        "index": {
          "description": "Set the port address",
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "setTimestampQueue",
          "normalized": "T-\u003eT-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Timestamp Queue",
          "signature": "T-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:setTimestampQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "setTimestampReal",
          "package": "alsa-seq",
          "signature": "T -\u003e Bool -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#setTimestampReal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "setTimestampReal",
          "normalized": "T-\u003eBool-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Timestamp Real",
          "signature": "T-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:setTimestampReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "setTimestamping",
          "package": "alsa-seq",
          "signature": "T -\u003e Bool -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Marshal-PortInfo.html#setTimestamping",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port Info",
          "module": "Sound.ALSA.Sequencer.Port.Info",
          "name": "setTimestamping",
          "normalized": "T-\u003eBool-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Timestamping",
          "signature": "T-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-Info.html#v:setTimestamping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains functions for working with ports.\n Reference:\n \u003ca\u003ehttp://www.alsa-project.org/alsa-doc/alsa-lib/group___seq_port.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "InfoMonad",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains functions for working with ports Reference http www.alsa-project.org alsa-doc alsa-lib group seq port.html",
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "InfoMonad",
          "package": "alsa-seq",
          "partial": "Info Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "T",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "T",
          "package": "alsa-seq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "get",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e T a -\u003e IO a",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "get",
          "normalized": "T a-\u003eT-\u003eT b-\u003eIO b",
          "package": "alsa-seq",
          "signature": "T mode-\u003eT-\u003eT a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "getAddr",
          "package": "alsa-seq",
          "signature": "T T",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#getAddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "getAddr",
          "package": "alsa-seq",
          "partial": "Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#v:getAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "getCapability",
          "package": "alsa-seq",
          "signature": "T Cap",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#getCapability",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "getCapability",
          "package": "alsa-seq",
          "partial": "Capability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#v:getCapability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "getClient",
          "package": "alsa-seq",
          "signature": "T T",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#getClient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "getClient",
          "package": "alsa-seq",
          "partial": "Client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#v:getClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "getMidiChannels",
          "package": "alsa-seq",
          "signature": "T Word",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#getMidiChannels",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "getMidiChannels",
          "package": "alsa-seq",
          "partial": "Midi Channels",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#v:getMidiChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "getMidiVoices",
          "package": "alsa-seq",
          "signature": "T Word",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#getMidiVoices",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "getMidiVoices",
          "package": "alsa-seq",
          "partial": "Midi Voices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#v:getMidiVoices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "getName",
          "package": "alsa-seq",
          "signature": "T String",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#getName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "getName",
          "package": "alsa-seq",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#v:getName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "getPort",
          "package": "alsa-seq",
          "signature": "T T",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#getPort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "getPort",
          "package": "alsa-seq",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#v:getPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "getPortSpecified",
          "package": "alsa-seq",
          "signature": "T Bool",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#getPortSpecified",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "getPortSpecified",
          "package": "alsa-seq",
          "partial": "Port Specified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#v:getPortSpecified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "getReadUse",
          "package": "alsa-seq",
          "signature": "T Word",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#getReadUse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "getReadUse",
          "package": "alsa-seq",
          "partial": "Read Use",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#v:getReadUse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "getSynthVoices",
          "package": "alsa-seq",
          "signature": "T Word",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#getSynthVoices",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "getSynthVoices",
          "package": "alsa-seq",
          "partial": "Synth Voices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#v:getSynthVoices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "getTimestampQueue",
          "package": "alsa-seq",
          "signature": "T T",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#getTimestampQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "getTimestampQueue",
          "package": "alsa-seq",
          "partial": "Timestamp Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#v:getTimestampQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "getTimestampReal",
          "package": "alsa-seq",
          "signature": "T Bool",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#getTimestampReal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "getTimestampReal",
          "package": "alsa-seq",
          "partial": "Timestamp Real",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#v:getTimestampReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "getTimestamping",
          "package": "alsa-seq",
          "signature": "T Bool",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#getTimestamping",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "getTimestamping",
          "package": "alsa-seq",
          "partial": "Timestamping",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#v:getTimestamping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "getWriteUse",
          "package": "alsa-seq",
          "signature": "T Word",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#getWriteUse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "getWriteUse",
          "package": "alsa-seq",
          "partial": "Write Use",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#v:getWriteUse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "modify",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e T a -\u003e IO a",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#modify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "modify",
          "normalized": "T a-\u003eT-\u003eT b-\u003eIO b",
          "package": "alsa-seq",
          "signature": "T mode-\u003eT-\u003eT a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "run",
          "package": "alsa-seq",
          "signature": "T a -\u003e T -\u003e IO a",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#run",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "run",
          "normalized": "T a-\u003eT-\u003eIO a",
          "package": "alsa-seq",
          "signature": "T a-\u003eT-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "setAddr",
          "package": "alsa-seq",
          "signature": "T -\u003e T ()",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#setAddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "setAddr",
          "normalized": "T-\u003eT()",
          "package": "alsa-seq",
          "partial": "Addr",
          "signature": "T-\u003eT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#v:setAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "setCapability",
          "package": "alsa-seq",
          "signature": "Cap -\u003e T ()",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#setCapability",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "setCapability",
          "normalized": "Cap-\u003eT()",
          "package": "alsa-seq",
          "partial": "Capability",
          "signature": "Cap-\u003eT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#v:setCapability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "setClient",
          "package": "alsa-seq",
          "signature": "T -\u003e T ()",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#setClient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "setClient",
          "normalized": "T-\u003eT()",
          "package": "alsa-seq",
          "partial": "Client",
          "signature": "T-\u003eT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#v:setClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "setMidiChannels",
          "package": "alsa-seq",
          "signature": "Word -\u003e T ()",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#setMidiChannels",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "setMidiChannels",
          "normalized": "Word-\u003eT()",
          "package": "alsa-seq",
          "partial": "Midi Channels",
          "signature": "Word-\u003eT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#v:setMidiChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "setMidiVoices",
          "package": "alsa-seq",
          "signature": "Word -\u003e T ()",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#setMidiVoices",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "setMidiVoices",
          "normalized": "Word-\u003eT()",
          "package": "alsa-seq",
          "partial": "Midi Voices",
          "signature": "Word-\u003eT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#v:setMidiVoices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "setName",
          "package": "alsa-seq",
          "signature": "String -\u003e T ()",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#setName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "setName",
          "normalized": "String-\u003eT()",
          "package": "alsa-seq",
          "partial": "Name",
          "signature": "String-\u003eT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#v:setName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "setPort",
          "package": "alsa-seq",
          "signature": "T -\u003e T ()",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#setPort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "setPort",
          "normalized": "T-\u003eT()",
          "package": "alsa-seq",
          "partial": "Port",
          "signature": "T-\u003eT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#v:setPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "setPortSpecified",
          "package": "alsa-seq",
          "signature": "Bool -\u003e T ()",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#setPortSpecified",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "setPortSpecified",
          "normalized": "Bool-\u003eT()",
          "package": "alsa-seq",
          "partial": "Port Specified",
          "signature": "Bool-\u003eT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#v:setPortSpecified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "setSynthVoices",
          "package": "alsa-seq",
          "signature": "Word -\u003e T ()",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#setSynthVoices",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "setSynthVoices",
          "normalized": "Word-\u003eT()",
          "package": "alsa-seq",
          "partial": "Synth Voices",
          "signature": "Word-\u003eT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#v:setSynthVoices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "setTimestampQueue",
          "package": "alsa-seq",
          "signature": "T -\u003e T ()",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#setTimestampQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "setTimestampQueue",
          "normalized": "T-\u003eT()",
          "package": "alsa-seq",
          "partial": "Timestamp Queue",
          "signature": "T-\u003eT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#v:setTimestampQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "setTimestampReal",
          "package": "alsa-seq",
          "signature": "Bool -\u003e T ()",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#setTimestampReal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "setTimestampReal",
          "normalized": "Bool-\u003eT()",
          "package": "alsa-seq",
          "partial": "Timestamp Real",
          "signature": "Bool-\u003eT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#v:setTimestampReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "setTimestamping",
          "package": "alsa-seq",
          "signature": "Bool -\u003e T ()",
          "source": "src/Sound-ALSA-Sequencer-Port-InfoMonad.html#setTimestamping",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port InfoMonad",
          "module": "Sound.ALSA.Sequencer.Port.InfoMonad",
          "name": "setTimestamping",
          "normalized": "Bool-\u003eT()",
          "package": "alsa-seq",
          "partial": "Timestamping",
          "signature": "Bool-\u003eT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port-InfoMonad.html#v:setTimestamping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains functions for working with ports.\n Reference:\n \u003ca\u003ehttp://www.alsa-project.org/alsa-doc/alsa-lib/group___seq_port.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "Port",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Port.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains functions for working with ports Reference http www.alsa-project.org alsa-doc alsa-lib group seq port.html",
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "Port",
          "package": "alsa-seq",
          "partial": "Port",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePort capabilities.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "Cap",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#Cap",
          "type": "type"
        },
        "index": {
          "description": "Port capabilities",
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "Cap",
          "package": "alsa-seq",
          "partial": "Cap",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#t:Cap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "T",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#T",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "T",
          "package": "alsa-seq",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePort types.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "Type",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#Type",
          "type": "type"
        },
        "index": {
          "description": "Port types",
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "Type",
          "package": "alsa-seq",
          "partial": "Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "Cons",
          "package": "alsa-seq",
          "signature": "Cons Word8",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "Cons",
          "package": "alsa-seq",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "capDuplex",
          "package": "alsa-seq",
          "signature": "Cap",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#capDuplex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "capDuplex",
          "package": "alsa-seq",
          "partial": "Duplex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:capDuplex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "capNoExport",
          "package": "alsa-seq",
          "signature": "Cap",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#capNoExport",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "capNoExport",
          "package": "alsa-seq",
          "partial": "No Export",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:capNoExport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "capRead",
          "package": "alsa-seq",
          "signature": "Cap",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#capRead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "capRead",
          "package": "alsa-seq",
          "partial": "Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:capRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "capSubsRead",
          "package": "alsa-seq",
          "signature": "Cap",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#capSubsRead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "capSubsRead",
          "package": "alsa-seq",
          "partial": "Subs Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:capSubsRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "capSubsWrite",
          "package": "alsa-seq",
          "signature": "Cap",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#capSubsWrite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "capSubsWrite",
          "package": "alsa-seq",
          "partial": "Subs Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:capSubsWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "capSyncRead",
          "package": "alsa-seq",
          "signature": "Cap",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#capSyncRead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "capSyncRead",
          "package": "alsa-seq",
          "partial": "Sync Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:capSyncRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "capSyncWrite",
          "package": "alsa-seq",
          "signature": "Cap",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#capSyncWrite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "capSyncWrite",
          "package": "alsa-seq",
          "partial": "Sync Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:capSyncWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "capWrite",
          "package": "alsa-seq",
          "signature": "Cap",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#capWrite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "capWrite",
          "package": "alsa-seq",
          "partial": "Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:capWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "caps",
          "package": "alsa-seq",
          "signature": "[Cap] -\u003e Cap",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#caps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "caps",
          "normalized": "[Cap]-\u003eCap",
          "package": "alsa-seq",
          "signature": "[Cap]-\u003eCap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:caps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new port, as described by the info structure.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "create",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Port.html#create",
          "type": "function"
        },
        "index": {
          "description": "Create new port as described by the info structure",
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "create",
          "normalized": "T a-\u003eT-\u003eIO()",
          "package": "alsa-seq",
          "signature": "T mode-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:create"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a port - simple version.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "createSimple",
          "package": "alsa-seq",
          "signature": "T mode -\u003e String -\u003e Cap -\u003e Type -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Port.html#createSimple",
          "type": "function"
        },
        "index": {
          "description": "Create port simple version",
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "createSimple",
          "normalized": "T a-\u003eString-\u003eCap-\u003eType-\u003eIO T",
          "package": "alsa-seq",
          "partial": "Simple",
          "signature": "T mode-\u003eString-\u003eCap-\u003eType-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:createSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the port.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "delete",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Port.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Delete the port",
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "delete",
          "normalized": "T a-\u003eT-\u003eIO()",
          "package": "alsa-seq",
          "signature": "T mode-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the port.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "deleteSimple",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Port.html#deleteSimple",
          "type": "function"
        },
        "index": {
          "description": "Delete the port",
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "deleteSimple",
          "normalized": "T a-\u003eT-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Simple",
          "signature": "T mode-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:deleteSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "systemAnnounce",
          "package": "alsa-seq",
          "signature": "T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#systemAnnounce",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "systemAnnounce",
          "package": "alsa-seq",
          "partial": "Announce",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:systemAnnounce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "systemTimer",
          "package": "alsa-seq",
          "signature": "T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#systemTimer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "systemTimer",
          "package": "alsa-seq",
          "partial": "Timer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:systemTimer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typeApplication",
          "package": "alsa-seq",
          "signature": "Type",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#typeApplication",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typeApplication",
          "package": "alsa-seq",
          "partial": "Application",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:typeApplication"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typeDirectSample",
          "package": "alsa-seq",
          "signature": "Type",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#typeDirectSample",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typeDirectSample",
          "package": "alsa-seq",
          "partial": "Direct Sample",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:typeDirectSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typeHardware",
          "package": "alsa-seq",
          "signature": "Type",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#typeHardware",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typeHardware",
          "package": "alsa-seq",
          "partial": "Hardware",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:typeHardware"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typeMidiGM",
          "package": "alsa-seq",
          "signature": "Type",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#typeMidiGM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typeMidiGM",
          "package": "alsa-seq",
          "partial": "Midi GM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:typeMidiGM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typeMidiGM2",
          "package": "alsa-seq",
          "signature": "Type",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#typeMidiGM2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typeMidiGM2",
          "package": "alsa-seq",
          "partial": "Midi GM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:typeMidiGM2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typeMidiGS",
          "package": "alsa-seq",
          "signature": "Type",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#typeMidiGS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typeMidiGS",
          "package": "alsa-seq",
          "partial": "Midi GS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:typeMidiGS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typeMidiGeneric",
          "package": "alsa-seq",
          "signature": "Type",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#typeMidiGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typeMidiGeneric",
          "package": "alsa-seq",
          "partial": "Midi Generic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:typeMidiGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typeMidiMT32",
          "package": "alsa-seq",
          "signature": "Type",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#typeMidiMT32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typeMidiMT32",
          "package": "alsa-seq",
          "partial": "Midi MT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:typeMidiMT32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typeMidiXG",
          "package": "alsa-seq",
          "signature": "Type",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#typeMidiXG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typeMidiXG",
          "package": "alsa-seq",
          "partial": "Midi XG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:typeMidiXG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typePort",
          "package": "alsa-seq",
          "signature": "Type",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#typePort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typePort",
          "package": "alsa-seq",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:typePort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typeSample",
          "package": "alsa-seq",
          "signature": "Type",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#typeSample",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typeSample",
          "package": "alsa-seq",
          "partial": "Sample",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:typeSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typeSoftware",
          "package": "alsa-seq",
          "signature": "Type",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#typeSoftware",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typeSoftware",
          "package": "alsa-seq",
          "partial": "Software",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:typeSoftware"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typeSpecific",
          "package": "alsa-seq",
          "signature": "Type",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#typeSpecific",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typeSpecific",
          "package": "alsa-seq",
          "partial": "Specific",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:typeSpecific"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typeSynth",
          "package": "alsa-seq",
          "signature": "Type",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#typeSynth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typeSynth",
          "package": "alsa-seq",
          "partial": "Synth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:typeSynth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typeSynthesizer",
          "package": "alsa-seq",
          "signature": "Type",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#typeSynthesizer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "typeSynthesizer",
          "package": "alsa-seq",
          "partial": "Synthesizer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:typeSynthesizer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "types",
          "package": "alsa-seq",
          "signature": "[Type] -\u003e Type",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#types",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "types",
          "normalized": "[Type]-\u003eType",
          "package": "alsa-seq",
          "signature": "[Type]-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:types"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "unknown",
          "package": "alsa-seq",
          "signature": "T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Port.html#unknown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "unknown",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "withSimple",
          "package": "alsa-seq",
          "signature": "T mode -\u003e String -\u003e Cap -\u003e Type -\u003e (T -\u003e IO a) -\u003e IO a",
          "source": "src/Sound-ALSA-Sequencer-Port.html#withSimple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Port",
          "module": "Sound.ALSA.Sequencer.Port",
          "name": "withSimple",
          "normalized": "T a-\u003eString-\u003eCap-\u003eType-\u003e(T-\u003eIO b)-\u003eIO b",
          "package": "alsa-seq",
          "partial": "Simple",
          "signature": "T mode-\u003eString-\u003eCap-\u003eType-\u003e(T-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Port.html#v:withSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Query",
          "name": "Query",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Query.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Query",
          "module": "Sound.ALSA.Sequencer.Query",
          "name": "Query",
          "package": "alsa-seq",
          "partial": "Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Query.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Query",
          "name": "C",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Query.html#C",
          "type": "class"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Query",
          "module": "Sound.ALSA.Sequencer.Query",
          "name": "C",
          "package": "alsa-seq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Query.html#t:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Query",
          "name": "first",
          "package": "alsa-seq",
          "signature": "T mode -\u003e IO info",
          "source": "src/Sound-ALSA-Sequencer-Query.html#first",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Query",
          "module": "Sound.ALSA.Sequencer.Query",
          "name": "first",
          "normalized": "T a-\u003eIO b",
          "package": "alsa-seq",
          "signature": "T mode-\u003eIO info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Query.html#v:first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Query",
          "name": "init",
          "package": "alsa-seq",
          "signature": "info -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Query.html#init",
          "type": "method"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Query",
          "module": "Sound.ALSA.Sequencer.Query",
          "name": "init",
          "normalized": "a-\u003eIO()",
          "package": "alsa-seq",
          "signature": "info-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Query.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Query",
          "name": "loop",
          "package": "alsa-seq",
          "signature": "T mode -\u003e (info -\u003e IO ()) -\u003e (info -\u003e IO a) -\u003e IO [a]",
          "source": "src/Sound-ALSA-Sequencer-Query.html#loop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Query",
          "module": "Sound.ALSA.Sequencer.Query",
          "name": "loop",
          "normalized": "T a-\u003e(b-\u003eIO())-\u003e(b-\u003eIO c)-\u003eIO[c]",
          "package": "alsa-seq",
          "signature": "T mode-\u003e(info-\u003eIO())-\u003e(info-\u003eIO a)-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Query.html#v:loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Query",
          "name": "loop_",
          "package": "alsa-seq",
          "signature": "T mode -\u003e (info -\u003e IO ()) -\u003e (info -\u003e IO ()) -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Query.html#loop_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Query",
          "module": "Sound.ALSA.Sequencer.Query",
          "name": "loop_",
          "normalized": "T a-\u003e(b-\u003eIO())-\u003e(b-\u003eIO())-\u003eIO()",
          "package": "alsa-seq",
          "signature": "T mode-\u003e(info-\u003eIO())-\u003e(info-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Query.html#v:loop_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Query",
          "name": "next",
          "package": "alsa-seq",
          "signature": "T mode -\u003e info -\u003e IO Bool",
          "source": "src/Sound-ALSA-Sequencer-Query.html#next",
          "type": "method"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Query",
          "module": "Sound.ALSA.Sequencer.Query",
          "name": "next",
          "normalized": "T a-\u003eb-\u003eIO Bool",
          "package": "alsa-seq",
          "signature": "T mode-\u003einfo-\u003eIO Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Query.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains functions for working with sequencer queue.\n Reference:\n \u003ca\u003ehttp://www.alsa-project.org/alsa-doc/alsa-lib/group___seq_queue.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.ALSA.Sequencer.Queue.Info",
          "name": "Info",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Queue-Info.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains functions for working with sequencer queue Reference http www.alsa-project.org alsa-doc alsa-lib group seq queue.html",
          "hierarchy": "Sound ALSA Sequencer Queue Info",
          "module": "Sound.ALSA.Sequencer.Queue.Info",
          "name": "Info",
          "package": "alsa-seq",
          "partial": "Info",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Info.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Info",
          "name": "T",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Queue-Info.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Info",
          "module": "Sound.ALSA.Sequencer.Queue.Info",
          "name": "T",
          "package": "alsa-seq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Info.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the content of an object to a newly created object.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Queue.Info",
          "name": "clone",
          "package": "alsa-seq",
          "signature": "T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Queue-Info.html#clone",
          "type": "function"
        },
        "index": {
          "description": "Copy the content of an object to newly created object",
          "hierarchy": "Sound ALSA Sequencer Queue Info",
          "module": "Sound.ALSA.Sequencer.Queue.Info",
          "name": "clone",
          "normalized": "T-\u003eIO T",
          "package": "alsa-seq",
          "signature": "T-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Info.html#v:clone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Info",
          "name": "get",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Queue-Info.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Info",
          "module": "Sound.ALSA.Sequencer.Queue.Info",
          "name": "get",
          "normalized": "T a-\u003eT-\u003eIO T",
          "package": "alsa-seq",
          "signature": "T mode-\u003eT-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Info.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Info",
          "name": "getFlags",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Word",
          "source": "src/Sound-ALSA-Sequencer-Queue-Info.html#getFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Info",
          "module": "Sound.ALSA.Sequencer.Queue.Info",
          "name": "getFlags",
          "normalized": "T-\u003eIO Word",
          "package": "alsa-seq",
          "partial": "Flags",
          "signature": "T-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Info.html#v:getFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Info",
          "name": "getLocked",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Bool",
          "source": "src/Sound-ALSA-Sequencer-Queue-Info.html#getLocked",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Info",
          "module": "Sound.ALSA.Sequencer.Queue.Info",
          "name": "getLocked",
          "normalized": "T-\u003eIO Bool",
          "package": "alsa-seq",
          "partial": "Locked",
          "signature": "T-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Info.html#v:getLocked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Info",
          "name": "getName",
          "package": "alsa-seq",
          "signature": "T -\u003e IO String",
          "source": "src/Sound-ALSA-Sequencer-Queue-Info.html#getName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Info",
          "module": "Sound.ALSA.Sequencer.Queue.Info",
          "name": "getName",
          "normalized": "T-\u003eIO String",
          "package": "alsa-seq",
          "partial": "Name",
          "signature": "T-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Info.html#v:getName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Info",
          "name": "getOwner",
          "package": "alsa-seq",
          "signature": "T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Queue-Info.html#getOwner",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Info",
          "module": "Sound.ALSA.Sequencer.Queue.Info",
          "name": "getOwner",
          "normalized": "T-\u003eIO T",
          "package": "alsa-seq",
          "partial": "Owner",
          "signature": "T-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Info.html#v:getOwner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Info",
          "name": "getQueue",
          "package": "alsa-seq",
          "signature": "T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Queue-Info.html#getQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Info",
          "module": "Sound.ALSA.Sequencer.Queue.Info",
          "name": "getQueue",
          "normalized": "T-\u003eIO T",
          "package": "alsa-seq",
          "partial": "Queue",
          "signature": "T-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Info.html#v:getQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Info",
          "name": "set",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e T -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Queue-Info.html#set",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Info",
          "module": "Sound.ALSA.Sequencer.Queue.Info",
          "name": "set",
          "normalized": "T a-\u003eT-\u003eT-\u003eIO()",
          "package": "alsa-seq",
          "signature": "T mode-\u003eT-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Info.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Info",
          "name": "setFlags",
          "package": "alsa-seq",
          "signature": "T -\u003e Word -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Queue-Info.html#setFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Info",
          "module": "Sound.ALSA.Sequencer.Queue.Info",
          "name": "setFlags",
          "normalized": "T-\u003eWord-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Flags",
          "signature": "T-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Info.html#v:setFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Info",
          "name": "setLocked",
          "package": "alsa-seq",
          "signature": "T -\u003e Bool -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Queue-Info.html#setLocked",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Info",
          "module": "Sound.ALSA.Sequencer.Queue.Info",
          "name": "setLocked",
          "normalized": "T-\u003eBool-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Locked",
          "signature": "T-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Info.html#v:setLocked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Info",
          "name": "setName",
          "package": "alsa-seq",
          "signature": "T -\u003e String -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Queue-Info.html#setName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Info",
          "module": "Sound.ALSA.Sequencer.Queue.Info",
          "name": "setName",
          "normalized": "T-\u003eString-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Name",
          "signature": "T-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Info.html#v:setName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Info",
          "name": "setOwner",
          "package": "alsa-seq",
          "signature": "T -\u003e T -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Queue-Info.html#setOwner",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Info",
          "module": "Sound.ALSA.Sequencer.Queue.Info",
          "name": "setOwner",
          "normalized": "T-\u003eT-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Owner",
          "signature": "T-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Info.html#v:setOwner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains functions for working with sequencer queue.\n Reference:\n \u003ca\u003ehttp://www.alsa-project.org/alsa-doc/alsa-lib/group___seq_queue.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.ALSA.Sequencer.Queue.Status",
          "name": "Status",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Queue-Status.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains functions for working with sequencer queue Reference http www.alsa-project.org alsa-doc alsa-lib group seq queue.html",
          "hierarchy": "Sound ALSA Sequencer Queue Status",
          "module": "Sound.ALSA.Sequencer.Queue.Status",
          "name": "Status",
          "package": "alsa-seq",
          "partial": "Status",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Status.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Status",
          "name": "T",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Queue-Status.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Status",
          "module": "Sound.ALSA.Sequencer.Queue.Status",
          "name": "T",
          "package": "alsa-seq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Status.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the content of an object to a newly created object.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Queue.Status",
          "name": "clone",
          "package": "alsa-seq",
          "signature": "T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Queue-Status.html#clone",
          "type": "function"
        },
        "index": {
          "description": "Copy the content of an object to newly created object",
          "hierarchy": "Sound ALSA Sequencer Queue Status",
          "module": "Sound.ALSA.Sequencer.Queue.Status",
          "name": "clone",
          "normalized": "T-\u003eIO T",
          "package": "alsa-seq",
          "signature": "T-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Status.html#v:clone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the content of one object into another.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Queue.Status",
          "name": "copy",
          "package": "alsa-seq",
          "signature": "T-\u003e T-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Copy the content of one object into another",
          "hierarchy": "Sound ALSA Sequencer Queue Status",
          "module": "Sound.ALSA.Sequencer.Queue.Status",
          "name": "copy",
          "normalized": "T-\u003eT-\u003eIO()",
          "package": "alsa-seq",
          "signature": "T-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Status.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Status",
          "name": "get",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Queue-Status.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Status",
          "module": "Sound.ALSA.Sequencer.Queue.Status",
          "name": "get",
          "normalized": "T a-\u003eT-\u003eIO T",
          "package": "alsa-seq",
          "signature": "T mode-\u003eT-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Status.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Status",
          "name": "getEvents",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Int",
          "source": "src/Sound-ALSA-Sequencer-Queue-Status.html#getEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Status",
          "module": "Sound.ALSA.Sequencer.Queue.Status",
          "name": "getEvents",
          "normalized": "T-\u003eIO Int",
          "package": "alsa-seq",
          "partial": "Events",
          "signature": "T-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Status.html#v:getEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Status",
          "name": "getQueue",
          "package": "alsa-seq",
          "signature": "T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Queue-Status.html#getQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Status",
          "module": "Sound.ALSA.Sequencer.Queue.Status",
          "name": "getQueue",
          "normalized": "T-\u003eIO T",
          "package": "alsa-seq",
          "partial": "Queue",
          "signature": "T-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Status.html#v:getQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Status",
          "name": "getRealTime",
          "package": "alsa-seq",
          "signature": "T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Queue-Status.html#getRealTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Status",
          "module": "Sound.ALSA.Sequencer.Queue.Status",
          "name": "getRealTime",
          "normalized": "T-\u003eIO T",
          "package": "alsa-seq",
          "partial": "Real Time",
          "signature": "T-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Status.html#v:getRealTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate an uninitialized object. (Not exported)\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Queue.Status",
          "name": "getTickTime",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Tick",
          "source": "src/Sound-ALSA-Sequencer-Queue-Status.html#getTickTime",
          "type": "function"
        },
        "index": {
          "description": "Allocate an uninitialized object Not exported",
          "hierarchy": "Sound ALSA Sequencer Queue Status",
          "module": "Sound.ALSA.Sequencer.Queue.Status",
          "name": "getTickTime",
          "normalized": "T-\u003eIO Tick",
          "package": "alsa-seq",
          "partial": "Tick Time",
          "signature": "T-\u003eIO Tick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Status.html#v:getTickTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains functions for working with sequencer queue.\n Reference:\n \u003ca\u003ehttp://www.alsa-project.org/alsa-doc/alsa-lib/group___seq_queue.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.ALSA.Sequencer.Queue.Tempo",
          "name": "Tempo",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Queue-Tempo.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains functions for working with sequencer queue Reference http www.alsa-project.org alsa-doc alsa-lib group seq queue.html",
          "hierarchy": "Sound ALSA Sequencer Queue Tempo",
          "module": "Sound.ALSA.Sequencer.Queue.Tempo",
          "name": "Tempo",
          "package": "alsa-seq",
          "partial": "Tempo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Tempo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Tempo",
          "name": "T",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Queue-Tempo.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Tempo",
          "module": "Sound.ALSA.Sequencer.Queue.Tempo",
          "name": "T",
          "package": "alsa-seq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Tempo.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the content of an object to a newly created object.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Queue.Tempo",
          "name": "clone",
          "package": "alsa-seq",
          "signature": "T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Queue-Tempo.html#clone",
          "type": "function"
        },
        "index": {
          "description": "Copy the content of an object to newly created object",
          "hierarchy": "Sound ALSA Sequencer Queue Tempo",
          "module": "Sound.ALSA.Sequencer.Queue.Tempo",
          "name": "clone",
          "normalized": "T-\u003eIO T",
          "package": "alsa-seq",
          "signature": "T-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Tempo.html#v:clone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Tempo",
          "name": "get",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Queue-Tempo.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Tempo",
          "module": "Sound.ALSA.Sequencer.Queue.Tempo",
          "name": "get",
          "normalized": "T a-\u003eT-\u003eIO T",
          "package": "alsa-seq",
          "signature": "T mode-\u003eT-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Tempo.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Tempo",
          "name": "getPPQ",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Int",
          "source": "src/Sound-ALSA-Sequencer-Queue-Tempo.html#getPPQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Tempo",
          "module": "Sound.ALSA.Sequencer.Queue.Tempo",
          "name": "getPPQ",
          "normalized": "T-\u003eIO Int",
          "package": "alsa-seq",
          "partial": "PPQ",
          "signature": "T-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Tempo.html#v:getPPQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Tempo",
          "name": "getQueue",
          "package": "alsa-seq",
          "signature": "T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Queue-Tempo.html#getQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Tempo",
          "module": "Sound.ALSA.Sequencer.Queue.Tempo",
          "name": "getQueue",
          "normalized": "T-\u003eIO T",
          "package": "alsa-seq",
          "partial": "Queue",
          "signature": "T-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Tempo.html#v:getQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Tempo",
          "name": "getSkew",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Word",
          "source": "src/Sound-ALSA-Sequencer-Queue-Tempo.html#getSkew",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Tempo",
          "module": "Sound.ALSA.Sequencer.Queue.Tempo",
          "name": "getSkew",
          "normalized": "T-\u003eIO Word",
          "package": "alsa-seq",
          "partial": "Skew",
          "signature": "T-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Tempo.html#v:getSkew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Tempo",
          "name": "getSkewBase",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Word",
          "source": "src/Sound-ALSA-Sequencer-Queue-Tempo.html#getSkewBase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Tempo",
          "module": "Sound.ALSA.Sequencer.Queue.Tempo",
          "name": "getSkewBase",
          "normalized": "T-\u003eIO Word",
          "package": "alsa-seq",
          "partial": "Skew Base",
          "signature": "T-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Tempo.html#v:getSkewBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Tempo",
          "name": "getTempo",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Word",
          "source": "src/Sound-ALSA-Sequencer-Queue-Tempo.html#getTempo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Tempo",
          "module": "Sound.ALSA.Sequencer.Queue.Tempo",
          "name": "getTempo",
          "normalized": "T-\u003eIO Word",
          "package": "alsa-seq",
          "partial": "Tempo",
          "signature": "T-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Tempo.html#v:getTempo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Tempo",
          "name": "set",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e T -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Queue-Tempo.html#set",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Tempo",
          "module": "Sound.ALSA.Sequencer.Queue.Tempo",
          "name": "set",
          "normalized": "T a-\u003eT-\u003eT-\u003eIO()",
          "package": "alsa-seq",
          "signature": "T mode-\u003eT-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Tempo.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Tempo",
          "name": "setPPQ",
          "package": "alsa-seq",
          "signature": "T -\u003e Int -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Queue-Tempo.html#setPPQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Tempo",
          "module": "Sound.ALSA.Sequencer.Queue.Tempo",
          "name": "setPPQ",
          "normalized": "T-\u003eInt-\u003eIO()",
          "package": "alsa-seq",
          "partial": "PPQ",
          "signature": "T-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Tempo.html#v:setPPQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Tempo",
          "name": "setSkew",
          "package": "alsa-seq",
          "signature": "T -\u003e Word -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Queue-Tempo.html#setSkew",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Tempo",
          "module": "Sound.ALSA.Sequencer.Queue.Tempo",
          "name": "setSkew",
          "normalized": "T-\u003eWord-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Skew",
          "signature": "T-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Tempo.html#v:setSkew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Tempo",
          "name": "setSkewBase",
          "package": "alsa-seq",
          "signature": "T -\u003e Word -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Queue-Tempo.html#setSkewBase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Tempo",
          "module": "Sound.ALSA.Sequencer.Queue.Tempo",
          "name": "setSkewBase",
          "normalized": "T-\u003eWord-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Skew Base",
          "signature": "T-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Tempo.html#v:setSkewBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the content of one object into another.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Queue.Tempo",
          "name": "setTempo",
          "package": "alsa-seq",
          "signature": "T -\u003e Word -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Queue-Tempo.html#setTempo",
          "type": "function"
        },
        "index": {
          "description": "Copy the content of one object into another",
          "hierarchy": "Sound ALSA Sequencer Queue Tempo",
          "module": "Sound.ALSA.Sequencer.Queue.Tempo",
          "name": "setTempo",
          "normalized": "T-\u003eWord-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Tempo",
          "signature": "T-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Tempo.html#v:setTempo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains functions for working with sequencer queue.\n Reference:\n \u003ca\u003ehttp://www.alsa-project.org/alsa-doc/alsa-lib/group___seq_queue.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.ALSA.Sequencer.Queue.Timer",
          "name": "Timer",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Queue-Timer.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains functions for working with sequencer queue Reference http www.alsa-project.org alsa-doc alsa-lib group seq queue.html",
          "hierarchy": "Sound ALSA Sequencer Queue Timer",
          "module": "Sound.ALSA.Sequencer.Queue.Timer",
          "name": "Timer",
          "package": "alsa-seq",
          "partial": "Timer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Timer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Timer",
          "name": "T",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Queue-Timer.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Timer",
          "module": "Sound.ALSA.Sequencer.Queue.Timer",
          "name": "T",
          "package": "alsa-seq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Timer.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Timer",
          "name": "Type",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Queue-Timer.html#Type",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Timer",
          "module": "Sound.ALSA.Sequencer.Queue.Timer",
          "name": "Type",
          "package": "alsa-seq",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Timer.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Timer",
          "name": "Alsa",
          "package": "alsa-seq",
          "signature": "Alsa",
          "source": "src/Sound-ALSA-Sequencer-Queue-Timer.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Timer",
          "module": "Sound.ALSA.Sequencer.Queue.Timer",
          "name": "Alsa",
          "package": "alsa-seq",
          "partial": "Alsa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Timer.html#v:Alsa"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Timer",
          "name": "MidiClock",
          "package": "alsa-seq",
          "signature": "MidiClock",
          "source": "src/Sound-ALSA-Sequencer-Queue-Timer.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Timer",
          "module": "Sound.ALSA.Sequencer.Queue.Timer",
          "name": "MidiClock",
          "package": "alsa-seq",
          "partial": "Midi Clock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Timer.html#v:MidiClock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Timer",
          "name": "MidiTick",
          "package": "alsa-seq",
          "signature": "MidiTick",
          "source": "src/Sound-ALSA-Sequencer-Queue-Timer.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Timer",
          "module": "Sound.ALSA.Sequencer.Queue.Timer",
          "name": "MidiTick",
          "package": "alsa-seq",
          "partial": "Midi Tick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Timer.html#v:MidiTick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the content of an object to a newly created object.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Queue.Timer",
          "name": "clone",
          "package": "alsa-seq",
          "signature": "T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Queue-Timer.html#clone",
          "type": "function"
        },
        "index": {
          "description": "Copy the content of an object to newly created object",
          "hierarchy": "Sound ALSA Sequencer Queue Timer",
          "module": "Sound.ALSA.Sequencer.Queue.Timer",
          "name": "clone",
          "normalized": "T-\u003eIO T",
          "package": "alsa-seq",
          "signature": "T-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Timer.html#v:clone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Timer",
          "name": "get",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Queue-Timer.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Timer",
          "module": "Sound.ALSA.Sequencer.Queue.Timer",
          "name": "get",
          "normalized": "T a-\u003eT-\u003eIO T",
          "package": "alsa-seq",
          "signature": "T mode-\u003eT-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Timer.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Timer",
          "name": "getQueue",
          "package": "alsa-seq",
          "signature": "T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Queue-Timer.html#getQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Timer",
          "module": "Sound.ALSA.Sequencer.Queue.Timer",
          "name": "getQueue",
          "normalized": "T-\u003eIO T",
          "package": "alsa-seq",
          "partial": "Queue",
          "signature": "T-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Timer.html#v:getQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Timer",
          "name": "getResolution",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Word",
          "source": "src/Sound-ALSA-Sequencer-Queue-Timer.html#getResolution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Timer",
          "module": "Sound.ALSA.Sequencer.Queue.Timer",
          "name": "getResolution",
          "normalized": "T-\u003eIO Word",
          "package": "alsa-seq",
          "partial": "Resolution",
          "signature": "T-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Timer.html#v:getResolution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Timer",
          "name": "getType",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Type",
          "source": "src/Sound-ALSA-Sequencer-Queue-Timer.html#getType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Timer",
          "module": "Sound.ALSA.Sequencer.Queue.Timer",
          "name": "getType",
          "normalized": "T-\u003eIO Type",
          "package": "alsa-seq",
          "partial": "Type",
          "signature": "T-\u003eIO Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Timer.html#v:getType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Timer",
          "name": "set",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e T -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Queue-Timer.html#set",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Timer",
          "module": "Sound.ALSA.Sequencer.Queue.Timer",
          "name": "set",
          "normalized": "T a-\u003eT-\u003eT-\u003eIO()",
          "package": "alsa-seq",
          "signature": "T mode-\u003eT-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Timer.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Timer",
          "name": "setResolution",
          "package": "alsa-seq",
          "signature": "T -\u003e Word -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Queue-Timer.html#setResolution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Timer",
          "module": "Sound.ALSA.Sequencer.Queue.Timer",
          "name": "setResolution",
          "normalized": "T-\u003eWord-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Resolution",
          "signature": "T-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Timer.html#v:setResolution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue.Timer",
          "name": "setType",
          "package": "alsa-seq",
          "signature": "T -\u003e Type -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Queue-Timer.html#setType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue Timer",
          "module": "Sound.ALSA.Sequencer.Queue.Timer",
          "name": "setType",
          "normalized": "T-\u003eType-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Type",
          "signature": "T-\u003eType-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue-Timer.html#v:setType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains functions for working with sequencer queue.\n Reference:\n \u003ca\u003ehttp://www.alsa-project.org/alsa-doc/alsa-lib/group___seq_queue.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.ALSA.Sequencer.Queue",
          "name": "Queue",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Queue.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains functions for working with sequencer queue Reference http www.alsa-project.org alsa-doc alsa-lib group seq queue.html",
          "hierarchy": "Sound ALSA Sequencer Queue",
          "module": "Sound.ALSA.Sequencer.Queue",
          "name": "Queue",
          "package": "alsa-seq",
          "partial": "Queue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of queue identifiers.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Queue",
          "name": "T",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Queue.html#T",
          "type": "data"
        },
        "index": {
          "description": "The type of queue identifiers",
          "hierarchy": "Sound ALSA Sequencer Queue",
          "module": "Sound.ALSA.Sequencer.Queue",
          "name": "T",
          "package": "alsa-seq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue",
          "name": "alloc",
          "package": "alsa-seq",
          "signature": "T mode-\u003e IO T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue",
          "module": "Sound.ALSA.Sequencer.Queue",
          "name": "alloc",
          "normalized": "T a-\u003eIO T",
          "package": "alsa-seq",
          "signature": "T mode-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue.html#v:alloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue",
          "name": "allocNamed",
          "package": "alsa-seq",
          "signature": "T mode -\u003e String -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Queue.html#allocNamed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue",
          "module": "Sound.ALSA.Sequencer.Queue",
          "name": "allocNamed",
          "normalized": "T a-\u003eString-\u003eIO T",
          "package": "alsa-seq",
          "partial": "Named",
          "signature": "T mode-\u003eString-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue.html#v:allocNamed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estart\u003cem\u003estop\u003c/em\u003econtinue a queue\n\u003c/p\u003e\u003cp\u003eIn the prototype event you can provide additional information.\nThe prototype event does not need to be a queue control event,\nthis part is ignored anyway.\nIn the prototype event you may also specify a queue.\nThis is the queue that the timestamp of the prototype event refers to.\nThis way you can control the target queue using timing from another queue.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Queue",
          "name": "control",
          "package": "alsa-seq",
          "signature": "T mode-\u003e T-\u003e QueueEv-\u003e Maybe T-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "start stop continue queue In the prototype event you can provide additional information The prototype event does not need to be queue control event this part is ignored anyway In the prototype event you may also specify queue This is the queue that the timestamp of the prototype event refers to This way you can control the target queue using timing from another queue",
          "hierarchy": "Sound ALSA Sequencer Queue",
          "module": "Sound.ALSA.Sequencer.Queue",
          "name": "control",
          "normalized": "T a-\u003eT-\u003eQueueEv-\u003eMaybe T-\u003eIO()",
          "package": "alsa-seq",
          "signature": "T mode-\u003eT-\u003eQueueEv-\u003eMaybe T-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue.html#v:control"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue",
          "name": "direct",
          "package": "alsa-seq",
          "signature": "T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Queue.html#direct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue",
          "module": "Sound.ALSA.Sequencer.Queue",
          "name": "direct",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue.html#v:direct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the specified queue.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Queue",
          "name": "free",
          "package": "alsa-seq",
          "signature": "T mode-\u003e T-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Delete the specified queue",
          "hierarchy": "Sound ALSA Sequencer Queue",
          "module": "Sound.ALSA.Sequencer.Queue",
          "name": "free",
          "normalized": "T a-\u003eT-\u003eIO()",
          "package": "alsa-seq",
          "signature": "T mode-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue.html#v:free"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue",
          "name": "with",
          "package": "alsa-seq",
          "signature": "T mode -\u003e (T -\u003e IO a) -\u003e IO a",
          "source": "src/Sound-ALSA-Sequencer-Queue.html#with",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue",
          "module": "Sound.ALSA.Sequencer.Queue",
          "name": "with",
          "normalized": "T a-\u003e(T-\u003eIO b)-\u003eIO b",
          "package": "alsa-seq",
          "signature": "T mode-\u003e(T-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue.html#v:with"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Queue",
          "name": "withNamed",
          "package": "alsa-seq",
          "signature": "T mode -\u003e String -\u003e (T -\u003e IO a) -\u003e IO a",
          "source": "src/Sound-ALSA-Sequencer-Queue.html#withNamed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Queue",
          "module": "Sound.ALSA.Sequencer.Queue",
          "name": "withNamed",
          "normalized": "T a-\u003eString-\u003e(T-\u003eIO b)-\u003eIO b",
          "package": "alsa-seq",
          "partial": "Named",
          "signature": "T mode-\u003eString-\u003e(T-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Queue.html#v:withNamed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.RealTime",
          "name": "RealTime",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-RealTime.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer RealTime",
          "module": "Sound.ALSA.Sequencer.RealTime",
          "name": "RealTime",
          "package": "alsa-seq",
          "partial": "Real Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-RealTime.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.RealTime",
          "name": "T",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-RealTime.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer RealTime",
          "module": "Sound.ALSA.Sequencer.RealTime",
          "name": "T",
          "package": "alsa-seq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-RealTime.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.RealTime",
          "name": "Cons",
          "package": "alsa-seq",
          "signature": "Cons",
          "source": "src/Sound-ALSA-Sequencer-Marshal-RealTime.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer RealTime",
          "module": "Sound.ALSA.Sequencer.RealTime",
          "name": "Cons",
          "package": "alsa-seq",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-RealTime.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert fractional number of seconds to \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e\nTime must be non-negative.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.RealTime",
          "name": "fromDouble",
          "package": "alsa-seq",
          "signature": "Double -\u003e T",
          "source": "src/Sound-ALSA-Sequencer-RealTime.html#fromDouble",
          "type": "function"
        },
        "index": {
          "description": "Convert fractional number of seconds to Time must be non-negative",
          "hierarchy": "Sound ALSA Sequencer RealTime",
          "module": "Sound.ALSA.Sequencer.RealTime",
          "name": "fromDouble",
          "normalized": "Double-\u003eT",
          "package": "alsa-seq",
          "partial": "Double",
          "signature": "Double-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-RealTime.html#v:fromDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.RealTime",
          "name": "fromFractional",
          "package": "alsa-seq",
          "signature": "a -\u003e T",
          "source": "src/Sound-ALSA-Sequencer-RealTime.html#fromFractional",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer RealTime",
          "module": "Sound.ALSA.Sequencer.RealTime",
          "name": "fromFractional",
          "normalized": "a-\u003eT",
          "package": "alsa-seq",
          "partial": "Fractional",
          "signature": "a-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-RealTime.html#v:fromFractional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert number of nanoseconds to \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.RealTime",
          "name": "fromInteger",
          "package": "alsa-seq",
          "signature": "Integer -\u003e T",
          "source": "src/Sound-ALSA-Sequencer-RealTime.html#fromInteger",
          "type": "function"
        },
        "index": {
          "description": "Convert number of nanoseconds to",
          "hierarchy": "Sound ALSA Sequencer RealTime",
          "module": "Sound.ALSA.Sequencer.RealTime",
          "name": "fromInteger",
          "normalized": "Integer-\u003eT",
          "package": "alsa-seq",
          "partial": "Integer",
          "signature": "Integer-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-RealTime.html#v:fromInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.RealTime",
          "name": "nano",
          "package": "alsa-seq",
          "signature": "Word32",
          "source": "src/Sound-ALSA-Sequencer-Marshal-RealTime.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer RealTime",
          "module": "Sound.ALSA.Sequencer.RealTime",
          "name": "nano",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-RealTime.html#v:nano"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.RealTime",
          "name": "secs",
          "package": "alsa-seq",
          "signature": "Word32",
          "source": "src/Sound-ALSA-Sequencer-Marshal-RealTime.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer RealTime",
          "module": "Sound.ALSA.Sequencer.RealTime",
          "name": "secs",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-RealTime.html#v:secs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert fractional number of seconds to \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.RealTime",
          "name": "toDouble",
          "package": "alsa-seq",
          "signature": "T -\u003e Double",
          "source": "src/Sound-ALSA-Sequencer-RealTime.html#toDouble",
          "type": "function"
        },
        "index": {
          "description": "Convert fractional number of seconds to",
          "hierarchy": "Sound ALSA Sequencer RealTime",
          "module": "Sound.ALSA.Sequencer.RealTime",
          "name": "toDouble",
          "normalized": "T-\u003eDouble",
          "package": "alsa-seq",
          "partial": "Double",
          "signature": "T-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-RealTime.html#v:toDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.RealTime",
          "name": "toFractional",
          "package": "alsa-seq",
          "signature": "T -\u003e a",
          "source": "src/Sound-ALSA-Sequencer-RealTime.html#toFractional",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer RealTime",
          "module": "Sound.ALSA.Sequencer.RealTime",
          "name": "toFractional",
          "normalized": "T-\u003ea",
          "package": "alsa-seq",
          "partial": "Fractional",
          "signature": "T-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-RealTime.html#v:toFractional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert number of nanoseconds to \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.RealTime",
          "name": "toInteger",
          "package": "alsa-seq",
          "signature": "T -\u003e Integer",
          "source": "src/Sound-ALSA-Sequencer-RealTime.html#toInteger",
          "type": "function"
        },
        "index": {
          "description": "Convert number of nanoseconds to",
          "hierarchy": "Sound ALSA Sequencer RealTime",
          "module": "Sound.ALSA.Sequencer.RealTime",
          "name": "toInteger",
          "normalized": "T-\u003eInteger",
          "package": "alsa-seq",
          "partial": "Integer",
          "signature": "T-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-RealTime.html#v:toInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains functions for working with subscriptions.\n Reference:\n \u003ca\u003ehttp://www.alsa-project.org/alsa-doc/alsa-lib/group___seq_subscribe.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "Query",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Subscribe-Query.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains functions for working with subscriptions Reference http www.alsa-project.org alsa-doc alsa-lib group seq subscribe.html",
          "hierarchy": "Sound ALSA Sequencer Subscribe Query",
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "Query",
          "package": "alsa-seq",
          "partial": "Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe-Query.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "T",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Subscribe-Query.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe Query",
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "T",
          "package": "alsa-seq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe-Query.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "Type",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Subscribe-Query.html#Type",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe Query",
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "Type",
          "package": "alsa-seq",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe-Query.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "Read",
          "package": "alsa-seq",
          "signature": "Read",
          "source": "src/Sound-ALSA-Sequencer-Subscribe-Query.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe Query",
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "Read",
          "package": "alsa-seq",
          "partial": "Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe-Query.html#v:Read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "Write",
          "package": "alsa-seq",
          "signature": "Write",
          "source": "src/Sound-ALSA-Sequencer-Subscribe-Query.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe Query",
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "Write",
          "package": "alsa-seq",
          "partial": "Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe-Query.html#v:Write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "clone",
          "package": "alsa-seq",
          "signature": "T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Subscribe-Query.html#clone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe Query",
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "clone",
          "normalized": "T-\u003eIO T",
          "package": "alsa-seq",
          "signature": "T-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe-Query.html#v:clone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "getAddr",
          "package": "alsa-seq",
          "signature": "T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Subscribe-Query.html#getAddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe Query",
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "getAddr",
          "normalized": "T-\u003eIO T",
          "package": "alsa-seq",
          "partial": "Addr",
          "signature": "T-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe-Query.html#v:getAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "getClient",
          "package": "alsa-seq",
          "signature": "T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Subscribe-Query.html#getClient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe Query",
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "getClient",
          "normalized": "T-\u003eIO T",
          "package": "alsa-seq",
          "partial": "Client",
          "signature": "T-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe-Query.html#v:getClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "getExclusive",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Bool",
          "source": "src/Sound-ALSA-Sequencer-Subscribe-Query.html#getExclusive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe Query",
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "getExclusive",
          "normalized": "T-\u003eIO Bool",
          "package": "alsa-seq",
          "partial": "Exclusive",
          "signature": "T-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe-Query.html#v:getExclusive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "getIndex",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Word",
          "source": "src/Sound-ALSA-Sequencer-Subscribe-Query.html#getIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe Query",
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "getIndex",
          "normalized": "T-\u003eIO Word",
          "package": "alsa-seq",
          "partial": "Index",
          "signature": "T-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe-Query.html#v:getIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "getNumSubs",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Word",
          "source": "src/Sound-ALSA-Sequencer-Subscribe-Query.html#getNumSubs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe Query",
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "getNumSubs",
          "normalized": "T-\u003eIO Word",
          "package": "alsa-seq",
          "partial": "Num Subs",
          "signature": "T-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe-Query.html#v:getNumSubs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "getPort",
          "package": "alsa-seq",
          "signature": "T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Subscribe-Query.html#getPort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe Query",
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "getPort",
          "normalized": "T-\u003eIO T",
          "package": "alsa-seq",
          "partial": "Port",
          "signature": "T-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe-Query.html#v:getPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "getQueue",
          "package": "alsa-seq",
          "signature": "T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Subscribe-Query.html#getQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe Query",
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "getQueue",
          "normalized": "T-\u003eIO T",
          "package": "alsa-seq",
          "partial": "Queue",
          "signature": "T-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe-Query.html#v:getQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the client/port address of a query\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "getRoot",
          "package": "alsa-seq",
          "signature": "T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Subscribe-Query.html#getRoot",
          "type": "function"
        },
        "index": {
          "description": "Set the client port address of query",
          "hierarchy": "Sound ALSA Sequencer Subscribe Query",
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "getRoot",
          "normalized": "T-\u003eIO T",
          "package": "alsa-seq",
          "partial": "Root",
          "signature": "T-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe-Query.html#v:getRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "getTimeReal",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Bool",
          "source": "src/Sound-ALSA-Sequencer-Subscribe-Query.html#getTimeReal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe Query",
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "getTimeReal",
          "normalized": "T-\u003eIO Bool",
          "package": "alsa-seq",
          "partial": "Time Real",
          "signature": "T-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe-Query.html#v:getTimeReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "getTimeUpdate",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Bool",
          "source": "src/Sound-ALSA-Sequencer-Subscribe-Query.html#getTimeUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe Query",
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "getTimeUpdate",
          "normalized": "T-\u003eIO Bool",
          "package": "alsa-seq",
          "partial": "Time Update",
          "signature": "T-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe-Query.html#v:getTimeUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "getType",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Type",
          "source": "src/Sound-ALSA-Sequencer-Subscribe-Query.html#getType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe Query",
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "getType",
          "normalized": "T-\u003eIO Type",
          "package": "alsa-seq",
          "partial": "Type",
          "signature": "T-\u003eIO Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe-Query.html#v:getType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "malloc",
          "package": "alsa-seq",
          "signature": "IO T",
          "source": "src/Sound-ALSA-Sequencer-Subscribe-Query.html#malloc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe Query",
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "malloc",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe-Query.html#v:malloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQueries a subscriber connected to (Write) or from (Read) a given address: \u003ccode\u003e\u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e seq addr typ index\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "query",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e Type -\u003e Word -\u003e IO (Maybe T)",
          "source": "src/Sound-ALSA-Sequencer-Subscribe-Query.html#query",
          "type": "function"
        },
        "index": {
          "description": "Queries subscriber connected to Write or from Read given address query seq addr typ index",
          "hierarchy": "Sound ALSA Sequencer Subscribe Query",
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "query",
          "normalized": "T a-\u003eT-\u003eType-\u003eWord-\u003eIO(Maybe T)",
          "package": "alsa-seq",
          "signature": "T mode-\u003eT-\u003eType-\u003eWord-\u003eIO(Maybe T)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe-Query.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQueries the list of subscribers accessing a port\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "queryAll",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e Type -\u003e IO [T]",
          "source": "src/Sound-ALSA-Sequencer-Subscribe-Query.html#queryAll",
          "type": "function"
        },
        "index": {
          "description": "Queries the list of subscribers accessing port",
          "hierarchy": "Sound ALSA Sequencer Subscribe Query",
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "queryAll",
          "normalized": "T a-\u003eT-\u003eType-\u003eIO[T]",
          "package": "alsa-seq",
          "partial": "All",
          "signature": "T mode-\u003eT-\u003eType-\u003eIO[T]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe-Query.html#v:queryAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "setClient",
          "package": "alsa-seq",
          "signature": "T -\u003e T -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Subscribe-Query.html#setClient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe Query",
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "setClient",
          "normalized": "T-\u003eT-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Client",
          "signature": "T-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe-Query.html#v:setClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "setIndex",
          "package": "alsa-seq",
          "signature": "T -\u003e Word -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Subscribe-Query.html#setIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe Query",
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "setIndex",
          "normalized": "T-\u003eWord-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Index",
          "signature": "T-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe-Query.html#v:setIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "setPort",
          "package": "alsa-seq",
          "signature": "T -\u003e T -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Subscribe-Query.html#setPort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe Query",
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "setPort",
          "normalized": "T-\u003eT-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Port",
          "signature": "T-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe-Query.html#v:setPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "setType",
          "package": "alsa-seq",
          "signature": "T -\u003e Type -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Subscribe-Query.html#setType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe Query",
          "module": "Sound.ALSA.Sequencer.Subscribe.Query",
          "name": "setType",
          "normalized": "T-\u003eType-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Type",
          "signature": "T-\u003eType-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe-Query.html#v:setType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains functions for working with subscriptions.\n Reference:\n \u003ca\u003ehttp://www.alsa-project.org/alsa-doc/alsa-lib/group___seq_subscribe.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "Subscribe",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Subscribe.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains functions for working with subscriptions Reference http www.alsa-project.org alsa-doc alsa-lib group seq subscribe.html",
          "hierarchy": "Sound ALSA Sequencer Subscribe",
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "Subscribe",
          "package": "alsa-seq",
          "partial": "Subscribe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "T",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Subscribe.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe",
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "T",
          "package": "alsa-seq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the content of an object to a newly created object.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "clone",
          "package": "alsa-seq",
          "signature": "T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Subscribe.html#clone",
          "type": "function"
        },
        "index": {
          "description": "Copy the content of an object to newly created object",
          "hierarchy": "Sound ALSA Sequencer Subscribe",
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "clone",
          "normalized": "T-\u003eIO T",
          "package": "alsa-seq",
          "signature": "T-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe.html#v:clone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "create",
          "package": "alsa-seq",
          "signature": "T -\u003e T -\u003e Bool -\u003e Maybe (T, Bool) -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Subscribe.html#create",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe",
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "create",
          "normalized": "T-\u003eT-\u003eBool-\u003eMaybe(T,Bool)-\u003eIO T",
          "package": "alsa-seq",
          "signature": "T-\u003eT-\u003eBool-\u003eMaybe(T,Bool)-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe.html#v:create"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "getDest",
          "package": "alsa-seq",
          "signature": "T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Subscribe.html#getDest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe",
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "getDest",
          "normalized": "T-\u003eIO T",
          "package": "alsa-seq",
          "partial": "Dest",
          "signature": "T-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe.html#v:getDest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "getExclusive",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Bool",
          "source": "src/Sound-ALSA-Sequencer-Subscribe.html#getExclusive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe",
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "getExclusive",
          "normalized": "T-\u003eIO Bool",
          "package": "alsa-seq",
          "partial": "Exclusive",
          "signature": "T-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe.html#v:getExclusive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "getQueue",
          "package": "alsa-seq",
          "signature": "T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Subscribe.html#getQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe",
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "getQueue",
          "normalized": "T-\u003eIO T",
          "package": "alsa-seq",
          "partial": "Queue",
          "signature": "T-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe.html#v:getQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "getSender",
          "package": "alsa-seq",
          "signature": "T -\u003e IO T",
          "source": "src/Sound-ALSA-Sequencer-Subscribe.html#getSender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe",
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "getSender",
          "normalized": "T-\u003eIO T",
          "package": "alsa-seq",
          "partial": "Sender",
          "signature": "T-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe.html#v:getSender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "getTimeReal",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Bool",
          "source": "src/Sound-ALSA-Sequencer-Subscribe.html#getTimeReal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe",
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "getTimeReal",
          "normalized": "T-\u003eIO Bool",
          "package": "alsa-seq",
          "partial": "Time Real",
          "signature": "T-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe.html#v:getTimeReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate an uninitialized object. (Not exported)\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "getTimeUpdate",
          "package": "alsa-seq",
          "signature": "T -\u003e IO Bool",
          "source": "src/Sound-ALSA-Sequencer-Subscribe.html#getTimeUpdate",
          "type": "function"
        },
        "index": {
          "description": "Allocate an uninitialized object Not exported",
          "hierarchy": "Sound ALSA Sequencer Subscribe",
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "getTimeUpdate",
          "normalized": "T-\u003eIO Bool",
          "package": "alsa-seq",
          "partial": "Time Update",
          "signature": "T-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe.html#v:getTimeUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "malloc",
          "package": "alsa-seq",
          "signature": "IO T",
          "source": "src/Sound-ALSA-Sequencer-Subscribe.html#malloc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe",
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "malloc",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe.html#v:malloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "setDest",
          "package": "alsa-seq",
          "signature": "T -\u003e T -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Subscribe.html#setDest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe",
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "setDest",
          "normalized": "T-\u003eT-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Dest",
          "signature": "T-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe.html#v:setDest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "setExclusive",
          "package": "alsa-seq",
          "signature": "T -\u003e Bool -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Subscribe.html#setExclusive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe",
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "setExclusive",
          "normalized": "T-\u003eBool-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Exclusive",
          "signature": "T-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe.html#v:setExclusive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "setQueue",
          "package": "alsa-seq",
          "signature": "T -\u003e T -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Subscribe.html#setQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe",
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "setQueue",
          "normalized": "T-\u003eT-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Queue",
          "signature": "T-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe.html#v:setQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "setSender",
          "package": "alsa-seq",
          "signature": "T -\u003e T -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Subscribe.html#setSender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe",
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "setSender",
          "normalized": "T-\u003eT-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Sender",
          "signature": "T-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe.html#v:setSender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "setTimeReal",
          "package": "alsa-seq",
          "signature": "T -\u003e Bool -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Subscribe.html#setTimeReal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe",
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "setTimeReal",
          "normalized": "T-\u003eBool-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Time Real",
          "signature": "T-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe.html#v:setTimeReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "setTimeUpdate",
          "package": "alsa-seq",
          "signature": "T -\u003e Bool -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Subscribe.html#setTimeUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe",
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "setTimeUpdate",
          "normalized": "T-\u003eBool-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Time Update",
          "signature": "T-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe.html#v:setTimeUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubscribe a port connection: \u003ccode\u003e\u003ccode\u003esubscribeSimple\u003c/code\u003e sender dest exclusive (Just (updatequeue, realtime))\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "subscribe",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e T -\u003e Bool -\u003e Maybe (T, Bool) -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Subscribe.html#subscribe",
          "type": "function"
        },
        "index": {
          "description": "Subscribe port connection subscribeSimple sender dest exclusive Just updatequeue realtime",
          "hierarchy": "Sound ALSA Sequencer Subscribe",
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "subscribe",
          "normalized": "T a-\u003eT-\u003eT-\u003eBool-\u003eMaybe(T,Bool)-\u003eIO()",
          "package": "alsa-seq",
          "signature": "T mode-\u003eT-\u003eT-\u003eBool-\u003eMaybe(T,Bool)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe.html#v:subscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubscribe a port connection\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "subscribePort",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Subscribe.html#subscribePort",
          "type": "function"
        },
        "index": {
          "description": "Subscribe port connection",
          "hierarchy": "Sound ALSA Sequencer Subscribe",
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "subscribePort",
          "normalized": "T a-\u003eT-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Port",
          "signature": "T mode-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe.html#v:subscribePort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsubscribe a port connection: \u003ccode\u003e\u003ccode\u003eunsubscribeSimple\u003c/code\u003e sender dest\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "unsubscribe",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e T -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Subscribe.html#unsubscribe",
          "type": "function"
        },
        "index": {
          "description": "Unsubscribe port connection unsubscribeSimple sender dest",
          "hierarchy": "Sound ALSA Sequencer Subscribe",
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "unsubscribe",
          "normalized": "T a-\u003eT-\u003eT-\u003eIO()",
          "package": "alsa-seq",
          "signature": "T mode-\u003eT-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe.html#v:unsubscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "unsubscribePort",
          "package": "alsa-seq",
          "signature": "T mode -\u003e T -\u003e IO ()",
          "source": "src/Sound-ALSA-Sequencer-Subscribe.html#unsubscribePort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Subscribe",
          "module": "Sound.ALSA.Sequencer.Subscribe",
          "name": "unsubscribePort",
          "normalized": "T a-\u003eT-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Port",
          "signature": "T mode-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Subscribe.html#v:unsubscribePort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Time",
          "name": "Time",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Time.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Time",
          "module": "Sound.ALSA.Sequencer.Time",
          "name": "Time",
          "package": "alsa-seq",
          "partial": "Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Time.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Time",
          "name": "Mode",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Time.html#Mode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Time",
          "module": "Sound.ALSA.Sequencer.Time",
          "name": "Mode",
          "package": "alsa-seq",
          "partial": "Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Time.html#t:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Time",
          "name": "Stamp",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Time.html#Stamp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Time",
          "module": "Sound.ALSA.Sequencer.Time",
          "name": "Stamp",
          "package": "alsa-seq",
          "partial": "Stamp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Time.html#t:Stamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Time",
          "name": "T",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Time.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Time",
          "module": "Sound.ALSA.Sequencer.Time",
          "name": "T",
          "package": "alsa-seq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Time.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Time",
          "name": "Absolute",
          "package": "alsa-seq",
          "signature": "Absolute",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Time.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Time",
          "module": "Sound.ALSA.Sequencer.Time",
          "name": "Absolute",
          "package": "alsa-seq",
          "partial": "Absolute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Time.html#v:Absolute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Time",
          "name": "Cons",
          "package": "alsa-seq",
          "signature": "Cons",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Time.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Time",
          "module": "Sound.ALSA.Sequencer.Time",
          "name": "Cons",
          "package": "alsa-seq",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Time.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Time",
          "name": "Real",
          "package": "alsa-seq",
          "signature": "Real !T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Time.html#Stamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Time",
          "module": "Sound.ALSA.Sequencer.Time",
          "name": "Real",
          "package": "alsa-seq",
          "partial": "Real",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Time.html#v:Real"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Time",
          "name": "Relative",
          "package": "alsa-seq",
          "signature": "Relative",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Time.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Time",
          "module": "Sound.ALSA.Sequencer.Time",
          "name": "Relative",
          "package": "alsa-seq",
          "partial": "Relative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Time.html#v:Relative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Time",
          "name": "Tick",
          "package": "alsa-seq",
          "signature": "Tick !Tick",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Time.html#Stamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Time",
          "module": "Sound.ALSA.Sequencer.Time",
          "name": "Tick",
          "package": "alsa-seq",
          "partial": "Tick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Time.html#v:Tick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Time",
          "name": "consAbs",
          "package": "alsa-seq",
          "signature": "Stamp -\u003e T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Time.html#consAbs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Time",
          "module": "Sound.ALSA.Sequencer.Time",
          "name": "consAbs",
          "normalized": "Stamp-\u003eT",
          "package": "alsa-seq",
          "partial": "Abs",
          "signature": "Stamp-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Time.html#v:consAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Time",
          "name": "consRel",
          "package": "alsa-seq",
          "signature": "Stamp -\u003e T",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Time.html#consRel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Time",
          "module": "Sound.ALSA.Sequencer.Time",
          "name": "consRel",
          "normalized": "Stamp-\u003eT",
          "package": "alsa-seq",
          "partial": "Rel",
          "signature": "Stamp-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Time.html#v:consRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Time",
          "name": "mode",
          "package": "alsa-seq",
          "signature": "Mode",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Time.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Time",
          "module": "Sound.ALSA.Sequencer.Time",
          "name": "mode",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Time.html#v:mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer.Time",
          "name": "stamp",
          "package": "alsa-seq",
          "signature": "Stamp",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Time.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer Time",
          "module": "Sound.ALSA.Sequencer.Time",
          "name": "stamp",
          "package": "alsa-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer-Time.html#v:stamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOverview: \u003ca\u003ehttp://www.alsa-project.org/alsa-doc/alsa-lib/seq.html\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eWARNING: This whole library does not seem to be particlarly thread aware.\n Perhaps place the sequencer handle in an MVar?\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.ALSA.Sequencer",
          "name": "Sequencer",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer.html",
          "type": "module"
        },
        "index": {
          "description": "Overview http www.alsa-project.org alsa-doc alsa-lib seq.html WARNING This whole library does not seem to be particlarly thread aware Perhaps place the sequencer handle in an MVar",
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "Sequencer",
          "package": "alsa-seq",
          "partial": "Sequencer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer",
          "name": "AllowInput",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Sequencer.html#AllowInput",
          "type": "class"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "AllowInput",
          "package": "alsa-seq",
          "partial": "Allow Input",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#t:AllowInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer",
          "name": "AllowOutput",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Sequencer.html#AllowOutput",
          "type": "class"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "AllowOutput",
          "package": "alsa-seq",
          "partial": "Allow Output",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#t:AllowOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlocking behavior of the sequencer device.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer",
          "name": "BlockMode",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Sequencer.html#BlockMode",
          "type": "data"
        },
        "index": {
          "description": "Blocking behavior of the sequencer device",
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "BlockMode",
          "package": "alsa-seq",
          "partial": "Block Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#t:BlockMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer",
          "name": "DuplexMode",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Sequencer.html#DuplexMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "DuplexMode",
          "package": "alsa-seq",
          "partial": "Duplex Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#t:DuplexMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer",
          "name": "InputMode",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Sequencer.html#InputMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "InputMode",
          "package": "alsa-seq",
          "partial": "Input Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#t:InputMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead/Write permissions for the sequencer device.\n This way we prevent the ALSA exception 22 \u003ca\u003eInvalid argument\u003c/a\u003e\n when calling \u003ccode\u003eevent_output\u003c/code\u003e on an input-only sequencer.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer",
          "name": "OpenMode",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Sequencer.html#OpenMode",
          "type": "class"
        },
        "index": {
          "description": "Read Write permissions for the sequencer device This way we prevent the ALSA exception Invalid argument when calling event output on an input-only sequencer",
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "OpenMode",
          "package": "alsa-seq",
          "partial": "Open Mode",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#t:OpenMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer",
          "name": "OutputMode",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Sequencer.html#OutputMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "OutputMode",
          "package": "alsa-seq",
          "partial": "Output Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#t:OutputMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of sequencer handles.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer",
          "name": "T",
          "package": "alsa-seq",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Sequencer.html#T",
          "type": "data"
        },
        "index": {
          "description": "The type of sequencer handles",
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "T",
          "package": "alsa-seq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperations may block.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer",
          "name": "Block",
          "package": "alsa-seq",
          "signature": "Block",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Sequencer.html#BlockMode",
          "type": "function"
        },
        "index": {
          "description": "Operations may block",
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "Block",
          "package": "alsa-seq",
          "partial": "Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#v:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer",
          "name": "DuplexMode",
          "package": "alsa-seq",
          "signature": "DuplexMode",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Sequencer.html#DuplexMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "DuplexMode",
          "package": "alsa-seq",
          "partial": "Duplex Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#v:DuplexMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer",
          "name": "InputMode",
          "package": "alsa-seq",
          "signature": "InputMode",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Sequencer.html#InputMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "InputMode",
          "package": "alsa-seq",
          "partial": "Input Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#v:InputMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow exceptions instead of blocking.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer",
          "name": "Nonblock",
          "package": "alsa-seq",
          "signature": "Nonblock",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Sequencer.html#BlockMode",
          "type": "function"
        },
        "index": {
          "description": "Throw exceptions instead of blocking",
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "Nonblock",
          "package": "alsa-seq",
          "partial": "Nonblock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#v:Nonblock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer",
          "name": "OutputMode",
          "package": "alsa-seq",
          "signature": "OutputMode",
          "source": "src/Sound-ALSA-Sequencer-Marshal-Sequencer.html#OutputMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "OutputMode",
          "package": "alsa-seq",
          "partial": "Output Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#v:OutputMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose the sequencer. Closes the sequencer client and releases its\n resources. After a client is closed, an event with \u003ccode\u003eClientExit\u003c/code\u003e is\n broadcast to announce port. The connection between other clients are\n disconnected. Call this just before exiting your program.\n NOTE: we could put this in a finalizer for the handle?\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer",
          "name": "close",
          "package": "alsa-seq",
          "signature": "T mode-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Close the sequencer Closes the sequencer client and releases its resources After client is closed an event with ClientExit is broadcast to announce port The connection between other clients are disconnected Call this just before exiting your program NOTE we could put this in finalizer for the handle",
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "close",
          "normalized": "T a-\u003eIO()",
          "package": "alsa-seq",
          "signature": "T mode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the name that should be passed to \u003ccode\u003e\u003ca\u003eopen\u003c/a\u003e\u003c/code\u003e in most cases.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer",
          "name": "defaultName",
          "package": "alsa-seq",
          "signature": "String",
          "source": "src/Sound-ALSA-Sequencer-Sequencer.html#defaultName",
          "type": "function"
        },
        "index": {
          "description": "This is the name that should be passed to open in most cases",
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "defaultName",
          "package": "alsa-seq",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#v:defaultName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the byte size of input buffer.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer",
          "name": "getInputBufferSize",
          "package": "alsa-seq",
          "signature": "T mode-\u003e IO Word",
          "type": "function"
        },
        "index": {
          "description": "Return the byte size of input buffer",
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "getInputBufferSize",
          "normalized": "T a-\u003eIO Word",
          "package": "alsa-seq",
          "partial": "Input Buffer Size",
          "signature": "T mode-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#v:getInputBufferSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet identifier of a sequencer handle.\n It is the same identifier specified in the call to \u003ccode\u003e\u003ca\u003eopen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer",
          "name": "getName",
          "package": "alsa-seq",
          "signature": "T mode-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Get identifier of sequencer handle It is the same identifier specified in the call to open",
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "getName",
          "normalized": "T a-\u003eIO String",
          "package": "alsa-seq",
          "partial": "Name",
          "signature": "T mode-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#v:getName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the byte size of the output buffer.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer",
          "name": "getOutputBufferSize",
          "package": "alsa-seq",
          "signature": "T mode-\u003e IO Word",
          "type": "function"
        },
        "index": {
          "description": "Return the byte size of the output buffer",
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "getOutputBufferSize",
          "normalized": "T a-\u003eIO Word",
          "package": "alsa-seq",
          "partial": "Output Buffer Size",
          "signature": "T mode-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#v:getOutputBufferSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new handle and opens a connection to the kernel sequencer\n interface. After a client is created successfully,\n a \u003ccode\u003eClientStart\u003c/code\u003e event is broadcast to the announce port.\n May throw an exception.\n See also: \u003ccode\u003eopen_lconf\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eclose\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eget_seq_type\u003c/code\u003e,\n   \u003ccode\u003eget_seq_name\u003c/code\u003e, \u003ccode\u003eset_blocking\u003c/code\u003e, \u003ccode\u003eget_client_id\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer",
          "name": "open",
          "package": "alsa-seq",
          "signature": "String-\u003e BlockMode-\u003e IO (T mode)",
          "type": "function"
        },
        "index": {
          "description": "Creates new handle and opens connection to the kernel sequencer interface After client is created successfully ClientStart event is broadcast to the announce port May throw an exception See also open lconf close get seq type get seq name set blocking get client id",
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "open",
          "normalized": "String-\u003eBlockMode-\u003eIO(T a)",
          "package": "alsa-seq",
          "signature": "String-\u003eBlockMode-\u003eIO(T mode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#v:open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer",
          "name": "openDefault",
          "package": "alsa-seq",
          "signature": "BlockMode-\u003e IO (T mode)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "openDefault",
          "normalized": "BlockMode-\u003eIO(T a)",
          "package": "alsa-seq",
          "partial": "Default",
          "signature": "BlockMode-\u003eIO(T mode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#v:openDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReset the input pool.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer",
          "name": "resetPoolInput",
          "package": "alsa-seq",
          "signature": "T mode-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Reset the input pool",
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "resetPoolInput",
          "normalized": "T a-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Pool Input",
          "signature": "T mode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#v:resetPoolInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReset the output pool.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer",
          "name": "resetPoolOutput",
          "package": "alsa-seq",
          "signature": "T mode-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Reset the output pool",
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "resetPoolOutput",
          "normalized": "T a-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Pool Output",
          "signature": "T mode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#v:resetPoolOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the blocking mode of the given client.\n In block mode, the client falls into sleep when it fills the output\n pool with events, or when it demands events from an empty input pool.\n memory pool with full events. Clients that are sleeping due to\n loack of space in the output pool are woken when a certain\n amount of free space becomes available (see \u003ccode\u003eset_output_room\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer",
          "name": "setBlocking",
          "package": "alsa-seq",
          "signature": "T mode-\u003e BlockMode-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Change the blocking mode of the given client In block mode the client falls into sleep when it fills the output pool with events or when it demands events from an empty input pool memory pool with full events Clients that are sleeping due to loack of space in the output pool are woken when certain amount of free space becomes available see set output room",
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "setBlocking",
          "normalized": "T a-\u003eBlockMode-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Blocking",
          "signature": "T mode-\u003eBlockMode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#v:setBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResize the input buffer.\n This function clears all input events (see \u003ccode\u003edrop_input\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer",
          "name": "setInputBufferSize",
          "package": "alsa-seq",
          "signature": "T mode-\u003e Word-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Resize the input buffer This function clears all input events see drop input",
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "setInputBufferSize",
          "normalized": "T a-\u003eWord-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Input Buffer Size",
          "signature": "T mode-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#v:setInputBufferSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResize of the output buffer.\n This function clears all output events (see \u003ccode\u003edrop_output\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer",
          "name": "setOutputBufferSize",
          "package": "alsa-seq",
          "signature": "T mode-\u003e Word-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Resize of the output buffer This function clears all output events see drop output",
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "setOutputBufferSize",
          "normalized": "T a-\u003eWord-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Output Buffer Size",
          "signature": "T mode-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#v:setOutputBufferSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResize the input memory pool.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer",
          "name": "setPoolInput",
          "package": "alsa-seq",
          "signature": "T mode-\u003e Word-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Resize the input memory pool",
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "setPoolInput",
          "normalized": "T a-\u003eWord-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Pool Input",
          "signature": "T mode-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#v:setPoolInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResize the output memory pool.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer",
          "name": "setPoolOutput",
          "package": "alsa-seq",
          "signature": "T mode-\u003e Word-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Resize the output memory pool",
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "setPoolOutput",
          "normalized": "T a-\u003eWord-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Pool Output",
          "signature": "T mode-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#v:setPoolOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify how much space should become free before waking clients\n that are blocked due to a lack of space in the output pool.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Sequencer",
          "name": "setPoolOutputRoom",
          "package": "alsa-seq",
          "signature": "T mode-\u003e Word-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Specify how much space should become free before waking clients that are blocked due to lack of space in the output pool",
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "setPoolOutputRoom",
          "normalized": "T a-\u003eWord-\u003eIO()",
          "package": "alsa-seq",
          "partial": "Pool Output Room",
          "signature": "T mode-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#v:setPoolOutputRoom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer",
          "name": "with",
          "package": "alsa-seq",
          "signature": "String-\u003e BlockMode-\u003e (T mode -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "with",
          "normalized": "String-\u003eBlockMode-\u003e(T a-\u003eIO b)-\u003eIO b",
          "package": "alsa-seq",
          "signature": "String-\u003eBlockMode-\u003e(T mode-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#v:with"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Sequencer",
          "name": "withDefault",
          "package": "alsa-seq",
          "signature": "BlockMode -\u003e (T mode -\u003e IO a) -\u003e IO a",
          "source": "src/Sound-ALSA-Sequencer-Sequencer.html#withDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Sequencer",
          "module": "Sound.ALSA.Sequencer",
          "name": "withDefault",
          "normalized": "BlockMode-\u003e(T a-\u003eIO b)-\u003eIO b",
          "package": "alsa-seq",
          "partial": "Default",
          "signature": "BlockMode-\u003e(T mode-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-seq/docs/Sound-ALSA-Sequencer.html#v:withDefault"
      }
    }
  ]
]