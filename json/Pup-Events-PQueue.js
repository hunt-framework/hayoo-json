[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Pup-Events-PQueue/docs/PupEventsPQueue.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements Priority Queues intended to be used with the STM module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "PupEventsPQueue",
        "fct-package": "Pup-Events-PQueue",
        "fct-signature": "module",
        "fct-source": "src/PupEventsPQueue.html",
        "fct-type": "module",
        "title": "PupEventsPQueue"
      },
      "index": {
        "description": "Implements Priority Queues intended to be used with the STM module",
        "hierarchy": "PupEventsPQueue",
        "module": "PupEventsPQueue",
        "name": "PupEventsPQueue",
        "normalized": "",
        "package": "Pup-Events-PQueue",
        "partial": "Pup Events PQueue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Pup-Events-PQueue/docs/PupEventsPQueue.html#t:PQueue",
      "description": {
        "fct-descr": "\u003cp\u003eA simple alias so we have pretty types.\n\u003c/p\u003e",
        "fct-module": "PupEventsPQueue",
        "fct-package": "Pup-Events-PQueue",
        "fct-signature": "type",
        "fct-source": "src/PupEventsPQueue.html#PQueue",
        "fct-type": "type",
        "title": "PQueue"
      },
      "index": {
        "description": "simple alias so we have pretty types",
        "hierarchy": "PupEventsPQueue",
        "module": "PupEventsPQueue",
        "name": "PQueue",
        "normalized": "",
        "package": "Pup-Events-PQueue",
        "partial": "PQueue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Pup-Events-PQueue/docs/PupEventsPQueue.html#v:getThing",
      "description": {
        "fct-descr": "\u003cp\u003eRecursively tries to read each priority level until it finds something.\n If it can't find any events it returns Nothing. Call using \u003ccode\u003eatomically $\n getThing pqueue\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PupEventsPQueue",
        "fct-package": "Pup-Events-PQueue",
        "fct-signature": "PQueue a-\u003e STM (Maybe a)",
        "fct-type": "function",
        "title": "getThing"
      },
      "index": {
        "description": "Recursively tries to read each priority level until it finds something If it can find any events it returns Nothing Call using atomically getThing pqueue",
        "hierarchy": "PupEventsPQueue",
        "module": "PupEventsPQueue",
        "name": "getThing",
        "normalized": "PQueue a-\u003eSTM(Maybe a)",
        "package": "Pup-Events-PQueue",
        "partial": "Thing",
        "signature": "PQueue a-\u003eSTM(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Pup-Events-PQueue/docs/PupEventsPQueue.html#v:makeQueues",
      "description": {
        "fct-descr": "\u003cp\u003eReturns an empty PQueue with the specified number of priority levels.\n\u003c/p\u003e",
        "fct-module": "PupEventsPQueue",
        "fct-package": "Pup-Events-PQueue",
        "fct-signature": "Int-\u003e IO (PQueue a)",
        "fct-type": "function",
        "title": "makeQueues"
      },
      "index": {
        "description": "Returns an empty PQueue with the specified number of priority levels",
        "hierarchy": "PupEventsPQueue",
        "module": "PupEventsPQueue",
        "name": "makeQueues",
        "normalized": "Int-\u003eIO(PQueue a)",
        "package": "Pup-Events-PQueue",
        "partial": "Queues",
        "signature": "Int-\u003eIO(PQueue a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Pup-Events-PQueue/docs/PupEventsPQueue.html#v:writeThing",
      "description": {
        "fct-descr": "\u003cp\u003eWrites the given something to the given PQueue at the specified\n priority level. It does some checking to make sure we have a valid\n priority level. Call using \u003ccode\u003eatomically $ writeThing pqueue priority thing\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "PupEventsPQueue",
        "fct-package": "Pup-Events-PQueue",
        "fct-signature": "PQueue a-\u003e Int-\u003e a-\u003e STM ()",
        "fct-type": "function",
        "title": "writeThing"
      },
      "index": {
        "description": "Writes the given something to the given PQueue at the specified priority level It does some checking to make sure we have valid priority level Call using atomically writeThing pqueue priority thing",
        "hierarchy": "PupEventsPQueue",
        "module": "PupEventsPQueue",
        "name": "writeThing",
        "normalized": "PQueue a-\u003eInt-\u003ea-\u003eSTM()",
        "package": "Pup-Events-PQueue",
        "partial": "Thing",
        "signature": "PQueue a-\u003eInt-\u003ea-\u003eSTM()"
      }
    }
  }
]