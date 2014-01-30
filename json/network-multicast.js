[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-multicast/docs/Network-Multicast.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ca\u003eNetwork.Multicast\u003c/a\u003e module is for sending UDP datagrams over multicast\n (class D) addresses.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Multicast",
        "fct-package": "network-multicast",
        "fct-signature": "module",
        "fct-source": "src/Network-Multicast.html",
        "fct-type": "module",
        "title": "Multicast"
      },
      "index": {
        "description": "The Network.Multicast module is for sending UDP datagrams over multicast class addresses",
        "hierarchy": "Network Multicast",
        "module": "Network.Multicast",
        "name": "Multicast",
        "normalized": "",
        "package": "network-multicast",
        "partial": "Multicast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-multicast/docs/Network-Multicast.html#t:LoopbackMode",
      "description": {
        "fct-module": "Network.Multicast",
        "fct-package": "network-multicast",
        "fct-signature": "type",
        "fct-source": "src/Network-Multicast.html#LoopbackMode",
        "fct-type": "type",
        "title": "LoopbackMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Multicast",
        "module": "Network.Multicast",
        "name": "LoopbackMode",
        "normalized": "",
        "package": "network-multicast",
        "partial": "Loopback Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-multicast/docs/Network-Multicast.html#t:TimeToLive",
      "description": {
        "fct-module": "Network.Multicast",
        "fct-package": "network-multicast",
        "fct-signature": "type",
        "fct-source": "src/Network-Multicast.html#TimeToLive",
        "fct-type": "type",
        "title": "TimeToLive"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Multicast",
        "module": "Network.Multicast",
        "name": "TimeToLive",
        "normalized": "",
        "package": "network-multicast",
        "partial": "Time To Live",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-multicast/docs/Network-Multicast.html#v:addMembership",
      "description": {
        "fct-descr": "\u003cp\u003eMake the socket listen on multicast datagrams sent by the specified \u003ccode\u003e\u003ca\u003eHostName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Multicast",
        "fct-package": "network-multicast",
        "fct-signature": "Socket -\u003e HostName -\u003e IO ()",
        "fct-source": "src/Network-Multicast.html#addMembership",
        "fct-type": "function",
        "title": "addMembership"
      },
      "index": {
        "description": "Make the socket listen on multicast datagrams sent by the specified HostName",
        "hierarchy": "Network Multicast",
        "module": "Network.Multicast",
        "name": "addMembership",
        "normalized": "Socket-\u003eHostName-\u003eIO()",
        "package": "network-multicast",
        "partial": "Membership",
        "signature": "Socket-\u003eHostName-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-multicast/docs/Network-Multicast.html#v:dropMembership",
      "description": {
        "fct-descr": "\u003cp\u003eStop the socket from listening on multicast datagrams sent by the specified \u003ccode\u003e\u003ca\u003eHostName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Multicast",
        "fct-package": "network-multicast",
        "fct-signature": "Socket -\u003e HostName -\u003e IO ()",
        "fct-source": "src/Network-Multicast.html#dropMembership",
        "fct-type": "function",
        "title": "dropMembership"
      },
      "index": {
        "description": "Stop the socket from listening on multicast datagrams sent by the specified HostName",
        "hierarchy": "Network Multicast",
        "module": "Network.Multicast",
        "name": "dropMembership",
        "normalized": "Socket-\u003eHostName-\u003eIO()",
        "package": "network-multicast",
        "partial": "Membership",
        "signature": "Socket-\u003eHostName-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-multicast/docs/Network-Multicast.html#v:enableLoopback",
      "description": {
        "fct-module": "Network.Multicast",
        "fct-package": "network-multicast",
        "fct-signature": "LoopbackMode",
        "fct-source": "src/Network-Multicast.html#enableLoopback",
        "fct-type": "function",
        "title": "enableLoopback"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Multicast",
        "module": "Network.Multicast",
        "name": "enableLoopback",
        "normalized": "",
        "package": "network-multicast",
        "partial": "Loopback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-multicast/docs/Network-Multicast.html#v:multicastReceiver",
      "description": {
        "fct-descr": "\u003cp\u003eCalling \u003ccode\u003e\u003ca\u003emulticastReceiver\u003c/a\u003e\u003c/code\u003e creates and binds a UDP socket for listening\n multicast datagrams on the specified host and port.\n\u003c/p\u003e\u003cp\u003eMinimal example:\n\u003c/p\u003e\u003cpre\u003e import Network.Socket\n import Network.Multicast\n main = withSocketsDo $ do\n     sock \u003c- multicastReceiver \"224.0.0.99\" 9999\n     let loop = do\n         (msg, _, addr) \u003c- recvFrom sock 1024\n         print (msg, addr) in loop\n\u003c/pre\u003e",
        "fct-module": "Network.Multicast",
        "fct-package": "network-multicast",
        "fct-signature": "HostName -\u003e PortNumber -\u003e IO Socket",
        "fct-source": "src/Network-Multicast.html#multicastReceiver",
        "fct-type": "function",
        "title": "multicastReceiver"
      },
      "index": {
        "description": "Calling multicastReceiver creates and binds UDP socket for listening multicast datagrams on the specified host and port Minimal example import Network.Socket import Network.Multicast main withSocketsDo do sock multicastReceiver let loop do msg addr recvFrom sock print msg addr in loop",
        "hierarchy": "Network Multicast",
        "module": "Network.Multicast",
        "name": "multicastReceiver",
        "normalized": "HostName-\u003ePortNumber-\u003eIO Socket",
        "package": "network-multicast",
        "partial": "Receiver",
        "signature": "HostName-\u003ePortNumber-\u003eIO Socket"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-multicast/docs/Network-Multicast.html#v:multicastSender",
      "description": {
        "fct-descr": "\u003cp\u003eCalling \u003ccode\u003e\u003ca\u003emulticastSender\u003c/a\u003e\u003c/code\u003e creates a client side UDP socket for sending\n multicast datagrams to the specified host and port.\n\u003c/p\u003e\u003cp\u003eMinimal example:\n\u003c/p\u003e\u003cpre\u003e import Network.Socket\n import Network.Multicast\n main = withSocketsDo $ do\n     (sock, addr) \u003c- multicastSender \"224.0.0.99\" 9999\n     let loop = do\n         sendTo sock \"Hello, world\" addr\n         loop in loop\n\u003c/pre\u003e",
        "fct-module": "Network.Multicast",
        "fct-package": "network-multicast",
        "fct-signature": "HostName -\u003e PortNumber -\u003e IO (Socket, SockAddr)",
        "fct-source": "src/Network-Multicast.html#multicastSender",
        "fct-type": "function",
        "title": "multicastSender"
      },
      "index": {
        "description": "Calling multicastSender creates client side UDP socket for sending multicast datagrams to the specified host and port Minimal example import Network.Socket import Network.Multicast main withSocketsDo do sock addr multicastSender let loop do sendTo sock Hello world addr loop in loop",
        "hierarchy": "Network Multicast",
        "module": "Network.Multicast",
        "name": "multicastSender",
        "normalized": "HostName-\u003ePortNumber-\u003eIO(Socket,SockAddr)",
        "package": "network-multicast",
        "partial": "Sender",
        "signature": "HostName-\u003ePortNumber-\u003eIO(Socket,SockAddr)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-multicast/docs/Network-Multicast.html#v:noLoopback",
      "description": {
        "fct-module": "Network.Multicast",
        "fct-package": "network-multicast",
        "fct-signature": "LoopbackMode",
        "fct-source": "src/Network-Multicast.html#noLoopback",
        "fct-type": "function",
        "title": "noLoopback"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Multicast",
        "module": "Network.Multicast",
        "name": "noLoopback",
        "normalized": "",
        "package": "network-multicast",
        "partial": "Loopback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-multicast/docs/Network-Multicast.html#v:setInterface",
      "description": {
        "fct-descr": "\u003cp\u003eSet the outgoing interface address of the multicast.\n\u003c/p\u003e",
        "fct-module": "Network.Multicast",
        "fct-package": "network-multicast",
        "fct-signature": "Socket -\u003e HostName -\u003e IO ()",
        "fct-source": "src/Network-Multicast.html#setInterface",
        "fct-type": "function",
        "title": "setInterface"
      },
      "index": {
        "description": "Set the outgoing interface address of the multicast",
        "hierarchy": "Network Multicast",
        "module": "Network.Multicast",
        "name": "setInterface",
        "normalized": "Socket-\u003eHostName-\u003eIO()",
        "package": "network-multicast",
        "partial": "Interface",
        "signature": "Socket-\u003eHostName-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-multicast/docs/Network-Multicast.html#v:setLoopbackMode",
      "description": {
        "fct-descr": "\u003cp\u003eEnable or disable the loopback mode on a socket created by \u003ccode\u003e\u003ca\u003emulticastSender\u003c/a\u003e\u003c/code\u003e.\n Loopback is enabled by default; disabling it may improve performance a little bit.\n\u003c/p\u003e",
        "fct-module": "Network.Multicast",
        "fct-package": "network-multicast",
        "fct-signature": "Socket -\u003e LoopbackMode -\u003e IO ()",
        "fct-source": "src/Network-Multicast.html#setLoopbackMode",
        "fct-type": "function",
        "title": "setLoopbackMode"
      },
      "index": {
        "description": "Enable or disable the loopback mode on socket created by multicastSender Loopback is enabled by default disabling it may improve performance little bit",
        "hierarchy": "Network Multicast",
        "module": "Network.Multicast",
        "name": "setLoopbackMode",
        "normalized": "Socket-\u003eLoopbackMode-\u003eIO()",
        "package": "network-multicast",
        "partial": "Loopback Mode",
        "signature": "Socket-\u003eLoopbackMode-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-multicast/docs/Network-Multicast.html#v:setTimeToLive",
      "description": {
        "fct-descr": "\u003cp\u003eSet the Time-to-Live of the multicast.\n\u003c/p\u003e",
        "fct-module": "Network.Multicast",
        "fct-package": "network-multicast",
        "fct-signature": "Socket -\u003e TimeToLive -\u003e IO ()",
        "fct-source": "src/Network-Multicast.html#setTimeToLive",
        "fct-type": "function",
        "title": "setTimeToLive"
      },
      "index": {
        "description": "Set the Time-to-Live of the multicast",
        "hierarchy": "Network Multicast",
        "module": "Network.Multicast",
        "name": "setTimeToLive",
        "normalized": "Socket-\u003eTimeToLive-\u003eIO()",
        "package": "network-multicast",
        "partial": "Time To Live",
        "signature": "Socket-\u003eTimeToLive-\u003eIO()"
      }
    }
  }
]