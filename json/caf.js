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
        "word": "caf"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis modules combines a quantity semaphore from the module Control.Concurrent.Fututes.QSem and a channel from \nmodule  Control.Concurrent.Fututes.Chan to a new synchronisation primitive. Bounded channels have a limited \ncapacity of storage cells.\nWarning: All operations on bounded channels should only be used within the \nglobal wrapper function \u003ccode\u003eFutures.withFuturesDo\u003c/code\u003e!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Futures.BChan",
          "name": "BChan",
          "package": "caf",
          "source": "src/Control-Concurrent-Futures-BChan.html",
          "type": "module"
        },
        "index": {
          "description": "This modules combines quantity semaphore from the module Control.Concurrent.Fututes.QSem and channel from module Control.Concurrent.Fututes.Chan to new synchronisation primitive Bounded channels have limited capacity of storage cells Warning All operations on bounded channels should only be used within the global wrapper function Futures.withFuturesDo",
          "hierarchy": "Control Concurrent Futures BChan",
          "module": "Control.Concurrent.Futures.BChan",
          "name": "BChan",
          "package": "caf",
          "partial": "BChan",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-BChan.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Futures.BChan",
          "name": "BChan",
          "package": "caf",
          "source": "src/Control-Concurrent-Futures-BChan.html#BChan",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Concurrent Futures BChan",
          "module": "Control.Concurrent.Futures.BChan",
          "name": "BChan",
          "package": "caf",
          "partial": "BChan",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-BChan.html#t:BChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new bounded channel\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.BChan",
          "name": "newBChan",
          "package": "caf",
          "signature": "Int -\u003e IO (BChan a)",
          "source": "src/Control-Concurrent-Futures-BChan.html#newBChan",
          "type": "function"
        },
        "index": {
          "description": "Creates new bounded channel",
          "hierarchy": "Control Concurrent Futures BChan",
          "module": "Control.Concurrent.Futures.BChan",
          "name": "newBChan",
          "normalized": "Int-\u003eIO(BChan a)",
          "package": "caf",
          "partial": "BChan",
          "signature": "Int-\u003eIO(BChan a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-BChan.html#v:newBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms an up-operation on the QSem of the bounded channel and then reads\n a value from the channel. The read operation may block.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.BChan",
          "name": "readBChan",
          "package": "caf",
          "signature": "BChan a -\u003e IO a",
          "source": "src/Control-Concurrent-Futures-BChan.html#readBChan",
          "type": "function"
        },
        "index": {
          "description": "Performs an up-operation on the QSem of the bounded channel and then reads value from the channel The read operation may block",
          "hierarchy": "Control Concurrent Futures BChan",
          "module": "Control.Concurrent.Futures.BChan",
          "name": "readBChan",
          "normalized": "BChan a-\u003eIO a",
          "package": "caf",
          "partial": "BChan",
          "signature": "BChan a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-BChan.html#v:readBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms a down-operations on the QSem of the bounded channel and writes a\n new value to it. The down-operation may block.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.BChan",
          "name": "writeBChan",
          "package": "caf",
          "signature": "BChan a -\u003e a -\u003e IO ()",
          "source": "src/Control-Concurrent-Futures-BChan.html#writeBChan",
          "type": "function"
        },
        "index": {
          "description": "Performs down-operations on the QSem of the bounded channel and writes new value to it The down-operation may block",
          "hierarchy": "Control Concurrent Futures BChan",
          "module": "Control.Concurrent.Futures.BChan",
          "name": "writeBChan",
          "normalized": "BChan a-\u003ea-\u003eIO()",
          "package": "caf",
          "partial": "BChan",
          "signature": "BChan a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-BChan.html#v:writeBChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements barrier using futures.\nA rendezvous ensures that two threads meet at a specific point before\ncontinuing their computation. The rendezvous idiom blocks at this point\nuntil both threads have arrived. A barrier is a rendezvous for a\ngroup of processes. Assume that a application is divided into phases where\na couple of threads compute several interims to be the input for the next\nphase. Then all threads must complete the current phase before entering\nthe next. To achieve this behaviour a barrier is placed at the end of a phase.\nNote that a barriers is purely for synchronisation and not for exchange of\ndata.\n\u003c/p\u003e\u003cp\u003eWarning: All operations on barrier should only be used within the global wrapper function\n\u003ccode\u003e\u003ca\u003ewithFuturesDo\u003c/a\u003e\u003c/code\u003e!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Futures.Barrier",
          "name": "Barrier",
          "package": "caf",
          "source": "src/Control-Concurrent-Futures-Barrier.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements barrier using futures rendezvous ensures that two threads meet at specific point before continuing their computation The rendezvous idiom blocks at this point until both threads have arrived barrier is rendezvous for group of processes Assume that application is divided into phases where couple of threads compute several interims to be the input for the next phase Then all threads must complete the current phase before entering the next To achieve this behaviour barrier is placed at the end of phase Note that barriers is purely for synchronisation and not for exchange of data Warning All operations on barrier should only be used within the global wrapper function withFuturesDo",
          "hierarchy": "Control Concurrent Futures Barrier",
          "module": "Control.Concurrent.Futures.Barrier",
          "name": "Barrier",
          "package": "caf",
          "partial": "Barrier",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Barrier.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA new barrier type contains of a buffer containing the count of active threads,\n a buffer containing the a count of finished threads and a capacity. \n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.Barrier",
          "name": "Bar",
          "package": "caf",
          "source": "src/Control-Concurrent-Futures-Barrier.html#Bar",
          "type": "type"
        },
        "index": {
          "description": "new barrier type contains of buffer containing the count of active threads buffer containing the count of finished threads and capacity",
          "hierarchy": "Control Concurrent Futures Barrier",
          "module": "Control.Concurrent.Futures.Barrier",
          "name": "Bar",
          "package": "caf",
          "partial": "Bar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Barrier.html#t:Bar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new barrier.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.Barrier",
          "name": "newBar",
          "package": "caf",
          "signature": "Int -\u003e IO (Buffer Int, Buffer [Bool -\u003e IO ()], Int)",
          "source": "src/Control-Concurrent-Futures-Barrier.html#newBar",
          "type": "function"
        },
        "index": {
          "description": "Creates new barrier",
          "hierarchy": "Control Concurrent Futures Barrier",
          "module": "Control.Concurrent.Futures.Barrier",
          "name": "newBar",
          "normalized": "Int-\u003eIO(Buffer Int,Buffer[Bool-\u003eIO()],Int)",
          "package": "caf",
          "partial": "Bar",
          "signature": "Int-\u003eIO(Buffer Int,Buffer[Bool-\u003eIO()],Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Barrier.html#v:newBar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esyncs on the barrier\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.Barrier",
          "name": "syncBar",
          "package": "caf",
          "signature": "(Buffer Int, Buffer [Bool -\u003e IO ()], Int) -\u003e IO Bool",
          "source": "src/Control-Concurrent-Futures-Barrier.html#syncBar",
          "type": "function"
        },
        "index": {
          "description": "syncs on the barrier",
          "hierarchy": "Control Concurrent Futures Barrier",
          "module": "Control.Concurrent.Futures.Barrier",
          "name": "syncBar",
          "normalized": "(Buffer Int,Buffer[Bool-\u003eIO()],Int)-\u003eIO Bool",
          "package": "caf",
          "partial": "Bar",
          "signature": "(Buffer Int,Buffer[Bool-\u003eIO()],Int)-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Barrier.html#v:syncBar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements one-place buffers using futures.\nWarning: All operations on buffers should only be used within the global wrapper function\n\u003ccode\u003e\u003ca\u003ewithFuturesDo\u003c/a\u003e\u003c/code\u003e!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Futures.Buffer",
          "name": "Buffer",
          "package": "caf",
          "source": "src/Control-Concurrent-Futures-Buffer.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements one-place buffers using futures Warning All operations on buffers should only be used within the global wrapper function withFuturesDo",
          "hierarchy": "Control Concurrent Futures Buffer",
          "module": "Control.Concurrent.Futures.Buffer",
          "name": "Buffer",
          "package": "caf",
          "partial": "Buffer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Buffer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe buffer type contains of 3 cells and a handle. The first 2 cells are for\n communication of either a put or get is allowed. The thrist cell is the storage\n cell, the last cell contains a the active handle.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.Buffer",
          "name": "Buffer",
          "package": "caf",
          "source": "src/Control-Concurrent-Futures-Buffer.html#Buffer",
          "type": "type"
        },
        "index": {
          "description": "The buffer type contains of cells and handle The first cells are for communication of either put or get is allowed The thrist cell is the storage cell the last cell contains the active handle",
          "hierarchy": "Control Concurrent Futures Buffer",
          "module": "Control.Concurrent.Futures.Buffer",
          "name": "Buffer",
          "package": "caf",
          "partial": "Buffer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Buffer.html#t:Buffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the contents of a non-empty buffer. If the buffer is empty, then \n this function blocks until the buffer is filled.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.Buffer",
          "name": "getBuf",
          "package": "caf",
          "signature": "Buffer a -\u003e IO a",
          "source": "src/Control-Concurrent-Futures-Buffer.html#getBuf",
          "type": "function"
        },
        "index": {
          "description": "Gets the contents of non-empty buffer If the buffer is empty then this function blocks until the buffer is filled",
          "hierarchy": "Control Concurrent Futures Buffer",
          "module": "Control.Concurrent.Futures.Buffer",
          "name": "getBuf",
          "normalized": "Buffer a-\u003eIO a",
          "package": "caf",
          "partial": "Buf",
          "signature": "Buffer a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Buffer.html#v:getBuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new empty buffer.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.Buffer",
          "name": "newBuf",
          "package": "caf",
          "signature": "IO (Buffer a)",
          "source": "src/Control-Concurrent-Futures-Buffer.html#newBuf",
          "type": "function"
        },
        "index": {
          "description": "Creates new empty buffer",
          "hierarchy": "Control Concurrent Futures Buffer",
          "module": "Control.Concurrent.Futures.Buffer",
          "name": "newBuf",
          "package": "caf",
          "partial": "Buf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Buffer.html#v:newBuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePuts a new value to a buffer. \u003ccode\u003e\u003ca\u003eputBuf\u003c/a\u003e\u003c/code\u003e blocks if\n the buffer is full.  \n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.Buffer",
          "name": "putBuf",
          "package": "caf",
          "signature": "Buffer a -\u003e a -\u003e IO ()",
          "source": "src/Control-Concurrent-Futures-Buffer.html#putBuf",
          "type": "function"
        },
        "index": {
          "description": "Puts new value to buffer putBuf blocks if the buffer is full",
          "hierarchy": "Control Concurrent Futures Buffer",
          "module": "Control.Concurrent.Futures.Buffer",
          "name": "putBuf",
          "normalized": "Buffer a-\u003ea-\u003eIO()",
          "package": "caf",
          "partial": "Buf",
          "signature": "Buffer a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Buffer.html#v:putBuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a channel synchronisation primitive using buffers that block on\nfutures. A channel is a linked list of buffers. It has a read-end at one side and a\nwrite-end at the other. Elements put into the channel can be read out in\na first in, first out order. A read and a write operation can be executed in\nparallel by several threads. A channel has no capacity bounding.\n\u003c/p\u003e\u003cp\u003eThe module contains similar functions as \u003ccode\u003eControl.Concurrent.Futures.Chan\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWarning: All operations on channels should only be used within the global wrapper function\n\u003ccode\u003eFutures.withFuturesDo\u003c/code\u003e!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Futures.Chan",
          "name": "Chan",
          "package": "caf",
          "source": "src/Control-Concurrent-Futures-Chan.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements channel synchronisation primitive using buffers that block on futures channel is linked list of buffers It has read-end at one side and write-end at the other Elements put into the channel can be read out in first in first out order read and write operation can be executed in parallel by several threads channel has no capacity bounding The module contains similar functions as Control.Concurrent.Futures.Chan Warning All operations on channels should only be used within the global wrapper function Futures.withFuturesDo",
          "hierarchy": "Control Concurrent Futures Chan",
          "module": "Control.Concurrent.Futures.Chan",
          "name": "Chan",
          "package": "caf",
          "partial": "Chan",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Chan.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA channel consists of a read-end buffer and a write-end buffer. \n The Itemtype is required to link the buffers in the channel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.Chan",
          "name": "Chan",
          "package": "caf",
          "source": "src/Control-Concurrent-Futures-Chan.html#Chan",
          "type": "data"
        },
        "index": {
          "description": "channel consists of read-end buffer and write-end buffer The Itemtype is required to link the buffers in the channel",
          "hierarchy": "Control Concurrent Futures Chan",
          "module": "Control.Concurrent.Futures.Chan",
          "name": "Chan",
          "package": "caf",
          "partial": "Chan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Chan.html#t:Chan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Futures.Chan",
          "name": "ChanType",
          "package": "caf",
          "source": "src/Control-Concurrent-Futures-Chan.html#ChanType",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Concurrent Futures Chan",
          "module": "Control.Concurrent.Futures.Chan",
          "name": "ChanType",
          "package": "caf",
          "partial": "Chan Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Chan.html#t:ChanType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements the same behaviour as getChanContents from the module Control.Concurrent.Chan.\n It reads permanently from the channel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.Chan",
          "name": "getChanContents",
          "package": "caf",
          "signature": "Chan a -\u003e IO [a]",
          "source": "src/Control-Concurrent-Futures-Chan.html#getChanContents",
          "type": "function"
        },
        "index": {
          "description": "Implements the same behaviour as getChanContents from the module Control.Concurrent.Chan It reads permanently from the channel",
          "hierarchy": "Control Concurrent Futures Chan",
          "module": "Control.Concurrent.Futures.Chan",
          "name": "getChanContents",
          "normalized": "Chan a-\u003eIO[a]",
          "package": "caf",
          "partial": "Chan Contents",
          "signature": "Chan a-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Chan.html#v:getChanContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites two equally typed lists to a given channel in parallel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.Chan",
          "name": "mergeChan",
          "package": "caf",
          "signature": "[a] -\u003e [a] -\u003e Chan a -\u003e IO (Chan a)",
          "source": "src/Control-Concurrent-Futures-Chan.html#mergeChan",
          "type": "function"
        },
        "index": {
          "description": "Writes two equally typed lists to given channel in parallel",
          "hierarchy": "Control Concurrent Futures Chan",
          "module": "Control.Concurrent.Futures.Chan",
          "name": "mergeChan",
          "normalized": "[a]-\u003e[a]-\u003eChan a-\u003eIO(Chan a)",
          "package": "caf",
          "partial": "Chan",
          "signature": "[a]-\u003e[a]-\u003eChan a-\u003eIO(Chan a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Chan.html#v:mergeChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new empty channel.               \n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.Chan",
          "name": "newChan",
          "package": "caf",
          "signature": "IO (Chan a)",
          "source": "src/Control-Concurrent-Futures-Chan.html#newChan",
          "type": "function"
        },
        "index": {
          "description": "Creates new empty channel",
          "hierarchy": "Control Concurrent Futures Chan",
          "module": "Control.Concurrent.Futures.Chan",
          "name": "newChan",
          "package": "caf",
          "partial": "Chan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Chan.html#v:newChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads out an item from the read-head of the channel.\n It blocks on a empty channel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.Chan",
          "name": "readChan",
          "package": "caf",
          "signature": "Chan a -\u003e IO a",
          "source": "src/Control-Concurrent-Futures-Chan.html#readChan",
          "type": "function"
        },
        "index": {
          "description": "Reads out an item from the read-head of the channel It blocks on empty channel",
          "hierarchy": "Control Concurrent Futures Chan",
          "module": "Control.Concurrent.Futures.Chan",
          "name": "readChan",
          "normalized": "Chan a-\u003eIO a",
          "package": "caf",
          "partial": "Chan",
          "signature": "Chan a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Chan.html#v:readChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites one value to a channel. A \u003ccode\u003e\u003ca\u003ewriteChan\u003c/a\u003e\u003c/code\u003e never blocks, since channels have \n no bounding limiters.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.Chan",
          "name": "writeChan",
          "package": "caf",
          "signature": "Chan a -\u003e a -\u003e IO ()",
          "source": "src/Control-Concurrent-Futures-Chan.html#writeChan",
          "type": "function"
        },
        "index": {
          "description": "Writes one value to channel writeChan never blocks since channels have no bounding limiters",
          "hierarchy": "Control Concurrent Futures Chan",
          "module": "Control.Concurrent.Futures.Chan",
          "name": "writeChan",
          "normalized": "Chan a-\u003ea-\u003eIO()",
          "package": "caf",
          "partial": "Chan",
          "signature": "Chan a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Chan.html#v:writeChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements the same behaviour as writeChanContents from the module Control.Concurrent.Chan.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.Chan",
          "name": "writeChanContents",
          "package": "caf",
          "signature": "Chan a -\u003e [a] -\u003e IO ()",
          "source": "src/Control-Concurrent-Futures-Chan.html#writeChanContents",
          "type": "function"
        },
        "index": {
          "description": "Implements the same behaviour as writeChanContents from the module Control.Concurrent.Chan",
          "hierarchy": "Control Concurrent Futures Chan",
          "module": "Control.Concurrent.Futures.Chan",
          "name": "writeChanContents",
          "normalized": "Chan a-\u003e[a]-\u003eIO()",
          "package": "caf",
          "partial": "Chan Contents",
          "signature": "Chan a-\u003e[a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Chan.html#v:writeChanContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements explicit futures (\u003ccode\u003e\u003ca\u003eEFuture\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eefuture\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eforce\u003c/a\u003e\u003c/code\u003e) as well as several variants of implicit futures\n(\u003ccode\u003e\u003ca\u003efuture\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erecursiveFuture\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003estrictFuture\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003estrictRecursiveFuture\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elazyFuture\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elazyRecursiveFuture\u003c/a\u003e\u003c/code\u003e)\nWhile explicit futures must be forced (using \u003ccode\u003e\u003ca\u003eforce\u003c/a\u003e\u003c/code\u003e) if their value is needed, this is not necessary for implicit futures.\nFor implicit futures it is necessary to put them into the global wrapper \u003ccode\u003e\u003ca\u003ewithFuturesDo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Futures.Futures",
          "name": "Futures",
          "package": "caf",
          "source": "src/Control-Concurrent-Futures-Futures.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements explicit futures EFuture efuture force as well as several variants of implicit futures future recursiveFuture strictFuture strictRecursiveFuture lazyFuture lazyRecursiveFuture While explicit futures must be forced using force if their value is needed this is not necessary for implicit futures For implicit futures it is necessary to put them into the global wrapper withFuturesDo",
          "hierarchy": "Control Concurrent Futures Futures",
          "module": "Control.Concurrent.Futures.Futures",
          "name": "Futures",
          "package": "caf",
          "partial": "Futures",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Futures.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type \u003ccode\u003e\u003ca\u003eEFuture\u003c/a\u003e\u003c/code\u003e implements explicit futures, i.e. if the value of the future is need it must be forced explicitly using \u003ccode\u003e\u003ca\u003eforce\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.Futures",
          "name": "EFuture",
          "package": "caf",
          "source": "src/Control-Concurrent-Futures-Futures.html#EFuture",
          "type": "type"
        },
        "index": {
          "description": "The type EFuture implements explicit futures i.e if the value of the future is need it must be forced explicitly using force",
          "hierarchy": "Control Concurrent Futures Futures",
          "module": "Control.Concurrent.Futures.Futures",
          "name": "EFuture",
          "package": "caf",
          "partial": "EFuture",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Futures.html#t:EFuture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea new handle component. \n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.Futures",
          "name": "bhandle",
          "package": "caf",
          "signature": "(a -\u003e (a -\u003e IO ()) -\u003e t) -\u003e IO t",
          "source": "src/Control-Concurrent-Futures-Futures.html#bhandle",
          "type": "function"
        },
        "index": {
          "description": "new handle component",
          "hierarchy": "Control Concurrent Futures Futures",
          "module": "Control.Concurrent.Futures.Futures",
          "name": "bhandle",
          "normalized": "(a-\u003e(a-\u003eIO())-\u003eb)-\u003eIO b",
          "package": "caf",
          "signature": "(a-\u003e(a-\u003eIO())-\u003et)-\u003eIO t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Futures.html#v:bhandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eefuture\u003c/a\u003e\u003c/code\u003e creates an explicit future, i.e. the computation is performed concurrently. The future value can be forced using \u003ccode\u003e\u003ca\u003eforce\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.Futures",
          "name": "efuture",
          "package": "caf",
          "signature": "IO a -\u003e IO (EFuture a)",
          "source": "src/Control-Concurrent-Futures-Futures.html#efuture",
          "type": "function"
        },
        "index": {
          "description": "efuture creates an explicit future i.e the computation is performed concurrently The future value can be forced using force",
          "hierarchy": "Control Concurrent Futures Futures",
          "module": "Control.Concurrent.Futures.Futures",
          "name": "efuture",
          "normalized": "IO a-\u003eIO(EFuture a)",
          "package": "caf",
          "signature": "IO a-\u003eIO(EFuture a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Futures.html#v:efuture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eforce\u003c/a\u003e\u003c/code\u003e forces the value of an explicit future (\u003ccode\u003e\u003ca\u003eEFuture\u003c/a\u003e\u003c/code\u003e), i.e. the calling thread blocks until the result becomes available.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.Futures",
          "name": "force",
          "package": "caf",
          "signature": "EFuture a -\u003e IO a",
          "source": "src/Control-Concurrent-Futures-Futures.html#force",
          "type": "function"
        },
        "index": {
          "description": "force forces the value of an explicit future EFuture i.e the calling thread blocks until the result becomes available",
          "hierarchy": "Control Concurrent Futures Futures",
          "module": "Control.Concurrent.Futures.Futures",
          "name": "force",
          "normalized": "EFuture a-\u003eIO a",
          "package": "caf",
          "signature": "EFuture a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Futures.html#v:force"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efuture\u003c/a\u003e\u003c/code\u003e creates an implicit future. A non-blocking concurrent computation is started. If the value of the future is needed, then\n  the future will be forced implicitly. The concurrent computation is killed if the calling thread stops, even if \u003ccode\u003e\u003ca\u003efuture\u003c/a\u003e\u003c/code\u003e is used\n  within \u003ccode\u003e\u003ca\u003ewithFuturesDo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.Futures",
          "name": "future",
          "package": "caf",
          "signature": "IO a -\u003e IO a",
          "source": "src/Control-Concurrent-Futures-Futures.html#future",
          "type": "function"
        },
        "index": {
          "description": "future creates an implicit future non-blocking concurrent computation is started If the value of the future is needed then the future will be forced implicitly The concurrent computation is killed if the calling thread stops even if future is used within withFuturesDo",
          "hierarchy": "Control Concurrent Futures Futures",
          "module": "Control.Concurrent.Futures.Futures",
          "name": "future",
          "normalized": "IO a-\u003eIO a",
          "package": "caf",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Futures.html#v:future"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebinds a handle to its value.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.Futures",
          "name": "hbind",
          "package": "caf",
          "signature": "(t -\u003e t1) -\u003e t -\u003e t1",
          "source": "src/Control-Concurrent-Futures-Futures.html#hbind",
          "type": "function"
        },
        "index": {
          "description": "binds handle to its value",
          "hierarchy": "Control Concurrent Futures Futures",
          "module": "Control.Concurrent.Futures.Futures",
          "name": "hbind",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea",
          "package": "caf",
          "signature": "(t-\u003et)-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Futures.html#v:hbind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea lazy future. Initially, no concurrent computation is started, but if the lazy future gets (implicitly) forced,\n then the lazy future becomes a strict future.\n Warning: \u003ccode\u003e\u003ca\u003elazyFuture\u003c/a\u003e\u003c/code\u003e should only be used within the global wrapper \u003ccode\u003e\u003ca\u003ewithFuturesDo\u003c/a\u003e\u003c/code\u003e!\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.Futures",
          "name": "lazyFuture",
          "package": "caf",
          "signature": "IO a -\u003e IO a",
          "source": "src/Control-Concurrent-Futures-Futures.html#lazyFuture",
          "type": "function"
        },
        "index": {
          "description": "lazy future Initially no concurrent computation is started but if the lazy future gets implicitly forced then the lazy future becomes strict future Warning lazyFuture should only be used within the global wrapper withFuturesDo",
          "hierarchy": "Control Concurrent Futures Futures",
          "module": "Control.Concurrent.Futures.Futures",
          "name": "lazyFuture",
          "normalized": "IO a-\u003eIO a",
          "package": "caf",
          "partial": "Future",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Futures.html#v:lazyFuture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea recursive variant of \u003ccode\u003e\u003ca\u003elazyFuture\u003c/a\u003e\u003c/code\u003e (see \u003ccode\u003e\u003ca\u003erecursiveFuture\u003c/a\u003e\u003c/code\u003e and 'future)\n Warning: \u003ccode\u003e\u003ca\u003elazyRecursiveFuture\u003c/a\u003e\u003c/code\u003e should only be used within the global wrapper \u003ccode\u003e\u003ca\u003ewithFuturesDo\u003c/a\u003e\u003c/code\u003e!\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.Futures",
          "name": "lazyRecursiveFuture",
          "package": "caf",
          "signature": "(a -\u003e IO a) -\u003e IO a",
          "source": "src/Control-Concurrent-Futures-Futures.html#lazyRecursiveFuture",
          "type": "function"
        },
        "index": {
          "description": "recursive variant of lazyFuture see recursiveFuture and future Warning lazyRecursiveFuture should only be used within the global wrapper withFuturesDo",
          "hierarchy": "Control Concurrent Futures Futures",
          "module": "Control.Concurrent.Futures.Futures",
          "name": "lazyRecursiveFuture",
          "normalized": "(a-\u003eIO a)-\u003eIO a",
          "package": "caf",
          "partial": "Recursive Future",
          "signature": "(a-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Futures.html#v:lazyRecursiveFuture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreates a new handle.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.Futures",
          "name": "newhandled",
          "package": "caf",
          "signature": "IO (a -\u003e IO (), a)",
          "source": "src/Control-Concurrent-Futures-Futures.html#newhandled",
          "type": "function"
        },
        "index": {
          "description": "creates new handle",
          "hierarchy": "Control Concurrent Futures Futures",
          "module": "Control.Concurrent.Futures.Futures",
          "name": "newhandled",
          "normalized": "IO(a-\u003eIO(),a)",
          "package": "caf",
          "signature": "IO(a-\u003eIO(),a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Futures.html#v:newhandled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erecursiveFuture\u003c/a\u003e\u003c/code\u003e behaves similar to \u003ccode\u003e\u003ca\u003efuture\u003c/a\u003e\u003c/code\u003e with the difference that the future is recursive, i.e. the future created by\n  \u003ccode\u003e\u003ca\u003erecursiveFuture\u003c/a\u003e\u003c/code\u003e is used as argument of the code of the future.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.Futures",
          "name": "recursiveFuture",
          "package": "caf",
          "signature": "(a -\u003e IO a) -\u003e IO a",
          "source": "src/Control-Concurrent-Futures-Futures.html#recursiveFuture",
          "type": "function"
        },
        "index": {
          "description": "recursiveFuture behaves similar to future with the difference that the future is recursive i.e the future created by recursiveFuture is used as argument of the code of the future",
          "hierarchy": "Control Concurrent Futures Futures",
          "module": "Control.Concurrent.Futures.Futures",
          "name": "recursiveFuture",
          "normalized": "(a-\u003eIO a)-\u003eIO a",
          "package": "caf",
          "partial": "Future",
          "signature": "(a-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Futures.html#v:recursiveFuture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreating a strict future is similar to \u003ccode\u003e\u003ca\u003efuture\u003c/a\u003e\u003c/code\u003e with the difference that if used inside \u003ccode\u003e\u003ca\u003ewithFuturesDo\u003c/a\u003e\u003c/code\u003e\n it is guaranteed that the concurrent computation is forced (and finished) before the main thread terminates.\n Warning: \u003ccode\u003e\u003ca\u003estrictFuture\u003c/a\u003e\u003c/code\u003e should only be used within the global wrapper \u003ccode\u003e\u003ca\u003ewithFuturesDo\u003c/a\u003e\u003c/code\u003e!\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.Futures",
          "name": "strictFuture",
          "package": "caf",
          "signature": "IO a -\u003e IO a",
          "source": "src/Control-Concurrent-Futures-Futures.html#strictFuture",
          "type": "function"
        },
        "index": {
          "description": "creating strict future is similar to future with the difference that if used inside withFuturesDo it is guaranteed that the concurrent computation is forced and finished before the main thread terminates Warning strictFuture should only be used within the global wrapper withFuturesDo",
          "hierarchy": "Control Concurrent Futures Futures",
          "module": "Control.Concurrent.Futures.Futures",
          "name": "strictFuture",
          "normalized": "IO a-\u003eIO a",
          "package": "caf",
          "partial": "Future",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Futures.html#v:strictFuture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea recursive variant of \u003ccode\u003e\u003ca\u003estrictFuture\u003c/a\u003e\u003c/code\u003e (see \u003ccode\u003e\u003ca\u003erecursiveFuture\u003c/a\u003e\u003c/code\u003e and 'future)\n Warning: \u003ccode\u003e\u003ca\u003estrictRecursiveFuture\u003c/a\u003e\u003c/code\u003e should only be used within the global wrapper \u003ccode\u003e\u003ca\u003ewithFuturesDo\u003c/a\u003e\u003c/code\u003e!\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.Futures",
          "name": "strictRecursiveFuture",
          "package": "caf",
          "signature": "(a -\u003e IO a) -\u003e IO a",
          "source": "src/Control-Concurrent-Futures-Futures.html#strictRecursiveFuture",
          "type": "function"
        },
        "index": {
          "description": "recursive variant of strictFuture see recursiveFuture and future Warning strictRecursiveFuture should only be used within the global wrapper withFuturesDo",
          "hierarchy": "Control Concurrent Futures Futures",
          "module": "Control.Concurrent.Futures.Futures",
          "name": "strictRecursiveFuture",
          "normalized": "(a-\u003eIO a)-\u003eIO a",
          "package": "caf",
          "partial": "Recursive Future",
          "signature": "(a-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Futures.html#v:strictRecursiveFuture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewithFuturesDo\u003c/a\u003e\u003c/code\u003e is the global wrapper which should be used around the code involving futures.\n  I.e., instead of writing \u003ccode\u003emain=code\u003c/code\u003e one should use \u003ccode\u003emain=withFuturesDo code\u003c/code\u003e. Note, that there\n should be only one call to \u003ccode\u003e\u003ca\u003ewithFuturesDo\u003c/a\u003e\u003c/code\u003e in a program.  \n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.Futures",
          "name": "withFuturesDo",
          "package": "caf",
          "signature": "IO () -\u003e IO ()",
          "source": "src/Control-Concurrent-Futures-Futures.html#withFuturesDo",
          "type": "function"
        },
        "index": {
          "description": "withFuturesDo is the global wrapper which should be used around the code involving futures I.e instead of writing main code one should use main withFuturesDo code Note that there should be only one call to withFuturesDo in program",
          "hierarchy": "Control Concurrent Futures Futures",
          "module": "Control.Concurrent.Futures.Futures",
          "name": "withFuturesDo",
          "normalized": "IO()-\u003eIO()",
          "package": "caf",
          "partial": "Futures Do",
          "signature": "IO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-Futures.html#v:withFuturesDo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a quantity semaphore using handles that block on\nfutures.\nA HQSem equals to QSemN in Control.Concurrent.\nA Buffer euqals to QSem in Control.Concurrent.\nWarning: All operations on quantity semaphores should only be used within the \nglobal wrapper function \u003ccode\u003e\u003ca\u003ewithFuturesDo\u003c/a\u003e\u003c/code\u003e!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Futures.HQSem",
          "name": "HQSem",
          "package": "caf",
          "source": "src/Control-Concurrent-Futures-HQSem.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements quantity semaphore using handles that block on futures HQSem equals to QSemN in Control.Concurrent Buffer euqals to QSem in Control.Concurrent Warning All operations on quantity semaphores should only be used within the global wrapper function withFuturesDo",
          "hierarchy": "Control Concurrent Futures HQSem",
          "module": "Control.Concurrent.Futures.HQSem",
          "name": "HQSem",
          "package": "caf",
          "partial": "HQSem",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-HQSem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handled quantity semaphores contains of a capacity and a waiting queue containing \n handles.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.HQSem",
          "name": "HQSem",
          "package": "caf",
          "source": "src/Control-Concurrent-Futures-HQSem.html#HQSem",
          "type": "type"
        },
        "index": {
          "description": "handled quantity semaphores contains of capacity and waiting queue containing handles",
          "hierarchy": "Control Concurrent Futures HQSem",
          "module": "Control.Concurrent.Futures.HQSem",
          "name": "HQSem",
          "package": "caf",
          "partial": "HQSem",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-HQSem.html#t:HQSem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrements the semaphore's value. If the value has already reached 0, then \n \u003ccode\u003edown\u003c/code\u003e creates a new handle that is being added to the semaphore's waiting queue.\n It blocks until the handle assigns a value to its future by a \u003ccode\u003eup\u003c/code\u003e.\n Note: This operation equals to waitQSemN in Control.Concurrent.QSemN.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.HQSem",
          "name": "downHQSem",
          "package": "caf",
          "signature": "HQSem -\u003e IO Bool",
          "source": "src/Control-Concurrent-Futures-HQSem.html#downHQSem",
          "type": "function"
        },
        "index": {
          "description": "Decrements the semaphore value If the value has already reached then down creates new handle that is being added to the semaphore waiting queue It blocks until the handle assigns value to its future by up Note This operation equals to waitQSemN in Control.Concurrent.QSemN",
          "hierarchy": "Control Concurrent Futures HQSem",
          "module": "Control.Concurrent.Futures.HQSem",
          "name": "downHQSem",
          "normalized": "HQSem-\u003eIO Bool",
          "package": "caf",
          "partial": "HQSem",
          "signature": "HQSem-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-HQSem.html#v:downHQSem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new quantity semaphore of capacity cnt.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.HQSem",
          "name": "newHQSem",
          "package": "caf",
          "signature": "Int -\u003e IO HQSem",
          "source": "src/Control-Concurrent-Futures-HQSem.html#newHQSem",
          "type": "function"
        },
        "index": {
          "description": "Creates new quantity semaphore of capacity cnt",
          "hierarchy": "Control Concurrent Futures HQSem",
          "module": "Control.Concurrent.Futures.HQSem",
          "name": "newHQSem",
          "normalized": "Int-\u003eIO HQSem",
          "package": "caf",
          "partial": "HQSem",
          "signature": "Int-\u003eIO HQSem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-HQSem.html#v:newHQSem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrements the semaphore's value, if there are no waiters.\n \u003ccode\u003eup\u003c/code\u003e reads out of the waiting queue and binds a waiting handle to True.\n Note: This operation equals to signalQSemN in Control.Concurrent.QSemN.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.HQSem",
          "name": "upHQSem",
          "package": "caf",
          "signature": "HQSem -\u003e IO ()",
          "source": "src/Control-Concurrent-Futures-HQSem.html#upHQSem",
          "type": "function"
        },
        "index": {
          "description": "Increments the semaphore value if there are no waiters up reads out of the waiting queue and binds waiting handle to True Note This operation equals to signalQSemN in Control.Concurrent.QSemN",
          "hierarchy": "Control Concurrent Futures HQSem",
          "module": "Control.Concurrent.Futures.HQSem",
          "name": "upHQSem",
          "normalized": "HQSem-\u003eIO()",
          "package": "caf",
          "partial": "HQSem",
          "signature": "HQSem-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-HQSem.html#v:upHQSem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a quantity semaphore using buffers that block on\nfutures.\n\u003c/p\u003e\u003cp\u003eA QSem equals to QSemN in Control.Concurrent.\nA Buffer equals to QSem in Control.Concurrent.\n\u003c/p\u003e\u003cp\u003eWarning: All operations on quantity semaphores should only be used within the \nglobal wrapper function \u003ccode\u003eFutures.withFuturesDo\u003c/code\u003e!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Futures.QSem",
          "name": "QSem",
          "package": "caf",
          "source": "src/Control-Concurrent-Futures-QSem.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements quantity semaphore using buffers that block on futures QSem equals to QSemN in Control.Concurrent Buffer equals to QSem in Control.Concurrent Warning All operations on quantity semaphores should only be used within the global wrapper function Futures.withFuturesDo",
          "hierarchy": "Control Concurrent Futures QSem",
          "module": "Control.Concurrent.Futures.QSem",
          "name": "QSem",
          "package": "caf",
          "partial": "QSem",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-QSem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA quantity semaphores contains of a capacity and a waiting queue containing \n buffers.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.QSem",
          "name": "QSem",
          "package": "caf",
          "source": "src/Control-Concurrent-Futures-QSem.html#QSem",
          "type": "type"
        },
        "index": {
          "description": "quantity semaphores contains of capacity and waiting queue containing buffers",
          "hierarchy": "Control Concurrent Futures QSem",
          "module": "Control.Concurrent.Futures.QSem",
          "name": "QSem",
          "package": "caf",
          "partial": "QSem",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-QSem.html#t:QSem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrements the semaphore's value. If the value has already reached zero, then \n \u003ccode\u003e\u003ca\u003edown\u003c/a\u003e\u003c/code\u003e creates a new empty \u003ccode\u003e\u003ca\u003eBuffer\u003c/a\u003e\u003c/code\u003e that is being added to the semaphore's waiting queue.\n It blocks until the buffer gets filled by a \u003ccode\u003e\u003ca\u003eup\u003c/a\u003e\u003c/code\u003e.\n Note: This operation equals to waitQSemN in Control.Concurrent.QSemN.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.QSem",
          "name": "down",
          "package": "caf",
          "signature": "QSem -\u003e IO Bool",
          "source": "src/Control-Concurrent-Futures-QSem.html#down",
          "type": "function"
        },
        "index": {
          "description": "Decrements the semaphore value If the value has already reached zero then down creates new empty Buffer that is being added to the semaphore waiting queue It blocks until the buffer gets filled by up Note This operation equals to waitQSemN in Control.Concurrent.QSemN",
          "hierarchy": "Control Concurrent Futures QSem",
          "module": "Control.Concurrent.Futures.QSem",
          "name": "down",
          "normalized": "QSem-\u003eIO Bool",
          "package": "caf",
          "signature": "QSem-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-QSem.html#v:down"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the quantity semaphore to limit the computation of code. This function\n performs a down on the given q. s., executues the code and returns after a up\n on the q.s. .\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.QSem",
          "name": "enter",
          "package": "caf",
          "signature": "QSem -\u003e IO a -\u003e IO ()",
          "source": "src/Control-Concurrent-Futures-QSem.html#enter",
          "type": "function"
        },
        "index": {
          "description": "Use the quantity semaphore to limit the computation of code This function performs down on the given executues the code and returns after up on the q.s",
          "hierarchy": "Control Concurrent Futures QSem",
          "module": "Control.Concurrent.Futures.QSem",
          "name": "enter",
          "normalized": "QSem-\u003eIO a-\u003eIO()",
          "package": "caf",
          "signature": "QSem-\u003eIO a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-QSem.html#v:enter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new quantity semaphore of capacity cnt.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.QSem",
          "name": "newQSem",
          "package": "caf",
          "signature": "Int -\u003e IO (Buffer (Int, [Buffer Bool]))",
          "source": "src/Control-Concurrent-Futures-QSem.html#newQSem",
          "type": "function"
        },
        "index": {
          "description": "Creates new quantity semaphore of capacity cnt",
          "hierarchy": "Control Concurrent Futures QSem",
          "module": "Control.Concurrent.Futures.QSem",
          "name": "newQSem",
          "normalized": "Int-\u003eIO(Buffer(Int,[Buffer Bool]))",
          "package": "caf",
          "partial": "QSem",
          "signature": "Int-\u003eIO(Buffer(Int,[Buffer Bool]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-QSem.html#v:newQSem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrements the semaphore's value, if there are no waiters.\n \u003ccode\u003e\u003ca\u003eup\u003c/a\u003e\u003c/code\u003e reads out of the waiting queue and writes True into a waiting \u003ccode\u003e\u003ca\u003eBuffer\u003c/a\u003e\u003c/code\u003e.\n Note: This operation equals to signalQSemN in Control.Concurrent.QSemN.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Futures.QSem",
          "name": "up",
          "package": "caf",
          "signature": "QSem -\u003e IO ()",
          "source": "src/Control-Concurrent-Futures-QSem.html#up",
          "type": "function"
        },
        "index": {
          "description": "Increments the semaphore value if there are no waiters up reads out of the waiting queue and writes True into waiting Buffer Note This operation equals to signalQSemN in Control.Concurrent.QSemN",
          "hierarchy": "Control Concurrent Futures QSem",
          "module": "Control.Concurrent.Futures.QSem",
          "name": "up",
          "normalized": "QSem-\u003eIO()",
          "package": "caf",
          "signature": "QSem-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures-QSem.html#v:up"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package implements futures and various kinds of concurrency abstractions \nusing futures.\n\u003c/p\u003e\u003cp\u003eThreads can synchronise their values via futures. \nFuture values are lazily evaluated so they explicitly suspend the computation. \nEach future object is associated with a background thread that computes the future value. \nAs long as this expression has not been evaluated, the value of the future is unknown. \nWhenever an unknown future is accessed the computation will suspend on this future. \nOnce the value has been evaluated the computation resumes. A handle is a component \nthat points to an unevaluated future and computes its value on demand.\nTherefore, handles are used to associate a value to a future. They provide\na synchronisation mechanism for processes.\n\u003c/p\u003e\u003cp\u003eExample\nThis example shows how you can use \u003ca\u003eBuffer\u003c/a\u003e to concurrently compute the values of \nnodes from a binary tree.\n\u003c/p\u003e\u003cpre\u003e data BTree a = BLeaf a | BNode a (BTree a) (BTree a)\n\u003c/pre\u003e\u003cpre\u003e concSumB :: (Num a) =\u003e BTree a -\u003e IO a\n concSumB t = do \n   result \u003c- newBuf\n   case t of\n     BLeaf a -\u003e putBuf result a;\n     BNode a t1 t2 -\u003e sumB result t \n   out \u003c- getBuf result\n   return out\n\u003c/pre\u003e\u003cpre\u003e sumB :: (Num a) =\u003e Buffer a -\u003e BTree a -\u003e IO ()\n sumB mvar tree = do \n  case tree of \n    BLeaf a -\u003e putBuf mvar a \n    BNode a t1 t2 -\u003e do\n \t\t\tsem \u003c- newBuf\n \t\t\tforkIO (sumB sem t1)\n \t\t\tforkIO (sumB sem t2)\n \t\t\terg1 \u003c-getBuf sem\n \t\t\terg2 \u003c-getBuf sem \n \t\t\tputBuf mvar (erg1 + erg2 + a)\n\u003c/pre\u003e\u003cp\u003eYou can test the function with the following test data\n\u003c/p\u003e\u003cpre\u003e bintree = BNode 1 (BNode 24 (BLeaf 2) (BNode 6 (BLeaf 24) (BLeaf 3)))(BNode 33 (BLeaf 7) (BLeaf 8))\n concSumB bintree\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Futures",
          "name": "Futures",
          "package": "caf",
          "source": "src/Control-Concurrent-Futures.html",
          "type": "module"
        },
        "index": {
          "description": "This package implements futures and various kinds of concurrency abstractions using futures Threads can synchronise their values via futures Future values are lazily evaluated so they explicitly suspend the computation Each future object is associated with background thread that computes the future value As long as this expression has not been evaluated the value of the future is unknown Whenever an unknown future is accessed the computation will suspend on this future Once the value has been evaluated the computation resumes handle is component that points to an unevaluated future and computes its value on demand Therefore handles are used to associate value to future They provide synchronisation mechanism for processes Example This example shows how you can use Buffer to concurrently compute the values of nodes from binary tree data BTree BLeaf BNode BTree BTree concSumB Num BTree IO concSumB do result newBuf case of BLeaf putBuf result BNode t1 t2 sumB result out getBuf result return out sumB Num Buffer BTree IO sumB mvar tree do case tree of BLeaf putBuf mvar BNode t1 t2 do sem newBuf forkIO sumB sem t1 forkIO sumB sem t2 erg1 getBuf sem erg2 getBuf sem putBuf mvar erg1 erg2 You can test the function with the following test data bintree BNode BNode BLeaf BNode BLeaf BLeaf BNode BLeaf BLeaf concSumB bintree",
          "hierarchy": "Control Concurrent Futures",
          "module": "Control.Concurrent.Futures",
          "name": "Futures",
          "package": "caf",
          "partial": "Futures",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/caf/docs/Control-Concurrent-Futures.html#"
      }
    }
  ]
]