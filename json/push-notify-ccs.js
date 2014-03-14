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
        "word": "push-notify-ccs"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library defines an API for communicating with Android powered devices, sending Push Notifications through Cloud Connection Server (GCM).\n\u003c/p\u003e\u003cp\u003eThe GCM Cloud Connection Server (CCS) is a connection server based on XMPP.\n\u003c/p\u003e\u003cp\u003eCCS allows 3rd-party app servers to communicate with Android devices by establishing a persistent TCP connection with Google servers using the XMPP protocol. This communication is asynchronous and bidirectional.\n\u003c/p\u003e\u003cp\u003eTo establish a XMPP connection, this library uses Pontarius XMPP library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.PushNotify.Ccs",
          "name": "Ccs",
          "package": "push-notify-ccs",
          "source": "src/Network-PushNotify-Ccs.html",
          "type": "module"
        },
        "index": {
          "description": "This library defines an API for communicating with Android powered devices sending Push Notifications through Cloud Connection Server GCM The GCM Cloud Connection Server CCS is connection server based on XMPP CCS allows rd-party app servers to communicate with Android devices by establishing persistent TCP connection with Google servers using the XMPP protocol This communication is asynchronous and bidirectional To establish XMPP connection this library uses Pontarius XMPP library",
          "hierarchy": "Network PushNotify Ccs",
          "module": "Network.PushNotify.Ccs",
          "name": "Ccs",
          "package": "push-notify-ccs",
          "partial": "Ccs",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-ccs/docs/Network-PushNotify-Ccs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eManager of a CCS Connection.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Ccs",
          "name": "CCSManager",
          "package": "push-notify-ccs",
          "source": "src/Network-PushNotify-Ccs-Types.html#CCSManager",
          "type": "data"
        },
        "index": {
          "description": "Manager of CCS Connection",
          "hierarchy": "Network PushNotify Ccs",
          "module": "Network.PushNotify.Ccs",
          "name": "CCSManager",
          "package": "push-notify-ccs",
          "partial": "CCSManager",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-ccs/docs/Network-PushNotify-Ccs.html#t:CCSManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eGCMCcsConfig\u003c/a\u003e\u003c/code\u003e represents the main necessary information for sending notifications through CCS.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Ccs",
          "name": "GCMCcsConfig",
          "package": "push-notify-ccs",
          "source": "src/Network-PushNotify-Ccs-Types.html#GCMCcsConfig",
          "type": "data"
        },
        "index": {
          "description": "GCMCcsConfig represents the main necessary information for sending notifications through CCS",
          "hierarchy": "Network PushNotify Ccs",
          "module": "Network.PushNotify.Ccs",
          "name": "GCMCcsConfig",
          "package": "push-notify-ccs",
          "partial": "GCMCcs Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-ccs/docs/Network-PushNotify-Ccs.html#t:GCMCcsConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Ccs",
          "name": "GCMCcsConfig",
          "package": "push-notify-ccs",
          "signature": "GCMCcsConfig",
          "source": "src/Network-PushNotify-Ccs-Types.html#GCMCcsConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Ccs",
          "module": "Network.PushNotify.Ccs",
          "name": "GCMCcsConfig",
          "package": "push-notify-ccs",
          "partial": "GCMCcs Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-ccs/docs/Network-PushNotify-Ccs.html#v:GCMCcsConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApi key provided by Google.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Ccs",
          "name": "aPiKey",
          "package": "push-notify-ccs",
          "signature": "Text",
          "source": "src/Network-PushNotify-Ccs-Types.html#GCMCcsConfig",
          "type": "function"
        },
        "index": {
          "description": "Api key provided by Google",
          "hierarchy": "Network PushNotify Ccs",
          "module": "Network.PushNotify.Ccs",
          "name": "aPiKey",
          "package": "push-notify-ccs",
          "partial": "Pi Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-ccs/docs/Network-PushNotify-Ccs.html#v:aPiKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to retry to connect to CCS servers.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Ccs",
          "name": "ccsRetrySettings",
          "package": "push-notify-ccs",
          "signature": "RetrySettings",
          "source": "src/Network-PushNotify-Ccs-Types.html#GCMCcsConfig",
          "type": "function"
        },
        "index": {
          "description": "How to retry to connect to CCS servers",
          "hierarchy": "Network PushNotify Ccs",
          "module": "Network.PushNotify.Ccs",
          "name": "ccsRetrySettings",
          "package": "push-notify-ccs",
          "partial": "Retry Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-ccs/docs/Network-PushNotify-Ccs.html#v:ccsRetrySettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecloseCCS\u003c/a\u003e\u003c/code\u003e stops the CCS service.\n\u003c/p\u003e\u003cp\u003eThis means stopping the worker thread which maintains a connection with CCS servers.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Ccs",
          "name": "closeCCS",
          "package": "push-notify-ccs",
          "signature": "CCSManager -\u003e IO ()",
          "source": "src/Network-PushNotify-Ccs-Send.html#closeCCS",
          "type": "function"
        },
        "index": {
          "description": "closeCCS stops the CCS service This means stopping the worker thread which maintains connection with CCS servers",
          "hierarchy": "Network PushNotify Ccs",
          "module": "Network.PushNotify.Ccs",
          "name": "closeCCS",
          "normalized": "CCSManager-\u003eIO()",
          "package": "push-notify-ccs",
          "partial": "CCS",
          "signature": "CCSManager-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-ccs/docs/Network-PushNotify-Ccs.html#v:closeCCS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esendCCS\u003c/a\u003e\u003c/code\u003e sends messages to a CCS Server.\n\u003c/p\u003e\u003cp\u003eEvery time you call this function, it will put the notification in a channel waiting to be proceesed by the worker thread.\n\u003c/p\u003e\u003cp\u003eIt will block until the worker thread receives a response from CCS server.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Ccs",
          "name": "sendCCS",
          "package": "push-notify-ccs",
          "signature": "CCSManager -\u003e GCMmessage -\u003e IO GCMresult",
          "source": "src/Network-PushNotify-Ccs-Send.html#sendCCS",
          "type": "function"
        },
        "index": {
          "description": "sendCCS sends messages to CCS Server Every time you call this function it will put the notification in channel waiting to be proceesed by the worker thread It will block until the worker thread receives response from CCS server",
          "hierarchy": "Network PushNotify Ccs",
          "module": "Network.PushNotify.Ccs",
          "name": "sendCCS",
          "normalized": "CCSManager-\u003eGCMmessage-\u003eIO GCMresult",
          "package": "push-notify-ccs",
          "partial": "CCS",
          "signature": "CCSManager-\u003eGCMmessage-\u003eIO GCMresult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-ccs/docs/Network-PushNotify-Ccs.html#v:sendCCS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSender ID provided by Google.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Ccs",
          "name": "senderID",
          "package": "push-notify-ccs",
          "signature": "Text",
          "source": "src/Network-PushNotify-Ccs-Types.html#GCMCcsConfig",
          "type": "function"
        },
        "index": {
          "description": "Sender ID provided by Google",
          "hierarchy": "Network PushNotify Ccs",
          "module": "Network.PushNotify.Ccs",
          "name": "senderID",
          "package": "push-notify-ccs",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-ccs/docs/Network-PushNotify-Ccs.html#v:senderID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003estartCCS\u003c/a\u003e\u003c/code\u003e starts the CCS service, which means starting a worker thread which maintains a connection with CCS servers.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Ccs",
          "name": "startCCS",
          "package": "push-notify-ccs",
          "signature": "GCMCcsConfig-\u003e (RegId -\u003e Value -\u003e IO ())-\u003e IO CCSManager",
          "type": "function"
        },
        "index": {
          "description": "startCCS starts the CCS service which means starting worker thread which maintains connection with CCS servers",
          "hierarchy": "Network PushNotify Ccs",
          "module": "Network.PushNotify.Ccs",
          "name": "startCCS",
          "normalized": "GCMCcsConfig-\u003e(RegId-\u003eValue-\u003eIO())-\u003eIO CCSManager",
          "package": "push-notify-ccs",
          "partial": "CCS",
          "signature": "GCMCcsConfig-\u003e(RegId-\u003eValue-\u003eIO())-\u003eIO CCSManager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-ccs/docs/Network-PushNotify-Ccs.html#v:startCCS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewithCCS\u003c/a\u003e\u003c/code\u003e creates a new manager, uses it in the provided function, and then releases it.\n\u003c/p\u003e\u003cp\u003e(The second argument is a callback function to be called each time a message arrives from a device).\n\u003c/p\u003e",
          "module": "Network.PushNotify.Ccs",
          "name": "withCCS",
          "package": "push-notify-ccs",
          "signature": "GCMCcsConfig -\u003e (RegId -\u003e Value -\u003e IO ()) -\u003e (CCSManager -\u003e IO a) -\u003e IO a",
          "source": "src/Network-PushNotify-Ccs-Send.html#withCCS",
          "type": "function"
        },
        "index": {
          "description": "withCCS creates new manager uses it in the provided function and then releases it The second argument is callback function to be called each time message arrives from device",
          "hierarchy": "Network PushNotify Ccs",
          "module": "Network.PushNotify.Ccs",
          "name": "withCCS",
          "normalized": "GCMCcsConfig-\u003e(RegId-\u003eValue-\u003eIO())-\u003e(CCSManager-\u003eIO a)-\u003eIO a",
          "package": "push-notify-ccs",
          "partial": "CCS",
          "signature": "GCMCcsConfig-\u003e(RegId-\u003eValue-\u003eIO())-\u003e(CCSManager-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-ccs/docs/Network-PushNotify-Ccs.html#v:withCCS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewithCCS'\u003c/a\u003e\u003c/code\u003e creates a new manager, uses it in the provided function, and then releases it \n (ignores messages that arrive from a device).\n\u003c/p\u003e",
          "module": "Network.PushNotify.Ccs",
          "name": "withCCS'",
          "package": "push-notify-ccs",
          "signature": "GCMCcsConfig -\u003e (CCSManager -\u003e IO a) -\u003e IO a",
          "source": "src/Network-PushNotify-Ccs-Send.html#withCCS%27",
          "type": "function"
        },
        "index": {
          "description": "withCCS creates new manager uses it in the provided function and then releases it ignores messages that arrive from device",
          "hierarchy": "Network PushNotify Ccs",
          "module": "Network.PushNotify.Ccs",
          "name": "withCCS'",
          "normalized": "GCMCcsConfig-\u003e(CCSManager-\u003eIO a)-\u003eIO a",
          "package": "push-notify-ccs",
          "partial": "CCS'",
          "signature": "GCMCcsConfig-\u003e(CCSManager-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-ccs/docs/Network-PushNotify-Ccs.html#v:withCCS-39-"
      }
    }
  ]
]