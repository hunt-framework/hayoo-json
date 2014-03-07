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
        "word": "control-timeout"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module handles timeouts by using a (single) thread sitting in threadDelay\n and the STM. One can request an IO action be performed after some number of\n seconds and later cancel that request if need be.\n\u003c/p\u003e\u003cp\u003eThe number of threads used is constant.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Timeout",
          "name": "Timeout",
          "package": "control-timeout",
          "source": "src/Control-Timeout.html",
          "type": "module"
        },
        "index": {
          "description": "This module handles timeouts by using single thread sitting in threadDelay and the STM One can request an IO action be performed after some number of seconds and later cancel that request if need be The number of threads used is constant",
          "hierarchy": "Control Timeout",
          "module": "Control.Timeout",
          "name": "Timeout",
          "package": "control-timeout",
          "partial": "Timeout",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/control-timeout/docs/Control-Timeout.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is an opaque type of timeouts. A value of this type is returned\n   when creating a timeout and can be used to cancel the same timeout.\n\u003c/p\u003e",
          "module": "Control.Timeout",
          "name": "TimeoutTag",
          "package": "control-timeout",
          "source": "src/Control-Timeout.html#TimeoutTag",
          "type": "data"
        },
        "index": {
          "description": "This is an opaque type of timeouts value of this type is returned when creating timeout and can be used to cancel the same timeout",
          "hierarchy": "Control Timeout",
          "module": "Control.Timeout",
          "name": "TimeoutTag",
          "package": "control-timeout",
          "partial": "Timeout Tag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/control-timeout/docs/Control-Timeout.html#t:TimeoutTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an action to be performed at some point in the future. The action will\n   occur inside a thread which is dedicated to performing them so it should\n   run quickly and certainly should not block on IO etc.\n\u003c/p\u003e",
          "module": "Control.Timeout",
          "name": "addTimeout",
          "package": "control-timeout",
          "signature": "Float-\u003e IO ()-\u003e IO TimeoutTag",
          "type": "function"
        },
        "index": {
          "description": "Add an action to be performed at some point in the future The action will occur inside thread which is dedicated to performing them so it should run quickly and certainly should not block on IO etc",
          "hierarchy": "Control Timeout",
          "module": "Control.Timeout",
          "name": "addTimeout",
          "normalized": "Float-\u003eIO()-\u003eIO TimeoutTag",
          "package": "control-timeout",
          "partial": "Timeout",
          "signature": "Float-\u003eIO()-\u003eIO TimeoutTag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-timeout/docs/Control-Timeout.html#v:addTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar in function to addTimeout above, this call splits the IO and STM\n   parts of the process so that a timeout can be added atomically. Consider\n   the following code:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e We add a timeout with an action which reads from a global TVar\n\u003c/li\u003e\u003cli\u003e We add the TimeoutTag (in case we wish to handle the timeout) and\n        some bookkeeping data to the global TVar and trigger some external\n        action (i.e. a network request)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIn this case, the timeout could occur before the bookkeeping is added. Now\n  the timeout code won't find the correct state. If we switch the two actions\n  then we don't have the TimeoutTag to add to the bookkeeping structure and we\n  would need another TVar, or some such, to fill in later.\n\u003c/p\u003e",
          "module": "Control.Timeout",
          "name": "addTimeoutAtomic",
          "package": "control-timeout",
          "signature": "Float-\u003e IO (IO () -\u003e STM TimeoutTag)",
          "type": "function"
        },
        "index": {
          "description": "Similar in function to addTimeout above this call splits the IO and STM parts of the process so that timeout can be added atomically Consider the following code We add timeout with an action which reads from global TVar We add the TimeoutTag in case we wish to handle the timeout and some bookkeeping data to the global TVar and trigger some external action i.e network request In this case the timeout could occur before the bookkeeping is added Now the timeout code won find the correct state If we switch the two actions then we don have the TimeoutTag to add to the bookkeeping structure and we would need another TVar or some such to fill in later",
          "hierarchy": "Control Timeout",
          "module": "Control.Timeout",
          "name": "addTimeoutAtomic",
          "normalized": "Float-\u003eIO(IO()-\u003eSTM TimeoutTag)",
          "package": "control-timeout",
          "partial": "Timeout Atomic",
          "signature": "Float-\u003eIO(IO()-\u003eSTM TimeoutTag)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-timeout/docs/Control-Timeout.html#v:addTimeoutAtomic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a timeout. This function never fails, but will return False if the\n   given timeout couldn't be found. This may be because cancelTimeout has\n   already been called with this tag, or because the timeout has already\n   fired. Note that, since timeouts are IO actions, they don't run atomically.\n   Thus it's possible that this call returns False and that the timeout is\n   currently in the process of running.\n\u003c/p\u003e\u003cp\u003eNote that one should never call cancelTimeout twice with the same tag since\n   it's possible that the tag will be reused and thus the second call could\n   cancel a different timeout.\n\u003c/p\u003e",
          "module": "Control.Timeout",
          "name": "cancelTimeout",
          "package": "control-timeout",
          "signature": "TimeoutTag-\u003e STM Bool",
          "type": "function"
        },
        "index": {
          "description": "Remove timeout This function never fails but will return False if the given timeout couldn be found This may be because cancelTimeout has already been called with this tag or because the timeout has already fired Note that since timeouts are IO actions they don run atomically Thus it possible that this call returns False and that the timeout is currently in the process of running Note that one should never call cancelTimeout twice with the same tag since it possible that the tag will be reused and thus the second call could cancel different timeout",
          "hierarchy": "Control Timeout",
          "module": "Control.Timeout",
          "name": "cancelTimeout",
          "normalized": "TimeoutTag-\u003eSTM Bool",
          "package": "control-timeout",
          "partial": "Timeout",
          "signature": "TimeoutTag-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-timeout/docs/Control-Timeout.html#v:cancelTimeout"
      }
    }
  ]
]