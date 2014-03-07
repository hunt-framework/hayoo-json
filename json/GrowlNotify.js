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
        "word": "GrowlNotify"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA network notification utility to work with Growl \u003ca\u003ehttp://growl.info/\u003c/a\u003e. \n\u003c/p\u003e\u003cp\u003eAn application must register itself by sending a registrationPacket. Then, to send\n   a notification, send a notificationPacket. Any packet must have an md5sum tacked on\n   to the end before being sent. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.GrowlNotify",
          "name": "GrowlNotify",
          "package": "GrowlNotify",
          "source": "src/Network-GrowlNotify.html",
          "type": "module"
        },
        "index": {
          "description": "network notification utility to work with Growl http growl.info An application must register itself by sending registrationPacket Then to send notification send notificationPacket Any packet must have an md5sum tacked on to the end before being sent",
          "hierarchy": "Network GrowlNotify",
          "module": "Network.GrowlNotify",
          "name": "GrowlNotify",
          "package": "GrowlNotify",
          "partial": "Growl Notify",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GrowlNotify/docs/Network-GrowlNotify.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTack on the md5sum to the end of the message, with a (possibly empty) password\n\u003c/p\u003e",
          "module": "Network.GrowlNotify",
          "name": "addMD5Sum",
          "package": "GrowlNotify",
          "signature": "String-\u003e ByteString-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Tack on the md5sum to the end of the message with possibly empty password",
          "hierarchy": "Network GrowlNotify",
          "module": "Network.GrowlNotify",
          "name": "addMD5Sum",
          "normalized": "String-\u003eByteString-\u003eByteString",
          "package": "GrowlNotify",
          "partial": "MD Sum",
          "signature": "String-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GrowlNotify/docs/Network-GrowlNotify.html#v:addMD5Sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a notification packet\n\u003c/p\u003e",
          "module": "Network.GrowlNotify",
          "name": "notificationPacket",
          "package": "GrowlNotify",
          "signature": "Bool-\u003e String-\u003e String-\u003e String-\u003e String-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Create notification packet",
          "hierarchy": "Network GrowlNotify",
          "module": "Network.GrowlNotify",
          "name": "notificationPacket",
          "normalized": "Bool-\u003eString-\u003eString-\u003eString-\u003eString-\u003eByteString",
          "package": "GrowlNotify",
          "partial": "Packet",
          "signature": "Bool-\u003eString-\u003eString-\u003eString-\u003eString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GrowlNotify/docs/Network-GrowlNotify.html#v:notificationPacket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eregister this application and its notification with growl\n |  any notifications will be on by default\n\u003c/p\u003e",
          "module": "Network.GrowlNotify",
          "name": "registrationPacket",
          "package": "GrowlNotify",
          "signature": "String-\u003e [String]-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "register this application and its notification with growl any notifications will be on by default",
          "hierarchy": "Network GrowlNotify",
          "module": "Network.GrowlNotify",
          "name": "registrationPacket",
          "normalized": "String-\u003e[String]-\u003eByteString",
          "package": "GrowlNotify",
          "partial": "Packet",
          "signature": "String-\u003e[String]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GrowlNotify/docs/Network-GrowlNotify.html#v:registrationPacket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend the packet \n\u003c/p\u003e",
          "module": "Network.GrowlNotify",
          "name": "sendMessage",
          "package": "GrowlNotify",
          "signature": "String-\u003e ByteString-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Send the packet",
          "hierarchy": "Network GrowlNotify",
          "module": "Network.GrowlNotify",
          "name": "sendMessage",
          "normalized": "String-\u003eByteString-\u003eIO()",
          "package": "GrowlNotify",
          "partial": "Message",
          "signature": "String-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GrowlNotify/docs/Network-GrowlNotify.html#v:sendMessage"
      }
    }
  ]
]