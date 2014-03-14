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
        "word": "Hermes"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn MChan is a combination of a Map and a TChan.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Hermes.MChan",
          "name": "MChan",
          "package": "Hermes",
          "source": "src/Network-Hermes-MChan.html",
          "type": "module"
        },
        "index": {
          "description": "An MChan is combination of Map and TChan",
          "hierarchy": "Network Hermes MChan",
          "module": "Network.Hermes.MChan",
          "name": "MChan",
          "package": "Hermes",
          "partial": "MChan",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-MChan.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMChan is an abstract type representing a keyed, unbounded FIFO channel\n\u003c/p\u003e",
          "module": "Network.Hermes.MChan",
          "name": "MChan",
          "package": "Hermes",
          "source": "src/Network-Hermes-MChan.html#MChan",
          "type": "data"
        },
        "index": {
          "description": "MChan is an abstract type representing keyed unbounded FIFO channel",
          "hierarchy": "Network Hermes MChan",
          "module": "Network.Hermes.MChan",
          "name": "MChan",
          "package": "Hermes",
          "partial": "MChan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-MChan.html#t:MChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a key from an MChan\n\u003c/p\u003e",
          "module": "Network.Hermes.MChan",
          "name": "deleteMChan",
          "package": "Hermes",
          "signature": "MChan k v -\u003e k -\u003e STM ()",
          "source": "src/Network-Hermes-MChan.html#deleteMChan",
          "type": "function"
        },
        "index": {
          "description": "Delete key from an MChan",
          "hierarchy": "Network Hermes MChan",
          "module": "Network.Hermes.MChan",
          "name": "deleteMChan",
          "normalized": "MChan a b-\u003ea-\u003eSTM()",
          "package": "Hermes",
          "partial": "MChan",
          "signature": "MChan k v-\u003ek-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-MChan.html#v:deleteMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates the key if it doesn't already exist\n\u003c/p\u003e",
          "module": "Network.Hermes.MChan",
          "name": "ensureMChan",
          "package": "Hermes",
          "signature": "MChan k v -\u003e k -\u003e STM ()",
          "source": "src/Network-Hermes-MChan.html#ensureMChan",
          "type": "function"
        },
        "index": {
          "description": "Creates the key if it doesn already exist",
          "hierarchy": "Network Hermes MChan",
          "module": "Network.Hermes.MChan",
          "name": "ensureMChan",
          "normalized": "MChan a b-\u003ea-\u003eSTM()",
          "package": "Hermes",
          "partial": "MChan",
          "signature": "MChan k v-\u003ek-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-MChan.html#v:ensureMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks whether the key exists\n\u003c/p\u003e",
          "module": "Network.Hermes.MChan",
          "name": "existsMChan",
          "package": "Hermes",
          "signature": "MChan k v -\u003e k -\u003e STM Bool",
          "source": "src/Network-Hermes-MChan.html#existsMChan",
          "type": "function"
        },
        "index": {
          "description": "Checks whether the key exists",
          "hierarchy": "Network Hermes MChan",
          "module": "Network.Hermes.MChan",
          "name": "existsMChan",
          "normalized": "MChan a b-\u003ea-\u003eSTM Bool",
          "package": "Hermes",
          "partial": "MChan",
          "signature": "MChan k v-\u003ek-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-MChan.html#v:existsMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds and returns a new instance of MChan\n\u003c/p\u003e",
          "module": "Network.Hermes.MChan",
          "name": "newMChan",
          "package": "Hermes",
          "signature": "STM (MChan k v)",
          "source": "src/Network-Hermes-MChan.html#newMChan",
          "type": "function"
        },
        "index": {
          "description": "Builds and returns new instance of MChan",
          "hierarchy": "Network Hermes MChan",
          "module": "Network.Hermes.MChan",
          "name": "newMChan",
          "package": "Hermes",
          "partial": "MChan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-MChan.html#v:newMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIO version of \u003ccode\u003e\u003ca\u003enewMChan\u003c/a\u003e\u003c/code\u003e. This is useful for creating top-level\n \u003ccode\u003e\u003ca\u003eMChan\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003eSystem.IO.Unsafe.unsafePerformIO\u003c/code\u003e, because using\n \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e inside \u003ccode\u003eSystem.IO.Unsafe.unsafePerformIO\u003c/code\u003e isn't safe.\n\u003c/p\u003e",
          "module": "Network.Hermes.MChan",
          "name": "newMChanIO",
          "package": "Hermes",
          "signature": "IO (MChan k v)",
          "source": "src/Network-Hermes-MChan.html#newMChanIO",
          "type": "function"
        },
        "index": {
          "description": "IO version of newMChan This is useful for creating top-level MChan using System.IO.Unsafe.unsafePerformIO because using atomically inside System.IO.Unsafe.unsafePerformIO isn safe",
          "hierarchy": "Network Hermes MChan",
          "module": "Network.Hermes.MChan",
          "name": "newMChanIO",
          "package": "Hermes",
          "partial": "MChan IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-MChan.html#v:newMChanIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the next value from an MChan. If the specified key doesn't\n exist (or is removed while waiting), it returns Nothing.\n\u003c/p\u003e",
          "module": "Network.Hermes.MChan",
          "name": "readMChan",
          "package": "Hermes",
          "signature": "MChan k v -\u003e k -\u003e STM (Maybe v)",
          "source": "src/Network-Hermes-MChan.html#readMChan",
          "type": "function"
        },
        "index": {
          "description": "Read the next value from an MChan If the specified key doesn exist or is removed while waiting it returns Nothing",
          "hierarchy": "Network Hermes MChan",
          "module": "Network.Hermes.MChan",
          "name": "readMChan",
          "normalized": "MChan a b-\u003ea-\u003eSTM(Maybe b)",
          "package": "Hermes",
          "partial": "MChan",
          "signature": "MChan k v-\u003ek-\u003eSTM(Maybe v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-MChan.html#v:readMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to an MChan. Returns false and discards the value\n if the specified key doesn't exist.\n\u003c/p\u003e",
          "module": "Network.Hermes.MChan",
          "name": "writeMChan",
          "package": "Hermes",
          "signature": "MChan k v -\u003e k -\u003e v -\u003e STM Bool",
          "source": "src/Network-Hermes-MChan.html#writeMChan",
          "type": "function"
        },
        "index": {
          "description": "Write value to an MChan Returns false and discards the value if the specified key doesn exist",
          "hierarchy": "Network Hermes MChan",
          "module": "Network.Hermes.MChan",
          "name": "writeMChan",
          "normalized": "MChan a b-\u003ea-\u003eb-\u003eSTM Bool",
          "package": "Hermes",
          "partial": "MChan",
          "signature": "MChan k v-\u003ek-\u003ev-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-MChan.html#v:writeMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to an MChan, creating the key if it doesn't exist.\n\u003c/p\u003e",
          "module": "Network.Hermes.MChan",
          "name": "writeMChan'",
          "package": "Hermes",
          "signature": "MChan k v -\u003e k -\u003e v -\u003e STM ()",
          "source": "src/Network-Hermes-MChan.html#writeMChan%27",
          "type": "function"
        },
        "index": {
          "description": "Write value to an MChan creating the key if it doesn exist",
          "hierarchy": "Network Hermes MChan",
          "module": "Network.Hermes.MChan",
          "name": "writeMChan'",
          "normalized": "MChan a b-\u003ea-\u003eb-\u003eSTM()",
          "package": "Hermes",
          "partial": "MChan'",
          "signature": "MChan k v-\u003ek-\u003ev-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-MChan.html#v:writeMChan-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMiscellaneous functions. Not really for public consumption.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Hermes.Misc",
          "name": "Misc",
          "package": "Hermes",
          "source": "src/Network-Hermes-Misc.html",
          "type": "module"
        },
        "index": {
          "description": "Miscellaneous functions Not really for public consumption",
          "hierarchy": "Network Hermes Misc",
          "module": "Network.Hermes.Misc",
          "name": "Misc",
          "package": "Hermes",
          "partial": "Misc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOur notion of types: A shown Typeable.\n\u003c/p\u003e",
          "module": "Network.Hermes.Misc",
          "name": "Type",
          "package": "Hermes",
          "source": "src/Network-Hermes-Misc.html#Type",
          "type": "type"
        },
        "index": {
          "description": "Our notion of types shown Typeable",
          "hierarchy": "Network Hermes Misc",
          "module": "Network.Hermes.Misc",
          "name": "Type",
          "package": "Hermes",
          "partial": "Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Hermes.Misc",
          "name": "adjustWithDefault",
          "package": "Hermes",
          "signature": "a -\u003e (a -\u003e a) -\u003e k -\u003e Map k a -\u003e Map k a",
          "source": "src/Network-Hermes-Misc.html#adjustWithDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Hermes Misc",
          "module": "Network.Hermes.Misc",
          "name": "adjustWithDefault",
          "normalized": "a-\u003e(a-\u003ea)-\u003eb-\u003eMap b a-\u003eMap b a",
          "package": "Hermes",
          "partial": "With Default",
          "signature": "a-\u003e(a-\u003ea)-\u003ek-\u003eMap k a-\u003eMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#v:adjustWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Hermes.Misc",
          "name": "byteStringToInteger",
          "package": "Hermes",
          "signature": "ByteString -\u003e Integer",
          "source": "src/Network-Hermes-Misc.html#byteStringToInteger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Hermes Misc",
          "module": "Network.Hermes.Misc",
          "name": "byteStringToInteger",
          "normalized": "ByteString-\u003eInteger",
          "package": "Hermes",
          "partial": "String To Integer",
          "signature": "ByteString-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#v:byteStringToInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Hermes.Misc",
          "name": "ghead",
          "package": "Hermes",
          "signature": "x -\u003e y",
          "source": "src/Network-Hermes-Misc.html#ghead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Hermes Misc",
          "module": "Network.Hermes.Misc",
          "name": "ghead",
          "normalized": "a-\u003eb",
          "package": "Hermes",
          "signature": "x-\u003ey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#v:ghead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes an action once for each value of the TVar. May skip\n values if it changes quickly.\n\u003c/p\u003e",
          "module": "Network.Hermes.Misc",
          "name": "listenTVar",
          "package": "Hermes",
          "signature": "TVar a -\u003e (a -\u003e IO ()) -\u003e IO ThreadId",
          "source": "src/Network-Hermes-Misc.html#listenTVar",
          "type": "function"
        },
        "index": {
          "description": "Executes an action once for each value of the TVar May skip values if it changes quickly",
          "hierarchy": "Network Hermes Misc",
          "module": "Network.Hermes.Misc",
          "name": "listenTVar",
          "normalized": "TVar a-\u003e(a-\u003eIO())-\u003eIO ThreadId",
          "package": "Hermes",
          "partial": "TVar",
          "signature": "TVar a-\u003e(a-\u003eIO())-\u003eIO ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#v:listenTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Hermes.Misc",
          "name": "modifyTVar",
          "package": "Hermes",
          "signature": "TVar a -\u003e (a -\u003e a) -\u003e STM ()",
          "source": "src/Network-Hermes-Misc.html#modifyTVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Hermes Misc",
          "module": "Network.Hermes.Misc",
          "name": "modifyTVar",
          "normalized": "TVar a-\u003e(a-\u003ea)-\u003eSTM()",
          "package": "Hermes",
          "partial": "TVar",
          "signature": "TVar a-\u003e(a-\u003ea)-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#v:modifyTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Hermes.Misc",
          "name": "rsaDecrypt",
          "package": "Hermes",
          "signature": "PrivateKey -\u003e ByteString -\u003e ByteString",
          "source": "src/Network-Hermes-Misc.html#rsaDecrypt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Hermes Misc",
          "module": "Network.Hermes.Misc",
          "name": "rsaDecrypt",
          "normalized": "PrivateKey-\u003eByteString-\u003eByteString",
          "package": "Hermes",
          "partial": "Decrypt",
          "signature": "PrivateKey-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#v:rsaDecrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncryption stuff\n\u003c/p\u003e",
          "module": "Network.Hermes.Misc",
          "name": "rsaEncrypt",
          "package": "Hermes",
          "signature": "g -\u003e PublicKey -\u003e ByteString -\u003e (ByteString, g)",
          "source": "src/Network-Hermes-Misc.html#rsaEncrypt",
          "type": "function"
        },
        "index": {
          "description": "Encryption stuff",
          "hierarchy": "Network Hermes Misc",
          "module": "Network.Hermes.Misc",
          "name": "rsaEncrypt",
          "normalized": "a-\u003ePublicKey-\u003eByteString-\u003e(ByteString,a)",
          "package": "Hermes",
          "partial": "Encrypt",
          "signature": "g-\u003ePublicKey-\u003eByteString-\u003e(ByteString,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#v:rsaEncrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Hermes.Misc",
          "name": "rsaSign",
          "package": "Hermes",
          "signature": "PrivateKey -\u003e ByteString -\u003e ByteString",
          "source": "src/Network-Hermes-Misc.html#rsaSign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Hermes Misc",
          "module": "Network.Hermes.Misc",
          "name": "rsaSign",
          "normalized": "PrivateKey-\u003eByteString-\u003eByteString",
          "package": "Hermes",
          "partial": "Sign",
          "signature": "PrivateKey-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#v:rsaSign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Hermes.Misc",
          "name": "rsaVerify",
          "package": "Hermes",
          "signature": "PublicKey -\u003e ByteString -\u003e ByteString -\u003e Bool",
          "source": "src/Network-Hermes-Misc.html#rsaVerify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Hermes Misc",
          "module": "Network.Hermes.Misc",
          "name": "rsaVerify",
          "normalized": "PublicKey-\u003eByteString-\u003eByteString-\u003eBool",
          "package": "Hermes",
          "partial": "Verify",
          "signature": "PublicKey-\u003eByteString-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#v:rsaVerify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Hermes.Misc",
          "name": "runTMVar",
          "package": "Hermes",
          "signature": "TMVar s -\u003e StateT s IO a -\u003e IO a",
          "source": "src/Network-Hermes-Misc.html#runTMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Hermes Misc",
          "module": "Network.Hermes.Misc",
          "name": "runTMVar",
          "normalized": "TMVar a-\u003eStateT a IO b-\u003eIO b",
          "package": "Hermes",
          "partial": "TMVar",
          "signature": "TMVar s-\u003eStateT s IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#v:runTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Hermes.Misc",
          "name": "showType",
          "package": "Hermes",
          "signature": "a -\u003e Type",
          "source": "src/Network-Hermes-Misc.html#showType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Hermes Misc",
          "module": "Network.Hermes.Misc",
          "name": "showType",
          "normalized": "a-\u003eType",
          "package": "Hermes",
          "partial": "Type",
          "signature": "a-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#v:showType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwap values in a Map. Returns the old value, if any.\n\u003c/p\u003e",
          "module": "Network.Hermes.Misc",
          "name": "swap",
          "package": "Hermes",
          "signature": "k -\u003e v -\u003e Map k v -\u003e (Maybe v, Map k v)",
          "source": "src/Network-Hermes-Misc.html#swap",
          "type": "function"
        },
        "index": {
          "description": "Swap values in Map Returns the old value if any",
          "hierarchy": "Network Hermes Misc",
          "module": "Network.Hermes.Misc",
          "name": "swap",
          "normalized": "a-\u003eb-\u003eMap a b-\u003e(Maybe b,Map a b)",
          "package": "Hermes",
          "signature": "k-\u003ev-\u003eMap k v-\u003e(Maybe v,Map k v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#v:swap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Hermes.Misc",
          "name": "throwM",
          "package": "Hermes",
          "signature": "e -\u003e m a",
          "source": "src/Network-Hermes-Misc.html#throwM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Hermes Misc",
          "module": "Network.Hermes.Misc",
          "name": "throwM",
          "normalized": "a-\u003eb c",
          "package": "Hermes",
          "signature": "e-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#v:throwM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogs any unhandled exceptions\n\u003c/p\u003e",
          "module": "Network.Hermes.Misc",
          "name": "trapForkIO",
          "package": "Hermes",
          "signature": "String -\u003e IO () -\u003e IO ThreadId",
          "source": "src/Network-Hermes-Misc.html#trapForkIO",
          "type": "function"
        },
        "index": {
          "description": "Logs any unhandled exceptions",
          "hierarchy": "Network Hermes Misc",
          "module": "Network.Hermes.Misc",
          "name": "trapForkIO",
          "normalized": "String-\u003eIO()-\u003eIO ThreadId",
          "package": "Hermes",
          "partial": "Fork IO",
          "signature": "String-\u003eIO()-\u003eIO ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Misc.html#v:trapForkIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Hermes.Net",
          "name": "Net",
          "package": "Hermes",
          "source": "src/Network-Hermes-Net.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Hermes Net",
          "module": "Network.Hermes.Net",
          "name": "Net",
          "package": "Hermes",
          "partial": "Net",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Net.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Hermes.Net",
          "name": "Address",
          "package": "Hermes",
          "source": "src/Network-Hermes-Protocol.html#Address",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Hermes Net",
          "module": "Network.Hermes.Net",
          "name": "Address",
          "package": "Hermes",
          "partial": "Address",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Net.html#t:Address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHost name and port, IPv4, IPv6, or both\n\u003c/p\u003e",
          "module": "[\"Network.Hermes.Net\",\"Network.Hermes\"]",
          "name": "IP",
          "package": "Hermes",
          "signature": "IP HostName Int",
          "source": "src/Network-Hermes-Protocol.html#Address",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Net.html#v:IP\",\"http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:IP\"]"
        },
        "index": {
          "description": "Host name and port IPv4 IPv6 or both",
          "hierarchy": "Network Hermes Net",
          "module": "Network.Hermes.Net",
          "name": "IP",
          "package": "Hermes",
          "partial": "IP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Net.html#v:IP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIPv4 only\n\u003c/p\u003e",
          "module": "[\"Network.Hermes.Net\",\"Network.Hermes\"]",
          "name": "IPv4",
          "package": "Hermes",
          "signature": "IPv4 HostName Int",
          "source": "src/Network-Hermes-Protocol.html#Address",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Net.html#v:IPv4\",\"http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:IPv4\"]"
        },
        "index": {
          "description": "IPv4 only",
          "hierarchy": "Network Hermes Net",
          "module": "Network.Hermes.Net",
          "name": "IPv4",
          "package": "Hermes",
          "partial": "IPv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Net.html#v:IPv4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIPv6 only\n\u003c/p\u003e",
          "module": "[\"Network.Hermes.Net\",\"Network.Hermes\"]",
          "name": "IPv6",
          "package": "Hermes",
          "signature": "IPv6 HostName Int",
          "source": "src/Network-Hermes-Protocol.html#Address",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Net.html#v:IPv6\",\"http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:IPv6\"]"
        },
        "index": {
          "description": "IPv6 only",
          "hierarchy": "Network Hermes Net",
          "module": "Network.Hermes.Net",
          "name": "IPv6",
          "package": "Hermes",
          "partial": "IPv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Net.html#v:IPv6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnix domain socket, not available on Windows\n\u003c/p\u003e",
          "module": "[\"Network.Hermes.Net\",\"Network.Hermes\"]",
          "name": "Unix",
          "package": "Hermes",
          "signature": "Unix FilePath",
          "source": "src/Network-Hermes-Protocol.html#Address",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Net.html#v:Unix\",\"http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:Unix\"]"
        },
        "index": {
          "description": "Unix domain socket not available on Windows",
          "hierarchy": "Network Hermes Net",
          "module": "Network.Hermes.Net",
          "name": "Unix",
          "package": "Hermes",
          "partial": "Unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Net.html#v:Unix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Hermes.Net",
          "name": "connectStream",
          "package": "Hermes",
          "signature": "Address -\u003e IO Handle",
          "source": "src/Network-Hermes-Net.html#connectStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Hermes Net",
          "module": "Network.Hermes.Net",
          "name": "connectStream",
          "normalized": "Address-\u003eIO Handle",
          "package": "Hermes",
          "partial": "Stream",
          "signature": "Address-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Net.html#v:connectStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003cem\u003ebest\u003c/em\u003e fit only, or a DNSFailure exception\n\u003c/p\u003e",
          "module": "Network.Hermes.Net",
          "name": "resolve",
          "package": "Hermes",
          "signature": "Address -\u003e IO SockAddr",
          "source": "src/Network-Hermes-Net.html#resolve",
          "type": "function"
        },
        "index": {
          "description": "Returns the best fit only or DNSFailure exception",
          "hierarchy": "Network Hermes Net",
          "module": "Network.Hermes.Net",
          "name": "resolve",
          "normalized": "Address-\u003eIO SockAddr",
          "package": "Hermes",
          "signature": "Address-\u003eIO SockAddr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Net.html#v:resolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Hermes.Net",
          "name": "reverseLookup",
          "package": "Hermes",
          "signature": "SockAddr -\u003e IO Address",
          "source": "src/Network-Hermes-Net.html#reverseLookup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Hermes Net",
          "module": "Network.Hermes.Net",
          "name": "reverseLookup",
          "normalized": "SockAddr-\u003eIO Address",
          "package": "Hermes",
          "partial": "Lookup",
          "signature": "SockAddr-\u003eIO Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Net.html#v:reverseLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a TCP server that will hand off incoming connections to\n new threads.\n\u003c/p\u003e\u003cp\u003eKilling the server does not kill these forked threads.\n\u003c/p\u003e\u003cp\u003eThe handle passed to your action will be automatically closed when\n that action returns.\n\u003c/p\u003e",
          "module": "Network.Hermes.Net",
          "name": "streamServer",
          "package": "Hermes",
          "signature": "Address-\u003e (Handle -\u003e Address -\u003e IO ())-\u003e IO (IO ())",
          "type": "function"
        },
        "index": {
          "description": "Creates TCP server that will hand off incoming connections to new threads Killing the server does not kill these forked threads The handle passed to your action will be automatically closed when that action returns",
          "hierarchy": "Network Hermes Net",
          "module": "Network.Hermes.Net",
          "name": "streamServer",
          "normalized": "Address-\u003e(Handle-\u003eAddress-\u003eIO())-\u003eIO(IO())",
          "package": "Hermes",
          "partial": "Server",
          "signature": "Address-\u003e(Handle-\u003eAddress-\u003eIO())-\u003eIO(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes-Net.html#v:streamServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHermes is a middleware layer providing best-effort unicast,\n remote procedure calls, probabilistic (and slow!) broadcast and\n automatic membership management. It is meant for small-to-medium\n networks; its broadcast gossip protocol, which is used for\n membership management, will scale poorly to very large ones.\n\u003c/p\u003e\u003cp\u003eHermes uses HsLogger for event logging, using the \"hermes\" namespace.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Hermes",
          "name": "Hermes",
          "package": "Hermes",
          "source": "src/Network-Hermes.html",
          "type": "module"
        },
        "index": {
          "description": "Hermes is middleware layer providing best-effort unicast remote procedure calls probabilistic and slow broadcast and automatic membership management It is meant for small-to-medium networks its broadcast gossip protocol which is used for membership management will scale poorly to very large ones Hermes uses HsLogger for event logging using the hermes namespace",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "Hermes",
          "package": "Hermes",
          "partial": "Hermes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Hermes",
          "name": "Address",
          "package": "Hermes",
          "source": "src/Network-Hermes-Protocol.html#Address",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "Address",
          "package": "Hermes",
          "partial": "Address",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#t:Address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Hermes",
          "name": "Authority",
          "package": "Hermes",
          "source": "src/Network-Hermes-Signature.html#Authority",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "Authority",
          "package": "Hermes",
          "partial": "Authority",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#t:Authority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Hermes",
          "name": "Context",
          "package": "Hermes",
          "source": "src/Network-Hermes.html#Context",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "Context",
          "package": "Hermes",
          "partial": "Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMost Hermes functions can throw one of these exceptions, which\n | are mainly triggered when (re)negotiating connections.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "HermesException",
          "package": "Hermes",
          "source": "src/Network-Hermes-Protocol.html#HermesException",
          "type": "data"
        },
        "index": {
          "description": "Most Hermes functions can throw one of these exceptions which are mainly triggered when re negotiating connections",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "HermesException",
          "package": "Hermes",
          "partial": "Hermes Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#t:HermesException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hash computed from a public key\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "HermesID",
          "package": "Hermes",
          "source": "src/Network-Hermes-Protocol.html#HermesID",
          "type": "type"
        },
        "index": {
          "description": "hash computed from public key",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "HermesID",
          "package": "Hermes",
          "partial": "Hermes ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#t:HermesID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePriorities are used to define how important a log messgae is.\nUsers can filter log messages based on priorities.\n\u003c/p\u003e\u003cp\u003eThese have their roots on the traditional syslog system.  The standard\ndefinitions are given below, but you are free to interpret them however you\nlike.  They are listed here in ascending importance order.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "Priority",
          "package": "Hermes",
          "type": "data"
        },
        "index": {
          "description": "Priorities are used to define how important log messgae is Users can filter log messages based on priorities These have their roots on the traditional syslog system The standard definitions are given below but you are free to interpret them however you like They are listed here in ascending importance order",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "Priority",
          "package": "Hermes",
          "partial": "Priority",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#t:Priority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Hermes",
          "name": "ProcName",
          "package": "Hermes",
          "source": "src/Network-Hermes-RPC.html#ProcName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "ProcName",
          "package": "Hermes",
          "partial": "Proc Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#t:ProcName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Hermes",
          "name": "Signature",
          "package": "Hermes",
          "source": "src/Network-Hermes-Types.html#Signature",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "Signature",
          "package": "Hermes",
          "partial": "Signature",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#t:Signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Hermes",
          "name": "SignatureRequest",
          "package": "Hermes",
          "source": "src/Network-Hermes-Signature.html#SignatureRequest",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "SignatureRequest",
          "package": "Hermes",
          "partial": "Signature Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#t:SignatureRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeconds\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "TTL",
          "package": "Hermes",
          "source": "src/Network-Hermes-Gossip.html#TTL",
          "type": "type"
        },
        "index": {
          "description": "Seconds",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "TTL",
          "package": "Hermes",
          "partial": "TTL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#t:TTL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf Indirect, require a signature from an authority.\n\u003c/p\u003e\u003cp\u003eIf Direct, require an OK from the library client.\n\u003c/p\u003e\u003cp\u003eIf None, no trust is required.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "TrustLevel",
          "package": "Hermes",
          "source": "src/Network-Hermes-Protocol.html#TrustLevel",
          "type": "data"
        },
        "index": {
          "description": "If Indirect require signature from an authority If Direct require an OK from the library client If None no trust is required",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "TrustLevel",
          "package": "Hermes",
          "partial": "Trust Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#t:TrustLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake immediate action\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "ALERT",
          "package": "Hermes",
          "signature": "ALERT",
          "type": "function"
        },
        "index": {
          "description": "Take immediate action",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "ALERT",
          "package": "Hermes",
          "partial": "ALERT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:ALERT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe don't know where this HermesID is; we never did, or old information proved to be false.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "AddressUnknown",
          "package": "Hermes",
          "signature": "AddressUnknown HermesID",
          "source": "src/Network-Hermes-Protocol.html#HermesException",
          "type": "function"
        },
        "index": {
          "description": "We don know where this HermesID is we never did or old information proved to be false",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "AddressUnknown",
          "package": "Hermes",
          "partial": "Address Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:AddressUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSomething went wrong while authenticating. Have a reason.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "AuthError",
          "package": "Hermes",
          "signature": "AuthError String",
          "source": "src/Network-Hermes-Protocol.html#HermesException",
          "type": "function"
        },
        "index": {
          "description": "Something went wrong while authenticating Have reason",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "AuthError",
          "package": "Hermes",
          "partial": "Auth Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:AuthError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSevere situations\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "CRITICAL",
          "package": "Hermes",
          "signature": "CRITICAL",
          "type": "function"
        },
        "index": {
          "description": "Severe situations",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "CRITICAL",
          "package": "Hermes",
          "partial": "CRITICAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:CRITICAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDebug messages\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "DEBUG",
          "package": "Hermes",
          "signature": "DEBUG",
          "type": "function"
        },
        "index": {
          "description": "Debug messages",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "DEBUG",
          "package": "Hermes",
          "partial": "DEBUG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:DEBUG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFailed to resolve the address\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "DNSFailure",
          "package": "Hermes",
          "signature": "DNSFailure Address",
          "source": "src/Network-Hermes-Protocol.html#HermesException",
          "type": "function"
        },
        "index": {
          "description": "Failed to resolve the address",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "DNSFailure",
          "package": "Hermes",
          "partial": "DNSFailure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:DNSFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSomething went wrong while deserializing your data.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "DeserializationError",
          "package": "Hermes",
          "signature": "DeserializationError String",
          "source": "src/Network-Hermes-Protocol.html#HermesException",
          "type": "function"
        },
        "index": {
          "description": "Something went wrong while deserializing your data",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "DeserializationError",
          "package": "Hermes",
          "partial": "Deserialization Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:DeserializationError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Hermes",
          "name": "Direct",
          "package": "Hermes",
          "signature": "Direct",
          "source": "src/Network-Hermes-Protocol.html#TrustLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "Direct",
          "package": "Hermes",
          "partial": "Direct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:Direct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSystem is unusable\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "EMERGENCY",
          "package": "Hermes",
          "signature": "EMERGENCY",
          "type": "function"
        },
        "index": {
          "description": "System is unusable",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "EMERGENCY",
          "package": "Hermes",
          "partial": "EMERGENCY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:EMERGENCY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral Errors\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "ERROR",
          "package": "Hermes",
          "signature": "ERROR",
          "type": "function"
        },
        "index": {
          "description": "General Errors",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "ERROR",
          "package": "Hermes",
          "partial": "ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHermes has no idea who you're talking about. How did you even get the HermesID?\n HermesID information is never discarded, so this exception should be rather uncommon.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "HermesIDUnknown",
          "package": "Hermes",
          "signature": "HermesIDUnknown HermesID",
          "source": "src/Network-Hermes-Protocol.html#HermesException",
          "type": "function"
        },
        "index": {
          "description": "Hermes has no idea who you re talking about How did you even get the HermesID HermesID information is never discarded so this exception should be rather uncommon",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "HermesIDUnknown",
          "package": "Hermes",
          "partial": "Hermes IDUnknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:HermesIDUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "INFO",
          "package": "Hermes",
          "signature": "INFO",
          "type": "function"
        },
        "index": {
          "description": "Information",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "INFO",
          "package": "Hermes",
          "partial": "INFO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:INFO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Hermes",
          "name": "Indirect",
          "package": "Hermes",
          "signature": "Indirect",
          "source": "src/Network-Hermes-Protocol.html#TrustLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "Indirect",
          "package": "Hermes",
          "partial": "Indirect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:Indirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempted to create a listener on a port we're already listening to\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "ListenerAlreadyExists",
          "package": "Hermes",
          "signature": "ListenerAlreadyExists",
          "source": "src/Network-Hermes-Protocol.html#HermesException",
          "type": "function"
        },
        "index": {
          "description": "Attempted to create listener on port we re already listening to",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "ListenerAlreadyExists",
          "package": "Hermes",
          "partial": "Listener Already Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:ListenerAlreadyExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessage corrupted (connection broken)\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "MessageError",
          "package": "Hermes",
          "signature": "MessageError",
          "source": "src/Network-Hermes-Protocol.html#HermesException",
          "type": "function"
        },
        "index": {
          "description": "Message corrupted connection broken",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "MessageError",
          "package": "Hermes",
          "partial": "Message Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:MessageError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormal runtime conditions\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "NOTICE",
          "package": "Hermes",
          "signature": "NOTICE",
          "type": "function"
        },
        "index": {
          "description": "Normal runtime conditions",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "NOTICE",
          "package": "Hermes",
          "partial": "NOTICE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:NOTICE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Hermes",
          "name": "None",
          "package": "Hermes",
          "signature": "None",
          "source": "src/Network-Hermes-Protocol.html#TrustLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "None",
          "package": "Hermes",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:None"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA different protocol version is in use at the remote host. Check library version.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "ProtocolVersionMismatch",
          "package": "Hermes",
          "signature": "ProtocolVersionMismatch Word32 Word32",
          "source": "src/Network-Hermes-Protocol.html#HermesException",
          "type": "function"
        },
        "index": {
          "description": "different protocol version is in use at the remote host Check library version",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "ProtocolVersionMismatch",
          "package": "Hermes",
          "partial": "Protocol Version Mismatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:ProtocolVersionMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive was explicitly cancelled by the user\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "RecvCancelled",
          "package": "Hermes",
          "signature": "RecvCancelled",
          "source": "src/Network-Hermes-Protocol.html#HermesException",
          "type": "function"
        },
        "index": {
          "description": "Receive was explicitly cancelled by the user",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "RecvCancelled",
          "package": "Hermes",
          "partial": "Recv Cancelled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:RecvCancelled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome operation took longer than the user-configured timeout\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "Timeout",
          "package": "Hermes",
          "signature": "Timeout",
          "source": "src/Network-Hermes-Protocol.html#HermesException",
          "type": "function"
        },
        "index": {
          "description": "Some operation took longer than the user-configured timeout",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "Timeout",
          "package": "Hermes",
          "partial": "Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:Timeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral Warnings\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "WARNING",
          "package": "Hermes",
          "signature": "WARNING",
          "type": "function"
        },
        "index": {
          "description": "General Warnings",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "WARNING",
          "package": "Hermes",
          "partial": "WARNING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:WARNING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe remote server is not speaking Hermes-speak.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "WrongProtocol",
          "package": "Hermes",
          "signature": "WrongProtocol",
          "source": "src/Network-Hermes-Protocol.html#HermesException",
          "type": "function"
        },
        "index": {
          "description": "The remote server is not speaking Hermes-speak",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "WrongProtocol",
          "package": "Hermes",
          "partial": "Wrong Protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:WrongProtocol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf you wish to queue messages without immediately calling recv, use this.\n\u003c/p\u003e\u003cp\u003eacceptType is idempotent.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "acceptType",
          "package": "Hermes",
          "signature": "Context-\u003e msg-\u003e tag-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "If you wish to queue messages without immediately calling recv use this acceptType is idempotent",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "acceptType",
          "normalized": "Context-\u003ea-\u003eb-\u003eIO()",
          "package": "Hermes",
          "partial": "Type",
          "signature": "Context-\u003emsg-\u003etag-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:acceptType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds an authority to the list of trusted authorities\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "addAuthority",
          "package": "Hermes",
          "signature": "Context -\u003e Authority -\u003e IO ()",
          "source": "src/Network-Hermes.html#addAuthority",
          "type": "function"
        },
        "index": {
          "description": "Adds an authority to the list of trusted authorities",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "addAuthority",
          "normalized": "Context-\u003eAuthority-\u003eIO()",
          "package": "Hermes",
          "partial": "Authority",
          "signature": "Context-\u003eAuthority-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:addAuthority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a callback to be called every time a type-matching factoid is\n inserted or updated. It will not be called for writeFactoid calls.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "addCallback",
          "package": "Hermes",
          "signature": "Context -\u003e (HermesID -\u003e tag -\u003e msg -\u003e IO ()) -\u003e IO ()",
          "source": "src/Network-Hermes.html#addCallback",
          "type": "function"
        },
        "index": {
          "description": "Add callback to be called every time type-matching factoid is inserted or updated It will not be called for writeFactoid calls",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "addCallback",
          "normalized": "Context-\u003e(HermesID-\u003ea-\u003eb-\u003eIO())-\u003eIO()",
          "package": "Hermes",
          "partial": "Callback",
          "signature": "Context-\u003e(HermesID-\u003etag-\u003emsg-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:addCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemote procedure call\n\u003c/p\u003e\u003cp\u003eIn addition to the usual core exceptions, this function may fail in\n the specific case the the named procedure doesn't exist or has the\n wrong type, in which case it returns Nothing.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "call",
          "package": "Hermes",
          "signature": "Context -\u003e HermesID -\u003e ProcName -\u003e a -\u003e IO (Maybe b)",
          "source": "src/Network-Hermes.html#call",
          "type": "function"
        },
        "index": {
          "description": "Remote procedure call In addition to the usual core exceptions this function may fail in the specific case the the named procedure doesn exist or has the wrong type in which case it returns Nothing",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "call",
          "normalized": "Context-\u003eHermesID-\u003eProcName-\u003ea-\u003eIO(Maybe b)",
          "package": "Hermes",
          "signature": "Context-\u003eHermesID-\u003eProcName-\u003ea-\u003eIO(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnects to a given address without knowing in advance who will\n be answering. The answerer's HermesID is returned, assuming the\n connection is properly established.\n\u003c/p\u003e\u003cp\u003eTypically used for bootstrapping.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "connect",
          "package": "Hermes",
          "signature": "Context -\u003e Address -\u003e IO HermesID",
          "source": "src/Network-Hermes.html#connect",
          "type": "function"
        },
        "index": {
          "description": "Connects to given address without knowing in advance who will be answering The answerer HermesID is returned assuming the connection is properly established Typically used for bootstrapping",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "connect",
          "normalized": "Context-\u003eAddress-\u003eIO HermesID",
          "package": "Hermes",
          "signature": "Context-\u003eAddress-\u003eIO HermesID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Hermes",
          "name": "installSignature",
          "package": "Hermes",
          "signature": "Context -\u003e Signature -\u003e IO ()",
          "source": "src/Network-Hermes.html#installSignature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "installSignature",
          "normalized": "Context-\u003eSignature-\u003eIO()",
          "package": "Hermes",
          "partial": "Signature",
          "signature": "Context-\u003eSignature-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:installSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Hermes",
          "name": "newAuthority",
          "package": "Hermes",
          "signature": "IO Authority",
          "source": "src/Network-Hermes-Signature.html#newAuthority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "newAuthority",
          "package": "Hermes",
          "partial": "Authority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:newAuthority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new Hermes context allowing messaging, RPC and gossip,\n and using automatic address dissemination via the gossip protocol.\n\u003c/p\u003e\u003cp\u003eThe trust level defaults to Indirect.\n\u003c/p\u003e\u003cp\u003eThe gossip interval defaults to 300 seconds, call setPeriod to\n change it.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "newContext",
          "package": "Hermes",
          "signature": "IO Context",
          "source": "src/Network-Hermes.html#newContext",
          "type": "function"
        },
        "index": {
          "description": "Creates new Hermes context allowing messaging RPC and gossip and using automatic address dissemination via the gossip protocol The trust level defaults to Indirect The gossip interval defaults to seconds call setPeriod to change it",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "newContext",
          "package": "Hermes",
          "partial": "Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:newContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a signature request for serialization\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "newSignatureRequest",
          "package": "Hermes",
          "signature": "Context -\u003e SignatureRequest",
          "source": "src/Network-Hermes.html#newSignatureRequest",
          "type": "function"
        },
        "index": {
          "description": "Creates signature request for serialization",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "newSignatureRequest",
          "normalized": "Context-\u003eSignatureRequest",
          "package": "Hermes",
          "partial": "Signature Request",
          "signature": "Context-\u003eSignatureRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:newSignatureRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a pre-signed context. You may snapshot this to restore on\n another computer, or use on this one.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "newSignedContext",
          "package": "Hermes",
          "signature": "Authority -\u003e IO Context",
          "source": "src/Network-Hermes.html#newSignedContext",
          "type": "function"
        },
        "index": {
          "description": "Creates pre-signed context You may snapshot this to restore on another computer or use on this one",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "newSignedContext",
          "normalized": "Authority-\u003eIO Context",
          "package": "Hermes",
          "partial": "Signed Context",
          "signature": "Authority-\u003eIO Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:newSignedContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a factoid, assuming it exists.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "readFactoid",
          "package": "Hermes",
          "signature": "Context -\u003e tag -\u003e HermesID -\u003e IO (Maybe factoid)",
          "source": "src/Network-Hermes.html#readFactoid",
          "type": "function"
        },
        "index": {
          "description": "Read factoid assuming it exists",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "readFactoid",
          "normalized": "Context-\u003ea-\u003eHermesID-\u003eIO(Maybe b)",
          "package": "Hermes",
          "partial": "Factoid",
          "signature": "Context-\u003etag-\u003eHermesID-\u003eIO(Maybe factoid)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:readFactoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead all factoids with an appropriate type and tag. Useful if you\n don't know what source to expect.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "readFactoids",
          "package": "Hermes",
          "signature": "Context -\u003e tag -\u003e IO [(HermesID, factoid)]",
          "source": "src/Network-Hermes.html#readFactoids",
          "type": "function"
        },
        "index": {
          "description": "Read all factoids with an appropriate type and tag Useful if you don know what source to expect",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "readFactoids",
          "normalized": "Context-\u003ea-\u003eIO[(HermesID,b)]",
          "package": "Hermes",
          "partial": "Factoids",
          "signature": "Context-\u003etag-\u003eIO[(HermesID,factoid)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:readFactoids"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceives a message. This function blocks until a message of the\n appropriate type has been received, possibly forever. You may use\n multiple simultaneous recv calls; each message will only be\n delivered once.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "recv",
          "package": "Hermes",
          "signature": "Context -\u003e IO (HermesID, msg)",
          "source": "src/Network-Hermes.html#recv",
          "type": "function"
        },
        "index": {
          "description": "Receives message This function blocks until message of the appropriate type has been received possibly forever You may use multiple simultaneous recv calls each message will only be delivered once",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "recv",
          "normalized": "Context-\u003eIO(HermesID,a)",
          "package": "Hermes",
          "signature": "Context-\u003eIO(HermesID,msg)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:recv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Hermes",
          "name": "recv'",
          "package": "Hermes",
          "signature": "Context -\u003e tag -\u003e IO (HermesID, msg)",
          "source": "src/Network-Hermes.html#recv%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "recv'",
          "normalized": "Context-\u003ea-\u003eIO(HermesID,b)",
          "package": "Hermes",
          "signature": "Context-\u003etag-\u003eIO(HermesID,msg)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:recv-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf you wish to *stop* queueing messages of a given type, use this.\n\u003c/p\u003e\u003cp\u003eCalling refuseType will cause all recv calls to this type/tag\n combination to throw RecvCancelled.\n\u003c/p\u003e\u003cp\u003erefuseType is idempotent.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "refuseType",
          "package": "Hermes",
          "signature": "Context-\u003e msg-\u003e tag-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "If you wish to stop queueing messages of given type use this Calling refuseType will cause all recv calls to this type tag combination to throw RecvCancelled refuseType is idempotent",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "refuseType",
          "normalized": "Context-\u003ea-\u003eb-\u003eIO()",
          "package": "Hermes",
          "partial": "Type",
          "signature": "Context-\u003emsg-\u003etag-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:refuseType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegisters (or replaces) a callback that is to be executed\n whenever we receive a properly typed call to this name.\n\u003c/p\u003e\u003cp\u003eYou may register calls with the same name, so long as they have\n different types.\n\u003c/p\u003e\u003cp\u003eIf the callback already exists, it is overwritten.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "registerCallback",
          "package": "Hermes",
          "signature": "Context-\u003e ProcName-\u003e (a -\u003e IO b)-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Registers or replaces callback that is to be executed whenever we receive properly typed call to this name You may register calls with the same name so long as they have different types If the callback already exists it is overwritten",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "registerCallback",
          "normalized": "Context-\u003eProcName-\u003e(a-\u003eIO b)-\u003eIO()",
          "package": "Hermes",
          "partial": "Callback",
          "signature": "Context-\u003eProcName-\u003e(a-\u003eIO b)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:registerCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestore an address snapshot to bootstrap your node.\n\u003c/p\u003e\u003cp\u003eReturns Nothing on success, otherwise a parse error.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "restoreAddresses",
          "package": "Hermes",
          "signature": "Context -\u003e ByteString -\u003e STM (Maybe String)",
          "source": "src/Network-Hermes.html#restoreAddresses",
          "type": "function"
        },
        "index": {
          "description": "Restore an address snapshot to bootstrap your node Returns Nothing on success otherwise parse error",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "restoreAddresses",
          "normalized": "Context-\u003eByteString-\u003eSTM(Maybe String)",
          "package": "Hermes",
          "partial": "Addresses",
          "signature": "Context-\u003eByteString-\u003eSTM(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:restoreAddresses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestores a context from storage\n\u003c/p\u003e\u003cp\u003eYou will have to reset RPC bindings and listeners.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "restoreContext",
          "package": "Hermes",
          "signature": "ByteString -\u003e IO Context",
          "source": "src/Network-Hermes.html#restoreContext",
          "type": "function"
        },
        "index": {
          "description": "Restores context from storage You will have to reset RPC bindings and listeners",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "restoreContext",
          "normalized": "ByteString-\u003eIO Context",
          "package": "Hermes",
          "partial": "Context",
          "signature": "ByteString-\u003eIO Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:restoreContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a message. The type representation is included, so a\n modicum of type safety is provided, and recv will only attempt to\n decode and return a message of the matching (not necessarily\n correct! Make sure your de/serializers match!) type. There is, of\n course, a possibility of exceptions if application versions differ.\n\u003c/p\u003e\u003cp\u003eYou may use send' to provide an arbitrary tag to match on, in which\n case recv' will only return a message with an equal tag; if you\n don't, recv will only return messages without tags.\n\u003c/p\u003e\u003cp\u003eThis function normally blocks until the entire message has been\n sent, an exception occurs or a timeout is reached. It will retry\n once if the connection fails within the timeout.\n\u003c/p\u003e\u003cp\u003eUnless acceptType or recv has been called in advance, sent messages\n are thrown away instead of queued. Once either has been, they are\n indefinitely queued until refuseType is called.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "send",
          "package": "Hermes",
          "signature": "Context -\u003e HermesID -\u003e msg -\u003e IO ()",
          "source": "src/Network-Hermes.html#send",
          "type": "function"
        },
        "index": {
          "description": "Sends message The type representation is included so modicum of type safety is provided and recv will only attempt to decode and return message of the matching not necessarily correct Make sure your de serializers match type There is of course possibility of exceptions if application versions differ You may use send to provide an arbitrary tag to match on in which case recv will only return message with an equal tag if you don recv will only return messages without tags This function normally blocks until the entire message has been sent an exception occurs or timeout is reached It will retry once if the connection fails within the timeout Unless acceptType or recv has been called in advance sent messages are thrown away instead of queued Once either has been they are indefinitely queued until refuseType is called",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "send",
          "normalized": "Context-\u003eHermesID-\u003ea-\u003eIO()",
          "package": "Hermes",
          "signature": "Context-\u003eHermesID-\u003emsg-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Hermes",
          "name": "send'",
          "package": "Hermes",
          "signature": "Context -\u003e HermesID -\u003e msg -\u003e tag -\u003e IO ()",
          "source": "src/Network-Hermes.html#send%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "send'",
          "normalized": "Context-\u003eHermesID-\u003ea-\u003eb-\u003eIO()",
          "package": "Hermes",
          "signature": "Context-\u003eHermesID-\u003emsg-\u003etag-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:send-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis utility function decides the lowest priority that will be\n shown. The default is WARNING.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "setDebug",
          "package": "Hermes",
          "signature": "Priority -\u003e IO ()",
          "source": "src/Network-Hermes.html#setDebug",
          "type": "function"
        },
        "index": {
          "description": "This utility function decides the lowest priority that will be shown The default is WARNING",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "setDebug",
          "normalized": "Priority-\u003eIO()",
          "package": "Hermes",
          "partial": "Debug",
          "signature": "Priority-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:setDebug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the period for the periodic gossiper. It will take effect\n after the next periodic gossip.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "setPeriod",
          "package": "Hermes",
          "signature": "Context-\u003e Double-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Set the period for the periodic gossiper It will take effect after the next periodic gossip",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "setPeriod",
          "normalized": "Context-\u003eDouble-\u003eIO()",
          "package": "Hermes",
          "partial": "Period",
          "signature": "Context-\u003eDouble-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:setPeriod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor operations that may block, other than recv, this sets a\n maximum wait time. Hermes will never block longer than this.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "setTimeout",
          "package": "Hermes",
          "signature": "Context-\u003e Double-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "For operations that may block other than recv this sets maximum wait time Hermes will never block longer than this",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "setTimeout",
          "normalized": "Context-\u003eDouble-\u003eIO()",
          "package": "Hermes",
          "partial": "Timeout",
          "signature": "Context-\u003eDouble-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:setTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the desired trust limit, which will take effect on next\n connection\n\u003c/p\u003e\u003cp\u003eWhen connecting peers (either way), a degree of trust is required,\n or the connection will be rejected.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "setTrustLimit",
          "package": "Hermes",
          "signature": "Context -\u003e TrustLevel -\u003e IO ()",
          "source": "src/Network-Hermes.html#setTrustLimit",
          "type": "function"
        },
        "index": {
          "description": "Set the desired trust limit which will take effect on next connection When connecting peers either way degree of trust is required or the connection will be rejected",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "setTrustLimit",
          "normalized": "Context-\u003eTrustLevel-\u003eIO()",
          "package": "Hermes",
          "partial": "Trust Limit",
          "signature": "Context-\u003eTrustLevel-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:setTrustLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign a request. Use setKeySignature to install it.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "signRequest",
          "package": "Hermes",
          "signature": "Authority -\u003e SignatureRequest -\u003e Signature",
          "source": "src/Network-Hermes-Signature.html#signRequest",
          "type": "function"
        },
        "index": {
          "description": "Sign request Use setKeySignature to install it",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "signRequest",
          "normalized": "Authority-\u003eSignatureRequest-\u003eSignature",
          "package": "Hermes",
          "partial": "Request",
          "signature": "Authority-\u003eSignatureRequest-\u003eSignature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:signRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe address snapshot contains address information for every node\n we know of, which can be restored into another node to bootstrap\n it.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "snapshotAddresses",
          "package": "Hermes",
          "signature": "Context -\u003e STM ByteString",
          "source": "src/Network-Hermes.html#snapshotAddresses",
          "type": "function"
        },
        "index": {
          "description": "The address snapshot contains address information for every node we know of which can be restored into another node to bootstrap it",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "snapshotAddresses",
          "normalized": "Context-\u003eSTM ByteString",
          "package": "Hermes",
          "partial": "Addresses",
          "signature": "Context-\u003eSTM ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:snapshotAddresses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Hermes",
          "name": "snapshotContext",
          "package": "Hermes",
          "signature": "Context -\u003e IO ByteString",
          "source": "src/Network-Hermes.html#snapshotContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "snapshotContext",
          "normalized": "Context-\u003eIO ByteString",
          "package": "Hermes",
          "partial": "Context",
          "signature": "Context-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:snapshotContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSnapshots a context for storage  \n\u003c/p\u003e\u003cp\u003eTransient state (RPC calls, messages) are discarded, as are\n connection, listener information and RPC bindings.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "snapshotContext'",
          "package": "Hermes",
          "signature": "Context -\u003e STM ByteString",
          "source": "src/Network-Hermes.html#snapshotContext%27",
          "type": "function"
        },
        "index": {
          "description": "Snapshots context for storage Transient state RPC calls messages are discarded as are connection listener information and RPC bindings",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "snapshotContext'",
          "normalized": "Context-\u003eSTM ByteString",
          "package": "Hermes",
          "partial": "Context'",
          "signature": "Context-\u003eSTM ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:snapshotContext-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet up a listener for incoming connections. These are not stored\n when snapshotting contexts. This function will return once the port\n has been bound.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "startListener",
          "package": "Hermes",
          "signature": "Context-\u003e Address-\u003e Maybe Address-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Set up listener for incoming connections These are not stored when snapshotting contexts This function will return once the port has been bound",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "startListener",
          "normalized": "Context-\u003eAddress-\u003eMaybe Address-\u003eIO()",
          "package": "Hermes",
          "partial": "Listener",
          "signature": "Context-\u003eAddress-\u003eMaybe Address-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:startListener"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Hermes",
          "name": "uuid",
          "package": "Hermes",
          "signature": "Context -\u003e HermesID",
          "source": "src/Network-Hermes.html#uuid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "uuid",
          "normalized": "Context-\u003eHermesID",
          "package": "Hermes",
          "signature": "Context-\u003eHermesID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:uuid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll use of hermes must be wrapped with this (on windows)\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "withHermes",
          "package": "Hermes",
          "signature": "IO a -\u003e IO a",
          "source": "src/Network-Hermes-Core.html#withHermes",
          "type": "function"
        },
        "index": {
          "description": "All use of hermes must be wrapped with this on windows",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "withHermes",
          "normalized": "IO a-\u003eIO a",
          "package": "Hermes",
          "partial": "Hermes",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:withHermes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a factoid in the gossip network. This will immediately\n trigger a limited gossip exchange, hopefully spreading it to a\n large fraction of the network.\n\u003c/p\u003e\u003cp\u003eFactoids are keyed by their type, source, and the type and\n serialized value of an arbitrary tag. They can be replaced by\n re-inserting later, and optionally expire after a timeout.\n\u003c/p\u003e\u003cp\u003eDon't rely on the timeout, though. It's for garbage collection, and\n is not required to be exact.\n\u003c/p\u003e",
          "module": "Network.Hermes",
          "name": "writeFactoid",
          "package": "Hermes",
          "signature": "Context-\u003e factoid-\u003e tag-\u003e Maybe TTL-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Insert factoid in the gossip network This will immediately trigger limited gossip exchange hopefully spreading it to large fraction of the network Factoids are keyed by their type source and the type and serialized value of an arbitrary tag They can be replaced by re-inserting later and optionally expire after timeout Don rely on the timeout though It for garbage collection and is not required to be exact",
          "hierarchy": "Network Hermes",
          "module": "Network.Hermes",
          "name": "writeFactoid",
          "normalized": "Context-\u003ea-\u003eb-\u003eMaybe TTL-\u003eIO()",
          "package": "Hermes",
          "partial": "Factoid",
          "signature": "Context-\u003efactoid-\u003etag-\u003eMaybe TTL-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hermes/docs/Network-Hermes.html#v:writeFactoid"
      }
    }
  ]
]