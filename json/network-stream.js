[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-ByteString-Lazy-Stream.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNetwork streams for use with lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003ea.\n\u003c/p\u003e\u003cp\u003eOne can also send data in chunks, sending data whenever it is ready, and\n the data will be collected transparently to the client interface.\n\u003c/p\u003e\u003cp\u003eAn enumerator version is also available in which an iteratee is given\n each chunk of data invididually.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.ByteString.Lazy.Stream",
        "fct-package": "network-stream",
        "fct-signature": "module",
        "fct-source": "src/Network-ByteString-Lazy-Stream.html",
        "fct-type": "module",
        "title": "Stream"
      },
      "index": {
        "description": "Network streams for use with lazy ByteString One can also send data in chunks sending data whenever it is ready and the data will be collected transparently to the client interface An enumerator version is also available in which an iteratee is given each chunk of data invididually",
        "hierarchy": "Network ByteString Lazy Stream",
        "module": "Network.ByteString.Lazy.Stream",
        "name": "Stream",
        "normalized": "",
        "package": "network-stream",
        "partial": "Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-ByteString-Lazy-Stream.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents whether the stream transaction was a success or a failure;\n nothing is done by the library with the attached value. If you do not need\n to send back a value to the caller of \u003ccode\u003e\u003ca\u003ewithStream\u003c/a\u003e\u003c/code\u003e, you can use\n a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e ().\n\u003c/p\u003e",
        "fct-module": "Network.ByteString.Lazy.Stream",
        "fct-package": "network-stream",
        "fct-signature": "data",
        "fct-source": "src/Network-ByteString-Lazy-Stream.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "Represents whether the stream transaction was success or failure nothing is done by the library with the attached value If you do not need to send back value to the caller of withStream you can use Result",
        "hierarchy": "Network ByteString Lazy Stream",
        "module": "Network.ByteString.Lazy.Stream",
        "name": "Result",
        "normalized": "",
        "package": "network-stream",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-ByteString-Lazy-Stream.html#t:Stream",
      "description": {
        "fct-descr": "\u003cp\u003eThe core data type for a Stream. It can only be created using \u003ccode\u003e\u003ca\u003ewithStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.ByteString.Lazy.Stream",
        "fct-package": "network-stream",
        "fct-signature": "data",
        "fct-source": "src/Network-ByteString-Lazy-Stream.html#Stream",
        "fct-type": "data",
        "title": "Stream"
      },
      "index": {
        "description": "The core data type for Stream It can only be created using withStream",
        "hierarchy": "Network ByteString Lazy Stream",
        "module": "Network.ByteString.Lazy.Stream",
        "name": "Stream",
        "normalized": "",
        "package": "network-stream",
        "partial": "Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-ByteString-Lazy-Stream.html#v:Failure",
      "description": {
        "fct-module": "Network.ByteString.Lazy.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Failure a",
        "fct-source": "src/Network-ByteString-Lazy-Stream.html#Result",
        "fct-type": "function",
        "title": "Failure"
      },
      "index": {
        "description": "",
        "hierarchy": "Network ByteString Lazy Stream",
        "module": "Network.ByteString.Lazy.Stream",
        "name": "Failure",
        "normalized": "",
        "package": "network-stream",
        "partial": "Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-ByteString-Lazy-Stream.html#v:Success",
      "description": {
        "fct-module": "Network.ByteString.Lazy.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Success a",
        "fct-source": "src/Network-ByteString-Lazy-Stream.html#Result",
        "fct-type": "function",
        "title": "Success"
      },
      "index": {
        "description": "",
        "hierarchy": "Network ByteString Lazy Stream",
        "module": "Network.ByteString.Lazy.Stream",
        "name": "Success",
        "normalized": "",
        "package": "network-stream",
        "partial": "Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-ByteString-Lazy-Stream.html#v:invalidate",
      "description": {
        "fct-descr": "\u003cp\u003eDoesn't fail, but tells the client that all the data sent by the stream\n so far has been invalidated, and hence the queue of messages to be sent\n is cleared.\n\u003c/p\u003e",
        "fct-module": "Network.ByteString.Lazy.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Stream -\u003e IO ()",
        "fct-source": "src/Network-ByteString-Lazy-Stream.html#invalidate",
        "fct-type": "function",
        "title": "invalidate"
      },
      "index": {
        "description": "Doesn fail but tells the client that all the data sent by the stream so far has been invalidated and hence the queue of messages to be sent is cleared",
        "hierarchy": "Network ByteString Lazy Stream",
        "module": "Network.ByteString.Lazy.Stream",
        "name": "invalidate",
        "normalized": "Stream-\u003eIO()",
        "package": "network-stream",
        "partial": "",
        "signature": "Stream-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-ByteString-Lazy-Stream.html#v:receive",
      "description": {
        "fct-descr": "\u003cp\u003eReceives a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e sent via a \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.ByteString.Lazy.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Handle -\u003e IO (Maybe ByteString)",
        "fct-source": "src/Network-ByteString-Lazy-Stream.html#receive",
        "fct-type": "function",
        "title": "receive"
      },
      "index": {
        "description": "Receives ByteString sent via Stream",
        "hierarchy": "Network ByteString Lazy Stream",
        "module": "Network.ByteString.Lazy.Stream",
        "name": "receive",
        "normalized": "Handle-\u003eIO(Maybe ByteString)",
        "package": "network-stream",
        "partial": "",
        "signature": "Handle-\u003eIO(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-ByteString-Lazy-Stream.html#v:receiveE",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerator-based version of receive that allows the client to fold over\n the data as it is being received. Each \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e is a single chunk sent\n from \u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e. Keep in mind that any IO performed is dangerous if you are\n possibly expected an Invalidation, since then that IO could end up being\n incorrect. Hence, it is more useful to simply use this in a pure manner to\n build up some result data as the bytes are being streamed in.\n\u003c/p\u003e",
        "fct-module": "Network.ByteString.Lazy.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Handle -\u003e Iteratee ByteString m b -\u003e m (Maybe b)",
        "fct-source": "src/Network-ByteString-Lazy-Stream.html#receiveE",
        "fct-type": "function",
        "title": "receiveE"
      },
      "index": {
        "description": "Enumerator-based version of receive that allows the client to fold over the data as it is being received Each ByteString is single chunk sent from write Keep in mind that any IO performed is dangerous if you are possibly expected an Invalidation since then that IO could end up being incorrect Hence it is more useful to simply use this in pure manner to build up some result data as the bytes are being streamed in",
        "hierarchy": "Network ByteString Lazy Stream",
        "module": "Network.ByteString.Lazy.Stream",
        "name": "receiveE",
        "normalized": "Handle-\u003eIteratee ByteString a b-\u003ea(Maybe b)",
        "package": "network-stream",
        "partial": "",
        "signature": "Handle-\u003eIteratee ByteString m b-\u003em(Maybe b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-ByteString-Lazy-Stream.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eSerializes data and sends it over a newly created \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.ByteString.Lazy.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Handle -\u003e a -\u003e IO ()",
        "fct-source": "src/Network-ByteString-Lazy-Stream.html#send",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "Serializes data and sends it over newly created Stream",
        "hierarchy": "Network ByteString Lazy Stream",
        "module": "Network.ByteString.Lazy.Stream",
        "name": "send",
        "normalized": "Handle-\u003ea-\u003eIO()",
        "package": "network-stream",
        "partial": "",
        "signature": "Handle-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-ByteString-Lazy-Stream.html#v:withStream",
      "description": {
        "fct-descr": "\u003cp\u003eOpens a stream using the given handle and passes it to the function, and\n then unwraps the result given and gives any user data that the specific\n function wants to give back.\n\u003c/p\u003e",
        "fct-module": "Network.ByteString.Lazy.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Handle -\u003e (Stream -\u003e IO (Result a)) -\u003e IO a",
        "fct-source": "src/Network-ByteString-Lazy-Stream.html#withStream",
        "fct-type": "function",
        "title": "withStream"
      },
      "index": {
        "description": "Opens stream using the given handle and passes it to the function and then unwraps the result given and gives any user data that the specific function wants to give back",
        "hierarchy": "Network ByteString Lazy Stream",
        "module": "Network.ByteString.Lazy.Stream",
        "name": "withStream",
        "normalized": "Handle-\u003e(Stream-\u003eIO(Result a))-\u003eIO a",
        "package": "network-stream",
        "partial": "Stream",
        "signature": "Handle-\u003e(Stream-\u003eIO(Result a))-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-ByteString-Lazy-Stream.html#v:write",
      "description": {
        "fct-descr": "\u003cp\u003eWrites partial or full data over a \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e, placing it in the queue\n of all of the partial data.\n\u003c/p\u003e",
        "fct-module": "Network.ByteString.Lazy.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Stream -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/Network-ByteString-Lazy-Stream.html#write",
        "fct-type": "function",
        "title": "write"
      },
      "index": {
        "description": "Writes partial or full data over Stream placing it in the queue of all of the partial data",
        "hierarchy": "Network ByteString Lazy Stream",
        "module": "Network.ByteString.Lazy.Stream",
        "name": "write",
        "normalized": "Stream-\u003eByteString-\u003eIO()",
        "package": "network-stream",
        "partial": "",
        "signature": "Stream-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-ByteString-Stream.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNetwork streams for use with strict\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es. For lazy ByteString's, see\n \u003ccode\u003eNetwork.ByteString.Lazy.Stream\u003c/code\u003e. Use this module with\n \u003ccode\u003e\u003ca\u003eSerialize\u003c/a\u003e\u003c/code\u003e to send data over a stream without worrying\n about sending and receiving the lengths.\n\u003c/p\u003e\u003cp\u003eOne can also send data in chunks, sending data whenever it is ready, and\n the data will be collected transparently to the client interface.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.ByteString.Stream",
        "fct-package": "network-stream",
        "fct-signature": "module",
        "fct-source": "src/Network-ByteString-Stream.html",
        "fct-type": "module",
        "title": "Stream"
      },
      "index": {
        "description": "Network streams for use with strict ByteString For lazy ByteString see Network.ByteString.Lazy.Stream Use this module with Serialize to send data over stream without worrying about sending and receiving the lengths One can also send data in chunks sending data whenever it is ready and the data will be collected transparently to the client interface",
        "hierarchy": "Network ByteString Stream",
        "module": "Network.ByteString.Stream",
        "name": "Stream",
        "normalized": "",
        "package": "network-stream",
        "partial": "Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-ByteString-Stream.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents whether the stream transaction was a success or a failure;\n nothing is done by the library with the attached value. If you do not need\n to send back a value to the caller of \u003ccode\u003e\u003ca\u003ewithStream\u003c/a\u003e\u003c/code\u003e, you can use\n a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e ().\n\u003c/p\u003e",
        "fct-module": "Network.ByteString.Stream",
        "fct-package": "network-stream",
        "fct-signature": "data",
        "fct-source": "src/Network-ByteString-Stream.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "Represents whether the stream transaction was success or failure nothing is done by the library with the attached value If you do not need to send back value to the caller of withStream you can use Result",
        "hierarchy": "Network ByteString Stream",
        "module": "Network.ByteString.Stream",
        "name": "Result",
        "normalized": "",
        "package": "network-stream",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-ByteString-Stream.html#t:Stream",
      "description": {
        "fct-descr": "\u003cp\u003eThe core data type for a Stream. It can only be created using \u003ccode\u003e\u003ca\u003ewithStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.ByteString.Stream",
        "fct-package": "network-stream",
        "fct-signature": "data",
        "fct-source": "src/Network-ByteString-Stream.html#Stream",
        "fct-type": "data",
        "title": "Stream"
      },
      "index": {
        "description": "The core data type for Stream It can only be created using withStream",
        "hierarchy": "Network ByteString Stream",
        "module": "Network.ByteString.Stream",
        "name": "Stream",
        "normalized": "",
        "package": "network-stream",
        "partial": "Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-ByteString-Stream.html#v:Failure",
      "description": {
        "fct-module": "Network.ByteString.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Failure a",
        "fct-source": "src/Network-ByteString-Stream.html#Result",
        "fct-type": "function",
        "title": "Failure"
      },
      "index": {
        "description": "",
        "hierarchy": "Network ByteString Stream",
        "module": "Network.ByteString.Stream",
        "name": "Failure",
        "normalized": "",
        "package": "network-stream",
        "partial": "Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-ByteString-Stream.html#v:Success",
      "description": {
        "fct-module": "Network.ByteString.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Success a",
        "fct-source": "src/Network-ByteString-Stream.html#Result",
        "fct-type": "function",
        "title": "Success"
      },
      "index": {
        "description": "",
        "hierarchy": "Network ByteString Stream",
        "module": "Network.ByteString.Stream",
        "name": "Success",
        "normalized": "",
        "package": "network-stream",
        "partial": "Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-ByteString-Stream.html#v:invalidate",
      "description": {
        "fct-descr": "\u003cp\u003eDoesn't fail, but tells the client that all the data sent by the stream\n so far has been invalidated, and hence the queue of messages to be sent\n is cleared.\n\u003c/p\u003e",
        "fct-module": "Network.ByteString.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Stream -\u003e IO ()",
        "fct-source": "src/Network-ByteString-Stream.html#invalidate",
        "fct-type": "function",
        "title": "invalidate"
      },
      "index": {
        "description": "Doesn fail but tells the client that all the data sent by the stream so far has been invalidated and hence the queue of messages to be sent is cleared",
        "hierarchy": "Network ByteString Stream",
        "module": "Network.ByteString.Stream",
        "name": "invalidate",
        "normalized": "Stream-\u003eIO()",
        "package": "network-stream",
        "partial": "",
        "signature": "Stream-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-ByteString-Stream.html#v:receive",
      "description": {
        "fct-descr": "\u003cp\u003eReceives a ByteString sent via a \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.ByteString.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Handle -\u003e IO (Maybe ByteString)",
        "fct-source": "src/Network-ByteString-Stream.html#receive",
        "fct-type": "function",
        "title": "receive"
      },
      "index": {
        "description": "Receives ByteString sent via Stream",
        "hierarchy": "Network ByteString Stream",
        "module": "Network.ByteString.Stream",
        "name": "receive",
        "normalized": "Handle-\u003eIO(Maybe ByteString)",
        "package": "network-stream",
        "partial": "",
        "signature": "Handle-\u003eIO(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-ByteString-Stream.html#v:receiveE",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerator-based version of receive that allows the client to fold over\n the data as it is being received. Each \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e is a single chunk sent\n from \u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e. Keep in mind that any IO performed is dangerous if you are\n possibly expected an Invalidation, since then that IO could end up being\n incorrect. Hence, it is more useful to simply use this in a pure manner to\n build up some result data as the bytes are being streamed in.\n\u003c/p\u003e",
        "fct-module": "Network.ByteString.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Handle -\u003e Iteratee ByteString m b -\u003e m (Maybe b)",
        "fct-source": "src/Network-ByteString-Stream.html#receiveE",
        "fct-type": "function",
        "title": "receiveE"
      },
      "index": {
        "description": "Enumerator-based version of receive that allows the client to fold over the data as it is being received Each ByteString is single chunk sent from write Keep in mind that any IO performed is dangerous if you are possibly expected an Invalidation since then that IO could end up being incorrect Hence it is more useful to simply use this in pure manner to build up some result data as the bytes are being streamed in",
        "hierarchy": "Network ByteString Stream",
        "module": "Network.ByteString.Stream",
        "name": "receiveE",
        "normalized": "Handle-\u003eIteratee ByteString a b-\u003ea(Maybe b)",
        "package": "network-stream",
        "partial": "",
        "signature": "Handle-\u003eIteratee ByteString m b-\u003em(Maybe b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-ByteString-Stream.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eSerializes data and sends it over a newly created \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.ByteString.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Handle -\u003e a -\u003e IO ()",
        "fct-source": "src/Network-ByteString-Stream.html#send",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "Serializes data and sends it over newly created Stream",
        "hierarchy": "Network ByteString Stream",
        "module": "Network.ByteString.Stream",
        "name": "send",
        "normalized": "Handle-\u003ea-\u003eIO()",
        "package": "network-stream",
        "partial": "",
        "signature": "Handle-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-ByteString-Stream.html#v:withStream",
      "description": {
        "fct-descr": "\u003cp\u003eOpens a stream using the given handle and passes it to the function, and\n then unwraps the result given and gives any user data that the specific\n function wants to give back.\n\u003c/p\u003e",
        "fct-module": "Network.ByteString.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Handle -\u003e (Stream -\u003e IO (Result a)) -\u003e IO a",
        "fct-source": "src/Network-ByteString-Stream.html#withStream",
        "fct-type": "function",
        "title": "withStream"
      },
      "index": {
        "description": "Opens stream using the given handle and passes it to the function and then unwraps the result given and gives any user data that the specific function wants to give back",
        "hierarchy": "Network ByteString Stream",
        "module": "Network.ByteString.Stream",
        "name": "withStream",
        "normalized": "Handle-\u003e(Stream-\u003eIO(Result a))-\u003eIO a",
        "package": "network-stream",
        "partial": "Stream",
        "signature": "Handle-\u003e(Stream-\u003eIO(Result a))-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-ByteString-Stream.html#v:write",
      "description": {
        "fct-descr": "\u003cp\u003eWrites partial or full data over a \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e, placing it in the queue\n of all of the partial data.\n\u003c/p\u003e",
        "fct-module": "Network.ByteString.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Stream -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/Network-ByteString-Stream.html#write",
        "fct-type": "function",
        "title": "write"
      },
      "index": {
        "description": "Writes partial or full data over Stream placing it in the queue of all of the partial data",
        "hierarchy": "Network ByteString Stream",
        "module": "Network.ByteString.Stream",
        "name": "write",
        "normalized": "Stream-\u003eByteString-\u003eIO()",
        "package": "network-stream",
        "partial": "",
        "signature": "Stream-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-Text-Lazy-Stream.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStreams using \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e by encoding in Utf 8.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Text.Lazy.Stream",
        "fct-package": "network-stream",
        "fct-signature": "module",
        "fct-source": "src/Network-Text-Lazy-Stream.html",
        "fct-type": "module",
        "title": "Stream"
      },
      "index": {
        "description": "Streams using Text by encoding in Utf",
        "hierarchy": "Network Text Lazy Stream",
        "module": "Network.Text.Lazy.Stream",
        "name": "Stream",
        "normalized": "",
        "package": "network-stream",
        "partial": "Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-Text-Lazy-Stream.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents whether the stream transaction was a success or a failure;\n nothing is done by the library with the attached value. If you do not need\n to send back a value to the caller of \u003ccode\u003e\u003ca\u003ewithStream\u003c/a\u003e\u003c/code\u003e, you can use\n a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e ().\n\u003c/p\u003e",
        "fct-module": "Network.Text.Lazy.Stream",
        "fct-package": "network-stream",
        "fct-signature": "data",
        "fct-source": "src/Network-ByteString-Lazy-Stream.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "Represents whether the stream transaction was success or failure nothing is done by the library with the attached value If you do not need to send back value to the caller of withStream you can use Result",
        "hierarchy": "Network Text Lazy Stream",
        "module": "Network.Text.Lazy.Stream",
        "name": "Result",
        "normalized": "",
        "package": "network-stream",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-Text-Lazy-Stream.html#t:Stream",
      "description": {
        "fct-descr": "\u003cp\u003eThe core data type for a Stream. It can only be created using \u003ccode\u003e\u003ca\u003ewithStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Text.Lazy.Stream",
        "fct-package": "network-stream",
        "fct-signature": "data",
        "fct-source": "src/Network-ByteString-Lazy-Stream.html#Stream",
        "fct-type": "data",
        "title": "Stream"
      },
      "index": {
        "description": "The core data type for Stream It can only be created using withStream",
        "hierarchy": "Network Text Lazy Stream",
        "module": "Network.Text.Lazy.Stream",
        "name": "Stream",
        "normalized": "",
        "package": "network-stream",
        "partial": "Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-Text-Lazy-Stream.html#v:Failure",
      "description": {
        "fct-module": "Network.Text.Lazy.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Failure a",
        "fct-source": "src/Network-ByteString-Lazy-Stream.html#Result",
        "fct-type": "function",
        "title": "Failure"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Text Lazy Stream",
        "module": "Network.Text.Lazy.Stream",
        "name": "Failure",
        "normalized": "",
        "package": "network-stream",
        "partial": "Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-Text-Lazy-Stream.html#v:Success",
      "description": {
        "fct-module": "Network.Text.Lazy.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Success a",
        "fct-source": "src/Network-ByteString-Lazy-Stream.html#Result",
        "fct-type": "function",
        "title": "Success"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Text Lazy Stream",
        "module": "Network.Text.Lazy.Stream",
        "name": "Success",
        "normalized": "",
        "package": "network-stream",
        "partial": "Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-Text-Lazy-Stream.html#v:invalidate",
      "description": {
        "fct-descr": "\u003cp\u003eDoesn't fail, but tells the client that all the data sent by the stream\n so far has been invalidated, and hence the queue of messages to be sent\n is cleared.\n\u003c/p\u003e",
        "fct-module": "Network.Text.Lazy.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Stream -\u003e IO ()",
        "fct-source": "src/Network-ByteString-Lazy-Stream.html#invalidate",
        "fct-type": "function",
        "title": "invalidate"
      },
      "index": {
        "description": "Doesn fail but tells the client that all the data sent by the stream so far has been invalidated and hence the queue of messages to be sent is cleared",
        "hierarchy": "Network Text Lazy Stream",
        "module": "Network.Text.Lazy.Stream",
        "name": "invalidate",
        "normalized": "Stream-\u003eIO()",
        "package": "network-stream",
        "partial": "",
        "signature": "Stream-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-Text-Lazy-Stream.html#v:receive",
      "description": {
        "fct-module": "Network.Text.Lazy.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Handle -\u003e IO (Maybe Text)",
        "fct-source": "src/Network-Text-Lazy-Stream.html#receive",
        "fct-type": "function",
        "title": "receive"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Text Lazy Stream",
        "module": "Network.Text.Lazy.Stream",
        "name": "receive",
        "normalized": "Handle-\u003eIO(Maybe Text)",
        "package": "network-stream",
        "partial": "",
        "signature": "Handle-\u003eIO(Maybe Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-Text-Lazy-Stream.html#v:receiveE",
      "description": {
        "fct-descr": "\u003cp\u003eReceives the entire data should the transfer over the stream be successful.\n Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on failure.\n\u003c/p\u003e\u003cp\u003eRun an iteratee through an enumerator which supplies each block of Text.\n\u003c/p\u003e",
        "fct-module": "Network.Text.Lazy.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Handle -\u003e Iteratee Text m b -\u003e m (Maybe b)",
        "fct-source": "src/Network-Text-Lazy-Stream.html#receiveE",
        "fct-type": "function",
        "title": "receiveE"
      },
      "index": {
        "description": "Receives the entire data should the transfer over the stream be successful Returns Nothing on failure Run an iteratee through an enumerator which supplies each block of Text",
        "hierarchy": "Network Text Lazy Stream",
        "module": "Network.Text.Lazy.Stream",
        "name": "receiveE",
        "normalized": "Handle-\u003eIteratee Text a b-\u003ea(Maybe b)",
        "package": "network-stream",
        "partial": "",
        "signature": "Handle-\u003eIteratee Text m b-\u003em(Maybe b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-Text-Lazy-Stream.html#v:withStream",
      "description": {
        "fct-descr": "\u003cp\u003eOpens a stream using the given handle and passes it to the function, and\n then unwraps the result given and gives any user data that the specific\n function wants to give back.\n\u003c/p\u003e",
        "fct-module": "Network.Text.Lazy.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Handle -\u003e (Stream -\u003e IO (Result a)) -\u003e IO a",
        "fct-source": "src/Network-ByteString-Lazy-Stream.html#withStream",
        "fct-type": "function",
        "title": "withStream"
      },
      "index": {
        "description": "Opens stream using the given handle and passes it to the function and then unwraps the result given and gives any user data that the specific function wants to give back",
        "hierarchy": "Network Text Lazy Stream",
        "module": "Network.Text.Lazy.Stream",
        "name": "withStream",
        "normalized": "Handle-\u003e(Stream-\u003eIO(Result a))-\u003eIO a",
        "package": "network-stream",
        "partial": "Stream",
        "signature": "Handle-\u003e(Stream-\u003eIO(Result a))-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-Text-Lazy-Stream.html#v:write",
      "description": {
        "fct-descr": "\u003cp\u003eWrites partial or full data over a \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e, placing it in the queue of\n data to be sent. Encodes the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e with Utf8\n into a strict \u003ccode\u003eData.ByteString.Lazy.ByteString\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Text.Lazy.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Stream -\u003e Text -\u003e IO ()",
        "fct-source": "src/Network-Text-Lazy-Stream.html#write",
        "fct-type": "function",
        "title": "write"
      },
      "index": {
        "description": "Writes partial or full data over Stream placing it in the queue of data to be sent Encodes the Text with Utf8 into strict Data.ByteString.Lazy.ByteString",
        "hierarchy": "Network Text Lazy Stream",
        "module": "Network.Text.Lazy.Stream",
        "name": "write",
        "normalized": "Stream-\u003eText-\u003eIO()",
        "package": "network-stream",
        "partial": "",
        "signature": "Stream-\u003eText-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-Text-Stream.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStreams using \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e by encoding in Utf 8.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Text.Stream",
        "fct-package": "network-stream",
        "fct-signature": "module",
        "fct-source": "src/Network-Text-Stream.html",
        "fct-type": "module",
        "title": "Stream"
      },
      "index": {
        "description": "Streams using Text by encoding in Utf",
        "hierarchy": "Network Text Stream",
        "module": "Network.Text.Stream",
        "name": "Stream",
        "normalized": "",
        "package": "network-stream",
        "partial": "Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-Text-Stream.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents whether the stream transaction was a success or a failure;\n nothing is done by the library with the attached value. If you do not need\n to send back a value to the caller of \u003ccode\u003e\u003ca\u003ewithStream\u003c/a\u003e\u003c/code\u003e, you can use\n a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e ().\n\u003c/p\u003e",
        "fct-module": "Network.Text.Stream",
        "fct-package": "network-stream",
        "fct-signature": "data",
        "fct-source": "src/Network-ByteString-Stream.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "Represents whether the stream transaction was success or failure nothing is done by the library with the attached value If you do not need to send back value to the caller of withStream you can use Result",
        "hierarchy": "Network Text Stream",
        "module": "Network.Text.Stream",
        "name": "Result",
        "normalized": "",
        "package": "network-stream",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-Text-Stream.html#t:Stream",
      "description": {
        "fct-descr": "\u003cp\u003eThe core data type for a Stream. It can only be created using \u003ccode\u003e\u003ca\u003ewithStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Text.Stream",
        "fct-package": "network-stream",
        "fct-signature": "data",
        "fct-source": "src/Network-ByteString-Stream.html#Stream",
        "fct-type": "data",
        "title": "Stream"
      },
      "index": {
        "description": "The core data type for Stream It can only be created using withStream",
        "hierarchy": "Network Text Stream",
        "module": "Network.Text.Stream",
        "name": "Stream",
        "normalized": "",
        "package": "network-stream",
        "partial": "Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-Text-Stream.html#v:Failure",
      "description": {
        "fct-module": "Network.Text.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Failure a",
        "fct-source": "src/Network-ByteString-Stream.html#Result",
        "fct-type": "function",
        "title": "Failure"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Text Stream",
        "module": "Network.Text.Stream",
        "name": "Failure",
        "normalized": "",
        "package": "network-stream",
        "partial": "Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-Text-Stream.html#v:Success",
      "description": {
        "fct-module": "Network.Text.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Success a",
        "fct-source": "src/Network-ByteString-Stream.html#Result",
        "fct-type": "function",
        "title": "Success"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Text Stream",
        "module": "Network.Text.Stream",
        "name": "Success",
        "normalized": "",
        "package": "network-stream",
        "partial": "Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-Text-Stream.html#v:invalidate",
      "description": {
        "fct-descr": "\u003cp\u003eDoesn't fail, but tells the client that all the data sent by the stream\n so far has been invalidated, and hence the queue of messages to be sent\n is cleared.\n\u003c/p\u003e",
        "fct-module": "Network.Text.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Stream -\u003e IO ()",
        "fct-source": "src/Network-ByteString-Stream.html#invalidate",
        "fct-type": "function",
        "title": "invalidate"
      },
      "index": {
        "description": "Doesn fail but tells the client that all the data sent by the stream so far has been invalidated and hence the queue of messages to be sent is cleared",
        "hierarchy": "Network Text Stream",
        "module": "Network.Text.Stream",
        "name": "invalidate",
        "normalized": "Stream-\u003eIO()",
        "package": "network-stream",
        "partial": "",
        "signature": "Stream-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-Text-Stream.html#v:receive",
      "description": {
        "fct-descr": "\u003cp\u003eReceives the entire data should the transfer over the stream be successful.\n Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on failure.\n\u003c/p\u003e",
        "fct-module": "Network.Text.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Handle -\u003e IO (Maybe Text)",
        "fct-source": "src/Network-Text-Stream.html#receive",
        "fct-type": "function",
        "title": "receive"
      },
      "index": {
        "description": "Receives the entire data should the transfer over the stream be successful Returns Nothing on failure",
        "hierarchy": "Network Text Stream",
        "module": "Network.Text.Stream",
        "name": "receive",
        "normalized": "Handle-\u003eIO(Maybe Text)",
        "package": "network-stream",
        "partial": "",
        "signature": "Handle-\u003eIO(Maybe Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-Text-Stream.html#v:receiveE",
      "description": {
        "fct-descr": "\u003cp\u003eRun an iteratee through an enumerator which supplies each block of Text.\n\u003c/p\u003e",
        "fct-module": "Network.Text.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Handle -\u003e Iteratee Text m b -\u003e m (Maybe b)",
        "fct-source": "src/Network-Text-Stream.html#receiveE",
        "fct-type": "function",
        "title": "receiveE"
      },
      "index": {
        "description": "Run an iteratee through an enumerator which supplies each block of Text",
        "hierarchy": "Network Text Stream",
        "module": "Network.Text.Stream",
        "name": "receiveE",
        "normalized": "Handle-\u003eIteratee Text a b-\u003ea(Maybe b)",
        "package": "network-stream",
        "partial": "",
        "signature": "Handle-\u003eIteratee Text m b-\u003em(Maybe b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-Text-Stream.html#v:withStream",
      "description": {
        "fct-descr": "\u003cp\u003eOpens a stream using the given handle and passes it to the function, and\n then unwraps the result given and gives any user data that the specific\n function wants to give back.\n\u003c/p\u003e",
        "fct-module": "Network.Text.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Handle -\u003e (Stream -\u003e IO (Result a)) -\u003e IO a",
        "fct-source": "src/Network-ByteString-Stream.html#withStream",
        "fct-type": "function",
        "title": "withStream"
      },
      "index": {
        "description": "Opens stream using the given handle and passes it to the function and then unwraps the result given and gives any user data that the specific function wants to give back",
        "hierarchy": "Network Text Stream",
        "module": "Network.Text.Stream",
        "name": "withStream",
        "normalized": "Handle-\u003e(Stream-\u003eIO(Result a))-\u003eIO a",
        "package": "network-stream",
        "partial": "Stream",
        "signature": "Handle-\u003e(Stream-\u003eIO(Result a))-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-stream/docs/Network-Text-Stream.html#v:write",
      "description": {
        "fct-descr": "\u003cp\u003eWrites partial or full data over a \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e, placing it in the queue of\n data to be sent. Encodes the \u003ccode\u003eData.Text.Text\u003c/code\u003e with Utf8\n into a strict \u003ccode\u003eData.ByteString.ByteString\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Text.Stream",
        "fct-package": "network-stream",
        "fct-signature": "Stream -\u003e Text -\u003e IO ()",
        "fct-source": "src/Network-Text-Stream.html#write",
        "fct-type": "function",
        "title": "write"
      },
      "index": {
        "description": "Writes partial or full data over Stream placing it in the queue of data to be sent Encodes the Data.Text.Text with Utf8 into strict Data.ByteString.ByteString",
        "hierarchy": "Network Text Stream",
        "module": "Network.Text.Stream",
        "name": "write",
        "normalized": "Stream-\u003eText-\u003eIO()",
        "package": "network-stream",
        "partial": "",
        "signature": "Stream-\u003eText-\u003eIO()"
      }
    }
  }
]