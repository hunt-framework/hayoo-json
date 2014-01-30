[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Allison.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library implementation of corecursive queues,  see\n \u003cem\u003eCircular Programs and Self-Referential Structures\u003c/em\u003e by Lloyd Allison,\n \u003cem\u003eSoftware Practice and Experience\u003c/em\u003e, 19(2), pp.99-109, Feb 1989\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.csse.monash.edu.au/~lloyd/tildeFP/1989SPE/\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eFor an explanation of the library implementation, see\n \u003cem\u003eLloyd Allison's Corecursive Queues:  Why Continuations Matter\u003c/em\u003e\n by Leon P Smith,  in \u003cem\u003eThe Monad Reader\u003c/em\u003e, Issue 14, Jul 2009.   This library\n corresponds to \u003ccode\u003eCorecQ\u003c/code\u003e in that paper.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://themonadreader.files.wordpress.com/2009/07/issue142.pdf\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Queue.Allison",
        "fct-package": "control-monad-queue",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Queue-Allison.html",
        "fct-type": "module",
        "title": "Allison"
      },
      "index": {
        "description": "library implementation of corecursive queues see Circular Programs and Self-Referential Structures by Lloyd Allison Software Practice and Experience pp.99-109 Feb http www.csse.monash.edu.au lloyd tildeFP SPE For an explanation of the library implementation see Lloyd Allison Corecursive Queues Why Continuations Matter by Leon Smith in The Monad Reader Issue Jul This library corresponds to CorecQ in that paper http themonadreader.files.wordpress.com issue142.pdf",
        "hierarchy": "Control Monad Queue Allison",
        "module": "Control.Monad.Queue.Allison",
        "name": "Allison",
        "normalized": "",
        "package": "control-monad-queue",
        "partial": "Allison",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Allison.html#t:LenType",
      "description": {
        "fct-module": "Control.Monad.Queue.Allison",
        "fct-package": "control-monad-queue",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Queue-Util.html#LenType",
        "fct-type": "type",
        "title": "LenType"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Queue Allison",
        "module": "Control.Monad.Queue.Allison",
        "name": "LenType",
        "normalized": "",
        "package": "control-monad-queue",
        "partial": "Len Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Allison.html#t:Q",
      "description": {
        "fct-module": "Control.Monad.Queue.Allison",
        "fct-package": "control-monad-queue",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Queue-Allison.html#Q",
        "fct-type": "data",
        "title": "Q"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Queue Allison",
        "module": "Control.Monad.Queue.Allison",
        "name": "Q",
        "normalized": "",
        "package": "control-monad-queue",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Allison.html#v:callCC",
      "description": {
        "fct-module": "Control.Monad.Queue.Allison",
        "fct-package": "control-monad-queue",
        "fct-signature": "((a -\u003e forall b.  Q e b) -\u003e Q e a) -\u003e Q e a",
        "fct-source": "src/Control-Monad-Queue-Allison.html#callCC",
        "fct-type": "function",
        "title": "callCC"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Queue Allison",
        "module": "Control.Monad.Queue.Allison",
        "name": "callCC",
        "normalized": "((a-\u003eb c Q d e)-\u003eQ d a)-\u003eQ d a",
        "package": "control-monad-queue",
        "partial": "CC",
        "signature": "((a-\u003eforall b. Q e b)-\u003eQ e a)-\u003eQ e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Allison.html#v:deQ",
      "description": {
        "fct-descr": "\u003cp\u003eDequeues an element,  returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the queue is empty.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Allison",
        "fct-package": "control-monad-queue",
        "fct-signature": "Q e (Maybe e)",
        "fct-source": "src/Control-Monad-Queue-Allison.html#deQ",
        "fct-type": "function",
        "title": "deQ"
      },
      "index": {
        "description": "Dequeues an element returns Nothing if the queue is empty",
        "hierarchy": "Control Monad Queue Allison",
        "module": "Control.Monad.Queue.Allison",
        "name": "deQ",
        "normalized": "",
        "package": "control-monad-queue",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Allison.html#v:deQ_break",
      "description": {
        "fct-descr": "\u003cp\u003eDequeues an element:  terminates the queue computation if the queue is empty.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Allison",
        "fct-package": "control-monad-queue",
        "fct-signature": "Q e e",
        "fct-source": "src/Control-Monad-Queue-Allison.html#deQ_break",
        "fct-type": "function",
        "title": "deQ_break"
      },
      "index": {
        "description": "Dequeues an element terminates the queue computation if the queue is empty",
        "hierarchy": "Control Monad Queue Allison",
        "module": "Control.Monad.Queue.Allison",
        "name": "deQ_break",
        "normalized": "",
        "package": "control-monad-queue",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Allison.html#v:deQs",
      "description": {
        "fct-descr": "\u003cp\u003eDequeues up to \u003ccode\u003elen\u003c/code\u003e elements from the queue\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Allison",
        "fct-package": "control-monad-queue",
        "fct-signature": "len -\u003e Q e [e]",
        "fct-source": "src/Control-Monad-Queue-Allison.html#deQs",
        "fct-type": "function",
        "title": "deQs"
      },
      "index": {
        "description": "Dequeues up to len elements from the queue",
        "hierarchy": "Control Monad Queue Allison",
        "module": "Control.Monad.Queue.Allison",
        "name": "deQs",
        "normalized": "a-\u003eQ b[b]",
        "package": "control-monad-queue",
        "partial": "Qs",
        "signature": "len-\u003eQ e[e]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Allison.html#v:enQ",
      "description": {
        "fct-descr": "\u003cp\u003eEnqueues an element to the queue\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Allison",
        "fct-package": "control-monad-queue",
        "fct-signature": "e -\u003e Q e ()",
        "fct-source": "src/Control-Monad-Queue-Allison.html#enQ",
        "fct-type": "function",
        "title": "enQ"
      },
      "index": {
        "description": "Enqueues an element to the queue",
        "hierarchy": "Control Monad Queue Allison",
        "module": "Control.Monad.Queue.Allison",
        "name": "enQ",
        "normalized": "a-\u003eQ a()",
        "package": "control-monad-queue",
        "partial": "",
        "signature": "e-\u003eQ e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Allison.html#v:exit",
      "description": {
        "fct-descr": "\u003cp\u003eTerminates the queue computation\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Allison",
        "fct-package": "control-monad-queue",
        "fct-signature": "Q e a",
        "fct-source": "src/Control-Monad-Queue-Allison.html#exit",
        "fct-type": "function",
        "title": "exit"
      },
      "index": {
        "description": "Terminates the queue computation",
        "hierarchy": "Control Monad Queue Allison",
        "module": "Control.Monad.Queue.Allison",
        "name": "exit",
        "normalized": "",
        "package": "control-monad-queue",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Allison.html#v:lenQ",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the length of the queue\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Allison",
        "fct-package": "control-monad-queue",
        "fct-signature": "Q e len",
        "fct-source": "src/Control-Monad-Queue-Allison.html#lenQ",
        "fct-type": "function",
        "title": "lenQ"
      },
      "index": {
        "description": "Returns the length of the queue",
        "hierarchy": "Control Monad Queue Allison",
        "module": "Control.Monad.Queue.Allison",
        "name": "lenQ",
        "normalized": "",
        "package": "control-monad-queue",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Allison.html#v:lenQ_",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the length of the queue\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Allison",
        "fct-package": "control-monad-queue",
        "fct-signature": "Q e LenType",
        "fct-source": "src/Control-Monad-Queue-Allison.html#lenQ_",
        "fct-type": "function",
        "title": "lenQ_"
      },
      "index": {
        "description": "Returns the length of the queue",
        "hierarchy": "Control Monad Queue Allison",
        "module": "Control.Monad.Queue.Allison",
        "name": "lenQ_",
        "normalized": "",
        "package": "control-monad-queue",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Allison.html#v:peekQ",
      "description": {
        "fct-descr": "\u003cp\u003eExamines the front element of the queue without removing it.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Allison",
        "fct-package": "control-monad-queue",
        "fct-signature": "Q e (Maybe e)",
        "fct-source": "src/Control-Monad-Queue-Allison.html#peekQ",
        "fct-type": "function",
        "title": "peekQ"
      },
      "index": {
        "description": "Examines the front element of the queue without removing it",
        "hierarchy": "Control Monad Queue Allison",
        "module": "Control.Monad.Queue.Allison",
        "name": "peekQ",
        "normalized": "",
        "package": "control-monad-queue",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Allison.html#v:peekQn",
      "description": {
        "fct-descr": "\u003cp\u003eExamines the element currently at position \u003ccode\u003eindex\u003c/code\u003e in the queue, indexing starts with \u003ccode\u003e0\u003c/code\u003e,  like \u003ccode\u003e\u003ca\u003e!!\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Allison",
        "fct-package": "control-monad-queue",
        "fct-signature": "index -\u003e Q e (Maybe e)",
        "fct-source": "src/Control-Monad-Queue-Allison.html#peekQn",
        "fct-type": "function",
        "title": "peekQn"
      },
      "index": {
        "description": "Examines the element currently at position index in the queue indexing starts with like",
        "hierarchy": "Control Monad Queue Allison",
        "module": "Control.Monad.Queue.Allison",
        "name": "peekQn",
        "normalized": "a-\u003eQ b(Maybe b)",
        "package": "control-monad-queue",
        "partial": "Qn",
        "signature": "index-\u003eQ e(Maybe e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Allison.html#v:peekQs",
      "description": {
        "fct-descr": "\u003cp\u003eExamines up to \u003ccode\u003emaxlen\u003c/code\u003e elements of the queue without removing them.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Allison",
        "fct-package": "control-monad-queue",
        "fct-signature": "maxlen -\u003e Q e [e]",
        "fct-source": "src/Control-Monad-Queue-Allison.html#peekQs",
        "fct-type": "function",
        "title": "peekQs"
      },
      "index": {
        "description": "Examines up to maxlen elements of the queue without removing them",
        "hierarchy": "Control Monad Queue Allison",
        "module": "Control.Monad.Queue.Allison",
        "name": "peekQs",
        "normalized": "a-\u003eQ b[b]",
        "package": "control-monad-queue",
        "partial": "Qs",
        "signature": "maxlen-\u003eQ e[e]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Allison.html#v:runQueue",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of all elements enqueued during the queue computation\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Allison",
        "fct-package": "control-monad-queue",
        "fct-signature": "Q e a -\u003e [e]",
        "fct-source": "src/Control-Monad-Queue-Allison.html#runQueue",
        "fct-type": "function",
        "title": "runQueue"
      },
      "index": {
        "description": "Returns list of all elements enqueued during the queue computation",
        "hierarchy": "Control Monad Queue Allison",
        "module": "Control.Monad.Queue.Allison",
        "name": "runQueue",
        "normalized": "Q a b-\u003e[a]",
        "package": "control-monad-queue",
        "partial": "Queue",
        "signature": "Q e a-\u003e[e]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Class.html#",
      "description": {
        "fct-module": "Control.Monad.Queue.Class",
        "fct-package": "control-monad-queue",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Queue-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Queue Class",
        "module": "Control.Monad.Queue.Class",
        "name": "Class",
        "normalized": "",
        "package": "control-monad-queue",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Class.html#t:MonadQueue",
      "description": {
        "fct-module": "Control.Monad.Queue.Class",
        "fct-package": "control-monad-queue",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Queue-Class.html#MonadQueue",
        "fct-type": "class",
        "title": "MonadQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Queue Class",
        "module": "Control.Monad.Queue.Class",
        "name": "MonadQueue",
        "normalized": "",
        "package": "control-monad-queue",
        "partial": "Monad Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Class.html#v:deQ",
      "description": {
        "fct-descr": "\u003cp\u003eDequeue an element,  returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the queue is empty.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Class",
        "fct-package": "control-monad-queue",
        "fct-signature": "q (Maybe e)",
        "fct-source": "src/Control-Monad-Queue-Class.html#deQ",
        "fct-type": "method",
        "title": "deQ"
      },
      "index": {
        "description": "Dequeue an element returns Nothing if the queue is empty",
        "hierarchy": "Control Monad Queue Class",
        "module": "Control.Monad.Queue.Class",
        "name": "deQ",
        "normalized": "",
        "package": "control-monad-queue",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Class.html#v:deQs",
      "description": {
        "fct-descr": "\u003cp\u003eDequeue up to \u003ccode\u003emaxlen\u003c/code\u003e elements.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Class",
        "fct-package": "control-monad-queue",
        "fct-signature": "maxlen -\u003e q [e]",
        "fct-source": "src/Control-Monad-Queue-Class.html#deQs",
        "fct-type": "method",
        "title": "deQs"
      },
      "index": {
        "description": "Dequeue up to maxlen elements",
        "hierarchy": "Control Monad Queue Class",
        "module": "Control.Monad.Queue.Class",
        "name": "deQs",
        "normalized": "a-\u003eb[c]",
        "package": "control-monad-queue",
        "partial": "Qs",
        "signature": "maxlen-\u003eq[e]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Class.html#v:enQ",
      "description": {
        "fct-descr": "\u003cp\u003eEnqueue an element to a queue\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Class",
        "fct-package": "control-monad-queue",
        "fct-signature": "e -\u003e q ()",
        "fct-source": "src/Control-Monad-Queue-Class.html#enQ",
        "fct-type": "method",
        "title": "enQ"
      },
      "index": {
        "description": "Enqueue an element to queue",
        "hierarchy": "Control Monad Queue Class",
        "module": "Control.Monad.Queue.Class",
        "name": "enQ",
        "normalized": "a-\u003eb()",
        "package": "control-monad-queue",
        "partial": "",
        "signature": "e-\u003eq()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Class.html#v:lenQ",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the current length of the queue\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Class",
        "fct-package": "control-monad-queue",
        "fct-signature": "q len",
        "fct-source": "src/Control-Monad-Queue-Class.html#lenQ",
        "fct-type": "method",
        "title": "lenQ"
      },
      "index": {
        "description": "Returns the current length of the queue",
        "hierarchy": "Control Monad Queue Class",
        "module": "Control.Monad.Queue.Class",
        "name": "lenQ",
        "normalized": "",
        "package": "control-monad-queue",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Class.html#v:peekQ",
      "description": {
        "fct-descr": "\u003cp\u003eExamines the front element of the queue without removing it.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Class",
        "fct-package": "control-monad-queue",
        "fct-signature": "q (Maybe e)",
        "fct-source": "src/Control-Monad-Queue-Class.html#peekQ",
        "fct-type": "method",
        "title": "peekQ"
      },
      "index": {
        "description": "Examines the front element of the queue without removing it",
        "hierarchy": "Control Monad Queue Class",
        "module": "Control.Monad.Queue.Class",
        "name": "peekQ",
        "normalized": "",
        "package": "control-monad-queue",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Class.html#v:peekQn",
      "description": {
        "fct-descr": "\u003cp\u003eExamines the element currently at position \u003ccode\u003eindex\u003c/code\u003e,  indexing starts at \u003ccode\u003e0\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Class",
        "fct-package": "control-monad-queue",
        "fct-signature": "index -\u003e q (Maybe e)",
        "fct-source": "src/Control-Monad-Queue-Class.html#peekQn",
        "fct-type": "method",
        "title": "peekQn"
      },
      "index": {
        "description": "Examines the element currently at position index indexing starts at",
        "hierarchy": "Control Monad Queue Class",
        "module": "Control.Monad.Queue.Class",
        "name": "peekQn",
        "normalized": "a-\u003eb(Maybe c)",
        "package": "control-monad-queue",
        "partial": "Qn",
        "signature": "index-\u003eq(Maybe e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Class.html#v:peekQs",
      "description": {
        "fct-descr": "\u003cp\u003eExamines up to \u003ccode\u003emaxlen\u003c/code\u003e elements of the queue without removing them.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Class",
        "fct-package": "control-monad-queue",
        "fct-signature": "maxlen -\u003e q [e]",
        "fct-source": "src/Control-Monad-Queue-Class.html#peekQs",
        "fct-type": "method",
        "title": "peekQs"
      },
      "index": {
        "description": "Examines up to maxlen elements of the queue without removing them",
        "hierarchy": "Control Monad Queue Class",
        "module": "Control.Monad.Queue.Class",
        "name": "peekQs",
        "normalized": "a-\u003eb[c]",
        "package": "control-monad-queue",
        "partial": "Qs",
        "signature": "maxlen-\u003eq[e]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Corec.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCorecursive queues with return values.  This is a straightforward\n generalization of Control.Monad.Queue.Allison.   It corresponds to\n \u003ccode\u003eCorecQW\u003c/code\u003e in the paper\n \u003cem\u003eLloyd Allison's Corecursive Queues:  Why Continuations Matter\u003c/em\u003e by\n Leon P Smith in the Monad Reader issue 14.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Queue.Corec",
        "fct-package": "control-monad-queue",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Queue-Corec.html",
        "fct-type": "module",
        "title": "Corec"
      },
      "index": {
        "description": "Corecursive queues with return values This is straightforward generalization of Control.Monad.Queue.Allison It corresponds to CorecQW in the paper Lloyd Allison Corecursive Queues Why Continuations Matter by Leon Smith in the Monad Reader issue",
        "hierarchy": "Control Monad Queue Corec",
        "module": "Control.Monad.Queue.Corec",
        "name": "Corec",
        "normalized": "",
        "package": "control-monad-queue",
        "partial": "Corec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Corec.html#t:LenType",
      "description": {
        "fct-module": "Control.Monad.Queue.Corec",
        "fct-package": "control-monad-queue",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Queue-Util.html#LenType",
        "fct-type": "type",
        "title": "LenType"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Queue Corec",
        "module": "Control.Monad.Queue.Corec",
        "name": "LenType",
        "normalized": "",
        "package": "control-monad-queue",
        "partial": "Len Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Corec.html#t:Q",
      "description": {
        "fct-module": "Control.Monad.Queue.Corec",
        "fct-package": "control-monad-queue",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Queue-Corec.html#Q",
        "fct-type": "data",
        "title": "Q"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Queue Corec",
        "module": "Control.Monad.Queue.Corec",
        "name": "Q",
        "normalized": "",
        "package": "control-monad-queue",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Corec.html#v:callCC",
      "description": {
        "fct-module": "Control.Monad.Queue.Corec",
        "fct-package": "control-monad-queue",
        "fct-signature": "((a -\u003e forall b.  Q w e b) -\u003e Q w e a) -\u003e Q w e a",
        "fct-source": "src/Control-Monad-Queue-Corec.html#callCC",
        "fct-type": "function",
        "title": "callCC"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Queue Corec",
        "module": "Control.Monad.Queue.Corec",
        "name": "callCC",
        "normalized": "((a-\u003eb c Q d e f)-\u003eQ d e a)-\u003eQ d e a",
        "package": "control-monad-queue",
        "partial": "CC",
        "signature": "((a-\u003eforall b. Q w e b)-\u003eQ w e a)-\u003eQ w e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Corec.html#v:deQ",
      "description": {
        "fct-descr": "\u003cp\u003eDequeues and element:  returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the queue is empty.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Corec",
        "fct-package": "control-monad-queue",
        "fct-signature": "Q w e (Maybe e)",
        "fct-source": "src/Control-Monad-Queue-Corec.html#deQ",
        "fct-type": "function",
        "title": "deQ"
      },
      "index": {
        "description": "Dequeues and element returns Nothing if the queue is empty",
        "hierarchy": "Control Monad Queue Corec",
        "module": "Control.Monad.Queue.Corec",
        "name": "deQ",
        "normalized": "",
        "package": "control-monad-queue",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Corec.html#v:deQ_break",
      "description": {
        "fct-descr": "\u003cp\u003eDequeues an element:  terminates the computation with the final result \u003ccode\u003ew\u003c/code\u003e if the queue is empty.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Corec",
        "fct-package": "control-monad-queue",
        "fct-signature": "w -\u003e Q w e e",
        "fct-source": "src/Control-Monad-Queue-Corec.html#deQ_break",
        "fct-type": "function",
        "title": "deQ_break"
      },
      "index": {
        "description": "Dequeues an element terminates the computation with the final result if the queue is empty",
        "hierarchy": "Control Monad Queue Corec",
        "module": "Control.Monad.Queue.Corec",
        "name": "deQ_break",
        "normalized": "a-\u003eQ a b b",
        "package": "control-monad-queue",
        "partial": "",
        "signature": "w-\u003eQ w e e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Corec.html#v:deQs",
      "description": {
        "fct-descr": "\u003cp\u003eDequeues up to \u003ccode\u003elen\u003c/code\u003e elements from the queue\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Corec",
        "fct-package": "control-monad-queue",
        "fct-signature": "len -\u003e Q w e [e]",
        "fct-source": "src/Control-Monad-Queue-Corec.html#deQs",
        "fct-type": "function",
        "title": "deQs"
      },
      "index": {
        "description": "Dequeues up to len elements from the queue",
        "hierarchy": "Control Monad Queue Corec",
        "module": "Control.Monad.Queue.Corec",
        "name": "deQs",
        "normalized": "a-\u003eQ b c[c]",
        "package": "control-monad-queue",
        "partial": "Qs",
        "signature": "len-\u003eQ w e[e]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Corec.html#v:enQ",
      "description": {
        "fct-descr": "\u003cp\u003eEnqueues an element to the queue\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Corec",
        "fct-package": "control-monad-queue",
        "fct-signature": "e -\u003e Q w e ()",
        "fct-source": "src/Control-Monad-Queue-Corec.html#enQ",
        "fct-type": "function",
        "title": "enQ"
      },
      "index": {
        "description": "Enqueues an element to the queue",
        "hierarchy": "Control Monad Queue Corec",
        "module": "Control.Monad.Queue.Corec",
        "name": "enQ",
        "normalized": "a-\u003eQ b a()",
        "package": "control-monad-queue",
        "partial": "",
        "signature": "e-\u003eQ w e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Corec.html#v:exit",
      "description": {
        "fct-descr": "\u003cp\u003eTerminates the queue computation with result \u003ccode\u003ew\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Corec",
        "fct-package": "control-monad-queue",
        "fct-signature": "w -\u003e Q w e a",
        "fct-source": "src/Control-Monad-Queue-Corec.html#exit",
        "fct-type": "function",
        "title": "exit"
      },
      "index": {
        "description": "Terminates the queue computation with result",
        "hierarchy": "Control Monad Queue Corec",
        "module": "Control.Monad.Queue.Corec",
        "name": "exit",
        "normalized": "a-\u003eQ a b c",
        "package": "control-monad-queue",
        "partial": "",
        "signature": "w-\u003eQ w e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Corec.html#v:lenQ",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the length of the queue\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Corec",
        "fct-package": "control-monad-queue",
        "fct-signature": "Q w e len",
        "fct-source": "src/Control-Monad-Queue-Corec.html#lenQ",
        "fct-type": "function",
        "title": "lenQ"
      },
      "index": {
        "description": "Returns the length of the queue",
        "hierarchy": "Control Monad Queue Corec",
        "module": "Control.Monad.Queue.Corec",
        "name": "lenQ",
        "normalized": "",
        "package": "control-monad-queue",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Corec.html#v:lenQ_",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the length of the queue\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Corec",
        "fct-package": "control-monad-queue",
        "fct-signature": "Q w e LenType",
        "fct-source": "src/Control-Monad-Queue-Corec.html#lenQ_",
        "fct-type": "function",
        "title": "lenQ_"
      },
      "index": {
        "description": "Returns the length of the queue",
        "hierarchy": "Control Monad Queue Corec",
        "module": "Control.Monad.Queue.Corec",
        "name": "lenQ_",
        "normalized": "",
        "package": "control-monad-queue",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Corec.html#v:mapQ",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a function to the final return value of the entire computation,  like \u003ccode\u003eControl.Monad.Cont.mapCont\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Corec",
        "fct-package": "control-monad-queue",
        "fct-signature": "(w -\u003e w) -\u003e Q w e a -\u003e Q w e a",
        "fct-source": "src/Control-Monad-Queue-Corec.html#mapQ",
        "fct-type": "function",
        "title": "mapQ"
      },
      "index": {
        "description": "Applies function to the final return value of the entire computation like Control.Monad.Cont.mapCont",
        "hierarchy": "Control Monad Queue Corec",
        "module": "Control.Monad.Queue.Corec",
        "name": "mapQ",
        "normalized": "(a-\u003ea)-\u003eQ a b c-\u003eQ a b c",
        "package": "control-monad-queue",
        "partial": "",
        "signature": "(w-\u003ew)-\u003eQ w e a-\u003eQ w e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Corec.html#v:peekQ",
      "description": {
        "fct-descr": "\u003cp\u003eExamines the front element of the queue without removing it.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Corec",
        "fct-package": "control-monad-queue",
        "fct-signature": "Q w e (Maybe e)",
        "fct-source": "src/Control-Monad-Queue-Corec.html#peekQ",
        "fct-type": "function",
        "title": "peekQ"
      },
      "index": {
        "description": "Examines the front element of the queue without removing it",
        "hierarchy": "Control Monad Queue Corec",
        "module": "Control.Monad.Queue.Corec",
        "name": "peekQ",
        "normalized": "",
        "package": "control-monad-queue",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Corec.html#v:peekQn",
      "description": {
        "fct-descr": "\u003cp\u003eExamines the element currently at position \u003ccode\u003eindex\u003c/code\u003e in the queue,  indexing starts from \u003ccode\u003e0\u003c/code\u003e, like \u003ccode\u003e\u003ca\u003e!!\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Corec",
        "fct-package": "control-monad-queue",
        "fct-signature": "index -\u003e Q w e (Maybe e)",
        "fct-source": "src/Control-Monad-Queue-Corec.html#peekQn",
        "fct-type": "function",
        "title": "peekQn"
      },
      "index": {
        "description": "Examines the element currently at position index in the queue indexing starts from like",
        "hierarchy": "Control Monad Queue Corec",
        "module": "Control.Monad.Queue.Corec",
        "name": "peekQn",
        "normalized": "a-\u003eQ b c(Maybe c)",
        "package": "control-monad-queue",
        "partial": "Qn",
        "signature": "index-\u003eQ w e(Maybe e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Corec.html#v:peekQs",
      "description": {
        "fct-descr": "\u003cp\u003eLooks at up to the first \u003ccode\u003elen\u003c/code\u003e elements of the queue,  like \u003ccode\u003e\u003ca\u003edeQs\u003c/a\u003e\u003c/code\u003e except without removing them.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Corec",
        "fct-package": "control-monad-queue",
        "fct-signature": "len -\u003e Q w e [e]",
        "fct-source": "src/Control-Monad-Queue-Corec.html#peekQs",
        "fct-type": "function",
        "title": "peekQs"
      },
      "index": {
        "description": "Looks at up to the first len elements of the queue like deQs except without removing them",
        "hierarchy": "Control Monad Queue Corec",
        "module": "Control.Monad.Queue.Corec",
        "name": "peekQs",
        "normalized": "a-\u003eQ b c[c]",
        "package": "control-monad-queue",
        "partial": "Qs",
        "signature": "len-\u003eQ w e[e]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Corec.html#v:runQueue",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the computation,  returns a list of all elements enqueued\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Corec",
        "fct-package": "control-monad-queue",
        "fct-signature": "Q a e a -\u003e [e]",
        "fct-source": "src/Control-Monad-Queue-Corec.html#runQueue",
        "fct-type": "function",
        "title": "runQueue"
      },
      "index": {
        "description": "Runs the computation returns list of all elements enqueued",
        "hierarchy": "Control Monad Queue Corec",
        "module": "Control.Monad.Queue.Corec",
        "name": "runQueue",
        "normalized": "Q a b a-\u003e[b]",
        "package": "control-monad-queue",
        "partial": "Queue",
        "signature": "Q a e a-\u003e[e]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Corec.html#v:runResult",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the computation,  returns the result of the computation\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Corec",
        "fct-package": "control-monad-queue",
        "fct-signature": "Q a e a -\u003e a",
        "fct-source": "src/Control-Monad-Queue-Corec.html#runResult",
        "fct-type": "function",
        "title": "runResult"
      },
      "index": {
        "description": "Runs the computation returns the result of the computation",
        "hierarchy": "Control Monad Queue Corec",
        "module": "Control.Monad.Queue.Corec",
        "name": "runResult",
        "normalized": "Q a b a-\u003ea",
        "package": "control-monad-queue",
        "partial": "Result",
        "signature": "Q a e a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Corec.html#v:runResultQueue",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the computation,  returns the result of the computation and a list of all elements enqueued\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Corec",
        "fct-package": "control-monad-queue",
        "fct-signature": "Q a e a -\u003e (a, [e])",
        "fct-source": "src/Control-Monad-Queue-Corec.html#runResultQueue",
        "fct-type": "function",
        "title": "runResultQueue"
      },
      "index": {
        "description": "Runs the computation returns the result of the computation and list of all elements enqueued",
        "hierarchy": "Control Monad Queue Corec",
        "module": "Control.Monad.Queue.Corec",
        "name": "runResultQueue",
        "normalized": "Q a b a-\u003e(a,[b])",
        "package": "control-monad-queue",
        "partial": "Result Queue",
        "signature": "Q a e a-\u003e(a,[e])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-queue/docs/Control-Monad-Queue-Corec.html#v:wfix",
      "description": {
        "fct-descr": "\u003cp\u003eComputes a fixpoint on the result;  usually used in conjunction with \u003ccode\u003emapQ\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Queue.Corec",
        "fct-package": "control-monad-queue",
        "fct-signature": "(w -\u003e Q w e a) -\u003e Q w e a",
        "fct-source": "src/Control-Monad-Queue-Corec.html#wfix",
        "fct-type": "function",
        "title": "wfix"
      },
      "index": {
        "description": "Computes fixpoint on the result usually used in conjunction with mapQ",
        "hierarchy": "Control Monad Queue Corec",
        "module": "Control.Monad.Queue.Corec",
        "name": "wfix",
        "normalized": "(a-\u003eQ a b c)-\u003eQ a b c",
        "package": "control-monad-queue",
        "partial": "",
        "signature": "(w-\u003eQ w e a)-\u003eQ w e a"
      }
    }
  }
]