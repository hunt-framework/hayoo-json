[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-enumerator/docs/Network-Socket-Enumerator.html#",
      "description": {
        "fct-module": "Network.Socket.Enumerator",
        "fct-package": "network-enumerator",
        "fct-signature": "module",
        "fct-source": "src/Network-Socket-Enumerator.html",
        "fct-type": "module",
        "title": "Enumerator"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Socket Enumerator",
        "module": "Network.Socket.Enumerator",
        "name": "Enumerator",
        "normalized": "",
        "package": "network-enumerator",
        "partial": "Enumerator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-enumerator/docs/Network-Socket-Enumerator.html#v:enumSocket",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerate binary data from a \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e, using \u003ccode\u003e\u003ca\u003erecv\u003c/a\u003e\u003c/code\u003e. The socket\n must be connected.\n\u003c/p\u003e\u003cp\u003eThe buffer size should be a small power of 2, such as 4096.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.Enumerator",
        "fct-package": "network-enumerator",
        "fct-signature": "Integer-\u003e Socket-\u003e Enumerator ByteString m b",
        "fct-type": "function",
        "title": "enumSocket"
      },
      "index": {
        "description": "Enumerate binary data from Socket using recv The socket must be connected The buffer size should be small power of such as",
        "hierarchy": "Network Socket Enumerator",
        "module": "Network.Socket.Enumerator",
        "name": "enumSocket",
        "normalized": "Integer-\u003eSocket-\u003eEnumerator ByteString a b",
        "package": "network-enumerator",
        "partial": "Socket",
        "signature": "Integer-\u003eSocket-\u003eEnumerator ByteString m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-enumerator/docs/Network-Socket-Enumerator.html#v:enumSocketFrom",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerate binary data from a \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e, using \u003ccode\u003e\u003ca\u003erecvFrom\u003c/a\u003e\u003c/code\u003e. The socket\n does not have to be connected. Each chunk of data received will be paired\n with its address.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.Enumerator",
        "fct-package": "network-enumerator",
        "fct-signature": "Integer-\u003e Socket-\u003e Enumerator (ByteString, SockAddr) m b",
        "fct-type": "function",
        "title": "enumSocketFrom"
      },
      "index": {
        "description": "Enumerate binary data from Socket using recvFrom The socket does not have to be connected Each chunk of data received will be paired with its address",
        "hierarchy": "Network Socket Enumerator",
        "module": "Network.Socket.Enumerator",
        "name": "enumSocketFrom",
        "normalized": "Integer-\u003eSocket-\u003eEnumerator(ByteString,SockAddr)a b",
        "package": "network-enumerator",
        "partial": "Socket From",
        "signature": "Integer-\u003eSocket-\u003eEnumerator(ByteString,SockAddr)m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-enumerator/docs/Network-Socket-Enumerator.html#v:enumSocketTimed",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerate binary data from a \u003ccode\u003eSocket\u003c/code\u003e, using \u003ccode\u003e\u003ca\u003erecv\u003c/a\u003e\u003c/code\u003e. The socket must\n be connected.\n\u003c/p\u003e\u003cp\u003eThe buffer size should be a small power of 2, such as 4096.\n\u003c/p\u003e\u003cp\u003eIf any call to \u003ccode\u003e\u003ca\u003erecv\u003c/a\u003e\u003c/code\u003e takes longer than the timeout, \u003ccode\u003e\u003ca\u003eenumSocketTimed\u003c/a\u003e\u003c/code\u003e\n will throw an error. To add a timeout for the entire session, wrap the\n call to \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003etimeout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.1.2\n\u003c/p\u003e",
        "fct-module": "Network.Socket.Enumerator",
        "fct-package": "network-enumerator",
        "fct-signature": "Integer-\u003e Integer-\u003e Socket-\u003e Enumerator ByteString m b",
        "fct-type": "function",
        "title": "enumSocketTimed"
      },
      "index": {
        "description": "Enumerate binary data from Socket using recv The socket must be connected The buffer size should be small power of such as If any call to recv takes longer than the timeout enumSocketTimed will throw an error To add timeout for the entire session wrap the call to run in timeout Since",
        "hierarchy": "Network Socket Enumerator",
        "module": "Network.Socket.Enumerator",
        "name": "enumSocketTimed",
        "normalized": "Integer-\u003eInteger-\u003eSocket-\u003eEnumerator ByteString a b",
        "package": "network-enumerator",
        "partial": "Socket Timed",
        "signature": "Integer-\u003eInteger-\u003eSocket-\u003eEnumerator ByteString m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-enumerator/docs/Network-Socket-Enumerator.html#v:iterSocket",
      "description": {
        "fct-descr": "\u003cp\u003eWrite data to a \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e, using \u003ccode\u003e\u003ca\u003esendMany\u003c/a\u003e\u003c/code\u003e. The socket must be connected.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.Enumerator",
        "fct-package": "network-enumerator",
        "fct-signature": "Socket -\u003e Iteratee ByteString m ()",
        "fct-source": "src/Network-Socket-Enumerator.html#iterSocket",
        "fct-type": "function",
        "title": "iterSocket"
      },
      "index": {
        "description": "Write data to Socket using sendMany The socket must be connected",
        "hierarchy": "Network Socket Enumerator",
        "module": "Network.Socket.Enumerator",
        "name": "iterSocket",
        "normalized": "Socket-\u003eIteratee ByteString a()",
        "package": "network-enumerator",
        "partial": "Socket",
        "signature": "Socket-\u003eIteratee ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-enumerator/docs/Network-Socket-Enumerator.html#v:iterSocketTimed",
      "description": {
        "fct-descr": "\u003cp\u003eWrite data to a \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e, using \u003ccode\u003e\u003ca\u003esendMany\u003c/a\u003e\u003c/code\u003e. The socket must be connected.\n\u003c/p\u003e\u003cp\u003eIf any call to \u003ccode\u003e\u003ca\u003esendMany\u003c/a\u003e\u003c/code\u003e takes longer than the timeout, \u003ccode\u003e\u003ca\u003eiterSocketTimed\u003c/a\u003e\u003c/code\u003e\n will throw an error. To add a timeout for the entire session, wrap the\n call to \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003etimeout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.1.2\n\u003c/p\u003e",
        "fct-module": "Network.Socket.Enumerator",
        "fct-package": "network-enumerator",
        "fct-signature": "Integer-\u003e Socket-\u003e Iteratee ByteString m ()",
        "fct-type": "function",
        "title": "iterSocketTimed"
      },
      "index": {
        "description": "Write data to Socket using sendMany The socket must be connected If any call to sendMany takes longer than the timeout iterSocketTimed will throw an error To add timeout for the entire session wrap the call to run in timeout Since",
        "hierarchy": "Network Socket Enumerator",
        "module": "Network.Socket.Enumerator",
        "name": "iterSocketTimed",
        "normalized": "Integer-\u003eSocket-\u003eIteratee ByteString a()",
        "package": "network-enumerator",
        "partial": "Socket Timed",
        "signature": "Integer-\u003eSocket-\u003eIteratee ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-enumerator/docs/Network-Socket-Enumerator.html#v:iterSocketTo",
      "description": {
        "fct-descr": "\u003cp\u003eWrite data to a \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e, using \u003ccode\u003e\u003ca\u003esendManyTo\u003c/a\u003e\u003c/code\u003e. The socket does not\n have to be connected.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.Enumerator",
        "fct-package": "network-enumerator",
        "fct-signature": "Socket -\u003e SockAddr -\u003e Iteratee ByteString m ()",
        "fct-source": "src/Network-Socket-Enumerator.html#iterSocketTo",
        "fct-type": "function",
        "title": "iterSocketTo"
      },
      "index": {
        "description": "Write data to Socket using sendManyTo The socket does not have to be connected",
        "hierarchy": "Network Socket Enumerator",
        "module": "Network.Socket.Enumerator",
        "name": "iterSocketTo",
        "normalized": "Socket-\u003eSockAddr-\u003eIteratee ByteString a()",
        "package": "network-enumerator",
        "partial": "Socket To",
        "signature": "Socket-\u003eSockAddr-\u003eIteratee ByteString m()"
      }
    }
  }
]