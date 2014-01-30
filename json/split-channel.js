[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/split-channel/docs/Control-Concurrent-Chan-Split.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package provides an unbounded, imperative queue that is supposed to\n be thread safe and asynchronous exception safe.  It is essentially the\n same communication mechanism as \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e,  except\n that each channel is split into separate sending and receiving ends,\n called \u003ccode\u003e\u003ca\u003eSendPort\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eReceivePort\u003c/a\u003e\u003c/code\u003e respectively.  This has at least two\n advantages:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Program behavior can be more finely constrained via the type system.\n\u003c/li\u003e\u003cli\u003e Channels can have zero \u003ccode\u003eReceivePorts\u003c/code\u003e associated with them.  Messages\n    written to such a channel disappear into the aether and can be\n    garbage collected.  Note that  \u003ccode\u003eReceivePorts\u003c/code\u003e can be subsequently\n    attached to such a channel via \u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e,  and can be detached via\n    garbage collection.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eBy contrast,  \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e couples a \u003ccode\u003eSendPort\u003c/code\u003e and\n    a \u003ccode\u003eReceivePort\u003c/code\u003e together in a pair.   Thus keeping a reference to a\n    \u003ccode\u003eSendPort\u003c/code\u003e implies that there is at least one reference to a\n    \u003ccode\u003eReceivePort\u003c/code\u003e,  which means that messages cannot be garbage collected\n    from an active channel if nobody is listening.\n\u003c/p\u003e\u003cp\u003eA channel can have multiple \u003ccode\u003eReceivePorts\u003c/code\u003e.  This results in a publish-\n subscribe pattern of communication:  every message will be delivered to\n every port.   Alternatively,  multiple threads can read from a single\n port.  This results in a push-pull pattern of communication, similar to\n ZeroMQ:  every message will be delivered to exactly one thread.   Of\n course both can be used together to form hybrid patterns of\n communication.\n\u003c/p\u003e\u003cp\u003eA channel can only have one \u003ccode\u003eSendPort\u003c/code\u003e.   However multiple threads can\n can safely write to a single port,  allowing effects similar to  multiple\n \u003ccode\u003eSendPorts\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSome of the tradeoffs of \u003ccode\u003esplit-channel\u003c/code\u003e compared to Cloud Haskell's\n \u003ccode\u003eRemote.Channel\u003c/code\u003e are:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e  \u003ccode\u003esplit-channel\u003c/code\u003e is restricted to in-process communications only.\n\u003c/li\u003e\u003cli\u003e  \u003ccode\u003esplit-channel\u003c/code\u003e has no restriction on the type of values that may be\n     communicated.\n\u003c/li\u003e\u003cli\u003e  There is a quasi-duality between the two approaches:  Cloud Haskell's\n     \u003ccode\u003eReceivePorts\u003c/code\u003e are special whereas \u003ccode\u003esplit-channel\u003c/code\u003e's \u003ccode\u003eSendPorts\u003c/code\u003e are\n     special.\n\u003c/li\u003e\u003cli\u003e  \u003ccode\u003eReceivePorts\u003c/code\u003e can be \u003ccode\u003e\u003ccode\u003e\u003ca\u003eduplicate\u003c/a\u003e\u003c/code\u003ed\u003c/code\u003e,  which allows for considerably\n     more efficient publish-subscribe communications than supported by\n     Cloud Haskell at the present time.\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.Chan.Split",
        "fct-package": "split-channel",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Chan-Split.html",
        "fct-type": "module",
        "title": "Split"
      },
      "index": {
        "description": "This package provides an unbounded imperative queue that is supposed to be thread safe and asynchronous exception safe It is essentially the same communication mechanism as Chan except that each channel is split into separate sending and receiving ends called SendPort and ReceivePort respectively This has at least two advantages Program behavior can be more finely constrained via the type system Channels can have zero ReceivePorts associated with them Messages written to such channel disappear into the aether and can be garbage collected Note that ReceivePorts can be subsequently attached to such channel via listen and can be detached via garbage collection By contrast Chan couples SendPort and ReceivePort together in pair Thus keeping reference to SendPort implies that there is at least one reference to ReceivePort which means that messages cannot be garbage collected from an active channel if nobody is listening channel can have multiple ReceivePorts This results in publish subscribe pattern of communication every message will be delivered to every port Alternatively multiple threads can read from single port This results in push-pull pattern of communication similar to ZeroMQ every message will be delivered to exactly one thread Of course both can be used together to form hybrid patterns of communication channel can only have one SendPort However multiple threads can can safely write to single port allowing effects similar to multiple SendPorts Some of the tradeoffs of split-channel compared to Cloud Haskell Remote.Channel are split-channel is restricted to in-process communications only split-channel has no restriction on the type of values that may be communicated There is quasi-duality between the two approaches Cloud Haskell ReceivePorts are special whereas split-channel SendPorts are special ReceivePorts can be duplicate which allows for considerably more efficient publish-subscribe communications than supported by Cloud Haskell at the present time",
        "hierarchy": "Control Concurrent Chan Split",
        "module": "Control.Concurrent.Chan.Split",
        "name": "Split",
        "normalized": "",
        "package": "split-channel",
        "partial": "Split",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/split-channel/docs/Control-Concurrent-Chan-Split.html#t:ReceivePort",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eReceivePorts\u003c/code\u003e represent the other end of a channel.   A channel\n   can have many \u003ccode\u003eReceivePorts\u003c/code\u003e,  which all receive the same messages in\n   a publish/subscribe like manner.  A single \u003ccode\u003eReceivePort\u003c/code\u003e can be used\n   from multiple threads,  where every message will be delivered to a\n   single thread in a push/pull like manner.  Use \u003ccode\u003e\u003ca\u003ereceive\u003c/a\u003e\u003c/code\u003e to fetch\n   messages from the channel.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Split",
        "fct-package": "split-channel",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-Chan-Split-Implementation.html#ReceivePort",
        "fct-type": "data",
        "title": "ReceivePort"
      },
      "index": {
        "description": "ReceivePorts represent the other end of channel channel can have many ReceivePorts which all receive the same messages in publish subscribe like manner single ReceivePort can be used from multiple threads where every message will be delivered to single thread in push pull like manner Use receive to fetch messages from the channel",
        "hierarchy": "Control Concurrent Chan Split",
        "module": "Control.Concurrent.Chan.Split",
        "name": "ReceivePort",
        "normalized": "",
        "package": "split-channel",
        "partial": "Receive Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/split-channel/docs/Control-Concurrent-Chan-Split.html#t:SendPort",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eSendPorts\u003c/code\u003e represent one end of the channel.   There is only one\n   \u003ccode\u003eSendPort\u003c/code\u003e per channel,  though it can be used from multiple threads.\n   Messages can be sent to the channel using \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Split",
        "fct-package": "split-channel",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-Chan-Split-Implementation.html#SendPort",
        "fct-type": "data",
        "title": "SendPort"
      },
      "index": {
        "description": "SendPorts represent one end of the channel There is only one SendPort per channel though it can be used from multiple threads Messages can be sent to the channel using send",
        "hierarchy": "Control Concurrent Chan Split",
        "module": "Control.Concurrent.Chan.Split",
        "name": "SendPort",
        "normalized": "",
        "package": "split-channel",
        "partial": "Send Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/split-channel/docs/Control-Concurrent-Chan-Split.html#v:duplicate",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003eReceivePort\u003c/code\u003e attached to the same channel as another\n   \u003ccode\u003eReceivePort\u003c/code\u003e.  These two ports will receive the same messages.\n   Any messages in the channel that have not been consumed by the\n   existing port will also appear in the new port.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Split",
        "fct-package": "split-channel",
        "fct-signature": "ReceivePort a -\u003e IO (ReceivePort a)",
        "fct-source": "src/Control-Concurrent-Chan-Split-Implementation.html#duplicate",
        "fct-type": "function",
        "title": "duplicate"
      },
      "index": {
        "description": "Create new ReceivePort attached to the same channel as another ReceivePort These two ports will receive the same messages Any messages in the channel that have not been consumed by the existing port will also appear in the new port",
        "hierarchy": "Control Concurrent Chan Split",
        "module": "Control.Concurrent.Chan.Split",
        "name": "duplicate",
        "normalized": "ReceivePort a-\u003eIO(ReceivePort a)",
        "package": "split-channel",
        "partial": "",
        "signature": "ReceivePort a-\u003eIO(ReceivePort a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/split-channel/docs/Control-Concurrent-Chan-Split.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003eA right fold over a receiver.   \u003ccode\u003efold (:)\u003c/code\u003e is quite similar to\n   \u003ccode\u003egetChanContents\u003c/code\u003e.  The one difference is that that \u003ccode\u003efold\u003c/code\u003e does not\n   produce any observable side-effects on the \u003ccode\u003eReceivePort\u003c/code\u003e;  unlike\n   \u003ccode\u003egetChanContents\u003c/code\u003e any messages observed by \u003ccode\u003efold\u003c/code\u003e are not removed\n   from the port.\n\u003c/p\u003e\u003cp\u003eNote that the type of \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e implies that the folding function needs\n   to be sufficiently non-strict, otherwise the result cannot be productive.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Split",
        "fct-package": "split-channel",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e ReceivePort a -\u003e IO b",
        "fct-source": "src/Control-Concurrent-Chan-Split-Implementation.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "right fold over receiver fold is quite similar to getChanContents The one difference is that that fold does not produce any observable side-effects on the ReceivePort unlike getChanContents any messages observed by fold are not removed from the port Note that the type of fold implies that the folding function needs to be sufficiently non-strict otherwise the result cannot be productive",
        "hierarchy": "Control Concurrent Chan Split",
        "module": "Control.Concurrent.Chan.Split",
        "name": "fold",
        "normalized": "(a-\u003eb-\u003eb)-\u003eReceivePort a-\u003eIO b",
        "package": "split-channel",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eReceivePort a-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/split-channel/docs/Control-Concurrent-Chan-Split.html#v:listen",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003eReceivePort\u003c/code\u003e attached the same channel as a given\n   \u003ccode\u003eSendPort\u003c/code\u003e.  This \u003ccode\u003eReceivePort\u003c/code\u003e starts out empty, and remains so\n   until more messages are written to the \u003ccode\u003eSendPort\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Split",
        "fct-package": "split-channel",
        "fct-signature": "SendPort a -\u003e IO (ReceivePort a)",
        "fct-source": "src/Control-Concurrent-Chan-Split-Implementation.html#listen",
        "fct-type": "function",
        "title": "listen"
      },
      "index": {
        "description": "Create new ReceivePort attached the same channel as given SendPort This ReceivePort starts out empty and remains so until more messages are written to the SendPort",
        "hierarchy": "Control Concurrent Chan Split",
        "module": "Control.Concurrent.Chan.Split",
        "name": "listen",
        "normalized": "SendPort a-\u003eIO(ReceivePort a)",
        "package": "split-channel",
        "partial": "",
        "signature": "SendPort a-\u003eIO(ReceivePort a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/split-channel/docs/Control-Concurrent-Chan-Split.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new channel and a  \u003ccode\u003e(SendPort, ReceivePort)\u003c/code\u003e pair representing\n   the two sides of the channel.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Split",
        "fct-package": "split-channel",
        "fct-signature": "IO (SendPort a, ReceivePort a)",
        "fct-source": "src/Control-Concurrent-Chan-Split-Implementation.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "Creates new channel and SendPort ReceivePort pair representing the two sides of the channel",
        "hierarchy": "Control Concurrent Chan Split",
        "module": "Control.Concurrent.Chan.Split",
        "name": "new",
        "normalized": "IO(SendPort a,ReceivePort a)",
        "package": "split-channel",
        "partial": "",
        "signature": "IO(SendPort a,ReceivePort a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/split-channel/docs/Control-Concurrent-Chan-Split.html#v:newSendPort",
      "description": {
        "fct-descr": "\u003cp\u003eProduces a new channel that initially has zero \u003ccode\u003eReceivePorts\u003c/code\u003e.\n   Any messages written to this channel before a reader is \u003ccode\u003e\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003eing\u003c/code\u003e\n   will be eligible for garbage collection.   Note that one can\n   one can implement \u003ccode\u003e\u003ca\u003enewSendPort\u003c/a\u003e\u003c/code\u003e in terms of \u003ccode\u003e\u003ca\u003enew\u003c/a\u003e\u003c/code\u003e by throwing away the\n   \u003ccode\u003e\u003ca\u003eReceivePort\u003c/a\u003e\u003c/code\u003e and letting it be garbage collected,   and that one can\n   implement \u003ccode\u003e\u003ca\u003enew\u003c/a\u003e\u003c/code\u003e in terms of \u003ccode\u003e\u003ca\u003enewSendPort\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Split",
        "fct-package": "split-channel",
        "fct-signature": "IO (SendPort a)",
        "fct-source": "src/Control-Concurrent-Chan-Split-Implementation.html#newSendPort",
        "fct-type": "function",
        "title": "newSendPort"
      },
      "index": {
        "description": "Produces new channel that initially has zero ReceivePorts Any messages written to this channel before reader is listen ing will be eligible for garbage collection Note that one can one can implement newSendPort in terms of new by throwing away the ReceivePort and letting it be garbage collected and that one can implement new in terms of newSendPort and listen",
        "hierarchy": "Control Concurrent Chan Split",
        "module": "Control.Concurrent.Chan.Split",
        "name": "newSendPort",
        "normalized": "",
        "package": "split-channel",
        "partial": "Send Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/split-channel/docs/Control-Concurrent-Chan-Split.html#v:receive",
      "description": {
        "fct-descr": "\u003cp\u003eFetch a message from a channel.  If no message is available,  it blocks\n   until one is.  Can be used in conjunction with \u003ccode\u003eSystem.Timeout\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Split",
        "fct-package": "split-channel",
        "fct-signature": "ReceivePort a -\u003e IO a",
        "fct-source": "src/Control-Concurrent-Chan-Split-Implementation.html#receive",
        "fct-type": "function",
        "title": "receive"
      },
      "index": {
        "description": "Fetch message from channel If no message is available it blocks until one is Can be used in conjunction with System.Timeout",
        "hierarchy": "Control Concurrent Chan Split",
        "module": "Control.Concurrent.Chan.Split",
        "name": "receive",
        "normalized": "ReceivePort a-\u003eIO a",
        "package": "split-channel",
        "partial": "",
        "signature": "ReceivePort a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/split-channel/docs/Control-Concurrent-Chan-Split.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eSend a message to a channel.   This is asynchronous and does not block.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Split",
        "fct-package": "split-channel",
        "fct-signature": "SendPort a -\u003e a -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Chan-Split-Implementation.html#send",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "Send message to channel This is asynchronous and does not block",
        "hierarchy": "Control Concurrent Chan Split",
        "module": "Control.Concurrent.Chan.Split",
        "name": "send",
        "normalized": "SendPort a-\u003ea-\u003eIO()",
        "package": "split-channel",
        "partial": "",
        "signature": "SendPort a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/split-channel/docs/Control-Concurrent-Chan-Split.html#v:sendMany",
      "description": {
        "fct-descr": "\u003cp\u003eAtomically send many messages at once.   Note that this function\n   forces the spine of the list beforehand to minimize the critical section,\n   which also helps prevent exceptions at inopportune times.  Trying to send\n   an infinite list will never send anything,  though it will allocate and\n   retain a lot of memory trying to do so.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Split",
        "fct-package": "split-channel",
        "fct-signature": "SendPort a -\u003e [a] -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Chan-Split-Implementation.html#sendMany",
        "fct-type": "function",
        "title": "sendMany"
      },
      "index": {
        "description": "Atomically send many messages at once Note that this function forces the spine of the list beforehand to minimize the critical section which also helps prevent exceptions at inopportune times Trying to send an infinite list will never send anything though it will allocate and retain lot of memory trying to do so",
        "hierarchy": "Control Concurrent Chan Split",
        "module": "Control.Concurrent.Chan.Split",
        "name": "sendMany",
        "normalized": "SendPort a-\u003e[a]-\u003eIO()",
        "package": "split-channel",
        "partial": "Many",
        "signature": "SendPort a-\u003e[a]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/split-channel/docs/Control-Concurrent-Chan-Split.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003eThis function splits an existing channel in two;  associating\n   a new receive port with the old send port,  and a new send\n   port with the existing receive ports.   The new receive port\n   starts out empty,  while the existing receive ports retain\n   any unprocessed messages.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"split.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Split",
        "fct-package": "split-channel",
        "fct-signature": "SendPort a -\u003e IO (ReceivePort a, SendPort a)",
        "fct-source": "src/Control-Concurrent-Chan-Split-Implementation.html#split",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "This function splits an existing channel in two associating new receive port with the old send port and new send port with the existing receive ports The new receive port starts out empty while the existing receive ports retain any unprocessed messages",
        "hierarchy": "Control Concurrent Chan Split",
        "module": "Control.Concurrent.Chan.Split",
        "name": "split",
        "normalized": "SendPort a-\u003eIO(ReceivePort a,SendPort a)",
        "package": "split-channel",
        "partial": "",
        "signature": "SendPort a-\u003eIO(ReceivePort a,SendPort a)"
      }
    }
  }
]