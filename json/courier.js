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
        "word": "courier"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e is a drop-in replacement for \u003ccode\u003e\u003ca\u003eTQueue\u003c/a\u003e\u003c/code\u003e in \u003ca\u003eControl.Concurrent.STM\u003c/a\u003e, except that\n it also supports selective out of order message reception: that is, it allows the caller\n to dequeue the first message among the messages available in the queue that matches\n a supplied test function, or block if no such match is possible with the messages currently \n in the queue.\n\u003c/p\u003e\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e implements the same basic \u003ccode\u003eread \u003cem\u003e write \u003c/em\u003e peek\u003c/code\u003e group of functions as a \u003ccode\u003e\u003ca\u003eTQueue\u003c/a\u003e\u003c/code\u003e,\n it offers a superset of \u003ccode\u003e\u003ca\u003eTQueue\u003c/a\u003e\u003c/code\u003e functionality by extending it with the \u003ccode\u003efind \u003cem\u003e select \u003c/em\u003e handle\u003c/code\u003e\n groups of functions.  Thus, applications can safely use \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003ees in place of \u003ccode\u003e\u003ca\u003eTQueue\u003c/a\u003e\u003c/code\u003es,\n but choose when to take the slight extra overhead of \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e functionality.\n\u003c/p\u003e\u003cp\u003eBecause message selection in worst case requires fully traversing all messages in the queue,\n application designers are encouraged to understand this aspect when choosing to use \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003ees\n in their designs, or when using the additional features of \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003ees beyond that of \u003ccode\u003e\u003ca\u003eTQueue\u003c/a\u003e\u003c/code\u003es.\n Dispatching messages with a \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e is analogous to using a \u003ccode\u003ecase\u003c/code\u003e expression (O(n)) to dispatch\n messages to a handler function, except that new cases can be added or removed at any time.  In essence,\n one can regard \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003ees as a useful means of creating an extensible message dispatch function.\n If, however, if O(1) message dispatching time is necessary or desired, (using hashmaps, for example)\n then \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003ees are not the correct choice.\n\u003c/p\u003e\u003cp\u003eDespite this extra cost, \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003ees offer advantages to designers:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Implementation of Erlang-style message reception: as messages can be received\n out of order, a mailbox is analogous to a process input queue in Erlang.\n\u003c/li\u003e\u003cli\u003e Better composability: if applications must only dequeue messages in the order in which\n they are queued (which is sufficient for many applications), then the main message\n pump requires modification each time a new class of message must be handled. With\n selective message reception, multiple concurrent message pumps are possible (with\n a small performance impact), each processing the messages they expect and with no\n need to be aware of other message pumps performing their own work on the same mailbox.\n\u003c/li\u003e\u003cli\u003e Mixing synchronous and asynchronous programming styles: if restricted to in order message\n delivery, an application must carefully construct all logic to avoid blocking its central message\n loop. By supporting out of message delivery and multiple selective recipients, it becomes possible\n to combine synchronous and asynchronous programming styles using the same \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eBasic framework for \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e brazenly copied from \u003ca\u003eControl.Concurrent.STM.TQueue\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "Mailbox",
          "package": "courier",
          "source": "src/Control-Concurrent-Mailbox.html",
          "type": "module"
        },
        "index": {
          "description": "Mailbox is drop-in replacement for TQueue in Control.Concurrent.STM except that it also supports selective out of order message reception that is it allows the caller to dequeue the first message among the messages available in the queue that matches supplied test function or block if no such match is possible with the messages currently in the queue As Mailbox implements the same basic read write peek group of functions as TQueue it offers superset of TQueue functionality by extending it with the find select handle groups of functions Thus applications can safely use Mailbox es in place of TQueue but choose when to take the slight extra overhead of Mailbox functionality Because message selection in worst case requires fully traversing all messages in the queue application designers are encouraged to understand this aspect when choosing to use Mailbox es in their designs or when using the additional features of Mailbox es beyond that of TQueue Dispatching messages with Mailbox is analogous to using case expression to dispatch messages to handler function except that new cases can be added or removed at any time In essence one can regard Mailbox es as useful means of creating an extensible message dispatch function If however if message dispatching time is necessary or desired using hashmaps for example then Mailbox es are not the correct choice Despite this extra cost Mailbox es offer advantages to designers Implementation of Erlang-style message reception as messages can be received out of order mailbox is analogous to process input queue in Erlang Better composability if applications must only dequeue messages in the order in which they are queued which is sufficient for many applications then the main message pump requires modification each time new class of message must be handled With selective message reception multiple concurrent message pumps are possible with small performance impact each processing the messages they expect and with no need to be aware of other message pumps performing their own work on the same mailbox Mixing synchronous and asynchronous programming styles if restricted to in order message delivery an application must carefully construct all logic to avoid blocking its central message loop By supporting out of message delivery and multiple selective recipients it becomes possible to combine synchronous and asynchronous programming styles using the same Mailbox Basic framework for Mailbox brazenly copied from Control.Concurrent.STM.TQueue",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "Mailbox",
          "package": "courier",
          "partial": "Mailbox",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Mailbox",
          "name": "Mailbox",
          "package": "courier",
          "source": "src/Control-Concurrent-Mailbox.html#Mailbox",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "Mailbox",
          "package": "courier",
          "partial": "Mailbox",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#t:Mailbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the next value from the \u003ccode\u003eMailbox\u003c/code\u003e matching \u003ccode\u003etestFn\u003c/code\u003e without removing it,\nretrying if the channel is empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "findMailbox",
          "package": "courier",
          "signature": "Mailbox m -\u003e (m -\u003e Maybe v) -\u003e STM v",
          "source": "src/Control-Concurrent-Mailbox.html#findMailbox",
          "type": "function"
        },
        "index": {
          "description": "Find the next value from the Mailbox matching testFn without removing it retrying if the channel is empty",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "findMailbox",
          "normalized": "Mailbox a-\u003e(a-\u003eMaybe b)-\u003eSTM b",
          "package": "courier",
          "partial": "Mailbox",
          "signature": "Mailbox m-\u003e(m-\u003eMaybe v)-\u003eSTM v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#v:findMailbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait until there is a message in the mailbox matching the supplied test\nfunction (using \u003ccode\u003e\u003ca\u003eselectMailbox\u003c/a\u003e\u003c/code\u003e), then when a message is found, handle\nit in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad with the supplied function.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "handleMailbox",
          "package": "courier",
          "signature": "Mailbox m -\u003e (m -\u003e Maybe v) -\u003e (v -\u003e IO r) -\u003e IO r",
          "source": "src/Control-Concurrent-Mailbox.html#handleMailbox",
          "type": "function"
        },
        "index": {
          "description": "Wait until there is message in the mailbox matching the supplied test function using selectMailbox then when message is found handle it in the IO monad with the supplied function",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "handleMailbox",
          "normalized": "Mailbox a-\u003e(a-\u003eMaybe b)-\u003e(b-\u003eIO c)-\u003eIO c",
          "package": "courier",
          "partial": "Mailbox",
          "signature": "Mailbox m-\u003e(m-\u003eMaybe v)-\u003e(v-\u003eIO r)-\u003eIO r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#v:handleMailbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the supplied \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "isEmptyMailbox",
          "package": "courier",
          "signature": "Mailbox m -\u003e STM Bool",
          "source": "src/Control-Concurrent-Mailbox.html#isEmptyMailbox",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the supplied Mailbox is empty",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "isEmptyMailbox",
          "normalized": "Mailbox a-\u003eSTM Bool",
          "package": "courier",
          "partial": "Empty Mailbox",
          "signature": "Mailbox m-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#v:isEmptyMailbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild and returns a new instance of \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "newMailbox",
          "package": "courier",
          "signature": "STM (Mailbox m)",
          "source": "src/Control-Concurrent-Mailbox.html#newMailbox",
          "type": "function"
        },
        "index": {
          "description": "Build and returns new instance of Mailbox",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "newMailbox",
          "package": "courier",
          "partial": "Mailbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#v:newMailbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eIO\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003enewMailbox\u003c/a\u003e\u003c/code\u003e.  This is useful for creating top-level\n\u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e, because using\n\u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e inside \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e isn't\npossible.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "newMailboxIO",
          "package": "courier",
          "signature": "IO (Mailbox m)",
          "source": "src/Control-Concurrent-Mailbox.html#newMailboxIO",
          "type": "function"
        },
        "index": {
          "description": "IO version of newMailbox This is useful for creating top-level Mailbox using unsafePerformIO because using atomically inside unsafePerformIO isn possible",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "newMailboxIO",
          "package": "courier",
          "partial": "Mailbox IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#v:newMailboxIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the next value from the \u003ccode\u003eMailbox\u003c/code\u003e without removing it,\nretrying if the channel is empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "peekMailbox",
          "package": "courier",
          "signature": "Mailbox m -\u003e STM m",
          "source": "src/Control-Concurrent-Mailbox.html#peekMailbox",
          "type": "function"
        },
        "index": {
          "description": "Get the next value from the Mailbox without removing it retrying if the channel is empty",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "peekMailbox",
          "normalized": "Mailbox a-\u003eSTM a",
          "package": "courier",
          "partial": "Mailbox",
          "signature": "Mailbox m-\u003eSTM m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#v:peekMailbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the next value from the \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "readMailbox",
          "package": "courier",
          "signature": "Mailbox m -\u003e STM m",
          "source": "src/Control-Concurrent-Mailbox.html#readMailbox",
          "type": "function"
        },
        "index": {
          "description": "Read the next value from the Mailbox",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "readMailbox",
          "normalized": "Mailbox a-\u003eSTM a",
          "package": "courier",
          "partial": "Mailbox",
          "signature": "Mailbox m-\u003eSTM m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#v:readMailbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the next message in the mailbox that matches the supplied test\nfunction or block until there is a message that does. When a message\nmatches (e.g., test functions returns \u003ccode\u003eJust v\u003c/code\u003e), return it.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "selectMailbox",
          "package": "courier",
          "signature": "Mailbox m -\u003e (m -\u003e Maybe v) -\u003e STM v",
          "source": "src/Control-Concurrent-Mailbox.html#selectMailbox",
          "type": "function"
        },
        "index": {
          "description": "Find the next message in the mailbox that matches the supplied test function or block until there is message that does When message matches e.g test functions returns Just return it",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "selectMailbox",
          "normalized": "Mailbox a-\u003e(a-\u003eMaybe b)-\u003eSTM b",
          "package": "courier",
          "partial": "Mailbox",
          "signature": "Mailbox m-\u003e(m-\u003eMaybe v)-\u003eSTM v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#v:selectMailbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003efindMailbox\u003c/a\u003e\u003c/code\u003e which does not retry. Instead it\nreturns \u003ccode\u003eNothing\u003c/code\u003e if no value is available.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "tryFindMailbox",
          "package": "courier",
          "signature": "Mailbox m -\u003e (m -\u003e Maybe v) -\u003e STM (Maybe v)",
          "source": "src/Control-Concurrent-Mailbox.html#tryFindMailbox",
          "type": "function"
        },
        "index": {
          "description": "version of findMailbox which does not retry Instead it returns Nothing if no value is available",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "tryFindMailbox",
          "normalized": "Mailbox a-\u003e(a-\u003eMaybe b)-\u003eSTM(Maybe b)",
          "package": "courier",
          "partial": "Find Mailbox",
          "signature": "Mailbox m-\u003e(m-\u003eMaybe v)-\u003eSTM(Maybe v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#v:tryFindMailbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003epeekMailbox\u003c/a\u003e\u003c/code\u003e which does not retry. Instead it\nreturns \u003ccode\u003eNothing\u003c/code\u003e if no value is available.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "tryPeekMailbox",
          "package": "courier",
          "signature": "Mailbox m -\u003e STM (Maybe m)",
          "source": "src/Control-Concurrent-Mailbox.html#tryPeekMailbox",
          "type": "function"
        },
        "index": {
          "description": "version of peekMailbox which does not retry Instead it returns Nothing if no value is available",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "tryPeekMailbox",
          "normalized": "Mailbox a-\u003eSTM(Maybe a)",
          "package": "courier",
          "partial": "Peek Mailbox",
          "signature": "Mailbox m-\u003eSTM(Maybe m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#v:tryPeekMailbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ereadMailbox\u003c/a\u003e\u003c/code\u003e which does not retry. Instead it\nreturns \u003ccode\u003eNothing\u003c/code\u003e if no value is available.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "tryReadMailbox",
          "package": "courier",
          "signature": "Mailbox m -\u003e STM (Maybe m)",
          "source": "src/Control-Concurrent-Mailbox.html#tryReadMailbox",
          "type": "function"
        },
        "index": {
          "description": "version of readMailbox which does not retry Instead it returns Nothing if no value is available",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "tryReadMailbox",
          "normalized": "Mailbox a-\u003eSTM(Maybe a)",
          "package": "courier",
          "partial": "Read Mailbox",
          "signature": "Mailbox m-\u003eSTM(Maybe m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#v:tryReadMailbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eselectMailbox\u003c/a\u003e\u003c/code\u003e which does not retry. Instead it\nreturns \u003ccode\u003eNothing\u003c/code\u003e if no value is available.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "trySelectMailbox",
          "package": "courier",
          "signature": "Mailbox m -\u003e (m -\u003e Maybe v) -\u003e STM (Maybe v)",
          "source": "src/Control-Concurrent-Mailbox.html#trySelectMailbox",
          "type": "function"
        },
        "index": {
          "description": "version of selectMailbox which does not retry Instead it returns Nothing if no value is available",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "trySelectMailbox",
          "normalized": "Mailbox a-\u003e(a-\u003eMaybe b)-\u003eSTM(Maybe b)",
          "package": "courier",
          "partial": "Select Mailbox",
          "signature": "Mailbox m-\u003e(m-\u003eMaybe v)-\u003eSTM(Maybe v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#v:trySelectMailbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a data item back onto a channel, where it will be the next item read.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "unGetMailbox",
          "package": "courier",
          "signature": "Mailbox m -\u003e m -\u003e STM ()",
          "source": "src/Control-Concurrent-Mailbox.html#unGetMailbox",
          "type": "function"
        },
        "index": {
          "description": "Put data item back onto channel where it will be the next item read",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "unGetMailbox",
          "normalized": "Mailbox a-\u003ea-\u003eSTM()",
          "package": "courier",
          "partial": "Get Mailbox",
          "signature": "Mailbox m-\u003em-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#v:unGetMailbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to a \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "writeMailbox",
          "package": "courier",
          "signature": "Mailbox m -\u003e m -\u003e STM ()",
          "source": "src/Control-Concurrent-Mailbox.html#writeMailbox",
          "type": "function"
        },
        "index": {
          "description": "Write value to Mailbox",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "writeMailbox",
          "normalized": "Mailbox a-\u003ea-\u003eSTM()",
          "package": "courier",
          "partial": "Mailbox",
          "signature": "Mailbox m-\u003em-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Control-Concurrent-Mailbox.html#v:writeMailbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003es are a generalized abstraction for communication between parts of a program,\n whether on the same physical host or distributed over a network. \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003es are intended\n to simplify the development of network-centric applications by providing a small transport-independent\n message-passing interface, and application writers can independently alter their implementation\n by enabling their \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003es with different \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003es without modifying the logic of their\n application that sends / receives \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Endpoints",
          "name": "Endpoints",
          "package": "courier",
          "source": "src/Network-Endpoints.html",
          "type": "module"
        },
        "index": {
          "description": "Endpoint are generalized abstraction for communication between parts of program whether on the same physical host or distributed over network Endpoint are intended to simplify the development of network-centric applications by providing small transport-independent message-passing interface and application writers can independently alter their implementation by enabling their Endpoint with different Transport without modifying the logic of their application that sends receives Message",
          "hierarchy": "Network Endpoints",
          "module": "Network.Endpoints",
          "name": "Endpoints",
          "package": "courier",
          "partial": "Endpoints",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEndpoints are a locus of communication, used for sending and receive messages.\n\u003c/p\u003e",
          "module": "Network.Endpoints",
          "name": "Endpoint",
          "package": "courier",
          "source": "src/Network-Endpoints.html#Endpoint",
          "type": "data"
        },
        "index": {
          "description": "Endpoints are locus of communication used for sending and receive messages",
          "hierarchy": "Network Endpoints",
          "module": "Network.Endpoints",
          "name": "Endpoint",
          "package": "courier",
          "partial": "Endpoint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#t:Endpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinding an \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e prepares the \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e to receive\nmessages sent to the bound name.  Upon success, the result will be \u003ccode\u003eRight ()\u003c/code\u003e, but\nif failed, \u003ccode\u003eLeft text-of-error-message\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Endpoints",
          "name": "bindEndpoint",
          "package": "courier",
          "signature": "Endpoint -\u003e Name -\u003e IO (Either String ())",
          "source": "src/Network-Endpoints.html#bindEndpoint",
          "type": "function"
        },
        "index": {
          "description": "Binding an Endpoint to Name prepares the Endpoint to receive messages sent to the bound name Upon success the result will be Right but if failed Left text-of-error-message",
          "hierarchy": "Network Endpoints",
          "module": "Network.Endpoints",
          "name": "bindEndpoint",
          "normalized": "Endpoint-\u003eName-\u003eIO(Either String())",
          "package": "courier",
          "partial": "Endpoint",
          "signature": "Endpoint-\u003eName-\u003eIO(Either String())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:bindEndpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvoke \u003ccode\u003e\u003ca\u003ebindEndpoint\u003c/a\u003e\u003c/code\u003e, but ignore any returned result (success or failure).\n\u003c/p\u003e",
          "module": "Network.Endpoints",
          "name": "bindEndpoint_",
          "package": "courier",
          "signature": "Endpoint -\u003e Name -\u003e IO ()",
          "source": "src/Network-Endpoints.html#bindEndpoint_",
          "type": "function"
        },
        "index": {
          "description": "Invoke bindEndpoint but ignore any returned result success or failure",
          "hierarchy": "Network Endpoints",
          "module": "Network.Endpoints",
          "name": "bindEndpoint_",
          "normalized": "Endpoint-\u003eName-\u003eIO()",
          "package": "courier",
          "partial": "Endpoint",
          "signature": "Endpoint-\u003eName-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:bindEndpoint_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper for sending a single \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e to several \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Network.Endpoints",
          "name": "broadcastMessage",
          "package": "courier",
          "signature": "Endpoint -\u003e [Name] -\u003e Message -\u003e IO [Either String ()]",
          "source": "src/Network-Endpoints.html#broadcastMessage",
          "type": "function"
        },
        "index": {
          "description": "Helper for sending single Message to several Endpoint",
          "hierarchy": "Network Endpoints",
          "module": "Network.Endpoints",
          "name": "broadcastMessage",
          "normalized": "Endpoint-\u003e[Name]-\u003eMessage-\u003eIO[Either String()]",
          "package": "courier",
          "partial": "Message",
          "signature": "Endpoint-\u003e[Name]-\u003eMessage-\u003eIO[Either String()]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:broadcastMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003ebroadcastMessage\u003c/a\u003e\u003c/code\u003e that ignores the results of sending.\n\u003c/p\u003e",
          "module": "Network.Endpoints",
          "name": "broadcastMessage_",
          "package": "courier",
          "signature": "Endpoint -\u003e [Name] -\u003e Message -\u003e IO ()",
          "source": "src/Network-Endpoints.html#broadcastMessage_",
          "type": "function"
        },
        "index": {
          "description": "Variant of broadcastMessage that ignores the results of sending",
          "hierarchy": "Network Endpoints",
          "module": "Network.Endpoints",
          "name": "broadcastMessage_",
          "normalized": "Endpoint-\u003e[Name]-\u003eMessage-\u003eIO()",
          "package": "courier",
          "partial": "Message",
          "signature": "Endpoint-\u003e[Name]-\u003eMessage-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:broadcastMessage_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDispatch the next available message in the \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e matching\nthe supplied test function, or blocking until one is available. Once a\nmatching message is found, handle the message with the supplied handler\nand return any result obtained. This function differs from \u003ccode\u003e\u003ca\u003ereceiveMessage\u003c/a\u003e\u003c/code\u003e\nin that it supports out of order message reception.\n\u003c/p\u003e",
          "module": "Network.Endpoints",
          "name": "dispatchMessage",
          "package": "courier",
          "signature": "Endpoint -\u003e (Message -\u003e Maybe v) -\u003e (v -\u003e IO r) -\u003e IO r",
          "source": "src/Network-Endpoints.html#dispatchMessage",
          "type": "function"
        },
        "index": {
          "description": "Dispatch the next available message in the Endpoint Mailbox matching the supplied test function or blocking until one is available Once matching message is found handle the message with the supplied handler and return any result obtained This function differs from receiveMessage in that it supports out of order message reception",
          "hierarchy": "Network Endpoints",
          "module": "Network.Endpoints",
          "name": "dispatchMessage",
          "normalized": "Endpoint-\u003e(Message-\u003eMaybe a)-\u003e(a-\u003eIO b)-\u003eIO b",
          "package": "courier",
          "partial": "Message",
          "signature": "Endpoint-\u003e(Message-\u003eMaybe v)-\u003e(v-\u003eIO r)-\u003eIO r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:dispatchMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Endpoints",
          "name": "dispatchMessageTimeout",
          "package": "courier",
          "signature": "Endpoint -\u003e Int -\u003e (Message -\u003e Maybe v) -\u003e (v -\u003e IO r) -\u003e IO (Maybe r)",
          "source": "src/Network-Endpoints.html#dispatchMessageTimeout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Endpoints",
          "module": "Network.Endpoints",
          "name": "dispatchMessageTimeout",
          "normalized": "Endpoint-\u003eInt-\u003e(Message-\u003eMaybe a)-\u003e(a-\u003eIO b)-\u003eIO(Maybe b)",
          "package": "courier",
          "partial": "Message Timeout",
          "signature": "Endpoint-\u003eInt-\u003e(Message-\u003eMaybe v)-\u003e(v-\u003eIO r)-\u003eIO(Maybe r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:dispatchMessageTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e using the provided transports.\n\u003c/p\u003e",
          "module": "Network.Endpoints",
          "name": "newEndpoint",
          "package": "courier",
          "signature": "[Transport] -\u003e IO Endpoint",
          "source": "src/Network-Endpoints.html#newEndpoint",
          "type": "function"
        },
        "index": {
          "description": "Create new Endpoint using the provided transports",
          "hierarchy": "Network Endpoints",
          "module": "Network.Endpoints",
          "name": "newEndpoint",
          "normalized": "[Transport]-\u003eIO Endpoint",
          "package": "courier",
          "partial": "Endpoint",
          "signature": "[Transport]-\u003eIO Endpoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:newEndpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePosts a \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e directly to an \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e, without use of a transport. This\nmay be useful for applications that prefer to use the \u003ccode\u003eEndpoint'\u003c/code\u003es \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e\nas a general queue of ordered messages.\n\u003c/p\u003e",
          "module": "Network.Endpoints",
          "name": "postMessage",
          "package": "courier",
          "signature": "Endpoint -\u003e Message -\u003e IO ()",
          "source": "src/Network-Endpoints.html#postMessage",
          "type": "function"
        },
        "index": {
          "description": "Posts Message directly to an Endpoint without use of transport This may be useful for applications that prefer to use the Endpoint Mailbox as general queue of ordered messages",
          "hierarchy": "Network Endpoints",
          "module": "Network.Endpoints",
          "name": "postMessage",
          "normalized": "Endpoint-\u003eMessage-\u003eIO()",
          "package": "courier",
          "partial": "Message",
          "signature": "Endpoint-\u003eMessage-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:postMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive the next \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e sent to the \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e, blocking until a message is available.\n\u003c/p\u003e",
          "module": "Network.Endpoints",
          "name": "receiveMessage",
          "package": "courier",
          "signature": "Endpoint -\u003e IO Message",
          "source": "src/Network-Endpoints.html#receiveMessage",
          "type": "function"
        },
        "index": {
          "description": "Receive the next Message sent to the Endpoint blocking until message is available",
          "hierarchy": "Network Endpoints",
          "module": "Network.Endpoints",
          "name": "receiveMessage",
          "normalized": "Endpoint-\u003eIO Message",
          "package": "courier",
          "partial": "Message",
          "signature": "Endpoint-\u003eIO Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:receiveMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for a message to be received within the timeout, blocking until either a message\nis available or the timeout has occurred.  If a message was available, returns \u003ccode\u003eJust message\u003c/code\u003e,\nbut returns \u003ccode\u003eNothing\u003c/code\u003e if no message available before the timeout occurred.\n\u003c/p\u003e",
          "module": "Network.Endpoints",
          "name": "receiveMessageTimeout",
          "package": "courier",
          "signature": "Endpoint -\u003e Int -\u003e IO (Maybe Message)",
          "source": "src/Network-Endpoints.html#receiveMessageTimeout",
          "type": "function"
        },
        "index": {
          "description": "Wait for message to be received within the timeout blocking until either message is available or the timeout has occurred If message was available returns Just message but returns Nothing if no message available before the timeout occurred",
          "hierarchy": "Network Endpoints",
          "module": "Network.Endpoints",
          "name": "receiveMessageTimeout",
          "normalized": "Endpoint-\u003eInt-\u003eIO(Maybe Message)",
          "package": "courier",
          "partial": "Message Timeout",
          "signature": "Endpoint-\u003eInt-\u003eIO(Maybe Message)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:receiveMessageTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect the next available message in the \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e matching\nthe supplied test function, or blocking until one is available. This function\ndiffers from \u003ccode\u003e\u003ca\u003ereceiveMessage\u003c/a\u003e\u003c/code\u003e in that it supports out of order message reception.\n\u003c/p\u003e",
          "module": "Network.Endpoints",
          "name": "selectMessage",
          "package": "courier",
          "signature": "Endpoint -\u003e (Message -\u003e Maybe v) -\u003e IO v",
          "source": "src/Network-Endpoints.html#selectMessage",
          "type": "function"
        },
        "index": {
          "description": "Select the next available message in the Endpoint Mailbox matching the supplied test function or blocking until one is available This function differs from receiveMessage in that it supports out of order message reception",
          "hierarchy": "Network Endpoints",
          "module": "Network.Endpoints",
          "name": "selectMessage",
          "normalized": "Endpoint-\u003e(Message-\u003eMaybe a)-\u003eIO a",
          "package": "courier",
          "partial": "Message",
          "signature": "Endpoint-\u003e(Message-\u003eMaybe v)-\u003eIO v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:selectMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for a message to be selected within the timeout, blocking until either a message\nis available or the timeout has occurred.  If a message was available, returns \u003ccode\u003eJust message\u003c/code\u003e,\nbut returns \u003ccode\u003eNothing\u003c/code\u003e if no message available before the timeout occurred. Like\n\u003ccode\u003e\u003ca\u003eselectMessage\u003c/a\u003e\u003c/code\u003e, this function enables out of order message reception.\n\u003c/p\u003e",
          "module": "Network.Endpoints",
          "name": "selectMessageTimeout",
          "package": "courier",
          "signature": "Endpoint -\u003e Int -\u003e (Message -\u003e Maybe v) -\u003e IO (Maybe v)",
          "source": "src/Network-Endpoints.html#selectMessageTimeout",
          "type": "function"
        },
        "index": {
          "description": "Wait for message to be selected within the timeout blocking until either message is available or the timeout has occurred If message was available returns Just message but returns Nothing if no message available before the timeout occurred Like selectMessage this function enables out of order message reception",
          "hierarchy": "Network Endpoints",
          "module": "Network.Endpoints",
          "name": "selectMessageTimeout",
          "normalized": "Endpoint-\u003eInt-\u003e(Message-\u003eMaybe a)-\u003eIO(Maybe a)",
          "package": "courier",
          "partial": "Message Timeout",
          "signature": "Endpoint-\u003eInt-\u003e(Message-\u003eMaybe v)-\u003eIO(Maybe v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:selectMessageTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e to specific \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e via the indicated \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e. While a successful\nresponse (indicated by returning \u003ccode\u003eRight ()\u003c/code\u003e) indicates that there was no error initiating\ntransport of the message, success does not guarantee that an \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e received the message.\nFailure initiating transport is indicated by returning \u003ccode\u003eLeft text-of-error-message\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Endpoints",
          "name": "sendMessage",
          "package": "courier",
          "signature": "Endpoint -\u003e Name -\u003e Message -\u003e IO (Either String ())",
          "source": "src/Network-Endpoints.html#sendMessage",
          "type": "function"
        },
        "index": {
          "description": "Send Message to specific Name via the indicated Endpoint While successful response indicated by returning Right indicates that there was no error initiating transport of the message success does not guarantee that an Endpoint received the message Failure initiating transport is indicated by returning Left text-of-error-message",
          "hierarchy": "Network Endpoints",
          "module": "Network.Endpoints",
          "name": "sendMessage",
          "normalized": "Endpoint-\u003eName-\u003eMessage-\u003eIO(Either String())",
          "package": "courier",
          "partial": "Message",
          "signature": "Endpoint-\u003eName-\u003eMessage-\u003eIO(Either String())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:sendMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003esendMessage\u003c/a\u003e\u003c/code\u003e for use when the return value can be ignored.\n\u003c/p\u003e",
          "module": "Network.Endpoints",
          "name": "sendMessage_",
          "package": "courier",
          "signature": "Endpoint -\u003e Name -\u003e Message -\u003e IO ()",
          "source": "src/Network-Endpoints.html#sendMessage_",
          "type": "function"
        },
        "index": {
          "description": "variant of sendMessage for use when the return value can be ignored",
          "hierarchy": "Network Endpoints",
          "module": "Network.Endpoints",
          "name": "sendMessage_",
          "normalized": "Endpoint-\u003eName-\u003eMessage-\u003eIO()",
          "package": "courier",
          "partial": "Message",
          "signature": "Endpoint-\u003eName-\u003eMessage-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:sendMessage_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnbind an \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e, after which the \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e will eventually not \nreceive messages sent to that \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e. Note that there is no guarantee that after \u003ccode\u003eUnbind\u003c/code\u003e\nsucceeds that additional messages to that \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e will not be delivered: the only guarantee\nis that eventually messages will no longer be delivered.\nUpon success, the result will be \u003ccode\u003eRight ()\u003c/code\u003e but\nif failed, \u003ccode\u003eLeft text-of-error-message\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Endpoints",
          "name": "unbindEndpoint",
          "package": "courier",
          "signature": "Endpoint -\u003e Name -\u003e IO (Either String ())",
          "source": "src/Network-Endpoints.html#unbindEndpoint",
          "type": "function"
        },
        "index": {
          "description": "Unbind an Endpoint from Name after which the Endpoint will eventually not receive messages sent to that Name Note that there is no guarantee that after Unbind succeeds that additional messages to that Name will not be delivered the only guarantee is that eventually messages will no longer be delivered Upon success the result will be Right but if failed Left text-of-error-message",
          "hierarchy": "Network Endpoints",
          "module": "Network.Endpoints",
          "name": "unbindEndpoint",
          "normalized": "Endpoint-\u003eName-\u003eIO(Either String())",
          "package": "courier",
          "partial": "Endpoint",
          "signature": "Endpoint-\u003eName-\u003eIO(Either String())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:unbindEndpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvoke \u003ccode\u003e\u003ca\u003eunbindEndpoint\u003c/a\u003e\u003c/code\u003e, but ignore any returned result (success or failure).\n\u003c/p\u003e",
          "module": "Network.Endpoints",
          "name": "unbindEndpoint_",
          "package": "courier",
          "signature": "Endpoint -\u003e Name -\u003e IO ()",
          "source": "src/Network-Endpoints.html#unbindEndpoint_",
          "type": "function"
        },
        "index": {
          "description": "Invoke unbindEndpoint but ignore any returned result success or failure",
          "hierarchy": "Network Endpoints",
          "module": "Network.Endpoints",
          "name": "unbindEndpoint_",
          "normalized": "Endpoint-\u003eName-\u003eIO()",
          "package": "courier",
          "partial": "Endpoint",
          "signature": "Endpoint-\u003eName-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Endpoints.html#v:unbindEndpoint_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of synchronous remote procedure calls\n (\u003ca\u003eRPC\u003c/a\u003e) on top of\n \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eApplications exporting services for use by other applications via\n RPC call \u003ccode\u003e\u003ca\u003ehandle\u003c/a\u003e\u003c/code\u003e to start listening for incoming RPC requests\n for a specific \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e.  If multiple functions or \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003es are exported,\n then separate calls to \u003ccode\u003e\u003ca\u003ehandle\u003c/a\u003e\u003c/code\u003e are necessary, one for each exported \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e.\n Each call to \u003ccode\u003e\u003ca\u003ehandle\u003c/a\u003e\u003c/code\u003e produces a \u003ccode\u003e\u003ca\u003eHandleSite\u003c/a\u003e\u003c/code\u003e which may be used to terminate\n future handling of RPCs for that specific method by calling \u003ccode\u003e\u003ca\u003ehangup\u003c/a\u003e\u003c/code\u003e on the\n returned \u003ccode\u003e\u003ca\u003eHandleSite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eApplications wishing to make RPCs to other applications or services do so\n by first constructing a \u003ccode\u003e\u003ca\u003eCallSite\u003c/a\u003e\u003c/code\u003e, and then \u003ccode\u003e\u003ca\u003ecall\u003c/a\u003e\u003c/code\u003eing specific methods\n on the target handler through that \u003ccode\u003e\u003ca\u003eCallSite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBoth single and multiple target RPCs are available, as are variants that\n either wait indefinitely or at most for a defined timeout.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.RPC",
          "name": "RPC",
          "package": "courier",
          "source": "src/Network-RPC.html",
          "type": "module"
        },
        "index": {
          "description": "An implementation of synchronous remote procedure calls RPC on top of Endpoint Applications exporting services for use by other applications via RPC call handle to start listening for incoming RPC requests for specific Method If multiple functions or Method are exported then separate calls to handle are necessary one for each exported Method Each call to handle produces HandleSite which may be used to terminate future handling of RPCs for that specific method by calling hangup on the returned HandleSite Applications wishing to make RPCs to other applications or services do so by first constructing CallSite and then call ing specific methods on the target handler through that CallSite Both single and multiple target RPCs are available as are variants that either wait indefinitely or at most for defined timeout",
          "hierarchy": "Network RPC",
          "module": "Network.RPC",
          "name": "RPC",
          "package": "courier",
          "partial": "RPC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-RPC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA call site is a location for making RPCs: it includes an endpoint\nand a name by which recipients can return the call\n\u003c/p\u003e",
          "module": "Network.RPC",
          "name": "CallSite",
          "package": "courier",
          "source": "src/Network-RPC.html#CallSite",
          "type": "data"
        },
        "index": {
          "description": "call site is location for making RPCs it includes an endpoint and name by which recipients can return the call",
          "hierarchy": "Network RPC",
          "module": "Network.RPC",
          "name": "CallSite",
          "package": "courier",
          "partial": "Call Site",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-RPC.html#t:CallSite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eHandleSite\u003c/a\u003e\u003c/code\u003e is a just reference to the actual handler of a specific method.\nMostly for invoking \u003ccode\u003e\u003ca\u003ehangup\u003c/a\u003e\u003c/code\u003e on the handler, once it is no longer needed.\n\u003c/p\u003e",
          "module": "Network.RPC",
          "name": "HandleSite",
          "package": "courier",
          "source": "src/Network-RPC.html#HandleSite",
          "type": "data"
        },
        "index": {
          "description": "HandleSite is just reference to the actual handler of specific method Mostly for invoking hangup on the handler once it is no longer needed",
          "hierarchy": "Network RPC",
          "module": "Network.RPC",
          "name": "HandleSite",
          "package": "courier",
          "partial": "Handle Site",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-RPC.html#t:HandleSite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.RPC",
          "name": "Method",
          "package": "courier",
          "source": "src/Network-RPC.html#Method",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network RPC",
          "module": "Network.RPC",
          "name": "Method",
          "package": "courier",
          "partial": "Method",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-RPC.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eReply\u003c/a\u003e\u003c/code\u003e is a one-shot function for sending a response to an incoming request.\n\u003c/p\u003e",
          "module": "Network.RPC",
          "name": "Reply",
          "package": "courier",
          "source": "src/Network-RPC.html#Reply",
          "type": "type"
        },
        "index": {
          "description": "Reply is one-shot function for sending response to an incoming request",
          "hierarchy": "Network RPC",
          "module": "Network.RPC",
          "name": "Reply",
          "package": "courier",
          "partial": "Reply",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-RPC.html#t:Reply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall a method with the provided arguments on the recipient with the given name.\nA request will be made through the \u003ccode\u003eCallSite'\u003c/code\u003es \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e, and then\nthe caller will wait until a matching response is received.\n\u003c/p\u003e",
          "module": "Network.RPC",
          "name": "call",
          "package": "courier",
          "signature": "CallSite -\u003e Name -\u003e Method -\u003e a -\u003e IO b",
          "source": "src/Network-RPC.html#call",
          "type": "function"
        },
        "index": {
          "description": "Call method with the provided arguments on the recipient with the given name request will be made through the CallSite Endpoint and then the caller will wait until matching response is received",
          "hierarchy": "Network RPC",
          "module": "Network.RPC",
          "name": "call",
          "normalized": "CallSite-\u003eName-\u003eMethod-\u003ea-\u003eIO b",
          "package": "courier",
          "signature": "CallSite-\u003eName-\u003eMethod-\u003ea-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-RPC.html#v:call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall a method with the provided arguments on the recipient with the given name.\nA request will be made through the \u003ccode\u003eCallSite'\u003c/code\u003es \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e, and then\nthe caller will wait until a matching response is received. If a response\nis received within the provided timeout (measured in microseconds), then\nreturn the value wrapped in \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e; otherwise, if the timeout expires\nbefore the call returns, then return 'Nothing.\n\u003c/p\u003e",
          "module": "Network.RPC",
          "name": "callWithTimeout",
          "package": "courier",
          "signature": "CallSite -\u003e Name -\u003e Method -\u003e Int -\u003e a -\u003e IO (Maybe b)",
          "source": "src/Network-RPC.html#callWithTimeout",
          "type": "function"
        },
        "index": {
          "description": "Call method with the provided arguments on the recipient with the given name request will be made through the CallSite Endpoint and then the caller will wait until matching response is received If response is received within the provided timeout measured in microseconds then return the value wrapped in Just otherwise if the timeout expires before the call returns then return Nothing",
          "hierarchy": "Network RPC",
          "module": "Network.RPC",
          "name": "callWithTimeout",
          "normalized": "CallSite-\u003eName-\u003eMethod-\u003eInt-\u003ea-\u003eIO(Maybe b)",
          "package": "courier",
          "partial": "With Timeout",
          "signature": "CallSite-\u003eName-\u003eMethod-\u003eInt-\u003ea-\u003eIO(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-RPC.html#v:callWithTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup call or RPC: call a method with the provided arguments on all the recipients with the given names.\nA request will be made through the \u003ccode\u003eCallSite'\u003c/code\u003es \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e, and then\nthe caller will wait until all matching responses are received.\n\u003c/p\u003e",
          "module": "Network.RPC",
          "name": "gcall",
          "package": "courier",
          "signature": "CallSite -\u003e [Name] -\u003e Method -\u003e a -\u003e IO (Map Name b)",
          "source": "src/Network-RPC.html#gcall",
          "type": "function"
        },
        "index": {
          "description": "Group call or RPC call method with the provided arguments on all the recipients with the given names request will be made through the CallSite Endpoint and then the caller will wait until all matching responses are received",
          "hierarchy": "Network RPC",
          "module": "Network.RPC",
          "name": "gcall",
          "normalized": "CallSite-\u003e[Name]-\u003eMethod-\u003ea-\u003eIO(Map Name b)",
          "package": "courier",
          "signature": "CallSite-\u003e[Name]-\u003eMethod-\u003ea-\u003eIO(Map Name b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-RPC.html#v:gcall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup call or RPC but with a timeout: call a method with the provided arguments on all the\nrecipients with the given names. A request will be made through the \u003ccode\u003eCallSite'\u003c/code\u003es \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e,\nand then the caller will wait until all matching responses are received or the timeout occurs.\nThe returned \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e has a key for every \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e that was a target of the call, and the value\nof that key will be \u003ccode\u003eNothing\u003c/code\u003e if no response was received before the timeout, or \u003ccode\u003eJust value\u003c/code\u003e\nif a response was received.\n\u003c/p\u003e",
          "module": "Network.RPC",
          "name": "gcallWithTimeout",
          "package": "courier",
          "signature": "CallSite -\u003e [Name] -\u003e Method -\u003e Int -\u003e a -\u003e IO (Map Name (Maybe b))",
          "source": "src/Network-RPC.html#gcallWithTimeout",
          "type": "function"
        },
        "index": {
          "description": "Group call or RPC but with timeout call method with the provided arguments on all the recipients with the given names request will be made through the CallSite Endpoint and then the caller will wait until all matching responses are received or the timeout occurs The returned Map has key for every Name that was target of the call and the value of that key will be Nothing if no response was received before the timeout or Just value if response was received",
          "hierarchy": "Network RPC",
          "module": "Network.RPC",
          "name": "gcallWithTimeout",
          "normalized": "CallSite-\u003e[Name]-\u003eMethod-\u003eInt-\u003ea-\u003eIO(Map Name(Maybe b))",
          "package": "courier",
          "partial": "With Timeout",
          "signature": "CallSite-\u003e[Name]-\u003eMethod-\u003eInt-\u003ea-\u003eIO(Map Name(Maybe b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-RPC.html#v:gcallWithTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle all RPCs to invoke the indicated \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e on the specified \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e,\nuntil \u003ccode\u003e\u003ca\u003ehangup\u003c/a\u003e\u003c/code\u003e is called on the returned \u003ccode\u003e\u003ca\u003eHandleSite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.RPC",
          "name": "handle",
          "package": "courier",
          "signature": "Endpoint -\u003e Name -\u003e Method -\u003e (a -\u003e IO b) -\u003e IO HandleSite",
          "source": "src/Network-RPC.html#handle",
          "type": "function"
        },
        "index": {
          "description": "Handle all RPCs to invoke the indicated Method on the specified Endpoint until hangup is called on the returned HandleSite",
          "hierarchy": "Network RPC",
          "module": "Network.RPC",
          "name": "handle",
          "normalized": "Endpoint-\u003eName-\u003eMethod-\u003e(a-\u003eIO b)-\u003eIO HandleSite",
          "package": "courier",
          "signature": "Endpoint-\u003eName-\u003eMethod-\u003e(a-\u003eIO b)-\u003eIO HandleSite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-RPC.html#v:handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop handling incoming RPCs for the indicated \u003ccode\u003e\u003ca\u003eHandleSite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.RPC",
          "name": "hangup",
          "package": "courier",
          "signature": "HandleSite -\u003e IO ()",
          "source": "src/Network-RPC.html#hangup",
          "type": "function"
        },
        "index": {
          "description": "Stop handling incoming RPCs for the indicated HandleSite",
          "hierarchy": "Network RPC",
          "module": "Network.RPC",
          "name": "hangup",
          "normalized": "HandleSite-\u003eIO()",
          "package": "courier",
          "signature": "HandleSite-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-RPC.html#v:hangup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for a single incoming request to invoke the indicated \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e on the specified\n\u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e. Return both the method arguments and a \u003ccode\u003e\u003ca\u003eReply\u003c/a\u003e\u003c/code\u003e function useful for sending\nthe reply.  A good pattern for using \u003ccode\u003e\u003ca\u003ehear\u003c/a\u003e\u003c/code\u003e will pattern match the result to a tuple of\nthe form \u003ccode\u003e(args,reply)\u003c/code\u003e, then use the args as needed to compute a result, and then\nfinally send the result back to the client by simply passing the result to reply: \u003ccode\u003ereply result\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe invoker of \u003ccode\u003e\u003ca\u003ehear\u003c/a\u003e\u003c/code\u003e must supply the \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e they have bound to the \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e, as this\nhelps the original requestor of the RPC differentiate responses when the RPC was a group\ncall.\n\u003c/p\u003e",
          "module": "Network.RPC",
          "name": "hear",
          "package": "courier",
          "signature": "Endpoint -\u003e Name -\u003e Method -\u003e IO (a, Reply b)",
          "source": "src/Network-RPC.html#hear",
          "type": "function"
        },
        "index": {
          "description": "Wait for single incoming request to invoke the indicated Method on the specified Endpoint Return both the method arguments and Reply function useful for sending the reply good pattern for using hear will pattern match the result to tuple of the form args reply then use the args as needed to compute result and then finally send the result back to the client by simply passing the result to reply reply result The invoker of hear must supply the Name they have bound to the Endpoint as this helps the original requestor of the RPC differentiate responses when the RPC was group call",
          "hierarchy": "Network RPC",
          "module": "Network.RPC",
          "name": "hear",
          "normalized": "Endpoint-\u003eName-\u003eMethod-\u003eIO(a,Reply b)",
          "package": "courier",
          "signature": "Endpoint-\u003eName-\u003eMethod-\u003eIO(a,Reply b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-RPC.html#v:hear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ehear\u003c/a\u003e\u003c/code\u003e, except return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no request received within the specified\ntimeout (measured in microseconds), or return a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e instance containing both the\nmethod arguments and a \u003ccode\u003e\u003ca\u003eReply\u003c/a\u003e\u003c/code\u003e function useful for sending the reply.\n\u003c/p\u003e",
          "module": "Network.RPC",
          "name": "hearTimeout",
          "package": "courier",
          "signature": "Endpoint -\u003e Name -\u003e Method -\u003e Int -\u003e IO (Maybe (a, Reply b))",
          "source": "src/Network-RPC.html#hearTimeout",
          "type": "function"
        },
        "index": {
          "description": "Same as hear except return Nothing if no request received within the specified timeout measured in microseconds or return Just instance containing both the method arguments and Reply function useful for sending the reply",
          "hierarchy": "Network RPC",
          "module": "Network.RPC",
          "name": "hearTimeout",
          "normalized": "Endpoint-\u003eName-\u003eMethod-\u003eInt-\u003eIO(Maybe(a,Reply b))",
          "package": "courier",
          "partial": "Timeout",
          "signature": "Endpoint-\u003eName-\u003eMethod-\u003eInt-\u003eIO(Maybe(a,Reply b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-RPC.html#v:hearTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eCallSite\u003c/a\u003e\u003c/code\u003e using the indicated \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e for sending\nRPCs and using the specified \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e for receiving responses.\n\u003c/p\u003e",
          "module": "Network.RPC",
          "name": "newCallSite",
          "package": "courier",
          "signature": "Endpoint -\u003e Name -\u003e CallSite",
          "source": "src/Network-RPC.html#newCallSite",
          "type": "function"
        },
        "index": {
          "description": "Create new CallSite using the indicated Endpoint for sending RPCs and using the specified Name for receiving responses",
          "hierarchy": "Network RPC",
          "module": "Network.RPC",
          "name": "newCallSite",
          "normalized": "Endpoint-\u003eName-\u003eCallSite",
          "package": "courier",
          "partial": "Call Site",
          "signature": "Endpoint-\u003eName-\u003eCallSite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-RPC.html#v:newCallSite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMemory transports deliver messages to other \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003es within the same shared\n address space, or operating system process.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Transport.Memory",
          "name": "Memory",
          "package": "courier",
          "source": "src/Network-Transport-Memory.html",
          "type": "module"
        },
        "index": {
          "description": "Memory transports deliver messages to other Endpoint within the same shared address space or operating system process",
          "hierarchy": "Network Transport Memory",
          "module": "Network.Transport.Memory",
          "name": "Memory",
          "package": "courier",
          "partial": "Memory",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport-Memory.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new memory \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e for use by \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Network.Transport.Memory",
          "name": "newMemoryTransport",
          "package": "courier",
          "signature": "IO Transport",
          "source": "src/Network-Transport-Memory.html#newMemoryTransport",
          "type": "function"
        },
        "index": {
          "description": "Create new memory Transport for use by Endpoint",
          "hierarchy": "Network Transport Memory",
          "module": "Network.Transport.Memory",
          "name": "newMemoryTransport",
          "package": "courier",
          "partial": "Memory Transport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport-Memory.html#v:newMemoryTransport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTCP transports deliver messages to other \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003es using TCP/IP.\n\u003c/p\u003e\u003cp\u003eEach TCP transport manages both socket bindings and connections on behalf of\n \u003ccode\u003eEndpoint\u003c/code\u003es, dynamically opening / closing new sockets as needed to deliver\n messages to other \u003ccode\u003eEndpoint\u003c/code\u003es using TCP transports.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Transport.TCP",
          "name": "TCP",
          "package": "courier",
          "source": "src/Network-Transport-TCP.html",
          "type": "module"
        },
        "index": {
          "description": "TCP transports deliver messages to other Endpoint using TCP IP Each TCP transport manages both socket bindings and connections on behalf of Endpoint dynamically opening closing new sockets as needed to deliver messages to other Endpoint using TCP transports",
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "TCP",
          "package": "courier",
          "partial": "TCP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport-TCP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e suitable for sending messages over TCP/IP.  There can\nbe multiple instances of these \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003es: \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003e using\ndifferent instances will still be able to communicate, provided they use\ncorrect TCP/IP addresses (or hostnames) for communication.\n\u003c/p\u003e",
          "module": "Network.Transport.TCP",
          "name": "newTCPTransport",
          "package": "courier",
          "signature": "Resolver -\u003e IO Transport",
          "source": "src/Network-Transport-TCP.html#newTCPTransport",
          "type": "function"
        },
        "index": {
          "description": "Create new Transport suitable for sending messages over TCP IP There can be multiple instances of these Transport Endpoint using different instances will still be able to communicate provided they use correct TCP IP addresses or hostnames for communication",
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "newTCPTransport",
          "normalized": "Resolver-\u003eIO Transport",
          "package": "courier",
          "partial": "TCPTransport",
          "signature": "Resolver-\u003eIO Transport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport-TCP.html#v:newTCPTransport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUDP transports deliver messages to other \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003es using UDP/IP.\n\u003c/p\u003e\u003cp\u003eEach UDP transport manages socket bindings on behalf of\n \u003ccode\u003eEndpoint\u003c/code\u003es, dynamically opening / closing new sockets as needed to deliver\n messages to other \u003ccode\u003eEndpoint\u003c/code\u003es using UDP transports.\n\u003c/p\u003e\u003cp\u003eThere is no reuse of sockets on the sending side, so while messages will be \n received on a known bound port, the remote sending port will vary arbitrarily.\n\u003c/p\u003e\u003cp\u003eThis transport only reads at most 512 bytes from incoming packets: constraining\n the packet size avoids fragmentation.  Applications using this transport should take\n responsibility for fragmentation, reassembly, retransmission of lost packets,\n and congestion control.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Transport.UDP",
          "name": "UDP",
          "package": "courier",
          "source": "src/Network-Transport-UDP.html",
          "type": "module"
        },
        "index": {
          "description": "UDP transports deliver messages to other Endpoint using UDP IP Each UDP transport manages socket bindings on behalf of Endpoint dynamically opening closing new sockets as needed to deliver messages to other Endpoint using UDP transports There is no reuse of sockets on the sending side so while messages will be received on known bound port the remote sending port will vary arbitrarily This transport only reads at most bytes from incoming packets constraining the packet size avoids fragmentation Applications using this transport should take responsibility for fragmentation reassembly retransmission of lost packets and congestion control",
          "hierarchy": "Network Transport UDP",
          "module": "Network.Transport.UDP",
          "name": "UDP",
          "package": "courier",
          "partial": "UDP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport-UDP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport.UDP",
          "name": "newUDPTransport",
          "package": "courier",
          "signature": "Resolver -\u003e IO Transport",
          "source": "src/Network-Transport-UDP.html#newUDPTransport",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport UDP",
          "module": "Network.Transport.UDP",
          "name": "newUDPTransport",
          "normalized": "Resolver-\u003eIO Transport",
          "package": "courier",
          "partial": "UDPTransport",
          "signature": "Resolver-\u003eIO Transport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport-UDP.html#v:newUDPTransport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e abstracts the details of message delivery, and defines the interfaces\n that specific \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e implementations should provide in order to deliver messages\n for \u003ccode\u003eEndpoint\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Transport",
          "name": "Transport",
          "package": "courier",
          "source": "src/Network-Transport.html",
          "type": "module"
        },
        "index": {
          "description": "Transport abstracts the details of message delivery and defines the interfaces that specific Transport implementations should provide in order to deliver messages for Endpoint",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "Transport",
          "package": "courier",
          "partial": "Transport",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e is a place where transports can put messages for \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003es\nto receive.  Typically \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003es will use the same \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e when\nbinding or connecting with a \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAn address is a logical identifier suitable for establishing a connection to\nanother \u003ccode\u003eEndpoint\u003c/code\u003e over a \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e. It's use (if at all) is specific to the \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e\nin question.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "Address",
          "package": "courier",
          "source": "src/Network-Transport.html#Address",
          "type": "type"
        },
        "index": {
          "description": "Mailbox is place where transports can put messages for Endpoint to receive Typically Endpoint will use the same Mailbox when binding or connecting with Transport An address is logical identifier suitable for establishing connection to another Endpoint over Transport It use if at all is specific to the Transport in question",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "Address",
          "package": "courier",
          "partial": "Address",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#t:Address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBindings are a site for receiving messages on a particular \u003ccode\u003e\u003ca\u003eAddress\u003c/a\u003e\u003c/code\u003e\nthrough a \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "Binding",
          "package": "courier",
          "source": "src/Network-Transport.html#Binding",
          "type": "data"
        },
        "index": {
          "description": "Bindings are site for receiving messages on particular Address through Transport",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "Binding",
          "package": "courier",
          "partial": "Binding",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#t:Binding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eEnvelope\u003c/a\u003e\u003c/code\u003e is a container for a \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e with the \u003ccode\u003e\u003ca\u003eAddress\u003c/a\u003e\u003c/code\u003e of the \u003ccode\u003eMessage'\u003c/code\u003es destination.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "Envelope",
          "package": "courier",
          "source": "src/Network-Transport.html#Envelope",
          "type": "data"
        },
        "index": {
          "description": "An Envelope is container for Message with the Address of the Message destination",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "Envelope",
          "package": "courier",
          "partial": "Envelope",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#t:Envelope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessages are containers for arbitrary data that may be sent to other \u003ccode\u003e\u003ca\u003eEndpoint\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "Message",
          "package": "courier",
          "source": "src/Network-Transport.html#Message",
          "type": "type"
        },
        "index": {
          "description": "Messages are containers for arbitrary data that may be sent to other Endpoint",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "Message",
          "package": "courier",
          "partial": "Message",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName for uniquely identifying an \u003ccode\u003eEndpoint\u003c/code\u003e; suitable for identifying\nthe target destination for a \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "Name",
          "package": "courier",
          "source": "src/Network-Transport.html#Name",
          "type": "type"
        },
        "index": {
          "description": "Name for uniquely identifying an Endpoint suitable for identifying the target destination for Message",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "Name",
          "package": "courier",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eResolver\u003c/a\u003e\u003c/code\u003e translates a name into an \u003ccode\u003e\u003ca\u003eAddress\u003c/a\u003e\u003c/code\u003e, if possible. \n\u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003es may find resolvers useful for determing\nwhere to reach a specific \u003ccode\u003eEndpoint\u003c/code\u003e, given it''s \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "Resolver",
          "package": "courier",
          "source": "src/Network-Transport.html#Resolver",
          "type": "data"
        },
        "index": {
          "description": "Resolver translates name into an Address if possible Transport may find resolvers useful for determing where to reach specific Endpoint given it Name",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "Resolver",
          "package": "courier",
          "partial": "Resolver",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#t:Resolver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA scheme is an identifier for a discrete type of transport.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "Scheme",
          "package": "courier",
          "source": "src/Network-Transport.html#Scheme",
          "type": "type"
        },
        "index": {
          "description": "scheme is an identifier for discrete type of transport",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "Scheme",
          "package": "courier",
          "partial": "Scheme",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#t:Scheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e defines a specific method for establishing connections\nbetween \u003ccode\u003eEndpoint\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "Transport",
          "package": "courier",
          "source": "src/Network-Transport.html#Transport",
          "type": "data"
        },
        "index": {
          "description": "Transport defines specific method for establishing connections between Endpoint",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "Transport",
          "package": "courier",
          "partial": "Transport",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#t:Transport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport",
          "name": "Binding",
          "package": "courier",
          "signature": "Binding",
          "source": "src/Network-Transport.html#Binding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "Binding",
          "package": "courier",
          "partial": "Binding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#v:Binding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport",
          "name": "Envelope",
          "package": "courier",
          "signature": "Envelope",
          "source": "src/Network-Transport.html#Envelope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "Envelope",
          "package": "courier",
          "partial": "Envelope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#v:Envelope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport",
          "name": "Transport",
          "package": "courier",
          "signature": "Transport",
          "source": "src/Network-Transport.html#Transport",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "Transport",
          "package": "courier",
          "partial": "Transport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#v:Transport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport",
          "name": "bind",
          "package": "courier",
          "signature": "Mailbox Message -\u003e Name -\u003e IO (Either String Binding)",
          "source": "src/Network-Transport.html#Transport",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "bind",
          "normalized": "Mailbox Message-\u003eName-\u003eIO(Either String Binding)",
          "package": "courier",
          "signature": "Mailbox Message-\u003eName-\u003eIO(Either String Binding)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#v:bind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport",
          "name": "bindingName",
          "package": "courier",
          "signature": "Name",
          "source": "src/Network-Transport.html#Binding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "bindingName",
          "package": "courier",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#v:bindingName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport",
          "name": "envelopeContents",
          "package": "courier",
          "signature": "Message",
          "source": "src/Network-Transport.html#Envelope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "envelopeContents",
          "package": "courier",
          "partial": "Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#v:envelopeContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport",
          "name": "envelopeDestination",
          "package": "courier",
          "signature": "Name",
          "source": "src/Network-Transport.html#Envelope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "envelopeDestination",
          "package": "courier",
          "partial": "Destination",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#v:envelopeDestination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport",
          "name": "handles",
          "package": "courier",
          "signature": "Name -\u003e IO Bool",
          "source": "src/Network-Transport.html#Transport",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "handles",
          "normalized": "Name-\u003eIO Bool",
          "package": "courier",
          "signature": "Name-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#v:handles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsk the \u003ccode\u003e\u003ca\u003eResolver\u003c/a\u003e\u003c/code\u003e to find one or more \u003ccode\u003e\u003ca\u003eAddress\u003c/a\u003e\u003c/code\u003ees for the provided\n\u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e, if any are available from this resolver.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "resolve",
          "package": "courier",
          "signature": "Resolver -\u003e Name -\u003e IO (Maybe Address)",
          "source": "src/Network-Transport.html#resolve",
          "type": "function"
        },
        "index": {
          "description": "Ask the Resolver to find one or more Address es for the provided Name if any are available from this resolver",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "resolve",
          "normalized": "Resolver-\u003eName-\u003eIO(Maybe Address)",
          "package": "courier",
          "signature": "Resolver-\u003eName-\u003eIO(Maybe Address)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#v:resolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple \u003ccode\u003e\u003ca\u003eResolver\u003c/a\u003e\u003c/code\u003e that accepts an association list of \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003es to \u003ccode\u003e\u003ca\u003eAddress\u003c/a\u003e\u003c/code\u003ees\nand returns the addresses associated with a given name in the list.\n\u003c/p\u003e",
          "module": "Network.Transport",
          "name": "resolverFromList",
          "package": "courier",
          "signature": "[(Name, Address)] -\u003e Resolver",
          "source": "src/Network-Transport.html#resolverFromList",
          "type": "function"
        },
        "index": {
          "description": "simple Resolver that accepts an association list of Name to Address es and returns the addresses associated with given name in the list",
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "resolverFromList",
          "normalized": "[(Name,Address)]-\u003eResolver",
          "package": "courier",
          "partial": "From List",
          "signature": "[(Name,Address)]-\u003eResolver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#v:resolverFromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport",
          "name": "scheme",
          "package": "courier",
          "signature": "String",
          "source": "src/Network-Transport.html#Transport",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "scheme",
          "package": "courier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#v:scheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport",
          "name": "sendTo",
          "package": "courier",
          "signature": "Name -\u003e Message -\u003e IO ()",
          "source": "src/Network-Transport.html#Transport",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "sendTo",
          "normalized": "Name-\u003eMessage-\u003eIO()",
          "package": "courier",
          "partial": "To",
          "signature": "Name-\u003eMessage-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#v:sendTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport",
          "name": "shutdown",
          "package": "courier",
          "signature": "IO ()",
          "source": "src/Network-Transport.html#Transport",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "shutdown",
          "normalized": "IO()",
          "package": "courier",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#v:shutdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport",
          "name": "unbind",
          "package": "courier",
          "signature": "IO ()",
          "source": "src/Network-Transport.html#Binding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport",
          "module": "Network.Transport",
          "name": "unbind",
          "normalized": "IO()",
          "package": "courier",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/courier/docs/Network-Transport.html#v:unbind"
      }
    }
  ]
]