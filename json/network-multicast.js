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
        "word": "network-multicast"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ca\u003eNetwork.Multicast\u003c/a\u003e module is for sending UDP datagrams over multicast\n (class D) addresses.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Multicast",
          "name": "Multicast",
          "package": "network-multicast",
          "source": "src/Network-Multicast.html",
          "type": "module"
        },
        "index": {
          "description": "The Network.Multicast module is for sending UDP datagrams over multicast class addresses",
          "hierarchy": "Network Multicast",
          "module": "Network.Multicast",
          "name": "Multicast",
          "package": "network-multicast",
          "partial": "Multicast",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-multicast/docs/Network-Multicast.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Multicast",
          "name": "LoopbackMode",
          "package": "network-multicast",
          "source": "src/Network-Multicast.html#LoopbackMode",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Multicast",
          "module": "Network.Multicast",
          "name": "LoopbackMode",
          "package": "network-multicast",
          "partial": "Loopback Mode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-multicast/docs/Network-Multicast.html#t:LoopbackMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Multicast",
          "name": "TimeToLive",
          "package": "network-multicast",
          "source": "src/Network-Multicast.html#TimeToLive",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Multicast",
          "module": "Network.Multicast",
          "name": "TimeToLive",
          "package": "network-multicast",
          "partial": "Time To Live",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-multicast/docs/Network-Multicast.html#t:TimeToLive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake the socket listen on multicast datagrams sent by the specified \u003ccode\u003e\u003ca\u003eHostName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Multicast",
          "name": "addMembership",
          "package": "network-multicast",
          "signature": "Socket -\u003e HostName -\u003e IO ()",
          "source": "src/Network-Multicast.html#addMembership",
          "type": "function"
        },
        "index": {
          "description": "Make the socket listen on multicast datagrams sent by the specified HostName",
          "hierarchy": "Network Multicast",
          "module": "Network.Multicast",
          "name": "addMembership",
          "normalized": "Socket-\u003eHostName-\u003eIO()",
          "package": "network-multicast",
          "partial": "Membership",
          "signature": "Socket-\u003eHostName-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-multicast/docs/Network-Multicast.html#v:addMembership"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop the socket from listening on multicast datagrams sent by the specified \u003ccode\u003e\u003ca\u003eHostName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Multicast",
          "name": "dropMembership",
          "package": "network-multicast",
          "signature": "Socket -\u003e HostName -\u003e IO ()",
          "source": "src/Network-Multicast.html#dropMembership",
          "type": "function"
        },
        "index": {
          "description": "Stop the socket from listening on multicast datagrams sent by the specified HostName",
          "hierarchy": "Network Multicast",
          "module": "Network.Multicast",
          "name": "dropMembership",
          "normalized": "Socket-\u003eHostName-\u003eIO()",
          "package": "network-multicast",
          "partial": "Membership",
          "signature": "Socket-\u003eHostName-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-multicast/docs/Network-Multicast.html#v:dropMembership"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Multicast",
          "name": "enableLoopback",
          "package": "network-multicast",
          "signature": "LoopbackMode",
          "source": "src/Network-Multicast.html#enableLoopback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Multicast",
          "module": "Network.Multicast",
          "name": "enableLoopback",
          "package": "network-multicast",
          "partial": "Loopback",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-multicast/docs/Network-Multicast.html#v:enableLoopback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalling \u003ccode\u003e\u003ca\u003emulticastReceiver\u003c/a\u003e\u003c/code\u003e creates and binds a UDP socket for listening\n multicast datagrams on the specified host and port.\n\u003c/p\u003e\u003cp\u003eMinimal example:\n\u003c/p\u003e\u003cpre\u003e import Network.Socket\n import Network.Multicast\n main = withSocketsDo $ do\n     sock \u003c- multicastReceiver \"224.0.0.99\" 9999\n     let loop = do\n         (msg, _, addr) \u003c- recvFrom sock 1024\n         print (msg, addr) in loop\n\u003c/pre\u003e",
          "module": "Network.Multicast",
          "name": "multicastReceiver",
          "package": "network-multicast",
          "signature": "HostName -\u003e PortNumber -\u003e IO Socket",
          "source": "src/Network-Multicast.html#multicastReceiver",
          "type": "function"
        },
        "index": {
          "description": "Calling multicastReceiver creates and binds UDP socket for listening multicast datagrams on the specified host and port Minimal example import Network.Socket import Network.Multicast main withSocketsDo do sock multicastReceiver let loop do msg addr recvFrom sock print msg addr in loop",
          "hierarchy": "Network Multicast",
          "module": "Network.Multicast",
          "name": "multicastReceiver",
          "normalized": "HostName-\u003ePortNumber-\u003eIO Socket",
          "package": "network-multicast",
          "partial": "Receiver",
          "signature": "HostName-\u003ePortNumber-\u003eIO Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-multicast/docs/Network-Multicast.html#v:multicastReceiver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalling \u003ccode\u003e\u003ca\u003emulticastSender\u003c/a\u003e\u003c/code\u003e creates a client side UDP socket for sending\n multicast datagrams to the specified host and port.\n\u003c/p\u003e\u003cp\u003eMinimal example:\n\u003c/p\u003e\u003cpre\u003e import Network.Socket\n import Network.Multicast\n main = withSocketsDo $ do\n     (sock, addr) \u003c- multicastSender \"224.0.0.99\" 9999\n     let loop = do\n         sendTo sock \"Hello, world\" addr\n         loop in loop\n\u003c/pre\u003e",
          "module": "Network.Multicast",
          "name": "multicastSender",
          "package": "network-multicast",
          "signature": "HostName -\u003e PortNumber -\u003e IO (Socket, SockAddr)",
          "source": "src/Network-Multicast.html#multicastSender",
          "type": "function"
        },
        "index": {
          "description": "Calling multicastSender creates client side UDP socket for sending multicast datagrams to the specified host and port Minimal example import Network.Socket import Network.Multicast main withSocketsDo do sock addr multicastSender let loop do sendTo sock Hello world addr loop in loop",
          "hierarchy": "Network Multicast",
          "module": "Network.Multicast",
          "name": "multicastSender",
          "normalized": "HostName-\u003ePortNumber-\u003eIO(Socket,SockAddr)",
          "package": "network-multicast",
          "partial": "Sender",
          "signature": "HostName-\u003ePortNumber-\u003eIO(Socket,SockAddr)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-multicast/docs/Network-Multicast.html#v:multicastSender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Multicast",
          "name": "noLoopback",
          "package": "network-multicast",
          "signature": "LoopbackMode",
          "source": "src/Network-Multicast.html#noLoopback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Multicast",
          "module": "Network.Multicast",
          "name": "noLoopback",
          "package": "network-multicast",
          "partial": "Loopback",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-multicast/docs/Network-Multicast.html#v:noLoopback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the outgoing interface address of the multicast.\n\u003c/p\u003e",
          "module": "Network.Multicast",
          "name": "setInterface",
          "package": "network-multicast",
          "signature": "Socket -\u003e HostName -\u003e IO ()",
          "source": "src/Network-Multicast.html#setInterface",
          "type": "function"
        },
        "index": {
          "description": "Set the outgoing interface address of the multicast",
          "hierarchy": "Network Multicast",
          "module": "Network.Multicast",
          "name": "setInterface",
          "normalized": "Socket-\u003eHostName-\u003eIO()",
          "package": "network-multicast",
          "partial": "Interface",
          "signature": "Socket-\u003eHostName-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-multicast/docs/Network-Multicast.html#v:setInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnable or disable the loopback mode on a socket created by \u003ccode\u003e\u003ca\u003emulticastSender\u003c/a\u003e\u003c/code\u003e.\n Loopback is enabled by default; disabling it may improve performance a little bit.\n\u003c/p\u003e",
          "module": "Network.Multicast",
          "name": "setLoopbackMode",
          "package": "network-multicast",
          "signature": "Socket -\u003e LoopbackMode -\u003e IO ()",
          "source": "src/Network-Multicast.html#setLoopbackMode",
          "type": "function"
        },
        "index": {
          "description": "Enable or disable the loopback mode on socket created by multicastSender Loopback is enabled by default disabling it may improve performance little bit",
          "hierarchy": "Network Multicast",
          "module": "Network.Multicast",
          "name": "setLoopbackMode",
          "normalized": "Socket-\u003eLoopbackMode-\u003eIO()",
          "package": "network-multicast",
          "partial": "Loopback Mode",
          "signature": "Socket-\u003eLoopbackMode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-multicast/docs/Network-Multicast.html#v:setLoopbackMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the Time-to-Live of the multicast.\n\u003c/p\u003e",
          "module": "Network.Multicast",
          "name": "setTimeToLive",
          "package": "network-multicast",
          "signature": "Socket -\u003e TimeToLive -\u003e IO ()",
          "source": "src/Network-Multicast.html#setTimeToLive",
          "type": "function"
        },
        "index": {
          "description": "Set the Time-to-Live of the multicast",
          "hierarchy": "Network Multicast",
          "module": "Network.Multicast",
          "name": "setTimeToLive",
          "normalized": "Socket-\u003eTimeToLive-\u003eIO()",
          "package": "network-multicast",
          "partial": "Time To Live",
          "signature": "Socket-\u003eTimeToLive-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-multicast/docs/Network-Multicast.html#v:setTimeToLive"
      }
    }
  ]
]