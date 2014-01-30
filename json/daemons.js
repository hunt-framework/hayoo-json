[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/Control-Pipe-C3.html#",
      "description": {
        "fct-module": "Control.Pipe.C3",
        "fct-package": "daemons",
        "fct-signature": "module",
        "fct-source": "src/Control-Pipe-C3.html",
        "fct-type": "module",
        "title": "C3"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe C3",
        "module": "Control.Pipe.C3",
        "name": "C3",
        "normalized": "",
        "package": "daemons",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/Control-Pipe-C3.html#v:commandReceiver",
      "description": {
        "fct-descr": "\u003cp\u003eWait for commands on the incoming pipe, handle them, and send the\n reponses over the outgoing pipe.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.C3",
        "fct-package": "daemons",
        "fct-signature": "(a -\u003e IO b) -\u003e Handler ()",
        "fct-source": "src/Control-Pipe-C3.html#commandReceiver",
        "fct-type": "function",
        "title": "commandReceiver"
      },
      "index": {
        "description": "Wait for commands on the incoming pipe handle them and send the reponses over the outgoing pipe",
        "hierarchy": "Control Pipe C3",
        "module": "Control.Pipe.C3",
        "name": "commandReceiver",
        "normalized": "(a-\u003eIO b)-\u003eHandler()",
        "package": "daemons",
        "partial": "Receiver",
        "signature": "(a-\u003eIO b)-\u003eHandler()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/Control-Pipe-C3.html#v:commandSender",
      "description": {
        "fct-descr": "\u003cp\u003eSend a single command over the outgoing pipe and wait for a\n response.  If the incoming pipe is closed before a response\n arrives, returns \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.C3",
        "fct-package": "daemons",
        "fct-signature": "a -\u003e Handler (Maybe b)",
        "fct-source": "src/Control-Pipe-C3.html#commandSender",
        "fct-type": "function",
        "title": "commandSender"
      },
      "index": {
        "description": "Send single command over the outgoing pipe and wait for response If the incoming pipe is closed before response arrives returns Nothing",
        "hierarchy": "Control Pipe C3",
        "module": "Control.Pipe.C3",
        "name": "commandSender",
        "normalized": "a-\u003eHandler(Maybe b)",
        "package": "daemons",
        "partial": "Sender",
        "signature": "a-\u003eHandler(Maybe b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/Control-Pipe-Serialize.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the \u003ccode\u003e\u003ca\u003edeserializer\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eserializer\u003c/a\u003e\u003c/code\u003e pipes to\n convert \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es off of pipes into typed values.\n\u003c/p\u003e\u003cp\u003eIn order to use it, the types of the values need to have\n \u003ccode\u003e\u003ca\u003eSerialize\u003c/a\u003e\u003c/code\u003e instances.  These can be derived automatically using\n \u003ca\u003eGhc.Generics\u003c/a\u003e:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE DeriveGeneric #-}\n\n data Foo = Bar String | Baz Int\n            deriving ( Generic )\n\n instance Serialize Foo\n\u003c/pre\u003e\u003cp\u003eNote that in the above example: we use the \u003ccode\u003eDeriveGeneric\u003c/code\u003e\n extension, derive a \u003ccode\u003eGeneric\u003c/code\u003e instance for our data-type, and write\n an \u003cem\u003eempty\u003c/em\u003e \u003ccode\u003eSerialize\u003c/code\u003e instance.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Pipe.Serialize",
        "fct-package": "daemons",
        "fct-signature": "module",
        "fct-source": "src/Control-Pipe-Serialize.html",
        "fct-type": "module",
        "title": "Serialize"
      },
      "index": {
        "description": "This module provides the deserializer and serializer pipes to convert ByteString off of pipes into typed values In order to use it the types of the values need to have Serialize instances These can be derived automatically using Ghc.Generics LANGUAGE DeriveGeneric data Foo Bar String Baz Int deriving Generic instance Serialize Foo Note that in the above example we use the DeriveGeneric extension derive Generic instance for our data-type and write an empty Serialize instance",
        "hierarchy": "Control Pipe Serialize",
        "module": "Control.Pipe.Serialize",
        "name": "Serialize",
        "normalized": "",
        "package": "daemons",
        "partial": "Serialize",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/Control-Pipe-Serialize.html#v:deserializer",
      "description": {
        "fct-descr": "\u003cp\u003eDe-serialize data from strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.  Uses \u003ccode\u003ecereal\u003c/code\u003e's\n incremental \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e parser.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Serialize",
        "fct-package": "daemons",
        "fct-signature": "Pipe ByteString a m ()",
        "fct-source": "src/Control-Pipe-Serialize.html#deserializer",
        "fct-type": "function",
        "title": "deserializer"
      },
      "index": {
        "description": "De-serialize data from strict ByteString Uses cereal incremental Get parser",
        "hierarchy": "Control Pipe Serialize",
        "module": "Control.Pipe.Serialize",
        "name": "deserializer",
        "normalized": "Pipe ByteString a b()",
        "package": "daemons",
        "partial": "",
        "signature": "Pipe ByteString a m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/Control-Pipe-Serialize.html#v:serializer",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize data into strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Serialize",
        "fct-package": "daemons",
        "fct-signature": "Pipe a ByteString m ()",
        "fct-source": "src/Control-Pipe-Serialize.html#serializer",
        "fct-type": "function",
        "title": "serializer"
      },
      "index": {
        "description": "Serialize data into strict ByteString",
        "hierarchy": "Control Pipe Serialize",
        "module": "Control.Pipe.Serialize",
        "name": "serializer",
        "normalized": "Pipe a ByteString b()",
        "package": "daemons",
        "partial": "",
        "signature": "Pipe a ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/Control-Pipe-Socket.html#",
      "description": {
        "fct-module": "Control.Pipe.Socket",
        "fct-package": "daemons",
        "fct-signature": "module",
        "fct-source": "src/Control-Pipe-Socket.html",
        "fct-type": "module",
        "title": "Socket"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Socket",
        "module": "Control.Pipe.Socket",
        "name": "Socket",
        "normalized": "",
        "package": "daemons",
        "partial": "Socket",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/Control-Pipe-Socket.html#t:Handler",
      "description": {
        "fct-descr": "\u003cp\u003eA simple handler: takes an incoming stream of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es, an\n stream of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es, and ties them together somehow.\n Conceptually, the simplest handler would be \u003ccode\u003eidentity\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e import Control.Monad\n import Control.Pipe\n import Data.ByteString.Char8\n\n handler reader writer = do\n     let identity = forever $ do\n         x \u003c- await\n         yield x\n     runPipe (writer \u003c+\u003c identity \u003c+\u003c reader)\n\u003c/pre\u003e\u003cp\u003eSee the \u003ccode\u003epipes\u003c/code\u003e tutorial for more examples of writing pipes.\n\u003c/p\u003e\u003cp\u003eSince \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es are fairly boring by themseleves, have a look\n at \u003ca\u003eControl.Pipe.Serialize\u003c/a\u003e which lets you deserialize/serialize\n pipes of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es easily.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Socket",
        "fct-package": "daemons",
        "fct-signature": "type",
        "fct-source": "src/Control-Pipe-Socket.html#Handler",
        "fct-type": "type",
        "title": "Handler"
      },
      "index": {
        "description": "simple handler takes an incoming stream of ByteString an stream of ByteString and ties them together somehow Conceptually the simplest handler would be identity import Control.Monad import Control.Pipe import Data.ByteString.Char8 handler reader writer do let identity forever do await yield runPipe writer identity reader See the pipes tutorial for more examples of writing pipes Since ByteString are fairly boring by themseleves have look at Control.Pipe.Serialize which lets you deserialize serialize pipes of ByteString easily",
        "hierarchy": "Control Pipe Socket",
        "module": "Control.Pipe.Socket",
        "name": "Handler",
        "normalized": "",
        "package": "daemons",
        "partial": "Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/Control-Pipe-Socket.html#v:runSocketClient",
      "description": {
        "fct-descr": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003eHandler\u003c/a\u003e\u003c/code\u003e on the given socket.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Socket",
        "fct-package": "daemons",
        "fct-signature": "Socket -\u003e Handler r -\u003e m r",
        "fct-source": "src/Control-Pipe-Socket.html#runSocketClient",
        "fct-type": "function",
        "title": "runSocketClient"
      },
      "index": {
        "description": "Run Handler on the given socket",
        "hierarchy": "Control Pipe Socket",
        "module": "Control.Pipe.Socket",
        "name": "runSocketClient",
        "normalized": "Socket-\u003eHandler a-\u003eb a",
        "package": "daemons",
        "partial": "Socket Client",
        "signature": "Socket-\u003eHandler r-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/Control-Pipe-Socket.html#v:runSocketServer",
      "description": {
        "fct-descr": "\u003cp\u003eListen for connections on the given socket, and run \u003ccode\u003e\u003ca\u003eHandler\u003c/a\u003e\u003c/code\u003e on\n each received connection.  The socket should previously have been\n bound to a port or to a file.  Each handler is run in its own\n thread.  Even in case of an error, the handlers' sockets are\n closed.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Socket",
        "fct-package": "daemons",
        "fct-signature": "Socket -\u003e Handler () -\u003e m ()",
        "fct-source": "src/Control-Pipe-Socket.html#runSocketServer",
        "fct-type": "function",
        "title": "runSocketServer"
      },
      "index": {
        "description": "Listen for connections on the given socket and run Handler on each received connection The socket should previously have been bound to port or to file Each handler is run in its own thread Even in case of an error the handlers sockets are closed",
        "hierarchy": "Control Pipe Socket",
        "module": "Control.Pipe.Socket",
        "name": "runSocketServer",
        "normalized": "Socket-\u003eHandler()-\u003ea()",
        "package": "daemons",
        "partial": "Socket Server",
        "signature": "Socket-\u003eHandler()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/Control-Pipe-Socket.html#v:socketReader",
      "description": {
        "fct-descr": "\u003cp\u003eStream data from the socket.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Socket",
        "fct-package": "daemons",
        "fct-signature": "Socket -\u003e Producer ByteString m ()",
        "fct-source": "src/Control-Pipe-Socket.html#socketReader",
        "fct-type": "function",
        "title": "socketReader"
      },
      "index": {
        "description": "Stream data from the socket",
        "hierarchy": "Control Pipe Socket",
        "module": "Control.Pipe.Socket",
        "name": "socketReader",
        "normalized": "Socket-\u003eProducer ByteString a()",
        "package": "daemons",
        "partial": "Reader",
        "signature": "Socket-\u003eProducer ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/Control-Pipe-Socket.html#v:socketWriter",
      "description": {
        "fct-descr": "\u003cp\u003eStream data to the socket.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Socket",
        "fct-package": "daemons",
        "fct-signature": "Socket -\u003e Consumer ByteString m ()",
        "fct-source": "src/Control-Pipe-Socket.html#socketWriter",
        "fct-type": "function",
        "title": "socketWriter"
      },
      "index": {
        "description": "Stream data to the socket",
        "hierarchy": "Control Pipe Socket",
        "module": "Control.Pipe.Socket",
        "name": "socketWriter",
        "normalized": "Socket-\u003eConsumer ByteString a()",
        "package": "daemons",
        "partial": "Writer",
        "signature": "Socket-\u003eConsumer ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/System-Daemon.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn RPC-like interface for daemons is provided by\n \u003ccode\u003e\u003ca\u003eensureDaemonRunning\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erunClient\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA more versatile interface that lets you supply your own \u003ccode\u003e\u003ca\u003eHandler\u003c/a\u003e\u003c/code\u003e\n is provided by \u003ccode\u003e\u003ca\u003eensureDaemonWithHandlerRunning\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003erunClientWithHandler\u003c/a\u003e\u003c/code\u003e.  These are useful if, for instance, you\n need streaming requests or replies, or if you need to change your\n event handler at runtime.\n\u003c/p\u003e\u003cp\u003eThe event handling loop is provided by \u003ccode\u003e\u003ca\u003erunInForeground\u003c/a\u003e\u003c/code\u003e.  You may\n want to use this for debugging purposes or if you want to handle\n daemonization manually.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Daemon",
        "fct-package": "daemons",
        "fct-signature": "module",
        "fct-source": "src/System-Daemon.html",
        "fct-type": "module",
        "title": "Daemon"
      },
      "index": {
        "description": "An RPC-like interface for daemons is provided by ensureDaemonRunning and runClient more versatile interface that lets you supply your own Handler is provided by ensureDaemonWithHandlerRunning and runClientWithHandler These are useful if for instance you need streaming requests or replies or if you need to change your event handler at runtime The event handling loop is provided by runInForeground You may want to use this for debugging purposes or if you want to handle daemonization manually",
        "hierarchy": "System Daemon",
        "module": "System.Daemon",
        "name": "Daemon",
        "normalized": "",
        "package": "daemons",
        "partial": "Daemon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/System-Daemon.html#t:DaemonOptions",
      "description": {
        "fct-descr": "\u003cp\u003eThe configuration options of a daemon.  See \u003ccode\u003e\u003ca\u003eensureDaemonRunning\u003c/a\u003e\u003c/code\u003e\n for a description of each.\n\u003c/p\u003e",
        "fct-module": "System.Daemon",
        "fct-package": "daemons",
        "fct-signature": "data",
        "fct-source": "src/System-Daemon.html#DaemonOptions",
        "fct-type": "data",
        "title": "DaemonOptions"
      },
      "index": {
        "description": "The configuration options of daemon See ensureDaemonRunning for description of each",
        "hierarchy": "System Daemon",
        "module": "System.Daemon",
        "name": "DaemonOptions",
        "normalized": "",
        "package": "daemons",
        "partial": "Daemon Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/System-Daemon.html#t:HostName",
      "description": {
        "fct-module": "System.Daemon",
        "fct-package": "daemons",
        "fct-signature": "type",
        "fct-source": "src/System-Daemon.html#HostName",
        "fct-type": "type",
        "title": "HostName"
      },
      "index": {
        "description": "",
        "hierarchy": "System Daemon",
        "module": "System.Daemon",
        "name": "HostName",
        "normalized": "",
        "package": "daemons",
        "partial": "Host Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/System-Daemon.html#t:PidFile",
      "description": {
        "fct-descr": "\u003cp\u003eThe location of the daemon's pidfile.\n\u003c/p\u003e",
        "fct-module": "System.Daemon",
        "fct-package": "daemons",
        "fct-signature": "data",
        "fct-source": "src/System-Daemon.html#PidFile",
        "fct-type": "data",
        "title": "PidFile"
      },
      "index": {
        "description": "The location of the daemon pidfile",
        "hierarchy": "System Daemon",
        "module": "System.Daemon",
        "name": "PidFile",
        "normalized": "",
        "package": "daemons",
        "partial": "Pid File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/System-Daemon.html#t:Port",
      "description": {
        "fct-module": "System.Daemon",
        "fct-package": "daemons",
        "fct-signature": "type",
        "fct-source": "src/System-Daemon.html#Port",
        "fct-type": "type",
        "title": "Port"
      },
      "index": {
        "description": "",
        "hierarchy": "System Daemon",
        "module": "System.Daemon",
        "name": "Port",
        "normalized": "",
        "package": "daemons",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/System-Daemon.html#v:DaemonOptions",
      "description": {
        "fct-module": "System.Daemon",
        "fct-package": "daemons",
        "fct-signature": "DaemonOptions",
        "fct-source": "src/System-Daemon.html#DaemonOptions",
        "fct-type": "function",
        "title": "DaemonOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "System Daemon",
        "module": "System.Daemon",
        "name": "DaemonOptions",
        "normalized": "",
        "package": "daemons",
        "partial": "Daemon Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/System-Daemon.html#v:InHome",
      "description": {
        "fct-module": "System.Daemon",
        "fct-package": "daemons",
        "fct-signature": "InHome",
        "fct-source": "src/System-Daemon.html#PidFile",
        "fct-type": "function",
        "title": "InHome"
      },
      "index": {
        "description": "",
        "hierarchy": "System Daemon",
        "module": "System.Daemon",
        "name": "InHome",
        "normalized": "",
        "package": "daemons",
        "partial": "In Home",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/System-Daemon.html#v:PidFile",
      "description": {
        "fct-module": "System.Daemon",
        "fct-package": "daemons",
        "fct-signature": "PidFile FilePath",
        "fct-source": "src/System-Daemon.html#PidFile",
        "fct-type": "function",
        "title": "PidFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System Daemon",
        "module": "System.Daemon",
        "name": "PidFile",
        "normalized": "",
        "package": "daemons",
        "partial": "Pid File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/System-Daemon.html#v:bindPort",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a socket and bind it to the given port.\n\u003c/p\u003e",
        "fct-module": "System.Daemon",
        "fct-package": "daemons",
        "fct-signature": "Port -\u003e IO Socket",
        "fct-source": "src/System-Daemon.html#bindPort",
        "fct-type": "function",
        "title": "bindPort"
      },
      "index": {
        "description": "Create socket and bind it to the given port",
        "hierarchy": "System Daemon",
        "module": "System.Daemon",
        "name": "bindPort",
        "normalized": "Port-\u003eIO Socket",
        "package": "daemons",
        "partial": "Port",
        "signature": "Port-\u003eIO Socket"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/System-Daemon.html#v:daemonPidFile",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Daemon",
        "fct-package": "daemons",
        "fct-signature": "PidFile",
        "fct-source": "src/System-Daemon.html#DaemonOptions",
        "fct-type": "function",
        "title": "daemonPidFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System Daemon",
        "module": "System.Daemon",
        "name": "daemonPidFile",
        "normalized": "",
        "package": "daemons",
        "partial": "Pid File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/System-Daemon.html#v:daemonPort",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Daemon",
        "fct-package": "daemons",
        "fct-signature": "Port",
        "fct-source": "src/System-Daemon.html#DaemonOptions",
        "fct-type": "function",
        "title": "daemonPort"
      },
      "index": {
        "description": "",
        "hierarchy": "System Daemon",
        "module": "System.Daemon",
        "name": "daemonPort",
        "normalized": "",
        "package": "daemons",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/System-Daemon.html#v:ensureDaemonRunning",
      "description": {
        "fct-descr": "\u003cp\u003eSimple wrapper around \u003ccode\u003e\u003ca\u003eensureDaemonWithHandlerRunning\u003c/a\u003e\u003c/code\u003e which uses\n a simple function to respond to commands and doesn't deal with\n pipes.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003ehandler\u003c/code\u003e is just a function that takes a command and returns a\n response.\n\u003c/p\u003e",
        "fct-module": "System.Daemon",
        "fct-package": "daemons",
        "fct-signature": "String-\u003e DaemonOptions-\u003e (a -\u003e IO b)-\u003e IO ()",
        "fct-type": "function",
        "title": "ensureDaemonRunning"
      },
      "index": {
        "description": "Simple wrapper around ensureDaemonWithHandlerRunning which uses simple function to respond to commands and doesn deal with pipes The handler is just function that takes command and returns response",
        "hierarchy": "System Daemon",
        "module": "System.Daemon",
        "name": "ensureDaemonRunning",
        "normalized": "String-\u003eDaemonOptions-\u003e(a-\u003eIO b)-\u003eIO()",
        "package": "daemons",
        "partial": "Daemon Running",
        "signature": "String-\u003eDaemonOptions-\u003e(a-\u003eIO b)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/System-Daemon.html#v:ensureDaemonWithHandlerRunning",
      "description": {
        "fct-descr": "\u003cp\u003eStart a daemon running on the given port, using the given handler\n to respond to events.  If the daemon is already running, don't do\n anything.  Returns immediately.\n\u003c/p\u003e\u003cp\u003eThe pidfile \u003ccode\u003ePidFile options\u003c/code\u003e will be created and locked.  This\n function checks the pidfile to see if the daemon is already\n running.\n\u003c/p\u003e\u003cp\u003eThe daemon will listen for incoming connections on all interfaces\n on \u003ccode\u003edaemonPort options\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003ehandler\u003c/code\u003e is a function that takes the reader and writer\n \u003ccode\u003eByteString\u003c/code\u003e pipes and does something with them.  See\n \u003ccode\u003e\u003ca\u003ecommandReceiver\u003c/a\u003e\u003c/code\u003e for an example handler.\n\u003c/p\u003e",
        "fct-module": "System.Daemon",
        "fct-package": "daemons",
        "fct-signature": "String-\u003e DaemonOptions-\u003e Handler ()-\u003e IO ()",
        "fct-type": "function",
        "title": "ensureDaemonWithHandlerRunning"
      },
      "index": {
        "description": "Start daemon running on the given port using the given handler to respond to events If the daemon is already running don do anything Returns immediately The pidfile PidFile options will be created and locked This function checks the pidfile to see if the daemon is already running The daemon will listen for incoming connections on all interfaces on daemonPort options The handler is function that takes the reader and writer ByteString pipes and does something with them See commandReceiver for an example handler",
        "hierarchy": "System Daemon",
        "module": "System.Daemon",
        "name": "ensureDaemonWithHandlerRunning",
        "normalized": "String-\u003eDaemonOptions-\u003eHandler()-\u003eIO()",
        "package": "daemons",
        "partial": "Daemon With Handler Running",
        "signature": "String-\u003eDaemonOptions-\u003eHandler()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/System-Daemon.html#v:getSocket",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a socket connected to the given network address.\n\u003c/p\u003e",
        "fct-module": "System.Daemon",
        "fct-package": "daemons",
        "fct-signature": "HostName -\u003e Port -\u003e IO Socket",
        "fct-source": "src/System-Daemon.html#getSocket",
        "fct-type": "function",
        "title": "getSocket"
      },
      "index": {
        "description": "Create socket connected to the given network address",
        "hierarchy": "System Daemon",
        "module": "System.Daemon",
        "name": "getSocket",
        "normalized": "HostName-\u003ePort-\u003eIO Socket",
        "package": "daemons",
        "partial": "Socket",
        "signature": "HostName-\u003ePort-\u003eIO Socket"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/System-Daemon.html#v:printOnDaemonStarted",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Daemon",
        "fct-package": "daemons",
        "fct-signature": "Bool",
        "fct-source": "src/System-Daemon.html#DaemonOptions",
        "fct-type": "function",
        "title": "printOnDaemonStarted"
      },
      "index": {
        "description": "",
        "hierarchy": "System Daemon",
        "module": "System.Daemon",
        "name": "printOnDaemonStarted",
        "normalized": "",
        "package": "daemons",
        "partial": "On Daemon Started",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/System-Daemon.html#v:runClient",
      "description": {
        "fct-descr": "\u003cp\u003eSend a command to the daemon running at the given network address\n and wait for a response.\n\u003c/p\u003e\u003cp\u003eThis is a simple wrapper around \u003ccode\u003e\u003ca\u003erunClientWithHandler\u003c/a\u003e\u003c/code\u003e that sends a\n single command and waits for a single response.\n\u003c/p\u003e\u003cp\u003eIf the connection is closed before receiving a response, return\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Daemon",
        "fct-package": "daemons",
        "fct-signature": "HostName-\u003e Port-\u003e a-\u003e IO (Maybe b)",
        "fct-type": "function",
        "title": "runClient"
      },
      "index": {
        "description": "Send command to the daemon running at the given network address and wait for response This is simple wrapper around runClientWithHandler that sends single command and waits for single response If the connection is closed before receiving response return Nothing",
        "hierarchy": "System Daemon",
        "module": "System.Daemon",
        "name": "runClient",
        "normalized": "HostName-\u003ePort-\u003ea-\u003eIO(Maybe b)",
        "package": "daemons",
        "partial": "Client",
        "signature": "HostName-\u003ePort-\u003ea-\u003eIO(Maybe b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/System-Daemon.html#v:runClientWithHandler",
      "description": {
        "fct-descr": "\u003cp\u003eConnect to the given network address and run the handler on the\n reader and wrier pipes for the socket.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003ehandler\u003c/code\u003e is a function that takes the reader and writer\n \u003ccode\u003eByteString\u003c/code\u003e pipes and does something with them.  For an example\n handler, see \u003ccode\u003e\u003ca\u003ecommandSender\u003c/a\u003e\u003c/code\u003e, which sends a command and waits for a\n response.\n\u003c/p\u003e",
        "fct-module": "System.Daemon",
        "fct-package": "daemons",
        "fct-signature": "HostName-\u003e Port-\u003e Handler a-\u003e IO a",
        "fct-type": "function",
        "title": "runClientWithHandler"
      },
      "index": {
        "description": "Connect to the given network address and run the handler on the reader and wrier pipes for the socket The handler is function that takes the reader and writer ByteString pipes and does something with them For an example handler see commandSender which sends command and waits for response",
        "hierarchy": "System Daemon",
        "module": "System.Daemon",
        "name": "runClientWithHandler",
        "normalized": "HostName-\u003ePort-\u003eHandler a-\u003eIO a",
        "package": "daemons",
        "partial": "Client With Handler",
        "signature": "HostName-\u003ePort-\u003eHandler a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/System-Daemon.html#v:runInForeground",
      "description": {
        "fct-descr": "\u003cp\u003eStart the given handler in the foreground.  It will listen and\n respond to events on the given port.\n\u003c/p\u003e\u003cp\u003eThis is the function that \u003ccode\u003e\u003ca\u003eensureDaemonWithHandlerRunning\u003c/a\u003e\u003c/code\u003e runs on\n the daemon thread.\n\u003c/p\u003e",
        "fct-module": "System.Daemon",
        "fct-package": "daemons",
        "fct-signature": "Port -\u003e Handler () -\u003e IO ()",
        "fct-source": "src/System-Daemon.html#runInForeground",
        "fct-type": "function",
        "title": "runInForeground"
      },
      "index": {
        "description": "Start the given handler in the foreground It will listen and respond to events on the given port This is the function that ensureDaemonWithHandlerRunning runs on the daemon thread",
        "hierarchy": "System Daemon",
        "module": "System.Daemon",
        "name": "runInForeground",
        "normalized": "Port-\u003eHandler()-\u003eIO()",
        "package": "daemons",
        "partial": "In Foreground",
        "signature": "Port-\u003eHandler()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/System-Posix-Daemon.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a simple interface to creating, checking the\n status of, and stopping background jobs.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003erunDetached\u003c/a\u003e\u003c/code\u003e to start a background job.  For instance, here is\n a daemon that peridically hits a webserver:\n\u003c/p\u003e\u003cpre\u003e import Control.Concurrent\n import Control.Monad\n import Data.Default\n import Data.Maybe\n import Network.BSD\n import Network.HTTP\n import Network.URI\n import System.Posix.Daemon\n\n main :: IO ()\n main = runDetached (Just \"diydns.pid\") def $ forever $ do\n     hostname \u003c- getHostName\n     _ \u003c- simpleHTTP\n              (Request { rqURI     = fromJust (parseURI \"http://foo.com/dns\")\n                       , rqMethod  = GET\n                       , rqHeaders = []\n                       , rqBody    = hostname })\n     threadDelay (600 * 1000 * 1000)\n\u003c/pre\u003e\u003cp\u003eTo check if the above job is running, use \u003ccode\u003e\u003ca\u003eisRunning\u003c/a\u003e\u003c/code\u003e with the same\n pidfile:\n\u003c/p\u003e\u003cpre\u003e isRunning \"diydns.pid\"\n\u003c/pre\u003e\u003cp\u003eFinally, to stop the above job (maybe because we're rolling a new\n version of it), use \u003ccode\u003e\u003ca\u003ekill\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e kill \"diydns.pid\"\n\u003c/pre\u003e\u003cp\u003eTo stop a job and wait for it to close (and release its pidfile), use\n \u003ccode\u003e\u003ca\u003ekillAndWait\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e killAndWait \"diydns.pid\" \u003e\u003e doSomething\n\u003c/pre\u003e\u003cp\u003eAs a side note, the code above is a script that the author uses as\n a sort of homebrew dynamic DNS: the remote address is a CGI script\n that records the IP addresses of all incoming requests in separate\n files named after the contents of the requests; the addresses are\n then viewable with any browser.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Posix.Daemon",
        "fct-package": "daemons",
        "fct-signature": "module",
        "fct-source": "src/System-Posix-Daemon.html",
        "fct-type": "module",
        "title": "Daemon"
      },
      "index": {
        "description": "This module provides simple interface to creating checking the status of and stopping background jobs Use runDetached to start background job For instance here is daemon that peridically hits webserver import Control.Concurrent import Control.Monad import Data.Default import Data.Maybe import Network.BSD import Network.HTTP import Network.URI import System.Posix.Daemon main IO main runDetached Just diydns.pid def forever do hostname getHostName simpleHTTP Request rqURI fromJust parseURI http foo.com dns rqMethod GET rqHeaders rqBody hostname threadDelay To check if the above job is running use isRunning with the same pidfile isRunning diydns.pid Finally to stop the above job maybe because we re rolling new version of it use kill kill diydns.pid To stop job and wait for it to close and release its pidfile use killAndWait killAndWait diydns.pid doSomething As side note the code above is script that the author uses as sort of homebrew dynamic DNS the remote address is CGI script that records the IP addresses of all incoming requests in separate files named after the contents of the requests the addresses are then viewable with any browser",
        "hierarchy": "System Posix Daemon",
        "module": "System.Posix.Daemon",
        "name": "Daemon",
        "normalized": "",
        "package": "daemons",
        "partial": "Daemon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/System-Posix-Daemon.html#t:Redirection",
      "description": {
        "fct-descr": "\u003cp\u003eWhere should the output (and input) of a daemon be redirected to?\n (we can't just leave it to the current terminal, because it may be\n closed, and that would kill the daemon).\n\u003c/p\u003e\u003cp\u003eWhen in doubt, just use \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e, the default value.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eDevNull\u003c/a\u003e\u003c/code\u003e causes the output to be redirected to \u003ccode\u003e/dev/null\u003c/code\u003e.  This\n is safe and is what you want in most cases.\n\u003c/p\u003e\u003cp\u003eIf you don't want to lose the output (maybe because you're using it\n for logging), use \u003ccode\u003e\u003ca\u003eToFile\u003c/a\u003e\u003c/code\u003e, instead.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Daemon",
        "fct-package": "daemons",
        "fct-signature": "data",
        "fct-source": "src/System-Posix-Daemon.html#Redirection",
        "fct-type": "data",
        "title": "Redirection"
      },
      "index": {
        "description": "Where should the output and input of daemon be redirected to we can just leave it to the current terminal because it may be closed and that would kill the daemon When in doubt just use def the default value DevNull causes the output to be redirected to dev null This is safe and is what you want in most cases If you don want to lose the output maybe because you re using it for logging use ToFile instead",
        "hierarchy": "System Posix Daemon",
        "module": "System.Posix.Daemon",
        "name": "Redirection",
        "normalized": "",
        "package": "daemons",
        "partial": "Redirection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/System-Posix-Daemon.html#v:DevNull",
      "description": {
        "fct-module": "System.Posix.Daemon",
        "fct-package": "daemons",
        "fct-signature": "DevNull",
        "fct-source": "src/System-Posix-Daemon.html#Redirection",
        "fct-type": "function",
        "title": "DevNull"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix Daemon",
        "module": "System.Posix.Daemon",
        "name": "DevNull",
        "normalized": "",
        "package": "daemons",
        "partial": "Dev Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/System-Posix-Daemon.html#v:ToFile",
      "description": {
        "fct-module": "System.Posix.Daemon",
        "fct-package": "daemons",
        "fct-signature": "ToFile FilePath",
        "fct-source": "src/System-Posix-Daemon.html#Redirection",
        "fct-type": "function",
        "title": "ToFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix Daemon",
        "module": "System.Posix.Daemon",
        "name": "ToFile",
        "normalized": "",
        "package": "daemons",
        "partial": "To File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/System-Posix-Daemon.html#v:brutalKill",
      "description": {
        "fct-descr": "\u003cp\u003eSend \u003ccode\u003e\u003ca\u003esigKILL\u003c/a\u003e\u003c/code\u003e to the process recorded in the pidfile.  This\n immediately kills the process.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Daemon",
        "fct-package": "daemons",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/System-Posix-Daemon.html#brutalKill",
        "fct-type": "function",
        "title": "brutalKill"
      },
      "index": {
        "description": "Send sigKILL to the process recorded in the pidfile This immediately kills the process",
        "hierarchy": "System Posix Daemon",
        "module": "System.Posix.Daemon",
        "name": "brutalKill",
        "normalized": "FilePath-\u003eIO()",
        "package": "daemons",
        "partial": "Kill",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/System-Posix-Daemon.html#v:isRunning",
      "description": {
        "fct-descr": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the given file is locked by a process.  In our\n case, returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when the daemon that created the file is still\n alive.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Daemon",
        "fct-package": "daemons",
        "fct-signature": "FilePath -\u003e IO Bool",
        "fct-source": "src/System-Posix-Daemon.html#isRunning",
        "fct-type": "function",
        "title": "isRunning"
      },
      "index": {
        "description": "Return True if the given file is locked by process In our case returns True when the daemon that created the file is still alive",
        "hierarchy": "System Posix Daemon",
        "module": "System.Posix.Daemon",
        "name": "isRunning",
        "normalized": "FilePath-\u003eIO Bool",
        "package": "daemons",
        "partial": "Running",
        "signature": "FilePath-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/System-Posix-Daemon.html#v:kill",
      "description": {
        "fct-descr": "\u003cp\u003eSend \u003ccode\u003e\u003ca\u003esigQUIT\u003c/a\u003e\u003c/code\u003e to the process recorded in the pidfile.  This\n gives the process a chance to close cleanly.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Daemon",
        "fct-package": "daemons",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/System-Posix-Daemon.html#kill",
        "fct-type": "function",
        "title": "kill"
      },
      "index": {
        "description": "Send sigQUIT to the process recorded in the pidfile This gives the process chance to close cleanly",
        "hierarchy": "System Posix Daemon",
        "module": "System.Posix.Daemon",
        "name": "kill",
        "normalized": "FilePath-\u003eIO()",
        "package": "daemons",
        "partial": "",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/System-Posix-Daemon.html#v:killAndWait",
      "description": {
        "fct-descr": "\u003cp\u003eKill a process and wait for it to release its pidfile\n\u003c/p\u003e",
        "fct-module": "System.Posix.Daemon",
        "fct-package": "daemons",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/System-Posix-Daemon.html#killAndWait",
        "fct-type": "function",
        "title": "killAndWait"
      },
      "index": {
        "description": "Kill process and wait for it to release its pidfile",
        "hierarchy": "System Posix Daemon",
        "module": "System.Posix.Daemon",
        "name": "killAndWait",
        "normalized": "FilePath-\u003eIO()",
        "package": "daemons",
        "partial": "And Wait",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemons/docs/System-Posix-Daemon.html#v:runDetached",
      "description": {
        "fct-descr": "\u003cp\u003eRun the given action detached from the current terminal; this\n creates an entirely new process.  This function returns\n immediately.  Uses the double-fork technique to create a well\n behaved daemon.  If \u003ccode\u003epidfile\u003c/code\u003e is given, check/write it; if we\n cannot obtain a lock on the file, another process is already using\n it, so fail.  The \u003ccode\u003eredirection\u003c/code\u003e parameter controls what to do with\n the standard channels (\u003ccode\u003estdin\u003c/code\u003e, \u003ccode\u003estderr\u003c/code\u003e, and \u003ccode\u003estdout\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eSee: \u003ca\u003ehttp://www.enderunix.org/docs/eng/daemon.php\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eNote: All unnecessary fds should be close before calling this.\n Otherwise, you get an fd leak.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Daemon",
        "fct-package": "daemons",
        "fct-signature": "Maybe FilePath-\u003e Redirection-\u003e IO ()-\u003e IO ()",
        "fct-type": "function",
        "title": "runDetached"
      },
      "index": {
        "description": "Run the given action detached from the current terminal this creates an entirely new process This function returns immediately Uses the double-fork technique to create well behaved daemon If pidfile is given check write it if we cannot obtain lock on the file another process is already using it so fail The redirection parameter controls what to do with the standard channels stdin stderr and stdout See http www.enderunix.org docs eng daemon.php Note All unnecessary fds should be close before calling this Otherwise you get an fd leak",
        "hierarchy": "System Posix Daemon",
        "module": "System.Posix.Daemon",
        "name": "runDetached",
        "normalized": "Maybe FilePath-\u003eRedirection-\u003eIO()-\u003eIO()",
        "package": "daemons",
        "partial": "Detached",
        "signature": "Maybe FilePath-\u003eRedirection-\u003eIO()-\u003eIO()"
      }
    }
  }
]