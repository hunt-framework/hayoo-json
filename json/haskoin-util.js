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
        "word": "haskoin-util"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQuickCheck Arbitrary instances for various utility data types\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Haskoin.Util.Arbitrary",
          "name": "Arbitrary",
          "package": "haskoin-util",
          "source": "src/Network-Haskoin-Util-Arbitrary.html",
          "type": "module"
        },
        "index": {
          "description": "QuickCheck Arbitrary instances for various utility data types",
          "hierarchy": "Network Haskoin Util Arbitrary",
          "module": "Network.Haskoin.Util.Arbitrary",
          "name": "Arbitrary",
          "package": "haskoin-util",
          "partial": "Arbitrary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-Arbitrary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate non-empty strict ByteStrings\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util.Arbitrary",
          "name": "nonEmptyBS",
          "package": "haskoin-util",
          "signature": "Gen ByteString",
          "source": "src/Network-Haskoin-Util-Arbitrary.html#nonEmptyBS",
          "type": "function"
        },
        "index": {
          "description": "Generate non-empty strict ByteStrings",
          "hierarchy": "Network Haskoin Util Arbitrary",
          "module": "Network.Haskoin.Util.Arbitrary",
          "name": "nonEmptyBS",
          "package": "haskoin-util",
          "partial": "Empty BS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-Arbitrary.html#v:nonEmptyBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Build type, and associated operations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "BuildMonad",
          "package": "haskoin-util",
          "source": "src/Network-Haskoin-Util-BuildMonad.html",
          "type": "module"
        },
        "index": {
          "description": "The Build type and associated operations",
          "hierarchy": "Network Haskoin Util BuildMonad",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "BuildMonad",
          "package": "haskoin-util",
          "partial": "Build Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Build monad represents computations that can be in one of three states:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Complete\n\u003c/li\u003e\u003cli\u003e Partial\n\u003c/li\u003e\u003cli\u003e Broken\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIt extends the Either monad with an additional Partial value to describe a\n  valid computation flagged with a Partial context. The Build monad is useful\n  when you describe computations where parts of the computation are either\n  complete, partially complete or broken. Combining only Complete computations\n  will produce a Complete result. However, if one of the computations is\n  Partial, the whole computation will be Partial as well. And if some\n  computation is Broken, the whole computation will be broken as well.\n\u003c/p\u003e\u003cp\u003eThe Build monad is used by Haskoin to describe the state of the transaction\n  signing computation. To sign a transaction, all input scripts need to be \n  signed. The whole transaction will be completely signed only if all the\n  input scripts are completely signed. If any of the inputs is partially signed,\n  then the whole transaction will be partially signed as well. And the whole\n  transaction is broken if one of the inputs failed to parse or is broken.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "Build",
          "package": "haskoin-util",
          "source": "src/Network-Haskoin-Util-BuildMonad.html#Build",
          "type": "data"
        },
        "index": {
          "description": "The Build monad represents computations that can be in one of three states Complete Partial Broken It extends the Either monad with an additional Partial value to describe valid computation flagged with Partial context The Build monad is useful when you describe computations where parts of the computation are either complete partially complete or broken Combining only Complete computations will produce Complete result However if one of the computations is Partial the whole computation will be Partial as well And if some computation is Broken the whole computation will be broken as well The Build monad is used by Haskoin to describe the state of the transaction signing computation To sign transaction all input scripts need to be signed The whole transaction will be completely signed only if all the input scripts are completely signed If any of the inputs is partially signed then the whole transaction will be partially signed as well And the whole transaction is broken if one of the inputs failed to parse or is broken",
          "hierarchy": "Network Haskoin Util BuildMonad",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "Build",
          "package": "haskoin-util",
          "partial": "Build",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#t:Build"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuildT transformer monad\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "BuildT",
          "package": "haskoin-util",
          "source": "src/Network-Haskoin-Util-BuildMonad.html#BuildT",
          "type": "newtype"
        },
        "index": {
          "description": "BuildT transformer monad",
          "hierarchy": "Network Haskoin Util BuildMonad",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "BuildT",
          "package": "haskoin-util",
          "partial": "Build",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#t:BuildT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes a broken computation\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "Broken",
          "package": "haskoin-util",
          "signature": "Broken",
          "source": "src/Network-Haskoin-Util-BuildMonad.html#Build",
          "type": "function"
        },
        "index": {
          "description": "Describes broken computation",
          "hierarchy": "Network Haskoin Util BuildMonad",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "Broken",
          "package": "haskoin-util",
          "partial": "Broken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#v:Broken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "BuildT",
          "package": "haskoin-util",
          "signature": "BuildT",
          "source": "src/Network-Haskoin-Util-BuildMonad.html#BuildT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Util BuildMonad",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "BuildT",
          "package": "haskoin-util",
          "partial": "Build",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#v:BuildT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes a successful complete computation\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "Complete",
          "package": "haskoin-util",
          "signature": "Complete",
          "source": "src/Network-Haskoin-Util-BuildMonad.html#Build",
          "type": "function"
        },
        "index": {
          "description": "Describes successful complete computation",
          "hierarchy": "Network Haskoin Util BuildMonad",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "Complete",
          "package": "haskoin-util",
          "partial": "Complete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#v:Complete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes a successful but partial computation\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "Partial",
          "package": "haskoin-util",
          "signature": "Partial",
          "source": "src/Network-Haskoin-Util-BuildMonad.html#Build",
          "type": "function"
        },
        "index": {
          "description": "Describes successful but partial computation",
          "hierarchy": "Network Haskoin Util BuildMonad",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "Partial",
          "package": "haskoin-util",
          "partial": "Partial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#v:Partial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms a Build value into an Either String value. Complete and Partial\n are mapped to Right and Broken is mapped to Left.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "buildToEither",
          "package": "haskoin-util",
          "signature": "Build a -\u003e Either String a",
          "source": "src/Network-Haskoin-Util-BuildMonad.html#buildToEither",
          "type": "function"
        },
        "index": {
          "description": "Transforms Build value into an Either String value Complete and Partial are mapped to Right and Broken is mapped to Left",
          "hierarchy": "Network Haskoin Util BuildMonad",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "buildToEither",
          "normalized": "Build a-\u003eEither String a",
          "package": "haskoin-util",
          "partial": "To Either",
          "signature": "Build a-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#v:buildToEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms an Either String value into a Build value. Right is mapped to\n Complete and Left is mapped to Broken\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "eitherToBuild",
          "package": "haskoin-util",
          "signature": "Either String a -\u003e Build a",
          "source": "src/Network-Haskoin-Util-BuildMonad.html#eitherToBuild",
          "type": "function"
        },
        "index": {
          "description": "Transforms an Either String value into Build value Right is mapped to Complete and Left is mapped to Broken",
          "hierarchy": "Network Haskoin Util BuildMonad",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "eitherToBuild",
          "normalized": "Either String a-\u003eBuild a",
          "package": "haskoin-util",
          "partial": "To Build",
          "signature": "Either String a-\u003eBuild a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#v:eitherToBuild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinds a Partial value to the computation when the predicate is False.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "guardPartial",
          "package": "haskoin-util",
          "signature": "Bool -\u003e Build ()",
          "source": "src/Network-Haskoin-Util-BuildMonad.html#guardPartial",
          "type": "function"
        },
        "index": {
          "description": "Binds Partial value to the computation when the predicate is False",
          "hierarchy": "Network Haskoin Util BuildMonad",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "guardPartial",
          "normalized": "Bool-\u003eBuild()",
          "package": "haskoin-util",
          "partial": "Partial",
          "signature": "Bool-\u003eBuild()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#v:guardPartial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if the Build value is Broken\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "isBroken",
          "package": "haskoin-util",
          "signature": "Build a -\u003e Bool",
          "source": "src/Network-Haskoin-Util-BuildMonad.html#isBroken",
          "type": "function"
        },
        "index": {
          "description": "Return True if the Build value is Broken",
          "hierarchy": "Network Haskoin Util BuildMonad",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "isBroken",
          "normalized": "Build a-\u003eBool",
          "package": "haskoin-util",
          "partial": "Broken",
          "signature": "Build a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#v:isBroken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the Build value is Complete\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "isComplete",
          "package": "haskoin-util",
          "signature": "Build a -\u003e Bool",
          "source": "src/Network-Haskoin-Util-BuildMonad.html#isComplete",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the Build value is Complete",
          "hierarchy": "Network Haskoin Util BuildMonad",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "isComplete",
          "normalized": "Build a-\u003eBool",
          "package": "haskoin-util",
          "partial": "Complete",
          "signature": "Build a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#v:isComplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the Build value is Partial\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "isPartial",
          "package": "haskoin-util",
          "signature": "Build a -\u003e Bool",
          "source": "src/Network-Haskoin-Util-BuildMonad.html#isPartial",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the Build value is Partial",
          "hierarchy": "Network Haskoin Util BuildMonad",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "isPartial",
          "normalized": "Build a-\u003eBool",
          "package": "haskoin-util",
          "partial": "Partial",
          "signature": "Build a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#v:isPartial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a Build computation into the BuildT monad\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "liftBuild",
          "package": "haskoin-util",
          "signature": "Build a -\u003e BuildT m a",
          "source": "src/Network-Haskoin-Util-BuildMonad.html#liftBuild",
          "type": "function"
        },
        "index": {
          "description": "Lift Build computation into the BuildT monad",
          "hierarchy": "Network Haskoin Util BuildMonad",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "liftBuild",
          "normalized": "Build a-\u003eBuildT b a",
          "package": "haskoin-util",
          "partial": "Build",
          "signature": "Build a-\u003eBuildT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#v:liftBuild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "runBroken",
          "package": "haskoin-util",
          "signature": "String",
          "source": "src/Network-Haskoin-Util-BuildMonad.html#Build",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Util BuildMonad",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "runBroken",
          "package": "haskoin-util",
          "partial": "Broken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#v:runBroken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "runBuild",
          "package": "haskoin-util",
          "signature": "a",
          "source": "src/Network-Haskoin-Util-BuildMonad.html#Build",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Util BuildMonad",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "runBuild",
          "package": "haskoin-util",
          "partial": "Build",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#v:runBuild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "runBuildT",
          "package": "haskoin-util",
          "signature": "m (Build a)",
          "source": "src/Network-Haskoin-Util-BuildMonad.html#BuildT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Util BuildMonad",
          "module": "Network.Haskoin.Util.BuildMonad",
          "name": "runBuildT",
          "package": "haskoin-util",
          "partial": "Build",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-BuildMonad.html#v:runBuildT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeclaration of constant values that depend on the network type\n  (for example: prodnet or testnet). The values exported from this modules\n  are imported from a network-specific sub-module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Haskoin.Util.Network",
          "name": "Network",
          "package": "haskoin-util",
          "source": "src/Network-Haskoin-Util-Network.html",
          "type": "module"
        },
        "index": {
          "description": "Declaration of constant values that depend on the network type for example prodnet or testnet The values exported from this modules are imported from network-specific sub-module",
          "hierarchy": "Network Haskoin Util Network",
          "module": "Network.Haskoin.Util.Network",
          "name": "Network",
          "package": "haskoin-util",
          "partial": "Network",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-Network.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix for base58 PubKey hash address\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util.Network",
          "name": "addrPrefix",
          "package": "haskoin-util",
          "signature": "Word8",
          "source": "src/Network-Haskoin-Util-Network-Prodnet.html#addrPrefix",
          "type": "function"
        },
        "index": {
          "description": "Prefix for base58 PubKey hash address",
          "hierarchy": "Network Haskoin Util Network",
          "module": "Network.Haskoin.Util.Network",
          "name": "addrPrefix",
          "package": "haskoin-util",
          "partial": "Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-Network.html#v:addrPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix for extended public keys (BIP32)\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util.Network",
          "name": "extPubKeyPrefix",
          "package": "haskoin-util",
          "signature": "Word32",
          "source": "src/Network-Haskoin-Util-Network-Prodnet.html#extPubKeyPrefix",
          "type": "function"
        },
        "index": {
          "description": "Prefix for extended public keys BIP32",
          "hierarchy": "Network Haskoin Util Network",
          "module": "Network.Haskoin.Util.Network",
          "name": "extPubKeyPrefix",
          "package": "haskoin-util",
          "partial": "Pub Key Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-Network.html#v:extPubKeyPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix for extended private keys (BIP32)\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util.Network",
          "name": "extSecretPrefix",
          "package": "haskoin-util",
          "signature": "Word32",
          "source": "src/Network-Haskoin-Util-Network-Prodnet.html#extSecretPrefix",
          "type": "function"
        },
        "index": {
          "description": "Prefix for extended private keys BIP32",
          "hierarchy": "Network Haskoin Util Network",
          "module": "Network.Haskoin.Util.Network",
          "name": "extSecretPrefix",
          "package": "haskoin-util",
          "partial": "Secret Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-Network.html#v:extSecretPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix for base58 script hash address\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util.Network",
          "name": "scriptPrefix",
          "package": "haskoin-util",
          "signature": "Word8",
          "source": "src/Network-Haskoin-Util-Network-Prodnet.html#scriptPrefix",
          "type": "function"
        },
        "index": {
          "description": "Prefix for base58 script hash address",
          "hierarchy": "Network Haskoin Util Network",
          "module": "Network.Haskoin.Util.Network",
          "name": "scriptPrefix",
          "package": "haskoin-util",
          "partial": "Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-Network.html#v:scriptPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix for private key WIF format\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util.Network",
          "name": "secretPrefix",
          "package": "haskoin-util",
          "signature": "Word8",
          "source": "src/Network-Haskoin-Util-Network-Prodnet.html#secretPrefix",
          "type": "function"
        },
        "index": {
          "description": "Prefix for private key WIF format",
          "hierarchy": "Network Haskoin Util Network",
          "module": "Network.Haskoin.Util.Network",
          "name": "secretPrefix",
          "package": "haskoin-util",
          "partial": "Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-Network.html#v:secretPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWallet database file name\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util.Network",
          "name": "walletFile",
          "package": "haskoin-util",
          "signature": "String",
          "source": "src/Network-Haskoin-Util-Network-Prodnet.html#walletFile",
          "type": "function"
        },
        "index": {
          "description": "Wallet database file name",
          "hierarchy": "Network Haskoin Util Network",
          "module": "Network.Haskoin.Util.Network",
          "name": "walletFile",
          "package": "haskoin-util",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util-Network.html#v:walletFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines various utility functions used across the \n  Network.Haskoin modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Haskoin.Util",
          "name": "Util",
          "package": "haskoin-util",
          "source": "src/Network-Haskoin-Util.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines various utility functions used across the Network.Haskoin modules",
          "hierarchy": "Network Haskoin Util",
          "module": "Network.Haskoin.Util",
          "name": "Util",
          "package": "haskoin-util",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a bytestring to a base16 (HEX) representation\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util",
          "name": "bsToHex",
          "package": "haskoin-util",
          "signature": "ByteString -\u003e String",
          "source": "src/Network-Haskoin-Util.html#bsToHex",
          "type": "function"
        },
        "index": {
          "description": "Encode bytestring to base16 HEX representation",
          "hierarchy": "Network Haskoin Util",
          "module": "Network.Haskoin.Util",
          "name": "bsToHex",
          "normalized": "ByteString-\u003eString",
          "package": "haskoin-util",
          "partial": "To Hex",
          "signature": "ByteString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:bsToHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a big endian Integer from a bytestring\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util",
          "name": "bsToInteger",
          "package": "haskoin-util",
          "signature": "ByteString -\u003e Integer",
          "source": "src/Network-Haskoin-Util.html#bsToInteger",
          "type": "function"
        },
        "index": {
          "description": "Decode big endian Integer from bytestring",
          "hierarchy": "Network Haskoin Util",
          "module": "Network.Haskoin.Util",
          "name": "bsToInteger",
          "normalized": "ByteString-\u003eInteger",
          "package": "haskoin-util",
          "partial": "To Integer",
          "signature": "ByteString-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:bsToInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a strict bytestring to a string\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util",
          "name": "bsToString",
          "package": "haskoin-util",
          "signature": "ByteString -\u003e String",
          "source": "src/Network-Haskoin-Util.html#bsToString",
          "type": "function"
        },
        "index": {
          "description": "Transform strict bytestring to string",
          "hierarchy": "Network Haskoin Util",
          "module": "Network.Haskoin.Util",
          "name": "bsToString",
          "normalized": "ByteString-\u003eString",
          "package": "haskoin-util",
          "partial": "To String",
          "signature": "ByteString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:bsToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict version of \u003ccode\u003eData.Binary.decode\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util",
          "name": "decode'",
          "package": "haskoin-util",
          "signature": "ByteString -\u003e a",
          "source": "src/Network-Haskoin-Util.html#decode%27",
          "type": "function"
        },
        "index": {
          "description": "Strict version of Data.Binary.decode",
          "hierarchy": "Network Haskoin Util",
          "module": "Network.Haskoin.Util",
          "name": "decode'",
          "normalized": "ByteString-\u003ea",
          "package": "haskoin-util",
          "signature": "ByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:decode-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict version of \u003ccode\u003eData.Binary.decodeOrFail\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util",
          "name": "decodeOrFail'",
          "package": "haskoin-util",
          "signature": "ByteString -\u003e Either (ByteString, ByteOffset, String) (ByteString, ByteOffset, a)",
          "source": "src/Network-Haskoin-Util.html#decodeOrFail%27",
          "type": "function"
        },
        "index": {
          "description": "Strict version of Data.Binary.decodeOrFail",
          "hierarchy": "Network Haskoin Util",
          "module": "Network.Haskoin.Util",
          "name": "decodeOrFail'",
          "normalized": "ByteString-\u003eEither(ByteString,ByteOffset,String)(ByteString,ByteOffset,a)",
          "package": "haskoin-util",
          "partial": "Or Fail'",
          "signature": "ByteString-\u003eEither(ByteString,ByteOffset,String)(ByteString,ByteOffset,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:decodeOrFail-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a Data.Binary value into the Either monad. A Right value is returned\n with the result upon success. Otherwise a Left value with the error message\n is returned.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util",
          "name": "decodeToEither",
          "package": "haskoin-util",
          "signature": "ByteString -\u003e Either String a",
          "source": "src/Network-Haskoin-Util.html#decodeToEither",
          "type": "function"
        },
        "index": {
          "description": "Decode Data.Binary value into the Either monad Right value is returned with the result upon success Otherwise Left value with the error message is returned",
          "hierarchy": "Network Haskoin Util",
          "module": "Network.Haskoin.Util",
          "name": "decodeToEither",
          "normalized": "ByteString-\u003eEither String a",
          "package": "haskoin-util",
          "partial": "To Either",
          "signature": "ByteString-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:decodeToEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a Data.Binary value into the Maybe monad. A Just value is returned\n with the result upon success. Otherwise, Nothing is returned.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util",
          "name": "decodeToMaybe",
          "package": "haskoin-util",
          "signature": "ByteString -\u003e Maybe a",
          "source": "src/Network-Haskoin-Util.html#decodeToMaybe",
          "type": "function"
        },
        "index": {
          "description": "Decode Data.Binary value into the Maybe monad Just value is returned with the result upon success Otherwise Nothing is returned",
          "hierarchy": "Network Haskoin Util",
          "module": "Network.Haskoin.Util",
          "name": "decodeToMaybe",
          "normalized": "ByteString-\u003eMaybe a",
          "package": "haskoin-util",
          "partial": "To Maybe",
          "signature": "ByteString-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:decodeToMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms an Either value into a Maybe value. Right is mapped to Just\n and Left is mapped to Nothing. The value inside Left is lost.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util",
          "name": "eitherToMaybe",
          "package": "haskoin-util",
          "signature": "Either a b -\u003e Maybe b",
          "source": "src/Network-Haskoin-Util.html#eitherToMaybe",
          "type": "function"
        },
        "index": {
          "description": "Transforms an Either value into Maybe value Right is mapped to Just and Left is mapped to Nothing The value inside Left is lost",
          "hierarchy": "Network Haskoin Util",
          "module": "Network.Haskoin.Util",
          "name": "eitherToMaybe",
          "normalized": "Either a b-\u003eMaybe b",
          "package": "haskoin-util",
          "partial": "To Maybe",
          "signature": "Either a b-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:eitherToMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict version of \u003ccode\u003eData.Binary.encode\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util",
          "name": "encode'",
          "package": "haskoin-util",
          "signature": "a -\u003e ByteString",
          "source": "src/Network-Haskoin-Util.html#encode%27",
          "type": "function"
        },
        "index": {
          "description": "Strict version of Data.Binary.encode",
          "hierarchy": "Network Haskoin Util",
          "module": "Network.Haskoin.Util",
          "name": "encode'",
          "normalized": "a-\u003eByteString",
          "package": "haskoin-util",
          "signature": "a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:encode-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to decode a Data.Binary value. If decoding succeeds, apply the function\n to the result. Otherwise, return the default value.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util",
          "name": "fromDecode",
          "package": "haskoin-util",
          "signature": "ByteString-\u003e b-\u003e (a -\u003e b)-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Try to decode Data.Binary value If decoding succeeds apply the function to the result Otherwise return the default value",
          "hierarchy": "Network Haskoin Util",
          "module": "Network.Haskoin.Util",
          "name": "fromDecode",
          "normalized": "ByteString-\u003ea-\u003e(b-\u003ea)-\u003ea",
          "package": "haskoin-util",
          "partial": "Decode",
          "signature": "ByteString-\u003eb-\u003e(a-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:fromDecode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the Left value from an Either value. Fails if the value is Right\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util",
          "name": "fromLeft",
          "package": "haskoin-util",
          "signature": "Either a b -\u003e a",
          "source": "src/Network-Haskoin-Util.html#fromLeft",
          "type": "function"
        },
        "index": {
          "description": "Extract the Left value from an Either value Fails if the value is Right",
          "hierarchy": "Network Haskoin Util",
          "module": "Network.Haskoin.Util",
          "name": "fromLeft",
          "normalized": "Either a b-\u003ea",
          "package": "haskoin-util",
          "partial": "Left",
          "signature": "Either a b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:fromLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the Right value from an Either value. Fails if the value is Left\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util",
          "name": "fromRight",
          "package": "haskoin-util",
          "signature": "Either a b -\u003e b",
          "source": "src/Network-Haskoin-Util.html#fromRight",
          "type": "function"
        },
        "index": {
          "description": "Extract the Right value from an Either value Fails if the value is Left",
          "hierarchy": "Network Haskoin Util",
          "module": "Network.Haskoin.Util",
          "name": "fromRight",
          "normalized": "Either a b-\u003eb",
          "package": "haskoin-util",
          "partial": "Right",
          "signature": "Either a b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:fromRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to run a Data.Binary.Get monad. If decoding succeeds, apply a function\n to the result. Otherwise, return the default value.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util",
          "name": "fromRunGet",
          "package": "haskoin-util",
          "signature": "Get a-\u003e ByteString-\u003e b-\u003e (a -\u003e b)-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Try to run Data.Binary.Get monad If decoding succeeds apply function to the result Otherwise return the default value",
          "hierarchy": "Network Haskoin Util",
          "module": "Network.Haskoin.Util",
          "name": "fromRunGet",
          "normalized": "Get a-\u003eByteString-\u003eb-\u003e(a-\u003eb)-\u003eb",
          "package": "haskoin-util",
          "partial": "Run Get",
          "signature": "Get a-\u003eByteString-\u003eb-\u003e(a-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:fromRunGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a base16 (HEX) string from a bytestring. This function can fail\n if the string contains invalid HEX characters\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util",
          "name": "hexToBS",
          "package": "haskoin-util",
          "signature": "String -\u003e Maybe ByteString",
          "source": "src/Network-Haskoin-Util.html#hexToBS",
          "type": "function"
        },
        "index": {
          "description": "Decode base16 HEX string from bytestring This function can fail if the string contains invalid HEX characters",
          "hierarchy": "Network Haskoin Util",
          "module": "Network.Haskoin.Util",
          "name": "hexToBS",
          "normalized": "String-\u003eMaybe ByteString",
          "package": "haskoin-util",
          "partial": "To BS",
          "signature": "String-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:hexToBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode an Integer to a bytestring as big endian\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util",
          "name": "integerToBS",
          "package": "haskoin-util",
          "signature": "Integer -\u003e ByteString",
          "source": "src/Network-Haskoin-Util.html#integerToBS",
          "type": "function"
        },
        "index": {
          "description": "Encode an Integer to bytestring as big endian",
          "hierarchy": "Network Haskoin Util",
          "module": "Network.Haskoin.Util",
          "name": "integerToBS",
          "normalized": "Integer-\u003eByteString",
          "package": "haskoin-util",
          "partial": "To BS",
          "signature": "Integer-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:integerToBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the Either value is Left\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util",
          "name": "isLeft",
          "package": "haskoin-util",
          "signature": "Either a b -\u003e Bool",
          "source": "src/Network-Haskoin-Util.html#isLeft",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the Either value is Left",
          "hierarchy": "Network Haskoin Util",
          "module": "Network.Haskoin.Util",
          "name": "isLeft",
          "normalized": "Either a b-\u003eBool",
          "package": "haskoin-util",
          "partial": "Left",
          "signature": "Either a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:isLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the Either value is Right\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util",
          "name": "isRight",
          "package": "haskoin-util",
          "signature": "Either a b -\u003e Bool",
          "source": "src/Network-Haskoin-Util.html#isRight",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the Either value is Right",
          "hierarchy": "Network Haskoin Util",
          "module": "Network.Haskoin.Util",
          "name": "isRight",
          "normalized": "Either a b-\u003eBool",
          "package": "haskoin-util",
          "partial": "Right",
          "signature": "Either a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:isRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIsolate a Data.Binary.Get monad for the next \u003ccode\u003eInt\u003c/code\u003e bytes. Only the next\n \u003ccode\u003eInt\u003c/code\u003e bytes of the input bytestring will be available for the Get monad to\n consume. This function will fail if the Get monad fails or some of the input\n is not consumed.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util",
          "name": "isolate",
          "package": "haskoin-util",
          "signature": "Int -\u003e Get a -\u003e Get a",
          "source": "src/Network-Haskoin-Util.html#isolate",
          "type": "function"
        },
        "index": {
          "description": "Isolate Data.Binary.Get monad for the next Int bytes Only the next Int bytes of the input bytestring will be available for the Get monad to consume This function will fail if the Get monad fails or some of the input is not consumed",
          "hierarchy": "Network Haskoin Util",
          "module": "Network.Haskoin.Util",
          "name": "isolate",
          "normalized": "Int-\u003eGet a-\u003eGet a",
          "package": "haskoin-util",
          "signature": "Int-\u003eGet a-\u003eGet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:isolate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the list [b] as a template and try to match the elements of [a]\n against it. For each element of [b] return the (first) matching element of\n [a], or Nothing. Output list has same size as [b] and contains results in\n same order.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util",
          "name": "matchTemplate",
          "package": "haskoin-util",
          "signature": "[a]-\u003e [b]-\u003e (a -\u003e b -\u003e Bool)-\u003e [Maybe a]",
          "type": "function"
        },
        "index": {
          "description": "Use the list as template and try to match the elements of against it For each element of return the first matching element of or Nothing Output list has same size as and contains results in same order",
          "hierarchy": "Network Haskoin Util",
          "module": "Network.Haskoin.Util",
          "name": "matchTemplate",
          "normalized": "[a]-\u003e[b]-\u003e(a-\u003eb-\u003eBool)-\u003e[Maybe a]",
          "package": "haskoin-util",
          "partial": "Template",
          "signature": "[a]-\u003e[b]-\u003e(a-\u003eb-\u003eBool)-\u003e[Maybe a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:matchTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms a Maybe value into an Either value. Just is mapped to Right and\n Nothing is mapped to Left. You also pass in an error value in case Left is\n returned.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util",
          "name": "maybeToEither",
          "package": "haskoin-util",
          "signature": "b -\u003e Maybe a -\u003e Either b a",
          "source": "src/Network-Haskoin-Util.html#maybeToEither",
          "type": "function"
        },
        "index": {
          "description": "Transforms Maybe value into an Either value Just is mapped to Right and Nothing is mapped to Left You also pass in an error value in case Left is returned",
          "hierarchy": "Network Haskoin Util",
          "module": "Network.Haskoin.Util",
          "name": "maybeToEither",
          "normalized": "a-\u003eMaybe b-\u003eEither a b",
          "package": "haskoin-util",
          "partial": "To Either",
          "signature": "b-\u003eMaybe a-\u003eEither b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:maybeToEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict version of \u003ccode\u003eData.Binary.runGet\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util",
          "name": "runGet'",
          "package": "haskoin-util",
          "signature": "Get a -\u003e ByteString -\u003e a",
          "source": "src/Network-Haskoin-Util.html#runGet%27",
          "type": "function"
        },
        "index": {
          "description": "Strict version of Data.Binary.runGet",
          "hierarchy": "Network Haskoin Util",
          "module": "Network.Haskoin.Util",
          "name": "runGet'",
          "normalized": "Get a-\u003eByteString-\u003ea",
          "package": "haskoin-util",
          "partial": "Get'",
          "signature": "Get a-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:runGet-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict version of \u003ccode\u003eData.Binary.runGetOrFail\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util",
          "name": "runGetOrFail'",
          "package": "haskoin-util",
          "signature": "Get a -\u003e ByteString -\u003e Either (ByteString, ByteOffset, String) (ByteString, ByteOffset, a)",
          "source": "src/Network-Haskoin-Util.html#runGetOrFail%27",
          "type": "function"
        },
        "index": {
          "description": "Strict version of Data.Binary.runGetOrFail",
          "hierarchy": "Network Haskoin Util",
          "module": "Network.Haskoin.Util",
          "name": "runGetOrFail'",
          "normalized": "Get a-\u003eByteString-\u003eEither(ByteString,ByteOffset,String)(ByteString,ByteOffset,a)",
          "package": "haskoin-util",
          "partial": "Get Or Fail'",
          "signature": "Get a-\u003eByteString-\u003eEither(ByteString,ByteOffset,String)(ByteString,ByteOffset,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:runGetOrFail-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict version of \u003ccode\u003eData.Binary.runPut\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util",
          "name": "runPut'",
          "package": "haskoin-util",
          "signature": "Put -\u003e ByteString",
          "source": "src/Network-Haskoin-Util.html#runPut%27",
          "type": "function"
        },
        "index": {
          "description": "Strict version of Data.Binary.runPut",
          "hierarchy": "Network Haskoin Util",
          "module": "Network.Haskoin.Util",
          "name": "runPut'",
          "normalized": "Put-\u003eByteString",
          "package": "haskoin-util",
          "partial": "Put'",
          "signature": "Put-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:runPut-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms a string into a strict bytestring\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util",
          "name": "stringToBS",
          "package": "haskoin-util",
          "signature": "String -\u003e ByteString",
          "source": "src/Network-Haskoin-Util.html#stringToBS",
          "type": "function"
        },
        "index": {
          "description": "Transforms string into strict bytestring",
          "hierarchy": "Network Haskoin Util",
          "module": "Network.Haskoin.Util",
          "name": "stringToBS",
          "normalized": "String-\u003eByteString",
          "package": "haskoin-util",
          "partial": "To BS",
          "signature": "String-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:stringToBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms a strict bytestring into a lazy bytestring\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util",
          "name": "toLazyBS",
          "package": "haskoin-util",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Network-Haskoin-Util.html#toLazyBS",
          "type": "function"
        },
        "index": {
          "description": "Transforms strict bytestring into lazy bytestring",
          "hierarchy": "Network Haskoin Util",
          "module": "Network.Haskoin.Util",
          "name": "toLazyBS",
          "normalized": "ByteString-\u003eByteString",
          "package": "haskoin-util",
          "partial": "Lazy BS",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:toLazyBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms a lazy bytestring into a strict bytestring\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util",
          "name": "toStrictBS",
          "package": "haskoin-util",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Network-Haskoin-Util.html#toStrictBS",
          "type": "function"
        },
        "index": {
          "description": "Transforms lazy bytestring into strict bytestring",
          "hierarchy": "Network Haskoin Util",
          "module": "Network.Haskoin.Util",
          "name": "toStrictBS",
          "normalized": "ByteString-\u003eByteString",
          "package": "haskoin-util",
          "partial": "Strict BS",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:toStrictBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a function to only one element of a list defined by it's index.\n If the index is out of the bounds of the list, the original list is returned\n\u003c/p\u003e",
          "module": "Network.Haskoin.Util",
          "name": "updateIndex",
          "package": "haskoin-util",
          "signature": "Int-\u003e [a]-\u003e (a -\u003e a)-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Applies function to only one element of list defined by it index If the index is out of the bounds of the list the original list is returned",
          "hierarchy": "Network Haskoin Util",
          "module": "Network.Haskoin.Util",
          "name": "updateIndex",
          "normalized": "Int-\u003e[a]-\u003e(a-\u003ea)-\u003e[a]",
          "package": "haskoin-util",
          "partial": "Index",
          "signature": "Int-\u003e[a]-\u003e(a-\u003ea)-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-util/docs/Network-Haskoin-Util.html#v:updateIndex"
      }
    }
  ]
]