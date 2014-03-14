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
        "word": "Pup-Events-PQueue"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements Priority Queues intended to be used with the STM module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "PupEventsPQueue",
          "name": "PupEventsPQueue",
          "package": "Pup-Events-PQueue",
          "source": "src/PupEventsPQueue.html",
          "type": "module"
        },
        "index": {
          "description": "Implements Priority Queues intended to be used with the STM module",
          "hierarchy": "PupEventsPQueue",
          "module": "PupEventsPQueue",
          "name": "PupEventsPQueue",
          "package": "Pup-Events-PQueue",
          "partial": "Pup Events PQueue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Pup-Events-PQueue/docs/PupEventsPQueue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple alias so we have pretty types.\n\u003c/p\u003e",
          "module": "PupEventsPQueue",
          "name": "PQueue",
          "package": "Pup-Events-PQueue",
          "source": "src/PupEventsPQueue.html#PQueue",
          "type": "type"
        },
        "index": {
          "description": "simple alias so we have pretty types",
          "hierarchy": "PupEventsPQueue",
          "module": "PupEventsPQueue",
          "name": "PQueue",
          "package": "Pup-Events-PQueue",
          "partial": "PQueue",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Pup-Events-PQueue/docs/PupEventsPQueue.html#t:PQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursively tries to read each priority level until it finds something.\n If it can't find any events it returns Nothing. Call using \u003ccode\u003eatomically $\n getThing pqueue\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "PupEventsPQueue",
          "name": "getThing",
          "package": "Pup-Events-PQueue",
          "signature": "PQueue a-\u003e STM (Maybe a)",
          "type": "function"
        },
        "index": {
          "description": "Recursively tries to read each priority level until it finds something If it can find any events it returns Nothing Call using atomically getThing pqueue",
          "hierarchy": "PupEventsPQueue",
          "module": "PupEventsPQueue",
          "name": "getThing",
          "normalized": "PQueue a-\u003eSTM(Maybe a)",
          "package": "Pup-Events-PQueue",
          "partial": "Thing",
          "signature": "PQueue a-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Pup-Events-PQueue/docs/PupEventsPQueue.html#v:getThing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an empty PQueue with the specified number of priority levels.\n\u003c/p\u003e",
          "module": "PupEventsPQueue",
          "name": "makeQueues",
          "package": "Pup-Events-PQueue",
          "signature": "Int-\u003e IO (PQueue a)",
          "type": "function"
        },
        "index": {
          "description": "Returns an empty PQueue with the specified number of priority levels",
          "hierarchy": "PupEventsPQueue",
          "module": "PupEventsPQueue",
          "name": "makeQueues",
          "normalized": "Int-\u003eIO(PQueue a)",
          "package": "Pup-Events-PQueue",
          "partial": "Queues",
          "signature": "Int-\u003eIO(PQueue a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Pup-Events-PQueue/docs/PupEventsPQueue.html#v:makeQueues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites the given something to the given PQueue at the specified\n priority level. It does some checking to make sure we have a valid\n priority level. Call using \u003ccode\u003eatomically $ writeThing pqueue priority thing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "PupEventsPQueue",
          "name": "writeThing",
          "package": "Pup-Events-PQueue",
          "signature": "PQueue a-\u003e Int-\u003e a-\u003e STM ()",
          "type": "function"
        },
        "index": {
          "description": "Writes the given something to the given PQueue at the specified priority level It does some checking to make sure we have valid priority level Call using atomically writeThing pqueue priority thing",
          "hierarchy": "PupEventsPQueue",
          "module": "PupEventsPQueue",
          "name": "writeThing",
          "normalized": "PQueue a-\u003eInt-\u003ea-\u003eSTM()",
          "package": "Pup-Events-PQueue",
          "partial": "Thing",
          "signature": "PQueue a-\u003eInt-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Pup-Events-PQueue/docs/PupEventsPQueue.html#v:writeThing"
      }
    }
  ]
]