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
        "word": "local-address"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package includes small functions to get local interface address.\n Following method is traditional technique to getSockName without sending packet.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Socket.LocalAddress",
          "name": "LocalAddress",
          "package": "local-address",
          "source": "src/Network-Socket-LocalAddress.html",
          "type": "module"
        },
        "index": {
          "description": "This package includes small functions to get local interface address Following method is traditional technique to getSockName without sending packet",
          "hierarchy": "Network Socket LocalAddress",
          "module": "Network.Socket.LocalAddress",
          "name": "LocalAddress",
          "package": "local-address",
          "partial": "Local Address",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/local-address/docs/Network-Socket-LocalAddress.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet IPv4 local address corresponding to remote IPv4 address \n     without sending any packet. \n\u003c/p\u003e",
          "module": "Network.Socket.LocalAddress",
          "name": "localAddress",
          "package": "local-address",
          "signature": "HostAddress -\u003e IO (Maybe HostAddress)",
          "source": "src/Network-Socket-LocalAddress.html#localAddress",
          "type": "function"
        },
        "index": {
          "description": "Get IPv4 local address corresponding to remote IPv4 address without sending any packet",
          "hierarchy": "Network Socket LocalAddress",
          "module": "Network.Socket.LocalAddress",
          "name": "localAddress",
          "normalized": "HostAddress-\u003eIO(Maybe HostAddress)",
          "package": "local-address",
          "partial": "Address",
          "signature": "HostAddress-\u003eIO(Maybe HostAddress)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-address/docs/Network-Socket-LocalAddress.html#v:localAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet IPv4 local address string corresponding to \n     remote IPv4 address string without sending any packet. \n\u003c/p\u003e",
          "module": "Network.Socket.LocalAddress",
          "name": "localAddressString",
          "package": "local-address",
          "signature": "String -\u003e IO (Maybe String)",
          "source": "src/Network-Socket-LocalAddress.html#localAddressString",
          "type": "function"
        },
        "index": {
          "description": "Get IPv4 local address string corresponding to remote IPv4 address string without sending any packet",
          "hierarchy": "Network Socket LocalAddress",
          "module": "Network.Socket.LocalAddress",
          "name": "localAddressString",
          "normalized": "String-\u003eIO(Maybe String)",
          "package": "local-address",
          "partial": "Address String",
          "signature": "String-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-address/docs/Network-Socket-LocalAddress.html#v:localAddressString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet local address corresponding to remote address \n     without sending any packet. \n\u003c/p\u003e",
          "module": "Network.Socket.LocalAddress",
          "name": "localSockAddr",
          "package": "local-address",
          "signature": "SockAddr -\u003e IO SockAddr",
          "source": "src/Network-Socket-LocalAddress.html#localSockAddr",
          "type": "function"
        },
        "index": {
          "description": "Get local address corresponding to remote address without sending any packet",
          "hierarchy": "Network Socket LocalAddress",
          "module": "Network.Socket.LocalAddress",
          "name": "localSockAddr",
          "normalized": "SockAddr-\u003eIO SockAddr",
          "package": "local-address",
          "partial": "Sock Addr",
          "signature": "SockAddr-\u003eIO SockAddr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-address/docs/Network-Socket-LocalAddress.html#v:localSockAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet local address and datagram socket corresponding to remote address\n     without sending any packet. \n\u003c/p\u003e",
          "module": "Network.Socket.LocalAddress",
          "name": "localSockAddr'",
          "package": "local-address",
          "signature": "SockAddr -\u003e IO (SockAddr, Socket)",
          "source": "src/Network-Socket-LocalAddress.html#localSockAddr%27",
          "type": "function"
        },
        "index": {
          "description": "Get local address and datagram socket corresponding to remote address without sending any packet",
          "hierarchy": "Network Socket LocalAddress",
          "module": "Network.Socket.LocalAddress",
          "name": "localSockAddr'",
          "normalized": "SockAddr-\u003eIO(SockAddr,Socket)",
          "package": "local-address",
          "partial": "Sock Addr'",
          "signature": "SockAddr-\u003eIO(SockAddr,Socket)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-address/docs/Network-Socket-LocalAddress.html#v:localSockAddr-39-"
      }
    }
  ]
]