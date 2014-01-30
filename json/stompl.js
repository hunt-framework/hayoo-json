[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStomp Frames and some useful operations on them\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "module",
        "fct-source": "src/Network-Mom-Stompl-Frame.html",
        "fct-type": "module",
        "title": "Frame"
      },
      "index": {
        "description": "Stomp Frames and some useful operations on them",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "Frame",
        "normalized": "",
        "package": "stompl",
        "partial": "Frame",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#t:AckMode",
      "description": {
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "data",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#AckMode",
        "fct-type": "data",
        "title": "AckMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "AckMode",
        "normalized": "",
        "package": "stompl",
        "partial": "Ack Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#t:Body",
      "description": {
        "fct-descr": "\u003cp\u003eThe Frame body is represented as \u003cem\u003estrict\u003c/em\u003e \u003ccode\u003eByteString\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "type",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#Body",
        "fct-type": "type",
        "title": "Body"
      },
      "index": {
        "description": "The Frame body is represented as strict ByteString",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "Body",
        "normalized": "",
        "package": "stompl",
        "partial": "Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#t:Frame",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a frame\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "data",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#Frame",
        "fct-type": "data",
        "title": "Frame"
      },
      "index": {
        "description": "This is frame",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "Frame",
        "normalized": "",
        "package": "stompl",
        "partial": "Frame",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#t:FrameType",
      "description": {
        "fct-descr": "\u003cp\u003eThe frame type identifies, what the Stomp protocol calls \u003cem\u003ecommand\u003c/em\u003e;\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e commands sent from application to broker are:\n     Connect, Disconnect, Subscribe, Unsubscribe, Send, \n     Begin, Commit, Abort, Ack, Nack, HeartBeat\n\u003c/li\u003e\u003cli\u003e commands sent from broker to application are:\n     Connected, Message, Error, HeartBeat\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "data",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#FrameType",
        "fct-type": "data",
        "title": "FrameType"
      },
      "index": {
        "description": "The frame type identifies what the Stomp protocol calls command commands sent from application to broker are Connect Disconnect Subscribe Unsubscribe Send Begin Commit Abort Ack Nack HeartBeat commands sent from broker to application are Connected Message Error HeartBeat",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "FrameType",
        "normalized": "",
        "package": "stompl",
        "partial": "Frame Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#t:Header",
      "description": {
        "fct-descr": "\u003cp\u003eTuple of (key, value)\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "type",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#Header",
        "fct-type": "type",
        "title": "Header"
      },
      "index": {
        "description": "Tuple of key value",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "Header",
        "normalized": "",
        "package": "stompl",
        "partial": "Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#t:Heart",
      "description": {
        "fct-descr": "\u003cp\u003eHeart-beat configuration;\n   the first \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e of the pair represents the frequency \n   in which the sender wants to send heart-beats; \n   the second represents the highest frequency\n   in which the sender can accept heart-beats.\n   The frequency is expressed as \n   the period in milliseconds between two heart-beats.\n   For details on negotiating heart-beats, \n   please refer to the Stomp specification.\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "type",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#Heart",
        "fct-type": "type",
        "title": "Heart"
      },
      "index": {
        "description": "Heart-beat configuration the first Int of the pair represents the frequency in which the sender wants to send heart-beats the second represents the highest frequency in which the sender can accept heart-beats The frequency is expressed as the period in milliseconds between two heart-beats For details on negotiating heart-beats please refer to the Stomp specification",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "Heart",
        "normalized": "",
        "package": "stompl",
        "partial": "Heart",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#t:SrvDesc",
      "description": {
        "fct-descr": "\u003cp\u003eDescription of a server consisting of\n   name, version and comments\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "type",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#SrvDesc",
        "fct-type": "type",
        "title": "SrvDesc"
      },
      "index": {
        "description": "Description of server consisting of name version and comments",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "SrvDesc",
        "normalized": "",
        "package": "stompl",
        "partial": "Srv Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#t:Version",
      "description": {
        "fct-descr": "\u003cp\u003eThe Stomp version used or accepted by the sender;\n   the first \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e is the major version number,\n   the second is the minor.\n   For details on version negotiation, please refer to \n   the Stomp specification.\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "type",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#Version",
        "fct-type": "type",
        "title": "Version"
      },
      "index": {
        "description": "The Stomp version used or accepted by the sender the first Int is the major version number the second is the minor For details on version negotiation please refer to the Stomp specification",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "Version",
        "normalized": "",
        "package": "stompl",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:-124--62-",
      "description": {
        "fct-descr": "\u003cp\u003esnoc\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "ByteString -\u003e Char -\u003e ByteString",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#%7C%3E",
        "fct-type": "function",
        "title": "(|\u003e)"
      },
      "index": {
        "description": "snoc",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "(|\u003e) |\u003e",
        "normalized": "ByteString-\u003eChar-\u003eByteString",
        "package": "stompl",
        "partial": "",
        "signature": "ByteString-\u003eChar-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:-60--124-",
      "description": {
        "fct-descr": "\u003cp\u003econs\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Char -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#%3C%7C",
        "fct-type": "function",
        "title": "(\u003c|)"
      },
      "index": {
        "description": "cons",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "(\u003c|) \u003c|",
        "normalized": "Char-\u003eByteString-\u003eByteString",
        "package": "stompl",
        "partial": "",
        "signature": "Char-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:-62--124--60-",
      "description": {
        "fct-descr": "\u003cp\u003eappend\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "ByteString -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#%3E%7C%3C",
        "fct-type": "function",
        "title": "(\u003e|\u003c)"
      },
      "index": {
        "description": "append",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "(\u003e|\u003c) \u003e|\u003c",
        "normalized": "ByteString-\u003eByteString-\u003eByteString",
        "package": "stompl",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Abort",
      "description": {
        "fct-descr": "\u003cp\u003eSent by the application to abort a transaction\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Abort",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#FrameType",
        "fct-type": "function",
        "title": "Abort"
      },
      "index": {
        "description": "Sent by the application to abort transaction",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "Abort",
        "normalized": "",
        "package": "stompl",
        "partial": "Abort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Ack",
      "description": {
        "fct-descr": "\u003cp\u003eSent by the application to acknowledge a message\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Ack",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#FrameType",
        "fct-type": "function",
        "title": "Ack"
      },
      "index": {
        "description": "Sent by the application to acknowledge message",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "Ack",
        "normalized": "",
        "package": "stompl",
        "partial": "Ack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Auto",
      "description": {
        "fct-descr": "\u003cp\u003eA successfully sent message is automatically considered ack'd\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Auto",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#AckMode",
        "fct-type": "function",
        "title": "Auto"
      },
      "index": {
        "description": "successfully sent message is automatically considered ack",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "Auto",
        "normalized": "",
        "package": "stompl",
        "partial": "Auto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Begin",
      "description": {
        "fct-descr": "\u003cp\u003eSent by the application to start a transaction\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Begin",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#FrameType",
        "fct-type": "function",
        "title": "Begin"
      },
      "index": {
        "description": "Sent by the application to start transaction",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "Begin",
        "normalized": "",
        "package": "stompl",
        "partial": "Begin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Client",
      "description": {
        "fct-descr": "\u003cp\u003eThe client is expected to explicitly confirm the receipt\n   of a message by sending an \u003ccode\u003e\u003ca\u003eAck\u003c/a\u003e\u003c/code\u003e frame;\n   all message older than the ack'd message\n   since the last \u003ccode\u003e\u003ca\u003eAck\u003c/a\u003e\u003c/code\u003e (or the beginning of the session)\n   are implicitly ack'd as well.\n   This is called \u003cem\u003ecumulative\u003c/em\u003e ack.\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Client",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#AckMode",
        "fct-type": "function",
        "title": "Client"
      },
      "index": {
        "description": "The client is expected to explicitly confirm the receipt of message by sending an Ack frame all message older than the ack message since the last Ack or the beginning of the session are implicitly ack as well This is called cumulative ack",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "Client",
        "normalized": "",
        "package": "stompl",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:ClientIndi",
      "description": {
        "fct-descr": "\u003cp\u003eNon-cumulative ack:\n   The client is expected to explicitly confirm the receipt\n   of a message by sending an \u003ccode\u003e\u003ca\u003eAck\u003c/a\u003e\u003c/code\u003e frame;\n   only the message with the msg-id in the \u003ccode\u003e\u003ca\u003eAck\u003c/a\u003e\u003c/code\u003e frame\n   is actually ack'd\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "ClientIndi",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#AckMode",
        "fct-type": "function",
        "title": "ClientIndi"
      },
      "index": {
        "description": "Non-cumulative ack The client is expected to explicitly confirm the receipt of message by sending an Ack frame only the message with the msg-id in the Ack frame is actually ack",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "ClientIndi",
        "normalized": "",
        "package": "stompl",
        "partial": "Client Indi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Commit",
      "description": {
        "fct-descr": "\u003cp\u003eSent by the application to commit a transaction\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Commit",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#FrameType",
        "fct-type": "function",
        "title": "Commit"
      },
      "index": {
        "description": "Sent by the application to commit transaction",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "Commit",
        "normalized": "",
        "package": "stompl",
        "partial": "Commit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Connect",
      "description": {
        "fct-descr": "\u003cp\u003eSent by the application to initiate a connection\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Connect",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#FrameType",
        "fct-type": "function",
        "title": "Connect"
      },
      "index": {
        "description": "Sent by the application to initiate connection",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "Connect",
        "normalized": "",
        "package": "stompl",
        "partial": "Connect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Connected",
      "description": {
        "fct-descr": "\u003cp\u003eSent by the broker to confirm the connection\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Connected",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#FrameType",
        "fct-type": "function",
        "title": "Connected"
      },
      "index": {
        "description": "Sent by the broker to confirm the connection",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "Connected",
        "normalized": "",
        "package": "stompl",
        "partial": "Connected",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Disconnect",
      "description": {
        "fct-descr": "\u003cp\u003eSent by the application to end the connection\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Disconnect",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#FrameType",
        "fct-type": "function",
        "title": "Disconnect"
      },
      "index": {
        "description": "Sent by the application to end the connection",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "Disconnect",
        "normalized": "",
        "package": "stompl",
        "partial": "Disconnect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Error",
      "description": {
        "fct-descr": "\u003cp\u003eSent by the broker to report an error\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Error",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#FrameType",
        "fct-type": "function",
        "title": "Error"
      },
      "index": {
        "description": "Sent by the broker to report an error",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "Error",
        "normalized": "",
        "package": "stompl",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:HeartBeat",
      "description": {
        "fct-descr": "\u003cp\u003eKeep-alive message sent by both, application and broker\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "HeartBeat",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#FrameType",
        "fct-type": "function",
        "title": "HeartBeat"
      },
      "index": {
        "description": "Keep-alive message sent by both application and broker",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "HeartBeat",
        "normalized": "",
        "package": "stompl",
        "partial": "Heart Beat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Message",
      "description": {
        "fct-descr": "\u003cp\u003eSent by the broker to forward a message\n   published in a queue to which\n   the application has subscribed\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Message",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#FrameType",
        "fct-type": "function",
        "title": "Message"
      },
      "index": {
        "description": "Sent by the broker to forward message published in queue to which the application has subscribed",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "Message",
        "normalized": "",
        "package": "stompl",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Nack",
      "description": {
        "fct-descr": "\u003cp\u003eSent by the application to negatively acknowledge a message\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Nack",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#FrameType",
        "fct-type": "function",
        "title": "Nack"
      },
      "index": {
        "description": "Sent by the application to negatively acknowledge message",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "Nack",
        "normalized": "",
        "package": "stompl",
        "partial": "Nack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Receipt",
      "description": {
        "fct-descr": "\u003cp\u003eSent by the broker to confirm the receipt of a frame\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Receipt",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#FrameType",
        "fct-type": "function",
        "title": "Receipt"
      },
      "index": {
        "description": "Sent by the broker to confirm the receipt of frame",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "Receipt",
        "normalized": "",
        "package": "stompl",
        "partial": "Receipt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Send",
      "description": {
        "fct-descr": "\u003cp\u003eSent by the application to publish a message in a queue\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Send",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#FrameType",
        "fct-type": "function",
        "title": "Send"
      },
      "index": {
        "description": "Sent by the application to publish message in queue",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "Send",
        "normalized": "",
        "package": "stompl",
        "partial": "Send",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Stomp",
      "description": {
        "fct-descr": "\u003cp\u003eSame as Connect, but with \u003ca\u003eSTOMP\u003c/a\u003e instead of \u003ca\u003eCONNECT\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Stomp",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#FrameType",
        "fct-type": "function",
        "title": "Stomp"
      },
      "index": {
        "description": "Same as Connect but with STOMP instead of CONNECT",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "Stomp",
        "normalized": "",
        "package": "stompl",
        "partial": "Stomp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Subscribe",
      "description": {
        "fct-descr": "\u003cp\u003eSent by the application to subscribe to a queue\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Subscribe",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#FrameType",
        "fct-type": "function",
        "title": "Subscribe"
      },
      "index": {
        "description": "Sent by the application to subscribe to queue",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "Subscribe",
        "normalized": "",
        "package": "stompl",
        "partial": "Subscribe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Unsubscribe",
      "description": {
        "fct-descr": "\u003cp\u003eSent by the application to unsubscribe from a queue\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Unsubscribe",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#FrameType",
        "fct-type": "function",
        "title": "Unsubscribe"
      },
      "index": {
        "description": "Sent by the application to unsubscribe from queue",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "Unsubscribe",
        "normalized": "",
        "package": "stompl",
        "partial": "Unsubscribe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:ackToVal",
      "description": {
        "fct-descr": "\u003cp\u003econvert \u003ccode\u003e\u003ca\u003eAckMode\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "AckMode -\u003e String",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#ackToVal",
        "fct-type": "function",
        "title": "ackToVal"
      },
      "index": {
        "description": "convert AckMode to String",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "ackToVal",
        "normalized": "AckMode-\u003eString",
        "package": "stompl",
        "partial": "To Val",
        "signature": "AckMode-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:beatToVal",
      "description": {
        "fct-descr": "\u003cp\u003econvert \u003ccode\u003e\u003ca\u003eHeartBeat\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Heart -\u003e String",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#beatToVal",
        "fct-type": "function",
        "title": "beatToVal"
      },
      "index": {
        "description": "convert HeartBeat to String",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "beatToVal",
        "normalized": "Heart-\u003eString",
        "package": "stompl",
        "partial": "To Val",
        "signature": "Heart-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:complies",
      "description": {
        "fct-descr": "\u003cp\u003eCompliance with protocol version\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Version -\u003e Frame -\u003e Bool",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#complies",
        "fct-type": "function",
        "title": "complies"
      },
      "index": {
        "description": "Compliance with protocol version",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "complies",
        "normalized": "Version-\u003eFrame-\u003eBool",
        "package": "stompl",
        "partial": "",
        "signature": "Version-\u003eFrame-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:conToCond",
      "description": {
        "fct-descr": "\u003cp\u003econverts a \u003ccode\u003e\u003ca\u003eConnect\u003c/a\u003e\u003c/code\u003e frame into a \u003ccode\u003e\u003ca\u003eConnected\u003c/a\u003e\u003c/code\u003e frame,\n   negotiating heart-beats and version;\n   parameters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e server desc\n\u003c/li\u003e\u003cli\u003e session id\n\u003c/li\u003e\u003cli\u003e caller's bid for heart-beat \n\u003c/li\u003e\u003cli\u003e caller's supported versions\n\u003c/li\u003e\u003cli\u003e the original \u003ccode\u003e\u003ca\u003eConnect\u003c/a\u003e\u003c/code\u003e frame\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e String -\u003e Heart -\u003e [Version] -\u003e Frame -\u003e Maybe Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#conToCond",
        "fct-type": "function",
        "title": "conToCond"
      },
      "index": {
        "description": "converts Connect frame into Connected frame negotiating heart-beats and version parameters server desc session id caller bid for heart-beat caller supported versions the original Connect frame",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "conToCond",
        "normalized": "String-\u003eString-\u003eHeart-\u003e[Version]-\u003eFrame-\u003eMaybe Frame",
        "package": "stompl",
        "partial": "To Cond",
        "signature": "String-\u003eString-\u003eHeart-\u003e[Version]-\u003eFrame-\u003eMaybe Frame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getAck",
      "description": {
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "[Header] -\u003e Either String AckMode",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#getAck",
        "fct-type": "function",
        "title": "getAck"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "getAck",
        "normalized": "[Header]-\u003eEither String AckMode",
        "package": "stompl",
        "partial": "Ack",
        "signature": "[Header]-\u003eEither String AckMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getAcknow",
      "description": {
        "fct-descr": "\u003cp\u003eget \u003cem\u003eack\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eSubscribe\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Frame -\u003e AckMode",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#getAcknow",
        "fct-type": "function",
        "title": "getAcknow"
      },
      "index": {
        "description": "get ack from Subscribe",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "getAcknow",
        "normalized": "Frame-\u003eAckMode",
        "package": "stompl",
        "partial": "Acknow",
        "signature": "Frame-\u003eAckMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getBeat",
      "description": {
        "fct-descr": "\u003cp\u003eget \u003cem\u003eheart-beat\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eConnect\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eConnected\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Frame -\u003e Heart",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#getBeat",
        "fct-type": "function",
        "title": "getBeat"
      },
      "index": {
        "description": "get heart-beat from Connect or Connected",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "getBeat",
        "normalized": "Frame-\u003eHeart",
        "package": "stompl",
        "partial": "Beat",
        "signature": "Frame-\u003eHeart"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getBody",
      "description": {
        "fct-descr": "\u003cp\u003eget \u003cem\u003ebody\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eSend\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Frame -\u003e ByteString",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#getBody",
        "fct-type": "function",
        "title": "getBody"
      },
      "index": {
        "description": "get body from Send Message Error",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "getBody",
        "normalized": "Frame-\u003eByteString",
        "package": "stompl",
        "partial": "Body",
        "signature": "Frame-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getCliId",
      "description": {
        "fct-descr": "\u003cp\u003eget \u003cem\u003eclient-id\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eConnect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Frame -\u003e String",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#getCliId",
        "fct-type": "function",
        "title": "getCliId"
      },
      "index": {
        "description": "get client-id from Connect",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "getCliId",
        "normalized": "Frame-\u003eString",
        "package": "stompl",
        "partial": "Cli Id",
        "signature": "Frame-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getDest",
      "description": {
        "fct-descr": "\u003cp\u003eget \u003cem\u003edestination\u003c/em\u003e \n   from \u003ccode\u003e\u003ca\u003eSubscribe\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eUnsubscribe\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eSend\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Frame -\u003e String",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#getDest",
        "fct-type": "function",
        "title": "getDest"
      },
      "index": {
        "description": "get destination from Subscribe Unsubscribe Send or Message",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "getDest",
        "normalized": "Frame-\u003eString",
        "package": "stompl",
        "partial": "Dest",
        "signature": "Frame-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eget all additional headers from \u003ccode\u003e\u003ca\u003eSend\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Frame -\u003e [Header]",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#getHeaders",
        "fct-type": "function",
        "title": "getHeaders"
      },
      "index": {
        "description": "get all additional headers from Send or Message",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "getHeaders",
        "normalized": "Frame-\u003e[Header]",
        "package": "stompl",
        "partial": "Headers",
        "signature": "Frame-\u003e[Header]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getHost",
      "description": {
        "fct-descr": "\u003cp\u003eget \u003cem\u003ehost\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eConnect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Frame -\u003e String",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#getHost",
        "fct-type": "function",
        "title": "getHost"
      },
      "index": {
        "description": "get host from Connect",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "getHost",
        "normalized": "Frame-\u003eString",
        "package": "stompl",
        "partial": "Host",
        "signature": "Frame-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getId",
      "description": {
        "fct-descr": "\u003cp\u003eget \u003cem\u003eid\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eSubscribe\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eUnsubscribe\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Frame -\u003e String",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#getId",
        "fct-type": "function",
        "title": "getId"
      },
      "index": {
        "description": "get id from Subscribe or Unsubscribe",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "getId",
        "normalized": "Frame-\u003eString",
        "package": "stompl",
        "partial": "Id",
        "signature": "Frame-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getLen",
      "description": {
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "[Header] -\u003e Either String Int",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#getLen",
        "fct-type": "function",
        "title": "getLen"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "getLen",
        "normalized": "[Header]-\u003eEither String Int",
        "package": "stompl",
        "partial": "Len",
        "signature": "[Header]-\u003eEither String Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getLength",
      "description": {
        "fct-descr": "\u003cp\u003eget \u003cem\u003econtent-length\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eSend\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Frame -\u003e Int",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#getLength",
        "fct-type": "function",
        "title": "getLength"
      },
      "index": {
        "description": "get content-length from Send Message Error",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "getLength",
        "normalized": "Frame-\u003eInt",
        "package": "stompl",
        "partial": "Length",
        "signature": "Frame-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getLogin",
      "description": {
        "fct-descr": "\u003cp\u003eget \u003cem\u003elogin\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eConnect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Frame -\u003e String",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#getLogin",
        "fct-type": "function",
        "title": "getLogin"
      },
      "index": {
        "description": "get login from Connect",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "getLogin",
        "normalized": "Frame-\u003eString",
        "package": "stompl",
        "partial": "Login",
        "signature": "Frame-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getMime",
      "description": {
        "fct-descr": "\u003cp\u003eget \u003cem\u003econtent-type\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eSend\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Frame -\u003e Type",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#getMime",
        "fct-type": "function",
        "title": "getMime"
      },
      "index": {
        "description": "get content-type from Send Message Error",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "getMime",
        "normalized": "Frame-\u003eType",
        "package": "stompl",
        "partial": "Mime",
        "signature": "Frame-\u003eType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getMsg",
      "description": {
        "fct-descr": "\u003cp\u003eget \u003cem\u003emessage\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Frame -\u003e String",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#getMsg",
        "fct-type": "function",
        "title": "getMsg"
      },
      "index": {
        "description": "get message from Error",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "getMsg",
        "normalized": "Frame-\u003eString",
        "package": "stompl",
        "partial": "Msg",
        "signature": "Frame-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getMsgAck",
      "description": {
        "fct-descr": "\u003cp\u003eget \u003cem\u003eack\u003c/em\u003e or \u003cem\u003emessage-id\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Frame -\u003e String",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#getMsgAck",
        "fct-type": "function",
        "title": "getMsgAck"
      },
      "index": {
        "description": "get ack or message-id from Message",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "getMsgAck",
        "normalized": "Frame-\u003eString",
        "package": "stompl",
        "partial": "Msg Ack",
        "signature": "Frame-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getPasscode",
      "description": {
        "fct-descr": "\u003cp\u003eget \u003cem\u003epasscode\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eConnect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Frame -\u003e String",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#getPasscode",
        "fct-type": "function",
        "title": "getPasscode"
      },
      "index": {
        "description": "get passcode from Connect",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "getPasscode",
        "normalized": "Frame-\u003eString",
        "package": "stompl",
        "partial": "Passcode",
        "signature": "Frame-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getReceipt",
      "description": {
        "fct-descr": "\u003cp\u003eget \u003cem\u003ereceipt\u003c/em\u003e or \u003cem\u003ereceipt-id\u003c/em\u003e from any frame, but\n   \u003ccode\u003e\u003ca\u003eConnect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eConnected\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Frame -\u003e String",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#getReceipt",
        "fct-type": "function",
        "title": "getReceipt"
      },
      "index": {
        "description": "get receipt or receipt-id from any frame but Connect Connected Message Error",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "getReceipt",
        "normalized": "Frame-\u003eString",
        "package": "stompl",
        "partial": "Receipt",
        "signature": "Frame-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getSelector",
      "description": {
        "fct-descr": "\u003cp\u003eget \u003cem\u003eselector\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eSubscribe\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Frame -\u003e String",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#getSelector",
        "fct-type": "function",
        "title": "getSelector"
      },
      "index": {
        "description": "get selector from Subscribe",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "getSelector",
        "normalized": "Frame-\u003eString",
        "package": "stompl",
        "partial": "Selector",
        "signature": "Frame-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getServer",
      "description": {
        "fct-descr": "\u003cp\u003eget \u003cem\u003eserver\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eConnected\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Frame -\u003e SrvDesc",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#getServer",
        "fct-type": "function",
        "title": "getServer"
      },
      "index": {
        "description": "get server from Connected",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "getServer",
        "normalized": "Frame-\u003eSrvDesc",
        "package": "stompl",
        "partial": "Server",
        "signature": "Frame-\u003eSrvDesc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getSession",
      "description": {
        "fct-descr": "\u003cp\u003eget \u003cem\u003esession\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eConnected\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Frame -\u003e String",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#getSession",
        "fct-type": "function",
        "title": "getSession"
      },
      "index": {
        "description": "get session from Connected",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "getSession",
        "normalized": "Frame-\u003eString",
        "package": "stompl",
        "partial": "Session",
        "signature": "Frame-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getSrvCmts",
      "description": {
        "fct-descr": "\u003cp\u003eget comments from \u003ccode\u003e\u003ca\u003eSrvDesc\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "SrvDesc -\u003e String",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#getSrvCmts",
        "fct-type": "function",
        "title": "getSrvCmts"
      },
      "index": {
        "description": "get comments from SrvDesc",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "getSrvCmts",
        "normalized": "SrvDesc-\u003eString",
        "package": "stompl",
        "partial": "Srv Cmts",
        "signature": "SrvDesc-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getSrvName",
      "description": {
        "fct-descr": "\u003cp\u003eget name from \u003ccode\u003e\u003ca\u003eSrvDesc\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "SrvDesc -\u003e String",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#getSrvName",
        "fct-type": "function",
        "title": "getSrvName"
      },
      "index": {
        "description": "get name from SrvDesc",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "getSrvName",
        "normalized": "SrvDesc-\u003eString",
        "package": "stompl",
        "partial": "Srv Name",
        "signature": "SrvDesc-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getSrvVer",
      "description": {
        "fct-descr": "\u003cp\u003eget version from \u003ccode\u003e\u003ca\u003eSrvDesc\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "SrvDesc -\u003e String",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#getSrvVer",
        "fct-type": "function",
        "title": "getSrvVer"
      },
      "index": {
        "description": "get version from SrvDesc",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "getSrvVer",
        "normalized": "SrvDesc-\u003eString",
        "package": "stompl",
        "partial": "Srv Ver",
        "signature": "SrvDesc-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getSub",
      "description": {
        "fct-descr": "\u003cp\u003eget \u003cem\u003esubscription\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eAck\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eNack\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Frame -\u003e String",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#getSub",
        "fct-type": "function",
        "title": "getSub"
      },
      "index": {
        "description": "get subscription from Ack Nack or Message",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "getSub",
        "normalized": "Frame-\u003eString",
        "package": "stompl",
        "partial": "Sub",
        "signature": "Frame-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getTrans",
      "description": {
        "fct-descr": "\u003cp\u003eget \u003cem\u003etransaction\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eSend\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eAck\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eNack\u003c/a\u003e\u003c/code\u003e, \n                          \u003ccode\u003e\u003ca\u003eBegin\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eCommit\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eAbort\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Frame -\u003e String",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#getTrans",
        "fct-type": "function",
        "title": "getTrans"
      },
      "index": {
        "description": "get transaction from Send Ack Nack Begin Commit or Abort",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "getTrans",
        "normalized": "Frame-\u003eString",
        "package": "stompl",
        "partial": "Trans",
        "signature": "Frame-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getVersion",
      "description": {
        "fct-descr": "\u003cp\u003eget \u003cem\u003eversion\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eConnected\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Frame -\u003e Version",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#getVersion",
        "fct-type": "function",
        "title": "getVersion"
      },
      "index": {
        "description": "get version from Connected",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "getVersion",
        "normalized": "Frame-\u003eVersion",
        "package": "stompl",
        "partial": "Version",
        "signature": "Frame-\u003eVersion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getVersions",
      "description": {
        "fct-descr": "\u003cp\u003eget \u003cem\u003eaccept-version\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eConnect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Frame -\u003e [Version]",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#getVersions",
        "fct-type": "function",
        "title": "getVersions"
      },
      "index": {
        "description": "get accept-version from Connect",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "getVersions",
        "normalized": "Frame-\u003e[Version]",
        "package": "stompl",
        "partial": "Versions",
        "signature": "Frame-\u003e[Version]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:isValidAck",
      "description": {
        "fct-descr": "\u003cp\u003echeck if \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e represents a valid \u003ccode\u003e\u003ca\u003eAckMode\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e Bool",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#isValidAck",
        "fct-type": "function",
        "title": "isValidAck"
      },
      "index": {
        "description": "check if String represents valid AckMode",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "isValidAck",
        "normalized": "String-\u003eBool",
        "package": "stompl",
        "partial": "Valid Ack",
        "signature": "String-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkAbort",
      "description": {
        "fct-descr": "\u003cp\u003emake an \u003ccode\u003e\u003ca\u003eAbort\u003c/a\u003e\u003c/code\u003e frame (Application -\u003e Broker).\n   The parameters are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Transaction: A unique transaction identifier\n                  defined by the application. \n\u003c/li\u003e\u003cli\u003e Receipt: A receipt (see \u003ccode\u003e\u003ca\u003emkSubscribe\u003c/a\u003e\u003c/code\u003e for details)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e: Additional, broker-specific headers\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e String -\u003e [Header] -\u003e Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkAbort",
        "fct-type": "function",
        "title": "mkAbort"
      },
      "index": {
        "description": "make an Abort frame Application Broker The parameters are Transaction unique transaction identifier defined by the application Receipt receipt see mkSubscribe for details Header Additional broker-specific headers",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkAbort",
        "normalized": "String-\u003eString-\u003e[Header]-\u003eFrame",
        "package": "stompl",
        "partial": "Abort",
        "signature": "String-\u003eString-\u003e[Header]-\u003eFrame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkAbrtFrame",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eAbort\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "[Header] -\u003e Either String Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkAbrtFrame",
        "fct-type": "function",
        "title": "mkAbrtFrame"
      },
      "index": {
        "description": "make Abort frame",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkAbrtFrame",
        "normalized": "[Header]-\u003eEither String Frame",
        "package": "stompl",
        "partial": "Abrt Frame",
        "signature": "[Header]-\u003eEither String Frame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkAcVerHdr",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003cem\u003eaccept-version\u003c/em\u003e header (connect frame)\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e Header",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkAcVerHdr",
        "fct-type": "function",
        "title": "mkAcVerHdr"
      },
      "index": {
        "description": "make accept-version header connect frame",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkAcVerHdr",
        "normalized": "String-\u003eHeader",
        "package": "stompl",
        "partial": "Ac Ver Hdr",
        "signature": "String-\u003eHeader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkAck",
      "description": {
        "fct-descr": "\u003cp\u003emake an \u003ccode\u003e\u003ca\u003eAck\u003c/a\u003e\u003c/code\u003e frame (Application -\u003e Broker).\n   The parameters are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Message Id: The identifier of the message to be ack'd\n\u003c/li\u003e\u003cli\u003e Subscription Id: The subscription, through which\n                      the message was received\n\u003c/li\u003e\u003cli\u003e Transaction: Acks may be part of a transaction\n                  (see \u003ccode\u003e\u003ca\u003emkSend\u003c/a\u003e\u003c/code\u003e for details).\n\u003c/li\u003e\u003cli\u003e Receipt: see \u003ccode\u003e\u003ca\u003emkSubscribe\u003c/a\u003e\u003c/code\u003e for details\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e String -\u003e String -\u003e String -\u003e [Header] -\u003e Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkAck",
        "fct-type": "function",
        "title": "mkAck"
      },
      "index": {
        "description": "make an Ack frame Application Broker The parameters are Message Id The identifier of the message to be ack Subscription Id The subscription through which the message was received Transaction Acks may be part of transaction see mkSend for details Receipt see mkSubscribe for details",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkAck",
        "normalized": "String-\u003eString-\u003eString-\u003eString-\u003e[Header]-\u003eFrame",
        "package": "stompl",
        "partial": "Ack",
        "signature": "String-\u003eString-\u003eString-\u003eString-\u003e[Header]-\u003eFrame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkAckFrame",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eAck\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "[Header] -\u003e Either String Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkAckFrame",
        "fct-type": "function",
        "title": "mkAckFrame"
      },
      "index": {
        "description": "make Ack frame",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkAckFrame",
        "normalized": "[Header]-\u003eEither String Frame",
        "package": "stompl",
        "partial": "Ack Frame",
        "signature": "[Header]-\u003eEither String Frame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkAckHdr",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003cem\u003eack\u003c/em\u003e header (subscribe frame)\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e Header",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkAckHdr",
        "fct-type": "function",
        "title": "mkAckHdr"
      },
      "index": {
        "description": "make ack header subscribe frame",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkAckHdr",
        "normalized": "String-\u003eHeader",
        "package": "stompl",
        "partial": "Ack Hdr",
        "signature": "String-\u003eHeader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkBeat",
      "description": {
        "fct-descr": "\u003cp\u003emake a \u003ccode\u003eHeatBeat\u003c/code\u003e frame (Application -\u003e Broker and\n                            Broker      -\u003e Application)\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkBeat",
        "fct-type": "function",
        "title": "mkBeat"
      },
      "index": {
        "description": "make HeatBeat frame Application Broker and Broker Application",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkBeat",
        "normalized": "",
        "package": "stompl",
        "partial": "Beat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkBeatHdr",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003cem\u003eheart-beat\u003c/em\u003e header\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e Header",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkBeatHdr",
        "fct-type": "function",
        "title": "mkBeatHdr"
      },
      "index": {
        "description": "make heart-beat header",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkBeatHdr",
        "normalized": "String-\u003eHeader",
        "package": "stompl",
        "partial": "Beat Hdr",
        "signature": "String-\u003eHeader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkBegin",
      "description": {
        "fct-descr": "\u003cp\u003emake a \u003ccode\u003e\u003ca\u003eBegin\u003c/a\u003e\u003c/code\u003e frame (Application -\u003e Broker).\n   The parameters are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Transaction: A unique transaction identifier\n                  defined by the application. \n\u003c/li\u003e\u003cli\u003e Receipt: A receipt (see \u003ccode\u003e\u003ca\u003emkSubscribe\u003c/a\u003e\u003c/code\u003e for details)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e: Additional, broker-specific headers\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e String -\u003e [Header] -\u003e Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkBegin",
        "fct-type": "function",
        "title": "mkBegin"
      },
      "index": {
        "description": "make Begin frame Application Broker The parameters are Transaction unique transaction identifier defined by the application Receipt receipt see mkSubscribe for details Header Additional broker-specific headers",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkBegin",
        "normalized": "String-\u003eString-\u003e[Header]-\u003eFrame",
        "package": "stompl",
        "partial": "Begin",
        "signature": "String-\u003eString-\u003e[Header]-\u003eFrame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkBgnFrame",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eBegin\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "[Header] -\u003e Either String Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkBgnFrame",
        "fct-type": "function",
        "title": "mkBgnFrame"
      },
      "index": {
        "description": "make Begin frame",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkBgnFrame",
        "normalized": "[Header]-\u003eEither String Frame",
        "package": "stompl",
        "partial": "Bgn Frame",
        "signature": "[Header]-\u003eEither String Frame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkCliIdHdr",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003cem\u003eclient-id\u003c/em\u003e header\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e Header",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkCliIdHdr",
        "fct-type": "function",
        "title": "mkCliIdHdr"
      },
      "index": {
        "description": "make client-id header",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkCliIdHdr",
        "normalized": "String-\u003eHeader",
        "package": "stompl",
        "partial": "Cli Id Hdr",
        "signature": "String-\u003eHeader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkCmtFrame",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eCommit\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "[Header] -\u003e Either String Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkCmtFrame",
        "fct-type": "function",
        "title": "mkCmtFrame"
      },
      "index": {
        "description": "make Commit frame",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkCmtFrame",
        "normalized": "[Header]-\u003eEither String Frame",
        "package": "stompl",
        "partial": "Cmt Frame",
        "signature": "[Header]-\u003eEither String Frame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkCommit",
      "description": {
        "fct-descr": "\u003cp\u003emake a \u003ccode\u003e\u003ca\u003eCommit\u003c/a\u003e\u003c/code\u003e frame (Application -\u003e Broker).\n   The parameters are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eTransaction\u003c/code\u003e: A unique transaction identifier\n                  defined by the application. \n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eReceipt\u003c/a\u003e\u003c/code\u003e: A receipt (see \u003ccode\u003e\u003ca\u003emkSubscribe\u003c/a\u003e\u003c/code\u003e for details)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e: Additional, broker-specific headers\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e String -\u003e [Header] -\u003e Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkCommit",
        "fct-type": "function",
        "title": "mkCommit"
      },
      "index": {
        "description": "make Commit frame Application Broker The parameters are Transaction unique transaction identifier defined by the application Receipt receipt see mkSubscribe for details Header Additional broker-specific headers",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkCommit",
        "normalized": "String-\u003eString-\u003e[Header]-\u003eFrame",
        "package": "stompl",
        "partial": "Commit",
        "signature": "String-\u003eString-\u003e[Header]-\u003eFrame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkConFrame",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eConnect\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "[Header] -\u003e Either String Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkConFrame",
        "fct-type": "function",
        "title": "mkConFrame"
      },
      "index": {
        "description": "make Connect frame",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkConFrame",
        "normalized": "[Header]-\u003eEither String Frame",
        "package": "stompl",
        "partial": "Con Frame",
        "signature": "[Header]-\u003eEither String Frame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkCondFrame",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eConnected\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "[Header] -\u003e Either String Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkCondFrame",
        "fct-type": "function",
        "title": "mkCondFrame"
      },
      "index": {
        "description": "make Connected frame",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkCondFrame",
        "normalized": "[Header]-\u003eEither String Frame",
        "package": "stompl",
        "partial": "Cond Frame",
        "signature": "[Header]-\u003eEither String Frame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkConnect",
      "description": {
        "fct-descr": "\u003cp\u003emake a \u003ccode\u003e\u003ca\u003eConnect\u003c/a\u003e\u003c/code\u003e frame (Application -\u003e Broker).\n   The parameters are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e User: user to authenticate at the broker.\n\u003c/li\u003e\u003cli\u003e Passcode: password to authenticate at the broker.\n\u003c/li\u003e\u003cli\u003e Host: broker's virtual hoast (\u003cem\u003ee.g.\u003c/em\u003e \n           stomp.broker.github.org).\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eHeartBeat\u003c/a\u003e\u003c/code\u003e: the clients bid in negotiating\n                  the heart-beat.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eVersion\u003c/a\u003e\u003c/code\u003e: the versions supported by the client.\n\u003c/li\u003e\u003cli\u003e ClientId: Client identification for persistent connections.\n                 Note that the client id is not a standard Stomp feature,\n                 but specific to ActiveMQ and other brokers.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e: List of additional, broker-specific headers\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e String -\u003e String -\u003e Heart -\u003e [Version] -\u003e String -\u003e [Header] -\u003e Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkConnect",
        "fct-type": "function",
        "title": "mkConnect"
      },
      "index": {
        "description": "make Connect frame Application Broker The parameters are User user to authenticate at the broker Passcode password to authenticate at the broker Host broker virtual hoast e.g stomp.broker.github.org HeartBeat the clients bid in negotiating the heart-beat Version the versions supported by the client ClientId Client identification for persistent connections Note that the client id is not standard Stomp feature but specific to ActiveMQ and other brokers Header List of additional broker-specific headers",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkConnect",
        "normalized": "String-\u003eString-\u003eString-\u003eHeart-\u003e[Version]-\u003eString-\u003e[Header]-\u003eFrame",
        "package": "stompl",
        "partial": "Connect",
        "signature": "String-\u003eString-\u003eString-\u003eHeart-\u003e[Version]-\u003eString-\u003e[Header]-\u003eFrame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkConnected",
      "description": {
        "fct-descr": "\u003cp\u003emake a \u003ccode\u003e\u003ca\u003eConnect\u003c/a\u003e\u003c/code\u003e frame (Broker -\u003e Application).\n   The parameters are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Session: A unique identifier created by the broker\n              and identifying the session\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eHeartBeat\u003c/a\u003e\u003c/code\u003e: The heart-beat agreed by the broker\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eVersion\u003c/a\u003e\u003c/code\u003e: The version accepted by the broker\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSrvDesc\u003c/a\u003e\u003c/code\u003e: The server description\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e: List of additional, broker-specific headers.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e Heart -\u003e Version -\u003e SrvDesc -\u003e [Header] -\u003e Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkConnected",
        "fct-type": "function",
        "title": "mkConnected"
      },
      "index": {
        "description": "make Connect frame Broker Application The parameters are Session unique identifier created by the broker and identifying the session HeartBeat The heart-beat agreed by the broker Version The version accepted by the broker SrvDesc The server description Header List of additional broker-specific headers",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkConnected",
        "normalized": "String-\u003eHeart-\u003eVersion-\u003eSrvDesc-\u003e[Header]-\u003eFrame",
        "package": "stompl",
        "partial": "Connected",
        "signature": "String-\u003eHeart-\u003eVersion-\u003eSrvDesc-\u003e[Header]-\u003eFrame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkDestHdr",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003cem\u003edestination\u003c/em\u003e header\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e Header",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkDestHdr",
        "fct-type": "function",
        "title": "mkDestHdr"
      },
      "index": {
        "description": "make destination header",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkDestHdr",
        "normalized": "String-\u003eHeader",
        "package": "stompl",
        "partial": "Dest Hdr",
        "signature": "String-\u003eHeader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkDisFrame",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eDisconnect\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "[Header] -\u003e Either String Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkDisFrame",
        "fct-type": "function",
        "title": "mkDisFrame"
      },
      "index": {
        "description": "make Disconnect frame",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkDisFrame",
        "normalized": "[Header]-\u003eEither String Frame",
        "package": "stompl",
        "partial": "Dis Frame",
        "signature": "[Header]-\u003eEither String Frame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkDisconnect",
      "description": {
        "fct-descr": "\u003cp\u003emake a \u003ccode\u003e\u003ca\u003eDisconnect\u003c/a\u003e\u003c/code\u003e frame (Application -\u003e Broker).\n   The parameter is:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Receipt: see \u003ccode\u003e\u003ca\u003emkSubscribe\u003c/a\u003e\u003c/code\u003e for details\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e [Header] -\u003e Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkDisconnect",
        "fct-type": "function",
        "title": "mkDisconnect"
      },
      "index": {
        "description": "make Disconnect frame Application Broker The parameter is Receipt see mkSubscribe for details",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkDisconnect",
        "normalized": "String-\u003e[Header]-\u003eFrame",
        "package": "stompl",
        "partial": "Disconnect",
        "signature": "String-\u003e[Header]-\u003eFrame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkErr",
      "description": {
        "fct-descr": "\u003cp\u003emake a \u003ccode\u003e\u003ca\u003eReceipt\u003c/a\u003e\u003c/code\u003e frame (Broker -\u003e Application).\n   The parameters are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Error Message Id: A short error description\n\u003c/li\u003e\u003cli\u003e Receipt Id: The receipt of frame sent by the application\n                 to which this error relates\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e: The format of the error message as MIME Type\n\u003c/li\u003e\u003cli\u003e Length: The length of the error message\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e: List of additional, broker-specific headers\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eBody\u003c/a\u003e\u003c/code\u003e: The error message\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e String -\u003e Type -\u003e Int -\u003e [Header] -\u003e Body -\u003e Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkErr",
        "fct-type": "function",
        "title": "mkErr"
      },
      "index": {
        "description": "make Receipt frame Broker Application The parameters are Error Message Id short error description Receipt Id The receipt of frame sent by the application to which this error relates Type The format of the error message as MIME Type Length The length of the error message Header List of additional broker-specific headers Body The error message",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkErr",
        "normalized": "String-\u003eString-\u003eType-\u003eInt-\u003e[Header]-\u003eBody-\u003eFrame",
        "package": "stompl",
        "partial": "Err",
        "signature": "String-\u003eString-\u003eType-\u003eInt-\u003e[Header]-\u003eBody-\u003eFrame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkErrFrame",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "[Header] -\u003e Int -\u003e Body -\u003e Either String Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkErrFrame",
        "fct-type": "function",
        "title": "mkErrFrame"
      },
      "index": {
        "description": "make Error frame",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkErrFrame",
        "normalized": "[Header]-\u003eInt-\u003eBody-\u003eEither String Frame",
        "package": "stompl",
        "partial": "Err Frame",
        "signature": "[Header]-\u003eInt-\u003eBody-\u003eEither String Frame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkHostHdr",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003cem\u003ehost\u003c/em\u003e header (connect frame)\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e Header",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkHostHdr",
        "fct-type": "function",
        "title": "mkHostHdr"
      },
      "index": {
        "description": "make host header connect frame",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkHostHdr",
        "normalized": "String-\u003eHeader",
        "package": "stompl",
        "partial": "Host Hdr",
        "signature": "String-\u003eHeader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkIdHdr",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003cem\u003eid\u003c/em\u003e header (subscribe frame)\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e Header",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkIdHdr",
        "fct-type": "function",
        "title": "mkIdHdr"
      },
      "index": {
        "description": "make id header subscribe frame",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkIdHdr",
        "normalized": "String-\u003eHeader",
        "package": "stompl",
        "partial": "Id Hdr",
        "signature": "String-\u003eHeader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkLenHdr",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003cem\u003econtent-length\u003c/em\u003e header\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e Header",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkLenHdr",
        "fct-type": "function",
        "title": "mkLenHdr"
      },
      "index": {
        "description": "make content-length header",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkLenHdr",
        "normalized": "String-\u003eHeader",
        "package": "stompl",
        "partial": "Len Hdr",
        "signature": "String-\u003eHeader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkLogHdr",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003cem\u003elogin\u003c/em\u003e header\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e Header",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkLogHdr",
        "fct-type": "function",
        "title": "mkLogHdr"
      },
      "index": {
        "description": "make login header",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkLogHdr",
        "normalized": "String-\u003eHeader",
        "package": "stompl",
        "partial": "Log Hdr",
        "signature": "String-\u003eHeader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkMIdHdr",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003cem\u003emessage-id\u003c/em\u003e header\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e Header",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkMIdHdr",
        "fct-type": "function",
        "title": "mkMIdHdr"
      },
      "index": {
        "description": "make message-id header",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkMIdHdr",
        "normalized": "String-\u003eHeader",
        "package": "stompl",
        "partial": "MId Hdr",
        "signature": "String-\u003eHeader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkMessage",
      "description": {
        "fct-descr": "\u003cp\u003emake a \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e frame (Broker -\u003e Application).\n   The parameters are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Subscription Id: The message was sent\n                      because the application subscribed to the queue\n                      with this subscription id (see \u003ccode\u003e\u003ca\u003emkSubscribe\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e Destination: The name of the queue, in wich the message was published.\n\u003c/li\u003e\u003cli\u003e Message Id: A unique message identifier, defined by the broker\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e: The type of the playload as MIME Type\n\u003c/li\u003e\u003cli\u003e Length: The length of the payload in bytes\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e: A list of user-defined headers (see \u003ccode\u003e\u003ca\u003emkSend\u003c/a\u003e\u003c/code\u003e for details)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eBody\u003c/a\u003e\u003c/code\u003e: The payload\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e String -\u003e String -\u003e String -\u003e Type -\u003e Int -\u003e [Header] -\u003e Body -\u003e Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkMessage",
        "fct-type": "function",
        "title": "mkMessage"
      },
      "index": {
        "description": "make Message frame Broker Application The parameters are Subscription Id The message was sent because the application subscribed to the queue with this subscription id see mkSubscribe Destination The name of the queue in wich the message was published Message Id unique message identifier defined by the broker Type The type of the playload as MIME Type Length The length of the payload in bytes Header list of user-defined headers see mkSend for details Body The payload",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkMessage",
        "normalized": "String-\u003eString-\u003eString-\u003eString-\u003eType-\u003eInt-\u003e[Header]-\u003eBody-\u003eFrame",
        "package": "stompl",
        "partial": "Message",
        "signature": "String-\u003eString-\u003eString-\u003eString-\u003eType-\u003eInt-\u003e[Header]-\u003eBody-\u003eFrame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkMimeHdr",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003cem\u003econtent-type\u003c/em\u003e header\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e Header",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkMimeHdr",
        "fct-type": "function",
        "title": "mkMimeHdr"
      },
      "index": {
        "description": "make content-type header",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkMimeHdr",
        "normalized": "String-\u003eHeader",
        "package": "stompl",
        "partial": "Mime Hdr",
        "signature": "String-\u003eHeader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkMsgFrame",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "[Header] -\u003e Int -\u003e Body -\u003e Either String Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkMsgFrame",
        "fct-type": "function",
        "title": "mkMsgFrame"
      },
      "index": {
        "description": "make Message frame",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkMsgFrame",
        "normalized": "[Header]-\u003eInt-\u003eBody-\u003eEither String Frame",
        "package": "stompl",
        "partial": "Msg Frame",
        "signature": "[Header]-\u003eInt-\u003eBody-\u003eEither String Frame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkMsgHdr",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003cem\u003emessage\u003c/em\u003e header (error frame)\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e Header",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkMsgHdr",
        "fct-type": "function",
        "title": "mkMsgHdr"
      },
      "index": {
        "description": "make message header error frame",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkMsgHdr",
        "normalized": "String-\u003eHeader",
        "package": "stompl",
        "partial": "Msg Hdr",
        "signature": "String-\u003eHeader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkNack",
      "description": {
        "fct-descr": "\u003cp\u003emake a \u003ccode\u003e\u003ca\u003eNack\u003c/a\u003e\u003c/code\u003e frame (Application -\u003e Broker).\n   The parameters are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Message Id: The identifier of the message to be nack'd\n\u003c/li\u003e\u003cli\u003e Subscription Id: The subscription, through which\n                      the message was received\n\u003c/li\u003e\u003cli\u003e Transaction: Nacks may be part of a transaction\n                  (see \u003ccode\u003e\u003ca\u003emkSend\u003c/a\u003e\u003c/code\u003e for details).\n\u003c/li\u003e\u003cli\u003e Receipt: see \u003ccode\u003e\u003ca\u003emkSubscribe\u003c/a\u003e\u003c/code\u003e for details\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e String -\u003e String -\u003e String -\u003e [Header] -\u003e Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkNack",
        "fct-type": "function",
        "title": "mkNack"
      },
      "index": {
        "description": "make Nack frame Application Broker The parameters are Message Id The identifier of the message to be nack Subscription Id The subscription through which the message was received Transaction Nacks may be part of transaction see mkSend for details Receipt see mkSubscribe for details",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkNack",
        "normalized": "String-\u003eString-\u003eString-\u003eString-\u003e[Header]-\u003eFrame",
        "package": "stompl",
        "partial": "Nack",
        "signature": "String-\u003eString-\u003eString-\u003eString-\u003e[Header]-\u003eFrame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkNackFrame",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eNack\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "[Header] -\u003e Either String Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkNackFrame",
        "fct-type": "function",
        "title": "mkNackFrame"
      },
      "index": {
        "description": "make Nack frame",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkNackFrame",
        "normalized": "[Header]-\u003eEither String Frame",
        "package": "stompl",
        "partial": "Nack Frame",
        "signature": "[Header]-\u003eEither String Frame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkPassHdr",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003cem\u003epasscode\u003c/em\u003e header\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e Header",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkPassHdr",
        "fct-type": "function",
        "title": "mkPassHdr"
      },
      "index": {
        "description": "make passcode header",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkPassHdr",
        "normalized": "String-\u003eHeader",
        "package": "stompl",
        "partial": "Pass Hdr",
        "signature": "String-\u003eHeader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkRecFrame",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eReceipt\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "[Header] -\u003e Either String Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkRecFrame",
        "fct-type": "function",
        "title": "mkRecFrame"
      },
      "index": {
        "description": "make Receipt frame",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkRecFrame",
        "normalized": "[Header]-\u003eEither String Frame",
        "package": "stompl",
        "partial": "Rec Frame",
        "signature": "[Header]-\u003eEither String Frame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkRecHdr",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003cem\u003ereceipt\u003c/em\u003e header\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e Header",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkRecHdr",
        "fct-type": "function",
        "title": "mkRecHdr"
      },
      "index": {
        "description": "make receipt header",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkRecHdr",
        "normalized": "String-\u003eHeader",
        "package": "stompl",
        "partial": "Rec Hdr",
        "signature": "String-\u003eHeader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkReceipt",
      "description": {
        "fct-descr": "\u003cp\u003emake a \u003ccode\u003e\u003ca\u003eReceipt\u003c/a\u003e\u003c/code\u003e frame (Broker -\u003e Application).\n   The parameter is:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Receipt: The receipt identifier received from the application\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e: List of additional, broker-specific headers\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e [Header] -\u003e Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkReceipt",
        "fct-type": "function",
        "title": "mkReceipt"
      },
      "index": {
        "description": "make Receipt frame Broker Application The parameter is Receipt The receipt identifier received from the application Header List of additional broker-specific headers",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkReceipt",
        "normalized": "String-\u003e[Header]-\u003eFrame",
        "package": "stompl",
        "partial": "Receipt",
        "signature": "String-\u003e[Header]-\u003eFrame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkSelHdr",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003cem\u003eselector\u003c/em\u003e header\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e Header",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkSelHdr",
        "fct-type": "function",
        "title": "mkSelHdr"
      },
      "index": {
        "description": "make selector header",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkSelHdr",
        "normalized": "String-\u003eHeader",
        "package": "stompl",
        "partial": "Sel Hdr",
        "signature": "String-\u003eHeader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkSend",
      "description": {
        "fct-descr": "\u003cp\u003emake a \u003ccode\u003e\u003ca\u003eSend\u003c/a\u003e\u003c/code\u003e frame (Application -\u003e Broker).\n   The parameters are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Destination: The name of the queue \n                  where the message should be published\n\u003c/li\u003e\u003cli\u003e Transaction: A unique identifier indicating\n                  a running transaction;\n                  if sent with a transaction,\n                  the message will not be delivered\n                  to subscribing applications,\n                  before the transaction is committed.\n                  If the \u003ccode\u003e\u003ca\u003eSend\u003c/a\u003e\u003c/code\u003e is not part of a transaction,\n                  the string shall be empty.\n\u003c/li\u003e\u003cli\u003e Receipt: A receipt (see \u003ccode\u003e\u003ca\u003emkSubscribe\u003c/a\u003e\u003c/code\u003e for details)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e: The content type of the payload message\n                  as MIME Type\n\u003c/li\u003e\u003cli\u003e Length: The length of the type in bytes\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e: List of additional headers;\n               Stomp protocol requires that user-specified\n               headers are passed through to subscribing applications.\n               These headers may, for instance, be use\n               by selectors to select messages. \n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eBody\u003c/a\u003e\u003c/code\u003e: The payload message\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e String -\u003e String -\u003e Type -\u003e Int -\u003e [Header] -\u003e Body -\u003e Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkSend",
        "fct-type": "function",
        "title": "mkSend"
      },
      "index": {
        "description": "make Send frame Application Broker The parameters are Destination The name of the queue where the message should be published Transaction unique identifier indicating running transaction if sent with transaction the message will not be delivered to subscribing applications before the transaction is committed If the Send is not part of transaction the string shall be empty Receipt receipt see mkSubscribe for details Type The content type of the payload message as MIME Type Length The length of the type in bytes Header List of additional headers Stomp protocol requires that user-specified headers are passed through to subscribing applications These headers may for instance be use by selectors to select messages Body The payload message",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkSend",
        "normalized": "String-\u003eString-\u003eString-\u003eType-\u003eInt-\u003e[Header]-\u003eBody-\u003eFrame",
        "package": "stompl",
        "partial": "Send",
        "signature": "String-\u003eString-\u003eString-\u003eType-\u003eInt-\u003e[Header]-\u003eBody-\u003eFrame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkSesHdr",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003cem\u003esession\u003c/em\u003e header (connected frame)\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e Header",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkSesHdr",
        "fct-type": "function",
        "title": "mkSesHdr"
      },
      "index": {
        "description": "make session header connected frame",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkSesHdr",
        "normalized": "String-\u003eHeader",
        "package": "stompl",
        "partial": "Ses Hdr",
        "signature": "String-\u003eHeader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkSndFrame",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eSend\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "[Header] -\u003e Int -\u003e Body -\u003e Either String Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkSndFrame",
        "fct-type": "function",
        "title": "mkSndFrame"
      },
      "index": {
        "description": "make Send frame",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkSndFrame",
        "normalized": "[Header]-\u003eInt-\u003eBody-\u003eEither String Frame",
        "package": "stompl",
        "partial": "Snd Frame",
        "signature": "[Header]-\u003eInt-\u003eBody-\u003eEither String Frame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkSrvHdr",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003cem\u003eserver\u003c/em\u003e header (connected frame)\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e Header",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkSrvHdr",
        "fct-type": "function",
        "title": "mkSrvHdr"
      },
      "index": {
        "description": "make server header connected frame",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkSrvHdr",
        "normalized": "String-\u003eHeader",
        "package": "stompl",
        "partial": "Srv Hdr",
        "signature": "String-\u003eHeader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkStmpFrame",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eStomp\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "[Header] -\u003e Either String Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkStmpFrame",
        "fct-type": "function",
        "title": "mkStmpFrame"
      },
      "index": {
        "description": "make Stomp frame",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkStmpFrame",
        "normalized": "[Header]-\u003eEither String Frame",
        "package": "stompl",
        "partial": "Stmp Frame",
        "signature": "[Header]-\u003eEither String Frame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkStomp",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003emkConnect\u003c/a\u003e\u003c/code\u003e, but the result is a \"STOMP\" frame\n   rather than a \"CONNECT\" frame\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e String -\u003e String -\u003e Heart -\u003e [Version] -\u003e String -\u003e [Header] -\u003e Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkStomp",
        "fct-type": "function",
        "title": "mkStomp"
      },
      "index": {
        "description": "Same as mkConnect but the result is STOMP frame rather than CONNECT frame",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkStomp",
        "normalized": "String-\u003eString-\u003eString-\u003eHeart-\u003e[Version]-\u003eString-\u003e[Header]-\u003eFrame",
        "package": "stompl",
        "partial": "Stomp",
        "signature": "String-\u003eString-\u003eString-\u003eHeart-\u003e[Version]-\u003eString-\u003e[Header]-\u003eFrame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkSubFrame",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eSubscribe\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "[Header] -\u003e Either String Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkSubFrame",
        "fct-type": "function",
        "title": "mkSubFrame"
      },
      "index": {
        "description": "make Subscribe frame",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkSubFrame",
        "normalized": "[Header]-\u003eEither String Frame",
        "package": "stompl",
        "partial": "Sub Frame",
        "signature": "[Header]-\u003eEither String Frame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkSubHdr",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003cem\u003esubscription\u003c/em\u003e header\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e Header",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkSubHdr",
        "fct-type": "function",
        "title": "mkSubHdr"
      },
      "index": {
        "description": "make subscription header",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkSubHdr",
        "normalized": "String-\u003eHeader",
        "package": "stompl",
        "partial": "Sub Hdr",
        "signature": "String-\u003eHeader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkSubscribe",
      "description": {
        "fct-descr": "\u003cp\u003emake a \u003ccode\u003e\u003ca\u003eSubscribe\u003c/a\u003e\u003c/code\u003e frame (Application -\u003e Broker).\n   The parameters are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Destination: The name of the queue as it is known by the broker\n                  and other applications using the queue\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eAckMode\u003c/a\u003e\u003c/code\u003e: The Acknowledge Mode for this subscription\n\u003c/li\u003e\u003cli\u003e Selector: An expression defining those messages\n               that are of actual for client.\n               The Stomp protocol does not define\n               a language for selectors;\n               it is even not entirely clear,\n               where messages are selected:\n               already at the broker, or only by the client.\n               Some brokers provide pre-selection of messages, \n               others do not.  \n\u003c/li\u003e\u003cli\u003e Subscription Id: A unique identifier distinguishing this \n                      subscription from others to the same queue.\n                      The identifier is defined by the application.\n\u003c/li\u003e\u003cli\u003e Receipt: A unique identifier defined by the application\n              to request confirmation of receipt of this frame.\n              If no receipt is wanted, the string shall be empty.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e: List of additional, broker-specific headers.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e AckMode -\u003e String -\u003e String -\u003e String -\u003e [Header] -\u003e Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkSubscribe",
        "fct-type": "function",
        "title": "mkSubscribe"
      },
      "index": {
        "description": "make Subscribe frame Application Broker The parameters are Destination The name of the queue as it is known by the broker and other applications using the queue AckMode The Acknowledge Mode for this subscription Selector An expression defining those messages that are of actual for client The Stomp protocol does not define language for selectors it is even not entirely clear where messages are selected already at the broker or only by the client Some brokers provide pre-selection of messages others do not Subscription Id unique identifier distinguishing this subscription from others to the same queue The identifier is defined by the application Receipt unique identifier defined by the application to request confirmation of receipt of this frame If no receipt is wanted the string shall be empty Header List of additional broker-specific headers",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkSubscribe",
        "normalized": "String-\u003eAckMode-\u003eString-\u003eString-\u003eString-\u003e[Header]-\u003eFrame",
        "package": "stompl",
        "partial": "Subscribe",
        "signature": "String-\u003eAckMode-\u003eString-\u003eString-\u003eString-\u003e[Header]-\u003eFrame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkTrnHdr",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003cem\u003etransaction\u003c/em\u003e header\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e Header",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkTrnHdr",
        "fct-type": "function",
        "title": "mkTrnHdr"
      },
      "index": {
        "description": "make transaction header",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkTrnHdr",
        "normalized": "String-\u003eHeader",
        "package": "stompl",
        "partial": "Trn Hdr",
        "signature": "String-\u003eHeader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkUSubFrame",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eUnsubscribe\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "[Header] -\u003e Either String Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkUSubFrame",
        "fct-type": "function",
        "title": "mkUSubFrame"
      },
      "index": {
        "description": "make Unsubscribe frame",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkUSubFrame",
        "normalized": "[Header]-\u003eEither String Frame",
        "package": "stompl",
        "partial": "USub Frame",
        "signature": "[Header]-\u003eEither String Frame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkUnsubscribe",
      "description": {
        "fct-descr": "\u003cp\u003emake an \u003ccode\u003e\u003ca\u003eUnsubscribe\u003c/a\u003e\u003c/code\u003e frame (Application -\u003e Broker).\n   The parameters are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Destination: The queue name; either a destination or a \n                  subscription id must be given. \n                  (According to protocol version 1.1,\n                   the subscription id is mandatory on\n                   both, \u003ccode\u003e\u003ca\u003eSubscribe\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eUnsubscribe\u003c/a\u003e\u003c/code\u003e.)\n\u003c/li\u003e\u003cli\u003e Subscription Id: The subscription identifier (see \u003ccode\u003e\u003ca\u003emkSubscribe\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e Receipt: The receipt (see \u003ccode\u003e\u003ca\u003emkSubscribe\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e: Additional, broker-specific headers\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e String -\u003e String -\u003e [Header] -\u003e Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkUnsubscribe",
        "fct-type": "function",
        "title": "mkUnsubscribe"
      },
      "index": {
        "description": "make an Unsubscribe frame Application Broker The parameters are Destination The queue name either destination or subscription id must be given According to protocol version the subscription id is mandatory on both Subscribe and Unsubscribe Subscription Id The subscription identifier see mkSubscribe Receipt The receipt see mkSubscribe Header Additional broker-specific headers",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkUnsubscribe",
        "normalized": "String-\u003eString-\u003eString-\u003e[Header]-\u003eFrame",
        "package": "stompl",
        "partial": "Unsubscribe",
        "signature": "String-\u003eString-\u003eString-\u003e[Header]-\u003eFrame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkVerHdr",
      "description": {
        "fct-descr": "\u003cp\u003emake \u003cem\u003eversion\u003c/em\u003e header (connected frame)\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e Header",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#mkVerHdr",
        "fct-type": "function",
        "title": "mkVerHdr"
      },
      "index": {
        "description": "make version header connected frame",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "mkVerHdr",
        "normalized": "String-\u003eHeader",
        "package": "stompl",
        "partial": "Ver Hdr",
        "signature": "String-\u003eHeader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:negoBeat",
      "description": {
        "fct-descr": "\u003cp\u003enegotiates heart-beat\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Heart -\u003e Heart -\u003e Heart",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#negoBeat",
        "fct-type": "function",
        "title": "negoBeat"
      },
      "index": {
        "description": "negotiates heart-beat",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "negoBeat",
        "normalized": "Heart-\u003eHeart-\u003eHeart",
        "package": "stompl",
        "partial": "Beat",
        "signature": "Heart-\u003eHeart-\u003eHeart"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:negoVersion",
      "description": {
        "fct-descr": "\u003cp\u003enegotiates version - \n   if no common version is found,\n   the function results in version 1.0!\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "[Version] -\u003e [Version] -\u003e Version",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#negoVersion",
        "fct-type": "function",
        "title": "negoVersion"
      },
      "index": {
        "description": "negotiates version if no common version is found the function results in version",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "negoVersion",
        "normalized": "[Version]-\u003e[Version]-\u003eVersion",
        "package": "stompl",
        "partial": "Version",
        "signature": "[Version]-\u003e[Version]-\u003eVersion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:numeric",
      "description": {
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e Bool",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#numeric",
        "fct-type": "function",
        "title": "numeric"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "numeric",
        "normalized": "String-\u003eBool",
        "package": "stompl",
        "partial": "",
        "signature": "String-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:putCommand",
      "description": {
        "fct-descr": "\u003cp\u003econverts the \u003ccode\u003e\u003ca\u003eFrameType\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Frame -\u003e ByteString",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#putCommand",
        "fct-type": "function",
        "title": "putCommand"
      },
      "index": {
        "description": "converts the FrameType into ByteString",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "putCommand",
        "normalized": "Frame-\u003eByteString",
        "package": "stompl",
        "partial": "Command",
        "signature": "Frame-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:putFrame",
      "description": {
        "fct-descr": "\u003cp\u003econverts a \u003ccode\u003e\u003ca\u003eFrame\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Frame -\u003e ByteString",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#putFrame",
        "fct-type": "function",
        "title": "putFrame"
      },
      "index": {
        "description": "converts Frame into ByteString",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "putFrame",
        "normalized": "Frame-\u003eByteString",
        "package": "stompl",
        "partial": "Frame",
        "signature": "Frame-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:resetTrans",
      "description": {
        "fct-descr": "\u003cp\u003esets the transaction header to an empty string;\n   this is a useful function for brokers:\n   when a transaction has been committed,\n   the \u003ccode\u003e\u003ca\u003eSend\u003c/a\u003e\u003c/code\u003e messages can be handled by the same function\n   without, accidentally, iterating into a new transaction.\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Frame -\u003e Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#resetTrans",
        "fct-type": "function",
        "title": "resetTrans"
      },
      "index": {
        "description": "sets the transaction header to an empty string this is useful function for brokers when transaction has been committed the Send messages can be handled by the same function without accidentally iterating into new transaction",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "resetTrans",
        "normalized": "Frame-\u003eFrame",
        "package": "stompl",
        "partial": "Trans",
        "signature": "Frame-\u003eFrame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:rmHdr",
      "description": {
        "fct-descr": "\u003cp\u003eremove header (\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e) from list of \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "[Header] -\u003e String -\u003e [Header]",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#rmHdr",
        "fct-type": "function",
        "title": "rmHdr"
      },
      "index": {
        "description": "remove header String from list of Header",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "rmHdr",
        "normalized": "[Header]-\u003eString-\u003e[Header]",
        "package": "stompl",
        "partial": "Hdr",
        "signature": "[Header]-\u003eString-\u003e[Header]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:rmHdrs",
      "description": {
        "fct-descr": "\u003cp\u003eremove headers (list of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e) from list of \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "[Header] -\u003e [String] -\u003e [Header]",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#rmHdrs",
        "fct-type": "function",
        "title": "rmHdrs"
      },
      "index": {
        "description": "remove headers list of String from list of Header",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "rmHdrs",
        "normalized": "[Header]-\u003e[String]-\u003e[Header]",
        "package": "stompl",
        "partial": "Hdrs",
        "signature": "[Header]-\u003e[String]-\u003e[Header]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:sndToMsg",
      "description": {
        "fct-descr": "\u003cp\u003econverts a \u003ccode\u003e\u003ca\u003eSend\u003c/a\u003e\u003c/code\u003e frame into a \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e frame;\n   parameters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e message id\n\u003c/li\u003e\u003cli\u003e subscription id\n\u003c/li\u003e\u003cli\u003e The original \u003ccode\u003e\u003ca\u003eSend\u003c/a\u003e\u003c/code\u003e frame\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e String -\u003e String -\u003e Frame -\u003e Maybe Frame",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#sndToMsg",
        "fct-type": "function",
        "title": "sndToMsg"
      },
      "index": {
        "description": "converts Send frame into Message frame parameters message id subscription id The original Send frame",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "sndToMsg",
        "normalized": "String-\u003eString-\u003eString-\u003eFrame-\u003eMaybe Frame",
        "package": "stompl",
        "partial": "To Msg",
        "signature": "String-\u003eString-\u003eString-\u003eFrame-\u003eMaybe Frame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:srvToStr",
      "description": {
        "fct-descr": "\u003cp\u003econvert \u003ccode\u003e\u003ca\u003eSrvDesc\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "SrvDesc -\u003e String",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#srvToStr",
        "fct-type": "function",
        "title": "srvToStr"
      },
      "index": {
        "description": "convert SrvDesc to String",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "srvToStr",
        "normalized": "SrvDesc-\u003eString",
        "package": "stompl",
        "partial": "To Str",
        "signature": "SrvDesc-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:strToSrv",
      "description": {
        "fct-descr": "\u003cp\u003econvert \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eSrvDesc\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e SrvDesc",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#strToSrv",
        "fct-type": "function",
        "title": "strToSrv"
      },
      "index": {
        "description": "convert String to SrvDesc",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "strToSrv",
        "normalized": "String-\u003eSrvDesc",
        "package": "stompl",
        "partial": "To Srv",
        "signature": "String-\u003eSrvDesc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:toString",
      "description": {
        "fct-descr": "\u003cp\u003econverts a \u003ccode\u003e\u003ca\u003eFrame\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Frame -\u003e String",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#toString",
        "fct-type": "function",
        "title": "toString"
      },
      "index": {
        "description": "converts Frame into String",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "toString",
        "normalized": "Frame-\u003eString",
        "package": "stompl",
        "partial": "String",
        "signature": "Frame-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:typeOf",
      "description": {
        "fct-descr": "\u003cp\u003egets the \u003ccode\u003e\u003ca\u003eFrameType\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eFrame\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Frame -\u003e FrameType",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#typeOf",
        "fct-type": "function",
        "title": "typeOf"
      },
      "index": {
        "description": "gets the FrameType of Frame",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "typeOf",
        "normalized": "Frame-\u003eFrameType",
        "package": "stompl",
        "partial": "Of",
        "signature": "Frame-\u003eFrameType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:upString",
      "description": {
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#upString",
        "fct-type": "function",
        "title": "upString"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "upString",
        "normalized": "String-\u003eString",
        "package": "stompl",
        "partial": "String",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:valToAck",
      "description": {
        "fct-descr": "\u003cp\u003econvert \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eAckMode\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e Maybe AckMode",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#valToAck",
        "fct-type": "function",
        "title": "valToAck"
      },
      "index": {
        "description": "convert String to AckMode",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "valToAck",
        "normalized": "String-\u003eMaybe AckMode",
        "package": "stompl",
        "partial": "To Ack",
        "signature": "String-\u003eMaybe AckMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:valToBeat",
      "description": {
        "fct-descr": "\u003cp\u003econvert \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eHeartBeat\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e Maybe Heart",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#valToBeat",
        "fct-type": "function",
        "title": "valToBeat"
      },
      "index": {
        "description": "convert String to HeartBeat",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "valToBeat",
        "normalized": "String-\u003eMaybe Heart",
        "package": "stompl",
        "partial": "To Beat",
        "signature": "String-\u003eMaybe Heart"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:valToVer",
      "description": {
        "fct-descr": "\u003cp\u003econvert \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eVersion\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e Maybe Version",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#valToVer",
        "fct-type": "function",
        "title": "valToVer"
      },
      "index": {
        "description": "convert String to Version",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "valToVer",
        "normalized": "String-\u003eMaybe Version",
        "package": "stompl",
        "partial": "To Ver",
        "signature": "String-\u003eMaybe Version"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:valToVers",
      "description": {
        "fct-descr": "\u003cp\u003econvert \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to list of \u003ccode\u003e\u003ca\u003eVersion\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "String -\u003e Maybe [Version]",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#valToVers",
        "fct-type": "function",
        "title": "valToVers"
      },
      "index": {
        "description": "convert String to list of Version",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "valToVers",
        "normalized": "String-\u003eMaybe[Version]",
        "package": "stompl",
        "partial": "To Vers",
        "signature": "String-\u003eMaybe[Version]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:verToVal",
      "description": {
        "fct-descr": "\u003cp\u003econvert \u003ccode\u003e\u003ca\u003eVersion\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "Version -\u003e String",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#verToVal",
        "fct-type": "function",
        "title": "verToVal"
      },
      "index": {
        "description": "convert Version to String",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "verToVal",
        "normalized": "Version-\u003eString",
        "package": "stompl",
        "partial": "To Val",
        "signature": "Version-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:versToVal",
      "description": {
        "fct-descr": "\u003cp\u003econvert list of \u003ccode\u003e\u003ca\u003eVersion\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Frame",
        "fct-package": "stompl",
        "fct-signature": "[Version] -\u003e String",
        "fct-source": "src/Network-Mom-Stompl-Frame.html#versToVal",
        "fct-type": "function",
        "title": "versToVal"
      },
      "index": {
        "description": "convert list of Version to String",
        "hierarchy": "Network Mom Stompl Frame",
        "module": "Network.Mom.Stompl.Frame",
        "name": "versToVal",
        "normalized": "[Version]-\u003eString",
        "package": "stompl",
        "partial": "To Val",
        "signature": "[Version]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Parser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStomp Parser based on Attoparsec\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Mom.Stompl.Parser",
        "fct-package": "stompl",
        "fct-signature": "module",
        "fct-source": "src/Network-Mom-Stompl-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "Stomp Parser based on Attoparsec",
        "hierarchy": "Network Mom Stompl Parser",
        "module": "Network.Mom.Stompl.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "stompl",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Parser.html#v:stompAtOnce",
      "description": {
        "fct-descr": "\u003cp\u003eParses a ByteString at once with Attoparsec \u003ccode\u003e\u003ca\u003eparseOnly\u003c/a\u003e\u003c/code\u003e.\n   May fail or conclude.\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Parser",
        "fct-package": "stompl",
        "fct-signature": "ByteString -\u003e Either String Frame",
        "fct-source": "src/Network-Mom-Stompl-Parser.html#stompAtOnce",
        "fct-type": "function",
        "title": "stompAtOnce"
      },
      "index": {
        "description": "Parses ByteString at once with Attoparsec parseOnly May fail or conclude",
        "hierarchy": "Network Mom Stompl Parser",
        "module": "Network.Mom.Stompl.Parser",
        "name": "stompAtOnce",
        "normalized": "ByteString-\u003eEither String Frame",
        "package": "stompl",
        "partial": "At Once",
        "signature": "ByteString-\u003eEither String Frame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Parser.html#v:stompParser",
      "description": {
        "fct-descr": "\u003cp\u003eThe Stomp Parser\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Stompl.Parser",
        "fct-package": "stompl",
        "fct-signature": "Parser Frame",
        "fct-source": "src/Network-Mom-Stompl-Parser.html#stompParser",
        "fct-type": "function",
        "title": "stompParser"
      },
      "index": {
        "description": "The Stomp Parser",
        "hierarchy": "Network Mom Stompl Parser",
        "module": "Network.Mom.Stompl.Parser",
        "name": "stompParser",
        "normalized": "",
        "package": "stompl",
        "partial": "Parser",
        "signature": ""
      }
    }
  }
]