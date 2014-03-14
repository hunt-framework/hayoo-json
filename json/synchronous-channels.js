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
        "word": "synchronous-channels"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides synchronous channels.  Unlike the channels in\n \u003ccode\u003eControl.Concurrent.Chan\u003c/code\u003e, which are unbounded queues on which\n writers never block, these channels allow each writer to block until\n it synchronizes with the particular reader that receives its message.\n\u003c/p\u003e\u003cp\u003eWe actually provide three classes of channel operations:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eSynchronous, blocking\u003c/dt\u003e\u003cdd\u003e These operations block until they\n     synchronize their communication with another thread.\n\u003c/dd\u003e\u003cdt\u003eSynchronous, non-blocking\u003c/dt\u003e\u003cdd\u003e These operations complete immediately\n     if another thread is ready to synchronize, and otherwise return\n     a failure code immediate.\n\u003c/dd\u003e\u003cdt\u003eAsynchronous\u003c/dt\u003e\u003cdd\u003e These operations complete immediately and always\n     succeed, though the value they send may not be received until\n     another thread tries to receive it.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "Synchronous",
          "package": "synchronous-channels",
          "source": "src/Control-Concurrent-Chan-Synchronous.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides synchronous channels Unlike the channels in Control.Concurrent.Chan which are unbounded queues on which writers never block these channels allow each writer to block until it synchronizes with the particular reader that receives its message We actually provide three classes of channel operations Synchronous blocking These operations block until they synchronize their communication with another thread Synchronous non-blocking These operations complete immediately if another thread is ready to synchronize and otherwise return failure code immediate Asynchronous These operations complete immediately and always succeed though the value they send may not be received until another thread tries to receive it",
          "hierarchy": "Control Concurrent Chan Synchronous",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "Synchronous",
          "package": "synchronous-channels",
          "partial": "Synchronous",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/synchronous-channels/docs/Control-Concurrent-Chan-Synchronous.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract channel type for sending values of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "Chan",
          "package": "synchronous-channels",
          "source": "src/Control-Concurrent-Chan-Synchronous.html#Chan",
          "type": "data"
        },
        "index": {
          "description": "The abstract channel type for sending values of type",
          "hierarchy": "Control Concurrent Chan Synchronous",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "Chan",
          "package": "synchronous-channels",
          "partial": "Chan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/synchronous-channels/docs/Control-Concurrent-Chan-Synchronous.html#t:Chan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe synchronous, non-blocking operations may succeed immediately,\n   or they may give up for a variety of reasons:\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "TryResult",
          "package": "synchronous-channels",
          "source": "src/Control-Concurrent-Chan-Synchronous.html#TryResult",
          "type": "data"
        },
        "index": {
          "description": "The synchronous non-blocking operations may succeed immediately or they may give up for variety of reasons",
          "hierarchy": "Control Concurrent Chan Synchronous",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "TryResult",
          "package": "synchronous-channels",
          "partial": "Try Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/synchronous-channels/docs/Control-Concurrent-Chan-Synchronous.html#t:TryResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo other thread is currently ready to synchronize for the\n   requested operation.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "NotReady",
          "package": "synchronous-channels",
          "signature": "NotReady",
          "source": "src/Control-Concurrent-Chan-Synchronous.html#TryResult",
          "type": "function"
        },
        "index": {
          "description": "No other thread is currently ready to synchronize for the requested operation",
          "hierarchy": "Control Concurrent Chan Synchronous",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "NotReady",
          "package": "synchronous-channels",
          "partial": "Not Ready",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synchronous-channels/docs/Control-Concurrent-Chan-Synchronous.html#v:NotReady"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe operation succeeded.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "Success",
          "package": "synchronous-channels",
          "signature": "Success",
          "source": "src/Control-Concurrent-Chan-Synchronous.html#TryResult",
          "type": "function"
        },
        "index": {
          "description": "The operation succeeded",
          "hierarchy": "Control Concurrent Chan Synchronous",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "Success",
          "package": "synchronous-channels",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synchronous-channels/docs/Control-Concurrent-Chan-Synchronous.html#v:Success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn attempt was made to synchronize with another thread, but\n   the other thread bailed out before it could complete.  Another\n   thread may be available, so it may be worth trying again\n   immediately.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "TryAgain",
          "package": "synchronous-channels",
          "signature": "TryAgain",
          "source": "src/Control-Concurrent-Chan-Synchronous.html#TryResult",
          "type": "function"
        },
        "index": {
          "description": "An attempt was made to synchronize with another thread but the other thread bailed out before it could complete Another thread may be available so it may be worth trying again immediately",
          "hierarchy": "Control Concurrent Chan Synchronous",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "TryAgain",
          "package": "synchronous-channels",
          "partial": "Try Again",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synchronous-channels/docs/Control-Concurrent-Chan-Synchronous.html#v:TryAgain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnother thread is currently operating on the channel.  It may\n   be worth trying again very soon.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "WouldBlock",
          "package": "synchronous-channels",
          "signature": "WouldBlock",
          "source": "src/Control-Concurrent-Chan-Synchronous.html#TryResult",
          "type": "function"
        },
        "index": {
          "description": "Another thread is currently operating on the channel It may be worth trying again very soon",
          "hierarchy": "Control Concurrent Chan Synchronous",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "WouldBlock",
          "package": "synchronous-channels",
          "partial": "Would Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synchronous-channels/docs/Control-Concurrent-Chan-Synchronous.html#v:WouldBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to the \"read end\" of a channel, succeeding immediately\n rather than waiting for a reader.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "asyncUnGetChan",
          "package": "synchronous-channels",
          "signature": "Chan a -\u003e a -\u003e IO ()",
          "source": "src/Control-Concurrent-Chan-Synchronous.html#asyncUnGetChan",
          "type": "function"
        },
        "index": {
          "description": "Write value to the read end of channel succeeding immediately rather than waiting for reader",
          "hierarchy": "Control Concurrent Chan Synchronous",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "asyncUnGetChan",
          "normalized": "Chan a-\u003ea-\u003eIO()",
          "package": "synchronous-channels",
          "partial": "Un Get Chan",
          "signature": "Chan a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synchronous-channels/docs/Control-Concurrent-Chan-Synchronous.html#v:asyncUnGetChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to a channel, returning immediately rather than\n waiting for the reader to arrive.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "asyncWriteChan",
          "package": "synchronous-channels",
          "signature": "Chan a -\u003e a -\u003e IO ()",
          "source": "src/Control-Concurrent-Chan-Synchronous.html#asyncWriteChan",
          "type": "function"
        },
        "index": {
          "description": "Write value to channel returning immediately rather than waiting for the reader to arrive",
          "hierarchy": "Control Concurrent Chan Synchronous",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "asyncWriteChan",
          "normalized": "Chan a-\u003ea-\u003eIO()",
          "package": "synchronous-channels",
          "partial": "Write Chan",
          "signature": "Chan a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synchronous-channels/docs/Control-Concurrent-Chan-Synchronous.html#v:asyncWriteChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a list to a channel, succeeding immediately.  The list may\n be infinite, in which case the operation still completes\n immediately.  (Actually, it may take time proportional to the number\n of readers that are ready, so if an infinite list is written to\n \u003ccode\u003e\u003ca\u003egetChanContents\u003c/a\u003e\u003c/code\u003e on the other side, it may not actually complete.)\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "asyncWriteList2Chan",
          "package": "synchronous-channels",
          "signature": "Chan a -\u003e [a] -\u003e IO ()",
          "source": "src/Control-Concurrent-Chan-Synchronous.html#asyncWriteList2Chan",
          "type": "function"
        },
        "index": {
          "description": "Write list to channel succeeding immediately The list may be infinite in which case the operation still completes immediately Actually it may take time proportional to the number of readers that are ready so if an infinite list is written to getChanContents on the other side it may not actually complete",
          "hierarchy": "Control Concurrent Chan Synchronous",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "asyncWriteList2Chan",
          "normalized": "Chan a-\u003e[a]-\u003eIO()",
          "package": "synchronous-channels",
          "partial": "Write List Chan",
          "signature": "Chan a-\u003e[a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synchronous-channels/docs/Control-Concurrent-Chan-Synchronous.html#v:asyncWriteList2Chan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the contents of the channel as a lazy list.  While this\n operation returns immediately, forcing evaluation of the list will\n block, which is why this is included among the blocking operations.\n Writers will block until each link in the list is forced as well.\n\u003c/p\u003e\u003cp\u003eAny subsequent attempts to read from the channel will fail, unless\n a thread is interrupted while blocking on forcing the list.  Don't\n rely on this behavior.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "getChanContents",
          "package": "synchronous-channels",
          "signature": "Chan a -\u003e IO [a]",
          "source": "src/Control-Concurrent-Chan-Synchronous.html#getChanContents",
          "type": "function"
        },
        "index": {
          "description": "Read the contents of the channel as lazy list While this operation returns immediately forcing evaluation of the list will block which is why this is included among the blocking operations Writers will block until each link in the list is forced as well Any subsequent attempts to read from the channel will fail unless thread is interrupted while blocking on forcing the list Don rely on this behavior",
          "hierarchy": "Control Concurrent Chan Synchronous",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "getChanContents",
          "normalized": "Chan a-\u003eIO[a]",
          "package": "synchronous-channels",
          "partial": "Chan Contents",
          "signature": "Chan a-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synchronous-channels/docs/Control-Concurrent-Chan-Synchronous.html#v:getChanContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a given number of elements from the channel as a lazy list.\n Like \u003ccode\u003e\u003ca\u003egetChanContents\u003c/a\u003e\u003c/code\u003e, this operation returns immediately, but it\n will block when the list is forced.  (Taking the length of the list\n should block until all the matching writes complete.)\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "getChanN",
          "package": "synchronous-channels",
          "signature": "Chan a -\u003e Integer -\u003e IO [a]",
          "source": "src/Control-Concurrent-Chan-Synchronous.html#getChanN",
          "type": "function"
        },
        "index": {
          "description": "Read given number of elements from the channel as lazy list Like getChanContents this operation returns immediately but it will block when the list is forced Taking the length of the list should block until all the matching writes complete",
          "hierarchy": "Control Concurrent Chan Synchronous",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "getChanN",
          "normalized": "Chan a-\u003eInteger-\u003eIO[a]",
          "package": "synchronous-channels",
          "partial": "Chan",
          "signature": "Chan a-\u003eInteger-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synchronous-channels/docs/Control-Concurrent-Chan-Synchronous.html#v:getChanN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "getSuccess",
          "package": "synchronous-channels",
          "signature": "a",
          "source": "src/Control-Concurrent-Chan-Synchronous.html#TryResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Chan Synchronous",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "getSuccess",
          "package": "synchronous-channels",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synchronous-channels/docs/Control-Concurrent-Chan-Synchronous.html#v:getSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the channel currently empty?  Note that the answer may become\n   false arbitrarily soon.  Don't rely on this operation.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "isEmptyChan",
          "package": "synchronous-channels",
          "signature": "Chan a -\u003e IO Bool",
          "source": "src/Control-Concurrent-Chan-Synchronous.html#isEmptyChan",
          "type": "function"
        },
        "index": {
          "description": "Is the channel currently empty Note that the answer may become false arbitrarily soon Don rely on this operation",
          "hierarchy": "Control Concurrent Chan Synchronous",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "isEmptyChan",
          "normalized": "Chan a-\u003eIO Bool",
          "package": "synchronous-channels",
          "partial": "Empty Chan",
          "signature": "Chan a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synchronous-channels/docs/Control-Concurrent-Chan-Synchronous.html#v:isEmptyChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift results of the try* operations into \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003e\u003ca\u003eSuccess\u003c/a\u003e\u003c/code\u003e goes\n to \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e and all kinds of failure go to \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "maybeTry",
          "package": "synchronous-channels",
          "signature": "IO (TryResult a) -\u003e IO (Maybe a)",
          "source": "src/Control-Concurrent-Chan-Synchronous.html#maybeTry",
          "type": "function"
        },
        "index": {
          "description": "Lift results of the try operations into Maybe Success goes to Just and all kinds of failure go to Nothing",
          "hierarchy": "Control Concurrent Chan Synchronous",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "maybeTry",
          "normalized": "IO(TryResult a)-\u003eIO(Maybe a)",
          "package": "synchronous-channels",
          "partial": "Try",
          "signature": "IO(TryResult a)-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synchronous-channels/docs/Control-Concurrent-Chan-Synchronous.html#v:maybeTry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a new channel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "newChan",
          "package": "synchronous-channels",
          "signature": "IO (Chan a)",
          "source": "src/Control-Concurrent-Chan-Synchronous.html#newChan",
          "type": "function"
        },
        "index": {
          "description": "Make new channel",
          "hierarchy": "Control Concurrent Chan Synchronous",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "newChan",
          "package": "synchronous-channels",
          "partial": "Chan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synchronous-channels/docs/Control-Concurrent-Chan-Synchronous.html#v:newChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a value from a channel, potentially blocking until a writer\n is ready to synchronize.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "readChan",
          "package": "synchronous-channels",
          "signature": "Chan a -\u003e IO a",
          "source": "src/Control-Concurrent-Chan-Synchronous.html#readChan",
          "type": "function"
        },
        "index": {
          "description": "Reads value from channel potentially blocking until writer is ready to synchronize",
          "hierarchy": "Control Concurrent Chan Synchronous",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "readChan",
          "normalized": "Chan a-\u003eIO a",
          "package": "synchronous-channels",
          "partial": "Chan",
          "signature": "Chan a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synchronous-channels/docs/Control-Concurrent-Chan-Synchronous.html#v:readChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a value from a channel, replacing it with a different value.\n Blocks until the replacement value is read, and then returns the old\n value.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eCAUTION:\u003c/em\u003e This operation does not guarantee that the read and\n subsequent write are atomic.  It is somewhat likely to be better\n in that respect than \u003ccode\u003e\u003ca\u003ereadChan\u003c/a\u003e\u003c/code\u003e followed by \u003ccode\u003e\u003ca\u003eunGetChan\u003c/a\u003e\u003c/code\u003e, however.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "swapChan",
          "package": "synchronous-channels",
          "signature": "Chan a -\u003e a -\u003e IO a",
          "source": "src/Control-Concurrent-Chan-Synchronous.html#swapChan",
          "type": "function"
        },
        "index": {
          "description": "Reads value from channel replacing it with different value Blocks until the replacement value is read and then returns the old value CAUTION This operation does not guarantee that the read and subsequent write are atomic It is somewhat likely to be better in that respect than readChan followed by unGetChan however",
          "hierarchy": "Control Concurrent Chan Synchronous",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "swapChan",
          "normalized": "Chan a-\u003ea-\u003eIO a",
          "package": "synchronous-channels",
          "partial": "Chan",
          "signature": "Chan a-\u003ea-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synchronous-channels/docs/Control-Concurrent-Chan-Synchronous.html#v:swapChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf a writer is available to synchronize with, synchronizes with the\n writer, allowing its operation to complete, writes the replacement\n value ahead of any other writers, and then returns immediately.\n Unlike \u003ccode\u003e\u003ca\u003eswapChan\u003c/a\u003e\u003c/code\u003e, guarantees that no other write can intervene.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "tryAsyncSwapChan",
          "package": "synchronous-channels",
          "signature": "Chan a -\u003e a -\u003e IO (TryResult a)",
          "source": "src/Control-Concurrent-Chan-Synchronous.html#tryAsyncSwapChan",
          "type": "function"
        },
        "index": {
          "description": "If writer is available to synchronize with synchronizes with the writer allowing its operation to complete writes the replacement value ahead of any other writers and then returns immediately Unlike swapChan guarantees that no other write can intervene",
          "hierarchy": "Control Concurrent Chan Synchronous",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "tryAsyncSwapChan",
          "normalized": "Chan a-\u003ea-\u003eIO(TryResult a)",
          "package": "synchronous-channels",
          "partial": "Async Swap Chan",
          "signature": "Chan a-\u003ea-\u003eIO(TryResult a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synchronous-channels/docs/Control-Concurrent-Chan-Synchronous.html#v:tryAsyncSwapChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the currently available elements from the channel as a lazy\n list.  The list is lazy because the number of currently available\n elements may be infinite (see \u003ccode\u003e\u003ca\u003ewriteList2Chan\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "tryGetChanContents",
          "package": "synchronous-channels",
          "signature": "Chan a -\u003e IO (TryResult [a])",
          "source": "src/Control-Concurrent-Chan-Synchronous.html#tryGetChanContents",
          "type": "function"
        },
        "index": {
          "description": "Read the currently available elements from the channel as lazy list The list is lazy because the number of currently available elements may be infinite see writeList2Chan",
          "hierarchy": "Control Concurrent Chan Synchronous",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "tryGetChanContents",
          "normalized": "Chan a-\u003eIO(TryResult[a])",
          "package": "synchronous-channels",
          "partial": "Get Chan Contents",
          "signature": "Chan a-\u003eIO(TryResult[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synchronous-channels/docs/Control-Concurrent-Chan-Synchronous.html#v:tryGetChanContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead up to the given number of currently available elements\n from the channel.  The list will be no longer than the given\n number, but if there are insufficient writers available then\n it may be shorter.  The writers will block until their portions\n of the list's spine are forced.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "tryGetChanN",
          "package": "synchronous-channels",
          "signature": "Chan a -\u003e Integer -\u003e IO (TryResult [a])",
          "source": "src/Control-Concurrent-Chan-Synchronous.html#tryGetChanN",
          "type": "function"
        },
        "index": {
          "description": "Read up to the given number of currently available elements from the channel The list will be no longer than the given number but if there are insufficient writers available then it may be shorter The writers will block until their portions of the list spine are forced",
          "hierarchy": "Control Concurrent Chan Synchronous",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "tryGetChanN",
          "normalized": "Chan a-\u003eInteger-\u003eIO(TryResult[a])",
          "package": "synchronous-channels",
          "partial": "Get Chan",
          "signature": "Chan a-\u003eInteger-\u003eIO(TryResult[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synchronous-channels/docs/Control-Concurrent-Chan-Synchronous.html#v:tryGetChanN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to read a value from a channel, but does not allow a writer\n to synchronize, and does not remove the observed value from the\n channel.  Fails if no writer is currently available, if the first\n writer has bailed, or if it cannot immediately get a lock on the\n channel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "tryPeekChan",
          "package": "synchronous-channels",
          "signature": "Chan a -\u003e IO (TryResult a)",
          "source": "src/Control-Concurrent-Chan-Synchronous.html#tryPeekChan",
          "type": "function"
        },
        "index": {
          "description": "Attempts to read value from channel but does not allow writer to synchronize and does not remove the observed value from the channel Fails if no writer is currently available if the first writer has bailed or if it cannot immediately get lock on the channel",
          "hierarchy": "Control Concurrent Chan Synchronous",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "tryPeekChan",
          "normalized": "Chan a-\u003eIO(TryResult a)",
          "package": "synchronous-channels",
          "partial": "Peek Chan",
          "signature": "Chan a-\u003eIO(TryResult a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synchronous-channels/docs/Control-Concurrent-Chan-Synchronous.html#v:tryPeekChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to read a value from a channel, succeeding immediately\n if a writer is already available to synchronize.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "tryReadChan",
          "package": "synchronous-channels",
          "signature": "Chan a -\u003e IO (TryResult a)",
          "source": "src/Control-Concurrent-Chan-Synchronous.html#tryReadChan",
          "type": "function"
        },
        "index": {
          "description": "Attempts to read value from channel succeeding immediately if writer is already available to synchronize",
          "hierarchy": "Control Concurrent Chan Synchronous",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "tryReadChan",
          "normalized": "Chan a-\u003eIO(TryResult a)",
          "package": "synchronous-channels",
          "partial": "Read Chan",
          "signature": "Chan a-\u003eIO(TryResult a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synchronous-channels/docs/Control-Concurrent-Chan-Synchronous.html#v:tryReadChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to write a value to a channel, succeeding immediately\n if a reader is already available to synchronize.  Will fail\n if the reader is interrupted before the operation completes, if there\n is no reader available, or if another thread is currently starting\n an operation on the channel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "tryWriteChan",
          "package": "synchronous-channels",
          "signature": "Chan a -\u003e a -\u003e IO (TryResult ())",
          "source": "src/Control-Concurrent-Chan-Synchronous.html#tryWriteChan",
          "type": "function"
        },
        "index": {
          "description": "Attempts to write value to channel succeeding immediately if reader is already available to synchronize Will fail if the reader is interrupted before the operation completes if there is no reader available or if another thread is currently starting an operation on the channel",
          "hierarchy": "Control Concurrent Chan Synchronous",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "tryWriteChan",
          "normalized": "Chan a-\u003ea-\u003eIO(TryResult())",
          "package": "synchronous-channels",
          "partial": "Write Chan",
          "signature": "Chan a-\u003ea-\u003eIO(TryResult())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synchronous-channels/docs/Control-Concurrent-Chan-Synchronous.html#v:tryWriteChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to write as much of a list as possible to a channel\n synchronously, but without blocking; returns the unwritten remainder\n of the list.  This operation will write additional list elements so\n long as -- there are readers ready to receive them (and so long as the\n list doesn't run out).\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "tryWriteList2Chan",
          "package": "synchronous-channels",
          "signature": "Chan a -\u003e [a] -\u003e IO (TryResult (), [a])",
          "source": "src/Control-Concurrent-Chan-Synchronous.html#tryWriteList2Chan",
          "type": "function"
        },
        "index": {
          "description": "Attempt to write as much of list as possible to channel synchronously but without blocking returns the unwritten remainder of the list This operation will write additional list elements so long as there are readers ready to receive them and so long as the list doesn run out",
          "hierarchy": "Control Concurrent Chan Synchronous",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "tryWriteList2Chan",
          "normalized": "Chan a-\u003e[a]-\u003eIO(TryResult(),[a])",
          "package": "synchronous-channels",
          "partial": "Write List Chan",
          "signature": "Chan a-\u003e[a]-\u003eIO(TryResult(),[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synchronous-channels/docs/Control-Concurrent-Chan-Synchronous.html#v:tryWriteList2Chan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite to the \"read end\" of a channel.  If several writers are\n waiting, this jumps ahead of them to the front of the line.  Blocks\n until matched up with a reader.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "unGetChan",
          "package": "synchronous-channels",
          "signature": "Chan a -\u003e a -\u003e IO ()",
          "source": "src/Control-Concurrent-Chan-Synchronous.html#unGetChan",
          "type": "function"
        },
        "index": {
          "description": "Write to the read end of channel If several writers are waiting this jumps ahead of them to the front of the line Blocks until matched up with reader",
          "hierarchy": "Control Concurrent Chan Synchronous",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "unGetChan",
          "normalized": "Chan a-\u003ea-\u003eIO()",
          "package": "synchronous-channels",
          "partial": "Get Chan",
          "signature": "Chan a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synchronous-channels/docs/Control-Concurrent-Chan-Synchronous.html#v:unGetChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to a channel, possibly blocking until synchronizing\n with a reader.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "writeChan",
          "package": "synchronous-channels",
          "signature": "Chan a -\u003e a -\u003e IO ()",
          "source": "src/Control-Concurrent-Chan-Synchronous.html#writeChan",
          "type": "function"
        },
        "index": {
          "description": "Write value to channel possibly blocking until synchronizing with reader",
          "hierarchy": "Control Concurrent Chan Synchronous",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "writeChan",
          "normalized": "Chan a-\u003ea-\u003eIO()",
          "package": "synchronous-channels",
          "partial": "Chan",
          "signature": "Chan a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synchronous-channels/docs/Control-Concurrent-Chan-Synchronous.html#v:writeChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a list to a channel, blocking until the read completes.\n It is guaranteed that no other writes can intervene among the\n list elements.  (This cannot be implemented in terms of\n \u003ccode\u003e\u003ca\u003ewriteChan\u003c/a\u003e\u003c/code\u003e.)  The list may be infinite, in which case this\n operation never completes.\n\u003c/p\u003e\u003cp\u003eInterrupting this operation before the list is read completely causes\n the rest of the list not to be written.  (If you want to write the\n whole list, \u003ccode\u003e\u003ca\u003easyncWriteList2Chan\u003c/a\u003e\u003c/code\u003e may be suitable.)\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "writeList2Chan",
          "package": "synchronous-channels",
          "signature": "Chan a -\u003e [a] -\u003e IO ()",
          "source": "src/Control-Concurrent-Chan-Synchronous.html#writeList2Chan",
          "type": "function"
        },
        "index": {
          "description": "Write list to channel blocking until the read completes It is guaranteed that no other writes can intervene among the list elements This cannot be implemented in terms of writeChan The list may be infinite in which case this operation never completes Interrupting this operation before the list is read completely causes the rest of the list not to be written If you want to write the whole list asyncWriteList2Chan may be suitable",
          "hierarchy": "Control Concurrent Chan Synchronous",
          "module": "Control.Concurrent.Chan.Synchronous",
          "name": "writeList2Chan",
          "normalized": "Chan a-\u003e[a]-\u003eIO()",
          "package": "synchronous-channels",
          "partial": "List Chan",
          "signature": "Chan a-\u003e[a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synchronous-channels/docs/Control-Concurrent-Chan-Synchronous.html#v:writeList2Chan"
      }
    }
  ]
]