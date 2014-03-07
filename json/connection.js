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
        "word": "connection"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple connection abstraction\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Connection",
          "name": "Connection",
          "package": "connection",
          "source": "src/Network-Connection.html",
          "type": "module"
        },
        "index": {
          "description": "Simple connection abstraction",
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "Connection",
          "package": "connection",
          "partial": "Connection",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis opaque type represent a connection to a destination.\n\u003c/p\u003e",
          "module": "Network.Connection",
          "name": "Connection",
          "package": "connection",
          "source": "src/Network-Connection-Types.html#Connection",
          "type": "data"
        },
        "index": {
          "description": "This opaque type represent connection to destination",
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "Connection",
          "package": "connection",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShared values (certificate store, sessions, ..) between connections\n\u003c/p\u003e\u003cp\u003eAt the moment, this is only strictly needed to shared sessions and certificates\n when using a TLS enabled connection.\n\u003c/p\u003e",
          "module": "Network.Connection",
          "name": "ConnectionContext",
          "package": "connection",
          "source": "src/Network-Connection-Types.html#ConnectionContext",
          "type": "data"
        },
        "index": {
          "description": "Shared values certificate store sessions between connections At the moment this is only strictly needed to shared sessions and certificates when using TLS enabled connection",
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "ConnectionContext",
          "package": "connection",
          "partial": "Connection Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#t:ConnectionContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnection Parameters to establish a Connection.\n\u003c/p\u003e\u003cp\u003eThe strict minimum is an hostname and the port.\n\u003c/p\u003e\u003cp\u003eIf you need to establish a TLS connection, you should make sure\n connectionUseSecure is correctly set.\n\u003c/p\u003e\u003cp\u003eIf you need to connect through a SOCKS, you should make sure\n connectionUseSocks is correctly set.\n\u003c/p\u003e",
          "module": "Network.Connection",
          "name": "ConnectionParams",
          "package": "connection",
          "source": "src/Network-Connection-Types.html#ConnectionParams",
          "type": "data"
        },
        "index": {
          "description": "Connection Parameters to establish Connection The strict minimum is an hostname and the port If you need to establish TLS connection you should make sure connectionUseSecure is correctly set If you need to connect through SOCKS you should make sure connectionUseSocks is correctly set",
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "ConnectionParams",
          "package": "connection",
          "partial": "Connection Params",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#t:ConnectionParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the exception raised if we reached the user specified limit for\n the line in ConnectionGetLine.\n\u003c/p\u003e",
          "module": "Network.Connection",
          "name": "LineTooLong",
          "package": "connection",
          "source": "src/Network-Connection.html#LineTooLong",
          "type": "data"
        },
        "index": {
          "description": "This is the exception raised if we reached the user specified limit for the line in ConnectionGetLine",
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "LineTooLong",
          "package": "connection",
          "partial": "Line Too Long",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#t:LineTooLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSocks settings for the connection.\n\u003c/p\u003e\u003cp\u003eThe simple settings is just the hostname and portnumber of the proxy server.\n\u003c/p\u003e\u003cp\u003eThat's for now the only settings in the SOCKS package,\n socks password, or any sort of other authentications is not yet implemented.\n\u003c/p\u003e",
          "module": "Network.Connection",
          "name": "SockSettings",
          "package": "connection",
          "source": "src/Network-Connection-Types.html#SockSettings",
          "type": "data"
        },
        "index": {
          "description": "Socks settings for the connection The simple settings is just the hostname and portnumber of the proxy server That for now the only settings in the SOCKS package socks password or any sort of other authentications is not yet implemented",
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "SockSettings",
          "package": "connection",
          "partial": "Sock Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#t:SockSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTLS Settings that can be either expressed as simple settings,\n or as full blown TLS.Params settings.\n\u003c/p\u003e\u003cp\u003eUnless you need access to parameters that are not accessible through the\n simple settings, you should use TLSSettingsSimple.\n\u003c/p\u003e",
          "module": "Network.Connection",
          "name": "TLSSettings",
          "package": "connection",
          "source": "src/Network-Connection-Types.html#TLSSettings",
          "type": "data"
        },
        "index": {
          "description": "TLS Settings that can be either expressed as simple settings or as full blown TLS.Params settings Unless you need access to parameters that are not accessible through the simple settings you should use TLSSettingsSimple",
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "TLSSettings",
          "package": "connection",
          "partial": "TLSSettings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#t:TLSSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Connection",
          "name": "ConnectionParams",
          "package": "connection",
          "signature": "ConnectionParams",
          "source": "src/Network-Connection-Types.html#ConnectionParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "ConnectionParams",
          "package": "connection",
          "partial": "Connection Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:ConnectionParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Connection",
          "name": "LineTooLong",
          "package": "connection",
          "signature": "LineTooLong",
          "source": "src/Network-Connection.html#LineTooLong",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "LineTooLong",
          "package": "connection",
          "partial": "Line Too Long",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:LineTooLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Connection",
          "name": "SockSettingsSimple",
          "package": "connection",
          "signature": "SockSettingsSimple HostName PortNumber",
          "source": "src/Network-Connection-Types.html#SockSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "SockSettingsSimple",
          "package": "connection",
          "partial": "Sock Settings Simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:SockSettingsSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efull blown TLS Settings directly using TLS.Params. for power users.\n\u003c/p\u003e",
          "module": "Network.Connection",
          "name": "TLSSettings",
          "package": "connection",
          "signature": "TLSSettings ClientParams",
          "source": "src/Network-Connection-Types.html#TLSSettings",
          "type": "function"
        },
        "index": {
          "description": "full blown TLS Settings directly using TLS.Params for power users",
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "TLSSettings",
          "package": "connection",
          "partial": "TLSSettings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:TLSSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple TLS settings. recommended to use.\n\u003c/p\u003e",
          "module": "Network.Connection",
          "name": "TLSSettingsSimple",
          "package": "connection",
          "signature": "TLSSettingsSimple",
          "source": "src/Network-Connection-Types.html#TLSSettings",
          "type": "function"
        },
        "index": {
          "description": "Simple TLS settings recommended to use",
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "TLSSettingsSimple",
          "package": "connection",
          "partial": "TLSSettings Simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:TLSSettingsSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse an already established handle to create a connection object.\n\u003c/p\u003e\u003cp\u003eif the TLS Settings is set, it will do the handshake with the server.\n The SOCKS settings have no impact here, as the handle is already established\n\u003c/p\u003e",
          "module": "Network.Connection",
          "name": "connectFromHandle",
          "package": "connection",
          "signature": "ConnectionContext -\u003e Handle -\u003e ConnectionParams -\u003e IO Connection",
          "source": "src/Network-Connection.html#connectFromHandle",
          "type": "function"
        },
        "index": {
          "description": "Use an already established handle to create connection object if the TLS Settings is set it will do the handshake with the server The SOCKS settings have no impact here as the handle is already established",
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "connectFromHandle",
          "normalized": "ConnectionContext-\u003eHandle-\u003eConnectionParams-\u003eIO Connection",
          "package": "connection",
          "partial": "From Handle",
          "signature": "ConnectionContext-\u003eHandle-\u003eConnectionParams-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectFromHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econnect to a destination using the parameter\n\u003c/p\u003e",
          "module": "Network.Connection",
          "name": "connectTo",
          "package": "connection",
          "signature": "ConnectionContext-\u003e ConnectionParams-\u003e IO Connection",
          "type": "function"
        },
        "index": {
          "description": "connect to destination using the parameter",
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "connectTo",
          "normalized": "ConnectionContext-\u003eConnectionParams-\u003eIO Connection",
          "package": "connection",
          "partial": "To",
          "signature": "ConnectionContext-\u003eConnectionParams-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose a connection.\n\u003c/p\u003e",
          "module": "Network.Connection",
          "name": "connectionClose",
          "package": "connection",
          "signature": "Connection -\u003e IO ()",
          "source": "src/Network-Connection.html#connectionClose",
          "type": "function"
        },
        "index": {
          "description": "Close connection",
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "connectionClose",
          "normalized": "Connection-\u003eIO()",
          "package": "connection",
          "partial": "Close",
          "signature": "Connection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectionClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet some bytes from a connection.\n\u003c/p\u003e\u003cp\u003eThe size argument is just the maximum that could be returned to the user.\n The call will return as soon as there's data, even if there's less\n than requested.  Hence, it behaves like \u003ccode\u003e\u003ca\u003ehGetSome\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOn end of input, \u003ccode\u003e\u003ca\u003econnectionGet\u003c/a\u003e\u003c/code\u003e returns 0, but subsequent calls will throw\n an \u003ccode\u003e\u003ca\u003eisEOFError\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
          "module": "Network.Connection",
          "name": "connectionGet",
          "package": "connection",
          "signature": "Connection -\u003e Int -\u003e IO ByteString",
          "source": "src/Network-Connection.html#connectionGet",
          "type": "function"
        },
        "index": {
          "description": "Get some bytes from connection The size argument is just the maximum that could be returned to the user The call will return as soon as there data even if there less than requested Hence it behaves like hGetSome On end of input connectionGet returns but subsequent calls will throw an isEOFError exception",
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "connectionGet",
          "normalized": "Connection-\u003eInt-\u003eIO ByteString",
          "package": "connection",
          "partial": "Get",
          "signature": "Connection-\u003eInt-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectionGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the next block of data from the connection.\n\u003c/p\u003e",
          "module": "Network.Connection",
          "name": "connectionGetChunk",
          "package": "connection",
          "signature": "Connection -\u003e IO ByteString",
          "source": "src/Network-Connection.html#connectionGetChunk",
          "type": "function"
        },
        "index": {
          "description": "Get the next block of data from the connection",
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "connectionGetChunk",
          "normalized": "Connection-\u003eIO ByteString",
          "package": "connection",
          "partial": "Get Chunk",
          "signature": "Connection-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectionGetChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003econnectionGetChunk\u003c/a\u003e\u003c/code\u003e, but return the unused portion to the buffer,\n where it will be the next chunk read.\n\u003c/p\u003e",
          "module": "Network.Connection",
          "name": "connectionGetChunk'",
          "package": "connection",
          "signature": "Connection -\u003e (ByteString -\u003e (a, ByteString)) -\u003e IO a",
          "source": "src/Network-Connection.html#connectionGetChunk%27",
          "type": "function"
        },
        "index": {
          "description": "Like connectionGetChunk but return the unused portion to the buffer where it will be the next chunk read",
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "connectionGetChunk'",
          "normalized": "Connection-\u003e(ByteString-\u003e(a,ByteString))-\u003eIO a",
          "package": "connection",
          "partial": "Get Chunk'",
          "signature": "Connection-\u003e(ByteString-\u003e(a,ByteString))-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectionGetChunk-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the next line, using ASCII LF as the line terminator.\n\u003c/p\u003e\u003cp\u003eThis throws an \u003ccode\u003eisEOFError\u003c/code\u003e exception on end of input, and LineTooLong when\n the number of bytes gathered is over the limit without a line terminator.\n\u003c/p\u003e\u003cp\u003eThe actual line returned can be bigger than the limit specified, provided\n that the last chunk returned by the underlaying backend contains a LF.\n In another world only when we need more input and limit is reached that the\n LineTooLong exception will be raised.\n\u003c/p\u003e\u003cp\u003eAn end of file will be considered as a line terminator too, if line is\n not empty.\n\u003c/p\u003e",
          "module": "Network.Connection",
          "name": "connectionGetLine",
          "package": "connection",
          "signature": "Int-\u003e Connection-\u003e IO ByteString",
          "type": "function"
        },
        "index": {
          "description": "Get the next line using ASCII LF as the line terminator This throws an isEOFError exception on end of input and LineTooLong when the number of bytes gathered is over the limit without line terminator The actual line returned can be bigger than the limit specified provided that the last chunk returned by the underlaying backend contains LF In another world only when we need more input and limit is reached that the LineTooLong exception will be raised An end of file will be considered as line terminator too if line is not empty",
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "connectionGetLine",
          "normalized": "Int-\u003eConnection-\u003eIO ByteString",
          "package": "connection",
          "partial": "Get Line",
          "signature": "Int-\u003eConnection-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectionGetLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehost name to connect to.\n\u003c/p\u003e",
          "module": "Network.Connection",
          "name": "connectionHostname",
          "package": "connection",
          "signature": "HostName",
          "source": "src/Network-Connection-Types.html#ConnectionParams",
          "type": "function"
        },
        "index": {
          "description": "host name to connect to",
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "connectionHostname",
          "package": "connection",
          "partial": "Hostname",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectionHostname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn a simple tuple of the port and hostname that we're connected to.\n\u003c/p\u003e",
          "module": "Network.Connection",
          "name": "connectionID",
          "package": "connection",
          "signature": "Connection -\u003e ConnectionID",
          "source": "src/Network-Connection-Types.html#connectionID",
          "type": "function"
        },
        "index": {
          "description": "return simple tuple of the port and hostname that we re connected to",
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "connectionID",
          "normalized": "Connection-\u003eConnectionID",
          "package": "connection",
          "partial": "ID",
          "signature": "Connection-\u003eConnectionID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectionID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns if the connection is establish securely or not.\n\u003c/p\u003e",
          "module": "Network.Connection",
          "name": "connectionIsSecure",
          "package": "connection",
          "signature": "Connection -\u003e IO Bool",
          "source": "src/Network-Connection.html#connectionIsSecure",
          "type": "function"
        },
        "index": {
          "description": "Returns if the connection is establish securely or not",
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "connectionIsSecure",
          "normalized": "Connection-\u003eIO Bool",
          "package": "connection",
          "partial": "Is Secure",
          "signature": "Connection-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectionIsSecure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eport number to connect to.\n\u003c/p\u003e",
          "module": "Network.Connection",
          "name": "connectionPort",
          "package": "connection",
          "signature": "PortNumber",
          "source": "src/Network-Connection-Types.html#ConnectionParams",
          "type": "function"
        },
        "index": {
          "description": "port number to connect to",
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "connectionPort",
          "package": "connection",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectionPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a block of data in the connection.\n\u003c/p\u003e",
          "module": "Network.Connection",
          "name": "connectionPut",
          "package": "connection",
          "signature": "Connection -\u003e ByteString -\u003e IO ()",
          "source": "src/Network-Connection.html#connectionPut",
          "type": "function"
        },
        "index": {
          "description": "Put block of data in the connection",
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "connectionPut",
          "normalized": "Connection-\u003eByteString-\u003eIO()",
          "package": "connection",
          "partial": "Put",
          "signature": "Connection-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectionPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActivate secure layer using the parameters specified.\n\u003c/p\u003e\u003cp\u003eThis is typically used to negociate a TLS channel on an already\n establish channel, e.g. supporting a STARTTLS command. it also\n flush the received buffer to prevent application confusing\n received data before and after the setSecure call.\n\u003c/p\u003e\u003cp\u003eIf the connection is already using TLS, nothing else happens.\n\u003c/p\u003e",
          "module": "Network.Connection",
          "name": "connectionSetSecure",
          "package": "connection",
          "signature": "ConnectionContext -\u003e Connection -\u003e TLSSettings -\u003e IO ()",
          "source": "src/Network-Connection.html#connectionSetSecure",
          "type": "function"
        },
        "index": {
          "description": "Activate secure layer using the parameters specified This is typically used to negociate TLS channel on an already establish channel e.g supporting STARTTLS command it also flush the received buffer to prevent application confusing received data before and after the setSecure call If the connection is already using TLS nothing else happens",
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "connectionSetSecure",
          "normalized": "ConnectionContext-\u003eConnection-\u003eTLSSettings-\u003eIO()",
          "package": "connection",
          "partial": "Set Secure",
          "signature": "ConnectionContext-\u003eConnection-\u003eTLSSettings-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectionSetSecure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoptional TLS parameters.\n\u003c/p\u003e",
          "module": "Network.Connection",
          "name": "connectionUseSecure",
          "package": "connection",
          "signature": "Maybe TLSSettings",
          "source": "src/Network-Connection-Types.html#ConnectionParams",
          "type": "function"
        },
        "index": {
          "description": "optional TLS parameters",
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "connectionUseSecure",
          "package": "connection",
          "partial": "Use Secure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectionUseSecure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoptional Socks configuration.\n\u003c/p\u003e",
          "module": "Network.Connection",
          "name": "connectionUseSocks",
          "package": "connection",
          "signature": "Maybe SockSettings",
          "source": "src/Network-Connection-Types.html#ConnectionParams",
          "type": "function"
        },
        "index": {
          "description": "optional Socks configuration",
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "connectionUseSocks",
          "package": "connection",
          "partial": "Use Socks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:connectionUseSocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize the library with shared parameters between connection.\n\u003c/p\u003e",
          "module": "Network.Connection",
          "name": "initConnectionContext",
          "package": "connection",
          "signature": "IO ConnectionContext",
          "source": "src/Network-Connection.html#initConnectionContext",
          "type": "function"
        },
        "index": {
          "description": "Initialize the library with shared parameters between connection",
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "initConnectionContext",
          "package": "connection",
          "partial": "Connection Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:initConnectionContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisable certificate verification completely,\n   this make TLS/SSL vulnerable to a MITM attack.\n   not recommended to use, but for testing.\n\u003c/p\u003e",
          "module": "Network.Connection",
          "name": "settingDisableCertificateValidation",
          "package": "connection",
          "signature": "Bool",
          "source": "src/Network-Connection-Types.html#TLSSettings",
          "type": "function"
        },
        "index": {
          "description": "Disable certificate verification completely this make TLS SSL vulnerable to MITM attack not recommended to use but for testing",
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "settingDisableCertificateValidation",
          "package": "connection",
          "partial": "Disable Certificate Validation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:settingDisableCertificateValidation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisable session management. TLS/SSL connections\n   will always re-established their context.\n   Not Implemented Yet.\n\u003c/p\u003e",
          "module": "Network.Connection",
          "name": "settingDisableSession",
          "package": "connection",
          "signature": "Bool",
          "source": "src/Network-Connection-Types.html#TLSSettings",
          "type": "function"
        },
        "index": {
          "description": "Disable session management TLS SSL connections will always re-established their context Not Implemented Yet",
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "settingDisableSession",
          "package": "connection",
          "partial": "Disable Session",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:settingDisableSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse server name extension. Not Implemented Yet.\n\u003c/p\u003e",
          "module": "Network.Connection",
          "name": "settingUseServerName",
          "package": "connection",
          "signature": "Bool",
          "source": "src/Network-Connection-Types.html#TLSSettings",
          "type": "function"
        },
        "index": {
          "description": "Use server name extension Not Implemented Yet",
          "hierarchy": "Network Connection",
          "module": "Network.Connection",
          "name": "settingUseServerName",
          "package": "connection",
          "partial": "Use Server Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/connection/docs/Network-Connection.html#v:settingUseServerName"
      }
    }
  ]
]