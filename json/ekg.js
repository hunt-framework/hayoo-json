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
        "word": "ekg"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a type for mutable, integer-valued counters.\n Counters are non-negative, monotonically increasing values and can\n be used to track e.g. the number of requests served since program\n start.  All operations on counters are thread-safe.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Remote.Counter",
          "name": "Counter",
          "package": "ekg",
          "source": "src/System-Remote-Counter.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines type for mutable integer-valued counters Counters are non-negative monotonically increasing values and can be used to track e.g the number of requests served since program start All operations on counters are thread-safe",
          "hierarchy": "System Remote Counter",
          "module": "System.Remote.Counter",
          "name": "Counter",
          "package": "ekg",
          "partial": "Counter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ekg/docs/System-Remote-Counter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mutable, integer-valued counter.\n\u003c/p\u003e",
          "module": "System.Remote.Counter",
          "name": "Counter",
          "package": "ekg",
          "source": "src/System-Remote-Counter-Internal.html#Counter",
          "type": "data"
        },
        "index": {
          "description": "mutable integer-valued counter",
          "hierarchy": "System Remote Counter",
          "module": "System.Remote.Counter",
          "name": "Counter",
          "package": "ekg",
          "partial": "Counter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ekg/docs/System-Remote-Counter.html#t:Counter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrease the counter by the given amount.\n\u003c/p\u003e",
          "module": "System.Remote.Counter",
          "name": "add",
          "package": "ekg",
          "signature": "Counter -\u003e Int -\u003e IO ()",
          "source": "src/System-Remote-Counter.html#add",
          "type": "function"
        },
        "index": {
          "description": "Increase the counter by the given amount",
          "hierarchy": "System Remote Counter",
          "module": "System.Remote.Counter",
          "name": "add",
          "normalized": "Counter-\u003eInt-\u003eIO()",
          "package": "ekg",
          "signature": "Counter-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ekg/docs/System-Remote-Counter.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrease the counter by one.\n\u003c/p\u003e",
          "module": "System.Remote.Counter",
          "name": "inc",
          "package": "ekg",
          "signature": "Counter -\u003e IO ()",
          "source": "src/System-Remote-Counter.html#inc",
          "type": "function"
        },
        "index": {
          "description": "Increase the counter by one",
          "hierarchy": "System Remote Counter",
          "module": "System.Remote.Counter",
          "name": "inc",
          "normalized": "Counter-\u003eIO()",
          "package": "ekg",
          "signature": "Counter-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ekg/docs/System-Remote-Counter.html#v:inc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a type for mutable, integer-valued gauges.\n Gauges are variable values and can be used to track e.g. the\n current number of concurrent connections. All operations on gauges\n are thread-safe.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Remote.Gauge",
          "name": "Gauge",
          "package": "ekg",
          "source": "src/System-Remote-Gauge.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines type for mutable integer-valued gauges Gauges are variable values and can be used to track e.g the current number of concurrent connections All operations on gauges are thread-safe",
          "hierarchy": "System Remote Gauge",
          "module": "System.Remote.Gauge",
          "name": "Gauge",
          "package": "ekg",
          "partial": "Gauge",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ekg/docs/System-Remote-Gauge.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mutable, integer-valued gauge.\n\u003c/p\u003e",
          "module": "System.Remote.Gauge",
          "name": "Gauge",
          "package": "ekg",
          "source": "src/System-Remote-Gauge-Internal.html#Gauge",
          "type": "data"
        },
        "index": {
          "description": "mutable integer-valued gauge",
          "hierarchy": "System Remote Gauge",
          "module": "System.Remote.Gauge",
          "name": "Gauge",
          "package": "ekg",
          "partial": "Gauge",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ekg/docs/System-Remote-Gauge.html#t:Gauge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrease the gauge by the given amount.\n\u003c/p\u003e",
          "module": "System.Remote.Gauge",
          "name": "add",
          "package": "ekg",
          "signature": "Gauge -\u003e Int -\u003e IO ()",
          "source": "src/System-Remote-Gauge.html#add",
          "type": "function"
        },
        "index": {
          "description": "Increase the gauge by the given amount",
          "hierarchy": "System Remote Gauge",
          "module": "System.Remote.Gauge",
          "name": "add",
          "normalized": "Gauge-\u003eInt-\u003eIO()",
          "package": "ekg",
          "signature": "Gauge-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ekg/docs/System-Remote-Gauge.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrease the gauge by one.\n\u003c/p\u003e",
          "module": "System.Remote.Gauge",
          "name": "dec",
          "package": "ekg",
          "signature": "Gauge -\u003e IO ()",
          "source": "src/System-Remote-Gauge.html#dec",
          "type": "function"
        },
        "index": {
          "description": "Decrease the gauge by one",
          "hierarchy": "System Remote Gauge",
          "module": "System.Remote.Gauge",
          "name": "dec",
          "normalized": "Gauge-\u003eIO()",
          "package": "ekg",
          "signature": "Gauge-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ekg/docs/System-Remote-Gauge.html#v:dec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrease the gauge by one.\n\u003c/p\u003e",
          "module": "System.Remote.Gauge",
          "name": "inc",
          "package": "ekg",
          "signature": "Gauge -\u003e IO ()",
          "source": "src/System-Remote-Gauge.html#inc",
          "type": "function"
        },
        "index": {
          "description": "Increase the gauge by one",
          "hierarchy": "System Remote Gauge",
          "module": "System.Remote.Gauge",
          "name": "inc",
          "normalized": "Gauge-\u003eIO()",
          "package": "ekg",
          "signature": "Gauge-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ekg/docs/System-Remote-Gauge.html#v:inc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the gauge to the result of applying the given function to the\n value.\n\u003c/p\u003e",
          "module": "System.Remote.Gauge",
          "name": "modify",
          "package": "ekg",
          "signature": "(Int -\u003e Int) -\u003e Gauge -\u003e IO ()",
          "source": "src/System-Remote-Gauge.html#modify",
          "type": "function"
        },
        "index": {
          "description": "Set the gauge to the result of applying the given function to the value",
          "hierarchy": "System Remote Gauge",
          "module": "System.Remote.Gauge",
          "name": "modify",
          "normalized": "(Int-\u003eInt)-\u003eGauge-\u003eIO()",
          "package": "ekg",
          "signature": "(Int-\u003eInt)-\u003eGauge-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ekg/docs/System-Remote-Gauge.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the gauge to the given value.\n\u003c/p\u003e",
          "module": "System.Remote.Gauge",
          "name": "set",
          "package": "ekg",
          "signature": "Gauge -\u003e Int -\u003e IO ()",
          "source": "src/System-Remote-Gauge.html#set",
          "type": "function"
        },
        "index": {
          "description": "Set the gauge to the given value",
          "hierarchy": "System Remote Gauge",
          "module": "System.Remote.Gauge",
          "name": "set",
          "normalized": "Gauge-\u003eInt-\u003eIO()",
          "package": "ekg",
          "signature": "Gauge-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ekg/docs/System-Remote-Gauge.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrease the gauge by the given amount.\n\u003c/p\u003e",
          "module": "System.Remote.Gauge",
          "name": "subtract",
          "package": "ekg",
          "signature": "Gauge -\u003e Int -\u003e IO ()",
          "source": "src/System-Remote-Gauge.html#subtract",
          "type": "function"
        },
        "index": {
          "description": "Decrease the gauge by the given amount",
          "hierarchy": "System Remote Gauge",
          "module": "System.Remote.Gauge",
          "name": "subtract",
          "normalized": "Gauge-\u003eInt-\u003eIO()",
          "package": "ekg",
          "signature": "Gauge-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ekg/docs/System-Remote-Gauge.html#v:subtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a type for mutable, string-valued labels.\n Labels are variable values and can be used to track e.g. the\n command line arguments or other free-form values. All operations on\n labels are thread-safe.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Remote.Label",
          "name": "Label",
          "package": "ekg",
          "source": "src/System-Remote-Label.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines type for mutable string-valued labels Labels are variable values and can be used to track e.g the command line arguments or other free-form values All operations on labels are thread-safe",
          "hierarchy": "System Remote Label",
          "module": "System.Remote.Label",
          "name": "Label",
          "package": "ekg",
          "partial": "Label",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ekg/docs/System-Remote-Label.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mutable, text-valued label.\n\u003c/p\u003e",
          "module": "System.Remote.Label",
          "name": "Label",
          "package": "ekg",
          "source": "src/System-Remote-Label-Internal.html#Label",
          "type": "data"
        },
        "index": {
          "description": "mutable text-valued label",
          "hierarchy": "System Remote Label",
          "module": "System.Remote.Label",
          "name": "Label",
          "package": "ekg",
          "partial": "Label",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ekg/docs/System-Remote-Label.html#t:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the label to the result of applying the given function to the\n value.\n\u003c/p\u003e",
          "module": "System.Remote.Label",
          "name": "modify",
          "package": "ekg",
          "signature": "(Text -\u003e Text) -\u003e Label -\u003e IO ()",
          "source": "src/System-Remote-Label.html#modify",
          "type": "function"
        },
        "index": {
          "description": "Set the label to the result of applying the given function to the value",
          "hierarchy": "System Remote Label",
          "module": "System.Remote.Label",
          "name": "modify",
          "normalized": "(Text-\u003eText)-\u003eLabel-\u003eIO()",
          "package": "ekg",
          "signature": "(Text-\u003eText)-\u003eLabel-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ekg/docs/System-Remote-Label.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the label to the given value.\n\u003c/p\u003e",
          "module": "System.Remote.Label",
          "name": "set",
          "package": "ekg",
          "signature": "Label -\u003e Text -\u003e IO ()",
          "source": "src/System-Remote-Label.html#set",
          "type": "function"
        },
        "index": {
          "description": "Set the label to the given value",
          "hierarchy": "System Remote Label",
          "module": "System.Remote.Label",
          "name": "set",
          "normalized": "Label-\u003eText-\u003eIO()",
          "package": "ekg",
          "signature": "Label-\u003eText-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ekg/docs/System-Remote-Label.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides remote monitoring of a running process over\n HTTP.  It can be used to run an HTTP server that provides both a\n web-based user interface and a machine-readable API (e.g. JSON.)\n The former can be used by a human to get an overview of what the\n program is doing and the latter can be used by automated monitoring\n tools.\n\u003c/p\u003e\u003cp\u003eTypical usage is to start the monitoring server at program startup\n\u003c/p\u003e\u003cpre\u003e main = do\n     forkServer \"localhost\" 8000\n     ...\n\u003c/pre\u003e\u003cp\u003eand then periodically check the stats using a web browser or a\n command line tool (e.g. curl)\n\u003c/p\u003e\u003cpre\u003e $ curl -H \"Accept: application/json\" http://localhost:8000/\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "System.Remote.Monitoring",
          "name": "Monitoring",
          "package": "ekg",
          "source": "src/System-Remote-Monitoring.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides remote monitoring of running process over HTTP It can be used to run an HTTP server that provides both web-based user interface and machine-readable API e.g JSON The former can be used by human to get an overview of what the program is doing and the latter can be used by automated monitoring tools Typical usage is to start the monitoring server at program startup main do forkServer localhost and then periodically check the stats using web browser or command line tool e.g curl curl Accept application json http localhost",
          "hierarchy": "System Remote Monitoring",
          "module": "System.Remote.Monitoring",
          "name": "Monitoring",
          "package": "ekg",
          "partial": "Monitoring",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ekg/docs/System-Remote-Monitoring.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handle that can be used to control the monitoring server.\n Created by \u003ccode\u003eforkServer\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Remote.Monitoring",
          "name": "Server",
          "package": "ekg",
          "source": "src/System-Remote-Common.html#Server",
          "type": "data"
        },
        "index": {
          "description": "handle that can be used to control the monitoring server Created by forkServer",
          "hierarchy": "System Remote Monitoring",
          "module": "System.Remote.Monitoring",
          "name": "Server",
          "package": "ekg",
          "partial": "Server",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ekg/docs/System-Remote-Monitoring.html#t:Server"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart an HTTP server in a new thread.  The server replies to GET\n requests to the given host and port.  The host argument can be\n either a numeric network address (dotted quad for IPv4,\n colon-separated hex for IPv6) or a hostname (e.g. \"localhost\".)\n The client can control the Content-Type used in responses by\n setting the Accept header.  At the moment three content types are\n available: \"application/json\", \"text/html\", and\n \"text/plain\".\n\u003c/p\u003e",
          "module": "System.Remote.Monitoring",
          "name": "forkServer",
          "package": "ekg",
          "signature": "ByteString-\u003e Int-\u003e IO Server",
          "type": "function"
        },
        "index": {
          "description": "Start an HTTP server in new thread The server replies to GET requests to the given host and port The host argument can be either numeric network address dotted quad for IPv4 colon-separated hex for IPv6 or hostname e.g localhost The client can control the Content-Type used in responses by setting the Accept header At the moment three content types are available application json text html and text plain",
          "hierarchy": "System Remote Monitoring",
          "module": "System.Remote.Monitoring",
          "name": "forkServer",
          "normalized": "ByteString-\u003eInt-\u003eIO Server",
          "package": "ekg",
          "partial": "Server",
          "signature": "ByteString-\u003eInt-\u003eIO Server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ekg/docs/System-Remote-Monitoring.html#v:forkServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the counter associated with the given name and server.\n Multiple calls to \u003ccode\u003e\u003ca\u003egetCounter\u003c/a\u003e\u003c/code\u003e with the same arguments will return\n the same counter.  The first time \u003ccode\u003e\u003ca\u003egetCounter\u003c/a\u003e\u003c/code\u003e is called for a\n given name and server, a new, zero-initialized counter will be\n returned.\n\u003c/p\u003e",
          "module": "System.Remote.Monitoring",
          "name": "getCounter",
          "package": "ekg",
          "signature": "Text-\u003e Server-\u003e IO Counter",
          "type": "function"
        },
        "index": {
          "description": "Return the counter associated with the given name and server Multiple calls to getCounter with the same arguments will return the same counter The first time getCounter is called for given name and server new zero-initialized counter will be returned",
          "hierarchy": "System Remote Monitoring",
          "module": "System.Remote.Monitoring",
          "name": "getCounter",
          "normalized": "Text-\u003eServer-\u003eIO Counter",
          "package": "ekg",
          "partial": "Counter",
          "signature": "Text-\u003eServer-\u003eIO Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ekg/docs/System-Remote-Monitoring.html#v:getCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the gauge associated with the given name and server.\n Multiple calls to \u003ccode\u003e\u003ca\u003egetGauge\u003c/a\u003e\u003c/code\u003e with the same arguments will return\n the same gauge.  The first time \u003ccode\u003e\u003ca\u003egetGauge\u003c/a\u003e\u003c/code\u003e is called for a given\n name and server, a new, zero-initialized gauge will be returned.\n\u003c/p\u003e",
          "module": "System.Remote.Monitoring",
          "name": "getGauge",
          "package": "ekg",
          "signature": "Text-\u003e Server-\u003e IO Gauge",
          "type": "function"
        },
        "index": {
          "description": "Return the gauge associated with the given name and server Multiple calls to getGauge with the same arguments will return the same gauge The first time getGauge is called for given name and server new zero-initialized gauge will be returned",
          "hierarchy": "System Remote Monitoring",
          "module": "System.Remote.Monitoring",
          "name": "getGauge",
          "normalized": "Text-\u003eServer-\u003eIO Gauge",
          "package": "ekg",
          "partial": "Gauge",
          "signature": "Text-\u003eServer-\u003eIO Gauge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ekg/docs/System-Remote-Monitoring.html#v:getGauge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the label associated with the given name and server.\n Multiple calls to \u003ccode\u003e\u003ca\u003egetLabel\u003c/a\u003e\u003c/code\u003e with the same arguments will return\n the same label.  The first time \u003ccode\u003e\u003ca\u003egetLabel\u003c/a\u003e\u003c/code\u003e is called for a given\n name and server, a new, empty label will be returned.\n\u003c/p\u003e",
          "module": "System.Remote.Monitoring",
          "name": "getLabel",
          "package": "ekg",
          "signature": "Text-\u003e Server-\u003e IO Label",
          "type": "function"
        },
        "index": {
          "description": "Return the label associated with the given name and server Multiple calls to getLabel with the same arguments will return the same label The first time getLabel is called for given name and server new empty label will be returned",
          "hierarchy": "System Remote Monitoring",
          "module": "System.Remote.Monitoring",
          "name": "getLabel",
          "normalized": "Text-\u003eServer-\u003eIO Label",
          "package": "ekg",
          "partial": "Label",
          "signature": "Text-\u003eServer-\u003eIO Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ekg/docs/System-Remote-Monitoring.html#v:getLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe thread ID of the server.  You can kill the server by killing\n this thread (i.e. by throwing it an asynchronous exception.)\n\u003c/p\u003e",
          "module": "System.Remote.Monitoring",
          "name": "serverThreadId",
          "package": "ekg",
          "signature": "Server -\u003e ThreadId",
          "source": "src/System-Remote-Monitoring.html#serverThreadId",
          "type": "function"
        },
        "index": {
          "description": "The thread ID of the server You can kill the server by killing this thread i.e by throwing it an asynchronous exception",
          "hierarchy": "System Remote Monitoring",
          "module": "System.Remote.Monitoring",
          "name": "serverThreadId",
          "normalized": "Server-\u003eThreadId",
          "package": "ekg",
          "partial": "Thread Id",
          "signature": "Server-\u003eThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ekg/docs/System-Remote-Monitoring.html#v:serverThreadId"
      }
    }
  ]
]