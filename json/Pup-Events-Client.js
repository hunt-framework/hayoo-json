[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Pup-Events-Client/docs/PupEventsClient.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Clients module in the PupEvents framework is used by the main\n application code to send events to the server. Its main function,\n \u003ccode\u003e\u003ca\u003eclient\u003c/a\u003e\u003c/code\u003e returns a pair of \u003ca\u003ePQueues\u003c/a\u003e that the application uses to send\n and receive events (written following the specification defined in the\n Events module).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "PupEventsClient",
        "fct-package": "Pup-Events-Client",
        "fct-signature": "module",
        "fct-source": "src/PupEventsClient.html",
        "fct-type": "module",
        "title": "PupEventsClient"
      },
      "index": {
        "description": "The Clients module in the PupEvents framework is used by the main application code to send events to the server Its main function client returns pair of PQueues that the application uses to send and receive events written following the specification defined in the Events module",
        "hierarchy": "PupEventsClient",
        "module": "PupEventsClient",
        "name": "PupEventsClient",
        "normalized": "",
        "package": "Pup-Events-Client",
        "partial": "Pup Events Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Pup-Events-Client/docs/PupEventsClient.html#v:client",
      "description": {
        "fct-descr": "\u003cp\u003eThe client function is the main entry point for the client code. It creates a socket, spawns two processes (\u003ccode\u003e\u003ca\u003esendEvents\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erecvEvents\u003c/a\u003e\u003c/code\u003e) to handle outgoing and incoming events, and returns the queues used to communicate with those processes.\n\u003c/p\u003e",
        "fct-module": "PupEventsClient",
        "fct-package": "Pup-Events-Client",
        "fct-signature": "Maybe [Char]-\u003e Int-\u003e String-\u003e (a -\u003e Int)-\u003e (t -\u003e t -\u003e String)-\u003e [ParsecT [Char] () Identity a]-\u003e IO (PQueue t, PQueue a, IO ())",
        "fct-type": "function",
        "title": "client"
      },
      "index": {
        "description": "The client function is the main entry point for the client code It creates socket spawns two processes sendEvents and recvEvents to handle outgoing and incoming events and returns the queues used to communicate with those processes",
        "hierarchy": "PupEventsClient",
        "module": "PupEventsClient",
        "name": "client",
        "normalized": "Maybe[Char]-\u003eInt-\u003eString-\u003e(a-\u003eInt)-\u003e(b-\u003eb-\u003eString)-\u003e[ParsecT[Char]()Identity a]-\u003eIO(PQueue b,PQueue a,IO())",
        "package": "Pup-Events-Client",
        "partial": "",
        "signature": "Maybe[Char]-\u003eInt-\u003eString-\u003e(a-\u003eInt)-\u003e(t-\u003et-\u003eString)-\u003e[ParsecT[Char]()Identity a]-\u003eIO(PQueue t,PQueue a,IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Pup-Events-Client/docs/PupEventsClient.html#v:recvEvents",
      "description": {
        "fct-module": "PupEventsClient",
        "fct-package": "Pup-Events-Client",
        "fct-signature": "Handle -\u003e PQueue a -\u003e (a -\u003e Int) -\u003e [ParsecT [Char] () Identity a] -\u003e IO ()",
        "fct-source": "src/PupEventsClient.html#recvEvents",
        "fct-type": "function",
        "title": "recvEvents"
      },
      "index": {
        "description": "",
        "hierarchy": "PupEventsClient",
        "module": "PupEventsClient",
        "name": "recvEvents",
        "normalized": "Handle-\u003ePQueue a-\u003e(a-\u003eInt)-\u003e[ParsecT[Char]()Identity a]-\u003eIO()",
        "package": "Pup-Events-Client",
        "partial": "Events",
        "signature": "Handle-\u003ePQueue a-\u003e(a-\u003eInt)-\u003e[ParsecT[Char]()Identity a]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Pup-Events-Client/docs/PupEventsClient.html#v:sendEvents",
      "description": {
        "fct-module": "PupEventsClient",
        "fct-package": "Pup-Events-Client",
        "fct-signature": "Handle -\u003e PQueue t -\u003e (t -\u003e t -\u003e String) -\u003e IO ()",
        "fct-source": "src/PupEventsClient.html#sendEvents",
        "fct-type": "function",
        "title": "sendEvents"
      },
      "index": {
        "description": "",
        "hierarchy": "PupEventsClient",
        "module": "PupEventsClient",
        "name": "sendEvents",
        "normalized": "Handle-\u003ePQueue a-\u003e(a-\u003ea-\u003eString)-\u003eIO()",
        "package": "Pup-Events-Client",
        "partial": "Events",
        "signature": "Handle-\u003ePQueue t-\u003e(t-\u003et-\u003eString)-\u003eIO()"
      }
    }
  }
]