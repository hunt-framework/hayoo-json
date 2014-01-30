[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e is a drop-in replacement for \u003ccode\u003e\u003ca\u003eTQueue\u003c/a\u003e\u003c/code\u003e in \u003ca\u003eControl.Concurrent.STM\u003c/a\u003e, except that\n it also supports selective out of order message reception: that is, it allows the caller\n to dequeue the first message among the messages available in the queue that matches\n a supplied test function, or block if no such match is possible with the messages currently \n in the queue.\n\u003c/p\u003e\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e implements the same basic \u003ccode\u003eread \u003cem\u003e write \u003c/em\u003e peek\u003c/code\u003e group of functions as a \u003ccode\u003e\u003ca\u003eTQueue\u003c/a\u003e\u003c/code\u003e,\n it offers a superset of \u003ccode\u003e\u003ca\u003eTQueue\u003c/a\u003e\u003c/code\u003e functionality by extending it with the \u003ccode\u003efind \u003cem\u003e select \u003c/em\u003e handle\u003c/code\u003e\n groups of functions.  Thus, applications can safely use \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003ees in place of \u003ccode\u003e\u003ca\u003eTQueue\u003c/a\u003e\u003c/code\u003es,\n but choose when to take the slight extra overhead of \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e functionality.\n\u003c/p\u003e\u003cp\u003eBecause message selection in worst case requires fully traversing all messages in the queue,\n application designers are encouraged to understand this aspect when choosing to use \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003ees\n in their designs, or when using the additional features of \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003ees beyond that of \u003ccode\u003e\u003ca\u003eTQueue\u003c/a\u003e\u003c/code\u003es.\n Dispatching messages with a \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e is analogous to using a \u003ccode\u003ecase\u003c/code\u003e expression (O(n)) to dispatch\n messages to a handler function, except that new cases can be added or removed at any time.  In essence,\n one can regard \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003ees as a useful means of creating an extensible message dispatch function.\n If, however, if O(1) message dispatching time is necessary or desired, (using hashmaps, for example)\n then \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003ees are not the correct choice.\n\u003c/p\u003e\u003cp\u003eDespite this extra cost, \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003ees offer advantages to designers:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Implementation of Erlang-style message reception: as messages can be received\n out of order, a mailbox is analogous to a process input queue in Erlang.\n\u003c/li\u003e\u003cli\u003e Better composability: if applications must only dequeue messages in the order in which\n they are queued (which is sufficient for many applications), then the main message\n pump requires modification each time a new class of message must be handled. With\n selective message reception, multiple concurrent message pumps are possible (with\n a small performance impact), each processing the messages they expect and with no\n need to be aware of other message pumps performing their own work on the same mailbox.\n\u003c/li\u003e\u003cli\u003e Mixing synchronous and asynchronous programming styles: if restricted to in order message\n delivery, an application must carefully construct all logic to avoid blocking its central message\n loop. By supporting out of message delivery and multiple selective recipients, it becomes possible\n to combine synchronous and asynchronous programming styles using the same \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eBasic framework for \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e brazenly copied from \u003ca\u003eControl.Concurrent.STM.TQueue\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "courier",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Mailbox.html",
        "fct-type": "module",
        "title": "Mailbox"
      },
      "index": {
        "description": "Mailbox is drop-in replacement for TQueue in Control.Concurrent.STM except that it also supports selective out of order message reception that is it allows the caller to dequeue the first message among the messages available in the queue that matches supplied test function or block if no such match is possible with the messages currently in the queue As Mailbox implements the same basic read write peek group of functions as TQueue it offers superset of TQueue functionality by extending it with the find select handle groups of functions Thus applications can safely use Mailbox es in place of TQueue but choose when to take the slight extra overhead of Mailbox functionality Because message selection in worst case requires fully traversing all messages in the queue application designers are encouraged to understand this aspect when choosing to use Mailbox es in their designs or when using the additional features of Mailbox es beyond that of TQueue Dispatching messages with Mailbox is analogous to using case expression to dispatch messages to handler function except that new cases can be added or removed at any time In essence one can regard Mailbox es as useful means of creating an extensible message dispatch function If however if message dispatching time is necessary or desired using hashmaps for example then Mailbox es are not the correct choice Despite this extra cost Mailbox es offer advantages to designers Implementation of Erlang-style message reception as messages can be received out of order mailbox is analogous to process input queue in Erlang Better composability if applications must only dequeue messages in the order in which they are queued which is sufficient for many applications then the main message pump requires modification each time new class of message must be handled With selective message reception multiple concurrent message pumps are possible with small performance impact each processing the messages they expect and with no need to be aware of other message pumps performing their own work on the same mailbox Mixing synchronous and asynchronous programming styles if restricted to in order message delivery an application must carefully construct all logic to avoid blocking its central message loop By supporting out of message delivery and multiple selective recipients it becomes possible to combine synchronous and asynchronous programming styles using the same Mailbox Basic framework for Mailbox brazenly copied from Control.Concurrent.STM.TQueue",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "Mailbox",
        "normalized": "",
        "package": "courier",
        "partial": "Mailbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#t:Mailbox",
      "description": {
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "courier",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-Mailbox.html#Mailbox",
        "fct-type": "data",
        "title": "Mailbox"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "Mailbox",
        "normalized": "",
        "package": "courier",
        "partial": "Mailbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#v:findMailbox",
      "description": {
        "fct-descr": "\u003cp\u003eFind the next value from the \u003ccode\u003eMailbox\u003c/code\u003e matching \u003ccode\u003etestFn\u003c/code\u003e without removing it,\nretrying if the channel is empty.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "courier",
        "fct-signature": "Mailbox m -\u003e (m -\u003e Maybe v) -\u003e STM v",
        "fct-source": "src/Control-Concurrent-Mailbox.html#findMailbox",
        "fct-type": "function",
        "title": "findMailbox"
      },
      "index": {
        "description": "Find the next value from the Mailbox matching testFn without removing it retrying if the channel is empty",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "findMailbox",
        "normalized": "Mailbox a-\u003e(a-\u003eMaybe b)-\u003eSTM b",
        "package": "courier",
        "partial": "Mailbox",
        "signature": "Mailbox m-\u003e(m-\u003eMaybe v)-\u003eSTM v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#v:handleMailbox",
      "description": {
        "fct-descr": "\u003cp\u003eWait until there is a message in the mailbox matching the supplied test\nfunction (using \u003ccode\u003e\u003ca\u003eselectMailbox\u003c/a\u003e\u003c/code\u003e), then when a message is found, handle\nit in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad with the supplied function.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "courier",
        "fct-signature": "Mailbox m -\u003e (m -\u003e Maybe v) -\u003e (v -\u003e IO r) -\u003e IO r",
        "fct-source": "src/Control-Concurrent-Mailbox.html#handleMailbox",
        "fct-type": "function",
        "title": "handleMailbox"
      },
      "index": {
        "description": "Wait until there is message in the mailbox matching the supplied test function using selectMailbox then when message is found handle it in the IO monad with the supplied function",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "handleMailbox",
        "normalized": "Mailbox a-\u003e(a-\u003eMaybe b)-\u003e(b-\u003eIO c)-\u003eIO c",
        "package": "courier",
        "partial": "Mailbox",
        "signature": "Mailbox m-\u003e(m-\u003eMaybe v)-\u003e(v-\u003eIO r)-\u003eIO r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#v:isEmptyMailbox",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the supplied \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "courier",
        "fct-signature": "Mailbox m -\u003e STM Bool",
        "fct-source": "src/Control-Concurrent-Mailbox.html#isEmptyMailbox",
        "fct-type": "function",
        "title": "isEmptyMailbox"
      },
      "index": {
        "description": "Returns True if the supplied Mailbox is empty",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "isEmptyMailbox",
        "normalized": "Mailbox a-\u003eSTM Bool",
        "package": "courier",
        "partial": "Empty Mailbox",
        "signature": "Mailbox m-\u003eSTM Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#v:newMailbox",
      "description": {
        "fct-descr": "\u003cp\u003eBuild and returns a new instance of \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "courier",
        "fct-signature": "STM (Mailbox m)",
        "fct-source": "src/Control-Concurrent-Mailbox.html#newMailbox",
        "fct-type": "function",
        "title": "newMailbox"
      },
      "index": {
        "description": "Build and returns new instance of Mailbox",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "newMailbox",
        "normalized": "",
        "package": "courier",
        "partial": "Mailbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#v:newMailboxIO",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eIO\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003enewMailbox\u003c/a\u003e\u003c/code\u003e.  This is useful for creating top-level\n\u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e, because using\n\u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e inside \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e isn't\npossible.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "courier",
        "fct-signature": "IO (Mailbox m)",
        "fct-source": "src/Control-Concurrent-Mailbox.html#newMailboxIO",
        "fct-type": "function",
        "title": "newMailboxIO"
      },
      "index": {
        "description": "IO version of newMailbox This is useful for creating top-level Mailbox using unsafePerformIO because using atomically inside unsafePerformIO isn possible",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "newMailboxIO",
        "normalized": "",
        "package": "courier",
        "partial": "Mailbox IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#v:peekMailbox",
      "description": {
        "fct-descr": "\u003cp\u003eGet the next value from the \u003ccode\u003eMailbox\u003c/code\u003e without removing it,\nretrying if the channel is empty.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "courier",
        "fct-signature": "Mailbox m -\u003e STM m",
        "fct-source": "src/Control-Concurrent-Mailbox.html#peekMailbox",
        "fct-type": "function",
        "title": "peekMailbox"
      },
      "index": {
        "description": "Get the next value from the Mailbox without removing it retrying if the channel is empty",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "peekMailbox",
        "normalized": "Mailbox a-\u003eSTM a",
        "package": "courier",
        "partial": "Mailbox",
        "signature": "Mailbox m-\u003eSTM m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#v:readMailbox",
      "description": {
        "fct-descr": "\u003cp\u003eRead the next value from the \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "courier",
        "fct-signature": "Mailbox m -\u003e STM m",
        "fct-source": "src/Control-Concurrent-Mailbox.html#readMailbox",
        "fct-type": "function",
        "title": "readMailbox"
      },
      "index": {
        "description": "Read the next value from the Mailbox",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "readMailbox",
        "normalized": "Mailbox a-\u003eSTM a",
        "package": "courier",
        "partial": "Mailbox",
        "signature": "Mailbox m-\u003eSTM m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#v:selectMailbox",
      "description": {
        "fct-descr": "\u003cp\u003eFind the next message in the mailbox that matches the supplied test\nfunction or block until there is a message that does. When a message\nmatches (e.g., test functions returns \u003ccode\u003eJust v\u003c/code\u003e), return it.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "courier",
        "fct-signature": "Mailbox m -\u003e (m -\u003e Maybe v) -\u003e STM v",
        "fct-source": "src/Control-Concurrent-Mailbox.html#selectMailbox",
        "fct-type": "function",
        "title": "selectMailbox"
      },
      "index": {
        "description": "Find the next message in the mailbox that matches the supplied test function or block until there is message that does When message matches e.g test functions returns Just return it",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "selectMailbox",
        "normalized": "Mailbox a-\u003e(a-\u003eMaybe b)-\u003eSTM b",
        "package": "courier",
        "partial": "Mailbox",
        "signature": "Mailbox m-\u003e(m-\u003eMaybe v)-\u003eSTM v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#v:tryFindMailbox",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003efindMailbox\u003c/a\u003e\u003c/code\u003e which does not retry. Instead it\nreturns \u003ccode\u003eNothing\u003c/code\u003e if no value is available.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "courier",
        "fct-signature": "Mailbox m -\u003e (m -\u003e Maybe v) -\u003e STM (Maybe v)",
        "fct-source": "src/Control-Concurrent-Mailbox.html#tryFindMailbox",
        "fct-type": "function",
        "title": "tryFindMailbox"
      },
      "index": {
        "description": "version of findMailbox which does not retry Instead it returns Nothing if no value is available",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "tryFindMailbox",
        "normalized": "Mailbox a-\u003e(a-\u003eMaybe b)-\u003eSTM(Maybe b)",
        "package": "courier",
        "partial": "Find Mailbox",
        "signature": "Mailbox m-\u003e(m-\u003eMaybe v)-\u003eSTM(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#v:tryPeekMailbox",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003epeekMailbox\u003c/a\u003e\u003c/code\u003e which does not retry. Instead it\nreturns \u003ccode\u003eNothing\u003c/code\u003e if no value is available.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "courier",
        "fct-signature": "Mailbox m -\u003e STM (Maybe m)",
        "fct-source": "src/Control-Concurrent-Mailbox.html#tryPeekMailbox",
        "fct-type": "function",
        "title": "tryPeekMailbox"
      },
      "index": {
        "description": "version of peekMailbox which does not retry Instead it returns Nothing if no value is available",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "tryPeekMailbox",
        "normalized": "Mailbox a-\u003eSTM(Maybe a)",
        "package": "courier",
        "partial": "Peek Mailbox",
        "signature": "Mailbox m-\u003eSTM(Maybe m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#v:tryReadMailbox",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ereadMailbox\u003c/a\u003e\u003c/code\u003e which does not retry. Instead it\nreturns \u003ccode\u003eNothing\u003c/code\u003e if no value is available.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "courier",
        "fct-signature": "Mailbox m -\u003e STM (Maybe m)",
        "fct-source": "src/Control-Concurrent-Mailbox.html#tryReadMailbox",
        "fct-type": "function",
        "title": "tryReadMailbox"
      },
      "index": {
        "description": "version of readMailbox which does not retry Instead it returns Nothing if no value is available",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "tryReadMailbox",
        "normalized": "Mailbox a-\u003eSTM(Maybe a)",
        "package": "courier",
        "partial": "Read Mailbox",
        "signature": "Mailbox m-\u003eSTM(Maybe m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#v:trySelectMailbox",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eselectMailbox\u003c/a\u003e\u003c/code\u003e which does not retry. Instead it\nreturns \u003ccode\u003eNothing\u003c/code\u003e if no value is available.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "courier",
        "fct-signature": "Mailbox m -\u003e (m -\u003e Maybe v) -\u003e STM (Maybe v)",
        "fct-source": "src/Control-Concurrent-Mailbox.html#trySelectMailbox",
        "fct-type": "function",
        "title": "trySelectMailbox"
      },
      "index": {
        "description": "version of selectMailbox which does not retry Instead it returns Nothing if no value is available",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "trySelectMailbox",
        "normalized": "Mailbox a-\u003e(a-\u003eMaybe b)-\u003eSTM(Maybe b)",
        "package": "courier",
        "partial": "Select Mailbox",
        "signature": "Mailbox m-\u003e(m-\u003eMaybe v)-\u003eSTM(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#v:unGetMailbox",
      "description": {
        "fct-descr": "\u003cp\u003ePut a data item back onto a channel, where it will be the next item read.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "courier",
        "fct-signature": "Mailbox m -\u003e m -\u003e STM ()",
        "fct-source": "src/Control-Concurrent-Mailbox.html#unGetMailbox",
        "fct-type": "function",
        "title": "unGetMailbox"
      },
      "index": {
        "description": "Put data item back onto channel where it will be the next item read",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "unGetMailbox",
        "normalized": "Mailbox a-\u003ea-\u003eSTM()",
        "package": "courier",
        "partial": "Get Mailbox",
        "signature": "Mailbox m-\u003em-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#v:writeMailbox",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a value to a \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "courier",
        "fct-signature": "Mailbox m -\u003e m -\u003e STM ()",
        "fct-source": "src/Control-Concurrent-Mailbox.html#writeMailbox",
        "fct-type": "function",
        "title": "writeMailbox"
      },
      "index": {
        "description": "Write value to Mailbox",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "writeMailbox",
        "normalized": "Mailbox a-\u003ea-\u003eSTM()",
        "package": "courier",
        "partial": "Mailbox",
        "signature": "Mailbox m-\u003em-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003es are a generalized abstraction for communication between parts of a program,\n whether on the same physical host or distributed over a network. \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003es are intended\n to simplify the development of network-centric applications by providing a small transport-independent\n message-passing interface, and application writers can independently alter their implementation\n by enabling their \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003es with different \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003es without modifying the logic of their\n application that sends / receives \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Endpoints",
        "fct-package": "courier",
        "fct-signature": "module",
        "fct-source": "src/Network-Endpoints.html",
        "fct-type": "module",
        "title": "Endpoints"
      },
      "index": {
        "description": "Endpoint are generalized abstraction for communication between parts of program whether on the same physical host or distributed over network Endpoint are intended to simplify the development of network-centric applications by providing small transport-independent message-passing interface and application writers can independently alter their implementation by enabling their Endpoint with different Transport without modifying the logic of their application that sends receives Message",
        "hierarchy": "Network Endpoints",
        "module": "Network.Endpoints",
        "name": "Endpoints",
        "normalized": "",
        "package": "courier",
        "partial": "Endpoints",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#t:Endpoint",
      "description": {
        "fct-descr": "\u003cp\u003eEndpoints are a locus of communication, used for sending and receive messages.\n\u003c/p\u003e",
        "fct-module": "Network.Endpoints",
        "fct-package": "courier",
        "fct-signature": "data",
        "fct-source": "src/Network-Endpoints.html#Endpoint",
        "fct-type": "data",
        "title": "Endpoint"
      },
      "index": {
        "description": "Endpoints are locus of communication used for sending and receive messages",
        "hierarchy": "Network Endpoints",
        "module": "Network.Endpoints",
        "name": "Endpoint",
        "normalized": "",
        "package": "courier",
        "partial": "Endpoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:bindEndpoint",
      "description": {
        "fct-descr": "\u003cp\u003eBinding an \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e prepares the \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e to receive\nmessages sent to the bound name.  Upon success, the result will be \u003ccode\u003eRight ()\u003c/code\u003e, but\nif failed, \u003ccode\u003eLeft text-of-error-message\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Endpoints",
        "fct-package": "courier",
        "fct-signature": "Endpoint -\u003e Name -\u003e IO (Either String ())",
        "fct-source": "src/Network-Endpoints.html#bindEndpoint",
        "fct-type": "function",
        "title": "bindEndpoint"
      },
      "index": {
        "description": "Binding an Endpoint to Name prepares the Endpoint to receive messages sent to the bound name Upon success the result will be Right but if failed Left text-of-error-message",
        "hierarchy": "Network Endpoints",
        "module": "Network.Endpoints",
        "name": "bindEndpoint",
        "normalized": "Endpoint-\u003eName-\u003eIO(Either String())",
        "package": "courier",
        "partial": "Endpoint",
        "signature": "Endpoint-\u003eName-\u003eIO(Either String())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:bindEndpoint_",
      "description": {
        "fct-descr": "\u003cp\u003eInvoke \u003ccode\u003e\u003ca\u003ebindEndpoint\u003c/a\u003e\u003c/code\u003e, but ignore any returned result (success or failure).\n\u003c/p\u003e",
        "fct-module": "Network.Endpoints",
        "fct-package": "courier",
        "fct-signature": "Endpoint -\u003e Name -\u003e IO ()",
        "fct-source": "src/Network-Endpoints.html#bindEndpoint_",
        "fct-type": "function",
        "title": "bindEndpoint_"
      },
      "index": {
        "description": "Invoke bindEndpoint but ignore any returned result success or failure",
        "hierarchy": "Network Endpoints",
        "module": "Network.Endpoints",
        "name": "bindEndpoint_",
        "normalized": "Endpoint-\u003eName-\u003eIO()",
        "package": "courier",
        "partial": "Endpoint",
        "signature": "Endpoint-\u003eName-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:broadcastMessage",
      "description": {
        "fct-descr": "\u003cp\u003eHelper for sending a single \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e to several \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.Endpoints",
        "fct-package": "courier",
        "fct-signature": "Endpoint -\u003e [Name] -\u003e Message -\u003e IO [Either String ()]",
        "fct-source": "src/Network-Endpoints.html#broadcastMessage",
        "fct-type": "function",
        "title": "broadcastMessage"
      },
      "index": {
        "description": "Helper for sending single Message to several Endpoint",
        "hierarchy": "Network Endpoints",
        "module": "Network.Endpoints",
        "name": "broadcastMessage",
        "normalized": "Endpoint-\u003e[Name]-\u003eMessage-\u003eIO[Either String()]",
        "package": "courier",
        "partial": "Message",
        "signature": "Endpoint-\u003e[Name]-\u003eMessage-\u003eIO[Either String()]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:broadcastMessage_",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003ebroadcastMessage\u003c/a\u003e\u003c/code\u003e that ignores the results of sending.\n\u003c/p\u003e",
        "fct-module": "Network.Endpoints",
        "fct-package": "courier",
        "fct-signature": "Endpoint -\u003e [Name] -\u003e Message -\u003e IO ()",
        "fct-source": "src/Network-Endpoints.html#broadcastMessage_",
        "fct-type": "function",
        "title": "broadcastMessage_"
      },
      "index": {
        "description": "Variant of broadcastMessage that ignores the results of sending",
        "hierarchy": "Network Endpoints",
        "module": "Network.Endpoints",
        "name": "broadcastMessage_",
        "normalized": "Endpoint-\u003e[Name]-\u003eMessage-\u003eIO()",
        "package": "courier",
        "partial": "Message",
        "signature": "Endpoint-\u003e[Name]-\u003eMessage-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:dispatchMessage",
      "description": {
        "fct-descr": "\u003cp\u003eDispatch the next available message in the \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e matching\nthe supplied test function, or blocking until one is available. Once a\nmatching message is found, handle the message with the supplied handler\nand return any result obtained. This function differs from \u003ccode\u003e\u003ca\u003ereceiveMessage\u003c/a\u003e\u003c/code\u003e\nin that it supports out of order message reception.\n\u003c/p\u003e",
        "fct-module": "Network.Endpoints",
        "fct-package": "courier",
        "fct-signature": "Endpoint -\u003e (Message -\u003e Maybe v) -\u003e (v -\u003e IO r) -\u003e IO r",
        "fct-source": "src/Network-Endpoints.html#dispatchMessage",
        "fct-type": "function",
        "title": "dispatchMessage"
      },
      "index": {
        "description": "Dispatch the next available message in the Endpoint Mailbox matching the supplied test function or blocking until one is available Once matching message is found handle the message with the supplied handler and return any result obtained This function differs from receiveMessage in that it supports out of order message reception",
        "hierarchy": "Network Endpoints",
        "module": "Network.Endpoints",
        "name": "dispatchMessage",
        "normalized": "Endpoint-\u003e(Message-\u003eMaybe a)-\u003e(a-\u003eIO b)-\u003eIO b",
        "package": "courier",
        "partial": "Message",
        "signature": "Endpoint-\u003e(Message-\u003eMaybe v)-\u003e(v-\u003eIO r)-\u003eIO r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:dispatchMessageTimeout",
      "description": {
        "fct-module": "Network.Endpoints",
        "fct-package": "courier",
        "fct-signature": "Endpoint -\u003e Int -\u003e (Message -\u003e Maybe v) -\u003e (v -\u003e IO r) -\u003e IO (Maybe r)",
        "fct-source": "src/Network-Endpoints.html#dispatchMessageTimeout",
        "fct-type": "function",
        "title": "dispatchMessageTimeout"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Endpoints",
        "module": "Network.Endpoints",
        "name": "dispatchMessageTimeout",
        "normalized": "Endpoint-\u003eInt-\u003e(Message-\u003eMaybe a)-\u003e(a-\u003eIO b)-\u003eIO(Maybe b)",
        "package": "courier",
        "partial": "Message Timeout",
        "signature": "Endpoint-\u003eInt-\u003e(Message-\u003eMaybe v)-\u003e(v-\u003eIO r)-\u003eIO(Maybe r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:newEndpoint",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e using the provided transports.\n\u003c/p\u003e",
        "fct-module": "Network.Endpoints",
        "fct-package": "courier",
        "fct-signature": "[Transport] -\u003e IO Endpoint",
        "fct-source": "src/Network-Endpoints.html#newEndpoint",
        "fct-type": "function",
        "title": "newEndpoint"
      },
      "index": {
        "description": "Create new Endpoint using the provided transports",
        "hierarchy": "Network Endpoints",
        "module": "Network.Endpoints",
        "name": "newEndpoint",
        "normalized": "[Transport]-\u003eIO Endpoint",
        "package": "courier",
        "partial": "Endpoint",
        "signature": "[Transport]-\u003eIO Endpoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:postMessage",
      "description": {
        "fct-descr": "\u003cp\u003ePosts a \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e directly to an \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e, without use of a transport. This\nmay be useful for applications that prefer to use the \u003ccode\u003eEndpoint'\u003c/code\u003es \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e\nas a general queue of ordered messages.\n\u003c/p\u003e",
        "fct-module": "Network.Endpoints",
        "fct-package": "courier",
        "fct-signature": "Endpoint -\u003e Message -\u003e IO ()",
        "fct-source": "src/Network-Endpoints.html#postMessage",
        "fct-type": "function",
        "title": "postMessage"
      },
      "index": {
        "description": "Posts Message directly to an Endpoint without use of transport This may be useful for applications that prefer to use the Endpoint Mailbox as general queue of ordered messages",
        "hierarchy": "Network Endpoints",
        "module": "Network.Endpoints",
        "name": "postMessage",
        "normalized": "Endpoint-\u003eMessage-\u003eIO()",
        "package": "courier",
        "partial": "Message",
        "signature": "Endpoint-\u003eMessage-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:receiveMessage",
      "description": {
        "fct-descr": "\u003cp\u003eReceive the next \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e sent to the \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e, blocking until a message is available.\n\u003c/p\u003e",
        "fct-module": "Network.Endpoints",
        "fct-package": "courier",
        "fct-signature": "Endpoint -\u003e IO Message",
        "fct-source": "src/Network-Endpoints.html#receiveMessage",
        "fct-type": "function",
        "title": "receiveMessage"
      },
      "index": {
        "description": "Receive the next Message sent to the Endpoint blocking until message is available",
        "hierarchy": "Network Endpoints",
        "module": "Network.Endpoints",
        "name": "receiveMessage",
        "normalized": "Endpoint-\u003eIO Message",
        "package": "courier",
        "partial": "Message",
        "signature": "Endpoint-\u003eIO Message"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:receiveMessageTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eWait for a message to be received within the timeout, blocking until either a message\nis available or the timeout has occurred.  If a message was available, returns \u003ccode\u003eJust message\u003c/code\u003e,\nbut returns \u003ccode\u003eNothing\u003c/code\u003e if no message available before the timeout occurred.\n\u003c/p\u003e",
        "fct-module": "Network.Endpoints",
        "fct-package": "courier",
        "fct-signature": "Endpoint -\u003e Int -\u003e IO (Maybe Message)",
        "fct-source": "src/Network-Endpoints.html#receiveMessageTimeout",
        "fct-type": "function",
        "title": "receiveMessageTimeout"
      },
      "index": {
        "description": "Wait for message to be received within the timeout blocking until either message is available or the timeout has occurred If message was available returns Just message but returns Nothing if no message available before the timeout occurred",
        "hierarchy": "Network Endpoints",
        "module": "Network.Endpoints",
        "name": "receiveMessageTimeout",
        "normalized": "Endpoint-\u003eInt-\u003eIO(Maybe Message)",
        "package": "courier",
        "partial": "Message Timeout",
        "signature": "Endpoint-\u003eInt-\u003eIO(Maybe Message)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:selectMessage",
      "description": {
        "fct-descr": "\u003cp\u003eSelect the next available message in the \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e matching\nthe supplied test function, or blocking until one is available. This function\ndiffers from \u003ccode\u003e\u003ca\u003ereceiveMessage\u003c/a\u003e\u003c/code\u003e in that it supports out of order message reception.\n\u003c/p\u003e",
        "fct-module": "Network.Endpoints",
        "fct-package": "courier",
        "fct-signature": "Endpoint -\u003e (Message -\u003e Maybe v) -\u003e IO v",
        "fct-source": "src/Network-Endpoints.html#selectMessage",
        "fct-type": "function",
        "title": "selectMessage"
      },
      "index": {
        "description": "Select the next available message in the Endpoint Mailbox matching the supplied test function or blocking until one is available This function differs from receiveMessage in that it supports out of order message reception",
        "hierarchy": "Network Endpoints",
        "module": "Network.Endpoints",
        "name": "selectMessage",
        "normalized": "Endpoint-\u003e(Message-\u003eMaybe a)-\u003eIO a",
        "package": "courier",
        "partial": "Message",
        "signature": "Endpoint-\u003e(Message-\u003eMaybe v)-\u003eIO v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:selectMessageTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eWait for a message to be selected within the timeout, blocking until either a message\nis available or the timeout has occurred.  If a message was available, returns \u003ccode\u003eJust message\u003c/code\u003e,\nbut returns \u003ccode\u003eNothing\u003c/code\u003e if no message available before the timeout occurred. Like\n\u003ccode\u003e\u003ca\u003eselectMessage\u003c/a\u003e\u003c/code\u003e, this function enables out of order message reception.\n\u003c/p\u003e",
        "fct-module": "Network.Endpoints",
        "fct-package": "courier",
        "fct-signature": "Endpoint -\u003e Int -\u003e (Message -\u003e Maybe v) -\u003e IO (Maybe v)",
        "fct-source": "src/Network-Endpoints.html#selectMessageTimeout",
        "fct-type": "function",
        "title": "selectMessageTimeout"
      },
      "index": {
        "description": "Wait for message to be selected within the timeout blocking until either message is available or the timeout has occurred If message was available returns Just message but returns Nothing if no message available before the timeout occurred Like selectMessage this function enables out of order message reception",
        "hierarchy": "Network Endpoints",
        "module": "Network.Endpoints",
        "name": "selectMessageTimeout",
        "normalized": "Endpoint-\u003eInt-\u003e(Message-\u003eMaybe a)-\u003eIO(Maybe a)",
        "package": "courier",
        "partial": "Message Timeout",
        "signature": "Endpoint-\u003eInt-\u003e(Message-\u003eMaybe v)-\u003eIO(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:sendMessage",
      "description": {
        "fct-descr": "\u003cp\u003eSend a \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e to specific \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e via the indicated \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e. While a successful\nresponse (indicated by returning \u003ccode\u003eRight ()\u003c/code\u003e) indicates that there was no error initiating\ntransport of the message, success does not guarantee that an \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e received the message.\nFailure initiating transport is indicated by returning \u003ccode\u003eLeft text-of-error-message\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Endpoints",
        "fct-package": "courier",
        "fct-signature": "Endpoint -\u003e Name -\u003e Message -\u003e IO (Either String ())",
        "fct-source": "src/Network-Endpoints.html#sendMessage",
        "fct-type": "function",
        "title": "sendMessage"
      },
      "index": {
        "description": "Send Message to specific Name via the indicated Endpoint While successful response indicated by returning Right indicates that there was no error initiating transport of the message success does not guarantee that an Endpoint received the message Failure initiating transport is indicated by returning Left text-of-error-message",
        "hierarchy": "Network Endpoints",
        "module": "Network.Endpoints",
        "name": "sendMessage",
        "normalized": "Endpoint-\u003eName-\u003eMessage-\u003eIO(Either String())",
        "package": "courier",
        "partial": "Message",
        "signature": "Endpoint-\u003eName-\u003eMessage-\u003eIO(Either String())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:sendMessage_",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003esendMessage\u003c/a\u003e\u003c/code\u003e for use when the return value can be ignored.\n\u003c/p\u003e",
        "fct-module": "Network.Endpoints",
        "fct-package": "courier",
        "fct-signature": "Endpoint -\u003e Name -\u003e Message -\u003e IO ()",
        "fct-source": "src/Network-Endpoints.html#sendMessage_",
        "fct-type": "function",
        "title": "sendMessage_"
      },
      "index": {
        "description": "variant of sendMessage for use when the return value can be ignored",
        "hierarchy": "Network Endpoints",
        "module": "Network.Endpoints",
        "name": "sendMessage_",
        "normalized": "Endpoint-\u003eName-\u003eMessage-\u003eIO()",
        "package": "courier",
        "partial": "Message",
        "signature": "Endpoint-\u003eName-\u003eMessage-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:unbindEndpoint",
      "description": {
        "fct-descr": "\u003cp\u003eUnbind an \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e, after which the \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e will eventually not \nreceive messages sent to that \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e. Note that there is no guarantee that after \u003ccode\u003eUnbind\u003c/code\u003e\nsucceeds that additional messages to that \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e will not be delivered: the only guarantee\nis that eventually messages will no longer be delivered.\nUpon success, the result will be \u003ccode\u003eRight ()\u003c/code\u003e but\nif failed, \u003ccode\u003eLeft text-of-error-message\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Endpoints",
        "fct-package": "courier",
        "fct-signature": "Endpoint -\u003e Name -\u003e IO (Either String ())",
        "fct-source": "src/Network-Endpoints.html#unbindEndpoint",
        "fct-type": "function",
        "title": "unbindEndpoint"
      },
      "index": {
        "description": "Unbind an Endpoint from Name after which the Endpoint will eventually not receive messages sent to that Name Note that there is no guarantee that after Unbind succeeds that additional messages to that Name will not be delivered the only guarantee is that eventually messages will no longer be delivered Upon success the result will be Right but if failed Left text-of-error-message",
        "hierarchy": "Network Endpoints",
        "module": "Network.Endpoints",
        "name": "unbindEndpoint",
        "normalized": "Endpoint-\u003eName-\u003eIO(Either String())",
        "package": "courier",
        "partial": "Endpoint",
        "signature": "Endpoint-\u003eName-\u003eIO(Either String())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:unbindEndpoint_",
      "description": {
        "fct-descr": "\u003cp\u003eInvoke \u003ccode\u003e\u003ca\u003eunbindEndpoint\u003c/a\u003e\u003c/code\u003e, but ignore any returned result (success or failure).\n\u003c/p\u003e",
        "fct-module": "Network.Endpoints",
        "fct-package": "courier",
        "fct-signature": "Endpoint -\u003e Name -\u003e IO ()",
        "fct-source": "src/Network-Endpoints.html#unbindEndpoint_",
        "fct-type": "function",
        "title": "unbindEndpoint_"
      },
      "index": {
        "description": "Invoke unbindEndpoint but ignore any returned result success or failure",
        "hierarchy": "Network Endpoints",
        "module": "Network.Endpoints",
        "name": "unbindEndpoint_",
        "normalized": "Endpoint-\u003eName-\u003eIO()",
        "package": "courier",
        "partial": "Endpoint",
        "signature": "Endpoint-\u003eName-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-RPC.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of synchronous remote procedure calls\n (\u003ca\u003eRPC\u003c/a\u003e) on top of\n \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eApplications exporting services for use by other applications via\n RPC call \u003ccode\u003e\u003ca\u003ehandle\u003c/a\u003e\u003c/code\u003e to start listening for incoming RPC requests\n for a specific \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e.  If multiple functions or \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003es are exported,\n then separate calls to \u003ccode\u003e\u003ca\u003ehandle\u003c/a\u003e\u003c/code\u003e are necessary, one for each exported \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e.\n Each call to \u003ccode\u003e\u003ca\u003ehandle\u003c/a\u003e\u003c/code\u003e produces a \u003ccode\u003e\u003ca\u003eHandleSite\u003c/a\u003e\u003c/code\u003e which may be used to terminate\n future handling of RPCs for that specific method by calling \u003ccode\u003e\u003ca\u003ehangup\u003c/a\u003e\u003c/code\u003e on the\n returned \u003ccode\u003e\u003ca\u003eHandleSite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eApplications wishing to make RPCs to other applications or services do so\n by first constructing a \u003ccode\u003e\u003ca\u003eCallSite\u003c/a\u003e\u003c/code\u003e, and then \u003ccode\u003e\u003ca\u003ecall\u003c/a\u003e\u003c/code\u003eing specific methods\n on the target handler through that \u003ccode\u003e\u003ca\u003eCallSite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBoth single and multiple target RPCs are available, as are variants that\n either wait indefinitely or at most for a defined timeout.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.RPC",
        "fct-package": "courier",
        "fct-signature": "module",
        "fct-source": "src/Network-RPC.html",
        "fct-type": "module",
        "title": "RPC"
      },
      "index": {
        "description": "An implementation of synchronous remote procedure calls RPC on top of Endpoint Applications exporting services for use by other applications via RPC call handle to start listening for incoming RPC requests for specific Method If multiple functions or Method are exported then separate calls to handle are necessary one for each exported Method Each call to handle produces HandleSite which may be used to terminate future handling of RPCs for that specific method by calling hangup on the returned HandleSite Applications wishing to make RPCs to other applications or services do so by first constructing CallSite and then call ing specific methods on the target handler through that CallSite Both single and multiple target RPCs are available as are variants that either wait indefinitely or at most for defined timeout",
        "hierarchy": "Network RPC",
        "module": "Network.RPC",
        "name": "RPC",
        "normalized": "",
        "package": "courier",
        "partial": "RPC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-RPC.html#t:CallSite",
      "description": {
        "fct-descr": "\u003cp\u003eA call site is a location for making RPCs: it includes an endpoint\nand a name by which recipients can return the call\n\u003c/p\u003e",
        "fct-module": "Network.RPC",
        "fct-package": "courier",
        "fct-signature": "data",
        "fct-source": "src/Network-RPC.html#CallSite",
        "fct-type": "data",
        "title": "CallSite"
      },
      "index": {
        "description": "call site is location for making RPCs it includes an endpoint and name by which recipients can return the call",
        "hierarchy": "Network RPC",
        "module": "Network.RPC",
        "name": "CallSite",
        "normalized": "",
        "package": "courier",
        "partial": "Call Site",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-RPC.html#t:HandleSite",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eHandleSite\u003c/a\u003e\u003c/code\u003e is a just reference to the actual handler of a specific method.\nMostly for invoking \u003ccode\u003e\u003ca\u003ehangup\u003c/a\u003e\u003c/code\u003e on the handler, once it is no longer needed.\n\u003c/p\u003e",
        "fct-module": "Network.RPC",
        "fct-package": "courier",
        "fct-signature": "data",
        "fct-source": "src/Network-RPC.html#HandleSite",
        "fct-type": "data",
        "title": "HandleSite"
      },
      "index": {
        "description": "HandleSite is just reference to the actual handler of specific method Mostly for invoking hangup on the handler once it is no longer needed",
        "hierarchy": "Network RPC",
        "module": "Network.RPC",
        "name": "HandleSite",
        "normalized": "",
        "package": "courier",
        "partial": "Handle Site",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-RPC.html#t:Method",
      "description": {
        "fct-module": "Network.RPC",
        "fct-package": "courier",
        "fct-signature": "type",
        "fct-source": "src/Network-RPC.html#Method",
        "fct-type": "type",
        "title": "Method"
      },
      "index": {
        "description": "",
        "hierarchy": "Network RPC",
        "module": "Network.RPC",
        "name": "Method",
        "normalized": "",
        "package": "courier",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-RPC.html#v:call",
      "description": {
        "fct-descr": "\u003cp\u003eCall a method with the provided arguments on the recipient with the given name.\nA request will be made through the \u003ccode\u003eCallSite'\u003c/code\u003es \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e, and then\nthe caller will wait until a matching response is received.\n\u003c/p\u003e",
        "fct-module": "Network.RPC",
        "fct-package": "courier",
        "fct-signature": "CallSite -\u003e Name -\u003e Method -\u003e a -\u003e IO b",
        "fct-source": "src/Network-RPC.html#call",
        "fct-type": "function",
        "title": "call"
      },
      "index": {
        "description": "Call method with the provided arguments on the recipient with the given name request will be made through the CallSite Endpoint and then the caller will wait until matching response is received",
        "hierarchy": "Network RPC",
        "module": "Network.RPC",
        "name": "call",
        "normalized": "CallSite-\u003eName-\u003eMethod-\u003ea-\u003eIO b",
        "package": "courier",
        "partial": "",
        "signature": "CallSite-\u003eName-\u003eMethod-\u003ea-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-RPC.html#v:callWithTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eCall a method with the provided arguments on the recipient with the given name.\nA request will be made through the \u003ccode\u003eCallSite'\u003c/code\u003es \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e, and then\nthe caller will wait until a matching response is received. If a response\nis received within the provided timeout (measured in microseconds), then\nreturn the value wrapped in \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e; otherwise, if the timeout expires\nbefore the call returns, then return 'Nothing.\n\u003c/p\u003e",
        "fct-module": "Network.RPC",
        "fct-package": "courier",
        "fct-signature": "CallSite -\u003e Name -\u003e Method -\u003e Int -\u003e a -\u003e IO (Maybe b)",
        "fct-source": "src/Network-RPC.html#callWithTimeout",
        "fct-type": "function",
        "title": "callWithTimeout"
      },
      "index": {
        "description": "Call method with the provided arguments on the recipient with the given name request will be made through the CallSite Endpoint and then the caller will wait until matching response is received If response is received within the provided timeout measured in microseconds then return the value wrapped in Just otherwise if the timeout expires before the call returns then return Nothing",
        "hierarchy": "Network RPC",
        "module": "Network.RPC",
        "name": "callWithTimeout",
        "normalized": "CallSite-\u003eName-\u003eMethod-\u003eInt-\u003ea-\u003eIO(Maybe b)",
        "package": "courier",
        "partial": "With Timeout",
        "signature": "CallSite-\u003eName-\u003eMethod-\u003eInt-\u003ea-\u003eIO(Maybe b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-RPC.html#v:gcall",
      "description": {
        "fct-descr": "\u003cp\u003eGroup call or RPC: call a method with the provided arguments on all the recipients with the given names.\nA request will be made through the \u003ccode\u003eCallSite'\u003c/code\u003es \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e, and then\nthe caller will wait until all matching responses are received.\n\u003c/p\u003e",
        "fct-module": "Network.RPC",
        "fct-package": "courier",
        "fct-signature": "CallSite -\u003e [Name] -\u003e Method -\u003e a -\u003e IO (Map Name b)",
        "fct-source": "src/Network-RPC.html#gcall",
        "fct-type": "function",
        "title": "gcall"
      },
      "index": {
        "description": "Group call or RPC call method with the provided arguments on all the recipients with the given names request will be made through the CallSite Endpoint and then the caller will wait until all matching responses are received",
        "hierarchy": "Network RPC",
        "module": "Network.RPC",
        "name": "gcall",
        "normalized": "CallSite-\u003e[Name]-\u003eMethod-\u003ea-\u003eIO(Map Name b)",
        "package": "courier",
        "partial": "",
        "signature": "CallSite-\u003e[Name]-\u003eMethod-\u003ea-\u003eIO(Map Name b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-RPC.html#v:gcallWithTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eGroup call or RPC but with a timeout: call a method with the provided arguments on all the\nrecipients with the given names. A request will be made through the \u003ccode\u003eCallSite'\u003c/code\u003es \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e,\nand then the caller will wait until all matching responses are received or the timeout occurs.\nThe returned \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e has a key for every \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e that was a target of the call, and the value\nof that key will be \u003ccode\u003eNothing\u003c/code\u003e if no response was received before the timeout, or \u003ccode\u003eJust value\u003c/code\u003e\nif a response was received.\n\u003c/p\u003e",
        "fct-module": "Network.RPC",
        "fct-package": "courier",
        "fct-signature": "CallSite -\u003e [Name] -\u003e Method -\u003e Int -\u003e a -\u003e IO (Map Name (Maybe b))",
        "fct-source": "src/Network-RPC.html#gcallWithTimeout",
        "fct-type": "function",
        "title": "gcallWithTimeout"
      },
      "index": {
        "description": "Group call or RPC but with timeout call method with the provided arguments on all the recipients with the given names request will be made through the CallSite Endpoint and then the caller will wait until all matching responses are received or the timeout occurs The returned Map has key for every Name that was target of the call and the value of that key will be Nothing if no response was received before the timeout or Just value if response was received",
        "hierarchy": "Network RPC",
        "module": "Network.RPC",
        "name": "gcallWithTimeout",
        "normalized": "CallSite-\u003e[Name]-\u003eMethod-\u003eInt-\u003ea-\u003eIO(Map Name(Maybe b))",
        "package": "courier",
        "partial": "With Timeout",
        "signature": "CallSite-\u003e[Name]-\u003eMethod-\u003eInt-\u003ea-\u003eIO(Map Name(Maybe b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-RPC.html#v:handle",
      "description": {
        "fct-descr": "\u003cp\u003eHandle all RPCs to invoke the indicated \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e on the specified \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e,\nuntil \u003ccode\u003e\u003ca\u003ehangup\u003c/a\u003e\u003c/code\u003e is called on the returned \u003ccode\u003e\u003ca\u003eHandleSite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.RPC",
        "fct-package": "courier",
        "fct-signature": "Endpoint -\u003e Name -\u003e Method -\u003e (a -\u003e IO b) -\u003e IO HandleSite",
        "fct-source": "src/Network-RPC.html#handle",
        "fct-type": "function",
        "title": "handle"
      },
      "index": {
        "description": "Handle all RPCs to invoke the indicated Method on the specified Endpoint until hangup is called on the returned HandleSite",
        "hierarchy": "Network RPC",
        "module": "Network.RPC",
        "name": "handle",
        "normalized": "Endpoint-\u003eName-\u003eMethod-\u003e(a-\u003eIO b)-\u003eIO HandleSite",
        "package": "courier",
        "partial": "",
        "signature": "Endpoint-\u003eName-\u003eMethod-\u003e(a-\u003eIO b)-\u003eIO HandleSite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-RPC.html#v:hangup",
      "description": {
        "fct-descr": "\u003cp\u003eStop handling incoming RPCs for the indicated \u003ccode\u003e\u003ca\u003eHandleSite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.RPC",
        "fct-package": "courier",
        "fct-signature": "HandleSite -\u003e IO ()",
        "fct-source": "src/Network-RPC.html#hangup",
        "fct-type": "function",
        "title": "hangup"
      },
      "index": {
        "description": "Stop handling incoming RPCs for the indicated HandleSite",
        "hierarchy": "Network RPC",
        "module": "Network.RPC",
        "name": "hangup",
        "normalized": "HandleSite-\u003eIO()",
        "package": "courier",
        "partial": "",
        "signature": "HandleSite-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-RPC.html#v:newCallSite",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eCallSite\u003c/a\u003e\u003c/code\u003e using the indicated \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e for sending\nRPCs and using the specified \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e for receiving responses.\n\u003c/p\u003e",
        "fct-module": "Network.RPC",
        "fct-package": "courier",
        "fct-signature": "Endpoint -\u003e Name -\u003e CallSite",
        "fct-source": "src/Network-RPC.html#newCallSite",
        "fct-type": "function",
        "title": "newCallSite"
      },
      "index": {
        "description": "Create new CallSite using the indicated Endpoint for sending RPCs and using the specified Name for receiving responses",
        "hierarchy": "Network RPC",
        "module": "Network.RPC",
        "name": "newCallSite",
        "normalized": "Endpoint-\u003eName-\u003eCallSite",
        "package": "courier",
        "partial": "Call Site",
        "signature": "Endpoint-\u003eName-\u003eCallSite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport-Memory.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMemory transports deliver messages to other \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003es within the same shared\n address space, or operating system process.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Transport.Memory",
        "fct-package": "courier",
        "fct-signature": "module",
        "fct-source": "src/Network-Transport-Memory.html",
        "fct-type": "module",
        "title": "Memory"
      },
      "index": {
        "description": "Memory transports deliver messages to other Endpoint within the same shared address space or operating system process",
        "hierarchy": "Network Transport Memory",
        "module": "Network.Transport.Memory",
        "name": "Memory",
        "normalized": "",
        "package": "courier",
        "partial": "Memory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport-Memory.html#v:newMemoryTransport",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new memory \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e for use by \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.Transport.Memory",
        "fct-package": "courier",
        "fct-signature": "IO Transport",
        "fct-source": "src/Network-Transport-Memory.html#newMemoryTransport",
        "fct-type": "function",
        "title": "newMemoryTransport"
      },
      "index": {
        "description": "Create new memory Transport for use by Endpoint",
        "hierarchy": "Network Transport Memory",
        "module": "Network.Transport.Memory",
        "name": "newMemoryTransport",
        "normalized": "",
        "package": "courier",
        "partial": "Memory Transport",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport-TCP.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTCP transports deliver messages to other \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003es using TCP/IP.\n\u003c/p\u003e\u003cp\u003eEach TCP transport manages both socket bindings and connections on behalf of\n \u003ccode\u003eEndpoint\u003c/code\u003es, dynamically opening / closing new sockets as needed to deliver\n messages to other \u003ccode\u003eEndpoint\u003c/code\u003es using TCP transports.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Transport.TCP",
        "fct-package": "courier",
        "fct-signature": "module",
        "fct-source": "src/Network-Transport-TCP.html",
        "fct-type": "module",
        "title": "TCP"
      },
      "index": {
        "description": "TCP transports deliver messages to other Endpoint using TCP IP Each TCP transport manages both socket bindings and connections on behalf of Endpoint dynamically opening closing new sockets as needed to deliver messages to other Endpoint using TCP transports",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "TCP",
        "normalized": "",
        "package": "courier",
        "partial": "TCP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport-TCP.html#v:newTCPTransport",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e suitable for sending messages over TCP/IP.  There can\nbe multiple instances of these \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003es: \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e using\ndifferent instances will still be able to communicate, provided they use\ncorrect TCP/IP addresses (or hostnames) for communication.\n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP",
        "fct-package": "courier",
        "fct-signature": "Resolver -\u003e IO Transport",
        "fct-source": "src/Network-Transport-TCP.html#newTCPTransport",
        "fct-type": "function",
        "title": "newTCPTransport"
      },
      "index": {
        "description": "Create new Transport suitable for sending messages over TCP IP There can be multiple instances of these Transport Endpoint using different instances will still be able to communicate provided they use correct TCP IP addresses or hostnames for communication",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "newTCPTransport",
        "normalized": "Resolver-\u003eIO Transport",
        "package": "courier",
        "partial": "TCPTransport",
        "signature": "Resolver-\u003eIO Transport"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport-UDP.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUDP transports deliver messages to other \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003es using UDP/IP.\n\u003c/p\u003e\u003cp\u003eEach UDP transport manages socket bindings on behalf of\n \u003ccode\u003eEndpoint\u003c/code\u003es, dynamically opening / closing new sockets as needed to deliver\n messages to other \u003ccode\u003eEndpoint\u003c/code\u003es using UDP transports.\n\u003c/p\u003e\u003cp\u003eThere is no reuse of sockets on the sending side, so while messages will be \n received on a known bound port, the remote sending port will vary arbitrarily.\n\u003c/p\u003e\u003cp\u003eThis transport only reads at most 512 bytes from incoming packets: constraining\n the packet size avoids fragmentation.  Applications using this transport should take\n responsibility for fragmentation, reassembly, retransmission of lost packets,\n and congestion control.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Transport.UDP",
        "fct-package": "courier",
        "fct-signature": "module",
        "fct-source": "src/Network-Transport-UDP.html",
        "fct-type": "module",
        "title": "UDP"
      },
      "index": {
        "description": "UDP transports deliver messages to other Endpoint using UDP IP Each UDP transport manages socket bindings on behalf of Endpoint dynamically opening closing new sockets as needed to deliver messages to other Endpoint using UDP transports There is no reuse of sockets on the sending side so while messages will be received on known bound port the remote sending port will vary arbitrarily This transport only reads at most bytes from incoming packets constraining the packet size avoids fragmentation Applications using this transport should take responsibility for fragmentation reassembly retransmission of lost packets and congestion control",
        "hierarchy": "Network Transport UDP",
        "module": "Network.Transport.UDP",
        "name": "UDP",
        "normalized": "",
        "package": "courier",
        "partial": "UDP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport-UDP.html#v:newUDPTransport",
      "description": {
        "fct-module": "Network.Transport.UDP",
        "fct-package": "courier",
        "fct-signature": "Resolver -\u003e IO Transport",
        "fct-source": "src/Network-Transport-UDP.html#newUDPTransport",
        "fct-type": "function",
        "title": "newUDPTransport"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Transport UDP",
        "module": "Network.Transport.UDP",
        "name": "newUDPTransport",
        "normalized": "Resolver-\u003eIO Transport",
        "package": "courier",
        "partial": "UDPTransport",
        "signature": "Resolver-\u003eIO Transport"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e abstracts the details of message delivery, and defines the interfaces\n that specific \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e implementations should provide in order to deliver messages\n for \u003ccode\u003eEndpoint\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "courier",
        "fct-signature": "module",
        "fct-source": "src/Network-Transport.html",
        "fct-type": "module",
        "title": "Transport"
      },
      "index": {
        "description": "Transport abstracts the details of message delivery and defines the interfaces that specific Transport implementations should provide in order to deliver messages for Endpoint",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "Transport",
        "normalized": "",
        "package": "courier",
        "partial": "Transport",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#t:Address",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e is a place where transports can put messages for \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003es\nto receive.  Typically \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003es will use the same \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e when\nbinding or connecting with a \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAn address is a logical identifier suitable for establishing a connection to\nanother \u003ccode\u003eEndpoint\u003c/code\u003e over a \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e. It's use (if at all) is specific to the \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e\nin question.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "courier",
        "fct-signature": "type",
        "fct-source": "src/Network-Transport.html#Address",
        "fct-type": "type",
        "title": "Address"
      },
      "index": {
        "description": "Mailbox is place where transports can put messages for Endpoint to receive Typically Endpoint will use the same Mailbox when binding or connecting with Transport An address is logical identifier suitable for establishing connection to another Endpoint over Transport It use if at all is specific to the Transport in question",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "Address",
        "normalized": "",
        "package": "courier",
        "partial": "Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#t:Binding",
      "description": {
        "fct-descr": "\u003cp\u003eBindings are a site for receiving messages on a particular \u003ccode\u003e\u003ca\u003eAddress\u003c/a\u003e\u003c/code\u003e\nthrough a \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "courier",
        "fct-signature": "data",
        "fct-source": "src/Network-Transport.html#Binding",
        "fct-type": "data",
        "title": "Binding"
      },
      "index": {
        "description": "Bindings are site for receiving messages on particular Address through Transport",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "Binding",
        "normalized": "",
        "package": "courier",
        "partial": "Binding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#t:Envelope",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eEnvelope\u003c/a\u003e\u003c/code\u003e is a container for a \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e with the \u003ccode\u003e\u003ca\u003eAddress\u003c/a\u003e\u003c/code\u003e of the \u003ccode\u003eMessage'\u003c/code\u003es destination.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "courier",
        "fct-signature": "data",
        "fct-source": "src/Network-Transport.html#Envelope",
        "fct-type": "data",
        "title": "Envelope"
      },
      "index": {
        "description": "An Envelope is container for Message with the Address of the Message destination",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "Envelope",
        "normalized": "",
        "package": "courier",
        "partial": "Envelope",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#t:Message",
      "description": {
        "fct-descr": "\u003cp\u003eMessages are containers for arbitrary data that may be sent to other \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "courier",
        "fct-signature": "type",
        "fct-source": "src/Network-Transport.html#Message",
        "fct-type": "type",
        "title": "Message"
      },
      "index": {
        "description": "Messages are containers for arbitrary data that may be sent to other Endpoint",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "Message",
        "normalized": "",
        "package": "courier",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#t:Name",
      "description": {
        "fct-descr": "\u003cp\u003eName for uniquely identifying an \u003ccode\u003eEndpoint\u003c/code\u003e; suitable for identifying\nthe target destination for a \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "courier",
        "fct-signature": "type",
        "fct-source": "src/Network-Transport.html#Name",
        "fct-type": "type",
        "title": "Name"
      },
      "index": {
        "description": "Name for uniquely identifying an Endpoint suitable for identifying the target destination for Message",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "Name",
        "normalized": "",
        "package": "courier",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#t:Resolver",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eResolver\u003c/a\u003e\u003c/code\u003e translates a name into an \u003ccode\u003e\u003ca\u003eAddress\u003c/a\u003e\u003c/code\u003e, if possible. \n\u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003es may find resolvers useful for determing\nwhere to reach a specific \u003ccode\u003eEndpoint\u003c/code\u003e, given it''s \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "courier",
        "fct-signature": "data",
        "fct-source": "src/Network-Transport.html#Resolver",
        "fct-type": "data",
        "title": "Resolver"
      },
      "index": {
        "description": "Resolver translates name into an Address if possible Transport may find resolvers useful for determing where to reach specific Endpoint given it Name",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "Resolver",
        "normalized": "",
        "package": "courier",
        "partial": "Resolver",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#t:Scheme",
      "description": {
        "fct-descr": "\u003cp\u003eA scheme is an identifier for a discrete type of transport.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "courier",
        "fct-signature": "type",
        "fct-source": "src/Network-Transport.html#Scheme",
        "fct-type": "type",
        "title": "Scheme"
      },
      "index": {
        "description": "scheme is an identifier for discrete type of transport",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "Scheme",
        "normalized": "",
        "package": "courier",
        "partial": "Scheme",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#t:Transport",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e defines a specific method for establishing connections\nbetween \u003ccode\u003eEndpoint\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "courier",
        "fct-signature": "data",
        "fct-source": "src/Network-Transport.html#Transport",
        "fct-type": "data",
        "title": "Transport"
      },
      "index": {
        "description": "Transport defines specific method for establishing connections between Endpoint",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "Transport",
        "normalized": "",
        "package": "courier",
        "partial": "Transport",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#v:Binding",
      "description": {
        "fct-module": "Network.Transport",
        "fct-package": "courier",
        "fct-signature": "Binding",
        "fct-source": "src/Network-Transport.html#Binding",
        "fct-type": "function",
        "title": "Binding"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "Binding",
        "normalized": "",
        "package": "courier",
        "partial": "Binding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#v:Envelope",
      "description": {
        "fct-module": "Network.Transport",
        "fct-package": "courier",
        "fct-signature": "Envelope",
        "fct-source": "src/Network-Transport.html#Envelope",
        "fct-type": "function",
        "title": "Envelope"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "Envelope",
        "normalized": "",
        "package": "courier",
        "partial": "Envelope",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#v:Transport",
      "description": {
        "fct-module": "Network.Transport",
        "fct-package": "courier",
        "fct-signature": "Transport",
        "fct-source": "src/Network-Transport.html#Transport",
        "fct-type": "function",
        "title": "Transport"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "Transport",
        "normalized": "",
        "package": "courier",
        "partial": "Transport",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#v:bind",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Transport",
        "fct-package": "courier",
        "fct-signature": "Mailbox Message -\u003e Name -\u003e IO (Either String Binding)",
        "fct-source": "src/Network-Transport.html#Transport",
        "fct-type": "function",
        "title": "bind"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "bind",
        "normalized": "Mailbox Message-\u003eName-\u003eIO(Either String Binding)",
        "package": "courier",
        "partial": "",
        "signature": "Mailbox Message-\u003eName-\u003eIO(Either String Binding)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#v:bindingName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Transport",
        "fct-package": "courier",
        "fct-signature": "Name",
        "fct-source": "src/Network-Transport.html#Binding",
        "fct-type": "function",
        "title": "bindingName"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "bindingName",
        "normalized": "",
        "package": "courier",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#v:envelopeContents",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Transport",
        "fct-package": "courier",
        "fct-signature": "Message",
        "fct-source": "src/Network-Transport.html#Envelope",
        "fct-type": "function",
        "title": "envelopeContents"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "envelopeContents",
        "normalized": "",
        "package": "courier",
        "partial": "Contents",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#v:envelopeDestination",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Transport",
        "fct-package": "courier",
        "fct-signature": "Name",
        "fct-source": "src/Network-Transport.html#Envelope",
        "fct-type": "function",
        "title": "envelopeDestination"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "envelopeDestination",
        "normalized": "",
        "package": "courier",
        "partial": "Destination",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#v:handles",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Transport",
        "fct-package": "courier",
        "fct-signature": "Name -\u003e IO Bool",
        "fct-source": "src/Network-Transport.html#Transport",
        "fct-type": "function",
        "title": "handles"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "handles",
        "normalized": "Name-\u003eIO Bool",
        "package": "courier",
        "partial": "",
        "signature": "Name-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#v:resolve",
      "description": {
        "fct-descr": "\u003cp\u003eAsk the \u003ccode\u003e\u003ca\u003eResolver\u003c/a\u003e\u003c/code\u003e to find one or more \u003ccode\u003e\u003ca\u003eAddress\u003c/a\u003e\u003c/code\u003ees for the provided\n\u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e, if any are available from this resolver.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "courier",
        "fct-signature": "Resolver -\u003e Name -\u003e IO (Maybe Address)",
        "fct-source": "src/Network-Transport.html#resolve",
        "fct-type": "function",
        "title": "resolve"
      },
      "index": {
        "description": "Ask the Resolver to find one or more Address es for the provided Name if any are available from this resolver",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "resolve",
        "normalized": "Resolver-\u003eName-\u003eIO(Maybe Address)",
        "package": "courier",
        "partial": "",
        "signature": "Resolver-\u003eName-\u003eIO(Maybe Address)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#v:resolverFromList",
      "description": {
        "fct-descr": "\u003cp\u003eA simple \u003ccode\u003e\u003ca\u003eResolver\u003c/a\u003e\u003c/code\u003e that accepts an association list of \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003es to \u003ccode\u003e\u003ca\u003eAddress\u003c/a\u003e\u003c/code\u003ees\nand returns the addresses associated with a given name in the list.\n\u003c/p\u003e",
        "fct-module": "Network.Transport",
        "fct-package": "courier",
        "fct-signature": "[(Name, Address)] -\u003e Resolver",
        "fct-source": "src/Network-Transport.html#resolverFromList",
        "fct-type": "function",
        "title": "resolverFromList"
      },
      "index": {
        "description": "simple Resolver that accepts an association list of Name to Address es and returns the addresses associated with given name in the list",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "resolverFromList",
        "normalized": "[(Name,Address)]-\u003eResolver",
        "package": "courier",
        "partial": "From List",
        "signature": "[(Name,Address)]-\u003eResolver"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#v:scheme",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Transport",
        "fct-package": "courier",
        "fct-signature": "String",
        "fct-source": "src/Network-Transport.html#Transport",
        "fct-type": "function",
        "title": "scheme"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "scheme",
        "normalized": "",
        "package": "courier",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#v:sendTo",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Transport",
        "fct-package": "courier",
        "fct-signature": "Name -\u003e Message -\u003e IO ()",
        "fct-source": "src/Network-Transport.html#Transport",
        "fct-type": "function",
        "title": "sendTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "sendTo",
        "normalized": "Name-\u003eMessage-\u003eIO()",
        "package": "courier",
        "partial": "To",
        "signature": "Name-\u003eMessage-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#v:shutdown",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Transport",
        "fct-package": "courier",
        "fct-signature": "IO ()",
        "fct-source": "src/Network-Transport.html#Transport",
        "fct-type": "function",
        "title": "shutdown"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "shutdown",
        "normalized": "IO()",
        "package": "courier",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#v:unbind",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Transport",
        "fct-package": "courier",
        "fct-signature": "IO ()",
        "fct-source": "src/Network-Transport.html#Binding",
        "fct-type": "function",
        "title": "unbind"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Transport",
        "module": "Network.Transport",
        "name": "unbind",
        "normalized": "IO()",
        "package": "courier",
        "partial": "",
        "signature": "IO()"
      }
    }
  }
]