[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/eprocess/docs/Control-Concurrent-Process.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a *very* basic support for processes with message queues.  It was built using channels and MVars.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.Process",
        "fct-package": "eprocess",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Process.html",
        "fct-type": "module",
        "title": "Process"
      },
      "index": {
        "description": "This module provides very basic support for processes with message queues It was built using channels and MVars",
        "hierarchy": "Control Concurrent Process",
        "module": "Control.Concurrent.Process",
        "name": "Process",
        "normalized": "",
        "package": "eprocess",
        "partial": "Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/eprocess/docs/Control-Concurrent-Process.html#t:Handle",
      "description": {
        "fct-descr": "\u003cp\u003eA Process handle.  It's returned on process creation and should be used\n | afterwards to send messages to it\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Process",
        "fct-package": "eprocess",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-Process.html#Handle",
        "fct-type": "data",
        "title": "Handle"
      },
      "index": {
        "description": "Process handle It returned on process creation and should be used afterwards to send messages to it",
        "hierarchy": "Control Concurrent Process",
        "module": "Control.Concurrent.Process",
        "name": "Handle",
        "normalized": "",
        "package": "eprocess",
        "partial": "Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/eprocess/docs/Control-Concurrent-Process.html#t:Process",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eProcess\u003c/em\u003e are receivers that run in the IO Monad\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Process",
        "fct-package": "eprocess",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-Process.html#Process",
        "fct-type": "type",
        "title": "Process"
      },
      "index": {
        "description": "Process are receivers that run in the IO Monad",
        "hierarchy": "Control Concurrent Process",
        "module": "Control.Concurrent.Process",
        "name": "Process",
        "normalized": "",
        "package": "eprocess",
        "partial": "Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/eprocess/docs/Control-Concurrent-Process.html#t:ReceiverT",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003cem\u003eReceiverT\u003c/em\u003e generic type.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003er\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e the type of things the process will receive\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003em\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e the monad in which it will run\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ea\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e the classic monad parameter\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "Control.Concurrent.Process",
        "fct-package": "eprocess",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-Process.html#ReceiverT",
        "fct-type": "data",
        "title": "ReceiverT"
      },
      "index": {
        "description": "The ReceiverT generic type the type of things the process will receive the monad in which it will run the classic monad parameter",
        "hierarchy": "Control Concurrent Process",
        "module": "Control.Concurrent.Process",
        "name": "ReceiverT",
        "normalized": "",
        "package": "eprocess",
        "partial": "Receiver",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/eprocess/docs/Control-Concurrent-Process.html#v:kill",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003ekill\u003c/em\u003e lets you *brutally* terminate a running process. Usage:\n \u003ccode\u003e\n      kill processHandle\n \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Process",
        "fct-package": "eprocess",
        "fct-signature": "Handle a-\u003e m ()",
        "fct-type": "function",
        "title": "kill"
      },
      "index": {
        "description": "kill lets you brutally terminate running process Usage kill processHandle",
        "hierarchy": "Control Concurrent Process",
        "module": "Control.Concurrent.Process",
        "name": "kill",
        "normalized": "Handle a-\u003eb()",
        "package": "eprocess",
        "partial": "",
        "signature": "Handle a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/eprocess/docs/Control-Concurrent-Process.html#v:makeProcess",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003emakeProcess\u003c/em\u003e builds a process from a code that generates an IO action. Usage:\n \u003ccode\u003e\n      process \u003c- makeProcess evalFunction receiver\n \u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Process",
        "fct-package": "eprocess",
        "fct-signature": "(m t -\u003e IO s) -\u003e ReceiverT r m t -\u003e Process r s",
        "fct-source": "src/Control-Concurrent-Process.html#makeProcess",
        "fct-type": "function",
        "title": "makeProcess"
      },
      "index": {
        "description": "makeProcess builds process from code that generates an IO action Usage process makeProcess evalFunction receiver",
        "hierarchy": "Control Concurrent Process",
        "module": "Control.Concurrent.Process",
        "name": "makeProcess",
        "normalized": "(a b-\u003eIO c)-\u003eReceiverT d a b-\u003eProcess d c",
        "package": "eprocess",
        "partial": "Process",
        "signature": "(m t-\u003eIO s)-\u003eReceiverT r m t-\u003eProcess r s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/eprocess/docs/Control-Concurrent-Process.html#v:recv",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003erecv\u003c/em\u003e lets you receive a message in a running process (it's a blocking receive). Usage:\n \u003ccode\u003e\n      message \u003c- recv\n \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Process",
        "fct-package": "eprocess",
        "fct-signature": "ReceiverT r m r",
        "fct-source": "src/Control-Concurrent-Process.html#recv",
        "fct-type": "function",
        "title": "recv"
      },
      "index": {
        "description": "recv lets you receive message in running process it blocking receive Usage message recv",
        "hierarchy": "Control Concurrent Process",
        "module": "Control.Concurrent.Process",
        "name": "recv",
        "normalized": "",
        "package": "eprocess",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/eprocess/docs/Control-Concurrent-Process.html#v:recvIn",
      "description": {
        "fct-descr": "\u003cp\u003eJust like \u003cem\u003erecv\u003c/em\u003e but with a timeout parameter. Usage:\n \u003ccode\u003e\n      maybeMessage \u003c- recv\n \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Process",
        "fct-package": "eprocess",
        "fct-signature": "Int-\u003e ReceiverT r m (Maybe r)",
        "fct-type": "function",
        "title": "recvIn"
      },
      "index": {
        "description": "Just like recv but with timeout parameter Usage maybeMessage recv",
        "hierarchy": "Control Concurrent Process",
        "module": "Control.Concurrent.Process",
        "name": "recvIn",
        "normalized": "Int-\u003eReceiverT a b(Maybe a)",
        "package": "eprocess",
        "partial": "In",
        "signature": "Int-\u003eReceiverT r m(Maybe r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/eprocess/docs/Control-Concurrent-Process.html#v:runHere",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003erunHere\u003c/em\u003e executes process code in the current environment. Usage:\n \u003ccode\u003e\n      result \u003c- runHere process\n \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Process",
        "fct-package": "eprocess",
        "fct-signature": "Process r t-\u003e m t",
        "fct-type": "function",
        "title": "runHere"
      },
      "index": {
        "description": "runHere executes process code in the current environment Usage result runHere process",
        "hierarchy": "Control Concurrent Process",
        "module": "Control.Concurrent.Process",
        "name": "runHere",
        "normalized": "Process a b-\u003ec b",
        "package": "eprocess",
        "partial": "Here",
        "signature": "Process r t-\u003em t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/eprocess/docs/Control-Concurrent-Process.html#v:self",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eself\u003c/em\u003e returns the handle of the current process. Usage:\n \u003ccode\u003e\n      handle \u003c- self\n \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Process",
        "fct-package": "eprocess",
        "fct-signature": "ReceiverT r m (Handle r)",
        "fct-source": "src/Control-Concurrent-Process.html#self",
        "fct-type": "function",
        "title": "self"
      },
      "index": {
        "description": "self returns the handle of the current process Usage handle self",
        "hierarchy": "Control Concurrent Process",
        "module": "Control.Concurrent.Process",
        "name": "self",
        "normalized": "",
        "package": "eprocess",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/eprocess/docs/Control-Concurrent-Process.html#v:sendRecv",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003esendRecv\u003c/em\u003e is just a syntactic sugar for:\n \u003ccode\u003e\n      sendTo h a \u003e\u003e recv\n \u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Process",
        "fct-package": "eprocess",
        "fct-signature": "Handle a-\u003e a-\u003e ReceiverT r m r",
        "fct-type": "function",
        "title": "sendRecv"
      },
      "index": {
        "description": "sendRecv is just syntactic sugar for sendTo recv",
        "hierarchy": "Control Concurrent Process",
        "module": "Control.Concurrent.Process",
        "name": "sendRecv",
        "normalized": "Handle a-\u003ea-\u003eReceiverT b c b",
        "package": "eprocess",
        "partial": "Recv",
        "signature": "Handle a-\u003ea-\u003eReceiverT r m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/eprocess/docs/Control-Concurrent-Process.html#v:sendTo",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003esendTo\u003c/em\u003e lets you send a message to a running process. Usage:\n \u003ccode\u003e\n      sendTo processHandle message\n \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Process",
        "fct-package": "eprocess",
        "fct-signature": "Handle a-\u003e a-\u003e m ()",
        "fct-type": "function",
        "title": "sendTo"
      },
      "index": {
        "description": "sendTo lets you send message to running process Usage sendTo processHandle message",
        "hierarchy": "Control Concurrent Process",
        "module": "Control.Concurrent.Process",
        "name": "sendTo",
        "normalized": "Handle a-\u003ea-\u003eb()",
        "package": "eprocess",
        "partial": "To",
        "signature": "Handle a-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/eprocess/docs/Control-Concurrent-Process.html#v:spawn",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003espawn\u003c/em\u003e starts a process and returns its handle. Usage:\n \u003ccode\u003e\n      handle \u003c- spawn process\n \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Process",
        "fct-package": "eprocess",
        "fct-signature": "Process r k-\u003e m (Handle r)",
        "fct-type": "function",
        "title": "spawn"
      },
      "index": {
        "description": "spawn starts process and returns its handle Usage handle spawn process",
        "hierarchy": "Control Concurrent Process",
        "module": "Control.Concurrent.Process",
        "name": "spawn",
        "normalized": "Process a b-\u003ec(Handle a)",
        "package": "eprocess",
        "partial": "",
        "signature": "Process r k-\u003em(Handle r)"
      }
    }
  }
]