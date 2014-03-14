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
        "word": "hszephyr"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple bindings to libzephyr.\n\u003c/p\u003e\u003cp\u003eAll functions in this module properly serialize access to the C\n   libzephyr and behave correctly with regard to \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e, so this\n   module should behave properly in threaded Haskell program.\n\u003c/p\u003e\u003cp\u003eAt present, however, we only support maintaining a single,\n   global, set of Zephyr subscriptions. This may be extended to\n   support multiple clients within the same Haskell program.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Zephyr",
          "name": "Zephyr",
          "package": "hszephyr",
          "source": "src/Network-Zephyr.html",
          "type": "module"
        },
        "index": {
          "description": "Simple bindings to libzephyr All functions in this module properly serialize access to the libzephyr and behave correctly with regard to forkIO so this module should behave properly in threaded Haskell program At present however we only support maintaining single global set of Zephyr subscriptions This may be extended to support multiple clients within the same Haskell program",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "Zephyr",
          "package": "hszephyr",
          "partial": "Zephyr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Zephyr",
          "name": "ZAuth",
          "package": "hszephyr",
          "source": "src/Network-Zephyr-CBits.html#ZAuth",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "ZAuth",
          "package": "hszephyr",
          "partial": "ZAuth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#t:ZAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eZNotice\u003c/a\u003e\u003c/code\u003e represents a Zephyr notice. All fields of this record\n      are filled-in for received notices. For outoing notices, only\n      the following fields are relevant:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003ez_class\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ez_instance\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ez_opcode\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ez_sender\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ez_default_fmt\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ez_kind\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ez_auth\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ez_fields\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Zephyr",
          "name": "ZNotice",
          "package": "hszephyr",
          "source": "src/Network-Zephyr-CBits.html#ZNotice",
          "type": "data"
        },
        "index": {
          "description": "ZNotice represents Zephyr notice All fields of this record are filled-in for received notices For outoing notices only the following fields are relevant class instance opcode sender default fmt kind auth fields",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "ZNotice",
          "package": "hszephyr",
          "partial": "ZNotice",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#t:ZNotice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eZNoticeKind\u003c/a\u003e\u003c/code\u003e represent the kinds of \u003ccode\u003e\u003ca\u003eZNotice\u003c/a\u003e\u003c/code\u003es sent or received\n   by the Zephyr system.\n\u003c/p\u003e",
          "module": "Network.Zephyr",
          "name": "ZNoticeKind",
          "package": "hszephyr",
          "source": "src/Network-Zephyr-CBits.html#ZNoticeKind",
          "type": "newtype"
        },
        "index": {
          "description": "ZNoticeKind represent the kinds of ZNotice sent or received by the Zephyr system",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "ZNoticeKind",
          "package": "hszephyr",
          "partial": "ZNotice Kind",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#t:ZNoticeKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a Zephyr triple for the purposes of subscribing or\n   unsubscribing to zephyrs.\n\u003c/p\u003e",
          "module": "Network.Zephyr",
          "name": "ZSubscription",
          "package": "hszephyr",
          "source": "src/Network-Zephyr-CBits.html#ZSubscription",
          "type": "data"
        },
        "index": {
          "description": "Represents Zephyr triple for the purposes of subscribing or unsubscribing to zephyrs",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "ZSubscription",
          "package": "hszephyr",
          "partial": "ZSubscription",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#t:ZSubscription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe message was received with\n correct authentication, or should be\n authenticated for outgoing notices.\n\u003c/p\u003e",
          "module": "Network.Zephyr",
          "name": "Authenticated",
          "package": "hszephyr",
          "signature": "Authenticated",
          "source": "src/Network-Zephyr-CBits.html#ZAuth",
          "type": "function"
        },
        "index": {
          "description": "The message was received with correct authentication or should be authenticated for outgoing notices",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "Authenticated",
          "package": "hszephyr",
          "partial": "Authenticated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:Authenticated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe message was received with\n invalid authentication.\n\u003c/p\u003e",
          "module": "Network.Zephyr",
          "name": "AuthenticationFailed",
          "package": "hszephyr",
          "signature": "AuthenticationFailed",
          "source": "src/Network-Zephyr-CBits.html#ZAuth",
          "type": "function"
        },
        "index": {
          "description": "The message was received with invalid authentication",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "AuthenticationFailed",
          "package": "hszephyr",
          "partial": "Authentication Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:AuthenticationFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe message was or will be sent\n with no authentication.\n\u003c/p\u003e",
          "module": "Network.Zephyr",
          "name": "Unauthenticated",
          "package": "hszephyr",
          "signature": "Unauthenticated",
          "source": "src/Network-Zephyr-CBits.html#ZAuth",
          "type": "function"
        },
        "index": {
          "description": "The message was or will be sent with no authentication",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "Unauthenticated",
          "package": "hszephyr",
          "partial": "Unauthenticated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:Unauthenticated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Zephyr",
          "name": "ZNotice",
          "package": "hszephyr",
          "signature": "ZNotice",
          "source": "src/Network-Zephyr-CBits.html#ZNotice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "ZNotice",
          "package": "hszephyr",
          "partial": "ZNotice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:ZNotice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Zephyr",
          "name": "ZNoticeKind",
          "package": "hszephyr",
          "signature": "ZNoticeKind",
          "source": "src/Network-Zephyr-CBits.html#ZNoticeKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "ZNoticeKind",
          "package": "hszephyr",
          "partial": "ZNotice Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:ZNoticeKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Zephyr",
          "name": "ZSubscription",
          "package": "hszephyr",
          "signature": "ZSubscription",
          "source": "src/Network-Zephyr-CBits.html#ZSubscription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "ZSubscription",
          "package": "hszephyr",
          "partial": "ZSubscription",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:ZSubscription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCancel all zephyr subscriptions.\n\u003c/p\u003e",
          "module": "Network.Zephyr",
          "name": "cancelSubscriptions",
          "package": "hszephyr",
          "signature": "IO ()",
          "source": "src/Network-Zephyr.html#cancelSubscriptions",
          "type": "function"
        },
        "index": {
          "description": "Cancel all zephyr subscriptions",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "cancelSubscriptions",
          "normalized": "IO()",
          "package": "hszephyr",
          "partial": "Subscriptions",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:cancelSubscriptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHolds the default display format used by outgoing Zephyrs by\n   \u003ccode\u003ezwrite\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Zephyr",
          "name": "defaultFmt",
          "package": "hszephyr",
          "signature": "ByteString",
          "source": "src/Network-Zephyr.html#defaultFmt",
          "type": "function"
        },
        "index": {
          "description": "Holds the default display format used by outgoing Zephyrs by zwrite",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "defaultFmt",
          "package": "hszephyr",
          "partial": "Fmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:defaultFmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default \u003ccode\u003e\u003ca\u003eZNotice\u003c/a\u003e\u003c/code\u003e suitable for use as a template when creating\n   a new notice for sending via \u003ccode\u003e\u003ca\u003esendNotice\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Zephyr",
          "name": "emptyNotice",
          "package": "hszephyr",
          "signature": "ZNotice",
          "source": "src/Network-Zephyr.html#emptyNotice",
          "type": "function"
        },
        "index": {
          "description": "default ZNotice suitable for use as template when creating new notice for sending via sendNotice",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "emptyNotice",
          "package": "hszephyr",
          "partial": "Notice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:emptyNotice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the realm of the current host.\n\u003c/p\u003e",
          "module": "Network.Zephyr",
          "name": "getRealm",
          "package": "hszephyr",
          "signature": "IO String",
          "source": "src/Network-Zephyr.html#getRealm",
          "type": "function"
        },
        "index": {
          "description": "Return the realm of the current host",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "getRealm",
          "package": "hszephyr",
          "partial": "Realm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:getRealm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the name of the current Zephyr sender.\n\u003c/p\u003e",
          "module": "Network.Zephyr",
          "name": "getSender",
          "package": "hszephyr",
          "signature": "IO String",
          "source": "src/Network-Zephyr.html#getSender",
          "type": "function"
        },
        "index": {
          "description": "Return the name of the current Zephyr sender",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "getSender",
          "package": "hszephyr",
          "partial": "Sender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:getSender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize libzephyr.\n\u003c/p\u003e",
          "module": "Network.Zephyr",
          "name": "initialize",
          "package": "hszephyr",
          "signature": "IO ()",
          "source": "src/Network-Zephyr.html#initialize",
          "type": "function"
        },
        "index": {
          "description": "Initialize libzephyr",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "initialize",
          "normalized": "IO()",
          "package": "hszephyr",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:initialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Zephyr",
          "name": "kind_acked",
          "package": "hszephyr",
          "signature": "ZNoticeKind",
          "source": "src/Network-Zephyr-CBits.html#kind_acked",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "kind_acked",
          "package": "hszephyr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:kind_acked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eZAuth\u003c/a\u003e\u003c/code\u003e represents the authentication used when sending or\n   receiving a Zephyr.\n\u003c/p\u003e",
          "module": "Network.Zephyr",
          "name": "kind_clientack",
          "package": "hszephyr",
          "signature": "ZNoticeKind",
          "source": "src/Network-Zephyr-CBits.html#kind_clientack",
          "type": "function"
        },
        "index": {
          "description": "ZAuth represents the authentication used when sending or receiving Zephyr",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "kind_clientack",
          "package": "hszephyr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:kind_clientack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Zephyr",
          "name": "kind_hmack",
          "package": "hszephyr",
          "signature": "ZNoticeKind",
          "source": "src/Network-Zephyr-CBits.html#kind_hmack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "kind_hmack",
          "package": "hszephyr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:kind_hmack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Zephyr",
          "name": "kind_hmctl",
          "package": "hszephyr",
          "signature": "ZNoticeKind",
          "source": "src/Network-Zephyr-CBits.html#kind_hmctl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "kind_hmctl",
          "package": "hszephyr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:kind_hmctl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Zephyr",
          "name": "kind_servack",
          "package": "hszephyr",
          "signature": "ZNoticeKind",
          "source": "src/Network-Zephyr-CBits.html#kind_servack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "kind_servack",
          "package": "hszephyr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:kind_servack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Zephyr",
          "name": "kind_servnak",
          "package": "hszephyr",
          "signature": "ZNoticeKind",
          "source": "src/Network-Zephyr-CBits.html#kind_servnak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "kind_servnak",
          "package": "hszephyr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:kind_servnak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Zephyr",
          "name": "kind_stat",
          "package": "hszephyr",
          "signature": "ZNoticeKind",
          "source": "src/Network-Zephyr-CBits.html#kind_stat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "kind_stat",
          "package": "hszephyr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:kind_stat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Zephyr",
          "name": "kind_unacked",
          "package": "hszephyr",
          "signature": "ZNoticeKind",
          "source": "src/Network-Zephyr-CBits.html#kind_unacked",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "kind_unacked",
          "package": "hszephyr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:kind_unacked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Zephyr",
          "name": "kind_unsafe",
          "package": "hszephyr",
          "signature": "ZNoticeKind",
          "source": "src/Network-Zephyr-CBits.html#kind_unsafe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "kind_unsafe",
          "package": "hszephyr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:kind_unsafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks for new incoming packets and then returns the number of\n   pending messages in the queue.\n\u003c/p\u003e",
          "module": "Network.Zephyr",
          "name": "pendingNotices",
          "package": "hszephyr",
          "signature": "IO Int",
          "source": "src/Network-Zephyr.html#pendingNotices",
          "type": "function"
        },
        "index": {
          "description": "Checks for new incoming packets and then returns the number of pending messages in the queue",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "pendingNotices",
          "package": "hszephyr",
          "partial": "Notices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:pendingNotices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive a \u003ccode\u003e\u003ca\u003eZNotice\u003c/a\u003e\u003c/code\u003e from the zephyr servers. Blocks until a\n   notice is available.\n\u003c/p\u003e",
          "module": "Network.Zephyr",
          "name": "receiveNotice",
          "package": "hszephyr",
          "signature": "IO ZNotice",
          "source": "src/Network-Zephyr.html#receiveNotice",
          "type": "function"
        },
        "index": {
          "description": "Receive ZNotice from the zephyr servers Blocks until notice is available",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "receiveNotice",
          "package": "hszephyr",
          "partial": "Notice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:receiveNotice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a \u003ccode\u003e\u003ca\u003eZNotice\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Zephyr",
          "name": "sendNotice",
          "package": "hszephyr",
          "signature": "ZNotice -\u003e IO ()",
          "source": "src/Network-Zephyr.html#sendNotice",
          "type": "function"
        },
        "index": {
          "description": "Send ZNotice",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "sendNotice",
          "normalized": "ZNotice-\u003eIO()",
          "package": "hszephyr",
          "partial": "Notice",
          "signature": "ZNotice-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:sendNotice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Zephyr",
          "name": "sub_class",
          "package": "hszephyr",
          "signature": "ByteString",
          "source": "src/Network-Zephyr-CBits.html#ZSubscription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "sub_class",
          "package": "hszephyr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:sub_class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Zephyr",
          "name": "sub_instance",
          "package": "hszephyr",
          "signature": "ByteString",
          "source": "src/Network-Zephyr-CBits.html#ZSubscription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "sub_instance",
          "package": "hszephyr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:sub_instance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Zephyr",
          "name": "sub_recipient",
          "package": "hszephyr",
          "signature": "ByteString",
          "source": "src/Network-Zephyr-CBits.html#ZSubscription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "sub_recipient",
          "package": "hszephyr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:sub_recipient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubscribe to one or more Zephyr triples.\n\u003c/p\u003e",
          "module": "Network.Zephyr",
          "name": "subscribeTo",
          "package": "hszephyr",
          "signature": "[ZSubscription] -\u003e IO ()",
          "source": "src/Network-Zephyr.html#subscribeTo",
          "type": "function"
        },
        "index": {
          "description": "Subscribe to one or more Zephyr triples",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "subscribeTo",
          "normalized": "[ZSubscription]-\u003eIO()",
          "package": "hszephyr",
          "partial": "To",
          "signature": "[ZSubscription]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:subscribeTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to receive a ZNotice, returning \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no notice is\n   available.\n\u003c/p\u003e",
          "module": "Network.Zephyr",
          "name": "tryReceiveNotice",
          "package": "hszephyr",
          "signature": "IO (Maybe ZNotice)",
          "source": "src/Network-Zephyr.html#tryReceiveNotice",
          "type": "function"
        },
        "index": {
          "description": "Try to receive ZNotice returning Nothing if no notice is available",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "tryReceiveNotice",
          "package": "hszephyr",
          "partial": "Receive Notice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:tryReceiveNotice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Zephyr",
          "name": "unZNoticeKind",
          "package": "hszephyr",
          "signature": "CInt",
          "source": "src/Network-Zephyr-CBits.html#ZNoticeKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "unZNoticeKind",
          "package": "hszephyr",
          "partial": "ZNotice Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:unZNoticeKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsubscribe from one or more Zephyr triples.\n\u003c/p\u003e",
          "module": "Network.Zephyr",
          "name": "unsubscribeTo",
          "package": "hszephyr",
          "signature": "[ZSubscription] -\u003e IO ()",
          "source": "src/Network-Zephyr.html#unsubscribeTo",
          "type": "function"
        },
        "index": {
          "description": "Unsubscribe from one or more Zephyr triples",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "unsubscribeTo",
          "normalized": "[ZSubscription]-\u003eIO()",
          "package": "hszephyr",
          "partial": "To",
          "signature": "[ZSubscription]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:unsubscribeTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether this notice is authenticated.\n\u003c/p\u003e",
          "module": "Network.Zephyr",
          "name": "z_auth",
          "package": "hszephyr",
          "signature": "ZAuth",
          "source": "src/Network-Zephyr-CBits.html#ZNotice",
          "type": "function"
        },
        "index": {
          "description": "Whether this notice is authenticated",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "z_auth",
          "package": "hszephyr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:z_auth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Zephyr class of this notice.\n\u003c/p\u003e",
          "module": "Network.Zephyr",
          "name": "z_class",
          "package": "hszephyr",
          "signature": "ByteString",
          "source": "src/Network-Zephyr-CBits.html#ZNotice",
          "type": "function"
        },
        "index": {
          "description": "The Zephyr class of this notice",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "z_class",
          "package": "hszephyr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:z_class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default format clients should use to\n   render this notice.\n\u003c/p\u003e",
          "module": "Network.Zephyr",
          "name": "z_default_fmt",
          "package": "hszephyr",
          "signature": "ByteString",
          "source": "src/Network-Zephyr-CBits.html#ZNotice",
          "type": "function"
        },
        "index": {
          "description": "The default format clients should use to render this notice",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "z_default_fmt",
          "package": "hszephyr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:z_default_fmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of the fields in this notice.\n\u003c/p\u003e",
          "module": "Network.Zephyr",
          "name": "z_fields",
          "package": "hszephyr",
          "signature": "[ByteString]",
          "source": "src/Network-Zephyr-CBits.html#ZNotice",
          "type": "function"
        },
        "index": {
          "description": "list of the fields in this notice",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "z_fields",
          "normalized": "[ByteString]",
          "package": "hszephyr",
          "signature": "[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:z_fields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Zephyr instance of this notice.\n\u003c/p\u003e",
          "module": "Network.Zephyr",
          "name": "z_instance",
          "package": "hszephyr",
          "signature": "ByteString",
          "source": "src/Network-Zephyr-CBits.html#ZNotice",
          "type": "function"
        },
        "index": {
          "description": "The Zephyr instance of this notice",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "z_instance",
          "package": "hszephyr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:z_instance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe kind of this notice (determines how it\n   will be ACK'd).\n\u003c/p\u003e",
          "module": "Network.Zephyr",
          "name": "z_kind",
          "package": "hszephyr",
          "signature": "ZNoticeKind",
          "source": "src/Network-Zephyr-CBits.html#ZNotice",
          "type": "function"
        },
        "index": {
          "description": "The kind of this notice determines how it will be ACK",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "z_kind",
          "package": "hszephyr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:z_kind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe opcode of this notice.\n\u003c/p\u003e",
          "module": "Network.Zephyr",
          "name": "z_opcode",
          "package": "hszephyr",
          "signature": "ByteString",
          "source": "src/Network-Zephyr-CBits.html#ZNotice",
          "type": "function"
        },
        "index": {
          "description": "The opcode of this notice",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "z_opcode",
          "package": "hszephyr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:z_opcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe recipient of this notice.\n\u003c/p\u003e",
          "module": "Network.Zephyr",
          "name": "z_recipient",
          "package": "hszephyr",
          "signature": "ByteString",
          "source": "src/Network-Zephyr-CBits.html#ZNotice",
          "type": "function"
        },
        "index": {
          "description": "The recipient of this notice",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "z_recipient",
          "package": "hszephyr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:z_recipient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sender of this Notice.\n This field is always a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e for received\n notices. Setting it to \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e for sent\n notices will cause it to automatically be\n filled in.\n\u003c/p\u003e",
          "module": "Network.Zephyr",
          "name": "z_sender",
          "package": "hszephyr",
          "signature": "Maybe ByteString",
          "source": "src/Network-Zephyr-CBits.html#ZNotice",
          "type": "function"
        },
        "index": {
          "description": "The sender of this Notice This field is always Just for received notices Setting it to Nothing for sent notices will cause it to automatically be filled in",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "z_sender",
          "package": "hszephyr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:z_sender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe time this notice was sent.\n\u003c/p\u003e",
          "module": "Network.Zephyr",
          "name": "z_time",
          "package": "hszephyr",
          "signature": "UTCTime",
          "source": "src/Network-Zephyr-CBits.html#ZNotice",
          "type": "function"
        },
        "index": {
          "description": "The time this notice was sent",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "z_time",
          "package": "hszephyr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:z_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Zephyr version this notice was sent with.\n\u003c/p\u003e",
          "module": "Network.Zephyr",
          "name": "z_version",
          "package": "hszephyr",
          "signature": "ByteString",
          "source": "src/Network-Zephyr-CBits.html#ZNotice",
          "type": "function"
        },
        "index": {
          "description": "The Zephyr version this notice was sent with",
          "hierarchy": "Network Zephyr",
          "module": "Network.Zephyr",
          "name": "z_version",
          "package": "hszephyr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:z_version"
      }
    }
  ]
]