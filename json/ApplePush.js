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
        "word": "ApplePush"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHelpers for the Apple Push Service\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ApplePush.Helpers",
          "name": "Helpers",
          "package": "ApplePush",
          "source": "src/ApplePush-Helpers.html",
          "type": "module"
        },
        "index": {
          "description": "Helpers for the Apple Push Service",
          "hierarchy": "ApplePush Helpers",
          "module": "ApplePush.Helpers",
          "name": "Helpers",
          "package": "ApplePush",
          "partial": "Helpers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ApplePush/docs/ApplePush-Helpers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ApplePush.Helpers",
          "name": "byteStringToHex",
          "package": "ApplePush",
          "signature": "ByteString -\u003e String",
          "source": "src/ApplePush-Helpers.html#byteStringToHex",
          "type": "function"
        },
        "index": {
          "hierarchy": "ApplePush Helpers",
          "module": "ApplePush.Helpers",
          "name": "byteStringToHex",
          "normalized": "ByteString-\u003eString",
          "package": "ApplePush",
          "partial": "String To Hex",
          "signature": "ByteString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ApplePush/docs/ApplePush-Helpers.html#v:byteStringToHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a hex string to a device token\n\u003c/p\u003e",
          "module": "ApplePush.Helpers",
          "name": "hexTokenToByteString",
          "package": "ApplePush",
          "signature": "String -\u003e DeviceToken",
          "source": "src/ApplePush-Helpers.html#hexTokenToByteString",
          "type": "function"
        },
        "index": {
          "description": "Converts hex string to device token",
          "hierarchy": "ApplePush Helpers",
          "module": "ApplePush.Helpers",
          "name": "hexTokenToByteString",
          "normalized": "String-\u003eDeviceToken",
          "package": "ApplePush",
          "partial": "Token To Byte String",
          "signature": "String-\u003eDeviceToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ApplePush/docs/ApplePush-Helpers.html#v:hexTokenToByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a device token to a hex string\n\u003c/p\u003e",
          "module": "ApplePush.Helpers",
          "name": "tokenToString",
          "package": "ApplePush",
          "signature": "DeviceToken -\u003e String",
          "source": "src/ApplePush-Helpers.html#tokenToString",
          "type": "function"
        },
        "index": {
          "description": "Converts device token to hex string",
          "hierarchy": "ApplePush Helpers",
          "module": "ApplePush.Helpers",
          "name": "tokenToString",
          "normalized": "DeviceToken-\u003eString",
          "package": "ApplePush",
          "partial": "To String",
          "signature": "DeviceToken-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ApplePush/docs/ApplePush-Helpers.html#v:tokenToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCreates JSON notification payloads for the Apple Push Notification Service\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ApplePush.Notification",
          "name": "Notification",
          "package": "ApplePush",
          "source": "src/ApplePush-Notification.html",
          "type": "module"
        },
        "index": {
          "description": "Creates JSON notification payloads for the Apple Push Notification Service",
          "hierarchy": "ApplePush Notification",
          "module": "ApplePush.Notification",
          "name": "Notification",
          "package": "ApplePush",
          "partial": "Notification",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ApplePush/docs/ApplePush-Notification.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a notification, takes an alert(string\u003cem\u003edictionary), integer, string for the sound, and any user data (key\u003c/em\u003evalue dictionary.)\n\u003c/p\u003e",
          "module": "ApplePush.Notification",
          "name": "makeNotification",
          "package": "ApplePush",
          "signature": "Maybe (Either String [(String, JSValue)]) -\u003e Maybe Integer -\u003e Maybe String -\u003e Maybe [(String, JSValue)] -\u003e String",
          "source": "src/ApplePush-Notification.html#makeNotification",
          "type": "function"
        },
        "index": {
          "description": "Makes notification takes an alert string dictionary integer string for the sound and any user data key value dictionary",
          "hierarchy": "ApplePush Notification",
          "module": "ApplePush.Notification",
          "name": "makeNotification",
          "normalized": "Maybe(Either String[(String,JSValue)])-\u003eMaybe Integer-\u003eMaybe String-\u003eMaybe[(String,JSValue)]-\u003eString",
          "package": "ApplePush",
          "partial": "Notification",
          "signature": "Maybe(Either String[(String,JSValue)])-\u003eMaybe Integer-\u003eMaybe String-\u003eMaybe[(String,JSValue)]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ApplePush/docs/ApplePush-Notification.html#v:makeNotification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a list of key, JSValue pairs and converts them to a string\n\u003c/p\u003e",
          "module": "ApplePush.Notification",
          "name": "makeRawNotification",
          "package": "ApplePush",
          "signature": "[(String, JSValue)] -\u003e String",
          "source": "src/ApplePush-Notification.html#makeRawNotification",
          "type": "function"
        },
        "index": {
          "description": "Takes list of key JSValue pairs and converts them to string",
          "hierarchy": "ApplePush Notification",
          "module": "ApplePush.Notification",
          "name": "makeRawNotification",
          "normalized": "[(String,JSValue)]-\u003eString",
          "package": "ApplePush",
          "partial": "Raw Notification",
          "signature": "[(String,JSValue)]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ApplePush/docs/ApplePush-Notification.html#v:makeRawNotification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes for the Apple Push Service\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ApplePush.Types",
          "name": "Types",
          "package": "ApplePush",
          "source": "src/ApplePush-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Types for the Apple Push Service",
          "hierarchy": "ApplePush Types",
          "module": "ApplePush.Types",
          "name": "Types",
          "package": "ApplePush",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ApplePush/docs/ApplePush-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDevice Token\n\u003c/p\u003e",
          "module": "ApplePush.Types",
          "name": "DeviceToken",
          "package": "ApplePush",
          "source": "src/ApplePush-Types.html#DeviceToken",
          "type": "type"
        },
        "index": {
          "description": "Device Token",
          "hierarchy": "ApplePush Types",
          "module": "ApplePush.Types",
          "name": "DeviceToken",
          "package": "ApplePush",
          "partial": "Device Token",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ApplePush/docs/ApplePush-Types.html#t:DeviceToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNotification actions\n\u003c/p\u003e",
          "module": "ApplePush.Types",
          "name": "NotificationAction",
          "package": "ApplePush",
          "source": "src/ApplePush-Types.html#NotificationAction",
          "type": "type"
        },
        "index": {
          "description": "Notification actions",
          "hierarchy": "ApplePush Types",
          "module": "ApplePush.Types",
          "name": "NotificationAction",
          "package": "ApplePush",
          "partial": "Notification Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ApplePush/docs/ApplePush-Types.html#t:NotificationAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ApplePush.Types",
          "name": "NotificationCallbackChan",
          "package": "ApplePush",
          "source": "src/ApplePush-Types.html#NotificationCallbackChan",
          "type": "type"
        },
        "index": {
          "hierarchy": "ApplePush Types",
          "module": "ApplePush.Types",
          "name": "NotificationCallbackChan",
          "package": "ApplePush",
          "partial": "Notification Callback Chan",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ApplePush/docs/ApplePush-Types.html#t:NotificationCallbackChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCallback messages from the Apple Push Notification Service\n\u003c/p\u003e",
          "module": "ApplePush.Types",
          "name": "NotificationCallbackMsg",
          "package": "ApplePush",
          "source": "src/ApplePush-Types.html#NotificationCallbackMsg",
          "type": "data"
        },
        "index": {
          "description": "Callback messages from the Apple Push Notification Service",
          "hierarchy": "ApplePush Types",
          "module": "ApplePush.Types",
          "name": "NotificationCallbackMsg",
          "package": "ApplePush",
          "partial": "Notification Callback Msg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ApplePush/docs/ApplePush-Types.html#t:NotificationCallbackMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNotification payload is a JSON Object\n\u003c/p\u003e",
          "module": "ApplePush.Types",
          "name": "NotificationPayload",
          "package": "ApplePush",
          "source": "src/ApplePush-Types.html#NotificationPayload",
          "type": "type"
        },
        "index": {
          "description": "Notification payload is JSON Object",
          "hierarchy": "ApplePush Types",
          "module": "ApplePush.Types",
          "name": "NotificationPayload",
          "package": "ApplePush",
          "partial": "Notification Payload",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ApplePush/docs/ApplePush-Types.html#t:NotificationPayload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ApplePush.Types",
          "name": "NotificationServiceChan",
          "package": "ApplePush",
          "source": "src/ApplePush-Types.html#NotificationServiceChan",
          "type": "type"
        },
        "index": {
          "hierarchy": "ApplePush Types",
          "module": "ApplePush.Types",
          "name": "NotificationServiceChan",
          "package": "ApplePush",
          "partial": "Notification Service Chan",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ApplePush/docs/ApplePush-Types.html#t:NotificationServiceChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese messages are sent to the Apple Push Notification Service\n\u003c/p\u003e",
          "module": "ApplePush.Types",
          "name": "NotificationServiceMsg",
          "package": "ApplePush",
          "source": "src/ApplePush-Types.html#NotificationServiceMsg",
          "type": "data"
        },
        "index": {
          "description": "These messages are sent to the Apple Push Notification Service",
          "hierarchy": "ApplePush Types",
          "module": "ApplePush.Types",
          "name": "NotificationServiceMsg",
          "package": "ApplePush",
          "partial": "Notification Service Msg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ApplePush/docs/ApplePush-Types.html#t:NotificationServiceMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ApplePush.Types",
          "name": "NotificationServerConnected",
          "package": "ApplePush",
          "signature": "NotificationServerConnected NotificationServiceChan",
          "source": "src/ApplePush-Types.html#NotificationCallbackMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "ApplePush Types",
          "module": "ApplePush.Types",
          "name": "NotificationServerConnected",
          "package": "ApplePush",
          "partial": "Notification Server Connected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ApplePush/docs/ApplePush-Types.html#v:NotificationServerConnected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ApplePush.Types",
          "name": "NotificationServerDisconnected",
          "package": "ApplePush",
          "signature": "NotificationServerDisconnected",
          "source": "src/ApplePush-Types.html#NotificationCallbackMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "ApplePush Types",
          "module": "ApplePush.Types",
          "name": "NotificationServerDisconnected",
          "package": "ApplePush",
          "partial": "Notification Server Disconnected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ApplePush/docs/ApplePush-Types.html#v:NotificationServerDisconnected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ApplePush.Types",
          "name": "NotificationServerUnableToConnect",
          "package": "ApplePush",
          "signature": "NotificationServerUnableToConnect String",
          "source": "src/ApplePush-Types.html#NotificationCallbackMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "ApplePush Types",
          "module": "ApplePush.Types",
          "name": "NotificationServerUnableToConnect",
          "package": "ApplePush",
          "partial": "Notification Server Unable To Connect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ApplePush/docs/ApplePush-Types.html#v:NotificationServerUnableToConnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ApplePush.Types",
          "name": "NotificationServiceExit",
          "package": "ApplePush",
          "signature": "NotificationServiceExit",
          "source": "src/ApplePush-Types.html#NotificationServiceMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "ApplePush Types",
          "module": "ApplePush.Types",
          "name": "NotificationServiceExit",
          "package": "ApplePush",
          "partial": "Notification Service Exit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ApplePush/docs/ApplePush-Types.html#v:NotificationServiceExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ApplePush.Types",
          "name": "NotificationServiceSend",
          "package": "ApplePush",
          "signature": "NotificationServiceSend DeviceToken String",
          "source": "src/ApplePush-Types.html#NotificationServiceMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "ApplePush Types",
          "module": "ApplePush.Types",
          "name": "NotificationServiceSend",
          "package": "ApplePush",
          "partial": "Notification Service Send",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ApplePush/docs/ApplePush-Types.html#v:NotificationServiceSend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements the Apple Push Notification Service \n \u003ca\u003ehttp://developer.apple.com/iPhone/library/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008194-CH1-SW1\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThe notification service uses \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e for asynchronous communication.\n Call \u003ccode\u003e\u003ca\u003econnectToNotificationService\u003c/a\u003e\u003c/code\u003e and pass it a \u003ccode\u003e\u003ca\u003eNotificationCallbackChan\u003c/a\u003e\u003c/code\u003e. \n The notification service will post a \u003ccode\u003eNotificationServerConencted\u003c/code\u003e message, with a channel that you should use to send notifications with.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ApplePush",
          "name": "ApplePush",
          "package": "ApplePush",
          "source": "src/ApplePush.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements the Apple Push Notification Service http developer.apple.com iPhone library documentation NetworkingInternet Conceptual RemoteNotificationsPG Introduction Introduction.html apple ref doc uid TP40008194-CH1-SW1 The notification service uses Chan for asynchronous communication Call connectToNotificationService and pass it NotificationCallbackChan The notification service will post NotificationServerConencted message with channel that you should use to send notifications with",
          "hierarchy": "ApplePush",
          "module": "ApplePush",
          "name": "ApplePush",
          "package": "ApplePush",
          "partial": "Apple Push",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ApplePush/docs/ApplePush.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnects to the notification service for the host and port specified.\n\u003c/p\u003e",
          "module": "ApplePush",
          "name": "connectToNotificationService",
          "package": "ApplePush",
          "signature": "String -\u003e Integer -\u003e NotificationCallbackChan -\u003e IO ()",
          "source": "src/ApplePush.html#connectToNotificationService",
          "type": "function"
        },
        "index": {
          "description": "Connects to the notification service for the host and port specified",
          "hierarchy": "ApplePush",
          "module": "ApplePush",
          "name": "connectToNotificationService",
          "normalized": "String-\u003eInteger-\u003eNotificationCallbackChan-\u003eIO()",
          "package": "ApplePush",
          "partial": "To Notification Service",
          "signature": "String-\u003eInteger-\u003eNotificationCallbackChan-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ApplePush/docs/ApplePush.html#v:connectToNotificationService"
      }
    }
  ]
]