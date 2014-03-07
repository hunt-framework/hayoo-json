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
        "word": "zeromq-haskell"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e0MQ haskell binding. The API closely follows the C-API of 0MQ with\n the main difference that sockets are typed.\n The documentation of the individual socket types is copied from\n 0MQ's man pages authored by Martin Sustrik. For details please\n refer to http:\u003cem/\u003eapi.zeromq.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.ZMQ",
          "name": "ZMQ",
          "package": "zeromq-haskell",
          "source": "src/System-ZMQ.html",
          "type": "module"
        },
        "index": {
          "description": "MQ haskell binding The API closely follows the C-API of MQ with the main difference that sockets are typed The documentation of the individual socket types is copied from MQ man pages authored by Martin Sustrik For details please refer to http api.zeromq.org",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "ZMQ",
          "package": "zeromq-haskell",
          "partial": "ZMQ",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 0MQ context representation.\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "Context",
          "package": "zeromq-haskell",
          "source": "src/System-ZMQ-Internal.html#Context",
          "type": "data"
        },
        "index": {
          "description": "MQ context representation",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Context",
          "package": "zeromq-haskell",
          "partial": "Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.ZMQ",
          "name": "Dealer",
          "package": "zeromq-haskell",
          "source": "src/System-ZMQ.html#Dealer",
          "type": "data"
        },
        "index": {
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Dealer",
          "package": "zeromq-haskell",
          "partial": "Dealer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Dealer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType representing ZeroMQ devices, as used with zmq_device\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "Device",
          "package": "zeromq-haskell",
          "source": "src/System-ZMQ.html#Device",
          "type": "data"
        },
        "index": {
          "description": "Type representing ZeroMQ devices as used with zmq device",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Device",
          "package": "zeromq-haskell",
          "partial": "Device",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Device"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSocket to send messages down stream. Messages are load-balanced\n among all the connected peers. Send function is not implemented for\n this socket type. \u003cem\u003eCompatible peer sockets\u003c/em\u003e: \u003ccode\u003e\u003ca\u003eUp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "Down",
          "package": "zeromq-haskell",
          "source": "src/System-ZMQ.html#Down",
          "type": "data"
        },
        "index": {
          "description": "Socket to send messages down stream Messages are load-balanced among all the connected peers Send function is not implemented for this socket type Compatible peer sockets Up",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Down",
          "package": "zeromq-haskell",
          "partial": "Down",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Down"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlags to apply on send operations (cf. man zmq_send)\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eNoBlock\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Send operation should be performed in non-blocking mode.\n If it cannot be performed immediatley an error will be thrown (errno\n is set to EAGAIN).\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "System.ZMQ",
          "name": "Flag",
          "package": "zeromq-haskell",
          "source": "src/System-ZMQ-Internal.html#Flag",
          "type": "data"
        },
        "index": {
          "description": "Flags to apply on send operations cf man zmq send NoBlock Send operation should be performed in non-blocking mode If it cannot be performed immediatley an error will be thrown errno is set to EAGAIN",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Flag",
          "package": "zeromq-haskell",
          "partial": "Flag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Flag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSocket to communicate with a single peer. Allows for only a\n single connect or a single bind. There's no message routing\n or message filtering involved. \u003cem\u003eCompatible peer sockets\u003c/em\u003e: \u003ccode\u003e\u003ca\u003ePair\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "Pair",
          "package": "zeromq-haskell",
          "source": "src/System-ZMQ.html#Pair",
          "type": "data"
        },
        "index": {
          "description": "Socket to communicate with single peer Allows for only single connect or single bind There no message routing or message filtering involved Compatible peer sockets Pair",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Pair",
          "package": "zeromq-haskell",
          "partial": "Pair",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType representing a descriptor, poll is waiting for\n (either a 0MQ socket or a file descriptor) plus the type\n of event to wait for.\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "Poll",
          "package": "zeromq-haskell",
          "source": "src/System-ZMQ.html#Poll",
          "type": "data"
        },
        "index": {
          "description": "Type representing descriptor poll is waiting for either MQ socket or file descriptor plus the type of event to wait for",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Poll",
          "package": "zeromq-haskell",
          "partial": "Poll",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Poll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe events to wait for in poll (cf. man zmq_poll)\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "PollEvent",
          "package": "zeromq-haskell",
          "source": "src/System-ZMQ.html#PollEvent",
          "type": "data"
        },
        "index": {
          "description": "The events to wait for in poll cf man zmq poll",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "PollEvent",
          "package": "zeromq-haskell",
          "partial": "Poll Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:PollEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSocket to distribute data. \u003ccode\u003e\u003ca\u003ereceive\u003c/a\u003e\u003c/code\u003e function is not\n implemented for this socket type. Messages are distributed in\n fanout fashion to all the peers. \u003cem\u003eCompatible peer sockets\u003c/em\u003e: \u003ccode\u003e\u003ca\u003eSub\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "Pub",
          "package": "zeromq-haskell",
          "source": "src/System-ZMQ.html#Pub",
          "type": "data"
        },
        "index": {
          "description": "Socket to distribute data receive function is not implemented for this socket type Messages are distributed in fanout fashion to all the peers Compatible peer sockets Sub",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Pub",
          "package": "zeromq-haskell",
          "partial": "Pub",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Pub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA socket of type Pull is used by a pipeline node to receive\n messages from upstream pipeline nodes. Messages are fair-queued from\n among all connected upstream nodes. The zmq_send() function is not\n implemented for this socket type.\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "Pull",
          "package": "zeromq-haskell",
          "source": "src/System-ZMQ.html#Pull",
          "type": "data"
        },
        "index": {
          "description": "socket of type Pull is used by pipeline node to receive messages from upstream pipeline nodes Messages are fair-queued from among all connected upstream nodes The zmq send function is not implemented for this socket type",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Pull",
          "package": "zeromq-haskell",
          "partial": "Pull",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Pull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA socket of type Push is used by a pipeline node to send messages\n to downstream pipeline nodes. Messages are load-balanced to all connected\n downstream nodes. The zmq_recv() function is not implemented for this\n socket type.\n\u003c/p\u003e\u003cp\u003eWhen a Push socket enters an exceptional state due to having reached\n the high water mark for all downstream nodes, or if there are no\n downstream nodes at all, then any zmq_send(3) operations on the socket\n shall block until the exceptional state ends or at least one downstream\n node becomes available for sending; messages are not discarded.\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "Push",
          "package": "zeromq-haskell",
          "source": "src/System-ZMQ.html#Push",
          "type": "data"
        },
        "index": {
          "description": "socket of type Push is used by pipeline node to send messages to downstream pipeline nodes Messages are load-balanced to all connected downstream nodes The zmq recv function is not implemented for this socket type When Push socket enters an exceptional state due to having reached the high water mark for all downstream nodes or if there are no downstream nodes at all then any zmq send operations on the socket shall block until the exceptional state ends or at least one downstream node becomes available for sending messages are not discarded",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Push",
          "package": "zeromq-haskell",
          "partial": "Push",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSocket to receive requests and send replies. This socket type\n allows only an alternated sequence of receive's and send's. Each\n send is routed to the peer that issued the last received request.\n \u003cem\u003eCompatible peer sockets\u003c/em\u003e: \u003ccode\u003e\u003ca\u003eReq\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eXReq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "Rep",
          "package": "zeromq-haskell",
          "source": "src/System-ZMQ.html#Rep",
          "type": "data"
        },
        "index": {
          "description": "Socket to receive requests and send replies This socket type allows only an alternated sequence of receive and send Each send is routed to the peer that issued the last received request Compatible peer sockets Req XReq",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Rep",
          "package": "zeromq-haskell",
          "partial": "Rep",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Rep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSocket to send requests and receive replies. Requests are\n load-balanced among all the peers. This socket type allows only an\n alternated sequence of send's and recv's.\n \u003cem\u003eCompatible peer sockets\u003c/em\u003e: \u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eXrep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "Req",
          "package": "zeromq-haskell",
          "source": "src/System-ZMQ.html#Req",
          "type": "data"
        },
        "index": {
          "description": "Socket to send requests and receive replies Requests are load-balanced among all the peers This socket type allows only an alternated sequence of send and recv Compatible peer sockets Rep Xrep",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Req",
          "package": "zeromq-haskell",
          "partial": "Req",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Req"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.ZMQ",
          "name": "Router",
          "package": "zeromq-haskell",
          "source": "src/System-ZMQ.html#Router",
          "type": "data"
        },
        "index": {
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Router",
          "package": "zeromq-haskell",
          "partial": "Router",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Router"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSocket types.\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "SType",
          "package": "zeromq-haskell",
          "source": "src/System-ZMQ.html#SType",
          "type": "class"
        },
        "index": {
          "description": "Socket types",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "SType",
          "package": "zeromq-haskell",
          "partial": "SType",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:SType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.ZMQ",
          "name": "Size",
          "package": "zeromq-haskell",
          "source": "src/System-ZMQ-Internal.html#Size",
          "type": "type"
        },
        "index": {
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Size",
          "package": "zeromq-haskell",
          "partial": "Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 0MQ Socket.\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "Socket",
          "package": "zeromq-haskell",
          "source": "src/System-ZMQ-Internal.html#Socket",
          "type": "data"
        },
        "index": {
          "description": "MQ Socket",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Socket",
          "package": "zeromq-haskell",
          "partial": "Socket",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Socket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe option to set on 0MQ sockets (cf. zmq_setsockopt and zmq_getsockopt\n manpages for details).\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "SocketOption",
          "package": "zeromq-haskell",
          "source": "src/System-ZMQ.html#SocketOption",
          "type": "data"
        },
        "index": {
          "description": "The option to set on MQ sockets cf zmq setsockopt and zmq getsockopt manpages for details",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "SocketOption",
          "package": "zeromq-haskell",
          "partial": "Socket Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:SocketOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSocket to subscribe for data. Send function is not implemented\n for this socket type. Initially, socket is subscribed for no\n messages. Use \u003ccode\u003esubscribe\u003c/code\u003e to specify which messages to subscribe for.\n \u003cem\u003eCompatible peer sockets\u003c/em\u003e: \u003ccode\u003e\u003ca\u003ePub\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "Sub",
          "package": "zeromq-haskell",
          "source": "src/System-ZMQ.html#Sub",
          "type": "data"
        },
        "index": {
          "description": "Socket to subscribe for data Send function is not implemented for this socket type Initially socket is subscribed for no messages Use subscribe to specify which messages to subscribe for Compatible peer sockets Pub",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Sub",
          "package": "zeromq-haskell",
          "partial": "Sub",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubscribable.\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "SubsType",
          "package": "zeromq-haskell",
          "source": "src/System-ZMQ.html#SubsType",
          "type": "class"
        },
        "index": {
          "description": "Subscribable",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "SubsType",
          "package": "zeromq-haskell",
          "partial": "Subs Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:SubsType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.ZMQ",
          "name": "Timeout",
          "package": "zeromq-haskell",
          "source": "src/System-ZMQ-Internal.html#Timeout",
          "type": "type"
        },
        "index": {
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Timeout",
          "package": "zeromq-haskell",
          "partial": "Timeout",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Timeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSocket to receive messages from up the stream. Messages are\n fair-queued from among all the connected peers. Send function is not\n implemented for this socket type. \u003cem\u003eCompatible peer sockets\u003c/em\u003e: \u003ccode\u003e\u003ca\u003eDown\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "Up",
          "package": "zeromq-haskell",
          "source": "src/System-ZMQ.html#Up",
          "type": "data"
        },
        "index": {
          "description": "Socket to receive messages from up the stream Messages are fair-queued from among all the connected peers Send function is not implemented for this socket type Compatible peer sockets Down",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Up",
          "package": "zeromq-haskell",
          "partial": "Up",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:Up"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecial socket type to be used in request/reply middleboxes\n such as zmq_queue(7).  Requests received using this socket are already\n properly tagged with prefix identifying the original requester. When\n sending a reply via XREP socket the message should be tagged with a\n prefix from a corresponding request.\n \u003cem\u003eCompatible peer sockets\u003c/em\u003e: \u003ccode\u003e\u003ca\u003eReq\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eXreq\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "XRep",
          "package": "zeromq-haskell",
          "source": "src/System-ZMQ.html#XRep",
          "type": "data"
        },
        "index": {
          "description": "Special socket type to be used in request reply middleboxes such as zmq queue Requests received using this socket are already properly tagged with prefix identifying the original requester When sending reply via XREP socket the message should be tagged with prefix from corresponding request Compatible peer sockets Req Xreq",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "XRep",
          "package": "zeromq-haskell",
          "partial": "XRep",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:XRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecial socket type to be used in request/reply middleboxes\n such as zmq_queue(7).  Requests forwarded using this socket type\n should be tagged by a proper prefix identifying the original requester.\n Replies received by this socket are tagged with a proper postfix\n that can be use to route the reply back to the original requester.\n \u003cem\u003eCompatible peer sockets\u003c/em\u003e: \u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eXrep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "XReq",
          "package": "zeromq-haskell",
          "source": "src/System-ZMQ.html#XReq",
          "type": "data"
        },
        "index": {
          "description": "Special socket type to be used in request reply middleboxes such as zmq queue Requests forwarded using this socket type should be tagged by proper prefix identifying the original requester Replies received by this socket are tagged with proper postfix that can be use to route the reply back to the original requester Compatible peer sockets Rep Xrep",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "XReq",
          "package": "zeromq-haskell",
          "partial": "XReq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#t:XReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZMQ_AFFINITY\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "Affinity",
          "package": "zeromq-haskell",
          "signature": "Affinity Word64",
          "source": "src/System-ZMQ.html#SocketOption",
          "type": "function"
        },
        "index": {
          "description": "ZMQ AFFINITY",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Affinity",
          "package": "zeromq-haskell",
          "partial": "Affinity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Affinity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZMQ_BACKLOG\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "Backlog",
          "package": "zeromq-haskell",
          "signature": "Backlog CInt",
          "source": "src/System-ZMQ.html#SocketOption",
          "type": "function"
        },
        "index": {
          "description": "ZMQ BACKLOG",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Backlog",
          "package": "zeromq-haskell",
          "partial": "Backlog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Backlog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.ZMQ",
          "name": "Dealer",
          "package": "zeromq-haskell",
          "signature": "Dealer",
          "source": "src/System-ZMQ.html#Dealer",
          "type": "function"
        },
        "index": {
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Dealer",
          "package": "zeromq-haskell",
          "partial": "Dealer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Dealer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.ZMQ",
          "name": "Down",
          "package": "zeromq-haskell",
          "signature": "Down",
          "source": "src/System-ZMQ.html#Down",
          "type": "function"
        },
        "index": {
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Down",
          "package": "zeromq-haskell",
          "partial": "Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Down"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZMQ_EVENTS\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "Events",
          "package": "zeromq-haskell",
          "signature": "Events PollEvent",
          "source": "src/System-ZMQ.html#SocketOption",
          "type": "function"
        },
        "index": {
          "description": "ZMQ EVENTS",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Events",
          "package": "zeromq-haskell",
          "partial": "Events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Events"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.ZMQ",
          "name": "F",
          "package": "zeromq-haskell",
          "signature": "F Fd PollEvent",
          "source": "src/System-ZMQ.html#Poll",
          "type": "function"
        },
        "index": {
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "F",
          "package": "zeromq-haskell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZMQ_FD\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "FD",
          "package": "zeromq-haskell",
          "signature": "FD CInt",
          "source": "src/System-ZMQ.html#SocketOption",
          "type": "function"
        },
        "index": {
          "description": "ZMQ FD",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "FD",
          "package": "zeromq-haskell",
          "partial": "FD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:FD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZMQ_FORWARDER\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "Forwarder",
          "package": "zeromq-haskell",
          "signature": "Forwarder",
          "source": "src/System-ZMQ.html#Device",
          "type": "function"
        },
        "index": {
          "description": "ZMQ FORWARDER",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Forwarder",
          "package": "zeromq-haskell",
          "partial": "Forwarder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Forwarder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZMQ_HWM\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "HighWM",
          "package": "zeromq-haskell",
          "signature": "HighWM Word64",
          "source": "src/System-ZMQ.html#SocketOption",
          "type": "function"
        },
        "index": {
          "description": "ZMQ HWM",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "HighWM",
          "package": "zeromq-haskell",
          "partial": "High WM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:HighWM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZMQ_IDENTITY\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "Identity",
          "package": "zeromq-haskell",
          "signature": "Identity String",
          "source": "src/System-ZMQ.html#SocketOption",
          "type": "function"
        },
        "index": {
          "description": "ZMQ IDENTITY",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Identity",
          "package": "zeromq-haskell",
          "partial": "Identity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZMQ_POLLIN (incoming messages)\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "In",
          "package": "zeromq-haskell",
          "signature": "In",
          "source": "src/System-ZMQ.html#PollEvent",
          "type": "function"
        },
        "index": {
          "description": "ZMQ POLLIN incoming messages",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "In",
          "package": "zeromq-haskell",
          "partial": "In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:In"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZMQ_POLLIN | ZMQ_POLLOUT\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "InOut",
          "package": "zeromq-haskell",
          "signature": "InOut",
          "source": "src/System-ZMQ.html#PollEvent",
          "type": "function"
        },
        "index": {
          "description": "ZMQ POLLIN ZMQ POLLOUT",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "InOut",
          "package": "zeromq-haskell",
          "partial": "In Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:InOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZMQ_LINGER\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "Linger",
          "package": "zeromq-haskell",
          "signature": "Linger CInt",
          "source": "src/System-ZMQ.html#SocketOption",
          "type": "function"
        },
        "index": {
          "description": "ZMQ LINGER",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Linger",
          "package": "zeromq-haskell",
          "partial": "Linger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Linger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZMQ_MCAST_LOOP\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "McastLoop",
          "package": "zeromq-haskell",
          "signature": "McastLoop Bool",
          "source": "src/System-ZMQ.html#SocketOption",
          "type": "function"
        },
        "index": {
          "description": "ZMQ MCAST LOOP",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "McastLoop",
          "package": "zeromq-haskell",
          "partial": "Mcast Loop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:McastLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZMQ_POLLERR\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "Native",
          "package": "zeromq-haskell",
          "signature": "Native",
          "source": "src/System-ZMQ.html#PollEvent",
          "type": "function"
        },
        "index": {
          "description": "ZMQ POLLERR",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Native",
          "package": "zeromq-haskell",
          "partial": "Native",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Native"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZMQ_NOBLOCK (0MQ-2.x), ZMQ_DONTWAIT (0MQ-3.x)\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "NoBlock",
          "package": "zeromq-haskell",
          "signature": "NoBlock",
          "source": "src/System-ZMQ-Internal.html#Flag",
          "type": "function"
        },
        "index": {
          "description": "ZMQ NOBLOCK MQ-2.x ZMQ DONTWAIT MQ-3.x",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "NoBlock",
          "package": "zeromq-haskell",
          "partial": "No Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:NoBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.ZMQ",
          "name": "None",
          "package": "zeromq-haskell",
          "signature": "None",
          "source": "src/System-ZMQ.html#PollEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "None",
          "package": "zeromq-haskell",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:None"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZMQ_POLLOUT (outgoing messages, i.e. at least 1 byte can be written)\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "Out",
          "package": "zeromq-haskell",
          "signature": "Out",
          "source": "src/System-ZMQ.html#PollEvent",
          "type": "function"
        },
        "index": {
          "description": "ZMQ POLLOUT outgoing messages i.e at least byte can be written",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Out",
          "package": "zeromq-haskell",
          "partial": "Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.ZMQ",
          "name": "Pair",
          "package": "zeromq-haskell",
          "signature": "Pair",
          "source": "src/System-ZMQ.html#Pair",
          "type": "function"
        },
        "index": {
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Pair",
          "package": "zeromq-haskell",
          "partial": "Pair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.ZMQ",
          "name": "Pub",
          "package": "zeromq-haskell",
          "signature": "Pub",
          "source": "src/System-ZMQ.html#Pub",
          "type": "function"
        },
        "index": {
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Pub",
          "package": "zeromq-haskell",
          "partial": "Pub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Pub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.ZMQ",
          "name": "Pull",
          "package": "zeromq-haskell",
          "signature": "Pull",
          "source": "src/System-ZMQ.html#Pull",
          "type": "function"
        },
        "index": {
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Pull",
          "package": "zeromq-haskell",
          "partial": "Pull",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Pull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.ZMQ",
          "name": "Push",
          "package": "zeromq-haskell",
          "signature": "Push",
          "source": "src/System-ZMQ.html#Push",
          "type": "function"
        },
        "index": {
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Push",
          "package": "zeromq-haskell",
          "partial": "Push",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZMQ_QUEUE\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "Queue",
          "package": "zeromq-haskell",
          "signature": "Queue",
          "source": "src/System-ZMQ.html#Device",
          "type": "function"
        },
        "index": {
          "description": "ZMQ QUEUE",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Queue",
          "package": "zeromq-haskell",
          "partial": "Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Queue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZMQ_RATE\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "Rate",
          "package": "zeromq-haskell",
          "signature": "Rate Int64",
          "source": "src/System-ZMQ.html#SocketOption",
          "type": "function"
        },
        "index": {
          "description": "ZMQ RATE",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Rate",
          "package": "zeromq-haskell",
          "partial": "Rate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Rate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZMQ_RCVBUF\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "ReceiveBuf",
          "package": "zeromq-haskell",
          "signature": "ReceiveBuf Word64",
          "source": "src/System-ZMQ.html#SocketOption",
          "type": "function"
        },
        "index": {
          "description": "ZMQ RCVBUF",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "ReceiveBuf",
          "package": "zeromq-haskell",
          "partial": "Receive Buf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:ReceiveBuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZMQ_RCVMORE\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "ReceiveMore",
          "package": "zeromq-haskell",
          "signature": "ReceiveMore Bool",
          "source": "src/System-ZMQ.html#SocketOption",
          "type": "function"
        },
        "index": {
          "description": "ZMQ RCVMORE",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "ReceiveMore",
          "package": "zeromq-haskell",
          "partial": "Receive More",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:ReceiveMore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZMQ_RECONNECT_IVL\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "ReconnectIVL",
          "package": "zeromq-haskell",
          "signature": "ReconnectIVL CInt",
          "source": "src/System-ZMQ.html#SocketOption",
          "type": "function"
        },
        "index": {
          "description": "ZMQ RECONNECT IVL",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "ReconnectIVL",
          "package": "zeromq-haskell",
          "partial": "Reconnect IVL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:ReconnectIVL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZMQ_RECONNECT_IVL_MAX\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "ReconnectIVLMax",
          "package": "zeromq-haskell",
          "signature": "ReconnectIVLMax CInt",
          "source": "src/System-ZMQ.html#SocketOption",
          "type": "function"
        },
        "index": {
          "description": "ZMQ RECONNECT IVL MAX",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "ReconnectIVLMax",
          "package": "zeromq-haskell",
          "partial": "Reconnect IVLMax",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:ReconnectIVLMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZMQ_RECOVERY_IVL\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "RecoveryIVL",
          "package": "zeromq-haskell",
          "signature": "RecoveryIVL Int64",
          "source": "src/System-ZMQ.html#SocketOption",
          "type": "function"
        },
        "index": {
          "description": "ZMQ RECOVERY IVL",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "RecoveryIVL",
          "package": "zeromq-haskell",
          "partial": "Recovery IVL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:RecoveryIVL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZMQ_RECOVERY_IVL_MSEC\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "RecoveryIVLMsec",
          "package": "zeromq-haskell",
          "signature": "RecoveryIVLMsec Int64",
          "source": "src/System-ZMQ.html#SocketOption",
          "type": "function"
        },
        "index": {
          "description": "ZMQ RECOVERY IVL MSEC",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "RecoveryIVLMsec",
          "package": "zeromq-haskell",
          "partial": "Recovery IVLMsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:RecoveryIVLMsec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.ZMQ",
          "name": "Rep",
          "package": "zeromq-haskell",
          "signature": "Rep",
          "source": "src/System-ZMQ.html#Rep",
          "type": "function"
        },
        "index": {
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Rep",
          "package": "zeromq-haskell",
          "partial": "Rep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Rep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.ZMQ",
          "name": "Req",
          "package": "zeromq-haskell",
          "signature": "Req",
          "source": "src/System-ZMQ.html#Req",
          "type": "function"
        },
        "index": {
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Req",
          "package": "zeromq-haskell",
          "partial": "Req",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Req"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.ZMQ",
          "name": "Router",
          "package": "zeromq-haskell",
          "signature": "Router",
          "source": "src/System-ZMQ.html#Router",
          "type": "function"
        },
        "index": {
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Router",
          "package": "zeromq-haskell",
          "partial": "Router",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Router"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.ZMQ",
          "name": "S",
          "package": "zeromq-haskell",
          "signature": "forall a . S (Socket a) PollEvent",
          "source": "src/System-ZMQ.html#Poll",
          "type": "function"
        },
        "index": {
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "S",
          "package": "zeromq-haskell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZMQ_SNDBUF\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "SendBuf",
          "package": "zeromq-haskell",
          "signature": "SendBuf Word64",
          "source": "src/System-ZMQ.html#SocketOption",
          "type": "function"
        },
        "index": {
          "description": "ZMQ SNDBUF",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "SendBuf",
          "package": "zeromq-haskell",
          "partial": "Send Buf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:SendBuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZMQ_SNDMORE\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "SndMore",
          "package": "zeromq-haskell",
          "signature": "SndMore",
          "source": "src/System-ZMQ-Internal.html#Flag",
          "type": "function"
        },
        "index": {
          "description": "ZMQ SNDMORE",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "SndMore",
          "package": "zeromq-haskell",
          "partial": "Snd More",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:SndMore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZMQ_STREAMER\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "Streamer",
          "package": "zeromq-haskell",
          "signature": "Streamer",
          "source": "src/System-ZMQ.html#Device",
          "type": "function"
        },
        "index": {
          "description": "ZMQ STREAMER",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Streamer",
          "package": "zeromq-haskell",
          "partial": "Streamer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Streamer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.ZMQ",
          "name": "Sub",
          "package": "zeromq-haskell",
          "signature": "Sub",
          "source": "src/System-ZMQ.html#Sub",
          "type": "function"
        },
        "index": {
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Sub",
          "package": "zeromq-haskell",
          "partial": "Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZMQ_SWAP\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "Swap",
          "package": "zeromq-haskell",
          "signature": "Swap Int64",
          "source": "src/System-ZMQ.html#SocketOption",
          "type": "function"
        },
        "index": {
          "description": "ZMQ SWAP",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Swap",
          "package": "zeromq-haskell",
          "partial": "Swap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Swap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.ZMQ",
          "name": "Up",
          "package": "zeromq-haskell",
          "signature": "Up",
          "source": "src/System-ZMQ.html#Up",
          "type": "function"
        },
        "index": {
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "Up",
          "package": "zeromq-haskell",
          "partial": "Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:Up"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.ZMQ",
          "name": "XRep",
          "package": "zeromq-haskell",
          "signature": "XRep",
          "source": "src/System-ZMQ.html#XRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "XRep",
          "package": "zeromq-haskell",
          "partial": "XRep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:XRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.ZMQ",
          "name": "XReq",
          "package": "zeromq-haskell",
          "signature": "XReq",
          "source": "src/System-ZMQ.html#XReq",
          "type": "function"
        },
        "index": {
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "XReq",
          "package": "zeromq-haskell",
          "partial": "XReq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:XReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBind the socket to the given address (zmq_bind)\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "bind",
          "package": "zeromq-haskell",
          "signature": "Socket a -\u003e String -\u003e IO ()",
          "source": "src/System-ZMQ.html#bind",
          "type": "function"
        },
        "index": {
          "description": "Bind the socket to the given address zmq bind",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "bind",
          "normalized": "Socket a-\u003eString-\u003eIO()",
          "package": "zeromq-haskell",
          "signature": "Socket a-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:bind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose a 0MQ socket. \u003ccode\u003e\u003ca\u003ewithSocket\u003c/a\u003e\u003c/code\u003e provides automatic socket closing and may\n be safer to use.\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "close",
          "package": "zeromq-haskell",
          "signature": "Socket a -\u003e IO ()",
          "source": "src/System-ZMQ.html#close",
          "type": "function"
        },
        "index": {
          "description": "Close MQ socket withSocket provides automatic socket closing and may be safer to use",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "close",
          "normalized": "Socket a-\u003eIO()",
          "package": "zeromq-haskell",
          "signature": "Socket a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect the socket to the given address (zmq_connect).\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "connect",
          "package": "zeromq-haskell",
          "signature": "Socket a -\u003e String -\u003e IO ()",
          "source": "src/System-ZMQ.html#connect",
          "type": "function"
        },
        "index": {
          "description": "Connect the socket to the given address zmq connect",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "connect",
          "normalized": "Socket a-\u003eString-\u003eIO()",
          "package": "zeromq-haskell",
          "signature": "Socket a-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLaunch a ZeroMQ device (zmq_device).\n\u003c/p\u003e\u003cp\u003ePlease note that this call never returns.\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "device",
          "package": "zeromq-haskell",
          "signature": "Device -\u003e Socket a -\u003e Socket b -\u003e IO ()",
          "source": "src/System-ZMQ.html#device",
          "type": "function"
        },
        "index": {
          "description": "Launch ZeroMQ device zmq device Please note that this call never returns",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "device",
          "normalized": "Device-\u003eSocket a-\u003eSocket b-\u003eIO()",
          "package": "zeromq-haskell",
          "signature": "Device-\u003eSocket a-\u003eSocket b-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:device"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the given socket option by passing in some dummy value of\n that option. The actual value will be returned. Please note that\n there are certain combatibility constraints w.r.t the socket\n type (cf. man zmq_setsockopt).\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "getOption",
          "package": "zeromq-haskell",
          "signature": "Socket a -\u003e SocketOption -\u003e IO SocketOption",
          "source": "src/System-ZMQ.html#getOption",
          "type": "function"
        },
        "index": {
          "description": "Get the given socket option by passing in some dummy value of that option The actual value will be returned Please note that there are certain combatibility constraints w.r.t the socket type cf man zmq setsockopt",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "getOption",
          "normalized": "Socket a-\u003eSocketOption-\u003eIO SocketOption",
          "package": "zeromq-haskell",
          "partial": "Option",
          "signature": "Socket a-\u003eSocketOption-\u003eIO SocketOption",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:getOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize a 0MQ context (cf. zmq_init for details).  You should\n normally prefer to use \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "init",
          "package": "zeromq-haskell",
          "signature": "Size -\u003e IO Context",
          "source": "src/System-ZMQ.html#init",
          "type": "function"
        },
        "index": {
          "description": "Initialize MQ context cf zmq init for details You should normally prefer to use with instead",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "init",
          "normalized": "Size-\u003eIO Context",
          "package": "zeromq-haskell",
          "signature": "Size-\u003eIO Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent of ZMQ_RCVMORE, i.e. returns True if a multi-part\n message currently being read has more parts to follow, otherwise\n False.\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "moreToReceive",
          "package": "zeromq-haskell",
          "signature": "Socket a -\u003e IO Bool",
          "source": "src/System-ZMQ.html#moreToReceive",
          "type": "function"
        },
        "index": {
          "description": "Equivalent of ZMQ RCVMORE i.e returns True if multi-part message currently being read has more parts to follow otherwise False",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "moreToReceive",
          "normalized": "Socket a-\u003eIO Bool",
          "package": "zeromq-haskell",
          "partial": "To Receive",
          "signature": "Socket a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:moreToReceive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolls for events on the given \u003ccode\u003e\u003ca\u003ePoll\u003c/a\u003e\u003c/code\u003e descriptors. Returns the\n same list of \u003ccode\u003e\u003ca\u003ePoll\u003c/a\u003e\u003c/code\u003e descriptors with an \u003ca\u003eupdated\u003c/a\u003e \u003ccode\u003e\u003ca\u003ePollEvent\u003c/a\u003e\u003c/code\u003e field\n (cf. zmq_poll). Sockets which have seen no activity have \u003ccode\u003e\u003ca\u003eNone\u003c/a\u003e\u003c/code\u003e in\n their \u003ccode\u003e\u003ca\u003ePollEvent\u003c/a\u003e\u003c/code\u003e field.\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "poll",
          "package": "zeromq-haskell",
          "signature": "[Poll] -\u003e Timeout -\u003e IO [Poll]",
          "source": "src/System-ZMQ.html#poll",
          "type": "function"
        },
        "index": {
          "description": "Polls for events on the given Poll descriptors Returns the same list of Poll descriptors with an updated PollEvent field cf zmq poll Sockets which have seen no activity have None in their PollEvent field",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "poll",
          "normalized": "[Poll]-\u003eTimeout-\u003eIO[Poll]",
          "package": "zeromq-haskell",
          "signature": "[Poll]-\u003eTimeout-\u003eIO[Poll]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:poll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive a \u003ccode\u003eByteString\u003c/code\u003e from socket (zmq_recv).\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "receive",
          "package": "zeromq-haskell",
          "signature": "Socket a -\u003e [Flag] -\u003e IO ByteString",
          "source": "src/System-ZMQ.html#receive",
          "type": "function"
        },
        "index": {
          "description": "Receive ByteString from socket zmq recv",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "receive",
          "normalized": "Socket a-\u003e[Flag]-\u003eIO ByteString",
          "package": "zeromq-haskell",
          "signature": "Socket a-\u003e[Flag]-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:receive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e over the socket (zmq_send).\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "send",
          "package": "zeromq-haskell",
          "signature": "Socket a -\u003e ByteString -\u003e [Flag] -\u003e IO ()",
          "source": "src/System-ZMQ.html#send",
          "type": "function"
        },
        "index": {
          "description": "Send the given ByteString over the socket zmq send",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "send",
          "normalized": "Socket a-\u003eByteString-\u003e[Flag]-\u003eIO()",
          "package": "zeromq-haskell",
          "signature": "Socket a-\u003eByteString-\u003e[Flag]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e over the socket (zmq_send).\n   This is operationally identical to \u003ccode\u003esend socket (Strict.concat\n   (Lazy.toChunks lbs)) flags\u003c/code\u003e but may be more efficient.\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "send'",
          "package": "zeromq-haskell",
          "signature": "Socket a -\u003e ByteString -\u003e [Flag] -\u003e IO ()",
          "source": "src/System-ZMQ.html#send%27",
          "type": "function"
        },
        "index": {
          "description": "Send the given ByteString over the socket zmq send This is operationally identical to send socket Strict.concat Lazy.toChunks lbs flags but may be more efficient",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "send'",
          "normalized": "Socket a-\u003eByteString-\u003e[Flag]-\u003eIO()",
          "package": "zeromq-haskell",
          "signature": "Socket a-\u003eByteString-\u003e[Flag]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:send-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the given option on the socket. Please note that there are\n certain combatibility constraints w.r.t the socket type (cf. man\n zmq_setsockopt).\n\u003c/p\u003e\u003cp\u003ePlease note that subscribe/unsubscribe is handled with separate\n functions.\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "setOption",
          "package": "zeromq-haskell",
          "signature": "Socket a -\u003e SocketOption -\u003e IO ()",
          "source": "src/System-ZMQ.html#setOption",
          "type": "function"
        },
        "index": {
          "description": "Set the given option on the socket Please note that there are certain combatibility constraints w.r.t the socket type cf man zmq setsockopt Please note that subscribe unsubscribe is handled with separate functions",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "setOption",
          "normalized": "Socket a-\u003eSocketOption-\u003eIO()",
          "package": "zeromq-haskell",
          "partial": "Option",
          "signature": "Socket a-\u003eSocketOption-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:setOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new 0MQ socket within the given context. \u003ccode\u003e\u003ca\u003ewithSocket\u003c/a\u003e\u003c/code\u003e provides\n automatic socket closing and may be safer to use.\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "socket",
          "package": "zeromq-haskell",
          "signature": "Context -\u003e a -\u003e IO (Socket a)",
          "source": "src/System-ZMQ.html#socket",
          "type": "function"
        },
        "index": {
          "description": "Create new MQ socket within the given context withSocket provides automatic socket closing and may be safer to use",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "socket",
          "normalized": "Context-\u003ea-\u003eIO(Socket a)",
          "package": "zeromq-haskell",
          "signature": "Context-\u003ea-\u003eIO(Socket a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:socket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubscribe Socket to given subscription.\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "subscribe",
          "package": "zeromq-haskell",
          "signature": "Socket a -\u003e String -\u003e IO ()",
          "source": "src/System-ZMQ.html#subscribe",
          "type": "function"
        },
        "index": {
          "description": "Subscribe Socket to given subscription",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "subscribe",
          "normalized": "Socket a-\u003eString-\u003eIO()",
          "package": "zeromq-haskell",
          "signature": "Socket a-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:subscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminate a 0MQ context (cf. zmq_term).  You should normally\n prefer to use \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "term",
          "package": "zeromq-haskell",
          "signature": "Context -\u003e IO ()",
          "source": "src/System-ZMQ.html#term",
          "type": "function"
        },
        "index": {
          "description": "Terminate MQ context cf zmq term You should normally prefer to use with instead",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "term",
          "normalized": "Context-\u003eIO()",
          "package": "zeromq-haskell",
          "signature": "Context-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:term"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsubscribe Socket from given subscription.\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "unsubscribe",
          "package": "zeromq-haskell",
          "signature": "Socket a -\u003e String -\u003e IO ()",
          "source": "src/System-ZMQ.html#unsubscribe",
          "type": "function"
        },
        "index": {
          "description": "Unsubscribe Socket from given subscription",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "unsubscribe",
          "normalized": "Socket a-\u003eString-\u003eIO()",
          "package": "zeromq-haskell",
          "signature": "Socket a-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:unsubscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.ZMQ",
          "name": "version",
          "package": "zeromq-haskell",
          "signature": "IO (Int, Int, Int)",
          "source": "src/System-ZMQ.html#version",
          "type": "function"
        },
        "index": {
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "version",
          "normalized": "IO(Int,Int,Int)",
          "package": "zeromq-haskell",
          "signature": "IO(Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an action with a 0MQ context.  The \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e supplied to your\n action will \u003cem\u003enot\u003c/em\u003e be valid after the action either returns or\n throws an exception.\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "withContext",
          "package": "zeromq-haskell",
          "signature": "Size -\u003e (Context -\u003e IO a) -\u003e IO a",
          "source": "src/System-ZMQ.html#withContext",
          "type": "function"
        },
        "index": {
          "description": "Run an action with MQ context The Context supplied to your action will not be valid after the action either returns or throws an exception",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "withContext",
          "normalized": "Size-\u003e(Context-\u003eIO a)-\u003eIO a",
          "package": "zeromq-haskell",
          "partial": "Context",
          "signature": "Size-\u003e(Context-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:withContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an action with a 0MQ socket. The socket will be closed after running\n the supplied action even if an error occurs. The socket supplied to your\n action will \u003cem\u003enot\u003c/em\u003e be valid after the action terminates.\n\u003c/p\u003e",
          "module": "System.ZMQ",
          "name": "withSocket",
          "package": "zeromq-haskell",
          "signature": "Context -\u003e a -\u003e (Socket a -\u003e IO b) -\u003e IO b",
          "source": "src/System-ZMQ.html#withSocket",
          "type": "function"
        },
        "index": {
          "description": "Run an action with MQ socket The socket will be closed after running the supplied action even if an error occurs The socket supplied to your action will not be valid after the action terminates",
          "hierarchy": "System ZMQ",
          "module": "System.ZMQ",
          "name": "withSocket",
          "normalized": "Context-\u003ea-\u003e(Socket a-\u003eIO b)-\u003eIO b",
          "package": "zeromq-haskell",
          "partial": "Socket",
          "signature": "Context-\u003ea-\u003e(Socket a-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zeromq-haskell/docs/System-ZMQ.html#v:withSocket"
      }
    }
  ]
]