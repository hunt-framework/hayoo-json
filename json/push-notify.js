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
        "word": "push-notify"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library defines an API for communicating with iOS powered devices, sending Push Notifications through Apple Push Notification Service.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.PushNotify.Apns",
          "name": "Apns",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Apns.html",
          "type": "module"
        },
        "index": {
          "description": "This library defines an API for communicating with iOS powered devices sending Push Notifications through Apple Push Notification Service",
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "Apns",
          "package": "push-notify",
          "partial": "Apns",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAPNSConfig\u003c/a\u003e\u003c/code\u003e represents the main necessary information for sending notifications through APNS.\n\u003c/p\u003e\u003cp\u003eFor loading the certificate and privateKey you can use: \u003ccode\u003e\u003ca\u003efileReadCertificate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efileReadPrivateKey\u003c/a\u003e\u003c/code\u003e .\n\u003c/p\u003e",
          "module": "Network.PushNotify.Apns",
          "name": "APNSConfig",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Apns-Types.html#APNSConfig",
          "type": "data"
        },
        "index": {
          "description": "APNSConfig represents the main necessary information for sending notifications through APNS For loading the certificate and privateKey you can use fileReadCertificate and fileReadPrivateKey",
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "APNSConfig",
          "package": "push-notify",
          "partial": "APNSConfig",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#t:APNSConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAPNSFeedBackresult\u003c/a\u003e\u003c/code\u003e represents information after connecting with the Feedback service.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Apns",
          "name": "APNSFeedBackresult",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Apns-Types.html#APNSFeedBackresult",
          "type": "data"
        },
        "index": {
          "description": "APNSFeedBackresult represents information after connecting with the Feedback service",
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "APNSFeedBackresult",
          "package": "push-notify",
          "partial": "APNSFeed Backresult",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#t:APNSFeedBackresult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Apns",
          "name": "APNSManager",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Apns-Types.html#APNSManager",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "APNSManager",
          "package": "push-notify",
          "partial": "APNSManager",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#t:APNSManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAPNSmessage\u003c/a\u003e\u003c/code\u003e represents a message to be sent through APNS.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Apns",
          "name": "APNSmessage",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Apns-Types.html#APNSmessage",
          "type": "data"
        },
        "index": {
          "description": "APNSmessage represents message to be sent through APNS",
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "APNSmessage",
          "package": "push-notify",
          "partial": "APNSmessage",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#t:APNSmessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAPNSresult\u003c/a\u003e\u003c/code\u003e represents information about messages after a communication with APNS Servers.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Apns",
          "name": "APNSresult",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Apns-Types.html#APNSresult",
          "type": "data"
        },
        "index": {
          "description": "APNSresult represents information about messages after communication with APNS Servers",
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "APNSresult",
          "package": "push-notify",
          "partial": "APNSresult",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#t:APNSresult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAlertDictionary\u003c/a\u003e\u003c/code\u003e represents the possible dictionary in the \u003ccode\u003e\u003ca\u003ealert\u003c/a\u003e\u003c/code\u003e label.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Apns",
          "name": "AlertDictionary",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Apns-Types.html#AlertDictionary",
          "type": "data"
        },
        "index": {
          "description": "AlertDictionary represents the possible dictionary in the alert label",
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "AlertDictionary",
          "package": "push-notify",
          "partial": "Alert Dictionary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#t:AlertDictionary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary token stored in hexadecimal representation as text.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Apns",
          "name": "DeviceToken",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Apns-Types.html#DeviceToken",
          "type": "type"
        },
        "index": {
          "description": "Binary token stored in hexadecimal representation as text",
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "DeviceToken",
          "package": "push-notify",
          "partial": "Device Token",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#t:DeviceToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eEnv\u003c/a\u003e\u003c/code\u003e represents the three possible working environments. This determines the url and port to connect to.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Apns",
          "name": "Env",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Apns-Types.html#Env",
          "type": "data"
        },
        "index": {
          "description": "Env represents the three possible working environments This determines the url and port to connect to",
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "Env",
          "package": "push-notify",
          "partial": "Env",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#t:Env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Apns",
          "name": "APNSConfig",
          "package": "push-notify",
          "signature": "APNSConfig",
          "source": "src/Network-PushNotify-Apns-Types.html#APNSConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "APNSConfig",
          "package": "push-notify",
          "partial": "APNSConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:APNSConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Apns",
          "name": "APNSFeedBackresult",
          "package": "push-notify",
          "signature": "APNSFeedBackresult",
          "source": "src/Network-PushNotify-Apns-Types.html#APNSFeedBackresult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "APNSFeedBackresult",
          "package": "push-notify",
          "partial": "APNSFeed Backresult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:APNSFeedBackresult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Apns",
          "name": "APNSmessage",
          "package": "push-notify",
          "signature": "APNSmessage",
          "source": "src/Network-PushNotify-Apns-Types.html#APNSmessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "APNSmessage",
          "package": "push-notify",
          "partial": "APNSmessage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:APNSmessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Apns",
          "name": "APNSresult",
          "package": "push-notify",
          "signature": "APNSresult",
          "source": "src/Network-PushNotify-Apns-Types.html#APNSresult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "APNSresult",
          "package": "push-notify",
          "partial": "APNSresult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:APNSresult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Apns",
          "name": "AlertDictionary",
          "package": "push-notify",
          "signature": "AlertDictionary",
          "source": "src/Network-PushNotify-Apns-Types.html#AlertDictionary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "AlertDictionary",
          "package": "push-notify",
          "partial": "Alert Dictionary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:AlertDictionary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDevelopment environment (by Apple).\n\u003c/p\u003e",
          "module": "Network.PushNotify.Apns",
          "name": "Development",
          "package": "push-notify",
          "signature": "Development",
          "source": "src/Network-PushNotify-Apns-Types.html#Env",
          "type": "function"
        },
        "index": {
          "description": "Development environment by Apple",
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "Development",
          "package": "push-notify",
          "partial": "Development",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:Development"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal environment, just to test the service in the \"localhost\".\n\u003c/p\u003e",
          "module": "Network.PushNotify.Apns",
          "name": "Local",
          "package": "push-notify",
          "signature": "Local",
          "source": "src/Network-PushNotify-Apns-Types.html#Env",
          "type": "function"
        },
        "index": {
          "description": "Local environment just to test the service in the localhost",
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "Local",
          "package": "push-notify",
          "partial": "Local",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:Local"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduction environment (by Apple).\n\u003c/p\u003e",
          "module": "Network.PushNotify.Apns",
          "name": "Production",
          "package": "push-notify",
          "signature": "Production",
          "source": "src/Network-PushNotify-Apns-Types.html#Env",
          "type": "function"
        },
        "index": {
          "description": "Production environment by Apple",
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "Production",
          "package": "push-notify",
          "partial": "Production",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:Production"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Apns",
          "name": "action_loc_key",
          "package": "push-notify",
          "signature": "Text",
          "source": "src/Network-PushNotify-Apns-Types.html#AlertDictionary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "action_loc_key",
          "package": "push-notify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:action_loc_key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor the system to displays a standard alert.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Apns",
          "name": "alert",
          "package": "push-notify",
          "signature": "Either Text AlertDictionary",
          "source": "src/Network-PushNotify-Apns-Types.html#APNSmessage",
          "type": "function"
        },
        "index": {
          "description": "For the system to displays standard alert",
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "alert",
          "package": "push-notify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:alert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCertificate provided by Apple.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Apns",
          "name": "apnsCertificate",
          "package": "push-notify",
          "signature": "X509",
          "source": "src/Network-PushNotify-Apns-Types.html#APNSConfig",
          "type": "function"
        },
        "index": {
          "description": "Certificate provided by Apple",
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "apnsCertificate",
          "package": "push-notify",
          "partial": "Certificate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:apnsCertificate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrivate key provided by Apple.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Apns",
          "name": "apnsPrivateKey",
          "package": "push-notify",
          "signature": "PrivateKey",
          "source": "src/Network-PushNotify-Apns-Types.html#APNSConfig",
          "type": "function"
        },
        "index": {
          "description": "Private key provided by Apple",
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "apnsPrivateKey",
          "package": "push-notify",
          "partial": "Private Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:apnsPrivateKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to retry to connect to APNS servers.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Apns",
          "name": "apnsRetrySettings",
          "package": "push-notify",
          "signature": "RetrySettings",
          "source": "src/Network-PushNotify-Apns-Types.html#APNSConfig",
          "type": "function"
        },
        "index": {
          "description": "How to retry to connect to APNS servers",
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "apnsRetrySettings",
          "package": "push-notify",
          "partial": "Retry Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:apnsRetrySettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber to display as the badge of the application icon.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Apns",
          "name": "badge",
          "package": "push-notify",
          "signature": "Maybe Int",
          "source": "src/Network-PushNotify-Apns-Types.html#APNSmessage",
          "type": "function"
        },
        "index": {
          "description": "Number to display as the badge of the application icon",
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "badge",
          "package": "push-notify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:badge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Apns",
          "name": "body",
          "package": "push-notify",
          "signature": "Text",
          "source": "src/Network-PushNotify-Apns-Types.html#AlertDictionary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "body",
          "package": "push-notify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecloseAPNS\u003c/a\u003e\u003c/code\u003e stops the APNS service.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Apns",
          "name": "closeAPNS",
          "package": "push-notify",
          "signature": "APNSManager -\u003e IO ()",
          "source": "src/Network-PushNotify-Apns-Send.html#closeAPNS",
          "type": "function"
        },
        "index": {
          "description": "closeAPNS stops the APNS service",
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "closeAPNS",
          "normalized": "APNSManager-\u003eIO()",
          "package": "push-notify",
          "partial": "APNS",
          "signature": "APNSManager-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:closeAPNS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestination.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Apns",
          "name": "deviceTokens",
          "package": "push-notify",
          "signature": "HashSet DeviceToken",
          "source": "src/Network-PushNotify-Apns-Types.html#APNSmessage",
          "type": "function"
        },
        "index": {
          "description": "Destination",
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "deviceTokens",
          "package": "push-notify",
          "partial": "Tokens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:deviceTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne of the possible environments.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Apns",
          "name": "environment",
          "package": "push-notify",
          "signature": "Env",
          "source": "src/Network-PushNotify-Apns-Types.html#APNSConfig",
          "type": "function"
        },
        "index": {
          "description": "One of the possible environments",
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "environment",
          "package": "push-notify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:environment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifies when the notification is no longer valid and can be discarded. \n\u003c/p\u003e",
          "module": "Network.PushNotify.Apns",
          "name": "expiry",
          "package": "push-notify",
          "signature": "Maybe UTCTime",
          "source": "src/Network-PushNotify-Apns-Types.html#APNSmessage",
          "type": "function"
        },
        "index": {
          "description": "Identifies when the notification is no longer valid and can be discarded",
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "expiry",
          "package": "push-notify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:expiry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efeedBackAPNS\u003c/a\u003e\u003c/code\u003e connects to the Feedback service.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Apns",
          "name": "feedBackAPNS",
          "package": "push-notify",
          "signature": "APNSConfig -\u003e IO APNSFeedBackresult",
          "source": "src/Network-PushNotify-Apns-Send.html#feedBackAPNS",
          "type": "function"
        },
        "index": {
          "description": "feedBackAPNS connects to the Feedback service",
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "feedBackAPNS",
          "normalized": "APNSConfig-\u003eIO APNSFeedBackresult",
          "package": "push-notify",
          "partial": "Back APNS",
          "signature": "APNSConfig-\u003eIO APNSFeedBackresult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:feedBackAPNS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Apns",
          "name": "launch_image",
          "package": "push-notify",
          "signature": "Text",
          "source": "src/Network-PushNotify-Apns-Types.html#AlertDictionary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "launch_image",
          "package": "push-notify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:launch_image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Apns",
          "name": "loc_args",
          "package": "push-notify",
          "signature": "[Text]",
          "source": "src/Network-PushNotify-Apns-Types.html#AlertDictionary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "loc_args",
          "normalized": "[Text]",
          "package": "push-notify",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:loc_args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Apns",
          "name": "loc_key",
          "package": "push-notify",
          "signature": "Text",
          "source": "src/Network-PushNotify-Apns-Types.html#AlertDictionary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "loc_key",
          "package": "push-notify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:loc_key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtra information.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Apns",
          "name": "rest",
          "package": "push-notify",
          "signature": "Maybe Object",
          "source": "src/Network-PushNotify-Apns-Types.html#APNSmessage",
          "type": "function"
        },
        "index": {
          "description": "Extra information",
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "rest",
          "package": "push-notify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:rest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esendAPNS\u003c/a\u003e\u003c/code\u003e sends the message to a APNS Server.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Apns",
          "name": "sendAPNS",
          "package": "push-notify",
          "signature": "APNSManager -\u003e APNSmessage -\u003e IO APNSresult",
          "source": "src/Network-PushNotify-Apns-Send.html#sendAPNS",
          "type": "function"
        },
        "index": {
          "description": "sendAPNS sends the message to APNS Server",
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "sendAPNS",
          "normalized": "APNSManager-\u003eAPNSmessage-\u003eIO APNSresult",
          "package": "push-notify",
          "partial": "APNS",
          "signature": "APNSManager-\u003eAPNSmessage-\u003eIO APNSresult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:sendAPNS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of a sound file in the application bundle.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Apns",
          "name": "sound",
          "package": "push-notify",
          "signature": "Text",
          "source": "src/Network-PushNotify-Apns-Types.html#APNSmessage",
          "type": "function"
        },
        "index": {
          "description": "The name of sound file in the application bundle",
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "sound",
          "package": "push-notify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:sound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003estartAPNS\u003c/a\u003e\u003c/code\u003e starts the APNS service.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Apns",
          "name": "startAPNS",
          "package": "push-notify",
          "signature": "APNSConfig -\u003e IO APNSManager",
          "source": "src/Network-PushNotify-Apns-Send.html#startAPNS",
          "type": "function"
        },
        "index": {
          "description": "startAPNS starts the APNS service",
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "startAPNS",
          "normalized": "APNSConfig-\u003eIO APNSManager",
          "package": "push-notify",
          "partial": "APNS",
          "signature": "APNSConfig-\u003eIO APNSManager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:startAPNS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Apns",
          "name": "successfulTokens",
          "package": "push-notify",
          "signature": "HashSet DeviceToken",
          "source": "src/Network-PushNotify-Apns-Types.html#APNSresult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "successfulTokens",
          "package": "push-notify",
          "partial": "Tokens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:successfulTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe time to wait for a server response. (microseconds)\n\u003c/p\u003e",
          "module": "Network.PushNotify.Apns",
          "name": "timeoutLimit",
          "package": "push-notify",
          "signature": "Int",
          "source": "src/Network-PushNotify-Apns-Types.html#APNSConfig",
          "type": "function"
        },
        "index": {
          "description": "The time to wait for server response microseconds",
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "timeoutLimit",
          "package": "push-notify",
          "partial": "Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:timeoutLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFailed tokens that you need to resend the message to,\n because there was a problem.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Apns",
          "name": "toReSendTokens",
          "package": "push-notify",
          "signature": "HashSet DeviceToken",
          "source": "src/Network-PushNotify-Apns-Types.html#APNSresult",
          "type": "function"
        },
        "index": {
          "description": "Failed tokens that you need to resend the message to because there was problem",
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "toReSendTokens",
          "package": "push-notify",
          "partial": "Re Send Tokens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:toReSendTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDevices tokens and time indicating when APNS determined\n that the application no longer exists on the device.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Apns",
          "name": "unRegisteredTokens",
          "package": "push-notify",
          "signature": "HashMap DeviceToken UTCTime",
          "source": "src/Network-PushNotify-Apns-Types.html#APNSFeedBackresult",
          "type": "function"
        },
        "index": {
          "description": "Devices tokens and time indicating when APNS determined that the application no longer exists on the device",
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "unRegisteredTokens",
          "package": "push-notify",
          "partial": "Registered Tokens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:unRegisteredTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewithAPNS\u003c/a\u003e\u003c/code\u003e creates a new manager, uses it in the provided function, and then releases it.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Apns",
          "name": "withAPNS",
          "package": "push-notify",
          "signature": "APNSConfig -\u003e (APNSManager -\u003e IO a) -\u003e IO a",
          "source": "src/Network-PushNotify-Apns-Send.html#withAPNS",
          "type": "function"
        },
        "index": {
          "description": "withAPNS creates new manager uses it in the provided function and then releases it",
          "hierarchy": "Network PushNotify Apns",
          "module": "Network.PushNotify.Apns",
          "name": "withAPNS",
          "normalized": "APNSConfig-\u003e(APNSManager-\u003eIO a)-\u003eIO a",
          "package": "push-notify",
          "partial": "APNS",
          "signature": "APNSConfig-\u003e(APNSManager-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Apns.html#v:withAPNS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis Module define the main data types for sending Push Notifications through Google Cloud Messaging.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "Types",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Gcm-Types.html",
          "type": "module"
        },
        "index": {
          "description": "This Module define the main data types for sending Push Notifications through Google Cloud Messaging",
          "hierarchy": "Network PushNotify Gcm Types",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "Types",
          "package": "push-notify",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eGCMHttpConfig\u003c/a\u003e\u003c/code\u003e represents the main necessary information for sending notifications through GCM.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "GCMHttpConfig",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Gcm-Types.html#GCMHttpConfig",
          "type": "data"
        },
        "index": {
          "description": "GCMHttpConfig represents the main necessary information for sending notifications through GCM",
          "hierarchy": "Network PushNotify Gcm Types",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "GCMHttpConfig",
          "package": "push-notify",
          "partial": "GCMHttp Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#t:GCMHttpConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eGCMmessage\u003c/a\u003e\u003c/code\u003e represents a message to be sent through GCM. In general cases, you can use the \u003ccode\u003e\u003ca\u003eDefault\u003c/a\u003e\u003c/code\u003e value and only specify \u003ccode\u003e\u003ca\u003eregistration_ids\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edata_object\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOn the other hand, if you want to use the rest of specific aspects, you can find more information on GCM website.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "GCMmessage",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Gcm-Types.html#GCMmessage",
          "type": "data"
        },
        "index": {
          "description": "GCMmessage represents message to be sent through GCM In general cases you can use the Default value and only specify registration ids and data object On the other hand if you want to use the rest of specific aspects you can find more information on GCM website",
          "hierarchy": "Network PushNotify Gcm Types",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "GCMmessage",
          "package": "push-notify",
          "partial": "GCMmessage",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#t:GCMmessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eGCMresult\u003c/a\u003e\u003c/code\u003e represents information about messages after a communication with GCM Servers.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "GCMresult",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Gcm-Types.html#GCMresult",
          "type": "data"
        },
        "index": {
          "description": "GCMresult represents information about messages after communication with GCM Servers",
          "hierarchy": "Network PushNotify Gcm Types",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "GCMresult",
          "package": "push-notify",
          "partial": "GCMresult",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#t:GCMresult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRegId\u003c/a\u003e\u003c/code\u003e is an unique identifier of an app/device, provided by GCM.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "RegId",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Gcm-Types.html#RegId",
          "type": "type"
        },
        "index": {
          "description": "RegId is an unique identifier of an app device provided by GCM",
          "hierarchy": "Network PushNotify Gcm Types",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "RegId",
          "package": "push-notify",
          "partial": "Reg Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#t:RegId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.PushNotify.Gcm.Types\",\"Network.PushNotify.Gcm\"]",
          "name": "GCMHttpConfig",
          "package": "push-notify",
          "signature": "GCMHttpConfig",
          "source": "src/Network-PushNotify-Gcm-Types.html#GCMHttpConfig",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:GCMHttpConfig\",\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm.html#v:GCMHttpConfig\"]"
        },
        "index": {
          "hierarchy": "Network PushNotify Gcm Types",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "GCMHttpConfig",
          "package": "push-notify",
          "partial": "GCMHttp Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:GCMHttpConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.PushNotify.Gcm.Types\",\"Network.PushNotify.Gcm\"]",
          "name": "GCMmessage",
          "package": "push-notify",
          "signature": "GCMmessage",
          "source": "src/Network-PushNotify-Gcm-Types.html#GCMmessage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:GCMmessage\",\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm.html#v:GCMmessage\"]"
        },
        "index": {
          "hierarchy": "Network PushNotify Gcm Types",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "GCMmessage",
          "package": "push-notify",
          "partial": "GCMmessage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:GCMmessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.PushNotify.Gcm.Types\",\"Network.PushNotify.Gcm\"]",
          "name": "GCMresult",
          "package": "push-notify",
          "signature": "GCMresult",
          "source": "src/Network-PushNotify-Gcm-Types.html#GCMresult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:GCMresult\",\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm.html#v:GCMresult\"]"
        },
        "index": {
          "hierarchy": "Network PushNotify Gcm Types",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "GCMresult",
          "package": "push-notify",
          "partial": "GCMresult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:GCMresult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApi key provided by Google.\n\u003c/p\u003e",
          "module": "[\"Network.PushNotify.Gcm.Types\",\"Network.PushNotify.Gcm\"]",
          "name": "apiKey",
          "package": "push-notify",
          "signature": "Text",
          "source": "src/Network-PushNotify-Gcm-Types.html#GCMHttpConfig",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:apiKey\",\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm.html#v:apiKey\"]"
        },
        "index": {
          "description": "Api key provided by Google",
          "hierarchy": "Network PushNotify Gcm Types",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "apiKey",
          "package": "push-notify",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:apiKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of results that contain a canonical registration ID.\n\u003c/p\u003e",
          "module": "[\"Network.PushNotify.Gcm.Types\",\"Network.PushNotify.Gcm\"]",
          "name": "canonical_ids",
          "package": "push-notify",
          "signature": "Maybe Int",
          "source": "src/Network-PushNotify-Gcm-Types.html#GCMresult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:canonical_ids\",\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm.html#v:canonical_ids\"]"
        },
        "index": {
          "description": "Number of results that contain canonical registration ID",
          "hierarchy": "Network PushNotify Gcm Types",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "canonical_ids",
          "package": "push-notify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:canonical_ids"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.PushNotify.Gcm.Types\",\"Network.PushNotify.Gcm\"]",
          "name": "collapse_key",
          "package": "push-notify",
          "signature": "Maybe Text",
          "source": "src/Network-PushNotify-Gcm-Types.html#GCMmessage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:collapse_key\",\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm.html#v:collapse_key\"]"
        },
        "index": {
          "hierarchy": "Network PushNotify Gcm Types",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "collapse_key",
          "package": "push-notify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:collapse_key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMain JSON data to be sent.\n\u003c/p\u003e",
          "module": "[\"Network.PushNotify.Gcm.Types\",\"Network.PushNotify.Gcm\"]",
          "name": "data_object",
          "package": "push-notify",
          "signature": "Maybe Object",
          "source": "src/Network-PushNotify-Gcm-Types.html#GCMmessage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:data_object\",\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm.html#v:data_object\"]"
        },
        "index": {
          "description": "Main JSON data to be sent",
          "hierarchy": "Network PushNotify Gcm Types",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "data_object",
          "package": "push-notify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:data_object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.PushNotify.Gcm.Types\",\"Network.PushNotify.Gcm\"]",
          "name": "delay_while_idle",
          "package": "push-notify",
          "signature": "Bool",
          "source": "src/Network-PushNotify-Gcm-Types.html#GCMmessage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:delay_while_idle\",\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm.html#v:delay_while_idle\"]"
        },
        "index": {
          "hierarchy": "Network PushNotify Gcm Types",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "delay_while_idle",
          "package": "push-notify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:delay_while_idle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.PushNotify.Gcm.Types\",\"Network.PushNotify.Gcm\"]",
          "name": "dry_run",
          "package": "push-notify",
          "signature": "Bool",
          "source": "src/Network-PushNotify-Gcm-Types.html#GCMmessage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:dry_run\",\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm.html#v:dry_run\"]"
        },
        "index": {
          "hierarchy": "Network PushNotify Gcm Types",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "dry_run",
          "package": "push-notify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:dry_run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFailed regIds with the rest of the possible errors\n (probably non-recoverable errors).\n\u003c/p\u003e",
          "module": "[\"Network.PushNotify.Gcm.Types\",\"Network.PushNotify.Gcm\"]",
          "name": "errorRest",
          "package": "push-notify",
          "signature": "HashMap RegId Text",
          "source": "src/Network-PushNotify-Gcm-Types.html#GCMresult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:errorRest\",\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm.html#v:errorRest\"]"
        },
        "index": {
          "description": "Failed regIds with the rest of the possible errors probably non-recoverable errors",
          "hierarchy": "Network PushNotify Gcm Types",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "errorRest",
          "package": "push-notify",
          "partial": "Rest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:errorRest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFailed regIds that is necessary to resend the message to,\n because there was an internal problem in GCM servers.\n\u003c/p\u003e",
          "module": "[\"Network.PushNotify.Gcm.Types\",\"Network.PushNotify.Gcm\"]",
          "name": "errorToReSend",
          "package": "push-notify",
          "signature": "HashSet RegId",
          "source": "src/Network-PushNotify-Gcm-Types.html#GCMresult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:errorToReSend\",\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm.html#v:errorToReSend\"]"
        },
        "index": {
          "description": "Failed regIds that is necessary to resend the message to because there was an internal problem in GCM servers",
          "hierarchy": "Network PushNotify Gcm Types",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "errorToReSend",
          "package": "push-notify",
          "partial": "To Re Send",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:errorToReSend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFailed regIds that need to be removed.\n\u003c/p\u003e",
          "module": "[\"Network.PushNotify.Gcm.Types\",\"Network.PushNotify.Gcm\"]",
          "name": "errorUnRegistered",
          "package": "push-notify",
          "signature": "HashSet RegId",
          "source": "src/Network-PushNotify-Gcm-Types.html#GCMresult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:errorUnRegistered\",\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm.html#v:errorUnRegistered\"]"
        },
        "index": {
          "description": "Failed regIds that need to be removed",
          "hierarchy": "Network PushNotify Gcm Types",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "errorUnRegistered",
          "package": "push-notify",
          "partial": "Un Registered",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:errorUnRegistered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of messages that could not be processed.\n\u003c/p\u003e",
          "module": "[\"Network.PushNotify.Gcm.Types\",\"Network.PushNotify.Gcm\"]",
          "name": "failure",
          "package": "push-notify",
          "signature": "Maybe Int",
          "source": "src/Network-PushNotify-Gcm-Types.html#GCMresult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:failure\",\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm.html#v:failure\"]"
        },
        "index": {
          "description": "Number of messages that could not be processed",
          "hierarchy": "Network PushNotify Gcm Types",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "failure",
          "package": "push-notify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:failure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuccessful RegIds, and its \"message_id\".\n\u003c/p\u003e",
          "module": "[\"Network.PushNotify.Gcm.Types\",\"Network.PushNotify.Gcm\"]",
          "name": "messagesIds",
          "package": "push-notify",
          "signature": "HashMap RegId Text",
          "source": "src/Network-PushNotify-Gcm-Types.html#GCMresult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:messagesIds\",\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm.html#v:messagesIds\"]"
        },
        "index": {
          "description": "Successful RegIds and its message id",
          "hierarchy": "Network PushNotify Gcm Types",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "messagesIds",
          "package": "push-notify",
          "partial": "Ids",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:messagesIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnique ID (number) identifying the multicast message.\n\u003c/p\u003e",
          "module": "[\"Network.PushNotify.Gcm.Types\",\"Network.PushNotify.Gcm\"]",
          "name": "multicast_id",
          "package": "push-notify",
          "signature": "Maybe Integer",
          "source": "src/Network-PushNotify-Gcm-Types.html#GCMresult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:multicast_id\",\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm.html#v:multicast_id\"]"
        },
        "index": {
          "description": "Unique ID number identifying the multicast message",
          "hierarchy": "Network PushNotify Gcm Types",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "multicast_id",
          "package": "push-notify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:multicast_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegIds that need to be replaced.\n\u003c/p\u003e",
          "module": "[\"Network.PushNotify.Gcm.Types\",\"Network.PushNotify.Gcm\"]",
          "name": "newRegids",
          "package": "push-notify",
          "signature": "HashMap RegId RegId",
          "source": "src/Network-PushNotify-Gcm-Types.html#GCMresult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:newRegids\",\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm.html#v:newRegids\"]"
        },
        "index": {
          "description": "RegIds that need to be replaced",
          "hierarchy": "Network PushNotify Gcm Types",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "newRegids",
          "package": "push-notify",
          "partial": "Regids",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:newRegids"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of attemps to send the message to the server.\n\u003c/p\u003e",
          "module": "[\"Network.PushNotify.Gcm.Types\",\"Network.PushNotify.Gcm\"]",
          "name": "numRet",
          "package": "push-notify",
          "signature": "Int",
          "source": "src/Network-PushNotify-Gcm-Types.html#GCMHttpConfig",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:numRet\",\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm.html#v:numRet\"]"
        },
        "index": {
          "description": "Number of attemps to send the message to the server",
          "hierarchy": "Network PushNotify Gcm Types",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "numRet",
          "package": "push-notify",
          "partial": "Ret",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:numRet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestination.\n\u003c/p\u003e",
          "module": "[\"Network.PushNotify.Gcm.Types\",\"Network.PushNotify.Gcm\"]",
          "name": "registration_ids",
          "package": "push-notify",
          "signature": "HashSet RegId",
          "source": "src/Network-PushNotify-Gcm-Types.html#GCMmessage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:registration_ids\",\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm.html#v:registration_ids\"]"
        },
        "index": {
          "description": "Destination",
          "hierarchy": "Network PushNotify Gcm Types",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "registration_ids",
          "package": "push-notify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:registration_ids"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.PushNotify.Gcm.Types\",\"Network.PushNotify.Gcm\"]",
          "name": "restricted_package_name",
          "package": "push-notify",
          "signature": "Maybe Text",
          "source": "src/Network-PushNotify-Gcm-Types.html#GCMmessage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:restricted_package_name\",\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm.html#v:restricted_package_name\"]"
        },
        "index": {
          "hierarchy": "Network PushNotify Gcm Types",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "restricted_package_name",
          "package": "push-notify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:restricted_package_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of messages that were processed without an error.\n\u003c/p\u003e",
          "module": "[\"Network.PushNotify.Gcm.Types\",\"Network.PushNotify.Gcm\"]",
          "name": "success",
          "package": "push-notify",
          "signature": "Maybe Int",
          "source": "src/Network-PushNotify-Gcm-Types.html#GCMresult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:success\",\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm.html#v:success\"]"
        },
        "index": {
          "description": "Number of messages that were processed without an error",
          "hierarchy": "Network PushNotify Gcm Types",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "success",
          "package": "push-notify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.PushNotify.Gcm.Types\",\"Network.PushNotify.Gcm\"]",
          "name": "time_to_live",
          "package": "push-notify",
          "signature": "Maybe Int",
          "source": "src/Network-PushNotify-Gcm-Types.html#GCMmessage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:time_to_live\",\"http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm.html#v:time_to_live\"]"
        },
        "index": {
          "hierarchy": "Network PushNotify Gcm Types",
          "module": "Network.PushNotify.Gcm.Types",
          "name": "time_to_live",
          "package": "push-notify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm-Types.html#v:time_to_live"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library defines an API for communicating with Android powered devices, sending Push Notifications through Google Cloud Messaging (HTTP connection).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.PushNotify.Gcm",
          "name": "Gcm",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Gcm.html",
          "type": "module"
        },
        "index": {
          "description": "This library defines an API for communicating with Android powered devices sending Push Notifications through Google Cloud Messaging HTTP connection",
          "hierarchy": "Network PushNotify Gcm",
          "module": "Network.PushNotify.Gcm",
          "name": "Gcm",
          "package": "push-notify",
          "partial": "Gcm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eGCMHttpConfig\u003c/a\u003e\u003c/code\u003e represents the main necessary information for sending notifications through GCM.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Gcm",
          "name": "GCMHttpConfig",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Gcm-Types.html#GCMHttpConfig",
          "type": "data"
        },
        "index": {
          "description": "GCMHttpConfig represents the main necessary information for sending notifications through GCM",
          "hierarchy": "Network PushNotify Gcm",
          "module": "Network.PushNotify.Gcm",
          "name": "GCMHttpConfig",
          "package": "push-notify",
          "partial": "GCMHttp Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm.html#t:GCMHttpConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eGCMmessage\u003c/a\u003e\u003c/code\u003e represents a message to be sent through GCM. In general cases, you can use the \u003ccode\u003e\u003ca\u003eDefault\u003c/a\u003e\u003c/code\u003e value and only specify \u003ccode\u003e\u003ca\u003eregistration_ids\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edata_object\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOn the other hand, if you want to use the rest of specific aspects, you can find more information on GCM website.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Gcm",
          "name": "GCMmessage",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Gcm-Types.html#GCMmessage",
          "type": "data"
        },
        "index": {
          "description": "GCMmessage represents message to be sent through GCM In general cases you can use the Default value and only specify registration ids and data object On the other hand if you want to use the rest of specific aspects you can find more information on GCM website",
          "hierarchy": "Network PushNotify Gcm",
          "module": "Network.PushNotify.Gcm",
          "name": "GCMmessage",
          "package": "push-notify",
          "partial": "GCMmessage",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm.html#t:GCMmessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eGCMresult\u003c/a\u003e\u003c/code\u003e represents information about messages after a communication with GCM Servers.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Gcm",
          "name": "GCMresult",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Gcm-Types.html#GCMresult",
          "type": "data"
        },
        "index": {
          "description": "GCMresult represents information about messages after communication with GCM Servers",
          "hierarchy": "Network PushNotify Gcm",
          "module": "Network.PushNotify.Gcm",
          "name": "GCMresult",
          "package": "push-notify",
          "partial": "GCMresult",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm.html#t:GCMresult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRegId\u003c/a\u003e\u003c/code\u003e is an unique identifier of an app/device, provided by GCM.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Gcm",
          "name": "RegId",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Gcm-Types.html#RegId",
          "type": "type"
        },
        "index": {
          "description": "RegId is an unique identifier of an app device provided by GCM",
          "hierarchy": "Network PushNotify Gcm",
          "module": "Network.PushNotify.Gcm",
          "name": "RegId",
          "package": "push-notify",
          "partial": "Reg Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm.html#t:RegId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esendGCM\u003c/a\u003e\u003c/code\u003e sends the message to a GCM Server.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Gcm",
          "name": "sendGCM",
          "package": "push-notify",
          "signature": "Manager -\u003e GCMHttpConfig -\u003e GCMmessage -\u003e IO GCMresult",
          "source": "src/Network-PushNotify-Gcm-Send.html#sendGCM",
          "type": "function"
        },
        "index": {
          "description": "sendGCM sends the message to GCM Server",
          "hierarchy": "Network PushNotify Gcm",
          "module": "Network.PushNotify.Gcm",
          "name": "sendGCM",
          "normalized": "Manager-\u003eGCMHttpConfig-\u003eGCMmessage-\u003eIO GCMresult",
          "package": "push-notify",
          "partial": "GCM",
          "signature": "Manager-\u003eGCMHttpConfig-\u003eGCMmessage-\u003eIO GCMresult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Gcm.html#v:sendGCM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library defines an API for communicating with WPhone powered devices, sending Push Notifications through Microsoft Push Notification Service.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.PushNotify.Mpns",
          "name": "Mpns",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Mpns.html",
          "type": "module"
        },
        "index": {
          "description": "This library defines an API for communicating with WPhone powered devices sending Push Notifications through Microsoft Push Notification Service",
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "Mpns",
          "package": "push-notify",
          "partial": "Mpns",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eDeviceURI\u003c/a\u003e\u003c/code\u003e is an unique identifier of an app/device, provided by MPNS.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Mpns",
          "name": "DeviceURI",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Mpns-Types.html#DeviceURI",
          "type": "type"
        },
        "index": {
          "description": "DeviceURI is an unique identifier of an app device provided by MPNS",
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "DeviceURI",
          "package": "push-notify",
          "partial": "Device URI",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#t:DeviceURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMPNSConfig\u003c/a\u003e\u003c/code\u003e represents the main necessary information for sending notifications through MPNS.\n If it is not necessary a secure connection, the default value can be used.\n\u003c/p\u003e\u003cp\u003eFor loading the certificate and privateKey you can use: \u003ccode\u003e\u003ca\u003efileReadCertificate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efileReadPrivateKey\u003c/a\u003e\u003c/code\u003e .\n\u003c/p\u003e",
          "module": "Network.PushNotify.Mpns",
          "name": "MPNSConfig",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSConfig",
          "type": "data"
        },
        "index": {
          "description": "MPNSConfig represents the main necessary information for sending notifications through MPNS If it is not necessary secure connection the default value can be used For loading the certificate and privateKey you can use fileReadCertificate and fileReadPrivateKey",
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "MPNSConfig",
          "package": "push-notify",
          "partial": "MPNSConfig",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#t:MPNSConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMPNSType\u003c/a\u003e\u003c/code\u003e represents the batching interval.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Mpns",
          "name": "MPNSInterval",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSInterval",
          "type": "data"
        },
        "index": {
          "description": "MPNSType represents the batching interval",
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "MPNSInterval",
          "package": "push-notify",
          "partial": "MPNSInterval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#t:MPNSInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMPNSType\u003c/a\u003e\u003c/code\u003e represents the three different kind of notifications.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Mpns",
          "name": "MPNSType",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSType",
          "type": "data"
        },
        "index": {
          "description": "MPNSType represents the three different kind of notifications",
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "MPNSType",
          "package": "push-notify",
          "partial": "MPNSType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#t:MPNSType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMPNSconStatus\u003c/a\u003e\u003c/code\u003e represents the status of a connection.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Mpns",
          "name": "MPNSconStatus",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSconStatus",
          "type": "data"
        },
        "index": {
          "description": "MPNSconStatus represents the status of connection",
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "MPNSconStatus",
          "package": "push-notify",
          "partial": "MPNScon Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#t:MPNSconStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMPNSinfo\u003c/a\u003e\u003c/code\u003e represents information about a specific notification and device, after a communication with MPNS Servers.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Mpns",
          "name": "MPNSinfo",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSinfo",
          "type": "data"
        },
        "index": {
          "description": "MPNSinfo represents information about specific notification and device after communication with MPNS Servers",
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "MPNSinfo",
          "package": "push-notify",
          "partial": "MPNSinfo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#t:MPNSinfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMPNSmessage\u003c/a\u003e\u003c/code\u003e represents a message to be sent through MPNS.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Mpns",
          "name": "MPNSmessage",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSmessage",
          "type": "data"
        },
        "index": {
          "description": "MPNSmessage represents message to be sent through MPNS",
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "MPNSmessage",
          "package": "push-notify",
          "partial": "MPNSmessage",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#t:MPNSmessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMPNSnotifStatus\u003c/a\u003e\u003c/code\u003e represents the status of a notification which has been sent.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Mpns",
          "name": "MPNSnotifStatus",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSnotifStatus",
          "type": "data"
        },
        "index": {
          "description": "MPNSnotifStatus represents the status of notification which has been sent",
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "MPNSnotifStatus",
          "package": "push-notify",
          "partial": "MPNSnotif Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#t:MPNSnotifStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMPNSresult\u003c/a\u003e\u003c/code\u003e represents information about messages after a communication with MPNS Servers.\n\u003c/p\u003e\u003cp\u003eTake into account that a successful result after communicating with MPNS servers does not mean that the notification was successfully sent. It is necessary to check the \u003ccode\u003e\u003ca\u003eMPNSinfo\u003c/a\u003e\u003c/code\u003e , provided by the servers, to really know about the state of the notification.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Mpns",
          "name": "MPNSresult",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSresult",
          "type": "data"
        },
        "index": {
          "description": "MPNSresult represents information about messages after communication with MPNS Servers Take into account that successful result after communicating with MPNS servers does not mean that the notification was successfully sent It is necessary to check the MPNSinfo provided by the servers to really know about the state of the notification",
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "MPNSresult",
          "package": "push-notify",
          "partial": "MPNSresult",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#t:MPNSresult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMPNSsubStatus\u003c/a\u003e\u003c/code\u003e represents the status of a subscription.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Mpns",
          "name": "MPNSsubStatus",
          "package": "push-notify",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSsubStatus",
          "type": "data"
        },
        "index": {
          "description": "MPNSsubStatus represents the status of subscription",
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "MPNSsubStatus",
          "package": "push-notify",
          "partial": "MPNSsub Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#t:MPNSsubStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Mpns",
          "name": "Active",
          "package": "push-notify",
          "signature": "Active",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSsubStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "Active",
          "package": "push-notify",
          "partial": "Active",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:Active"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Mpns",
          "name": "Connected",
          "package": "push-notify",
          "signature": "Connected",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSconStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "Connected",
          "package": "push-notify",
          "partial": "Connected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:Connected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Mpns",
          "name": "Disconnected",
          "package": "push-notify",
          "signature": "Disconnected",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSconStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "Disconnected",
          "package": "push-notify",
          "partial": "Disconnected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:Disconnected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Mpns",
          "name": "Dropped",
          "package": "push-notify",
          "signature": "Dropped",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSnotifStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "Dropped",
          "package": "push-notify",
          "partial": "Dropped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:Dropped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Mpns",
          "name": "Expired",
          "package": "push-notify",
          "signature": "Expired",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSsubStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "Expired",
          "package": "push-notify",
          "partial": "Expired",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:Expired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImmediate delivery.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Mpns",
          "name": "Immediate",
          "package": "push-notify",
          "signature": "Immediate",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSInterval",
          "type": "function"
        },
        "index": {
          "description": "Immediate delivery",
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "Immediate",
          "package": "push-notify",
          "partial": "Immediate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:Immediate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Mpns",
          "name": "InActive",
          "package": "push-notify",
          "signature": "InActive",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSconStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "InActive",
          "package": "push-notify",
          "partial": "In Active",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:InActive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Mpns",
          "name": "MPNSConfig",
          "package": "push-notify",
          "signature": "MPNSConfig",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "MPNSConfig",
          "package": "push-notify",
          "partial": "MPNSConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:MPNSConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Mpns",
          "name": "MPNSinfo",
          "package": "push-notify",
          "signature": "MPNSinfo",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "MPNSinfo",
          "package": "push-notify",
          "partial": "MPNSinfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:MPNSinfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Mpns",
          "name": "MPNSmessage",
          "package": "push-notify",
          "signature": "MPNSmessage",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSmessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "MPNSmessage",
          "package": "push-notify",
          "partial": "MPNSmessage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:MPNSmessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Mpns",
          "name": "MPNSresult",
          "package": "push-notify",
          "signature": "MPNSresult",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSresult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "MPNSresult",
          "package": "push-notify",
          "partial": "MPNSresult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:MPNSresult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Mpns",
          "name": "QueueFull",
          "package": "push-notify",
          "signature": "QueueFull",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSnotifStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "QueueFull",
          "package": "push-notify",
          "partial": "Queue Full",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:QueueFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Mpns",
          "name": "Raw",
          "package": "push-notify",
          "signature": "Raw",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "Raw",
          "package": "push-notify",
          "partial": "Raw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:Raw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Mpns",
          "name": "Received",
          "package": "push-notify",
          "signature": "Received",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSnotifStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "Received",
          "package": "push-notify",
          "partial": "Received",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:Received"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelivered within 450 seconds.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Mpns",
          "name": "Sec450",
          "package": "push-notify",
          "signature": "Sec450",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSInterval",
          "type": "function"
        },
        "index": {
          "description": "Delivered within seconds",
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "Sec450",
          "package": "push-notify",
          "partial": "Sec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:Sec450"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelivered within 900 seconds.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Mpns",
          "name": "Sec900",
          "package": "push-notify",
          "signature": "Sec900",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSInterval",
          "type": "function"
        },
        "index": {
          "description": "Delivered within seconds",
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "Sec900",
          "package": "push-notify",
          "partial": "Sec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:Sec900"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Mpns",
          "name": "Suppressed",
          "package": "push-notify",
          "signature": "Suppressed",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSnotifStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "Suppressed",
          "package": "push-notify",
          "partial": "Suppressed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:Suppressed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Mpns",
          "name": "TempDisconnected",
          "package": "push-notify",
          "signature": "TempDisconnected",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSconStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "TempDisconnected",
          "package": "push-notify",
          "partial": "Temp Disconnected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:TempDisconnected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Mpns",
          "name": "Tile",
          "package": "push-notify",
          "signature": "Tile",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "Tile",
          "package": "push-notify",
          "partial": "Tile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:Tile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Mpns",
          "name": "Toast",
          "package": "push-notify",
          "signature": "Toast",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "Toast",
          "package": "push-notify",
          "partial": "Toast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:Toast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen to deliver the notification.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Mpns",
          "name": "batching_interval",
          "package": "push-notify",
          "signature": "MPNSInterval",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSmessage",
          "type": "function"
        },
        "index": {
          "description": "When to deliver the notification",
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "batching_interval",
          "package": "push-notify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:batching_interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Mpns",
          "name": "connectionStatus",
          "package": "push-notify",
          "signature": "Maybe MPNSconStatus",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "connectionStatus",
          "package": "push-notify",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:connectionStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestination.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Mpns",
          "name": "deviceURIs",
          "package": "push-notify",
          "signature": "HashSet DeviceURI",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSmessage",
          "type": "function"
        },
        "index": {
          "description": "Destination",
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "deviceURIs",
          "package": "push-notify",
          "partial": "URIs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:deviceURIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFailed notifications that you need to resend,\n because there was a problem connecting with MPNS servers.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Mpns",
          "name": "errorException",
          "package": "push-notify",
          "signature": "HashMap DeviceURI SomeException",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSresult",
          "type": "function"
        },
        "index": {
          "description": "Failed notifications that you need to resend because there was problem connecting with MPNS servers",
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "errorException",
          "package": "push-notify",
          "partial": "Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:errorException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCertificate (only necessary for secure connections).\n\u003c/p\u003e",
          "module": "Network.PushNotify.Mpns",
          "name": "mpnsCertificate",
          "package": "push-notify",
          "signature": "X509",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSConfig",
          "type": "function"
        },
        "index": {
          "description": "Certificate only necessary for secure connections",
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "mpnsCertificate",
          "package": "push-notify",
          "partial": "Certificate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:mpnsCertificate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrivate key (only necessary for secure connections).\n\u003c/p\u003e",
          "module": "Network.PushNotify.Mpns",
          "name": "mpnsPrivatekey",
          "package": "push-notify",
          "signature": "PrivateKey",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSConfig",
          "type": "function"
        },
        "index": {
          "description": "Private key only necessary for secure connections",
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "mpnsPrivatekey",
          "package": "push-notify",
          "partial": "Privatekey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:mpnsPrivatekey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Mpns",
          "name": "notificationStatus",
          "package": "push-notify",
          "signature": "Maybe MPNSnotifStatus",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "notificationStatus",
          "package": "push-notify",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:notificationStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of attemps to send the message to the server.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Mpns",
          "name": "numRet",
          "package": "push-notify",
          "signature": "Int",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSConfig",
          "type": "function"
        },
        "index": {
          "description": "Number of attemps to send the message to the server",
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "numRet",
          "package": "push-notify",
          "partial": "Ret",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:numRet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe XML data content to be sent.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Mpns",
          "name": "restXML",
          "package": "push-notify",
          "signature": "Document",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSmessage",
          "type": "function"
        },
        "index": {
          "description": "The XML data content to be sent",
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "restXML",
          "package": "push-notify",
          "partial": "XML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:restXML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esendMPNS\u003c/a\u003e\u003c/code\u003e sends the message to a MPNS Server.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Mpns",
          "name": "sendMPNS",
          "package": "push-notify",
          "signature": "Manager -\u003e MPNSConfig -\u003e MPNSmessage -\u003e IO MPNSresult",
          "source": "src/Network-PushNotify-Mpns-Send.html#sendMPNS",
          "type": "function"
        },
        "index": {
          "description": "sendMPNS sends the message to MPNS Server",
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "sendMPNS",
          "normalized": "Manager-\u003eMPNSConfig-\u003eMPNSmessage-\u003eIO MPNSresult",
          "package": "push-notify",
          "partial": "MPNS",
          "signature": "Manager-\u003eMPNSConfig-\u003eMPNSmessage-\u003eIO MPNSresult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:sendMPNS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PushNotify.Mpns",
          "name": "subscriptionStatus",
          "package": "push-notify",
          "signature": "Maybe MPNSsubStatus",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSinfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "subscriptionStatus",
          "package": "push-notify",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:subscriptionStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNotifications that were successfully sent. (To the server, not to device)\n\u003c/p\u003e",
          "module": "Network.PushNotify.Mpns",
          "name": "successfullResults",
          "package": "push-notify",
          "signature": "HashMap DeviceURI MPNSinfo",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSresult",
          "type": "function"
        },
        "index": {
          "description": "Notifications that were successfully sent To the server not to device",
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "successfullResults",
          "package": "push-notify",
          "partial": "Results",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:successfullResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe kind of notification.\n\u003c/p\u003e",
          "module": "Network.PushNotify.Mpns",
          "name": "target",
          "package": "push-notify",
          "signature": "MPNSType",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSmessage",
          "type": "function"
        },
        "index": {
          "description": "The kind of notification",
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "target",
          "package": "push-notify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:target"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo set a secure connection (HTTPS).\n\u003c/p\u003e",
          "module": "Network.PushNotify.Mpns",
          "name": "useSecure",
          "package": "push-notify",
          "signature": "Bool",
          "source": "src/Network-PushNotify-Mpns-Types.html#MPNSConfig",
          "type": "function"
        },
        "index": {
          "description": "To set secure connection HTTPS",
          "hierarchy": "Network PushNotify Mpns",
          "module": "Network.PushNotify.Mpns",
          "name": "useSecure",
          "package": "push-notify",
          "partial": "Secure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/push-notify/docs/Network-PushNotify-Mpns.html#v:useSecure"
      }
    }
  ]
]