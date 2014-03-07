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
        "word": "chan-split"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Chan.Class",
          "name": "Class",
          "package": "chan-split",
          "source": "src/Control-Concurrent-Chan-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent Chan Class",
          "module": "Control.Concurrent.Chan.Class",
          "name": "Class",
          "package": "chan-split",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-Chan-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for \u003ccode\u003e\u003ca\u003eSplitChan\u003c/a\u003e\u003c/code\u003e types that can be instantiated without programmer\n input. \u003cem\u003ee.g.\u003c/em\u003e the standard haskell \u003ccode\u003eChan\u003c/code\u003e is a member of this class, however\n a bounded chan type that took an \u003ccode\u003eInt\u003c/code\u003e to define the buffer size would not.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Class",
          "name": "NewSplitChan",
          "package": "chan-split",
          "source": "src/Control-Concurrent-Chan-Class.html#NewSplitChan",
          "type": "class"
        },
        "index": {
          "description": "class for SplitChan types that can be instantiated without programmer input e.g the standard haskell Chan is member of this class however bounded chan type that took an Int to define the buffer size would not",
          "hierarchy": "Control Concurrent Chan Class",
          "module": "Control.Concurrent.Chan.Class",
          "name": "NewSplitChan",
          "package": "chan-split",
          "partial": "New Split Chan",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-Chan-Class.html#t:NewSplitChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for chan types with a \"write end\" and a \"read end\". A minimal\n complete instance defines \u003ccode\u003e\u003ca\u003ereadChan\u003c/a\u003e\u003c/code\u003e and one of \u003ccode\u003e\u003ca\u003ewriteChan\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003ewriteList2Chan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Class",
          "name": "SplitChan",
          "package": "chan-split",
          "source": "src/Control-Concurrent-Chan-Class.html#SplitChan",
          "type": "class"
        },
        "index": {
          "description": "class for chan types with write end and read end minimal complete instance defines readChan and one of writeChan or writeList2Chan",
          "hierarchy": "Control Concurrent Chan Class",
          "module": "Control.Concurrent.Chan.Class",
          "name": "SplitChan",
          "package": "chan-split",
          "partial": "Split Chan",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-Chan-Class.html#t:SplitChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Chan.Class",
          "name": "newSplitChan",
          "package": "chan-split",
          "signature": "IO (i a, o a)",
          "source": "src/Control-Concurrent-Chan-Class.html#newSplitChan",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Concurrent Chan Class",
          "module": "Control.Concurrent.Chan.Class",
          "name": "newSplitChan",
          "normalized": "IO(a b,c b)",
          "package": "chan-split",
          "partial": "Split Chan",
          "signature": "IO(i a,o a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-Chan-Class.html#v:newSplitChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the next value from the \u003ccode\u003eOutChan\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Class",
          "name": "readChan",
          "package": "chan-split",
          "signature": "o a -\u003e IO a",
          "source": "src/Control-Concurrent-Chan-Class.html#readChan",
          "type": "method"
        },
        "index": {
          "description": "Read the next value from the OutChan",
          "hierarchy": "Control Concurrent Chan Class",
          "module": "Control.Concurrent.Chan.Class",
          "name": "readChan",
          "normalized": "a b-\u003eIO b",
          "package": "chan-split",
          "partial": "Chan",
          "signature": "o a-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-Chan-Class.html#v:readChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to a Chan type.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Class",
          "name": "writeChan",
          "package": "chan-split",
          "signature": "i a -\u003e a -\u003e IO ()",
          "source": "src/Control-Concurrent-Chan-Class.html#writeChan",
          "type": "method"
        },
        "index": {
          "description": "Write value to Chan type",
          "hierarchy": "Control Concurrent Chan Class",
          "module": "Control.Concurrent.Chan.Class",
          "name": "writeChan",
          "normalized": "a b-\u003eb-\u003eIO()",
          "package": "chan-split",
          "partial": "Chan",
          "signature": "i a-\u003ea-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-Chan-Class.html#v:writeChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an entire list of items to a chan type\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Class",
          "name": "writeList2Chan",
          "package": "chan-split",
          "signature": "i a -\u003e [a] -\u003e IO ()",
          "source": "src/Control-Concurrent-Chan-Class.html#writeList2Chan",
          "type": "method"
        },
        "index": {
          "description": "Write an entire list of items to chan type",
          "hierarchy": "Control Concurrent Chan Class",
          "module": "Control.Concurrent.Chan.Class",
          "name": "writeList2Chan",
          "normalized": "a b-\u003e[b]-\u003eIO()",
          "package": "chan-split",
          "partial": "List Chan",
          "signature": "i a-\u003e[a]-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-Chan-Class.html#v:writeList2Chan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Chan.Split",
          "name": "Split",
          "package": "chan-split",
          "source": "src/Control-Concurrent-Chan-Split.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent Chan Split",
          "module": "Control.Concurrent.Chan.Split",
          "name": "Split",
          "package": "chan-split",
          "partial": "Split",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-Chan-Split.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \"write side\" of a chan pair\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Split",
          "name": "InChan",
          "package": "chan-split",
          "source": "src/Control-Concurrent-Chan-Split.html#InChan",
          "type": "data"
        },
        "index": {
          "description": "The write side of chan pair",
          "hierarchy": "Control Concurrent Chan Split",
          "module": "Control.Concurrent.Chan.Split",
          "name": "InChan",
          "package": "chan-split",
          "partial": "In Chan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-Chan-Split.html#t:InChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \"read side\" of a chan pair\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Split",
          "name": "OutChan",
          "package": "chan-split",
          "source": "src/Control-Concurrent-Chan-Split.html#OutChan",
          "type": "data"
        },
        "index": {
          "description": "The read side of chan pair",
          "hierarchy": "Control Concurrent Chan Split",
          "module": "Control.Concurrent.Chan.Split",
          "name": "OutChan",
          "package": "chan-split",
          "partial": "Out Chan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-Chan-Split.html#t:OutChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDuplicate an \u003ccode\u003e\u003ca\u003eOutChan\u003c/a\u003e\u003c/code\u003e: the duplicate channel contains any unread messages\n in the original (n.b. this differs from the behavior of dupChan in Chan),\n and data written to the corresponding \u003ccode\u003e\u003ca\u003eInChan\u003c/a\u003e\u003c/code\u003e will appear in both, i.e.\n consuming a value from the copy will have no affect on the values in the\n original OutChan.\n\u003c/p\u003e\u003cp\u003e(Note that a duplicated channel is not equal to its original.\n So: \u003ccode\u003efmap (c /=) $ dupChan c\u003c/code\u003e returns \u003ccode\u003eTrue\u003c/code\u003e for all \u003ccode\u003ec\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Split",
          "name": "dupChan",
          "package": "chan-split",
          "signature": "OutChan a -\u003e IO (OutChan a)",
          "source": "src/Control-Concurrent-Chan-Split.html#dupChan",
          "type": "function"
        },
        "index": {
          "description": "Duplicate an OutChan the duplicate channel contains any unread messages in the original n.b this differs from the behavior of dupChan in Chan and data written to the corresponding InChan will appear in both i.e consuming value from the copy will have no affect on the values in the original OutChan Note that duplicated channel is not equal to its original So fmap dupChan returns True for all",
          "hierarchy": "Control Concurrent Chan Split",
          "module": "Control.Concurrent.Chan.Split",
          "name": "dupChan",
          "normalized": "OutChan a-\u003eIO(OutChan a)",
          "package": "chan-split",
          "partial": "Chan",
          "signature": "OutChan a-\u003eIO(OutChan a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-Chan-Split.html#v:dupChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a lazy list representing the contents of the supplied OutChan, much\n like System.IO.hGetContents.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Split",
          "name": "getChanContents",
          "package": "chan-split",
          "signature": "OutChan a -\u003e IO [a]",
          "source": "src/Control-Concurrent-Chan-Split.html#getChanContents",
          "type": "function"
        },
        "index": {
          "description": "Return lazy list representing the contents of the supplied OutChan much like System.IO.hGetContents",
          "hierarchy": "Control Concurrent Chan Split",
          "module": "Control.Concurrent.Chan.Split",
          "name": "getChanContents",
          "normalized": "OutChan a-\u003eIO[a]",
          "package": "chan-split",
          "partial": "Chan Contents",
          "signature": "OutChan a-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-Chan-Split.html#v:getChanContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Class",
          "name": "Class",
          "package": "chan-split",
          "source": "src/Control-Concurrent-STM-TChan-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Class",
          "module": "Control.Concurrent.STM.TChan.Class",
          "name": "Class",
          "package": "chan-split",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-STM-TChan-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for \u003ccode\u003e\u003ca\u003eSplitTChan\u003c/a\u003e\u003c/code\u003e types that can be instantiated without programmer\n input. \u003cem\u003ee.g.\u003c/em\u003e the standard haskell \u003ccode\u003eTChan\u003c/code\u003e is a member of this class, however\n a bounded chan type that took an \u003ccode\u003eInt\u003c/code\u003e to define the buffer size would not.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan.Class",
          "name": "NewSplitTChan",
          "package": "chan-split",
          "source": "src/Control-Concurrent-STM-TChan-Class.html#NewSplitTChan",
          "type": "class"
        },
        "index": {
          "description": "class for SplitTChan types that can be instantiated without programmer input e.g the standard haskell TChan is member of this class however bounded chan type that took an Int to define the buffer size would not",
          "hierarchy": "Control Concurrent STM TChan Class",
          "module": "Control.Concurrent.STM.TChan.Class",
          "name": "NewSplitTChan",
          "package": "chan-split",
          "partial": "New Split TChan",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-STM-TChan-Class.html#t:NewSplitTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class capturing Chan operations in STM.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan.Class",
          "name": "SplitTChan",
          "package": "chan-split",
          "source": "src/Control-Concurrent-STM-TChan-Class.html#SplitTChan",
          "type": "class"
        },
        "index": {
          "description": "class capturing Chan operations in STM",
          "hierarchy": "Control Concurrent STM TChan Class",
          "module": "Control.Concurrent.STM.TChan.Class",
          "name": "SplitTChan",
          "package": "chan-split",
          "partial": "Split TChan",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-STM-TChan-Class.html#t:SplitTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the supplied \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan.Class",
          "name": "isEmptyTChan",
          "package": "chan-split",
          "signature": "o a -\u003e STM Bool",
          "source": "src/Control-Concurrent-STM-TChan-Class.html#isEmptyTChan",
          "type": "method"
        },
        "index": {
          "description": "Returns True if the supplied TChan is empty",
          "hierarchy": "Control Concurrent STM TChan Class",
          "module": "Control.Concurrent.STM.TChan.Class",
          "name": "isEmptyTChan",
          "normalized": "a b-\u003eSTM Bool",
          "package": "chan-split",
          "partial": "Empty TChan",
          "signature": "o a-\u003eSTM Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-STM-TChan-Class.html#v:isEmptyTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Class",
          "name": "newSplitTChan",
          "package": "chan-split",
          "signature": "STM (i a, o a)",
          "source": "src/Control-Concurrent-STM-TChan-Class.html#newSplitTChan",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Class",
          "module": "Control.Concurrent.STM.TChan.Class",
          "name": "newSplitTChan",
          "normalized": "STM(a b,c b)",
          "package": "chan-split",
          "partial": "Split TChan",
          "signature": "STM(i a,o a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-STM-TChan-Class.html#v:newSplitTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the next value from the \u003ccode\u003eTChan\u003c/code\u003e without removing it,\n retrying if the channel is empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan.Class",
          "name": "peekTChan",
          "package": "chan-split",
          "signature": "o a -\u003e STM a",
          "source": "src/Control-Concurrent-STM-TChan-Class.html#peekTChan",
          "type": "method"
        },
        "index": {
          "description": "Get the next value from the TChan without removing it retrying if the channel is empty",
          "hierarchy": "Control Concurrent STM TChan Class",
          "module": "Control.Concurrent.STM.TChan.Class",
          "name": "peekTChan",
          "normalized": "a b-\u003eSTM b",
          "package": "chan-split",
          "partial": "TChan",
          "signature": "o a-\u003eSTM a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-STM-TChan-Class.html#v:peekTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the next value from the out chan.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan.Class",
          "name": "readTChan",
          "package": "chan-split",
          "signature": "o a -\u003e STM a",
          "source": "src/Control-Concurrent-STM-TChan-Class.html#readTChan",
          "type": "method"
        },
        "index": {
          "description": "Read the next value from the out chan",
          "hierarchy": "Control Concurrent STM TChan Class",
          "module": "Control.Concurrent.STM.TChan.Class",
          "name": "readTChan",
          "normalized": "a b-\u003eSTM b",
          "package": "chan-split",
          "partial": "TChan",
          "signature": "o a-\u003eSTM a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-STM-TChan-Class.html#v:readTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003epeekTChan\u003c/a\u003e\u003c/code\u003e which does not retry. Instead it\n returns \u003ccode\u003eNothing\u003c/code\u003e if no value is available.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan.Class",
          "name": "tryPeekTChan",
          "package": "chan-split",
          "signature": "o a -\u003e STM (Maybe a)",
          "source": "src/Control-Concurrent-STM-TChan-Class.html#tryPeekTChan",
          "type": "method"
        },
        "index": {
          "description": "version of peekTChan which does not retry Instead it returns Nothing if no value is available",
          "hierarchy": "Control Concurrent STM TChan Class",
          "module": "Control.Concurrent.STM.TChan.Class",
          "name": "tryPeekTChan",
          "normalized": "a b-\u003eSTM(Maybe b)",
          "package": "chan-split",
          "partial": "Peek TChan",
          "signature": "o a-\u003eSTM(Maybe a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-STM-TChan-Class.html#v:tryPeekTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ereadTChan\u003c/a\u003e\u003c/code\u003e which does not retry. Instead it\n returns \u003ccode\u003eNothing\u003c/code\u003e if no value is available.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan.Class",
          "name": "tryReadTChan",
          "package": "chan-split",
          "signature": "o a -\u003e STM (Maybe a)",
          "source": "src/Control-Concurrent-STM-TChan-Class.html#tryReadTChan",
          "type": "method"
        },
        "index": {
          "description": "version of readTChan which does not retry Instead it returns Nothing if no value is available",
          "hierarchy": "Control Concurrent STM TChan Class",
          "module": "Control.Concurrent.STM.TChan.Class",
          "name": "tryReadTChan",
          "normalized": "a b-\u003eSTM(Maybe b)",
          "package": "chan-split",
          "partial": "Read TChan",
          "signature": "o a-\u003eSTM(Maybe a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-STM-TChan-Class.html#v:tryReadTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to the in chan.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan.Class",
          "name": "writeTChan",
          "package": "chan-split",
          "signature": "i a -\u003e a -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-TChan-Class.html#writeTChan",
          "type": "method"
        },
        "index": {
          "description": "Write value to the in chan",
          "hierarchy": "Control Concurrent STM TChan Class",
          "module": "Control.Concurrent.STM.TChan.Class",
          "name": "writeTChan",
          "normalized": "a b-\u003eb-\u003eSTM()",
          "package": "chan-split",
          "partial": "TChan",
          "signature": "i a-\u003ea-\u003eSTM()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-STM-TChan-Class.html#v:writeTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "Split",
          "package": "chan-split",
          "source": "src/Control-Concurrent-STM-TChan-Split.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Split",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "Split",
          "package": "chan-split",
          "partial": "Split",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-STM-TChan-Split.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe input side of an unbounded FIFO channel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "InTChan",
          "package": "chan-split",
          "source": "src/Control-Concurrent-STM-TChan-Split.html#InTChan",
          "type": "data"
        },
        "index": {
          "description": "The input side of an unbounded FIFO channel",
          "hierarchy": "Control Concurrent STM TChan Split",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "InTChan",
          "package": "chan-split",
          "partial": "In TChan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-STM-TChan-Split.html#t:InTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe output side of an unbounded FIFO channel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "OutTChan",
          "package": "chan-split",
          "source": "src/Control-Concurrent-STM-TChan-Split.html#OutTChan",
          "type": "data"
        },
        "index": {
          "description": "The output side of an unbounded FIFO channel",
          "hierarchy": "Control Concurrent STM TChan Split",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "OutTChan",
          "package": "chan-split",
          "partial": "Out TChan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-STM-TChan-Split.html#t:OutTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClone a \u003ccode\u003eTChan\u003c/code\u003e: similar to dupTChan, but the cloned channel starts with the\n same content available as the original channel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "cloneTChan",
          "package": "chan-split",
          "signature": "OutTChan a -\u003e STM (OutTChan a)",
          "source": "src/Control-Concurrent-STM-TChan-Split.html#cloneTChan",
          "type": "function"
        },
        "index": {
          "description": "Clone TChan similar to dupTChan but the cloned channel starts with the same content available as the original channel",
          "hierarchy": "Control Concurrent STM TChan Split",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "cloneTChan",
          "normalized": "OutTChan a-\u003eSTM(OutTChan a)",
          "package": "chan-split",
          "partial": "TChan",
          "signature": "OutTChan a-\u003eSTM(OutTChan a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-STM-TChan-Split.html#v:cloneTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a duplicate \u003ccode\u003eOutChan\u003c/code\u003e from an \u003ccode\u003eInChan\u003c/code\u003e. The \u003ccode\u003eOutChan\u003c/code\u003e starts \n empty but will receive a copy of all subsequent values written.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "dupTChan",
          "package": "chan-split",
          "signature": "InTChan a -\u003e STM (OutTChan a)",
          "source": "src/Control-Concurrent-STM-TChan-Split.html#dupTChan",
          "type": "function"
        },
        "index": {
          "description": "Create duplicate OutChan from an InChan The OutChan starts empty but will receive copy of all subsequent values written",
          "hierarchy": "Control Concurrent STM TChan Split",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "dupTChan",
          "normalized": "InTChan a-\u003eSTM(OutTChan a)",
          "package": "chan-split",
          "partial": "TChan",
          "signature": "InTChan a-\u003eSTM(OutTChan a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-STM-TChan-Split.html#v:dupTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new write end of a TChan. Use \u003ccode\u003e\u003ca\u003edupTChan\u003c/a\u003e\u003c/code\u003e to get an \u003ccode\u003eOutChan\u003c/code\u003e that\n values can be read from.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "newInTChan",
          "package": "chan-split",
          "signature": "STM (InTChan a)",
          "source": "src/Control-Concurrent-STM-TChan-Split.html#newInTChan",
          "type": "function"
        },
        "index": {
          "description": "Create new write end of TChan Use dupTChan to get an OutChan that values can be read from",
          "hierarchy": "Control Concurrent STM TChan Split",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "newInTChan",
          "package": "chan-split",
          "partial": "In TChan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-STM-TChan-Split.html#v:newInTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eIO\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003enewInTChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "newInTChanIO",
          "package": "chan-split",
          "signature": "IO (InTChan a)",
          "source": "src/Control-Concurrent-STM-TChan-Split.html#newInTChanIO",
          "type": "function"
        },
        "index": {
          "description": "IO version of newInTChan",
          "hierarchy": "Control Concurrent STM TChan Split",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "newInTChanIO",
          "package": "chan-split",
          "partial": "In TChan IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-STM-TChan-Split.html#v:newInTChanIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eIO\u003c/code\u003e version of \u003ccode\u003enewTChan\u003c/code\u003e.  This is useful for creating top-level\n \u003ccode\u003eTChan\u003c/code\u003es using \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e, because using\n \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e inside \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e isn't\n possible.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "newSplitTChanIO",
          "package": "chan-split",
          "signature": "IO (OutTChan a, InTChan a)",
          "source": "src/Control-Concurrent-STM-TChan-Split.html#newSplitTChanIO",
          "type": "function"
        },
        "index": {
          "description": "IO version of newTChan This is useful for creating top-level TChan using unsafePerformIO because using atomically inside unsafePerformIO isn possible",
          "hierarchy": "Control Concurrent STM TChan Split",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "newSplitTChanIO",
          "normalized": "IO(OutTChan a,InTChan a)",
          "package": "chan-split",
          "partial": "Split TChan IO",
          "signature": "IO(OutTChan a,InTChan a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-STM-TChan-Split.html#v:newSplitTChanIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a data item back onto a channel, where it will be the next item read.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "unGetTChan",
          "package": "chan-split",
          "signature": "OutTChan a -\u003e a -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-TChan-Split.html#unGetTChan",
          "type": "function"
        },
        "index": {
          "description": "Put data item back onto channel where it will be the next item read",
          "hierarchy": "Control Concurrent STM TChan Split",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "unGetTChan",
          "normalized": "OutTChan a-\u003ea-\u003eSTM()",
          "package": "chan-split",
          "partial": "Get TChan",
          "signature": "OutTChan a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chan-split/docs/Control-Concurrent-STM-TChan-Split.html#v:unGetTChan"
      }
    }
  ]
]