[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-Arbitrary.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQuickCheck Arbitrary instances for various utility data types\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Haskoin.Util.Arbitrary",
        "fct-package": "haskoin-util",
        "fct-signature": "module",
        "fct-source": "src/Network-Haskoin-Util-Arbitrary.html",
        "fct-type": "module",
        "title": "Arbitrary"
      },
      "index": {
        "description": "QuickCheck Arbitrary instances for various utility data types",
        "hierarchy": "Network Haskoin Util Arbitrary",
        "module": "Network.Haskoin.Util.Arbitrary",
        "name": "Arbitrary",
        "normalized": "",
        "package": "haskoin-util",
        "partial": "Arbitrary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-Arbitrary.html#v:nonEmptyBS",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate non-empty strict ByteStrings\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util.Arbitrary",
        "fct-package": "haskoin-util",
        "fct-signature": "Gen ByteString",
        "fct-source": "src/Network-Haskoin-Util-Arbitrary.html#nonEmptyBS",
        "fct-type": "function",
        "title": "nonEmptyBS"
      },
      "index": {
        "description": "Generate non-empty strict ByteStrings",
        "hierarchy": "Network Haskoin Util Arbitrary",
        "module": "Network.Haskoin.Util.Arbitrary",
        "name": "nonEmptyBS",
        "normalized": "",
        "package": "haskoin-util",
        "partial": "Empty BS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Build type, and associated operations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Haskoin.Util.BuildMonad",
        "fct-package": "haskoin-util",
        "fct-signature": "module",
        "fct-source": "src/Network-Haskoin-Util-BuildMonad.html",
        "fct-type": "module",
        "title": "BuildMonad"
      },
      "index": {
        "description": "The Build type and associated operations",
        "hierarchy": "Network Haskoin Util BuildMonad",
        "module": "Network.Haskoin.Util.BuildMonad",
        "name": "BuildMonad",
        "normalized": "",
        "package": "haskoin-util",
        "partial": "Build Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#t:Build",
      "description": {
        "fct-descr": "\u003cp\u003eThe Build monad represents computations that can be in one of three states:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Complete\n\u003c/li\u003e\u003cli\u003e Partial\n\u003c/li\u003e\u003cli\u003e Broken\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIt extends the Either monad with an additional Partial value to describe a\n  valid computation flagged with a Partial context. The Build monad is useful\n  when you describe computations where parts of the computation are either\n  complete, partially complete or broken. Combining only Complete computations\n  will produce a Complete result. However, if one of the computations is\n  Partial, the whole computation will be Partial as well. And if some\n  computation is Broken, the whole computation will be broken as well.\n\u003c/p\u003e\u003cp\u003eThe Build monad is used by Haskoin to describe the state of the transaction\n  signing computation. To sign a transaction, all input scripts need to be \n  signed. The whole transaction will be completely signed only if all the\n  input scripts are completely signed. If any of the inputs is partially signed,\n  then the whole transaction will be partially signed as well. And the whole\n  transaction is broken if one of the inputs failed to parse or is broken.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util.BuildMonad",
        "fct-package": "haskoin-util",
        "fct-signature": "data",
        "fct-source": "src/Network-Haskoin-Util-BuildMonad.html#Build",
        "fct-type": "data",
        "title": "Build"
      },
      "index": {
        "description": "The Build monad represents computations that can be in one of three states Complete Partial Broken It extends the Either monad with an additional Partial value to describe valid computation flagged with Partial context The Build monad is useful when you describe computations where parts of the computation are either complete partially complete or broken Combining only Complete computations will produce Complete result However if one of the computations is Partial the whole computation will be Partial as well And if some computation is Broken the whole computation will be broken as well The Build monad is used by Haskoin to describe the state of the transaction signing computation To sign transaction all input scripts need to be signed The whole transaction will be completely signed only if all the input scripts are completely signed If any of the inputs is partially signed then the whole transaction will be partially signed as well And the whole transaction is broken if one of the inputs failed to parse or is broken",
        "hierarchy": "Network Haskoin Util BuildMonad",
        "module": "Network.Haskoin.Util.BuildMonad",
        "name": "Build",
        "normalized": "",
        "package": "haskoin-util",
        "partial": "Build",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#t:BuildT",
      "description": {
        "fct-descr": "\u003cp\u003eBuildT transformer monad\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util.BuildMonad",
        "fct-package": "haskoin-util",
        "fct-signature": "newtype",
        "fct-source": "src/Network-Haskoin-Util-BuildMonad.html#BuildT",
        "fct-type": "newtype",
        "title": "BuildT"
      },
      "index": {
        "description": "BuildT transformer monad",
        "hierarchy": "Network Haskoin Util BuildMonad",
        "module": "Network.Haskoin.Util.BuildMonad",
        "name": "BuildT",
        "normalized": "",
        "package": "haskoin-util",
        "partial": "Build",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#v:Broken",
      "description": {
        "fct-descr": "\u003cp\u003eDescribes a broken computation\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util.BuildMonad",
        "fct-package": "haskoin-util",
        "fct-signature": "Broken",
        "fct-source": "src/Network-Haskoin-Util-BuildMonad.html#Build",
        "fct-type": "function",
        "title": "Broken"
      },
      "index": {
        "description": "Describes broken computation",
        "hierarchy": "Network Haskoin Util BuildMonad",
        "module": "Network.Haskoin.Util.BuildMonad",
        "name": "Broken",
        "normalized": "",
        "package": "haskoin-util",
        "partial": "Broken",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#v:BuildT",
      "description": {
        "fct-module": "Network.Haskoin.Util.BuildMonad",
        "fct-package": "haskoin-util",
        "fct-signature": "BuildT",
        "fct-source": "src/Network-Haskoin-Util-BuildMonad.html#BuildT",
        "fct-type": "function",
        "title": "BuildT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Util BuildMonad",
        "module": "Network.Haskoin.Util.BuildMonad",
        "name": "BuildT",
        "normalized": "",
        "package": "haskoin-util",
        "partial": "Build",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#v:Complete",
      "description": {
        "fct-descr": "\u003cp\u003eDescribes a successful complete computation\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util.BuildMonad",
        "fct-package": "haskoin-util",
        "fct-signature": "Complete",
        "fct-source": "src/Network-Haskoin-Util-BuildMonad.html#Build",
        "fct-type": "function",
        "title": "Complete"
      },
      "index": {
        "description": "Describes successful complete computation",
        "hierarchy": "Network Haskoin Util BuildMonad",
        "module": "Network.Haskoin.Util.BuildMonad",
        "name": "Complete",
        "normalized": "",
        "package": "haskoin-util",
        "partial": "Complete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#v:Partial",
      "description": {
        "fct-descr": "\u003cp\u003eDescribes a successful but partial computation\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util.BuildMonad",
        "fct-package": "haskoin-util",
        "fct-signature": "Partial",
        "fct-source": "src/Network-Haskoin-Util-BuildMonad.html#Build",
        "fct-type": "function",
        "title": "Partial"
      },
      "index": {
        "description": "Describes successful but partial computation",
        "hierarchy": "Network Haskoin Util BuildMonad",
        "module": "Network.Haskoin.Util.BuildMonad",
        "name": "Partial",
        "normalized": "",
        "package": "haskoin-util",
        "partial": "Partial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#v:buildToEither",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms a Build value into an Either String value. Complete and Partial\n are mapped to Right and Broken is mapped to Left.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util.BuildMonad",
        "fct-package": "haskoin-util",
        "fct-signature": "Build a -\u003e Either String a",
        "fct-source": "src/Network-Haskoin-Util-BuildMonad.html#buildToEither",
        "fct-type": "function",
        "title": "buildToEither"
      },
      "index": {
        "description": "Transforms Build value into an Either String value Complete and Partial are mapped to Right and Broken is mapped to Left",
        "hierarchy": "Network Haskoin Util BuildMonad",
        "module": "Network.Haskoin.Util.BuildMonad",
        "name": "buildToEither",
        "normalized": "Build a-\u003eEither String a",
        "package": "haskoin-util",
        "partial": "To Either",
        "signature": "Build a-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#v:eitherToBuild",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms an Either String value into a Build value. Right is mapped to\n Complete and Left is mapped to Broken\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util.BuildMonad",
        "fct-package": "haskoin-util",
        "fct-signature": "Either String a -\u003e Build a",
        "fct-source": "src/Network-Haskoin-Util-BuildMonad.html#eitherToBuild",
        "fct-type": "function",
        "title": "eitherToBuild"
      },
      "index": {
        "description": "Transforms an Either String value into Build value Right is mapped to Complete and Left is mapped to Broken",
        "hierarchy": "Network Haskoin Util BuildMonad",
        "module": "Network.Haskoin.Util.BuildMonad",
        "name": "eitherToBuild",
        "normalized": "Either String a-\u003eBuild a",
        "package": "haskoin-util",
        "partial": "To Build",
        "signature": "Either String a-\u003eBuild a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#v:guardPartial",
      "description": {
        "fct-descr": "\u003cp\u003eBinds a Partial value to the computation when the predicate is False.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util.BuildMonad",
        "fct-package": "haskoin-util",
        "fct-signature": "Bool -\u003e Build ()",
        "fct-source": "src/Network-Haskoin-Util-BuildMonad.html#guardPartial",
        "fct-type": "function",
        "title": "guardPartial"
      },
      "index": {
        "description": "Binds Partial value to the computation when the predicate is False",
        "hierarchy": "Network Haskoin Util BuildMonad",
        "module": "Network.Haskoin.Util.BuildMonad",
        "name": "guardPartial",
        "normalized": "Bool-\u003eBuild()",
        "package": "haskoin-util",
        "partial": "Partial",
        "signature": "Bool-\u003eBuild()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#v:isBroken",
      "description": {
        "fct-descr": "\u003cp\u003eReturn True if the Build value is Broken\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util.BuildMonad",
        "fct-package": "haskoin-util",
        "fct-signature": "Build a -\u003e Bool",
        "fct-source": "src/Network-Haskoin-Util-BuildMonad.html#isBroken",
        "fct-type": "function",
        "title": "isBroken"
      },
      "index": {
        "description": "Return True if the Build value is Broken",
        "hierarchy": "Network Haskoin Util BuildMonad",
        "module": "Network.Haskoin.Util.BuildMonad",
        "name": "isBroken",
        "normalized": "Build a-\u003eBool",
        "package": "haskoin-util",
        "partial": "Broken",
        "signature": "Build a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#v:isComplete",
      "description": {
        "fct-descr": "\u003cp\u003eReturns True if the Build value is Complete\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util.BuildMonad",
        "fct-package": "haskoin-util",
        "fct-signature": "Build a -\u003e Bool",
        "fct-source": "src/Network-Haskoin-Util-BuildMonad.html#isComplete",
        "fct-type": "function",
        "title": "isComplete"
      },
      "index": {
        "description": "Returns True if the Build value is Complete",
        "hierarchy": "Network Haskoin Util BuildMonad",
        "module": "Network.Haskoin.Util.BuildMonad",
        "name": "isComplete",
        "normalized": "Build a-\u003eBool",
        "package": "haskoin-util",
        "partial": "Complete",
        "signature": "Build a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#v:isPartial",
      "description": {
        "fct-descr": "\u003cp\u003eReturns True if the Build value is Partial\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util.BuildMonad",
        "fct-package": "haskoin-util",
        "fct-signature": "Build a -\u003e Bool",
        "fct-source": "src/Network-Haskoin-Util-BuildMonad.html#isPartial",
        "fct-type": "function",
        "title": "isPartial"
      },
      "index": {
        "description": "Returns True if the Build value is Partial",
        "hierarchy": "Network Haskoin Util BuildMonad",
        "module": "Network.Haskoin.Util.BuildMonad",
        "name": "isPartial",
        "normalized": "Build a-\u003eBool",
        "package": "haskoin-util",
        "partial": "Partial",
        "signature": "Build a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#v:liftBuild",
      "description": {
        "fct-descr": "\u003cp\u003eLift a Build computation into the BuildT monad\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util.BuildMonad",
        "fct-package": "haskoin-util",
        "fct-signature": "Build a -\u003e BuildT m a",
        "fct-source": "src/Network-Haskoin-Util-BuildMonad.html#liftBuild",
        "fct-type": "function",
        "title": "liftBuild"
      },
      "index": {
        "description": "Lift Build computation into the BuildT monad",
        "hierarchy": "Network Haskoin Util BuildMonad",
        "module": "Network.Haskoin.Util.BuildMonad",
        "name": "liftBuild",
        "normalized": "Build a-\u003eBuildT b a",
        "package": "haskoin-util",
        "partial": "Build",
        "signature": "Build a-\u003eBuildT m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#v:runBroken",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Haskoin.Util.BuildMonad",
        "fct-package": "haskoin-util",
        "fct-signature": "String",
        "fct-source": "src/Network-Haskoin-Util-BuildMonad.html#Build",
        "fct-type": "function",
        "title": "runBroken"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Util BuildMonad",
        "module": "Network.Haskoin.Util.BuildMonad",
        "name": "runBroken",
        "normalized": "",
        "package": "haskoin-util",
        "partial": "Broken",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#v:runBuild",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Haskoin.Util.BuildMonad",
        "fct-package": "haskoin-util",
        "fct-signature": "a",
        "fct-source": "src/Network-Haskoin-Util-BuildMonad.html#Build",
        "fct-type": "function",
        "title": "runBuild"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Util BuildMonad",
        "module": "Network.Haskoin.Util.BuildMonad",
        "name": "runBuild",
        "normalized": "",
        "package": "haskoin-util",
        "partial": "Build",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#v:runBuildT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Haskoin.Util.BuildMonad",
        "fct-package": "haskoin-util",
        "fct-signature": "m (Build a)",
        "fct-source": "src/Network-Haskoin-Util-BuildMonad.html#BuildT",
        "fct-type": "function",
        "title": "runBuildT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Util BuildMonad",
        "module": "Network.Haskoin.Util.BuildMonad",
        "name": "runBuildT",
        "normalized": "",
        "package": "haskoin-util",
        "partial": "Build",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-Network.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeclaration of constant values that depend on the network type\n  (for example: prodnet or testnet). The values exported from this modules\n  are imported from a network-specific sub-module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Haskoin.Util.Network",
        "fct-package": "haskoin-util",
        "fct-signature": "module",
        "fct-source": "src/Network-Haskoin-Util-Network.html",
        "fct-type": "module",
        "title": "Network"
      },
      "index": {
        "description": "Declaration of constant values that depend on the network type for example prodnet or testnet The values exported from this modules are imported from network-specific sub-module",
        "hierarchy": "Network Haskoin Util Network",
        "module": "Network.Haskoin.Util.Network",
        "name": "Network",
        "normalized": "",
        "package": "haskoin-util",
        "partial": "Network",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-Network.html#v:addrPrefix",
      "description": {
        "fct-descr": "\u003cp\u003ePrefix for base58 PubKey hash address\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util.Network",
        "fct-package": "haskoin-util",
        "fct-signature": "Word8",
        "fct-source": "src/Network-Haskoin-Util-Network-Prodnet.html#addrPrefix",
        "fct-type": "function",
        "title": "addrPrefix"
      },
      "index": {
        "description": "Prefix for base58 PubKey hash address",
        "hierarchy": "Network Haskoin Util Network",
        "module": "Network.Haskoin.Util.Network",
        "name": "addrPrefix",
        "normalized": "",
        "package": "haskoin-util",
        "partial": "Prefix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-Network.html#v:extPubKeyPrefix",
      "description": {
        "fct-descr": "\u003cp\u003ePrefix for extended public keys (BIP32)\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util.Network",
        "fct-package": "haskoin-util",
        "fct-signature": "Word32",
        "fct-source": "src/Network-Haskoin-Util-Network-Prodnet.html#extPubKeyPrefix",
        "fct-type": "function",
        "title": "extPubKeyPrefix"
      },
      "index": {
        "description": "Prefix for extended public keys BIP32",
        "hierarchy": "Network Haskoin Util Network",
        "module": "Network.Haskoin.Util.Network",
        "name": "extPubKeyPrefix",
        "normalized": "",
        "package": "haskoin-util",
        "partial": "Pub Key Prefix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-Network.html#v:extSecretPrefix",
      "description": {
        "fct-descr": "\u003cp\u003ePrefix for extended private keys (BIP32)\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util.Network",
        "fct-package": "haskoin-util",
        "fct-signature": "Word32",
        "fct-source": "src/Network-Haskoin-Util-Network-Prodnet.html#extSecretPrefix",
        "fct-type": "function",
        "title": "extSecretPrefix"
      },
      "index": {
        "description": "Prefix for extended private keys BIP32",
        "hierarchy": "Network Haskoin Util Network",
        "module": "Network.Haskoin.Util.Network",
        "name": "extSecretPrefix",
        "normalized": "",
        "package": "haskoin-util",
        "partial": "Secret Prefix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-Network.html#v:scriptPrefix",
      "description": {
        "fct-descr": "\u003cp\u003ePrefix for base58 script hash address\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util.Network",
        "fct-package": "haskoin-util",
        "fct-signature": "Word8",
        "fct-source": "src/Network-Haskoin-Util-Network-Prodnet.html#scriptPrefix",
        "fct-type": "function",
        "title": "scriptPrefix"
      },
      "index": {
        "description": "Prefix for base58 script hash address",
        "hierarchy": "Network Haskoin Util Network",
        "module": "Network.Haskoin.Util.Network",
        "name": "scriptPrefix",
        "normalized": "",
        "package": "haskoin-util",
        "partial": "Prefix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-Network.html#v:secretPrefix",
      "description": {
        "fct-descr": "\u003cp\u003ePrefix for private key WIF format\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util.Network",
        "fct-package": "haskoin-util",
        "fct-signature": "Word8",
        "fct-source": "src/Network-Haskoin-Util-Network-Prodnet.html#secretPrefix",
        "fct-type": "function",
        "title": "secretPrefix"
      },
      "index": {
        "description": "Prefix for private key WIF format",
        "hierarchy": "Network Haskoin Util Network",
        "module": "Network.Haskoin.Util.Network",
        "name": "secretPrefix",
        "normalized": "",
        "package": "haskoin-util",
        "partial": "Prefix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-Network.html#v:walletFile",
      "description": {
        "fct-descr": "\u003cp\u003eWallet database file name\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util.Network",
        "fct-package": "haskoin-util",
        "fct-signature": "String",
        "fct-source": "src/Network-Haskoin-Util-Network-Prodnet.html#walletFile",
        "fct-type": "function",
        "title": "walletFile"
      },
      "index": {
        "description": "Wallet database file name",
        "hierarchy": "Network Haskoin Util Network",
        "module": "Network.Haskoin.Util.Network",
        "name": "walletFile",
        "normalized": "",
        "package": "haskoin-util",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines various utility functions used across the \n  Network.Haskoin modules.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Haskoin.Util",
        "fct-package": "haskoin-util",
        "fct-signature": "module",
        "fct-source": "src/Network-Haskoin-Util.html",
        "fct-type": "module",
        "title": "Util"
      },
      "index": {
        "description": "This module defines various utility functions used across the Network.Haskoin modules",
        "hierarchy": "Network Haskoin Util",
        "module": "Network.Haskoin.Util",
        "name": "Util",
        "normalized": "",
        "package": "haskoin-util",
        "partial": "Util",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:bsToHex",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a bytestring to a base16 (HEX) representation\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util",
        "fct-package": "haskoin-util",
        "fct-signature": "ByteString -\u003e String",
        "fct-source": "src/Network-Haskoin-Util.html#bsToHex",
        "fct-type": "function",
        "title": "bsToHex"
      },
      "index": {
        "description": "Encode bytestring to base16 HEX representation",
        "hierarchy": "Network Haskoin Util",
        "module": "Network.Haskoin.Util",
        "name": "bsToHex",
        "normalized": "ByteString-\u003eString",
        "package": "haskoin-util",
        "partial": "To Hex",
        "signature": "ByteString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:bsToInteger",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a big endian Integer from a bytestring\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util",
        "fct-package": "haskoin-util",
        "fct-signature": "ByteString -\u003e Integer",
        "fct-source": "src/Network-Haskoin-Util.html#bsToInteger",
        "fct-type": "function",
        "title": "bsToInteger"
      },
      "index": {
        "description": "Decode big endian Integer from bytestring",
        "hierarchy": "Network Haskoin Util",
        "module": "Network.Haskoin.Util",
        "name": "bsToInteger",
        "normalized": "ByteString-\u003eInteger",
        "package": "haskoin-util",
        "partial": "To Integer",
        "signature": "ByteString-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:bsToString",
      "description": {
        "fct-descr": "\u003cp\u003eTransform a strict bytestring to a string\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util",
        "fct-package": "haskoin-util",
        "fct-signature": "ByteString -\u003e String",
        "fct-source": "src/Network-Haskoin-Util.html#bsToString",
        "fct-type": "function",
        "title": "bsToString"
      },
      "index": {
        "description": "Transform strict bytestring to string",
        "hierarchy": "Network Haskoin Util",
        "module": "Network.Haskoin.Util",
        "name": "bsToString",
        "normalized": "ByteString-\u003eString",
        "package": "haskoin-util",
        "partial": "To String",
        "signature": "ByteString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:decode-39-",
      "description": {
        "fct-descr": "\u003cp\u003eStrict version of \u003ccode\u003eData.Binary.decode\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util",
        "fct-package": "haskoin-util",
        "fct-signature": "ByteString -\u003e a",
        "fct-source": "src/Network-Haskoin-Util.html#decode%27",
        "fct-type": "function",
        "title": "decode'"
      },
      "index": {
        "description": "Strict version of Data.Binary.decode",
        "hierarchy": "Network Haskoin Util",
        "module": "Network.Haskoin.Util",
        "name": "decode'",
        "normalized": "ByteString-\u003ea",
        "package": "haskoin-util",
        "partial": "",
        "signature": "ByteString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:decodeOrFail-39-",
      "description": {
        "fct-descr": "\u003cp\u003eStrict version of \u003ccode\u003eData.Binary.decodeOrFail\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util",
        "fct-package": "haskoin-util",
        "fct-signature": "ByteString -\u003e Either (ByteString, ByteOffset, String) (ByteString, ByteOffset, a)",
        "fct-source": "src/Network-Haskoin-Util.html#decodeOrFail%27",
        "fct-type": "function",
        "title": "decodeOrFail'"
      },
      "index": {
        "description": "Strict version of Data.Binary.decodeOrFail",
        "hierarchy": "Network Haskoin Util",
        "module": "Network.Haskoin.Util",
        "name": "decodeOrFail'",
        "normalized": "ByteString-\u003eEither(ByteString,ByteOffset,String)(ByteString,ByteOffset,a)",
        "package": "haskoin-util",
        "partial": "Or Fail'",
        "signature": "ByteString-\u003eEither(ByteString,ByteOffset,String)(ByteString,ByteOffset,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:decodeToEither",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a Data.Binary value into the Either monad. A Right value is returned\n with the result upon success. Otherwise a Left value with the error message\n is returned.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util",
        "fct-package": "haskoin-util",
        "fct-signature": "ByteString -\u003e Either String a",
        "fct-source": "src/Network-Haskoin-Util.html#decodeToEither",
        "fct-type": "function",
        "title": "decodeToEither"
      },
      "index": {
        "description": "Decode Data.Binary value into the Either monad Right value is returned with the result upon success Otherwise Left value with the error message is returned",
        "hierarchy": "Network Haskoin Util",
        "module": "Network.Haskoin.Util",
        "name": "decodeToEither",
        "normalized": "ByteString-\u003eEither String a",
        "package": "haskoin-util",
        "partial": "To Either",
        "signature": "ByteString-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:decodeToMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a Data.Binary value into the Maybe monad. A Just value is returned\n with the result upon success. Otherwise, Nothing is returned.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util",
        "fct-package": "haskoin-util",
        "fct-signature": "ByteString -\u003e Maybe a",
        "fct-source": "src/Network-Haskoin-Util.html#decodeToMaybe",
        "fct-type": "function",
        "title": "decodeToMaybe"
      },
      "index": {
        "description": "Decode Data.Binary value into the Maybe monad Just value is returned with the result upon success Otherwise Nothing is returned",
        "hierarchy": "Network Haskoin Util",
        "module": "Network.Haskoin.Util",
        "name": "decodeToMaybe",
        "normalized": "ByteString-\u003eMaybe a",
        "package": "haskoin-util",
        "partial": "To Maybe",
        "signature": "ByteString-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:eitherToMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms an Either value into a Maybe value. Right is mapped to Just\n and Left is mapped to Nothing. The value inside Left is lost.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util",
        "fct-package": "haskoin-util",
        "fct-signature": "Either a b -\u003e Maybe b",
        "fct-source": "src/Network-Haskoin-Util.html#eitherToMaybe",
        "fct-type": "function",
        "title": "eitherToMaybe"
      },
      "index": {
        "description": "Transforms an Either value into Maybe value Right is mapped to Just and Left is mapped to Nothing The value inside Left is lost",
        "hierarchy": "Network Haskoin Util",
        "module": "Network.Haskoin.Util",
        "name": "eitherToMaybe",
        "normalized": "Either a b-\u003eMaybe b",
        "package": "haskoin-util",
        "partial": "To Maybe",
        "signature": "Either a b-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:encode-39-",
      "description": {
        "fct-descr": "\u003cp\u003eStrict version of \u003ccode\u003eData.Binary.encode\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util",
        "fct-package": "haskoin-util",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Network-Haskoin-Util.html#encode%27",
        "fct-type": "function",
        "title": "encode'"
      },
      "index": {
        "description": "Strict version of Data.Binary.encode",
        "hierarchy": "Network Haskoin Util",
        "module": "Network.Haskoin.Util",
        "name": "encode'",
        "normalized": "a-\u003eByteString",
        "package": "haskoin-util",
        "partial": "",
        "signature": "a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:fromDecode",
      "description": {
        "fct-descr": "\u003cp\u003eTry to decode a Data.Binary value. If decoding succeeds, apply the function\n to the result. Otherwise, return the default value.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util",
        "fct-package": "haskoin-util",
        "fct-signature": "ByteString-\u003e b-\u003e (a -\u003e b)-\u003e b",
        "fct-type": "function",
        "title": "fromDecode"
      },
      "index": {
        "description": "Try to decode Data.Binary value If decoding succeeds apply the function to the result Otherwise return the default value",
        "hierarchy": "Network Haskoin Util",
        "module": "Network.Haskoin.Util",
        "name": "fromDecode",
        "normalized": "ByteString-\u003ea-\u003e(b-\u003ea)-\u003ea",
        "package": "haskoin-util",
        "partial": "Decode",
        "signature": "ByteString-\u003eb-\u003e(a-\u003eb)-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:fromLeft",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the Left value from an Either value. Fails if the value is Right\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util",
        "fct-package": "haskoin-util",
        "fct-signature": "Either a b -\u003e a",
        "fct-source": "src/Network-Haskoin-Util.html#fromLeft",
        "fct-type": "function",
        "title": "fromLeft"
      },
      "index": {
        "description": "Extract the Left value from an Either value Fails if the value is Right",
        "hierarchy": "Network Haskoin Util",
        "module": "Network.Haskoin.Util",
        "name": "fromLeft",
        "normalized": "Either a b-\u003ea",
        "package": "haskoin-util",
        "partial": "Left",
        "signature": "Either a b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:fromRight",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the Right value from an Either value. Fails if the value is Left\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util",
        "fct-package": "haskoin-util",
        "fct-signature": "Either a b -\u003e b",
        "fct-source": "src/Network-Haskoin-Util.html#fromRight",
        "fct-type": "function",
        "title": "fromRight"
      },
      "index": {
        "description": "Extract the Right value from an Either value Fails if the value is Left",
        "hierarchy": "Network Haskoin Util",
        "module": "Network.Haskoin.Util",
        "name": "fromRight",
        "normalized": "Either a b-\u003eb",
        "package": "haskoin-util",
        "partial": "Right",
        "signature": "Either a b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:fromRunGet",
      "description": {
        "fct-descr": "\u003cp\u003eTry to run a Data.Binary.Get monad. If decoding succeeds, apply a function\n to the result. Otherwise, return the default value.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util",
        "fct-package": "haskoin-util",
        "fct-signature": "Get a-\u003e ByteString-\u003e b-\u003e (a -\u003e b)-\u003e b",
        "fct-type": "function",
        "title": "fromRunGet"
      },
      "index": {
        "description": "Try to run Data.Binary.Get monad If decoding succeeds apply function to the result Otherwise return the default value",
        "hierarchy": "Network Haskoin Util",
        "module": "Network.Haskoin.Util",
        "name": "fromRunGet",
        "normalized": "Get a-\u003eByteString-\u003eb-\u003e(a-\u003eb)-\u003eb",
        "package": "haskoin-util",
        "partial": "Run Get",
        "signature": "Get a-\u003eByteString-\u003eb-\u003e(a-\u003eb)-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:hexToBS",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a base16 (HEX) string from a bytestring. This function can fail\n if the string contains invalid HEX characters\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util",
        "fct-package": "haskoin-util",
        "fct-signature": "String -\u003e Maybe ByteString",
        "fct-source": "src/Network-Haskoin-Util.html#hexToBS",
        "fct-type": "function",
        "title": "hexToBS"
      },
      "index": {
        "description": "Decode base16 HEX string from bytestring This function can fail if the string contains invalid HEX characters",
        "hierarchy": "Network Haskoin Util",
        "module": "Network.Haskoin.Util",
        "name": "hexToBS",
        "normalized": "String-\u003eMaybe ByteString",
        "package": "haskoin-util",
        "partial": "To BS",
        "signature": "String-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:integerToBS",
      "description": {
        "fct-descr": "\u003cp\u003eEncode an Integer to a bytestring as big endian\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util",
        "fct-package": "haskoin-util",
        "fct-signature": "Integer -\u003e ByteString",
        "fct-source": "src/Network-Haskoin-Util.html#integerToBS",
        "fct-type": "function",
        "title": "integerToBS"
      },
      "index": {
        "description": "Encode an Integer to bytestring as big endian",
        "hierarchy": "Network Haskoin Util",
        "module": "Network.Haskoin.Util",
        "name": "integerToBS",
        "normalized": "Integer-\u003eByteString",
        "package": "haskoin-util",
        "partial": "To BS",
        "signature": "Integer-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:isLeft",
      "description": {
        "fct-descr": "\u003cp\u003eReturns True if the Either value is Left\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util",
        "fct-package": "haskoin-util",
        "fct-signature": "Either a b -\u003e Bool",
        "fct-source": "src/Network-Haskoin-Util.html#isLeft",
        "fct-type": "function",
        "title": "isLeft"
      },
      "index": {
        "description": "Returns True if the Either value is Left",
        "hierarchy": "Network Haskoin Util",
        "module": "Network.Haskoin.Util",
        "name": "isLeft",
        "normalized": "Either a b-\u003eBool",
        "package": "haskoin-util",
        "partial": "Left",
        "signature": "Either a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:isRight",
      "description": {
        "fct-descr": "\u003cp\u003eReturns True if the Either value is Right\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util",
        "fct-package": "haskoin-util",
        "fct-signature": "Either a b -\u003e Bool",
        "fct-source": "src/Network-Haskoin-Util.html#isRight",
        "fct-type": "function",
        "title": "isRight"
      },
      "index": {
        "description": "Returns True if the Either value is Right",
        "hierarchy": "Network Haskoin Util",
        "module": "Network.Haskoin.Util",
        "name": "isRight",
        "normalized": "Either a b-\u003eBool",
        "package": "haskoin-util",
        "partial": "Right",
        "signature": "Either a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:isolate",
      "description": {
        "fct-descr": "\u003cp\u003eIsolate a Data.Binary.Get monad for the next \u003ccode\u003eInt\u003c/code\u003e bytes. Only the next\n \u003ccode\u003eInt\u003c/code\u003e bytes of the input bytestring will be available for the Get monad to\n consume. This function will fail if the Get monad fails or some of the input\n is not consumed.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util",
        "fct-package": "haskoin-util",
        "fct-signature": "Int -\u003e Get a -\u003e Get a",
        "fct-source": "src/Network-Haskoin-Util.html#isolate",
        "fct-type": "function",
        "title": "isolate"
      },
      "index": {
        "description": "Isolate Data.Binary.Get monad for the next Int bytes Only the next Int bytes of the input bytestring will be available for the Get monad to consume This function will fail if the Get monad fails or some of the input is not consumed",
        "hierarchy": "Network Haskoin Util",
        "module": "Network.Haskoin.Util",
        "name": "isolate",
        "normalized": "Int-\u003eGet a-\u003eGet a",
        "package": "haskoin-util",
        "partial": "",
        "signature": "Int-\u003eGet a-\u003eGet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:matchTemplate",
      "description": {
        "fct-descr": "\u003cp\u003eUse the list [b] as a template and try to match the elements of [a]\n against it. For each element of [b] return the (first) matching element of\n [a], or Nothing. Output list has same size as [b] and contains results in\n same order.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util",
        "fct-package": "haskoin-util",
        "fct-signature": "[a]-\u003e [b]-\u003e (a -\u003e b -\u003e Bool)-\u003e [Maybe a]",
        "fct-type": "function",
        "title": "matchTemplate"
      },
      "index": {
        "description": "Use the list as template and try to match the elements of against it For each element of return the first matching element of or Nothing Output list has same size as and contains results in same order",
        "hierarchy": "Network Haskoin Util",
        "module": "Network.Haskoin.Util",
        "name": "matchTemplate",
        "normalized": "[a]-\u003e[b]-\u003e(a-\u003eb-\u003eBool)-\u003e[Maybe a]",
        "package": "haskoin-util",
        "partial": "Template",
        "signature": "[a]-\u003e[b]-\u003e(a-\u003eb-\u003eBool)-\u003e[Maybe a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:maybeToEither",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms a Maybe value into an Either value. Just is mapped to Right and\n Nothing is mapped to Left. You also pass in an error value in case Left is\n returned.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util",
        "fct-package": "haskoin-util",
        "fct-signature": "b -\u003e Maybe a -\u003e Either b a",
        "fct-source": "src/Network-Haskoin-Util.html#maybeToEither",
        "fct-type": "function",
        "title": "maybeToEither"
      },
      "index": {
        "description": "Transforms Maybe value into an Either value Just is mapped to Right and Nothing is mapped to Left You also pass in an error value in case Left is returned",
        "hierarchy": "Network Haskoin Util",
        "module": "Network.Haskoin.Util",
        "name": "maybeToEither",
        "normalized": "a-\u003eMaybe b-\u003eEither a b",
        "package": "haskoin-util",
        "partial": "To Either",
        "signature": "b-\u003eMaybe a-\u003eEither b a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:runGet-39-",
      "description": {
        "fct-descr": "\u003cp\u003eStrict version of \u003ccode\u003eData.Binary.runGet\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util",
        "fct-package": "haskoin-util",
        "fct-signature": "Get a -\u003e ByteString -\u003e a",
        "fct-source": "src/Network-Haskoin-Util.html#runGet%27",
        "fct-type": "function",
        "title": "runGet'"
      },
      "index": {
        "description": "Strict version of Data.Binary.runGet",
        "hierarchy": "Network Haskoin Util",
        "module": "Network.Haskoin.Util",
        "name": "runGet'",
        "normalized": "Get a-\u003eByteString-\u003ea",
        "package": "haskoin-util",
        "partial": "Get'",
        "signature": "Get a-\u003eByteString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:runGetOrFail-39-",
      "description": {
        "fct-descr": "\u003cp\u003eStrict version of \u003ccode\u003eData.Binary.runGetOrFail\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util",
        "fct-package": "haskoin-util",
        "fct-signature": "Get a -\u003e ByteString -\u003e Either (ByteString, ByteOffset, String) (ByteString, ByteOffset, a)",
        "fct-source": "src/Network-Haskoin-Util.html#runGetOrFail%27",
        "fct-type": "function",
        "title": "runGetOrFail'"
      },
      "index": {
        "description": "Strict version of Data.Binary.runGetOrFail",
        "hierarchy": "Network Haskoin Util",
        "module": "Network.Haskoin.Util",
        "name": "runGetOrFail'",
        "normalized": "Get a-\u003eByteString-\u003eEither(ByteString,ByteOffset,String)(ByteString,ByteOffset,a)",
        "package": "haskoin-util",
        "partial": "Get Or Fail'",
        "signature": "Get a-\u003eByteString-\u003eEither(ByteString,ByteOffset,String)(ByteString,ByteOffset,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:runPut-39-",
      "description": {
        "fct-descr": "\u003cp\u003eStrict version of \u003ccode\u003eData.Binary.runPut\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util",
        "fct-package": "haskoin-util",
        "fct-signature": "Put -\u003e ByteString",
        "fct-source": "src/Network-Haskoin-Util.html#runPut%27",
        "fct-type": "function",
        "title": "runPut'"
      },
      "index": {
        "description": "Strict version of Data.Binary.runPut",
        "hierarchy": "Network Haskoin Util",
        "module": "Network.Haskoin.Util",
        "name": "runPut'",
        "normalized": "Put-\u003eByteString",
        "package": "haskoin-util",
        "partial": "Put'",
        "signature": "Put-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:stringToBS",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms a string into a strict bytestring\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util",
        "fct-package": "haskoin-util",
        "fct-signature": "String -\u003e ByteString",
        "fct-source": "src/Network-Haskoin-Util.html#stringToBS",
        "fct-type": "function",
        "title": "stringToBS"
      },
      "index": {
        "description": "Transforms string into strict bytestring",
        "hierarchy": "Network Haskoin Util",
        "module": "Network.Haskoin.Util",
        "name": "stringToBS",
        "normalized": "String-\u003eByteString",
        "package": "haskoin-util",
        "partial": "To BS",
        "signature": "String-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:toLazyBS",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms a strict bytestring into a lazy bytestring\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util",
        "fct-package": "haskoin-util",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Network-Haskoin-Util.html#toLazyBS",
        "fct-type": "function",
        "title": "toLazyBS"
      },
      "index": {
        "description": "Transforms strict bytestring into lazy bytestring",
        "hierarchy": "Network Haskoin Util",
        "module": "Network.Haskoin.Util",
        "name": "toLazyBS",
        "normalized": "ByteString-\u003eByteString",
        "package": "haskoin-util",
        "partial": "Lazy BS",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:toStrictBS",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms a lazy bytestring into a strict bytestring\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util",
        "fct-package": "haskoin-util",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Network-Haskoin-Util.html#toStrictBS",
        "fct-type": "function",
        "title": "toStrictBS"
      },
      "index": {
        "description": "Transforms lazy bytestring into strict bytestring",
        "hierarchy": "Network Haskoin Util",
        "module": "Network.Haskoin.Util",
        "name": "toStrictBS",
        "normalized": "ByteString-\u003eByteString",
        "package": "haskoin-util",
        "partial": "Strict BS",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:updateIndex",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a function to only one element of a list defined by it's index.\n If the index is out of the bounds of the list, the original list is returned\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Util",
        "fct-package": "haskoin-util",
        "fct-signature": "Int-\u003e [a]-\u003e (a -\u003e a)-\u003e [a]",
        "fct-type": "function",
        "title": "updateIndex"
      },
      "index": {
        "description": "Applies function to only one element of list defined by it index If the index is out of the bounds of the list the original list is returned",
        "hierarchy": "Network Haskoin Util",
        "module": "Network.Haskoin.Util",
        "name": "updateIndex",
        "normalized": "Int-\u003e[a]-\u003e(a-\u003ea)-\u003e[a]",
        "package": "haskoin-util",
        "partial": "Index",
        "signature": "Int-\u003e[a]-\u003e(a-\u003ea)-\u003e[a]"
      }
    }
  }
]