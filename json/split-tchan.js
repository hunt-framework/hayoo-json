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
        "word": "split-tchan"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "Split",
          "package": "split-tchan",
          "source": "src/Control-Concurrent-STM-TChan-Split.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Split",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "Split",
          "package": "split-tchan",
          "partial": "Split",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/split-tchan/docs/Control-Concurrent-STM-TChan-Split.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "ReceivePort",
          "package": "split-tchan",
          "source": "src/Control-Concurrent-STM-TChan-Split-Implementation.html#ReceivePort",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Split",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "ReceivePort",
          "package": "split-tchan",
          "partial": "Receive Port",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/split-tchan/docs/Control-Concurrent-STM-TChan-Split.html#t:ReceivePort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "SendPort",
          "package": "split-tchan",
          "source": "src/Control-Concurrent-STM-TChan-Split-Implementation.html#SendPort",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Split",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "SendPort",
          "package": "split-tchan",
          "partial": "Send Port",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/split-tchan/docs/Control-Concurrent-STM-TChan-Split.html#t:SendPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "duplicate",
          "package": "split-tchan",
          "signature": "ReceivePort a -\u003e STM (ReceivePort a)",
          "source": "src/Control-Concurrent-STM-TChan-Split-Implementation.html#duplicate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Split",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "duplicate",
          "normalized": "ReceivePort a-\u003eSTM(ReceivePort a)",
          "package": "split-tchan",
          "signature": "ReceivePort a-\u003eSTM(ReceivePort a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split-tchan/docs/Control-Concurrent-STM-TChan-Split.html#v:duplicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "isEmpty",
          "package": "split-tchan",
          "signature": "ReceivePort a -\u003e STM Bool",
          "source": "src/Control-Concurrent-STM-TChan-Split-Implementation.html#isEmpty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Split",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "isEmpty",
          "normalized": "ReceivePort a-\u003eSTM Bool",
          "package": "split-tchan",
          "partial": "Empty",
          "signature": "ReceivePort a-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split-tchan/docs/Control-Concurrent-STM-TChan-Split.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "listen",
          "package": "split-tchan",
          "signature": "SendPort a -\u003e STM (ReceivePort a)",
          "source": "src/Control-Concurrent-STM-TChan-Split-Implementation.html#listen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Split",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "listen",
          "normalized": "SendPort a-\u003eSTM(ReceivePort a)",
          "package": "split-tchan",
          "signature": "SendPort a-\u003eSTM(ReceivePort a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split-tchan/docs/Control-Concurrent-STM-TChan-Split.html#v:listen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "new",
          "package": "split-tchan",
          "signature": "STM (SendPort a, ReceivePort a)",
          "source": "src/Control-Concurrent-STM-TChan-Split-Implementation.html#new",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Split",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "new",
          "normalized": "STM(SendPort a,ReceivePort a)",
          "package": "split-tchan",
          "signature": "STM(SendPort a,ReceivePort a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split-tchan/docs/Control-Concurrent-STM-TChan-Split.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "newSendPort",
          "package": "split-tchan",
          "signature": "STM (SendPort a)",
          "source": "src/Control-Concurrent-STM-TChan-Split-Implementation.html#newSendPort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Split",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "newSendPort",
          "package": "split-tchan",
          "partial": "Send Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split-tchan/docs/Control-Concurrent-STM-TChan-Split.html#v:newSendPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "peek",
          "package": "split-tchan",
          "signature": "ReceivePort a -\u003e STM a",
          "source": "src/Control-Concurrent-STM-TChan-Split-Implementation.html#peek",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Split",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "peek",
          "normalized": "ReceivePort a-\u003eSTM a",
          "package": "split-tchan",
          "signature": "ReceivePort a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split-tchan/docs/Control-Concurrent-STM-TChan-Split.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "receive",
          "package": "split-tchan",
          "signature": "ReceivePort a -\u003e STM a",
          "source": "src/Control-Concurrent-STM-TChan-Split-Implementation.html#receive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Split",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "receive",
          "normalized": "ReceivePort a-\u003eSTM a",
          "package": "split-tchan",
          "signature": "ReceivePort a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split-tchan/docs/Control-Concurrent-STM-TChan-Split.html#v:receive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "send",
          "package": "split-tchan",
          "signature": "SendPort a -\u003e a -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-TChan-Split-Implementation.html#send",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Split",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "send",
          "normalized": "SendPort a-\u003ea-\u003eSTM()",
          "package": "split-tchan",
          "signature": "SendPort a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split-tchan/docs/Control-Concurrent-STM-TChan-Split.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "split",
          "package": "split-tchan",
          "signature": "SendPort a -\u003e STM (ReceivePort a, SendPort a)",
          "source": "src/Control-Concurrent-STM-TChan-Split-Implementation.html#split",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Split",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "split",
          "normalized": "SendPort a-\u003eSTM(ReceivePort a,SendPort a)",
          "package": "split-tchan",
          "signature": "SendPort a-\u003eSTM(ReceivePort a,SendPort a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split-tchan/docs/Control-Concurrent-STM-TChan-Split.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "tryPeek",
          "package": "split-tchan",
          "signature": "ReceivePort a -\u003e STM (Maybe a)",
          "source": "src/Control-Concurrent-STM-TChan-Split-Implementation.html#tryPeek",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Split",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "tryPeek",
          "normalized": "ReceivePort a-\u003eSTM(Maybe a)",
          "package": "split-tchan",
          "partial": "Peek",
          "signature": "ReceivePort a-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split-tchan/docs/Control-Concurrent-STM-TChan-Split.html#v:tryPeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "tryReceive",
          "package": "split-tchan",
          "signature": "ReceivePort a -\u003e STM (Maybe a)",
          "source": "src/Control-Concurrent-STM-TChan-Split-Implementation.html#tryReceive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Split",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "tryReceive",
          "normalized": "ReceivePort a-\u003eSTM(Maybe a)",
          "package": "split-tchan",
          "partial": "Receive",
          "signature": "ReceivePort a-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split-tchan/docs/Control-Concurrent-STM-TChan-Split.html#v:tryReceive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "unget",
          "package": "split-tchan",
          "signature": "ReceivePort a -\u003e a -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-TChan-Split-Implementation.html#unget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM TChan Split",
          "module": "Control.Concurrent.STM.TChan.Split",
          "name": "unget",
          "normalized": "ReceivePort a-\u003ea-\u003eSTM()",
          "package": "split-tchan",
          "signature": "ReceivePort a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/split-tchan/docs/Control-Concurrent-STM-TChan-Split.html#v:unget"
      }
    }
  ]
]