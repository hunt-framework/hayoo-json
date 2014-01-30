[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a Haskell binding for the nanomsg library: \u003ca\u003ehttp://nanomsg.org/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThere's support for blocking send and recv, a non-blocking receive,\n and for all the socket types and the functions you need to wire\n them up and tear them down again.\n\u003c/p\u003e\u003cp\u003eMost socket options are available through accessor and mutator\n functions. Sockets are typed, transports are not.\n\u003c/p\u003e\u003cp\u003eSocket type documentation is adapted or quoted verbatim from the\n nanomsg manual. Please refer to nanomsg.org for information on\n how to use the library.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "module",
        "fct-source": "src/Nanomsg.html",
        "fct-type": "module",
        "title": "Nanomsg"
      },
      "index": {
        "description": "This is Haskell binding for the nanomsg library http nanomsg.org There support for blocking send and recv non-blocking receive and for all the socket types and the functions you need to wire them up and tear them down again Most socket options are available through accessor and mutator functions Sockets are typed transports are not Socket type documentation is adapted or quoted verbatim from the nanomsg manual Please refer to nanomsg.org for information on how to use the library",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "Nanomsg",
        "normalized": "",
        "package": "nanomsg-haskell",
        "partial": "Nanomsg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#t:Bus",
      "description": {
        "fct-descr": "\u003cp\u003eBroadcasts messages from any node to all other nodes in the topology.\n The socket should never receives messages that it sent itself.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "data",
        "fct-source": "src/Nanomsg.html#Bus",
        "fct-type": "data",
        "title": "Bus"
      },
      "index": {
        "description": "Broadcasts messages from any node to all other nodes in the topology The socket should never receives messages that it sent itself",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "Bus",
        "normalized": "",
        "package": "nanomsg-haskell",
        "partial": "Bus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#t:Endpoint",
      "description": {
        "fct-descr": "\u003cp\u003eEndpoint identifier. Created by \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ebind\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eClose connections using \u003ccode\u003e\u003ca\u003eshutdown\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "data",
        "fct-source": "src/Nanomsg.html#Endpoint",
        "fct-type": "data",
        "title": "Endpoint"
      },
      "index": {
        "description": "Endpoint identifier Created by connect or bind Close connections using shutdown",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "Endpoint",
        "normalized": "",
        "package": "nanomsg-haskell",
        "partial": "Endpoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#t:NNException",
      "description": {
        "fct-descr": "\u003cp\u003ePretty much any error condition throws this exception.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "data",
        "fct-source": "src/Nanomsg.html#NNException",
        "fct-type": "data",
        "title": "NNException"
      },
      "index": {
        "description": "Pretty much any error condition throws this exception",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "NNException",
        "normalized": "",
        "package": "nanomsg-haskell",
        "partial": "NNException",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#t:Pair",
      "description": {
        "fct-descr": "\u003cp\u003eSocket for communication with exactly one peer. Each\n party can send messages at any time. If the peer is not\n available or the send buffer is full, subsequent calls\n will block until it&#8217;s possible to send the message.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "data",
        "fct-source": "src/Nanomsg.html#Pair",
        "fct-type": "data",
        "title": "Pair"
      },
      "index": {
        "description": "Socket for communication with exactly one peer Each party can send messages at any time If the peer is not available or the send buffer is full subsequent calls will block until it possible to send the message",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "Pair",
        "normalized": "",
        "package": "nanomsg-haskell",
        "partial": "Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#t:Pub",
      "description": {
        "fct-descr": "\u003cp\u003eThis socket is used to distribute messages to multiple destinations.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "data",
        "fct-source": "src/Nanomsg.html#Pub",
        "fct-type": "data",
        "title": "Pub"
      },
      "index": {
        "description": "This socket is used to distribute messages to multiple destinations",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "Pub",
        "normalized": "",
        "package": "nanomsg-haskell",
        "partial": "Pub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#t:Pull",
      "description": {
        "fct-descr": "\u003cp\u003eThis socket is used to receive a message from a cluster of nodes.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "data",
        "fct-source": "src/Nanomsg.html#Pull",
        "fct-type": "data",
        "title": "Pull"
      },
      "index": {
        "description": "This socket is used to receive message from cluster of nodes",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "Pull",
        "normalized": "",
        "package": "nanomsg-haskell",
        "partial": "Pull",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#t:Push",
      "description": {
        "fct-descr": "\u003cp\u003ePush and Pull sockets fair queue messages from one processing step, load\n balancing them among instances of the next processing step.\n\u003c/p\u003e\u003cp\u003eThis socket is used to send messages to a cluster of load-balanced nodes.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "data",
        "fct-source": "src/Nanomsg.html#Push",
        "fct-type": "data",
        "title": "Push"
      },
      "index": {
        "description": "Push and Pull sockets fair queue messages from one processing step load balancing them among instances of the next processing step This socket is used to send messages to cluster of load-balanced nodes",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "Push",
        "normalized": "",
        "package": "nanomsg-haskell",
        "partial": "Push",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#t:Receiver",
      "description": {
        "fct-descr": "\u003cp\u003eTypeclass for sockets that implement recv\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "class",
        "fct-source": "src/Nanomsg.html#Receiver",
        "fct-type": "class",
        "title": "Receiver"
      },
      "index": {
        "description": "Typeclass for sockets that implement recv",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "Receiver",
        "normalized": "",
        "package": "nanomsg-haskell",
        "partial": "Receiver",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#t:Rep",
      "description": {
        "fct-descr": "\u003cp\u003eUsed to implement a stateless worker that receives requests\n and sends replies.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "data",
        "fct-source": "src/Nanomsg.html#Rep",
        "fct-type": "data",
        "title": "Rep"
      },
      "index": {
        "description": "Used to implement stateless worker that receives requests and sends replies",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "Rep",
        "normalized": "",
        "package": "nanomsg-haskell",
        "partial": "Rep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#t:Req",
      "description": {
        "fct-descr": "\u003cp\u003eUsed to implement a client application that sends requests\n and receives replies. The socket will resend requests automatically\n if there's no reply within a given time. The default timeout\n is 1 minute.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003esetRequestResendInterval\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "data",
        "fct-source": "src/Nanomsg.html#Req",
        "fct-type": "data",
        "title": "Req"
      },
      "index": {
        "description": "Used to implement client application that sends requests and receives replies The socket will resend requests automatically if there no reply within given time The default timeout is minute See also setRequestResendInterval",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "Req",
        "normalized": "",
        "package": "nanomsg-haskell",
        "partial": "Req",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#t:Respondent",
      "description": {
        "fct-descr": "\u003cp\u003eUsed to respond to a survey. Survey is received using receive,\n response is sent using send. This socket can be connected to\n at most one peer.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "data",
        "fct-source": "src/Nanomsg.html#Respondent",
        "fct-type": "data",
        "title": "Respondent"
      },
      "index": {
        "description": "Used to respond to survey Survey is received using receive response is sent using send This socket can be connected to at most one peer",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "Respondent",
        "normalized": "",
        "package": "nanomsg-haskell",
        "partial": "Respondent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#t:Sender",
      "description": {
        "fct-descr": "\u003cp\u003eTypeclass restricting which sockets can use the send function.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "class",
        "fct-source": "src/Nanomsg.html#Sender",
        "fct-type": "class",
        "title": "Sender"
      },
      "index": {
        "description": "Typeclass restricting which sockets can use the send function",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "Sender",
        "normalized": "",
        "package": "nanomsg-haskell",
        "partial": "Sender",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#t:Socket",
      "description": {
        "fct-descr": "\u003cp\u003eSockets are created by \u003ccode\u003e\u003ca\u003esocket\u003c/a\u003e\u003c/code\u003e and connections are established with \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ebind\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFree sockets using \u003ccode\u003e\u003ca\u003eclose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "data",
        "fct-source": "src/Nanomsg.html#Socket",
        "fct-type": "data",
        "title": "Socket"
      },
      "index": {
        "description": "Sockets are created by socket and connections are established with connect or bind Free sockets using close",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "Socket",
        "normalized": "",
        "package": "nanomsg-haskell",
        "partial": "Socket",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#t:SocketType",
      "description": {
        "fct-descr": "\u003cp\u003eTypeclass for all sockets\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "class",
        "fct-source": "src/Nanomsg.html#SocketType",
        "fct-type": "class",
        "title": "SocketType"
      },
      "index": {
        "description": "Typeclass for all sockets",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "SocketType",
        "normalized": "",
        "package": "nanomsg-haskell",
        "partial": "Socket Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#t:Sub",
      "description": {
        "fct-descr": "\u003cp\u003eReceives messages from the publisher. Only messages that the socket is\n subscribed to are received. When the socket is created there are no\n subscriptions and thus no messages will be received.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003esubscribe\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunsubscribe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "data",
        "fct-source": "src/Nanomsg.html#Sub",
        "fct-type": "data",
        "title": "Sub"
      },
      "index": {
        "description": "Receives messages from the publisher Only messages that the socket is subscribed to are received When the socket is created there are no subscriptions and thus no messages will be received See also subscribe and unsubscribe",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "Sub",
        "normalized": "",
        "package": "nanomsg-haskell",
        "partial": "Sub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#t:Surveyor",
      "description": {
        "fct-descr": "\u003cp\u003eSurveyor and respondent are used to broadcast a survey to multiple\n locations and gather the responses.\n\u003c/p\u003e\u003cp\u003eThis socket is used to send the survey. The survey is delivered to all\n the connected respondents. Once the query is sent, the socket can be used\n to receive the responses.\n\u003c/p\u003e\u003cp\u003eWhen the survey deadline expires, receive will throw an NNException.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003esetSurveyorDeadline\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "data",
        "fct-source": "src/Nanomsg.html#Surveyor",
        "fct-type": "data",
        "title": "Surveyor"
      },
      "index": {
        "description": "Surveyor and respondent are used to broadcast survey to multiple locations and gather the responses This socket is used to send the survey The survey is delivered to all the connected respondents Once the query is sent the socket can be used to receive the responses When the survey deadline expires receive will throw an NNException See also setSurveyorDeadline",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "Surveyor",
        "normalized": "",
        "package": "nanomsg-haskell",
        "partial": "Surveyor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:Bus",
      "description": {
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Bus",
        "fct-source": "src/Nanomsg.html#Bus",
        "fct-type": "function",
        "title": "Bus"
      },
      "index": {
        "description": "",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "Bus",
        "normalized": "",
        "package": "nanomsg-haskell",
        "partial": "Bus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:Pair",
      "description": {
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Pair",
        "fct-source": "src/Nanomsg.html#Pair",
        "fct-type": "function",
        "title": "Pair"
      },
      "index": {
        "description": "",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "Pair",
        "normalized": "",
        "package": "nanomsg-haskell",
        "partial": "Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:Pub",
      "description": {
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Pub",
        "fct-source": "src/Nanomsg.html#Pub",
        "fct-type": "function",
        "title": "Pub"
      },
      "index": {
        "description": "",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "Pub",
        "normalized": "",
        "package": "nanomsg-haskell",
        "partial": "Pub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:Pull",
      "description": {
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Pull",
        "fct-source": "src/Nanomsg.html#Pull",
        "fct-type": "function",
        "title": "Pull"
      },
      "index": {
        "description": "",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "Pull",
        "normalized": "",
        "package": "nanomsg-haskell",
        "partial": "Pull",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:Push",
      "description": {
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Push",
        "fct-source": "src/Nanomsg.html#Push",
        "fct-type": "function",
        "title": "Push"
      },
      "index": {
        "description": "",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "Push",
        "normalized": "",
        "package": "nanomsg-haskell",
        "partial": "Push",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:Rep",
      "description": {
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Rep",
        "fct-source": "src/Nanomsg.html#Rep",
        "fct-type": "function",
        "title": "Rep"
      },
      "index": {
        "description": "",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "Rep",
        "normalized": "",
        "package": "nanomsg-haskell",
        "partial": "Rep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:Req",
      "description": {
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Req",
        "fct-source": "src/Nanomsg.html#Req",
        "fct-type": "function",
        "title": "Req"
      },
      "index": {
        "description": "",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "Req",
        "normalized": "",
        "package": "nanomsg-haskell",
        "partial": "Req",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:Respondent",
      "description": {
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Respondent",
        "fct-source": "src/Nanomsg.html#Respondent",
        "fct-type": "function",
        "title": "Respondent"
      },
      "index": {
        "description": "",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "Respondent",
        "normalized": "",
        "package": "nanomsg-haskell",
        "partial": "Respondent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:Sub",
      "description": {
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Sub",
        "fct-source": "src/Nanomsg.html#Sub",
        "fct-type": "function",
        "title": "Sub"
      },
      "index": {
        "description": "",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "Sub",
        "normalized": "",
        "package": "nanomsg-haskell",
        "partial": "Sub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:Surveyor",
      "description": {
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Surveyor",
        "fct-source": "src/Nanomsg.html#Surveyor",
        "fct-type": "function",
        "title": "Surveyor"
      },
      "index": {
        "description": "",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "Surveyor",
        "normalized": "",
        "package": "nanomsg-haskell",
        "partial": "Surveyor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:bind",
      "description": {
        "fct-descr": "\u003cp\u003eBinds the socket to a local interface.\n\u003c/p\u003e\u003cp\u003eSee the nanomsg documentation for specifics on transports.\n Note that host names do not work for tcp. Some examples are:\n\u003c/p\u003e\u003cpre\u003e bind sock \"tcp://*:5560\"\n bind sock \"tcp://eth0:5560\"\n bind sock \"tcp://127.0.0.1:5560\"\n bind sock \"inproc://test\"\n bind sock \"ipc:///tmp/test.ipc\"\n\u003c/pre\u003e\u003cp\u003eThis function returns an \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e, which can be supplied\n to \u003ccode\u003e\u003ca\u003eshutdown\u003c/a\u003e\u003c/code\u003e to remove a connection.\n\u003c/p\u003e\u003cp\u003eSee also: \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eshutdown\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Socket a -\u003e String -\u003e IO Endpoint",
        "fct-source": "src/Nanomsg.html#bind",
        "fct-type": "function",
        "title": "bind"
      },
      "index": {
        "description": "Binds the socket to local interface See the nanomsg documentation for specifics on transports Note that host names do not work for tcp Some examples are bind sock tcp bind sock tcp eth0 bind sock tcp bind sock inproc test bind sock ipc tmp test.ipc This function returns an Endpoint which can be supplied to shutdown to remove connection See also connect shutdown",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "bind",
        "normalized": "Socket a-\u003eString-\u003eIO Endpoint",
        "package": "nanomsg-haskell",
        "partial": "",
        "signature": "Socket a-\u003eString-\u003eIO Endpoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:close",
      "description": {
        "fct-descr": "\u003cp\u003eCloses the socket. Any buffered inbound messages that were not yet\n received by the application will be discarded. The library will try to\n deliver any outstanding outbound messages for the time specified by\n NN_LINGER socket option. The call will block in the meantime.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Socket a -\u003e IO ()",
        "fct-source": "src/Nanomsg.html#close",
        "fct-type": "function",
        "title": "close"
      },
      "index": {
        "description": "Closes the socket Any buffered inbound messages that were not yet received by the application will be discarded The library will try to deliver any outstanding outbound messages for the time specified by NN LINGER socket option The call will block in the meantime",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "close",
        "normalized": "Socket a-\u003eIO()",
        "package": "nanomsg-haskell",
        "partial": "",
        "signature": "Socket a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:connect",
      "description": {
        "fct-descr": "\u003cp\u003eConnects the socket to an endpoint.\n\u003c/p\u003e\u003cp\u003ee.g. :\n\u003c/p\u003e\u003cpre\u003e connect sock \"tcp://localhost:5560\"\n connect sock \"inproc://test\"\n\u003c/pre\u003e\u003cp\u003eSee also: \u003ccode\u003e\u003ca\u003ebind\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eshutdown\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Socket a -\u003e String -\u003e IO Endpoint",
        "fct-source": "src/Nanomsg.html#connect",
        "fct-type": "function",
        "title": "connect"
      },
      "index": {
        "description": "Connects the socket to an endpoint e.g connect sock tcp localhost connect sock inproc test See also bind shutdown",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "connect",
        "normalized": "Socket a-\u003eString-\u003eIO Endpoint",
        "package": "nanomsg-haskell",
        "partial": "",
        "signature": "Socket a-\u003eString-\u003eIO Endpoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:ipv4Only",
      "description": {
        "fct-descr": "\u003cp\u003eIf set to 1, only IPv4 addresses are used. If set to 0, both IPv4\n and IPv6 addresses are used.\n\u003c/p\u003e\u003cp\u003eDefault value is 1.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Socket a -\u003e IO Int",
        "fct-source": "src/Nanomsg.html#ipv4Only",
        "fct-type": "function",
        "title": "ipv4Only"
      },
      "index": {
        "description": "If set to only IPv4 addresses are used If set to both IPv4 and IPv6 addresses are used Default value is",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "ipv4Only",
        "normalized": "Socket a-\u003eIO Int",
        "package": "nanomsg-haskell",
        "partial": "Only",
        "signature": "Socket a-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:linger",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies how long the socket should try to send pending outbound\n messages after close has been called, in milliseconds.\n\u003c/p\u003e\u003cp\u003eNegative value means infinite linger. Default value is 1000 (1 second).\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Socket a -\u003e IO Int",
        "fct-source": "src/Nanomsg.html#linger",
        "fct-type": "function",
        "title": "linger"
      },
      "index": {
        "description": "Specifies how long the socket should try to send pending outbound messages after close has been called in milliseconds Negative value means infinite linger Default value is second",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "linger",
        "normalized": "Socket a-\u003eIO Int",
        "package": "nanomsg-haskell",
        "partial": "",
        "signature": "Socket a-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:rcvBuf",
      "description": {
        "fct-descr": "\u003cp\u003eSize of the receive buffer, in bytes. To prevent blocking for messages\n larger than the buffer, exactly one message may be buffered in addition\n to the data in the receive buffer.\n\u003c/p\u003e\u003cp\u003eDefault value is 128kB.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Socket a -\u003e IO Int",
        "fct-source": "src/Nanomsg.html#rcvBuf",
        "fct-type": "function",
        "title": "rcvBuf"
      },
      "index": {
        "description": "Size of the receive buffer in bytes To prevent blocking for messages larger than the buffer exactly one message may be buffered in addition to the data in the receive buffer Default value is kB",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "rcvBuf",
        "normalized": "Socket a-\u003eIO Int",
        "package": "nanomsg-haskell",
        "partial": "Buf",
        "signature": "Socket a-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:reconnectInterval",
      "description": {
        "fct-descr": "\u003cp\u003eFor connection-based transports such as TCP, this option specifies\n how long to wait, in milliseconds, when connection is broken before\n trying to re-establish it.\n\u003c/p\u003e\u003cp\u003eNote that actual reconnect interval may be randomised to some extent\n to prevent severe reconnection storms.\n\u003c/p\u003e\u003cp\u003eDefault value is 100 (0.1 second).\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Socket a -\u003e IO Int",
        "fct-source": "src/Nanomsg.html#reconnectInterval",
        "fct-type": "function",
        "title": "reconnectInterval"
      },
      "index": {
        "description": "For connection-based transports such as TCP this option specifies how long to wait in milliseconds when connection is broken before trying to re-establish it Note that actual reconnect interval may be randomised to some extent to prevent severe reconnection storms Default value is second",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "reconnectInterval",
        "normalized": "Socket a-\u003eIO Int",
        "package": "nanomsg-haskell",
        "partial": "Interval",
        "signature": "Socket a-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:reconnectIntervalMax",
      "description": {
        "fct-descr": "\u003cp\u003eThis option is to be used only in addition to NN_RECONNECT_IVL option.\n It specifies maximum reconnection interval. On each reconnect attempt,\n the previous interval is doubled until NN_RECONNECT_IVL_MAX is reached.\n\u003c/p\u003e\u003cp\u003eValue of zero means that no exponential backoff is performed and reconnect\n interval is based only on NN_RECONNECT_IVL. If NN_RECONNECT_IVL_MAX is\n less than NN_RECONNECT_IVL, it is ignored.\n\u003c/p\u003e\u003cp\u003eDefault value is 0.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Socket a -\u003e IO Int",
        "fct-source": "src/Nanomsg.html#reconnectIntervalMax",
        "fct-type": "function",
        "title": "reconnectIntervalMax"
      },
      "index": {
        "description": "This option is to be used only in addition to NN RECONNECT IVL option It specifies maximum reconnection interval On each reconnect attempt the previous interval is doubled until NN RECONNECT IVL MAX is reached Value of zero means that no exponential backoff is performed and reconnect interval is based only on NN RECONNECT IVL If NN RECONNECT IVL MAX is less than NN RECONNECT IVL it is ignored Default value is",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "reconnectIntervalMax",
        "normalized": "Socket a-\u003eIO Int",
        "package": "nanomsg-haskell",
        "partial": "Interval Max",
        "signature": "Socket a-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:recv",
      "description": {
        "fct-descr": "\u003cp\u003eBlocking receive.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Socket a -\u003e IO ByteString",
        "fct-source": "src/Nanomsg.html#recv",
        "fct-type": "function",
        "title": "recv"
      },
      "index": {
        "description": "Blocking receive",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "recv",
        "normalized": "Socket a-\u003eIO ByteString",
        "package": "nanomsg-haskell",
        "partial": "",
        "signature": "Socket a-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:recv-39-",
      "description": {
        "fct-descr": "\u003cp\u003eNonblocking receive function.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Socket a -\u003e IO (Maybe ByteString)",
        "fct-source": "src/Nanomsg.html#recv%27",
        "fct-type": "function",
        "title": "recv'"
      },
      "index": {
        "description": "Nonblocking receive function",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "recv'",
        "normalized": "Socket a-\u003eIO(Maybe ByteString)",
        "package": "nanomsg-haskell",
        "partial": "",
        "signature": "Socket a-\u003eIO(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:requestResendInterval",
      "description": {
        "fct-descr": "\u003cp\u003eThis option is defined on the full REQ socket. If reply is not received\n in specified amount of milliseconds, the request will be automatically\n resent.\n\u003c/p\u003e\u003cp\u003eDefault value is 60000 (1 minute).\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Socket Req -\u003e IO Int",
        "fct-source": "src/Nanomsg.html#requestResendInterval",
        "fct-type": "function",
        "title": "requestResendInterval"
      },
      "index": {
        "description": "This option is defined on the full REQ socket If reply is not received in specified amount of milliseconds the request will be automatically resent Default value is minute",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "requestResendInterval",
        "normalized": "Socket Req-\u003eIO Int",
        "package": "nanomsg-haskell",
        "partial": "Resend Interval",
        "signature": "Socket Req-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eBlocking function for sending a message\n\u003c/p\u003e\u003cp\u003eSee also: \u003ccode\u003e\u003ca\u003erecv\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erecv'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Socket a -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/Nanomsg.html#send",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "Blocking function for sending message See also recv recv",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "send",
        "normalized": "Socket a-\u003eByteString-\u003eIO()",
        "package": "nanomsg-haskell",
        "partial": "",
        "signature": "Socket a-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:setIpv4Only",
      "description": {
        "fct-descr": "\u003cp\u003eIf set to 1, only IPv4 addresses are used. If set to 0, both IPv4\n and IPv6 addresses are used.\n\u003c/p\u003e\u003cp\u003eDefault value is 1.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Socket a -\u003e Int -\u003e IO ()",
        "fct-source": "src/Nanomsg.html#setIpv4Only",
        "fct-type": "function",
        "title": "setIpv4Only"
      },
      "index": {
        "description": "If set to only IPv4 addresses are used If set to both IPv4 and IPv6 addresses are used Default value is",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "setIpv4Only",
        "normalized": "Socket a-\u003eInt-\u003eIO()",
        "package": "nanomsg-haskell",
        "partial": "Ipv Only",
        "signature": "Socket a-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:setLinger",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies how long should the socket try to send pending outbound\n messages after close has been called, in milliseconds.\n\u003c/p\u003e\u003cp\u003eNegative value means infinite linger. Default value is 1000 (1 second).\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Socket a -\u003e Int -\u003e IO ()",
        "fct-source": "src/Nanomsg.html#setLinger",
        "fct-type": "function",
        "title": "setLinger"
      },
      "index": {
        "description": "Specifies how long should the socket try to send pending outbound messages after close has been called in milliseconds Negative value means infinite linger Default value is second",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "setLinger",
        "normalized": "Socket a-\u003eInt-\u003eIO()",
        "package": "nanomsg-haskell",
        "partial": "Linger",
        "signature": "Socket a-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:setRcvBuf",
      "description": {
        "fct-descr": "\u003cp\u003eSize of the receive buffer, in bytes. To prevent blocking for messages\n larger than the buffer, exactly one message may be buffered in addition\n to the data in the receive buffer.\n\u003c/p\u003e\u003cp\u003eDefault value is 128kB.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Socket a -\u003e Int -\u003e IO ()",
        "fct-source": "src/Nanomsg.html#setRcvBuf",
        "fct-type": "function",
        "title": "setRcvBuf"
      },
      "index": {
        "description": "Size of the receive buffer in bytes To prevent blocking for messages larger than the buffer exactly one message may be buffered in addition to the data in the receive buffer Default value is kB",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "setRcvBuf",
        "normalized": "Socket a-\u003eInt-\u003eIO()",
        "package": "nanomsg-haskell",
        "partial": "Rcv Buf",
        "signature": "Socket a-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:setReconnectInterval",
      "description": {
        "fct-descr": "\u003cp\u003eFor connection-based transports such as TCP, this option specifies\n how long to wait, in milliseconds, when connection is broken before\n trying to re-establish it.\n\u003c/p\u003e\u003cp\u003eNote that actual reconnect interval may be randomised to some extent\n to prevent severe reconnection storms.\n\u003c/p\u003e\u003cp\u003eDefault value is 100 (0.1 second).\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Socket a -\u003e Int -\u003e IO ()",
        "fct-source": "src/Nanomsg.html#setReconnectInterval",
        "fct-type": "function",
        "title": "setReconnectInterval"
      },
      "index": {
        "description": "For connection-based transports such as TCP this option specifies how long to wait in milliseconds when connection is broken before trying to re-establish it Note that actual reconnect interval may be randomised to some extent to prevent severe reconnection storms Default value is second",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "setReconnectInterval",
        "normalized": "Socket a-\u003eInt-\u003eIO()",
        "package": "nanomsg-haskell",
        "partial": "Reconnect Interval",
        "signature": "Socket a-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:setReconnectIntervalMax",
      "description": {
        "fct-descr": "\u003cp\u003eThis option is to be used only in addition to NN_RECONNECT_IVL option.\n It specifies maximum reconnection interval. On each reconnect attempt,\n the previous interval is doubled until NN_RECONNECT_IVL_MAX is reached.\n\u003c/p\u003e\u003cp\u003eValue of zero means that no exponential backoff is performed and reconnect\n interval is based only on NN_RECONNECT_IVL. If NN_RECONNECT_IVL_MAX is\n less than NN_RECONNECT_IVL, it is ignored.\n\u003c/p\u003e\u003cp\u003eDefault value is 0.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Socket a -\u003e Int -\u003e IO ()",
        "fct-source": "src/Nanomsg.html#setReconnectIntervalMax",
        "fct-type": "function",
        "title": "setReconnectIntervalMax"
      },
      "index": {
        "description": "This option is to be used only in addition to NN RECONNECT IVL option It specifies maximum reconnection interval On each reconnect attempt the previous interval is doubled until NN RECONNECT IVL MAX is reached Value of zero means that no exponential backoff is performed and reconnect interval is based only on NN RECONNECT IVL If NN RECONNECT IVL MAX is less than NN RECONNECT IVL it is ignored Default value is",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "setReconnectIntervalMax",
        "normalized": "Socket a-\u003eInt-\u003eIO()",
        "package": "nanomsg-haskell",
        "partial": "Reconnect Interval Max",
        "signature": "Socket a-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:setRequestResendInterval",
      "description": {
        "fct-descr": "\u003cp\u003eThis option is defined on the full REQ socket. If reply is not received\n in specified amount of milliseconds, the request will be automatically\n resent.\n\u003c/p\u003e\u003cp\u003eDefault value is 60000 (1 minute).\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Socket Req -\u003e Int -\u003e IO ()",
        "fct-source": "src/Nanomsg.html#setRequestResendInterval",
        "fct-type": "function",
        "title": "setRequestResendInterval"
      },
      "index": {
        "description": "This option is defined on the full REQ socket If reply is not received in specified amount of milliseconds the request will be automatically resent Default value is minute",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "setRequestResendInterval",
        "normalized": "Socket Req-\u003eInt-\u003eIO()",
        "package": "nanomsg-haskell",
        "partial": "Request Resend Interval",
        "signature": "Socket Req-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:setSndBuf",
      "description": {
        "fct-descr": "\u003cp\u003eSize of the send buffer, in bytes. To prevent blocking for messages\n larger than the buffer, exactly one message may be buffered in addition\n to the data in the send buffer.\n\u003c/p\u003e\u003cp\u003eDefault value is 128kB.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Socket a -\u003e Int -\u003e IO ()",
        "fct-source": "src/Nanomsg.html#setSndBuf",
        "fct-type": "function",
        "title": "setSndBuf"
      },
      "index": {
        "description": "Size of the send buffer in bytes To prevent blocking for messages larger than the buffer exactly one message may be buffered in addition to the data in the send buffer Default value is kB",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "setSndBuf",
        "normalized": "Socket a-\u003eInt-\u003eIO()",
        "package": "nanomsg-haskell",
        "partial": "Snd Buf",
        "signature": "Socket a-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:setSndPrio",
      "description": {
        "fct-descr": "\u003cp\u003eSets outbound priority for endpoints subsequently added to the socket.\n This option has no effect on socket types that send messages to all the\n peers. However, if the socket type sends each message to a single peer\n (or a limited set of peers), peers with high priority take precedence over\n peers with low priority.\n\u003c/p\u003e\u003cp\u003eHighest priority is 1, lowest priority is 16. Default value is 8.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Socket a -\u003e Int -\u003e IO ()",
        "fct-source": "src/Nanomsg.html#setSndPrio",
        "fct-type": "function",
        "title": "setSndPrio"
      },
      "index": {
        "description": "Sets outbound priority for endpoints subsequently added to the socket This option has no effect on socket types that send messages to all the peers However if the socket type sends each message to single peer or limited set of peers peers with high priority take precedence over peers with low priority Highest priority is lowest priority is Default value is",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "setSndPrio",
        "normalized": "Socket a-\u003eInt-\u003eIO()",
        "package": "nanomsg-haskell",
        "partial": "Snd Prio",
        "signature": "Socket a-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:setSurveyorDeadline",
      "description": {
        "fct-descr": "\u003cp\u003eSet timeout for Surveyor sockets\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Socket Surveyor -\u003e Int -\u003e IO ()",
        "fct-source": "src/Nanomsg.html#setSurveyorDeadline",
        "fct-type": "function",
        "title": "setSurveyorDeadline"
      },
      "index": {
        "description": "Set timeout for Surveyor sockets",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "setSurveyorDeadline",
        "normalized": "Socket Surveyor-\u003eInt-\u003eIO()",
        "package": "nanomsg-haskell",
        "partial": "Surveyor Deadline",
        "signature": "Socket Surveyor-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:setTcpNoDelay",
      "description": {
        "fct-descr": "\u003cp\u003eThis option, when set to 1, disables Nagle's algorithm.\n\u003c/p\u003e\u003cp\u003eDefault value is 0.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Socket a -\u003e Int -\u003e IO ()",
        "fct-source": "src/Nanomsg.html#setTcpNoDelay",
        "fct-type": "function",
        "title": "setTcpNoDelay"
      },
      "index": {
        "description": "This option when set to disables Nagle algorithm Default value is",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "setTcpNoDelay",
        "normalized": "Socket a-\u003eInt-\u003eIO()",
        "package": "nanomsg-haskell",
        "partial": "Tcp No Delay",
        "signature": "Socket a-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:shutdown",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves an endpoint from a socket.\n\u003c/p\u003e\u003cp\u003eSee also: \u003ccode\u003e\u003ca\u003ebind\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Socket a -\u003e Endpoint -\u003e IO ()",
        "fct-source": "src/Nanomsg.html#shutdown",
        "fct-type": "function",
        "title": "shutdown"
      },
      "index": {
        "description": "Removes an endpoint from socket See also bind connect",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "shutdown",
        "normalized": "Socket a-\u003eEndpoint-\u003eIO()",
        "package": "nanomsg-haskell",
        "partial": "",
        "signature": "Socket a-\u003eEndpoint-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:sndBuf",
      "description": {
        "fct-descr": "\u003cp\u003eSize of the send buffer, in bytes. To prevent blocking for messages\n larger than the buffer, exactly one message may be buffered in addition\n to the data in the send buffer.\n\u003c/p\u003e\u003cp\u003eDefault value is 128kB.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Socket a -\u003e IO Int",
        "fct-source": "src/Nanomsg.html#sndBuf",
        "fct-type": "function",
        "title": "sndBuf"
      },
      "index": {
        "description": "Size of the send buffer in bytes To prevent blocking for messages larger than the buffer exactly one message may be buffered in addition to the data in the send buffer Default value is kB",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "sndBuf",
        "normalized": "Socket a-\u003eIO Int",
        "package": "nanomsg-haskell",
        "partial": "Buf",
        "signature": "Socket a-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:sndPrio",
      "description": {
        "fct-descr": "\u003cp\u003eSets outbound priority for endpoints subsequently added to the socket.\n This option has no effect on socket types that send messages to all the\n peers. However, if the socket type sends each message to a single peer\n (or a limited set of peers), peers with high priority take precedence over\n peers with low priority.\n\u003c/p\u003e\u003cp\u003eHighest priority is 1, lowest priority is 16. Default value is 8.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Socket a -\u003e IO Int",
        "fct-source": "src/Nanomsg.html#sndPrio",
        "fct-type": "function",
        "title": "sndPrio"
      },
      "index": {
        "description": "Sets outbound priority for endpoints subsequently added to the socket This option has no effect on socket types that send messages to all the peers However if the socket type sends each message to single peer or limited set of peers peers with high priority take precedence over peers with low priority Highest priority is lowest priority is Default value is",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "sndPrio",
        "normalized": "Socket a-\u003eIO Int",
        "package": "nanomsg-haskell",
        "partial": "Prio",
        "signature": "Socket a-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:socket",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a socket. Connections are formed using \u003ccode\u003e\u003ca\u003ebind\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee also: \u003ccode\u003e\u003ca\u003eclose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "a -\u003e IO (Socket a)",
        "fct-source": "src/Nanomsg.html#socket",
        "fct-type": "function",
        "title": "socket"
      },
      "index": {
        "description": "Creates socket Connections are formed using bind or connect See also close",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "socket",
        "normalized": "a-\u003eIO(Socket a)",
        "package": "nanomsg-haskell",
        "partial": "",
        "signature": "a-\u003eIO(Socket a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:subscribe",
      "description": {
        "fct-descr": "\u003cp\u003eSubscribe to a given subject string.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Socket Sub -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/Nanomsg.html#subscribe",
        "fct-type": "function",
        "title": "subscribe"
      },
      "index": {
        "description": "Subscribe to given subject string",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "subscribe",
        "normalized": "Socket Sub-\u003eByteString-\u003eIO()",
        "package": "nanomsg-haskell",
        "partial": "",
        "signature": "Socket Sub-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:surveyorDeadline",
      "description": {
        "fct-descr": "\u003cp\u003eGet timeout for Surveyor sockets\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Socket Surveyor -\u003e IO Int",
        "fct-source": "src/Nanomsg.html#surveyorDeadline",
        "fct-type": "function",
        "title": "surveyorDeadline"
      },
      "index": {
        "description": "Get timeout for Surveyor sockets",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "surveyorDeadline",
        "normalized": "Socket Surveyor-\u003eIO Int",
        "package": "nanomsg-haskell",
        "partial": "Deadline",
        "signature": "Socket Surveyor-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:tcpNoDelay",
      "description": {
        "fct-descr": "\u003cp\u003eThis option, when set to 1, disables Nagle's algorithm.\n\u003c/p\u003e\u003cp\u003eDefault value is 0.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Socket a -\u003e IO Int",
        "fct-source": "src/Nanomsg.html#tcpNoDelay",
        "fct-type": "function",
        "title": "tcpNoDelay"
      },
      "index": {
        "description": "This option when set to disables Nagle algorithm Default value is",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "tcpNoDelay",
        "normalized": "Socket a-\u003eIO Int",
        "package": "nanomsg-haskell",
        "partial": "No Delay",
        "signature": "Socket a-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:term",
      "description": {
        "fct-descr": "\u003cp\u003eSwitches nanomsg into shutdown modus and interrupts any waiting\n function calls.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "IO ()",
        "fct-source": "src/Nanomsg.html#term",
        "fct-type": "function",
        "title": "term"
      },
      "index": {
        "description": "Switches nanomsg into shutdown modus and interrupts any waiting function calls",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "term",
        "normalized": "IO()",
        "package": "nanomsg-haskell",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:unsubscribe",
      "description": {
        "fct-descr": "\u003cp\u003eUnsubscribes from a subject.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "Socket Sub -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/Nanomsg.html#unsubscribe",
        "fct-type": "function",
        "title": "unsubscribe"
      },
      "index": {
        "description": "Unsubscribes from subject",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "unsubscribe",
        "normalized": "Socket Sub-\u003eByteString-\u003eIO()",
        "package": "nanomsg-haskell",
        "partial": "",
        "signature": "Socket Sub-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nanomsg-haskell/docs/Nanomsg.html#v:withSocket",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a socket and runs your action with it.\n\u003c/p\u003e\u003cp\u003eE.g. collecting 10 messages:\n\u003c/p\u003e\u003cpre\u003e withSocket Sub $ \\sub -\u003e do\n     _ \u003c- connect sub \"tcp://localhost:5560\"\n     subscribe sub (C.pack \"\")\n     replicateM 10 (recv sub)\n\u003c/pre\u003e\u003cp\u003eEnsures the socket is closed when your action is done.\n\u003c/p\u003e",
        "fct-module": "Nanomsg",
        "fct-package": "nanomsg-haskell",
        "fct-signature": "a -\u003e (Socket a -\u003e IO b) -\u003e IO b",
        "fct-source": "src/Nanomsg.html#withSocket",
        "fct-type": "function",
        "title": "withSocket"
      },
      "index": {
        "description": "Creates socket and runs your action with it E.g collecting messages withSocket Sub sub do connect sub tcp localhost subscribe sub C.pack replicateM recv sub Ensures the socket is closed when your action is done",
        "hierarchy": "Nanomsg",
        "module": "Nanomsg",
        "name": "withSocket",
        "normalized": "a-\u003e(Socket a-\u003eIO b)-\u003eIO b",
        "package": "nanomsg-haskell",
        "partial": "Socket",
        "signature": "a-\u003e(Socket a-\u003eIO b)-\u003eIO b"
      }
    }
  }
]