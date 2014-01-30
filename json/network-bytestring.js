[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-bytestring/docs/Network-Socket-ByteString-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides access to the BSD \u003cem\u003esocket\u003c/em\u003e interface.  This\n module is generally more efficient than the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e based network\n functions in \u003ccode\u003eNetwork.Socket\u003c/code\u003e.  For detailed documentation, consult\n your favorite POSIX socket reference. All functions communicate\n failures by converting the error number to \u003ccode\u003eSystem.IO.IOError\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis module is made to be imported with \u003ccode\u003eNetwork.Socket\u003c/code\u003e like so:\n\u003c/p\u003e\u003cpre\u003e import Network.Socket hiding (send, sendTo, recv, recvFrom)\n import Network.Socket.ByteString.Lazy\n import Prelude hiding (getContents)\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.Socket.ByteString.Lazy",
        "fct-package": "network-bytestring",
        "fct-signature": "module",
        "fct-source": "src/Network-Socket-ByteString-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "This module provides access to the BSD socket interface This module is generally more efficient than the String based network functions in Network.Socket For detailed documentation consult your favorite POSIX socket reference All functions communicate failures by converting the error number to System.IO.IOError This module is made to be imported with Network.Socket like so import Network.Socket hiding send sendTo recv recvFrom import Network.Socket.ByteString.Lazy import Prelude hiding getContents",
        "hierarchy": "Network Socket ByteString Lazy",
        "module": "Network.Socket.ByteString.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "network-bytestring",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-bytestring/docs/Network-Socket-ByteString-Lazy.html#v:getContents",
      "description": {
        "fct-descr": "\u003cp\u003eReceive data from the socket.  The socket must be in a connected\n state.  Data is received on demand, in chunks; each chunk will be\n sized to reflect the amount of data received by individual \u003ccode\u003e\u003ca\u003erecv\u003c/a\u003e\u003c/code\u003e\n calls.\n\u003c/p\u003e\u003cp\u003eAll remaining data from the socket is consumed.  When there is no\n more data to be received, the receiving side of the socket is shut\n down.  If there is an error and an exception is thrown, the socket\n is not shut down.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.ByteString.Lazy",
        "fct-package": "network-bytestring",
        "fct-signature": "Socket-\u003e IO ByteString",
        "fct-type": "function",
        "title": "getContents"
      },
      "index": {
        "description": "Receive data from the socket The socket must be in connected state Data is received on demand in chunks each chunk will be sized to reflect the amount of data received by individual recv calls All remaining data from the socket is consumed When there is no more data to be received the receiving side of the socket is shut down If there is an error and an exception is thrown the socket is not shut down",
        "hierarchy": "Network Socket ByteString Lazy",
        "module": "Network.Socket.ByteString.Lazy",
        "name": "getContents",
        "normalized": "Socket-\u003eIO ByteString",
        "package": "network-bytestring",
        "partial": "Contents",
        "signature": "Socket-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-bytestring/docs/Network-Socket-ByteString-Lazy.html#v:recv",
      "description": {
        "fct-descr": "\u003cp\u003eReceive data from the socket.  The socket must be in a connected\n state.  This function may return fewer bytes than specified.  If\n the received data is longer than the specified length, it may be\n discarded depending on the type of socket.  This function may block\n until a message arrives.\n\u003c/p\u003e\u003cp\u003eIf there is no more data to be received, returns an empty \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.ByteString.Lazy",
        "fct-package": "network-bytestring",
        "fct-signature": "Socket-\u003e Int64-\u003e IO ByteString",
        "fct-type": "function",
        "title": "recv"
      },
      "index": {
        "description": "Receive data from the socket The socket must be in connected state This function may return fewer bytes than specified If the received data is longer than the specified length it may be discarded depending on the type of socket This function may block until message arrives If there is no more data to be received returns an empty ByteString",
        "hierarchy": "Network Socket ByteString Lazy",
        "module": "Network.Socket.ByteString.Lazy",
        "name": "recv",
        "normalized": "Socket-\u003eInt-\u003eIO ByteString",
        "package": "network-bytestring",
        "partial": "",
        "signature": "Socket-\u003eInt-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-bytestring/docs/Network-Socket-ByteString-Lazy.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eSend data to the socket. The socket must be in a connected state.\n Returns the number of bytes sent. Applications are responsible for\n ensuring that all data has been sent.\n\u003c/p\u003e\u003cp\u003eBecause a lazily generated \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e may be arbitrarily long,\n this function caps the amount it will attempt to send at 4MB.  This\n number is large (so it should not penalize performance on fast\n networks), but not outrageously so (to avoid demanding lazily\n computed data unnecessarily early).  Before being sent, the lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e will be converted to a list of strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es\n with \u003ccode\u003e\u003ca\u003etoChunks\u003c/a\u003e\u003c/code\u003e; at most 1024 chunks will be sent.  \u003cem\u003eUnix only\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.ByteString.Lazy",
        "fct-package": "network-bytestring",
        "fct-signature": "Socket-\u003e ByteString-\u003e IO Int64",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "Send data to the socket The socket must be in connected state Returns the number of bytes sent Applications are responsible for ensuring that all data has been sent Because lazily generated ByteString may be arbitrarily long this function caps the amount it will attempt to send at MB This number is large so it should not penalize performance on fast networks but not outrageously so to avoid demanding lazily computed data unnecessarily early Before being sent the lazy ByteString will be converted to list of strict ByteString with toChunks at most chunks will be sent Unix only",
        "hierarchy": "Network Socket ByteString Lazy",
        "module": "Network.Socket.ByteString.Lazy",
        "name": "send",
        "normalized": "Socket-\u003eByteString-\u003eIO Int",
        "package": "network-bytestring",
        "partial": "",
        "signature": "Socket-\u003eByteString-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-bytestring/docs/Network-Socket-ByteString-Lazy.html#v:sendAll",
      "description": {
        "fct-descr": "\u003cp\u003eSend data to the socket.  The socket must be in a connected\n state. This function continues to send data until either all data\n has been sent or an error occurs.  If there is an error, an\n exception is raised, and there is no way to determine how much data\n was sent.  \u003cem\u003eUnix only\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.ByteString.Lazy",
        "fct-package": "network-bytestring",
        "fct-signature": "Socket-\u003e ByteString-\u003e IO ()",
        "fct-type": "function",
        "title": "sendAll"
      },
      "index": {
        "description": "Send data to the socket The socket must be in connected state This function continues to send data until either all data has been sent or an error occurs If there is an error an exception is raised and there is no way to determine how much data was sent Unix only",
        "hierarchy": "Network Socket ByteString Lazy",
        "module": "Network.Socket.ByteString.Lazy",
        "name": "sendAll",
        "normalized": "Socket-\u003eByteString-\u003eIO()",
        "package": "network-bytestring",
        "partial": "All",
        "signature": "Socket-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-bytestring/docs/Network-Socket-ByteString.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides access to the BSD \u003cem\u003esocket\u003c/em\u003e interface.  This\n module is generally more efficient than the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e based network\n functions in \u003ccode\u003eNetwork.Socket\u003c/code\u003e.  For detailed documentation, consult\n your favorite POSIX socket reference. All functions communicate\n failures by converting the error number to \u003ccode\u003eSystem.IO.IOError\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis module is made to be imported with \u003ccode\u003eNetwork.Socket\u003c/code\u003e like so:\n\u003c/p\u003e\u003cpre\u003e import Network.Socket hiding (send, sendTo, recv, recvFrom)\n import Network.Socket.ByteString\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.Socket.ByteString",
        "fct-package": "network-bytestring",
        "fct-signature": "module",
        "fct-source": "src/Network-Socket-ByteString.html",
        "fct-type": "module",
        "title": "ByteString"
      },
      "index": {
        "description": "This module provides access to the BSD socket interface This module is generally more efficient than the String based network functions in Network.Socket For detailed documentation consult your favorite POSIX socket reference All functions communicate failures by converting the error number to System.IO.IOError This module is made to be imported with Network.Socket like so import Network.Socket hiding send sendTo recv recvFrom import Network.Socket.ByteString",
        "hierarchy": "Network Socket ByteString",
        "module": "Network.Socket.ByteString",
        "name": "ByteString",
        "normalized": "",
        "package": "network-bytestring",
        "partial": "Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-bytestring/docs/Network-Socket-ByteString.html#v:recv",
      "description": {
        "fct-descr": "\u003cp\u003eReceive data from the socket.  The socket must be in a connected\n state.  This function may return fewer bytes than specified.  If\n the message is longer than the specified length, it may be\n discarded depending on the type of socket.  This function may block\n until a message arrives.\n\u003c/p\u003e\u003cp\u003eConsidering hardware and network realities, the maximum number of bytes to\n receive should be a small power of 2, e.g., 4096.\n\u003c/p\u003e\u003cp\u003eFor TCP sockets, a zero length return value means the peer has\n closed its half side of the connection.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.ByteString",
        "fct-package": "network-bytestring",
        "fct-signature": "Socket-\u003e Int-\u003e IO ByteString",
        "fct-type": "function",
        "title": "recv"
      },
      "index": {
        "description": "Receive data from the socket The socket must be in connected state This function may return fewer bytes than specified If the message is longer than the specified length it may be discarded depending on the type of socket This function may block until message arrives Considering hardware and network realities the maximum number of bytes to receive should be small power of e.g For TCP sockets zero length return value means the peer has closed its half side of the connection",
        "hierarchy": "Network Socket ByteString",
        "module": "Network.Socket.ByteString",
        "name": "recv",
        "normalized": "Socket-\u003eInt-\u003eIO ByteString",
        "package": "network-bytestring",
        "partial": "",
        "signature": "Socket-\u003eInt-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-bytestring/docs/Network-Socket-ByteString.html#v:recvFrom",
      "description": {
        "fct-descr": "\u003cp\u003eReceive data from the socket.  The socket need not be in a\n connected state.  Returns \u003ccode\u003e(bytes, address)\u003c/code\u003e where \u003ccode\u003ebytes\u003c/code\u003e is a\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e representing the data received and \u003ccode\u003eaddress\u003c/code\u003e is a\n \u003ccode\u003e\u003ca\u003eSockAddr\u003c/a\u003e\u003c/code\u003e representing the address of the sending socket.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.ByteString",
        "fct-package": "network-bytestring",
        "fct-signature": "Socket-\u003e Int-\u003e IO (ByteString, SockAddr)",
        "fct-type": "function",
        "title": "recvFrom"
      },
      "index": {
        "description": "Receive data from the socket The socket need not be in connected state Returns bytes address where bytes is ByteString representing the data received and address is SockAddr representing the address of the sending socket",
        "hierarchy": "Network Socket ByteString",
        "module": "Network.Socket.ByteString",
        "name": "recvFrom",
        "normalized": "Socket-\u003eInt-\u003eIO(ByteString,SockAddr)",
        "package": "network-bytestring",
        "partial": "From",
        "signature": "Socket-\u003eInt-\u003eIO(ByteString,SockAddr)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-bytestring/docs/Network-Socket-ByteString.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eSend data to the socket.  The socket must be connected to a\n remote socket.  Returns the number of bytes sent. Applications are\n responsible for ensuring that all data has been sent.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.ByteString",
        "fct-package": "network-bytestring",
        "fct-signature": "Socket-\u003e ByteString-\u003e IO Int",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "Send data to the socket The socket must be connected to remote socket Returns the number of bytes sent Applications are responsible for ensuring that all data has been sent",
        "hierarchy": "Network Socket ByteString",
        "module": "Network.Socket.ByteString",
        "name": "send",
        "normalized": "Socket-\u003eByteString-\u003eIO Int",
        "package": "network-bytestring",
        "partial": "",
        "signature": "Socket-\u003eByteString-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-bytestring/docs/Network-Socket-ByteString.html#v:sendAll",
      "description": {
        "fct-descr": "\u003cp\u003eSend data to the socket.  The socket must be connected to a\n remote socket.  Unlike \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e, this function continues to send data\n until either all data has been sent or an error occurs.  On error,\n an exception is raised, and there is no way to determine how much\n data, if any, was successfully sent.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.ByteString",
        "fct-package": "network-bytestring",
        "fct-signature": "Socket-\u003e ByteString-\u003e IO ()",
        "fct-type": "function",
        "title": "sendAll"
      },
      "index": {
        "description": "Send data to the socket The socket must be connected to remote socket Unlike send this function continues to send data until either all data has been sent or an error occurs On error an exception is raised and there is no way to determine how much data if any was successfully sent",
        "hierarchy": "Network Socket ByteString",
        "module": "Network.Socket.ByteString",
        "name": "sendAll",
        "normalized": "Socket-\u003eByteString-\u003eIO()",
        "package": "network-bytestring",
        "partial": "All",
        "signature": "Socket-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-bytestring/docs/Network-Socket-ByteString.html#v:sendAllTo",
      "description": {
        "fct-descr": "\u003cp\u003eSend data to the socket. The recipient can be specified\n explicitly, so the socket need not be in a connected state.  Unlike\n \u003ccode\u003e\u003ca\u003esendTo\u003c/a\u003e\u003c/code\u003e, this function continues to send data until either all\n data has been sent or an error occurs.  On error, an exception is\n raised, and there is no way to determine how much data, if any, was\n successfully sent.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.ByteString",
        "fct-package": "network-bytestring",
        "fct-signature": "Socket-\u003e ByteString-\u003e SockAddr-\u003e IO ()",
        "fct-type": "function",
        "title": "sendAllTo"
      },
      "index": {
        "description": "Send data to the socket The recipient can be specified explicitly so the socket need not be in connected state Unlike sendTo this function continues to send data until either all data has been sent or an error occurs On error an exception is raised and there is no way to determine how much data if any was successfully sent",
        "hierarchy": "Network Socket ByteString",
        "module": "Network.Socket.ByteString",
        "name": "sendAllTo",
        "normalized": "Socket-\u003eByteString-\u003eSockAddr-\u003eIO()",
        "package": "network-bytestring",
        "partial": "All To",
        "signature": "Socket-\u003eByteString-\u003eSockAddr-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-bytestring/docs/Network-Socket-ByteString.html#v:sendMany",
      "description": {
        "fct-descr": "\u003cp\u003eSend data to the socket.  The socket must be in a connected\n state.  The data is sent as if the parts have been concatenated.\n This function continues to send data until either all data has been\n sent or an error occurs.  On error, an exception is raised, and\n there is no way to determine how much data, if any, was\n successfully sent.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.ByteString",
        "fct-package": "network-bytestring",
        "fct-signature": "Socket-\u003e [ByteString]-\u003e IO ()",
        "fct-type": "function",
        "title": "sendMany"
      },
      "index": {
        "description": "Send data to the socket The socket must be in connected state The data is sent as if the parts have been concatenated This function continues to send data until either all data has been sent or an error occurs On error an exception is raised and there is no way to determine how much data if any was successfully sent",
        "hierarchy": "Network Socket ByteString",
        "module": "Network.Socket.ByteString",
        "name": "sendMany",
        "normalized": "Socket-\u003e[ByteString]-\u003eIO()",
        "package": "network-bytestring",
        "partial": "Many",
        "signature": "Socket-\u003e[ByteString]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-bytestring/docs/Network-Socket-ByteString.html#v:sendManyTo",
      "description": {
        "fct-descr": "\u003cp\u003eSend data to the socket.  The recipient can be specified\n explicitly, so the socket need not be in a connected state.  The\n data is sent as if the parts have been concatenated.  This function\n continues to send data until either all data has been sent or an\n error occurs.  On error, an exception is raised, and there is no\n way to determine how much data, if any, was successfully sent.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.ByteString",
        "fct-package": "network-bytestring",
        "fct-signature": "Socket-\u003e [ByteString]-\u003e SockAddr-\u003e IO ()",
        "fct-type": "function",
        "title": "sendManyTo"
      },
      "index": {
        "description": "Send data to the socket The recipient can be specified explicitly so the socket need not be in connected state The data is sent as if the parts have been concatenated This function continues to send data until either all data has been sent or an error occurs On error an exception is raised and there is no way to determine how much data if any was successfully sent",
        "hierarchy": "Network Socket ByteString",
        "module": "Network.Socket.ByteString",
        "name": "sendManyTo",
        "normalized": "Socket-\u003e[ByteString]-\u003eSockAddr-\u003eIO()",
        "package": "network-bytestring",
        "partial": "Many To",
        "signature": "Socket-\u003e[ByteString]-\u003eSockAddr-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-bytestring/docs/Network-Socket-ByteString.html#v:sendTo",
      "description": {
        "fct-descr": "\u003cp\u003eSend data to the socket.  The recipient can be specified\n explicitly, so the socket need not be in a connected state.\n Returns the number of bytes sent. Applications are responsible for\n ensuring that all data has been sent.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.ByteString",
        "fct-package": "network-bytestring",
        "fct-signature": "Socket-\u003e ByteString-\u003e SockAddr-\u003e IO Int",
        "fct-type": "function",
        "title": "sendTo"
      },
      "index": {
        "description": "Send data to the socket The recipient can be specified explicitly so the socket need not be in connected state Returns the number of bytes sent Applications are responsible for ensuring that all data has been sent",
        "hierarchy": "Network Socket ByteString",
        "module": "Network.Socket.ByteString",
        "name": "sendTo",
        "normalized": "Socket-\u003eByteString-\u003eSockAddr-\u003eIO Int",
        "package": "network-bytestring",
        "partial": "To",
        "signature": "Socket-\u003eByteString-\u003eSockAddr-\u003eIO Int"
      }
    }
  }
]