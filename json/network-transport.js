[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal functions\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Transport.Internal",
        "fct-package": "network-transport",
        "fct-signature": "module",
        "fct-source": "src/Network-Transport-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "Internal functions",
        "hierarchy": "Network Transport Internal",
        "module": "Network.Transport.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "network-transport",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Internal.html#v:asyncWhenCancelled",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003easyncWhenCancelled g f\u003c/code\u003e runs f in a separate thread and waits for it\n to complete. If f throws an exception we catch it and rethrow it in the \n current thread. If the current thread is interrupted before f completes,\n we run the specified clean up handler (if f throws an exception we assume\n that no cleanup is necessary).\n\u003c/p\u003e",
        "fct-module": "Network.Transport.Internal",
        "fct-package": "network-transport",
        "fct-signature": "forall a.  (a -\u003e IO ()) -\u003e IO a -\u003e IO a",
        "fct-source": "src/Network-Transport-Internal.html#asyncWhenCancelled",
        "fct-type": "function",
        "title": "asyncWhenCancelled"
      },
      "index": {
        "description": "asyncWhenCancelled runs in separate thread and waits for it to complete If throws an exception we catch it and rethrow it in the current thread If the current thread is interrupted before completes we run the specified clean up handler if throws an exception we assume that no cleanup is necessary",
        "hierarchy": "Network Transport Internal",
        "module": "Network.Transport.Internal",
        "name": "asyncWhenCancelled",
        "normalized": "a b(c-\u003eIO())-\u003eIO c-\u003eIO c",
        "package": "network-transport",
        "partial": "When Cancelled",
        "signature": "forall a.(a-\u003eIO())-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Internal.html#v:decodeInt16",
      "description": {
        "fct-descr": "\u003cp\u003eDeserialize 16-bit from network byte order \n Throws an IO exception if this is not a valid integer\n\u003c/p\u003e",
        "fct-module": "Network.Transport.Internal",
        "fct-package": "network-transport",
        "fct-signature": "ByteString -\u003e a",
        "fct-source": "src/Network-Transport-Internal.html#decodeInt16",
        "fct-type": "function",
        "title": "decodeInt16"
      },
      "index": {
        "description": "Deserialize bit from network byte order Throws an IO exception if this is not valid integer",
        "hierarchy": "Network Transport Internal",
        "module": "Network.Transport.Internal",
        "name": "decodeInt16",
        "normalized": "ByteString-\u003ea",
        "package": "network-transport",
        "partial": "Int",
        "signature": "ByteString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Internal.html#v:decodeInt32",
      "description": {
        "fct-descr": "\u003cp\u003eDeserialize 32-bit from network byte order \n Throws an IO exception if this is not a valid integer.\n\u003c/p\u003e",
        "fct-module": "Network.Transport.Internal",
        "fct-package": "network-transport",
        "fct-signature": "ByteString -\u003e a",
        "fct-source": "src/Network-Transport-Internal.html#decodeInt32",
        "fct-type": "function",
        "title": "decodeInt32"
      },
      "index": {
        "description": "Deserialize bit from network byte order Throws an IO exception if this is not valid integer",
        "hierarchy": "Network Transport Internal",
        "module": "Network.Transport.Internal",
        "name": "decodeInt32",
        "normalized": "ByteString-\u003ea",
        "package": "network-transport",
        "partial": "Int",
        "signature": "ByteString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Internal.html#v:encodeInt16",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize 16-bit to network byte order \n\u003c/p\u003e",
        "fct-module": "Network.Transport.Internal",
        "fct-package": "network-transport",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Network-Transport-Internal.html#encodeInt16",
        "fct-type": "function",
        "title": "encodeInt16"
      },
      "index": {
        "description": "Serialize bit to network byte order",
        "hierarchy": "Network Transport Internal",
        "module": "Network.Transport.Internal",
        "name": "encodeInt16",
        "normalized": "a-\u003eByteString",
        "package": "network-transport",
        "partial": "Int",
        "signature": "a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Internal.html#v:encodeInt32",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize 32-bit to network byte order \n\u003c/p\u003e",
        "fct-module": "Network.Transport.Internal",
        "fct-package": "network-transport",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Network-Transport-Internal.html#encodeInt32",
        "fct-type": "function",
        "title": "encodeInt32"
      },
      "index": {
        "description": "Serialize bit to network byte order",
        "hierarchy": "Network Transport Internal",
        "module": "Network.Transport.Internal",
        "name": "encodeInt32",
        "normalized": "a-\u003eByteString",
        "package": "network-transport",
        "partial": "Int",
        "signature": "a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Internal.html#v:forkIOWithUnmask",
      "description": {
        "fct-descr": "\u003cp\u003eThis was introduced in \u003ca\u003ebase\u003c/a\u003e some time after 7.0.4\n\u003c/p\u003e",
        "fct-module": "Network.Transport.Internal",
        "fct-package": "network-transport",
        "fct-signature": "((forall a.  IO a -\u003e IO a) -\u003e IO ()) -\u003e IO ThreadId",
        "fct-source": "src/Network-Transport-Internal.html#forkIOWithUnmask",
        "fct-type": "function",
        "title": "forkIOWithUnmask"
      },
      "index": {
        "description": "This was introduced in base some time after",
        "hierarchy": "Network Transport Internal",
        "module": "Network.Transport.Internal",
        "name": "forkIOWithUnmask",
        "normalized": "((a b IO c-\u003eIO c)-\u003eIO())-\u003eIO ThreadId",
        "package": "network-transport",
        "partial": "IOWith Unmask",
        "signature": "((forall a. IO a-\u003eIO a)-\u003eIO())-\u003eIO ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Internal.html#v:mapIOException",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate exceptions that arise in IO computations\n\u003c/p\u003e",
        "fct-module": "Network.Transport.Internal",
        "fct-package": "network-transport",
        "fct-signature": "(IOException -\u003e e) -\u003e IO a -\u003e IO a",
        "fct-source": "src/Network-Transport-Internal.html#mapIOException",
        "fct-type": "function",
        "title": "mapIOException"
      },
      "index": {
        "description": "Translate exceptions that arise in IO computations",
        "hierarchy": "Network Transport Internal",
        "module": "Network.Transport.Internal",
        "name": "mapIOException",
        "normalized": "(IOException-\u003ea)-\u003eIO b-\u003eIO b",
        "package": "network-transport",
        "partial": "IOException",
        "signature": "(IOException-\u003ee)-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Internal.html#v:prependLength",
      "description": {
        "fct-descr": "\u003cp\u003ePrepend a list of bytestrings with their total length\n\u003c/p\u003e",
        "fct-module": "Network.Transport.Internal",
        "fct-package": "network-transport",
        "fct-signature": "[ByteString] -\u003e [ByteString]",
        "fct-source": "src/Network-Transport-Internal.html#prependLength",
        "fct-type": "function",
        "title": "prependLength"
      },
      "index": {
        "description": "Prepend list of bytestrings with their total length",
        "hierarchy": "Network Transport Internal",
        "module": "Network.Transport.Internal",
        "name": "prependLength",
        "normalized": "[ByteString]-\u003e[ByteString]",
        "package": "network-transport",
        "partial": "Length",
        "signature": "[ByteString]-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Internal.html#v:timeoutMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eIf the timeout value is not Nothing, wrap the given computation with a\n timeout and it if times out throw the specified exception. Identity\n otherwise.\n\u003c/p\u003e",
        "fct-module": "Network.Transport.Internal",
        "fct-package": "network-transport",
        "fct-signature": "Maybe Int -\u003e e -\u003e IO a -\u003e IO a",
        "fct-source": "src/Network-Transport-Internal.html#timeoutMaybe",
        "fct-type": "function",
        "title": "timeoutMaybe"
      },
      "index": {
        "description": "If the timeout value is not Nothing wrap the given computation with timeout and it if times out throw the specified exception Identity otherwise",
        "hierarchy": "Network Transport Internal",
        "module": "Network.Transport.Internal",
        "name": "timeoutMaybe",
        "normalized": "Maybe Int-\u003ea-\u003eIO b-\u003eIO b",
        "package": "network-transport",
        "partial": "Maybe",
        "signature": "Maybe Int-\u003ee-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Internal.html#v:tlog",
      "description": {
        "fct-descr": "\u003cp\u003eLogging (for debugging)\n\u003c/p\u003e",
        "fct-module": "Network.Transport.Internal",
        "fct-package": "network-transport",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/Network-Transport-Internal.html#tlog",
        "fct-type": "function",
        "title": "tlog"
      },
      "index": {
        "description": "Logging for debugging",
        "hierarchy": "Network Transport Internal",
        "module": "Network.Transport.Internal",
        "name": "tlog",
        "normalized": "String-\u003ea()",
        "package": "network-transport",
        "partial": "",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Internal.html#v:tryIO",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e, but lifted and specialized to IOExceptions\n\u003c/p\u003e",
        "fct-module": "Network.Transport.Internal",
        "fct-package": "network-transport",
        "fct-signature": "IO a -\u003e m (Either IOException a)",
        "fct-source": "src/Network-Transport-Internal.html#tryIO",
        "fct-type": "function",
        "title": "tryIO"
      },
      "index": {
        "description": "Like try but lifted and specialized to IOExceptions",
        "hierarchy": "Network Transport Internal",
        "module": "Network.Transport.Internal",
        "name": "tryIO",
        "normalized": "IO a-\u003eb(Either IOException a)",
        "package": "network-transport",
        "partial": "IO",
        "signature": "IO a-\u003em(Either IOException a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Internal.html#v:tryToEnum",
      "description": {
        "fct-descr": "\u003cp\u003eSafe version of \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Transport.Internal",
        "fct-package": "network-transport",
        "fct-signature": "Int -\u003e Maybe a",
        "fct-source": "src/Network-Transport-Internal.html#tryToEnum",
        "fct-type": "function",
        "title": "tryToEnum"
      },
      "index": {
        "description": "Safe version of toEnum",
        "hierarchy": "Network Transport Internal",
        "module": "Network.Transport.Internal",
        "name": "tryToEnum",
        "normalized": "Int-\u003eMaybe a",
        "package": "network-transport",
        "partial": "To Enum",
        "signature": "Int-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Internal.html#v:void",
      "description": {
        "fct-descr": "\u003cp\u003eNot all versions of \u003ca\u003ebase\u003c/a\u003e export \u003ccode\u003e\u003ca\u003evoid\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Transport.Internal",
        "fct-package": "network-transport",
        "fct-signature": "m a -\u003e m ()",
        "fct-source": "src/Network-Transport-Internal.html#void",
        "fct-type": "function",
        "title": "void"
      },
      "index": {
        "description": "Not all versions of base export void",
        "hierarchy": "Network Transport Internal",
        "module": "Network.Transport.Internal",
        "name": "void",
        "normalized": "a b-\u003ea()",
        "package": "network-transport",
        "partial": "",
        "signature": "m a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Util.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility functions \n\u003c/p\u003e\u003cp\u003eNote: this module is bound to change even more than the rest of the API :)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Transport.Util",
        "fct-package": "network-transport",
        "fct-signature": "module",
        "fct-source": "src/Network-Transport-Util.html",
        "fct-type": "module",
        "title": "Util"
      },
      "index": {
        "description": "Utility functions Note this module is bound to change even more than the rest of the API",
        "hierarchy": "Network Transport Util",
        "module": "Network.Transport.Util",
        "name": "Util",
        "normalized": "",
        "package": "network-transport",
        "partial": "Util",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Util.html#v:spawn",
      "description": {
        "fct-descr": "\u003cp\u003eFork a new thread, create a new end point on that thread, and run the specified IO operation on that thread.\n\u003c/p\u003e\u003cp\u003eReturns the address of the new end point.\n\u003c/p\u003e",
        "fct-module": "Network.Transport.Util",
        "fct-package": "network-transport",
        "fct-signature": "Transport -\u003e (EndPoint -\u003e IO ()) -\u003e IO EndPointAddress",
        "fct-source": "src/Network-Transport-Util.html#spawn",
        "fct-type": "function",
        "title": "spawn"
      },
      "index": {
        "description": "Fork new thread create new end point on that thread and run the specified IO operation on that thread Returns the address of the new end point",
        "hierarchy": "Network Transport Util",
        "module": "Network.Transport.Util",
        "name": "spawn",
        "normalized": "Transport-\u003e(EndPoint-\u003eIO())-\u003eIO EndPointAddress",
        "package": "network-transport",
        "partial": "",
        "signature": "Transport-\u003e(EndPoint-\u003eIO())-\u003eIO EndPointAddress"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNetwork Transport \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "module",
        "fct-source": "src/Network-Transport.html",
        "fct-type": "module",
        "title": "Transport"
      },
      "index": {
        "description": "Network Transport",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "Transport",
        "normalized": "",
        "package": "network-transport",
        "partial": "Transport",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:ConnectErrorCode",
      "description": {
        "fct-descr": "\u003cp\u003eConnection failure \n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "data",
        "fct-source": "src/Network-Transport.html#ConnectErrorCode",
        "fct-type": "data",
        "title": "ConnectErrorCode"
      },
      "index": {
        "description": "Connection failure",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "ConnectErrorCode",
        "normalized": "",
        "package": "network-transport",
        "partial": "Connect Error Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:ConnectHints",
      "description": {
        "fct-descr": "\u003cp\u003eHints used by \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "data",
        "fct-source": "src/Network-Transport.html#ConnectHints",
        "fct-type": "data",
        "title": "ConnectHints"
      },
      "index": {
        "description": "Hints used by connect",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "ConnectHints",
        "normalized": "",
        "package": "network-transport",
        "partial": "Connect Hints",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:Connection",
      "description": {
        "fct-descr": "\u003cp\u003eLightweight connection to an endpoint.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "data",
        "fct-source": "src/Network-Transport.html#Connection",
        "fct-type": "data",
        "title": "Connection"
      },
      "index": {
        "description": "Lightweight connection to an endpoint",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "Connection",
        "normalized": "",
        "package": "network-transport",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:ConnectionId",
      "description": {
        "fct-descr": "\u003cp\u003eConnection data ConnectHintsIDs enable receivers to distinguish one connection from another.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "type",
        "fct-source": "src/Network-Transport.html#ConnectionId",
        "fct-type": "type",
        "title": "ConnectionId"
      },
      "index": {
        "description": "Connection data ConnectHintsIDs enable receivers to distinguish one connection from another",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "ConnectionId",
        "normalized": "",
        "package": "network-transport",
        "partial": "Connection Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:EndPoint",
      "description": {
        "fct-descr": "\u003cp\u003eNetwork endpoint.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "data",
        "fct-source": "src/Network-Transport.html#EndPoint",
        "fct-type": "data",
        "title": "EndPoint"
      },
      "index": {
        "description": "Network endpoint",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "EndPoint",
        "normalized": "",
        "package": "network-transport",
        "partial": "End Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:EndPointAddress",
      "description": {
        "fct-descr": "\u003cp\u003eEndPointAddress of an endpoint.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "newtype",
        "fct-source": "src/Network-Transport.html#EndPointAddress",
        "fct-type": "newtype",
        "title": "EndPointAddress"
      },
      "index": {
        "description": "EndPointAddress of an endpoint",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "EndPointAddress",
        "normalized": "",
        "package": "network-transport",
        "partial": "End Point Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:Event",
      "description": {
        "fct-descr": "\u003cp\u003eEvent on an endpoint.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "data",
        "fct-source": "src/Network-Transport.html#Event",
        "fct-type": "data",
        "title": "Event"
      },
      "index": {
        "description": "Event on an endpoint",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "Event",
        "normalized": "",
        "package": "network-transport",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:EventErrorCode",
      "description": {
        "fct-descr": "\u003cp\u003eError codes used when reporting errors to endpoints (through receive)\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "data",
        "fct-source": "src/Network-Transport.html#EventErrorCode",
        "fct-type": "data",
        "title": "EventErrorCode"
      },
      "index": {
        "description": "Error codes used when reporting errors to endpoints through receive",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "EventErrorCode",
        "normalized": "",
        "package": "network-transport",
        "partial": "Event Error Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:MulticastAddress",
      "description": {
        "fct-descr": "\u003cp\u003eEndPointAddress of a multicast group.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "newtype",
        "fct-source": "src/Network-Transport.html#MulticastAddress",
        "fct-type": "newtype",
        "title": "MulticastAddress"
      },
      "index": {
        "description": "EndPointAddress of multicast group",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "MulticastAddress",
        "normalized": "",
        "package": "network-transport",
        "partial": "Multicast Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:MulticastGroup",
      "description": {
        "fct-descr": "\u003cp\u003eMulticast group.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "data",
        "fct-source": "src/Network-Transport.html#MulticastGroup",
        "fct-type": "data",
        "title": "MulticastGroup"
      },
      "index": {
        "description": "Multicast group",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "MulticastGroup",
        "normalized": "",
        "package": "network-transport",
        "partial": "Multicast Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:NewEndPointErrorCode",
      "description": {
        "fct-descr": "\u003cp\u003eErrors during the creation of an endpoint\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "data",
        "fct-source": "src/Network-Transport.html#NewEndPointErrorCode",
        "fct-type": "data",
        "title": "NewEndPointErrorCode"
      },
      "index": {
        "description": "Errors during the creation of an endpoint",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "NewEndPointErrorCode",
        "normalized": "",
        "package": "network-transport",
        "partial": "New End Point Error Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:NewMulticastGroupErrorCode",
      "description": {
        "fct-descr": "\u003cp\u003eFailure during the creation of a new multicast group\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "data",
        "fct-source": "src/Network-Transport.html#NewMulticastGroupErrorCode",
        "fct-type": "data",
        "title": "NewMulticastGroupErrorCode"
      },
      "index": {
        "description": "Failure during the creation of new multicast group",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "NewMulticastGroupErrorCode",
        "normalized": "",
        "package": "network-transport",
        "partial": "New Multicast Group Error Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:Reliability",
      "description": {
        "fct-descr": "\u003cp\u003eReliability guarantees of a connection.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "data",
        "fct-source": "src/Network-Transport.html#Reliability",
        "fct-type": "data",
        "title": "Reliability"
      },
      "index": {
        "description": "Reliability guarantees of connection",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "Reliability",
        "normalized": "",
        "package": "network-transport",
        "partial": "Reliability",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:ResolveMulticastGroupErrorCode",
      "description": {
        "fct-descr": "\u003cp\u003eFailure during the resolution of a multicast group\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "data",
        "fct-source": "src/Network-Transport.html#ResolveMulticastGroupErrorCode",
        "fct-type": "data",
        "title": "ResolveMulticastGroupErrorCode"
      },
      "index": {
        "description": "Failure during the resolution of multicast group",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "ResolveMulticastGroupErrorCode",
        "normalized": "",
        "package": "network-transport",
        "partial": "Resolve Multicast Group Error Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:SendErrorCode",
      "description": {
        "fct-descr": "\u003cp\u003eFailure during sending a message\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "data",
        "fct-source": "src/Network-Transport.html#SendErrorCode",
        "fct-type": "data",
        "title": "SendErrorCode"
      },
      "index": {
        "description": "Failure during sending message",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "SendErrorCode",
        "normalized": "",
        "package": "network-transport",
        "partial": "Send Error Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:Transport",
      "description": {
        "fct-descr": "\u003cp\u003eTo create a network abstraction layer, use one of the\n \u003ccode\u003eNetwork.Transport.*\u003c/code\u003e packages.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "data",
        "fct-source": "src/Network-Transport.html#Transport",
        "fct-type": "data",
        "title": "Transport"
      },
      "index": {
        "description": "To create network abstraction layer use one of the Network.Transport packages",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "Transport",
        "normalized": "",
        "package": "network-transport",
        "partial": "Transport",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:TransportError",
      "description": {
        "fct-descr": "\u003cp\u003eErrors returned by Network.Transport API functions consist of an error\n code and a human readable description of the problem \n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "data",
        "fct-source": "src/Network-Transport.html#TransportError",
        "fct-type": "data",
        "title": "TransportError"
      },
      "index": {
        "description": "Errors returned by Network.Transport API functions consist of an error code and human readable description of the problem",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "TransportError",
        "normalized": "",
        "package": "network-transport",
        "partial": "Transport Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:ConnectFailed",
      "description": {
        "fct-descr": "\u003cp\u003eFailed for other reasons (including syntax error)\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "ConnectFailed",
        "fct-source": "src/Network-Transport.html#ConnectErrorCode",
        "fct-type": "function",
        "title": "ConnectFailed"
      },
      "index": {
        "description": "Failed for other reasons including syntax error",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "ConnectFailed",
        "normalized": "",
        "package": "network-transport",
        "partial": "Connect Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:ConnectHints",
      "description": {
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "ConnectHints",
        "fct-source": "src/Network-Transport.html#ConnectHints",
        "fct-type": "function",
        "title": "ConnectHints"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "ConnectHints",
        "normalized": "",
        "package": "network-transport",
        "partial": "Connect Hints",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:ConnectInsufficientResources",
      "description": {
        "fct-descr": "\u003cp\u003eInsufficient resources (for instance, no more sockets available)\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "ConnectInsufficientResources",
        "fct-source": "src/Network-Transport.html#ConnectErrorCode",
        "fct-type": "function",
        "title": "ConnectInsufficientResources"
      },
      "index": {
        "description": "Insufficient resources for instance no more sockets available",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "ConnectInsufficientResources",
        "normalized": "",
        "package": "network-transport",
        "partial": "Connect Insufficient Resources",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:ConnectNotFound",
      "description": {
        "fct-descr": "\u003cp\u003eCould not resolve the address \n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "ConnectNotFound",
        "fct-source": "src/Network-Transport.html#ConnectErrorCode",
        "fct-type": "function",
        "title": "ConnectNotFound"
      },
      "index": {
        "description": "Could not resolve the address",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "ConnectNotFound",
        "normalized": "",
        "package": "network-transport",
        "partial": "Connect Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:ConnectTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eTimeout\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "ConnectTimeout",
        "fct-source": "src/Network-Transport.html#ConnectErrorCode",
        "fct-type": "function",
        "title": "ConnectTimeout"
      },
      "index": {
        "description": "Timeout",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "ConnectTimeout",
        "normalized": "",
        "package": "network-transport",
        "partial": "Connect Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:Connection",
      "description": {
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "Connection",
        "fct-source": "src/Network-Transport.html#Connection",
        "fct-type": "function",
        "title": "Connection"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "Connection",
        "normalized": "",
        "package": "network-transport",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:ConnectionClosed",
      "description": {
        "fct-descr": "\u003cp\u003eConnection closed\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "ConnectionClosed !ConnectionId",
        "fct-source": "src/Network-Transport.html#Event",
        "fct-type": "function",
        "title": "ConnectionClosed"
      },
      "index": {
        "description": "Connection closed",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "ConnectionClosed",
        "normalized": "",
        "package": "network-transport",
        "partial": "Connection Closed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:ConnectionOpened",
      "description": {
        "fct-descr": "\u003cp\u003eConnection opened\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eConnectionId\u003c/a\u003e\u003c/code\u003es need not be allocated contiguously.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "ConnectionOpened !ConnectionId Reliability EndPointAddress",
        "fct-source": "src/Network-Transport.html#Event",
        "fct-type": "function",
        "title": "ConnectionOpened"
      },
      "index": {
        "description": "Connection opened ConnectionId need not be allocated contiguously",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "ConnectionOpened",
        "normalized": "",
        "package": "network-transport",
        "partial": "Connection Opened",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:EndPoint",
      "description": {
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "EndPoint",
        "fct-source": "src/Network-Transport.html#EndPoint",
        "fct-type": "function",
        "title": "EndPoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "EndPoint",
        "normalized": "",
        "package": "network-transport",
        "partial": "End Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:EndPointAddress",
      "description": {
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "EndPointAddress",
        "fct-source": "src/Network-Transport.html#EndPointAddress",
        "fct-type": "function",
        "title": "EndPointAddress"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "EndPointAddress",
        "normalized": "",
        "package": "network-transport",
        "partial": "End Point Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:EndPointClosed",
      "description": {
        "fct-descr": "\u003cp\u003eThe endpoint got closed (manually, by a call to closeEndPoint or closeTransport)\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "EndPointClosed",
        "fct-source": "src/Network-Transport.html#Event",
        "fct-type": "function",
        "title": "EndPointClosed"
      },
      "index": {
        "description": "The endpoint got closed manually by call to closeEndPoint or closeTransport",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "EndPointClosed",
        "normalized": "",
        "package": "network-transport",
        "partial": "End Point Closed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:ErrorEvent",
      "description": {
        "fct-descr": "\u003cp\u003eAn error occurred \n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "ErrorEvent (TransportError EventErrorCode)",
        "fct-source": "src/Network-Transport.html#Event",
        "fct-type": "function",
        "title": "ErrorEvent"
      },
      "index": {
        "description": "An error occurred",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "ErrorEvent",
        "normalized": "",
        "package": "network-transport",
        "partial": "Error Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:EventConnectionLost",
      "description": {
        "fct-descr": "\u003cp\u003eWe lost connection to another endpoint\n\u003c/p\u003e\u003cp\u003eAlthough \u003ca\u003eNetwork.Transport\u003c/a\u003e provides multiple independent lightweight\n connections between endpoints, those connections cannot \u003cem\u003efail\u003c/em\u003e\n independently: once one connection has failed, \u003cem\u003eall\u003c/em\u003e connections, in\n both directions, must now be considered to have failed; they fail as a\n \u003ca\u003ebundle\u003c/a\u003e of connections, with only a single \u003ca\u003ebundle\u003c/a\u003e of connections per\n endpoint at any point in time.\n\u003c/p\u003e\u003cp\u003eThat is, suppose there are multiple connections in either direction\n between endpoints A and B, and A receives a notification that it has\n lost contact with B. Then A must not be able to send any further\n messages to B on existing connections. \n\u003c/p\u003e\u003cp\u003eAlthough B may not realize \u003cem\u003eimmediately\u003c/em\u003e that its connection to A has\n been broken, messages sent by B on existing connections should not be\n delivered, and B must eventually get an EventConnectionLost message,\n too. \n\u003c/p\u003e\u003cp\u003eMoreover, this event must be posted before A has successfully\n reconnected (in other words, if B notices a reconnection attempt from A,\n it must post the EventConnectionLost before acknowledging the connection\n from A) so that B will not receive events about new connections or\n incoming messages from A without realizing that it got disconnected. \n\u003c/p\u003e\u003cp\u003eIf B attempts to establish another connection to A before it realized\n that it got disconnected from A then it's okay for this connection\n attempt to fail, and the EventConnectionLost to be posted at that point,\n or for the EventConnectionLost to be posted and for the new connection\n to be considered the first connection of the \u003ca\u003enew bundle\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "EventConnectionLost EndPointAddress",
        "fct-source": "src/Network-Transport.html#EventErrorCode",
        "fct-type": "function",
        "title": "EventConnectionLost"
      },
      "index": {
        "description": "We lost connection to another endpoint Although Network.Transport provides multiple independent lightweight connections between endpoints those connections cannot fail independently once one connection has failed all connections in both directions must now be considered to have failed they fail as bundle of connections with only single bundle of connections per endpoint at any point in time That is suppose there are multiple connections in either direction between endpoints and and receives notification that it has lost contact with Then must not be able to send any further messages to on existing connections Although may not realize immediately that its connection to has been broken messages sent by on existing connections should not be delivered and must eventually get an EventConnectionLost message too Moreover this event must be posted before has successfully reconnected in other words if notices reconnection attempt from it must post the EventConnectionLost before acknowledging the connection from so that will not receive events about new connections or incoming messages from without realizing that it got disconnected If attempts to establish another connection to before it realized that it got disconnected from then it okay for this connection attempt to fail and the EventConnectionLost to be posted at that point or for the EventConnectionLost to be posted and for the new connection to be considered the first connection of the new bundle",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "EventConnectionLost",
        "normalized": "",
        "package": "network-transport",
        "partial": "Event Connection Lost",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:EventEndPointFailed",
      "description": {
        "fct-descr": "\u003cp\u003eFailure of the entire endpoint \n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "EventEndPointFailed",
        "fct-source": "src/Network-Transport.html#EventErrorCode",
        "fct-type": "function",
        "title": "EventEndPointFailed"
      },
      "index": {
        "description": "Failure of the entire endpoint",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "EventEndPointFailed",
        "normalized": "",
        "package": "network-transport",
        "partial": "Event End Point Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:EventTransportFailed",
      "description": {
        "fct-descr": "\u003cp\u003eTransport-wide fatal error\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "EventTransportFailed",
        "fct-source": "src/Network-Transport.html#EventErrorCode",
        "fct-type": "function",
        "title": "EventTransportFailed"
      },
      "index": {
        "description": "Transport-wide fatal error",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "EventTransportFailed",
        "normalized": "",
        "package": "network-transport",
        "partial": "Event Transport Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:MulticastAddress",
      "description": {
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "MulticastAddress",
        "fct-source": "src/Network-Transport.html#MulticastAddress",
        "fct-type": "function",
        "title": "MulticastAddress"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "MulticastAddress",
        "normalized": "",
        "package": "network-transport",
        "partial": "Multicast Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:MulticastGroup",
      "description": {
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "MulticastGroup",
        "fct-source": "src/Network-Transport.html#MulticastGroup",
        "fct-type": "function",
        "title": "MulticastGroup"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "MulticastGroup",
        "normalized": "",
        "package": "network-transport",
        "partial": "Multicast Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:NewEndPointFailed",
      "description": {
        "fct-descr": "\u003cp\u003eFailed for some other reason\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "NewEndPointFailed",
        "fct-source": "src/Network-Transport.html#NewEndPointErrorCode",
        "fct-type": "function",
        "title": "NewEndPointFailed"
      },
      "index": {
        "description": "Failed for some other reason",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "NewEndPointFailed",
        "normalized": "",
        "package": "network-transport",
        "partial": "New End Point Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:NewEndPointInsufficientResources",
      "description": {
        "fct-descr": "\u003cp\u003eNot enough resources\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "NewEndPointInsufficientResources",
        "fct-source": "src/Network-Transport.html#NewEndPointErrorCode",
        "fct-type": "function",
        "title": "NewEndPointInsufficientResources"
      },
      "index": {
        "description": "Not enough resources",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "NewEndPointInsufficientResources",
        "normalized": "",
        "package": "network-transport",
        "partial": "New End Point Insufficient Resources",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:NewMulticastGroupFailed",
      "description": {
        "fct-descr": "\u003cp\u003eFailed for some other reason\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "NewMulticastGroupFailed",
        "fct-source": "src/Network-Transport.html#NewMulticastGroupErrorCode",
        "fct-type": "function",
        "title": "NewMulticastGroupFailed"
      },
      "index": {
        "description": "Failed for some other reason",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "NewMulticastGroupFailed",
        "normalized": "",
        "package": "network-transport",
        "partial": "New Multicast Group Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:NewMulticastGroupInsufficientResources",
      "description": {
        "fct-descr": "\u003cp\u003eInsufficient resources\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "NewMulticastGroupInsufficientResources",
        "fct-source": "src/Network-Transport.html#NewMulticastGroupErrorCode",
        "fct-type": "function",
        "title": "NewMulticastGroupInsufficientResources"
      },
      "index": {
        "description": "Insufficient resources",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "NewMulticastGroupInsufficientResources",
        "normalized": "",
        "package": "network-transport",
        "partial": "New Multicast Group Insufficient Resources",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:NewMulticastGroupUnsupported",
      "description": {
        "fct-descr": "\u003cp\u003eNot all transport implementations support multicast\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "NewMulticastGroupUnsupported",
        "fct-source": "src/Network-Transport.html#NewMulticastGroupErrorCode",
        "fct-type": "function",
        "title": "NewMulticastGroupUnsupported"
      },
      "index": {
        "description": "Not all transport implementations support multicast",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "NewMulticastGroupUnsupported",
        "normalized": "",
        "package": "network-transport",
        "partial": "New Multicast Group Unsupported",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:Received",
      "description": {
        "fct-descr": "\u003cp\u003eReceived a message\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "Received !ConnectionId [ByteString]",
        "fct-source": "src/Network-Transport.html#Event",
        "fct-type": "function",
        "title": "Received"
      },
      "index": {
        "description": "Received message",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "Received",
        "normalized": "Received ConnectionId[ByteString]",
        "package": "network-transport",
        "partial": "Received",
        "signature": "Received ConnectionId[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:ReceivedMulticast",
      "description": {
        "fct-descr": "\u003cp\u003eReceived multicast\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "ReceivedMulticast MulticastAddress [ByteString]",
        "fct-source": "src/Network-Transport.html#Event",
        "fct-type": "function",
        "title": "ReceivedMulticast"
      },
      "index": {
        "description": "Received multicast",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "ReceivedMulticast",
        "normalized": "ReceivedMulticast MulticastAddress[ByteString]",
        "package": "network-transport",
        "partial": "Received Multicast",
        "signature": "ReceivedMulticast MulticastAddress[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:ReliableOrdered",
      "description": {
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "ReliableOrdered",
        "fct-source": "src/Network-Transport.html#Reliability",
        "fct-type": "function",
        "title": "ReliableOrdered"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "ReliableOrdered",
        "normalized": "",
        "package": "network-transport",
        "partial": "Reliable Ordered",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:ReliableUnordered",
      "description": {
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "ReliableUnordered",
        "fct-source": "src/Network-Transport.html#Reliability",
        "fct-type": "function",
        "title": "ReliableUnordered"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "ReliableUnordered",
        "normalized": "",
        "package": "network-transport",
        "partial": "Reliable Unordered",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:ResolveMulticastGroupFailed",
      "description": {
        "fct-descr": "\u003cp\u003eFailed for some other reason (including syntax error)\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "ResolveMulticastGroupFailed",
        "fct-source": "src/Network-Transport.html#ResolveMulticastGroupErrorCode",
        "fct-type": "function",
        "title": "ResolveMulticastGroupFailed"
      },
      "index": {
        "description": "Failed for some other reason including syntax error",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "ResolveMulticastGroupFailed",
        "normalized": "",
        "package": "network-transport",
        "partial": "Resolve Multicast Group Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:ResolveMulticastGroupNotFound",
      "description": {
        "fct-descr": "\u003cp\u003eMulticast group not found\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "ResolveMulticastGroupNotFound",
        "fct-source": "src/Network-Transport.html#ResolveMulticastGroupErrorCode",
        "fct-type": "function",
        "title": "ResolveMulticastGroupNotFound"
      },
      "index": {
        "description": "Multicast group not found",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "ResolveMulticastGroupNotFound",
        "normalized": "",
        "package": "network-transport",
        "partial": "Resolve Multicast Group Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:ResolveMulticastGroupUnsupported",
      "description": {
        "fct-descr": "\u003cp\u003eNot all transport implementations support multicast \n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "ResolveMulticastGroupUnsupported",
        "fct-source": "src/Network-Transport.html#ResolveMulticastGroupErrorCode",
        "fct-type": "function",
        "title": "ResolveMulticastGroupUnsupported"
      },
      "index": {
        "description": "Not all transport implementations support multicast",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "ResolveMulticastGroupUnsupported",
        "normalized": "",
        "package": "network-transport",
        "partial": "Resolve Multicast Group Unsupported",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:SendClosed",
      "description": {
        "fct-descr": "\u003cp\u003eConnection was closed\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "SendClosed",
        "fct-source": "src/Network-Transport.html#SendErrorCode",
        "fct-type": "function",
        "title": "SendClosed"
      },
      "index": {
        "description": "Connection was closed",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "SendClosed",
        "normalized": "",
        "package": "network-transport",
        "partial": "Send Closed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:SendFailed",
      "description": {
        "fct-descr": "\u003cp\u003eSend failed for some other reason\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "SendFailed",
        "fct-source": "src/Network-Transport.html#SendErrorCode",
        "fct-type": "function",
        "title": "SendFailed"
      },
      "index": {
        "description": "Send failed for some other reason",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "SendFailed",
        "normalized": "",
        "package": "network-transport",
        "partial": "Send Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:Transport",
      "description": {
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "Transport",
        "fct-source": "src/Network-Transport.html#Transport",
        "fct-type": "function",
        "title": "Transport"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "Transport",
        "normalized": "",
        "package": "network-transport",
        "partial": "Transport",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:TransportError",
      "description": {
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "TransportError error String",
        "fct-source": "src/Network-Transport.html#TransportError",
        "fct-type": "function",
        "title": "TransportError"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "TransportError",
        "normalized": "",
        "package": "network-transport",
        "partial": "Transport Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:Unreliable",
      "description": {
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "Unreliable",
        "fct-source": "src/Network-Transport.html#Reliability",
        "fct-type": "function",
        "title": "Unreliable"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "Unreliable",
        "normalized": "",
        "package": "network-transport",
        "partial": "Unreliable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:address",
      "description": {
        "fct-descr": "\u003cp\u003eEndPointAddress of the endpoint.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "EndPointAddress",
        "fct-source": "src/Network-Transport.html#EndPoint",
        "fct-type": "function",
        "title": "address"
      },
      "index": {
        "description": "EndPointAddress of the endpoint",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "address",
        "normalized": "",
        "package": "network-transport",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:close",
      "description": {
        "fct-descr": "\u003cp\u003eClose the connection.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "IO ()",
        "fct-source": "src/Network-Transport.html#Connection",
        "fct-type": "function",
        "title": "close"
      },
      "index": {
        "description": "Close the connection",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "close",
        "normalized": "IO()",
        "package": "network-transport",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:closeEndPoint",
      "description": {
        "fct-descr": "\u003cp\u003eClose the endpoint\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "IO ()",
        "fct-source": "src/Network-Transport.html#EndPoint",
        "fct-type": "function",
        "title": "closeEndPoint"
      },
      "index": {
        "description": "Close the endpoint",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "closeEndPoint",
        "normalized": "IO()",
        "package": "network-transport",
        "partial": "End Point",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:closeTransport",
      "description": {
        "fct-descr": "\u003cp\u003eShutdown the transport completely \n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "IO ()",
        "fct-source": "src/Network-Transport.html#Transport",
        "fct-type": "function",
        "title": "closeTransport"
      },
      "index": {
        "description": "Shutdown the transport completely",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "closeTransport",
        "normalized": "IO()",
        "package": "network-transport",
        "partial": "Transport",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:connect",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new lightweight connection. \n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e should be as asynchronous as possible; for instance, in\n Transport implementations based on some heavy-weight underlying network\n protocol (TCP, ssh), a call to \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e should be asynchronous when a\n heavyweight connection has already been established.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "EndPointAddress -\u003e Reliability -\u003e ConnectHints -\u003e IO (Either (TransportError ConnectErrorCode) Connection)",
        "fct-source": "src/Network-Transport.html#EndPoint",
        "fct-type": "function",
        "title": "connect"
      },
      "index": {
        "description": "Create new lightweight connection connect should be as asynchronous as possible for instance in Transport implementations based on some heavy-weight underlying network protocol TCP ssh call to connect should be asynchronous when heavyweight connection has already been established",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "connect",
        "normalized": "EndPointAddress-\u003eReliability-\u003eConnectHints-\u003eIO(Either(TransportError ConnectErrorCode)Connection)",
        "package": "network-transport",
        "partial": "",
        "signature": "EndPointAddress-\u003eReliability-\u003eConnectHints-\u003eIO(Either(TransportError ConnectErrorCode)Connection)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:connectTimeout",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Network-Transport.html#ConnectHints",
        "fct-type": "function",
        "title": "connectTimeout"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "connectTimeout",
        "normalized": "",
        "package": "network-transport",
        "partial": "Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:defaultConnectHints",
      "description": {
        "fct-descr": "\u003cp\u003eDefault hints for connecting\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "ConnectHints",
        "fct-source": "src/Network-Transport.html#defaultConnectHints",
        "fct-type": "function",
        "title": "defaultConnectHints"
      },
      "index": {
        "description": "Default hints for connecting",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "defaultConnectHints",
        "normalized": "",
        "package": "network-transport",
        "partial": "Connect Hints",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:deleteMulticastGroup",
      "description": {
        "fct-descr": "\u003cp\u003eDelete the multicast group completely.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "IO ()",
        "fct-source": "src/Network-Transport.html#MulticastGroup",
        "fct-type": "function",
        "title": "deleteMulticastGroup"
      },
      "index": {
        "description": "Delete the multicast group completely",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "deleteMulticastGroup",
        "normalized": "IO()",
        "package": "network-transport",
        "partial": "Multicast Group",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:endPointAddressToByteString",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Transport.html#EndPointAddress",
        "fct-type": "function",
        "title": "endPointAddressToByteString"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "endPointAddressToByteString",
        "normalized": "",
        "package": "network-transport",
        "partial": "Point Address To Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:maxMsgSize",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum message size that we can send to this group.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Network-Transport.html#MulticastGroup",
        "fct-type": "function",
        "title": "maxMsgSize"
      },
      "index": {
        "description": "Maximum message size that we can send to this group",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "maxMsgSize",
        "normalized": "",
        "package": "network-transport",
        "partial": "Msg Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:multicastAddress",
      "description": {
        "fct-descr": "\u003cp\u003eEndPointAddress of the multicast group. \n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "MulticastAddress",
        "fct-source": "src/Network-Transport.html#MulticastGroup",
        "fct-type": "function",
        "title": "multicastAddress"
      },
      "index": {
        "description": "EndPointAddress of the multicast group",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "multicastAddress",
        "normalized": "",
        "package": "network-transport",
        "partial": "Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:multicastAddressToByteString",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Transport.html#MulticastAddress",
        "fct-type": "function",
        "title": "multicastAddressToByteString"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "multicastAddressToByteString",
        "normalized": "",
        "package": "network-transport",
        "partial": "Address To Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:multicastClose",
      "description": {
        "fct-descr": "\u003cp\u003eClose the group (that is, indicate you no longer wish to send to the group).\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "IO ()",
        "fct-source": "src/Network-Transport.html#MulticastGroup",
        "fct-type": "function",
        "title": "multicastClose"
      },
      "index": {
        "description": "Close the group that is indicate you no longer wish to send to the group",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "multicastClose",
        "normalized": "IO()",
        "package": "network-transport",
        "partial": "Close",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:multicastSend",
      "description": {
        "fct-descr": "\u003cp\u003eSend a message to the group.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "[ByteString] -\u003e IO ()",
        "fct-source": "src/Network-Transport.html#MulticastGroup",
        "fct-type": "function",
        "title": "multicastSend"
      },
      "index": {
        "description": "Send message to the group",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "multicastSend",
        "normalized": "[ByteString]-\u003eIO()",
        "package": "network-transport",
        "partial": "Send",
        "signature": "[ByteString]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:multicastSubscribe",
      "description": {
        "fct-descr": "\u003cp\u003eSubscribe to the given multicast group (to start receiving messages from the group).\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "IO ()",
        "fct-source": "src/Network-Transport.html#MulticastGroup",
        "fct-type": "function",
        "title": "multicastSubscribe"
      },
      "index": {
        "description": "Subscribe to the given multicast group to start receiving messages from the group",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "multicastSubscribe",
        "normalized": "IO()",
        "package": "network-transport",
        "partial": "Subscribe",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:multicastUnsubscribe",
      "description": {
        "fct-descr": "\u003cp\u003eUnsubscribe from the given multicast group (to stop receiving messages from the group).\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "IO ()",
        "fct-source": "src/Network-Transport.html#MulticastGroup",
        "fct-type": "function",
        "title": "multicastUnsubscribe"
      },
      "index": {
        "description": "Unsubscribe from the given multicast group to stop receiving messages from the group",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "multicastUnsubscribe",
        "normalized": "IO()",
        "package": "network-transport",
        "partial": "Unsubscribe",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:newEndPoint",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new end point (heavyweight operation)\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "IO (Either (TransportError NewEndPointErrorCode) EndPoint)",
        "fct-source": "src/Network-Transport.html#Transport",
        "fct-type": "function",
        "title": "newEndPoint"
      },
      "index": {
        "description": "Create new end point heavyweight operation",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "newEndPoint",
        "normalized": "",
        "package": "network-transport",
        "partial": "End Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:newMulticastGroup",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new multicast group.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "IO (Either (TransportError NewMulticastGroupErrorCode) MulticastGroup)",
        "fct-source": "src/Network-Transport.html#EndPoint",
        "fct-type": "function",
        "title": "newMulticastGroup"
      },
      "index": {
        "description": "Create new multicast group",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "newMulticastGroup",
        "normalized": "",
        "package": "network-transport",
        "partial": "Multicast Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:receive",
      "description": {
        "fct-descr": "\u003cp\u003eEndpoints have a single shared receive queue.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "IO Event",
        "fct-source": "src/Network-Transport.html#EndPoint",
        "fct-type": "function",
        "title": "receive"
      },
      "index": {
        "description": "Endpoints have single shared receive queue",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "receive",
        "normalized": "",
        "package": "network-transport",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:resolveMulticastGroup",
      "description": {
        "fct-descr": "\u003cp\u003eResolve an address to a multicast group.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "MulticastAddress -\u003e IO (Either (TransportError ResolveMulticastGroupErrorCode) MulticastGroup)",
        "fct-source": "src/Network-Transport.html#EndPoint",
        "fct-type": "function",
        "title": "resolveMulticastGroup"
      },
      "index": {
        "description": "Resolve an address to multicast group",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "resolveMulticastGroup",
        "normalized": "MulticastAddress-\u003eIO(Either(TransportError ResolveMulticastGroupErrorCode)MulticastGroup)",
        "package": "network-transport",
        "partial": "Multicast Group",
        "signature": "MulticastAddress-\u003eIO(Either(TransportError ResolveMulticastGroupErrorCode)MulticastGroup)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eSend a message on this connection.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e provides vectored I/O, and allows multiple data segments to be\n sent using a single call (cf. \u003ccode\u003e\u003ca\u003esendMany\u003c/a\u003e\u003c/code\u003e).\n Note that this segment structure is entirely unrelated to the segment\n structure \u003cem\u003ereturned\u003c/em\u003e by a \u003ccode\u003e\u003ca\u003eReceived\u003c/a\u003e\u003c/code\u003e event.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "network-transport",
        "fct-signature": "[ByteString] -\u003e IO (Either (TransportError SendErrorCode) ())",
        "fct-source": "src/Network-Transport.html#Connection",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "Send message on this connection send provides vectored and allows multiple data segments to be sent using single call cf sendMany Note that this segment structure is entirely unrelated to the segment structure returned by Received event",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "send",
        "normalized": "[ByteString]-\u003eIO(Either(TransportError SendErrorCode)())",
        "package": "network-transport",
        "partial": "",
        "signature": "[ByteString]-\u003eIO(Either(TransportError SendErrorCode)())"
      }
    }
  }
]