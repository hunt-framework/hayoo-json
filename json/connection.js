[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple connection abstraction\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "module",
        "fct-source": "src/Network-Connection.html",
        "fct-type": "module",
        "title": "Connection"
      },
      "index": {
        "description": "Simple connection abstraction",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "Connection",
        "normalized": "",
        "package": "connection",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#t:Connection",
      "description": {
        "fct-descr": "\u003cp\u003eThis opaque type represent a connection to a destination.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "data",
        "fct-source": "src/Network-Connection-Types.html#Connection",
        "fct-type": "data",
        "title": "Connection"
      },
      "index": {
        "description": "This opaque type represent connection to destination",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "Connection",
        "normalized": "",
        "package": "connection",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#t:ConnectionContext",
      "description": {
        "fct-descr": "\u003cp\u003eShared values (certificate store, sessions, ..) between connections\n\u003c/p\u003e\u003cp\u003eAt the moment, this is only strictly needed to shared sessions and certificates\n when using a TLS enabled connection.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "data",
        "fct-source": "src/Network-Connection-Types.html#ConnectionContext",
        "fct-type": "data",
        "title": "ConnectionContext"
      },
      "index": {
        "description": "Shared values certificate store sessions between connections At the moment this is only strictly needed to shared sessions and certificates when using TLS enabled connection",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "ConnectionContext",
        "normalized": "",
        "package": "connection",
        "partial": "Connection Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#t:ConnectionParams",
      "description": {
        "fct-descr": "\u003cp\u003eConnection Parameters to establish a Connection.\n\u003c/p\u003e\u003cp\u003eThe strict minimum is an hostname and the port.\n\u003c/p\u003e\u003cp\u003eIf you need to establish a TLS connection, you should make sure\n connectionUseSecure is correctly set.\n\u003c/p\u003e\u003cp\u003eIf you need to connect through a SOCKS, you should make sure\n connectionUseSocks is correctly set.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "data",
        "fct-source": "src/Network-Connection-Types.html#ConnectionParams",
        "fct-type": "data",
        "title": "ConnectionParams"
      },
      "index": {
        "description": "Connection Parameters to establish Connection The strict minimum is an hostname and the port If you need to establish TLS connection you should make sure connectionUseSecure is correctly set If you need to connect through SOCKS you should make sure connectionUseSocks is correctly set",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "ConnectionParams",
        "normalized": "",
        "package": "connection",
        "partial": "Connection Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#t:LineTooLong",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the exception raised if we reached the user specified limit for\n the line in ConnectionGetLine.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "data",
        "fct-source": "src/Network-Connection.html#LineTooLong",
        "fct-type": "data",
        "title": "LineTooLong"
      },
      "index": {
        "description": "This is the exception raised if we reached the user specified limit for the line in ConnectionGetLine",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "LineTooLong",
        "normalized": "",
        "package": "connection",
        "partial": "Line Too Long",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#t:SockSettings",
      "description": {
        "fct-descr": "\u003cp\u003eSocks settings for the connection.\n\u003c/p\u003e\u003cp\u003eThe simple settings is just the hostname and portnumber of the proxy server.\n\u003c/p\u003e\u003cp\u003eThat's for now the only settings in the SOCKS package,\n socks password, or any sort of other authentications is not yet implemented.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "data",
        "fct-source": "src/Network-Connection-Types.html#SockSettings",
        "fct-type": "data",
        "title": "SockSettings"
      },
      "index": {
        "description": "Socks settings for the connection The simple settings is just the hostname and portnumber of the proxy server That for now the only settings in the SOCKS package socks password or any sort of other authentications is not yet implemented",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "SockSettings",
        "normalized": "",
        "package": "connection",
        "partial": "Sock Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#t:TLSSettings",
      "description": {
        "fct-descr": "\u003cp\u003eTLS Settings that can be either expressed as simple settings,\n or as full blown TLS.Params settings.\n\u003c/p\u003e\u003cp\u003eUnless you need access to parameters that are not accessible through the\n simple settings, you should use TLSSettingsSimple.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "data",
        "fct-source": "src/Network-Connection-Types.html#TLSSettings",
        "fct-type": "data",
        "title": "TLSSettings"
      },
      "index": {
        "description": "TLS Settings that can be either expressed as simple settings or as full blown TLS.Params settings Unless you need access to parameters that are not accessible through the simple settings you should use TLSSettingsSimple",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "TLSSettings",
        "normalized": "",
        "package": "connection",
        "partial": "TLSSettings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:ConnectionParams",
      "description": {
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "ConnectionParams",
        "fct-source": "src/Network-Connection-Types.html#ConnectionParams",
        "fct-type": "function",
        "title": "ConnectionParams"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "ConnectionParams",
        "normalized": "",
        "package": "connection",
        "partial": "Connection Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:LineTooLong",
      "description": {
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "LineTooLong",
        "fct-source": "src/Network-Connection.html#LineTooLong",
        "fct-type": "function",
        "title": "LineTooLong"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "LineTooLong",
        "normalized": "",
        "package": "connection",
        "partial": "Line Too Long",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:SockSettingsSimple",
      "description": {
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "SockSettingsSimple HostName PortNumber",
        "fct-source": "src/Network-Connection-Types.html#SockSettings",
        "fct-type": "function",
        "title": "SockSettingsSimple"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "SockSettingsSimple",
        "normalized": "",
        "package": "connection",
        "partial": "Sock Settings Simple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:TLSSettings",
      "description": {
        "fct-descr": "\u003cp\u003efull blown TLS Settings directly using TLS.Params. for power users.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "TLSSettings ClientParams",
        "fct-source": "src/Network-Connection-Types.html#TLSSettings",
        "fct-type": "function",
        "title": "TLSSettings"
      },
      "index": {
        "description": "full blown TLS Settings directly using TLS.Params for power users",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "TLSSettings",
        "normalized": "",
        "package": "connection",
        "partial": "TLSSettings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:TLSSettingsSimple",
      "description": {
        "fct-descr": "\u003cp\u003eSimple TLS settings. recommended to use.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "TLSSettingsSimple",
        "fct-source": "src/Network-Connection-Types.html#TLSSettings",
        "fct-type": "function",
        "title": "TLSSettingsSimple"
      },
      "index": {
        "description": "Simple TLS settings recommended to use",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "TLSSettingsSimple",
        "normalized": "",
        "package": "connection",
        "partial": "TLSSettings Simple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectFromHandle",
      "description": {
        "fct-descr": "\u003cp\u003eUse an already established handle to create a connection object.\n\u003c/p\u003e\u003cp\u003eif the TLS Settings is set, it will do the handshake with the server.\n The SOCKS settings have no impact here, as the handle is already established\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "ConnectionContext -\u003e Handle -\u003e ConnectionParams -\u003e IO Connection",
        "fct-source": "src/Network-Connection.html#connectFromHandle",
        "fct-type": "function",
        "title": "connectFromHandle"
      },
      "index": {
        "description": "Use an already established handle to create connection object if the TLS Settings is set it will do the handshake with the server The SOCKS settings have no impact here as the handle is already established",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "connectFromHandle",
        "normalized": "ConnectionContext-\u003eHandle-\u003eConnectionParams-\u003eIO Connection",
        "package": "connection",
        "partial": "From Handle",
        "signature": "ConnectionContext-\u003eHandle-\u003eConnectionParams-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectTo",
      "description": {
        "fct-descr": "\u003cp\u003econnect to a destination using the parameter\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "ConnectionContext-\u003e ConnectionParams-\u003e IO Connection",
        "fct-type": "function",
        "title": "connectTo"
      },
      "index": {
        "description": "connect to destination using the parameter",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "connectTo",
        "normalized": "ConnectionContext-\u003eConnectionParams-\u003eIO Connection",
        "package": "connection",
        "partial": "To",
        "signature": "ConnectionContext-\u003eConnectionParams-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectionClose",
      "description": {
        "fct-descr": "\u003cp\u003eClose a connection.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "Connection -\u003e IO ()",
        "fct-source": "src/Network-Connection.html#connectionClose",
        "fct-type": "function",
        "title": "connectionClose"
      },
      "index": {
        "description": "Close connection",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "connectionClose",
        "normalized": "Connection-\u003eIO()",
        "package": "connection",
        "partial": "Close",
        "signature": "Connection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectionGet",
      "description": {
        "fct-descr": "\u003cp\u003eGet some bytes from a connection.\n\u003c/p\u003e\u003cp\u003eThe size argument is just the maximum that could be returned to the user.\n The call will return as soon as there's data, even if there's less\n than requested.  Hence, it behaves like \u003ccode\u003e\u003ca\u003ehGetSome\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOn end of input, \u003ccode\u003e\u003ca\u003econnectionGet\u003c/a\u003e\u003c/code\u003e returns 0, but subsequent calls will throw\n an \u003ccode\u003e\u003ca\u003eisEOFError\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "Connection -\u003e Int -\u003e IO ByteString",
        "fct-source": "src/Network-Connection.html#connectionGet",
        "fct-type": "function",
        "title": "connectionGet"
      },
      "index": {
        "description": "Get some bytes from connection The size argument is just the maximum that could be returned to the user The call will return as soon as there data even if there less than requested Hence it behaves like hGetSome On end of input connectionGet returns but subsequent calls will throw an isEOFError exception",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "connectionGet",
        "normalized": "Connection-\u003eInt-\u003eIO ByteString",
        "package": "connection",
        "partial": "Get",
        "signature": "Connection-\u003eInt-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectionGetChunk",
      "description": {
        "fct-descr": "\u003cp\u003eGet the next block of data from the connection.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "Connection -\u003e IO ByteString",
        "fct-source": "src/Network-Connection.html#connectionGetChunk",
        "fct-type": "function",
        "title": "connectionGetChunk"
      },
      "index": {
        "description": "Get the next block of data from the connection",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "connectionGetChunk",
        "normalized": "Connection-\u003eIO ByteString",
        "package": "connection",
        "partial": "Get Chunk",
        "signature": "Connection-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectionGetChunk-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003econnectionGetChunk\u003c/a\u003e\u003c/code\u003e, but return the unused portion to the buffer,\n where it will be the next chunk read.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "Connection -\u003e (ByteString -\u003e (a, ByteString)) -\u003e IO a",
        "fct-source": "src/Network-Connection.html#connectionGetChunk%27",
        "fct-type": "function",
        "title": "connectionGetChunk'"
      },
      "index": {
        "description": "Like connectionGetChunk but return the unused portion to the buffer where it will be the next chunk read",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "connectionGetChunk'",
        "normalized": "Connection-\u003e(ByteString-\u003e(a,ByteString))-\u003eIO a",
        "package": "connection",
        "partial": "Get Chunk'",
        "signature": "Connection-\u003e(ByteString-\u003e(a,ByteString))-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectionGetLine",
      "description": {
        "fct-descr": "\u003cp\u003eGet the next line, using ASCII LF as the line terminator.\n\u003c/p\u003e\u003cp\u003eThis throws an \u003ccode\u003eisEOFError\u003c/code\u003e exception on end of input, and LineTooLong when\n the number of bytes gathered is over the limit without a line terminator.\n\u003c/p\u003e\u003cp\u003eThe actual line returned can be bigger than the limit specified, provided\n that the last chunk returned by the underlaying backend contains a LF.\n In another world only when we need more input and limit is reached that the\n LineTooLong exception will be raised.\n\u003c/p\u003e\u003cp\u003eAn end of file will be considered as a line terminator too, if line is\n not empty.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "Int-\u003e Connection-\u003e IO ByteString",
        "fct-type": "function",
        "title": "connectionGetLine"
      },
      "index": {
        "description": "Get the next line using ASCII LF as the line terminator This throws an isEOFError exception on end of input and LineTooLong when the number of bytes gathered is over the limit without line terminator The actual line returned can be bigger than the limit specified provided that the last chunk returned by the underlaying backend contains LF In another world only when we need more input and limit is reached that the LineTooLong exception will be raised An end of file will be considered as line terminator too if line is not empty",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "connectionGetLine",
        "normalized": "Int-\u003eConnection-\u003eIO ByteString",
        "package": "connection",
        "partial": "Get Line",
        "signature": "Int-\u003eConnection-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectionHostname",
      "description": {
        "fct-descr": "\u003cp\u003ehost name to connect to.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "HostName",
        "fct-source": "src/Network-Connection-Types.html#ConnectionParams",
        "fct-type": "function",
        "title": "connectionHostname"
      },
      "index": {
        "description": "host name to connect to",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "connectionHostname",
        "normalized": "",
        "package": "connection",
        "partial": "Hostname",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectionID",
      "description": {
        "fct-descr": "\u003cp\u003ereturn a simple tuple of the port and hostname that we're connected to.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "Connection -\u003e ConnectionID",
        "fct-source": "src/Network-Connection-Types.html#connectionID",
        "fct-type": "function",
        "title": "connectionID"
      },
      "index": {
        "description": "return simple tuple of the port and hostname that we re connected to",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "connectionID",
        "normalized": "Connection-\u003eConnectionID",
        "package": "connection",
        "partial": "ID",
        "signature": "Connection-\u003eConnectionID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectionIsSecure",
      "description": {
        "fct-descr": "\u003cp\u003eReturns if the connection is establish securely or not.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "Connection -\u003e IO Bool",
        "fct-source": "src/Network-Connection.html#connectionIsSecure",
        "fct-type": "function",
        "title": "connectionIsSecure"
      },
      "index": {
        "description": "Returns if the connection is establish securely or not",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "connectionIsSecure",
        "normalized": "Connection-\u003eIO Bool",
        "package": "connection",
        "partial": "Is Secure",
        "signature": "Connection-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectionPort",
      "description": {
        "fct-descr": "\u003cp\u003eport number to connect to.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "PortNumber",
        "fct-source": "src/Network-Connection-Types.html#ConnectionParams",
        "fct-type": "function",
        "title": "connectionPort"
      },
      "index": {
        "description": "port number to connect to",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "connectionPort",
        "normalized": "",
        "package": "connection",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectionPut",
      "description": {
        "fct-descr": "\u003cp\u003ePut a block of data in the connection.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "Connection -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/Network-Connection.html#connectionPut",
        "fct-type": "function",
        "title": "connectionPut"
      },
      "index": {
        "description": "Put block of data in the connection",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "connectionPut",
        "normalized": "Connection-\u003eByteString-\u003eIO()",
        "package": "connection",
        "partial": "Put",
        "signature": "Connection-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectionSetSecure",
      "description": {
        "fct-descr": "\u003cp\u003eActivate secure layer using the parameters specified.\n\u003c/p\u003e\u003cp\u003eThis is typically used to negociate a TLS channel on an already\n establish channel, e.g. supporting a STARTTLS command. it also\n flush the received buffer to prevent application confusing\n received data before and after the setSecure call.\n\u003c/p\u003e\u003cp\u003eIf the connection is already using TLS, nothing else happens.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "ConnectionContext -\u003e Connection -\u003e TLSSettings -\u003e IO ()",
        "fct-source": "src/Network-Connection.html#connectionSetSecure",
        "fct-type": "function",
        "title": "connectionSetSecure"
      },
      "index": {
        "description": "Activate secure layer using the parameters specified This is typically used to negociate TLS channel on an already establish channel e.g supporting STARTTLS command it also flush the received buffer to prevent application confusing received data before and after the setSecure call If the connection is already using TLS nothing else happens",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "connectionSetSecure",
        "normalized": "ConnectionContext-\u003eConnection-\u003eTLSSettings-\u003eIO()",
        "package": "connection",
        "partial": "Set Secure",
        "signature": "ConnectionContext-\u003eConnection-\u003eTLSSettings-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectionUseSecure",
      "description": {
        "fct-descr": "\u003cp\u003eoptional TLS parameters.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "Maybe TLSSettings",
        "fct-source": "src/Network-Connection-Types.html#ConnectionParams",
        "fct-type": "function",
        "title": "connectionUseSecure"
      },
      "index": {
        "description": "optional TLS parameters",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "connectionUseSecure",
        "normalized": "",
        "package": "connection",
        "partial": "Use Secure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectionUseSocks",
      "description": {
        "fct-descr": "\u003cp\u003eoptional Socks configuration.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "Maybe SockSettings",
        "fct-source": "src/Network-Connection-Types.html#ConnectionParams",
        "fct-type": "function",
        "title": "connectionUseSocks"
      },
      "index": {
        "description": "optional Socks configuration",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "connectionUseSocks",
        "normalized": "",
        "package": "connection",
        "partial": "Use Socks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:initConnectionContext",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize the library with shared parameters between connection.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "IO ConnectionContext",
        "fct-source": "src/Network-Connection.html#initConnectionContext",
        "fct-type": "function",
        "title": "initConnectionContext"
      },
      "index": {
        "description": "Initialize the library with shared parameters between connection",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "initConnectionContext",
        "normalized": "",
        "package": "connection",
        "partial": "Connection Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:settingDisableCertificateValidation",
      "description": {
        "fct-descr": "\u003cp\u003eDisable certificate verification completely,\n   this make TLS/SSL vulnerable to a MITM attack.\n   not recommended to use, but for testing.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "Bool",
        "fct-source": "src/Network-Connection-Types.html#TLSSettings",
        "fct-type": "function",
        "title": "settingDisableCertificateValidation"
      },
      "index": {
        "description": "Disable certificate verification completely this make TLS SSL vulnerable to MITM attack not recommended to use but for testing",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "settingDisableCertificateValidation",
        "normalized": "",
        "package": "connection",
        "partial": "Disable Certificate Validation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:settingDisableSession",
      "description": {
        "fct-descr": "\u003cp\u003eDisable session management. TLS/SSL connections\n   will always re-established their context.\n   Not Implemented Yet.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "Bool",
        "fct-source": "src/Network-Connection-Types.html#TLSSettings",
        "fct-type": "function",
        "title": "settingDisableSession"
      },
      "index": {
        "description": "Disable session management TLS SSL connections will always re-established their context Not Implemented Yet",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "settingDisableSession",
        "normalized": "",
        "package": "connection",
        "partial": "Disable Session",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:settingUseServerName",
      "description": {
        "fct-descr": "\u003cp\u003eUse server name extension. Not Implemented Yet.\n\u003c/p\u003e",
        "fct-module": "Network.Connection",
        "fct-package": "connection",
        "fct-signature": "Bool",
        "fct-source": "src/Network-Connection-Types.html#TLSSettings",
        "fct-type": "function",
        "title": "settingUseServerName"
      },
      "index": {
        "description": "Use server name extension Not Implemented Yet",
        "hierarchy": "Network Connection",
        "module": "Network.Connection",
        "name": "settingUseServerName",
        "normalized": "",
        "package": "connection",
        "partial": "Use Server Name",
        "signature": ""
      }
    }
  }
]