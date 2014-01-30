[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e0MQ haskell binding. The API closely follows the C-API of 0MQ with\n the main difference that sockets are typed.\n The documentation of the individual socket types is copied from\n 0MQ's man pages authored by Martin Sustrik. For details please\n refer to http:\u003cem/\u003eapi.zeromq.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "module",
        "fct-source": "src/System-ZMQ.html",
        "fct-type": "module",
        "title": "ZMQ"
      },
      "index": {
        "description": "MQ haskell binding The API closely follows the C-API of MQ with the main difference that sockets are typed The documentation of the individual socket types is copied from MQ man pages authored by Martin Sustrik For details please refer to http api.zeromq.org",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "ZMQ",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "ZMQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Context",
      "description": {
        "fct-descr": "\u003cp\u003eA 0MQ context representation.\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "data",
        "fct-source": "src/System-ZMQ-Internal.html#Context",
        "fct-type": "data",
        "title": "Context"
      },
      "index": {
        "description": "MQ context representation",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Context",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Dealer",
      "description": {
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "data",
        "fct-source": "src/System-ZMQ.html#Dealer",
        "fct-type": "data",
        "title": "Dealer"
      },
      "index": {
        "description": "",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Dealer",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Dealer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Device",
      "description": {
        "fct-descr": "\u003cp\u003eType representing ZeroMQ devices, as used with zmq_device\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "data",
        "fct-source": "src/System-ZMQ.html#Device",
        "fct-type": "data",
        "title": "Device"
      },
      "index": {
        "description": "Type representing ZeroMQ devices as used with zmq device",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Device",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Device",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Down",
      "description": {
        "fct-descr": "\u003cp\u003eSocket to send messages down stream. Messages are load-balanced\n among all the connected peers. Send function is not implemented for\n this socket type. \u003cem\u003eCompatible peer sockets\u003c/em\u003e: \u003ccode\u003e\u003ca\u003eUp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "data",
        "fct-source": "src/System-ZMQ.html#Down",
        "fct-type": "data",
        "title": "Down"
      },
      "index": {
        "description": "Socket to send messages down stream Messages are load-balanced among all the connected peers Send function is not implemented for this socket type Compatible peer sockets Up",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Down",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Flag",
      "description": {
        "fct-descr": "\u003cp\u003eFlags to apply on send operations (cf. man zmq_send)\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eNoBlock\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Send operation should be performed in non-blocking mode.\n If it cannot be performed immediatley an error will be thrown (errno\n is set to EAGAIN).\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "data",
        "fct-source": "src/System-ZMQ-Internal.html#Flag",
        "fct-type": "data",
        "title": "Flag"
      },
      "index": {
        "description": "Flags to apply on send operations cf man zmq send NoBlock Send operation should be performed in non-blocking mode If it cannot be performed immediatley an error will be thrown errno is set to EAGAIN",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Flag",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Flag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Pair",
      "description": {
        "fct-descr": "\u003cp\u003eSocket to communicate with a single peer. Allows for only a\n single connect or a single bind. There's no message routing\n or message filtering involved. \u003cem\u003eCompatible peer sockets\u003c/em\u003e: \u003ccode\u003e\u003ca\u003ePair\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "data",
        "fct-source": "src/System-ZMQ.html#Pair",
        "fct-type": "data",
        "title": "Pair"
      },
      "index": {
        "description": "Socket to communicate with single peer Allows for only single connect or single bind There no message routing or message filtering involved Compatible peer sockets Pair",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Pair",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Poll",
      "description": {
        "fct-descr": "\u003cp\u003eType representing a descriptor, poll is waiting for\n (either a 0MQ socket or a file descriptor) plus the type\n of event to wait for.\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "data",
        "fct-source": "src/System-ZMQ.html#Poll",
        "fct-type": "data",
        "title": "Poll"
      },
      "index": {
        "description": "Type representing descriptor poll is waiting for either MQ socket or file descriptor plus the type of event to wait for",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Poll",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Poll",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:PollEvent",
      "description": {
        "fct-descr": "\u003cp\u003eThe events to wait for in poll (cf. man zmq_poll)\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "data",
        "fct-source": "src/System-ZMQ.html#PollEvent",
        "fct-type": "data",
        "title": "PollEvent"
      },
      "index": {
        "description": "The events to wait for in poll cf man zmq poll",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "PollEvent",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Poll Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Pub",
      "description": {
        "fct-descr": "\u003cp\u003eSocket to distribute data. \u003ccode\u003e\u003ca\u003ereceive\u003c/a\u003e\u003c/code\u003e function is not\n implemented for this socket type. Messages are distributed in\n fanout fashion to all the peers. \u003cem\u003eCompatible peer sockets\u003c/em\u003e: \u003ccode\u003e\u003ca\u003eSub\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "data",
        "fct-source": "src/System-ZMQ.html#Pub",
        "fct-type": "data",
        "title": "Pub"
      },
      "index": {
        "description": "Socket to distribute data receive function is not implemented for this socket type Messages are distributed in fanout fashion to all the peers Compatible peer sockets Sub",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Pub",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Pub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Pull",
      "description": {
        "fct-descr": "\u003cp\u003eA socket of type Pull is used by a pipeline node to receive\n messages from upstream pipeline nodes. Messages are fair-queued from\n among all connected upstream nodes. The zmq_send() function is not\n implemented for this socket type.\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "data",
        "fct-source": "src/System-ZMQ.html#Pull",
        "fct-type": "data",
        "title": "Pull"
      },
      "index": {
        "description": "socket of type Pull is used by pipeline node to receive messages from upstream pipeline nodes Messages are fair-queued from among all connected upstream nodes The zmq send function is not implemented for this socket type",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Pull",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Pull",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Push",
      "description": {
        "fct-descr": "\u003cp\u003eA socket of type Push is used by a pipeline node to send messages\n to downstream pipeline nodes. Messages are load-balanced to all connected\n downstream nodes. The zmq_recv() function is not implemented for this\n socket type.\n\u003c/p\u003e\u003cp\u003eWhen a Push socket enters an exceptional state due to having reached\n the high water mark for all downstream nodes, or if there are no\n downstream nodes at all, then any zmq_send(3) operations on the socket\n shall block until the exceptional state ends or at least one downstream\n node becomes available for sending; messages are not discarded.\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "data",
        "fct-source": "src/System-ZMQ.html#Push",
        "fct-type": "data",
        "title": "Push"
      },
      "index": {
        "description": "socket of type Push is used by pipeline node to send messages to downstream pipeline nodes Messages are load-balanced to all connected downstream nodes The zmq recv function is not implemented for this socket type When Push socket enters an exceptional state due to having reached the high water mark for all downstream nodes or if there are no downstream nodes at all then any zmq send operations on the socket shall block until the exceptional state ends or at least one downstream node becomes available for sending messages are not discarded",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Push",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Push",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Rep",
      "description": {
        "fct-descr": "\u003cp\u003eSocket to receive requests and send replies. This socket type\n allows only an alternated sequence of receive's and send's. Each\n send is routed to the peer that issued the last received request.\n \u003cem\u003eCompatible peer sockets\u003c/em\u003e: \u003ccode\u003e\u003ca\u003eReq\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eXReq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "data",
        "fct-source": "src/System-ZMQ.html#Rep",
        "fct-type": "data",
        "title": "Rep"
      },
      "index": {
        "description": "Socket to receive requests and send replies This socket type allows only an alternated sequence of receive and send Each send is routed to the peer that issued the last received request Compatible peer sockets Req XReq",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Rep",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Rep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Req",
      "description": {
        "fct-descr": "\u003cp\u003eSocket to send requests and receive replies. Requests are\n load-balanced among all the peers. This socket type allows only an\n alternated sequence of send's and recv's.\n \u003cem\u003eCompatible peer sockets\u003c/em\u003e: \u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eXrep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "data",
        "fct-source": "src/System-ZMQ.html#Req",
        "fct-type": "data",
        "title": "Req"
      },
      "index": {
        "description": "Socket to send requests and receive replies Requests are load-balanced among all the peers This socket type allows only an alternated sequence of send and recv Compatible peer sockets Rep Xrep",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Req",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Req",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Router",
      "description": {
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "data",
        "fct-source": "src/System-ZMQ.html#Router",
        "fct-type": "data",
        "title": "Router"
      },
      "index": {
        "description": "",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Router",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Router",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:SType",
      "description": {
        "fct-descr": "\u003cp\u003eSocket types.\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "class",
        "fct-source": "src/System-ZMQ.html#SType",
        "fct-type": "class",
        "title": "SType"
      },
      "index": {
        "description": "Socket types",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "SType",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "SType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Size",
      "description": {
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "type",
        "fct-source": "src/System-ZMQ-Internal.html#Size",
        "fct-type": "type",
        "title": "Size"
      },
      "index": {
        "description": "",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Size",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Socket",
      "description": {
        "fct-descr": "\u003cp\u003eA 0MQ Socket.\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "data",
        "fct-source": "src/System-ZMQ-Internal.html#Socket",
        "fct-type": "data",
        "title": "Socket"
      },
      "index": {
        "description": "MQ Socket",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Socket",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Socket",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:SocketOption",
      "description": {
        "fct-descr": "\u003cp\u003eThe option to set on 0MQ sockets (cf. zmq_setsockopt and zmq_getsockopt\n manpages for details).\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "data",
        "fct-source": "src/System-ZMQ.html#SocketOption",
        "fct-type": "data",
        "title": "SocketOption"
      },
      "index": {
        "description": "The option to set on MQ sockets cf zmq setsockopt and zmq getsockopt manpages for details",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "SocketOption",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Socket Option",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Sub",
      "description": {
        "fct-descr": "\u003cp\u003eSocket to subscribe for data. Send function is not implemented\n for this socket type. Initially, socket is subscribed for no\n messages. Use \u003ccode\u003esubscribe\u003c/code\u003e to specify which messages to subscribe for.\n \u003cem\u003eCompatible peer sockets\u003c/em\u003e: \u003ccode\u003e\u003ca\u003ePub\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "data",
        "fct-source": "src/System-ZMQ.html#Sub",
        "fct-type": "data",
        "title": "Sub"
      },
      "index": {
        "description": "Socket to subscribe for data Send function is not implemented for this socket type Initially socket is subscribed for no messages Use subscribe to specify which messages to subscribe for Compatible peer sockets Pub",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Sub",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Sub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:SubsType",
      "description": {
        "fct-descr": "\u003cp\u003eSubscribable.\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "class",
        "fct-source": "src/System-ZMQ.html#SubsType",
        "fct-type": "class",
        "title": "SubsType"
      },
      "index": {
        "description": "Subscribable",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "SubsType",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Subs Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Timeout",
      "description": {
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "type",
        "fct-source": "src/System-ZMQ-Internal.html#Timeout",
        "fct-type": "type",
        "title": "Timeout"
      },
      "index": {
        "description": "",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Timeout",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Up",
      "description": {
        "fct-descr": "\u003cp\u003eSocket to receive messages from up the stream. Messages are\n fair-queued from among all the connected peers. Send function is not\n implemented for this socket type. \u003cem\u003eCompatible peer sockets\u003c/em\u003e: \u003ccode\u003e\u003ca\u003eDown\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "data",
        "fct-source": "src/System-ZMQ.html#Up",
        "fct-type": "data",
        "title": "Up"
      },
      "index": {
        "description": "Socket to receive messages from up the stream Messages are fair-queued from among all the connected peers Send function is not implemented for this socket type Compatible peer sockets Down",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Up",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Up",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:XRep",
      "description": {
        "fct-descr": "\u003cp\u003eSpecial socket type to be used in request/reply middleboxes\n such as zmq_queue(7).  Requests received using this socket are already\n properly tagged with prefix identifying the original requester. When\n sending a reply via XREP socket the message should be tagged with a\n prefix from a corresponding request.\n \u003cem\u003eCompatible peer sockets\u003c/em\u003e: \u003ccode\u003e\u003ca\u003eReq\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eXreq\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "data",
        "fct-source": "src/System-ZMQ.html#XRep",
        "fct-type": "data",
        "title": "XRep"
      },
      "index": {
        "description": "Special socket type to be used in request reply middleboxes such as zmq queue Requests received using this socket are already properly tagged with prefix identifying the original requester When sending reply via XREP socket the message should be tagged with prefix from corresponding request Compatible peer sockets Req Xreq",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "XRep",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "XRep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:XReq",
      "description": {
        "fct-descr": "\u003cp\u003eSpecial socket type to be used in request/reply middleboxes\n such as zmq_queue(7).  Requests forwarded using this socket type\n should be tagged by a proper prefix identifying the original requester.\n Replies received by this socket are tagged with a proper postfix\n that can be use to route the reply back to the original requester.\n \u003cem\u003eCompatible peer sockets\u003c/em\u003e: \u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eXrep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "data",
        "fct-source": "src/System-ZMQ.html#XReq",
        "fct-type": "data",
        "title": "XReq"
      },
      "index": {
        "description": "Special socket type to be used in request reply middleboxes such as zmq queue Requests forwarded using this socket type should be tagged by proper prefix identifying the original requester Replies received by this socket are tagged with proper postfix that can be use to route the reply back to the original requester Compatible peer sockets Rep Xrep",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "XReq",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "XReq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Affinity",
      "description": {
        "fct-descr": "\u003cp\u003eZMQ_AFFINITY\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Affinity Word64",
        "fct-source": "src/System-ZMQ.html#SocketOption",
        "fct-type": "function",
        "title": "Affinity"
      },
      "index": {
        "description": "ZMQ AFFINITY",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Affinity",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Affinity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Backlog",
      "description": {
        "fct-descr": "\u003cp\u003eZMQ_BACKLOG\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Backlog CInt",
        "fct-source": "src/System-ZMQ.html#SocketOption",
        "fct-type": "function",
        "title": "Backlog"
      },
      "index": {
        "description": "ZMQ BACKLOG",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Backlog",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Backlog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Dealer",
      "description": {
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Dealer",
        "fct-source": "src/System-ZMQ.html#Dealer",
        "fct-type": "function",
        "title": "Dealer"
      },
      "index": {
        "description": "",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Dealer",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Dealer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Down",
      "description": {
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Down",
        "fct-source": "src/System-ZMQ.html#Down",
        "fct-type": "function",
        "title": "Down"
      },
      "index": {
        "description": "",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Down",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Events",
      "description": {
        "fct-descr": "\u003cp\u003eZMQ_EVENTS\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Events PollEvent",
        "fct-source": "src/System-ZMQ.html#SocketOption",
        "fct-type": "function",
        "title": "Events"
      },
      "index": {
        "description": "ZMQ EVENTS",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Events",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Events",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:F",
      "description": {
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "F Fd PollEvent",
        "fct-source": "src/System-ZMQ.html#Poll",
        "fct-type": "function",
        "title": "F"
      },
      "index": {
        "description": "",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "F",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:FD",
      "description": {
        "fct-descr": "\u003cp\u003eZMQ_FD\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "FD CInt",
        "fct-source": "src/System-ZMQ.html#SocketOption",
        "fct-type": "function",
        "title": "FD"
      },
      "index": {
        "description": "ZMQ FD",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "FD",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "FD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Forwarder",
      "description": {
        "fct-descr": "\u003cp\u003eZMQ_FORWARDER\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Forwarder",
        "fct-source": "src/System-ZMQ.html#Device",
        "fct-type": "function",
        "title": "Forwarder"
      },
      "index": {
        "description": "ZMQ FORWARDER",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Forwarder",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Forwarder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:HighWM",
      "description": {
        "fct-descr": "\u003cp\u003eZMQ_HWM\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "HighWM Word64",
        "fct-source": "src/System-ZMQ.html#SocketOption",
        "fct-type": "function",
        "title": "HighWM"
      },
      "index": {
        "description": "ZMQ HWM",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "HighWM",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "High WM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Identity",
      "description": {
        "fct-descr": "\u003cp\u003eZMQ_IDENTITY\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Identity String",
        "fct-source": "src/System-ZMQ.html#SocketOption",
        "fct-type": "function",
        "title": "Identity"
      },
      "index": {
        "description": "ZMQ IDENTITY",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Identity",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Identity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:In",
      "description": {
        "fct-descr": "\u003cp\u003eZMQ_POLLIN (incoming messages)\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "In",
        "fct-source": "src/System-ZMQ.html#PollEvent",
        "fct-type": "function",
        "title": "In"
      },
      "index": {
        "description": "ZMQ POLLIN incoming messages",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "In",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:InOut",
      "description": {
        "fct-descr": "\u003cp\u003eZMQ_POLLIN | ZMQ_POLLOUT\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "InOut",
        "fct-source": "src/System-ZMQ.html#PollEvent",
        "fct-type": "function",
        "title": "InOut"
      },
      "index": {
        "description": "ZMQ POLLIN ZMQ POLLOUT",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "InOut",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "In Out",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Linger",
      "description": {
        "fct-descr": "\u003cp\u003eZMQ_LINGER\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Linger CInt",
        "fct-source": "src/System-ZMQ.html#SocketOption",
        "fct-type": "function",
        "title": "Linger"
      },
      "index": {
        "description": "ZMQ LINGER",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Linger",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Linger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:McastLoop",
      "description": {
        "fct-descr": "\u003cp\u003eZMQ_MCAST_LOOP\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "McastLoop Bool",
        "fct-source": "src/System-ZMQ.html#SocketOption",
        "fct-type": "function",
        "title": "McastLoop"
      },
      "index": {
        "description": "ZMQ MCAST LOOP",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "McastLoop",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Mcast Loop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Native",
      "description": {
        "fct-descr": "\u003cp\u003eZMQ_POLLERR\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Native",
        "fct-source": "src/System-ZMQ.html#PollEvent",
        "fct-type": "function",
        "title": "Native"
      },
      "index": {
        "description": "ZMQ POLLERR",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Native",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Native",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:NoBlock",
      "description": {
        "fct-descr": "\u003cp\u003eZMQ_NOBLOCK (0MQ-2.x), ZMQ_DONTWAIT (0MQ-3.x)\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "NoBlock",
        "fct-source": "src/System-ZMQ-Internal.html#Flag",
        "fct-type": "function",
        "title": "NoBlock"
      },
      "index": {
        "description": "ZMQ NOBLOCK MQ-2.x ZMQ DONTWAIT MQ-3.x",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "NoBlock",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "No Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:None",
      "description": {
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "None",
        "fct-source": "src/System-ZMQ.html#PollEvent",
        "fct-type": "function",
        "title": "None"
      },
      "index": {
        "description": "",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "None",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Out",
      "description": {
        "fct-descr": "\u003cp\u003eZMQ_POLLOUT (outgoing messages, i.e. at least 1 byte can be written)\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Out",
        "fct-source": "src/System-ZMQ.html#PollEvent",
        "fct-type": "function",
        "title": "Out"
      },
      "index": {
        "description": "ZMQ POLLOUT outgoing messages i.e at least byte can be written",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Out",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Out",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Pair",
      "description": {
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Pair",
        "fct-source": "src/System-ZMQ.html#Pair",
        "fct-type": "function",
        "title": "Pair"
      },
      "index": {
        "description": "",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Pair",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Pub",
      "description": {
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Pub",
        "fct-source": "src/System-ZMQ.html#Pub",
        "fct-type": "function",
        "title": "Pub"
      },
      "index": {
        "description": "",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Pub",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Pub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Pull",
      "description": {
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Pull",
        "fct-source": "src/System-ZMQ.html#Pull",
        "fct-type": "function",
        "title": "Pull"
      },
      "index": {
        "description": "",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Pull",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Pull",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Push",
      "description": {
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Push",
        "fct-source": "src/System-ZMQ.html#Push",
        "fct-type": "function",
        "title": "Push"
      },
      "index": {
        "description": "",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Push",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Push",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Queue",
      "description": {
        "fct-descr": "\u003cp\u003eZMQ_QUEUE\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Queue",
        "fct-source": "src/System-ZMQ.html#Device",
        "fct-type": "function",
        "title": "Queue"
      },
      "index": {
        "description": "ZMQ QUEUE",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Queue",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Rate",
      "description": {
        "fct-descr": "\u003cp\u003eZMQ_RATE\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Rate Int64",
        "fct-source": "src/System-ZMQ.html#SocketOption",
        "fct-type": "function",
        "title": "Rate"
      },
      "index": {
        "description": "ZMQ RATE",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Rate",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Rate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:ReceiveBuf",
      "description": {
        "fct-descr": "\u003cp\u003eZMQ_RCVBUF\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "ReceiveBuf Word64",
        "fct-source": "src/System-ZMQ.html#SocketOption",
        "fct-type": "function",
        "title": "ReceiveBuf"
      },
      "index": {
        "description": "ZMQ RCVBUF",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "ReceiveBuf",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Receive Buf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:ReceiveMore",
      "description": {
        "fct-descr": "\u003cp\u003eZMQ_RCVMORE\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "ReceiveMore Bool",
        "fct-source": "src/System-ZMQ.html#SocketOption",
        "fct-type": "function",
        "title": "ReceiveMore"
      },
      "index": {
        "description": "ZMQ RCVMORE",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "ReceiveMore",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Receive More",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:ReconnectIVL",
      "description": {
        "fct-descr": "\u003cp\u003eZMQ_RECONNECT_IVL\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "ReconnectIVL CInt",
        "fct-source": "src/System-ZMQ.html#SocketOption",
        "fct-type": "function",
        "title": "ReconnectIVL"
      },
      "index": {
        "description": "ZMQ RECONNECT IVL",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "ReconnectIVL",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Reconnect IVL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:ReconnectIVLMax",
      "description": {
        "fct-descr": "\u003cp\u003eZMQ_RECONNECT_IVL_MAX\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "ReconnectIVLMax CInt",
        "fct-source": "src/System-ZMQ.html#SocketOption",
        "fct-type": "function",
        "title": "ReconnectIVLMax"
      },
      "index": {
        "description": "ZMQ RECONNECT IVL MAX",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "ReconnectIVLMax",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Reconnect IVLMax",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:RecoveryIVL",
      "description": {
        "fct-descr": "\u003cp\u003eZMQ_RECOVERY_IVL\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "RecoveryIVL Int64",
        "fct-source": "src/System-ZMQ.html#SocketOption",
        "fct-type": "function",
        "title": "RecoveryIVL"
      },
      "index": {
        "description": "ZMQ RECOVERY IVL",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "RecoveryIVL",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Recovery IVL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:RecoveryIVLMsec",
      "description": {
        "fct-descr": "\u003cp\u003eZMQ_RECOVERY_IVL_MSEC\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "RecoveryIVLMsec Int64",
        "fct-source": "src/System-ZMQ.html#SocketOption",
        "fct-type": "function",
        "title": "RecoveryIVLMsec"
      },
      "index": {
        "description": "ZMQ RECOVERY IVL MSEC",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "RecoveryIVLMsec",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Recovery IVLMsec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Rep",
      "description": {
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Rep",
        "fct-source": "src/System-ZMQ.html#Rep",
        "fct-type": "function",
        "title": "Rep"
      },
      "index": {
        "description": "",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Rep",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Rep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Req",
      "description": {
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Req",
        "fct-source": "src/System-ZMQ.html#Req",
        "fct-type": "function",
        "title": "Req"
      },
      "index": {
        "description": "",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Req",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Req",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Router",
      "description": {
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Router",
        "fct-source": "src/System-ZMQ.html#Router",
        "fct-type": "function",
        "title": "Router"
      },
      "index": {
        "description": "",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Router",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Router",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:S",
      "description": {
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "forall a . S (Socket a) PollEvent",
        "fct-source": "src/System-ZMQ.html#Poll",
        "fct-type": "function",
        "title": "S"
      },
      "index": {
        "description": "",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "S",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:SendBuf",
      "description": {
        "fct-descr": "\u003cp\u003eZMQ_SNDBUF\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "SendBuf Word64",
        "fct-source": "src/System-ZMQ.html#SocketOption",
        "fct-type": "function",
        "title": "SendBuf"
      },
      "index": {
        "description": "ZMQ SNDBUF",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "SendBuf",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Send Buf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:SndMore",
      "description": {
        "fct-descr": "\u003cp\u003eZMQ_SNDMORE\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "SndMore",
        "fct-source": "src/System-ZMQ-Internal.html#Flag",
        "fct-type": "function",
        "title": "SndMore"
      },
      "index": {
        "description": "ZMQ SNDMORE",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "SndMore",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Snd More",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Streamer",
      "description": {
        "fct-descr": "\u003cp\u003eZMQ_STREAMER\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Streamer",
        "fct-source": "src/System-ZMQ.html#Device",
        "fct-type": "function",
        "title": "Streamer"
      },
      "index": {
        "description": "ZMQ STREAMER",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Streamer",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Streamer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Sub",
      "description": {
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Sub",
        "fct-source": "src/System-ZMQ.html#Sub",
        "fct-type": "function",
        "title": "Sub"
      },
      "index": {
        "description": "",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Sub",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Sub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Swap",
      "description": {
        "fct-descr": "\u003cp\u003eZMQ_SWAP\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Swap Int64",
        "fct-source": "src/System-ZMQ.html#SocketOption",
        "fct-type": "function",
        "title": "Swap"
      },
      "index": {
        "description": "ZMQ SWAP",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Swap",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Swap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Up",
      "description": {
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Up",
        "fct-source": "src/System-ZMQ.html#Up",
        "fct-type": "function",
        "title": "Up"
      },
      "index": {
        "description": "",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "Up",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "Up",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:XRep",
      "description": {
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "XRep",
        "fct-source": "src/System-ZMQ.html#XRep",
        "fct-type": "function",
        "title": "XRep"
      },
      "index": {
        "description": "",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "XRep",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "XRep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:XReq",
      "description": {
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "XReq",
        "fct-source": "src/System-ZMQ.html#XReq",
        "fct-type": "function",
        "title": "XReq"
      },
      "index": {
        "description": "",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "XReq",
        "normalized": "",
        "package": "zeromq-haskell",
        "partial": "XReq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:bind",
      "description": {
        "fct-descr": "\u003cp\u003eBind the socket to the given address (zmq_bind)\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Socket a -\u003e String -\u003e IO ()",
        "fct-source": "src/System-ZMQ.html#bind",
        "fct-type": "function",
        "title": "bind"
      },
      "index": {
        "description": "Bind the socket to the given address zmq bind",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "bind",
        "normalized": "Socket a-\u003eString-\u003eIO()",
        "package": "zeromq-haskell",
        "partial": "",
        "signature": "Socket a-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:close",
      "description": {
        "fct-descr": "\u003cp\u003eClose a 0MQ socket. \u003ccode\u003e\u003ca\u003ewithSocket\u003c/a\u003e\u003c/code\u003e provides automatic socket closing and may\n be safer to use.\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Socket a -\u003e IO ()",
        "fct-source": "src/System-ZMQ.html#close",
        "fct-type": "function",
        "title": "close"
      },
      "index": {
        "description": "Close MQ socket withSocket provides automatic socket closing and may be safer to use",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "close",
        "normalized": "Socket a-\u003eIO()",
        "package": "zeromq-haskell",
        "partial": "",
        "signature": "Socket a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:connect",
      "description": {
        "fct-descr": "\u003cp\u003eConnect the socket to the given address (zmq_connect).\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Socket a -\u003e String -\u003e IO ()",
        "fct-source": "src/System-ZMQ.html#connect",
        "fct-type": "function",
        "title": "connect"
      },
      "index": {
        "description": "Connect the socket to the given address zmq connect",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "connect",
        "normalized": "Socket a-\u003eString-\u003eIO()",
        "package": "zeromq-haskell",
        "partial": "",
        "signature": "Socket a-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:device",
      "description": {
        "fct-descr": "\u003cp\u003eLaunch a ZeroMQ device (zmq_device).\n\u003c/p\u003e\u003cp\u003ePlease note that this call never returns.\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Device -\u003e Socket a -\u003e Socket b -\u003e IO ()",
        "fct-source": "src/System-ZMQ.html#device",
        "fct-type": "function",
        "title": "device"
      },
      "index": {
        "description": "Launch ZeroMQ device zmq device Please note that this call never returns",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "device",
        "normalized": "Device-\u003eSocket a-\u003eSocket b-\u003eIO()",
        "package": "zeromq-haskell",
        "partial": "",
        "signature": "Device-\u003eSocket a-\u003eSocket b-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:getOption",
      "description": {
        "fct-descr": "\u003cp\u003eGet the given socket option by passing in some dummy value of\n that option. The actual value will be returned. Please note that\n there are certain combatibility constraints w.r.t the socket\n type (cf. man zmq_setsockopt).\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Socket a -\u003e SocketOption -\u003e IO SocketOption",
        "fct-source": "src/System-ZMQ.html#getOption",
        "fct-type": "function",
        "title": "getOption"
      },
      "index": {
        "description": "Get the given socket option by passing in some dummy value of that option The actual value will be returned Please note that there are certain combatibility constraints w.r.t the socket type cf man zmq setsockopt",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "getOption",
        "normalized": "Socket a-\u003eSocketOption-\u003eIO SocketOption",
        "package": "zeromq-haskell",
        "partial": "Option",
        "signature": "Socket a-\u003eSocketOption-\u003eIO SocketOption"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:init",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize a 0MQ context (cf. zmq_init for details).  You should\n normally prefer to use \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Size -\u003e IO Context",
        "fct-source": "src/System-ZMQ.html#init",
        "fct-type": "function",
        "title": "init"
      },
      "index": {
        "description": "Initialize MQ context cf zmq init for details You should normally prefer to use with instead",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "init",
        "normalized": "Size-\u003eIO Context",
        "package": "zeromq-haskell",
        "partial": "",
        "signature": "Size-\u003eIO Context"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:moreToReceive",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent of ZMQ_RCVMORE, i.e. returns True if a multi-part\n message currently being read has more parts to follow, otherwise\n False.\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Socket a -\u003e IO Bool",
        "fct-source": "src/System-ZMQ.html#moreToReceive",
        "fct-type": "function",
        "title": "moreToReceive"
      },
      "index": {
        "description": "Equivalent of ZMQ RCVMORE i.e returns True if multi-part message currently being read has more parts to follow otherwise False",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "moreToReceive",
        "normalized": "Socket a-\u003eIO Bool",
        "package": "zeromq-haskell",
        "partial": "To Receive",
        "signature": "Socket a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:poll",
      "description": {
        "fct-descr": "\u003cp\u003ePolls for events on the given \u003ccode\u003e\u003ca\u003ePoll\u003c/a\u003e\u003c/code\u003e descriptors. Returns the\n same list of \u003ccode\u003e\u003ca\u003ePoll\u003c/a\u003e\u003c/code\u003e descriptors with an \u003ca\u003eupdated\u003c/a\u003e \u003ccode\u003e\u003ca\u003ePollEvent\u003c/a\u003e\u003c/code\u003e field\n (cf. zmq_poll). Sockets which have seen no activity have \u003ccode\u003e\u003ca\u003eNone\u003c/a\u003e\u003c/code\u003e in\n their \u003ccode\u003e\u003ca\u003ePollEvent\u003c/a\u003e\u003c/code\u003e field.\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "[Poll] -\u003e Timeout -\u003e IO [Poll]",
        "fct-source": "src/System-ZMQ.html#poll",
        "fct-type": "function",
        "title": "poll"
      },
      "index": {
        "description": "Polls for events on the given Poll descriptors Returns the same list of Poll descriptors with an updated PollEvent field cf zmq poll Sockets which have seen no activity have None in their PollEvent field",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "poll",
        "normalized": "[Poll]-\u003eTimeout-\u003eIO[Poll]",
        "package": "zeromq-haskell",
        "partial": "",
        "signature": "[Poll]-\u003eTimeout-\u003eIO[Poll]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:receive",
      "description": {
        "fct-descr": "\u003cp\u003eReceive a \u003ccode\u003eByteString\u003c/code\u003e from socket (zmq_recv).\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Socket a -\u003e [Flag] -\u003e IO ByteString",
        "fct-source": "src/System-ZMQ.html#receive",
        "fct-type": "function",
        "title": "receive"
      },
      "index": {
        "description": "Receive ByteString from socket zmq recv",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "receive",
        "normalized": "Socket a-\u003e[Flag]-\u003eIO ByteString",
        "package": "zeromq-haskell",
        "partial": "",
        "signature": "Socket a-\u003e[Flag]-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eSend the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e over the socket (zmq_send).\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Socket a -\u003e ByteString -\u003e [Flag] -\u003e IO ()",
        "fct-source": "src/System-ZMQ.html#send",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "Send the given ByteString over the socket zmq send",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "send",
        "normalized": "Socket a-\u003eByteString-\u003e[Flag]-\u003eIO()",
        "package": "zeromq-haskell",
        "partial": "",
        "signature": "Socket a-\u003eByteString-\u003e[Flag]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:send-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSend the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e over the socket (zmq_send).\n   This is operationally identical to \u003ccode\u003esend socket (Strict.concat\n   (Lazy.toChunks lbs)) flags\u003c/code\u003e but may be more efficient.\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Socket a -\u003e ByteString -\u003e [Flag] -\u003e IO ()",
        "fct-source": "src/System-ZMQ.html#send%27",
        "fct-type": "function",
        "title": "send'"
      },
      "index": {
        "description": "Send the given ByteString over the socket zmq send This is operationally identical to send socket Strict.concat Lazy.toChunks lbs flags but may be more efficient",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "send'",
        "normalized": "Socket a-\u003eByteString-\u003e[Flag]-\u003eIO()",
        "package": "zeromq-haskell",
        "partial": "",
        "signature": "Socket a-\u003eByteString-\u003e[Flag]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:setOption",
      "description": {
        "fct-descr": "\u003cp\u003eSet the given option on the socket. Please note that there are\n certain combatibility constraints w.r.t the socket type (cf. man\n zmq_setsockopt).\n\u003c/p\u003e\u003cp\u003ePlease note that subscribe/unsubscribe is handled with separate\n functions.\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Socket a -\u003e SocketOption -\u003e IO ()",
        "fct-source": "src/System-ZMQ.html#setOption",
        "fct-type": "function",
        "title": "setOption"
      },
      "index": {
        "description": "Set the given option on the socket Please note that there are certain combatibility constraints w.r.t the socket type cf man zmq setsockopt Please note that subscribe unsubscribe is handled with separate functions",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "setOption",
        "normalized": "Socket a-\u003eSocketOption-\u003eIO()",
        "package": "zeromq-haskell",
        "partial": "Option",
        "signature": "Socket a-\u003eSocketOption-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:socket",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new 0MQ socket within the given context. \u003ccode\u003e\u003ca\u003ewithSocket\u003c/a\u003e\u003c/code\u003e provides\n automatic socket closing and may be safer to use.\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Context -\u003e a -\u003e IO (Socket a)",
        "fct-source": "src/System-ZMQ.html#socket",
        "fct-type": "function",
        "title": "socket"
      },
      "index": {
        "description": "Create new MQ socket within the given context withSocket provides automatic socket closing and may be safer to use",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "socket",
        "normalized": "Context-\u003ea-\u003eIO(Socket a)",
        "package": "zeromq-haskell",
        "partial": "",
        "signature": "Context-\u003ea-\u003eIO(Socket a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:subscribe",
      "description": {
        "fct-descr": "\u003cp\u003eSubscribe Socket to given subscription.\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Socket a -\u003e String -\u003e IO ()",
        "fct-source": "src/System-ZMQ.html#subscribe",
        "fct-type": "function",
        "title": "subscribe"
      },
      "index": {
        "description": "Subscribe Socket to given subscription",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "subscribe",
        "normalized": "Socket a-\u003eString-\u003eIO()",
        "package": "zeromq-haskell",
        "partial": "",
        "signature": "Socket a-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:term",
      "description": {
        "fct-descr": "\u003cp\u003eTerminate a 0MQ context (cf. zmq_term).  You should normally\n prefer to use \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Context -\u003e IO ()",
        "fct-source": "src/System-ZMQ.html#term",
        "fct-type": "function",
        "title": "term"
      },
      "index": {
        "description": "Terminate MQ context cf zmq term You should normally prefer to use with instead",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "term",
        "normalized": "Context-\u003eIO()",
        "package": "zeromq-haskell",
        "partial": "",
        "signature": "Context-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:unsubscribe",
      "description": {
        "fct-descr": "\u003cp\u003eUnsubscribe Socket from given subscription.\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Socket a -\u003e String -\u003e IO ()",
        "fct-source": "src/System-ZMQ.html#unsubscribe",
        "fct-type": "function",
        "title": "unsubscribe"
      },
      "index": {
        "description": "Unsubscribe Socket from given subscription",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "unsubscribe",
        "normalized": "Socket a-\u003eString-\u003eIO()",
        "package": "zeromq-haskell",
        "partial": "",
        "signature": "Socket a-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:version",
      "description": {
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "IO (Int, Int, Int)",
        "fct-source": "src/System-ZMQ.html#version",
        "fct-type": "function",
        "title": "version"
      },
      "index": {
        "description": "",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "version",
        "normalized": "IO(Int,Int,Int)",
        "package": "zeromq-haskell",
        "partial": "",
        "signature": "IO(Int,Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:withContext",
      "description": {
        "fct-descr": "\u003cp\u003eRun an action with a 0MQ context.  The \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e supplied to your\n action will \u003cem\u003enot\u003c/em\u003e be valid after the action either returns or\n throws an exception.\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Size -\u003e (Context -\u003e IO a) -\u003e IO a",
        "fct-source": "src/System-ZMQ.html#withContext",
        "fct-type": "function",
        "title": "withContext"
      },
      "index": {
        "description": "Run an action with MQ context The Context supplied to your action will not be valid after the action either returns or throws an exception",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "withContext",
        "normalized": "Size-\u003e(Context-\u003eIO a)-\u003eIO a",
        "package": "zeromq-haskell",
        "partial": "Context",
        "signature": "Size-\u003e(Context-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:withSocket",
      "description": {
        "fct-descr": "\u003cp\u003eRun an action with a 0MQ socket. The socket will be closed after running\n the supplied action even if an error occurs. The socket supplied to your\n action will \u003cem\u003enot\u003c/em\u003e be valid after the action terminates.\n\u003c/p\u003e",
        "fct-module": "System.ZMQ",
        "fct-package": "zeromq-haskell",
        "fct-signature": "Context -\u003e a -\u003e (Socket a -\u003e IO b) -\u003e IO b",
        "fct-source": "src/System-ZMQ.html#withSocket",
        "fct-type": "function",
        "title": "withSocket"
      },
      "index": {
        "description": "Run an action with MQ socket The socket will be closed after running the supplied action even if an error occurs The socket supplied to your action will not be valid after the action terminates",
        "hierarchy": "System ZMQ",
        "module": "System.ZMQ",
        "name": "withSocket",
        "normalized": "Context-\u003ea-\u003e(Socket a-\u003eIO b)-\u003eIO b",
        "package": "zeromq-haskell",
        "partial": "Socket",
        "signature": "Context-\u003ea-\u003e(Socket a-\u003eIO b)-\u003eIO b"
      }
    }
  }
]