[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bounded-tchan/docs/Control-Concurrent-STM-BTChan.html#",
      "description": {
        "fct-module": "Control.Concurrent.STM.BTChan",
        "fct-package": "bounded-tchan",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-STM-BTChan.html",
        "fct-type": "module",
        "title": "BTChan"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM BTChan",
        "module": "Control.Concurrent.STM.BTChan",
        "name": "BTChan",
        "normalized": "",
        "package": "bounded-tchan",
        "partial": "BTChan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bounded-tchan/docs/Control-Concurrent-STM-BTChan.html#t:BTChan",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBTChan\u003c/a\u003e\u003c/code\u003e is a bounded \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e - a FIFO channel using \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e and\n a transactional variable to limit the number of elements on the channel.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.BTChan",
        "fct-package": "bounded-tchan",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-STM-BTChan.html#BTChan",
        "fct-type": "data",
        "title": "BTChan"
      },
      "index": {
        "description": "BTChan is bounded TChan FIFO channel using TChan and transactional variable to limit the number of elements on the channel",
        "hierarchy": "Control Concurrent STM BTChan",
        "module": "Control.Concurrent.STM.BTChan",
        "name": "BTChan",
        "normalized": "",
        "package": "bounded-tchan",
        "partial": "BTChan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bounded-tchan/docs/Control-Concurrent-STM-BTChan.html#v:isEmptyBTChan",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the supplied \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.BTChan",
        "fct-package": "bounded-tchan",
        "fct-signature": "BTChan a -\u003e STM Bool",
        "fct-source": "src/Control-Concurrent-STM-BTChan.html#isEmptyBTChan",
        "fct-type": "function",
        "title": "isEmptyBTChan"
      },
      "index": {
        "description": "Returns True if the supplied TChan is empty",
        "hierarchy": "Control Concurrent STM BTChan",
        "module": "Control.Concurrent.STM.BTChan",
        "name": "isEmptyBTChan",
        "normalized": "BTChan a-\u003eSTM Bool",
        "package": "bounded-tchan",
        "partial": "Empty BTChan",
        "signature": "BTChan a-\u003eSTM Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bounded-tchan/docs/Control-Concurrent-STM-BTChan.html#v:maxOfBTChan",
      "description": {
        "fct-descr": "\u003cp\u003eGet the bound of the \u003ccode\u003e\u003ca\u003eBTChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.BTChan",
        "fct-package": "bounded-tchan",
        "fct-signature": "BTChan a -\u003e Int",
        "fct-source": "src/Control-Concurrent-STM-BTChan.html#maxOfBTChan",
        "fct-type": "function",
        "title": "maxOfBTChan"
      },
      "index": {
        "description": "Get the bound of the BTChan",
        "hierarchy": "Control Concurrent STM BTChan",
        "module": "Control.Concurrent.STM.BTChan",
        "name": "maxOfBTChan",
        "normalized": "BTChan a-\u003eInt",
        "package": "bounded-tchan",
        "partial": "Of BTChan",
        "signature": "BTChan a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bounded-tchan/docs/Control-Concurrent-STM-BTChan.html#v:newBTChan",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enewBTChan m\u003c/code\u003e make a new bounded TChan of max size \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.BTChan",
        "fct-package": "bounded-tchan",
        "fct-signature": "Int -\u003e STM (BTChan a)",
        "fct-source": "src/Control-Concurrent-STM-BTChan.html#newBTChan",
        "fct-type": "function",
        "title": "newBTChan"
      },
      "index": {
        "description": "newBTChan make new bounded TChan of max size",
        "hierarchy": "Control Concurrent STM BTChan",
        "module": "Control.Concurrent.STM.BTChan",
        "name": "newBTChan",
        "normalized": "Int-\u003eSTM(BTChan a)",
        "package": "bounded-tchan",
        "partial": "BTChan",
        "signature": "Int-\u003eSTM(BTChan a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bounded-tchan/docs/Control-Concurrent-STM-BTChan.html#v:newBTChanIO",
      "description": {
        "fct-descr": "\u003cp\u003eAn IO version of \u003ccode\u003e\u003ca\u003enewBTChanIO\u003c/a\u003e\u003c/code\u003e.  This should be useful with unsafePerformIO\n in the same manner as \u003ccode\u003e\u003ca\u003enewTVarIO\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003enewTChanIO\u003c/a\u003e\u003c/code\u003e are used.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.BTChan",
        "fct-package": "bounded-tchan",
        "fct-signature": "Int -\u003e IO (BTChan a)",
        "fct-source": "src/Control-Concurrent-STM-BTChan.html#newBTChanIO",
        "fct-type": "function",
        "title": "newBTChanIO"
      },
      "index": {
        "description": "An IO version of newBTChanIO This should be useful with unsafePerformIO in the same manner as newTVarIO and newTChanIO are used",
        "hierarchy": "Control Concurrent STM BTChan",
        "module": "Control.Concurrent.STM.BTChan",
        "name": "newBTChanIO",
        "normalized": "Int-\u003eIO(BTChan a)",
        "package": "bounded-tchan",
        "partial": "BTChan IO",
        "signature": "Int-\u003eIO(BTChan a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bounded-tchan/docs/Control-Concurrent-STM-BTChan.html#v:readBTChan",
      "description": {
        "fct-descr": "\u003cp\u003eReads the next value from the \u003ccode\u003e\u003ca\u003eBTChan\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.BTChan",
        "fct-package": "bounded-tchan",
        "fct-signature": "BTChan a -\u003e STM a",
        "fct-source": "src/Control-Concurrent-STM-BTChan.html#readBTChan",
        "fct-type": "function",
        "title": "readBTChan"
      },
      "index": {
        "description": "Reads the next value from the BTChan",
        "hierarchy": "Control Concurrent STM BTChan",
        "module": "Control.Concurrent.STM.BTChan",
        "name": "readBTChan",
        "normalized": "BTChan a-\u003eSTM a",
        "package": "bounded-tchan",
        "partial": "BTChan",
        "signature": "BTChan a-\u003eSTM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bounded-tchan/docs/Control-Concurrent-STM-BTChan.html#v:setMaxOfBTChan",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003elet c2 = setMaxOfBTChan c1 mx\u003c/code\u003e Using the same underlying \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e,\n set a new maximum number of messages, \u003ccode\u003emx\u003c/code\u003e.  If the current size\n is greater than \u003ccode\u003emx\u003c/code\u003e then no messages are dropped, but writes \n will block till the size goes lower than \u003ccode\u003emx\u003c/code\u003e.  Using \u003ccode\u003ec2\u003c/code\u003e and\n \u003ccode\u003ec1\u003c/code\u003e concurrently is possible, but \u003ccode\u003ec2\u003c/code\u003e writes will block at the new\n maximum while writes to \u003ccode\u003ec1\u003c/code\u003e will block at the new, making it biased\n against whichever writer has the channel with the smaller bound.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.BTChan",
        "fct-package": "bounded-tchan",
        "fct-signature": "BTChan a -\u003e Int -\u003e BTChan a",
        "fct-source": "src/Control-Concurrent-STM-BTChan.html#setMaxOfBTChan",
        "fct-type": "function",
        "title": "setMaxOfBTChan"
      },
      "index": {
        "description": "let c2 setMaxOfBTChan c1 mx Using the same underlying TChan set new maximum number of messages mx If the current size is greater than mx then no messages are dropped but writes will block till the size goes lower than mx Using c2 and c1 concurrently is possible but c2 writes will block at the new maximum while writes to c1 will block at the new making it biased against whichever writer has the channel with the smaller bound",
        "hierarchy": "Control Concurrent STM BTChan",
        "module": "Control.Concurrent.STM.BTChan",
        "name": "setMaxOfBTChan",
        "normalized": "BTChan a-\u003eInt-\u003eBTChan a",
        "package": "bounded-tchan",
        "partial": "Max Of BTChan",
        "signature": "BTChan a-\u003eInt-\u003eBTChan a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bounded-tchan/docs/Control-Concurrent-STM-BTChan.html#v:sizeOfBTChan",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current number of elements in the \u003ccode\u003e\u003ca\u003eBTChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.BTChan",
        "fct-package": "bounded-tchan",
        "fct-signature": "BTChan a -\u003e STM Int",
        "fct-source": "src/Control-Concurrent-STM-BTChan.html#sizeOfBTChan",
        "fct-type": "function",
        "title": "sizeOfBTChan"
      },
      "index": {
        "description": "Get the current number of elements in the BTChan",
        "hierarchy": "Control Concurrent STM BTChan",
        "module": "Control.Concurrent.STM.BTChan",
        "name": "sizeOfBTChan",
        "normalized": "BTChan a-\u003eSTM Int",
        "package": "bounded-tchan",
        "partial": "Of BTChan",
        "signature": "BTChan a-\u003eSTM Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bounded-tchan/docs/Control-Concurrent-STM-BTChan.html#v:tryReadBTChan",
      "description": {
        "fct-descr": "\u003cp\u003eA non-blocking read that returns 'Just a' on success and \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n when the channel is empty.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.BTChan",
        "fct-package": "bounded-tchan",
        "fct-signature": "BTChan a -\u003e STM (Maybe a)",
        "fct-source": "src/Control-Concurrent-STM-BTChan.html#tryReadBTChan",
        "fct-type": "function",
        "title": "tryReadBTChan"
      },
      "index": {
        "description": "non-blocking read that returns Just on success and Nothing when the channel is empty",
        "hierarchy": "Control Concurrent STM BTChan",
        "module": "Control.Concurrent.STM.BTChan",
        "name": "tryReadBTChan",
        "normalized": "BTChan a-\u003eSTM(Maybe a)",
        "package": "bounded-tchan",
        "partial": "Read BTChan",
        "signature": "BTChan a-\u003eSTM(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bounded-tchan/docs/Control-Concurrent-STM-BTChan.html#v:tryWriteBTChan",
      "description": {
        "fct-descr": "\u003cp\u003eA non-blocking write that returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the write succeeded, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.BTChan",
        "fct-package": "bounded-tchan",
        "fct-signature": "BTChan a -\u003e a -\u003e STM Bool",
        "fct-source": "src/Control-Concurrent-STM-BTChan.html#tryWriteBTChan",
        "fct-type": "function",
        "title": "tryWriteBTChan"
      },
      "index": {
        "description": "non-blocking write that returns True if the write succeeded False otherwise",
        "hierarchy": "Control Concurrent STM BTChan",
        "module": "Control.Concurrent.STM.BTChan",
        "name": "tryWriteBTChan",
        "normalized": "BTChan a-\u003ea-\u003eSTM Bool",
        "package": "bounded-tchan",
        "partial": "Write BTChan",
        "signature": "BTChan a-\u003ea-\u003eSTM Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bounded-tchan/docs/Control-Concurrent-STM-BTChan.html#v:unGetBTChan",
      "description": {
        "fct-module": "Control.Concurrent.STM.BTChan",
        "fct-package": "bounded-tchan",
        "fct-signature": "BTChan a -\u003e a -\u003e STM ()",
        "fct-source": "src/Control-Concurrent-STM-BTChan.html#unGetBTChan",
        "fct-type": "function",
        "title": "unGetBTChan"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM BTChan",
        "module": "Control.Concurrent.STM.BTChan",
        "name": "unGetBTChan",
        "normalized": "BTChan a-\u003ea-\u003eSTM()",
        "package": "bounded-tchan",
        "partial": "Get BTChan",
        "signature": "BTChan a-\u003ea-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bounded-tchan/docs/Control-Concurrent-STM-BTChan.html#v:writeBTChan",
      "description": {
        "fct-descr": "\u003cp\u003eWrites the value to the \u003ccode\u003e\u003ca\u003eBTChan\u003c/a\u003e\u003c/code\u003e or blocks if the channel is full.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.BTChan",
        "fct-package": "bounded-tchan",
        "fct-signature": "BTChan a -\u003e a -\u003e STM ()",
        "fct-source": "src/Control-Concurrent-STM-BTChan.html#writeBTChan",
        "fct-type": "function",
        "title": "writeBTChan"
      },
      "index": {
        "description": "Writes the value to the BTChan or blocks if the channel is full",
        "hierarchy": "Control Concurrent STM BTChan",
        "module": "Control.Concurrent.STM.BTChan",
        "name": "writeBTChan",
        "normalized": "BTChan a-\u003ea-\u003eSTM()",
        "package": "bounded-tchan",
        "partial": "BTChan",
        "signature": "BTChan a-\u003ea-\u003eSTM()"
      }
    }
  }
]