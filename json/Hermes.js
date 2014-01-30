[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-MChan.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn MChan is a combination of a Map and a TChan.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Hermes.MChan",
        "fct-package": "Hermes",
        "fct-signature": "module",
        "fct-source": "src/Network-Hermes-MChan.html",
        "fct-type": "module",
        "title": "MChan"
      },
      "index": {
        "description": "An MChan is combination of Map and TChan",
        "hierarchy": "Network Hermes MChan",
        "module": "Network.Hermes.MChan",
        "name": "MChan",
        "normalized": "",
        "package": "Hermes",
        "partial": "MChan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-MChan.html#t:MChan",
      "description": {
        "fct-descr": "\u003cp\u003eMChan is an abstract type representing a keyed, unbounded FIFO channel\n\u003c/p\u003e",
        "fct-module": "Network.Hermes.MChan",
        "fct-package": "Hermes",
        "fct-signature": "data",
        "fct-source": "src/Network-Hermes-MChan.html#MChan",
        "fct-type": "data",
        "title": "MChan"
      },
      "index": {
        "description": "MChan is an abstract type representing keyed unbounded FIFO channel",
        "hierarchy": "Network Hermes MChan",
        "module": "Network.Hermes.MChan",
        "name": "MChan",
        "normalized": "",
        "package": "Hermes",
        "partial": "MChan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-MChan.html#v:deleteMChan",
      "description": {
        "fct-descr": "\u003cp\u003eDelete a key from an MChan\n\u003c/p\u003e",
        "fct-module": "Network.Hermes.MChan",
        "fct-package": "Hermes",
        "fct-signature": "MChan k v -\u003e k -\u003e STM ()",
        "fct-source": "src/Network-Hermes-MChan.html#deleteMChan",
        "fct-type": "function",
        "title": "deleteMChan"
      },
      "index": {
        "description": "Delete key from an MChan",
        "hierarchy": "Network Hermes MChan",
        "module": "Network.Hermes.MChan",
        "name": "deleteMChan",
        "normalized": "MChan a b-\u003ea-\u003eSTM()",
        "package": "Hermes",
        "partial": "MChan",
        "signature": "MChan k v-\u003ek-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-MChan.html#v:ensureMChan",
      "description": {
        "fct-descr": "\u003cp\u003eCreates the key if it doesn't already exist\n\u003c/p\u003e",
        "fct-module": "Network.Hermes.MChan",
        "fct-package": "Hermes",
        "fct-signature": "MChan k v -\u003e k -\u003e STM ()",
        "fct-source": "src/Network-Hermes-MChan.html#ensureMChan",
        "fct-type": "function",
        "title": "ensureMChan"
      },
      "index": {
        "description": "Creates the key if it doesn already exist",
        "hierarchy": "Network Hermes MChan",
        "module": "Network.Hermes.MChan",
        "name": "ensureMChan",
        "normalized": "MChan a b-\u003ea-\u003eSTM()",
        "package": "Hermes",
        "partial": "MChan",
        "signature": "MChan k v-\u003ek-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-MChan.html#v:existsMChan",
      "description": {
        "fct-descr": "\u003cp\u003eChecks whether the key exists\n\u003c/p\u003e",
        "fct-module": "Network.Hermes.MChan",
        "fct-package": "Hermes",
        "fct-signature": "MChan k v -\u003e k -\u003e STM Bool",
        "fct-source": "src/Network-Hermes-MChan.html#existsMChan",
        "fct-type": "function",
        "title": "existsMChan"
      },
      "index": {
        "description": "Checks whether the key exists",
        "hierarchy": "Network Hermes MChan",
        "module": "Network.Hermes.MChan",
        "name": "existsMChan",
        "normalized": "MChan a b-\u003ea-\u003eSTM Bool",
        "package": "Hermes",
        "partial": "MChan",
        "signature": "MChan k v-\u003ek-\u003eSTM Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-MChan.html#v:newMChan",
      "description": {
        "fct-descr": "\u003cp\u003eBuilds and returns a new instance of MChan\n\u003c/p\u003e",
        "fct-module": "Network.Hermes.MChan",
        "fct-package": "Hermes",
        "fct-signature": "STM (MChan k v)",
        "fct-source": "src/Network-Hermes-MChan.html#newMChan",
        "fct-type": "function",
        "title": "newMChan"
      },
      "index": {
        "description": "Builds and returns new instance of MChan",
        "hierarchy": "Network Hermes MChan",
        "module": "Network.Hermes.MChan",
        "name": "newMChan",
        "normalized": "",
        "package": "Hermes",
        "partial": "MChan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-MChan.html#v:newMChanIO",
      "description": {
        "fct-descr": "\u003cp\u003eIO version of \u003ccode\u003e\u003ca\u003enewMChan\u003c/a\u003e\u003c/code\u003e. This is useful for creating top-level\n \u003ccode\u003e\u003ca\u003eMChan\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003eSystem.IO.Unsafe.unsafePerformIO\u003c/code\u003e, because using\n \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e inside \u003ccode\u003eSystem.IO.Unsafe.unsafePerformIO\u003c/code\u003e isn't safe.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes.MChan",
        "fct-package": "Hermes",
        "fct-signature": "IO (MChan k v)",
        "fct-source": "src/Network-Hermes-MChan.html#newMChanIO",
        "fct-type": "function",
        "title": "newMChanIO"
      },
      "index": {
        "description": "IO version of newMChan This is useful for creating top-level MChan using System.IO.Unsafe.unsafePerformIO because using atomically inside System.IO.Unsafe.unsafePerformIO isn safe",
        "hierarchy": "Network Hermes MChan",
        "module": "Network.Hermes.MChan",
        "name": "newMChanIO",
        "normalized": "",
        "package": "Hermes",
        "partial": "MChan IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-MChan.html#v:readMChan",
      "description": {
        "fct-descr": "\u003cp\u003eRead the next value from an MChan. If the specified key doesn't\n exist (or is removed while waiting), it returns Nothing.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes.MChan",
        "fct-package": "Hermes",
        "fct-signature": "MChan k v -\u003e k -\u003e STM (Maybe v)",
        "fct-source": "src/Network-Hermes-MChan.html#readMChan",
        "fct-type": "function",
        "title": "readMChan"
      },
      "index": {
        "description": "Read the next value from an MChan If the specified key doesn exist or is removed while waiting it returns Nothing",
        "hierarchy": "Network Hermes MChan",
        "module": "Network.Hermes.MChan",
        "name": "readMChan",
        "normalized": "MChan a b-\u003ea-\u003eSTM(Maybe b)",
        "package": "Hermes",
        "partial": "MChan",
        "signature": "MChan k v-\u003ek-\u003eSTM(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-MChan.html#v:writeMChan",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a value to an MChan. Returns false and discards the value\n if the specified key doesn't exist.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes.MChan",
        "fct-package": "Hermes",
        "fct-signature": "MChan k v -\u003e k -\u003e v -\u003e STM Bool",
        "fct-source": "src/Network-Hermes-MChan.html#writeMChan",
        "fct-type": "function",
        "title": "writeMChan"
      },
      "index": {
        "description": "Write value to an MChan Returns false and discards the value if the specified key doesn exist",
        "hierarchy": "Network Hermes MChan",
        "module": "Network.Hermes.MChan",
        "name": "writeMChan",
        "normalized": "MChan a b-\u003ea-\u003eb-\u003eSTM Bool",
        "package": "Hermes",
        "partial": "MChan",
        "signature": "MChan k v-\u003ek-\u003ev-\u003eSTM Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-MChan.html#v:writeMChan-39-",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a value to an MChan, creating the key if it doesn't exist.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes.MChan",
        "fct-package": "Hermes",
        "fct-signature": "MChan k v -\u003e k -\u003e v -\u003e STM ()",
        "fct-source": "src/Network-Hermes-MChan.html#writeMChan%27",
        "fct-type": "function",
        "title": "writeMChan'"
      },
      "index": {
        "description": "Write value to an MChan creating the key if it doesn exist",
        "hierarchy": "Network Hermes MChan",
        "module": "Network.Hermes.MChan",
        "name": "writeMChan'",
        "normalized": "MChan a b-\u003ea-\u003eb-\u003eSTM()",
        "package": "Hermes",
        "partial": "MChan'",
        "signature": "MChan k v-\u003ek-\u003ev-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMiscellaneous functions. Not really for public consumption.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Hermes.Misc",
        "fct-package": "Hermes",
        "fct-signature": "module",
        "fct-source": "src/Network-Hermes-Misc.html",
        "fct-type": "module",
        "title": "Misc"
      },
      "index": {
        "description": "Miscellaneous functions Not really for public consumption",
        "hierarchy": "Network Hermes Misc",
        "module": "Network.Hermes.Misc",
        "name": "Misc",
        "normalized": "",
        "package": "Hermes",
        "partial": "Misc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#t:Type",
      "description": {
        "fct-descr": "\u003cp\u003eOur notion of types: A shown Typeable.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes.Misc",
        "fct-package": "Hermes",
        "fct-signature": "type",
        "fct-source": "src/Network-Hermes-Misc.html#Type",
        "fct-type": "type",
        "title": "Type"
      },
      "index": {
        "description": "Our notion of types shown Typeable",
        "hierarchy": "Network Hermes Misc",
        "module": "Network.Hermes.Misc",
        "name": "Type",
        "normalized": "",
        "package": "Hermes",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#v:adjustWithDefault",
      "description": {
        "fct-module": "Network.Hermes.Misc",
        "fct-package": "Hermes",
        "fct-signature": "a -\u003e (a -\u003e a) -\u003e k -\u003e Map k a -\u003e Map k a",
        "fct-source": "src/Network-Hermes-Misc.html#adjustWithDefault",
        "fct-type": "function",
        "title": "adjustWithDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Hermes Misc",
        "module": "Network.Hermes.Misc",
        "name": "adjustWithDefault",
        "normalized": "a-\u003e(a-\u003ea)-\u003eb-\u003eMap b a-\u003eMap b a",
        "package": "Hermes",
        "partial": "With Default",
        "signature": "a-\u003e(a-\u003ea)-\u003ek-\u003eMap k a-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#v:byteStringToInteger",
      "description": {
        "fct-module": "Network.Hermes.Misc",
        "fct-package": "Hermes",
        "fct-signature": "ByteString -\u003e Integer",
        "fct-source": "src/Network-Hermes-Misc.html#byteStringToInteger",
        "fct-type": "function",
        "title": "byteStringToInteger"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Hermes Misc",
        "module": "Network.Hermes.Misc",
        "name": "byteStringToInteger",
        "normalized": "ByteString-\u003eInteger",
        "package": "Hermes",
        "partial": "String To Integer",
        "signature": "ByteString-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#v:ghead",
      "description": {
        "fct-module": "Network.Hermes.Misc",
        "fct-package": "Hermes",
        "fct-signature": "x -\u003e y",
        "fct-source": "src/Network-Hermes-Misc.html#ghead",
        "fct-type": "function",
        "title": "ghead"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Hermes Misc",
        "module": "Network.Hermes.Misc",
        "name": "ghead",
        "normalized": "a-\u003eb",
        "package": "Hermes",
        "partial": "",
        "signature": "x-\u003ey"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#v:listenTVar",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes an action once for each value of the TVar. May skip\n values if it changes quickly.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes.Misc",
        "fct-package": "Hermes",
        "fct-signature": "TVar a -\u003e (a -\u003e IO ()) -\u003e IO ThreadId",
        "fct-source": "src/Network-Hermes-Misc.html#listenTVar",
        "fct-type": "function",
        "title": "listenTVar"
      },
      "index": {
        "description": "Executes an action once for each value of the TVar May skip values if it changes quickly",
        "hierarchy": "Network Hermes Misc",
        "module": "Network.Hermes.Misc",
        "name": "listenTVar",
        "normalized": "TVar a-\u003e(a-\u003eIO())-\u003eIO ThreadId",
        "package": "Hermes",
        "partial": "TVar",
        "signature": "TVar a-\u003e(a-\u003eIO())-\u003eIO ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#v:modifyTVar",
      "description": {
        "fct-module": "Network.Hermes.Misc",
        "fct-package": "Hermes",
        "fct-signature": "TVar a -\u003e (a -\u003e a) -\u003e STM ()",
        "fct-source": "src/Network-Hermes-Misc.html#modifyTVar",
        "fct-type": "function",
        "title": "modifyTVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Hermes Misc",
        "module": "Network.Hermes.Misc",
        "name": "modifyTVar",
        "normalized": "TVar a-\u003e(a-\u003ea)-\u003eSTM()",
        "package": "Hermes",
        "partial": "TVar",
        "signature": "TVar a-\u003e(a-\u003ea)-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#v:rsaDecrypt",
      "description": {
        "fct-module": "Network.Hermes.Misc",
        "fct-package": "Hermes",
        "fct-signature": "PrivateKey -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Network-Hermes-Misc.html#rsaDecrypt",
        "fct-type": "function",
        "title": "rsaDecrypt"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Hermes Misc",
        "module": "Network.Hermes.Misc",
        "name": "rsaDecrypt",
        "normalized": "PrivateKey-\u003eByteString-\u003eByteString",
        "package": "Hermes",
        "partial": "Decrypt",
        "signature": "PrivateKey-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#v:rsaEncrypt",
      "description": {
        "fct-descr": "\u003cp\u003eEncryption stuff\n\u003c/p\u003e",
        "fct-module": "Network.Hermes.Misc",
        "fct-package": "Hermes",
        "fct-signature": "g -\u003e PublicKey -\u003e ByteString -\u003e (ByteString, g)",
        "fct-source": "src/Network-Hermes-Misc.html#rsaEncrypt",
        "fct-type": "function",
        "title": "rsaEncrypt"
      },
      "index": {
        "description": "Encryption stuff",
        "hierarchy": "Network Hermes Misc",
        "module": "Network.Hermes.Misc",
        "name": "rsaEncrypt",
        "normalized": "a-\u003ePublicKey-\u003eByteString-\u003e(ByteString,a)",
        "package": "Hermes",
        "partial": "Encrypt",
        "signature": "g-\u003ePublicKey-\u003eByteString-\u003e(ByteString,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#v:rsaSign",
      "description": {
        "fct-module": "Network.Hermes.Misc",
        "fct-package": "Hermes",
        "fct-signature": "PrivateKey -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Network-Hermes-Misc.html#rsaSign",
        "fct-type": "function",
        "title": "rsaSign"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Hermes Misc",
        "module": "Network.Hermes.Misc",
        "name": "rsaSign",
        "normalized": "PrivateKey-\u003eByteString-\u003eByteString",
        "package": "Hermes",
        "partial": "Sign",
        "signature": "PrivateKey-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#v:rsaVerify",
      "description": {
        "fct-module": "Network.Hermes.Misc",
        "fct-package": "Hermes",
        "fct-signature": "PublicKey -\u003e ByteString -\u003e ByteString -\u003e Bool",
        "fct-source": "src/Network-Hermes-Misc.html#rsaVerify",
        "fct-type": "function",
        "title": "rsaVerify"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Hermes Misc",
        "module": "Network.Hermes.Misc",
        "name": "rsaVerify",
        "normalized": "PublicKey-\u003eByteString-\u003eByteString-\u003eBool",
        "package": "Hermes",
        "partial": "Verify",
        "signature": "PublicKey-\u003eByteString-\u003eByteString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#v:runTMVar",
      "description": {
        "fct-module": "Network.Hermes.Misc",
        "fct-package": "Hermes",
        "fct-signature": "TMVar s -\u003e StateT s IO a -\u003e IO a",
        "fct-source": "src/Network-Hermes-Misc.html#runTMVar",
        "fct-type": "function",
        "title": "runTMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Hermes Misc",
        "module": "Network.Hermes.Misc",
        "name": "runTMVar",
        "normalized": "TMVar a-\u003eStateT a IO b-\u003eIO b",
        "package": "Hermes",
        "partial": "TMVar",
        "signature": "TMVar s-\u003eStateT s IO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#v:showType",
      "description": {
        "fct-module": "Network.Hermes.Misc",
        "fct-package": "Hermes",
        "fct-signature": "a -\u003e Type",
        "fct-source": "src/Network-Hermes-Misc.html#showType",
        "fct-type": "function",
        "title": "showType"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Hermes Misc",
        "module": "Network.Hermes.Misc",
        "name": "showType",
        "normalized": "a-\u003eType",
        "package": "Hermes",
        "partial": "Type",
        "signature": "a-\u003eType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#v:swap",
      "description": {
        "fct-descr": "\u003cp\u003eSwap values in a Map. Returns the old value, if any.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes.Misc",
        "fct-package": "Hermes",
        "fct-signature": "k -\u003e v -\u003e Map k v -\u003e (Maybe v, Map k v)",
        "fct-source": "src/Network-Hermes-Misc.html#swap",
        "fct-type": "function",
        "title": "swap"
      },
      "index": {
        "description": "Swap values in Map Returns the old value if any",
        "hierarchy": "Network Hermes Misc",
        "module": "Network.Hermes.Misc",
        "name": "swap",
        "normalized": "a-\u003eb-\u003eMap a b-\u003e(Maybe b,Map a b)",
        "package": "Hermes",
        "partial": "",
        "signature": "k-\u003ev-\u003eMap k v-\u003e(Maybe v,Map k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#v:throwM",
      "description": {
        "fct-module": "Network.Hermes.Misc",
        "fct-package": "Hermes",
        "fct-signature": "e -\u003e m a",
        "fct-source": "src/Network-Hermes-Misc.html#throwM",
        "fct-type": "function",
        "title": "throwM"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Hermes Misc",
        "module": "Network.Hermes.Misc",
        "name": "throwM",
        "normalized": "a-\u003eb c",
        "package": "Hermes",
        "partial": "",
        "signature": "e-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#v:trapForkIO",
      "description": {
        "fct-descr": "\u003cp\u003eLogs any unhandled exceptions\n\u003c/p\u003e",
        "fct-module": "Network.Hermes.Misc",
        "fct-package": "Hermes",
        "fct-signature": "String -\u003e IO () -\u003e IO ThreadId",
        "fct-source": "src/Network-Hermes-Misc.html#trapForkIO",
        "fct-type": "function",
        "title": "trapForkIO"
      },
      "index": {
        "description": "Logs any unhandled exceptions",
        "hierarchy": "Network Hermes Misc",
        "module": "Network.Hermes.Misc",
        "name": "trapForkIO",
        "normalized": "String-\u003eIO()-\u003eIO ThreadId",
        "package": "Hermes",
        "partial": "Fork IO",
        "signature": "String-\u003eIO()-\u003eIO ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Net.html#",
      "description": {
        "fct-module": "Network.Hermes.Net",
        "fct-package": "Hermes",
        "fct-signature": "module",
        "fct-source": "src/Network-Hermes-Net.html",
        "fct-type": "module",
        "title": "Net"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Hermes Net",
        "module": "Network.Hermes.Net",
        "name": "Net",
        "normalized": "",
        "package": "Hermes",
        "partial": "Net",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Net.html#t:Address",
      "description": {
        "fct-module": "Network.Hermes.Net",
        "fct-package": "Hermes",
        "fct-signature": "data",
        "fct-source": "src/Network-Hermes-Protocol.html#Address",
        "fct-type": "data",
        "title": "Address"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Hermes Net",
        "module": "Network.Hermes.Net",
        "name": "Address",
        "normalized": "",
        "package": "Hermes",
        "partial": "Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Net.html#v:IP",
      "description": {
        "fct-descr": "\u003cp\u003eHost name and port, IPv4, IPv6, or both\n\u003c/p\u003e",
        "fct-module": "Network.Hermes.Net",
        "fct-package": "Hermes",
        "fct-signature": "IP HostName Int",
        "fct-source": "src/Network-Hermes-Protocol.html#Address",
        "fct-type": "function",
        "title": "IP"
      },
      "index": {
        "description": "Host name and port IPv4 IPv6 or both",
        "hierarchy": "Network Hermes Net",
        "module": "Network.Hermes.Net",
        "name": "IP",
        "normalized": "",
        "package": "Hermes",
        "partial": "IP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Net.html#v:IPv4",
      "description": {
        "fct-descr": "\u003cp\u003eIPv4 only\n\u003c/p\u003e",
        "fct-module": "Network.Hermes.Net",
        "fct-package": "Hermes",
        "fct-signature": "IPv4 HostName Int",
        "fct-source": "src/Network-Hermes-Protocol.html#Address",
        "fct-type": "function",
        "title": "IPv4"
      },
      "index": {
        "description": "IPv4 only",
        "hierarchy": "Network Hermes Net",
        "module": "Network.Hermes.Net",
        "name": "IPv4",
        "normalized": "",
        "package": "Hermes",
        "partial": "IPv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Net.html#v:IPv6",
      "description": {
        "fct-descr": "\u003cp\u003eIPv6 only\n\u003c/p\u003e",
        "fct-module": "Network.Hermes.Net",
        "fct-package": "Hermes",
        "fct-signature": "IPv6 HostName Int",
        "fct-source": "src/Network-Hermes-Protocol.html#Address",
        "fct-type": "function",
        "title": "IPv6"
      },
      "index": {
        "description": "IPv6 only",
        "hierarchy": "Network Hermes Net",
        "module": "Network.Hermes.Net",
        "name": "IPv6",
        "normalized": "",
        "package": "Hermes",
        "partial": "IPv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Net.html#v:Unix",
      "description": {
        "fct-descr": "\u003cp\u003eUnix domain socket, not available on Windows\n\u003c/p\u003e",
        "fct-module": "Network.Hermes.Net",
        "fct-package": "Hermes",
        "fct-signature": "Unix FilePath",
        "fct-source": "src/Network-Hermes-Protocol.html#Address",
        "fct-type": "function",
        "title": "Unix"
      },
      "index": {
        "description": "Unix domain socket not available on Windows",
        "hierarchy": "Network Hermes Net",
        "module": "Network.Hermes.Net",
        "name": "Unix",
        "normalized": "",
        "package": "Hermes",
        "partial": "Unix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Net.html#v:connectStream",
      "description": {
        "fct-module": "Network.Hermes.Net",
        "fct-package": "Hermes",
        "fct-signature": "Address -\u003e IO Handle",
        "fct-source": "src/Network-Hermes-Net.html#connectStream",
        "fct-type": "function",
        "title": "connectStream"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Hermes Net",
        "module": "Network.Hermes.Net",
        "name": "connectStream",
        "normalized": "Address-\u003eIO Handle",
        "package": "Hermes",
        "partial": "Stream",
        "signature": "Address-\u003eIO Handle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Net.html#v:resolve",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the \u003cem\u003ebest\u003c/em\u003e fit only, or a DNSFailure exception\n\u003c/p\u003e",
        "fct-module": "Network.Hermes.Net",
        "fct-package": "Hermes",
        "fct-signature": "Address -\u003e IO SockAddr",
        "fct-source": "src/Network-Hermes-Net.html#resolve",
        "fct-type": "function",
        "title": "resolve"
      },
      "index": {
        "description": "Returns the best fit only or DNSFailure exception",
        "hierarchy": "Network Hermes Net",
        "module": "Network.Hermes.Net",
        "name": "resolve",
        "normalized": "Address-\u003eIO SockAddr",
        "package": "Hermes",
        "partial": "",
        "signature": "Address-\u003eIO SockAddr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Net.html#v:reverseLookup",
      "description": {
        "fct-module": "Network.Hermes.Net",
        "fct-package": "Hermes",
        "fct-signature": "SockAddr -\u003e IO Address",
        "fct-source": "src/Network-Hermes-Net.html#reverseLookup",
        "fct-type": "function",
        "title": "reverseLookup"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Hermes Net",
        "module": "Network.Hermes.Net",
        "name": "reverseLookup",
        "normalized": "SockAddr-\u003eIO Address",
        "package": "Hermes",
        "partial": "Lookup",
        "signature": "SockAddr-\u003eIO Address"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Net.html#v:streamServer",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a TCP server that will hand off incoming connections to\n new threads.\n\u003c/p\u003e\u003cp\u003eKilling the server does not kill these forked threads.\n\u003c/p\u003e\u003cp\u003eThe handle passed to your action will be automatically closed when\n that action returns.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes.Net",
        "fct-package": "Hermes",
        "fct-signature": "Address-\u003e (Handle -\u003e Address -\u003e IO ())-\u003e IO (IO ())",
        "fct-type": "function",
        "title": "streamServer"
      },
      "index": {
        "description": "Creates TCP server that will hand off incoming connections to new threads Killing the server does not kill these forked threads The handle passed to your action will be automatically closed when that action returns",
        "hierarchy": "Network Hermes Net",
        "module": "Network.Hermes.Net",
        "name": "streamServer",
        "normalized": "Address-\u003e(Handle-\u003eAddress-\u003eIO())-\u003eIO(IO())",
        "package": "Hermes",
        "partial": "Server",
        "signature": "Address-\u003e(Handle-\u003eAddress-\u003eIO())-\u003eIO(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHermes is a middleware layer providing best-effort unicast,\n remote procedure calls, probabilistic (and slow!) broadcast and\n automatic membership management. It is meant for small-to-medium\n networks; its broadcast gossip protocol, which is used for\n membership management, will scale poorly to very large ones.\n\u003c/p\u003e\u003cp\u003eHermes uses HsLogger for event logging, using the \"hermes\" namespace.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "module",
        "fct-source": "src/Network-Hermes.html",
        "fct-type": "module",
        "title": "Hermes"
      },
      "index": {
        "description": "Hermes is middleware layer providing best-effort unicast remote procedure calls probabilistic and slow broadcast and automatic membership management It is meant for small-to-medium networks its broadcast gossip protocol which is used for membership management will scale poorly to very large ones Hermes uses HsLogger for event logging using the hermes namespace",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "Hermes",
        "normalized": "",
        "package": "Hermes",
        "partial": "Hermes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#t:Address",
      "description": {
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "data",
        "fct-source": "src/Network-Hermes-Protocol.html#Address",
        "fct-type": "data",
        "title": "Address"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "Address",
        "normalized": "",
        "package": "Hermes",
        "partial": "Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#t:Authority",
      "description": {
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "data",
        "fct-source": "src/Network-Hermes-Signature.html#Authority",
        "fct-type": "data",
        "title": "Authority"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "Authority",
        "normalized": "",
        "package": "Hermes",
        "partial": "Authority",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#t:Context",
      "description": {
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "data",
        "fct-source": "src/Network-Hermes.html#Context",
        "fct-type": "data",
        "title": "Context"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "Context",
        "normalized": "",
        "package": "Hermes",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#t:HermesException",
      "description": {
        "fct-descr": "\u003cp\u003eMost Hermes functions can throw one of these exceptions, which\n | are mainly triggered when (re)negotiating connections.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "data",
        "fct-source": "src/Network-Hermes-Protocol.html#HermesException",
        "fct-type": "data",
        "title": "HermesException"
      },
      "index": {
        "description": "Most Hermes functions can throw one of these exceptions which are mainly triggered when re negotiating connections",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "HermesException",
        "normalized": "",
        "package": "Hermes",
        "partial": "Hermes Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#t:HermesID",
      "description": {
        "fct-descr": "\u003cp\u003eA hash computed from a public key\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "type",
        "fct-source": "src/Network-Hermes-Protocol.html#HermesID",
        "fct-type": "type",
        "title": "HermesID"
      },
      "index": {
        "description": "hash computed from public key",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "HermesID",
        "normalized": "",
        "package": "Hermes",
        "partial": "Hermes ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#t:Priority",
      "description": {
        "fct-descr": "\u003cp\u003ePriorities are used to define how important a log messgae is.\nUsers can filter log messages based on priorities.\n\u003c/p\u003e\u003cp\u003eThese have their roots on the traditional syslog system.  The standard\ndefinitions are given below, but you are free to interpret them however you\nlike.  They are listed here in ascending importance order.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Priority"
      },
      "index": {
        "description": "Priorities are used to define how important log messgae is Users can filter log messages based on priorities These have their roots on the traditional syslog system The standard definitions are given below but you are free to interpret them however you like They are listed here in ascending importance order",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "Priority",
        "normalized": "",
        "package": "Hermes",
        "partial": "Priority",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#t:ProcName",
      "description": {
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "type",
        "fct-source": "src/Network-Hermes-RPC.html#ProcName",
        "fct-type": "type",
        "title": "ProcName"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "ProcName",
        "normalized": "",
        "package": "Hermes",
        "partial": "Proc Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#t:Signature",
      "description": {
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "type",
        "fct-source": "src/Network-Hermes-Types.html#Signature",
        "fct-type": "type",
        "title": "Signature"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "Signature",
        "normalized": "",
        "package": "Hermes",
        "partial": "Signature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#t:SignatureRequest",
      "description": {
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "data",
        "fct-source": "src/Network-Hermes-Signature.html#SignatureRequest",
        "fct-type": "data",
        "title": "SignatureRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "SignatureRequest",
        "normalized": "",
        "package": "Hermes",
        "partial": "Signature Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#t:TTL",
      "description": {
        "fct-descr": "\u003cp\u003eSeconds\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "type",
        "fct-source": "src/Network-Hermes-Gossip.html#TTL",
        "fct-type": "type",
        "title": "TTL"
      },
      "index": {
        "description": "Seconds",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "TTL",
        "normalized": "",
        "package": "Hermes",
        "partial": "TTL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#t:TrustLevel",
      "description": {
        "fct-descr": "\u003cp\u003eIf Indirect, require a signature from an authority.\n\u003c/p\u003e\u003cp\u003eIf Direct, require an OK from the library client.\n\u003c/p\u003e\u003cp\u003eIf None, no trust is required.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "data",
        "fct-source": "src/Network-Hermes-Protocol.html#TrustLevel",
        "fct-type": "data",
        "title": "TrustLevel"
      },
      "index": {
        "description": "If Indirect require signature from an authority If Direct require an OK from the library client If None no trust is required",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "TrustLevel",
        "normalized": "",
        "package": "Hermes",
        "partial": "Trust Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:ALERT",
      "description": {
        "fct-descr": "\u003cp\u003eTake immediate action\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "ALERT",
        "fct-type": "function",
        "title": "ALERT"
      },
      "index": {
        "description": "Take immediate action",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "ALERT",
        "normalized": "",
        "package": "Hermes",
        "partial": "ALERT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:AddressUnknown",
      "description": {
        "fct-descr": "\u003cp\u003eWe don't know where this HermesID is; we never did, or old information proved to be false.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "AddressUnknown HermesID",
        "fct-source": "src/Network-Hermes-Protocol.html#HermesException",
        "fct-type": "function",
        "title": "AddressUnknown"
      },
      "index": {
        "description": "We don know where this HermesID is we never did or old information proved to be false",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "AddressUnknown",
        "normalized": "",
        "package": "Hermes",
        "partial": "Address Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:AuthError",
      "description": {
        "fct-descr": "\u003cp\u003eSomething went wrong while authenticating. Have a reason.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "AuthError String",
        "fct-source": "src/Network-Hermes-Protocol.html#HermesException",
        "fct-type": "function",
        "title": "AuthError"
      },
      "index": {
        "description": "Something went wrong while authenticating Have reason",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "AuthError",
        "normalized": "",
        "package": "Hermes",
        "partial": "Auth Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:CRITICAL",
      "description": {
        "fct-descr": "\u003cp\u003eSevere situations\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "CRITICAL",
        "fct-type": "function",
        "title": "CRITICAL"
      },
      "index": {
        "description": "Severe situations",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "CRITICAL",
        "normalized": "",
        "package": "Hermes",
        "partial": "CRITICAL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:DEBUG",
      "description": {
        "fct-descr": "\u003cp\u003eDebug messages\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "DEBUG",
        "fct-type": "function",
        "title": "DEBUG"
      },
      "index": {
        "description": "Debug messages",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "DEBUG",
        "normalized": "",
        "package": "Hermes",
        "partial": "DEBUG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:DNSFailure",
      "description": {
        "fct-descr": "\u003cp\u003eFailed to resolve the address\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "DNSFailure Address",
        "fct-source": "src/Network-Hermes-Protocol.html#HermesException",
        "fct-type": "function",
        "title": "DNSFailure"
      },
      "index": {
        "description": "Failed to resolve the address",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "DNSFailure",
        "normalized": "",
        "package": "Hermes",
        "partial": "DNSFailure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:DeserializationError",
      "description": {
        "fct-descr": "\u003cp\u003eSomething went wrong while deserializing your data.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "DeserializationError String",
        "fct-source": "src/Network-Hermes-Protocol.html#HermesException",
        "fct-type": "function",
        "title": "DeserializationError"
      },
      "index": {
        "description": "Something went wrong while deserializing your data",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "DeserializationError",
        "normalized": "",
        "package": "Hermes",
        "partial": "Deserialization Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:Direct",
      "description": {
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Direct",
        "fct-source": "src/Network-Hermes-Protocol.html#TrustLevel",
        "fct-type": "function",
        "title": "Direct"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "Direct",
        "normalized": "",
        "package": "Hermes",
        "partial": "Direct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:EMERGENCY",
      "description": {
        "fct-descr": "\u003cp\u003eSystem is unusable\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "EMERGENCY",
        "fct-type": "function",
        "title": "EMERGENCY"
      },
      "index": {
        "description": "System is unusable",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "EMERGENCY",
        "normalized": "",
        "package": "Hermes",
        "partial": "EMERGENCY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:ERROR",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral Errors\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "ERROR",
        "fct-type": "function",
        "title": "ERROR"
      },
      "index": {
        "description": "General Errors",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "ERROR",
        "normalized": "",
        "package": "Hermes",
        "partial": "ERROR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:HermesIDUnknown",
      "description": {
        "fct-descr": "\u003cp\u003eHermes has no idea who you're talking about. How did you even get the HermesID?\n HermesID information is never discarded, so this exception should be rather uncommon.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "HermesIDUnknown HermesID",
        "fct-source": "src/Network-Hermes-Protocol.html#HermesException",
        "fct-type": "function",
        "title": "HermesIDUnknown"
      },
      "index": {
        "description": "Hermes has no idea who you re talking about How did you even get the HermesID HermesID information is never discarded so this exception should be rather uncommon",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "HermesIDUnknown",
        "normalized": "",
        "package": "Hermes",
        "partial": "Hermes IDUnknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:INFO",
      "description": {
        "fct-descr": "\u003cp\u003eInformation\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "INFO",
        "fct-type": "function",
        "title": "INFO"
      },
      "index": {
        "description": "Information",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "INFO",
        "normalized": "",
        "package": "Hermes",
        "partial": "INFO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:IP",
      "description": {
        "fct-descr": "\u003cp\u003eHost name and port, IPv4, IPv6, or both\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "IP HostName Int",
        "fct-source": "src/Network-Hermes-Protocol.html#Address",
        "fct-type": "function",
        "title": "IP"
      },
      "index": {
        "description": "Host name and port IPv4 IPv6 or both",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "IP",
        "normalized": "",
        "package": "Hermes",
        "partial": "IP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:IPv4",
      "description": {
        "fct-descr": "\u003cp\u003eIPv4 only\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "IPv4 HostName Int",
        "fct-source": "src/Network-Hermes-Protocol.html#Address",
        "fct-type": "function",
        "title": "IPv4"
      },
      "index": {
        "description": "IPv4 only",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "IPv4",
        "normalized": "",
        "package": "Hermes",
        "partial": "IPv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:IPv6",
      "description": {
        "fct-descr": "\u003cp\u003eIPv6 only\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "IPv6 HostName Int",
        "fct-source": "src/Network-Hermes-Protocol.html#Address",
        "fct-type": "function",
        "title": "IPv6"
      },
      "index": {
        "description": "IPv6 only",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "IPv6",
        "normalized": "",
        "package": "Hermes",
        "partial": "IPv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:Indirect",
      "description": {
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Indirect",
        "fct-source": "src/Network-Hermes-Protocol.html#TrustLevel",
        "fct-type": "function",
        "title": "Indirect"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "Indirect",
        "normalized": "",
        "package": "Hermes",
        "partial": "Indirect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:ListenerAlreadyExists",
      "description": {
        "fct-descr": "\u003cp\u003eAttempted to create a listener on a port we're already listening to\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "ListenerAlreadyExists",
        "fct-source": "src/Network-Hermes-Protocol.html#HermesException",
        "fct-type": "function",
        "title": "ListenerAlreadyExists"
      },
      "index": {
        "description": "Attempted to create listener on port we re already listening to",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "ListenerAlreadyExists",
        "normalized": "",
        "package": "Hermes",
        "partial": "Listener Already Exists",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:MessageError",
      "description": {
        "fct-descr": "\u003cp\u003eMessage corrupted (connection broken)\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "MessageError",
        "fct-source": "src/Network-Hermes-Protocol.html#HermesException",
        "fct-type": "function",
        "title": "MessageError"
      },
      "index": {
        "description": "Message corrupted connection broken",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "MessageError",
        "normalized": "",
        "package": "Hermes",
        "partial": "Message Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:NOTICE",
      "description": {
        "fct-descr": "\u003cp\u003eNormal runtime conditions\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "NOTICE",
        "fct-type": "function",
        "title": "NOTICE"
      },
      "index": {
        "description": "Normal runtime conditions",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "NOTICE",
        "normalized": "",
        "package": "Hermes",
        "partial": "NOTICE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:None",
      "description": {
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "None",
        "fct-source": "src/Network-Hermes-Protocol.html#TrustLevel",
        "fct-type": "function",
        "title": "None"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "None",
        "normalized": "",
        "package": "Hermes",
        "partial": "None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:ProtocolVersionMismatch",
      "description": {
        "fct-descr": "\u003cp\u003eA different protocol version is in use at the remote host. Check library version.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "ProtocolVersionMismatch Word32 Word32",
        "fct-source": "src/Network-Hermes-Protocol.html#HermesException",
        "fct-type": "function",
        "title": "ProtocolVersionMismatch"
      },
      "index": {
        "description": "different protocol version is in use at the remote host Check library version",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "ProtocolVersionMismatch",
        "normalized": "",
        "package": "Hermes",
        "partial": "Protocol Version Mismatch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:RecvCancelled",
      "description": {
        "fct-descr": "\u003cp\u003eReceive was explicitly cancelled by the user\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "RecvCancelled",
        "fct-source": "src/Network-Hermes-Protocol.html#HermesException",
        "fct-type": "function",
        "title": "RecvCancelled"
      },
      "index": {
        "description": "Receive was explicitly cancelled by the user",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "RecvCancelled",
        "normalized": "",
        "package": "Hermes",
        "partial": "Recv Cancelled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:Timeout",
      "description": {
        "fct-descr": "\u003cp\u003eSome operation took longer than the user-configured timeout\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Timeout",
        "fct-source": "src/Network-Hermes-Protocol.html#HermesException",
        "fct-type": "function",
        "title": "Timeout"
      },
      "index": {
        "description": "Some operation took longer than the user-configured timeout",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "Timeout",
        "normalized": "",
        "package": "Hermes",
        "partial": "Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:Unix",
      "description": {
        "fct-descr": "\u003cp\u003eUnix domain socket, not available on Windows\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Unix FilePath",
        "fct-source": "src/Network-Hermes-Protocol.html#Address",
        "fct-type": "function",
        "title": "Unix"
      },
      "index": {
        "description": "Unix domain socket not available on Windows",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "Unix",
        "normalized": "",
        "package": "Hermes",
        "partial": "Unix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:WARNING",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral Warnings\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "WARNING",
        "fct-type": "function",
        "title": "WARNING"
      },
      "index": {
        "description": "General Warnings",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "WARNING",
        "normalized": "",
        "package": "Hermes",
        "partial": "WARNING",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:WrongProtocol",
      "description": {
        "fct-descr": "\u003cp\u003eThe remote server is not speaking Hermes-speak.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "WrongProtocol",
        "fct-source": "src/Network-Hermes-Protocol.html#HermesException",
        "fct-type": "function",
        "title": "WrongProtocol"
      },
      "index": {
        "description": "The remote server is not speaking Hermes-speak",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "WrongProtocol",
        "normalized": "",
        "package": "Hermes",
        "partial": "Wrong Protocol",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:acceptType",
      "description": {
        "fct-descr": "\u003cp\u003eIf you wish to queue messages without immediately calling recv, use this.\n\u003c/p\u003e\u003cp\u003eacceptType is idempotent.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Context-\u003e msg-\u003e tag-\u003e IO ()",
        "fct-type": "function",
        "title": "acceptType"
      },
      "index": {
        "description": "If you wish to queue messages without immediately calling recv use this acceptType is idempotent",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "acceptType",
        "normalized": "Context-\u003ea-\u003eb-\u003eIO()",
        "package": "Hermes",
        "partial": "Type",
        "signature": "Context-\u003emsg-\u003etag-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:addAuthority",
      "description": {
        "fct-descr": "\u003cp\u003eAdds an authority to the list of trusted authorities\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Context -\u003e Authority -\u003e IO ()",
        "fct-source": "src/Network-Hermes.html#addAuthority",
        "fct-type": "function",
        "title": "addAuthority"
      },
      "index": {
        "description": "Adds an authority to the list of trusted authorities",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "addAuthority",
        "normalized": "Context-\u003eAuthority-\u003eIO()",
        "package": "Hermes",
        "partial": "Authority",
        "signature": "Context-\u003eAuthority-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:addCallback",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a callback to be called every time a type-matching factoid is\n inserted or updated. It will not be called for writeFactoid calls.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Context -\u003e (HermesID -\u003e tag -\u003e msg -\u003e IO ()) -\u003e IO ()",
        "fct-source": "src/Network-Hermes.html#addCallback",
        "fct-type": "function",
        "title": "addCallback"
      },
      "index": {
        "description": "Add callback to be called every time type-matching factoid is inserted or updated It will not be called for writeFactoid calls",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "addCallback",
        "normalized": "Context-\u003e(HermesID-\u003ea-\u003eb-\u003eIO())-\u003eIO()",
        "package": "Hermes",
        "partial": "Callback",
        "signature": "Context-\u003e(HermesID-\u003etag-\u003emsg-\u003eIO())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:call",
      "description": {
        "fct-descr": "\u003cp\u003eRemote procedure call\n\u003c/p\u003e\u003cp\u003eIn addition to the usual core exceptions, this function may fail in\n the specific case the the named procedure doesn't exist or has the\n wrong type, in which case it returns Nothing.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Context -\u003e HermesID -\u003e ProcName -\u003e a -\u003e IO (Maybe b)",
        "fct-source": "src/Network-Hermes.html#call",
        "fct-type": "function",
        "title": "call"
      },
      "index": {
        "description": "Remote procedure call In addition to the usual core exceptions this function may fail in the specific case the the named procedure doesn exist or has the wrong type in which case it returns Nothing",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "call",
        "normalized": "Context-\u003eHermesID-\u003eProcName-\u003ea-\u003eIO(Maybe b)",
        "package": "Hermes",
        "partial": "",
        "signature": "Context-\u003eHermesID-\u003eProcName-\u003ea-\u003eIO(Maybe b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:connect",
      "description": {
        "fct-descr": "\u003cp\u003eConnects to a given address without knowing in advance who will\n be answering. The answerer's HermesID is returned, assuming the\n connection is properly established.\n\u003c/p\u003e\u003cp\u003eTypically used for bootstrapping.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Context -\u003e Address -\u003e IO HermesID",
        "fct-source": "src/Network-Hermes.html#connect",
        "fct-type": "function",
        "title": "connect"
      },
      "index": {
        "description": "Connects to given address without knowing in advance who will be answering The answerer HermesID is returned assuming the connection is properly established Typically used for bootstrapping",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "connect",
        "normalized": "Context-\u003eAddress-\u003eIO HermesID",
        "package": "Hermes",
        "partial": "",
        "signature": "Context-\u003eAddress-\u003eIO HermesID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:installSignature",
      "description": {
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Context -\u003e Signature -\u003e IO ()",
        "fct-source": "src/Network-Hermes.html#installSignature",
        "fct-type": "function",
        "title": "installSignature"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "installSignature",
        "normalized": "Context-\u003eSignature-\u003eIO()",
        "package": "Hermes",
        "partial": "Signature",
        "signature": "Context-\u003eSignature-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:newAuthority",
      "description": {
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "IO Authority",
        "fct-source": "src/Network-Hermes-Signature.html#newAuthority",
        "fct-type": "function",
        "title": "newAuthority"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "newAuthority",
        "normalized": "",
        "package": "Hermes",
        "partial": "Authority",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:newContext",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new Hermes context allowing messaging, RPC and gossip,\n and using automatic address dissemination via the gossip protocol.\n\u003c/p\u003e\u003cp\u003eThe trust level defaults to Indirect.\n\u003c/p\u003e\u003cp\u003eThe gossip interval defaults to 300 seconds, call setPeriod to\n change it.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "IO Context",
        "fct-source": "src/Network-Hermes.html#newContext",
        "fct-type": "function",
        "title": "newContext"
      },
      "index": {
        "description": "Creates new Hermes context allowing messaging RPC and gossip and using automatic address dissemination via the gossip protocol The trust level defaults to Indirect The gossip interval defaults to seconds call setPeriod to change it",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "newContext",
        "normalized": "",
        "package": "Hermes",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:newSignatureRequest",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a signature request for serialization\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Context -\u003e SignatureRequest",
        "fct-source": "src/Network-Hermes.html#newSignatureRequest",
        "fct-type": "function",
        "title": "newSignatureRequest"
      },
      "index": {
        "description": "Creates signature request for serialization",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "newSignatureRequest",
        "normalized": "Context-\u003eSignatureRequest",
        "package": "Hermes",
        "partial": "Signature Request",
        "signature": "Context-\u003eSignatureRequest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:newSignedContext",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a pre-signed context. You may snapshot this to restore on\n another computer, or use on this one.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Authority -\u003e IO Context",
        "fct-source": "src/Network-Hermes.html#newSignedContext",
        "fct-type": "function",
        "title": "newSignedContext"
      },
      "index": {
        "description": "Creates pre-signed context You may snapshot this to restore on another computer or use on this one",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "newSignedContext",
        "normalized": "Authority-\u003eIO Context",
        "package": "Hermes",
        "partial": "Signed Context",
        "signature": "Authority-\u003eIO Context"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:readFactoid",
      "description": {
        "fct-descr": "\u003cp\u003eRead a factoid, assuming it exists.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Context -\u003e tag -\u003e HermesID -\u003e IO (Maybe factoid)",
        "fct-source": "src/Network-Hermes.html#readFactoid",
        "fct-type": "function",
        "title": "readFactoid"
      },
      "index": {
        "description": "Read factoid assuming it exists",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "readFactoid",
        "normalized": "Context-\u003ea-\u003eHermesID-\u003eIO(Maybe b)",
        "package": "Hermes",
        "partial": "Factoid",
        "signature": "Context-\u003etag-\u003eHermesID-\u003eIO(Maybe factoid)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:readFactoids",
      "description": {
        "fct-descr": "\u003cp\u003eRead all factoids with an appropriate type and tag. Useful if you\n don't know what source to expect.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Context -\u003e tag -\u003e IO [(HermesID, factoid)]",
        "fct-source": "src/Network-Hermes.html#readFactoids",
        "fct-type": "function",
        "title": "readFactoids"
      },
      "index": {
        "description": "Read all factoids with an appropriate type and tag Useful if you don know what source to expect",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "readFactoids",
        "normalized": "Context-\u003ea-\u003eIO[(HermesID,b)]",
        "package": "Hermes",
        "partial": "Factoids",
        "signature": "Context-\u003etag-\u003eIO[(HermesID,factoid)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:recv",
      "description": {
        "fct-descr": "\u003cp\u003eReceives a message. This function blocks until a message of the\n appropriate type has been received, possibly forever. You may use\n multiple simultaneous recv calls; each message will only be\n delivered once.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Context -\u003e IO (HermesID, msg)",
        "fct-source": "src/Network-Hermes.html#recv",
        "fct-type": "function",
        "title": "recv"
      },
      "index": {
        "description": "Receives message This function blocks until message of the appropriate type has been received possibly forever You may use multiple simultaneous recv calls each message will only be delivered once",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "recv",
        "normalized": "Context-\u003eIO(HermesID,a)",
        "package": "Hermes",
        "partial": "",
        "signature": "Context-\u003eIO(HermesID,msg)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:recv-39-",
      "description": {
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Context -\u003e tag -\u003e IO (HermesID, msg)",
        "fct-source": "src/Network-Hermes.html#recv%27",
        "fct-type": "function",
        "title": "recv'"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "recv'",
        "normalized": "Context-\u003ea-\u003eIO(HermesID,b)",
        "package": "Hermes",
        "partial": "",
        "signature": "Context-\u003etag-\u003eIO(HermesID,msg)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:refuseType",
      "description": {
        "fct-descr": "\u003cp\u003eIf you wish to *stop* queueing messages of a given type, use this.\n\u003c/p\u003e\u003cp\u003eCalling refuseType will cause all recv calls to this type/tag\n combination to throw RecvCancelled.\n\u003c/p\u003e\u003cp\u003erefuseType is idempotent.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Context-\u003e msg-\u003e tag-\u003e IO ()",
        "fct-type": "function",
        "title": "refuseType"
      },
      "index": {
        "description": "If you wish to stop queueing messages of given type use this Calling refuseType will cause all recv calls to this type tag combination to throw RecvCancelled refuseType is idempotent",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "refuseType",
        "normalized": "Context-\u003ea-\u003eb-\u003eIO()",
        "package": "Hermes",
        "partial": "Type",
        "signature": "Context-\u003emsg-\u003etag-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:registerCallback",
      "description": {
        "fct-descr": "\u003cp\u003eRegisters (or replaces) a callback that is to be executed\n whenever we receive a properly typed call to this name.\n\u003c/p\u003e\u003cp\u003eYou may register calls with the same name, so long as they have\n different types.\n\u003c/p\u003e\u003cp\u003eIf the callback already exists, it is overwritten.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Context-\u003e ProcName-\u003e (a -\u003e IO b)-\u003e IO ()",
        "fct-type": "function",
        "title": "registerCallback"
      },
      "index": {
        "description": "Registers or replaces callback that is to be executed whenever we receive properly typed call to this name You may register calls with the same name so long as they have different types If the callback already exists it is overwritten",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "registerCallback",
        "normalized": "Context-\u003eProcName-\u003e(a-\u003eIO b)-\u003eIO()",
        "package": "Hermes",
        "partial": "Callback",
        "signature": "Context-\u003eProcName-\u003e(a-\u003eIO b)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:restoreAddresses",
      "description": {
        "fct-descr": "\u003cp\u003eRestore an address snapshot to bootstrap your node.\n\u003c/p\u003e\u003cp\u003eReturns Nothing on success, otherwise a parse error.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Context -\u003e ByteString -\u003e STM (Maybe String)",
        "fct-source": "src/Network-Hermes.html#restoreAddresses",
        "fct-type": "function",
        "title": "restoreAddresses"
      },
      "index": {
        "description": "Restore an address snapshot to bootstrap your node Returns Nothing on success otherwise parse error",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "restoreAddresses",
        "normalized": "Context-\u003eByteString-\u003eSTM(Maybe String)",
        "package": "Hermes",
        "partial": "Addresses",
        "signature": "Context-\u003eByteString-\u003eSTM(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:restoreContext",
      "description": {
        "fct-descr": "\u003cp\u003eRestores a context from storage\n\u003c/p\u003e\u003cp\u003eYou will have to reset RPC bindings and listeners.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "ByteString -\u003e IO Context",
        "fct-source": "src/Network-Hermes.html#restoreContext",
        "fct-type": "function",
        "title": "restoreContext"
      },
      "index": {
        "description": "Restores context from storage You will have to reset RPC bindings and listeners",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "restoreContext",
        "normalized": "ByteString-\u003eIO Context",
        "package": "Hermes",
        "partial": "Context",
        "signature": "ByteString-\u003eIO Context"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eSends a message. The type representation is included, so a\n modicum of type safety is provided, and recv will only attempt to\n decode and return a message of the matching (not necessarily\n correct! Make sure your de/serializers match!) type. There is, of\n course, a possibility of exceptions if application versions differ.\n\u003c/p\u003e\u003cp\u003eYou may use send' to provide an arbitrary tag to match on, in which\n case recv' will only return a message with an equal tag; if you\n don't, recv will only return messages without tags.\n\u003c/p\u003e\u003cp\u003eThis function normally blocks until the entire message has been\n sent, an exception occurs or a timeout is reached. It will retry\n once if the connection fails within the timeout.\n\u003c/p\u003e\u003cp\u003eUnless acceptType or recv has been called in advance, sent messages\n are thrown away instead of queued. Once either has been, they are\n indefinitely queued until refuseType is called.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Context -\u003e HermesID -\u003e msg -\u003e IO ()",
        "fct-source": "src/Network-Hermes.html#send",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "Sends message The type representation is included so modicum of type safety is provided and recv will only attempt to decode and return message of the matching not necessarily correct Make sure your de serializers match type There is of course possibility of exceptions if application versions differ You may use send to provide an arbitrary tag to match on in which case recv will only return message with an equal tag if you don recv will only return messages without tags This function normally blocks until the entire message has been sent an exception occurs or timeout is reached It will retry once if the connection fails within the timeout Unless acceptType or recv has been called in advance sent messages are thrown away instead of queued Once either has been they are indefinitely queued until refuseType is called",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "send",
        "normalized": "Context-\u003eHermesID-\u003ea-\u003eIO()",
        "package": "Hermes",
        "partial": "",
        "signature": "Context-\u003eHermesID-\u003emsg-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:send-39-",
      "description": {
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Context -\u003e HermesID -\u003e msg -\u003e tag -\u003e IO ()",
        "fct-source": "src/Network-Hermes.html#send%27",
        "fct-type": "function",
        "title": "send'"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "send'",
        "normalized": "Context-\u003eHermesID-\u003ea-\u003eb-\u003eIO()",
        "package": "Hermes",
        "partial": "",
        "signature": "Context-\u003eHermesID-\u003emsg-\u003etag-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:setDebug",
      "description": {
        "fct-descr": "\u003cp\u003eThis utility function decides the lowest priority that will be\n shown. The default is WARNING.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Priority -\u003e IO ()",
        "fct-source": "src/Network-Hermes.html#setDebug",
        "fct-type": "function",
        "title": "setDebug"
      },
      "index": {
        "description": "This utility function decides the lowest priority that will be shown The default is WARNING",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "setDebug",
        "normalized": "Priority-\u003eIO()",
        "package": "Hermes",
        "partial": "Debug",
        "signature": "Priority-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:setPeriod",
      "description": {
        "fct-descr": "\u003cp\u003eSet the period for the periodic gossiper. It will take effect\n after the next periodic gossip.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Context-\u003e Double-\u003e IO ()",
        "fct-type": "function",
        "title": "setPeriod"
      },
      "index": {
        "description": "Set the period for the periodic gossiper It will take effect after the next periodic gossip",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "setPeriod",
        "normalized": "Context-\u003eDouble-\u003eIO()",
        "package": "Hermes",
        "partial": "Period",
        "signature": "Context-\u003eDouble-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:setTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eFor operations that may block, other than recv, this sets a\n maximum wait time. Hermes will never block longer than this.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Context-\u003e Double-\u003e IO ()",
        "fct-type": "function",
        "title": "setTimeout"
      },
      "index": {
        "description": "For operations that may block other than recv this sets maximum wait time Hermes will never block longer than this",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "setTimeout",
        "normalized": "Context-\u003eDouble-\u003eIO()",
        "package": "Hermes",
        "partial": "Timeout",
        "signature": "Context-\u003eDouble-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:setTrustLimit",
      "description": {
        "fct-descr": "\u003cp\u003eSet the desired trust limit, which will take effect on next\n connection\n\u003c/p\u003e\u003cp\u003eWhen connecting peers (either way), a degree of trust is required,\n or the connection will be rejected.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Context -\u003e TrustLevel -\u003e IO ()",
        "fct-source": "src/Network-Hermes.html#setTrustLimit",
        "fct-type": "function",
        "title": "setTrustLimit"
      },
      "index": {
        "description": "Set the desired trust limit which will take effect on next connection When connecting peers either way degree of trust is required or the connection will be rejected",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "setTrustLimit",
        "normalized": "Context-\u003eTrustLevel-\u003eIO()",
        "package": "Hermes",
        "partial": "Trust Limit",
        "signature": "Context-\u003eTrustLevel-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:signRequest",
      "description": {
        "fct-descr": "\u003cp\u003eSign a request. Use setKeySignature to install it.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Authority -\u003e SignatureRequest -\u003e Signature",
        "fct-source": "src/Network-Hermes-Signature.html#signRequest",
        "fct-type": "function",
        "title": "signRequest"
      },
      "index": {
        "description": "Sign request Use setKeySignature to install it",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "signRequest",
        "normalized": "Authority-\u003eSignatureRequest-\u003eSignature",
        "package": "Hermes",
        "partial": "Request",
        "signature": "Authority-\u003eSignatureRequest-\u003eSignature"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:snapshotAddresses",
      "description": {
        "fct-descr": "\u003cp\u003eThe address snapshot contains address information for every node\n we know of, which can be restored into another node to bootstrap\n it.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Context -\u003e STM ByteString",
        "fct-source": "src/Network-Hermes.html#snapshotAddresses",
        "fct-type": "function",
        "title": "snapshotAddresses"
      },
      "index": {
        "description": "The address snapshot contains address information for every node we know of which can be restored into another node to bootstrap it",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "snapshotAddresses",
        "normalized": "Context-\u003eSTM ByteString",
        "package": "Hermes",
        "partial": "Addresses",
        "signature": "Context-\u003eSTM ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:snapshotContext",
      "description": {
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Context -\u003e IO ByteString",
        "fct-source": "src/Network-Hermes.html#snapshotContext",
        "fct-type": "function",
        "title": "snapshotContext"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "snapshotContext",
        "normalized": "Context-\u003eIO ByteString",
        "package": "Hermes",
        "partial": "Context",
        "signature": "Context-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:snapshotContext-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSnapshots a context for storage  \n\u003c/p\u003e\u003cp\u003eTransient state (RPC calls, messages) are discarded, as are\n connection, listener information and RPC bindings.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Context -\u003e STM ByteString",
        "fct-source": "src/Network-Hermes.html#snapshotContext%27",
        "fct-type": "function",
        "title": "snapshotContext'"
      },
      "index": {
        "description": "Snapshots context for storage Transient state RPC calls messages are discarded as are connection listener information and RPC bindings",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "snapshotContext'",
        "normalized": "Context-\u003eSTM ByteString",
        "package": "Hermes",
        "partial": "Context'",
        "signature": "Context-\u003eSTM ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:startListener",
      "description": {
        "fct-descr": "\u003cp\u003eSet up a listener for incoming connections. These are not stored\n when snapshotting contexts. This function will return once the port\n has been bound.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Context-\u003e Address-\u003e Maybe Address-\u003e IO ()",
        "fct-type": "function",
        "title": "startListener"
      },
      "index": {
        "description": "Set up listener for incoming connections These are not stored when snapshotting contexts This function will return once the port has been bound",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "startListener",
        "normalized": "Context-\u003eAddress-\u003eMaybe Address-\u003eIO()",
        "package": "Hermes",
        "partial": "Listener",
        "signature": "Context-\u003eAddress-\u003eMaybe Address-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:uuid",
      "description": {
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Context -\u003e HermesID",
        "fct-source": "src/Network-Hermes.html#uuid",
        "fct-type": "function",
        "title": "uuid"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "uuid",
        "normalized": "Context-\u003eHermesID",
        "package": "Hermes",
        "partial": "",
        "signature": "Context-\u003eHermesID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:withHermes",
      "description": {
        "fct-descr": "\u003cp\u003eAll use of hermes must be wrapped with this (on windows)\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "IO a -\u003e IO a",
        "fct-source": "src/Network-Hermes-Core.html#withHermes",
        "fct-type": "function",
        "title": "withHermes"
      },
      "index": {
        "description": "All use of hermes must be wrapped with this on windows",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "withHermes",
        "normalized": "IO a-\u003eIO a",
        "package": "Hermes",
        "partial": "Hermes",
        "signature": "IO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:writeFactoid",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a factoid in the gossip network. This will immediately\n trigger a limited gossip exchange, hopefully spreading it to a\n large fraction of the network.\n\u003c/p\u003e\u003cp\u003eFactoids are keyed by their type, source, and the type and\n serialized value of an arbitrary tag. They can be replaced by\n re-inserting later, and optionally expire after a timeout.\n\u003c/p\u003e\u003cp\u003eDon't rely on the timeout, though. It's for garbage collection, and\n is not required to be exact.\n\u003c/p\u003e",
        "fct-module": "Network.Hermes",
        "fct-package": "Hermes",
        "fct-signature": "Context-\u003e factoid-\u003e tag-\u003e Maybe TTL-\u003e IO ()",
        "fct-type": "function",
        "title": "writeFactoid"
      },
      "index": {
        "description": "Insert factoid in the gossip network This will immediately trigger limited gossip exchange hopefully spreading it to large fraction of the network Factoids are keyed by their type source and the type and serialized value of an arbitrary tag They can be replaced by re-inserting later and optionally expire after timeout Don rely on the timeout though It for garbage collection and is not required to be exact",
        "hierarchy": "Network Hermes",
        "module": "Network.Hermes",
        "name": "writeFactoid",
        "normalized": "Context-\u003ea-\u003eb-\u003eMaybe TTL-\u003eIO()",
        "package": "Hermes",
        "partial": "Factoid",
        "signature": "Context-\u003efactoid-\u003etag-\u003eMaybe TTL-\u003eIO()"
      }
    }
  }
]