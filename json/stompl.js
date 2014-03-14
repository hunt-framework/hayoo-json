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
        "word": "stompl"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStomp Frames and some useful operations on them\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Frame",
          "package": "stompl",
          "source": "src/Network-Mom-Stompl-Frame.html",
          "type": "module"
        },
        "index": {
          "description": "Stomp Frames and some useful operations on them",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Frame",
          "package": "stompl",
          "partial": "Frame",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Mom.Stompl.Frame",
          "name": "AckMode",
          "package": "stompl",
          "source": "src/Network-Mom-Stompl-Frame.html#AckMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "AckMode",
          "package": "stompl",
          "partial": "Ack Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#t:AckMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Frame body is represented as \u003cem\u003estrict\u003c/em\u003e \u003ccode\u003eByteString\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Body",
          "package": "stompl",
          "source": "src/Network-Mom-Stompl-Frame.html#Body",
          "type": "type"
        },
        "index": {
          "description": "The Frame body is represented as strict ByteString",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Body",
          "package": "stompl",
          "partial": "Body",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#t:Body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a frame\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Frame",
          "package": "stompl",
          "source": "src/Network-Mom-Stompl-Frame.html#Frame",
          "type": "data"
        },
        "index": {
          "description": "This is frame",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Frame",
          "package": "stompl",
          "partial": "Frame",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#t:Frame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe frame type identifies, what the Stomp protocol calls \u003cem\u003ecommand\u003c/em\u003e;\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e commands sent from application to broker are:\n     Connect, Disconnect, Subscribe, Unsubscribe, Send, \n     Begin, Commit, Abort, Ack, Nack, HeartBeat\n\u003c/li\u003e\u003cli\u003e commands sent from broker to application are:\n     Connected, Message, Error, HeartBeat\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "FrameType",
          "package": "stompl",
          "source": "src/Network-Mom-Stompl-Frame.html#FrameType",
          "type": "data"
        },
        "index": {
          "description": "The frame type identifies what the Stomp protocol calls command commands sent from application to broker are Connect Disconnect Subscribe Unsubscribe Send Begin Commit Abort Ack Nack HeartBeat commands sent from broker to application are Connected Message Error HeartBeat",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "FrameType",
          "package": "stompl",
          "partial": "Frame Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#t:FrameType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTuple of (key, value)\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Header",
          "package": "stompl",
          "source": "src/Network-Mom-Stompl-Frame.html#Header",
          "type": "type"
        },
        "index": {
          "description": "Tuple of key value",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Header",
          "package": "stompl",
          "partial": "Header",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#t:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeart-beat configuration;\n   the first \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e of the pair represents the frequency \n   in which the sender wants to send heart-beats; \n   the second represents the highest frequency\n   in which the sender can accept heart-beats.\n   The frequency is expressed as \n   the period in milliseconds between two heart-beats.\n   For details on negotiating heart-beats, \n   please refer to the Stomp specification.\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Heart",
          "package": "stompl",
          "source": "src/Network-Mom-Stompl-Frame.html#Heart",
          "type": "type"
        },
        "index": {
          "description": "Heart-beat configuration the first Int of the pair represents the frequency in which the sender wants to send heart-beats the second represents the highest frequency in which the sender can accept heart-beats The frequency is expressed as the period in milliseconds between two heart-beats For details on negotiating heart-beats please refer to the Stomp specification",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Heart",
          "package": "stompl",
          "partial": "Heart",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#t:Heart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescription of a server consisting of\n   name, version and comments\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "SrvDesc",
          "package": "stompl",
          "source": "src/Network-Mom-Stompl-Frame.html#SrvDesc",
          "type": "type"
        },
        "index": {
          "description": "Description of server consisting of name version and comments",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "SrvDesc",
          "package": "stompl",
          "partial": "Srv Desc",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#t:SrvDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Stomp version used or accepted by the sender;\n   the first \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e is the major version number,\n   the second is the minor.\n   For details on version negotiation, please refer to \n   the Stomp specification.\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Version",
          "package": "stompl",
          "source": "src/Network-Mom-Stompl-Frame.html#Version",
          "type": "type"
        },
        "index": {
          "description": "The Stomp version used or accepted by the sender the first Int is the major version number the second is the minor For details on version negotiation please refer to the Stomp specification",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Version",
          "package": "stompl",
          "partial": "Version",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#t:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esnoc\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "(|\u003e)",
          "package": "stompl",
          "signature": "ByteString -\u003e Char -\u003e ByteString",
          "source": "src/Network-Mom-Stompl-Frame.html#%7C%3E",
          "type": "function"
        },
        "index": {
          "description": "snoc",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "(|\u003e) |\u003e",
          "normalized": "ByteString-\u003eChar-\u003eByteString",
          "package": "stompl",
          "signature": "ByteString-\u003eChar-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:-124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econs\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "(\u003c|)",
          "package": "stompl",
          "signature": "Char -\u003e ByteString -\u003e ByteString",
          "source": "src/Network-Mom-Stompl-Frame.html#%3C%7C",
          "type": "function"
        },
        "index": {
          "description": "cons",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "(\u003c|) \u003c|",
          "normalized": "Char-\u003eByteString-\u003eByteString",
          "package": "stompl",
          "signature": "Char-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:-60--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eappend\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "(\u003e|\u003c)",
          "package": "stompl",
          "signature": "ByteString -\u003e ByteString -\u003e ByteString",
          "source": "src/Network-Mom-Stompl-Frame.html#%3E%7C%3C",
          "type": "function"
        },
        "index": {
          "description": "append",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "(\u003e|\u003c) \u003e|\u003c",
          "normalized": "ByteString-\u003eByteString-\u003eByteString",
          "package": "stompl",
          "signature": "ByteString-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:-62--124--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSent by the application to abort a transaction\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Abort",
          "package": "stompl",
          "signature": "Abort",
          "source": "src/Network-Mom-Stompl-Frame.html#FrameType",
          "type": "function"
        },
        "index": {
          "description": "Sent by the application to abort transaction",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Abort",
          "package": "stompl",
          "partial": "Abort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Abort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSent by the application to acknowledge a message\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Ack",
          "package": "stompl",
          "signature": "Ack",
          "source": "src/Network-Mom-Stompl-Frame.html#FrameType",
          "type": "function"
        },
        "index": {
          "description": "Sent by the application to acknowledge message",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Ack",
          "package": "stompl",
          "partial": "Ack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Ack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA successfully sent message is automatically considered ack'd\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Auto",
          "package": "stompl",
          "signature": "Auto",
          "source": "src/Network-Mom-Stompl-Frame.html#AckMode",
          "type": "function"
        },
        "index": {
          "description": "successfully sent message is automatically considered ack",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Auto",
          "package": "stompl",
          "partial": "Auto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Auto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSent by the application to start a transaction\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Begin",
          "package": "stompl",
          "signature": "Begin",
          "source": "src/Network-Mom-Stompl-Frame.html#FrameType",
          "type": "function"
        },
        "index": {
          "description": "Sent by the application to start transaction",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Begin",
          "package": "stompl",
          "partial": "Begin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Begin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe client is expected to explicitly confirm the receipt\n   of a message by sending an \u003ccode\u003e\u003ca\u003eAck\u003c/a\u003e\u003c/code\u003e frame;\n   all message older than the ack'd message\n   since the last \u003ccode\u003e\u003ca\u003eAck\u003c/a\u003e\u003c/code\u003e (or the beginning of the session)\n   are implicitly ack'd as well.\n   This is called \u003cem\u003ecumulative\u003c/em\u003e ack.\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Client",
          "package": "stompl",
          "signature": "Client",
          "source": "src/Network-Mom-Stompl-Frame.html#AckMode",
          "type": "function"
        },
        "index": {
          "description": "The client is expected to explicitly confirm the receipt of message by sending an Ack frame all message older than the ack message since the last Ack or the beginning of the session are implicitly ack as well This is called cumulative ack",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Client",
          "package": "stompl",
          "partial": "Client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Client"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-cumulative ack:\n   The client is expected to explicitly confirm the receipt\n   of a message by sending an \u003ccode\u003e\u003ca\u003eAck\u003c/a\u003e\u003c/code\u003e frame;\n   only the message with the msg-id in the \u003ccode\u003e\u003ca\u003eAck\u003c/a\u003e\u003c/code\u003e frame\n   is actually ack'd\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "ClientIndi",
          "package": "stompl",
          "signature": "ClientIndi",
          "source": "src/Network-Mom-Stompl-Frame.html#AckMode",
          "type": "function"
        },
        "index": {
          "description": "Non-cumulative ack The client is expected to explicitly confirm the receipt of message by sending an Ack frame only the message with the msg-id in the Ack frame is actually ack",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "ClientIndi",
          "package": "stompl",
          "partial": "Client Indi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:ClientIndi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSent by the application to commit a transaction\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Commit",
          "package": "stompl",
          "signature": "Commit",
          "source": "src/Network-Mom-Stompl-Frame.html#FrameType",
          "type": "function"
        },
        "index": {
          "description": "Sent by the application to commit transaction",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Commit",
          "package": "stompl",
          "partial": "Commit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Commit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSent by the application to initiate a connection\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Connect",
          "package": "stompl",
          "signature": "Connect",
          "source": "src/Network-Mom-Stompl-Frame.html#FrameType",
          "type": "function"
        },
        "index": {
          "description": "Sent by the application to initiate connection",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Connect",
          "package": "stompl",
          "partial": "Connect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSent by the broker to confirm the connection\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Connected",
          "package": "stompl",
          "signature": "Connected",
          "source": "src/Network-Mom-Stompl-Frame.html#FrameType",
          "type": "function"
        },
        "index": {
          "description": "Sent by the broker to confirm the connection",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Connected",
          "package": "stompl",
          "partial": "Connected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Connected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSent by the application to end the connection\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Disconnect",
          "package": "stompl",
          "signature": "Disconnect",
          "source": "src/Network-Mom-Stompl-Frame.html#FrameType",
          "type": "function"
        },
        "index": {
          "description": "Sent by the application to end the connection",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Disconnect",
          "package": "stompl",
          "partial": "Disconnect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Disconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSent by the broker to report an error\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Error",
          "package": "stompl",
          "signature": "Error",
          "source": "src/Network-Mom-Stompl-Frame.html#FrameType",
          "type": "function"
        },
        "index": {
          "description": "Sent by the broker to report an error",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Error",
          "package": "stompl",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeep-alive message sent by both, application and broker\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "HeartBeat",
          "package": "stompl",
          "signature": "HeartBeat",
          "source": "src/Network-Mom-Stompl-Frame.html#FrameType",
          "type": "function"
        },
        "index": {
          "description": "Keep-alive message sent by both application and broker",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "HeartBeat",
          "package": "stompl",
          "partial": "Heart Beat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:HeartBeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSent by the broker to forward a message\n   published in a queue to which\n   the application has subscribed\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Message",
          "package": "stompl",
          "signature": "Message",
          "source": "src/Network-Mom-Stompl-Frame.html#FrameType",
          "type": "function"
        },
        "index": {
          "description": "Sent by the broker to forward message published in queue to which the application has subscribed",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Message",
          "package": "stompl",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSent by the application to negatively acknowledge a message\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Nack",
          "package": "stompl",
          "signature": "Nack",
          "source": "src/Network-Mom-Stompl-Frame.html#FrameType",
          "type": "function"
        },
        "index": {
          "description": "Sent by the application to negatively acknowledge message",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Nack",
          "package": "stompl",
          "partial": "Nack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Nack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSent by the broker to confirm the receipt of a frame\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Receipt",
          "package": "stompl",
          "signature": "Receipt",
          "source": "src/Network-Mom-Stompl-Frame.html#FrameType",
          "type": "function"
        },
        "index": {
          "description": "Sent by the broker to confirm the receipt of frame",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Receipt",
          "package": "stompl",
          "partial": "Receipt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Receipt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSent by the application to publish a message in a queue\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Send",
          "package": "stompl",
          "signature": "Send",
          "source": "src/Network-Mom-Stompl-Frame.html#FrameType",
          "type": "function"
        },
        "index": {
          "description": "Sent by the application to publish message in queue",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Send",
          "package": "stompl",
          "partial": "Send",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as Connect, but with \u003ca\u003eSTOMP\u003c/a\u003e instead of \u003ca\u003eCONNECT\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Stomp",
          "package": "stompl",
          "signature": "Stomp",
          "source": "src/Network-Mom-Stompl-Frame.html#FrameType",
          "type": "function"
        },
        "index": {
          "description": "Same as Connect but with STOMP instead of CONNECT",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Stomp",
          "package": "stompl",
          "partial": "Stomp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Stomp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSent by the application to subscribe to a queue\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Subscribe",
          "package": "stompl",
          "signature": "Subscribe",
          "source": "src/Network-Mom-Stompl-Frame.html#FrameType",
          "type": "function"
        },
        "index": {
          "description": "Sent by the application to subscribe to queue",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Subscribe",
          "package": "stompl",
          "partial": "Subscribe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Subscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSent by the application to unsubscribe from a queue\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Unsubscribe",
          "package": "stompl",
          "signature": "Unsubscribe",
          "source": "src/Network-Mom-Stompl-Frame.html#FrameType",
          "type": "function"
        },
        "index": {
          "description": "Sent by the application to unsubscribe from queue",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "Unsubscribe",
          "package": "stompl",
          "partial": "Unsubscribe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:Unsubscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert \u003ccode\u003e\u003ca\u003eAckMode\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "ackToVal",
          "package": "stompl",
          "signature": "AckMode -\u003e String",
          "source": "src/Network-Mom-Stompl-Frame.html#ackToVal",
          "type": "function"
        },
        "index": {
          "description": "convert AckMode to String",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "ackToVal",
          "normalized": "AckMode-\u003eString",
          "package": "stompl",
          "partial": "To Val",
          "signature": "AckMode-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:ackToVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert \u003ccode\u003e\u003ca\u003eHeartBeat\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "beatToVal",
          "package": "stompl",
          "signature": "Heart -\u003e String",
          "source": "src/Network-Mom-Stompl-Frame.html#beatToVal",
          "type": "function"
        },
        "index": {
          "description": "convert HeartBeat to String",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "beatToVal",
          "normalized": "Heart-\u003eString",
          "package": "stompl",
          "partial": "To Val",
          "signature": "Heart-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:beatToVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompliance with protocol version\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "complies",
          "package": "stompl",
          "signature": "Version -\u003e Frame -\u003e Bool",
          "source": "src/Network-Mom-Stompl-Frame.html#complies",
          "type": "function"
        },
        "index": {
          "description": "Compliance with protocol version",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "complies",
          "normalized": "Version-\u003eFrame-\u003eBool",
          "package": "stompl",
          "signature": "Version-\u003eFrame-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:complies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econverts a \u003ccode\u003e\u003ca\u003eConnect\u003c/a\u003e\u003c/code\u003e frame into a \u003ccode\u003e\u003ca\u003eConnected\u003c/a\u003e\u003c/code\u003e frame,\n   negotiating heart-beats and version;\n   parameters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e server desc\n\u003c/li\u003e\u003cli\u003e session id\n\u003c/li\u003e\u003cli\u003e caller's bid for heart-beat \n\u003c/li\u003e\u003cli\u003e caller's supported versions\n\u003c/li\u003e\u003cli\u003e the original \u003ccode\u003e\u003ca\u003eConnect\u003c/a\u003e\u003c/code\u003e frame\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "conToCond",
          "package": "stompl",
          "signature": "String -\u003e String -\u003e Heart -\u003e [Version] -\u003e Frame -\u003e Maybe Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#conToCond",
          "type": "function"
        },
        "index": {
          "description": "converts Connect frame into Connected frame negotiating heart-beats and version parameters server desc session id caller bid for heart-beat caller supported versions the original Connect frame",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "conToCond",
          "normalized": "String-\u003eString-\u003eHeart-\u003e[Version]-\u003eFrame-\u003eMaybe Frame",
          "package": "stompl",
          "partial": "To Cond",
          "signature": "String-\u003eString-\u003eHeart-\u003e[Version]-\u003eFrame-\u003eMaybe Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:conToCond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Mom.Stompl.Frame",
          "name": "getAck",
          "package": "stompl",
          "signature": "[Header] -\u003e Either String AckMode",
          "source": "src/Network-Mom-Stompl-Frame.html#getAck",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getAck",
          "normalized": "[Header]-\u003eEither String AckMode",
          "package": "stompl",
          "partial": "Ack",
          "signature": "[Header]-\u003eEither String AckMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getAck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget \u003cem\u003eack\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eSubscribe\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getAcknow",
          "package": "stompl",
          "signature": "Frame -\u003e AckMode",
          "source": "src/Network-Mom-Stompl-Frame.html#getAcknow",
          "type": "function"
        },
        "index": {
          "description": "get ack from Subscribe",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getAcknow",
          "normalized": "Frame-\u003eAckMode",
          "package": "stompl",
          "partial": "Acknow",
          "signature": "Frame-\u003eAckMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getAcknow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget \u003cem\u003eheart-beat\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eConnect\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eConnected\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getBeat",
          "package": "stompl",
          "signature": "Frame -\u003e Heart",
          "source": "src/Network-Mom-Stompl-Frame.html#getBeat",
          "type": "function"
        },
        "index": {
          "description": "get heart-beat from Connect or Connected",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getBeat",
          "normalized": "Frame-\u003eHeart",
          "package": "stompl",
          "partial": "Beat",
          "signature": "Frame-\u003eHeart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getBeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget \u003cem\u003ebody\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eSend\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getBody",
          "package": "stompl",
          "signature": "Frame -\u003e ByteString",
          "source": "src/Network-Mom-Stompl-Frame.html#getBody",
          "type": "function"
        },
        "index": {
          "description": "get body from Send Message Error",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getBody",
          "normalized": "Frame-\u003eByteString",
          "package": "stompl",
          "partial": "Body",
          "signature": "Frame-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget \u003cem\u003eclient-id\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eConnect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getCliId",
          "package": "stompl",
          "signature": "Frame -\u003e String",
          "source": "src/Network-Mom-Stompl-Frame.html#getCliId",
          "type": "function"
        },
        "index": {
          "description": "get client-id from Connect",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getCliId",
          "normalized": "Frame-\u003eString",
          "package": "stompl",
          "partial": "Cli Id",
          "signature": "Frame-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getCliId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget \u003cem\u003edestination\u003c/em\u003e \n   from \u003ccode\u003e\u003ca\u003eSubscribe\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eUnsubscribe\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eSend\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getDest",
          "package": "stompl",
          "signature": "Frame -\u003e String",
          "source": "src/Network-Mom-Stompl-Frame.html#getDest",
          "type": "function"
        },
        "index": {
          "description": "get destination from Subscribe Unsubscribe Send or Message",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getDest",
          "normalized": "Frame-\u003eString",
          "package": "stompl",
          "partial": "Dest",
          "signature": "Frame-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getDest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget all additional headers from \u003ccode\u003e\u003ca\u003eSend\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getHeaders",
          "package": "stompl",
          "signature": "Frame -\u003e [Header]",
          "source": "src/Network-Mom-Stompl-Frame.html#getHeaders",
          "type": "function"
        },
        "index": {
          "description": "get all additional headers from Send or Message",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getHeaders",
          "normalized": "Frame-\u003e[Header]",
          "package": "stompl",
          "partial": "Headers",
          "signature": "Frame-\u003e[Header]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget \u003cem\u003ehost\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eConnect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getHost",
          "package": "stompl",
          "signature": "Frame -\u003e String",
          "source": "src/Network-Mom-Stompl-Frame.html#getHost",
          "type": "function"
        },
        "index": {
          "description": "get host from Connect",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getHost",
          "normalized": "Frame-\u003eString",
          "package": "stompl",
          "partial": "Host",
          "signature": "Frame-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget \u003cem\u003eid\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eSubscribe\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eUnsubscribe\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getId",
          "package": "stompl",
          "signature": "Frame -\u003e String",
          "source": "src/Network-Mom-Stompl-Frame.html#getId",
          "type": "function"
        },
        "index": {
          "description": "get id from Subscribe or Unsubscribe",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getId",
          "normalized": "Frame-\u003eString",
          "package": "stompl",
          "partial": "Id",
          "signature": "Frame-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Mom.Stompl.Frame",
          "name": "getLen",
          "package": "stompl",
          "signature": "[Header] -\u003e Either String Int",
          "source": "src/Network-Mom-Stompl-Frame.html#getLen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getLen",
          "normalized": "[Header]-\u003eEither String Int",
          "package": "stompl",
          "partial": "Len",
          "signature": "[Header]-\u003eEither String Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget \u003cem\u003econtent-length\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eSend\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getLength",
          "package": "stompl",
          "signature": "Frame -\u003e Int",
          "source": "src/Network-Mom-Stompl-Frame.html#getLength",
          "type": "function"
        },
        "index": {
          "description": "get content-length from Send Message Error",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getLength",
          "normalized": "Frame-\u003eInt",
          "package": "stompl",
          "partial": "Length",
          "signature": "Frame-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget \u003cem\u003elogin\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eConnect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getLogin",
          "package": "stompl",
          "signature": "Frame -\u003e String",
          "source": "src/Network-Mom-Stompl-Frame.html#getLogin",
          "type": "function"
        },
        "index": {
          "description": "get login from Connect",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getLogin",
          "normalized": "Frame-\u003eString",
          "package": "stompl",
          "partial": "Login",
          "signature": "Frame-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getLogin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget \u003cem\u003econtent-type\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eSend\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getMime",
          "package": "stompl",
          "signature": "Frame -\u003e Type",
          "source": "src/Network-Mom-Stompl-Frame.html#getMime",
          "type": "function"
        },
        "index": {
          "description": "get content-type from Send Message Error",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getMime",
          "normalized": "Frame-\u003eType",
          "package": "stompl",
          "partial": "Mime",
          "signature": "Frame-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getMime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget \u003cem\u003emessage\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getMsg",
          "package": "stompl",
          "signature": "Frame -\u003e String",
          "source": "src/Network-Mom-Stompl-Frame.html#getMsg",
          "type": "function"
        },
        "index": {
          "description": "get message from Error",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getMsg",
          "normalized": "Frame-\u003eString",
          "package": "stompl",
          "partial": "Msg",
          "signature": "Frame-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget \u003cem\u003eack\u003c/em\u003e or \u003cem\u003emessage-id\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getMsgAck",
          "package": "stompl",
          "signature": "Frame -\u003e String",
          "source": "src/Network-Mom-Stompl-Frame.html#getMsgAck",
          "type": "function"
        },
        "index": {
          "description": "get ack or message-id from Message",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getMsgAck",
          "normalized": "Frame-\u003eString",
          "package": "stompl",
          "partial": "Msg Ack",
          "signature": "Frame-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getMsgAck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget \u003cem\u003epasscode\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eConnect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getPasscode",
          "package": "stompl",
          "signature": "Frame -\u003e String",
          "source": "src/Network-Mom-Stompl-Frame.html#getPasscode",
          "type": "function"
        },
        "index": {
          "description": "get passcode from Connect",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getPasscode",
          "normalized": "Frame-\u003eString",
          "package": "stompl",
          "partial": "Passcode",
          "signature": "Frame-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getPasscode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget \u003cem\u003ereceipt\u003c/em\u003e or \u003cem\u003ereceipt-id\u003c/em\u003e from any frame, but\n   \u003ccode\u003e\u003ca\u003eConnect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eConnected\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getReceipt",
          "package": "stompl",
          "signature": "Frame -\u003e String",
          "source": "src/Network-Mom-Stompl-Frame.html#getReceipt",
          "type": "function"
        },
        "index": {
          "description": "get receipt or receipt-id from any frame but Connect Connected Message Error",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getReceipt",
          "normalized": "Frame-\u003eString",
          "package": "stompl",
          "partial": "Receipt",
          "signature": "Frame-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getReceipt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget \u003cem\u003eselector\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eSubscribe\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getSelector",
          "package": "stompl",
          "signature": "Frame -\u003e String",
          "source": "src/Network-Mom-Stompl-Frame.html#getSelector",
          "type": "function"
        },
        "index": {
          "description": "get selector from Subscribe",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getSelector",
          "normalized": "Frame-\u003eString",
          "package": "stompl",
          "partial": "Selector",
          "signature": "Frame-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget \u003cem\u003eserver\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eConnected\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getServer",
          "package": "stompl",
          "signature": "Frame -\u003e SrvDesc",
          "source": "src/Network-Mom-Stompl-Frame.html#getServer",
          "type": "function"
        },
        "index": {
          "description": "get server from Connected",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getServer",
          "normalized": "Frame-\u003eSrvDesc",
          "package": "stompl",
          "partial": "Server",
          "signature": "Frame-\u003eSrvDesc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget \u003cem\u003esession\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eConnected\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getSession",
          "package": "stompl",
          "signature": "Frame -\u003e String",
          "source": "src/Network-Mom-Stompl-Frame.html#getSession",
          "type": "function"
        },
        "index": {
          "description": "get session from Connected",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getSession",
          "normalized": "Frame-\u003eString",
          "package": "stompl",
          "partial": "Session",
          "signature": "Frame-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget comments from \u003ccode\u003e\u003ca\u003eSrvDesc\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getSrvCmts",
          "package": "stompl",
          "signature": "SrvDesc -\u003e String",
          "source": "src/Network-Mom-Stompl-Frame.html#getSrvCmts",
          "type": "function"
        },
        "index": {
          "description": "get comments from SrvDesc",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getSrvCmts",
          "normalized": "SrvDesc-\u003eString",
          "package": "stompl",
          "partial": "Srv Cmts",
          "signature": "SrvDesc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getSrvCmts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget name from \u003ccode\u003e\u003ca\u003eSrvDesc\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getSrvName",
          "package": "stompl",
          "signature": "SrvDesc -\u003e String",
          "source": "src/Network-Mom-Stompl-Frame.html#getSrvName",
          "type": "function"
        },
        "index": {
          "description": "get name from SrvDesc",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getSrvName",
          "normalized": "SrvDesc-\u003eString",
          "package": "stompl",
          "partial": "Srv Name",
          "signature": "SrvDesc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getSrvName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget version from \u003ccode\u003e\u003ca\u003eSrvDesc\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getSrvVer",
          "package": "stompl",
          "signature": "SrvDesc -\u003e String",
          "source": "src/Network-Mom-Stompl-Frame.html#getSrvVer",
          "type": "function"
        },
        "index": {
          "description": "get version from SrvDesc",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getSrvVer",
          "normalized": "SrvDesc-\u003eString",
          "package": "stompl",
          "partial": "Srv Ver",
          "signature": "SrvDesc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getSrvVer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget \u003cem\u003esubscription\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eAck\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eNack\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getSub",
          "package": "stompl",
          "signature": "Frame -\u003e String",
          "source": "src/Network-Mom-Stompl-Frame.html#getSub",
          "type": "function"
        },
        "index": {
          "description": "get subscription from Ack Nack or Message",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getSub",
          "normalized": "Frame-\u003eString",
          "package": "stompl",
          "partial": "Sub",
          "signature": "Frame-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget \u003cem\u003etransaction\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eSend\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eAck\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eNack\u003c/a\u003e\u003c/code\u003e, \n                          \u003ccode\u003e\u003ca\u003eBegin\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eCommit\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eAbort\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getTrans",
          "package": "stompl",
          "signature": "Frame -\u003e String",
          "source": "src/Network-Mom-Stompl-Frame.html#getTrans",
          "type": "function"
        },
        "index": {
          "description": "get transaction from Send Ack Nack Begin Commit or Abort",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getTrans",
          "normalized": "Frame-\u003eString",
          "package": "stompl",
          "partial": "Trans",
          "signature": "Frame-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget \u003cem\u003eversion\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eConnected\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getVersion",
          "package": "stompl",
          "signature": "Frame -\u003e Version",
          "source": "src/Network-Mom-Stompl-Frame.html#getVersion",
          "type": "function"
        },
        "index": {
          "description": "get version from Connected",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getVersion",
          "normalized": "Frame-\u003eVersion",
          "package": "stompl",
          "partial": "Version",
          "signature": "Frame-\u003eVersion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget \u003cem\u003eaccept-version\u003c/em\u003e from \u003ccode\u003e\u003ca\u003eConnect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getVersions",
          "package": "stompl",
          "signature": "Frame -\u003e [Version]",
          "source": "src/Network-Mom-Stompl-Frame.html#getVersions",
          "type": "function"
        },
        "index": {
          "description": "get accept-version from Connect",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "getVersions",
          "normalized": "Frame-\u003e[Version]",
          "package": "stompl",
          "partial": "Versions",
          "signature": "Frame-\u003e[Version]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:getVersions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echeck if \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e represents a valid \u003ccode\u003e\u003ca\u003eAckMode\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "isValidAck",
          "package": "stompl",
          "signature": "String -\u003e Bool",
          "source": "src/Network-Mom-Stompl-Frame.html#isValidAck",
          "type": "function"
        },
        "index": {
          "description": "check if String represents valid AckMode",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "isValidAck",
          "normalized": "String-\u003eBool",
          "package": "stompl",
          "partial": "Valid Ack",
          "signature": "String-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:isValidAck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake an \u003ccode\u003e\u003ca\u003eAbort\u003c/a\u003e\u003c/code\u003e frame (Application -\u003e Broker).\n   The parameters are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Transaction: A unique transaction identifier\n                  defined by the application. \n\u003c/li\u003e\u003cli\u003e Receipt: A receipt (see \u003ccode\u003e\u003ca\u003emkSubscribe\u003c/a\u003e\u003c/code\u003e for details)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e: Additional, broker-specific headers\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkAbort",
          "package": "stompl",
          "signature": "String -\u003e String -\u003e [Header] -\u003e Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkAbort",
          "type": "function"
        },
        "index": {
          "description": "make an Abort frame Application Broker The parameters are Transaction unique transaction identifier defined by the application Receipt receipt see mkSubscribe for details Header Additional broker-specific headers",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkAbort",
          "normalized": "String-\u003eString-\u003e[Header]-\u003eFrame",
          "package": "stompl",
          "partial": "Abort",
          "signature": "String-\u003eString-\u003e[Header]-\u003eFrame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkAbort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eAbort\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkAbrtFrame",
          "package": "stompl",
          "signature": "[Header] -\u003e Either String Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkAbrtFrame",
          "type": "function"
        },
        "index": {
          "description": "make Abort frame",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkAbrtFrame",
          "normalized": "[Header]-\u003eEither String Frame",
          "package": "stompl",
          "partial": "Abrt Frame",
          "signature": "[Header]-\u003eEither String Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkAbrtFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003cem\u003eaccept-version\u003c/em\u003e header (connect frame)\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkAcVerHdr",
          "package": "stompl",
          "signature": "String -\u003e Header",
          "source": "src/Network-Mom-Stompl-Frame.html#mkAcVerHdr",
          "type": "function"
        },
        "index": {
          "description": "make accept-version header connect frame",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkAcVerHdr",
          "normalized": "String-\u003eHeader",
          "package": "stompl",
          "partial": "Ac Ver Hdr",
          "signature": "String-\u003eHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkAcVerHdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake an \u003ccode\u003e\u003ca\u003eAck\u003c/a\u003e\u003c/code\u003e frame (Application -\u003e Broker).\n   The parameters are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Message Id: The identifier of the message to be ack'd\n\u003c/li\u003e\u003cli\u003e Subscription Id: The subscription, through which\n                      the message was received\n\u003c/li\u003e\u003cli\u003e Transaction: Acks may be part of a transaction\n                  (see \u003ccode\u003e\u003ca\u003emkSend\u003c/a\u003e\u003c/code\u003e for details).\n\u003c/li\u003e\u003cli\u003e Receipt: see \u003ccode\u003e\u003ca\u003emkSubscribe\u003c/a\u003e\u003c/code\u003e for details\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkAck",
          "package": "stompl",
          "signature": "String -\u003e String -\u003e String -\u003e String -\u003e [Header] -\u003e Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkAck",
          "type": "function"
        },
        "index": {
          "description": "make an Ack frame Application Broker The parameters are Message Id The identifier of the message to be ack Subscription Id The subscription through which the message was received Transaction Acks may be part of transaction see mkSend for details Receipt see mkSubscribe for details",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkAck",
          "normalized": "String-\u003eString-\u003eString-\u003eString-\u003e[Header]-\u003eFrame",
          "package": "stompl",
          "partial": "Ack",
          "signature": "String-\u003eString-\u003eString-\u003eString-\u003e[Header]-\u003eFrame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkAck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eAck\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkAckFrame",
          "package": "stompl",
          "signature": "[Header] -\u003e Either String Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkAckFrame",
          "type": "function"
        },
        "index": {
          "description": "make Ack frame",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkAckFrame",
          "normalized": "[Header]-\u003eEither String Frame",
          "package": "stompl",
          "partial": "Ack Frame",
          "signature": "[Header]-\u003eEither String Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkAckFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003cem\u003eack\u003c/em\u003e header (subscribe frame)\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkAckHdr",
          "package": "stompl",
          "signature": "String -\u003e Header",
          "source": "src/Network-Mom-Stompl-Frame.html#mkAckHdr",
          "type": "function"
        },
        "index": {
          "description": "make ack header subscribe frame",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkAckHdr",
          "normalized": "String-\u003eHeader",
          "package": "stompl",
          "partial": "Ack Hdr",
          "signature": "String-\u003eHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkAckHdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake a \u003ccode\u003eHeatBeat\u003c/code\u003e frame (Application -\u003e Broker and\n                            Broker      -\u003e Application)\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkBeat",
          "package": "stompl",
          "signature": "Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkBeat",
          "type": "function"
        },
        "index": {
          "description": "make HeatBeat frame Application Broker and Broker Application",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkBeat",
          "package": "stompl",
          "partial": "Beat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkBeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003cem\u003eheart-beat\u003c/em\u003e header\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkBeatHdr",
          "package": "stompl",
          "signature": "String -\u003e Header",
          "source": "src/Network-Mom-Stompl-Frame.html#mkBeatHdr",
          "type": "function"
        },
        "index": {
          "description": "make heart-beat header",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkBeatHdr",
          "normalized": "String-\u003eHeader",
          "package": "stompl",
          "partial": "Beat Hdr",
          "signature": "String-\u003eHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkBeatHdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake a \u003ccode\u003e\u003ca\u003eBegin\u003c/a\u003e\u003c/code\u003e frame (Application -\u003e Broker).\n   The parameters are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Transaction: A unique transaction identifier\n                  defined by the application. \n\u003c/li\u003e\u003cli\u003e Receipt: A receipt (see \u003ccode\u003e\u003ca\u003emkSubscribe\u003c/a\u003e\u003c/code\u003e for details)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e: Additional, broker-specific headers\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkBegin",
          "package": "stompl",
          "signature": "String -\u003e String -\u003e [Header] -\u003e Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkBegin",
          "type": "function"
        },
        "index": {
          "description": "make Begin frame Application Broker The parameters are Transaction unique transaction identifier defined by the application Receipt receipt see mkSubscribe for details Header Additional broker-specific headers",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkBegin",
          "normalized": "String-\u003eString-\u003e[Header]-\u003eFrame",
          "package": "stompl",
          "partial": "Begin",
          "signature": "String-\u003eString-\u003e[Header]-\u003eFrame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkBegin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eBegin\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkBgnFrame",
          "package": "stompl",
          "signature": "[Header] -\u003e Either String Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkBgnFrame",
          "type": "function"
        },
        "index": {
          "description": "make Begin frame",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkBgnFrame",
          "normalized": "[Header]-\u003eEither String Frame",
          "package": "stompl",
          "partial": "Bgn Frame",
          "signature": "[Header]-\u003eEither String Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkBgnFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003cem\u003eclient-id\u003c/em\u003e header\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkCliIdHdr",
          "package": "stompl",
          "signature": "String -\u003e Header",
          "source": "src/Network-Mom-Stompl-Frame.html#mkCliIdHdr",
          "type": "function"
        },
        "index": {
          "description": "make client-id header",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkCliIdHdr",
          "normalized": "String-\u003eHeader",
          "package": "stompl",
          "partial": "Cli Id Hdr",
          "signature": "String-\u003eHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkCliIdHdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eCommit\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkCmtFrame",
          "package": "stompl",
          "signature": "[Header] -\u003e Either String Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkCmtFrame",
          "type": "function"
        },
        "index": {
          "description": "make Commit frame",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkCmtFrame",
          "normalized": "[Header]-\u003eEither String Frame",
          "package": "stompl",
          "partial": "Cmt Frame",
          "signature": "[Header]-\u003eEither String Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkCmtFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake a \u003ccode\u003e\u003ca\u003eCommit\u003c/a\u003e\u003c/code\u003e frame (Application -\u003e Broker).\n   The parameters are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eTransaction\u003c/code\u003e: A unique transaction identifier\n                  defined by the application. \n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eReceipt\u003c/a\u003e\u003c/code\u003e: A receipt (see \u003ccode\u003e\u003ca\u003emkSubscribe\u003c/a\u003e\u003c/code\u003e for details)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e: Additional, broker-specific headers\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkCommit",
          "package": "stompl",
          "signature": "String -\u003e String -\u003e [Header] -\u003e Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkCommit",
          "type": "function"
        },
        "index": {
          "description": "make Commit frame Application Broker The parameters are Transaction unique transaction identifier defined by the application Receipt receipt see mkSubscribe for details Header Additional broker-specific headers",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkCommit",
          "normalized": "String-\u003eString-\u003e[Header]-\u003eFrame",
          "package": "stompl",
          "partial": "Commit",
          "signature": "String-\u003eString-\u003e[Header]-\u003eFrame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eConnect\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkConFrame",
          "package": "stompl",
          "signature": "[Header] -\u003e Either String Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkConFrame",
          "type": "function"
        },
        "index": {
          "description": "make Connect frame",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkConFrame",
          "normalized": "[Header]-\u003eEither String Frame",
          "package": "stompl",
          "partial": "Con Frame",
          "signature": "[Header]-\u003eEither String Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkConFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eConnected\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkCondFrame",
          "package": "stompl",
          "signature": "[Header] -\u003e Either String Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkCondFrame",
          "type": "function"
        },
        "index": {
          "description": "make Connected frame",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkCondFrame",
          "normalized": "[Header]-\u003eEither String Frame",
          "package": "stompl",
          "partial": "Cond Frame",
          "signature": "[Header]-\u003eEither String Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkCondFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake a \u003ccode\u003e\u003ca\u003eConnect\u003c/a\u003e\u003c/code\u003e frame (Application -\u003e Broker).\n   The parameters are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e User: user to authenticate at the broker.\n\u003c/li\u003e\u003cli\u003e Passcode: password to authenticate at the broker.\n\u003c/li\u003e\u003cli\u003e Host: broker's virtual hoast (\u003cem\u003ee.g.\u003c/em\u003e \n           stomp.broker.github.org).\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eHeartBeat\u003c/a\u003e\u003c/code\u003e: the clients bid in negotiating\n                  the heart-beat.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eVersion\u003c/a\u003e\u003c/code\u003e: the versions supported by the client.\n\u003c/li\u003e\u003cli\u003e ClientId: Client identification for persistent connections.\n                 Note that the client id is not a standard Stomp feature,\n                 but specific to ActiveMQ and other brokers.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e: List of additional, broker-specific headers\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkConnect",
          "package": "stompl",
          "signature": "String -\u003e String -\u003e String -\u003e Heart -\u003e [Version] -\u003e String -\u003e [Header] -\u003e Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkConnect",
          "type": "function"
        },
        "index": {
          "description": "make Connect frame Application Broker The parameters are User user to authenticate at the broker Passcode password to authenticate at the broker Host broker virtual hoast e.g stomp.broker.github.org HeartBeat the clients bid in negotiating the heart-beat Version the versions supported by the client ClientId Client identification for persistent connections Note that the client id is not standard Stomp feature but specific to ActiveMQ and other brokers Header List of additional broker-specific headers",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkConnect",
          "normalized": "String-\u003eString-\u003eString-\u003eHeart-\u003e[Version]-\u003eString-\u003e[Header]-\u003eFrame",
          "package": "stompl",
          "partial": "Connect",
          "signature": "String-\u003eString-\u003eString-\u003eHeart-\u003e[Version]-\u003eString-\u003e[Header]-\u003eFrame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkConnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake a \u003ccode\u003e\u003ca\u003eConnect\u003c/a\u003e\u003c/code\u003e frame (Broker -\u003e Application).\n   The parameters are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Session: A unique identifier created by the broker\n              and identifying the session\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eHeartBeat\u003c/a\u003e\u003c/code\u003e: The heart-beat agreed by the broker\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eVersion\u003c/a\u003e\u003c/code\u003e: The version accepted by the broker\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSrvDesc\u003c/a\u003e\u003c/code\u003e: The server description\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e: List of additional, broker-specific headers.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkConnected",
          "package": "stompl",
          "signature": "String -\u003e Heart -\u003e Version -\u003e SrvDesc -\u003e [Header] -\u003e Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkConnected",
          "type": "function"
        },
        "index": {
          "description": "make Connect frame Broker Application The parameters are Session unique identifier created by the broker and identifying the session HeartBeat The heart-beat agreed by the broker Version The version accepted by the broker SrvDesc The server description Header List of additional broker-specific headers",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkConnected",
          "normalized": "String-\u003eHeart-\u003eVersion-\u003eSrvDesc-\u003e[Header]-\u003eFrame",
          "package": "stompl",
          "partial": "Connected",
          "signature": "String-\u003eHeart-\u003eVersion-\u003eSrvDesc-\u003e[Header]-\u003eFrame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkConnected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003cem\u003edestination\u003c/em\u003e header\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkDestHdr",
          "package": "stompl",
          "signature": "String -\u003e Header",
          "source": "src/Network-Mom-Stompl-Frame.html#mkDestHdr",
          "type": "function"
        },
        "index": {
          "description": "make destination header",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkDestHdr",
          "normalized": "String-\u003eHeader",
          "package": "stompl",
          "partial": "Dest Hdr",
          "signature": "String-\u003eHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkDestHdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eDisconnect\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkDisFrame",
          "package": "stompl",
          "signature": "[Header] -\u003e Either String Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkDisFrame",
          "type": "function"
        },
        "index": {
          "description": "make Disconnect frame",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkDisFrame",
          "normalized": "[Header]-\u003eEither String Frame",
          "package": "stompl",
          "partial": "Dis Frame",
          "signature": "[Header]-\u003eEither String Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkDisFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake a \u003ccode\u003e\u003ca\u003eDisconnect\u003c/a\u003e\u003c/code\u003e frame (Application -\u003e Broker).\n   The parameter is:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Receipt: see \u003ccode\u003e\u003ca\u003emkSubscribe\u003c/a\u003e\u003c/code\u003e for details\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkDisconnect",
          "package": "stompl",
          "signature": "String -\u003e [Header] -\u003e Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkDisconnect",
          "type": "function"
        },
        "index": {
          "description": "make Disconnect frame Application Broker The parameter is Receipt see mkSubscribe for details",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkDisconnect",
          "normalized": "String-\u003e[Header]-\u003eFrame",
          "package": "stompl",
          "partial": "Disconnect",
          "signature": "String-\u003e[Header]-\u003eFrame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkDisconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake a \u003ccode\u003e\u003ca\u003eReceipt\u003c/a\u003e\u003c/code\u003e frame (Broker -\u003e Application).\n   The parameters are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Error Message Id: A short error description\n\u003c/li\u003e\u003cli\u003e Receipt Id: The receipt of frame sent by the application\n                 to which this error relates\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e: The format of the error message as MIME Type\n\u003c/li\u003e\u003cli\u003e Length: The length of the error message\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e: List of additional, broker-specific headers\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eBody\u003c/a\u003e\u003c/code\u003e: The error message\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkErr",
          "package": "stompl",
          "signature": "String -\u003e String -\u003e Type -\u003e Int -\u003e [Header] -\u003e Body -\u003e Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkErr",
          "type": "function"
        },
        "index": {
          "description": "make Receipt frame Broker Application The parameters are Error Message Id short error description Receipt Id The receipt of frame sent by the application to which this error relates Type The format of the error message as MIME Type Length The length of the error message Header List of additional broker-specific headers Body The error message",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkErr",
          "normalized": "String-\u003eString-\u003eType-\u003eInt-\u003e[Header]-\u003eBody-\u003eFrame",
          "package": "stompl",
          "partial": "Err",
          "signature": "String-\u003eString-\u003eType-\u003eInt-\u003e[Header]-\u003eBody-\u003eFrame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkErrFrame",
          "package": "stompl",
          "signature": "[Header] -\u003e Int -\u003e Body -\u003e Either String Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkErrFrame",
          "type": "function"
        },
        "index": {
          "description": "make Error frame",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkErrFrame",
          "normalized": "[Header]-\u003eInt-\u003eBody-\u003eEither String Frame",
          "package": "stompl",
          "partial": "Err Frame",
          "signature": "[Header]-\u003eInt-\u003eBody-\u003eEither String Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkErrFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003cem\u003ehost\u003c/em\u003e header (connect frame)\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkHostHdr",
          "package": "stompl",
          "signature": "String -\u003e Header",
          "source": "src/Network-Mom-Stompl-Frame.html#mkHostHdr",
          "type": "function"
        },
        "index": {
          "description": "make host header connect frame",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkHostHdr",
          "normalized": "String-\u003eHeader",
          "package": "stompl",
          "partial": "Host Hdr",
          "signature": "String-\u003eHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkHostHdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003cem\u003eid\u003c/em\u003e header (subscribe frame)\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkIdHdr",
          "package": "stompl",
          "signature": "String -\u003e Header",
          "source": "src/Network-Mom-Stompl-Frame.html#mkIdHdr",
          "type": "function"
        },
        "index": {
          "description": "make id header subscribe frame",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkIdHdr",
          "normalized": "String-\u003eHeader",
          "package": "stompl",
          "partial": "Id Hdr",
          "signature": "String-\u003eHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkIdHdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003cem\u003econtent-length\u003c/em\u003e header\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkLenHdr",
          "package": "stompl",
          "signature": "String -\u003e Header",
          "source": "src/Network-Mom-Stompl-Frame.html#mkLenHdr",
          "type": "function"
        },
        "index": {
          "description": "make content-length header",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkLenHdr",
          "normalized": "String-\u003eHeader",
          "package": "stompl",
          "partial": "Len Hdr",
          "signature": "String-\u003eHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkLenHdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003cem\u003elogin\u003c/em\u003e header\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkLogHdr",
          "package": "stompl",
          "signature": "String -\u003e Header",
          "source": "src/Network-Mom-Stompl-Frame.html#mkLogHdr",
          "type": "function"
        },
        "index": {
          "description": "make login header",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkLogHdr",
          "normalized": "String-\u003eHeader",
          "package": "stompl",
          "partial": "Log Hdr",
          "signature": "String-\u003eHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkLogHdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003cem\u003emessage-id\u003c/em\u003e header\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkMIdHdr",
          "package": "stompl",
          "signature": "String -\u003e Header",
          "source": "src/Network-Mom-Stompl-Frame.html#mkMIdHdr",
          "type": "function"
        },
        "index": {
          "description": "make message-id header",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkMIdHdr",
          "normalized": "String-\u003eHeader",
          "package": "stompl",
          "partial": "MId Hdr",
          "signature": "String-\u003eHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkMIdHdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake a \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e frame (Broker -\u003e Application).\n   The parameters are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Subscription Id: The message was sent\n                      because the application subscribed to the queue\n                      with this subscription id (see \u003ccode\u003e\u003ca\u003emkSubscribe\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e Destination: The name of the queue, in wich the message was published.\n\u003c/li\u003e\u003cli\u003e Message Id: A unique message identifier, defined by the broker\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e: The type of the playload as MIME Type\n\u003c/li\u003e\u003cli\u003e Length: The length of the payload in bytes\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e: A list of user-defined headers (see \u003ccode\u003e\u003ca\u003emkSend\u003c/a\u003e\u003c/code\u003e for details)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eBody\u003c/a\u003e\u003c/code\u003e: The payload\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkMessage",
          "package": "stompl",
          "signature": "String -\u003e String -\u003e String -\u003e String -\u003e Type -\u003e Int -\u003e [Header] -\u003e Body -\u003e Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkMessage",
          "type": "function"
        },
        "index": {
          "description": "make Message frame Broker Application The parameters are Subscription Id The message was sent because the application subscribed to the queue with this subscription id see mkSubscribe Destination The name of the queue in wich the message was published Message Id unique message identifier defined by the broker Type The type of the playload as MIME Type Length The length of the payload in bytes Header list of user-defined headers see mkSend for details Body The payload",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkMessage",
          "normalized": "String-\u003eString-\u003eString-\u003eString-\u003eType-\u003eInt-\u003e[Header]-\u003eBody-\u003eFrame",
          "package": "stompl",
          "partial": "Message",
          "signature": "String-\u003eString-\u003eString-\u003eString-\u003eType-\u003eInt-\u003e[Header]-\u003eBody-\u003eFrame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003cem\u003econtent-type\u003c/em\u003e header\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkMimeHdr",
          "package": "stompl",
          "signature": "String -\u003e Header",
          "source": "src/Network-Mom-Stompl-Frame.html#mkMimeHdr",
          "type": "function"
        },
        "index": {
          "description": "make content-type header",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkMimeHdr",
          "normalized": "String-\u003eHeader",
          "package": "stompl",
          "partial": "Mime Hdr",
          "signature": "String-\u003eHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkMimeHdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkMsgFrame",
          "package": "stompl",
          "signature": "[Header] -\u003e Int -\u003e Body -\u003e Either String Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkMsgFrame",
          "type": "function"
        },
        "index": {
          "description": "make Message frame",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkMsgFrame",
          "normalized": "[Header]-\u003eInt-\u003eBody-\u003eEither String Frame",
          "package": "stompl",
          "partial": "Msg Frame",
          "signature": "[Header]-\u003eInt-\u003eBody-\u003eEither String Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkMsgFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003cem\u003emessage\u003c/em\u003e header (error frame)\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkMsgHdr",
          "package": "stompl",
          "signature": "String -\u003e Header",
          "source": "src/Network-Mom-Stompl-Frame.html#mkMsgHdr",
          "type": "function"
        },
        "index": {
          "description": "make message header error frame",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkMsgHdr",
          "normalized": "String-\u003eHeader",
          "package": "stompl",
          "partial": "Msg Hdr",
          "signature": "String-\u003eHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkMsgHdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake a \u003ccode\u003e\u003ca\u003eNack\u003c/a\u003e\u003c/code\u003e frame (Application -\u003e Broker).\n   The parameters are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Message Id: The identifier of the message to be nack'd\n\u003c/li\u003e\u003cli\u003e Subscription Id: The subscription, through which\n                      the message was received\n\u003c/li\u003e\u003cli\u003e Transaction: Nacks may be part of a transaction\n                  (see \u003ccode\u003e\u003ca\u003emkSend\u003c/a\u003e\u003c/code\u003e for details).\n\u003c/li\u003e\u003cli\u003e Receipt: see \u003ccode\u003e\u003ca\u003emkSubscribe\u003c/a\u003e\u003c/code\u003e for details\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkNack",
          "package": "stompl",
          "signature": "String -\u003e String -\u003e String -\u003e String -\u003e [Header] -\u003e Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkNack",
          "type": "function"
        },
        "index": {
          "description": "make Nack frame Application Broker The parameters are Message Id The identifier of the message to be nack Subscription Id The subscription through which the message was received Transaction Nacks may be part of transaction see mkSend for details Receipt see mkSubscribe for details",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkNack",
          "normalized": "String-\u003eString-\u003eString-\u003eString-\u003e[Header]-\u003eFrame",
          "package": "stompl",
          "partial": "Nack",
          "signature": "String-\u003eString-\u003eString-\u003eString-\u003e[Header]-\u003eFrame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkNack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eNack\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkNackFrame",
          "package": "stompl",
          "signature": "[Header] -\u003e Either String Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkNackFrame",
          "type": "function"
        },
        "index": {
          "description": "make Nack frame",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkNackFrame",
          "normalized": "[Header]-\u003eEither String Frame",
          "package": "stompl",
          "partial": "Nack Frame",
          "signature": "[Header]-\u003eEither String Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkNackFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003cem\u003epasscode\u003c/em\u003e header\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkPassHdr",
          "package": "stompl",
          "signature": "String -\u003e Header",
          "source": "src/Network-Mom-Stompl-Frame.html#mkPassHdr",
          "type": "function"
        },
        "index": {
          "description": "make passcode header",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkPassHdr",
          "normalized": "String-\u003eHeader",
          "package": "stompl",
          "partial": "Pass Hdr",
          "signature": "String-\u003eHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkPassHdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eReceipt\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkRecFrame",
          "package": "stompl",
          "signature": "[Header] -\u003e Either String Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkRecFrame",
          "type": "function"
        },
        "index": {
          "description": "make Receipt frame",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkRecFrame",
          "normalized": "[Header]-\u003eEither String Frame",
          "package": "stompl",
          "partial": "Rec Frame",
          "signature": "[Header]-\u003eEither String Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkRecFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003cem\u003ereceipt\u003c/em\u003e header\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkRecHdr",
          "package": "stompl",
          "signature": "String -\u003e Header",
          "source": "src/Network-Mom-Stompl-Frame.html#mkRecHdr",
          "type": "function"
        },
        "index": {
          "description": "make receipt header",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkRecHdr",
          "normalized": "String-\u003eHeader",
          "package": "stompl",
          "partial": "Rec Hdr",
          "signature": "String-\u003eHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkRecHdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake a \u003ccode\u003e\u003ca\u003eReceipt\u003c/a\u003e\u003c/code\u003e frame (Broker -\u003e Application).\n   The parameter is:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Receipt: The receipt identifier received from the application\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e: List of additional, broker-specific headers\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkReceipt",
          "package": "stompl",
          "signature": "String -\u003e [Header] -\u003e Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkReceipt",
          "type": "function"
        },
        "index": {
          "description": "make Receipt frame Broker Application The parameter is Receipt The receipt identifier received from the application Header List of additional broker-specific headers",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkReceipt",
          "normalized": "String-\u003e[Header]-\u003eFrame",
          "package": "stompl",
          "partial": "Receipt",
          "signature": "String-\u003e[Header]-\u003eFrame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkReceipt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003cem\u003eselector\u003c/em\u003e header\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkSelHdr",
          "package": "stompl",
          "signature": "String -\u003e Header",
          "source": "src/Network-Mom-Stompl-Frame.html#mkSelHdr",
          "type": "function"
        },
        "index": {
          "description": "make selector header",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkSelHdr",
          "normalized": "String-\u003eHeader",
          "package": "stompl",
          "partial": "Sel Hdr",
          "signature": "String-\u003eHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkSelHdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake a \u003ccode\u003e\u003ca\u003eSend\u003c/a\u003e\u003c/code\u003e frame (Application -\u003e Broker).\n   The parameters are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Destination: The name of the queue \n                  where the message should be published\n\u003c/li\u003e\u003cli\u003e Transaction: A unique identifier indicating\n                  a running transaction;\n                  if sent with a transaction,\n                  the message will not be delivered\n                  to subscribing applications,\n                  before the transaction is committed.\n                  If the \u003ccode\u003e\u003ca\u003eSend\u003c/a\u003e\u003c/code\u003e is not part of a transaction,\n                  the string shall be empty.\n\u003c/li\u003e\u003cli\u003e Receipt: A receipt (see \u003ccode\u003e\u003ca\u003emkSubscribe\u003c/a\u003e\u003c/code\u003e for details)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e: The content type of the payload message\n                  as MIME Type\n\u003c/li\u003e\u003cli\u003e Length: The length of the type in bytes\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e: List of additional headers;\n               Stomp protocol requires that user-specified\n               headers are passed through to subscribing applications.\n               These headers may, for instance, be use\n               by selectors to select messages. \n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eBody\u003c/a\u003e\u003c/code\u003e: The payload message\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkSend",
          "package": "stompl",
          "signature": "String -\u003e String -\u003e String -\u003e Type -\u003e Int -\u003e [Header] -\u003e Body -\u003e Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkSend",
          "type": "function"
        },
        "index": {
          "description": "make Send frame Application Broker The parameters are Destination The name of the queue where the message should be published Transaction unique identifier indicating running transaction if sent with transaction the message will not be delivered to subscribing applications before the transaction is committed If the Send is not part of transaction the string shall be empty Receipt receipt see mkSubscribe for details Type The content type of the payload message as MIME Type Length The length of the type in bytes Header List of additional headers Stomp protocol requires that user-specified headers are passed through to subscribing applications These headers may for instance be use by selectors to select messages Body The payload message",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkSend",
          "normalized": "String-\u003eString-\u003eString-\u003eType-\u003eInt-\u003e[Header]-\u003eBody-\u003eFrame",
          "package": "stompl",
          "partial": "Send",
          "signature": "String-\u003eString-\u003eString-\u003eType-\u003eInt-\u003e[Header]-\u003eBody-\u003eFrame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkSend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003cem\u003esession\u003c/em\u003e header (connected frame)\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkSesHdr",
          "package": "stompl",
          "signature": "String -\u003e Header",
          "source": "src/Network-Mom-Stompl-Frame.html#mkSesHdr",
          "type": "function"
        },
        "index": {
          "description": "make session header connected frame",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkSesHdr",
          "normalized": "String-\u003eHeader",
          "package": "stompl",
          "partial": "Ses Hdr",
          "signature": "String-\u003eHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkSesHdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eSend\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkSndFrame",
          "package": "stompl",
          "signature": "[Header] -\u003e Int -\u003e Body -\u003e Either String Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkSndFrame",
          "type": "function"
        },
        "index": {
          "description": "make Send frame",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkSndFrame",
          "normalized": "[Header]-\u003eInt-\u003eBody-\u003eEither String Frame",
          "package": "stompl",
          "partial": "Snd Frame",
          "signature": "[Header]-\u003eInt-\u003eBody-\u003eEither String Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkSndFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003cem\u003eserver\u003c/em\u003e header (connected frame)\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkSrvHdr",
          "package": "stompl",
          "signature": "String -\u003e Header",
          "source": "src/Network-Mom-Stompl-Frame.html#mkSrvHdr",
          "type": "function"
        },
        "index": {
          "description": "make server header connected frame",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkSrvHdr",
          "normalized": "String-\u003eHeader",
          "package": "stompl",
          "partial": "Srv Hdr",
          "signature": "String-\u003eHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkSrvHdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eStomp\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkStmpFrame",
          "package": "stompl",
          "signature": "[Header] -\u003e Either String Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkStmpFrame",
          "type": "function"
        },
        "index": {
          "description": "make Stomp frame",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkStmpFrame",
          "normalized": "[Header]-\u003eEither String Frame",
          "package": "stompl",
          "partial": "Stmp Frame",
          "signature": "[Header]-\u003eEither String Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkStmpFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003emkConnect\u003c/a\u003e\u003c/code\u003e, but the result is a \"STOMP\" frame\n   rather than a \"CONNECT\" frame\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkStomp",
          "package": "stompl",
          "signature": "String -\u003e String -\u003e String -\u003e Heart -\u003e [Version] -\u003e String -\u003e [Header] -\u003e Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkStomp",
          "type": "function"
        },
        "index": {
          "description": "Same as mkConnect but the result is STOMP frame rather than CONNECT frame",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkStomp",
          "normalized": "String-\u003eString-\u003eString-\u003eHeart-\u003e[Version]-\u003eString-\u003e[Header]-\u003eFrame",
          "package": "stompl",
          "partial": "Stomp",
          "signature": "String-\u003eString-\u003eString-\u003eHeart-\u003e[Version]-\u003eString-\u003e[Header]-\u003eFrame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkStomp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eSubscribe\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkSubFrame",
          "package": "stompl",
          "signature": "[Header] -\u003e Either String Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkSubFrame",
          "type": "function"
        },
        "index": {
          "description": "make Subscribe frame",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkSubFrame",
          "normalized": "[Header]-\u003eEither String Frame",
          "package": "stompl",
          "partial": "Sub Frame",
          "signature": "[Header]-\u003eEither String Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkSubFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003cem\u003esubscription\u003c/em\u003e header\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkSubHdr",
          "package": "stompl",
          "signature": "String -\u003e Header",
          "source": "src/Network-Mom-Stompl-Frame.html#mkSubHdr",
          "type": "function"
        },
        "index": {
          "description": "make subscription header",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkSubHdr",
          "normalized": "String-\u003eHeader",
          "package": "stompl",
          "partial": "Sub Hdr",
          "signature": "String-\u003eHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkSubHdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake a \u003ccode\u003e\u003ca\u003eSubscribe\u003c/a\u003e\u003c/code\u003e frame (Application -\u003e Broker).\n   The parameters are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Destination: The name of the queue as it is known by the broker\n                  and other applications using the queue\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eAckMode\u003c/a\u003e\u003c/code\u003e: The Acknowledge Mode for this subscription\n\u003c/li\u003e\u003cli\u003e Selector: An expression defining those messages\n               that are of actual for client.\n               The Stomp protocol does not define\n               a language for selectors;\n               it is even not entirely clear,\n               where messages are selected:\n               already at the broker, or only by the client.\n               Some brokers provide pre-selection of messages, \n               others do not.  \n\u003c/li\u003e\u003cli\u003e Subscription Id: A unique identifier distinguishing this \n                      subscription from others to the same queue.\n                      The identifier is defined by the application.\n\u003c/li\u003e\u003cli\u003e Receipt: A unique identifier defined by the application\n              to request confirmation of receipt of this frame.\n              If no receipt is wanted, the string shall be empty.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e: List of additional, broker-specific headers.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkSubscribe",
          "package": "stompl",
          "signature": "String -\u003e AckMode -\u003e String -\u003e String -\u003e String -\u003e [Header] -\u003e Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkSubscribe",
          "type": "function"
        },
        "index": {
          "description": "make Subscribe frame Application Broker The parameters are Destination The name of the queue as it is known by the broker and other applications using the queue AckMode The Acknowledge Mode for this subscription Selector An expression defining those messages that are of actual for client The Stomp protocol does not define language for selectors it is even not entirely clear where messages are selected already at the broker or only by the client Some brokers provide pre-selection of messages others do not Subscription Id unique identifier distinguishing this subscription from others to the same queue The identifier is defined by the application Receipt unique identifier defined by the application to request confirmation of receipt of this frame If no receipt is wanted the string shall be empty Header List of additional broker-specific headers",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkSubscribe",
          "normalized": "String-\u003eAckMode-\u003eString-\u003eString-\u003eString-\u003e[Header]-\u003eFrame",
          "package": "stompl",
          "partial": "Subscribe",
          "signature": "String-\u003eAckMode-\u003eString-\u003eString-\u003eString-\u003e[Header]-\u003eFrame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkSubscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003cem\u003etransaction\u003c/em\u003e header\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkTrnHdr",
          "package": "stompl",
          "signature": "String -\u003e Header",
          "source": "src/Network-Mom-Stompl-Frame.html#mkTrnHdr",
          "type": "function"
        },
        "index": {
          "description": "make transaction header",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkTrnHdr",
          "normalized": "String-\u003eHeader",
          "package": "stompl",
          "partial": "Trn Hdr",
          "signature": "String-\u003eHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkTrnHdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003ccode\u003e\u003ca\u003eUnsubscribe\u003c/a\u003e\u003c/code\u003e frame\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkUSubFrame",
          "package": "stompl",
          "signature": "[Header] -\u003e Either String Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkUSubFrame",
          "type": "function"
        },
        "index": {
          "description": "make Unsubscribe frame",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkUSubFrame",
          "normalized": "[Header]-\u003eEither String Frame",
          "package": "stompl",
          "partial": "USub Frame",
          "signature": "[Header]-\u003eEither String Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkUSubFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake an \u003ccode\u003e\u003ca\u003eUnsubscribe\u003c/a\u003e\u003c/code\u003e frame (Application -\u003e Broker).\n   The parameters are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Destination: The queue name; either a destination or a \n                  subscription id must be given. \n                  (According to protocol version 1.1,\n                   the subscription id is mandatory on\n                   both, \u003ccode\u003e\u003ca\u003eSubscribe\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eUnsubscribe\u003c/a\u003e\u003c/code\u003e.)\n\u003c/li\u003e\u003cli\u003e Subscription Id: The subscription identifier (see \u003ccode\u003e\u003ca\u003emkSubscribe\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e Receipt: The receipt (see \u003ccode\u003e\u003ca\u003emkSubscribe\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e: Additional, broker-specific headers\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkUnsubscribe",
          "package": "stompl",
          "signature": "String -\u003e String -\u003e String -\u003e [Header] -\u003e Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#mkUnsubscribe",
          "type": "function"
        },
        "index": {
          "description": "make an Unsubscribe frame Application Broker The parameters are Destination The queue name either destination or subscription id must be given According to protocol version the subscription id is mandatory on both Subscribe and Unsubscribe Subscription Id The subscription identifier see mkSubscribe Receipt The receipt see mkSubscribe Header Additional broker-specific headers",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkUnsubscribe",
          "normalized": "String-\u003eString-\u003eString-\u003e[Header]-\u003eFrame",
          "package": "stompl",
          "partial": "Unsubscribe",
          "signature": "String-\u003eString-\u003eString-\u003e[Header]-\u003eFrame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkUnsubscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake \u003cem\u003eversion\u003c/em\u003e header (connected frame)\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkVerHdr",
          "package": "stompl",
          "signature": "String -\u003e Header",
          "source": "src/Network-Mom-Stompl-Frame.html#mkVerHdr",
          "type": "function"
        },
        "index": {
          "description": "make version header connected frame",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "mkVerHdr",
          "normalized": "String-\u003eHeader",
          "package": "stompl",
          "partial": "Ver Hdr",
          "signature": "String-\u003eHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:mkVerHdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enegotiates heart-beat\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "negoBeat",
          "package": "stompl",
          "signature": "Heart -\u003e Heart -\u003e Heart",
          "source": "src/Network-Mom-Stompl-Frame.html#negoBeat",
          "type": "function"
        },
        "index": {
          "description": "negotiates heart-beat",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "negoBeat",
          "normalized": "Heart-\u003eHeart-\u003eHeart",
          "package": "stompl",
          "partial": "Beat",
          "signature": "Heart-\u003eHeart-\u003eHeart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:negoBeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enegotiates version - \n   if no common version is found,\n   the function results in version 1.0!\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "negoVersion",
          "package": "stompl",
          "signature": "[Version] -\u003e [Version] -\u003e Version",
          "source": "src/Network-Mom-Stompl-Frame.html#negoVersion",
          "type": "function"
        },
        "index": {
          "description": "negotiates version if no common version is found the function results in version",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "negoVersion",
          "normalized": "[Version]-\u003e[Version]-\u003eVersion",
          "package": "stompl",
          "partial": "Version",
          "signature": "[Version]-\u003e[Version]-\u003eVersion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:negoVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Mom.Stompl.Frame",
          "name": "numeric",
          "package": "stompl",
          "signature": "String -\u003e Bool",
          "source": "src/Network-Mom-Stompl-Frame.html#numeric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "numeric",
          "normalized": "String-\u003eBool",
          "package": "stompl",
          "signature": "String-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:numeric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econverts the \u003ccode\u003e\u003ca\u003eFrameType\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "putCommand",
          "package": "stompl",
          "signature": "Frame -\u003e ByteString",
          "source": "src/Network-Mom-Stompl-Frame.html#putCommand",
          "type": "function"
        },
        "index": {
          "description": "converts the FrameType into ByteString",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "putCommand",
          "normalized": "Frame-\u003eByteString",
          "package": "stompl",
          "partial": "Command",
          "signature": "Frame-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:putCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econverts a \u003ccode\u003e\u003ca\u003eFrame\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "putFrame",
          "package": "stompl",
          "signature": "Frame -\u003e ByteString",
          "source": "src/Network-Mom-Stompl-Frame.html#putFrame",
          "type": "function"
        },
        "index": {
          "description": "converts Frame into ByteString",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "putFrame",
          "normalized": "Frame-\u003eByteString",
          "package": "stompl",
          "partial": "Frame",
          "signature": "Frame-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:putFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esets the transaction header to an empty string;\n   this is a useful function for brokers:\n   when a transaction has been committed,\n   the \u003ccode\u003e\u003ca\u003eSend\u003c/a\u003e\u003c/code\u003e messages can be handled by the same function\n   without, accidentally, iterating into a new transaction.\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "resetTrans",
          "package": "stompl",
          "signature": "Frame -\u003e Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#resetTrans",
          "type": "function"
        },
        "index": {
          "description": "sets the transaction header to an empty string this is useful function for brokers when transaction has been committed the Send messages can be handled by the same function without accidentally iterating into new transaction",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "resetTrans",
          "normalized": "Frame-\u003eFrame",
          "package": "stompl",
          "partial": "Trans",
          "signature": "Frame-\u003eFrame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:resetTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eremove header (\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e) from list of \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "rmHdr",
          "package": "stompl",
          "signature": "[Header] -\u003e String -\u003e [Header]",
          "source": "src/Network-Mom-Stompl-Frame.html#rmHdr",
          "type": "function"
        },
        "index": {
          "description": "remove header String from list of Header",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "rmHdr",
          "normalized": "[Header]-\u003eString-\u003e[Header]",
          "package": "stompl",
          "partial": "Hdr",
          "signature": "[Header]-\u003eString-\u003e[Header]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:rmHdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eremove headers (list of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e) from list of \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "rmHdrs",
          "package": "stompl",
          "signature": "[Header] -\u003e [String] -\u003e [Header]",
          "source": "src/Network-Mom-Stompl-Frame.html#rmHdrs",
          "type": "function"
        },
        "index": {
          "description": "remove headers list of String from list of Header",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "rmHdrs",
          "normalized": "[Header]-\u003e[String]-\u003e[Header]",
          "package": "stompl",
          "partial": "Hdrs",
          "signature": "[Header]-\u003e[String]-\u003e[Header]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:rmHdrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econverts a \u003ccode\u003e\u003ca\u003eSend\u003c/a\u003e\u003c/code\u003e frame into a \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e frame;\n   parameters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e message id\n\u003c/li\u003e\u003cli\u003e subscription id\n\u003c/li\u003e\u003cli\u003e The original \u003ccode\u003e\u003ca\u003eSend\u003c/a\u003e\u003c/code\u003e frame\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "sndToMsg",
          "package": "stompl",
          "signature": "String -\u003e String -\u003e String -\u003e Frame -\u003e Maybe Frame",
          "source": "src/Network-Mom-Stompl-Frame.html#sndToMsg",
          "type": "function"
        },
        "index": {
          "description": "converts Send frame into Message frame parameters message id subscription id The original Send frame",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "sndToMsg",
          "normalized": "String-\u003eString-\u003eString-\u003eFrame-\u003eMaybe Frame",
          "package": "stompl",
          "partial": "To Msg",
          "signature": "String-\u003eString-\u003eString-\u003eFrame-\u003eMaybe Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:sndToMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert \u003ccode\u003e\u003ca\u003eSrvDesc\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "srvToStr",
          "package": "stompl",
          "signature": "SrvDesc -\u003e String",
          "source": "src/Network-Mom-Stompl-Frame.html#srvToStr",
          "type": "function"
        },
        "index": {
          "description": "convert SrvDesc to String",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "srvToStr",
          "normalized": "SrvDesc-\u003eString",
          "package": "stompl",
          "partial": "To Str",
          "signature": "SrvDesc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:srvToStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eSrvDesc\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "strToSrv",
          "package": "stompl",
          "signature": "String -\u003e SrvDesc",
          "source": "src/Network-Mom-Stompl-Frame.html#strToSrv",
          "type": "function"
        },
        "index": {
          "description": "convert String to SrvDesc",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "strToSrv",
          "normalized": "String-\u003eSrvDesc",
          "package": "stompl",
          "partial": "To Srv",
          "signature": "String-\u003eSrvDesc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:strToSrv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econverts a \u003ccode\u003e\u003ca\u003eFrame\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "toString",
          "package": "stompl",
          "signature": "Frame -\u003e String",
          "source": "src/Network-Mom-Stompl-Frame.html#toString",
          "type": "function"
        },
        "index": {
          "description": "converts Frame into String",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "toString",
          "normalized": "Frame-\u003eString",
          "package": "stompl",
          "partial": "String",
          "signature": "Frame-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egets the \u003ccode\u003e\u003ca\u003eFrameType\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eFrame\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "typeOf",
          "package": "stompl",
          "signature": "Frame -\u003e FrameType",
          "source": "src/Network-Mom-Stompl-Frame.html#typeOf",
          "type": "function"
        },
        "index": {
          "description": "gets the FrameType of Frame",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "typeOf",
          "normalized": "Frame-\u003eFrameType",
          "package": "stompl",
          "partial": "Of",
          "signature": "Frame-\u003eFrameType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:typeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Mom.Stompl.Frame",
          "name": "upString",
          "package": "stompl",
          "signature": "String -\u003e String",
          "source": "src/Network-Mom-Stompl-Frame.html#upString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "upString",
          "normalized": "String-\u003eString",
          "package": "stompl",
          "partial": "String",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:upString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eAckMode\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "valToAck",
          "package": "stompl",
          "signature": "String -\u003e Maybe AckMode",
          "source": "src/Network-Mom-Stompl-Frame.html#valToAck",
          "type": "function"
        },
        "index": {
          "description": "convert String to AckMode",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "valToAck",
          "normalized": "String-\u003eMaybe AckMode",
          "package": "stompl",
          "partial": "To Ack",
          "signature": "String-\u003eMaybe AckMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:valToAck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eHeartBeat\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "valToBeat",
          "package": "stompl",
          "signature": "String -\u003e Maybe Heart",
          "source": "src/Network-Mom-Stompl-Frame.html#valToBeat",
          "type": "function"
        },
        "index": {
          "description": "convert String to HeartBeat",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "valToBeat",
          "normalized": "String-\u003eMaybe Heart",
          "package": "stompl",
          "partial": "To Beat",
          "signature": "String-\u003eMaybe Heart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:valToBeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eVersion\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "valToVer",
          "package": "stompl",
          "signature": "String -\u003e Maybe Version",
          "source": "src/Network-Mom-Stompl-Frame.html#valToVer",
          "type": "function"
        },
        "index": {
          "description": "convert String to Version",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "valToVer",
          "normalized": "String-\u003eMaybe Version",
          "package": "stompl",
          "partial": "To Ver",
          "signature": "String-\u003eMaybe Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:valToVer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to list of \u003ccode\u003e\u003ca\u003eVersion\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "valToVers",
          "package": "stompl",
          "signature": "String -\u003e Maybe [Version]",
          "source": "src/Network-Mom-Stompl-Frame.html#valToVers",
          "type": "function"
        },
        "index": {
          "description": "convert String to list of Version",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "valToVers",
          "normalized": "String-\u003eMaybe[Version]",
          "package": "stompl",
          "partial": "To Vers",
          "signature": "String-\u003eMaybe[Version]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:valToVers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert \u003ccode\u003e\u003ca\u003eVersion\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "verToVal",
          "package": "stompl",
          "signature": "Version -\u003e String",
          "source": "src/Network-Mom-Stompl-Frame.html#verToVal",
          "type": "function"
        },
        "index": {
          "description": "convert Version to String",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "verToVal",
          "normalized": "Version-\u003eString",
          "package": "stompl",
          "partial": "To Val",
          "signature": "Version-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:verToVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert list of \u003ccode\u003e\u003ca\u003eVersion\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Frame",
          "name": "versToVal",
          "package": "stompl",
          "signature": "[Version] -\u003e String",
          "source": "src/Network-Mom-Stompl-Frame.html#versToVal",
          "type": "function"
        },
        "index": {
          "description": "convert list of Version to String",
          "hierarchy": "Network Mom Stompl Frame",
          "module": "Network.Mom.Stompl.Frame",
          "name": "versToVal",
          "normalized": "[Version]-\u003eString",
          "package": "stompl",
          "partial": "To Val",
          "signature": "[Version]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Frame.html#v:versToVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStomp Parser based on Attoparsec\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Mom.Stompl.Parser",
          "name": "Parser",
          "package": "stompl",
          "source": "src/Network-Mom-Stompl-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Stomp Parser based on Attoparsec",
          "hierarchy": "Network Mom Stompl Parser",
          "module": "Network.Mom.Stompl.Parser",
          "name": "Parser",
          "package": "stompl",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a ByteString at once with Attoparsec \u003ccode\u003e\u003ca\u003eparseOnly\u003c/a\u003e\u003c/code\u003e.\n   May fail or conclude.\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Parser",
          "name": "stompAtOnce",
          "package": "stompl",
          "signature": "ByteString -\u003e Either String Frame",
          "source": "src/Network-Mom-Stompl-Parser.html#stompAtOnce",
          "type": "function"
        },
        "index": {
          "description": "Parses ByteString at once with Attoparsec parseOnly May fail or conclude",
          "hierarchy": "Network Mom Stompl Parser",
          "module": "Network.Mom.Stompl.Parser",
          "name": "stompAtOnce",
          "normalized": "ByteString-\u003eEither String Frame",
          "package": "stompl",
          "partial": "At Once",
          "signature": "ByteString-\u003eEither String Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Parser.html#v:stompAtOnce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Stomp Parser\n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Parser",
          "name": "stompParser",
          "package": "stompl",
          "signature": "Parser Frame",
          "source": "src/Network-Mom-Stompl-Parser.html#stompParser",
          "type": "function"
        },
        "index": {
          "description": "The Stomp Parser",
          "hierarchy": "Network Mom Stompl Parser",
          "module": "Network.Mom.Stompl.Parser",
          "name": "stompParser",
          "package": "stompl",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stompl/docs/Network-Mom-Stompl-Parser.html#v:stompParser"
      }
    }
  ]
]