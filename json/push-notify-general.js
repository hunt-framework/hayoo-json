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
        "word": "push-notify-general"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.General",
          "name": "General",
          "package": "push-notify-general",
          "source": "src/Network-PushNotify-General.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "General",
          "package": "push-notify-general",
          "partial": "General",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnique identifier of an app/device.\n\u003c/p\u003e",
          "module": "Network.PushNotify.General",
          "name": "Device",
          "package": "push-notify-general",
          "source": "src/Network-PushNotify-General-Types.html#Device",
          "type": "data"
        },
        "index": {
          "description": "Unique identifier of an app device",
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "Device",
          "package": "push-notify-general",
          "partial": "Device",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#t:Device"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSettings for GCM service.\n\u003c/p\u003e",
          "module": "Network.PushNotify.General",
          "name": "GCMConfig",
          "package": "push-notify-general",
          "source": "src/Network-PushNotify-General-Types.html#GCMConfig",
          "type": "data"
        },
        "index": {
          "description": "Settings for GCM service",
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "GCMConfig",
          "package": "push-notify-general",
          "partial": "GCMConfig",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#t:GCMConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMain settings for the different Push Services. \u003ccode\u003eNothing\u003c/code\u003e means the service won't be used.\n\u003c/p\u003e",
          "module": "Network.PushNotify.General",
          "name": "PushConfig",
          "package": "push-notify-general",
          "source": "src/Network-PushNotify-General-Types.html#PushConfig",
          "type": "data"
        },
        "index": {
          "description": "Main settings for the different Push Services Nothing means the service won be used",
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "PushConfig",
          "package": "push-notify-general",
          "partial": "Push Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#t:PushConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMain manager for the Push Service.\n\u003c/p\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003ePushManager\u003c/a\u003e\u003c/code\u003e will be used to send notifications and also can be added as a subsite to a Yesod app\n in order to receive registrations and messages from devices as HTTP POST requests.\n\u003c/p\u003e",
          "module": "Network.PushNotify.General",
          "name": "PushManager",
          "package": "push-notify-general",
          "source": "src/Network-PushNotify-General-Types.html#PushManager",
          "type": "data"
        },
        "index": {
          "description": "Main manager for the Push Service This PushManager will be used to send notifications and also can be added as subsite to Yesod app in order to receive registrations and messages from devices as HTTP POST requests",
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "PushManager",
          "package": "push-notify-general",
          "partial": "Push Manager",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#t:PushManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral notification to be sent.\n\u003c/p\u003e",
          "module": "Network.PushNotify.General",
          "name": "PushNotification",
          "package": "push-notify-general",
          "source": "src/Network-PushNotify-General-Types.html#PushNotification",
          "type": "data"
        },
        "index": {
          "description": "General notification to be sent",
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "PushNotification",
          "package": "push-notify-general",
          "partial": "Push Notification",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#t:PushNotification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePushResult represents a general result after communicating with a Push Server.\n\u003c/p\u003e",
          "module": "Network.PushNotify.General",
          "name": "PushResult",
          "package": "push-notify-general",
          "source": "src/Network-PushNotify-General-Types.html#PushResult",
          "type": "data"
        },
        "index": {
          "description": "PushResult represents general result after communicating with Push Server",
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "PushResult",
          "package": "push-notify-general",
          "partial": "Push Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#t:PushResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMain settings for the Push Service.\n\u003c/p\u003e",
          "module": "Network.PushNotify.General",
          "name": "PushServiceConfig",
          "package": "push-notify-general",
          "source": "src/Network-PushNotify-General-Types.html#PushServiceConfig",
          "type": "data"
        },
        "index": {
          "description": "Main settings for the Push Service",
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "PushServiceConfig",
          "package": "push-notify-general",
          "partial": "Push Service Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#t:PushServiceConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRegisterResult\u003c/a\u003e\u003c/code\u003e represents the result of a device attempting to register\n\u003c/p\u003e",
          "module": "Network.PushNotify.General",
          "name": "RegisterResult",
          "package": "push-notify-general",
          "source": "src/Network-PushNotify-General-Types.html#RegisterResult",
          "type": "data"
        },
        "index": {
          "description": "RegisterResult represents the result of device attempting to register",
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "RegisterResult",
          "package": "push-notify-general",
          "partial": "Register Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#t:RegisterResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn iOS app.\n\u003c/p\u003e",
          "module": "Network.PushNotify.General",
          "name": "APNS",
          "package": "push-notify-general",
          "signature": "APNS DeviceToken",
          "source": "src/Network-PushNotify-General-Types.html#Device",
          "type": "function"
        },
        "index": {
          "description": "An iOS app",
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "APNS",
          "package": "push-notify-general",
          "partial": "APNS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:APNS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.General",
          "name": "Ccs",
          "package": "push-notify-general",
          "signature": "Ccs GCMCcsConfig",
          "source": "src/Network-PushNotify-General-Types.html#GCMConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "Ccs",
          "package": "push-notify-general",
          "partial": "Ccs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:Ccs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.General",
          "name": "ErrorReg",
          "package": "push-notify-general",
          "signature": "ErrorReg Text",
          "source": "src/Network-PushNotify-General-Types.html#RegisterResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "ErrorReg",
          "package": "push-notify-general",
          "partial": "Error Reg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:ErrorReg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn Android app.\n\u003c/p\u003e",
          "module": "Network.PushNotify.General",
          "name": "GCM",
          "package": "push-notify-general",
          "signature": "GCM RegId",
          "source": "src/Network-PushNotify-General-Types.html#Device",
          "type": "function"
        },
        "index": {
          "description": "An Android app",
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "GCM",
          "package": "push-notify-general",
          "partial": "GCM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:GCM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.General",
          "name": "Http",
          "package": "push-notify-general",
          "signature": "Http GCMHttpConfig",
          "source": "src/Network-PushNotify-General-Types.html#GCMConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "Http",
          "package": "push-notify-general",
          "partial": "Http",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:Http"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA WPhone app.\n\u003c/p\u003e",
          "module": "Network.PushNotify.General",
          "name": "MPNS",
          "package": "push-notify-general",
          "signature": "MPNS DeviceURI",
          "source": "src/Network-PushNotify-General-Types.html#Device",
          "type": "function"
        },
        "index": {
          "description": "WPhone app",
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "MPNS",
          "package": "push-notify-general",
          "partial": "MPNS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:MPNS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.General",
          "name": "PushConfig",
          "package": "push-notify-general",
          "signature": "PushConfig",
          "source": "src/Network-PushNotify-General-Types.html#PushConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "PushConfig",
          "package": "push-notify-general",
          "partial": "Push Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:PushConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.General",
          "name": "PushNotification",
          "package": "push-notify-general",
          "signature": "PushNotification",
          "source": "src/Network-PushNotify-General-Types.html#PushNotification",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "PushNotification",
          "package": "push-notify-general",
          "partial": "Push Notification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:PushNotification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.General",
          "name": "PushResult",
          "package": "push-notify-general",
          "signature": "PushResult",
          "source": "src/Network-PushNotify-General-Types.html#PushResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "PushResult",
          "package": "push-notify-general",
          "partial": "Push Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:PushResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.General",
          "name": "PushServiceConfig",
          "package": "push-notify-general",
          "signature": "PushServiceConfig",
          "source": "src/Network-PushNotify-General-Types.html#PushServiceConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "PushServiceConfig",
          "package": "push-notify-general",
          "partial": "Push Service Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:PushServiceConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.General",
          "name": "SuccessfulReg",
          "package": "push-notify-general",
          "signature": "SuccessfulReg",
          "source": "src/Network-PushNotify-General-Types.html#RegisterResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "SuccessfulReg",
          "package": "push-notify-general",
          "partial": "Successful Reg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:SuccessfulReg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.General",
          "name": "apnsConfig",
          "package": "push-notify-general",
          "signature": "Maybe APNSConfig",
          "source": "src/Network-PushNotify-General-Types.html#PushConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "apnsConfig",
          "package": "push-notify-general",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:apnsConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.General",
          "name": "apnsNotif",
          "package": "push-notify-general",
          "signature": "Maybe APNSmessage",
          "source": "src/Network-PushNotify-General-Types.html#PushNotification",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "apnsNotif",
          "package": "push-notify-general",
          "partial": "Notif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:apnsNotif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eclosePushService\u003c/a\u003e\u003c/code\u003e stops the Push service.\n\u003c/p\u003e",
          "module": "Network.PushNotify.General",
          "name": "closePushService",
          "package": "push-notify-general",
          "signature": "PushManager -\u003e IO ()",
          "source": "src/Network-PushNotify-General-Send.html#closePushService",
          "type": "function"
        },
        "index": {
          "description": "closePushService stops the Push service",
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "closePushService",
          "normalized": "PushManager-\u003eIO()",
          "package": "push-notify-general",
          "partial": "Push Service",
          "signature": "PushManager-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:closePushService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNotifications that were not successfully sent.\n\u003c/p\u003e",
          "module": "Network.PushNotify.General",
          "name": "failed",
          "package": "push-notify-general",
          "signature": "HashMap Device (Either Text SomeException)",
          "source": "src/Network-PushNotify-General-Types.html#PushResult",
          "type": "function"
        },
        "index": {
          "description": "Notifications that were not successfully sent",
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "failed",
          "package": "push-notify-general",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:failed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.General",
          "name": "gcmConfig",
          "package": "push-notify-general",
          "signature": "Maybe GCMConfig",
          "source": "src/Network-PushNotify-General-Types.html#PushConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "gcmConfig",
          "package": "push-notify-general",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:gcmConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.General",
          "name": "gcmNotif",
          "package": "push-notify-general",
          "signature": "Maybe GCMmessage",
          "source": "src/Network-PushNotify-General-Types.html#PushNotification",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "gcmNotif",
          "package": "push-notify-general",
          "partial": "Notif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:gcmNotif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egeneralNotif\u003c/a\u003e\u003c/code\u003e builds a general notification from JSON data.\n\u003c/p\u003e\u003cp\u003eIf data length exceeds 256 bytes (max payload limit for APNS) it will fails.\n\u003c/p\u003e\u003cp\u003eFor MPNS, data will be XML-labeled as \"jsonData\".\n\u003c/p\u003e",
          "module": "Network.PushNotify.General",
          "name": "generalNotif",
          "package": "push-notify-general",
          "signature": "Object -\u003e IO PushNotification",
          "source": "src/Network-PushNotify-General-Types.html#generalNotif",
          "type": "function"
        },
        "index": {
          "description": "generalNotif builds general notification from JSON data If data length exceeds bytes max payload limit for APNS it will fails For MPNS data will be XML-labeled as jsonData",
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "generalNotif",
          "normalized": "Object-\u003eIO PushNotification",
          "package": "push-notify-general",
          "partial": "Notif",
          "signature": "Object-\u003eIO PushNotification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:generalNotif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.General",
          "name": "mpnsConfig",
          "package": "push-notify-general",
          "signature": "Maybe MPNSConfig",
          "source": "src/Network-PushNotify-General-Types.html#PushConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "mpnsConfig",
          "package": "push-notify-general",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:mpnsConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.General",
          "name": "mpnsNotif",
          "package": "push-notify-general",
          "signature": "Maybe MPNSmessage",
          "source": "src/Network-PushNotify-General-Types.html#PushNotification",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "mpnsNotif",
          "package": "push-notify-general",
          "partial": "Notif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:mpnsNotif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe callback function to be called when\n a new device try to register on server.\n\u003c/p\u003e",
          "module": "Network.PushNotify.General",
          "name": "newDeviceCallback",
          "package": "push-notify-general",
          "signature": "Device -\u003e Value -\u003e IO RegisterResult",
          "source": "src/Network-PushNotify-General-Types.html#PushServiceConfig",
          "type": "function"
        },
        "index": {
          "description": "The callback function to be called when new device try to register on server",
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "newDeviceCallback",
          "normalized": "Device-\u003eValue-\u003eIO RegisterResult",
          "package": "push-notify-general",
          "partial": "Device Callback",
          "signature": "Device-\u003eValue-\u003eIO RegisterResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:newDeviceCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe callback function to be called when a device's identifier changes.\n\u003c/p\u003e",
          "module": "Network.PushNotify.General",
          "name": "newIdCallback",
          "package": "push-notify-general",
          "signature": "(Device, Device) -\u003e IO ()",
          "source": "src/Network-PushNotify-General-Types.html#PushServiceConfig",
          "type": "function"
        },
        "index": {
          "description": "The callback function to be called when device identifier changes",
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "newIdCallback",
          "normalized": "(Device,Device)-\u003eIO()",
          "package": "push-notify-general",
          "partial": "Id Callback",
          "signature": "(Device,Device)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:newIdCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap of devices which have changed their identifiers. (old -\u003e new)\n\u003c/p\u003e",
          "module": "Network.PushNotify.General",
          "name": "newIds",
          "package": "push-notify-general",
          "signature": "HashMap Device Device",
          "source": "src/Network-PushNotify-General-Types.html#PushResult",
          "type": "function"
        },
        "index": {
          "description": "Map of devices which have changed their identifiers old new",
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "newIds",
          "package": "push-notify-general",
          "partial": "Ids",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:newIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe callback function to be called when receiving messages from devices\n (This means through the CCS connection or as POST requests\n to the Yesod subsite).\n\u003c/p\u003e",
          "module": "Network.PushNotify.General",
          "name": "newMessageCallback",
          "package": "push-notify-general",
          "signature": "Device -\u003e Value -\u003e IO ()",
          "source": "src/Network-PushNotify-General-Types.html#PushServiceConfig",
          "type": "function"
        },
        "index": {
          "description": "The callback function to be called when receiving messages from devices This means through the CCS connection or as POST requests to the Yesod subsite",
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "newMessageCallback",
          "normalized": "Device-\u003eValue-\u003eIO()",
          "package": "push-notify-general",
          "partial": "Message Callback",
          "signature": "Device-\u003eValue-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:newMessageCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMain configuration.\n\u003c/p\u003e",
          "module": "Network.PushNotify.General",
          "name": "pushConfig",
          "package": "push-notify-general",
          "signature": "PushConfig",
          "source": "src/Network-PushNotify-General-Types.html#PushServiceConfig",
          "type": "function"
        },
        "index": {
          "description": "Main configuration",
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "pushConfig",
          "package": "push-notify-general",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:pushConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esendPush\u003c/a\u003e\u003c/code\u003e sends messages to the appropiate Push Servers.\n\u003c/p\u003e",
          "module": "Network.PushNotify.General",
          "name": "sendPush",
          "package": "push-notify-general",
          "signature": "PushManager -\u003e PushNotification -\u003e HashSet Device -\u003e IO PushResult",
          "source": "src/Network-PushNotify-General-Send.html#sendPush",
          "type": "function"
        },
        "index": {
          "description": "sendPush sends messages to the appropiate Push Servers",
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "sendPush",
          "normalized": "PushManager-\u003ePushNotification-\u003eHashSet Device-\u003eIO PushResult",
          "package": "push-notify-general",
          "partial": "Push",
          "signature": "PushManager-\u003ePushNotification-\u003eHashSet Device-\u003eIO PushResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:sendPush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003estartPushService\u003c/a\u003e\u003c/code\u003e starts the PushService creating a PushManager.\n\u003c/p\u003e",
          "module": "Network.PushNotify.General",
          "name": "startPushService",
          "package": "push-notify-general",
          "signature": "PushServiceConfig -\u003e IO PushManager",
          "source": "src/Network-PushNotify-General-Send.html#startPushService",
          "type": "function"
        },
        "index": {
          "description": "startPushService starts the PushService creating PushManager",
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "startPushService",
          "normalized": "PushServiceConfig-\u003eIO PushManager",
          "package": "push-notify-general",
          "partial": "Push Service",
          "signature": "PushServiceConfig-\u003eIO PushManager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:startPushService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNotifications that were successfully sent.\n\u003c/p\u003e",
          "module": "Network.PushNotify.General",
          "name": "successful",
          "package": "push-notify-general",
          "signature": "HashSet Device",
          "source": "src/Network-PushNotify-General-Types.html#PushResult",
          "type": "function"
        },
        "index": {
          "description": "Notifications that were successfully sent",
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "successful",
          "package": "push-notify-general",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:successful"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFailed notifications that you need to resend,\n because servers were not available or there was a problem with the connection.\n\u003c/p\u003e",
          "module": "Network.PushNotify.General",
          "name": "toResend",
          "package": "push-notify-general",
          "signature": "HashSet Device",
          "source": "src/Network-PushNotify-General-Types.html#PushResult",
          "type": "function"
        },
        "index": {
          "description": "Failed notifications that you need to resend because servers were not available or there was problem with the connection",
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "toResend",
          "package": "push-notify-general",
          "partial": "Resend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:toResend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet of unregistered devices.\n\u003c/p\u003e",
          "module": "Network.PushNotify.General",
          "name": "unRegistered",
          "package": "push-notify-general",
          "signature": "HashSet Device",
          "source": "src/Network-PushNotify-General-Types.html#PushResult",
          "type": "function"
        },
        "index": {
          "description": "Set of unregistered devices",
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "unRegistered",
          "package": "push-notify-general",
          "partial": "Registered",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:unRegistered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe callback function to be called when a device unregisters.\n\u003c/p\u003e",
          "module": "Network.PushNotify.General",
          "name": "unRegisteredCallback",
          "package": "push-notify-general",
          "signature": "Device -\u003e IO ()",
          "source": "src/Network-PushNotify-General-Types.html#PushServiceConfig",
          "type": "function"
        },
        "index": {
          "description": "The callback function to be called when device unregisters",
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "unRegisteredCallback",
          "normalized": "Device-\u003eIO()",
          "package": "push-notify-general",
          "partial": "Registered Callback",
          "signature": "Device-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:unRegisteredCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewithPushManager\u003c/a\u003e\u003c/code\u003e creates a new manager, uses it in the provided function, and then releases it.\n\u003c/p\u003e",
          "module": "Network.PushNotify.General",
          "name": "withPushManager",
          "package": "push-notify-general",
          "signature": "PushServiceConfig -\u003e (PushManager -\u003e IO a) -\u003e IO a",
          "source": "src/Network-PushNotify-General-Send.html#withPushManager",
          "type": "function"
        },
        "index": {
          "description": "withPushManager creates new manager uses it in the provided function and then releases it",
          "hierarchy": "Network PushNotify General",
          "module": "Network.PushNotify.General",
          "name": "withPushManager",
          "normalized": "PushServiceConfig-\u003e(PushManager-\u003eIO a)-\u003eIO a",
          "package": "push-notify-general",
          "partial": "Push Manager",
          "signature": "PushServiceConfig-\u003e(PushManager-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify-general/docs/Network-PushNotify-General.html#v:withPushManager"
      }
    }
  ]
]