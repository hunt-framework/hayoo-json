[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Pup-Events-Server/docs/PupEventsServer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Server module of the PupEvents framework is designed to be run from\n the file that specifies the Events that you are handling. The only thing\n that would need to be written to use this is the Events file, it does\n not depend on the application code.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "PupEventsServer",
        "fct-package": "Pup-Events-Server",
        "fct-signature": "module",
        "fct-source": "src/PupEventsServer.html",
        "fct-type": "module",
        "title": "PupEventsServer"
      },
      "index": {
        "description": "The Server module of the PupEvents framework is designed to be run from the file that specifies the Events that you are handling The only thing that would need to be written to use this is the Events file it does not depend on the application code",
        "hierarchy": "PupEventsServer",
        "module": "PupEventsServer",
        "name": "PupEventsServer",
        "normalized": "",
        "package": "Pup-Events-Server",
        "partial": "Pup Events Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Pup-Events-Server/docs/PupEventsServer.html#v:acceptCon",
      "description": {
        "fct-module": "PupEventsServer",
        "fct-package": "Pup-Events-Server",
        "fct-signature": "Socket -\u003e Int -\u003e (t -\u003e Int) -\u003e (t1 -\u003e t1 -\u003e String) -\u003e (t -\u003e t -\u003e IO t1) -\u003e [ParsecT [Char] () Identity t] -\u003e Maybe t -\u003e IO ThreadId",
        "fct-source": "src/PupEventsServer.html#acceptCon",
        "fct-type": "function",
        "title": "acceptCon"
      },
      "index": {
        "description": "",
        "hierarchy": "PupEventsServer",
        "module": "PupEventsServer",
        "name": "acceptCon",
        "normalized": "Socket-\u003eInt-\u003e(a-\u003eInt)-\u003e(a-\u003ea-\u003eString)-\u003e(a-\u003ea-\u003eIO a)-\u003e[ParsecT[Char]()Identity a]-\u003eMaybe a-\u003eIO ThreadId",
        "package": "Pup-Events-Server",
        "partial": "Con",
        "signature": "Socket-\u003eInt-\u003e(t-\u003eInt)-\u003e(t-\u003et-\u003eString)-\u003e(t-\u003et-\u003eIO t)-\u003e[ParsecT[Char]()Identity t]-\u003eMaybe t-\u003eIO ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Pup-Events-Server/docs/PupEventsServer.html#v:handleEvents",
      "description": {
        "fct-module": "PupEventsServer",
        "fct-package": "Pup-Events-Server",
        "fct-signature": "Handle -\u003e PQueue t -\u003e (t1 -\u003e t1 -\u003e String) -\u003e (t -\u003e t -\u003e IO t1) -\u003e IO ()",
        "fct-source": "src/PupEventsServer.html#handleEvents",
        "fct-type": "function",
        "title": "handleEvents"
      },
      "index": {
        "description": "",
        "hierarchy": "PupEventsServer",
        "module": "PupEventsServer",
        "name": "handleEvents",
        "normalized": "Handle-\u003ePQueue a-\u003e(a-\u003ea-\u003eString)-\u003e(a-\u003ea-\u003eIO a)-\u003eIO()",
        "package": "Pup-Events-Server",
        "partial": "Events",
        "signature": "Handle-\u003ePQueue t-\u003e(t-\u003et-\u003eString)-\u003e(t-\u003et-\u003eIO t)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Pup-Events-Server/docs/PupEventsServer.html#v:recvEvents",
      "description": {
        "fct-module": "PupEventsServer",
        "fct-package": "Pup-Events-Server",
        "fct-signature": "Handle -\u003e PQueue a -\u003e (a -\u003e Int) -\u003e [ParsecT [Char] () Identity a] -\u003e Maybe a -\u003e IO ()",
        "fct-source": "src/PupEventsServer.html#recvEvents",
        "fct-type": "function",
        "title": "recvEvents"
      },
      "index": {
        "description": "",
        "hierarchy": "PupEventsServer",
        "module": "PupEventsServer",
        "name": "recvEvents",
        "normalized": "Handle-\u003ePQueue a-\u003e(a-\u003eInt)-\u003e[ParsecT[Char]()Identity a]-\u003eMaybe a-\u003eIO()",
        "package": "Pup-Events-Server",
        "partial": "Events",
        "signature": "Handle-\u003ePQueue a-\u003e(a-\u003eInt)-\u003e[ParsecT[Char]()Identity a]-\u003eMaybe a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Pup-Events-Server/docs/PupEventsServer.html#v:server",
      "description": {
        "fct-descr": "\u003cp\u003eThe main entry point of the program. This ends by forever calling \u003ccode\u003e\u003ca\u003eacceptCon\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PupEventsServer",
        "fct-package": "Pup-Events-Server",
        "fct-signature": "Maybe [Char]-\u003e Int-\u003e String-\u003e (t -\u003e Int)-\u003e (t1 -\u003e t1 -\u003e String)-\u003e (t -\u003e t -\u003e IO t1)-\u003e [ParsecT [Char] () Identity t]-\u003e Maybe t-\u003e IO b",
        "fct-type": "function",
        "title": "server"
      },
      "index": {
        "description": "The main entry point of the program This ends by forever calling acceptCon",
        "hierarchy": "PupEventsServer",
        "module": "PupEventsServer",
        "name": "server",
        "normalized": "Maybe[Char]-\u003eInt-\u003eString-\u003e(a-\u003eInt)-\u003e(a-\u003ea-\u003eString)-\u003e(a-\u003ea-\u003eIO a)-\u003e[ParsecT[Char]()Identity a]-\u003eMaybe a-\u003eIO b",
        "package": "Pup-Events-Server",
        "partial": "",
        "signature": "Maybe[Char]-\u003eInt-\u003eString-\u003e(t-\u003eInt)-\u003e(t-\u003et-\u003eString)-\u003e(t-\u003et-\u003eIO t)-\u003e[ParsecT[Char]()Identity t]-\u003eMaybe t-\u003eIO b"
      }
    }
  }
]