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
        "word": "haskoin-wallet"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eArbitrary instances for wallet data types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Haskoin.Wallet.Arbitrary",
          "name": "Arbitrary",
          "package": "haskoin-wallet",
          "source": "src/Network-Haskoin-Wallet-Arbitrary.html",
          "type": "module"
        },
        "index": {
          "description": "Arbitrary instances for wallet data types",
          "hierarchy": "Network Haskoin Wallet Arbitrary",
          "module": "Network.Haskoin.Wallet.Arbitrary",
          "name": "Arbitrary",
          "package": "haskoin-wallet",
          "partial": "Arbitrary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Arbitrary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for generating arbitrary valid multisignature parameters (m of n)\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet.Arbitrary",
          "name": "MSParam",
          "package": "haskoin-wallet",
          "source": "src/Network-Haskoin-Wallet-Arbitrary.html#MSParam",
          "type": "data"
        },
        "index": {
          "description": "Data type for generating arbitrary valid multisignature parameters of",
          "hierarchy": "Network Haskoin Wallet Arbitrary",
          "module": "Network.Haskoin.Wallet.Arbitrary",
          "name": "MSParam",
          "package": "haskoin-wallet",
          "partial": "MSParam",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Arbitrary.html#t:MSParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for generating arbitrary transaction with inputs and outputs\n consisting only of script hash or pub key hash scripts.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet.Arbitrary",
          "name": "RegularTx",
          "package": "haskoin-wallet",
          "source": "src/Network-Haskoin-Wallet-Arbitrary.html#RegularTx",
          "type": "data"
        },
        "index": {
          "description": "Data type for generating arbitrary transaction with inputs and outputs consisting only of script hash or pub key hash scripts",
          "hierarchy": "Network Haskoin Wallet Arbitrary",
          "module": "Network.Haskoin.Wallet.Arbitrary",
          "name": "RegularTx",
          "package": "haskoin-wallet",
          "partial": "Regular Tx",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Arbitrary.html#t:RegularTx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Wallet.Arbitrary",
          "name": "MSParam",
          "package": "haskoin-wallet",
          "signature": "MSParam Int Int",
          "source": "src/Network-Haskoin-Wallet-Arbitrary.html#MSParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Wallet Arbitrary",
          "module": "Network.Haskoin.Wallet.Arbitrary",
          "name": "MSParam",
          "package": "haskoin-wallet",
          "partial": "MSParam",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Arbitrary.html#v:MSParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Wallet.Arbitrary",
          "name": "RegularTx",
          "package": "haskoin-wallet",
          "signature": "RegularTx Tx",
          "source": "src/Network-Haskoin-Wallet-Arbitrary.html#RegularTx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Wallet Arbitrary",
          "module": "Network.Haskoin.Wallet.Arbitrary",
          "name": "RegularTx",
          "package": "haskoin-wallet",
          "partial": "Regular Tx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Arbitrary.html#v:RegularTx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an arbitrary output paying to a public key hash or script hash\n address.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet.Arbitrary",
          "name": "genAddrOutput",
          "package": "haskoin-wallet",
          "signature": "Gen TxOut",
          "source": "src/Network-Haskoin-Wallet-Arbitrary.html#genAddrOutput",
          "type": "function"
        },
        "index": {
          "description": "Generate an arbitrary output paying to public key hash or script hash address",
          "hierarchy": "Network Haskoin Wallet Arbitrary",
          "module": "Network.Haskoin.Wallet.Arbitrary",
          "name": "genAddrOutput",
          "package": "haskoin-wallet",
          "partial": "Addr Output",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Arbitrary.html#v:genAddrOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an arbitrary script hash input spending a multisignature\n pay to script hash.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet.Arbitrary",
          "name": "genMulSigInput",
          "package": "haskoin-wallet",
          "signature": "Gen ScriptHashInput",
          "source": "src/Network-Haskoin-Wallet-Arbitrary.html#genMulSigInput",
          "type": "function"
        },
        "index": {
          "description": "Generate an arbitrary script hash input spending multisignature pay to script hash",
          "hierarchy": "Network Haskoin Wallet Arbitrary",
          "module": "Network.Haskoin.Wallet.Arbitrary",
          "name": "genMulSigInput",
          "package": "haskoin-wallet",
          "partial": "Mul Sig Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Arbitrary.html#v:genMulSigInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an arbitrary compressed public key.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet.Arbitrary",
          "name": "genPubKeyC",
          "package": "haskoin-wallet",
          "signature": "Gen PubKey",
          "source": "src/Network-Haskoin-Wallet-Arbitrary.html#genPubKeyC",
          "type": "function"
        },
        "index": {
          "description": "Generate an arbitrary compressed public key",
          "hierarchy": "Network Haskoin Wallet Arbitrary",
          "module": "Network.Haskoin.Wallet.Arbitrary",
          "name": "genPubKeyC",
          "package": "haskoin-wallet",
          "partial": "Pub Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Arbitrary.html#v:genPubKeyC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an arbitrary transaction input spending a public key hash or\n script hash output.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet.Arbitrary",
          "name": "genRegularInput",
          "package": "haskoin-wallet",
          "signature": "Gen TxIn",
          "source": "src/Network-Haskoin-Wallet-Arbitrary.html#genRegularInput",
          "type": "function"
        },
        "index": {
          "description": "Generate an arbitrary transaction input spending public key hash or script hash output",
          "hierarchy": "Network Haskoin Wallet Arbitrary",
          "module": "Network.Haskoin.Wallet.Arbitrary",
          "name": "genRegularInput",
          "package": "haskoin-wallet",
          "partial": "Regular Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Arbitrary.html#v:genRegularInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides an API to the Haskoin wallet. All commands return a\n  \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e result which can be encoded to JSON or YAML. The wallet commands\n  run within the Persistent framework for database support:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://hackage.haskell.org/package/persistent\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "Store",
          "package": "haskoin-wallet",
          "source": "src/Network-Haskoin-Wallet-Store.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides an API to the Haskoin wallet All commands return Value result which can be encoded to JSON or YAML The wallet commands run within the Persistent framework for database support http hackage.haskell.org package persistent",
          "hierarchy": "Network Haskoin Wallet Store",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "Store",
          "package": "haskoin-wallet",
          "partial": "Store",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Store.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns information on an account.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdAccInfo",
          "package": "haskoin-wallet",
          "signature": "AccountName-\u003e EitherT String m Value",
          "type": "function"
        },
        "index": {
          "description": "Returns information on an account",
          "hierarchy": "Network Haskoin Wallet Store",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdAccInfo",
          "normalized": "AccountName-\u003eEitherT String a Value",
          "package": "haskoin-wallet",
          "partial": "Acc Info",
          "signature": "AccountName-\u003eEitherT String m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Store.html#v:cmdAccInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd new thirdparty keys to a multisignature account. This function can\n fail if the multisignature account already has all required keys. In order\n to prevent usage mistakes, adding a key from your own wallet will fail.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdAddKeys",
          "package": "haskoin-wallet",
          "signature": "AccountName-\u003e [XPubKey]-\u003e EitherT String m Value",
          "type": "function"
        },
        "index": {
          "description": "Add new thirdparty keys to multisignature account This function can fail if the multisignature account already has all required keys In order to prevent usage mistakes adding key from your own wallet will fail",
          "hierarchy": "Network Haskoin Wallet Store",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdAddKeys",
          "normalized": "AccountName-\u003e[XPubKey]-\u003eEitherT String a Value",
          "package": "haskoin-wallet",
          "partial": "Add Keys",
          "signature": "AccountName-\u003e[XPubKey]-\u003eEitherT String m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Store.html#v:cmdAddKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of all the unspent coins for every account in the wallet.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdAllCoins",
          "package": "haskoin-wallet",
          "signature": "EitherT String m Value",
          "type": "function"
        },
        "index": {
          "description": "Returns list of all the unspent coins for every account in the wallet",
          "hierarchy": "Network Haskoin Wallet Store",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdAllCoins",
          "package": "haskoin-wallet",
          "partial": "All Coins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Store.html#v:cmdAllCoins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the balance of an account.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdBalance",
          "package": "haskoin-wallet",
          "signature": "AccountName-\u003e EitherT String m Value",
          "type": "function"
        },
        "index": {
          "description": "Returns the balance of an account",
          "hierarchy": "Network Haskoin Wallet Store",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdBalance",
          "normalized": "AccountName-\u003eEitherT String a Value",
          "package": "haskoin-wallet",
          "partial": "Balance",
          "signature": "AccountName-\u003eEitherT String m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Store.html#v:cmdBalance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of balances for every account in the wallet.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdBalances",
          "package": "haskoin-wallet",
          "signature": "EitherT String m Value",
          "type": "function"
        },
        "index": {
          "description": "Returns list of balances for every account in the wallet",
          "hierarchy": "Network Haskoin Wallet Store",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdBalances",
          "package": "haskoin-wallet",
          "partial": "Balances",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Store.html#v:cmdBalances"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a raw transaction from a list of outpoints and recipients encoded\n in JSON.\n\u003c/p\u003e\u003cp\u003eOutpoint format as JSON:\n\u003c/p\u003e\u003cpre\u003e   [ \n       { \"txid\": txid\n       , \"vout\": n\n       },...\n   ] \n\u003c/pre\u003e\u003cp\u003eRecipient list as JSON:\n\u003c/p\u003e\u003cpre\u003e   { addr: amnt,... }\n\u003c/pre\u003e",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdBuildRawTx",
          "package": "haskoin-wallet",
          "signature": "String-\u003e String-\u003e EitherT String m Value",
          "type": "function"
        },
        "index": {
          "description": "Build raw transaction from list of outpoints and recipients encoded in JSON Outpoint format as JSON txid txid vout Recipient list as JSON addr amnt",
          "hierarchy": "Network Haskoin Wallet Store",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdBuildRawTx",
          "normalized": "String-\u003eString-\u003eEitherT String a Value",
          "package": "haskoin-wallet",
          "partial": "Build Raw Tx",
          "signature": "String-\u003eString-\u003eEitherT String m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Store.html#v:cmdBuildRawTx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the list of unspent coins for an account.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdCoins",
          "package": "haskoin-wallet",
          "signature": "AccountName-\u003e EitherT String m Value",
          "type": "function"
        },
        "index": {
          "description": "Returns the list of unspent coins for an account",
          "hierarchy": "Network Haskoin Wallet Store",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdCoins",
          "normalized": "AccountName-\u003eEitherT String a Value",
          "package": "haskoin-wallet",
          "partial": "Coins",
          "signature": "AccountName-\u003eEitherT String m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Store.html#v:cmdCoins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecodes a transaction, providing structural information on the inputs\n and the outputs of the transaction.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdDecodeTx",
          "package": "haskoin-wallet",
          "signature": "String-\u003e EitherT String m Value",
          "type": "function"
        },
        "index": {
          "description": "Decodes transaction providing structural information on the inputs and the outputs of the transaction",
          "hierarchy": "Network Haskoin Wallet Store",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdDecodeTx",
          "normalized": "String-\u003eEitherT String a Value",
          "package": "haskoin-wallet",
          "partial": "Decode Tx",
          "signature": "String-\u003eEitherT String m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Store.html#v:cmdDecodeTx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns information on extended public and private keys of an account.\n For a multisignature account, thirdparty keys are also returned.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdDumpKeys",
          "package": "haskoin-wallet",
          "signature": "AccountName-\u003e EitherT String m Value",
          "type": "function"
        },
        "index": {
          "description": "Returns information on extended public and private keys of an account For multisignature account thirdparty keys are also returned",
          "hierarchy": "Network Haskoin Wallet Store",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdDumpKeys",
          "normalized": "AccountName-\u003eEitherT String a Value",
          "package": "haskoin-wallet",
          "partial": "Dump Keys",
          "signature": "AccountName-\u003eEitherT String m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Store.html#v:cmdDumpKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate new payment addresses for an account. \n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdGenAddrs",
          "package": "haskoin-wallet",
          "signature": "AccountName-\u003e Int-\u003e EitherT String m Value",
          "type": "function"
        },
        "index": {
          "description": "Generate new payment addresses for an account",
          "hierarchy": "Network Haskoin Wallet Store",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdGenAddrs",
          "normalized": "AccountName-\u003eInt-\u003eEitherT String a Value",
          "package": "haskoin-wallet",
          "partial": "Gen Addrs",
          "signature": "AccountName-\u003eInt-\u003eEitherT String m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Store.html#v:cmdGenAddrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate new payment addresses with labels for an account.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdGenWithLabel",
          "package": "haskoin-wallet",
          "signature": "AccountName-\u003e [String]-\u003e EitherT String m Value",
          "type": "function"
        },
        "index": {
          "description": "Generate new payment addresses with labels for an account",
          "hierarchy": "Network Haskoin Wallet Store",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdGenWithLabel",
          "normalized": "AccountName-\u003e[String]-\u003eEitherT String a Value",
          "package": "haskoin-wallet",
          "partial": "Gen With Label",
          "signature": "AccountName-\u003e[String]-\u003eEitherT String m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Store.html#v:cmdGenWithLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImport a transaction into the wallet. If called multiple times, this\n command will only update the existing transaction in the wallet. A new\n transaction entry will be created for every account affected by this\n transaction. Every transaction entry will summarize the information related\n to its account only (such as total movement for this account).\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdImportTx",
          "package": "haskoin-wallet",
          "signature": "Tx-\u003e EitherT String m Value",
          "type": "function"
        },
        "index": {
          "description": "Import transaction into the wallet If called multiple times this command will only update the existing transaction in the wallet new transaction entry will be created for every account affected by this transaction Every transaction entry will summarize the information related to its account only such as total movement for this account",
          "hierarchy": "Network Haskoin Wallet Store",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdImportTx",
          "normalized": "Tx-\u003eEitherT String a Value",
          "package": "haskoin-wallet",
          "partial": "Import Tx",
          "signature": "Tx-\u003eEitherT String m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Store.html#v:cmdImportTx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize a wallet from a secret seed. This function will fail if the\n wallet is already initialized.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdInit",
          "package": "haskoin-wallet",
          "signature": "String-\u003e EitherT String m Value",
          "type": "function"
        },
        "index": {
          "description": "Initialize wallet from secret seed This function will fail if the wallet is already initialized",
          "hierarchy": "Network Haskoin Wallet Store",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdInit",
          "normalized": "String-\u003eEitherT String a Value",
          "package": "haskoin-wallet",
          "partial": "Init",
          "signature": "String-\u003eEitherT String m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Store.html#v:cmdInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a label to an address.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdLabel",
          "package": "haskoin-wallet",
          "signature": "AccountName-\u003e Int-\u003e String-\u003e EitherT String m Value",
          "type": "function"
        },
        "index": {
          "description": "Add label to an address",
          "hierarchy": "Network Haskoin Wallet Store",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdLabel",
          "normalized": "AccountName-\u003eInt-\u003eString-\u003eEitherT String a Value",
          "package": "haskoin-wallet",
          "partial": "Label",
          "signature": "AccountName-\u003eInt-\u003eString-\u003eEitherT String m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Store.html#v:cmdLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a page of addresses for an account. Pages are numbered starting\n from page 1. Requesting page 0 will return the last page. \n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdList",
          "package": "haskoin-wallet",
          "signature": "AccountName-\u003e Int-\u003e Int-\u003e EitherT String m Value",
          "type": "function"
        },
        "index": {
          "description": "Returns page of addresses for an account Pages are numbered starting from page Requesting page will return the last page",
          "hierarchy": "Network Haskoin Wallet Store",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdList",
          "normalized": "AccountName-\u003eInt-\u003eInt-\u003eEitherT String a Value",
          "package": "haskoin-wallet",
          "partial": "List",
          "signature": "AccountName-\u003eInt-\u003eInt-\u003eEitherT String m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Store.html#v:cmdList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of all accounts in the wallet.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdListAcc",
          "package": "haskoin-wallet",
          "signature": "EitherT String m Value",
          "type": "function"
        },
        "index": {
          "description": "Returns list of all accounts in the wallet",
          "hierarchy": "Network Haskoin Wallet Store",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdListAcc",
          "package": "haskoin-wallet",
          "partial": "List Acc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Store.html#v:cmdListAcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList all the transaction entries for an account. Transaction entries\n summarize information for a transaction in a specific account only (such as\n the total movement of for this account).\n\u003c/p\u003e\u003cp\u003eTransaction entries can also be tagged as \u003cem\u003eOrphan\u003c/em\u003e or \u003cem\u003ePartial\u003c/em\u003e. Orphaned\n transactions are transactions with a parent transaction that should be in\n the wallet but has not been imported yet. Balances for orphaned transactions\n can not be accurately computed until the parent transaction is imported.\n\u003c/p\u003e\u003cp\u003ePartial transactions are transactions that are not fully signed yet, such\n as a partially signed multisignature transaction. Partial transactions\n are visible in the wallet mostly for informational purposes. They can not\n generate any coins as the txid or partial transactions will change once\n they are fully signed. However, importing a partial transaction will \u003cem\u003elock\u003c/em\u003e\n the coins that it spends so that you don't mistakenly spend them. Partial\n transactions are replaced once the fully signed transaction is imported.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdListTx",
          "package": "haskoin-wallet",
          "signature": "AccountName-\u003e EitherT String m Value",
          "type": "function"
        },
        "index": {
          "description": "List all the transaction entries for an account Transaction entries summarize information for transaction in specific account only such as the total movement of for this account Transaction entries can also be tagged as Orphan or Partial Orphaned transactions are transactions with parent transaction that should be in the wallet but has not been imported yet Balances for orphaned transactions can not be accurately computed until the parent transaction is imported Partial transactions are transactions that are not fully signed yet such as partially signed multisignature transaction Partial transactions are visible in the wallet mostly for informational purposes They can not generate any coins as the txid or partial transactions will change once they are fully signed However importing partial transaction will lock the coins that it spends so that you don mistakenly spend them Partial transactions are replaced once the fully signed transaction is imported",
          "hierarchy": "Network Haskoin Wallet Store",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdListTx",
          "normalized": "AccountName-\u003eEitherT String a Value",
          "package": "haskoin-wallet",
          "partial": "List Tx",
          "signature": "AccountName-\u003eEitherT String m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Store.html#v:cmdListTx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new account from an account name. Accounts are identified by\n their name and they must be unique.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdNewAcc",
          "package": "haskoin-wallet",
          "signature": "String-\u003e EitherT String m Value",
          "type": "function"
        },
        "index": {
          "description": "Create new account from an account name Accounts are identified by their name and they must be unique",
          "hierarchy": "Network Haskoin Wallet Store",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdNewAcc",
          "normalized": "String-\u003eEitherT String a Value",
          "package": "haskoin-wallet",
          "partial": "New Acc",
          "signature": "String-\u003eEitherT String m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Store.html#v:cmdNewAcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new multisignature account. The thirdparty keys can be provided\n now or later using the \u003ccode\u003e\u003ca\u003ecmdAddKeys\u003c/a\u003e\u003c/code\u003e command. The number of thirdparty keys\n can not exceed n-1 as your own account key will be used as well in the\n multisignature scheme. If less than n-1 keys are provided, the account will\n be in a pending state and no addresses can be generated.\n\u003c/p\u003e\u003cp\u003eIn order to prevent usage mistakes, you can not create a multisignature \n account with other keys from your own wallet.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdNewMS",
          "package": "haskoin-wallet",
          "signature": "String-\u003e Int-\u003e Int-\u003e [XPubKey]-\u003e EitherT String m Value",
          "type": "function"
        },
        "index": {
          "description": "Create new multisignature account The thirdparty keys can be provided now or later using the cmdAddKeys command The number of thirdparty keys can not exceed n-1 as your own account key will be used as well in the multisignature scheme If less than n-1 keys are provided the account will be in pending state and no addresses can be generated In order to prevent usage mistakes you can not create multisignature account with other keys from your own wallet",
          "hierarchy": "Network Haskoin Wallet Store",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdNewMS",
          "normalized": "String-\u003eInt-\u003eInt-\u003e[XPubKey]-\u003eEitherT String a Value",
          "package": "haskoin-wallet",
          "partial": "New MS",
          "signature": "String-\u003eInt-\u003eInt-\u003e[XPubKey]-\u003eEitherT String m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Store.html#v:cmdNewMS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a transaction from the database. This will remove all transaction\n entries for this transaction as well as any child transactions and coins\n deriving from it.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdRemoveTx",
          "package": "haskoin-wallet",
          "signature": "String-\u003e EitherT String m Value",
          "type": "function"
        },
        "index": {
          "description": "Remove transaction from the database This will remove all transaction entries for this transaction as well as any child transactions and coins deriving from it",
          "hierarchy": "Network Haskoin Wallet Store",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdRemoveTx",
          "normalized": "String-\u003eEitherT String a Value",
          "package": "haskoin-wallet",
          "partial": "Remove Tx",
          "signature": "String-\u003eEitherT String m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Store.html#v:cmdRemoveTx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a transaction sending some coins to a single recipient address.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdSend",
          "package": "haskoin-wallet",
          "signature": "AccountName-\u003e String-\u003e Int-\u003e Int-\u003e EitherT String m Value",
          "type": "function"
        },
        "index": {
          "description": "Create transaction sending some coins to single recipient address",
          "hierarchy": "Network Haskoin Wallet Store",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdSend",
          "normalized": "AccountName-\u003eString-\u003eInt-\u003eInt-\u003eEitherT String a Value",
          "package": "haskoin-wallet",
          "partial": "Send",
          "signature": "AccountName-\u003eString-\u003eInt-\u003eInt-\u003eEitherT String m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Store.html#v:cmdSend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a transaction sending some coins to a list of recipient addresses.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdSendMany",
          "package": "haskoin-wallet",
          "signature": "AccountName-\u003e [(String, Int)]-\u003e Int-\u003e EitherT String m Value",
          "type": "function"
        },
        "index": {
          "description": "Create transaction sending some coins to list of recipient addresses",
          "hierarchy": "Network Haskoin Wallet Store",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdSendMany",
          "normalized": "AccountName-\u003e[(String,Int)]-\u003eInt-\u003eEitherT String a Value",
          "package": "haskoin-wallet",
          "partial": "Send Many",
          "signature": "AccountName-\u003e[(String,Int)]-\u003eInt-\u003eEitherT String m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Store.html#v:cmdSendMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign a raw transaction by providing the signing parameters and private\n keys manually. None of the keys in the wallet will be used for signing.\n\u003c/p\u003e\u003cp\u003eSigning data as JSON (scriptRedeem is optional):\n\u003c/p\u003e\u003cpre\u003e   [ \n       { \"txid\": txid\n       , \"vout\": n\n       , \"scriptPubKey\": hex\n       , \"scriptRedeem\": hex\n       },...\n    ]\n\u003c/pre\u003e\u003cp\u003ePrivate keys in JSON foramt:\n\u003c/p\u003e\u003cpre\u003e   [ WIF,... ]\n\u003c/pre\u003e",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdSignRawTx",
          "package": "haskoin-wallet",
          "signature": "Tx-\u003e String-\u003e String-\u003e SigHash-\u003e EitherT String m Value",
          "type": "function"
        },
        "index": {
          "description": "Sign raw transaction by providing the signing parameters and private keys manually None of the keys in the wallet will be used for signing Signing data as JSON scriptRedeem is optional txid txid vout scriptPubKey hex scriptRedeem hex Private keys in JSON foramt WIF",
          "hierarchy": "Network Haskoin Wallet Store",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdSignRawTx",
          "normalized": "Tx-\u003eString-\u003eString-\u003eSigHash-\u003eEitherT String a Value",
          "package": "haskoin-wallet",
          "partial": "Sign Raw Tx",
          "signature": "Tx-\u003eString-\u003eString-\u003eSigHash-\u003eEitherT String m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Store.html#v:cmdSignRawTx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to sign the inputs of an existing transaction using the private keys\n of an account. This command will return an indication if the transaction is\n fully signed or if additional signatures are required. This command will\n work for both normal inputs and multisignature inputs. Signing is limited to\n the keys of one account only to allow for more control when the wallet is\n used as the backend of a web service.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdSignTx",
          "package": "haskoin-wallet",
          "signature": "AccountName-\u003e Tx-\u003e SigHash-\u003e EitherT String m Value",
          "type": "function"
        },
        "index": {
          "description": "Try to sign the inputs of an existing transaction using the private keys of an account This command will return an indication if the transaction is fully signed or if additional signatures are required This command will work for both normal inputs and multisignature inputs Signing is limited to the keys of one account only to allow for more control when the wallet is used as the backend of web service",
          "hierarchy": "Network Haskoin Wallet Store",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdSignTx",
          "normalized": "AccountName-\u003eTx-\u003eSigHash-\u003eEitherT String a Value",
          "package": "haskoin-wallet",
          "partial": "Sign Tx",
          "signature": "AccountName-\u003eTx-\u003eSigHash-\u003eEitherT String m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Store.html#v:cmdSignTx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the private key tied to a payment address in WIF format.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdWIF",
          "package": "haskoin-wallet",
          "signature": "AccountName-\u003e Int-\u003e EitherT String m Value",
          "type": "function"
        },
        "index": {
          "description": "Returns the private key tied to payment address in WIF format",
          "hierarchy": "Network Haskoin Wallet Store",
          "module": "Network.Haskoin.Wallet.Store",
          "name": "cmdWIF",
          "normalized": "AccountName-\u003eInt-\u003eEitherT String a Value",
          "package": "haskoin-wallet",
          "partial": "WIF",
          "signature": "AccountName-\u003eInt-\u003eEitherT String m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet-Store.html#v:cmdWIF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package provides functions for generating hierarchical deterministic\n  keys (BIP32). It also provides functions for building and signing both\n  simple transactions and multisignature transactions. This package also\n  provides a command line application called \u003cem\u003ehw\u003c/em\u003e (haskoin wallet). It is a\n  lightweight bitcoin wallet featuring BIP32 key management, deterministic\n  signatures (RFC-6979) and first order support for multisignature\n  transactions. A library API for \u003cem\u003ehw\u003c/em\u003e is also exposed.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "Wallet",
          "package": "haskoin-wallet",
          "source": "src/Network-Haskoin-Wallet.html",
          "type": "module"
        },
        "index": {
          "description": "This package provides functions for generating hierarchical deterministic keys BIP32 It also provides functions for building and signing both simple transactions and multisignature transactions This package also provides command line application called hw haskoin wallet It is lightweight bitcoin wallet featuring BIP32 key management deterministic signatures RFC-6979 and first order support for multisignature transactions library API for hw is also exposed",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "Wallet",
          "package": "haskoin-wallet",
          "partial": "Wallet",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing a private account key. Account keys are generated\n from a \u003ccode\u003e\u003ca\u003eMasterKey\u003c/a\u003e\u003c/code\u003e through prime derivation. This guarantees that the\n \u003ccode\u003e\u003ca\u003eMasterKey\u003c/a\u003e\u003c/code\u003e will not be compromised if the account key is compromised. \n \u003ccode\u003e\u003ca\u003eAccPrvKey\u003c/a\u003e\u003c/code\u003e is represented as m/i'/ in BIP32 notation.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "AccPrvKey",
          "package": "haskoin-wallet",
          "source": "src/Network-Haskoin-Wallet-Manager.html#AccPrvKey",
          "type": "newtype"
        },
        "index": {
          "description": "Data type representing private account key Account keys are generated from MasterKey through prime derivation This guarantees that the MasterKey will not be compromised if the account key is compromised AccPrvKey is represented as in BIP32 notation",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "AccPrvKey",
          "package": "haskoin-wallet",
          "partial": "Acc Prv Key",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#t:AccPrvKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing a public account key. It is computed through\n derivation from an \u003ccode\u003e\u003ca\u003eAccPrvKey\u003c/a\u003e\u003c/code\u003e. It can not be derived from the \u003ccode\u003e\u003ca\u003eMasterKey\u003c/a\u003e\u003c/code\u003e\n directly (property of prime derivation). It is represented as M/i'/ in\n BIP32 notation. \u003ccode\u003e\u003ca\u003eAccPubKey\u003c/a\u003e\u003c/code\u003e is used for generating receiving payment\n addresses without the knowledge of the \u003ccode\u003e\u003ca\u003eAccPrvKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "AccPubKey",
          "package": "haskoin-wallet",
          "source": "src/Network-Haskoin-Wallet-Manager.html#AccPubKey",
          "type": "newtype"
        },
        "index": {
          "description": "Data type representing public account key It is computed through derivation from an AccPrvKey It can not be derived from the MasterKey directly property of prime derivation It is represented as in BIP32 notation AccPubKey is used for generating receiving payment addresses without the knowledge of the AccPrvKey",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "AccPubKey",
          "package": "haskoin-wallet",
          "partial": "Acc Pub Key",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#t:AccPubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing a private address key. Private address keys are\n generated through a non-prime derivation from an \u003ccode\u003e\u003ca\u003eAccPrvKey\u003c/a\u003e\u003c/code\u003e. Non-prime\n derivation is used so that the public account key can generate the receiving\n payment addresses without knowledge of the private account key. \u003ccode\u003e\u003ca\u003eAccPrvKey\u003c/a\u003e\u003c/code\u003e\n is represented as m/i'/0/j/ in BIP32 notation if it is a regular\n receiving address. Internal (change) addresses are represented as\n m/i'/1/j/. Non-prime subtree 0 is used for regular receiving addresses\n and non-prime subtree 1 for internal (change) addresses.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "AddrPrvKey",
          "package": "haskoin-wallet",
          "source": "src/Network-Haskoin-Wallet-Manager.html#AddrPrvKey",
          "type": "newtype"
        },
        "index": {
          "description": "Data type representing private address key Private address keys are generated through non-prime derivation from an AccPrvKey Non-prime derivation is used so that the public account key can generate the receiving payment addresses without knowledge of the private account key AccPrvKey is represented as in BIP32 notation if it is regular receiving address Internal change addresses are represented as Non-prime subtree is used for regular receiving addresses and non-prime subtree for internal change addresses",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "AddrPrvKey",
          "package": "haskoin-wallet",
          "partial": "Addr Prv Key",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#t:AddrPrvKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing a public address key. They are generated through\n non-prime derivation from an \u003ccode\u003e\u003ca\u003eAccPubKey\u003c/a\u003e\u003c/code\u003e. This is a useful feature for\n read-only wallets. They are represented as M/i'/0/j in BIP32 notation\n for regular receiving addresses and by M/i'/1/j for internal (change)\n addresses.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "AddrPubKey",
          "package": "haskoin-wallet",
          "source": "src/Network-Haskoin-Wallet-Manager.html#AddrPubKey",
          "type": "newtype"
        },
        "index": {
          "description": "Data type representing public address key They are generated through non-prime derivation from an AccPubKey This is useful feature for read-only wallets They are represented as in BIP32 notation for regular receiving addresses and by for internal change addresses",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "AddrPubKey",
          "package": "haskoin-wallet",
          "partial": "Addr Pub Key",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#t:AddrPubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Wallet",
          "name": "ChainCode",
          "package": "haskoin-wallet",
          "source": "src/Network-Haskoin-Wallet-Keys.html#ChainCode",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "ChainCode",
          "package": "haskoin-wallet",
          "partial": "Chain Code",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#t:ChainCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Coin is something that can be spent by a transaction and is\n represented by a transaction output, an outpoint and optionally a\n redeem script.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "Coin",
          "package": "haskoin-wallet",
          "source": "src/Network-Haskoin-Wallet-TxBuilder.html#Coin",
          "type": "data"
        },
        "index": {
          "description": "Coin is something that can be spent by transaction and is represented by transaction output an outpoint and optionally redeem script",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "Coin",
          "package": "haskoin-wallet",
          "partial": "Coin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#t:Coin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Wallet",
          "name": "KeyIndex",
          "package": "haskoin-wallet",
          "source": "src/Network-Haskoin-Wallet-Manager.html#KeyIndex",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "KeyIndex",
          "package": "haskoin-wallet",
          "partial": "Key Index",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#t:KeyIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing an extended private key at the root of the\n derivation tree. Master keys have depth 0 and no parents. They are\n represented as m/ in BIP32 notation.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "MasterKey",
          "package": "haskoin-wallet",
          "source": "src/Network-Haskoin-Wallet-Manager.html#MasterKey",
          "type": "newtype"
        },
        "index": {
          "description": "Data type representing an extended private key at the root of the derivation tree Master keys have depth and no parents They are represented as in BIP32 notation",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "MasterKey",
          "package": "haskoin-wallet",
          "partial": "Master Key",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#t:MasterKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type used to specify the signing parameters of a transaction input.\n To sign an input, the previous output script, outpoint and sighash are\n required. When signing a pay to script hash output, an additional redeem\n script is required.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "SigInput",
          "package": "haskoin-wallet",
          "source": "src/Network-Haskoin-Wallet-TxBuilder.html#SigInput",
          "type": "data"
        },
        "index": {
          "description": "Data type used to specify the signing parameters of transaction input To sign an input the previous output script outpoint and sighash are required When signing pay to script hash output an additional redeem script is required",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "SigInput",
          "package": "haskoin-wallet",
          "partial": "Sig Input",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#t:SigInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing an extended BIP32 private key. An extended key\n is a node in a tree of key derivations. It has a depth in the tree, a \n parent node and an index to differentiate it from other siblings.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "XPrvKey",
          "package": "haskoin-wallet",
          "source": "src/Network-Haskoin-Wallet-Keys.html#XPrvKey",
          "type": "data"
        },
        "index": {
          "description": "Data type representing an extended BIP32 private key An extended key is node in tree of key derivations It has depth in the tree parent node and an index to differentiate it from other siblings",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "XPrvKey",
          "package": "haskoin-wallet",
          "partial": "XPrv Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#t:XPrvKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing an extended BIP32 public key.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "XPubKey",
          "package": "haskoin-wallet",
          "source": "src/Network-Haskoin-Wallet-Keys.html#XPubKey",
          "type": "data"
        },
        "index": {
          "description": "Data type representing an extended BIP32 public key",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "XPubKey",
          "package": "haskoin-wallet",
          "partial": "XPub Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#t:XPubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Wallet",
          "name": "AccPrvKey",
          "package": "haskoin-wallet",
          "signature": "AccPrvKey",
          "source": "src/Network-Haskoin-Wallet-Manager.html#AccPrvKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "AccPrvKey",
          "package": "haskoin-wallet",
          "partial": "Acc Prv Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:AccPrvKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Wallet",
          "name": "AccPubKey",
          "package": "haskoin-wallet",
          "signature": "AccPubKey",
          "source": "src/Network-Haskoin-Wallet-Manager.html#AccPubKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "AccPubKey",
          "package": "haskoin-wallet",
          "partial": "Acc Pub Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:AccPubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Wallet",
          "name": "AddrPrvKey",
          "package": "haskoin-wallet",
          "signature": "AddrPrvKey",
          "source": "src/Network-Haskoin-Wallet-Manager.html#AddrPrvKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "AddrPrvKey",
          "package": "haskoin-wallet",
          "partial": "Addr Prv Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:AddrPrvKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Wallet",
          "name": "AddrPubKey",
          "package": "haskoin-wallet",
          "signature": "AddrPubKey",
          "source": "src/Network-Haskoin-Wallet-Manager.html#AddrPubKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "AddrPubKey",
          "package": "haskoin-wallet",
          "partial": "Addr Pub Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:AddrPubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Wallet",
          "name": "Coin",
          "package": "haskoin-wallet",
          "signature": "Coin",
          "source": "src/Network-Haskoin-Wallet-TxBuilder.html#Coin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "Coin",
          "package": "haskoin-wallet",
          "partial": "Coin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:Coin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Wallet",
          "name": "MasterKey",
          "package": "haskoin-wallet",
          "signature": "MasterKey",
          "source": "src/Network-Haskoin-Wallet-Manager.html#MasterKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "MasterKey",
          "package": "haskoin-wallet",
          "partial": "Master Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:MasterKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParameters for signing a pay to public key hash output.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "SigInput",
          "package": "haskoin-wallet",
          "signature": "SigInput",
          "source": "src/Network-Haskoin-Wallet-TxBuilder.html#SigInput",
          "type": "function"
        },
        "index": {
          "description": "Parameters for signing pay to public key hash output",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "SigInput",
          "package": "haskoin-wallet",
          "partial": "Sig Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:SigInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParameters for signing a pay to script hash output.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "SigInputSH",
          "package": "haskoin-wallet",
          "signature": "SigInputSH",
          "source": "src/Network-Haskoin-Wallet-TxBuilder.html#SigInput",
          "type": "function"
        },
        "index": {
          "description": "Parameters for signing pay to script hash output",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "SigInputSH",
          "package": "haskoin-wallet",
          "partial": "Sig Input SH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:SigInputSH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Wallet",
          "name": "XPrvKey",
          "package": "haskoin-wallet",
          "signature": "XPrvKey",
          "source": "src/Network-Haskoin-Wallet-Keys.html#XPrvKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "XPrvKey",
          "package": "haskoin-wallet",
          "partial": "XPrv Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:XPrvKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Wallet",
          "name": "XPubKey",
          "package": "haskoin-wallet",
          "signature": "XPubKey",
          "source": "src/Network-Haskoin-Wallet-Keys.html#XPubKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "XPubKey",
          "package": "haskoin-wallet",
          "partial": "XPub Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:XPubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes an \u003ccode\u003e\u003ca\u003eAccPrvKey\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eMasterKey\u003c/a\u003e\u003c/code\u003e and a derivation index.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "accPrvKey",
          "package": "haskoin-wallet",
          "signature": "MasterKey -\u003e KeyIndex -\u003e Maybe AccPrvKey",
          "source": "src/Network-Haskoin-Wallet-Manager.html#accPrvKey",
          "type": "function"
        },
        "index": {
          "description": "Computes an AccPrvKey from MasterKey and derivation index",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "accPrvKey",
          "normalized": "MasterKey-\u003eKeyIndex-\u003eMaybe AccPrvKey",
          "package": "haskoin-wallet",
          "partial": "Prv Key",
          "signature": "MasterKey-\u003eKeyIndex-\u003eMaybe AccPrvKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:accPrvKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCyclic list of all valid \u003ccode\u003e\u003ca\u003eAccPrvKey\u003c/a\u003e\u003c/code\u003e derived from a \u003ccode\u003e\u003ca\u003eMasterKey\u003c/a\u003e\u003c/code\u003e and\n starting from an offset index.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "accPrvKeys",
          "package": "haskoin-wallet",
          "signature": "MasterKey -\u003e KeyIndex -\u003e [(AccPrvKey, KeyIndex)]",
          "source": "src/Network-Haskoin-Wallet-Manager.html#accPrvKeys",
          "type": "function"
        },
        "index": {
          "description": "Cyclic list of all valid AccPrvKey derived from MasterKey and starting from an offset index",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "accPrvKeys",
          "normalized": "MasterKey-\u003eKeyIndex-\u003e[(AccPrvKey,KeyIndex)]",
          "package": "haskoin-wallet",
          "partial": "Prv Keys",
          "signature": "MasterKey-\u003eKeyIndex-\u003e[(AccPrvKey,KeyIndex)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:accPrvKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes an \u003ccode\u003e\u003ca\u003eAccPubKey\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eMasterKey\u003c/a\u003e\u003c/code\u003e and a derivation index.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "accPubKey",
          "package": "haskoin-wallet",
          "signature": "MasterKey -\u003e KeyIndex -\u003e Maybe AccPubKey",
          "source": "src/Network-Haskoin-Wallet-Manager.html#accPubKey",
          "type": "function"
        },
        "index": {
          "description": "Computes an AccPubKey from MasterKey and derivation index",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "accPubKey",
          "normalized": "MasterKey-\u003eKeyIndex-\u003eMaybe AccPubKey",
          "package": "haskoin-wallet",
          "partial": "Pub Key",
          "signature": "MasterKey-\u003eKeyIndex-\u003eMaybe AccPubKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:accPubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCyclic list of all valid \u003ccode\u003e\u003ca\u003eAccPubKey\u003c/a\u003e\u003c/code\u003e derived from a \u003ccode\u003e\u003ca\u003eMasterKey\u003c/a\u003e\u003c/code\u003e and\n starting from an offset index.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "accPubKeys",
          "package": "haskoin-wallet",
          "signature": "MasterKey -\u003e KeyIndex -\u003e [(AccPubKey, KeyIndex)]",
          "source": "src/Network-Haskoin-Wallet-Manager.html#accPubKeys",
          "type": "function"
        },
        "index": {
          "description": "Cyclic list of all valid AccPubKey derived from MasterKey and starting from an offset index",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "accPubKeys",
          "normalized": "MasterKey-\u003eKeyIndex-\u003e[(AccPubKey,KeyIndex)]",
          "package": "haskoin-wallet",
          "partial": "Pub Keys",
          "signature": "MasterKey-\u003eKeyIndex-\u003e[(AccPubKey,KeyIndex)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:accPubKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes an \u003ccode\u003e\u003ca\u003eAddress\u003c/a\u003e\u003c/code\u003e from an \u003ccode\u003e\u003ca\u003eAddrPubKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "addr",
          "package": "haskoin-wallet",
          "signature": "AddrPubKey -\u003e Address",
          "source": "src/Network-Haskoin-Wallet-Manager.html#addr",
          "type": "function"
        },
        "index": {
          "description": "Computes an Address from an AddrPubKey",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "addr",
          "normalized": "AddrPubKey-\u003eAddress",
          "package": "haskoin-wallet",
          "signature": "AddrPubKey-\u003eAddress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a transaction by providing a list of outpoints as inputs\n and a list of recipients addresses and amounts as outputs. \n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "buildAddrTx",
          "package": "haskoin-wallet",
          "signature": "[OutPoint] -\u003e [(String, Word64)] -\u003e Either String Tx",
          "source": "src/Network-Haskoin-Wallet-TxBuilder.html#buildAddrTx",
          "type": "function"
        },
        "index": {
          "description": "Build transaction by providing list of outpoints as inputs and list of recipients addresses and amounts as outputs",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "buildAddrTx",
          "normalized": "[OutPoint]-\u003e[(String,Word)]-\u003eEither String Tx",
          "package": "haskoin-wallet",
          "partial": "Addr Tx",
          "signature": "[OutPoint]-\u003e[(String,Word)]-\u003eEither String Tx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:buildAddrTx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a transaction by providing a list of outpoints as inputs\n and a list of \u003ccode\u003e\u003ca\u003eScriptOutput\u003c/a\u003e\u003c/code\u003e and amounts as outputs.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "buildTx",
          "package": "haskoin-wallet",
          "signature": "[OutPoint] -\u003e [(ScriptOutput, Word64)] -\u003e Either String Tx",
          "source": "src/Network-Haskoin-Wallet-TxBuilder.html#buildTx",
          "type": "function"
        },
        "index": {
          "description": "Build transaction by providing list of outpoints as inputs and list of ScriptOutput and amounts as outputs",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "buildTx",
          "normalized": "[OutPoint]-\u003e[(ScriptOutput,Word)]-\u003eEither String Tx",
          "package": "haskoin-wallet",
          "partial": "Tx",
          "signature": "[OutPoint]-\u003e[(ScriptOutput,Word)]-\u003eEither String Tx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:buildTx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCoin selection algorithm for normal (non-multisig) transactions. This\n function returns the selected coins together with the amount of change to\n send back to yourself, taking the fee into account.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "chooseCoins",
          "package": "haskoin-wallet",
          "signature": "Word64-\u003e Word64-\u003e [Coin]-\u003e Either String ([Coin], Word64)",
          "type": "function"
        },
        "index": {
          "description": "Coin selection algorithm for normal non-multisig transactions This function returns the selected coins together with the amount of change to send back to yourself taking the fee into account",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "chooseCoins",
          "normalized": "Word-\u003eWord-\u003e[Coin]-\u003eEither String([Coin],Word)",
          "package": "haskoin-wallet",
          "partial": "Coins",
          "signature": "Word-\u003eWord-\u003e[Coin]-\u003eEither String([Coin],Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:chooseCoins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCoin selection algorithm for multisignature transactions. This function\n returns the selected coins together with the amount of change to send back\n to yourself, taking the fee into account. This function assumes all the \n coins are script hash outputs that send funds to a multisignature address.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "chooseMSCoins",
          "package": "haskoin-wallet",
          "signature": "Word64-\u003e Word64-\u003e (Int, Int)-\u003e [Coin]-\u003e Either String ([Coin], Word64)",
          "type": "function"
        },
        "index": {
          "description": "Coin selection algorithm for multisignature transactions This function returns the selected coins together with the amount of change to send back to yourself taking the fee into account This function assumes all the coins are script hash outputs that send funds to multisignature address",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "chooseMSCoins",
          "normalized": "Word-\u003eWord-\u003e(Int,Int)-\u003e[Coin]-\u003eEither String([Coin],Word)",
          "package": "haskoin-wallet",
          "partial": "MSCoins",
          "signature": "Word-\u003eWord-\u003e(Int,Int)-\u003e[Coin]-\u003eEither String([Coin],Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:chooseMSCoins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrevious outpoint\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "coinOutPoint",
          "package": "haskoin-wallet",
          "signature": "OutPoint",
          "source": "src/Network-Haskoin-Wallet-TxBuilder.html#Coin",
          "type": "function"
        },
        "index": {
          "description": "Previous outpoint",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "coinOutPoint",
          "package": "haskoin-wallet",
          "partial": "Out Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:coinOutPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedeem script\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "coinRedeem",
          "package": "haskoin-wallet",
          "signature": "Maybe Script",
          "source": "src/Network-Haskoin-Wallet-TxBuilder.html#Coin",
          "type": "function"
        },
        "index": {
          "description": "Redeem script",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "coinRedeem",
          "package": "haskoin-wallet",
          "partial": "Redeem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:coinRedeem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransaction output\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "coinTxOut",
          "package": "haskoin-wallet",
          "signature": "TxOut",
          "source": "src/Network-Haskoin-Wallet-TxBuilder.html#Coin",
          "type": "function"
        },
        "index": {
          "description": "Transaction output",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "coinTxOut",
          "package": "haskoin-wallet",
          "partial": "Tx Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:coinTxOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive an extended public key from an extended private key. This function\n will preserve the depth, parent, index and chaincode fields of the extended\n private keys.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "deriveXPubKey",
          "package": "haskoin-wallet",
          "signature": "XPrvKey -\u003e XPubKey",
          "source": "src/Network-Haskoin-Wallet-Keys.html#deriveXPubKey",
          "type": "function"
        },
        "index": {
          "description": "Derive an extended public key from an extended private key This function will preserve the depth parent index and chaincode fields of the extended private keys",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "deriveXPubKey",
          "normalized": "XPrvKey-\u003eXPubKey",
          "package": "haskoin-wallet",
          "partial": "XPub Key",
          "signature": "XPrvKey-\u003eXPubKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:deriveXPubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign a transaction by providing the \u003ccode\u003e\u003ca\u003eSigInput\u003c/a\u003e\u003c/code\u003e signing paramters and \n a list of private keys. The signature is computed deterministically as\n defined in RFC-6979. The signature is computed within the \u003ccode\u003e\u003ca\u003eBuild\u003c/a\u003e\u003c/code\u003e monad\n to add information on wether the result was fully or partially signed.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "detSignTx",
          "package": "haskoin-wallet",
          "signature": "Tx-\u003e [SigInput]-\u003e [PrvKey]-\u003e Build Tx",
          "type": "function"
        },
        "index": {
          "description": "Sign transaction by providing the SigInput signing paramters and list of private keys The signature is computed deterministically as defined in RFC-6979 The signature is computed within the Build monad to add information on wether the result was fully or partially signed",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "detSignTx",
          "normalized": "Tx-\u003e[SigInput]-\u003e[PrvKey]-\u003eBuild Tx",
          "package": "haskoin-wallet",
          "partial": "Sign Tx",
          "signature": "Tx-\u003e[SigInput]-\u003e[PrvKey]-\u003eBuild Tx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:detSignTx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes an external base58 address from an \u003ccode\u003e\u003ca\u003eAccPubKey\u003c/a\u003e\u003c/code\u003e and a \n derivation index.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "extAddr",
          "package": "haskoin-wallet",
          "signature": "AccPubKey -\u003e KeyIndex -\u003e Maybe String",
          "source": "src/Network-Haskoin-Wallet-Manager.html#extAddr",
          "type": "function"
        },
        "index": {
          "description": "Computes an external base58 address from an AccPubKey and derivation index",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "extAddr",
          "normalized": "AccPubKey-\u003eKeyIndex-\u003eMaybe String",
          "package": "haskoin-wallet",
          "partial": "Addr",
          "signature": "AccPubKey-\u003eKeyIndex-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:extAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCyclic list of all external base58 addresses derived from a \u003ccode\u003e\u003ca\u003eAccPubKey\u003c/a\u003e\u003c/code\u003e\n and starting from an offset index.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "extAddrs",
          "package": "haskoin-wallet",
          "signature": "AccPubKey -\u003e KeyIndex -\u003e [(String, KeyIndex)]",
          "source": "src/Network-Haskoin-Wallet-Manager.html#extAddrs",
          "type": "function"
        },
        "index": {
          "description": "Cyclic list of all external base58 addresses derived from AccPubKey and starting from an offset index",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "extAddrs",
          "normalized": "AccPubKey-\u003eKeyIndex-\u003e[(String,KeyIndex)]",
          "package": "haskoin-wallet",
          "partial": "Addrs",
          "signature": "AccPubKey-\u003eKeyIndex-\u003e[(String,KeyIndex)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:extAddrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eextAddrs\u003c/a\u003e\u003c/code\u003e with the list reversed.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "extAddrs'",
          "package": "haskoin-wallet",
          "signature": "AccPubKey -\u003e KeyIndex -\u003e [(String, KeyIndex)]",
          "source": "src/Network-Haskoin-Wallet-Manager.html#extAddrs%27",
          "type": "function"
        },
        "index": {
          "description": "Same as extAddrs with the list reversed",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "extAddrs'",
          "normalized": "AccPubKey-\u003eKeyIndex-\u003e[(String,KeyIndex)]",
          "package": "haskoin-wallet",
          "partial": "Addrs'",
          "signature": "AccPubKey-\u003eKeyIndex-\u003e[(String,KeyIndex)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:extAddrs-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes an external base58 multisig address from an \u003ccode\u003e\u003ca\u003eAccPubKey\u003c/a\u003e\u003c/code\u003e, a\n list of thirdparty multisig keys and a derivation index.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "extMulSigAddr",
          "package": "haskoin-wallet",
          "signature": "AccPubKey -\u003e [XPubKey] -\u003e Int -\u003e KeyIndex -\u003e Maybe String",
          "source": "src/Network-Haskoin-Wallet-Manager.html#extMulSigAddr",
          "type": "function"
        },
        "index": {
          "description": "Computes an external base58 multisig address from an AccPubKey list of thirdparty multisig keys and derivation index",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "extMulSigAddr",
          "normalized": "AccPubKey-\u003e[XPubKey]-\u003eInt-\u003eKeyIndex-\u003eMaybe String",
          "package": "haskoin-wallet",
          "partial": "Mul Sig Addr",
          "signature": "AccPubKey-\u003e[XPubKey]-\u003eInt-\u003eKeyIndex-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:extMulSigAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCyclic list of all external base58 multisig addresses derived from\n an \u003ccode\u003e\u003ca\u003eAccPubKey\u003c/a\u003e\u003c/code\u003e and a list of thirdparty multisig keys. The list starts\n at an offset index.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "extMulSigAddrs",
          "package": "haskoin-wallet",
          "signature": "AccPubKey -\u003e [XPubKey] -\u003e Int -\u003e KeyIndex -\u003e [(String, KeyIndex)]",
          "source": "src/Network-Haskoin-Wallet-Manager.html#extMulSigAddrs",
          "type": "function"
        },
        "index": {
          "description": "Cyclic list of all external base58 multisig addresses derived from an AccPubKey and list of thirdparty multisig keys The list starts at an offset index",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "extMulSigAddrs",
          "normalized": "AccPubKey-\u003e[XPubKey]-\u003eInt-\u003eKeyIndex-\u003e[(String,KeyIndex)]",
          "package": "haskoin-wallet",
          "partial": "Mul Sig Addrs",
          "signature": "AccPubKey-\u003e[XPubKey]-\u003eInt-\u003eKeyIndex-\u003e[(String,KeyIndex)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:extMulSigAddrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes a list of external \u003ccode\u003e\u003ca\u003eAddrPubKey\u003c/a\u003e\u003c/code\u003e from an \u003ccode\u003e\u003ca\u003eAccPubKey\u003c/a\u003e\u003c/code\u003e, a list\n of thirdparty multisig keys and a derivation index. This is useful for \n computing the public keys associated with a derivation index for\n multisig accounts.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "extMulSigKey",
          "package": "haskoin-wallet",
          "signature": "AccPubKey -\u003e [XPubKey] -\u003e KeyIndex -\u003e Maybe [AddrPubKey]",
          "source": "src/Network-Haskoin-Wallet-Manager.html#extMulSigKey",
          "type": "function"
        },
        "index": {
          "description": "Computes list of external AddrPubKey from an AccPubKey list of thirdparty multisig keys and derivation index This is useful for computing the public keys associated with derivation index for multisig accounts",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "extMulSigKey",
          "normalized": "AccPubKey-\u003e[XPubKey]-\u003eKeyIndex-\u003eMaybe[AddrPubKey]",
          "package": "haskoin-wallet",
          "partial": "Mul Sig Key",
          "signature": "AccPubKey-\u003e[XPubKey]-\u003eKeyIndex-\u003eMaybe[AddrPubKey]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:extMulSigKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCyclic list of all external multisignature \u003ccode\u003e\u003ca\u003eAddrPubKey\u003c/a\u003e\u003c/code\u003e derivations \n starting from an offset index.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "extMulSigKeys",
          "package": "haskoin-wallet",
          "signature": "AccPubKey -\u003e [XPubKey] -\u003e KeyIndex -\u003e [([AddrPubKey], KeyIndex)]",
          "source": "src/Network-Haskoin-Wallet-Manager.html#extMulSigKeys",
          "type": "function"
        },
        "index": {
          "description": "Cyclic list of all external multisignature AddrPubKey derivations starting from an offset index",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "extMulSigKeys",
          "normalized": "AccPubKey-\u003e[XPubKey]-\u003eKeyIndex-\u003e[([AddrPubKey],KeyIndex)]",
          "package": "haskoin-wallet",
          "partial": "Mul Sig Keys",
          "signature": "AccPubKey-\u003e[XPubKey]-\u003eKeyIndex-\u003e[([AddrPubKey],KeyIndex)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:extMulSigKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes an external \u003ccode\u003e\u003ca\u003eAddrPrvKey\u003c/a\u003e\u003c/code\u003e from an \u003ccode\u003e\u003ca\u003eAccPrvKey\u003c/a\u003e\u003c/code\u003e and a derivation\n index.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "extPrvKey",
          "package": "haskoin-wallet",
          "signature": "AccPrvKey -\u003e KeyIndex -\u003e Maybe AddrPrvKey",
          "source": "src/Network-Haskoin-Wallet-Manager.html#extPrvKey",
          "type": "function"
        },
        "index": {
          "description": "Computes an external AddrPrvKey from an AccPrvKey and derivation index",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "extPrvKey",
          "normalized": "AccPrvKey-\u003eKeyIndex-\u003eMaybe AddrPrvKey",
          "package": "haskoin-wallet",
          "partial": "Prv Key",
          "signature": "AccPrvKey-\u003eKeyIndex-\u003eMaybe AddrPrvKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:extPrvKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCyclic list of all valid external \u003ccode\u003e\u003ca\u003eAddrPrvKey\u003c/a\u003e\u003c/code\u003e derived from a \u003ccode\u003e\u003ca\u003eAccPrvKey\u003c/a\u003e\u003c/code\u003e\n and starting from an offset index.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "extPrvKeys",
          "package": "haskoin-wallet",
          "signature": "AccPrvKey -\u003e KeyIndex -\u003e [(AddrPrvKey, KeyIndex)]",
          "source": "src/Network-Haskoin-Wallet-Manager.html#extPrvKeys",
          "type": "function"
        },
        "index": {
          "description": "Cyclic list of all valid external AddrPrvKey derived from AccPrvKey and starting from an offset index",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "extPrvKeys",
          "normalized": "AccPrvKey-\u003eKeyIndex-\u003e[(AddrPrvKey,KeyIndex)]",
          "package": "haskoin-wallet",
          "partial": "Prv Keys",
          "signature": "AccPrvKey-\u003eKeyIndex-\u003e[(AddrPrvKey,KeyIndex)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:extPrvKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes an external \u003ccode\u003e\u003ca\u003eAddrPubKey\u003c/a\u003e\u003c/code\u003e from an \u003ccode\u003e\u003ca\u003eAccPubKey\u003c/a\u003e\u003c/code\u003e and a derivation\n index.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "extPubKey",
          "package": "haskoin-wallet",
          "signature": "AccPubKey -\u003e KeyIndex -\u003e Maybe AddrPubKey",
          "source": "src/Network-Haskoin-Wallet-Manager.html#extPubKey",
          "type": "function"
        },
        "index": {
          "description": "Computes an external AddrPubKey from an AccPubKey and derivation index",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "extPubKey",
          "normalized": "AccPubKey-\u003eKeyIndex-\u003eMaybe AddrPubKey",
          "package": "haskoin-wallet",
          "partial": "Pub Key",
          "signature": "AccPubKey-\u003eKeyIndex-\u003eMaybe AddrPubKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:extPubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCyclic list of all valid external \u003ccode\u003e\u003ca\u003eAddrPubKey\u003c/a\u003e\u003c/code\u003e derived from a \u003ccode\u003e\u003ca\u003eAccPubKey\u003c/a\u003e\u003c/code\u003e\n and starting from an offset index.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "extPubKeys",
          "package": "haskoin-wallet",
          "signature": "AccPubKey -\u003e KeyIndex -\u003e [(AddrPubKey, KeyIndex)]",
          "source": "src/Network-Haskoin-Wallet-Manager.html#extPubKeys",
          "type": "function"
        },
        "index": {
          "description": "Cyclic list of all valid external AddrPubKey derived from AccPubKey and starting from an offset index",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "extPubKeys",
          "normalized": "AccPubKey-\u003eKeyIndex-\u003e[(AddrPubKey,KeyIndex)]",
          "package": "haskoin-wallet",
          "partial": "Pub Keys",
          "signature": "AccPubKey-\u003eKeyIndex-\u003e[(AddrPubKey,KeyIndex)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:extPubKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Wallet",
          "name": "getAccPrvKey",
          "package": "haskoin-wallet",
          "signature": "XPrvKey",
          "source": "src/Network-Haskoin-Wallet-Manager.html#AccPrvKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "getAccPrvKey",
          "package": "haskoin-wallet",
          "partial": "Acc Prv Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:getAccPrvKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Wallet",
          "name": "getAccPubKey",
          "package": "haskoin-wallet",
          "signature": "XPubKey",
          "source": "src/Network-Haskoin-Wallet-Manager.html#AccPubKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "getAccPubKey",
          "package": "haskoin-wallet",
          "partial": "Acc Pub Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:getAccPubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Wallet",
          "name": "getAddrPrvKey",
          "package": "haskoin-wallet",
          "signature": "XPrvKey",
          "source": "src/Network-Haskoin-Wallet-Manager.html#AddrPrvKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "getAddrPrvKey",
          "package": "haskoin-wallet",
          "partial": "Addr Prv Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:getAddrPrvKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Wallet",
          "name": "getAddrPubKey",
          "package": "haskoin-wallet",
          "signature": "XPubKey",
          "source": "src/Network-Haskoin-Wallet-Manager.html#AddrPubKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "getAddrPubKey",
          "package": "haskoin-wallet",
          "partial": "Addr Pub Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:getAddrPubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes an upper bound on the size of a transaction based on some known\n properties of the transaction.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "guessTxSize",
          "package": "haskoin-wallet",
          "signature": "Int-\u003e [(Int, Int)]-\u003e Int-\u003e Int-\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "Computes an upper bound on the size of transaction based on some known properties of the transaction",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "guessTxSize",
          "normalized": "Int-\u003e[(Int,Int)]-\u003eInt-\u003eInt-\u003eInt",
          "package": "haskoin-wallet",
          "partial": "Tx Size",
          "signature": "Int-\u003e[(Int,Int)]-\u003eInt-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:guessTxSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes an internal base58 addres from an \u003ccode\u003e\u003ca\u003eAccPubKey\u003c/a\u003e\u003c/code\u003e and a \n derivation index.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "intAddr",
          "package": "haskoin-wallet",
          "signature": "AccPubKey -\u003e KeyIndex -\u003e Maybe String",
          "source": "src/Network-Haskoin-Wallet-Manager.html#intAddr",
          "type": "function"
        },
        "index": {
          "description": "Computes an internal base58 addres from an AccPubKey and derivation index",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "intAddr",
          "normalized": "AccPubKey-\u003eKeyIndex-\u003eMaybe String",
          "package": "haskoin-wallet",
          "partial": "Addr",
          "signature": "AccPubKey-\u003eKeyIndex-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:intAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCyclic list of all internal base58 addresses derived from a \u003ccode\u003e\u003ca\u003eAccPubKey\u003c/a\u003e\u003c/code\u003e\n and starting from an offset index.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "intAddrs",
          "package": "haskoin-wallet",
          "signature": "AccPubKey -\u003e KeyIndex -\u003e [(String, KeyIndex)]",
          "source": "src/Network-Haskoin-Wallet-Manager.html#intAddrs",
          "type": "function"
        },
        "index": {
          "description": "Cyclic list of all internal base58 addresses derived from AccPubKey and starting from an offset index",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "intAddrs",
          "normalized": "AccPubKey-\u003eKeyIndex-\u003e[(String,KeyIndex)]",
          "package": "haskoin-wallet",
          "partial": "Addrs",
          "signature": "AccPubKey-\u003eKeyIndex-\u003e[(String,KeyIndex)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:intAddrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eintAddrs\u003c/a\u003e\u003c/code\u003e with the list reversed.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "intAddrs'",
          "package": "haskoin-wallet",
          "signature": "AccPubKey -\u003e KeyIndex -\u003e [(String, KeyIndex)]",
          "source": "src/Network-Haskoin-Wallet-Manager.html#intAddrs%27",
          "type": "function"
        },
        "index": {
          "description": "Same as intAddrs with the list reversed",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "intAddrs'",
          "normalized": "AccPubKey-\u003eKeyIndex-\u003e[(String,KeyIndex)]",
          "package": "haskoin-wallet",
          "partial": "Addrs'",
          "signature": "AccPubKey-\u003eKeyIndex-\u003e[(String,KeyIndex)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:intAddrs-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes an internal base58 multisig address from an \u003ccode\u003e\u003ca\u003eAccPubKey\u003c/a\u003e\u003c/code\u003e, a\n list of thirdparty multisig keys and a derivation index.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "intMulSigAddr",
          "package": "haskoin-wallet",
          "signature": "AccPubKey -\u003e [XPubKey] -\u003e Int -\u003e KeyIndex -\u003e Maybe String",
          "source": "src/Network-Haskoin-Wallet-Manager.html#intMulSigAddr",
          "type": "function"
        },
        "index": {
          "description": "Computes an internal base58 multisig address from an AccPubKey list of thirdparty multisig keys and derivation index",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "intMulSigAddr",
          "normalized": "AccPubKey-\u003e[XPubKey]-\u003eInt-\u003eKeyIndex-\u003eMaybe String",
          "package": "haskoin-wallet",
          "partial": "Mul Sig Addr",
          "signature": "AccPubKey-\u003e[XPubKey]-\u003eInt-\u003eKeyIndex-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:intMulSigAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCyclic list of all internal base58 multisig addresses derived from\n an \u003ccode\u003e\u003ca\u003eAccPubKey\u003c/a\u003e\u003c/code\u003e and a list of thirdparty multisig keys. The list starts\n at an offset index.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "intMulSigAddrs",
          "package": "haskoin-wallet",
          "signature": "AccPubKey -\u003e [XPubKey] -\u003e Int -\u003e KeyIndex -\u003e [(String, KeyIndex)]",
          "source": "src/Network-Haskoin-Wallet-Manager.html#intMulSigAddrs",
          "type": "function"
        },
        "index": {
          "description": "Cyclic list of all internal base58 multisig addresses derived from an AccPubKey and list of thirdparty multisig keys The list starts at an offset index",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "intMulSigAddrs",
          "normalized": "AccPubKey-\u003e[XPubKey]-\u003eInt-\u003eKeyIndex-\u003e[(String,KeyIndex)]",
          "package": "haskoin-wallet",
          "partial": "Mul Sig Addrs",
          "signature": "AccPubKey-\u003e[XPubKey]-\u003eInt-\u003eKeyIndex-\u003e[(String,KeyIndex)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:intMulSigAddrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes a list of internal \u003ccode\u003e\u003ca\u003eAddrPubKey\u003c/a\u003e\u003c/code\u003e from an \u003ccode\u003e\u003ca\u003eAccPubKey\u003c/a\u003e\u003c/code\u003e, a list\n of thirdparty multisig keys and a derivation index. This is useful for \n computing the public keys associated with a derivation index for\n multisig accounts.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "intMulSigKey",
          "package": "haskoin-wallet",
          "signature": "AccPubKey -\u003e [XPubKey] -\u003e KeyIndex -\u003e Maybe [AddrPubKey]",
          "source": "src/Network-Haskoin-Wallet-Manager.html#intMulSigKey",
          "type": "function"
        },
        "index": {
          "description": "Computes list of internal AddrPubKey from an AccPubKey list of thirdparty multisig keys and derivation index This is useful for computing the public keys associated with derivation index for multisig accounts",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "intMulSigKey",
          "normalized": "AccPubKey-\u003e[XPubKey]-\u003eKeyIndex-\u003eMaybe[AddrPubKey]",
          "package": "haskoin-wallet",
          "partial": "Mul Sig Key",
          "signature": "AccPubKey-\u003e[XPubKey]-\u003eKeyIndex-\u003eMaybe[AddrPubKey]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:intMulSigKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCyclic list of all internal multisignature \u003ccode\u003e\u003ca\u003eAddrPubKey\u003c/a\u003e\u003c/code\u003e derivations\n starting from an offset index.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "intMulSigKeys",
          "package": "haskoin-wallet",
          "signature": "AccPubKey -\u003e [XPubKey] -\u003e KeyIndex -\u003e [([AddrPubKey], KeyIndex)]",
          "source": "src/Network-Haskoin-Wallet-Manager.html#intMulSigKeys",
          "type": "function"
        },
        "index": {
          "description": "Cyclic list of all internal multisignature AddrPubKey derivations starting from an offset index",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "intMulSigKeys",
          "normalized": "AccPubKey-\u003e[XPubKey]-\u003eKeyIndex-\u003e[([AddrPubKey],KeyIndex)]",
          "package": "haskoin-wallet",
          "partial": "Mul Sig Keys",
          "signature": "AccPubKey-\u003e[XPubKey]-\u003eKeyIndex-\u003e[([AddrPubKey],KeyIndex)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:intMulSigKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes an internal \u003ccode\u003e\u003ca\u003eAddrPrvKey\u003c/a\u003e\u003c/code\u003e from an \u003ccode\u003e\u003ca\u003eAccPrvKey\u003c/a\u003e\u003c/code\u003e and a derivation\n index.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "intPrvKey",
          "package": "haskoin-wallet",
          "signature": "AccPrvKey -\u003e KeyIndex -\u003e Maybe AddrPrvKey",
          "source": "src/Network-Haskoin-Wallet-Manager.html#intPrvKey",
          "type": "function"
        },
        "index": {
          "description": "Computes an internal AddrPrvKey from an AccPrvKey and derivation index",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "intPrvKey",
          "normalized": "AccPrvKey-\u003eKeyIndex-\u003eMaybe AddrPrvKey",
          "package": "haskoin-wallet",
          "partial": "Prv Key",
          "signature": "AccPrvKey-\u003eKeyIndex-\u003eMaybe AddrPrvKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:intPrvKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCyclic list of all internal \u003ccode\u003e\u003ca\u003eAddrPrvKey\u003c/a\u003e\u003c/code\u003e derived from a \u003ccode\u003e\u003ca\u003eAccPrvKey\u003c/a\u003e\u003c/code\u003e and\n starting from an offset index.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "intPrvKeys",
          "package": "haskoin-wallet",
          "signature": "AccPrvKey -\u003e KeyIndex -\u003e [(AddrPrvKey, KeyIndex)]",
          "source": "src/Network-Haskoin-Wallet-Manager.html#intPrvKeys",
          "type": "function"
        },
        "index": {
          "description": "Cyclic list of all internal AddrPrvKey derived from AccPrvKey and starting from an offset index",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "intPrvKeys",
          "normalized": "AccPrvKey-\u003eKeyIndex-\u003e[(AddrPrvKey,KeyIndex)]",
          "package": "haskoin-wallet",
          "partial": "Prv Keys",
          "signature": "AccPrvKey-\u003eKeyIndex-\u003e[(AddrPrvKey,KeyIndex)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:intPrvKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes an internal \u003ccode\u003e\u003ca\u003eAddrPubKey\u003c/a\u003e\u003c/code\u003e from an \u003ccode\u003e\u003ca\u003eAccPubKey\u003c/a\u003e\u003c/code\u003e and a derivation\n index.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "intPubKey",
          "package": "haskoin-wallet",
          "signature": "AccPubKey -\u003e KeyIndex -\u003e Maybe AddrPubKey",
          "source": "src/Network-Haskoin-Wallet-Manager.html#intPubKey",
          "type": "function"
        },
        "index": {
          "description": "Computes an internal AddrPubKey from an AccPubKey and derivation index",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "intPubKey",
          "normalized": "AccPubKey-\u003eKeyIndex-\u003eMaybe AddrPubKey",
          "package": "haskoin-wallet",
          "partial": "Pub Key",
          "signature": "AccPubKey-\u003eKeyIndex-\u003eMaybe AddrPubKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:intPubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCyclic list of all internal \u003ccode\u003e\u003ca\u003eAddrPubKey\u003c/a\u003e\u003c/code\u003e derived from a \u003ccode\u003e\u003ca\u003eAccPubKey\u003c/a\u003e\u003c/code\u003e and\n starting from an offset index.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "intPubKeys",
          "package": "haskoin-wallet",
          "signature": "AccPubKey -\u003e KeyIndex -\u003e [(AddrPubKey, KeyIndex)]",
          "source": "src/Network-Haskoin-Wallet-Manager.html#intPubKeys",
          "type": "function"
        },
        "index": {
          "description": "Cyclic list of all internal AddrPubKey derived from AccPubKey and starting from an offset index",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "intPubKeys",
          "normalized": "AccPubKey-\u003eKeyIndex-\u003e[(AddrPubKey,KeyIndex)]",
          "package": "haskoin-wallet",
          "partial": "Pub Keys",
          "signature": "AccPubKey-\u003eKeyIndex-\u003e[(AddrPubKey,KeyIndex)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:intPubKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if all the inputs of a transactions are non-empty and if\n all multisignature inputs are fully signed.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "isTxComplete",
          "package": "haskoin-wallet",
          "signature": "Tx -\u003e Bool",
          "source": "src/Network-Haskoin-Wallet-TxBuilder.html#isTxComplete",
          "type": "function"
        },
        "index": {
          "description": "Returns True if all the inputs of transactions are non-empty and if all multisignature inputs are fully signed",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "isTxComplete",
          "normalized": "Tx-\u003eBool",
          "package": "haskoin-wallet",
          "partial": "Tx Complete",
          "signature": "Tx-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:isTxComplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a \u003ccode\u003e\u003ca\u003eMasterKey\u003c/a\u003e\u003c/code\u003e from an \u003ccode\u003e\u003ca\u003eXPrvKey\u003c/a\u003e\u003c/code\u003e. This function will fail if the\n extended private key does not have the properties of a \u003ccode\u003e\u003ca\u003eMasterKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "loadMasterKey",
          "package": "haskoin-wallet",
          "signature": "XPrvKey -\u003e Maybe MasterKey",
          "source": "src/Network-Haskoin-Wallet-Manager.html#loadMasterKey",
          "type": "function"
        },
        "index": {
          "description": "Load MasterKey from an XPrvKey This function will fail if the extended private key does not have the properties of MasterKey",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "loadMasterKey",
          "normalized": "XPrvKey-\u003eMaybe MasterKey",
          "package": "haskoin-wallet",
          "partial": "Master Key",
          "signature": "XPrvKey-\u003eMaybe MasterKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:loadMasterKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a private account key from an \u003ccode\u003e\u003ca\u003eXPrvKey\u003c/a\u003e\u003c/code\u003e. This function will fail if\n the extended private key does not have the properties of a \u003ccode\u003e\u003ca\u003eAccPrvKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "loadPrvAcc",
          "package": "haskoin-wallet",
          "signature": "XPrvKey -\u003e Maybe AccPrvKey",
          "source": "src/Network-Haskoin-Wallet-Manager.html#loadPrvAcc",
          "type": "function"
        },
        "index": {
          "description": "Load private account key from an XPrvKey This function will fail if the extended private key does not have the properties of AccPrvKey",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "loadPrvAcc",
          "normalized": "XPrvKey-\u003eMaybe AccPrvKey",
          "package": "haskoin-wallet",
          "partial": "Prv Acc",
          "signature": "XPrvKey-\u003eMaybe AccPrvKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:loadPrvAcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a public account key from an \u003ccode\u003e\u003ca\u003eXPubKey\u003c/a\u003e\u003c/code\u003e. This function will fail if\n the extended public key does not have the properties of a \u003ccode\u003e\u003ca\u003eAccPubKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "loadPubAcc",
          "package": "haskoin-wallet",
          "signature": "XPubKey -\u003e Maybe AccPubKey",
          "source": "src/Network-Haskoin-Wallet-Manager.html#loadPubAcc",
          "type": "function"
        },
        "index": {
          "description": "Load public account key from an XPubKey This function will fail if the extended public key does not have the properties of AccPubKey",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "loadPubAcc",
          "normalized": "XPubKey-\u003eMaybe AccPubKey",
          "package": "haskoin-wallet",
          "partial": "Pub Acc",
          "signature": "XPubKey-\u003eMaybe AccPubKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:loadPubAcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eMasterKey\u003c/a\u003e\u003c/code\u003e from a seed.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "makeMasterKey",
          "package": "haskoin-wallet",
          "signature": "ByteString -\u003e Maybe MasterKey",
          "source": "src/Network-Haskoin-Wallet-Manager.html#makeMasterKey",
          "type": "function"
        },
        "index": {
          "description": "Create MasterKey from seed",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "makeMasterKey",
          "normalized": "ByteString-\u003eMaybe MasterKey",
          "package": "haskoin-wallet",
          "partial": "Master Key",
          "signature": "ByteString-\u003eMaybe MasterKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:makeMasterKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a BIP32 compatible extended private key from a bytestring. This will\n produce a root node (depth=0 and parent=0).\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "makeXPrvKey",
          "package": "haskoin-wallet",
          "signature": "ByteString -\u003e Maybe XPrvKey",
          "source": "src/Network-Haskoin-Wallet-Keys.html#makeXPrvKey",
          "type": "function"
        },
        "index": {
          "description": "Build BIP32 compatible extended private key from bytestring This will produce root node depth and parent",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "makeXPrvKey",
          "normalized": "ByteString-\u003eMaybe XPrvKey",
          "package": "haskoin-wallet",
          "partial": "XPrv Key",
          "signature": "ByteString-\u003eMaybe XPrvKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:makeXPrvKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Wallet",
          "name": "masterKey",
          "package": "haskoin-wallet",
          "signature": "XPrvKey",
          "source": "src/Network-Haskoin-Wallet-Manager.html#MasterKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "masterKey",
          "package": "haskoin-wallet",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:masterKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a public, non-prime subkey derivation for all of the parent public\n keys in the input. This function will succeed only if the child key\n derivations for all the parent keys are valid. \n\u003c/p\u003e\u003cp\u003eThis function is intended to be used in the context of multisignature\n accounts. Parties exchanging their master public keys to create a\n multisignature account can then individually generate all the receiving\n multisignature addresses without further communication.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "mulSigSubKey",
          "package": "haskoin-wallet",
          "signature": "[XPubKey]-\u003e Word32-\u003e Maybe [XPubKey]",
          "type": "function"
        },
        "index": {
          "description": "Compute public non-prime subkey derivation for all of the parent public keys in the input This function will succeed only if the child key derivations for all the parent keys are valid This function is intended to be used in the context of multisignature accounts Parties exchanging their master public keys to create multisignature account can then individually generate all the receiving multisignature addresses without further communication",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "mulSigSubKey",
          "normalized": "[XPubKey]-\u003eWord-\u003eMaybe[XPubKey]",
          "package": "haskoin-wallet",
          "partial": "Sig Sub Key",
          "signature": "[XPubKey]-\u003eWord-\u003eMaybe[XPubKey]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:mulSigSubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCyclic list of all public, non-prime multisig key derivations of a list\n of parent keys starting from an offset index.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "mulSigSubKeys",
          "package": "haskoin-wallet",
          "signature": "[XPubKey] -\u003e Word32 -\u003e [([XPubKey], Word32)]",
          "source": "src/Network-Haskoin-Wallet-Keys.html#mulSigSubKeys",
          "type": "function"
        },
        "index": {
          "description": "Cyclic list of all public non-prime multisig key derivations of list of parent keys starting from an offset index",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "mulSigSubKeys",
          "normalized": "[XPubKey]-\u003eWord-\u003e[([XPubKey],Word)]",
          "package": "haskoin-wallet",
          "partial": "Sig Sub Keys",
          "signature": "[XPubKey]-\u003eWord-\u003e[([XPubKey],Word)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:mulSigSubKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a prime child key derivation. Prime derivations can only be\n computed for private keys. Prime derivations do not allow the parent \n public key to derive the child public keys. However, they are safer as\n a breach of the parent public key and child private keys does not lead\n to a breach of the parent private key. Given a parent key \u003cem\u003em\u003c/em\u003e and a\n derivation index \u003cem\u003ei\u003c/em\u003e, this function will compute m/i'/.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "primeSubKey",
          "package": "haskoin-wallet",
          "signature": "XPrvKey-\u003e Word32-\u003e Maybe XPrvKey",
          "type": "function"
        },
        "index": {
          "description": "Compute prime child key derivation Prime derivations can only be computed for private keys Prime derivations do not allow the parent public key to derive the child public keys However they are safer as breach of the parent public key and child private keys does not lead to breach of the parent private key Given parent key and derivation index this function will compute",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "primeSubKey",
          "normalized": "XPrvKey-\u003eWord-\u003eMaybe XPrvKey",
          "package": "haskoin-wallet",
          "partial": "Sub Key",
          "signature": "XPrvKey-\u003eWord-\u003eMaybe XPrvKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:primeSubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCyclic list of all prime child key derivations of a parent key starting\n from an offset index.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "primeSubKeys",
          "package": "haskoin-wallet",
          "signature": "XPrvKey -\u003e Word32 -\u003e [(XPrvKey, Word32)]",
          "source": "src/Network-Haskoin-Wallet-Keys.html#primeSubKeys",
          "type": "function"
        },
        "index": {
          "description": "Cyclic list of all prime child key derivations of parent key starting from an offset index",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "primeSubKeys",
          "normalized": "XPrvKey-\u003eWord-\u003e[(XPrvKey,Word)]",
          "package": "haskoin-wallet",
          "partial": "Sub Keys",
          "signature": "XPrvKey-\u003eWord-\u003e[(XPrvKey,Word)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:primeSubKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a private, non-prime child key derivation. A private non-prime\n derivation will allow the equivalent extended public key to derive the\n public key for this child. Given a parent key \u003cem\u003em\u003c/em\u003e and a derivation index \u003cem\u003ei\u003c/em\u003e,\n this function will compute m/i/. \n\u003c/p\u003e\u003cp\u003eNon-prime derivations allow for more flexibility such as read-only wallets.\n However, care must be taken not the leak both the parent extended public\n key and one of the extended child private keys as this would compromise the\n extended parent private key.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "prvSubKey",
          "package": "haskoin-wallet",
          "signature": "XPrvKey-\u003e Word32-\u003e Maybe XPrvKey",
          "type": "function"
        },
        "index": {
          "description": "Compute private non-prime child key derivation private non-prime derivation will allow the equivalent extended public key to derive the public key for this child Given parent key and derivation index this function will compute Non-prime derivations allow for more flexibility such as read-only wallets However care must be taken not the leak both the parent extended public key and one of the extended child private keys as this would compromise the extended parent private key",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "prvSubKey",
          "normalized": "XPrvKey-\u003eWord-\u003eMaybe XPrvKey",
          "package": "haskoin-wallet",
          "partial": "Sub Key",
          "signature": "XPrvKey-\u003eWord-\u003eMaybe XPrvKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:prvSubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCyclic list of all private non-prime child key derivations of a parent key\n starting from an offset index.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "prvSubKeys",
          "package": "haskoin-wallet",
          "signature": "XPrvKey -\u003e Word32 -\u003e [(XPrvKey, Word32)]",
          "source": "src/Network-Haskoin-Wallet-Keys.html#prvSubKeys",
          "type": "function"
        },
        "index": {
          "description": "Cyclic list of all private non-prime child key derivations of parent key starting from an offset index",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "prvSubKeys",
          "normalized": "XPrvKey-\u003eWord-\u003e[(XPrvKey,Word)]",
          "package": "haskoin-wallet",
          "partial": "Sub Keys",
          "signature": "XPrvKey-\u003eWord-\u003e[(XPrvKey,Word)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:prvSubKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a public, non-prime child key derivation. Given a parent key \u003cem\u003eM\u003c/em\u003e\n and a derivation index \u003cem\u003ei\u003c/em\u003e, this function will compute M/i/. \n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "pubSubKey",
          "package": "haskoin-wallet",
          "signature": "XPubKey-\u003e Word32-\u003e Maybe XPubKey",
          "type": "function"
        },
        "index": {
          "description": "Compute public non-prime child key derivation Given parent key and derivation index this function will compute",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "pubSubKey",
          "normalized": "XPubKey-\u003eWord-\u003eMaybe XPubKey",
          "package": "haskoin-wallet",
          "partial": "Sub Key",
          "signature": "XPubKey-\u003eWord-\u003eMaybe XPubKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:pubSubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCyclic list of all public non-prime child key derivations of a parent key\n starting from an offset index.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "pubSubKeys",
          "package": "haskoin-wallet",
          "signature": "XPubKey -\u003e Word32 -\u003e [(XPubKey, Word32)]",
          "source": "src/Network-Haskoin-Wallet-Keys.html#pubSubKeys",
          "type": "function"
        },
        "index": {
          "description": "Cyclic list of all public non-prime child key derivations of parent key starting from an offset index",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "pubSubKeys",
          "normalized": "XPubKey-\u003eWord-\u003e[(XPubKey,Word)]",
          "package": "haskoin-wallet",
          "partial": "Sub Keys",
          "signature": "XPubKey-\u003eWord-\u003e[(XPubKey,Word)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:pubSubKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReference to the transaction output to spend.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "sigDataOP",
          "package": "haskoin-wallet",
          "signature": "OutPoint",
          "source": "src/Network-Haskoin-Wallet-TxBuilder.html#SigInput",
          "type": "function"
        },
        "index": {
          "description": "Reference to the transaction output to spend",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "sigDataOP",
          "package": "haskoin-wallet",
          "partial": "Data OP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:sigDataOP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput script to spend.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "sigDataOut",
          "package": "haskoin-wallet",
          "signature": "Script",
          "source": "src/Network-Haskoin-Wallet-TxBuilder.html#SigInput",
          "type": "function"
        },
        "index": {
          "description": "Output script to spend",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "sigDataOut",
          "package": "haskoin-wallet",
          "partial": "Data Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:sigDataOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignature type.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "sigDataSH",
          "package": "haskoin-wallet",
          "signature": "SigHash",
          "source": "src/Network-Haskoin-Wallet-TxBuilder.html#SigInput",
          "type": "function"
        },
        "index": {
          "description": "Signature type",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "sigDataSH",
          "package": "haskoin-wallet",
          "partial": "Data SH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:sigDataSH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedeem script.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "sigRedeem",
          "package": "haskoin-wallet",
          "signature": "Script",
          "source": "src/Network-Haskoin-Wallet-TxBuilder.html#SigInput",
          "type": "function"
        },
        "index": {
          "description": "Redeem script",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "sigRedeem",
          "package": "haskoin-wallet",
          "partial": "Redeem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:sigRedeem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign a transaction by providing the \u003ccode\u003e\u003ca\u003eSigInput\u003c/a\u003e\u003c/code\u003e signing parameters and a\n list of private keys. The signature is computed within the \u003ccode\u003e\u003ca\u003eSecretT\u003c/a\u003e\u003c/code\u003e monad\n to generate the random signing nonce and within the \u003ccode\u003e\u003ca\u003eBuildT\u003c/a\u003e\u003c/code\u003e monad to add\n information on wether the result was fully or partially signed.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "signTx",
          "package": "haskoin-wallet",
          "signature": "Tx-\u003e [SigInput]-\u003e [PrvKey]-\u003e SecretT (BuildT m) Tx",
          "type": "function"
        },
        "index": {
          "description": "Sign transaction by providing the SigInput signing parameters and list of private keys The signature is computed within the SecretT monad to generate the random signing nonce and within the BuildT monad to add information on wether the result was fully or partially signed",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "signTx",
          "normalized": "Tx-\u003e[SigInput]-\u003e[PrvKey]-\u003eSecretT(BuildT a)Tx",
          "package": "haskoin-wallet",
          "partial": "Tx",
          "signature": "Tx-\u003e[SigInput]-\u003e[PrvKey]-\u003eSecretT(BuildT m)Tx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:signTx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChain code.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "xPrvChain",
          "package": "haskoin-wallet",
          "signature": "ChainCode",
          "source": "src/Network-Haskoin-Wallet-Keys.html#XPrvKey",
          "type": "function"
        },
        "index": {
          "description": "Chain code",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "xPrvChain",
          "package": "haskoin-wallet",
          "partial": "Prv Chain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:xPrvChain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the derivation index of this extended private key without the\n prime bit set.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "xPrvChild",
          "package": "haskoin-wallet",
          "signature": "XPrvKey -\u003e Word32",
          "source": "src/Network-Haskoin-Wallet-Keys.html#xPrvChild",
          "type": "function"
        },
        "index": {
          "description": "Returns the derivation index of this extended private key without the prime bit set",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "xPrvChild",
          "normalized": "XPrvKey-\u003eWord",
          "package": "haskoin-wallet",
          "partial": "Prv Child",
          "signature": "XPrvKey-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:xPrvChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDepth in the tree of key derivations.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "xPrvDepth",
          "package": "haskoin-wallet",
          "signature": "Word8",
          "source": "src/Network-Haskoin-Wallet-Keys.html#XPrvKey",
          "type": "function"
        },
        "index": {
          "description": "Depth in the tree of key derivations",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "xPrvDepth",
          "package": "haskoin-wallet",
          "partial": "Prv Depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:xPrvDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExports an extended private key to the BIP32 key export format (base 58).\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "xPrvExport",
          "package": "haskoin-wallet",
          "signature": "XPrvKey -\u003e String",
          "source": "src/Network-Haskoin-Wallet-Keys.html#xPrvExport",
          "type": "function"
        },
        "index": {
          "description": "Exports an extended private key to the BIP32 key export format base",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "xPrvExport",
          "normalized": "XPrvKey-\u003eString",
          "package": "haskoin-wallet",
          "partial": "Prv Export",
          "signature": "XPrvKey-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:xPrvExport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the key fingerprint of an extended private key.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "xPrvFP",
          "package": "haskoin-wallet",
          "signature": "XPrvKey -\u003e Word32",
          "source": "src/Network-Haskoin-Wallet-Keys.html#xPrvFP",
          "type": "function"
        },
        "index": {
          "description": "Computes the key fingerprint of an extended private key",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "xPrvFP",
          "normalized": "XPrvKey-\u003eWord",
          "package": "haskoin-wallet",
          "partial": "Prv FP",
          "signature": "XPrvKey-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:xPrvFP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the key identifier of an extended private key.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "xPrvID",
          "package": "haskoin-wallet",
          "signature": "XPrvKey -\u003e Hash160",
          "source": "src/Network-Haskoin-Wallet-Keys.html#xPrvID",
          "type": "function"
        },
        "index": {
          "description": "Computes the key identifier of an extended private key",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "xPrvID",
          "normalized": "XPrvKey-\u003eHash",
          "package": "haskoin-wallet",
          "partial": "Prv ID",
          "signature": "XPrvKey-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:xPrvID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecodes a BIP32 encoded extended private key. This function will fail if\n invalid base 58 characters are detected or if the checksum fails.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "xPrvImport",
          "package": "haskoin-wallet",
          "signature": "String -\u003e Maybe XPrvKey",
          "source": "src/Network-Haskoin-Wallet-Keys.html#xPrvImport",
          "type": "function"
        },
        "index": {
          "description": "Decodes BIP32 encoded extended private key This function will fail if invalid base characters are detected or if the checksum fails",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "xPrvImport",
          "normalized": "String-\u003eMaybe XPrvKey",
          "package": "haskoin-wallet",
          "partial": "Prv Import",
          "signature": "String-\u003eMaybe XPrvKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:xPrvImport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKey derivation index.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "xPrvIndex",
          "package": "haskoin-wallet",
          "signature": "Word32",
          "source": "src/Network-Haskoin-Wallet-Keys.html#XPrvKey",
          "type": "function"
        },
        "index": {
          "description": "Key derivation index",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "xPrvIndex",
          "package": "haskoin-wallet",
          "partial": "Prv Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:xPrvIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the extended private key was derived through a prime\n derivation.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "xPrvIsPrime",
          "package": "haskoin-wallet",
          "signature": "XPrvKey -\u003e Bool",
          "source": "src/Network-Haskoin-Wallet-Keys.html#xPrvIsPrime",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the extended private key was derived through prime derivation",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "xPrvIsPrime",
          "normalized": "XPrvKey-\u003eBool",
          "package": "haskoin-wallet",
          "partial": "Prv Is Prime",
          "signature": "XPrvKey-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:xPrvIsPrime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe private key of this extended key node.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "xPrvKey",
          "package": "haskoin-wallet",
          "signature": "PrvKey",
          "source": "src/Network-Haskoin-Wallet-Keys.html#XPrvKey",
          "type": "function"
        },
        "index": {
          "description": "The private key of this extended key node",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "xPrvKey",
          "package": "haskoin-wallet",
          "partial": "Prv Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:xPrvKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFingerprint of the parent key.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "xPrvParent",
          "package": "haskoin-wallet",
          "signature": "Word32",
          "source": "src/Network-Haskoin-Wallet-Keys.html#XPrvKey",
          "type": "function"
        },
        "index": {
          "description": "Fingerprint of the parent key",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "xPrvParent",
          "package": "haskoin-wallet",
          "partial": "Prv Parent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:xPrvParent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExport an extended private key to WIF (Wallet Import Format).\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "xPrvWIF",
          "package": "haskoin-wallet",
          "signature": "XPrvKey -\u003e String",
          "source": "src/Network-Haskoin-Wallet-Keys.html#xPrvWIF",
          "type": "function"
        },
        "index": {
          "description": "Export an extended private key to WIF Wallet Import Format",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "xPrvWIF",
          "normalized": "XPrvKey-\u003eString",
          "package": "haskoin-wallet",
          "partial": "Prv WIF",
          "signature": "XPrvKey-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:xPrvWIF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputer the \u003ccode\u003e\u003ca\u003eAddress\u003c/a\u003e\u003c/code\u003e of an extended public key.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "xPubAddr",
          "package": "haskoin-wallet",
          "signature": "XPubKey -\u003e Address",
          "source": "src/Network-Haskoin-Wallet-Keys.html#xPubAddr",
          "type": "function"
        },
        "index": {
          "description": "Computer the Address of an extended public key",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "xPubAddr",
          "normalized": "XPubKey-\u003eAddress",
          "package": "haskoin-wallet",
          "partial": "Pub Addr",
          "signature": "XPubKey-\u003eAddress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:xPubAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChain code.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "xPubChain",
          "package": "haskoin-wallet",
          "signature": "ChainCode",
          "source": "src/Network-Haskoin-Wallet-Keys.html#XPubKey",
          "type": "function"
        },
        "index": {
          "description": "Chain code",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "xPubChain",
          "package": "haskoin-wallet",
          "partial": "Pub Chain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:xPubChain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the derivation index of this extended public key without the prime\n bit set.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "xPubChild",
          "package": "haskoin-wallet",
          "signature": "XPubKey -\u003e Word32",
          "source": "src/Network-Haskoin-Wallet-Keys.html#xPubChild",
          "type": "function"
        },
        "index": {
          "description": "Returns the derivation index of this extended public key without the prime bit set",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "xPubChild",
          "normalized": "XPubKey-\u003eWord",
          "package": "haskoin-wallet",
          "partial": "Pub Child",
          "signature": "XPubKey-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:xPubChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDepth in the tree of key derivations.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "xPubDepth",
          "package": "haskoin-wallet",
          "signature": "Word8",
          "source": "src/Network-Haskoin-Wallet-Keys.html#XPubKey",
          "type": "function"
        },
        "index": {
          "description": "Depth in the tree of key derivations",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "xPubDepth",
          "package": "haskoin-wallet",
          "partial": "Pub Depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:xPubDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExports an extended public key to the BIP32 key export format (base 58).\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "xPubExport",
          "package": "haskoin-wallet",
          "signature": "XPubKey -\u003e String",
          "source": "src/Network-Haskoin-Wallet-Keys.html#xPubExport",
          "type": "function"
        },
        "index": {
          "description": "Exports an extended public key to the BIP32 key export format base",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "xPubExport",
          "normalized": "XPubKey-\u003eString",
          "package": "haskoin-wallet",
          "partial": "Pub Export",
          "signature": "XPubKey-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:xPubExport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the key fingerprint of an extended public key.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "xPubFP",
          "package": "haskoin-wallet",
          "signature": "XPubKey -\u003e Word32",
          "source": "src/Network-Haskoin-Wallet-Keys.html#xPubFP",
          "type": "function"
        },
        "index": {
          "description": "Computes the key fingerprint of an extended public key",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "xPubFP",
          "normalized": "XPubKey-\u003eWord",
          "package": "haskoin-wallet",
          "partial": "Pub FP",
          "signature": "XPubKey-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:xPubFP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the key identifier of an extended public key.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "xPubID",
          "package": "haskoin-wallet",
          "signature": "XPubKey -\u003e Hash160",
          "source": "src/Network-Haskoin-Wallet-Keys.html#xPubID",
          "type": "function"
        },
        "index": {
          "description": "Computes the key identifier of an extended public key",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "xPubID",
          "normalized": "XPubKey-\u003eHash",
          "package": "haskoin-wallet",
          "partial": "Pub ID",
          "signature": "XPubKey-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:xPubID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecodes a BIP32 encoded extended public key. This function will fail if\n invalid base 58 characters are detected or if the checksum fails.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "xPubImport",
          "package": "haskoin-wallet",
          "signature": "String -\u003e Maybe XPubKey",
          "source": "src/Network-Haskoin-Wallet-Keys.html#xPubImport",
          "type": "function"
        },
        "index": {
          "description": "Decodes BIP32 encoded extended public key This function will fail if invalid base characters are detected or if the checksum fails",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "xPubImport",
          "normalized": "String-\u003eMaybe XPubKey",
          "package": "haskoin-wallet",
          "partial": "Pub Import",
          "signature": "String-\u003eMaybe XPubKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:xPubImport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKey derivation index.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "xPubIndex",
          "package": "haskoin-wallet",
          "signature": "Word32",
          "source": "src/Network-Haskoin-Wallet-Keys.html#XPubKey",
          "type": "function"
        },
        "index": {
          "description": "Key derivation index",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "xPubIndex",
          "package": "haskoin-wallet",
          "partial": "Pub Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:xPubIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the extended public key was derived through a prime\n derivation.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "xPubIsPrime",
          "package": "haskoin-wallet",
          "signature": "XPubKey -\u003e Bool",
          "source": "src/Network-Haskoin-Wallet-Keys.html#xPubIsPrime",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the extended public key was derived through prime derivation",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "xPubIsPrime",
          "normalized": "XPubKey-\u003eBool",
          "package": "haskoin-wallet",
          "partial": "Pub Is Prime",
          "signature": "XPubKey-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:xPubIsPrime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe public key of this extended key node.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "xPubKey",
          "package": "haskoin-wallet",
          "signature": "PubKey",
          "source": "src/Network-Haskoin-Wallet-Keys.html#XPubKey",
          "type": "function"
        },
        "index": {
          "description": "The public key of this extended key node",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "xPubKey",
          "package": "haskoin-wallet",
          "partial": "Pub Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:xPubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFingerprint of the parent key.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Wallet",
          "name": "xPubParent",
          "package": "haskoin-wallet",
          "signature": "Word32",
          "source": "src/Network-Haskoin-Wallet-Keys.html#XPubKey",
          "type": "function"
        },
        "index": {
          "description": "Fingerprint of the parent key",
          "hierarchy": "Network Haskoin Wallet",
          "module": "Network.Haskoin.Wallet",
          "name": "xPubParent",
          "package": "haskoin-wallet",
          "partial": "Pub Parent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-wallet/docs/Network-Haskoin-Wallet.html#v:xPubParent"
      }
    }
  ]
]