[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BoundedChan/docs/Control-Concurrent-BoundedChan.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements bounded channels. These channels differ from normal \u003ccode\u003eChan\u003c/code\u003es in\n that they are guaranteed to contain no more than a certain number of\n elements. This is ideal when you may be writing to a channel faster than you\n are able to read from it.\n\u003c/p\u003e\u003cp\u003eThis module supports all the functions of \u003ca\u003eControl.Concurrent.Chan\u003c/a\u003e except\n \u003ccode\u003eunGetChan\u003c/code\u003e and \u003ccode\u003edupChan\u003c/code\u003e, which are not supported for bounded channels.\n\u003c/p\u003e\u003cp\u003eExtra consitency: This version enforces that if thread Alice writes\n e1 followed by e2 then e1 will be returned by readChan before e2.\n Conversely, if thead Bob reads e1 followed by e2 then it was true that\n writeChan e1 preceded writeChan e2.\n\u003c/p\u003e\u003cp\u003ePrevious versions did not enforce this consistency: if writeChan were\n preempted between putMVars or killThread arrived between putMVars then it\n can fail.  Similarly it might fail if readChan were stopped after putMVar\n and before the second takeMVar.  An unlucky pattern of several such deaths\n might actually break the invariants of the array in an unrecoverable way\n causing all future reads and writes to block.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.BoundedChan",
        "fct-package": "BoundedChan",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-BoundedChan.html",
        "fct-type": "module",
        "title": "BoundedChan"
      },
      "index": {
        "description": "Implements bounded channels These channels differ from normal Chan in that they are guaranteed to contain no more than certain number of elements This is ideal when you may be writing to channel faster than you are able to read from it This module supports all the functions of Control.Concurrent.Chan except unGetChan and dupChan which are not supported for bounded channels Extra consitency This version enforces that if thread Alice writes e1 followed by e2 then e1 will be returned by readChan before e2 Conversely if thead Bob reads e1 followed by e2 then it was true that writeChan e1 preceded writeChan e2 Previous versions did not enforce this consistency if writeChan were preempted between putMVars or killThread arrived between putMVars then it can fail Similarly it might fail if readChan were stopped after putMVar and before the second takeMVar An unlucky pattern of several such deaths might actually break the invariants of the array in an unrecoverable way causing all future reads and writes to block",
        "hierarchy": "Control Concurrent BoundedChan",
        "module": "Control.Concurrent.BoundedChan",
        "name": "BoundedChan",
        "normalized": "",
        "package": "BoundedChan",
        "partial": "Bounded Chan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BoundedChan/docs/Control-Concurrent-BoundedChan.html#t:BoundedChan",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eBoundedChan\u003c/a\u003e\u003c/code\u003e is an abstract data type representing a bounded channel.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.BoundedChan",
        "fct-package": "BoundedChan",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-BoundedChan.html#BoundedChan",
        "fct-type": "data",
        "title": "BoundedChan"
      },
      "index": {
        "description": "BoundedChan is an abstract data type representing bounded channel",
        "hierarchy": "Control Concurrent BoundedChan",
        "module": "Control.Concurrent.BoundedChan",
        "name": "BoundedChan",
        "normalized": "",
        "package": "BoundedChan",
        "partial": "Bounded Chan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BoundedChan/docs/Control-Concurrent-BoundedChan.html#v:getChanContents",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a lazy list representing the contents of the supplied channel.  Competing\n readers might steal from this list.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.BoundedChan",
        "fct-package": "BoundedChan",
        "fct-signature": "BoundedChan a -\u003e IO [a]",
        "fct-source": "src/Control-Concurrent-BoundedChan.html#getChanContents",
        "fct-type": "function",
        "title": "getChanContents"
      },
      "index": {
        "description": "Return lazy list representing the contents of the supplied channel Competing readers might steal from this list",
        "hierarchy": "Control Concurrent BoundedChan",
        "module": "Control.Concurrent.BoundedChan",
        "name": "getChanContents",
        "normalized": "BoundedChan a-\u003eIO[a]",
        "package": "BoundedChan",
        "partial": "Chan Contents",
        "signature": "BoundedChan a-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BoundedChan/docs/Control-Concurrent-BoundedChan.html#v:isEmptyChan",
      "description": {
        "fct-descr": "\u003cp\u003eDANGER: This may block on an empty channel if there is already a blocked reader.\n Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the supplied channel is empty.\n\u003c/p\u003e\u003cp\u003eDEPRECATED\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.BoundedChan",
        "fct-package": "BoundedChan",
        "fct-signature": "BoundedChan a -\u003e IO Bool",
        "fct-source": "src/Control-Concurrent-BoundedChan.html#isEmptyChan",
        "fct-type": "function",
        "title": "isEmptyChan"
      },
      "index": {
        "description": "DANGER This may block on an empty channel if there is already blocked reader Returns True if the supplied channel is empty DEPRECATED",
        "hierarchy": "Control Concurrent BoundedChan",
        "module": "Control.Concurrent.BoundedChan",
        "name": "isEmptyChan",
        "normalized": "BoundedChan a-\u003eIO Bool",
        "package": "BoundedChan",
        "partial": "Empty Chan",
        "signature": "BoundedChan a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BoundedChan/docs/Control-Concurrent-BoundedChan.html#v:newBoundedChan",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enewBoundedChan n\u003c/code\u003e returns a channel than can contain no more than \u003ccode\u003en\u003c/code\u003e\n elements.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.BoundedChan",
        "fct-package": "BoundedChan",
        "fct-signature": "Int -\u003e IO (BoundedChan a)",
        "fct-source": "src/Control-Concurrent-BoundedChan.html#newBoundedChan",
        "fct-type": "function",
        "title": "newBoundedChan"
      },
      "index": {
        "description": "newBoundedChan returns channel than can contain no more than elements",
        "hierarchy": "Control Concurrent BoundedChan",
        "module": "Control.Concurrent.BoundedChan",
        "name": "newBoundedChan",
        "normalized": "Int-\u003eIO(BoundedChan a)",
        "package": "BoundedChan",
        "partial": "Bounded Chan",
        "signature": "Int-\u003eIO(BoundedChan a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BoundedChan/docs/Control-Concurrent-BoundedChan.html#v:readChan",
      "description": {
        "fct-descr": "\u003cp\u003eRead an element from the channel. If the channel is empty, this routine\n will block until it is able to read.  Blockers wait in a fair FIFO queue.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.BoundedChan",
        "fct-package": "BoundedChan",
        "fct-signature": "BoundedChan a -\u003e IO a",
        "fct-source": "src/Control-Concurrent-BoundedChan.html#readChan",
        "fct-type": "function",
        "title": "readChan"
      },
      "index": {
        "description": "Read an element from the channel If the channel is empty this routine will block until it is able to read Blockers wait in fair FIFO queue",
        "hierarchy": "Control Concurrent BoundedChan",
        "module": "Control.Concurrent.BoundedChan",
        "name": "readChan",
        "normalized": "BoundedChan a-\u003eIO a",
        "package": "BoundedChan",
        "partial": "Chan",
        "signature": "BoundedChan a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BoundedChan/docs/Control-Concurrent-BoundedChan.html#v:writeChan",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an element to the channel. If the channel is full, this routine will\n block until it is able to write.  Blockers wait in a fair FIFO queue.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.BoundedChan",
        "fct-package": "BoundedChan",
        "fct-signature": "BoundedChan a -\u003e a -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-BoundedChan.html#writeChan",
        "fct-type": "function",
        "title": "writeChan"
      },
      "index": {
        "description": "Write an element to the channel If the channel is full this routine will block until it is able to write Blockers wait in fair FIFO queue",
        "hierarchy": "Control Concurrent BoundedChan",
        "module": "Control.Concurrent.BoundedChan",
        "name": "writeChan",
        "normalized": "BoundedChan a-\u003ea-\u003eIO()",
        "package": "BoundedChan",
        "partial": "Chan",
        "signature": "BoundedChan a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BoundedChan/docs/Control-Concurrent-BoundedChan.html#v:writeList2Chan",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a list of elements to the channel. If the channel becomes full, this\n routine will block until it is able to write.  Competing writers may interleave with\n this one.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.BoundedChan",
        "fct-package": "BoundedChan",
        "fct-signature": "BoundedChan a -\u003e [a] -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-BoundedChan.html#writeList2Chan",
        "fct-type": "function",
        "title": "writeList2Chan"
      },
      "index": {
        "description": "Write list of elements to the channel If the channel becomes full this routine will block until it is able to write Competing writers may interleave with this one",
        "hierarchy": "Control Concurrent BoundedChan",
        "module": "Control.Concurrent.BoundedChan",
        "name": "writeList2Chan",
        "normalized": "BoundedChan a-\u003e[a]-\u003eIO()",
        "package": "BoundedChan",
        "partial": "List Chan",
        "signature": "BoundedChan a-\u003e[a]-\u003eIO()"
      }
    }
  }
]