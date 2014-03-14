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
        "word": "network-transport"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Transport.Internal",
          "name": "Internal",
          "package": "network-transport",
          "source": "src/Network-Transport-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Internal functions",
          "hierarchy": "Network Transport Internal",
          "module": "Network.Transport.Internal",
          "name": "Internal",
          "package": "network-transport",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003easyncWhenCancelled g f\u003c/code\u003e runs f in a separate thread and waits for it\n to complete. If f throws an exception we catch it and rethrow it in the \n current thread. If the current thread is interrupted before f completes,\n we run the specified clean up handler (if f throws an exception we assume\n that no cleanup is necessary).\n\u003c/p\u003e",
          "module": "Network.Transport.Internal",
          "name": "asyncWhenCancelled",
          "package": "network-transport",
          "signature": "forall a.  (a -\u003e IO ()) -\u003e IO a -\u003e IO a",
          "source": "src/Network-Transport-Internal.html#asyncWhenCancelled",
          "type": "function"
        },
        "index": {
          "description": "asyncWhenCancelled runs in separate thread and waits for it to complete If throws an exception we catch it and rethrow it in the current thread If the current thread is interrupted before completes we run the specified clean up handler if throws an exception we assume that no cleanup is necessary",
          "hierarchy": "Network Transport Internal",
          "module": "Network.Transport.Internal",
          "name": "asyncWhenCancelled",
          "normalized": "a b(c-\u003eIO())-\u003eIO c-\u003eIO c",
          "package": "network-transport",
          "partial": "When Cancelled",
          "signature": "forall a.(a-\u003eIO())-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Internal.html#v:asyncWhenCancelled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeserialize 16-bit from network byte order \n Throws an IO exception if this is not a valid integer\n\u003c/p\u003e",
          "module": "Network.Transport.Internal",
          "name": "decodeInt16",
          "package": "network-transport",
          "signature": "ByteString -\u003e a",
          "source": "src/Network-Transport-Internal.html#decodeInt16",
          "type": "function"
        },
        "index": {
          "description": "Deserialize bit from network byte order Throws an IO exception if this is not valid integer",
          "hierarchy": "Network Transport Internal",
          "module": "Network.Transport.Internal",
          "name": "decodeInt16",
          "normalized": "ByteString-\u003ea",
          "package": "network-transport",
          "partial": "Int",
          "signature": "ByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Internal.html#v:decodeInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeserialize 32-bit from network byte order \n Throws an IO exception if this is not a valid integer.\n\u003c/p\u003e",
          "module": "Network.Transport.Internal",
          "name": "decodeInt32",
          "package": "network-transport",
          "signature": "ByteString -\u003e a",
          "source": "src/Network-Transport-Internal.html#decodeInt32",
          "type": "function"
        },
        "index": {
          "description": "Deserialize bit from network byte order Throws an IO exception if this is not valid integer",
          "hierarchy": "Network Transport Internal",
          "module": "Network.Transport.Internal",
          "name": "decodeInt32",
          "normalized": "ByteString-\u003ea",
          "package": "network-transport",
          "partial": "Int",
          "signature": "ByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Internal.html#v:decodeInt32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize 16-bit to network byte order \n\u003c/p\u003e",
          "module": "Network.Transport.Internal",
          "name": "encodeInt16",
          "package": "network-transport",
          "signature": "a -\u003e ByteString",
          "source": "src/Network-Transport-Internal.html#encodeInt16",
          "type": "function"
        },
        "index": {
          "description": "Serialize bit to network byte order",
          "hierarchy": "Network Transport Internal",
          "module": "Network.Transport.Internal",
          "name": "encodeInt16",
          "normalized": "a-\u003eByteString",
          "package": "network-transport",
          "partial": "Int",
          "signature": "a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Internal.html#v:encodeInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize 32-bit to network byte order \n\u003c/p\u003e",
          "module": "Network.Transport.Internal",
          "name": "encodeInt32",
          "package": "network-transport",
          "signature": "a -\u003e ByteString",
          "source": "src/Network-Transport-Internal.html#encodeInt32",
          "type": "function"
        },
        "index": {
          "description": "Serialize bit to network byte order",
          "hierarchy": "Network Transport Internal",
          "module": "Network.Transport.Internal",
          "name": "encodeInt32",
          "normalized": "a-\u003eByteString",
          "package": "network-transport",
          "partial": "Int",
          "signature": "a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Internal.html#v:encodeInt32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis was introduced in \u003ca\u003ebase\u003c/a\u003e some time after 7.0.4\n\u003c/p\u003e",
          "module": "Network.Transport.Internal",
          "name": "forkIOWithUnmask",
          "package": "network-transport",
          "signature": "((forall a.  IO a -\u003e IO a) -\u003e IO ()) -\u003e IO ThreadId",
          "source": "src/Network-Transport-Internal.html#forkIOWithUnmask",
          "type": "function"
        },
        "index": {
          "description": "This was introduced in base some time after",
          "hierarchy": "Network Transport Internal",
          "module": "Network.Transport.Internal",
          "name": "forkIOWithUnmask",
          "normalized": "((a b IO c-\u003eIO c)-\u003eIO())-\u003eIO ThreadId",
          "package": "network-transport",
          "partial": "IOWith Unmask",
          "signature": "((forall a. IO a-\u003eIO a)-\u003eIO())-\u003eIO ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Internal.html#v:forkIOWithUnmask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate exceptions that arise in IO computations\n\u003c/p\u003e",
          "module": "Network.Transport.Internal",
          "name": "mapIOException",
          "package": "network-transport",
          "signature": "(IOException -\u003e e) -\u003e IO a -\u003e IO a",
          "source": "src/Network-Transport-Internal.html#mapIOException",
          "type": "function"
        },
        "index": {
          "description": "Translate exceptions that arise in IO computations",
          "hierarchy": "Network Transport Internal",
          "module": "Network.Transport.Internal",
          "name": "mapIOException",
          "normalized": "(IOException-\u003ea)-\u003eIO b-\u003eIO b",
          "package": "network-transport",
          "partial": "IOException",
          "signature": "(IOException-\u003ee)-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Internal.html#v:mapIOException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepend a list of bytestrings with their total length\n\u003c/p\u003e",
          "module": "Network.Transport.Internal",
          "name": "prependLength",
          "package": "network-transport",
          "signature": "[ByteString] -\u003e [ByteString]",
          "source": "src/Network-Transport-Internal.html#prependLength",
          "type": "function"
        },
        "index": {
          "description": "Prepend list of bytestrings with their total length",
          "hierarchy": "Network Transport Internal",
          "module": "Network.Transport.Internal",
          "name": "prependLength",
          "normalized": "[ByteString]-\u003e[ByteString]",
          "package": "network-transport",
          "partial": "Length",
          "signature": "[ByteString]-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Internal.html#v:prependLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the timeout value is not Nothing, wrap the given computation with a\n timeout and it if times out throw the specified exception. Identity\n otherwise.\n\u003c/p\u003e",
          "module": "Network.Transport.Internal",
          "name": "timeoutMaybe",
          "package": "network-transport",
          "signature": "Maybe Int -\u003e e -\u003e IO a -\u003e IO a",
          "source": "src/Network-Transport-Internal.html#timeoutMaybe",
          "type": "function"
        },
        "index": {
          "description": "If the timeout value is not Nothing wrap the given computation with timeout and it if times out throw the specified exception Identity otherwise",
          "hierarchy": "Network Transport Internal",
          "module": "Network.Transport.Internal",
          "name": "timeoutMaybe",
          "normalized": "Maybe Int-\u003ea-\u003eIO b-\u003eIO b",
          "package": "network-transport",
          "partial": "Maybe",
          "signature": "Maybe Int-\u003ee-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Internal.html#v:timeoutMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogging (for debugging)\n\u003c/p\u003e",
          "module": "Network.Transport.Internal",
          "name": "tlog",
          "package": "network-transport",
          "signature": "String -\u003e m ()",
          "source": "src/Network-Transport-Internal.html#tlog",
          "type": "function"
        },
        "index": {
          "description": "Logging for debugging",
          "hierarchy": "Network Transport Internal",
          "module": "Network.Transport.Internal",
          "name": "tlog",
          "normalized": "String-\u003ea()",
          "package": "network-transport",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Internal.html#v:tlog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e, but lifted and specialized to IOExceptions\n\u003c/p\u003e",
          "module": "Network.Transport.Internal",
          "name": "tryIO",
          "package": "network-transport",
          "signature": "IO a -\u003e m (Either IOException a)",
          "source": "src/Network-Transport-Internal.html#tryIO",
          "type": "function"
        },
        "index": {
          "description": "Like try but lifted and specialized to IOExceptions",
          "hierarchy": "Network Transport Internal",
          "module": "Network.Transport.Internal",
          "name": "tryIO",
          "normalized": "IO a-\u003eb(Either IOException a)",
          "package": "network-transport",
          "partial": "IO",
          "signature": "IO a-\u003em(Either IOException a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Internal.html#v:tryIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafe version of \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Transport.Internal",
          "name": "tryToEnum",
          "package": "network-transport",
          "signature": "Int -\u003e Maybe a",
          "source": "src/Network-Transport-Internal.html#tryToEnum",
          "type": "function"
        },
        "index": {
          "description": "Safe version of toEnum",
          "hierarchy": "Network Transport Internal",
          "module": "Network.Transport.Internal",
          "name": "tryToEnum",
          "normalized": "Int-\u003eMaybe a",
          "package": "network-transport",
          "partial": "To Enum",
          "signature": "Int-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Internal.html#v:tryToEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot all versions of \u003ca\u003ebase\u003c/a\u003e export \u003ccode\u003e\u003ca\u003evoid\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Transport.Internal",
          "name": "void",
          "package": "network-transport",
          "signature": "m a -\u003e m ()",
          "source": "src/Network-Transport-Internal.html#void",
          "type": "function"
        },
        "index": {
          "description": "Not all versions of base export void",
          "hierarchy": "Network Transport Internal",
          "module": "Network.Transport.Internal",
          "name": "void",
          "normalized": "a b-\u003ea()",
          "package": "network-transport",
          "signature": "m a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Internal.html#v:void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility functions \n\u003c/p\u003e\u003cp\u003eNote: this module is bound to change even more than the rest of the API :)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Transport.Util",
          "name": "Util",
          "package": "network-transport",
          "source": "src/Network-Transport-Util.html",
          "type": "module"
        },
        "index": {
          "description": "Utility functions Note this module is bound to change even more than the rest of the API",
          "hierarchy": "Network Transport Util",
          "module": "Network.Transport.Util",
          "name": "Util",
          "package": "network-transport",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFork a new thread, create a new end point on that thread, and run the specified IO operation on that thread.\n\u003c/p\u003e\u003cp\u003eReturns the address of the new end point.\n\u003c/p\u003e",
          "module": "Network.Transport.Util",
          "name": "spawn",
          "package": "network-transport",
          "signature": "Transport -\u003e (EndPoint -\u003e IO ()) -\u003e IO EndPointAddress",
          "source": "src/Network-Transport-Util.html#spawn",
          "type": "function"
        },
        "index": {
          "description": "Fork new thread create new end point on that thread and run the specified IO operation on that thread Returns the address of the new end point",
          "hierarchy": "Network Transport Util",
          "module": "Network.Transport.Util",
          "name": "spawn",
          "normalized": "Transport-\u003e(EndPoint-\u003eIO())-\u003eIO EndPointAddress",
          "package": "network-transport",
          "signature": "Transport-\u003e(EndPoint-\u003eIO())-\u003eIO EndPointAddress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport-Util.html#v:spawn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNetwork Transport \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Transport",
          "name": "Transport",
          "package": "network-transport",
          "source": "src/Network-Transport.html",
          "type": "module"
        },
        "index": {
          "description": "Network Transport",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "Transport",
          "package": "network-transport",
          "partial": "Transport",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnection failure \n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "ConnectErrorCode",
          "package": "network-transport",
          "source": "src/Network-Transport.html#ConnectErrorCode",
          "type": "data"
        },
        "index": {
          "description": "Connection failure",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "ConnectErrorCode",
          "package": "network-transport",
          "partial": "Connect Error Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:ConnectErrorCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHints used by \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "ConnectHints",
          "package": "network-transport",
          "source": "src/Network-Transport.html#ConnectHints",
          "type": "data"
        },
        "index": {
          "description": "Hints used by connect",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "ConnectHints",
          "package": "network-transport",
          "partial": "Connect Hints",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:ConnectHints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLightweight connection to an endpoint.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "Connection",
          "package": "network-transport",
          "source": "src/Network-Transport.html#Connection",
          "type": "data"
        },
        "index": {
          "description": "Lightweight connection to an endpoint",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "Connection",
          "package": "network-transport",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnection data ConnectHintsIDs enable receivers to distinguish one connection from another.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "ConnectionId",
          "package": "network-transport",
          "source": "src/Network-Transport.html#ConnectionId",
          "type": "type"
        },
        "index": {
          "description": "Connection data ConnectHintsIDs enable receivers to distinguish one connection from another",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "ConnectionId",
          "package": "network-transport",
          "partial": "Connection Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:ConnectionId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNetwork endpoint.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "EndPoint",
          "package": "network-transport",
          "source": "src/Network-Transport.html#EndPoint",
          "type": "data"
        },
        "index": {
          "description": "Network endpoint",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "EndPoint",
          "package": "network-transport",
          "partial": "End Point",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:EndPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEndPointAddress of an endpoint.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "EndPointAddress",
          "package": "network-transport",
          "source": "src/Network-Transport.html#EndPointAddress",
          "type": "newtype"
        },
        "index": {
          "description": "EndPointAddress of an endpoint",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "EndPointAddress",
          "package": "network-transport",
          "partial": "End Point Address",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:EndPointAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent on an endpoint.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "Event",
          "package": "network-transport",
          "source": "src/Network-Transport.html#Event",
          "type": "data"
        },
        "index": {
          "description": "Event on an endpoint",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "Event",
          "package": "network-transport",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError codes used when reporting errors to endpoints (through receive)\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "EventErrorCode",
          "package": "network-transport",
          "source": "src/Network-Transport.html#EventErrorCode",
          "type": "data"
        },
        "index": {
          "description": "Error codes used when reporting errors to endpoints through receive",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "EventErrorCode",
          "package": "network-transport",
          "partial": "Event Error Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:EventErrorCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEndPointAddress of a multicast group.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "MulticastAddress",
          "package": "network-transport",
          "source": "src/Network-Transport.html#MulticastAddress",
          "type": "newtype"
        },
        "index": {
          "description": "EndPointAddress of multicast group",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "MulticastAddress",
          "package": "network-transport",
          "partial": "Multicast Address",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:MulticastAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMulticast group.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "MulticastGroup",
          "package": "network-transport",
          "source": "src/Network-Transport.html#MulticastGroup",
          "type": "data"
        },
        "index": {
          "description": "Multicast group",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "MulticastGroup",
          "package": "network-transport",
          "partial": "Multicast Group",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:MulticastGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eErrors during the creation of an endpoint\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "NewEndPointErrorCode",
          "package": "network-transport",
          "source": "src/Network-Transport.html#NewEndPointErrorCode",
          "type": "data"
        },
        "index": {
          "description": "Errors during the creation of an endpoint",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "NewEndPointErrorCode",
          "package": "network-transport",
          "partial": "New End Point Error Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:NewEndPointErrorCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFailure during the creation of a new multicast group\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "NewMulticastGroupErrorCode",
          "package": "network-transport",
          "source": "src/Network-Transport.html#NewMulticastGroupErrorCode",
          "type": "data"
        },
        "index": {
          "description": "Failure during the creation of new multicast group",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "NewMulticastGroupErrorCode",
          "package": "network-transport",
          "partial": "New Multicast Group Error Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:NewMulticastGroupErrorCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReliability guarantees of a connection.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "Reliability",
          "package": "network-transport",
          "source": "src/Network-Transport.html#Reliability",
          "type": "data"
        },
        "index": {
          "description": "Reliability guarantees of connection",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "Reliability",
          "package": "network-transport",
          "partial": "Reliability",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:Reliability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFailure during the resolution of a multicast group\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "ResolveMulticastGroupErrorCode",
          "package": "network-transport",
          "source": "src/Network-Transport.html#ResolveMulticastGroupErrorCode",
          "type": "data"
        },
        "index": {
          "description": "Failure during the resolution of multicast group",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "ResolveMulticastGroupErrorCode",
          "package": "network-transport",
          "partial": "Resolve Multicast Group Error Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:ResolveMulticastGroupErrorCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFailure during sending a message\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "SendErrorCode",
          "package": "network-transport",
          "source": "src/Network-Transport.html#SendErrorCode",
          "type": "data"
        },
        "index": {
          "description": "Failure during sending message",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "SendErrorCode",
          "package": "network-transport",
          "partial": "Send Error Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:SendErrorCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo create a network abstraction layer, use one of the\n \u003ccode\u003eNetwork.Transport.*\u003c/code\u003e packages.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "Transport",
          "package": "network-transport",
          "source": "src/Network-Transport.html#Transport",
          "type": "data"
        },
        "index": {
          "description": "To create network abstraction layer use one of the Network.Transport packages",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "Transport",
          "package": "network-transport",
          "partial": "Transport",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:Transport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eErrors returned by Network.Transport API functions consist of an error\n code and a human readable description of the problem \n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "TransportError",
          "package": "network-transport",
          "source": "src/Network-Transport.html#TransportError",
          "type": "data"
        },
        "index": {
          "description": "Errors returned by Network.Transport API functions consist of an error code and human readable description of the problem",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "TransportError",
          "package": "network-transport",
          "partial": "Transport Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#t:TransportError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFailed for other reasons (including syntax error)\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "ConnectFailed",
          "package": "network-transport",
          "signature": "ConnectFailed",
          "source": "src/Network-Transport.html#ConnectErrorCode",
          "type": "function"
        },
        "index": {
          "description": "Failed for other reasons including syntax error",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "ConnectFailed",
          "package": "network-transport",
          "partial": "Connect Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:ConnectFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport",
          "name": "ConnectHints",
          "package": "network-transport",
          "signature": "ConnectHints",
          "source": "src/Network-Transport.html#ConnectHints",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "ConnectHints",
          "package": "network-transport",
          "partial": "Connect Hints",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:ConnectHints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsufficient resources (for instance, no more sockets available)\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "ConnectInsufficientResources",
          "package": "network-transport",
          "signature": "ConnectInsufficientResources",
          "source": "src/Network-Transport.html#ConnectErrorCode",
          "type": "function"
        },
        "index": {
          "description": "Insufficient resources for instance no more sockets available",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "ConnectInsufficientResources",
          "package": "network-transport",
          "partial": "Connect Insufficient Resources",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:ConnectInsufficientResources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCould not resolve the address \n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "ConnectNotFound",
          "package": "network-transport",
          "signature": "ConnectNotFound",
          "source": "src/Network-Transport.html#ConnectErrorCode",
          "type": "function"
        },
        "index": {
          "description": "Could not resolve the address",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "ConnectNotFound",
          "package": "network-transport",
          "partial": "Connect Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:ConnectNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTimeout\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "ConnectTimeout",
          "package": "network-transport",
          "signature": "ConnectTimeout",
          "source": "src/Network-Transport.html#ConnectErrorCode",
          "type": "function"
        },
        "index": {
          "description": "Timeout",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "ConnectTimeout",
          "package": "network-transport",
          "partial": "Connect Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:ConnectTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport",
          "name": "Connection",
          "package": "network-transport",
          "signature": "Connection",
          "source": "src/Network-Transport.html#Connection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "Connection",
          "package": "network-transport",
          "partial": "Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnection closed\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "ConnectionClosed",
          "package": "network-transport",
          "signature": "ConnectionClosed !ConnectionId",
          "source": "src/Network-Transport.html#Event",
          "type": "function"
        },
        "index": {
          "description": "Connection closed",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "ConnectionClosed",
          "package": "network-transport",
          "partial": "Connection Closed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:ConnectionClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnection opened\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eConnectionId\u003c/a\u003e\u003c/code\u003es need not be allocated contiguously.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "ConnectionOpened",
          "package": "network-transport",
          "signature": "ConnectionOpened !ConnectionId Reliability EndPointAddress",
          "source": "src/Network-Transport.html#Event",
          "type": "function"
        },
        "index": {
          "description": "Connection opened ConnectionId need not be allocated contiguously",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "ConnectionOpened",
          "package": "network-transport",
          "partial": "Connection Opened",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:ConnectionOpened"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport",
          "name": "EndPoint",
          "package": "network-transport",
          "signature": "EndPoint",
          "source": "src/Network-Transport.html#EndPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "EndPoint",
          "package": "network-transport",
          "partial": "End Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:EndPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport",
          "name": "EndPointAddress",
          "package": "network-transport",
          "signature": "EndPointAddress",
          "source": "src/Network-Transport.html#EndPointAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "EndPointAddress",
          "package": "network-transport",
          "partial": "End Point Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:EndPointAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe endpoint got closed (manually, by a call to closeEndPoint or closeTransport)\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "EndPointClosed",
          "package": "network-transport",
          "signature": "EndPointClosed",
          "source": "src/Network-Transport.html#Event",
          "type": "function"
        },
        "index": {
          "description": "The endpoint got closed manually by call to closeEndPoint or closeTransport",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "EndPointClosed",
          "package": "network-transport",
          "partial": "End Point Closed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:EndPointClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error occurred \n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "ErrorEvent",
          "package": "network-transport",
          "signature": "ErrorEvent (TransportError EventErrorCode)",
          "source": "src/Network-Transport.html#Event",
          "type": "function"
        },
        "index": {
          "description": "An error occurred",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "ErrorEvent",
          "package": "network-transport",
          "partial": "Error Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:ErrorEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe lost connection to another endpoint\n\u003c/p\u003e\u003cp\u003eAlthough \u003ca\u003eNetwork.Transport\u003c/a\u003e provides multiple independent lightweight\n connections between endpoints, those connections cannot \u003cem\u003efail\u003c/em\u003e\n independently: once one connection has failed, \u003cem\u003eall\u003c/em\u003e connections, in\n both directions, must now be considered to have failed; they fail as a\n \u003ca\u003ebundle\u003c/a\u003e of connections, with only a single \u003ca\u003ebundle\u003c/a\u003e of connections per\n endpoint at any point in time.\n\u003c/p\u003e\u003cp\u003eThat is, suppose there are multiple connections in either direction\n between endpoints A and B, and A receives a notification that it has\n lost contact with B. Then A must not be able to send any further\n messages to B on existing connections. \n\u003c/p\u003e\u003cp\u003eAlthough B may not realize \u003cem\u003eimmediately\u003c/em\u003e that its connection to A has\n been broken, messages sent by B on existing connections should not be\n delivered, and B must eventually get an EventConnectionLost message,\n too. \n\u003c/p\u003e\u003cp\u003eMoreover, this event must be posted before A has successfully\n reconnected (in other words, if B notices a reconnection attempt from A,\n it must post the EventConnectionLost before acknowledging the connection\n from A) so that B will not receive events about new connections or\n incoming messages from A without realizing that it got disconnected. \n\u003c/p\u003e\u003cp\u003eIf B attempts to establish another connection to A before it realized\n that it got disconnected from A then it's okay for this connection\n attempt to fail, and the EventConnectionLost to be posted at that point,\n or for the EventConnectionLost to be posted and for the new connection\n to be considered the first connection of the \u003ca\u003enew bundle\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "EventConnectionLost",
          "package": "network-transport",
          "signature": "EventConnectionLost EndPointAddress",
          "source": "src/Network-Transport.html#EventErrorCode",
          "type": "function"
        },
        "index": {
          "description": "We lost connection to another endpoint Although Network.Transport provides multiple independent lightweight connections between endpoints those connections cannot fail independently once one connection has failed all connections in both directions must now be considered to have failed they fail as bundle of connections with only single bundle of connections per endpoint at any point in time That is suppose there are multiple connections in either direction between endpoints and and receives notification that it has lost contact with Then must not be able to send any further messages to on existing connections Although may not realize immediately that its connection to has been broken messages sent by on existing connections should not be delivered and must eventually get an EventConnectionLost message too Moreover this event must be posted before has successfully reconnected in other words if notices reconnection attempt from it must post the EventConnectionLost before acknowledging the connection from so that will not receive events about new connections or incoming messages from without realizing that it got disconnected If attempts to establish another connection to before it realized that it got disconnected from then it okay for this connection attempt to fail and the EventConnectionLost to be posted at that point or for the EventConnectionLost to be posted and for the new connection to be considered the first connection of the new bundle",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "EventConnectionLost",
          "package": "network-transport",
          "partial": "Event Connection Lost",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:EventConnectionLost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFailure of the entire endpoint \n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "EventEndPointFailed",
          "package": "network-transport",
          "signature": "EventEndPointFailed",
          "source": "src/Network-Transport.html#EventErrorCode",
          "type": "function"
        },
        "index": {
          "description": "Failure of the entire endpoint",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "EventEndPointFailed",
          "package": "network-transport",
          "partial": "Event End Point Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:EventEndPointFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransport-wide fatal error\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "EventTransportFailed",
          "package": "network-transport",
          "signature": "EventTransportFailed",
          "source": "src/Network-Transport.html#EventErrorCode",
          "type": "function"
        },
        "index": {
          "description": "Transport-wide fatal error",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "EventTransportFailed",
          "package": "network-transport",
          "partial": "Event Transport Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:EventTransportFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport",
          "name": "MulticastAddress",
          "package": "network-transport",
          "signature": "MulticastAddress",
          "source": "src/Network-Transport.html#MulticastAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "MulticastAddress",
          "package": "network-transport",
          "partial": "Multicast Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:MulticastAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport",
          "name": "MulticastGroup",
          "package": "network-transport",
          "signature": "MulticastGroup",
          "source": "src/Network-Transport.html#MulticastGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "MulticastGroup",
          "package": "network-transport",
          "partial": "Multicast Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:MulticastGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFailed for some other reason\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "NewEndPointFailed",
          "package": "network-transport",
          "signature": "NewEndPointFailed",
          "source": "src/Network-Transport.html#NewEndPointErrorCode",
          "type": "function"
        },
        "index": {
          "description": "Failed for some other reason",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "NewEndPointFailed",
          "package": "network-transport",
          "partial": "New End Point Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:NewEndPointFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot enough resources\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "NewEndPointInsufficientResources",
          "package": "network-transport",
          "signature": "NewEndPointInsufficientResources",
          "source": "src/Network-Transport.html#NewEndPointErrorCode",
          "type": "function"
        },
        "index": {
          "description": "Not enough resources",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "NewEndPointInsufficientResources",
          "package": "network-transport",
          "partial": "New End Point Insufficient Resources",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:NewEndPointInsufficientResources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFailed for some other reason\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "NewMulticastGroupFailed",
          "package": "network-transport",
          "signature": "NewMulticastGroupFailed",
          "source": "src/Network-Transport.html#NewMulticastGroupErrorCode",
          "type": "function"
        },
        "index": {
          "description": "Failed for some other reason",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "NewMulticastGroupFailed",
          "package": "network-transport",
          "partial": "New Multicast Group Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:NewMulticastGroupFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsufficient resources\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "NewMulticastGroupInsufficientResources",
          "package": "network-transport",
          "signature": "NewMulticastGroupInsufficientResources",
          "source": "src/Network-Transport.html#NewMulticastGroupErrorCode",
          "type": "function"
        },
        "index": {
          "description": "Insufficient resources",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "NewMulticastGroupInsufficientResources",
          "package": "network-transport",
          "partial": "New Multicast Group Insufficient Resources",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:NewMulticastGroupInsufficientResources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot all transport implementations support multicast\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "NewMulticastGroupUnsupported",
          "package": "network-transport",
          "signature": "NewMulticastGroupUnsupported",
          "source": "src/Network-Transport.html#NewMulticastGroupErrorCode",
          "type": "function"
        },
        "index": {
          "description": "Not all transport implementations support multicast",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "NewMulticastGroupUnsupported",
          "package": "network-transport",
          "partial": "New Multicast Group Unsupported",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:NewMulticastGroupUnsupported"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceived a message\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "Received",
          "package": "network-transport",
          "signature": "Received !ConnectionId [ByteString]",
          "source": "src/Network-Transport.html#Event",
          "type": "function"
        },
        "index": {
          "description": "Received message",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "Received",
          "normalized": "Received ConnectionId[ByteString]",
          "package": "network-transport",
          "partial": "Received",
          "signature": "Received ConnectionId[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:Received"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceived multicast\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "ReceivedMulticast",
          "package": "network-transport",
          "signature": "ReceivedMulticast MulticastAddress [ByteString]",
          "source": "src/Network-Transport.html#Event",
          "type": "function"
        },
        "index": {
          "description": "Received multicast",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "ReceivedMulticast",
          "normalized": "ReceivedMulticast MulticastAddress[ByteString]",
          "package": "network-transport",
          "partial": "Received Multicast",
          "signature": "ReceivedMulticast MulticastAddress[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:ReceivedMulticast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport",
          "name": "ReliableOrdered",
          "package": "network-transport",
          "signature": "ReliableOrdered",
          "source": "src/Network-Transport.html#Reliability",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "ReliableOrdered",
          "package": "network-transport",
          "partial": "Reliable Ordered",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:ReliableOrdered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport",
          "name": "ReliableUnordered",
          "package": "network-transport",
          "signature": "ReliableUnordered",
          "source": "src/Network-Transport.html#Reliability",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "ReliableUnordered",
          "package": "network-transport",
          "partial": "Reliable Unordered",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:ReliableUnordered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFailed for some other reason (including syntax error)\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "ResolveMulticastGroupFailed",
          "package": "network-transport",
          "signature": "ResolveMulticastGroupFailed",
          "source": "src/Network-Transport.html#ResolveMulticastGroupErrorCode",
          "type": "function"
        },
        "index": {
          "description": "Failed for some other reason including syntax error",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "ResolveMulticastGroupFailed",
          "package": "network-transport",
          "partial": "Resolve Multicast Group Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:ResolveMulticastGroupFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMulticast group not found\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "ResolveMulticastGroupNotFound",
          "package": "network-transport",
          "signature": "ResolveMulticastGroupNotFound",
          "source": "src/Network-Transport.html#ResolveMulticastGroupErrorCode",
          "type": "function"
        },
        "index": {
          "description": "Multicast group not found",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "ResolveMulticastGroupNotFound",
          "package": "network-transport",
          "partial": "Resolve Multicast Group Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:ResolveMulticastGroupNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot all transport implementations support multicast \n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "ResolveMulticastGroupUnsupported",
          "package": "network-transport",
          "signature": "ResolveMulticastGroupUnsupported",
          "source": "src/Network-Transport.html#ResolveMulticastGroupErrorCode",
          "type": "function"
        },
        "index": {
          "description": "Not all transport implementations support multicast",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "ResolveMulticastGroupUnsupported",
          "package": "network-transport",
          "partial": "Resolve Multicast Group Unsupported",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:ResolveMulticastGroupUnsupported"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnection was closed\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "SendClosed",
          "package": "network-transport",
          "signature": "SendClosed",
          "source": "src/Network-Transport.html#SendErrorCode",
          "type": "function"
        },
        "index": {
          "description": "Connection was closed",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "SendClosed",
          "package": "network-transport",
          "partial": "Send Closed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:SendClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend failed for some other reason\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "SendFailed",
          "package": "network-transport",
          "signature": "SendFailed",
          "source": "src/Network-Transport.html#SendErrorCode",
          "type": "function"
        },
        "index": {
          "description": "Send failed for some other reason",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "SendFailed",
          "package": "network-transport",
          "partial": "Send Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:SendFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport",
          "name": "Transport",
          "package": "network-transport",
          "signature": "Transport",
          "source": "src/Network-Transport.html#Transport",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "Transport",
          "package": "network-transport",
          "partial": "Transport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:Transport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport",
          "name": "TransportError",
          "package": "network-transport",
          "signature": "TransportError error String",
          "source": "src/Network-Transport.html#TransportError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "TransportError",
          "package": "network-transport",
          "partial": "Transport Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:TransportError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport",
          "name": "Unreliable",
          "package": "network-transport",
          "signature": "Unreliable",
          "source": "src/Network-Transport.html#Reliability",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "Unreliable",
          "package": "network-transport",
          "partial": "Unreliable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:Unreliable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEndPointAddress of the endpoint.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "address",
          "package": "network-transport",
          "signature": "EndPointAddress",
          "source": "src/Network-Transport.html#EndPoint",
          "type": "function"
        },
        "index": {
          "description": "EndPointAddress of the endpoint",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "address",
          "package": "network-transport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose the connection.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "close",
          "package": "network-transport",
          "signature": "IO ()",
          "source": "src/Network-Transport.html#Connection",
          "type": "function"
        },
        "index": {
          "description": "Close the connection",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "close",
          "normalized": "IO()",
          "package": "network-transport",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose the endpoint\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "closeEndPoint",
          "package": "network-transport",
          "signature": "IO ()",
          "source": "src/Network-Transport.html#EndPoint",
          "type": "function"
        },
        "index": {
          "description": "Close the endpoint",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "closeEndPoint",
          "normalized": "IO()",
          "package": "network-transport",
          "partial": "End Point",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:closeEndPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShutdown the transport completely \n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "closeTransport",
          "package": "network-transport",
          "signature": "IO ()",
          "source": "src/Network-Transport.html#Transport",
          "type": "function"
        },
        "index": {
          "description": "Shutdown the transport completely",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "closeTransport",
          "normalized": "IO()",
          "package": "network-transport",
          "partial": "Transport",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:closeTransport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new lightweight connection. \n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e should be as asynchronous as possible; for instance, in\n Transport implementations based on some heavy-weight underlying network\n protocol (TCP, ssh), a call to \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e should be asynchronous when a\n heavyweight connection has already been established.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "connect",
          "package": "network-transport",
          "signature": "EndPointAddress -\u003e Reliability -\u003e ConnectHints -\u003e IO (Either (TransportError ConnectErrorCode) Connection)",
          "source": "src/Network-Transport.html#EndPoint",
          "type": "function"
        },
        "index": {
          "description": "Create new lightweight connection connect should be as asynchronous as possible for instance in Transport implementations based on some heavy-weight underlying network protocol TCP ssh call to connect should be asynchronous when heavyweight connection has already been established",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "connect",
          "normalized": "EndPointAddress-\u003eReliability-\u003eConnectHints-\u003eIO(Either(TransportError ConnectErrorCode)Connection)",
          "package": "network-transport",
          "signature": "EndPointAddress-\u003eReliability-\u003eConnectHints-\u003eIO(Either(TransportError ConnectErrorCode)Connection)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport",
          "name": "connectTimeout",
          "package": "network-transport",
          "signature": "Maybe Int",
          "source": "src/Network-Transport.html#ConnectHints",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "connectTimeout",
          "package": "network-transport",
          "partial": "Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:connectTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault hints for connecting\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "defaultConnectHints",
          "package": "network-transport",
          "signature": "ConnectHints",
          "source": "src/Network-Transport.html#defaultConnectHints",
          "type": "function"
        },
        "index": {
          "description": "Default hints for connecting",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "defaultConnectHints",
          "package": "network-transport",
          "partial": "Connect Hints",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:defaultConnectHints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the multicast group completely.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "deleteMulticastGroup",
          "package": "network-transport",
          "signature": "IO ()",
          "source": "src/Network-Transport.html#MulticastGroup",
          "type": "function"
        },
        "index": {
          "description": "Delete the multicast group completely",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "deleteMulticastGroup",
          "normalized": "IO()",
          "package": "network-transport",
          "partial": "Multicast Group",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:deleteMulticastGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport",
          "name": "endPointAddressToByteString",
          "package": "network-transport",
          "signature": "ByteString",
          "source": "src/Network-Transport.html#EndPointAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "endPointAddressToByteString",
          "package": "network-transport",
          "partial": "Point Address To Byte String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:endPointAddressToByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum message size that we can send to this group.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "maxMsgSize",
          "package": "network-transport",
          "signature": "Maybe Int",
          "source": "src/Network-Transport.html#MulticastGroup",
          "type": "function"
        },
        "index": {
          "description": "Maximum message size that we can send to this group",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "maxMsgSize",
          "package": "network-transport",
          "partial": "Msg Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:maxMsgSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEndPointAddress of the multicast group. \n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "multicastAddress",
          "package": "network-transport",
          "signature": "MulticastAddress",
          "source": "src/Network-Transport.html#MulticastGroup",
          "type": "function"
        },
        "index": {
          "description": "EndPointAddress of the multicast group",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "multicastAddress",
          "package": "network-transport",
          "partial": "Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:multicastAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport",
          "name": "multicastAddressToByteString",
          "package": "network-transport",
          "signature": "ByteString",
          "source": "src/Network-Transport.html#MulticastAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "multicastAddressToByteString",
          "package": "network-transport",
          "partial": "Address To Byte String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:multicastAddressToByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose the group (that is, indicate you no longer wish to send to the group).\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "multicastClose",
          "package": "network-transport",
          "signature": "IO ()",
          "source": "src/Network-Transport.html#MulticastGroup",
          "type": "function"
        },
        "index": {
          "description": "Close the group that is indicate you no longer wish to send to the group",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "multicastClose",
          "normalized": "IO()",
          "package": "network-transport",
          "partial": "Close",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:multicastClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a message to the group.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "multicastSend",
          "package": "network-transport",
          "signature": "[ByteString] -\u003e IO ()",
          "source": "src/Network-Transport.html#MulticastGroup",
          "type": "function"
        },
        "index": {
          "description": "Send message to the group",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "multicastSend",
          "normalized": "[ByteString]-\u003eIO()",
          "package": "network-transport",
          "partial": "Send",
          "signature": "[ByteString]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:multicastSend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubscribe to the given multicast group (to start receiving messages from the group).\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "multicastSubscribe",
          "package": "network-transport",
          "signature": "IO ()",
          "source": "src/Network-Transport.html#MulticastGroup",
          "type": "function"
        },
        "index": {
          "description": "Subscribe to the given multicast group to start receiving messages from the group",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "multicastSubscribe",
          "normalized": "IO()",
          "package": "network-transport",
          "partial": "Subscribe",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:multicastSubscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsubscribe from the given multicast group (to stop receiving messages from the group).\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "multicastUnsubscribe",
          "package": "network-transport",
          "signature": "IO ()",
          "source": "src/Network-Transport.html#MulticastGroup",
          "type": "function"
        },
        "index": {
          "description": "Unsubscribe from the given multicast group to stop receiving messages from the group",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "multicastUnsubscribe",
          "normalized": "IO()",
          "package": "network-transport",
          "partial": "Unsubscribe",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:multicastUnsubscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new end point (heavyweight operation)\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "newEndPoint",
          "package": "network-transport",
          "signature": "IO (Either (TransportError NewEndPointErrorCode) EndPoint)",
          "source": "src/Network-Transport.html#Transport",
          "type": "function"
        },
        "index": {
          "description": "Create new end point heavyweight operation",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "newEndPoint",
          "package": "network-transport",
          "partial": "End Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:newEndPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new multicast group.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "newMulticastGroup",
          "package": "network-transport",
          "signature": "IO (Either (TransportError NewMulticastGroupErrorCode) MulticastGroup)",
          "source": "src/Network-Transport.html#EndPoint",
          "type": "function"
        },
        "index": {
          "description": "Create new multicast group",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "newMulticastGroup",
          "package": "network-transport",
          "partial": "Multicast Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:newMulticastGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEndpoints have a single shared receive queue.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "receive",
          "package": "network-transport",
          "signature": "IO Event",
          "source": "src/Network-Transport.html#EndPoint",
          "type": "function"
        },
        "index": {
          "description": "Endpoints have single shared receive queue",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "receive",
          "package": "network-transport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:receive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResolve an address to a multicast group.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "resolveMulticastGroup",
          "package": "network-transport",
          "signature": "MulticastAddress -\u003e IO (Either (TransportError ResolveMulticastGroupErrorCode) MulticastGroup)",
          "source": "src/Network-Transport.html#EndPoint",
          "type": "function"
        },
        "index": {
          "description": "Resolve an address to multicast group",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "resolveMulticastGroup",
          "normalized": "MulticastAddress-\u003eIO(Either(TransportError ResolveMulticastGroupErrorCode)MulticastGroup)",
          "package": "network-transport",
          "partial": "Multicast Group",
          "signature": "MulticastAddress-\u003eIO(Either(TransportError ResolveMulticastGroupErrorCode)MulticastGroup)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:resolveMulticastGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a message on this connection.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e provides vectored I/O, and allows multiple data segments to be\n sent using a single call (cf. \u003ccode\u003e\u003ca\u003esendMany\u003c/a\u003e\u003c/code\u003e).\n Note that this segment structure is entirely unrelated to the segment\n structure \u003cem\u003ereturned\u003c/em\u003e by a \u003ccode\u003e\u003ca\u003eReceived\u003c/a\u003e\u003c/code\u003e event.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "send",
          "package": "network-transport",
          "signature": "[ByteString] -\u003e IO (Either (TransportError SendErrorCode) ())",
          "source": "src/Network-Transport.html#Connection",
          "type": "function"
        },
        "index": {
          "description": "Send message on this connection send provides vectored and allows multiple data segments to be sent using single call cf sendMany Note that this segment structure is entirely unrelated to the segment structure returned by Received event",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "send",
          "normalized": "[ByteString]-\u003eIO(Either(TransportError SendErrorCode)())",
          "package": "network-transport",
          "signature": "[ByteString]-\u003eIO(Either(TransportError SendErrorCode)())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport/docs/Network-Transport.html#v:send"
      }
    }
  ]
]