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
        "word": "stm-lifted"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.Lifted",
          "name": "Lifted",
          "package": "stm-lifted",
          "source": "src/Control-Concurrent-STM-Lifted.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent STM Lifted",
          "module": "Control.Concurrent.STM.Lifted",
          "name": "Lifted",
          "package": "stm-lifted",
          "partial": "Lifted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-Lifted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TBQueue.Lifted",
          "name": "Lifted",
          "package": "stm-lifted",
          "source": "src/Control-Concurrent-STM-TBQueue-Lifted.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TBQueue Lifted",
          "module": "Control.Concurrent.STM.TBQueue.Lifted",
          "name": "Lifted",
          "package": "stm-lifted",
          "partial": "Lifted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TBQueue-Lifted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TBQueue.Lifted",
          "name": "isEmptyTBQueueIO",
          "package": "stm-lifted",
          "signature": "TBQueue a -\u003e m Bool",
          "source": "src/Control-Concurrent-STM-TBQueue-Lifted.html#isEmptyTBQueueIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TBQueue Lifted",
          "module": "Control.Concurrent.STM.TBQueue.Lifted",
          "name": "isEmptyTBQueueIO",
          "normalized": "TBQueue a-\u003eb Bool",
          "package": "stm-lifted",
          "partial": "Empty TBQueue IO",
          "signature": "TBQueue a-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TBQueue-Lifted.html#v:isEmptyTBQueueIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TBQueue.Lifted",
          "name": "newTBQueueIO",
          "package": "stm-lifted",
          "signature": "Int -\u003e m (TBQueue a)",
          "source": "src/Control-Concurrent-STM-TBQueue-Lifted.html#newTBQueueIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TBQueue Lifted",
          "module": "Control.Concurrent.STM.TBQueue.Lifted",
          "name": "newTBQueueIO",
          "normalized": "Int-\u003ea(TBQueue b)",
          "package": "stm-lifted",
          "partial": "TBQueue IO",
          "signature": "Int-\u003em(TBQueue a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TBQueue-Lifted.html#v:newTBQueueIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TBQueue.Lifted",
          "name": "peekTBQueueIO",
          "package": "stm-lifted",
          "signature": "TBQueue a -\u003e m a",
          "source": "src/Control-Concurrent-STM-TBQueue-Lifted.html#peekTBQueueIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TBQueue Lifted",
          "module": "Control.Concurrent.STM.TBQueue.Lifted",
          "name": "peekTBQueueIO",
          "normalized": "TBQueue a-\u003eb a",
          "package": "stm-lifted",
          "partial": "TBQueue IO",
          "signature": "TBQueue a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TBQueue-Lifted.html#v:peekTBQueueIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TBQueue.Lifted",
          "name": "readTBQueueIO",
          "package": "stm-lifted",
          "signature": "TBQueue a -\u003e m a",
          "source": "src/Control-Concurrent-STM-TBQueue-Lifted.html#readTBQueueIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TBQueue Lifted",
          "module": "Control.Concurrent.STM.TBQueue.Lifted",
          "name": "readTBQueueIO",
          "normalized": "TBQueue a-\u003eb a",
          "package": "stm-lifted",
          "partial": "TBQueue IO",
          "signature": "TBQueue a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TBQueue-Lifted.html#v:readTBQueueIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TBQueue.Lifted",
          "name": "tryPeekTBQueueIO",
          "package": "stm-lifted",
          "signature": "TBQueue a -\u003e m (Maybe a)",
          "source": "src/Control-Concurrent-STM-TBQueue-Lifted.html#tryPeekTBQueueIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TBQueue Lifted",
          "module": "Control.Concurrent.STM.TBQueue.Lifted",
          "name": "tryPeekTBQueueIO",
          "normalized": "TBQueue a-\u003eb(Maybe a)",
          "package": "stm-lifted",
          "partial": "Peek TBQueue IO",
          "signature": "TBQueue a-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TBQueue-Lifted.html#v:tryPeekTBQueueIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TBQueue.Lifted",
          "name": "tryReadTBQueueIO",
          "package": "stm-lifted",
          "signature": "TBQueue a -\u003e m (Maybe a)",
          "source": "src/Control-Concurrent-STM-TBQueue-Lifted.html#tryReadTBQueueIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TBQueue Lifted",
          "module": "Control.Concurrent.STM.TBQueue.Lifted",
          "name": "tryReadTBQueueIO",
          "normalized": "TBQueue a-\u003eb(Maybe a)",
          "package": "stm-lifted",
          "partial": "Read TBQueue IO",
          "signature": "TBQueue a-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TBQueue-Lifted.html#v:tryReadTBQueueIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TBQueue.Lifted",
          "name": "unGetTBQueueIO",
          "package": "stm-lifted",
          "signature": "TBQueue a -\u003e a -\u003e m ()",
          "source": "src/Control-Concurrent-STM-TBQueue-Lifted.html#unGetTBQueueIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TBQueue Lifted",
          "module": "Control.Concurrent.STM.TBQueue.Lifted",
          "name": "unGetTBQueueIO",
          "normalized": "TBQueue a-\u003ea-\u003eb()",
          "package": "stm-lifted",
          "partial": "Get TBQueue IO",
          "signature": "TBQueue a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TBQueue-Lifted.html#v:unGetTBQueueIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TBQueue.Lifted",
          "name": "writeTBQueueIO",
          "package": "stm-lifted",
          "signature": "TBQueue a -\u003e a -\u003e m ()",
          "source": "src/Control-Concurrent-STM-TBQueue-Lifted.html#writeTBQueueIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TBQueue Lifted",
          "module": "Control.Concurrent.STM.TBQueue.Lifted",
          "name": "writeTBQueueIO",
          "normalized": "TBQueue a-\u003ea-\u003eb()",
          "package": "stm-lifted",
          "partial": "TBQueue IO",
          "signature": "TBQueue a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TBQueue-Lifted.html#v:writeTBQueueIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Lifted",
          "name": "Lifted",
          "package": "stm-lifted",
          "source": "src/Control-Concurrent-STM-TChan-Lifted.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Lifted",
          "module": "Control.Concurrent.STM.TChan.Lifted",
          "name": "Lifted",
          "package": "stm-lifted",
          "partial": "Lifted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TChan-Lifted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Lifted",
          "name": "cloneTChanIO",
          "package": "stm-lifted",
          "signature": "TChan a -\u003e m (TChan a)",
          "source": "src/Control-Concurrent-STM-TChan-Lifted.html#cloneTChanIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Lifted",
          "module": "Control.Concurrent.STM.TChan.Lifted",
          "name": "cloneTChanIO",
          "normalized": "TChan a-\u003eb(TChan a)",
          "package": "stm-lifted",
          "partial": "TChan IO",
          "signature": "TChan a-\u003em(TChan a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TChan-Lifted.html#v:cloneTChanIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Lifted",
          "name": "dupTChanIO",
          "package": "stm-lifted",
          "signature": "TChan a -\u003e m (TChan a)",
          "source": "src/Control-Concurrent-STM-TChan-Lifted.html#dupTChanIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Lifted",
          "module": "Control.Concurrent.STM.TChan.Lifted",
          "name": "dupTChanIO",
          "normalized": "TChan a-\u003eb(TChan a)",
          "package": "stm-lifted",
          "partial": "TChan IO",
          "signature": "TChan a-\u003em(TChan a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TChan-Lifted.html#v:dupTChanIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Lifted",
          "name": "isEmptyTChanIO",
          "package": "stm-lifted",
          "signature": "TChan a -\u003e m Bool",
          "source": "src/Control-Concurrent-STM-TChan-Lifted.html#isEmptyTChanIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Lifted",
          "module": "Control.Concurrent.STM.TChan.Lifted",
          "name": "isEmptyTChanIO",
          "normalized": "TChan a-\u003eb Bool",
          "package": "stm-lifted",
          "partial": "Empty TChan IO",
          "signature": "TChan a-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TChan-Lifted.html#v:isEmptyTChanIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Lifted",
          "name": "newBroadcastTChanIO",
          "package": "stm-lifted",
          "signature": "m (TChan a)",
          "source": "src/Control-Concurrent-STM-TChan-Lifted.html#newBroadcastTChanIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Lifted",
          "module": "Control.Concurrent.STM.TChan.Lifted",
          "name": "newBroadcastTChanIO",
          "package": "stm-lifted",
          "partial": "Broadcast TChan IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TChan-Lifted.html#v:newBroadcastTChanIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Lifted",
          "name": "newTChanIO",
          "package": "stm-lifted",
          "signature": "m (TChan a)",
          "source": "src/Control-Concurrent-STM-TChan-Lifted.html#newTChanIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Lifted",
          "module": "Control.Concurrent.STM.TChan.Lifted",
          "name": "newTChanIO",
          "package": "stm-lifted",
          "partial": "TChan IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TChan-Lifted.html#v:newTChanIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Lifted",
          "name": "peekTChanIO",
          "package": "stm-lifted",
          "signature": "TChan a -\u003e m a",
          "source": "src/Control-Concurrent-STM-TChan-Lifted.html#peekTChanIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Lifted",
          "module": "Control.Concurrent.STM.TChan.Lifted",
          "name": "peekTChanIO",
          "normalized": "TChan a-\u003eb a",
          "package": "stm-lifted",
          "partial": "TChan IO",
          "signature": "TChan a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TChan-Lifted.html#v:peekTChanIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Lifted",
          "name": "readTChanIO",
          "package": "stm-lifted",
          "signature": "TChan a -\u003e m a",
          "source": "src/Control-Concurrent-STM-TChan-Lifted.html#readTChanIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Lifted",
          "module": "Control.Concurrent.STM.TChan.Lifted",
          "name": "readTChanIO",
          "normalized": "TChan a-\u003eb a",
          "package": "stm-lifted",
          "partial": "TChan IO",
          "signature": "TChan a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TChan-Lifted.html#v:readTChanIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Lifted",
          "name": "tryPeekTChanIO",
          "package": "stm-lifted",
          "signature": "TChan a -\u003e m (Maybe a)",
          "source": "src/Control-Concurrent-STM-TChan-Lifted.html#tryPeekTChanIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Lifted",
          "module": "Control.Concurrent.STM.TChan.Lifted",
          "name": "tryPeekTChanIO",
          "normalized": "TChan a-\u003eb(Maybe a)",
          "package": "stm-lifted",
          "partial": "Peek TChan IO",
          "signature": "TChan a-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TChan-Lifted.html#v:tryPeekTChanIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Lifted",
          "name": "tryReadTChanIO",
          "package": "stm-lifted",
          "signature": "TChan a -\u003e m (Maybe a)",
          "source": "src/Control-Concurrent-STM-TChan-Lifted.html#tryReadTChanIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Lifted",
          "module": "Control.Concurrent.STM.TChan.Lifted",
          "name": "tryReadTChanIO",
          "normalized": "TChan a-\u003eb(Maybe a)",
          "package": "stm-lifted",
          "partial": "Read TChan IO",
          "signature": "TChan a-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TChan-Lifted.html#v:tryReadTChanIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Lifted",
          "name": "unGetTChanIO",
          "package": "stm-lifted",
          "signature": "TChan a -\u003e a -\u003e m ()",
          "source": "src/Control-Concurrent-STM-TChan-Lifted.html#unGetTChanIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Lifted",
          "module": "Control.Concurrent.STM.TChan.Lifted",
          "name": "unGetTChanIO",
          "normalized": "TChan a-\u003ea-\u003eb()",
          "package": "stm-lifted",
          "partial": "Get TChan IO",
          "signature": "TChan a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TChan-Lifted.html#v:unGetTChanIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Lifted",
          "name": "writeTChanIO",
          "package": "stm-lifted",
          "signature": "TChan a -\u003e a -\u003e m ()",
          "source": "src/Control-Concurrent-STM-TChan-Lifted.html#writeTChanIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Lifted",
          "module": "Control.Concurrent.STM.TChan.Lifted",
          "name": "writeTChanIO",
          "normalized": "TChan a-\u003ea-\u003eb()",
          "package": "stm-lifted",
          "partial": "TChan IO",
          "signature": "TChan a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TChan-Lifted.html#v:writeTChanIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TMVar.Lifted",
          "name": "Lifted",
          "package": "stm-lifted",
          "source": "src/Control-Concurrent-STM-TMVar-Lifted.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TMVar Lifted",
          "module": "Control.Concurrent.STM.TMVar.Lifted",
          "name": "Lifted",
          "package": "stm-lifted",
          "partial": "Lifted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TMVar-Lifted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TMVar.Lifted",
          "name": "isEmptyTMVarIO",
          "package": "stm-lifted",
          "signature": "TMVar a -\u003e m Bool",
          "source": "src/Control-Concurrent-STM-TMVar-Lifted.html#isEmptyTMVarIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TMVar Lifted",
          "module": "Control.Concurrent.STM.TMVar.Lifted",
          "name": "isEmptyTMVarIO",
          "normalized": "TMVar a-\u003eb Bool",
          "package": "stm-lifted",
          "partial": "Empty TMVar IO",
          "signature": "TMVar a-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TMVar-Lifted.html#v:isEmptyTMVarIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TMVar.Lifted",
          "name": "newEmptyTMVarIO",
          "package": "stm-lifted",
          "signature": "m (TMVar a)",
          "source": "src/Control-Concurrent-STM-TMVar-Lifted.html#newEmptyTMVarIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TMVar Lifted",
          "module": "Control.Concurrent.STM.TMVar.Lifted",
          "name": "newEmptyTMVarIO",
          "package": "stm-lifted",
          "partial": "Empty TMVar IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TMVar-Lifted.html#v:newEmptyTMVarIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TMVar.Lifted",
          "name": "newTMVarIO",
          "package": "stm-lifted",
          "signature": "a -\u003e m (TMVar a)",
          "source": "src/Control-Concurrent-STM-TMVar-Lifted.html#newTMVarIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TMVar Lifted",
          "module": "Control.Concurrent.STM.TMVar.Lifted",
          "name": "newTMVarIO",
          "normalized": "a-\u003eb(TMVar a)",
          "package": "stm-lifted",
          "partial": "TMVar IO",
          "signature": "a-\u003em(TMVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TMVar-Lifted.html#v:newTMVarIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TMVar.Lifted",
          "name": "putTMVarIO",
          "package": "stm-lifted",
          "signature": "TMVar a -\u003e a -\u003e m ()",
          "source": "src/Control-Concurrent-STM-TMVar-Lifted.html#putTMVarIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TMVar Lifted",
          "module": "Control.Concurrent.STM.TMVar.Lifted",
          "name": "putTMVarIO",
          "normalized": "TMVar a-\u003ea-\u003eb()",
          "package": "stm-lifted",
          "partial": "TMVar IO",
          "signature": "TMVar a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TMVar-Lifted.html#v:putTMVarIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TMVar.Lifted",
          "name": "readTMVarIO",
          "package": "stm-lifted",
          "signature": "TMVar a -\u003e m a",
          "source": "src/Control-Concurrent-STM-TMVar-Lifted.html#readTMVarIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TMVar Lifted",
          "module": "Control.Concurrent.STM.TMVar.Lifted",
          "name": "readTMVarIO",
          "normalized": "TMVar a-\u003eb a",
          "package": "stm-lifted",
          "partial": "TMVar IO",
          "signature": "TMVar a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TMVar-Lifted.html#v:readTMVarIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TMVar.Lifted",
          "name": "swapTMVarIO",
          "package": "stm-lifted",
          "signature": "TMVar a -\u003e a -\u003e m a",
          "source": "src/Control-Concurrent-STM-TMVar-Lifted.html#swapTMVarIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TMVar Lifted",
          "module": "Control.Concurrent.STM.TMVar.Lifted",
          "name": "swapTMVarIO",
          "normalized": "TMVar a-\u003ea-\u003eb a",
          "package": "stm-lifted",
          "partial": "TMVar IO",
          "signature": "TMVar a-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TMVar-Lifted.html#v:swapTMVarIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TMVar.Lifted",
          "name": "takeTMVarIO",
          "package": "stm-lifted",
          "signature": "TMVar a -\u003e m a",
          "source": "src/Control-Concurrent-STM-TMVar-Lifted.html#takeTMVarIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TMVar Lifted",
          "module": "Control.Concurrent.STM.TMVar.Lifted",
          "name": "takeTMVarIO",
          "normalized": "TMVar a-\u003eb a",
          "package": "stm-lifted",
          "partial": "TMVar IO",
          "signature": "TMVar a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TMVar-Lifted.html#v:takeTMVarIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TMVar.Lifted",
          "name": "tryPutTMVarIO",
          "package": "stm-lifted",
          "signature": "TMVar a -\u003e a -\u003e m Bool",
          "source": "src/Control-Concurrent-STM-TMVar-Lifted.html#tryPutTMVarIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TMVar Lifted",
          "module": "Control.Concurrent.STM.TMVar.Lifted",
          "name": "tryPutTMVarIO",
          "normalized": "TMVar a-\u003ea-\u003eb Bool",
          "package": "stm-lifted",
          "partial": "Put TMVar IO",
          "signature": "TMVar a-\u003ea-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TMVar-Lifted.html#v:tryPutTMVarIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TMVar.Lifted",
          "name": "tryReadTMVarIO",
          "package": "stm-lifted",
          "signature": "TMVar a -\u003e m (Maybe a)",
          "source": "src/Control-Concurrent-STM-TMVar-Lifted.html#tryReadTMVarIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TMVar Lifted",
          "module": "Control.Concurrent.STM.TMVar.Lifted",
          "name": "tryReadTMVarIO",
          "normalized": "TMVar a-\u003eb(Maybe a)",
          "package": "stm-lifted",
          "partial": "Read TMVar IO",
          "signature": "TMVar a-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TMVar-Lifted.html#v:tryReadTMVarIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TMVar.Lifted",
          "name": "tryTakeTMVarIO",
          "package": "stm-lifted",
          "signature": "TMVar a -\u003e m (Maybe a)",
          "source": "src/Control-Concurrent-STM-TMVar-Lifted.html#tryTakeTMVarIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TMVar Lifted",
          "module": "Control.Concurrent.STM.TMVar.Lifted",
          "name": "tryTakeTMVarIO",
          "normalized": "TMVar a-\u003eb(Maybe a)",
          "package": "stm-lifted",
          "partial": "Take TMVar IO",
          "signature": "TMVar a-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TMVar-Lifted.html#v:tryTakeTMVarIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TQueue.Lifted",
          "name": "Lifted",
          "package": "stm-lifted",
          "source": "src/Control-Concurrent-STM-TQueue-Lifted.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TQueue Lifted",
          "module": "Control.Concurrent.STM.TQueue.Lifted",
          "name": "Lifted",
          "package": "stm-lifted",
          "partial": "Lifted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TQueue-Lifted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TQueue.Lifted",
          "name": "isEmptyTQueueIO",
          "package": "stm-lifted",
          "signature": "TQueue a -\u003e m Bool",
          "source": "src/Control-Concurrent-STM-TQueue-Lifted.html#isEmptyTQueueIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TQueue Lifted",
          "module": "Control.Concurrent.STM.TQueue.Lifted",
          "name": "isEmptyTQueueIO",
          "normalized": "TQueue a-\u003eb Bool",
          "package": "stm-lifted",
          "partial": "Empty TQueue IO",
          "signature": "TQueue a-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TQueue-Lifted.html#v:isEmptyTQueueIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TQueue.Lifted",
          "name": "newTQueueIO",
          "package": "stm-lifted",
          "signature": "m (TQueue a)",
          "source": "src/Control-Concurrent-STM-TQueue-Lifted.html#newTQueueIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TQueue Lifted",
          "module": "Control.Concurrent.STM.TQueue.Lifted",
          "name": "newTQueueIO",
          "package": "stm-lifted",
          "partial": "TQueue IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TQueue-Lifted.html#v:newTQueueIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TQueue.Lifted",
          "name": "peekTQueueIO",
          "package": "stm-lifted",
          "signature": "TQueue a -\u003e m a",
          "source": "src/Control-Concurrent-STM-TQueue-Lifted.html#peekTQueueIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TQueue Lifted",
          "module": "Control.Concurrent.STM.TQueue.Lifted",
          "name": "peekTQueueIO",
          "normalized": "TQueue a-\u003eb a",
          "package": "stm-lifted",
          "partial": "TQueue IO",
          "signature": "TQueue a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TQueue-Lifted.html#v:peekTQueueIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TQueue.Lifted",
          "name": "readTQueueIO",
          "package": "stm-lifted",
          "signature": "TQueue a -\u003e m a",
          "source": "src/Control-Concurrent-STM-TQueue-Lifted.html#readTQueueIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TQueue Lifted",
          "module": "Control.Concurrent.STM.TQueue.Lifted",
          "name": "readTQueueIO",
          "normalized": "TQueue a-\u003eb a",
          "package": "stm-lifted",
          "partial": "TQueue IO",
          "signature": "TQueue a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TQueue-Lifted.html#v:readTQueueIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TQueue.Lifted",
          "name": "tryPeekTQueueIO",
          "package": "stm-lifted",
          "signature": "TQueue a -\u003e m (Maybe a)",
          "source": "src/Control-Concurrent-STM-TQueue-Lifted.html#tryPeekTQueueIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TQueue Lifted",
          "module": "Control.Concurrent.STM.TQueue.Lifted",
          "name": "tryPeekTQueueIO",
          "normalized": "TQueue a-\u003eb(Maybe a)",
          "package": "stm-lifted",
          "partial": "Peek TQueue IO",
          "signature": "TQueue a-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TQueue-Lifted.html#v:tryPeekTQueueIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TQueue.Lifted",
          "name": "tryReadTQueueIO",
          "package": "stm-lifted",
          "signature": "TQueue a -\u003e m (Maybe a)",
          "source": "src/Control-Concurrent-STM-TQueue-Lifted.html#tryReadTQueueIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TQueue Lifted",
          "module": "Control.Concurrent.STM.TQueue.Lifted",
          "name": "tryReadTQueueIO",
          "normalized": "TQueue a-\u003eb(Maybe a)",
          "package": "stm-lifted",
          "partial": "Read TQueue IO",
          "signature": "TQueue a-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TQueue-Lifted.html#v:tryReadTQueueIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TQueue.Lifted",
          "name": "unGetTQueueIO",
          "package": "stm-lifted",
          "signature": "TQueue a -\u003e a -\u003e m ()",
          "source": "src/Control-Concurrent-STM-TQueue-Lifted.html#unGetTQueueIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TQueue Lifted",
          "module": "Control.Concurrent.STM.TQueue.Lifted",
          "name": "unGetTQueueIO",
          "normalized": "TQueue a-\u003ea-\u003eb()",
          "package": "stm-lifted",
          "partial": "Get TQueue IO",
          "signature": "TQueue a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TQueue-Lifted.html#v:unGetTQueueIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TQueue.Lifted",
          "name": "writeTQueueIO",
          "package": "stm-lifted",
          "signature": "TQueue a -\u003e a -\u003e m ()",
          "source": "src/Control-Concurrent-STM-TQueue-Lifted.html#writeTQueueIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TQueue Lifted",
          "module": "Control.Concurrent.STM.TQueue.Lifted",
          "name": "writeTQueueIO",
          "normalized": "TQueue a-\u003ea-\u003eb()",
          "package": "stm-lifted",
          "partial": "TQueue IO",
          "signature": "TQueue a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TQueue-Lifted.html#v:writeTQueueIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TSem.Lifted",
          "name": "Lifted",
          "package": "stm-lifted",
          "source": "src/Control-Concurrent-STM-TSem-Lifted.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TSem Lifted",
          "module": "Control.Concurrent.STM.TSem.Lifted",
          "name": "Lifted",
          "package": "stm-lifted",
          "partial": "Lifted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TSem-Lifted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TSem.Lifted",
          "name": "newTSemIO",
          "package": "stm-lifted",
          "signature": "Int -\u003e m TSem",
          "source": "src/Control-Concurrent-STM-TSem-Lifted.html#newTSemIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TSem Lifted",
          "module": "Control.Concurrent.STM.TSem.Lifted",
          "name": "newTSemIO",
          "normalized": "Int-\u003ea TSem",
          "package": "stm-lifted",
          "partial": "TSem IO",
          "signature": "Int-\u003em TSem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TSem-Lifted.html#v:newTSemIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TSem.Lifted",
          "name": "signalTSemIO",
          "package": "stm-lifted",
          "signature": "TSem -\u003e m ()",
          "source": "src/Control-Concurrent-STM-TSem-Lifted.html#signalTSemIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TSem Lifted",
          "module": "Control.Concurrent.STM.TSem.Lifted",
          "name": "signalTSemIO",
          "normalized": "TSem-\u003ea()",
          "package": "stm-lifted",
          "partial": "TSem IO",
          "signature": "TSem-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TSem-Lifted.html#v:signalTSemIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TSem.Lifted",
          "name": "waitTSemIO",
          "package": "stm-lifted",
          "signature": "TSem -\u003e m ()",
          "source": "src/Control-Concurrent-STM-TSem-Lifted.html#waitTSemIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TSem Lifted",
          "module": "Control.Concurrent.STM.TSem.Lifted",
          "name": "waitTSemIO",
          "normalized": "TSem-\u003ea()",
          "package": "stm-lifted",
          "partial": "TSem IO",
          "signature": "TSem-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TSem-Lifted.html#v:waitTSemIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TVar.Lifted",
          "name": "Lifted",
          "package": "stm-lifted",
          "source": "src/Control-Concurrent-STM-TVar-Lifted.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TVar Lifted",
          "module": "Control.Concurrent.STM.TVar.Lifted",
          "name": "Lifted",
          "package": "stm-lifted",
          "partial": "Lifted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TVar-Lifted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-strict version\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TVar.Lifted",
          "name": "modifyTVarIO",
          "package": "stm-lifted",
          "signature": "TVar a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Control-Concurrent-STM-TVar-Lifted.html#modifyTVarIO",
          "type": "function"
        },
        "index": {
          "description": "Non-strict version",
          "hierarchy": "Control Concurrent STM TVar Lifted",
          "module": "Control.Concurrent.STM.TVar.Lifted",
          "name": "modifyTVarIO",
          "normalized": "TVar a-\u003e(a-\u003ea)-\u003eb()",
          "package": "stm-lifted",
          "partial": "TVar IO",
          "signature": "TVar a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TVar-Lifted.html#v:modifyTVarIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict version\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TVar.Lifted",
          "name": "modifyTVarIO'",
          "package": "stm-lifted",
          "signature": "TVar a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Control-Concurrent-STM-TVar-Lifted.html#modifyTVarIO%27",
          "type": "function"
        },
        "index": {
          "description": "Strict version",
          "hierarchy": "Control Concurrent STM TVar Lifted",
          "module": "Control.Concurrent.STM.TVar.Lifted",
          "name": "modifyTVarIO'",
          "normalized": "TVar a-\u003e(a-\u003ea)-\u003eb()",
          "package": "stm-lifted",
          "partial": "TVar IO'",
          "signature": "TVar a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TVar-Lifted.html#v:modifyTVarIO-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TVar.Lifted",
          "name": "newTVarIO",
          "package": "stm-lifted",
          "signature": "a -\u003e m (TVar a)",
          "source": "src/Control-Concurrent-STM-TVar-Lifted.html#newTVarIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TVar Lifted",
          "module": "Control.Concurrent.STM.TVar.Lifted",
          "name": "newTVarIO",
          "normalized": "a-\u003eb(TVar a)",
          "package": "stm-lifted",
          "partial": "TVar IO",
          "signature": "a-\u003em(TVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TVar-Lifted.html#v:newTVarIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TVar.Lifted",
          "name": "readTVarIO",
          "package": "stm-lifted",
          "signature": "TVar a -\u003e m a",
          "source": "src/Control-Concurrent-STM-TVar-Lifted.html#readTVarIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TVar Lifted",
          "module": "Control.Concurrent.STM.TVar.Lifted",
          "name": "readTVarIO",
          "normalized": "TVar a-\u003eb a",
          "package": "stm-lifted",
          "partial": "TVar IO",
          "signature": "TVar a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TVar-Lifted.html#v:readTVarIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TVar.Lifted",
          "name": "swapTVarIO",
          "package": "stm-lifted",
          "signature": "TVar a -\u003e a -\u003e m a",
          "source": "src/Control-Concurrent-STM-TVar-Lifted.html#swapTVarIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TVar Lifted",
          "module": "Control.Concurrent.STM.TVar.Lifted",
          "name": "swapTVarIO",
          "normalized": "TVar a-\u003ea-\u003eb a",
          "package": "stm-lifted",
          "partial": "TVar IO",
          "signature": "TVar a-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TVar-Lifted.html#v:swapTVarIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TVar.Lifted",
          "name": "writeTVarIO",
          "package": "stm-lifted",
          "signature": "TVar a -\u003e a -\u003e m ()",
          "source": "src/Control-Concurrent-STM-TVar-Lifted.html#writeTVarIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TVar Lifted",
          "module": "Control.Concurrent.STM.TVar.Lifted",
          "name": "writeTVarIO",
          "normalized": "TVar a-\u003ea-\u003eb()",
          "package": "stm-lifted",
          "partial": "TVar IO",
          "signature": "TVar a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-lifted/docs/Control-Concurrent-STM-TVar-Lifted.html#v:writeTVarIO"
      }
    }
  ]
]