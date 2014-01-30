[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple bindings to libzephyr.\n\u003c/p\u003e\u003cp\u003eAll functions in this module properly serialize access to the C\n   libzephyr and behave correctly with regard to \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e, so this\n   module should behave properly in threaded Haskell program.\n\u003c/p\u003e\u003cp\u003eAt present, however, we only support maintaining a single,\n   global, set of Zephyr subscriptions. This may be extended to\n   support multiple clients within the same Haskell program.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "module",
        "fct-source": "src/Network-Zephyr.html",
        "fct-type": "module",
        "title": "Zephyr"
      },
      "index": {
        "description": "Simple bindings to libzephyr All functions in this module properly serialize access to the libzephyr and behave correctly with regard to forkIO so this module should behave properly in threaded Haskell program At present however we only support maintaining single global set of Zephyr subscriptions This may be extended to support multiple clients within the same Haskell program",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "Zephyr",
        "normalized": "",
        "package": "hszephyr",
        "partial": "Zephyr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#t:ZAuth",
      "description": {
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "data",
        "fct-source": "src/Network-Zephyr-CBits.html#ZAuth",
        "fct-type": "data",
        "title": "ZAuth"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "ZAuth",
        "normalized": "",
        "package": "hszephyr",
        "partial": "ZAuth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#t:ZNotice",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eZNotice\u003c/a\u003e\u003c/code\u003e represents a Zephyr notice. All fields of this record\n      are filled-in for received notices. For outoing notices, only\n      the following fields are relevant:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003ez_class\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ez_instance\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ez_opcode\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ez_sender\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ez_default_fmt\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ez_kind\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ez_auth\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ez_fields\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "data",
        "fct-source": "src/Network-Zephyr-CBits.html#ZNotice",
        "fct-type": "data",
        "title": "ZNotice"
      },
      "index": {
        "description": "ZNotice represents Zephyr notice All fields of this record are filled-in for received notices For outoing notices only the following fields are relevant class instance opcode sender default fmt kind auth fields",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "ZNotice",
        "normalized": "",
        "package": "hszephyr",
        "partial": "ZNotice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#t:ZNoticeKind",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eZNoticeKind\u003c/a\u003e\u003c/code\u003e represent the kinds of \u003ccode\u003e\u003ca\u003eZNotice\u003c/a\u003e\u003c/code\u003es sent or received\n   by the Zephyr system.\n\u003c/p\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "newtype",
        "fct-source": "src/Network-Zephyr-CBits.html#ZNoticeKind",
        "fct-type": "newtype",
        "title": "ZNoticeKind"
      },
      "index": {
        "description": "ZNoticeKind represent the kinds of ZNotice sent or received by the Zephyr system",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "ZNoticeKind",
        "normalized": "",
        "package": "hszephyr",
        "partial": "ZNotice Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#t:ZSubscription",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a Zephyr triple for the purposes of subscribing or\n   unsubscribing to zephyrs.\n\u003c/p\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "data",
        "fct-source": "src/Network-Zephyr-CBits.html#ZSubscription",
        "fct-type": "data",
        "title": "ZSubscription"
      },
      "index": {
        "description": "Represents Zephyr triple for the purposes of subscribing or unsubscribing to zephyrs",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "ZSubscription",
        "normalized": "",
        "package": "hszephyr",
        "partial": "ZSubscription",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:Authenticated",
      "description": {
        "fct-descr": "\u003cp\u003eThe message was received with\n correct authentication, or should be\n authenticated for outgoing notices.\n\u003c/p\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "Authenticated",
        "fct-source": "src/Network-Zephyr-CBits.html#ZAuth",
        "fct-type": "function",
        "title": "Authenticated"
      },
      "index": {
        "description": "The message was received with correct authentication or should be authenticated for outgoing notices",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "Authenticated",
        "normalized": "",
        "package": "hszephyr",
        "partial": "Authenticated",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:AuthenticationFailed",
      "description": {
        "fct-descr": "\u003cp\u003eThe message was received with\n invalid authentication.\n\u003c/p\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "AuthenticationFailed",
        "fct-source": "src/Network-Zephyr-CBits.html#ZAuth",
        "fct-type": "function",
        "title": "AuthenticationFailed"
      },
      "index": {
        "description": "The message was received with invalid authentication",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "AuthenticationFailed",
        "normalized": "",
        "package": "hszephyr",
        "partial": "Authentication Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:Unauthenticated",
      "description": {
        "fct-descr": "\u003cp\u003eThe message was or will be sent\n with no authentication.\n\u003c/p\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "Unauthenticated",
        "fct-source": "src/Network-Zephyr-CBits.html#ZAuth",
        "fct-type": "function",
        "title": "Unauthenticated"
      },
      "index": {
        "description": "The message was or will be sent with no authentication",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "Unauthenticated",
        "normalized": "",
        "package": "hszephyr",
        "partial": "Unauthenticated",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:ZNotice",
      "description": {
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "ZNotice",
        "fct-source": "src/Network-Zephyr-CBits.html#ZNotice",
        "fct-type": "function",
        "title": "ZNotice"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "ZNotice",
        "normalized": "",
        "package": "hszephyr",
        "partial": "ZNotice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:ZNoticeKind",
      "description": {
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "ZNoticeKind",
        "fct-source": "src/Network-Zephyr-CBits.html#ZNoticeKind",
        "fct-type": "function",
        "title": "ZNoticeKind"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "ZNoticeKind",
        "normalized": "",
        "package": "hszephyr",
        "partial": "ZNotice Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:ZSubscription",
      "description": {
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "ZSubscription",
        "fct-source": "src/Network-Zephyr-CBits.html#ZSubscription",
        "fct-type": "function",
        "title": "ZSubscription"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "ZSubscription",
        "normalized": "",
        "package": "hszephyr",
        "partial": "ZSubscription",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:cancelSubscriptions",
      "description": {
        "fct-descr": "\u003cp\u003eCancel all zephyr subscriptions.\n\u003c/p\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "IO ()",
        "fct-source": "src/Network-Zephyr.html#cancelSubscriptions",
        "fct-type": "function",
        "title": "cancelSubscriptions"
      },
      "index": {
        "description": "Cancel all zephyr subscriptions",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "cancelSubscriptions",
        "normalized": "IO()",
        "package": "hszephyr",
        "partial": "Subscriptions",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:defaultFmt",
      "description": {
        "fct-descr": "\u003cp\u003eHolds the default display format used by outgoing Zephyrs by\n   \u003ccode\u003ezwrite\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Zephyr.html#defaultFmt",
        "fct-type": "function",
        "title": "defaultFmt"
      },
      "index": {
        "description": "Holds the default display format used by outgoing Zephyrs by zwrite",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "defaultFmt",
        "normalized": "",
        "package": "hszephyr",
        "partial": "Fmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:emptyNotice",
      "description": {
        "fct-descr": "\u003cp\u003eA default \u003ccode\u003e\u003ca\u003eZNotice\u003c/a\u003e\u003c/code\u003e suitable for use as a template when creating\n   a new notice for sending via \u003ccode\u003e\u003ca\u003esendNotice\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "ZNotice",
        "fct-source": "src/Network-Zephyr.html#emptyNotice",
        "fct-type": "function",
        "title": "emptyNotice"
      },
      "index": {
        "description": "default ZNotice suitable for use as template when creating new notice for sending via sendNotice",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "emptyNotice",
        "normalized": "",
        "package": "hszephyr",
        "partial": "Notice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:getRealm",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the realm of the current host.\n\u003c/p\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "IO String",
        "fct-source": "src/Network-Zephyr.html#getRealm",
        "fct-type": "function",
        "title": "getRealm"
      },
      "index": {
        "description": "Return the realm of the current host",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "getRealm",
        "normalized": "",
        "package": "hszephyr",
        "partial": "Realm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:getSender",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the name of the current Zephyr sender.\n\u003c/p\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "IO String",
        "fct-source": "src/Network-Zephyr.html#getSender",
        "fct-type": "function",
        "title": "getSender"
      },
      "index": {
        "description": "Return the name of the current Zephyr sender",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "getSender",
        "normalized": "",
        "package": "hszephyr",
        "partial": "Sender",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:initialize",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize libzephyr.\n\u003c/p\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "IO ()",
        "fct-source": "src/Network-Zephyr.html#initialize",
        "fct-type": "function",
        "title": "initialize"
      },
      "index": {
        "description": "Initialize libzephyr",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "initialize",
        "normalized": "IO()",
        "package": "hszephyr",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:kind_acked",
      "description": {
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "ZNoticeKind",
        "fct-source": "src/Network-Zephyr-CBits.html#kind_acked",
        "fct-type": "function",
        "title": "kind_acked"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "kind_acked",
        "normalized": "",
        "package": "hszephyr",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:kind_clientack",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eZAuth\u003c/a\u003e\u003c/code\u003e represents the authentication used when sending or\n   receiving a Zephyr.\n\u003c/p\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "ZNoticeKind",
        "fct-source": "src/Network-Zephyr-CBits.html#kind_clientack",
        "fct-type": "function",
        "title": "kind_clientack"
      },
      "index": {
        "description": "ZAuth represents the authentication used when sending or receiving Zephyr",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "kind_clientack",
        "normalized": "",
        "package": "hszephyr",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:kind_hmack",
      "description": {
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "ZNoticeKind",
        "fct-source": "src/Network-Zephyr-CBits.html#kind_hmack",
        "fct-type": "function",
        "title": "kind_hmack"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "kind_hmack",
        "normalized": "",
        "package": "hszephyr",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:kind_hmctl",
      "description": {
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "ZNoticeKind",
        "fct-source": "src/Network-Zephyr-CBits.html#kind_hmctl",
        "fct-type": "function",
        "title": "kind_hmctl"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "kind_hmctl",
        "normalized": "",
        "package": "hszephyr",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:kind_servack",
      "description": {
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "ZNoticeKind",
        "fct-source": "src/Network-Zephyr-CBits.html#kind_servack",
        "fct-type": "function",
        "title": "kind_servack"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "kind_servack",
        "normalized": "",
        "package": "hszephyr",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:kind_servnak",
      "description": {
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "ZNoticeKind",
        "fct-source": "src/Network-Zephyr-CBits.html#kind_servnak",
        "fct-type": "function",
        "title": "kind_servnak"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "kind_servnak",
        "normalized": "",
        "package": "hszephyr",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:kind_stat",
      "description": {
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "ZNoticeKind",
        "fct-source": "src/Network-Zephyr-CBits.html#kind_stat",
        "fct-type": "function",
        "title": "kind_stat"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "kind_stat",
        "normalized": "",
        "package": "hszephyr",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:kind_unacked",
      "description": {
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "ZNoticeKind",
        "fct-source": "src/Network-Zephyr-CBits.html#kind_unacked",
        "fct-type": "function",
        "title": "kind_unacked"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "kind_unacked",
        "normalized": "",
        "package": "hszephyr",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:kind_unsafe",
      "description": {
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "ZNoticeKind",
        "fct-source": "src/Network-Zephyr-CBits.html#kind_unsafe",
        "fct-type": "function",
        "title": "kind_unsafe"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "kind_unsafe",
        "normalized": "",
        "package": "hszephyr",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:pendingNotices",
      "description": {
        "fct-descr": "\u003cp\u003eChecks for new incoming packets and then returns the number of\n   pending messages in the queue.\n\u003c/p\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "IO Int",
        "fct-source": "src/Network-Zephyr.html#pendingNotices",
        "fct-type": "function",
        "title": "pendingNotices"
      },
      "index": {
        "description": "Checks for new incoming packets and then returns the number of pending messages in the queue",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "pendingNotices",
        "normalized": "",
        "package": "hszephyr",
        "partial": "Notices",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:receiveNotice",
      "description": {
        "fct-descr": "\u003cp\u003eReceive a \u003ccode\u003e\u003ca\u003eZNotice\u003c/a\u003e\u003c/code\u003e from the zephyr servers. Blocks until a\n   notice is available.\n\u003c/p\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "IO ZNotice",
        "fct-source": "src/Network-Zephyr.html#receiveNotice",
        "fct-type": "function",
        "title": "receiveNotice"
      },
      "index": {
        "description": "Receive ZNotice from the zephyr servers Blocks until notice is available",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "receiveNotice",
        "normalized": "",
        "package": "hszephyr",
        "partial": "Notice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:sendNotice",
      "description": {
        "fct-descr": "\u003cp\u003eSend a \u003ccode\u003e\u003ca\u003eZNotice\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "ZNotice -\u003e IO ()",
        "fct-source": "src/Network-Zephyr.html#sendNotice",
        "fct-type": "function",
        "title": "sendNotice"
      },
      "index": {
        "description": "Send ZNotice",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "sendNotice",
        "normalized": "ZNotice-\u003eIO()",
        "package": "hszephyr",
        "partial": "Notice",
        "signature": "ZNotice-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:sub_class",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Zephyr-CBits.html#ZSubscription",
        "fct-type": "function",
        "title": "sub_class"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "sub_class",
        "normalized": "",
        "package": "hszephyr",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:sub_instance",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Zephyr-CBits.html#ZSubscription",
        "fct-type": "function",
        "title": "sub_instance"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "sub_instance",
        "normalized": "",
        "package": "hszephyr",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:sub_recipient",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Zephyr-CBits.html#ZSubscription",
        "fct-type": "function",
        "title": "sub_recipient"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "sub_recipient",
        "normalized": "",
        "package": "hszephyr",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:subscribeTo",
      "description": {
        "fct-descr": "\u003cp\u003eSubscribe to one or more Zephyr triples.\n\u003c/p\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "[ZSubscription] -\u003e IO ()",
        "fct-source": "src/Network-Zephyr.html#subscribeTo",
        "fct-type": "function",
        "title": "subscribeTo"
      },
      "index": {
        "description": "Subscribe to one or more Zephyr triples",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "subscribeTo",
        "normalized": "[ZSubscription]-\u003eIO()",
        "package": "hszephyr",
        "partial": "To",
        "signature": "[ZSubscription]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:tryReceiveNotice",
      "description": {
        "fct-descr": "\u003cp\u003eTry to receive a ZNotice, returning \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no notice is\n   available.\n\u003c/p\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "IO (Maybe ZNotice)",
        "fct-source": "src/Network-Zephyr.html#tryReceiveNotice",
        "fct-type": "function",
        "title": "tryReceiveNotice"
      },
      "index": {
        "description": "Try to receive ZNotice returning Nothing if no notice is available",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "tryReceiveNotice",
        "normalized": "",
        "package": "hszephyr",
        "partial": "Receive Notice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:unZNoticeKind",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "CInt",
        "fct-source": "src/Network-Zephyr-CBits.html#ZNoticeKind",
        "fct-type": "function",
        "title": "unZNoticeKind"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "unZNoticeKind",
        "normalized": "",
        "package": "hszephyr",
        "partial": "ZNotice Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:unsubscribeTo",
      "description": {
        "fct-descr": "\u003cp\u003eUnsubscribe from one or more Zephyr triples.\n\u003c/p\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "[ZSubscription] -\u003e IO ()",
        "fct-source": "src/Network-Zephyr.html#unsubscribeTo",
        "fct-type": "function",
        "title": "unsubscribeTo"
      },
      "index": {
        "description": "Unsubscribe from one or more Zephyr triples",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "unsubscribeTo",
        "normalized": "[ZSubscription]-\u003eIO()",
        "package": "hszephyr",
        "partial": "To",
        "signature": "[ZSubscription]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:z_auth",
      "description": {
        "fct-descr": "\u003cp\u003eWhether this notice is authenticated.\n\u003c/p\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "ZAuth",
        "fct-source": "src/Network-Zephyr-CBits.html#ZNotice",
        "fct-type": "function",
        "title": "z_auth"
      },
      "index": {
        "description": "Whether this notice is authenticated",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "z_auth",
        "normalized": "",
        "package": "hszephyr",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:z_class",
      "description": {
        "fct-descr": "\u003cp\u003eThe Zephyr class of this notice.\n\u003c/p\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Zephyr-CBits.html#ZNotice",
        "fct-type": "function",
        "title": "z_class"
      },
      "index": {
        "description": "The Zephyr class of this notice",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "z_class",
        "normalized": "",
        "package": "hszephyr",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:z_default_fmt",
      "description": {
        "fct-descr": "\u003cp\u003eThe default format clients should use to\n   render this notice.\n\u003c/p\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Zephyr-CBits.html#ZNotice",
        "fct-type": "function",
        "title": "z_default_fmt"
      },
      "index": {
        "description": "The default format clients should use to render this notice",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "z_default_fmt",
        "normalized": "",
        "package": "hszephyr",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:z_fields",
      "description": {
        "fct-descr": "\u003cp\u003eA list of the fields in this notice.\n\u003c/p\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "[ByteString]",
        "fct-source": "src/Network-Zephyr-CBits.html#ZNotice",
        "fct-type": "function",
        "title": "z_fields"
      },
      "index": {
        "description": "list of the fields in this notice",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "z_fields",
        "normalized": "[ByteString]",
        "package": "hszephyr",
        "partial": "",
        "signature": "[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:z_instance",
      "description": {
        "fct-descr": "\u003cp\u003eThe Zephyr instance of this notice.\n\u003c/p\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Zephyr-CBits.html#ZNotice",
        "fct-type": "function",
        "title": "z_instance"
      },
      "index": {
        "description": "The Zephyr instance of this notice",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "z_instance",
        "normalized": "",
        "package": "hszephyr",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:z_kind",
      "description": {
        "fct-descr": "\u003cp\u003eThe kind of this notice (determines how it\n   will be ACK'd).\n\u003c/p\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "ZNoticeKind",
        "fct-source": "src/Network-Zephyr-CBits.html#ZNotice",
        "fct-type": "function",
        "title": "z_kind"
      },
      "index": {
        "description": "The kind of this notice determines how it will be ACK",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "z_kind",
        "normalized": "",
        "package": "hszephyr",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:z_opcode",
      "description": {
        "fct-descr": "\u003cp\u003eThe opcode of this notice.\n\u003c/p\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Zephyr-CBits.html#ZNotice",
        "fct-type": "function",
        "title": "z_opcode"
      },
      "index": {
        "description": "The opcode of this notice",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "z_opcode",
        "normalized": "",
        "package": "hszephyr",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:z_recipient",
      "description": {
        "fct-descr": "\u003cp\u003eThe recipient of this notice.\n\u003c/p\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Zephyr-CBits.html#ZNotice",
        "fct-type": "function",
        "title": "z_recipient"
      },
      "index": {
        "description": "The recipient of this notice",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "z_recipient",
        "normalized": "",
        "package": "hszephyr",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:z_sender",
      "description": {
        "fct-descr": "\u003cp\u003eThe sender of this Notice.\n This field is always a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e for received\n notices. Setting it to \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e for sent\n notices will cause it to automatically be\n filled in.\n\u003c/p\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Network-Zephyr-CBits.html#ZNotice",
        "fct-type": "function",
        "title": "z_sender"
      },
      "index": {
        "description": "The sender of this Notice This field is always Just for received notices Setting it to Nothing for sent notices will cause it to automatically be filled in",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "z_sender",
        "normalized": "",
        "package": "hszephyr",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:z_time",
      "description": {
        "fct-descr": "\u003cp\u003eThe time this notice was sent.\n\u003c/p\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "UTCTime",
        "fct-source": "src/Network-Zephyr-CBits.html#ZNotice",
        "fct-type": "function",
        "title": "z_time"
      },
      "index": {
        "description": "The time this notice was sent",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "z_time",
        "normalized": "",
        "package": "hszephyr",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hszephyr/docs/Network-Zephyr.html#v:z_version",
      "description": {
        "fct-descr": "\u003cp\u003eThe Zephyr version this notice was sent with.\n\u003c/p\u003e",
        "fct-module": "Network.Zephyr",
        "fct-package": "hszephyr",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Zephyr-CBits.html#ZNotice",
        "fct-type": "function",
        "title": "z_version"
      },
      "index": {
        "description": "The Zephyr version this notice was sent with",
        "hierarchy": "Network Zephyr",
        "module": "Network.Zephyr",
        "name": "z_version",
        "normalized": "",
        "package": "hszephyr",
        "partial": "",
        "signature": ""
      }
    }
  }
]