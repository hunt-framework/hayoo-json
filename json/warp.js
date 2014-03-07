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
        "word": "warp"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp.Buffer",
          "name": "Buffer",
          "package": "warp",
          "source": "src/Network-Wai-Handler-Warp-Buffer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp Buffer",
          "module": "Network.Wai.Handler.Warp.Buffer",
          "name": "Buffer",
          "package": "warp",
          "partial": "Buffer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp-Buffer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp.Buffer",
          "name": "BufSize",
          "package": "warp",
          "source": "src/Network-Wai-Handler-Warp-Buffer.html#BufSize",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp Buffer",
          "module": "Network.Wai.Handler.Warp.Buffer",
          "name": "BufSize",
          "package": "warp",
          "partial": "Buf Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp-Buffer.html#t:BufSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp.Buffer",
          "name": "Buffer",
          "package": "warp",
          "source": "src/Network-Wai-Handler-Warp-Buffer.html#Buffer",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp Buffer",
          "module": "Network.Wai.Handler.Warp.Buffer",
          "name": "Buffer",
          "package": "warp",
          "partial": "Buffer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp-Buffer.html#t:Buffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp.Buffer",
          "name": "allocateBuffer",
          "package": "warp",
          "signature": "Int -\u003e IO Buffer",
          "source": "src/Network-Wai-Handler-Warp-Buffer.html#allocateBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp Buffer",
          "module": "Network.Wai.Handler.Warp.Buffer",
          "name": "allocateBuffer",
          "normalized": "Int-\u003eIO Buffer",
          "package": "warp",
          "partial": "Buffer",
          "signature": "Int-\u003eIO Buffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp-Buffer.html#v:allocateBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp.Buffer",
          "name": "bufferSize",
          "package": "warp",
          "signature": "BufSize",
          "source": "src/Network-Wai-Handler-Warp-Buffer.html#bufferSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp Buffer",
          "module": "Network.Wai.Handler.Warp.Buffer",
          "name": "bufferSize",
          "package": "warp",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp-Buffer.html#v:bufferSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp.Buffer",
          "name": "freeBuffer",
          "package": "warp",
          "signature": "Buffer -\u003e IO ()",
          "source": "src/Network-Wai-Handler-Warp-Buffer.html#freeBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp Buffer",
          "module": "Network.Wai.Handler.Warp.Buffer",
          "name": "freeBuffer",
          "normalized": "Buffer-\u003eIO()",
          "package": "warp",
          "partial": "Buffer",
          "signature": "Buffer-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp-Buffer.html#v:freeBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp.Buffer",
          "name": "toBlazeBuffer",
          "package": "warp",
          "signature": "Buffer -\u003e BufSize -\u003e IO Buffer",
          "source": "src/Network-Wai-Handler-Warp-Buffer.html#toBlazeBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp Buffer",
          "module": "Network.Wai.Handler.Warp.Buffer",
          "name": "toBlazeBuffer",
          "normalized": "Buffer-\u003eBufSize-\u003eIO Buffer",
          "package": "warp",
          "partial": "Blaze Buffer",
          "signature": "Buffer-\u003eBufSize-\u003eIO Buffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp-Buffer.html#v:toBlazeBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn order to provide slowloris protection, Warp provides timeout handlers. We\n follow these rules:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A timeout is created when a connection is opened.\n\u003c/li\u003e\u003cli\u003e When all request headers are read, the timeout is tickled.\n\u003c/li\u003e\u003cli\u003e Every time at least 2048 bytes of the request body are read, the timeout\n   is tickled.\n\u003c/li\u003e\u003cli\u003e The timeout is paused while executing user code. This will apply to both\n   the application itself, and a ResponseSource response. The timeout is\n   resumed as soon as we return from user code.\n\u003c/li\u003e\u003cli\u003e Every time data is successfully sent to the client, the timeout is tickled.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Network.Wai.Handler.Warp.Timeout",
          "name": "Timeout",
          "package": "warp",
          "source": "src/Network-Wai-Handler-Warp-Timeout.html",
          "type": "module"
        },
        "index": {
          "description": "In order to provide slowloris protection Warp provides timeout handlers We follow these rules timeout is created when connection is opened When all request headers are read the timeout is tickled Every time at least bytes of the request body are read the timeout is tickled The timeout is paused while executing user code This will apply to both the application itself and ResponseSource response The timeout is resumed as soon as we return from user code Every time data is successfully sent to the client the timeout is tickled",
          "hierarchy": "Network Wai Handler Warp Timeout",
          "module": "Network.Wai.Handler.Warp.Timeout",
          "name": "Timeout",
          "package": "warp",
          "partial": "Timeout",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp-Timeout.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handle used by \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp.Timeout",
          "name": "Handle",
          "package": "warp",
          "source": "src/Network-Wai-Handler-Warp-Timeout.html#Handle",
          "type": "data"
        },
        "index": {
          "description": "handle used by Manager",
          "hierarchy": "Network Wai Handler Warp Timeout",
          "module": "Network.Wai.Handler.Warp.Timeout",
          "name": "Handle",
          "package": "warp",
          "partial": "Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp-Timeout.html#t:Handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA timeout manager\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp.Timeout",
          "name": "Manager",
          "package": "warp",
          "source": "src/Network-Wai-Handler-Warp-Timeout.html#Manager",
          "type": "data"
        },
        "index": {
          "description": "timeout manager",
          "hierarchy": "Network Wai Handler Warp Timeout",
          "module": "Network.Wai.Handler.Warp.Timeout",
          "name": "Manager",
          "package": "warp",
          "partial": "Manager",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp-Timeout.html#t:Manager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn action to be performed on timeout.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp.Timeout",
          "name": "TimeoutAction",
          "package": "warp",
          "source": "src/Network-Wai-Handler-Warp-Timeout.html#TimeoutAction",
          "type": "type"
        },
        "index": {
          "description": "An action to be performed on timeout",
          "hierarchy": "Network Wai Handler Warp Timeout",
          "module": "Network.Wai.Handler.Warp.Timeout",
          "name": "TimeoutAction",
          "package": "warp",
          "partial": "Timeout Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp-Timeout.html#t:TimeoutAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSetting the state to canceled.\n   \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e eventually removes this without timeout action.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp.Timeout",
          "name": "cancel",
          "package": "warp",
          "signature": "Handle -\u003e IO ()",
          "source": "src/Network-Wai-Handler-Warp-Timeout.html#cancel",
          "type": "function"
        },
        "index": {
          "description": "Setting the state to canceled Manager eventually removes this without timeout action",
          "hierarchy": "Network Wai Handler Warp Timeout",
          "module": "Network.Wai.Handler.Warp.Timeout",
          "name": "cancel",
          "normalized": "Handle-\u003eIO()",
          "package": "warp",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp-Timeout.html#v:cancel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating timeout manager which works every N micro seconds\n   where N is the first argument.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp.Timeout",
          "name": "initialize",
          "package": "warp",
          "signature": "Int -\u003e IO Manager",
          "source": "src/Network-Wai-Handler-Warp-Timeout.html#initialize",
          "type": "function"
        },
        "index": {
          "description": "Creating timeout manager which works every micro seconds where is the first argument",
          "hierarchy": "Network Wai Handler Warp Timeout",
          "module": "Network.Wai.Handler.Warp.Timeout",
          "name": "initialize",
          "normalized": "Int-\u003eIO Manager",
          "package": "warp",
          "signature": "Int-\u003eIO Manager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp-Timeout.html#v:initialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSetting the state to paused.\n   \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e does not change the value.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp.Timeout",
          "name": "pause",
          "package": "warp",
          "signature": "Handle -\u003e IO ()",
          "source": "src/Network-Wai-Handler-Warp-Timeout.html#pause",
          "type": "function"
        },
        "index": {
          "description": "Setting the state to paused Manager does not change the value",
          "hierarchy": "Network Wai Handler Warp Timeout",
          "module": "Network.Wai.Handler.Warp.Timeout",
          "name": "pause",
          "normalized": "Handle-\u003eIO()",
          "package": "warp",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp-Timeout.html#v:pause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegistering a timeout action.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp.Timeout",
          "name": "register",
          "package": "warp",
          "signature": "Manager -\u003e TimeoutAction -\u003e IO Handle",
          "source": "src/Network-Wai-Handler-Warp-Timeout.html#register",
          "type": "function"
        },
        "index": {
          "description": "Registering timeout action",
          "hierarchy": "Network Wai Handler Warp Timeout",
          "module": "Network.Wai.Handler.Warp.Timeout",
          "name": "register",
          "normalized": "Manager-\u003eTimeoutAction-\u003eIO Handle",
          "package": "warp",
          "signature": "Manager-\u003eTimeoutAction-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp-Timeout.html#v:register"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegistering a timeout action of killing this thread.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp.Timeout",
          "name": "registerKillThread",
          "package": "warp",
          "signature": "Manager -\u003e IO Handle",
          "source": "src/Network-Wai-Handler-Warp-Timeout.html#registerKillThread",
          "type": "function"
        },
        "index": {
          "description": "Registering timeout action of killing this thread",
          "hierarchy": "Network Wai Handler Warp Timeout",
          "module": "Network.Wai.Handler.Warp.Timeout",
          "name": "registerKillThread",
          "normalized": "Manager-\u003eIO Handle",
          "package": "warp",
          "partial": "Kill Thread",
          "signature": "Manager-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp-Timeout.html#v:registerKillThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSetting the paused state to active.\n   This is an alias to \u003ccode\u003e\u003ca\u003etickle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp.Timeout",
          "name": "resume",
          "package": "warp",
          "signature": "Handle -\u003e IO ()",
          "source": "src/Network-Wai-Handler-Warp-Timeout.html#resume",
          "type": "function"
        },
        "index": {
          "description": "Setting the paused state to active This is an alias to tickle",
          "hierarchy": "Network Wai Handler Warp Timeout",
          "module": "Network.Wai.Handler.Warp.Timeout",
          "name": "resume",
          "normalized": "Handle-\u003eIO()",
          "package": "warp",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp-Timeout.html#v:resume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStopping timeout manager.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp.Timeout",
          "name": "stopManager",
          "package": "warp",
          "signature": "Manager -\u003e IO ()",
          "source": "src/Network-Wai-Handler-Warp-Timeout.html#stopManager",
          "type": "function"
        },
        "index": {
          "description": "Stopping timeout manager",
          "hierarchy": "Network Wai Handler Warp Timeout",
          "module": "Network.Wai.Handler.Warp.Timeout",
          "name": "stopManager",
          "normalized": "Manager-\u003eIO()",
          "package": "warp",
          "partial": "Manager",
          "signature": "Manager-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp-Timeout.html#v:stopManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSetting the state to active.\n   \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e turns active to inactive repeatedly.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp.Timeout",
          "name": "tickle",
          "package": "warp",
          "signature": "Handle -\u003e IO ()",
          "source": "src/Network-Wai-Handler-Warp-Timeout.html#tickle",
          "type": "function"
        },
        "index": {
          "description": "Setting the state to active Manager turns active to inactive repeatedly",
          "hierarchy": "Network Wai Handler Warp Timeout",
          "module": "Network.Wai.Handler.Warp.Timeout",
          "name": "tickle",
          "normalized": "Handle-\u003eIO()",
          "package": "warp",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp-Timeout.html#v:tickle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall the inner function with a timeout manager.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp.Timeout",
          "name": "withManager",
          "package": "warp",
          "signature": "Int-\u003e (Manager -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Call the inner function with timeout manager",
          "hierarchy": "Network Wai Handler Warp Timeout",
          "module": "Network.Wai.Handler.Warp.Timeout",
          "name": "withManager",
          "normalized": "Int-\u003e(Manager-\u003eIO a)-\u003eIO a",
          "package": "warp",
          "partial": "Manager",
          "signature": "Int-\u003e(Manager-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp-Timeout.html#v:withManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA fast, light-weight HTTP server handler for WAI.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "Warp",
          "package": "warp",
          "source": "src/Network-Wai-Handler-Warp.html",
          "type": "module"
        },
        "index": {
          "description": "fast light-weight HTTP server handler for WAI",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "Warp",
          "package": "warp",
          "partial": "Warp",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether or not \u003ccode\u003e\u003ca\u003eConnSendFileOverride\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e can be\n   overridden. This is a kind of hack to keep the signature of\n   \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e clean.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "ConnSendFileOverride",
          "package": "warp",
          "source": "src/Network-Wai-Handler-Warp-Types.html#ConnSendFileOverride",
          "type": "data"
        },
        "index": {
          "description": "Whether or not ConnSendFileOverride in Connection can be overridden This is kind of hack to keep the signature of Connection clean",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "ConnSendFileOverride",
          "package": "warp",
          "partial": "Conn Send File Override",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#t:ConnSendFileOverride"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type to manipulate IO actions for connections.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "Connection",
          "package": "warp",
          "source": "src/Network-Wai-Handler-Warp-Types.html#Connection",
          "type": "data"
        },
        "index": {
          "description": "Data type to manipulate IO actions for connections",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "Connection",
          "package": "warp",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the cache of the Date header value.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "DateCache",
          "package": "warp",
          "source": "src/Network-Wai-Handler-Warp-Date.html#DateCache",
          "type": "data"
        },
        "index": {
          "description": "The type of the cache of the Date header value",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "DateCache",
          "package": "warp",
          "partial": "Date Cache",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#t:DateCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the Date header value.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "GMTDate",
          "package": "warp",
          "source": "src/Network-Wai-Handler-Warp-Date.html#GMTDate",
          "type": "type"
        },
        "index": {
          "description": "The type of the Date header value",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "GMTDate",
          "package": "warp",
          "partial": "GMTDate",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#t:GMTDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type for header value used with \u003ccode\u003e\u003ca\u003eHeaderName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "HeaderValue",
          "package": "warp",
          "source": "src/Network-Wai-Handler-Warp-Types.html#HeaderValue",
          "type": "type"
        },
        "index": {
          "description": "The type for header value used with HeaderName",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "HeaderValue",
          "package": "warp",
          "partial": "Header Value",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#t:HeaderValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhich host to bind.\n\u003c/p\u003e\u003cp\u003eNote: The \u003ccode\u003eIsString\u003c/code\u003e instance recognizes the following special values:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e*\u003c/code\u003e means \u003ccode\u003eHostAny\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e*4\u003c/code\u003e means \u003ccode\u003eHostIPv4\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e*6\u003c/code\u003e means \u003ccode\u003eHostIPv6\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "HostPreference",
          "package": "warp",
          "type": "data"
        },
        "index": {
          "description": "Which host to bind Note The IsString instance recognizes the following special values means HostAny means HostIPv4 means HostIPv6",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "HostPreference",
          "package": "warp",
          "partial": "Host Preference",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#t:HostPreference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArray for a set of HTTP headers.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "IndexedHeader",
          "package": "warp",
          "source": "src/Network-Wai-Handler-Warp-Header.html#IndexedHeader",
          "type": "type"
        },
        "index": {
          "description": "Array for set of HTTP headers",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "IndexedHeader",
          "package": "warp",
          "partial": "Indexed Header",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#t:IndexedHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal information.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "InternalInfo",
          "package": "warp",
          "source": "src/Network-Wai-Handler-Warp-Types.html#InternalInfo",
          "type": "data"
        },
        "index": {
          "description": "Internal information",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "InternalInfo",
          "package": "warp",
          "partial": "Internal Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#t:InternalInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError types for bad \u003ccode\u003eRequest\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "InvalidRequest",
          "package": "warp",
          "source": "src/Network-Wai-Handler-Warp-Types.html#InvalidRequest",
          "type": "data"
        },
        "index": {
          "description": "Error types for bad Request",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "InvalidRequest",
          "package": "warp",
          "partial": "Invalid Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#t:InvalidRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutable Fd cacher.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "MutableFdCache",
          "package": "warp",
          "source": "src/Network-Wai-Handler-Warp-FdCache.html#MutableFdCache",
          "type": "data"
        },
        "index": {
          "description": "Mutable Fd cacher",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "MutableFdCache",
          "package": "warp",
          "partial": "Mutable Fd Cache",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#t:MutableFdCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTCP port number.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "Port",
          "package": "warp",
          "source": "src/Network-Wai-Handler-Warp-Types.html#Port",
          "type": "type"
        },
        "index": {
          "description": "TCP port number",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "Port",
          "package": "warp",
          "partial": "Port",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#t:Port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn action to activate a Fd cache entry.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "Refresh",
          "package": "warp",
          "source": "src/Network-Wai-Handler-Warp-FdCache.html#Refresh",
          "type": "type"
        },
        "index": {
          "description": "An action to activate Fd cache entry",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "Refresh",
          "package": "warp",
          "partial": "Refresh",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#t:Refresh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVarious Warp server settings. This is purposely kept as an abstract data\n type so that new settings can be added without breaking backwards\n compatibility. In order to create a \u003ccode\u003e\u003ca\u003eSettings\u003c/a\u003e\u003c/code\u003e value, use \u003ccode\u003e\u003ca\u003edefaultSettings\u003c/a\u003e\u003c/code\u003e\n and record syntax to modify individual records. For example:\n\u003c/p\u003e\u003cpre\u003e defaultSettings { settingsTimeout = 20 }\n\u003c/pre\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "Settings",
          "package": "warp",
          "source": "src/Network-Wai-Handler-Warp-Settings.html#Settings",
          "type": "data"
        },
        "index": {
          "description": "Various Warp server settings This is purposely kept as an abstract data type so that new settings can be added without breaking backwards compatibility In order to create Settings value use defaultSettings and record syntax to modify individual records For example defaultSettings settingsTimeout",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "Settings",
          "package": "warp",
          "partial": "Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#t:Settings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp",
          "name": "BadFirstLine",
          "package": "warp",
          "signature": "BadFirstLine String",
          "source": "src/Network-Wai-Handler-Warp-Types.html#InvalidRequest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "BadFirstLine",
          "package": "warp",
          "partial": "Bad First Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:BadFirstLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp",
          "name": "Connection",
          "package": "warp",
          "signature": "Connection",
          "source": "src/Network-Wai-Handler-Warp-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "Connection",
          "package": "warp",
          "partial": "Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp",
          "name": "ConnectionClosedByPeer",
          "package": "warp",
          "signature": "ConnectionClosedByPeer",
          "source": "src/Network-Wai-Handler-Warp-Types.html#InvalidRequest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "ConnectionClosedByPeer",
          "package": "warp",
          "partial": "Connection Closed By Peer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:ConnectionClosedByPeer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp",
          "name": "Host",
          "package": "warp",
          "signature": "Host String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "Host",
          "package": "warp",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp",
          "name": "HostAny",
          "package": "warp",
          "signature": "HostAny",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "HostAny",
          "package": "warp",
          "partial": "Host Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:HostAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp",
          "name": "HostIPv4",
          "package": "warp",
          "signature": "HostIPv4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "HostIPv4",
          "package": "warp",
          "partial": "Host IPv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:HostIPv4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp",
          "name": "HostIPv6",
          "package": "warp",
          "signature": "HostIPv6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "HostIPv6",
          "package": "warp",
          "partial": "Host IPv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:HostIPv6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp",
          "name": "IncompleteHeaders",
          "package": "warp",
          "signature": "IncompleteHeaders",
          "source": "src/Network-Wai-Handler-Warp-Types.html#InvalidRequest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "IncompleteHeaders",
          "package": "warp",
          "partial": "Incomplete Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:IncompleteHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp",
          "name": "InternalInfo",
          "package": "warp",
          "signature": "InternalInfo",
          "source": "src/Network-Wai-Handler-Warp-Types.html#InternalInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "InternalInfo",
          "package": "warp",
          "partial": "Internal Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:InternalInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp",
          "name": "NonHttp",
          "package": "warp",
          "signature": "NonHttp",
          "source": "src/Network-Wai-Handler-Warp-Types.html#InvalidRequest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "NonHttp",
          "package": "warp",
          "partial": "Non Http",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:NonHttp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp",
          "name": "NotEnoughLines",
          "package": "warp",
          "signature": "NotEnoughLines [String]",
          "source": "src/Network-Wai-Handler-Warp-Types.html#InvalidRequest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "NotEnoughLines",
          "normalized": "NotEnoughLines[String]",
          "package": "warp",
          "partial": "Not Enough Lines",
          "signature": "NotEnoughLines[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:NotEnoughLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDon't override\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "NotOverride",
          "package": "warp",
          "signature": "NotOverride",
          "source": "src/Network-Wai-Handler-Warp-Types.html#ConnSendFileOverride",
          "type": "function"
        },
        "index": {
          "description": "Don override",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "NotOverride",
          "package": "warp",
          "partial": "Not Override",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:NotOverride"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp",
          "name": "OverLargeHeader",
          "package": "warp",
          "signature": "OverLargeHeader",
          "source": "src/Network-Wai-Handler-Warp-Types.html#InvalidRequest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "OverLargeHeader",
          "package": "warp",
          "partial": "Over Large Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:OverLargeHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOverride with this \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "Override",
          "package": "warp",
          "signature": "Override Socket",
          "source": "src/Network-Wai-Handler-Warp-Types.html#ConnSendFileOverride",
          "type": "function"
        },
        "index": {
          "description": "Override with this Socket",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "Override",
          "package": "warp",
          "partial": "Override",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:Override"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp",
          "name": "connBuffer",
          "package": "warp",
          "signature": "Buffer",
          "source": "src/Network-Wai-Handler-Warp-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "connBuffer",
          "package": "warp",
          "partial": "Buffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:connBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp",
          "name": "connBufferSize",
          "package": "warp",
          "signature": "BufSize",
          "source": "src/Network-Wai-Handler-Warp-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "connBufferSize",
          "package": "warp",
          "partial": "Buffer Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:connBufferSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp",
          "name": "connClose",
          "package": "warp",
          "signature": "IO ()",
          "source": "src/Network-Wai-Handler-Warp-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "connClose",
          "normalized": "IO()",
          "package": "warp",
          "partial": "Close",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:connClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp",
          "name": "connRecv",
          "package": "warp",
          "signature": "IO ByteString",
          "source": "src/Network-Wai-Handler-Warp-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "connRecv",
          "package": "warp",
          "partial": "Recv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:connRecv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp",
          "name": "connSendAll",
          "package": "warp",
          "signature": "ByteString -\u003e IO ()",
          "source": "src/Network-Wai-Handler-Warp-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "connSendAll",
          "normalized": "ByteString-\u003eIO()",
          "package": "warp",
          "partial": "Send All",
          "signature": "ByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:connSendAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilepath, offset, length, hook action, HTTP headers\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "connSendFile",
          "package": "warp",
          "signature": "FilePath -\u003e Integer -\u003e Integer -\u003e IO () -\u003e [ByteString] -\u003e IO ()",
          "source": "src/Network-Wai-Handler-Warp-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "description": "filepath offset length hook action HTTP headers",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "connSendFile",
          "normalized": "FilePath-\u003eInteger-\u003eInteger-\u003eIO()-\u003e[ByteString]-\u003eIO()",
          "package": "warp",
          "partial": "Send File",
          "signature": "FilePath-\u003eInteger-\u003eInteger-\u003eIO()-\u003e[ByteString]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:connSendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp",
          "name": "connSendFileOverride",
          "package": "warp",
          "signature": "ConnSendFileOverride",
          "source": "src/Network-Wai-Handler-Warp-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "connSendFileOverride",
          "package": "warp",
          "partial": "Send File Override",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:connSendFileOverride"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp",
          "name": "connSendMany",
          "package": "warp",
          "signature": "[ByteString] -\u003e IO ()",
          "source": "src/Network-Wai-Handler-Warp-Types.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "connSendMany",
          "normalized": "[ByteString]-\u003eIO()",
          "package": "warp",
          "partial": "Send Many",
          "signature": "[ByteString]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:connSendMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp",
          "name": "dateCacher",
          "package": "warp",
          "signature": "DateCache",
          "source": "src/Network-Wai-Handler-Warp-Types.html#InternalInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "dateCacher",
          "package": "warp",
          "partial": "Cacher",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:dateCacher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default settings for the Warp server. See the individual settings for\n the default value.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "defaultSettings",
          "package": "warp",
          "signature": "Settings",
          "source": "src/Network-Wai-Handler-Warp-Settings.html#defaultSettings",
          "type": "function"
        },
        "index": {
          "description": "The default settings for the Warp server See the individual settings for the default value",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "defaultSettings",
          "package": "warp",
          "partial": "Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:defaultSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault implementation of \u003ccode\u003e\u003ca\u003esettingsOnExceptionResponse\u003c/a\u003e\u003c/code\u003e for the debugging purpose. 500, text/plain, a showed exception.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "exceptionResponseForDebug",
          "package": "warp",
          "signature": "SomeException -\u003e Response",
          "source": "src/Network-Wai-Handler-Warp-Settings.html#exceptionResponseForDebug",
          "type": "function"
        },
        "index": {
          "description": "Default implementation of settingsOnExceptionResponse for the debugging purpose text plain showed exception",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "exceptionResponseForDebug",
          "normalized": "SomeException-\u003eResponse",
          "package": "warp",
          "partial": "Response For Debug",
          "signature": "SomeException-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:exceptionResponseForDebug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp",
          "name": "fdCacher",
          "package": "warp",
          "signature": "Maybe MutableFdCache",
          "source": "src/Network-Wai-Handler-Warp-Types.html#InternalInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "fdCacher",
          "package": "warp",
          "partial": "Cacher",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:fdCacher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGetting \u003ccode\u003e\u003ca\u003eGMTDate\u003c/a\u003e\u003c/code\u003e based on \u003ccode\u003e\u003ca\u003eDateCache\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "getDate",
          "package": "warp",
          "signature": "DateCache -\u003e IO GMTDate",
          "source": "src/Network-Wai-Handler-Warp-Date.html#getDate",
          "type": "function"
        },
        "index": {
          "description": "Getting GMTDate based on DateCache",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "getDate",
          "normalized": "DateCache-\u003eIO GMTDate",
          "package": "warp",
          "partial": "Date",
          "signature": "DateCache-\u003eIO GMTDate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:getDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGetting \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRefresh\u003c/a\u003e\u003c/code\u003e from the mutable Fd cacher.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "getFd",
          "package": "warp",
          "signature": "MutableFdCache -\u003e FilePath -\u003e IO (Fd, Refresh)",
          "source": "src/Network-Wai-Handler-Warp-FdCache.html#getFd",
          "type": "function"
        },
        "index": {
          "description": "Getting Fd and Refresh from the mutable Fd cacher",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "getFd",
          "normalized": "MutableFdCache-\u003eFilePath-\u003eIO(Fd,Refresh)",
          "package": "warp",
          "partial": "Fd",
          "signature": "MutableFdCache-\u003eFilePath-\u003eIO(Fd,Refresh)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:getFd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceiving a HTTP request from \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e and parsing its header\n   to create \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "recvRequest",
          "package": "warp",
          "signature": "Settings-\u003e Connection-\u003e InternalInfo-\u003e SockAddr-\u003e Source IO ByteString-\u003e IO (Request, IndexedHeader, IO (ResumableSource IO ByteString))",
          "type": "function"
        },
        "index": {
          "description": "Receiving HTTP request from Connection and parsing its header to create Request",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "recvRequest",
          "normalized": "Settings-\u003eConnection-\u003eInternalInfo-\u003eSockAddr-\u003eSource IO ByteString-\u003eIO(Request,IndexedHeader,IO(ResumableSource IO ByteString))",
          "package": "warp",
          "partial": "Request",
          "signature": "Settings-\u003eConnection-\u003eInternalInfo-\u003eSockAddr-\u003eSource IO ByteString-\u003eIO(Request,IndexedHeader,IO(ResumableSource IO ByteString))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:recvRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size for \u003ccode\u003e\u003ca\u003eIndexedHeader\u003c/a\u003e\u003c/code\u003e for HTTP Request.\n   From 0 to this corresponds to \"Content-Length\", \"Transfer-Encoding\",\n   \"Expect\", \"Connection\", \"Range\", and \"Host\".\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "requestMaxIndex",
          "package": "warp",
          "signature": "Int",
          "source": "src/Network-Wai-Handler-Warp-Header.html#requestMaxIndex",
          "type": "function"
        },
        "index": {
          "description": "The size for IndexedHeader for HTTP Request From to this corresponds to Content-Length Transfer-Encoding Expect Connection Range and Host",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "requestMaxIndex",
          "package": "warp",
          "partial": "Max Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:requestMaxIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e on the given port. This calls \u003ccode\u003e\u003ca\u003erunSettings\u003c/a\u003e\u003c/code\u003e with\n \u003ccode\u003e\u003ca\u003edefaultSettings\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "run",
          "package": "warp",
          "signature": "Port -\u003e Application -\u003e IO ()",
          "source": "src/Network-Wai-Handler-Warp-Run.html#run",
          "type": "function"
        },
        "index": {
          "description": "Run an Application on the given port This calls runSettings with defaultSettings",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "run",
          "normalized": "Port-\u003eApplication-\u003eIO()",
          "package": "warp",
          "signature": "Port-\u003eApplication-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an \u003ccode\u003eApplicatoin\u003c/code\u003e with the given \u003ccode\u003e\u003ca\u003eSettings\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "runSettings",
          "package": "warp",
          "signature": "Settings -\u003e Application -\u003e IO ()",
          "source": "src/Network-Wai-Handler-Warp-Run.html#runSettings",
          "type": "function"
        },
        "index": {
          "description": "Run an Applicatoin with the given Settings",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "runSettings",
          "normalized": "Settings-\u003eApplication-\u003eIO()",
          "package": "warp",
          "partial": "Settings",
          "signature": "Settings-\u003eApplication-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:runSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows you to provide a function which will return a \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e. In\n cases where creating the \u003ccode\u003eConnection\u003c/code\u003e can be expensive, this allows the\n expensive computations to be performed in a separate thread instead of the\n main server loop.\n\u003c/p\u003e\u003cp\u003eSince 1.3.5\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "runSettingsConnection",
          "package": "warp",
          "signature": "Settings -\u003e IO (Connection, SockAddr) -\u003e Application -\u003e IO ()",
          "source": "src/Network-Wai-Handler-Warp-Run.html#runSettingsConnection",
          "type": "function"
        },
        "index": {
          "description": "Allows you to provide function which will return Connection In cases where creating the Connection can be expensive this allows the expensive computations to be performed in separate thread instead of the main server loop Since",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "runSettingsConnection",
          "normalized": "Settings-\u003eIO(Connection,SockAddr)-\u003eApplication-\u003eIO()",
          "package": "warp",
          "partial": "Settings Connection",
          "signature": "Settings-\u003eIO(Connection,SockAddr)-\u003eApplication-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:runSettingsConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows you to provide a function which will return a function\n which will return \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "runSettingsConnectionMaker",
          "package": "warp",
          "signature": "Settings -\u003e IO (IO Connection, SockAddr) -\u003e Application -\u003e IO ()",
          "source": "src/Network-Wai-Handler-Warp-Run.html#runSettingsConnectionMaker",
          "type": "function"
        },
        "index": {
          "description": "Allows you to provide function which will return function which will return Connection",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "runSettingsConnectionMaker",
          "normalized": "Settings-\u003eIO(IO Connection,SockAddr)-\u003eApplication-\u003eIO()",
          "package": "warp",
          "partial": "Settings Connection Maker",
          "signature": "Settings-\u003eIO(IO Connection,SockAddr)-\u003eApplication-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:runSettingsConnectionMaker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003erunSettings\u003c/a\u003e\u003c/code\u003e, but uses a user-supplied socket instead of opening\n one. This allows the user to provide, for example, Unix named socket, which\n can be used when reverse HTTP proxying into your application.\n\u003c/p\u003e\u003cp\u003eNote that the \u003ccode\u003e\u003ca\u003esettingsPort\u003c/a\u003e\u003c/code\u003e will still be passed to \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003es via the\n \u003ccode\u003eserverPort\u003c/code\u003e record.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "runSettingsSocket",
          "package": "warp",
          "signature": "Settings -\u003e Socket -\u003e Application -\u003e IO ()",
          "source": "src/Network-Wai-Handler-Warp-Run.html#runSettingsSocket",
          "type": "function"
        },
        "index": {
          "description": "Same as runSettings but uses user-supplied socket instead of opening one This allows the user to provide for example Unix named socket which can be used when reverse HTTP proxying into your application Note that the settingsPort will still be passed to Application via the serverPort record",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "runSettingsSocket",
          "normalized": "Settings-\u003eSocket-\u003eApplication-\u003eIO()",
          "package": "warp",
          "partial": "Settings Socket",
          "signature": "Settings-\u003eSocket-\u003eApplication-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:runSettingsSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSending a HTTP response to \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e according to \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eApplications/middlewares MUST specify a proper \u003ccode\u003e\u003ca\u003eResponseHeaders\u003c/a\u003e\u003c/code\u003e.\n   so that inconsistency does not happen.\n   No header is deleted by this function.\n\u003c/p\u003e\u003cp\u003eEspecially, Applications/middlewares MUST take care of\n   Content-Length, Content-Range, and Transfer-Encoding\n   because they are inserted, when necessary,\n   regardless they already exist.\n   This function does not insert Content-Encoding. It's middleware's\n   responsibility.\n\u003c/p\u003e\u003cp\u003eThe Server header is added if not exist in HTTP response header.\n\u003c/p\u003e\u003cp\u003eThere are three basic APIs to create \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eresponseFile\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eResponseHeaders\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFilePart\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n     HTTP response body is sent by sendfile().\n     Applications are categorized into simple and sophisticated.\n     Simple applications should specify \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e to\n     \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFilePart\u003c/a\u003e\u003c/code\u003e. The size of the specified file is obtained\n     by disk access. Then Range is handled.\n     Sophisticated applications should specify \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e to\n     \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFilePart\u003c/a\u003e\u003c/code\u003e. They should treat Range (and If-Range) by\n     thierselves. In both cases,\n     Content-Length and Content-Range (if necessary) are automatically\n     added into the HTTP response header.\n     If Content-Length and Content-Range exist in the HTTP response header,\n     they would cause inconsistency.\n     Status is also changed to 206 if necessary.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eresponseBuilder\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eResponseHeaders\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n     HTTP response body is created from \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e.\n     Typically, Transfer-Encoding: chunked is used.\n     If Content-Length is specified, Transfer-Encoding: chunked is not used.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eresponseSource\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eResponseHeaders\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eFlush\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e) -\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n     HTTP response body is created from \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e.\n     Typically, Transfer-Encoding: chunked is used.\n     If Content-Length is specified, Transfer-Encoding: chunked is not used.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "sendResponse",
          "package": "warp",
          "signature": "Connection-\u003e InternalInfo-\u003e (forall a.  IO a -\u003e IO a)-\u003e Request-\u003e IndexedHeader-\u003e Response-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Sending HTTP response to Connection according to Response Applications middlewares MUST specify proper ResponseHeaders so that inconsistency does not happen No header is deleted by this function Especially Applications middlewares MUST take care of Content-Length Content-Range and Transfer-Encoding because they are inserted when necessary regardless they already exist This function does not insert Content-Encoding It middleware responsibility The Server header is added if not exist in HTTP response header There are three basic APIs to create Response responseFile Status ResponseHeaders FilePath Maybe FilePart Response HTTP response body is sent by sendfile Applications are categorized into simple and sophisticated Simple applications should specify Nothing to Maybe FilePart The size of the specified file is obtained by disk access Then Range is handled Sophisticated applications should specify Just to Maybe FilePart They should treat Range and If-Range by thierselves In both cases Content-Length and Content-Range if necessary are automatically added into the HTTP response header If Content-Length and Content-Range exist in the HTTP response header they would cause inconsistency Status is also changed to if necessary responseBuilder Status ResponseHeaders Builder Response HTTP response body is created from Source Typically Transfer-Encoding chunked is used If Content-Length is specified Transfer-Encoding chunked is not used responseSource Status ResponseHeaders Source IO Flush Builder Response HTTP response body is created from Builder Typically Transfer-Encoding chunked is used If Content-Length is specified Transfer-Encoding chunked is not used",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "sendResponse",
          "normalized": "Connection-\u003eInternalInfo-\u003e(a b IO c-\u003eIO c)-\u003eRequest-\u003eIndexedHeader-\u003eResponse-\u003eIO Bool",
          "package": "warp",
          "partial": "Response",
          "signature": "Connection-\u003eInternalInfo-\u003e(forall a. IO a-\u003eIO a)-\u003eRequest-\u003eIndexedHeader-\u003eResponse-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:sendResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCode to run after the listening socket is ready but before entering\n the main event loop. Useful for signaling to tests that they can start\n running, or to drop permissions after binding to a restricted port.\n\u003c/p\u003e\u003cp\u003eDefault: do nothing.\n\u003c/p\u003e\u003cp\u003eSince 1.3.6\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "settingsBeforeMainLoop",
          "package": "warp",
          "signature": "Settings -\u003e IO ()",
          "source": "src/Network-Wai-Handler-Warp-Settings.html#settingsBeforeMainLoop",
          "type": "function"
        },
        "index": {
          "description": "Code to run after the listening socket is ready but before entering the main event loop Useful for signaling to tests that they can start running or to drop permissions after binding to restricted port Default do nothing Since",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "settingsBeforeMainLoop",
          "normalized": "Settings-\u003eIO()",
          "package": "warp",
          "partial": "Before Main Loop",
          "signature": "Settings-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:settingsBeforeMainLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCache duratoin time of file descriptors in seconds. 0 means that the cache mechanism is not used. Default value: 10\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "settingsFdCacheDuration",
          "package": "warp",
          "signature": "Settings -\u003e Int",
          "source": "src/Network-Wai-Handler-Warp-Settings.html#settingsFdCacheDuration",
          "type": "function"
        },
        "index": {
          "description": "Cache duratoin time of file descriptors in seconds means that the cache mechanism is not used Default value",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "settingsFdCacheDuration",
          "normalized": "Settings-\u003eInt",
          "package": "warp",
          "partial": "Fd Cache Duration",
          "signature": "Settings-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:settingsFdCacheDuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault value: HostIPv4\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "settingsHost",
          "package": "warp",
          "signature": "Settings -\u003e HostPreference",
          "source": "src/Network-Wai-Handler-Warp-Settings.html#settingsHost",
          "type": "function"
        },
        "index": {
          "description": "Default value HostIPv4",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "settingsHost",
          "normalized": "Settings-\u003eHostPreference",
          "package": "warp",
          "partial": "Host",
          "signature": "Settings-\u003eHostPreference",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:settingsHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp",
          "name": "settingsIntercept",
          "package": "warp",
          "signature": "Settings -\u003e Request -\u003e Maybe (Source IO ByteString -\u003e Connection -\u003e IO ())",
          "source": "src/Network-Wai-Handler-Warp-Settings.html#settingsIntercept",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "settingsIntercept",
          "normalized": "Settings-\u003eRequest-\u003eMaybe(Source IO ByteString-\u003eConnection-\u003eIO())",
          "package": "warp",
          "partial": "Intercept",
          "signature": "Settings-\u003eRequest-\u003eMaybe(Source IO ByteString-\u003eConnection-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:settingsIntercept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse an existing timeout manager instead of spawning a new one. If used, \u003ccode\u003e\u003ca\u003esettingsTimeout\u003c/a\u003e\u003c/code\u003e is ignored. Default is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "settingsManager",
          "package": "warp",
          "signature": "Settings -\u003e Maybe Manager",
          "source": "src/Network-Wai-Handler-Warp-Settings.html#settingsManager",
          "type": "function"
        },
        "index": {
          "description": "Use an existing timeout manager instead of spawning new one If used settingsTimeout is ignored Default is Nothing",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "settingsManager",
          "normalized": "Settings-\u003eMaybe Manager",
          "package": "warp",
          "partial": "Manager",
          "signature": "Settings-\u003eMaybe Manager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:settingsManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform no parsing on the rawPathInfo.\n\u003c/p\u003e\u003cp\u003eThis is useful for writing HTTP proxies.\n\u003c/p\u003e\u003cp\u003eDefault: False\n\u003c/p\u003e\u003cp\u003eSince 2.0.3\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "settingsNoParsePath",
          "package": "warp",
          "signature": "Settings -\u003e Bool",
          "source": "src/Network-Wai-Handler-Warp-Settings.html#settingsNoParsePath",
          "type": "function"
        },
        "index": {
          "description": "Perform no parsing on the rawPathInfo This is useful for writing HTTP proxies Default False Since",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "settingsNoParsePath",
          "normalized": "Settings-\u003eBool",
          "package": "warp",
          "partial": "No Parse Path",
          "signature": "Settings-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:settingsNoParsePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat to do when a connection is close. Default: do nothing.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "settingsOnClose",
          "package": "warp",
          "signature": "Settings -\u003e IO ()",
          "source": "src/Network-Wai-Handler-Warp-Settings.html#settingsOnClose",
          "type": "function"
        },
        "index": {
          "description": "What to do when connection is close Default do nothing",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "settingsOnClose",
          "normalized": "Settings-\u003eIO()",
          "package": "warp",
          "partial": "On Close",
          "signature": "Settings-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:settingsOnClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat to do with exceptions thrown by either the application or server. Default: ignore server-generated exceptions (see \u003ccode\u003e\u003ca\u003eInvalidRequest\u003c/a\u003e\u003c/code\u003e) and print application-generated applications to stderr.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "settingsOnException",
          "package": "warp",
          "signature": "Settings -\u003e Maybe Request -\u003e SomeException -\u003e IO ()",
          "source": "src/Network-Wai-Handler-Warp-Settings.html#settingsOnException",
          "type": "function"
        },
        "index": {
          "description": "What to do with exceptions thrown by either the application or server Default ignore server-generated exceptions see InvalidRequest and print application-generated applications to stderr",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "settingsOnException",
          "normalized": "Settings-\u003eMaybe Request-\u003eSomeException-\u003eIO()",
          "package": "warp",
          "partial": "On Exception",
          "signature": "Settings-\u003eMaybe Request-\u003eSomeException-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:settingsOnException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function to create \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e when an exception occurs.\n\u003c/p\u003e\u003cp\u003eDefault: 500, text/plain, \"Something went wrong\"\n\u003c/p\u003e\u003cp\u003eSince 2.0.3\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "settingsOnExceptionResponse",
          "package": "warp",
          "signature": "Settings -\u003e SomeException -\u003e Response",
          "source": "src/Network-Wai-Handler-Warp-Settings.html#settingsOnExceptionResponse",
          "type": "function"
        },
        "index": {
          "description": "function to create Response when an exception occurs Default text plain Something went wrong Since",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "settingsOnExceptionResponse",
          "normalized": "Settings-\u003eSomeException-\u003eResponse",
          "package": "warp",
          "partial": "On Exception Response",
          "signature": "Settings-\u003eSomeException-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:settingsOnExceptionResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat to do when a connection is open. Default: do nothing.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "settingsOnOpen",
          "package": "warp",
          "signature": "Settings -\u003e IO ()",
          "source": "src/Network-Wai-Handler-Warp-Settings.html#settingsOnOpen",
          "type": "function"
        },
        "index": {
          "description": "What to do when connection is open Default do nothing",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "settingsOnOpen",
          "normalized": "Settings-\u003eIO()",
          "package": "warp",
          "partial": "On Open",
          "signature": "Settings-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:settingsOnOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePort to listen on. Default value: 3000\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "settingsPort",
          "package": "warp",
          "signature": "Settings -\u003e Int",
          "source": "src/Network-Wai-Handler-Warp-Settings.html#settingsPort",
          "type": "function"
        },
        "index": {
          "description": "Port to listen on Default value",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "settingsPort",
          "normalized": "Settings-\u003eInt",
          "package": "warp",
          "partial": "Port",
          "signature": "Settings-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:settingsPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTimeout value in seconds. Default value: 30\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "settingsTimeout",
          "package": "warp",
          "signature": "Settings -\u003e Int",
          "source": "src/Network-Wai-Handler-Warp-Settings.html#settingsTimeout",
          "type": "function"
        },
        "index": {
          "description": "Timeout value in seconds Default value",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "settingsTimeout",
          "normalized": "Settings-\u003eInt",
          "package": "warp",
          "partial": "Timeout",
          "signature": "Settings-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:settingsTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault action value for \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "socketConnection",
          "package": "warp",
          "signature": "Socket -\u003e IO Connection",
          "source": "src/Network-Wai-Handler-Warp-Run.html#socketConnection",
          "type": "function"
        },
        "index": {
          "description": "Default action value for Connection",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "socketConnection",
          "normalized": "Socket-\u003eIO Connection",
          "package": "warp",
          "partial": "Connection",
          "signature": "Socket-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:socketConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.Warp",
          "name": "threadHandle",
          "package": "warp",
          "signature": "Handle",
          "source": "src/Network-Wai-Handler-Warp-Types.html#InternalInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "threadHandle",
          "package": "warp",
          "partial": "Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:threadHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe version of Warp.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "warpVersion",
          "package": "warp",
          "signature": "String",
          "source": "src/Network-Wai-Handler-Warp-Response.html#warpVersion",
          "type": "function"
        },
        "index": {
          "description": "The version of Warp",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "warpVersion",
          "package": "warp",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:warpVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating \u003ccode\u003e\u003ca\u003eDateCache\u003c/a\u003e\u003c/code\u003e and executing the action.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "withDateCache",
          "package": "warp",
          "signature": "(DateCache -\u003e IO a) -\u003e IO a",
          "source": "src/Network-Wai-Handler-Warp-Date.html#withDateCache",
          "type": "function"
        },
        "index": {
          "description": "Creating DateCache and executing the action",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "withDateCache",
          "normalized": "(DateCache-\u003eIO a)-\u003eIO a",
          "package": "warp",
          "partial": "Date Cache",
          "signature": "(DateCache-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:withDateCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating \u003ccode\u003e\u003ca\u003eMutableFdCache\u003c/a\u003e\u003c/code\u003e and executing the action in the second\n   argument. The first argument is a cache duration in second.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.Warp",
          "name": "withFdCache",
          "package": "warp",
          "signature": "Int -\u003e (Maybe MutableFdCache -\u003e IO a) -\u003e IO a",
          "source": "src/Network-Wai-Handler-Warp-FdCache.html#withFdCache",
          "type": "function"
        },
        "index": {
          "description": "Creating MutableFdCache and executing the action in the second argument The first argument is cache duration in second",
          "hierarchy": "Network Wai Handler Warp",
          "module": "Network.Wai.Handler.Warp",
          "name": "withFdCache",
          "normalized": "Int-\u003e(Maybe MutableFdCache-\u003eIO a)-\u003eIO a",
          "package": "warp",
          "partial": "Fd Cache",
          "signature": "Int-\u003e(Maybe MutableFdCache-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/warp/docs/Network-Wai-Handler-Warp.html#v:withFdCache"
      }
    }
  ]
]