[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CMQ/docs/System-CMQ.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCMQ, a UDP-based inherently asynchronous message queue to orchestrate messages, \nevents and processes in the cloud. It trades guarantees, consistency mechanisms, \n(shared) state and transactions for robustness, scalability and performance.\nCMQ fares especially well in modern Layer 2 switches in data center networks, \nas well as in the presence of errors. \nA \u003ccode\u003eMessage\u003c/code\u003e is pushed to the queue together with a queue identifier (\u003ccode\u003e\u003ca\u003eCmq\u003c/a\u003e\u003c/code\u003e) \nand a \u003ccode\u003e\u003ca\u003eKEY\u003c/a\u003e\u003c/code\u003e that specifies the recipient. Messages can be pushed in logarithmic \ntime and the next message can be retrieved in constant time. \n\u003c/p\u003e\u003cp\u003eThis implementation is based on\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e J. Fritsch, C. Walker, \u003cem\u003eCMQ - A lightweight, asynchronous high-performance messaging queue for the cloud (2012)\u003c/em\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "System.CMQ",
        "fct-package": "CMQ",
        "fct-signature": "module",
        "fct-source": "src/System-CMQ.html",
        "fct-type": "module",
        "title": "CMQ"
      },
      "index": {
        "description": "CMQ UDP-based inherently asynchronous message queue to orchestrate messages events and processes in the cloud It trades guarantees consistency mechanisms shared state and transactions for robustness scalability and performance CMQ fares especially well in modern Layer switches in data center networks as well as in the presence of errors Message is pushed to the queue together with queue identifier Cmq and KEY that specifies the recipient Messages can be pushed in logarithmic time and the next message can be retrieved in constant time This implementation is based on Fritsch Walker CMQ lightweight asynchronous high-performance messaging queue for the cloud",
        "hierarchy": "System CMQ",
        "module": "System.CMQ",
        "name": "CMQ",
        "normalized": "",
        "package": "CMQ",
        "partial": "CMQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CMQ/docs/System-CMQ.html#t:Cmq",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral purpose finite queue.\n\u003c/p\u003e",
        "fct-module": "System.CMQ",
        "fct-package": "CMQ",
        "fct-signature": "data",
        "fct-source": "src/System-CMQ.html#Cmq",
        "fct-type": "data",
        "title": "Cmq"
      },
      "index": {
        "description": "General purpose finite queue",
        "hierarchy": "System CMQ",
        "module": "System.CMQ",
        "name": "Cmq",
        "normalized": "",
        "package": "CMQ",
        "partial": "Cmq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CMQ/docs/System-CMQ.html#t:IPv4",
      "description": {
        "fct-descr": "\u003cp\u003eThe abstract data type to express an IPv4 address.\n  To create this, use \u003ccode\u003e\u003ca\u003etoIPv4\u003c/a\u003e\u003c/code\u003e. Or use \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\"192.0.2.1\"\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eIPv4\u003c/a\u003e\u003c/code\u003e, for example. Also, \u003ccode\u003e\"192.0.2.1\"\u003c/code\u003e can be used as literal with OverloadedStrings.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eread \"192.0.2.1\" :: IPv4\n\u003c/code\u003e\u003c/strong\u003e192.0.2.1\n\u003c/pre\u003e",
        "fct-module": "System.CMQ",
        "fct-package": "CMQ",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "IPv4"
      },
      "index": {
        "description": "The abstract data type to express an IPv4 address To create this use toIPv4 Or use read IPv4 for example Also can be used as literal with OverloadedStrings read IPv4",
        "hierarchy": "System CMQ",
        "module": "System.CMQ",
        "name": "IPv4",
        "normalized": "",
        "package": "CMQ",
        "partial": "IPv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CMQ/docs/System-CMQ.html#t:KEY",
      "description": {
        "fct-module": "System.CMQ",
        "fct-package": "CMQ",
        "fct-signature": "type",
        "fct-source": "src/System-CMQ.html#KEY",
        "fct-type": "type",
        "title": "KEY"
      },
      "index": {
        "description": "",
        "hierarchy": "System CMQ",
        "module": "System.CMQ",
        "name": "KEY",
        "normalized": "",
        "package": "CMQ",
        "partial": "KEY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CMQ/docs/System-CMQ.html#v:cwPop",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. A message is popped of CMQ. The next value is read from the queue.\n Use for example\n\u003c/p\u003e\u003cpre\u003e\n   msg \u003c- cwPop token :: IO (Maybe String)\n\u003c/pre\u003e\u003cp\u003eor with ScopedTypeVariables\n\u003c/p\u003e\u003cpre\u003e\n   (msg :: Maybe String) \u003c- cwPop token\n\u003c/pre\u003e",
        "fct-module": "System.CMQ",
        "fct-package": "CMQ",
        "fct-signature": "Cmq a -\u003e IO (Maybe a)",
        "fct-source": "src/System-CMQ.html#cwPop",
        "fct-type": "function",
        "title": "cwPop"
      },
      "index": {
        "description": "message is popped of CMQ The next value is read from the queue Use for example msg cwPop token IO Maybe String or with ScopedTypeVariables msg Maybe String cwPop token",
        "hierarchy": "System CMQ",
        "module": "System.CMQ",
        "name": "cwPop",
        "normalized": "Cmq a-\u003eIO(Maybe a)",
        "package": "CMQ",
        "partial": "Pop",
        "signature": "Cmq a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CMQ/docs/System-CMQ.html#v:cwPush",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Push a message to the queue.\n\u003c/p\u003e\u003cpre\u003e\n  cwPush soc (\"192.168.35.69\", 0) (\"ping\" :: String) token \n\u003c/pre\u003e",
        "fct-module": "System.CMQ",
        "fct-package": "CMQ",
        "fct-signature": "Socket -\u003e KEY -\u003e a -\u003e Cmq a -\u003e IO ()",
        "fct-source": "src/System-CMQ.html#cwPush",
        "fct-type": "function",
        "title": "cwPush"
      },
      "index": {
        "description": "log Push message to the queue cwPush soc ping String token",
        "hierarchy": "System CMQ",
        "module": "System.CMQ",
        "name": "cwPush",
        "normalized": "Socket-\u003eKEY-\u003ea-\u003eCmq a-\u003eIO()",
        "package": "CMQ",
        "partial": "Push",
        "signature": "Socket-\u003eKEY-\u003ea-\u003eCmq a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CMQ/docs/System-CMQ.html#v:newRq",
      "description": {
        "fct-descr": "\u003cp\u003eBuilds and returns a new instance of Cmq.\n\u003c/p\u003e\u003cpre\u003e\n  (token) \u003c- newRq soc 512 200\n\u003c/pre\u003e",
        "fct-module": "System.CMQ",
        "fct-package": "CMQ",
        "fct-signature": "Socket-\u003e Int-\u003e Rational-\u003e IO (Cmq a)",
        "fct-type": "function",
        "title": "newRq"
      },
      "index": {
        "description": "Builds and returns new instance of Cmq token newRq soc",
        "hierarchy": "System CMQ",
        "module": "System.CMQ",
        "name": "newRq",
        "normalized": "Socket-\u003eInt-\u003eRational-\u003eIO(Cmq a)",
        "package": "CMQ",
        "partial": "Rq",
        "signature": "Socket-\u003eInt-\u003eRational-\u003eIO(Cmq a)"
      }
    }
  }
]