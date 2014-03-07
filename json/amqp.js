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
        "word": "amqp"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Lifted",
          "name": "Lifted",
          "package": "amqp",
          "source": "src/Network-AMQP-Lifted.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network AMQP Lifted",
          "module": "Network.AMQP.Lifted",
          "name": "Lifted",
          "package": "amqp",
          "partial": "Lifted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Lifted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003econsumeMsgs chan queueName ack callback\u003c/code\u003e subscribes to the given queue and returns a consumerTag. For any incoming message, the callback will be run. If \u003ccode\u003eack == \u003ccode\u003eAck\u003c/code\u003e\u003c/code\u003e you will have to acknowledge all incoming messages (see \u003ccode\u003eackMsg\u003c/code\u003e and \u003ccode\u003eackEnv\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eNOTE: The callback will be run on the same thread as the channel thread (every channel spawns its own thread to listen for incoming data) so DO NOT perform any request on \u003ccode\u003echan\u003c/code\u003e inside the callback (however, you CAN perform requests on other open channels inside the callback, though I wouldn't recommend it).\n Functions that can safely be called on \u003ccode\u003echan\u003c/code\u003e are \u003ccode\u003eackMsg\u003c/code\u003e, \u003ccode\u003eackEnv\u003c/code\u003e, \u003ccode\u003erejectMsg\u003c/code\u003e, \u003ccode\u003erecoverMsgs\u003c/code\u003e. If you want to perform anything more complex, it's a good idea to wrap it inside \u003ccode\u003eforkIO\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn addition, while the callback function \u003ccode\u003e((\u003ccode\u003eMessage\u003c/code\u003e, \u003ccode\u003eEnvelope\u003c/code\u003e) -\u003e m ())\u003c/code\u003e\n has access to the captured state, all its side-effects in m are discarded.\n\u003c/p\u003e",
          "module": "Network.AMQP.Lifted",
          "name": "consumeMsgs",
          "package": "amqp",
          "signature": "Channel-\u003e Text-\u003e Ack-\u003e ((Message, Envelope) -\u003e m ())-\u003e m ConsumerTag",
          "type": "function"
        },
        "index": {
          "description": "consumeMsgs chan queueName ack callback subscribes to the given queue and returns consumerTag For any incoming message the callback will be run If ack Ack you will have to acknowledge all incoming messages see ackMsg and ackEnv NOTE The callback will be run on the same thread as the channel thread every channel spawns its own thread to listen for incoming data so DO NOT perform any request on chan inside the callback however you CAN perform requests on other open channels inside the callback though wouldn recommend it Functions that can safely be called on chan are ackMsg ackEnv rejectMsg recoverMsgs If you want to perform anything more complex it good idea to wrap it inside forkIO In addition while the callback function Message Envelope has access to the captured state all its side-effects in are discarded",
          "hierarchy": "Network AMQP Lifted",
          "module": "Network.AMQP.Lifted",
          "name": "consumeMsgs",
          "normalized": "Channel-\u003eText-\u003eAck-\u003e((Message,Envelope)-\u003ea())-\u003ea ConsumerTag",
          "package": "amqp",
          "partial": "Msgs",
          "signature": "Channel-\u003eText-\u003eAck-\u003e((Message,Envelope)-\u003em())-\u003em ConsumerTag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Lifted.html#v:consumeMsgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean extended version of \u003ccode\u003econsumeMsgs\u003c/code\u003e that allows you to include arbitrary arguments.\n\u003c/p\u003e",
          "module": "Network.AMQP.Lifted",
          "name": "consumeMsgs'",
          "package": "amqp",
          "signature": "Channel-\u003e Text-\u003e Ack-\u003e ((Message, Envelope) -\u003e m ())-\u003e FieldTable-\u003e m ConsumerTag",
          "type": "function"
        },
        "index": {
          "description": "an extended version of consumeMsgs that allows you to include arbitrary arguments",
          "hierarchy": "Network AMQP Lifted",
          "module": "Network.AMQP.Lifted",
          "name": "consumeMsgs'",
          "normalized": "Channel-\u003eText-\u003eAck-\u003e((Message,Envelope)-\u003ea())-\u003eFieldTable-\u003ea ConsumerTag",
          "package": "amqp",
          "partial": "Msgs'",
          "signature": "Channel-\u003eText-\u003eAck-\u003e((Message,Envelope)-\u003em())-\u003eFieldTable-\u003em ConsumerTag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Lifted.html#v:consumeMsgs-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains data-types specified in the AMQP spec\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.AMQP.Types",
          "name": "Types",
          "package": "amqp",
          "source": "src/Network-AMQP-Types.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains data-types specified in the AMQP spec",
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "Types",
          "package": "amqp",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "Bit",
          "package": "amqp",
          "source": "src/Network-AMQP-Types.html#Bit",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "Bit",
          "package": "amqp",
          "partial": "Bit",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#t:Bit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "ChannelID",
          "package": "amqp",
          "source": "src/Network-AMQP-Types.html#ChannelID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "ChannelID",
          "package": "amqp",
          "partial": "Channel ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#t:ChannelID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "DecimalValue",
          "package": "amqp",
          "source": "src/Network-AMQP-Types.html#DecimalValue",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "DecimalValue",
          "package": "amqp",
          "partial": "Decimal Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#t:DecimalValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "Decimals",
          "package": "amqp",
          "source": "src/Network-AMQP-Types.html#Decimals",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "Decimals",
          "package": "amqp",
          "partial": "Decimals",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#t:Decimals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeys must be shorter than 256 bytes when encoded as UTF-8\n\u003c/p\u003e",
          "module": "Network.AMQP.Types",
          "name": "FieldTable",
          "package": "amqp",
          "source": "src/Network-AMQP-Types.html#FieldTable",
          "type": "data"
        },
        "index": {
          "description": "Keys must be shorter than bytes when encoded as UTF-8",
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "FieldTable",
          "package": "amqp",
          "partial": "Field Table",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#t:FieldTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "FieldValue",
          "package": "amqp",
          "source": "src/Network-AMQP-Types.html#FieldValue",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "FieldValue",
          "package": "amqp",
          "partial": "Field Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#t:FieldValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "LongInt",
          "package": "amqp",
          "source": "src/Network-AMQP-Types.html#LongInt",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "LongInt",
          "package": "amqp",
          "partial": "Long Int",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#t:LongInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "LongLongInt",
          "package": "amqp",
          "source": "src/Network-AMQP-Types.html#LongLongInt",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "LongLongInt",
          "package": "amqp",
          "partial": "Long Long Int",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#t:LongLongInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "LongString",
          "package": "amqp",
          "source": "src/Network-AMQP-Types.html#LongString",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "LongString",
          "package": "amqp",
          "partial": "Long String",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#t:LongString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "Octet",
          "package": "amqp",
          "source": "src/Network-AMQP-Types.html#Octet",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "Octet",
          "package": "amqp",
          "partial": "Octet",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#t:Octet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "PayloadSize",
          "package": "amqp",
          "source": "src/Network-AMQP-Types.html#PayloadSize",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "PayloadSize",
          "package": "amqp",
          "partial": "Payload Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#t:PayloadSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "ShortInt",
          "package": "amqp",
          "source": "src/Network-AMQP-Types.html#ShortInt",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "ShortInt",
          "package": "amqp",
          "partial": "Short Int",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#t:ShortInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "ShortString",
          "package": "amqp",
          "source": "src/Network-AMQP-Types.html#ShortString",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "ShortString",
          "package": "amqp",
          "partial": "Short String",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#t:ShortString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "Timestamp",
          "package": "amqp",
          "source": "src/Network-AMQP-Types.html#Timestamp",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "Timestamp",
          "package": "amqp",
          "partial": "Timestamp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#t:Timestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "DecimalValue",
          "package": "amqp",
          "signature": "DecimalValue Decimals LongInt",
          "source": "src/Network-AMQP-Types.html#DecimalValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "DecimalValue",
          "package": "amqp",
          "partial": "Decimal Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#v:DecimalValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "FVBool",
          "package": "amqp",
          "signature": "FVBool Bool",
          "source": "src/Network-AMQP-Types.html#FieldValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "FVBool",
          "package": "amqp",
          "partial": "FVBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#v:FVBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "FVByteArray",
          "package": "amqp",
          "signature": "FVByteArray ByteString",
          "source": "src/Network-AMQP-Types.html#FieldValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "FVByteArray",
          "package": "amqp",
          "partial": "FVByte Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#v:FVByteArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "FVDecimal",
          "package": "amqp",
          "signature": "FVDecimal DecimalValue",
          "source": "src/Network-AMQP-Types.html#FieldValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "FVDecimal",
          "package": "amqp",
          "partial": "FVDecimal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#v:FVDecimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "FVDouble",
          "package": "amqp",
          "signature": "FVDouble Double",
          "source": "src/Network-AMQP-Types.html#FieldValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "FVDouble",
          "package": "amqp",
          "partial": "FVDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#v:FVDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "FVFieldArray",
          "package": "amqp",
          "signature": "FVFieldArray [FieldValue]",
          "source": "src/Network-AMQP-Types.html#FieldValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "FVFieldArray",
          "normalized": "FVFieldArray[FieldValue]",
          "package": "amqp",
          "partial": "FVField Array",
          "signature": "FVFieldArray[FieldValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#v:FVFieldArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "FVFieldTable",
          "package": "amqp",
          "signature": "FVFieldTable FieldTable",
          "source": "src/Network-AMQP-Types.html#FieldValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "FVFieldTable",
          "package": "amqp",
          "partial": "FVField Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#v:FVFieldTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "FVFloat",
          "package": "amqp",
          "signature": "FVFloat Float",
          "source": "src/Network-AMQP-Types.html#FieldValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "FVFloat",
          "package": "amqp",
          "partial": "FVFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#v:FVFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "FVInt16",
          "package": "amqp",
          "signature": "FVInt16 Int16",
          "source": "src/Network-AMQP-Types.html#FieldValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "FVInt16",
          "package": "amqp",
          "partial": "FVInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#v:FVInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "FVInt32",
          "package": "amqp",
          "signature": "FVInt32 Int32",
          "source": "src/Network-AMQP-Types.html#FieldValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "FVInt32",
          "package": "amqp",
          "partial": "FVInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#v:FVInt32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "FVInt64",
          "package": "amqp",
          "signature": "FVInt64 Int64",
          "source": "src/Network-AMQP-Types.html#FieldValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "FVInt64",
          "package": "amqp",
          "partial": "FVInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#v:FVInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "FVInt8",
          "package": "amqp",
          "signature": "FVInt8 Int8",
          "source": "src/Network-AMQP-Types.html#FieldValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "FVInt8",
          "package": "amqp",
          "partial": "FVInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#v:FVInt8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "FVString",
          "package": "amqp",
          "signature": "FVString Text",
          "source": "src/Network-AMQP-Types.html#FieldValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "FVString",
          "package": "amqp",
          "partial": "FVString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#v:FVString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "FVTimestamp",
          "package": "amqp",
          "signature": "FVTimestamp Timestamp",
          "source": "src/Network-AMQP-Types.html#FieldValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "FVTimestamp",
          "package": "amqp",
          "partial": "FVTimestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#v:FVTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "FVVoid",
          "package": "amqp",
          "signature": "FVVoid",
          "source": "src/Network-AMQP-Types.html#FieldValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "FVVoid",
          "package": "amqp",
          "partial": "FVVoid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#v:FVVoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "FieldTable",
          "package": "amqp",
          "signature": "FieldTable (Map Text FieldValue)",
          "source": "src/Network-AMQP-Types.html#FieldTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "FieldTable",
          "package": "amqp",
          "partial": "Field Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#v:FieldTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "LongString",
          "package": "amqp",
          "signature": "LongString ByteString",
          "source": "src/Network-AMQP-Types.html#LongString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "LongString",
          "package": "amqp",
          "partial": "Long String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#v:LongString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP.Types",
          "name": "ShortString",
          "package": "amqp",
          "signature": "ShortString Text",
          "source": "src/Network-AMQP-Types.html#ShortString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP Types",
          "module": "Network.AMQP.Types",
          "name": "ShortString",
          "package": "amqp",
          "partial": "Short String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP-Types.html#v:ShortString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA client library for AMQP servers implementing the 0-9-1 spec; currently only supports RabbitMQ (see \u003ca\u003ehttp://www.rabbitmq.com\u003c/a\u003e)\n\u003c/p\u003e\u003cp\u003eA good introduction to RabbitMQ and AMQP 0-9-1 (in various languages): \u003ca\u003ehttp://www.rabbitmq.com/getstarted.html\u003c/a\u003e, \u003ca\u003ehttp://www.rabbitmq.com/tutorials/amqp-concepts.html\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eExample\u003c/em\u003e:\n\u003c/p\u003e\u003cp\u003eConnect to a server, declare a queue and an exchange and setup a callback for messages coming in on the queue. Then publish a single message to our new exchange\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE OverloadedStrings #-}\nimport Network.AMQP\nimport qualified Data.ByteString.Lazy.Char8 as BL\n\nmain = do\n    conn \u003c- openConnection \"127.0.0.1\" \"/\" \"guest\" \"guest\"\n    chan \u003c- openChannel conn\n\n    -- declare a queue, exchange and binding\n    declareQueue chan newQueue {queueName = \"myQueue\"}\n    declareExchange chan newExchange {exchangeName = \"myExchange\", exchangeType = \"direct\"}\n    bindQueue chan \"myQueue\" \"myExchange\" \"myKey\"\n\n    -- subscribe to the queue\n    consumeMsgs chan \"myQueue\" Ack myCallback\n\n    -- publish a message to our new exchange\n    publishMsg chan \"myExchange\" \"myKey\"\n        newMsg {msgBody = (BL.pack \"hello world\"),\n                msgDeliveryMode = Just Persistent}\n\n    getLine -- wait for keypress\n    closeConnection conn\n    putStrLn \"connection closed\"\n\n\nmyCallback :: (Message,Envelope) -\u003e IO ()\nmyCallback (msg, env) = do\n    putStrLn $ \"received message: \" ++ (BL.unpack $ msgBody msg)\n    -- acknowledge receiving the message\n    ackEnv env\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eException handling\u003c/em\u003e:\n\u003c/p\u003e\u003cp\u003eSome function calls can make the AMQP server throw an AMQP exception, which has the side-effect of closing the connection or channel. The AMQP exceptions are raised as Haskell exceptions (see \u003ccode\u003e\u003ca\u003eAMQPException\u003c/a\u003e\u003c/code\u003e). So upon receiving an \u003ccode\u003e\u003ca\u003eAMQPException\u003c/a\u003e\u003c/code\u003e you may have to reopen the channel or connection.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.AMQP",
          "name": "AMQP",
          "package": "amqp",
          "source": "src/Network-AMQP.html",
          "type": "module"
        },
        "index": {
          "description": "client library for AMQP servers implementing the spec currently only supports RabbitMQ see http www.rabbitmq.com good introduction to RabbitMQ and AMQP in various languages http www.rabbitmq.com getstarted.html http www.rabbitmq.com tutorials amqp-concepts.html Example Connect to server declare queue and an exchange and setup callback for messages coming in on the queue Then publish single message to our new exchange LANGUAGE OverloadedStrings import Network.AMQP import qualified Data.ByteString.Lazy.Char8 as BL main do conn openConnection guest guest chan openChannel conn declare queue exchange and binding declareQueue chan newQueue queueName myQueue declareExchange chan newExchange exchangeName myExchange exchangeType direct bindQueue chan myQueue myExchange myKey subscribe to the queue consumeMsgs chan myQueue Ack myCallback publish message to our new exchange publishMsg chan myExchange myKey newMsg msgBody BL.pack hello world msgDeliveryMode Just Persistent getLine wait for keypress closeConnection conn putStrLn connection closed myCallback Message Envelope IO myCallback msg env do putStrLn received message BL.unpack msgBody msg acknowledge receiving the message ackEnv env Exception handling Some function calls can make the AMQP server throw an AMQP exception which has the side-effect of closing the connection or channel The AMQP exceptions are raised as Haskell exceptions see AMQPException So upon receiving an AMQPException you may have to reopen the channel or connection",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "AMQP",
          "package": "amqp",
          "partial": "AMQP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "AMQPException",
          "package": "amqp",
          "source": "src/Network-AMQP-Internal.html#AMQPException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "AMQPException",
          "package": "amqp",
          "partial": "AMQPException",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#t:AMQPException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003especifies whether you have to acknowledge messages that you receive from \u003ccode\u003e\u003ca\u003econsumeMsgs\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003egetMsg\u003c/a\u003e\u003c/code\u003e. If you use \u003ccode\u003e\u003ca\u003eAck\u003c/a\u003e\u003c/code\u003e, you have to call \u003ccode\u003e\u003ca\u003eackMsg\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eackEnv\u003c/a\u003e\u003c/code\u003e after you have processed a message, otherwise it might be delivered again in the future\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "Ack",
          "package": "amqp",
          "source": "src/Network-AMQP.html#Ack",
          "type": "data"
        },
        "index": {
          "description": "specifies whether you have to acknowledge messages that you receive from consumeMsgs or getMsg If you use Ack you have to call ackMsg or ackEnv after you have processed message otherwise it might be delivered again in the future",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "Ack",
          "package": "amqp",
          "partial": "Ack",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#t:Ack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA connection to an AMQP server is made up of separate channels. It is recommended to use a separate channel for each thread in your application that talks to the AMQP server (but you don't have to as channels are thread-safe)\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "Channel",
          "package": "amqp",
          "source": "src/Network-AMQP-Internal.html#Channel",
          "type": "data"
        },
        "index": {
          "description": "connection to an AMQP server is made up of separate channels It is recommended to use separate channel for each thread in your application that talks to the AMQP server but you don have to as channels are thread-safe",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "Channel",
          "package": "amqp",
          "partial": "Channel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#t:Channel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "Connection",
          "package": "amqp",
          "source": "src/Network-AMQP-Internal.html#Connection",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "Connection",
          "package": "amqp",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the parameters to connect to a broker or a cluster of brokers.\n See \u003ccode\u003edefaultConnectionOpts\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNOTICE\u003c/em\u003e: The field \u003ccode\u003e\u003ca\u003ecoMaxChannel\u003c/a\u003e\u003c/code\u003e was only added for future use, as the respective functionality is not yet implemented.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "ConnectionOpts",
          "package": "amqp",
          "source": "src/Network-AMQP-Internal.html#ConnectionOpts",
          "type": "data"
        },
        "index": {
          "description": "Represents the parameters to connect to broker or cluster of brokers See defaultConnectionOpts NOTICE The field coMaxChannel was only added for future use as the respective functionality is not yet implemented",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "ConnectionOpts",
          "package": "amqp",
          "partial": "Connection Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#t:ConnectionOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "ConsumerTag",
          "package": "amqp",
          "source": "src/Network-AMQP.html#ConsumerTag",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "ConsumerTag",
          "package": "amqp",
          "partial": "Consumer Tag",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#t:ConsumerTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "DeliveryMode",
          "package": "amqp",
          "source": "src/Network-AMQP-Internal.html#DeliveryMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "DeliveryMode",
          "package": "amqp",
          "partial": "Delivery Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#t:DeliveryMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econtains meta-information of a delivered message (through \u003ccode\u003egetMsg\u003c/code\u003e or \u003ccode\u003econsumeMsgs\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "Envelope",
          "package": "amqp",
          "source": "src/Network-AMQP-Internal.html#Envelope",
          "type": "data"
        },
        "index": {
          "description": "contains meta-information of delivered message through getMsg or consumeMsgs",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "Envelope",
          "package": "amqp",
          "partial": "Envelope",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#t:Envelope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA record that contains the fields needed when creating a new exhange using \u003ccode\u003e\u003ca\u003edeclareExchange\u003c/a\u003e\u003c/code\u003e. The default values apply when you use \u003ccode\u003e\u003ca\u003enewExchange\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "ExchangeOpts",
          "package": "amqp",
          "source": "src/Network-AMQP.html#ExchangeOpts",
          "type": "data"
        },
        "index": {
          "description": "record that contains the fields needed when creating new exhange using declareExchange The default values apply when you use newExchange",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "ExchangeOpts",
          "package": "amqp",
          "partial": "Exchange Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#t:ExchangeOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn AMQP message\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "Message",
          "package": "amqp",
          "source": "src/Network-AMQP-Internal.html#Message",
          "type": "data"
        },
        "index": {
          "description": "An AMQP message",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "Message",
          "package": "amqp",
          "partial": "Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "PublishError",
          "package": "amqp",
          "source": "src/Network-AMQP-Internal.html#PublishError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "PublishError",
          "package": "amqp",
          "partial": "Publish Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#t:PublishError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA record that contains the fields needed when creating a new queue using \u003ccode\u003e\u003ca\u003edeclareQueue\u003c/a\u003e\u003c/code\u003e. The default values apply when you use \u003ccode\u003e\u003ca\u003enewQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "QueueOpts",
          "package": "amqp",
          "source": "src/Network-AMQP.html#QueueOpts",
          "type": "data"
        },
        "index": {
          "description": "record that contains the fields needed when creating new queue using declareQueue The default values apply when you use newQueue",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "QueueOpts",
          "package": "amqp",
          "partial": "Queue Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#t:QueueOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "ReturnReplyCode",
          "package": "amqp",
          "source": "src/Network-AMQP-Internal.html#ReturnReplyCode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "ReturnReplyCode",
          "package": "amqp",
          "partial": "Return Reply Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#t:ReturnReplyCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSASLMechanism\u003c/a\u003e\u003c/code\u003e is described by its name (\u003ccode\u003e\u003ca\u003esaslName\u003c/a\u003e\u003c/code\u003e), its initial response (\u003ccode\u003e\u003ca\u003esaslInitialResponse\u003c/a\u003e\u003c/code\u003e), and an optional function (\u003ccode\u003e\u003ca\u003esaslChallengeFunc\u003c/a\u003e\u003c/code\u003e) that\n transforms a security challenge provided by the server into response, which is then sent back to the server for verification.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "SASLMechanism",
          "package": "amqp",
          "source": "src/Network-AMQP-Internal.html#SASLMechanism",
          "type": "data"
        },
        "index": {
          "description": "SASLMechanism is described by its name saslName its initial response saslInitialResponse and an optional function saslChallengeFunc that transforms security challenge provided by the server into response which is then sent back to the server for verification",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "SASLMechanism",
          "package": "amqp",
          "partial": "SASLMechanism",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#t:SASLMechanism"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the kind of TLS connection to establish.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "TLSSettings",
          "package": "amqp",
          "source": "src/Network-AMQP-Internal.html#TLSSettings",
          "type": "data"
        },
        "index": {
          "description": "Represents the kind of TLS connection to establish",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "TLSSettings",
          "package": "amqp",
          "partial": "TLSSettings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#t:TLSSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "Ack",
          "package": "amqp",
          "signature": "Ack",
          "source": "src/Network-AMQP.html#Ack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "Ack",
          "package": "amqp",
          "partial": "Ack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:Ack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e contains the reason why the channel was closed\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "ChannelClosedException",
          "package": "amqp",
          "signature": "ChannelClosedException String",
          "source": "src/Network-AMQP-Internal.html#AMQPException",
          "type": "function"
        },
        "index": {
          "description": "the String contains the reason why the channel was closed",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "ChannelClosedException",
          "package": "amqp",
          "partial": "Channel Closed Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:ChannelClosedException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString may contain a reason\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "ConnectionClosedException",
          "package": "amqp",
          "signature": "ConnectionClosedException String",
          "source": "src/Network-AMQP-Internal.html#AMQPException",
          "type": "function"
        },
        "index": {
          "description": "String may contain reason",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "ConnectionClosedException",
          "package": "amqp",
          "partial": "Connection Closed Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:ConnectionClosedException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "ConnectionOpts",
          "package": "amqp",
          "signature": "ConnectionOpts",
          "source": "src/Network-AMQP-Internal.html#ConnectionOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "ConnectionOpts",
          "package": "amqp",
          "partial": "Connection Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:ConnectionOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "Envelope",
          "package": "amqp",
          "signature": "Envelope",
          "source": "src/Network-AMQP-Internal.html#Envelope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "Envelope",
          "package": "amqp",
          "partial": "Envelope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:Envelope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "ExchangeOpts",
          "package": "amqp",
          "signature": "ExchangeOpts",
          "source": "src/Network-AMQP.html#ExchangeOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "ExchangeOpts",
          "package": "amqp",
          "partial": "Exchange Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:ExchangeOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "Message",
          "package": "amqp",
          "signature": "Message",
          "source": "src/Network-AMQP-Internal.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "Message",
          "package": "amqp",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "NoAck",
          "package": "amqp",
          "signature": "NoAck",
          "source": "src/Network-AMQP.html#Ack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "NoAck",
          "package": "amqp",
          "partial": "No Ack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:NoAck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "NoConsumers",
          "package": "amqp",
          "signature": "NoConsumers Text",
          "source": "src/Network-AMQP-Internal.html#ReturnReplyCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "NoConsumers",
          "package": "amqp",
          "partial": "No Consumers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:NoConsumers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe message may be lost after server restarts\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "NonPersistent",
          "package": "amqp",
          "signature": "NonPersistent",
          "source": "src/Network-AMQP-Internal.html#DeliveryMode",
          "type": "function"
        },
        "index": {
          "description": "the message may be lost after server restarts",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "NonPersistent",
          "package": "amqp",
          "partial": "Non Persistent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:NonPersistent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "NotFound",
          "package": "amqp",
          "signature": "NotFound Text",
          "source": "src/Network-AMQP-Internal.html#ReturnReplyCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "NotFound",
          "package": "amqp",
          "partial": "Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:NotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe message will survive server restarts (if the queue is durable)\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "Persistent",
          "package": "amqp",
          "signature": "Persistent",
          "source": "src/Network-AMQP-Internal.html#DeliveryMode",
          "type": "function"
        },
        "index": {
          "description": "the message will survive server restarts if the queue is durable",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "Persistent",
          "package": "amqp",
          "partial": "Persistent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:Persistent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "PublishError",
          "package": "amqp",
          "signature": "PublishError",
          "source": "src/Network-AMQP-Internal.html#PublishError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "PublishError",
          "package": "amqp",
          "partial": "Publish Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:PublishError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "QueueOpts",
          "package": "amqp",
          "signature": "QueueOpts",
          "source": "src/Network-AMQP.html#QueueOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "QueueOpts",
          "package": "amqp",
          "partial": "Queue Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:QueueOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "SASLMechanism",
          "package": "amqp",
          "signature": "SASLMechanism",
          "source": "src/Network-AMQP-Internal.html#SASLMechanism",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "SASLMechanism",
          "package": "amqp",
          "partial": "SASLMechanism",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:SASLMechanism"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequire trusted certificates (Recommended).\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "TLSTrusted",
          "package": "amqp",
          "signature": "TLSTrusted",
          "source": "src/Network-AMQP-Internal.html#TLSSettings",
          "type": "function"
        },
        "index": {
          "description": "Require trusted certificates Recommended",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "TLSTrusted",
          "package": "amqp",
          "partial": "TLSTrusted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:TLSTrusted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllow untrusted certificates (Discouraged. Vulnerable to man-in-the-middle attacks)\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "TLSUntrusted",
          "package": "amqp",
          "signature": "TLSUntrusted",
          "source": "src/Network-AMQP-Internal.html#TLSSettings",
          "type": "function"
        },
        "index": {
          "description": "Allow untrusted certificates Discouraged Vulnerable to man-in-the-middle attacks",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "TLSUntrusted",
          "package": "amqp",
          "partial": "TLSUntrusted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:TLSUntrusted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "Unroutable",
          "package": "amqp",
          "signature": "Unroutable Text",
          "source": "src/Network-AMQP-Internal.html#ReturnReplyCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "Unroutable",
          "package": "amqp",
          "partial": "Unroutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:Unroutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAcknowledges a single message. This is a wrapper for \u003ccode\u003e\u003ca\u003eackMsg\u003c/a\u003e\u003c/code\u003e in case you have the \u003ccode\u003e\u003ca\u003eEnvelope\u003c/a\u003e\u003c/code\u003e at hand.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "ackEnv",
          "package": "amqp",
          "signature": "Envelope -\u003e IO ()",
          "source": "src/Network-AMQP.html#ackEnv",
          "type": "function"
        },
        "index": {
          "description": "Acknowledges single message This is wrapper for ackMsg in case you have the Envelope at hand",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "ackEnv",
          "normalized": "Envelope-\u003eIO()",
          "package": "amqp",
          "partial": "Env",
          "signature": "Envelope-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:ackEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eackMsg chan deliveryTag multiple\u003c/code\u003e acknowledges one or more messages. A message MUST not be acknowledged more than once.\n\u003c/p\u003e\u003cp\u003eif \u003ccode\u003emultiple==True\u003c/code\u003e, the \u003ccode\u003edeliverTag\u003c/code\u003e is treated as \"up to and including\", so that the client can acknowledge multiple messages with a single method call. If \u003ccode\u003emultiple==False\u003c/code\u003e, \u003ccode\u003edeliveryTag\u003c/code\u003e refers to a single message.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003emultiple==True\u003c/code\u003e, and \u003ccode\u003edeliveryTag==0\u003c/code\u003e, tells the server to acknowledge all outstanding mesages.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "ackMsg",
          "package": "amqp",
          "signature": "Channel -\u003e LongLongInt -\u003e Bool -\u003e IO ()",
          "source": "src/Network-AMQP.html#ackMsg",
          "type": "function"
        },
        "index": {
          "description": "ackMsg chan deliveryTag multiple acknowledges one or more messages message MUST not be acknowledged more than once if multiple True the deliverTag is treated as up to and including so that the client can acknowledge multiple messages with single method call If multiple False deliveryTag refers to single message If multiple True and deliveryTag tells the server to acknowledge all outstanding mesages",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "ackMsg",
          "normalized": "Channel-\u003eLongLongInt-\u003eBool-\u003eIO()",
          "package": "amqp",
          "partial": "Msg",
          "signature": "Channel-\u003eLongLongInt-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:ackMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eaddConnectionClosedHandler conn ifClosed handler\u003c/code\u003e adds a \u003ccode\u003ehandler\u003c/code\u003e that will be called after the connection is closed (either by calling \u003ccode\u003ecloseConnection\u003c/code\u003e or by an exception). If the \u003ccode\u003eifClosed\u003c/code\u003e parameter is True and the connection is already closed, the handler will be called immediately. If \u003ccode\u003eifClosed == False\u003c/code\u003e and the connection is already closed, the handler will never be called\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "addConnectionClosedHandler",
          "package": "amqp",
          "signature": "Connection -\u003e Bool -\u003e IO () -\u003e IO ()",
          "source": "src/Network-AMQP-Internal.html#addConnectionClosedHandler",
          "type": "function"
        },
        "index": {
          "description": "addConnectionClosedHandler conn ifClosed handler adds handler that will be called after the connection is closed either by calling closeConnection or by an exception If the ifClosed parameter is True and the connection is already closed the handler will be called immediately If ifClosed False and the connection is already closed the handler will never be called",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "addConnectionClosedHandler",
          "normalized": "Connection-\u003eBool-\u003eIO()-\u003eIO()",
          "package": "amqp",
          "partial": "Connection Closed Handler",
          "signature": "Connection-\u003eBool-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:addConnectionClosedHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eregisters a callback function that is called whenever a message is returned from the broker ('basic.return').\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "addReturnListener",
          "package": "amqp",
          "signature": "Channel -\u003e ((Message, PublishError) -\u003e IO ()) -\u003e IO ()",
          "source": "src/Network-AMQP-Internal.html#addReturnListener",
          "type": "function"
        },
        "index": {
          "description": "registers callback function that is called whenever message is returned from the broker basic.return",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "addReturnListener",
          "normalized": "Channel-\u003e((Message,PublishError)-\u003eIO())-\u003eIO()",
          "package": "amqp",
          "partial": "Return Listener",
          "signature": "Channel-\u003e((Message,PublishError)-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:addReturnListener"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eAMQPLAIN\u003c/code\u003e SASL mechanism. See \u003ca\u003ehttp://www.rabbitmq.com/authentication.html\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "amqplain",
          "package": "amqp",
          "signature": "Text -\u003e Text -\u003e SASLMechanism",
          "source": "src/Network-AMQP.html#amqplain",
          "type": "function"
        },
        "index": {
          "description": "The AMQPLAIN SASL mechanism See http www.rabbitmq.com authentication.html",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "amqplain",
          "normalized": "Text-\u003eText-\u003eSASLMechanism",
          "package": "amqp",
          "signature": "Text-\u003eText-\u003eSASLMechanism",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:amqplain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebindExchange chan destinationName sourceName routingKey\u003c/code\u003e binds the exchange to the exchange using the provided routing key\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "bindExchange",
          "package": "amqp",
          "signature": "Channel -\u003e Text -\u003e Text -\u003e Text -\u003e IO ()",
          "source": "src/Network-AMQP.html#bindExchange",
          "type": "function"
        },
        "index": {
          "description": "bindExchange chan destinationName sourceName routingKey binds the exchange to the exchange using the provided routing key",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "bindExchange",
          "normalized": "Channel-\u003eText-\u003eText-\u003eText-\u003eIO()",
          "package": "amqp",
          "partial": "Exchange",
          "signature": "Channel-\u003eText-\u003eText-\u003eText-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:bindExchange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean extended version of \u003ccode\u003ebindExchange\u003c/code\u003e that allows you to include arbitrary arguments. This is useful to use the \u003ccode\u003eheaders\u003c/code\u003e exchange-type.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "bindExchange'",
          "package": "amqp",
          "signature": "Channel -\u003e Text -\u003e Text -\u003e Text -\u003e FieldTable -\u003e IO ()",
          "source": "src/Network-AMQP.html#bindExchange%27",
          "type": "function"
        },
        "index": {
          "description": "an extended version of bindExchange that allows you to include arbitrary arguments This is useful to use the headers exchange-type",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "bindExchange'",
          "normalized": "Channel-\u003eText-\u003eText-\u003eText-\u003eFieldTable-\u003eIO()",
          "package": "amqp",
          "partial": "Exchange'",
          "signature": "Channel-\u003eText-\u003eText-\u003eText-\u003eFieldTable-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:bindExchange-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebindQueue chan queue exchange routingKey\u003c/code\u003e binds the queue to the exchange using the provided routing key. If \u003ccode\u003eexchange\u003c/code\u003e is the empty string, the default exchange will be used.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "bindQueue",
          "package": "amqp",
          "signature": "Channel -\u003e Text -\u003e Text -\u003e Text -\u003e IO ()",
          "source": "src/Network-AMQP.html#bindQueue",
          "type": "function"
        },
        "index": {
          "description": "bindQueue chan queue exchange routingKey binds the queue to the exchange using the provided routing key If exchange is the empty string the default exchange will be used",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "bindQueue",
          "normalized": "Channel-\u003eText-\u003eText-\u003eText-\u003eIO()",
          "package": "amqp",
          "partial": "Queue",
          "signature": "Channel-\u003eText-\u003eText-\u003eText-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:bindQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean extended version of \u003ccode\u003ebindQueue\u003c/code\u003e that allows you to include arbitrary arguments. This is useful to use the \u003ccode\u003eheaders\u003c/code\u003e exchange-type.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "bindQueue'",
          "package": "amqp",
          "signature": "Channel -\u003e Text -\u003e Text -\u003e Text -\u003e FieldTable -\u003e IO ()",
          "source": "src/Network-AMQP.html#bindQueue%27",
          "type": "function"
        },
        "index": {
          "description": "an extended version of bindQueue that allows you to include arbitrary arguments This is useful to use the headers exchange-type",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "bindQueue'",
          "normalized": "Channel-\u003eText-\u003eText-\u003eText-\u003eFieldTable-\u003eIO()",
          "package": "amqp",
          "partial": "Queue'",
          "signature": "Channel-\u003eText-\u003eText-\u003eText-\u003eFieldTable-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:bindQueue-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estops a consumer that was started with \u003ccode\u003e\u003ca\u003econsumeMsgs\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "cancelConsumer",
          "package": "amqp",
          "signature": "Channel -\u003e ConsumerTag -\u003e IO ()",
          "source": "src/Network-AMQP.html#cancelConsumer",
          "type": "function"
        },
        "index": {
          "description": "stops consumer that was started with consumeMsgs",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "cancelConsumer",
          "normalized": "Channel-\u003eConsumerTag-\u003eIO()",
          "package": "amqp",
          "partial": "Consumer",
          "signature": "Channel-\u003eConsumerTag-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:cancelConsumer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecloses a connection\n\u003c/p\u003e\u003cp\u003eMake sure to call this function before your program exits to ensure that all published messages are received by the server.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "closeConnection",
          "package": "amqp",
          "signature": "Connection -\u003e IO ()",
          "source": "src/Network-AMQP-Internal.html#closeConnection",
          "type": "function"
        },
        "index": {
          "description": "closes connection Make sure to call this function before your program exits to ensure that all published messages are received by the server",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "closeConnection",
          "normalized": "Connection-\u003eIO()",
          "package": "amqp",
          "partial": "Connection",
          "signature": "Connection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:closeConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eSASLMechanism\u003c/a\u003e\u003c/code\u003es to use for authenticating with the broker.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "coAuth",
          "package": "amqp",
          "signature": "[SASLMechanism]",
          "source": "src/Network-AMQP-Internal.html#ConnectionOpts",
          "type": "function"
        },
        "index": {
          "description": "The SASLMechanism to use for authenticating with the broker",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "coAuth",
          "normalized": "[SASLMechanism]",
          "package": "amqp",
          "partial": "Auth",
          "signature": "[SASLMechanism]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:coAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe delay in seconds, after which the client expects a heartbeat frame from the broker. If \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the value suggested by the broker is used. Use \u003ccode\u003eJust 0\u003c/code\u003e to disable the heartbeat mechnism.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "coHeartbeatDelay",
          "package": "amqp",
          "signature": "(Maybe Word16)",
          "source": "src/Network-AMQP-Internal.html#ConnectionOpts",
          "type": "function"
        },
        "index": {
          "description": "The delay in seconds after which the client expects heartbeat frame from the broker If Nothing the value suggested by the broker is used Use Just to disable the heartbeat mechnism",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "coHeartbeatDelay",
          "package": "amqp",
          "partial": "Heartbeat Delay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:coHeartbeatDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum number of channels the client will use.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "coMaxChannel",
          "package": "amqp",
          "signature": "(Maybe Word16)",
          "source": "src/Network-AMQP-Internal.html#ConnectionOpts",
          "type": "function"
        },
        "index": {
          "description": "The maximum number of channels the client will use",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "coMaxChannel",
          "package": "amqp",
          "partial": "Max Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:coMaxChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum frame size to be used. If not specified, no limit is assumed.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "coMaxFrameSize",
          "package": "amqp",
          "signature": "(Maybe Word32)",
          "source": "src/Network-AMQP-Internal.html#ConnectionOpts",
          "type": "function"
        },
        "index": {
          "description": "The maximum frame size to be used If not specified no limit is assumed",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "coMaxFrameSize",
          "package": "amqp",
          "partial": "Max Frame Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:coMaxFrameSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of host-port pairs. Useful in a clustered setup to connect to the first available host.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "coServers",
          "package": "amqp",
          "signature": "[(String, PortNumber)]",
          "source": "src/Network-AMQP-Internal.html#ConnectionOpts",
          "type": "function"
        },
        "index": {
          "description": "list of host-port pairs Useful in clustered setup to connect to the first available host",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "coServers",
          "normalized": "[(String,PortNumber)]",
          "package": "amqp",
          "partial": "Servers",
          "signature": "[(String,PortNumber)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:coServers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether or not to connect to servers using TLS. See http:\u003cem/\u003ewww.rabbitmq.com/ssl.html for details.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "coTLSSettings",
          "package": "amqp",
          "signature": "Maybe TLSSettings",
          "source": "src/Network-AMQP-Internal.html#ConnectionOpts",
          "type": "function"
        },
        "index": {
          "description": "Whether or not to connect to servers using TLS See http www.rabbitmq.com ssl.html for details",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "coTLSSettings",
          "package": "amqp",
          "partial": "TLSSettings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:coTLSSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe VHost to connect to.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "coVHost",
          "package": "amqp",
          "signature": "Text",
          "source": "src/Network-AMQP-Internal.html#ConnectionOpts",
          "type": "function"
        },
        "index": {
          "description": "The VHost to connect to",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "coVHost",
          "package": "amqp",
          "partial": "VHost",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:coVHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003econsumeMsgs chan queue ack callback\u003c/code\u003e subscribes to the given queue and returns a consumerTag. For any incoming message, the callback will be run. If \u003ccode\u003eack == \u003ccode\u003e\u003ca\u003eAck\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e you will have to acknowledge all incoming messages (see \u003ccode\u003e\u003ca\u003eackMsg\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eackEnv\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eNOTE: The callback will be run on the same thread as the channel thread (every channel spawns its own thread to listen for incoming data) so DO NOT perform any request on \u003ccode\u003echan\u003c/code\u003e inside the callback (however, you CAN perform requests on other open channels inside the callback, though I wouldn't recommend it).\n Functions that can safely be called on \u003ccode\u003echan\u003c/code\u003e are \u003ccode\u003e\u003ca\u003eackMsg\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eackEnv\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erejectMsg\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erecoverMsgs\u003c/a\u003e\u003c/code\u003e. If you want to perform anything more complex, it's a good idea to wrap it inside \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "consumeMsgs",
          "package": "amqp",
          "signature": "Channel -\u003e Text -\u003e Ack -\u003e ((Message, Envelope) -\u003e IO ()) -\u003e IO ConsumerTag",
          "source": "src/Network-AMQP.html#consumeMsgs",
          "type": "function"
        },
        "index": {
          "description": "consumeMsgs chan queue ack callback subscribes to the given queue and returns consumerTag For any incoming message the callback will be run If ack Ack you will have to acknowledge all incoming messages see ackMsg and ackEnv NOTE The callback will be run on the same thread as the channel thread every channel spawns its own thread to listen for incoming data so DO NOT perform any request on chan inside the callback however you CAN perform requests on other open channels inside the callback though wouldn recommend it Functions that can safely be called on chan are ackMsg ackEnv rejectMsg recoverMsgs If you want to perform anything more complex it good idea to wrap it inside forkIO",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "consumeMsgs",
          "normalized": "Channel-\u003eText-\u003eAck-\u003e((Message,Envelope)-\u003eIO())-\u003eIO ConsumerTag",
          "package": "amqp",
          "partial": "Msgs",
          "signature": "Channel-\u003eText-\u003eAck-\u003e((Message,Envelope)-\u003eIO())-\u003eIO ConsumerTag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:consumeMsgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean extended version of \u003ccode\u003econsumeMsgs\u003c/code\u003e that allows you to include arbitrary arguments.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "consumeMsgs'",
          "package": "amqp",
          "signature": "Channel -\u003e Text -\u003e Ack -\u003e ((Message, Envelope) -\u003e IO ()) -\u003e FieldTable -\u003e IO ConsumerTag",
          "source": "src/Network-AMQP.html#consumeMsgs%27",
          "type": "function"
        },
        "index": {
          "description": "an extended version of consumeMsgs that allows you to include arbitrary arguments",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "consumeMsgs'",
          "normalized": "Channel-\u003eText-\u003eAck-\u003e((Message,Envelope)-\u003eIO())-\u003eFieldTable-\u003eIO ConsumerTag",
          "package": "amqp",
          "partial": "Msgs'",
          "signature": "Channel-\u003eText-\u003eAck-\u003e((Message,Envelope)-\u003eIO())-\u003eFieldTable-\u003eIO ConsumerTag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:consumeMsgs-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edeclares a new exchange on the AMQP server. Can be used like this: \u003ccode\u003edeclareExchange channel newExchange {exchangeName = \"myExchange\", exchangeType = \"fanout\"}\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "declareExchange",
          "package": "amqp",
          "signature": "Channel -\u003e ExchangeOpts -\u003e IO ()",
          "source": "src/Network-AMQP.html#declareExchange",
          "type": "function"
        },
        "index": {
          "description": "declares new exchange on the AMQP server Can be used like this declareExchange channel newExchange exchangeName myExchange exchangeType fanout",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "declareExchange",
          "normalized": "Channel-\u003eExchangeOpts-\u003eIO()",
          "package": "amqp",
          "partial": "Exchange",
          "signature": "Channel-\u003eExchangeOpts-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:declareExchange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreates a new queue on the AMQP server; can be used like this: \u003ccode\u003edeclareQueue channel newQueue {queueName = \"myQueue\"}\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eReturns a tuple \u003ccode\u003e(queue, messageCount, consumerCount)\u003c/code\u003e.\n \u003ccode\u003equeue\u003c/code\u003e is the name of the new queue (if you don't specify a queue the server will autogenerate one).\n \u003ccode\u003emessageCount\u003c/code\u003e is the number of messages in the queue, which will be zero for newly-created queues. \u003ccode\u003econsumerCount\u003c/code\u003e is the number of active consumers for the queue.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "declareQueue",
          "package": "amqp",
          "signature": "Channel -\u003e QueueOpts -\u003e IO (Text, Int, Int)",
          "source": "src/Network-AMQP.html#declareQueue",
          "type": "function"
        },
        "index": {
          "description": "creates new queue on the AMQP server can be used like this declareQueue channel newQueue queueName myQueue Returns tuple queue messageCount consumerCount queue is the name of the new queue if you don specify queue the server will autogenerate one messageCount is the number of messages in the queue which will be zero for newly-created queues consumerCount is the number of active consumers for the queue",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "declareQueue",
          "normalized": "Channel-\u003eQueueOpts-\u003eIO(Text,Int,Int)",
          "package": "amqp",
          "partial": "Queue",
          "signature": "Channel-\u003eQueueOpts-\u003eIO(Text,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:declareQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs default connection options with the following settings :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Broker: \u003ccode\u003eamqp://guest:guest@localhost:5672/%2F\u003c/code\u003e using the \u003ccode\u003ePLAIN\u003c/code\u003e SASL mechanism\n\u003c/li\u003e\u003cli\u003e max frame size: \u003ccode\u003e131072\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e use the heartbeat delay suggested by the broker\n\u003c/li\u003e\u003cli\u003e no limit on the number of used channels\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.AMQP",
          "name": "defaultConnectionOpts",
          "package": "amqp",
          "signature": "ConnectionOpts",
          "source": "src/Network-AMQP.html#defaultConnectionOpts",
          "type": "function"
        },
        "index": {
          "description": "Constructs default connection options with the following settings Broker amqp guest guest@localhost using the PLAIN SASL mechanism max frame size use the heartbeat delay suggested by the broker no limit on the number of used channels",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "defaultConnectionOpts",
          "package": "amqp",
          "partial": "Connection Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:defaultConnectionOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edeletes the exchange with the provided name\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "deleteExchange",
          "package": "amqp",
          "signature": "Channel -\u003e Text -\u003e IO ()",
          "source": "src/Network-AMQP.html#deleteExchange",
          "type": "function"
        },
        "index": {
          "description": "deletes the exchange with the provided name",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "deleteExchange",
          "normalized": "Channel-\u003eText-\u003eIO()",
          "package": "amqp",
          "partial": "Exchange",
          "signature": "Channel-\u003eText-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:deleteExchange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edeletes the queue; returns the number of messages that were in the queue before deletion\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "deleteQueue",
          "package": "amqp",
          "signature": "Channel -\u003e Text -\u003e IO Word32",
          "source": "src/Network-AMQP.html#deleteQueue",
          "type": "function"
        },
        "index": {
          "description": "deletes the queue returns the number of messages that were in the queue before deletion",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "deleteQueue",
          "normalized": "Channel-\u003eText-\u003eIO Word",
          "package": "amqp",
          "partial": "Queue",
          "signature": "Channel-\u003eText-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:deleteQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "envChannel",
          "package": "amqp",
          "signature": "Channel",
          "source": "src/Network-AMQP-Internal.html#Envelope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "envChannel",
          "package": "amqp",
          "partial": "Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:envChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "envDeliveryTag",
          "package": "amqp",
          "signature": "LongLongInt",
          "source": "src/Network-AMQP-Internal.html#Envelope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "envDeliveryTag",
          "package": "amqp",
          "partial": "Delivery Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:envDeliveryTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "envExchangeName",
          "package": "amqp",
          "signature": "Text",
          "source": "src/Network-AMQP-Internal.html#Envelope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "envExchangeName",
          "package": "amqp",
          "partial": "Exchange Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:envExchangeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "envRedelivered",
          "package": "amqp",
          "signature": "Bool",
          "source": "src/Network-AMQP-Internal.html#Envelope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "envRedelivered",
          "package": "amqp",
          "partial": "Redelivered",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:envRedelivered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "envRoutingKey",
          "package": "amqp",
          "signature": "Text",
          "source": "src/Network-AMQP-Internal.html#Envelope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "envRoutingKey",
          "package": "amqp",
          "partial": "Routing Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:envRoutingKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "errExchange",
          "package": "amqp",
          "signature": "Maybe Text",
          "source": "src/Network-AMQP-Internal.html#PublishError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "errExchange",
          "package": "amqp",
          "partial": "Exchange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:errExchange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "errReplyCode",
          "package": "amqp",
          "signature": "ReturnReplyCode",
          "source": "src/Network-AMQP-Internal.html#PublishError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "errReplyCode",
          "package": "amqp",
          "partial": "Reply Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:errReplyCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "errRoutingKey",
          "package": "amqp",
          "signature": "Text",
          "source": "src/Network-AMQP-Internal.html#PublishError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "errRoutingKey",
          "package": "amqp",
          "partial": "Routing Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:errRoutingKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(default empty); A set of arguments for the declaration. The syntax and semantics of these arguments depends on the server implementation.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "exchangeArguments",
          "package": "amqp",
          "signature": "FieldTable",
          "source": "src/Network-AMQP.html#ExchangeOpts",
          "type": "function"
        },
        "index": {
          "description": "default empty set of arguments for the declaration The syntax and semantics of these arguments depends on the server implementation",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "exchangeArguments",
          "package": "amqp",
          "partial": "Arguments",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:exchangeArguments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(default \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e); If set, the exchange is deleted when all queues have finished using it.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "exchangeAutoDelete",
          "package": "amqp",
          "signature": "Bool",
          "source": "src/Network-AMQP.html#ExchangeOpts",
          "type": "function"
        },
        "index": {
          "description": "default False If set the exchange is deleted when all queues have finished using it",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "exchangeAutoDelete",
          "package": "amqp",
          "partial": "Auto Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:exchangeAutoDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(default \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e); If set when creating a new exchange, the exchange will be marked as durable. Durable exchanges remain active when a server restarts. Non-durable exchanges (transient exchanges) are purged if/when a server restarts.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "exchangeDurable",
          "package": "amqp",
          "signature": "Bool",
          "source": "src/Network-AMQP.html#ExchangeOpts",
          "type": "function"
        },
        "index": {
          "description": "default True If set when creating new exchange the exchange will be marked as durable Durable exchanges remain active when server restarts Non-durable exchanges transient exchanges are purged if when server restarts",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "exchangeDurable",
          "package": "amqp",
          "partial": "Durable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:exchangeDurable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(default \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e); If set, the exchange may not be used directly by publishers, but only when bound to other exchanges. Internal exchanges are used to construct wiring that is not visible to applications.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "exchangeInternal",
          "package": "amqp",
          "signature": "Bool",
          "source": "src/Network-AMQP.html#ExchangeOpts",
          "type": "function"
        },
        "index": {
          "description": "default False If set the exchange may not be used directly by publishers but only when bound to other exchanges Internal exchanges are used to construct wiring that is not visible to applications",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "exchangeInternal",
          "package": "amqp",
          "partial": "Internal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:exchangeInternal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(must be set); the name of the exchange\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "exchangeName",
          "package": "amqp",
          "signature": "Text",
          "source": "src/Network-AMQP.html#ExchangeOpts",
          "type": "function"
        },
        "index": {
          "description": "must be set the name of the exchange",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "exchangeName",
          "package": "amqp",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:exchangeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(default \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e); If set, the server will not create the exchange. The client can use this to check whether an exchange exists without modifying the server state.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "exchangePassive",
          "package": "amqp",
          "signature": "Bool",
          "source": "src/Network-AMQP.html#ExchangeOpts",
          "type": "function"
        },
        "index": {
          "description": "default False If set the server will not create the exchange The client can use this to check whether an exchange exists without modifying the server state",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "exchangePassive",
          "package": "amqp",
          "partial": "Passive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:exchangePassive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(must be set); the type of the exchange (\"fanout\", \"direct\", \"topic\", \"headers\")\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "exchangeType",
          "package": "amqp",
          "signature": "Text",
          "source": "src/Network-AMQP.html#ExchangeOpts",
          "type": "function"
        },
        "index": {
          "description": "must be set the type of the exchange fanout direct topic headers",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "exchangeType",
          "package": "amqp",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:exchangeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eflow chan active\u003c/code\u003e tells the AMQP server to pause or restart the flow of content\n    data. This is a simple flow-control mechanism that a peer can use\n    to avoid overflowing its queues or otherwise finding itself receiving\n    more messages than it can process.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003eactive==True\u003c/code\u003e the server will start sending content data, if \u003ccode\u003eactive==False\u003c/code\u003e the server will stop sending content data.\n\u003c/p\u003e\u003cp\u003eA new channel is always active by default.\n\u003c/p\u003e\u003cp\u003eNOTE: RabbitMQ 1.7 doesn't implement this command.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "flow",
          "package": "amqp",
          "signature": "Channel -\u003e Bool -\u003e IO ()",
          "source": "src/Network-AMQP.html#flow",
          "type": "function"
        },
        "index": {
          "description": "flow chan active tells the AMQP server to pause or restart the flow of content data This is simple flow-control mechanism that peer can use to avoid overflowing its queues or otherwise finding itself receiving more messages than it can process If active True the server will start sending content data if active False the server will stop sending content data new channel is always active by default NOTE RabbitMQ doesn implement this command",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "flow",
          "normalized": "Channel-\u003eBool-\u003eIO()",
          "package": "amqp",
          "signature": "Channel-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:flow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses amqp standard URI of the form \u003ccode\u003eamqp:\u003cem/\u003euser:password\u003c/code\u003ehost:port/vhost\u003ccode\u003e and returns a \u003c/code\u003eConnectionOpts\u003ccode\u003e for use with \u003c/code\u003eopenConnection''\u003ccode\u003e\n | Any of these fields may be empty and will be replaced with defaults from \u003c/code\u003eamqp:\u003cem/\u003eguest:guest\u003ccode\u003elocalhost:5672/\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "fromURI",
          "package": "amqp",
          "signature": "String -\u003e ConnectionOpts",
          "source": "src/Network-AMQP.html#fromURI",
          "type": "function"
        },
        "index": {
          "description": "Parses amqp standard URI of the form amqp user password host port vhost and returns ConnectionOpts for use with openConnection Any of these fields may be empty and will be replaced with defaults from amqp guest guest localhost",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "fromURI",
          "normalized": "String-\u003eConnectionOpts",
          "package": "amqp",
          "partial": "URI",
          "signature": "String-\u003eConnectionOpts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:fromURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetMsg chan ack queue\u003c/code\u003e gets a message from the specified queue. If \u003ccode\u003eack==\u003ccode\u003e\u003ca\u003eAck\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, you have to call \u003ccode\u003e\u003ca\u003eackMsg\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eackEnv\u003c/a\u003e\u003c/code\u003e for any message that you get, otherwise it might be delivered again in the future (by calling \u003ccode\u003e\u003ca\u003erecoverMsgs\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "getMsg",
          "package": "amqp",
          "signature": "Channel -\u003e Ack -\u003e Text -\u003e IO (Maybe (Message, Envelope))",
          "source": "src/Network-AMQP.html#getMsg",
          "type": "function"
        },
        "index": {
          "description": "getMsg chan ack queue gets message from the specified queue If ack Ack you have to call ackMsg or ackEnv for any message that you get otherwise it might be delivered again in the future by calling recoverMsgs",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "getMsg",
          "normalized": "Channel-\u003eAck-\u003eText-\u003eIO(Maybe(Message,Envelope))",
          "package": "amqp",
          "partial": "Msg",
          "signature": "Channel-\u003eAck-\u003eText-\u003eIO(Maybe(Message,Envelope))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:getMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe content of your message\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "msgBody",
          "package": "amqp",
          "signature": "ByteString",
          "source": "src/Network-AMQP-Internal.html#Message",
          "type": "function"
        },
        "index": {
          "description": "the content of your message",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "msgBody",
          "package": "amqp",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:msgBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "msgContentType",
          "package": "amqp",
          "signature": "Maybe Text",
          "source": "src/Network-AMQP-Internal.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "msgContentType",
          "package": "amqp",
          "partial": "Content Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:msgContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "msgCorrelationID",
          "package": "amqp",
          "signature": "Maybe Text",
          "source": "src/Network-AMQP-Internal.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "msgCorrelationID",
          "package": "amqp",
          "partial": "Correlation ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:msgCorrelationID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eDeliveryMode\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "msgDeliveryMode",
          "package": "amqp",
          "signature": "Maybe DeliveryMode",
          "source": "src/Network-AMQP-Internal.html#Message",
          "type": "function"
        },
        "index": {
          "description": "see DeliveryMode",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "msgDeliveryMode",
          "package": "amqp",
          "partial": "Delivery Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:msgDeliveryMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "msgHeaders",
          "package": "amqp",
          "signature": "Maybe FieldTable",
          "source": "src/Network-AMQP-Internal.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "msgHeaders",
          "package": "amqp",
          "partial": "Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:msgHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euse in any way you like; this doesn't affect the way the message is handled\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "msgID",
          "package": "amqp",
          "signature": "Maybe Text",
          "source": "src/Network-AMQP-Internal.html#Message",
          "type": "function"
        },
        "index": {
          "description": "use in any way you like this doesn affect the way the message is handled",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "msgID",
          "package": "amqp",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:msgID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AMQP",
          "name": "msgReplyTo",
          "package": "amqp",
          "signature": "Maybe Text",
          "source": "src/Network-AMQP-Internal.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "msgReplyTo",
          "package": "amqp",
          "partial": "Reply To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:msgReplyTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euse in any way you like; this doesn't affect the way the message is handled\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "msgTimestamp",
          "package": "amqp",
          "signature": "Maybe Timestamp",
          "source": "src/Network-AMQP-Internal.html#Message",
          "type": "function"
        },
        "index": {
          "description": "use in any way you like this doesn affect the way the message is handled",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "msgTimestamp",
          "package": "amqp",
          "partial": "Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:msgTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean \u003ccode\u003e\u003ca\u003eExchangeOpts\u003c/a\u003e\u003c/code\u003e with defaults set; you must override at least the \u003ccode\u003e\u003ca\u003eexchangeName\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eexchangeType\u003c/a\u003e\u003c/code\u003e fields.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "newExchange",
          "package": "amqp",
          "signature": "ExchangeOpts",
          "source": "src/Network-AMQP.html#newExchange",
          "type": "function"
        },
        "index": {
          "description": "an ExchangeOpts with defaults set you must override at least the exchangeName and exchangeType fields",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "newExchange",
          "package": "amqp",
          "partial": "Exchange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:newExchange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea \u003ccode\u003eMsg\u003c/code\u003e with defaults set; you should override at least \u003ccode\u003e\u003ca\u003emsgBody\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "newMsg",
          "package": "amqp",
          "signature": "Message",
          "source": "src/Network-AMQP.html#newMsg",
          "type": "function"
        },
        "index": {
          "description": "Msg with defaults set you should override at least msgBody",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "newMsg",
          "package": "amqp",
          "partial": "Msg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:newMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea \u003ccode\u003e\u003ca\u003eQueueOpts\u003c/a\u003e\u003c/code\u003e with defaults set; you should override at least \u003ccode\u003e\u003ca\u003equeueName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "newQueue",
          "package": "amqp",
          "signature": "QueueOpts",
          "source": "src/Network-AMQP.html#newQueue",
          "type": "function"
        },
        "index": {
          "description": "QueueOpts with defaults set you should override at least queueName",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "newQueue",
          "package": "amqp",
          "partial": "Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:newQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eopens a new channel on the connection\n\u003c/p\u003e\u003cp\u003eThere's currently no closeChannel method, but you can always just close the connection (the maximum number of channels is 65535).\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "openChannel",
          "package": "amqp",
          "signature": "Connection -\u003e IO Channel",
          "source": "src/Network-AMQP-Internal.html#openChannel",
          "type": "function"
        },
        "index": {
          "description": "opens new channel on the connection There currently no closeChannel method but you can always just close the connection the maximum number of channels is",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "openChannel",
          "normalized": "Connection-\u003eIO Channel",
          "package": "amqp",
          "partial": "Channel",
          "signature": "Connection-\u003eIO Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:openChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eopenConnection hostname virtualHost loginName loginPassword\u003c/code\u003e opens a connection to an AMQP server running on \u003ccode\u003ehostname\u003c/code\u003e.\n \u003ccode\u003evirtualHost\u003c/code\u003e is used as a namespace for AMQP resources (default is \"/\"), so different applications could use multiple virtual hosts on the same AMQP server.\n\u003c/p\u003e\u003cp\u003eYou must call \u003ccode\u003e\u003ca\u003ecloseConnection\u003c/a\u003e\u003c/code\u003e before your program exits to ensure that all published messages are received by the server.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eloginName\u003c/code\u003e and \u003ccode\u003eloginPassword\u003c/code\u003e will be used to authenticate via the \u003ccode\u003ePLAIN\u003c/code\u003e SASL mechanism.\n\u003c/p\u003e\u003cp\u003eNOTE: If the login name, password or virtual host are invalid, this method will throw a \u003ccode\u003e\u003ca\u003eConnectionClosedException\u003c/a\u003e\u003c/code\u003e. The exception will not contain a reason why the connection was closed, so you'll have to find out yourself.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "openConnection",
          "package": "amqp",
          "signature": "String -\u003e Text -\u003e Text -\u003e Text -\u003e IO Connection",
          "source": "src/Network-AMQP.html#openConnection",
          "type": "function"
        },
        "index": {
          "description": "openConnection hostname virtualHost loginName loginPassword opens connection to an AMQP server running on hostname virtualHost is used as namespace for AMQP resources default is so different applications could use multiple virtual hosts on the same AMQP server You must call closeConnection before your program exits to ensure that all published messages are received by the server The loginName and loginPassword will be used to authenticate via the PLAIN SASL mechanism NOTE If the login name password or virtual host are invalid this method will throw ConnectionClosedException The exception will not contain reason why the connection was closed so you ll have to find out yourself",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "openConnection",
          "normalized": "String-\u003eText-\u003eText-\u003eText-\u003eIO Connection",
          "package": "amqp",
          "partial": "Connection",
          "signature": "String-\u003eText-\u003eText-\u003eText-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:openConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esame as \u003ccode\u003e\u003ca\u003eopenConnection\u003c/a\u003e\u003c/code\u003e but allows you to specify a non-default port-number as the 2nd parameter\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "openConnection'",
          "package": "amqp",
          "signature": "String -\u003e PortNumber -\u003e Text -\u003e Text -\u003e Text -\u003e IO Connection",
          "source": "src/Network-AMQP.html#openConnection%27",
          "type": "function"
        },
        "index": {
          "description": "same as openConnection but allows you to specify non-default port-number as the nd parameter",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "openConnection'",
          "normalized": "String-\u003ePortNumber-\u003eText-\u003eText-\u003eText-\u003eIO Connection",
          "package": "amqp",
          "partial": "Connection'",
          "signature": "String-\u003ePortNumber-\u003eText-\u003eText-\u003eText-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:openConnection-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpens a connection to a broker specified by the given \u003ccode\u003e\u003ca\u003eConnectionOpts\u003c/a\u003e\u003c/code\u003e parameter.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "openConnection''",
          "package": "amqp",
          "signature": "ConnectionOpts -\u003e IO Connection",
          "source": "src/Network-AMQP-Internal.html#openConnection%27%27",
          "type": "function"
        },
        "index": {
          "description": "Opens connection to broker specified by the given ConnectionOpts parameter",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "openConnection''",
          "normalized": "ConnectionOpts-\u003eIO Connection",
          "package": "amqp",
          "partial": "Connection''",
          "signature": "ConnectionOpts-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:openConnection-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003ePLAIN\u003c/code\u003e SASL mechanism. See \u003ca\u003eRFC4616\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "plain",
          "package": "amqp",
          "signature": "Text -\u003e Text -\u003e SASLMechanism",
          "source": "src/Network-AMQP.html#plain",
          "type": "function"
        },
        "index": {
          "description": "The PLAIN SASL mechanism See RFC4616",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "plain",
          "normalized": "Text-\u003eText-\u003eSASLMechanism",
          "package": "amqp",
          "signature": "Text-\u003eText-\u003eSASLMechanism",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:plain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epublishMsg chan exchange routingKey msg\u003c/code\u003e publishes \u003ccode\u003emsg\u003c/code\u003e to the exchange with the provided \u003ccode\u003eexchange\u003c/code\u003e. The effect of \u003ccode\u003eroutingKey\u003c/code\u003e depends on the type of the exchange.\n\u003c/p\u003e\u003cp\u003eNOTE: This method may temporarily block if the AMQP server requested us to stop sending content data (using the flow control mechanism). So don't rely on this method returning immediately.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "publishMsg",
          "package": "amqp",
          "signature": "Channel -\u003e Text -\u003e Text -\u003e Message -\u003e IO ()",
          "source": "src/Network-AMQP.html#publishMsg",
          "type": "function"
        },
        "index": {
          "description": "publishMsg chan exchange routingKey msg publishes msg to the exchange with the provided exchange The effect of routingKey depends on the type of the exchange NOTE This method may temporarily block if the AMQP server requested us to stop sending content data using the flow control mechanism So don rely on this method returning immediately",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "publishMsg",
          "normalized": "Channel-\u003eText-\u003eText-\u003eMessage-\u003eIO()",
          "package": "amqp",
          "partial": "Msg",
          "signature": "Channel-\u003eText-\u003eText-\u003eMessage-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:publishMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003epublishMsg\u003c/a\u003e\u003c/code\u003e, but additionally allows you to specify whether the \u003ccode\u003emandatory\u003c/code\u003e flag should be set.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "publishMsg'",
          "package": "amqp",
          "signature": "Channel -\u003e Text -\u003e Text -\u003e Bool -\u003e Message -\u003e IO ()",
          "source": "src/Network-AMQP.html#publishMsg%27",
          "type": "function"
        },
        "index": {
          "description": "Like publishMsg but additionally allows you to specify whether the mandatory flag should be set",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "publishMsg'",
          "normalized": "Channel-\u003eText-\u003eText-\u003eBool-\u003eMessage-\u003eIO()",
          "package": "amqp",
          "partial": "Msg'",
          "signature": "Channel-\u003eText-\u003eText-\u003eBool-\u003eMessage-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:publishMsg-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eremove all messages from the queue; returns the number of messages that were in the queue\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "purgeQueue",
          "package": "amqp",
          "signature": "Channel -\u003e Text -\u003e IO Word32",
          "source": "src/Network-AMQP.html#purgeQueue",
          "type": "function"
        },
        "index": {
          "description": "remove all messages from the queue returns the number of messages that were in the queue",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "purgeQueue",
          "normalized": "Channel-\u003eText-\u003eIO Word",
          "package": "amqp",
          "partial": "Queue",
          "signature": "Channel-\u003eText-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:purgeQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eqos chan prefetchSize prefetchCount\u003c/code\u003e limits the amount of data the server\n delivers before requiring acknowledgements. \u003ccode\u003eprefetchSize\u003c/code\u003e specifies the\n number of bytes and \u003ccode\u003eprefetchCount\u003c/code\u003e the number of messages. In both cases\n the value 0 means unlimited.\n\u003c/p\u003e\u003cp\u003eNOTE: RabbitMQ does not implement prefetchSize and will throw an exception if it doesn't equal 0.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "qos",
          "package": "amqp",
          "signature": "Channel -\u003e Word32 -\u003e Word16 -\u003e IO ()",
          "source": "src/Network-AMQP.html#qos",
          "type": "function"
        },
        "index": {
          "description": "qos chan prefetchSize prefetchCount limits the amount of data the server delivers before requiring acknowledgements prefetchSize specifies the number of bytes and prefetchCount the number of messages In both cases the value means unlimited NOTE RabbitMQ does not implement prefetchSize and will throw an exception if it doesn equal",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "qos",
          "normalized": "Channel-\u003eWord-\u003eWord-\u003eIO()",
          "package": "amqp",
          "signature": "Channel-\u003eWord-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:qos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(default \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e); If set, the queue is deleted when all consumers have finished using it. Last consumer can be cancelled either explicitly or because its channel is closed. If there was no consumer ever on the queue, it won't be deleted.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "queueAutoDelete",
          "package": "amqp",
          "signature": "Bool",
          "source": "src/Network-AMQP.html#QueueOpts",
          "type": "function"
        },
        "index": {
          "description": "default False If set the queue is deleted when all consumers have finished using it Last consumer can be cancelled either explicitly or because its channel is closed If there was no consumer ever on the queue it won be deleted",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "queueAutoDelete",
          "package": "amqp",
          "partial": "Auto Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:queueAutoDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(default \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e); If set when creating a new queue, the queue will be marked as durable. Durable queues remain active when a server restarts. Non-durable queues (transient queues) are purged if/when a server restarts. Note that durable queues do not necessarily hold persistent messages, although it does not make sense to send persistent messages to a transient queue.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "queueDurable",
          "package": "amqp",
          "signature": "Bool",
          "source": "src/Network-AMQP.html#QueueOpts",
          "type": "function"
        },
        "index": {
          "description": "default True If set when creating new queue the queue will be marked as durable Durable queues remain active when server restarts Non-durable queues transient queues are purged if when server restarts Note that durable queues do not necessarily hold persistent messages although it does not make sense to send persistent messages to transient queue",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "queueDurable",
          "package": "amqp",
          "partial": "Durable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:queueDurable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(default \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e); Exclusive queues may only be consumed from by the current connection. Setting the \u003ccode\u003eexclusive\u003c/code\u003e flag always implies 'auto-delete'.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "queueExclusive",
          "package": "amqp",
          "signature": "Bool",
          "source": "src/Network-AMQP.html#QueueOpts",
          "type": "function"
        },
        "index": {
          "description": "default False Exclusive queues may only be consumed from by the current connection Setting the exclusive flag always implies auto-delete",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "queueExclusive",
          "package": "amqp",
          "partial": "Exclusive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:queueExclusive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(default empty): Headers to use when creating this queue, such as \u003ccode\u003ex-message-ttl\u003c/code\u003e or \u003ccode\u003ex-dead-letter-exchange\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "queueHeaders",
          "package": "amqp",
          "signature": "FieldTable",
          "source": "src/Network-AMQP.html#QueueOpts",
          "type": "function"
        },
        "index": {
          "description": "default empty Headers to use when creating this queue such as x-message-ttl or x-dead-letter-exchange",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "queueHeaders",
          "package": "amqp",
          "partial": "Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:queueHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(default \"\"); the name of the queue; if left empty, the server will generate a new name and return it from the \u003ccode\u003e\u003ca\u003edeclareQueue\u003c/a\u003e\u003c/code\u003e method\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "queueName",
          "package": "amqp",
          "signature": "Text",
          "source": "src/Network-AMQP.html#QueueOpts",
          "type": "function"
        },
        "index": {
          "description": "default the name of the queue if left empty the server will generate new name and return it from the declareQueue method",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "queueName",
          "package": "amqp",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:queueName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(default \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e); If set, the server will not create the queue.  The client can use this to check whether a queue exists without modifying the server state.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "queuePassive",
          "package": "amqp",
          "signature": "Bool",
          "source": "src/Network-AMQP.html#QueueOpts",
          "type": "function"
        },
        "index": {
          "description": "default False If set the server will not create the queue The client can use this to check whether queue exists without modifying the server state",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "queuePassive",
          "package": "amqp",
          "partial": "Passive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:queuePassive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eRABBIT-CR-DEMO\u003c/code\u003e SASL mechanism needs to be explicitly enabled on the RabbitMQ server and should only be used for demonstration purposes of the challenge-response cycle.\n See \u003ca\u003ehttp://www.rabbitmq.com/authentication.html\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "rabbitCRdemo",
          "package": "amqp",
          "signature": "Text -\u003e Text -\u003e SASLMechanism",
          "source": "src/Network-AMQP.html#rabbitCRdemo",
          "type": "function"
        },
        "index": {
          "description": "The RABBIT-CR-DEMO SASL mechanism needs to be explicitly enabled on the RabbitMQ server and should only be used for demonstration purposes of the challenge-response cycle See http www.rabbitmq.com authentication.html",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "rabbitCRdemo",
          "normalized": "Text-\u003eText-\u003eSASLMechanism",
          "package": "amqp",
          "partial": "CRdemo",
          "signature": "Text-\u003eText-\u003eSASLMechanism",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:rabbitCRdemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erecoverMsgs chan requeue\u003c/code\u003e asks the broker to redeliver all messages that were received but not acknowledged on the specified channel.\nIf \u003ccode\u003erequeue==False\u003c/code\u003e, the message will be redelivered to the original recipient. If \u003ccode\u003erequeue==True\u003c/code\u003e, the server will attempt to requeue the message, potentially then delivering it to an alternative subscriber.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "recoverMsgs",
          "package": "amqp",
          "signature": "Channel -\u003e Bool -\u003e IO ()",
          "source": "src/Network-AMQP.html#recoverMsgs",
          "type": "function"
        },
        "index": {
          "description": "recoverMsgs chan requeue asks the broker to redeliver all messages that were received but not acknowledged on the specified channel If requeue False the message will be redelivered to the original recipient If requeue True the server will attempt to requeue the message potentially then delivering it to an alternative subscriber",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "recoverMsgs",
          "normalized": "Channel-\u003eBool-\u003eIO()",
          "package": "amqp",
          "partial": "Msgs",
          "signature": "Channel-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:recoverMsgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReject a message. This is a wrapper for \u003ccode\u003e\u003ca\u003erejectMsg\u003c/a\u003e\u003c/code\u003e in case you have the \u003ccode\u003e\u003ca\u003eEnvelope\u003c/a\u003e\u003c/code\u003e at hand.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "rejectEnv",
          "package": "amqp",
          "signature": "Envelope-\u003e Bool-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Reject message This is wrapper for rejectMsg in case you have the Envelope at hand",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "rejectEnv",
          "normalized": "Envelope-\u003eBool-\u003eIO()",
          "package": "amqp",
          "partial": "Env",
          "signature": "Envelope-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:rejectEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erejectMsg chan deliveryTag requeue\u003c/code\u003e allows a client to reject a message. It can be used to interrupt and cancel large incoming messages, or return untreatable  messages to their original queue. If \u003ccode\u003erequeue==False\u003c/code\u003e, the message will be discarded.  If it is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the server will attempt to requeue the message.\n\u003c/p\u003e\u003cp\u003eNOTE: RabbitMQ 1.7 doesn't implement this command\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "rejectMsg",
          "package": "amqp",
          "signature": "Channel -\u003e LongLongInt -\u003e Bool -\u003e IO ()",
          "source": "src/Network-AMQP.html#rejectMsg",
          "type": "function"
        },
        "index": {
          "description": "rejectMsg chan deliveryTag requeue allows client to reject message It can be used to interrupt and cancel large incoming messages or return untreatable messages to their original queue If requeue False the message will be discarded If it is True the server will attempt to requeue the message NOTE RabbitMQ doesn implement this command",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "rejectMsg",
          "normalized": "Channel-\u003eLongLongInt-\u003eBool-\u003eIO()",
          "package": "amqp",
          "partial": "Msg",
          "signature": "Channel-\u003eLongLongInt-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:rejectMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echallenge processing function\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "saslChallengeFunc",
          "package": "amqp",
          "signature": "(Maybe (ByteString -\u003e IO ByteString))",
          "source": "src/Network-AMQP-Internal.html#SASLMechanism",
          "type": "function"
        },
        "index": {
          "description": "challenge processing function",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "saslChallengeFunc",
          "normalized": "(Maybe(ByteString-\u003eIO ByteString))",
          "package": "amqp",
          "partial": "Challenge Func",
          "signature": "(Maybe(ByteString-\u003eIO ByteString))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:saslChallengeFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einitial response\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "saslInitialResponse",
          "package": "amqp",
          "signature": "ByteString",
          "source": "src/Network-AMQP-Internal.html#SASLMechanism",
          "type": "function"
        },
        "index": {
          "description": "initial response",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "saslInitialResponse",
          "package": "amqp",
          "partial": "Initial Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:saslInitialResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emechanism name\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "saslName",
          "package": "amqp",
          "signature": "Text",
          "source": "src/Network-AMQP-Internal.html#SASLMechanism",
          "type": "function"
        },
        "index": {
          "description": "mechanism name",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "saslName",
          "package": "amqp",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:saslName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis method commits all messages published and acknowledged in the current transaction.  A new transaction starts immediately after a commit.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "txCommit",
          "package": "amqp",
          "signature": "Channel -\u003e IO ()",
          "source": "src/Network-AMQP.html#txCommit",
          "type": "function"
        },
        "index": {
          "description": "This method commits all messages published and acknowledged in the current transaction new transaction starts immediately after commit",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "txCommit",
          "normalized": "Channel-\u003eIO()",
          "package": "amqp",
          "partial": "Commit",
          "signature": "Channel-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:txCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis method abandons all messages published and acknowledged in the current transaction. A new transaction starts immediately after a rollback.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "txRollback",
          "package": "amqp",
          "signature": "Channel -\u003e IO ()",
          "source": "src/Network-AMQP.html#txRollback",
          "type": "function"
        },
        "index": {
          "description": "This method abandons all messages published and acknowledged in the current transaction new transaction starts immediately after rollback",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "txRollback",
          "normalized": "Channel-\u003eIO()",
          "package": "amqp",
          "partial": "Rollback",
          "signature": "Channel-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:txRollback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis method sets the channel to use standard transactions.  The client must use this method at least once on a channel before using the Commit or Rollback methods.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "txSelect",
          "package": "amqp",
          "signature": "Channel -\u003e IO ()",
          "source": "src/Network-AMQP.html#txSelect",
          "type": "function"
        },
        "index": {
          "description": "This method sets the channel to use standard transactions The client must use this method at least once on channel before using the Commit or Rollback methods",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "txSelect",
          "normalized": "Channel-\u003eIO()",
          "package": "amqp",
          "partial": "Select",
          "signature": "Channel-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:txSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eunbindExchange chan destinationName sourceName routingKey\u003c/code\u003e unbinds an exchange from an exchange. The \u003ccode\u003eroutingKey\u003c/code\u003e must be identical to the one specified when binding the exchange.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "unbindExchange",
          "package": "amqp",
          "signature": "Channel -\u003e Text -\u003e Text -\u003e Text -\u003e IO ()",
          "source": "src/Network-AMQP.html#unbindExchange",
          "type": "function"
        },
        "index": {
          "description": "unbindExchange chan destinationName sourceName routingKey unbinds an exchange from an exchange The routingKey must be identical to the one specified when binding the exchange",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "unbindExchange",
          "normalized": "Channel-\u003eText-\u003eText-\u003eText-\u003eIO()",
          "package": "amqp",
          "partial": "Exchange",
          "signature": "Channel-\u003eText-\u003eText-\u003eText-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:unbindExchange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean extended version of \u003ccode\u003eunbindExchange\u003c/code\u003e that allows you to include arguments. The \u003ccode\u003earguments\u003c/code\u003e must be identical to the ones specified when binding the exchange.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "unbindExchange'",
          "package": "amqp",
          "signature": "Channel -\u003e Text -\u003e Text -\u003e Text -\u003e FieldTable -\u003e IO ()",
          "source": "src/Network-AMQP.html#unbindExchange%27",
          "type": "function"
        },
        "index": {
          "description": "an extended version of unbindExchange that allows you to include arguments The arguments must be identical to the ones specified when binding the exchange",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "unbindExchange'",
          "normalized": "Channel-\u003eText-\u003eText-\u003eText-\u003eFieldTable-\u003eIO()",
          "package": "amqp",
          "partial": "Exchange'",
          "signature": "Channel-\u003eText-\u003eText-\u003eText-\u003eFieldTable-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:unbindExchange-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eunbindQueue chan queue exchange routingKey\u003c/code\u003e unbinds a queue from an exchange. The \u003ccode\u003eroutingKey\u003c/code\u003e must be identical to the one specified when binding the queue.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "unbindQueue",
          "package": "amqp",
          "signature": "Channel -\u003e Text -\u003e Text -\u003e Text -\u003e IO ()",
          "source": "src/Network-AMQP.html#unbindQueue",
          "type": "function"
        },
        "index": {
          "description": "unbindQueue chan queue exchange routingKey unbinds queue from an exchange The routingKey must be identical to the one specified when binding the queue",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "unbindQueue",
          "normalized": "Channel-\u003eText-\u003eText-\u003eText-\u003eIO()",
          "package": "amqp",
          "partial": "Queue",
          "signature": "Channel-\u003eText-\u003eText-\u003eText-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:unbindQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean extended version of \u003ccode\u003eunbindQueue\u003c/code\u003e that allows you to include arguments. The \u003ccode\u003earguments\u003c/code\u003e must be identical to the ones specified when binding the queue.\n\u003c/p\u003e",
          "module": "Network.AMQP",
          "name": "unbindQueue'",
          "package": "amqp",
          "signature": "Channel -\u003e Text -\u003e Text -\u003e Text -\u003e FieldTable -\u003e IO ()",
          "source": "src/Network-AMQP.html#unbindQueue%27",
          "type": "function"
        },
        "index": {
          "description": "an extended version of unbindQueue that allows you to include arguments The arguments must be identical to the ones specified when binding the queue",
          "hierarchy": "Network AMQP",
          "module": "Network.AMQP",
          "name": "unbindQueue'",
          "normalized": "Channel-\u003eText-\u003eText-\u003eText-\u003eFieldTable-\u003eIO()",
          "package": "amqp",
          "partial": "Queue'",
          "signature": "Channel-\u003eText-\u003eText-\u003eText-\u003eFieldTable-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/amqp/docs/Network-AMQP.html#v:unbindQueue-39-"
      }
    }
  ]
]