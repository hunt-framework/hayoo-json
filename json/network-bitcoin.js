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
        "word": "network-bitcoin"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn interface to bitcoind's available block-chain-related RPC calls. The\n   implementation of these functions can be found at\n   \u003ca\u003ehttps://github.com/bitcoin/bitcoin/blob/master/src/rpcblockchain.cpp\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIf any APIs are missing, patches are always welcome. If you look at the\n   source of this module, you'll see that the interface code is trivial.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Bitcoin.BlockChain",
          "name": "BlockChain",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-BlockChain.html",
          "type": "module"
        },
        "index": {
          "description": "An interface to bitcoind available block-chain-related RPC calls The implementation of these functions can be found at https github.com bitcoin bitcoin blob master src rpcblockchain.cpp If any APIs are missing patches are always welcome If you look at the source of this module you ll see that the interface code is trivial",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "BlockChain",
          "package": "network-bitcoin",
          "partial": "Block Chain",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAuth\u003c/a\u003e\u003c/code\u003e describes authentication credentials for\n making API requests to the Bitcoin daemon.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.BlockChain",
          "name": "Auth",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Types.html#Auth",
          "type": "data"
        },
        "index": {
          "description": "Auth describes authentication credentials for making API requests to the Bitcoin daemon",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "Auth",
          "package": "network-bitcoin",
          "partial": "Auth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#t:Auth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of bitcoin money, represented with a fixed-point number.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.BlockChain",
          "name": "BTC",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Types.html#BTC",
          "type": "type"
        },
        "index": {
          "description": "The type of bitcoin money represented with fixed-point number",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "BTC",
          "package": "network-bitcoin",
          "partial": "BTC",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#t:BTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about a given block in the block chain.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.BlockChain",
          "name": "Block",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-BlockChain.html#Block",
          "type": "data"
        },
        "index": {
          "description": "Information about given block in the block chain",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "Block",
          "package": "network-bitcoin",
          "partial": "Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#t:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe hash of a given block.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.BlockChain",
          "name": "BlockHash",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-BlockChain.html#BlockHash",
          "type": "type"
        },
        "index": {
          "description": "The hash of given block",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "BlockHash",
          "package": "network-bitcoin",
          "partial": "Block Hash",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#t:BlockHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetails about an unspent transaction output.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.BlockChain",
          "name": "OutputInfo",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-BlockChain.html#OutputInfo",
          "type": "data"
        },
        "index": {
          "description": "Details about an unspent transaction output",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "OutputInfo",
          "package": "network-bitcoin",
          "partial": "Output Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#t:OutputInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation on the unspent transaction in the output set.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.BlockChain",
          "name": "OutputSetInfo",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-BlockChain.html#OutputSetInfo",
          "type": "data"
        },
        "index": {
          "description": "Information on the unspent transaction in the output set",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "OutputSetInfo",
          "package": "network-bitcoin",
          "partial": "Output Set Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#t:OutputSetInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hexadecimal string representation of a 256-bit unsigned integer.\n\u003c/p\u003e\u003cp\u003eThis integer is a unique transaction identifier.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.BlockChain",
          "name": "TransactionID",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Types.html#TransactionID",
          "type": "type"
        },
        "index": {
          "description": "hexadecimal string representation of bit unsigned integer This integer is unique transaction identifier",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "TransactionID",
          "package": "network-bitcoin",
          "partial": "Transaction ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#t:TransactionID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin.Mining\",\"Network.Bitcoin.Net\",\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin.Types\",\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "Auth",
          "package": "network-bitcoin",
          "signature": "Auth",
          "source": "src/Network-Bitcoin-Types.html#Auth",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:Auth\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:Auth\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:Auth\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:Auth\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Types.html#v:Auth\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:Auth\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:Auth\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "Auth",
          "package": "network-bitcoin",
          "partial": "Auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:Auth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "Block",
          "package": "network-bitcoin",
          "signature": "Block",
          "source": "src/Network-Bitcoin-BlockChain.html#Block",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:Block\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:Block\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "Block",
          "package": "network-bitcoin",
          "partial": "Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "OutputInfo",
          "package": "network-bitcoin",
          "signature": "OutputInfo",
          "source": "src/Network-Bitcoin-BlockChain.html#OutputInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:OutputInfo\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:OutputInfo\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "OutputInfo",
          "package": "network-bitcoin",
          "partial": "Output Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:OutputInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "OutputSetInfo",
          "package": "network-bitcoin",
          "signature": "OutputSetInfo",
          "source": "src/Network-Bitcoin-BlockChain.html#OutputSetInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:OutputSetInfo\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:OutputSetInfo\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "OutputSetInfo",
          "package": "network-bitcoin",
          "partial": "Output Set Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:OutputSetInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "blkBits",
          "package": "network-bitcoin",
          "signature": "HexString",
          "source": "src/Network-Bitcoin-BlockChain.html#Block",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:blkBits\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:blkBits\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "blkBits",
          "package": "network-bitcoin",
          "partial": "Bits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:blkBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of confirmations the block has.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "blkConfirmations",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-BlockChain.html#Block",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:blkConfirmations\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:blkConfirmations\"]"
        },
        "index": {
          "description": "The number of confirmations the block has",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "blkConfirmations",
          "package": "network-bitcoin",
          "partial": "Confirmations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:blkConfirmations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow hard was this block to mine?\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "blkDifficulty",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-BlockChain.html#Block",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:blkDifficulty\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:blkDifficulty\"]"
        },
        "index": {
          "description": "How hard was this block to mine",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "blkDifficulty",
          "package": "network-bitcoin",
          "partial": "Difficulty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:blkDifficulty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ca\u003eheight\u003c/a\u003e of the block. TODO: Clarify this.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "blkHeight",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-BlockChain.html#Block",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:blkHeight\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:blkHeight\"]"
        },
        "index": {
          "description": "The height of the block TODO Clarify this",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "blkHeight",
          "package": "network-bitcoin",
          "partial": "Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:blkHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe block's nonce.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "blkNonce",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-BlockChain.html#Block",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:blkNonce\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:blkNonce\"]"
        },
        "index": {
          "description": "The block nonce",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "blkNonce",
          "package": "network-bitcoin",
          "partial": "Nonce",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:blkNonce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size of the block.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "blkSize",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-BlockChain.html#Block",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:blkSize\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:blkSize\"]"
        },
        "index": {
          "description": "The size of the block",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "blkSize",
          "package": "network-bitcoin",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:blkSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe time it was mined.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "blkTime",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-BlockChain.html#Block",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:blkTime\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:blkTime\"]"
        },
        "index": {
          "description": "The time it was mined",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "blkTime",
          "package": "network-bitcoin",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:blkTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe version of the block.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "blkVersion",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-BlockChain.html#Block",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:blkVersion\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:blkVersion\"]"
        },
        "index": {
          "description": "The version of the block",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "blkVersion",
          "package": "network-bitcoin",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:blkVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "blockHash",
          "package": "network-bitcoin",
          "signature": "BlockHash",
          "source": "src/Network-Bitcoin-BlockChain.html#Block",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:blockHash\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:blockHash\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "blockHash",
          "package": "network-bitcoin",
          "partial": "Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:blockHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns details of a block with given block-hash.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "getBlock",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e BlockHash -\u003e IO Block",
          "source": "src/Network-Bitcoin-BlockChain.html#getBlock",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:getBlock\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:getBlock\"]"
        },
        "index": {
          "description": "Returns details of block with given block-hash",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "getBlock",
          "normalized": "Auth-\u003eBlockHash-\u003eIO Block",
          "package": "network-bitcoin",
          "partial": "Block",
          "signature": "Auth-\u003eBlockHash-\u003eIO Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:getBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of blocks in the longest block chain.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "getBlockCount",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e IO Integer",
          "source": "src/Network-Bitcoin-BlockChain.html#getBlockCount",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:getBlockCount\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:getBlockCount\"]"
        },
        "index": {
          "description": "Returns the number of blocks in the longest block chain",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "getBlockCount",
          "normalized": "Auth-\u003eIO Integer",
          "package": "network-bitcoin",
          "partial": "Block Count",
          "signature": "Auth-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:getBlockCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the hash of the block in best-block-chain at the given index.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "getBlockHash",
          "package": "network-bitcoin",
          "signature": "Auth-\u003e Integer-\u003e IO BlockHash",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:getBlockHash\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:getBlockHash\"]"
        },
        "index": {
          "description": "Returns the hash of the block in best-block-chain at the given index",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "getBlockHash",
          "normalized": "Auth-\u003eInteger-\u003eIO BlockHash",
          "package": "network-bitcoin",
          "partial": "Block Hash",
          "signature": "Auth-\u003eInteger-\u003eIO BlockHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:getBlockHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the proof-of-work difficulty as a multiple of the minimum\n   difficulty.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "getDifficulty",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e IO Integer",
          "source": "src/Network-Bitcoin-BlockChain.html#getDifficulty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:getDifficulty\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:getDifficulty\"]"
        },
        "index": {
          "description": "Returns the proof-of-work difficulty as multiple of the minimum difficulty",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "getDifficulty",
          "normalized": "Auth-\u003eIO Integer",
          "package": "network-bitcoin",
          "partial": "Difficulty",
          "signature": "Auth-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:getDifficulty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns details about an unspent transaction output.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "getOutputInfo",
          "package": "network-bitcoin",
          "signature": "Auth-\u003e TransactionID-\u003e Integer-\u003e IO OutputInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:getOutputInfo\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:getOutputInfo\"]"
        },
        "index": {
          "description": "Returns details about an unspent transaction output",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "getOutputInfo",
          "normalized": "Auth-\u003eTransactionID-\u003eInteger-\u003eIO OutputInfo",
          "package": "network-bitcoin",
          "partial": "Output Info",
          "signature": "Auth-\u003eTransactionID-\u003eInteger-\u003eIO OutputInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:getOutputInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns statistics about the unspent transaction output set.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "getOutputSetInfo",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e IO OutputSetInfo",
          "source": "src/Network-Bitcoin-BlockChain.html#getOutputSetInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:getOutputSetInfo\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:getOutputSetInfo\"]"
        },
        "index": {
          "description": "Returns statistics about the unspent transaction output set",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "getOutputSetInfo",
          "normalized": "Auth-\u003eIO OutputSetInfo",
          "package": "network-bitcoin",
          "partial": "Output Set Info",
          "signature": "Auth-\u003eIO OutputSetInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:getOutputSetInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all transaction identifiers in the memory pool.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "getRawMemoryPool",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e IO (Vector TransactionID)",
          "source": "src/Network-Bitcoin-BlockChain.html#getRawMemoryPool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:getRawMemoryPool\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:getRawMemoryPool\"]"
        },
        "index": {
          "description": "Returns all transaction identifiers in the memory pool",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "getRawMemoryPool",
          "normalized": "Auth-\u003eIO(Vector TransactionID)",
          "package": "network-bitcoin",
          "partial": "Raw Memory Pool",
          "signature": "Auth-\u003eIO(Vector TransactionID)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:getRawMemoryPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe hash of the block at the root of the merkle tree\n   which this block belongs to.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "merkleRoot",
          "package": "network-bitcoin",
          "signature": "BlockHash",
          "source": "src/Network-Bitcoin-BlockChain.html#Block",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:merkleRoot\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:merkleRoot\"]"
        },
        "index": {
          "description": "The hash of the block at the root of the merkle tree which this block belongs to",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "merkleRoot",
          "package": "network-bitcoin",
          "partial": "Root",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:merkleRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pointer to the next block in the chain.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "nextBlock",
          "package": "network-bitcoin",
          "signature": "Maybe BlockHash",
          "source": "src/Network-Bitcoin-BlockChain.html#Block",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:nextBlock\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:nextBlock\"]"
        },
        "index": {
          "description": "pointer to the next block in the chain",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "nextBlock",
          "package": "network-bitcoin",
          "partial": "Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:nextBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of transactions in the output set.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "numTransactions",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-BlockChain.html#OutputSetInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:numTransactions\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:numTransactions\"]"
        },
        "index": {
          "description": "The number of transactions in the output set",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "numTransactions",
          "package": "network-bitcoin",
          "partial": "Transactions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:numTransactions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe amount transferred.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "oiAmount",
          "package": "network-bitcoin",
          "signature": "BTC",
          "source": "src/Network-Bitcoin-BlockChain.html#OutputInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:oiAmount\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:oiAmount\"]"
        },
        "index": {
          "description": "The amount transferred",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "oiAmount",
          "package": "network-bitcoin",
          "partial": "Amount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:oiAmount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "oiBestBlock",
          "package": "network-bitcoin",
          "signature": "BlockHash",
          "source": "src/Network-Bitcoin-BlockChain.html#OutputInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:oiBestBlock\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:oiBestBlock\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "oiBestBlock",
          "package": "network-bitcoin",
          "partial": "Best Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:oiBestBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs this transaction part of the coin base?\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "oiCoinBase",
          "package": "network-bitcoin",
          "signature": "Bool",
          "source": "src/Network-Bitcoin-BlockChain.html#OutputInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:oiCoinBase\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:oiCoinBase\"]"
        },
        "index": {
          "description": "Is this transaction part of the coin base",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "oiCoinBase",
          "package": "network-bitcoin",
          "partial": "Coin Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:oiCoinBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of times this transaction has been confirmed.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "oiConfirmations",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-BlockChain.html#OutputInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:oiConfirmations\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:oiConfirmations\"]"
        },
        "index": {
          "description": "The number of times this transaction has been confirmed",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "oiConfirmations",
          "package": "network-bitcoin",
          "partial": "Confirmations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:oiConfirmations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe public key of the sender.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "oiScriptPubKey",
          "package": "network-bitcoin",
          "signature": "ScriptPubKey",
          "source": "src/Network-Bitcoin-BlockChain.html#OutputInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:oiScriptPubKey\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:oiScriptPubKey\"]"
        },
        "index": {
          "description": "The public key of the sender",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "oiScriptPubKey",
          "package": "network-bitcoin",
          "partial": "Script Pub Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:oiScriptPubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe version of this transaction.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "oiVersion",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-BlockChain.html#OutputInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:oiVersion\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:oiVersion\"]"
        },
        "index": {
          "description": "The version of this transaction",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "oiVersion",
          "package": "network-bitcoin",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:oiVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "osiBestBlock",
          "package": "network-bitcoin",
          "signature": "BlockHash",
          "source": "src/Network-Bitcoin-BlockChain.html#OutputSetInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:osiBestBlock\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:osiBestBlock\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "osiBestBlock",
          "package": "network-bitcoin",
          "partial": "Best Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:osiBestBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pointer to the previous block in the chain.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "prevBlock",
          "package": "network-bitcoin",
          "signature": "Maybe BlockHash",
          "source": "src/Network-Bitcoin-BlockChain.html#Block",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:prevBlock\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:prevBlock\"]"
        },
        "index": {
          "description": "pointer to the previous block in the chain",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "prevBlock",
          "package": "network-bitcoin",
          "partial": "Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:prevBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esame as bitcoind's \u003ccode\u003erpcpassword\u003c/code\u003e config\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin.Mining\",\"Network.Bitcoin.Net\",\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin.Types\",\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "rpcPassword",
          "package": "network-bitcoin",
          "signature": "Text",
          "source": "src/Network-Bitcoin-Types.html#Auth",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:rpcPassword\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:rpcPassword\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:rpcPassword\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:rpcPassword\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Types.html#v:rpcPassword\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:rpcPassword\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:rpcPassword\"]"
        },
        "index": {
          "description": "same as bitcoind rpcpassword config",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "rpcPassword",
          "package": "network-bitcoin",
          "partial": "Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:rpcPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL, with port, where bitcoind listens\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin.Mining\",\"Network.Bitcoin.Net\",\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin.Types\",\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "rpcUrl",
          "package": "network-bitcoin",
          "signature": "Text",
          "source": "src/Network-Bitcoin-Types.html#Auth",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:rpcUrl\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:rpcUrl\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:rpcUrl\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:rpcUrl\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Types.html#v:rpcUrl\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:rpcUrl\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:rpcUrl\"]"
        },
        "index": {
          "description": "URL with port where bitcoind listens",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "rpcUrl",
          "package": "network-bitcoin",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:rpcUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esame as bitcoind's \u003ccode\u003erpcuser\u003c/code\u003e config\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin.Mining\",\"Network.Bitcoin.Net\",\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin.Types\",\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "rpcUser",
          "package": "network-bitcoin",
          "signature": "Text",
          "source": "src/Network-Bitcoin-Types.html#Auth",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:rpcUser\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:rpcUser\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:rpcUser\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:rpcUser\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Types.html#v:rpcUser\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:rpcUser\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:rpcUser\"]"
        },
        "index": {
          "description": "same as bitcoind rpcuser config",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "rpcUser",
          "package": "network-bitcoin",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:rpcUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe serialized size of the output set.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "serializedSize",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-BlockChain.html#OutputSetInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:serializedSize\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:serializedSize\"]"
        },
        "index": {
          "description": "The serialized size of the output set",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "serializedSize",
          "package": "network-bitcoin",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:serializedSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the transaction fee will will pay to the network. Values of 0 are\n   rejected.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "setTransactionFee",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e BTC -\u003e IO ()",
          "source": "src/Network-Bitcoin-BlockChain.html#setTransactionFee",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:setTransactionFee\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:setTransactionFee\"]"
        },
        "index": {
          "description": "Sets the transaction fee will will pay to the network Values of are rejected",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "setTransactionFee",
          "normalized": "Auth-\u003eBTC-\u003eIO()",
          "package": "network-bitcoin",
          "partial": "Transaction Fee",
          "signature": "Auth-\u003eBTC-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:setTransactionFee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould this be a transaction, or transaction id?\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "subTransactions",
          "package": "network-bitcoin",
          "signature": "Vector TransactionID",
          "source": "src/Network-Bitcoin-BlockChain.html#Block",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:subTransactions\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:subTransactions\"]"
        },
        "index": {
          "description": "Should this be transaction or transaction id",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "subTransactions",
          "package": "network-bitcoin",
          "partial": "Transactions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:subTransactions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of outputs for the transactions.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.BlockChain\",\"Network.Bitcoin\"]",
          "name": "transactionOutputs",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-BlockChain.html#OutputSetInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:transactionOutputs\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:transactionOutputs\"]"
        },
        "index": {
          "description": "The number of outputs for the transactions",
          "hierarchy": "Network Bitcoin BlockChain",
          "module": "Network.Bitcoin.BlockChain",
          "name": "transactionOutputs",
          "package": "network-bitcoin",
          "partial": "Outputs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-BlockChain.html#v:transactionOutputs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn interface to bitcoind's available private key calls. The implementation\n   of these functions can be found at \u003ca\u003ehttps://github.com/bitcoin/bitcoin/blob/master/src/rpcdump.cpp\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIf any APIs are missing, patches are always welcome. If you look at the\n   source of this module, you'll see that the interface code is trivial.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Bitcoin.Dump",
          "name": "Dump",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Dump.html",
          "type": "module"
        },
        "index": {
          "description": "An interface to bitcoind available private key calls The implementation of these functions can be found at https github.com bitcoin bitcoin blob master src rpcdump.cpp If any APIs are missing patches are always welcome If you look at the source of this module you ll see that the interface code is trivial",
          "hierarchy": "Network Bitcoin Dump",
          "module": "Network.Bitcoin.Dump",
          "name": "Dump",
          "package": "network-bitcoin",
          "partial": "Dump",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Dump.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA textual representation of a bitcoin private key.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.Dump",
          "name": "PrivateKey",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Dump.html#PrivateKey",
          "type": "type"
        },
        "index": {
          "description": "textual representation of bitcoin private key",
          "hierarchy": "Network Bitcoin Dump",
          "module": "Network.Bitcoin.Dump",
          "name": "PrivateKey",
          "package": "network-bitcoin",
          "partial": "Private Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Dump.html#t:PrivateKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReveals the private key corresponding to the given address.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Dump\",\"Network.Bitcoin\"]",
          "name": "dumpPrivateKey",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e Address -\u003e IO PrivateKey",
          "source": "src/Network-Bitcoin-Dump.html#dumpPrivateKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Dump.html#v:dumpPrivateKey\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:dumpPrivateKey\"]"
        },
        "index": {
          "description": "Reveals the private key corresponding to the given address",
          "hierarchy": "Network Bitcoin Dump",
          "module": "Network.Bitcoin.Dump",
          "name": "dumpPrivateKey",
          "normalized": "Auth-\u003eAddress-\u003eIO PrivateKey",
          "package": "network-bitcoin",
          "partial": "Private Key",
          "signature": "Auth-\u003eAddress-\u003eIO PrivateKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Dump.html#v:dumpPrivateKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a private key (as returned by dumpprivkey) to your wallet.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Dump\",\"Network.Bitcoin\"]",
          "name": "importPrivateKey",
          "package": "network-bitcoin",
          "signature": "Auth-\u003e PrivateKey-\u003e Maybe Account-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Dump.html#v:importPrivateKey\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:importPrivateKey\"]"
        },
        "index": {
          "description": "Adds private key as returned by dumpprivkey to your wallet",
          "hierarchy": "Network Bitcoin Dump",
          "module": "Network.Bitcoin.Dump",
          "name": "importPrivateKey",
          "normalized": "Auth-\u003ePrivateKey-\u003eMaybe Account-\u003eIO()",
          "package": "network-bitcoin",
          "partial": "Private Key",
          "signature": "Auth-\u003ePrivateKey-\u003eMaybe Account-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Dump.html#v:importPrivateKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe API exposed in this module should be considered unstable, and is\n   subject to change between minor revisions.\n\u003c/p\u003e\u003cp\u003eIf the version number is a.b.c.d, and either a or b changes, then the\n   module's whole API may have changed (if only b changes, then it was\n   probably a minor change).\n\u003c/p\u003e\u003cp\u003eIf c changed, then only the internal API may change. The rest of the\n   module is guaranteed to be stable.\n\u003c/p\u003e\u003cp\u003eIf only d changes, then there were no user-facing code changes made.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Bitcoin.Internal",
          "name": "Internal",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "The API exposed in this module should be considered unstable and is subject to change between minor revisions If the version number is a.b.c.d and either or changes then the module whole API may have changed if only changes then it was probably minor change If changed then only the internal API may change The rest of the module is guaranteed to be stable If only changes then there were no user-facing code changes made",
          "hierarchy": "Network Bitcoin Internal",
          "module": "Network.Bitcoin.Internal",
          "name": "Internal",
          "package": "network-bitcoin",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper for a vector of address:amount pairs. The RPC expects that as\n   an object of \u003ca\u003eaddress\u003c/a\u003e:\u003ca\u003eamount\u003c/a\u003e pairs, instead of a vector. So that's what\n   we give them with AddrAddress's ToJSON.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.Internal",
          "name": "AddrAddress",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Internal.html#AddrAddress",
          "type": "newtype"
        },
        "index": {
          "description": "wrapper for vector of address amount pairs The RPC expects that as an object of address amount pairs instead of vector So that what we give them with AddrAddress ToJSON",
          "hierarchy": "Network Bitcoin Internal",
          "module": "Network.Bitcoin.Internal",
          "name": "AddrAddress",
          "package": "network-bitcoin",
          "partial": "Addr Address",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Internal.html#t:AddrAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA response from bitcoind will contain the result of the JSON-RPC call, and\n   an error. The error should be null if a valid response was received.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.Internal",
          "name": "BitcoinRpcResponse",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Internal.html#BitcoinRpcResponse",
          "type": "data"
        },
        "index": {
          "description": "response from bitcoind will contain the result of the JSON-RPC call and an error The error should be null if valid response was received",
          "hierarchy": "Network Bitcoin Internal",
          "module": "Network.Bitcoin.Internal",
          "name": "BitcoinRpcResponse",
          "package": "network-bitcoin",
          "partial": "Bitcoin Rpc Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Internal.html#t:BitcoinRpcResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted from JSON, with the possibility of\n failure.\n\u003c/p\u003e\u003cp\u003eWhen writing an instance, use \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003emzero\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e to make a\n conversion fail, e.g. if an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e is missing a required key, or\n the value is of the wrong type.\n\u003c/p\u003e\u003cp\u003eAn example type and instance:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE OverloadedStrings #-}\n\ndata Coord { x :: Double, y :: Double }\n\ninstance FromJSON Coord where\n   parseJSON (\u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e v) = Coord    \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e\n                          v \u003ccode\u003e\u003ca\u003e.:\u003c/a\u003e\u003c/code\u003e \"x\" \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e\n                          v \u003ccode\u003e\u003ca\u003e.:\u003c/a\u003e\u003c/code\u003e \"y\"\n\n-- A non-\u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e value is of the wrong type, so use \u003ccode\u003emzero\u003c/code\u003e to fail.\n   parseJSON _          = \u003ccode\u003emzero\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eNote the use of the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension which enables\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e values to be written as string literals.\n\u003c/p\u003e\u003cp\u003eInstead of manually writing your \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e instance, there are three options\n to do it automatically:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.Aeson.TH\u003c/a\u003e provides template-haskell functions which will derive an\n instance at compile-time. The generated instance is optimized for your type\n so will probably be more efficient than the following two options:\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.Aeson.Generic\u003c/a\u003e provides a generic \u003ccode\u003efromJSON\u003c/code\u003e function that parses to\n any type which is an instance of \u003ccode\u003eData\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If your compiler has support for the \u003ccode\u003eDeriveGeneric\u003c/code\u003e and\n \u003ccode\u003eDefaultSignatures\u003c/code\u003e language extensions, \u003ccode\u003eparseJSON\u003c/code\u003e will have a default\n generic implementation.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTo use this, simply add a \u003ccode\u003ederiving \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e clause to your datatype and\n declare a \u003ccode\u003eFromJSON\u003c/code\u003e instance for your datatype without giving a definition\n for \u003ccode\u003eparseJSON\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example the previous example can be simplified to just:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE DeriveGeneric #-}\n\nimport GHC.Generics\n\ndata Coord { x :: Double, y :: Double } deriving Generic\n\ninstance FromJSON Coord\n\u003c/pre\u003e\u003cp\u003eNote that, instead of using \u003ccode\u003eDefaultSignatures\u003c/code\u003e, it's also possible\n to parameterize the generic decoding using \u003ccode\u003e\u003ca\u003egenericParseJSON\u003c/a\u003e\u003c/code\u003e applied\n to your encoding/decoding \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n instance FromJSON Coord where\n     parseJSON = \u003ccode\u003e\u003ca\u003egenericParseJSON\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Network.Bitcoin.Internal",
          "name": "FromJSON",
          "package": "network-bitcoin",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted from JSON with the possibility of failure When writing an instance use empty mzero or fail to make conversion fail e.g if an Object is missing required key or the value is of the wrong type An example type and instance LANGUAGE OverloadedStrings data Coord Double Double instance FromJSON Coord where parseJSON Object Coord non Object value is of the wrong type so use mzero to fail parseJSON mzero Note the use of the OverloadedStrings language extension which enables Text values to be written as string literals Instead of manually writing your FromJSON instance there are three options to do it automatically Data.Aeson.TH provides template-haskell functions which will derive an instance at compile-time The generated instance is optimized for your type so will probably be more efficient than the following two options Data.Aeson.Generic provides generic fromJSON function that parses to any type which is an instance of Data If your compiler has support for the DeriveGeneric and DefaultSignatures language extensions parseJSON will have default generic implementation To use this simply add deriving Generic clause to your datatype and declare FromJSON instance for your datatype without giving definition for parseJSON For example the previous example can be simplified to just LANGUAGE DeriveGeneric import GHC.Generics data Coord Double Double deriving Generic instance FromJSON Coord Note that instead of using DefaultSignatures it also possible to parameterize the generic decoding using genericParseJSON applied to your encoding decoding Options instance FromJSON Coord where parseJSON genericParseJSON defaultOptions",
          "hierarchy": "Network Bitcoin Internal",
          "module": "Network.Bitcoin.Internal",
          "name": "FromJSON",
          "package": "network-bitcoin",
          "partial": "From JSON",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Internal.html#t:FromJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to allow \u003ca\u003enull\u003c/a\u003e to decode to a tuple.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.Internal",
          "name": "Nil",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Internal.html#Nil",
          "type": "data"
        },
        "index": {
          "description": "Used to allow null to decode to tuple",
          "hierarchy": "Network Bitcoin Internal",
          "module": "Network.Bitcoin.Internal",
          "name": "Nil",
          "package": "network-bitcoin",
          "partial": "Nil",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Internal.html#t:Nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space efficient, packed, unboxed Unicode text type.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.Internal",
          "name": "Text",
          "package": "network-bitcoin",
          "type": "data"
        },
        "index": {
          "description": "space efficient packed unboxed Unicode text type",
          "hierarchy": "Network Bitcoin Internal",
          "module": "Network.Bitcoin.Internal",
          "name": "Text",
          "package": "network-bitcoin",
          "partial": "Text",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Internal.html#t:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoxed vectors, supporting efficient slicing.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.Internal",
          "name": "Vector",
          "package": "network-bitcoin",
          "type": "data"
        },
        "index": {
          "description": "Boxed vectors supporting efficient slicing",
          "hierarchy": "Network Bitcoin Internal",
          "module": "Network.Bitcoin.Internal",
          "name": "Vector",
          "package": "network-bitcoin",
          "partial": "Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Internal.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Bitcoin.Internal",
          "name": "AA",
          "package": "network-bitcoin",
          "signature": "AA (Vector (Address, BTC))",
          "source": "src/Network-Bitcoin-Internal.html#AddrAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Bitcoin Internal",
          "module": "Network.Bitcoin.Internal",
          "name": "AA",
          "normalized": "AA(Vector(Address,BTC))",
          "package": "network-bitcoin",
          "partial": "AA",
          "signature": "AA(Vector(Address,BTC))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Internal.html#v:AA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Bitcoin.Internal",
          "name": "BitcoinRpcResponse",
          "package": "network-bitcoin",
          "signature": "BitcoinRpcResponse",
          "source": "src/Network-Bitcoin-Internal.html#BitcoinRpcResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Bitcoin Internal",
          "module": "Network.Bitcoin.Internal",
          "name": "BitcoinRpcResponse",
          "package": "network-bitcoin",
          "partial": "Bitcoin Rpc Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Internal.html#v:BitcoinRpcResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Bitcoin.Internal",
          "name": "Nil",
          "package": "network-bitcoin",
          "signature": "Nil",
          "source": "src/Network-Bitcoin-Internal.html#Nil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Bitcoin Internal",
          "module": "Network.Bitcoin.Internal",
          "name": "Nil",
          "package": "network-bitcoin",
          "partial": "Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Internal.html#v:Nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Bitcoin.Internal",
          "name": "btcError",
          "package": "network-bitcoin",
          "signature": "BitcoinRpcError",
          "source": "src/Network-Bitcoin-Internal.html#BitcoinRpcResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Bitcoin Internal",
          "module": "Network.Bitcoin.Internal",
          "name": "btcError",
          "package": "network-bitcoin",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Internal.html#v:btcError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Bitcoin.Internal",
          "name": "btcResult",
          "package": "network-bitcoin",
          "signature": "a",
          "source": "src/Network-Bitcoin-Internal.html#BitcoinRpcResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Bitcoin Internal",
          "module": "Network.Bitcoin.Internal",
          "name": "btcResult",
          "package": "network-bitcoin",
          "partial": "Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Internal.html#v:btcResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecallApi\u003c/a\u003e\u003c/code\u003e is a low-level interface for making authenticated API\n   calls to a Bitcoin daemon. The first argument specifies\n   authentication details (URL, username, password) and is often\n   curried for convenience:\n\u003c/p\u003e\u003cpre\u003e callBtc = callApi $ Auth \"http://127.0.0.1:8332\" \"user\" \"password\"\n\u003c/pre\u003e\u003cp\u003eThe second argument is the command name.  The third argument provides\n   parameters for the API call.\n\u003c/p\u003e\u003cpre\u003e let result = callBtc \"getbalance\" [ tj \"account-name\", tj 6 ]\n\u003c/pre\u003e\u003cp\u003eOn error, throws a \u003ccode\u003e\u003ca\u003eBitcoinException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.Internal",
          "name": "callApi",
          "package": "network-bitcoin",
          "signature": "Auth-\u003e Text-\u003e [Value]-\u003e IO v",
          "type": "function"
        },
        "index": {
          "description": "callApi is low-level interface for making authenticated API calls to Bitcoin daemon The first argument specifies authentication details URL username password and is often curried for convenience callBtc callApi Auth http user password The second argument is the command name The third argument provides parameters for the API call let result callBtc getbalance tj account-name tj On error throws BitcoinException",
          "hierarchy": "Network Bitcoin Internal",
          "module": "Network.Bitcoin.Internal",
          "name": "callApi",
          "normalized": "Auth-\u003eText-\u003e[Value]-\u003eIO a",
          "package": "network-bitcoin",
          "partial": "Api",
          "signature": "Auth-\u003eText-\u003e[Value]-\u003eIO v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Internal.html#v:callApi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ca\u003eno conversion needed\u003c/a\u003e implementation of callApi. THis lets us inline\n   and specialize callApi for its parameters, while keeping the bulk of the\n   work in this function shared.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.Internal",
          "name": "callApi'",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e ByteString -\u003e IO ByteString",
          "source": "src/Network-Bitcoin-Internal.html#callApi%27",
          "type": "function"
        },
        "index": {
          "description": "The no conversion needed implementation of callApi THis lets us inline and specialize callApi for its parameters while keeping the bulk of the work in this function shared",
          "hierarchy": "Network Bitcoin Internal",
          "module": "Network.Bitcoin.Internal",
          "name": "callApi'",
          "normalized": "Auth-\u003eByteString-\u003eIO ByteString",
          "package": "network-bitcoin",
          "partial": "Api'",
          "signature": "Auth-\u003eByteString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Internal.html#v:callApi-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Bitcoin.Internal",
          "name": "parseJSON",
          "package": "network-bitcoin",
          "signature": "Value -\u003e Parser a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Bitcoin Internal",
          "module": "Network.Bitcoin.Internal",
          "name": "parseJSON",
          "normalized": "Value-\u003eParser a",
          "package": "network-bitcoin",
          "partial": "JSON",
          "signature": "Value-\u003eParser a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Internal.html#v:parseJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handy shortcut for toJSON, because I'm lazy.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.Internal",
          "name": "tj",
          "package": "network-bitcoin",
          "signature": "a -\u003e Value",
          "source": "src/Network-Bitcoin-Internal.html#tj",
          "type": "function"
        },
        "index": {
          "description": "handy shortcut for toJSON because lazy",
          "hierarchy": "Network Bitcoin Internal",
          "module": "Network.Bitcoin.Internal",
          "name": "tj",
          "normalized": "a-\u003eValue",
          "package": "network-bitcoin",
          "signature": "a-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Internal.html#v:tj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Bitcoin.Internal",
          "name": "unNil",
          "package": "network-bitcoin",
          "signature": "()",
          "source": "src/Network-Bitcoin-Internal.html#Nil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Bitcoin Internal",
          "module": "Network.Bitcoin.Internal",
          "name": "unNil",
          "normalized": "()",
          "package": "network-bitcoin",
          "partial": "Nil",
          "signature": "()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Internal.html#v:unNil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn interface to bitcoind's available mining RPC calls. The implementation\n   of these functions can be found at \u003ca\u003ehttps://github.com/bitcoin/bitcoin/blob/master/src/rpcmining.cpp\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIf any APIs are missing, patches are always welcome. If you look at the\n   source of this module, you'll see that the interface code is trivial.\n\u003c/p\u003e\u003cp\u003eNote that it is highly discouraged to use bitcoind for actual bitcoin\n   mining. It uses the CPU for mining, which is much, much less power\n   efficient than GPU mining. If you're paying for power, you will not come\n   out ahead.\n\u003c/p\u003e\u003cp\u003eInstead, consider using a GPU miner listed at \u003ca\u003ehttps://en.bitcoin.it/wiki/Software#Mining_apps\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Bitcoin.Mining",
          "name": "Mining",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Mining.html",
          "type": "module"
        },
        "index": {
          "description": "An interface to bitcoind available mining RPC calls The implementation of these functions can be found at https github.com bitcoin bitcoin blob master src rpcmining.cpp If any APIs are missing patches are always welcome If you look at the source of this module you ll see that the interface code is trivial Note that it is highly discouraged to use bitcoind for actual bitcoin mining It uses the CPU for mining which is much much less power efficient than GPU mining If you re paying for power you will not come out ahead Instead consider using GPU miner listed at https en.bitcoin.it wiki Software Mining apps",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "Mining",
          "package": "network-bitcoin",
          "partial": "Mining",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAuth\u003c/a\u003e\u003c/code\u003e describes authentication credentials for\n making API requests to the Bitcoin daemon.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.Mining",
          "name": "Auth",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Types.html#Auth",
          "type": "data"
        },
        "index": {
          "description": "Auth describes authentication credentials for making API requests to the Bitcoin daemon",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "Auth",
          "package": "network-bitcoin",
          "partial": "Auth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#t:Auth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA template for constructing a block to work on.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ehttps://en.bitcoin.it/wiki/BIP_0022\u003c/a\u003e for the full specification.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.Mining",
          "name": "BlockTemplate",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Mining.html#BlockTemplate",
          "type": "data"
        },
        "index": {
          "description": "template for constructing block to work on See https en.bitcoin.it wiki BIP for the full specification",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "BlockTemplate",
          "package": "network-bitcoin",
          "partial": "Block Template",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#t:BlockTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Bitcoin.Mining",
          "name": "CoinBaseAux",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Mining.html#CoinBaseAux",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "CoinBaseAux",
          "package": "network-bitcoin",
          "partial": "Coin Base Aux",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#t:CoinBaseAux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe hash data returned from \u003ccode\u003e\u003ca\u003egetWork\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.Mining",
          "name": "HashData",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Mining.html#HashData",
          "type": "data"
        },
        "index": {
          "description": "The hash data returned from getWork",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "HashData",
          "package": "network-bitcoin",
          "partial": "Hash Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#t:HashData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation related to the current bitcoind mining operation.\n\u003c/p\u003e\u003cp\u003eIf a field is undocumented here, it's because I don't know what it means.\n   If you DO know what it means, I'd love it if you would submit a patch to\n   help complete this documentation.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.Mining",
          "name": "MiningInfo",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Mining.html#MiningInfo",
          "type": "data"
        },
        "index": {
          "description": "Information related to the current bitcoind mining operation If field is undocumented here it because don know what it means If you DO know what it means love it if you would submit patch to help complete this documentation",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "MiningInfo",
          "package": "network-bitcoin",
          "partial": "Mining Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#t:MiningInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA transaction to be included in the next block.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.Mining",
          "name": "Transaction",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Mining.html#Transaction",
          "type": "data"
        },
        "index": {
          "description": "transaction to be included in the next block",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "Transaction",
          "package": "network-bitcoin",
          "partial": "Transaction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#t:Transaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "BlockTemplate",
          "package": "network-bitcoin",
          "signature": "BlockTemplate",
          "source": "src/Network-Bitcoin-Mining.html#BlockTemplate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:BlockTemplate\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:BlockTemplate\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "BlockTemplate",
          "package": "network-bitcoin",
          "partial": "Block Template",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:BlockTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "CoinBaseAux",
          "package": "network-bitcoin",
          "signature": "CoinBaseAux",
          "source": "src/Network-Bitcoin-Mining.html#CoinBaseAux",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:CoinBaseAux\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:CoinBaseAux\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "CoinBaseAux",
          "package": "network-bitcoin",
          "partial": "Coin Base Aux",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:CoinBaseAux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "HashData",
          "package": "network-bitcoin",
          "signature": "HashData",
          "source": "src/Network-Bitcoin-Mining.html#HashData",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:HashData\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:HashData\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "HashData",
          "package": "network-bitcoin",
          "partial": "Hash Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:HashData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "MiningInfo",
          "package": "network-bitcoin",
          "signature": "MiningInfo",
          "source": "src/Network-Bitcoin-Mining.html#MiningInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:MiningInfo\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:MiningInfo\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "MiningInfo",
          "package": "network-bitcoin",
          "partial": "Mining Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:MiningInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "Transaction",
          "package": "network-bitcoin",
          "signature": "Transaction",
          "source": "src/Network-Bitcoin-Mining.html#Transaction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:Transaction\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:Transaction\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "Transaction",
          "package": "network-bitcoin",
          "partial": "Transaction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:Transaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "blockData",
          "package": "network-bitcoin",
          "signature": "HexString",
          "source": "src/Network-Bitcoin-Mining.html#HashData",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:blockData\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:blockData\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "blockData",
          "package": "network-bitcoin",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:blockData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "blockVersion",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Mining.html#BlockTemplate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:blockVersion\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:blockVersion\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "blockVersion",
          "package": "network-bitcoin",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:blockVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompressed target of the next block.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "btBits",
          "package": "network-bitcoin",
          "signature": "HexString",
          "source": "src/Network-Bitcoin-Mining.html#BlockTemplate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:btBits\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:btBits\"]"
        },
        "index": {
          "description": "Compressed target of the next block",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "btBits",
          "package": "network-bitcoin",
          "partial": "Bits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:btBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeight of the next block.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "btHeight",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Mining.html#BlockTemplate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:btHeight\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:btHeight\"]"
        },
        "index": {
          "description": "Height of the next block",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "btHeight",
          "package": "network-bitcoin",
          "partial": "Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:btHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHash target.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "btTarget",
          "package": "network-bitcoin",
          "signature": "HexString",
          "source": "src/Network-Bitcoin-Mining.html#BlockTemplate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:btTarget\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:btTarget\"]"
        },
        "index": {
          "description": "Hash target",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "btTarget",
          "package": "network-bitcoin",
          "partial": "Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:btTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "cbFlags",
          "package": "network-bitcoin",
          "signature": "HexString",
          "source": "src/Network-Bitcoin-Mining.html#CoinBaseAux",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:cbFlags\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:cbFlags\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "cbFlags",
          "package": "network-bitcoin",
          "partial": "Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:cbFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData that should be included in coinbase.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "coinBaseAux",
          "package": "network-bitcoin",
          "signature": "CoinBaseAux",
          "source": "src/Network-Bitcoin-Mining.html#BlockTemplate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:coinBaseAux\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:coinBaseAux\"]"
        },
        "index": {
          "description": "Data that should be included in coinbase",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "coinBaseAux",
          "package": "network-bitcoin",
          "partial": "Base Aux",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:coinBaseAux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum allowable input to coinbase transaction,\n   including the generation award and transaction fees.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "coinBaseValue",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Mining.html#BlockTemplate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:coinBaseValue\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:coinBaseValue\"]"
        },
        "index": {
          "description": "Maximum allowable input to coinbase transaction including the generation award and transaction fees",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "coinBaseValue",
          "package": "network-bitcoin",
          "partial": "Base Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:coinBaseValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent timestamp.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "curTime",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Mining.html#BlockTemplate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:curTime\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:curTime\"]"
        },
        "index": {
          "description": "Current timestamp",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "curTime",
          "package": "network-bitcoin",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:curTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size of the current block we're mining.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "currentBlockSize",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Mining.html#MiningInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:currentBlockSize\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:currentBlockSize\"]"
        },
        "index": {
          "description": "The size of the current block we re mining",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "currentBlockSize",
          "package": "network-bitcoin",
          "partial": "Block Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:currentBlockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "currentBlockTransaction",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Mining.html#MiningInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:currentBlockTransaction\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:currentBlockTransaction\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "currentBlockTransaction",
          "package": "network-bitcoin",
          "partial": "Block Transaction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:currentBlockTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "depends",
          "package": "network-bitcoin",
          "signature": "Vector Integer",
          "source": "src/Network-Bitcoin-Mining.html#Transaction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:depends\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:depends\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "depends",
          "package": "network-bitcoin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:depends"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow difficult mining currently is.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "difficulty",
          "package": "network-bitcoin",
          "signature": "Double",
          "source": "src/Network-Bitcoin-Mining.html#MiningInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:difficulty\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:difficulty\"]"
        },
        "index": {
          "description": "How difficult mining currently is",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "difficulty",
          "package": "network-bitcoin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:difficulty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow many processors have we limited bitcoin mining to?\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "generationProcessorLimit",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Mining.html#MiningInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:generationProcessorLimit\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:generationProcessorLimit\"]"
        },
        "index": {
          "description": "How many processors have we limited bitcoin mining to",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "generationProcessorLimit",
          "package": "network-bitcoin",
          "partial": "Processor Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:generationProcessorLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns data needed to construct a block to work on.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "getBlockTemplate",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e IO BlockTemplate",
          "source": "src/Network-Bitcoin-Mining.html#getBlockTemplate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:getBlockTemplate\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:getBlockTemplate\"]"
        },
        "index": {
          "description": "Returns data needed to construct block to work on",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "getBlockTemplate",
          "normalized": "Auth-\u003eIO BlockTemplate",
          "package": "network-bitcoin",
          "partial": "Block Template",
          "signature": "Auth-\u003eIO BlockTemplate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:getBlockTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether or not bitcoind is generating bitcoins.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "getGenerate",
          "package": "network-bitcoin",
          "signature": "Auth-\u003e IO Bool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:getGenerate\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:getGenerate\"]"
        },
        "index": {
          "description": "Returns whether or not bitcoind is generating bitcoins",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "getGenerate",
          "normalized": "Auth-\u003eIO Bool",
          "package": "network-bitcoin",
          "partial": "Generate",
          "signature": "Auth-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:getGenerate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a recent hashes per second performance measurement while\n   generating.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "getHashesPerSec",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e IO Integer",
          "source": "src/Network-Bitcoin-Mining.html#getHashesPerSec",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:getHashesPerSec\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:getHashesPerSec\"]"
        },
        "index": {
          "description": "Returns recent hashes per second performance measurement while generating",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "getHashesPerSec",
          "normalized": "Auth-\u003eIO Integer",
          "package": "network-bitcoin",
          "partial": "Hashes Per Sec",
          "signature": "Auth-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:getHashesPerSec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an object containing mining-related information.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "getMiningInfo",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e IO MiningInfo",
          "source": "src/Network-Bitcoin-Mining.html#getMiningInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:getMiningInfo\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:getMiningInfo\"]"
        },
        "index": {
          "description": "Returns an object containing mining-related information",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "getMiningInfo",
          "normalized": "Auth-\u003eIO MiningInfo",
          "package": "network-bitcoin",
          "partial": "Mining Info",
          "signature": "Auth-\u003eIO MiningInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:getMiningInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns formatted hash data to work on.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "getWork",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e IO HashData",
          "source": "src/Network-Bitcoin-Mining.html#getWork",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:getWork\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:getWork\"]"
        },
        "index": {
          "description": "Returns formatted hash data to work on",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "getWork",
          "normalized": "Auth-\u003eIO HashData",
          "package": "network-bitcoin",
          "partial": "Work",
          "signature": "Auth-\u003eIO HashData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:getWork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "hash1",
          "package": "network-bitcoin",
          "signature": "HexString",
          "source": "src/Network-Bitcoin-Mining.html#HashData",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:hash1\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:hash1\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "hash1",
          "package": "network-bitcoin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:hash1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow fast is the mining going?\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "hashesPerSecond",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Mining.html#MiningInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:hashesPerSecond\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:hashesPerSecond\"]"
        },
        "index": {
          "description": "How fast is the mining going",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "hashesPerSecond",
          "package": "network-bitcoin",
          "partial": "Per Second",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:hashesPerSecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLittle-endian hash target, formatted as a hexadecimal string.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "hdTarget",
          "package": "network-bitcoin",
          "signature": "HexString",
          "source": "src/Network-Bitcoin-Mining.html#HashData",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:hdTarget\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:hdTarget\"]"
        },
        "index": {
          "description": "Little-endian hash target formatted as hexadecimal string",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "hdTarget",
          "package": "network-bitcoin",
          "partial": "Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:hdTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAre we currently generating bitcoins?\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "isGenerating",
          "package": "network-bitcoin",
          "signature": "Bool",
          "source": "src/Network-Bitcoin-Mining.html#MiningInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:isGenerating\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:isGenerating\"]"
        },
        "index": {
          "description": "Are we currently generating bitcoins",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "isGenerating",
          "package": "network-bitcoin",
          "partial": "Generating",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:isGenerating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "midstate",
          "package": "network-bitcoin",
          "signature": "HexString",
          "source": "src/Network-Bitcoin-Mining.html#HashData",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:midstate\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:midstate\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "midstate",
          "package": "network-bitcoin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:midstate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimum timestamp appropriate for next block.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "minTime",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Mining.html#BlockTemplate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:minTime\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:minTime\"]"
        },
        "index": {
          "description": "Minimum timestamp appropriate for next block",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "minTime",
          "package": "network-bitcoin",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:minTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny mining errors that may have come up.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "miningErrors",
          "package": "network-bitcoin",
          "signature": "Text",
          "source": "src/Network-Bitcoin-Mining.html#MiningInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:miningErrors\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:miningErrors\"]"
        },
        "index": {
          "description": "Any mining errors that may have come up",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "miningErrors",
          "package": "network-bitcoin",
          "partial": "Errors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:miningErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAre we on the bitcoin test network (as opposed to the real\n   thing)?\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "miningOnTestNetwork",
          "package": "network-bitcoin",
          "signature": "Bool",
          "source": "src/Network-Bitcoin-Mining.html#MiningInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:miningOnTestNetwork\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:miningOnTestNetwork\"]"
        },
        "index": {
          "description": "Are we on the bitcoin test network as opposed to the real thing",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "miningOnTestNetwork",
          "package": "network-bitcoin",
          "partial": "On Test Network",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:miningOnTestNetwork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of blocks in our block-chain.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "nBlocks",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Mining.html#MiningInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:nBlocks\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:nBlocks\"]"
        },
        "index": {
          "description": "The number of blocks in our block-chain",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "nBlocks",
          "package": "network-bitcoin",
          "partial": "Blocks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:nBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRange of valid nonces.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "nonceRange",
          "package": "network-bitcoin",
          "signature": "HexString",
          "source": "src/Network-Bitcoin-Mining.html#BlockTemplate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:nonceRange\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:nonceRange\"]"
        },
        "index": {
          "description": "Range of valid nonces",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "nonceRange",
          "package": "network-bitcoin",
          "partial": "Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:nonceRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "pooledTransactions",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Mining.html#MiningInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:pooledTransactions\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:pooledTransactions\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "pooledTransactions",
          "package": "network-bitcoin",
          "partial": "Transactions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:pooledTransactions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHash of current highest block.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "previousBlockHash",
          "package": "network-bitcoin",
          "signature": "HexString",
          "source": "src/Network-Bitcoin-Mining.html#BlockTemplate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:previousBlockHash\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:previousBlockHash\"]"
        },
        "index": {
          "description": "Hash of current highest block",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "previousBlockHash",
          "package": "network-bitcoin",
          "partial": "Block Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:previousBlockHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eControls whether or not bitcoind is generating bitcoins.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "setGenerate",
          "package": "network-bitcoin",
          "signature": "Auth-\u003e Bool-\u003e Maybe Int-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:setGenerate\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:setGenerate\"]"
        },
        "index": {
          "description": "Controls whether or not bitcoind is generating bitcoins",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "setGenerate",
          "normalized": "Auth-\u003eBool-\u003eMaybe Int-\u003eIO()",
          "package": "network-bitcoin",
          "partial": "Generate",
          "signature": "Auth-\u003eBool-\u003eMaybe Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:setGenerate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "sigOps",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Mining.html#Transaction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:sigOps\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:sigOps\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "sigOps",
          "package": "network-bitcoin",
          "partial": "Ops",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:sigOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLimit of sigops in blocks.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "sigopLimit",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Mining.html#BlockTemplate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:sigopLimit\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:sigopLimit\"]"
        },
        "index": {
          "description": "Limit of sigops in blocks",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "sigopLimit",
          "package": "network-bitcoin",
          "partial": "Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:sigopLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLimit of block size.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "sizeLimit",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Mining.html#BlockTemplate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:sizeLimit\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:sizeLimit\"]"
        },
        "index": {
          "description": "Limit of block size",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "sizeLimit",
          "package": "network-bitcoin",
          "partial": "Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:sizeLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to solve the given block, and returns true if it was successful.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "solveBlock",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e HexString -\u003e IO Bool",
          "source": "src/Network-Bitcoin-Mining.html#solveBlock",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:solveBlock\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:solveBlock\"]"
        },
        "index": {
          "description": "Tries to solve the given block and returns true if it was successful",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "solveBlock",
          "normalized": "Auth-\u003eHexString-\u003eIO Bool",
          "package": "network-bitcoin",
          "partial": "Block",
          "signature": "Auth-\u003eHexString-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:solveBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to submit a new block to the network.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "submitBlock",
          "package": "network-bitcoin",
          "signature": "Auth-\u003e HexString-\u003e IO Bool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:submitBlock\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:submitBlock\"]"
        },
        "index": {
          "description": "Attempts to submit new block to the network",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "submitBlock",
          "normalized": "Auth-\u003eHexString-\u003eIO Bool",
          "package": "network-bitcoin",
          "partial": "Block",
          "signature": "Auth-\u003eHexString-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:submitBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContents of non-coinbase transactions that should be\n   included in the next block.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "transactionsToInclude",
          "package": "network-bitcoin",
          "signature": "Vector Transaction",
          "source": "src/Network-Bitcoin-Mining.html#BlockTemplate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:transactionsToInclude\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:transactionsToInclude\"]"
        },
        "index": {
          "description": "Contents of non-coinbase transactions that should be included in the next block",
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "transactionsToInclude",
          "package": "network-bitcoin",
          "partial": "To Include",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:transactionsToInclude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "txnData",
          "package": "network-bitcoin",
          "signature": "HexString",
          "source": "src/Network-Bitcoin-Mining.html#Transaction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:txnData\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:txnData\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "txnData",
          "package": "network-bitcoin",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:txnData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "txnFee",
          "package": "network-bitcoin",
          "signature": "Maybe Integer",
          "source": "src/Network-Bitcoin-Mining.html#Transaction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:txnFee\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:txnFee\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "txnFee",
          "package": "network-bitcoin",
          "partial": "Fee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:txnFee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.Mining\",\"Network.Bitcoin\"]",
          "name": "txnHash",
          "package": "network-bitcoin",
          "signature": "HexString",
          "source": "src/Network-Bitcoin-Mining.html#Transaction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:txnHash\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:txnHash\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin Mining",
          "module": "Network.Bitcoin.Mining",
          "name": "txnHash",
          "package": "network-bitcoin",
          "partial": "Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Mining.html#v:txnHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn interface to bitcoind's available network-related RPC calls.\n   The implementation of these functions can be found at\n   \u003ca\u003ehttps://github.com/bitcoin/bitcoin/blob/master/src/rpcnet.cpp\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIf any APIs are missing, patches are always welcome. If you look at the\n   source of this module, you'll see that the interface code is trivial.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Bitcoin.Net",
          "name": "Net",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Net.html",
          "type": "module"
        },
        "index": {
          "description": "An interface to bitcoind available network-related RPC calls The implementation of these functions can be found at https github.com bitcoin bitcoin blob master src rpcnet.cpp If any APIs are missing patches are always welcome If you look at the source of this module you ll see that the interface code is trivial",
          "hierarchy": "Network Bitcoin Net",
          "module": "Network.Bitcoin.Net",
          "name": "Net",
          "package": "network-bitcoin",
          "partial": "Net",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAuth\u003c/a\u003e\u003c/code\u003e describes authentication credentials for\n making API requests to the Bitcoin daemon.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.Net",
          "name": "Auth",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Types.html#Auth",
          "type": "data"
        },
        "index": {
          "description": "Auth describes authentication credentials for making API requests to the Bitcoin daemon",
          "hierarchy": "Network Bitcoin Net",
          "module": "Network.Bitcoin.Net",
          "name": "Auth",
          "package": "network-bitcoin",
          "partial": "Auth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#t:Auth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about a peer node of the Bitcoin network.\n\u003c/p\u003e\u003cp\u003eThe documentation for this data structure is incomplete, as I honestly\n   don't know what some of these fields are for. Patches are welcome!\n\u003c/p\u003e",
          "module": "Network.Bitcoin.Net",
          "name": "PeerInfo",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Net.html#PeerInfo",
          "type": "data"
        },
        "index": {
          "description": "Information about peer node of the Bitcoin network The documentation for this data structure is incomplete as honestly don know what some of these fields are for Patches are welcome",
          "hierarchy": "Network Bitcoin Net",
          "module": "Network.Bitcoin.Net",
          "name": "PeerInfo",
          "package": "network-bitcoin",
          "partial": "Peer Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#t:PeerInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.Net\",\"Network.Bitcoin\"]",
          "name": "PeerInfo",
          "package": "network-bitcoin",
          "signature": "PeerInfo",
          "source": "src/Network-Bitcoin-Net.html#PeerInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:PeerInfo\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:PeerInfo\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin Net",
          "module": "Network.Bitcoin.Net",
          "name": "PeerInfo",
          "package": "network-bitcoin",
          "partial": "Peer Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:PeerInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe IP:port of this peer, as a string.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Net\",\"Network.Bitcoin\"]",
          "name": "addressName",
          "package": "network-bitcoin",
          "signature": "Text",
          "source": "src/Network-Bitcoin-Net.html#PeerInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:addressName\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:addressName\"]"
        },
        "index": {
          "description": "The IP port of this peer as string",
          "hierarchy": "Network Bitcoin Net",
          "module": "Network.Bitcoin.Net",
          "name": "addressName",
          "package": "network-bitcoin",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:addressName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow many times has this peer behaved badly?\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Net\",\"Network.Bitcoin\"]",
          "name": "banScore",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Net.html#PeerInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:banScore\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:banScore\"]"
        },
        "index": {
          "description": "How many times has this peer behaved badly",
          "hierarchy": "Network Bitcoin Net",
          "module": "Network.Bitcoin.Net",
          "name": "banScore",
          "package": "network-bitcoin",
          "partial": "Score",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:banScore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.Net\",\"Network.Bitcoin\"]",
          "name": "bytesRecv",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Net.html#PeerInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:bytesRecv\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:bytesRecv\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin Net",
          "module": "Network.Bitcoin.Net",
          "name": "bytesRecv",
          "package": "network-bitcoin",
          "partial": "Recv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:bytesRecv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.Net\",\"Network.Bitcoin\"]",
          "name": "bytesSent",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Net.html#PeerInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:bytesSent\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:bytesSent\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin Net",
          "module": "Network.Bitcoin.Net",
          "name": "bytesSent",
          "package": "network-bitcoin",
          "partial": "Sent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:bytesSent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow long have we been connected to this peer (in\n   milliseconds).\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Net\",\"Network.Bitcoin\"]",
          "name": "connectionTime",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Net.html#PeerInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:connectionTime\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:connectionTime\"]"
        },
        "index": {
          "description": "How long have we been connected to this peer in milliseconds",
          "hierarchy": "Network Bitcoin Net",
          "module": "Network.Bitcoin.Net",
          "name": "connectionTime",
          "package": "network-bitcoin",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:connectionTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of connections to other nodes.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Net\",\"Network.Bitcoin\"]",
          "name": "getConnectionCount",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e IO Integer",
          "source": "src/Network-Bitcoin-Net.html#getConnectionCount",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:getConnectionCount\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:getConnectionCount\"]"
        },
        "index": {
          "description": "Returns the number of connections to other nodes",
          "hierarchy": "Network Bitcoin Net",
          "module": "Network.Bitcoin.Net",
          "name": "getConnectionCount",
          "normalized": "Auth-\u003eIO Integer",
          "package": "network-bitcoin",
          "partial": "Connection Count",
          "signature": "Auth-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:getConnectionCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns data about all connected peer nodes.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Net\",\"Network.Bitcoin\"]",
          "name": "getPeerInfo",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e IO [PeerInfo]",
          "source": "src/Network-Bitcoin-Net.html#getPeerInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:getPeerInfo\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:getPeerInfo\"]"
        },
        "index": {
          "description": "Returns data about all connected peer nodes",
          "hierarchy": "Network Bitcoin Net",
          "module": "Network.Bitcoin.Net",
          "name": "getPeerInfo",
          "normalized": "Auth-\u003eIO[PeerInfo]",
          "package": "network-bitcoin",
          "partial": "Peer Info",
          "signature": "Auth-\u003eIO[PeerInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:getPeerInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.Net\",\"Network.Bitcoin\"]",
          "name": "inbound",
          "package": "network-bitcoin",
          "signature": "Bool",
          "source": "src/Network-Bitcoin-Net.html#PeerInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:inbound\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:inbound\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin Net",
          "module": "Network.Bitcoin.Net",
          "name": "inbound",
          "package": "network-bitcoin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:inbound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelative to the first time we connected with this peer\n   (and in milliseconds), the last time we sent this peer any\n   data.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Net\",\"Network.Bitcoin\"]",
          "name": "lastRecv",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Net.html#PeerInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:lastRecv\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:lastRecv\"]"
        },
        "index": {
          "description": "Relative to the first time we connected with this peer and in milliseconds the last time we sent this peer any data",
          "hierarchy": "Network Bitcoin Net",
          "module": "Network.Bitcoin.Net",
          "name": "lastRecv",
          "package": "network-bitcoin",
          "partial": "Recv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:lastRecv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelative to the first time we conected with this peer (and in\n milliseconds), the last time we sent this peer any data.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Net\",\"Network.Bitcoin\"]",
          "name": "lastSend",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Net.html#PeerInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:lastSend\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:lastSend\"]"
        },
        "index": {
          "description": "Relative to the first time we conected with this peer and in milliseconds the last time we sent this peer any data",
          "hierarchy": "Network Bitcoin Net",
          "module": "Network.Bitcoin.Net",
          "name": "lastSend",
          "package": "network-bitcoin",
          "partial": "Send",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:lastSend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sub-version of the Bitcoin client the peer is running.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Net\",\"Network.Bitcoin\"]",
          "name": "peerSubversion",
          "package": "network-bitcoin",
          "signature": "Text",
          "source": "src/Network-Bitcoin-Net.html#PeerInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:peerSubversion\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:peerSubversion\"]"
        },
        "index": {
          "description": "The sub-version of the Bitcoin client the peer is running",
          "hierarchy": "Network Bitcoin Net",
          "module": "Network.Bitcoin.Net",
          "name": "peerSubversion",
          "package": "network-bitcoin",
          "partial": "Subversion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:peerSubversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe version of the Bitcion client the peer is running.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Net\",\"Network.Bitcoin\"]",
          "name": "peerVersion",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Net.html#PeerInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:peerVersion\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:peerVersion\"]"
        },
        "index": {
          "description": "The version of the Bitcion client the peer is running",
          "hierarchy": "Network Bitcoin Net",
          "module": "Network.Bitcoin.Net",
          "name": "peerVersion",
          "package": "network-bitcoin",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:peerVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.Net\",\"Network.Bitcoin\"]",
          "name": "services",
          "package": "network-bitcoin",
          "signature": "Text",
          "source": "src/Network-Bitcoin-Net.html#PeerInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:services\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:services\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin Net",
          "module": "Network.Bitcoin.Net",
          "name": "services",
          "package": "network-bitcoin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:services"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.Net\",\"Network.Bitcoin\"]",
          "name": "startingHeight",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Net.html#PeerInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:startingHeight\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:startingHeight\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin Net",
          "module": "Network.Bitcoin.Net",
          "name": "startingHeight",
          "package": "network-bitcoin",
          "partial": "Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Net.html#v:startingHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn interface to bitcoind's available raw transaction-related RPC calls.\n   The implementation of these functions can be found at\n   \u003ca\u003ehttps://github.com/bitcoin/bitcoin/blob/master/src/rpcrawtransaction.cpp\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIf any APIs are missing, patches are always welcome. If you look at the\n   source of this module, you'll see that the interface code is trivial.\n\u003c/p\u003e\u003cp\u003eAlso, documentation for this module is scarce. I would love the addition\n   of more documentation by anyone who knows what these things are.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "RawTransaction",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-RawTransaction.html",
          "type": "module"
        },
        "index": {
          "description": "An interface to bitcoind available raw transaction-related RPC calls The implementation of these functions can be found at https github.com bitcoin bitcoin blob master src rpcrawtransaction.cpp If any APIs are missing patches are always welcome If you look at the source of this module you ll see that the interface code is trivial Also documentation for this module is scarce would love the addition of more documentation by anyone who knows what these things are",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "RawTransaction",
          "package": "network-bitcoin",
          "partial": "Raw Transaction",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAuth\u003c/a\u003e\u003c/code\u003e describes authentication credentials for\n making API requests to the Bitcoin daemon.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "Auth",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Types.html#Auth",
          "type": "data"
        },
        "index": {
          "description": "Auth describes authentication credentials for making API requests to the Bitcoin daemon",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "Auth",
          "package": "network-bitcoin",
          "partial": "Auth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#t:Auth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation on a single block.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "BlockInfo",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-RawTransaction.html#BlockInfo",
          "type": "data"
        },
        "index": {
          "description": "Information on single block",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "BlockInfo",
          "package": "network-bitcoin",
          "partial": "Block Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#t:BlockInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA successfully decoded raw transaction, from a given serialized,\n   hex-encoded transaction.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "DecodedRawTransaction",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-RawTransaction.html#DecodedRawTransaction",
          "type": "data"
        },
        "index": {
          "description": "successfully decoded raw transaction from given serialized hex-encoded transaction",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "DecodedRawTransaction",
          "package": "network-bitcoin",
          "partial": "Decoded Raw Transaction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#t:DecodedRawTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA raw signed transaction contains the raw, signed hexstring and whether or\n   not this transaction has a complete signature set.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "RawSignedTransaction",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-RawTransaction.html#RawSignedTransaction",
          "type": "data"
        },
        "index": {
          "description": "raw signed transaction contains the raw signed hexstring and whether or not this transaction has complete signature set",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "RawSignedTransaction",
          "package": "network-bitcoin",
          "partial": "Raw Signed Transaction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#t:RawSignedTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust like most binary data retrieved from bitcoind, a raw transaction is\n   represented by a hexstring.\n\u003c/p\u003e\u003cp\u003eThis is a serialized, hex-encoded transaction.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "RawTransaction",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-RawTransaction.html#RawTransaction",
          "type": "type"
        },
        "index": {
          "description": "Just like most binary data retrieved from bitcoind raw transaction is represented by hexstring This is serialized hex-encoded transaction",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "RawTransaction",
          "package": "network-bitcoin",
          "partial": "Raw Transaction",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#t:RawTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe raw transaction info for a given transaction ID.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "RawTransactionInfo",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-RawTransaction.html#RawTransactionInfo",
          "type": "data"
        },
        "index": {
          "description": "The raw transaction info for given transaction ID",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "RawTransactionInfo",
          "package": "network-bitcoin",
          "partial": "Raw Transaction Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#t:RawTransactionInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA public key of someone we sent money to.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "ScriptPubKey",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-RawTransaction.html#ScriptPubKey",
          "type": "data"
        },
        "index": {
          "description": "public key of someone we sent money to",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "ScriptPubKey",
          "package": "network-bitcoin",
          "partial": "Script Pub Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#t:ScriptPubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA script signature.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "ScriptSig",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-RawTransaction.html#ScriptSig",
          "type": "data"
        },
        "index": {
          "description": "script signature",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "ScriptSig",
          "package": "network-bitcoin",
          "partial": "Script Sig",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#t:ScriptSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA transaction into an account. This can either be a coinbase transaction,\n   or a standard transaction with another account.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "TxIn",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-RawTransaction.html#TxIn",
          "type": "data"
        },
        "index": {
          "description": "transaction into an account This can either be coinbase transaction or standard transaction with another account",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "TxIn",
          "package": "network-bitcoin",
          "partial": "Tx In",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#t:TxIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA transaction out of an account.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "TxOut",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-RawTransaction.html#TxOut",
          "type": "data"
        },
        "index": {
          "description": "transaction out of an account",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "TxOut",
          "package": "network-bitcoin",
          "partial": "Tx Out",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#t:TxOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a transaction out.\n\u003c/p\u003e\u003cp\u003eMore documentation is needed here. Submit a patch if you know what this is\n   about!\n\u003c/p\u003e",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "TxnOutputType",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-RawTransaction.html#TxnOutputType",
          "type": "data"
        },
        "index": {
          "description": "The type of transaction out More documentation is needed here Submit patch if you know what this is about",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "TxnOutputType",
          "package": "network-bitcoin",
          "partial": "Txn Output Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#t:TxnOutputType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Bitcoin.RawTransaction",
          "name": "UnspentTransaction",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-RawTransaction.html#UnspentTransaction",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "UnspentTransaction",
          "package": "network-bitcoin",
          "partial": "Unspent Transaction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#t:UnspentTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWho can pay for a given transaction.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "WhoCanPay",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-RawTransaction.html#WhoCanPay",
          "type": "data"
        },
        "index": {
          "description": "Who can pay for given transaction",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "WhoCanPay",
          "package": "network-bitcoin",
          "partial": "Who Can Pay",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#t:WhoCanPay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "All",
          "package": "network-bitcoin",
          "signature": "All",
          "source": "src/Network-Bitcoin-RawTransaction.html#WhoCanPay",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:All\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:All\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "All",
          "package": "network-bitcoin",
          "partial": "All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:All"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "AllOrAnyoneCanPay",
          "package": "network-bitcoin",
          "signature": "AllOrAnyoneCanPay",
          "source": "src/Network-Bitcoin-RawTransaction.html#WhoCanPay",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:AllOrAnyoneCanPay\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:AllOrAnyoneCanPay\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "AllOrAnyoneCanPay",
          "package": "network-bitcoin",
          "partial": "All Or Anyone Can Pay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:AllOrAnyoneCanPay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "ConfirmedBlock",
          "package": "network-bitcoin",
          "signature": "ConfirmedBlock",
          "source": "src/Network-Bitcoin-RawTransaction.html#BlockInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:ConfirmedBlock\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:ConfirmedBlock\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "ConfirmedBlock",
          "package": "network-bitcoin",
          "partial": "Confirmed Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:ConfirmedBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "DecodedRawTransaction",
          "package": "network-bitcoin",
          "signature": "DecodedRawTransaction",
          "source": "src/Network-Bitcoin-RawTransaction.html#DecodedRawTransaction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:DecodedRawTransaction\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:DecodedRawTransaction\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "DecodedRawTransaction",
          "package": "network-bitcoin",
          "partial": "Decoded Raw Transaction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:DecodedRawTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "NonStandardScriptPubKey",
          "package": "network-bitcoin",
          "signature": "NonStandardScriptPubKey",
          "source": "src/Network-Bitcoin-RawTransaction.html#ScriptPubKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:NonStandardScriptPubKey\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:NonStandardScriptPubKey\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "NonStandardScriptPubKey",
          "package": "network-bitcoin",
          "partial": "Non Standard Script Pub Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:NonStandardScriptPubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "None",
          "package": "network-bitcoin",
          "signature": "None",
          "source": "src/Network-Bitcoin-RawTransaction.html#WhoCanPay",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:None\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:None\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "None",
          "package": "network-bitcoin",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:None"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "NoneOrAnyoneCanPay",
          "package": "network-bitcoin",
          "signature": "NoneOrAnyoneCanPay",
          "source": "src/Network-Bitcoin-RawTransaction.html#WhoCanPay",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:NoneOrAnyoneCanPay\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:NoneOrAnyoneCanPay\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "NoneOrAnyoneCanPay",
          "package": "network-bitcoin",
          "partial": "None Or Anyone Can Pay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:NoneOrAnyoneCanPay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "RawSignedTransaction",
          "package": "network-bitcoin",
          "signature": "RawSignedTransaction",
          "source": "src/Network-Bitcoin-RawTransaction.html#RawSignedTransaction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:RawSignedTransaction\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:RawSignedTransaction\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "RawSignedTransaction",
          "package": "network-bitcoin",
          "partial": "Raw Signed Transaction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:RawSignedTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "RawTransactionInfo",
          "package": "network-bitcoin",
          "signature": "RawTransactionInfo",
          "source": "src/Network-Bitcoin-RawTransaction.html#RawTransactionInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:RawTransactionInfo\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:RawTransactionInfo\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "RawTransactionInfo",
          "package": "network-bitcoin",
          "partial": "Raw Transaction Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:RawTransactionInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Bitcoin.RawTransaction",
          "name": "ScriptSig",
          "package": "network-bitcoin",
          "signature": "ScriptSig",
          "source": "src/Network-Bitcoin-RawTransaction.html#ScriptSig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "ScriptSig",
          "package": "network-bitcoin",
          "partial": "Script Sig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:ScriptSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "Single",
          "package": "network-bitcoin",
          "signature": "Single",
          "source": "src/Network-Bitcoin-RawTransaction.html#WhoCanPay",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:Single\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:Single\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "Single",
          "package": "network-bitcoin",
          "partial": "Single",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:Single"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "SingleOrAnyoneCanPay",
          "package": "network-bitcoin",
          "signature": "SingleOrAnyoneCanPay",
          "source": "src/Network-Bitcoin-RawTransaction.html#WhoCanPay",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:SingleOrAnyoneCanPay\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:SingleOrAnyoneCanPay\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "SingleOrAnyoneCanPay",
          "package": "network-bitcoin",
          "partial": "Single Or Anyone Can Pay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:SingleOrAnyoneCanPay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "StandardScriptPubKey",
          "package": "network-bitcoin",
          "signature": "StandardScriptPubKey",
          "source": "src/Network-Bitcoin-RawTransaction.html#ScriptPubKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:StandardScriptPubKey\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:StandardScriptPubKey\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "StandardScriptPubKey",
          "package": "network-bitcoin",
          "partial": "Standard Script Pub Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:StandardScriptPubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "TxCoinbase",
          "package": "network-bitcoin",
          "signature": "TxCoinbase",
          "source": "src/Network-Bitcoin-RawTransaction.html#TxIn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:TxCoinbase\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:TxCoinbase\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "TxCoinbase",
          "package": "network-bitcoin",
          "partial": "Tx Coinbase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:TxCoinbase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "TxIn",
          "package": "network-bitcoin",
          "signature": "TxIn",
          "source": "src/Network-Bitcoin-RawTransaction.html#TxIn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:TxIn\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:TxIn\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "TxIn",
          "package": "network-bitcoin",
          "partial": "Tx In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:TxIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "TxOut",
          "package": "network-bitcoin",
          "signature": "TxOut",
          "source": "src/Network-Bitcoin-RawTransaction.html#TxOut",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:TxOut\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:TxOut\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "TxOut",
          "package": "network-bitcoin",
          "partial": "Tx Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:TxOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJSON of \u003ca\u003emultisig\u003c/a\u003e received.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "TxnMultisig",
          "package": "network-bitcoin",
          "signature": "TxnMultisig",
          "source": "src/Network-Bitcoin-RawTransaction.html#TxnOutputType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:TxnMultisig\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:TxnMultisig\"]"
        },
        "index": {
          "description": "JSON of multisig received",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "TxnMultisig",
          "package": "network-bitcoin",
          "partial": "Txn Multisig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:TxnMultisig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJSON of \u003ca\u003epubkey\u003c/a\u003e received.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "TxnPubKey",
          "package": "network-bitcoin",
          "signature": "TxnPubKey",
          "source": "src/Network-Bitcoin-RawTransaction.html#TxnOutputType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:TxnPubKey\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:TxnPubKey\"]"
        },
        "index": {
          "description": "JSON of pubkey received",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "TxnPubKey",
          "package": "network-bitcoin",
          "partial": "Txn Pub Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:TxnPubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJSON of \u003ca\u003epubkeyhash\u003c/a\u003e received.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "TxnPubKeyHash",
          "package": "network-bitcoin",
          "signature": "TxnPubKeyHash",
          "source": "src/Network-Bitcoin-RawTransaction.html#TxnOutputType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:TxnPubKeyHash\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:TxnPubKeyHash\"]"
        },
        "index": {
          "description": "JSON of pubkeyhash received",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "TxnPubKeyHash",
          "package": "network-bitcoin",
          "partial": "Txn Pub Key Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:TxnPubKeyHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJSON of \u003ca\u003escripthash\u003c/a\u003e received.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "TxnScriptHash",
          "package": "network-bitcoin",
          "signature": "TxnScriptHash",
          "source": "src/Network-Bitcoin-RawTransaction.html#TxnOutputType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:TxnScriptHash\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:TxnScriptHash\"]"
        },
        "index": {
          "description": "JSON of scripthash received",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "TxnScriptHash",
          "package": "network-bitcoin",
          "partial": "Txn Script Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:TxnScriptHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unconfirmed block is boring, but a possibility.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "UnconfirmedBlock",
          "package": "network-bitcoin",
          "signature": "UnconfirmedBlock",
          "source": "src/Network-Bitcoin-RawTransaction.html#BlockInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:UnconfirmedBlock\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:UnconfirmedBlock\"]"
        },
        "index": {
          "description": "An unconfirmed block is boring but possibility",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "UnconfirmedBlock",
          "package": "network-bitcoin",
          "partial": "Unconfirmed Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:UnconfirmedBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "UnspentTransaction",
          "package": "network-bitcoin",
          "signature": "UnspentTransaction",
          "source": "src/Network-Bitcoin-RawTransaction.html#UnspentTransaction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:UnspentTransaction\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:UnspentTransaction\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "UnspentTransaction",
          "package": "network-bitcoin",
          "partial": "Unspent Transaction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:UnspentTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe JSON \u003ca\u003eblocktime\u003c/a\u003e field.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "blockTime",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-RawTransaction.html#BlockInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:blockTime\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:blockTime\"]"
        },
        "index": {
          "description": "The JSON blocktime field",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "blockTime",
          "package": "network-bitcoin",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:blockTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "cbTime",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-RawTransaction.html#BlockInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:cbTime\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:cbTime\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "cbTime",
          "package": "network-bitcoin",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:cbTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of confirmations a block has.\n   This will always be \u003e= 1.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "confirmations",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-RawTransaction.html#BlockInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:confirmations\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:confirmations\"]"
        },
        "index": {
          "description": "The number of confirmations block has This will always be",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "confirmations",
          "package": "network-bitcoin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:confirmations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a transaction spending given inputs, sending to given addresses.\n\u003c/p\u003e\u003cp\u003eNote that the transaction's inputs are not signed, and it is not stored\n   in the wallet or transmitted to the network.\n\u003c/p\u003e\u003cp\u003eAlso, there is no checking to see if it's possible to send that much to\n   the targets specified. In the future, such a scenario might throw an\n   exception.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "createRawTransaction",
          "package": "network-bitcoin",
          "signature": "Auth-\u003e Vector UnspentTransaction-\u003e Vector (Address, BTC)-\u003e IO HexString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:createRawTransaction\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:createRawTransaction\"]"
        },
        "index": {
          "description": "Create transaction spending given inputs sending to given addresses Note that the transaction inputs are not signed and it is not stored in the wallet or transmitted to the network Also there is no checking to see if it possible to send that much to the targets specified In the future such scenario might throw an exception",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "createRawTransaction",
          "normalized": "Auth-\u003eVector UnspentTransaction-\u003eVector(Address,BTC)-\u003eIO HexString",
          "package": "network-bitcoin",
          "partial": "Raw Transaction",
          "signature": "Auth-\u003eVector UnspentTransaction-\u003eVector(Address,BTC)-\u003eIO HexString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:createRawTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe raw transaction.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "decRaw",
          "package": "network-bitcoin",
          "signature": "RawTransaction",
          "source": "src/Network-Bitcoin-RawTransaction.html#DecodedRawTransaction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:decRaw\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:decRaw\"]"
        },
        "index": {
          "description": "The raw transaction",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "decRaw",
          "package": "network-bitcoin",
          "partial": "Raw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:decRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "decTxnLockTime",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-RawTransaction.html#DecodedRawTransaction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:decTxnLockTime\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:decTxnLockTime\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "decTxnLockTime",
          "package": "network-bitcoin",
          "partial": "Txn Lock Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:decTxnLockTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe transaction version number.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "decTxnVersion",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-RawTransaction.html#DecodedRawTransaction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:decTxnVersion\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:decTxnVersion\"]"
        },
        "index": {
          "description": "The transaction version number",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "decTxnVersion",
          "package": "network-bitcoin",
          "partial": "Txn Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:decTxnVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe vector of transactions in.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "decVin",
          "package": "network-bitcoin",
          "signature": "Vector TxIn",
          "source": "src/Network-Bitcoin-RawTransaction.html#DecodedRawTransaction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:decVin\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:decVin\"]"
        },
        "index": {
          "description": "The vector of transactions in",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "decVin",
          "package": "network-bitcoin",
          "partial": "Vin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:decVin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe vector of transactions out.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "decVout",
          "package": "network-bitcoin",
          "signature": "Vector TxOut",
          "source": "src/Network-Bitcoin-RawTransaction.html#DecodedRawTransaction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:decVout\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:decVout\"]"
        },
        "index": {
          "description": "The vector of transactions out",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "decVout",
          "package": "network-bitcoin",
          "partial": "Vout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:decVout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecodes a raw transaction into a more accessible data structure.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "decodeRawTransaction",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e RawTransaction -\u003e IO DecodedRawTransaction",
          "source": "src/Network-Bitcoin-RawTransaction.html#decodeRawTransaction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:decodeRawTransaction\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:decodeRawTransaction\"]"
        },
        "index": {
          "description": "Decodes raw transaction into more accessible data structure",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "decodeRawTransaction",
          "normalized": "Auth-\u003eRawTransaction-\u003eIO DecodedRawTransaction",
          "package": "network-bitcoin",
          "partial": "Raw Transaction",
          "signature": "Auth-\u003eRawTransaction-\u003eIO DecodedRawTransaction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:decodeRawTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a raw transaction from its unique ID.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "getRawTransaction",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e TransactionID -\u003e IO RawTransaction",
          "source": "src/Network-Bitcoin-RawTransaction.html#getRawTransaction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:getRawTransaction\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:getRawTransaction\"]"
        },
        "index": {
          "description": "Get raw transaction from its unique ID",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "getRawTransaction",
          "normalized": "Auth-\u003eTransactionID-\u003eIO RawTransaction",
          "package": "network-bitcoin",
          "partial": "Raw Transaction",
          "signature": "Auth-\u003eTransactionID-\u003eIO RawTransaction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:getRawTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet raw transaction info for a given transaction ID. The data structure\n   returned is quite sprawling and undocumented, so any patches to help\n   simplify things would be greatly appreciated.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "getRawTransactionInfo",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e TransactionID -\u003e IO RawTransactionInfo",
          "source": "src/Network-Bitcoin-RawTransaction.html#getRawTransactionInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:getRawTransactionInfo\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:getRawTransactionInfo\"]"
        },
        "index": {
          "description": "Get raw transaction info for given transaction ID The data structure returned is quite sprawling and undocumented so any patches to help simplify things would be greatly appreciated",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "getRawTransactionInfo",
          "normalized": "Auth-\u003eTransactionID-\u003eIO RawTransactionInfo",
          "package": "network-bitcoin",
          "partial": "Raw Transaction Info",
          "signature": "Auth-\u003eTransactionID-\u003eIO RawTransactionInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:getRawTransactionInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "hasCompleteSigSet",
          "package": "network-bitcoin",
          "signature": "Bool",
          "source": "src/Network-Bitcoin-RawTransaction.html#RawSignedTransaction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:hasCompleteSigSet\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:hasCompleteSigSet\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "hasCompleteSigSet",
          "package": "network-bitcoin",
          "partial": "Complete Sig Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:hasCompleteSigSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an array of unspent transaction outputs with between minconf and\n   maxconf (inclusive) confirmations. If addresses are given, the result will\n   be filtered to include only those addresses.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "listUnspent",
          "package": "network-bitcoin",
          "signature": "Auth-\u003e Maybe Int-\u003e Maybe Int-\u003e Vector Address-\u003e IO (Vector UnspentTransaction)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:listUnspent\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:listUnspent\"]"
        },
        "index": {
          "description": "Returns an array of unspent transaction outputs with between minconf and maxconf inclusive confirmations If addresses are given the result will be filtered to include only those addresses",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "listUnspent",
          "normalized": "Auth-\u003eMaybe Int-\u003eMaybe Int-\u003eVector Address-\u003eIO(Vector UnspentTransaction)",
          "package": "network-bitcoin",
          "partial": "Unspent",
          "signature": "Auth-\u003eMaybe Int-\u003eMaybe Int-\u003eVector Address-\u003eIO(Vector UnspentTransaction)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:listUnspent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe JSON \u003ca\u003easm\u003c/a\u003e field.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "nspkAsm",
          "package": "network-bitcoin",
          "signature": "HexString",
          "source": "src/Network-Bitcoin-RawTransaction.html#ScriptPubKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:nspkAsm\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:nspkAsm\"]"
        },
        "index": {
          "description": "The JSON asm field",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "nspkAsm",
          "package": "network-bitcoin",
          "partial": "Asm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:nspkAsm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe JSON \u003ca\u003ehex\u003c/a\u003e field.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "nspkHex",
          "package": "network-bitcoin",
          "signature": "HexString",
          "source": "src/Network-Bitcoin-RawTransaction.html#ScriptPubKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:nspkHex\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:nspkHex\"]"
        },
        "index": {
          "description": "The JSON hex field",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "nspkHex",
          "package": "network-bitcoin",
          "partial": "Hex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:nspkHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "numOut",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-RawTransaction.html#TxIn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:numOut\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:numOut\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "numOut",
          "package": "network-bitcoin",
          "partial": "Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:numOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "outIdx",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-RawTransaction.html#UnspentTransaction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:outIdx\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:outIdx\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "outIdx",
          "package": "network-bitcoin",
          "partial": "Idx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:outIdx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe raw transaction.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "raw",
          "package": "network-bitcoin",
          "signature": "RawTransaction",
          "source": "src/Network-Bitcoin-RawTransaction.html#RawTransactionInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:raw\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:raw\"]"
        },
        "index": {
          "description": "The raw transaction",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "raw",
          "package": "network-bitcoin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:raw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe transaction's block's info.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "rawBlockInfo",
          "package": "network-bitcoin",
          "signature": "BlockInfo",
          "source": "src/Network-Bitcoin-RawTransaction.html#RawTransactionInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:rawBlockInfo\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:rawBlockInfo\"]"
        },
        "index": {
          "description": "The transaction block info",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "rawBlockInfo",
          "package": "network-bitcoin",
          "partial": "Block Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:rawBlockInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "rawSigned",
          "package": "network-bitcoin",
          "signature": "HexString",
          "source": "src/Network-Bitcoin-RawTransaction.html#RawSignedTransaction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:rawSigned\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:rawSigned\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "rawSigned",
          "package": "network-bitcoin",
          "partial": "Signed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:rawSigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe hash of the block that was used for this\n   transaction.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "rawTxBlockHash",
          "package": "network-bitcoin",
          "signature": "HexString",
          "source": "src/Network-Bitcoin-RawTransaction.html#RawTransactionInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:rawTxBlockHash\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:rawTxBlockHash\"]"
        },
        "index": {
          "description": "The hash of the block that was used for this transaction",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "rawTxBlockHash",
          "package": "network-bitcoin",
          "partial": "Tx Block Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:rawTxBlockHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "redeemScript",
          "package": "network-bitcoin",
          "signature": "Maybe HexString",
          "source": "src/Network-Bitcoin-RawTransaction.html#UnspentTransaction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:redeemScript\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:redeemScript\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "redeemScript",
          "package": "network-bitcoin",
          "partial": "Script",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:redeemScript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of required signatures.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "requiredSigs",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-RawTransaction.html#ScriptPubKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:requiredSigs\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:requiredSigs\"]"
        },
        "index": {
          "description": "The number of required signatures",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "requiredSigs",
          "package": "network-bitcoin",
          "partial": "Sigs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:requiredSigs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe public key of the account we sent the money to.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "scriptPubKey",
          "package": "network-bitcoin",
          "signature": "ScriptPubKey",
          "source": "src/Network-Bitcoin-RawTransaction.html#TxOut",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:scriptPubKey\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:scriptPubKey\"]"
        },
        "index": {
          "description": "The public key of the account we sent the money to",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "scriptPubKey",
          "package": "network-bitcoin",
          "partial": "Pub Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:scriptPubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "scriptSig",
          "package": "network-bitcoin",
          "signature": "ScriptSig",
          "source": "src/Network-Bitcoin-RawTransaction.html#TxIn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:scriptSig\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:scriptSig\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "scriptSig",
          "package": "network-bitcoin",
          "partial": "Sig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:scriptSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "sendRawTransaction",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e RawTransaction -\u003e IO TransactionID",
          "source": "src/Network-Bitcoin-RawTransaction.html#sendRawTransaction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:sendRawTransaction\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:sendRawTransaction\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "sendRawTransaction",
          "normalized": "Auth-\u003eRawTransaction-\u003eIO TransactionID",
          "package": "network-bitcoin",
          "partial": "Raw Transaction",
          "signature": "Auth-\u003eRawTransaction-\u003eIO TransactionID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:sendRawTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Bitcoin.RawTransaction",
          "name": "sigAsm",
          "package": "network-bitcoin",
          "signature": "HexString",
          "source": "src/Network-Bitcoin-RawTransaction.html#ScriptSig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "sigAsm",
          "package": "network-bitcoin",
          "partial": "Asm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:sigAsm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Bitcoin.RawTransaction",
          "name": "sigHex",
          "package": "network-bitcoin",
          "signature": "HexString",
          "source": "src/Network-Bitcoin-RawTransaction.html#ScriptSig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "sigHex",
          "package": "network-bitcoin",
          "partial": "Hex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:sigHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign inputs for a raw transaction.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "signRawTransaction",
          "package": "network-bitcoin",
          "signature": "Auth-\u003e RawTransaction-\u003e Maybe (Vector UnspentTransaction)-\u003e Maybe (Vector HexString)-\u003e Maybe WhoCanPay-\u003e IO RawSignedTransaction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:signRawTransaction\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:signRawTransaction\"]"
        },
        "index": {
          "description": "Sign inputs for raw transaction",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "signRawTransaction",
          "normalized": "Auth-\u003eRawTransaction-\u003eMaybe(Vector UnspentTransaction)-\u003eMaybe(Vector HexString)-\u003eMaybe WhoCanPay-\u003eIO RawSignedTransaction",
          "package": "network-bitcoin",
          "partial": "Raw Transaction",
          "signature": "Auth-\u003eRawTransaction-\u003eMaybe(Vector UnspentTransaction)-\u003eMaybe(Vector HexString)-\u003eMaybe WhoCanPay-\u003eIO RawSignedTransaction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:signRawTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe addresses associated with this key.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "sspkAddresses",
          "package": "network-bitcoin",
          "signature": "Vector Address",
          "source": "src/Network-Bitcoin-RawTransaction.html#ScriptPubKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:sspkAddresses\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:sspkAddresses\"]"
        },
        "index": {
          "description": "The addresses associated with this key",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "sspkAddresses",
          "package": "network-bitcoin",
          "partial": "Addresses",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:sspkAddresses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe JSON \u003ca\u003easm\u003c/a\u003e field.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "sspkAsm",
          "package": "network-bitcoin",
          "signature": "HexString",
          "source": "src/Network-Bitcoin-RawTransaction.html#ScriptPubKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:sspkAsm\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:sspkAsm\"]"
        },
        "index": {
          "description": "The JSON asm field",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "sspkAsm",
          "package": "network-bitcoin",
          "partial": "Asm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:sspkAsm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe JSON \u003ca\u003ehex\u003c/a\u003e field.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "sspkHex",
          "package": "network-bitcoin",
          "signature": "HexString",
          "source": "src/Network-Bitcoin-RawTransaction.html#ScriptPubKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:sspkHex\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:sspkHex\"]"
        },
        "index": {
          "description": "The JSON hex field",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "sspkHex",
          "package": "network-bitcoin",
          "partial": "Hex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:sspkHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the transaction.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "sspkType",
          "package": "network-bitcoin",
          "signature": "TxnOutputType",
          "source": "src/Network-Bitcoin-RawTransaction.html#ScriptPubKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:sspkType\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:sspkType\"]"
        },
        "index": {
          "description": "The type of the transaction",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "sspkType",
          "package": "network-bitcoin",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:sspkType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "txCoinbase",
          "package": "network-bitcoin",
          "signature": "HexString",
          "source": "src/Network-Bitcoin-RawTransaction.html#TxIn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:txCoinbase\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:txCoinbase\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "txCoinbase",
          "package": "network-bitcoin",
          "partial": "Coinbase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:txCoinbase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis transaction's ID.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "txInId",
          "package": "network-bitcoin",
          "signature": "TransactionID",
          "source": "src/Network-Bitcoin-RawTransaction.html#TxIn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:txInId\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:txInId\"]"
        },
        "index": {
          "description": "This transaction ID",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "txInId",
          "package": "network-bitcoin",
          "partial": "In Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:txInId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA transaction sequence number.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "txSequence",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-RawTransaction.html#TxIn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:txSequence\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:txSequence\"]"
        },
        "index": {
          "description": "transaction sequence number",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "txSequence",
          "package": "network-bitcoin",
          "partial": "Sequence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:txSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "txnLockTime",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-RawTransaction.html#RawTransactionInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:txnLockTime\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:txnLockTime\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "txnLockTime",
          "package": "network-bitcoin",
          "partial": "Lock Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:txnLockTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe transaction version number.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "txnVersion",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-RawTransaction.html#RawTransactionInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:txnVersion\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:txnVersion\"]"
        },
        "index": {
          "description": "The transaction version number",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "txnVersion",
          "package": "network-bitcoin",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:txnVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe amount of bitcoin transferred out.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "txoutVal",
          "package": "network-bitcoin",
          "signature": "BTC",
          "source": "src/Network-Bitcoin-RawTransaction.html#TxOut",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:txoutVal\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:txoutVal\"]"
        },
        "index": {
          "description": "The amount of bitcoin transferred out",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "txoutVal",
          "package": "network-bitcoin",
          "partial": "Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:txoutVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "unspentAddress",
          "package": "network-bitcoin",
          "signature": "Address",
          "source": "src/Network-Bitcoin-RawTransaction.html#UnspentTransaction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:unspentAddress\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:unspentAddress\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "unspentAddress",
          "package": "network-bitcoin",
          "partial": "Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:unspentAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "unspentAmount",
          "package": "network-bitcoin",
          "signature": "BTC",
          "source": "src/Network-Bitcoin-RawTransaction.html#UnspentTransaction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:unspentAmount\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:unspentAmount\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "unspentAmount",
          "package": "network-bitcoin",
          "partial": "Amount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:unspentAmount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "unspentScriptPubKey",
          "package": "network-bitcoin",
          "signature": "HexString",
          "source": "src/Network-Bitcoin-RawTransaction.html#UnspentTransaction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:unspentScriptPubKey\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:unspentScriptPubKey\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "unspentScriptPubKey",
          "package": "network-bitcoin",
          "partial": "Script Pub Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:unspentScriptPubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "unspentTransactionId",
          "package": "network-bitcoin",
          "signature": "TransactionID",
          "source": "src/Network-Bitcoin-RawTransaction.html#UnspentTransaction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:unspentTransactionId\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:unspentTransactionId\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "unspentTransactionId",
          "package": "network-bitcoin",
          "partial": "Transaction Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:unspentTransactionId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "usConfirmations",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-RawTransaction.html#UnspentTransaction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:usConfirmations\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:usConfirmations\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "usConfirmations",
          "package": "network-bitcoin",
          "partial": "Confirmations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:usConfirmations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe vector of transactions in.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "vin",
          "package": "network-bitcoin",
          "signature": "Vector TxIn",
          "source": "src/Network-Bitcoin-RawTransaction.html#RawTransactionInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:vin\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:vin\"]"
        },
        "index": {
          "description": "The vector of transactions in",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "vin",
          "package": "network-bitcoin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:vin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe vector of transactions out.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.RawTransaction\",\"Network.Bitcoin\"]",
          "name": "vout",
          "package": "network-bitcoin",
          "signature": "Vector TxOut",
          "source": "src/Network-Bitcoin-RawTransaction.html#RawTransactionInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:vout\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:vout\"]"
        },
        "index": {
          "description": "The vector of transactions out",
          "hierarchy": "Network Bitcoin RawTransaction",
          "module": "Network.Bitcoin.RawTransaction",
          "name": "vout",
          "package": "network-bitcoin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-RawTransaction.html#v:vout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains the common types used through bitcoin RPC calls, that aren't\n   specific to a single submodule.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Bitcoin.Types",
          "name": "Types",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Contains the common types used through bitcoin RPC calls that aren specific to single submodule",
          "hierarchy": "Network Bitcoin Types",
          "module": "Network.Bitcoin.Types",
          "name": "Types",
          "package": "network-bitcoin",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn account on the wallet is just a label to easily specify private keys.\n\u003c/p\u003e\u003cp\u003eThe default account is an empty string.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.Types",
          "name": "Account",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Types.html#Account",
          "type": "type"
        },
        "index": {
          "description": "An account on the wallet is just label to easily specify private keys The default account is an empty string",
          "hierarchy": "Network Bitcoin Types",
          "module": "Network.Bitcoin.Types",
          "name": "Account",
          "package": "network-bitcoin",
          "partial": "Account",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Types.html#t:Account"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn address for sending or receiving money.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.Types",
          "name": "Address",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Types.html#Address",
          "type": "type"
        },
        "index": {
          "description": "An address for sending or receiving money",
          "hierarchy": "Network Bitcoin Types",
          "module": "Network.Bitcoin.Types",
          "name": "Address",
          "package": "network-bitcoin",
          "partial": "Address",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Types.html#t:Address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAuth\u003c/a\u003e\u003c/code\u003e describes authentication credentials for\n making API requests to the Bitcoin daemon.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.Types",
          "name": "Auth",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Types.html#Auth",
          "type": "data"
        },
        "index": {
          "description": "Auth describes authentication credentials for making API requests to the Bitcoin daemon",
          "hierarchy": "Network Bitcoin Types",
          "module": "Network.Bitcoin.Types",
          "name": "Auth",
          "package": "network-bitcoin",
          "partial": "Auth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Types.html#t:Auth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of bitcoin money, represented with a fixed-point number.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.Types",
          "name": "BTC",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Types.html#BTC",
          "type": "type"
        },
        "index": {
          "description": "The type of bitcoin money represented with fixed-point number",
          "hierarchy": "Network Bitcoin Types",
          "module": "Network.Bitcoin.Types",
          "name": "BTC",
          "package": "network-bitcoin",
          "partial": "BTC",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Types.html#t:BTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBitcoinException\u003c/a\u003e\u003c/code\u003e is thrown when 'callApi encounters an\n   error.  The API error code is represented as an \u003ccode\u003eInt\u003c/code\u003e, the message as\n   a \u003ccode\u003eString\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt may also be thrown when the value returned by the bitcoin API wasn't\n   what we expected.\n\u003c/p\u003e\u003cp\u003eWARNING: Any of the functions in this module's public API may throw this\n            exception. You should plan on handling it.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.Types",
          "name": "BitcoinException",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Types.html#BitcoinException",
          "type": "data"
        },
        "index": {
          "description": "BitcoinException is thrown when callApi encounters an error The API error code is represented as an Int the message as String It may also be thrown when the value returned by the bitcoin API wasn what we expected WARNING Any of the functions in this module public API may throw this exception You should plan on handling it",
          "hierarchy": "Network Bitcoin Types",
          "module": "Network.Bitcoin.Types",
          "name": "BitcoinException",
          "package": "network-bitcoin",
          "partial": "Bitcoin Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Types.html#t:BitcoinException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string returned by the bitcoind API, representing data as hex.\n\u003c/p\u003e\u003cp\u003eWhat that data represents depends on the API call, but should be\n   dcumented accordingly.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.Types",
          "name": "HexString",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Types.html#HexString",
          "type": "type"
        },
        "index": {
          "description": "string returned by the bitcoind API representing data as hex What that data represents depends on the API call but should be dcumented accordingly",
          "hierarchy": "Network Bitcoin Types",
          "module": "Network.Bitcoin.Types",
          "name": "HexString",
          "package": "network-bitcoin",
          "partial": "Hex String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Types.html#t:HexString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA satoshi is the smallest subdivision of bitcoins. For the resolution,\n   use \u003ccode\u003e\u003ca\u003eresolution\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eFixed\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.Types",
          "name": "Satoshi",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Types.html#Satoshi",
          "type": "data"
        },
        "index": {
          "description": "satoshi is the smallest subdivision of bitcoins For the resolution use resolution from Fixed",
          "hierarchy": "Network Bitcoin Types",
          "module": "Network.Bitcoin.Types",
          "name": "Satoshi",
          "package": "network-bitcoin",
          "partial": "Satoshi",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Types.html#t:Satoshi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hexadecimal string representation of a 256-bit unsigned integer.\n\u003c/p\u003e\u003cp\u003eThis integer is a unique transaction identifier.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.Types",
          "name": "TransactionID",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Types.html#TransactionID",
          "type": "type"
        },
        "index": {
          "description": "hexadecimal string representation of bit unsigned integer This integer is unique transaction identifier",
          "hierarchy": "Network Bitcoin Types",
          "module": "Network.Bitcoin.Types",
          "name": "TransactionID",
          "package": "network-bitcoin",
          "partial": "Transaction ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Types.html#t:TransactionID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBitcoinApiError\u003c/a\u003e\u003c/code\u003e has an error code error\n   message, as returned by bitcoind's JSON-RPC\n   response.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Types\",\"Network.Bitcoin\"]",
          "name": "BitcoinApiError",
          "package": "network-bitcoin",
          "signature": "BitcoinApiError Int Text",
          "source": "src/Network-Bitcoin-Types.html#BitcoinException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Types.html#v:BitcoinApiError\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:BitcoinApiError\"]"
        },
        "index": {
          "description": "BitcoinApiError has an error code error message as returned by bitcoind JSON-RPC response",
          "hierarchy": "Network Bitcoin Types",
          "module": "Network.Bitcoin.Types",
          "name": "BitcoinApiError",
          "package": "network-bitcoin",
          "partial": "Bitcoin Api Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Types.html#v:BitcoinApiError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe raw JSON returned, if we can't figure out what\n   actually went wrong.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Types\",\"Network.Bitcoin\"]",
          "name": "BitcoinResultTypeError",
          "package": "network-bitcoin",
          "signature": "BitcoinResultTypeError ByteString",
          "source": "src/Network-Bitcoin-Types.html#BitcoinException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Types.html#v:BitcoinResultTypeError\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:BitcoinResultTypeError\"]"
        },
        "index": {
          "description": "The raw JSON returned if we can figure out what actually went wrong",
          "hierarchy": "Network Bitcoin Types",
          "module": "Network.Bitcoin.Types",
          "name": "BitcoinResultTypeError",
          "package": "network-bitcoin",
          "partial": "Bitcoin Result Type Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Types.html#v:BitcoinResultTypeError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.Types\",\"Network.Bitcoin\"]",
          "name": "Satoshi",
          "package": "network-bitcoin",
          "signature": "Satoshi",
          "source": "src/Network-Bitcoin-Types.html#Satoshi",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Types.html#v:Satoshi\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:Satoshi\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin Types",
          "module": "Network.Bitcoin.Types",
          "name": "Satoshi",
          "package": "network-bitcoin",
          "partial": "Satoshi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Types.html#v:Satoshi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn interface to bitcoind's available wallet-related RPC calls.\n   The implementation of these functions can be found at\n   \u003ca\u003ehttps://github.com/bitcoin/bitcoin/blob/master/src/rpcwallet.cpp\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIf any APIs are missing, patches are always welcome. If you look at the\n   source of this module, you'll see that the interface code is trivial.\n\u003c/p\u003e\u003cp\u003eCertain APIs were too complicated for me to write an interface for. If\n   you figure them out, then patches are always welcome! They're left in\n   the source as comments.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Bitcoin.Wallet",
          "name": "Wallet",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Wallet.html",
          "type": "module"
        },
        "index": {
          "description": "An interface to bitcoind available wallet-related RPC calls The implementation of these functions can be found at https github.com bitcoin bitcoin blob master src rpcwallet.cpp If any APIs are missing patches are always welcome If you look at the source of this module you ll see that the interface code is trivial Certain APIs were too complicated for me to write an interface for If you figure them out then patches are always welcome They re left in the source as comments",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "Wallet",
          "package": "network-bitcoin",
          "partial": "Wallet",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation on a given address.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.Wallet",
          "name": "AddressInfo",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Wallet.html#AddressInfo",
          "type": "data"
        },
        "index": {
          "description": "Information on given address",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "AddressInfo",
          "package": "network-bitcoin",
          "partial": "Address Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#t:AddressInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAuth\u003c/a\u003e\u003c/code\u003e describes authentication credentials for\n making API requests to the Bitcoin daemon.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.Wallet",
          "name": "Auth",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Types.html#Auth",
          "type": "data"
        },
        "index": {
          "description": "Auth describes authentication credentials for making API requests to the Bitcoin daemon",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "Auth",
          "package": "network-bitcoin",
          "partial": "Auth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#t:Auth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA plethora of information about a bitcoind instance.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.Wallet",
          "name": "BitcoindInfo",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Wallet.html#BitcoindInfo",
          "type": "data"
        },
        "index": {
          "description": "plethora of information about bitcoind instance",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "BitcoindInfo",
          "package": "network-bitcoin",
          "partial": "Bitcoind Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#t:BitcoindInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Bitcoin.Wallet",
          "name": "ReceivedByAccount",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Wallet.html#ReceivedByAccount",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "ReceivedByAccount",
          "package": "network-bitcoin",
          "partial": "Received By Account",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#t:ReceivedByAccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation on how much was received by a given address.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.Wallet",
          "name": "ReceivedByAddress",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Wallet.html#ReceivedByAddress",
          "type": "data"
        },
        "index": {
          "description": "Information on how much was received by given address",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "ReceivedByAddress",
          "package": "network-bitcoin",
          "partial": "Received By Address",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#t:ReceivedByAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signature is a base-64 encoded string.\n\u003c/p\u003e",
          "module": "Network.Bitcoin.Wallet",
          "name": "Signature",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Wallet.html#Signature",
          "type": "type"
        },
        "index": {
          "description": "signature is base-64 encoded string",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "Signature",
          "package": "network-bitcoin",
          "partial": "Signature",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#t:Signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "AddressInfo",
          "package": "network-bitcoin",
          "signature": "AddressInfo",
          "source": "src/Network-Bitcoin-Wallet.html#AddressInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:AddressInfo\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:AddressInfo\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "AddressInfo",
          "package": "network-bitcoin",
          "partial": "Address Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:AddressInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "BitcoindInfo",
          "package": "network-bitcoin",
          "signature": "BitcoindInfo",
          "source": "src/Network-Bitcoin-Wallet.html#BitcoindInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:BitcoindInfo\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:BitcoindInfo\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "BitcoindInfo",
          "package": "network-bitcoin",
          "partial": "Bitcoind Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:BitcoindInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "ReceivedByAccount",
          "package": "network-bitcoin",
          "signature": "ReceivedByAccount",
          "source": "src/Network-Bitcoin-Wallet.html#ReceivedByAccount",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:ReceivedByAccount\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:ReceivedByAccount\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "ReceivedByAccount",
          "package": "network-bitcoin",
          "partial": "Received By Account",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:ReceivedByAccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "ReceivedByAddress",
          "package": "network-bitcoin",
          "signature": "ReceivedByAddress",
          "source": "src/Network-Bitcoin-Wallet.html#ReceivedByAddress",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:ReceivedByAddress\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:ReceivedByAddress\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "ReceivedByAddress",
          "package": "network-bitcoin",
          "partial": "Received By Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:ReceivedByAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe address' linked account.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "aiAccount",
          "package": "network-bitcoin",
          "signature": "Maybe Account",
          "source": "src/Network-Bitcoin-Wallet.html#AddressInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:aiAccount\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:aiAccount\"]"
        },
        "index": {
          "description": "The address linked account",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "aiAccount",
          "package": "network-bitcoin",
          "partial": "Account",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:aiAccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe address in question.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "aiAddress",
          "package": "network-bitcoin",
          "signature": "Address",
          "source": "src/Network-Bitcoin-Wallet.html#AddressInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:aiAddress\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:aiAddress\"]"
        },
        "index": {
          "description": "The address in question",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "aiAddress",
          "package": "network-bitcoin",
          "partial": "Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:aiAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe address' balance.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "aiAmount",
          "package": "network-bitcoin",
          "signature": "BTC",
          "source": "src/Network-Bitcoin-Wallet.html#AddressInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:aiAmount\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:aiAmount\"]"
        },
        "index": {
          "description": "The address balance",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "aiAmount",
          "package": "network-bitcoin",
          "partial": "Amount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:aiAmount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely copies wallet.dat to the given destination, which can be either a\n   directory, or a path with filename.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "backupWallet",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e FilePath -\u003e IO ()",
          "source": "src/Network-Bitcoin-Wallet.html#backupWallet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:backupWallet\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:backupWallet\"]"
        },
        "index": {
          "description": "Safely copies wallet.dat to the given destination which can be either directory or path with filename",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "backupWallet",
          "normalized": "Auth-\u003eFilePath-\u003eIO()",
          "package": "network-bitcoin",
          "partial": "Wallet",
          "signature": "Auth-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:backupWallet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow much money is currently in the wallet?\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "balance",
          "package": "network-bitcoin",
          "signature": "BTC",
          "source": "src/Network-Bitcoin-Wallet.html#BitcoindInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:balance\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:balance\"]"
        },
        "index": {
          "description": "How much money is currently in the wallet",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "balance",
          "package": "network-bitcoin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:balance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat version of bitcoind are we running?\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "bitcoinVersion",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Wallet.html#BitcoindInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:bitcoinVersion\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:bitcoinVersion\"]"
        },
        "index": {
          "description": "What version of bitcoind are we running",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "bitcoinVersion",
          "package": "network-bitcoin",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:bitcoinVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny alerts will show up here. This should normally be an\n   empty string.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "bitcoindErrors",
          "package": "network-bitcoin",
          "signature": "Text",
          "source": "src/Network-Bitcoin-Wallet.html#BitcoindInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:bitcoindErrors\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:bitcoindErrors\"]"
        },
        "index": {
          "description": "Any alerts will show up here This should normally be an empty string",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "bitcoindErrors",
          "package": "network-bitcoin",
          "partial": "Errors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:bitcoindErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChanges the wallet passphrase.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "changePassword",
          "package": "network-bitcoin",
          "signature": "Auth-\u003e Text-\u003e Text-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:changePassword\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:changePassword\"]"
        },
        "index": {
          "description": "Changes the wallet passphrase",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "changePassword",
          "normalized": "Auth-\u003eText-\u003eText-\u003eIO()",
          "package": "network-bitcoin",
          "partial": "Password",
          "signature": "Auth-\u003eText-\u003eText-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:changePassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncrypts the wallet with the given passphrase.\n\u003c/p\u003e\u003cp\u003eWARNING: bitcoind will shut down after calling this method. Don't say I\n            didn't warn you.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "encryptWallet",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e Text -\u003e IO ()",
          "source": "src/Network-Bitcoin-Wallet.html#encryptWallet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:encryptWallet\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:encryptWallet\"]"
        },
        "index": {
          "description": "Encrypts the wallet with the given passphrase WARNING bitcoind will shut down after calling this method Don say didn warn you",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "encryptWallet",
          "normalized": "Auth-\u003eText-\u003eIO()",
          "package": "network-bitcoin",
          "partial": "Wallet",
          "signature": "Auth-\u003eText-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:encryptWallet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe difficulty multiplier for bitcoin mining operations.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "generationDifficulty",
          "package": "network-bitcoin",
          "signature": "Double",
          "source": "src/Network-Bitcoin-Wallet.html#BitcoindInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:generationDifficulty\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:generationDifficulty\"]"
        },
        "index": {
          "description": "The difficulty multiplier for bitcoin mining operations",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "generationDifficulty",
          "package": "network-bitcoin",
          "partial": "Difficulty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:generationDifficulty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the account associated with the given address.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "getAccount",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e Address -\u003e IO Account",
          "source": "src/Network-Bitcoin-Wallet.html#getAccount",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:getAccount\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:getAccount\"]"
        },
        "index": {
          "description": "Returns the account associated with the given address",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "getAccount",
          "normalized": "Auth-\u003eAddress-\u003eIO Account",
          "package": "network-bitcoin",
          "partial": "Account",
          "signature": "Auth-\u003eAddress-\u003eIO Account",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:getAccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the current Bitcoin address for receiving payments to the given\n   account.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "getAccountAddress",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e Account -\u003e IO Address",
          "source": "src/Network-Bitcoin-Wallet.html#getAccountAddress",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:getAccountAddress\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:getAccountAddress\"]"
        },
        "index": {
          "description": "Returns the current Bitcoin address for receiving payments to the given account",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "getAccountAddress",
          "normalized": "Auth-\u003eAccount-\u003eIO Address",
          "package": "network-bitcoin",
          "partial": "Account Address",
          "signature": "Auth-\u003eAccount-\u003eIO Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:getAccountAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the list of addresses for the given address.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "getAddressesByAccount",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e Account -\u003e IO (Vector Address)",
          "source": "src/Network-Bitcoin-Wallet.html#getAddressesByAccount",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:getAddressesByAccount\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:getAddressesByAccount\"]"
        },
        "index": {
          "description": "Returns the list of addresses for the given address",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "getAddressesByAccount",
          "normalized": "Auth-\u003eAccount-\u003eIO(Vector Address)",
          "package": "network-bitcoin",
          "partial": "Addresses By Account",
          "signature": "Auth-\u003eAccount-\u003eIO(Vector Address)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:getAddressesByAccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the server's total available balance.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "getBalance",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e IO BTC",
          "source": "src/Network-Bitcoin-Wallet.html#getBalance",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:getBalance\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:getBalance\"]"
        },
        "index": {
          "description": "Returns the server total available balance",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "getBalance",
          "normalized": "Auth-\u003eIO BTC",
          "package": "network-bitcoin",
          "partial": "Balance",
          "signature": "Auth-\u003eIO BTC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:getBalance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the balance in the given account, counting only transactions with\n   at least one confirmation.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "getBalance'",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e Account -\u003e IO BTC",
          "source": "src/Network-Bitcoin-Wallet.html#getBalance%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:getBalance-39-\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:getBalance-39-\"]"
        },
        "index": {
          "description": "Returns the balance in the given account counting only transactions with at least one confirmation",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "getBalance'",
          "normalized": "Auth-\u003eAccount-\u003eIO BTC",
          "package": "network-bitcoin",
          "partial": "Balance'",
          "signature": "Auth-\u003eAccount-\u003eIO BTC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:getBalance-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the balance in the given account, counting only transactions with\n   at least the given number of confirmations.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "getBalance''",
          "package": "network-bitcoin",
          "signature": "Auth-\u003e Account-\u003e Int-\u003e IO BTC",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:getBalance-39--39-\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:getBalance-39--39-\"]"
        },
        "index": {
          "description": "Returns the balance in the given account counting only transactions with at least the given number of confirmations",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "getBalance''",
          "normalized": "Auth-\u003eAccount-\u003eInt-\u003eIO BTC",
          "package": "network-bitcoin",
          "partial": "Balance''",
          "signature": "Auth-\u003eAccount-\u003eInt-\u003eIO BTC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:getBalance-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an object containing various state info.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "getBitcoindInfo",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e IO BitcoindInfo",
          "source": "src/Network-Bitcoin-Wallet.html#getBitcoindInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:getBitcoindInfo\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:getBitcoindInfo\"]"
        },
        "index": {
          "description": "Returns an object containing various state info",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "getBitcoindInfo",
          "normalized": "Auth-\u003eIO BitcoindInfo",
          "package": "network-bitcoin",
          "partial": "Bitcoind Info",
          "signature": "Auth-\u003eIO BitcoindInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:getBitcoindInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a new bitcoin address for receiving payments.\n\u003c/p\u003e\u003cp\u003eIf an account is specified (recommended), the new address is added to the\n   address book so payments received with the address will be credited to the\n   given account.\n\u003c/p\u003e\u003cp\u003eIf no account is specified, the address will be credited to the account\n   whose name is the empty string. i.e. the default account.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "getNewAddress",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e Maybe Account -\u003e IO Address",
          "source": "src/Network-Bitcoin-Wallet.html#getNewAddress",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:getNewAddress\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:getNewAddress\"]"
        },
        "index": {
          "description": "Returns new bitcoin address for receiving payments If an account is specified recommended the new address is added to the address book so payments received with the address will be credited to the given account If no account is specified the address will be credited to the account whose name is the empty string i.e the default account",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "getNewAddress",
          "normalized": "Auth-\u003eMaybe Account-\u003eIO Address",
          "package": "network-bitcoin",
          "partial": "New Address",
          "signature": "Auth-\u003eMaybe Account-\u003eIO Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:getNewAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the total amount received by address with the given account.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "getReceivedByAccount",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e Account -\u003e IO BTC",
          "source": "src/Network-Bitcoin-Wallet.html#getReceivedByAccount",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:getReceivedByAccount\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:getReceivedByAccount\"]"
        },
        "index": {
          "description": "Returns the total amount received by address with the given account",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "getReceivedByAccount",
          "normalized": "Auth-\u003eAccount-\u003eIO BTC",
          "package": "network-bitcoin",
          "partial": "Received By Account",
          "signature": "Auth-\u003eAccount-\u003eIO BTC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:getReceivedByAccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the total amount received by addresses with the given account,\n   counting only transactions with the given minimum number of confirmations.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "getReceivedByAccount'",
          "package": "network-bitcoin",
          "signature": "Auth-\u003e Account-\u003e Int-\u003e IO BTC",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:getReceivedByAccount-39-\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:getReceivedByAccount-39-\"]"
        },
        "index": {
          "description": "Returns the total amount received by addresses with the given account counting only transactions with the given minimum number of confirmations",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "getReceivedByAccount'",
          "normalized": "Auth-\u003eAccount-\u003eInt-\u003eIO BTC",
          "package": "network-bitcoin",
          "partial": "Received By Account'",
          "signature": "Auth-\u003eAccount-\u003eInt-\u003eIO BTC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:getReceivedByAccount-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the total amount received by the given address with at least one\n   confirmation.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "getReceivedByAddress",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e Address -\u003e IO BTC",
          "source": "src/Network-Bitcoin-Wallet.html#getReceivedByAddress",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:getReceivedByAddress\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:getReceivedByAddress\"]"
        },
        "index": {
          "description": "Returns the total amount received by the given address with at least one confirmation",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "getReceivedByAddress",
          "normalized": "Auth-\u003eAddress-\u003eIO BTC",
          "package": "network-bitcoin",
          "partial": "Received By Address",
          "signature": "Auth-\u003eAddress-\u003eIO BTC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:getReceivedByAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the total amount received by the given address, with at least the\n   give number of confirmations.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "getReceivedByAddress'",
          "package": "network-bitcoin",
          "signature": "Auth-\u003e Address-\u003e Int-\u003e IO BTC",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:getReceivedByAddress-39-\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:getReceivedByAddress-39-\"]"
        },
        "index": {
          "description": "Returns the total amount received by the given address with at least the give number of confirmations",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "getReceivedByAddress'",
          "normalized": "Auth-\u003eAddress-\u003eInt-\u003eIO BTC",
          "package": "network-bitcoin",
          "partial": "Received By Address'",
          "signature": "Auth-\u003eAddress-\u003eInt-\u003eIO BTC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:getReceivedByAddress-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if a given address is a valid one.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "isAddressValid",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e Address -\u003e IO Bool",
          "source": "src/Network-Bitcoin-Wallet.html#isAddressValid",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:isAddressValid\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:isAddressValid\"]"
        },
        "index": {
          "description": "Checks if given address is valid one",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "isAddressValid",
          "normalized": "Auth-\u003eAddress-\u003eIO Bool",
          "package": "network-bitcoin",
          "partial": "Address Valid",
          "signature": "Auth-\u003eAddress-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:isAddressValid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe timestamp of the oldest key in the key pool.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "keyPoolOldest",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Wallet.html#BitcoindInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:keyPoolOldest\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:keyPoolOldest\"]"
        },
        "index": {
          "description": "The timestamp of the oldest key in the key pool",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "keyPoolOldest",
          "package": "network-bitcoin",
          "partial": "Pool Oldest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:keyPoolOldest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFills the keypool.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "keyPoolRefill",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e IO ()",
          "source": "src/Network-Bitcoin-Wallet.html#keyPoolRefill",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:keyPoolRefill\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:keyPoolRefill\"]"
        },
        "index": {
          "description": "Fills the keypool",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "keyPoolRefill",
          "normalized": "Auth-\u003eIO()",
          "package": "network-bitcoin",
          "partial": "Pool Refill",
          "signature": "Auth-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:keyPoolRefill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size of the key pool.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "keyPoolSize",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Wallet.html#BitcoindInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:keyPoolSize\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:keyPoolSize\"]"
        },
        "index": {
          "description": "The size of the key pool",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "keyPoolSize",
          "package": "network-bitcoin",
          "partial": "Pool Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:keyPoolSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLists groups of addresses which have had their common ownership made\n   public by common use as inputs or as the resulting change in past\n   transactions.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "listAddressGroupings",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e IO (Vector (Vector AddressInfo))",
          "source": "src/Network-Bitcoin-Wallet.html#listAddressGroupings",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:listAddressGroupings\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:listAddressGroupings\"]"
        },
        "index": {
          "description": "Lists groups of addresses which have had their common ownership made public by common use as inputs or as the resulting change in past transactions",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "listAddressGroupings",
          "normalized": "Auth-\u003eIO(Vector(Vector AddressInfo))",
          "package": "network-bitcoin",
          "partial": "Address Groupings",
          "signature": "Auth-\u003eIO(Vector(Vector AddressInfo))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:listAddressGroupings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLists the amount received by each account which has received money at some\n   point, counting only transactions with at leaset one confirmation.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "listReceivedByAccount",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e IO (Vector ReceivedByAccount)",
          "source": "src/Network-Bitcoin-Wallet.html#listReceivedByAccount",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:listReceivedByAccount\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:listReceivedByAccount\"]"
        },
        "index": {
          "description": "Lists the amount received by each account which has received money at some point counting only transactions with at leaset one confirmation",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "listReceivedByAccount",
          "normalized": "Auth-\u003eIO(Vector ReceivedByAccount)",
          "package": "network-bitcoin",
          "partial": "Received By Account",
          "signature": "Auth-\u003eIO(Vector ReceivedByAccount)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:listReceivedByAccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList the amount received by each of our accounts, counting only\n   transactions with the given minimum number of confirmations.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "listReceivedByAccount'",
          "package": "network-bitcoin",
          "signature": "Auth-\u003e Int-\u003e Bool-\u003e IO (Vector ReceivedByAccount)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:listReceivedByAccount-39-\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:listReceivedByAccount-39-\"]"
        },
        "index": {
          "description": "List the amount received by each of our accounts counting only transactions with the given minimum number of confirmations",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "listReceivedByAccount'",
          "normalized": "Auth-\u003eInt-\u003eBool-\u003eIO(Vector ReceivedByAccount)",
          "package": "network-bitcoin",
          "partial": "Received By Account'",
          "signature": "Auth-\u003eInt-\u003eBool-\u003eIO(Vector ReceivedByAccount)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:listReceivedByAccount-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLists the amount received by each address which has received money at some\n   point, counting only transactions with at least one confirmation.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "listReceivedByAddress",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e IO (Vector ReceivedByAddress)",
          "source": "src/Network-Bitcoin-Wallet.html#listReceivedByAddress",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:listReceivedByAddress\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:listReceivedByAddress\"]"
        },
        "index": {
          "description": "Lists the amount received by each address which has received money at some point counting only transactions with at least one confirmation",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "listReceivedByAddress",
          "normalized": "Auth-\u003eIO(Vector ReceivedByAddress)",
          "package": "network-bitcoin",
          "partial": "Received By Address",
          "signature": "Auth-\u003eIO(Vector ReceivedByAddress)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:listReceivedByAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList the amount received by each of our addresses, counting only\n   transactions with the given minimum number of confirmations.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "listReceivedByAddress'",
          "package": "network-bitcoin",
          "signature": "Auth-\u003e Int-\u003e Bool-\u003e IO (Vector ReceivedByAddress)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:listReceivedByAddress-39-\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:listReceivedByAddress-39-\"]"
        },
        "index": {
          "description": "List the amount received by each of our addresses counting only transactions with the given minimum number of confirmations",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "listReceivedByAddress'",
          "normalized": "Auth-\u003eInt-\u003eBool-\u003eIO(Vector ReceivedByAddress)",
          "package": "network-bitcoin",
          "partial": "Received By Address'",
          "signature": "Auth-\u003eInt-\u003eBool-\u003eIO(Vector ReceivedByAddress)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:listReceivedByAddress-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves the wallet encryption key from memory, locking the wallet.\n\u003c/p\u003e\u003cp\u003eAfter calling this function, you will need to call \u003ccode\u003e\u003ca\u003eunlockWallet\u003c/a\u003e\u003c/code\u003e again\n   before being able to call methods which require the wallet to be unlocked.\n\u003c/p\u003e\u003cp\u003eNote: In future releases, we might introduce an \u003ca\u003eunlocked\u003c/a\u003e monad, so\n         locking and unlocking is automatic.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "lockWallet",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e IO ()",
          "source": "src/Network-Bitcoin-Wallet.html#lockWallet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:lockWallet\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:lockWallet\"]"
        },
        "index": {
          "description": "Removes the wallet encryption key from memory locking the wallet After calling this function you will need to call unlockWallet again before being able to call methods which require the wallet to be unlocked Note In future releases we might introduce an unlocked monad so locking and unlocking is automatic",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "lockWallet",
          "normalized": "Auth-\u003eIO()",
          "package": "network-bitcoin",
          "partial": "Wallet",
          "signature": "Auth-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:lockWallet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove bitcoins from one account in your wallet to another.\n\u003c/p\u003e\u003cp\u003eIf you want to send bitcoins to an address not in your wallet, use\n   \u003ccode\u003e\u003ca\u003esendFromAccount\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "moveBitcoins",
          "package": "network-bitcoin",
          "signature": "Auth-\u003e Account-\u003e Account-\u003e BTC-\u003e Text-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:moveBitcoins\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:moveBitcoins\"]"
        },
        "index": {
          "description": "Move bitcoins from one account in your wallet to another If you want to send bitcoins to an address not in your wallet use sendFromAccount",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "moveBitcoins",
          "normalized": "Auth-\u003eAccount-\u003eAccount-\u003eBTC-\u003eText-\u003eIO()",
          "package": "network-bitcoin",
          "partial": "Bitcoins",
          "signature": "Auth-\u003eAccount-\u003eAccount-\u003eBTC-\u003eText-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:moveBitcoins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of blocks in our chain.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "numBlocks",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Wallet.html#BitcoindInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:numBlocks\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:numBlocks\"]"
        },
        "index": {
          "description": "The number of blocks in our chain",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "numBlocks",
          "package": "network-bitcoin",
          "partial": "Blocks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:numBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow many peers are we connected to?\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "numConnections",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Wallet.html#BitcoindInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:numConnections\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:numConnections\"]"
        },
        "index": {
          "description": "How many peers are we connected to",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "numConnections",
          "package": "network-bitcoin",
          "partial": "Connections",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:numConnections"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAre we on the test network (as opposed to the primary\n   bitcoin network)?\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "onTestNetwork",
          "package": "network-bitcoin",
          "signature": "Bool",
          "source": "src/Network-Bitcoin-Wallet.html#BitcoindInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:onTestNetwork\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:onTestNetwork\"]"
        },
        "index": {
          "description": "Are we on the test network as opposed to the primary bitcoin network",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "onTestNetwork",
          "package": "network-bitcoin",
          "partial": "Test Network",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:onTestNetwork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat is bitcoind's current protocol number?\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "protocolVersion",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Wallet.html#BitcoindInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:protocolVersion\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:protocolVersion\"]"
        },
        "index": {
          "description": "What is bitcoind current protocol number",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "protocolVersion",
          "package": "network-bitcoin",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:protocolVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA blank string if we're not using a proxy.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "proxy",
          "package": "network-bitcoin",
          "signature": "Text",
          "source": "src/Network-Bitcoin-Wallet.html#BitcoindInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:proxy\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:proxy\"]"
        },
        "index": {
          "description": "blank string if we re not using proxy",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "proxy",
          "package": "network-bitcoin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe account we received into.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "raccAccount",
          "package": "network-bitcoin",
          "signature": "Account",
          "source": "src/Network-Bitcoin-Wallet.html#ReceivedByAccount",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:raccAccount\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:raccAccount\"]"
        },
        "index": {
          "description": "The account we received into",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "raccAccount",
          "package": "network-bitcoin",
          "partial": "Account",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:raccAccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe mount received.\n ^ The number of confirmations of the most recent\n   included transaction.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "raccAmount",
          "package": "network-bitcoin",
          "signature": "BTC",
          "source": "src/Network-Bitcoin-Wallet.html#ReceivedByAccount",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:raccAmount\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:raccAmount\"]"
        },
        "index": {
          "description": "The mount received The number of confirmations of the most recent included transaction",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "raccAmount",
          "package": "network-bitcoin",
          "partial": "Amount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:raccAmount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "raccNumConfirmations",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Wallet.html#ReceivedByAccount",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:raccNumConfirmations\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:raccNumConfirmations\"]"
        },
        "index": {
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "raccNumConfirmations",
          "package": "network-bitcoin",
          "partial": "Num Confirmations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:raccNumConfirmations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe account which this address belongs to.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "recvAccount",
          "package": "network-bitcoin",
          "signature": "Account",
          "source": "src/Network-Bitcoin-Wallet.html#ReceivedByAddress",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:recvAccount\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:recvAccount\"]"
        },
        "index": {
          "description": "The account which this address belongs to",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "recvAccount",
          "package": "network-bitcoin",
          "partial": "Account",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:recvAccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe address which the money was deposited to.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "recvAddress",
          "package": "network-bitcoin",
          "signature": "Address",
          "source": "src/Network-Bitcoin-Wallet.html#ReceivedByAddress",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:recvAddress\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:recvAddress\"]"
        },
        "index": {
          "description": "The address which the money was deposited to",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "recvAddress",
          "package": "network-bitcoin",
          "partial": "Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:recvAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe amount received.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "recvAmount",
          "package": "network-bitcoin",
          "signature": "BTC",
          "source": "src/Network-Bitcoin-Wallet.html#ReceivedByAddress",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:recvAmount\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:recvAmount\"]"
        },
        "index": {
          "description": "The amount received",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "recvAmount",
          "package": "network-bitcoin",
          "partial": "Amount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:recvAmount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of confirmations of the most recent\n   included transaction.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "recvNumConfirmations",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Wallet.html#ReceivedByAddress",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:recvNumConfirmations\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:recvNumConfirmations\"]"
        },
        "index": {
          "description": "The number of confirmations of the most recent included transaction",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "recvNumConfirmations",
          "package": "network-bitcoin",
          "partial": "Num Confirmations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:recvNumConfirmations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends bitcoins from a given account in our wallet to a given address.\n\u003c/p\u003e\u003cp\u003eA transaction and sender comment may be optionally provided.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "sendFromAccount",
          "package": "network-bitcoin",
          "signature": "Auth-\u003e Account-\u003e Address-\u003e BTC-\u003e Maybe Text-\u003e Maybe Text-\u003e IO TransactionID",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:sendFromAccount\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:sendFromAccount\"]"
        },
        "index": {
          "description": "Sends bitcoins from given account in our wallet to given address transaction and sender comment may be optionally provided",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "sendFromAccount",
          "normalized": "Auth-\u003eAccount-\u003eAddress-\u003eBTC-\u003eMaybe Text-\u003eMaybe Text-\u003eIO TransactionID",
          "package": "network-bitcoin",
          "partial": "From Account",
          "signature": "Auth-\u003eAccount-\u003eAddress-\u003eBTC-\u003eMaybe Text-\u003eMaybe Text-\u003eIO TransactionID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:sendFromAccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend to a whole bunch of address at once.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "sendMany",
          "package": "network-bitcoin",
          "signature": "Auth-\u003e Account-\u003e Vector (Address, BTC)-\u003e Maybe Text-\u003e IO TransactionID",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:sendMany\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:sendMany\"]"
        },
        "index": {
          "description": "Send to whole bunch of address at once",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "sendMany",
          "normalized": "Auth-\u003eAccount-\u003eVector(Address,BTC)-\u003eMaybe Text-\u003eIO TransactionID",
          "package": "network-bitcoin",
          "partial": "Many",
          "signature": "Auth-\u003eAccount-\u003eVector(Address,BTC)-\u003eMaybe Text-\u003eIO TransactionID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:sendMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends some bitcoins to an address.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "sendToAddress",
          "package": "network-bitcoin",
          "signature": "Auth-\u003e Address-\u003e BTC-\u003e Maybe Text-\u003e Maybe Text-\u003e IO TransactionID",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:sendToAddress\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:sendToAddress\"]"
        },
        "index": {
          "description": "Sends some bitcoins to an address",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "sendToAddress",
          "normalized": "Auth-\u003eAddress-\u003eBTC-\u003eMaybe Text-\u003eMaybe Text-\u003eIO TransactionID",
          "package": "network-bitcoin",
          "partial": "To Address",
          "signature": "Auth-\u003eAddress-\u003eBTC-\u003eMaybe Text-\u003eMaybe Text-\u003eIO TransactionID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:sendToAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the account associated with the given address.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "setAccount",
          "package": "network-bitcoin",
          "signature": "Auth -\u003e Address -\u003e Account -\u003e IO ()",
          "source": "src/Network-Bitcoin-Wallet.html#setAccount",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:setAccount\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:setAccount\"]"
        },
        "index": {
          "description": "Sets the account associated with the given address",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "setAccount",
          "normalized": "Auth-\u003eAddress-\u003eAccount-\u003eIO()",
          "package": "network-bitcoin",
          "partial": "Account",
          "signature": "Auth-\u003eAddress-\u003eAccount-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:setAccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign a message with the private key of an address.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "signMessage",
          "package": "network-bitcoin",
          "signature": "Auth-\u003e Address-\u003e Text-\u003e IO Signature",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:signMessage\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:signMessage\"]"
        },
        "index": {
          "description": "Sign message with the private key of an address",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "signMessage",
          "normalized": "Auth-\u003eAddress-\u003eText-\u003eIO Signature",
          "package": "network-bitcoin",
          "partial": "Message",
          "signature": "Auth-\u003eAddress-\u003eText-\u003eIO Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:signMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow much do we currently pay as a transaction fee?\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "transactionFeePaid",
          "package": "network-bitcoin",
          "signature": "BTC",
          "source": "src/Network-Bitcoin-Wallet.html#BitcoindInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:transactionFeePaid\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:transactionFeePaid\"]"
        },
        "index": {
          "description": "How much do we currently pay as transaction fee",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "transactionFeePaid",
          "package": "network-bitcoin",
          "partial": "Fee Paid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:transactionFeePaid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStores the wallet decryption key in memory for the given amount of time.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "unlockWallet",
          "package": "network-bitcoin",
          "signature": "Auth-\u003e Text-\u003e Integer-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:unlockWallet\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:unlockWallet\"]"
        },
        "index": {
          "description": "Stores the wallet decryption key in memory for the given amount of time",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "unlockWallet",
          "normalized": "Auth-\u003eText-\u003eInteger-\u003eIO()",
          "package": "network-bitcoin",
          "partial": "Wallet",
          "signature": "Auth-\u003eText-\u003eInteger-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:unlockWallet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the wallet is unlocked, the number of seconds until a\n   re-lock is needed.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "unlockedUntil",
          "package": "network-bitcoin",
          "signature": "Maybe Integer",
          "source": "src/Network-Bitcoin-Wallet.html#BitcoindInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:unlockedUntil\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:unlockedUntil\"]"
        },
        "index": {
          "description": "If the wallet is unlocked the number of seconds until re-lock is needed",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "unlockedUntil",
          "package": "network-bitcoin",
          "partial": "Until",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:unlockedUntil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerifies a signed message.\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "verifyMessage",
          "package": "network-bitcoin",
          "signature": "Auth-\u003e Address-\u003e Signature-\u003e Text-\u003e IO Bool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:verifyMessage\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:verifyMessage\"]"
        },
        "index": {
          "description": "Verifies signed message",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "verifyMessage",
          "normalized": "Auth-\u003eAddress-\u003eSignature-\u003eText-\u003eIO Bool",
          "package": "network-bitcoin",
          "partial": "Message",
          "signature": "Auth-\u003eAddress-\u003eSignature-\u003eText-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:verifyMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat version is the wallet?\n\u003c/p\u003e",
          "module": "[\"Network.Bitcoin.Wallet\",\"Network.Bitcoin\"]",
          "name": "walletVersion",
          "package": "network-bitcoin",
          "signature": "Integer",
          "source": "src/Network-Bitcoin-Wallet.html#BitcoindInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:walletVersion\",\"http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#v:walletVersion\"]"
        },
        "index": {
          "description": "What version is the wallet",
          "hierarchy": "Network Bitcoin Wallet",
          "module": "Network.Bitcoin.Wallet",
          "name": "walletVersion",
          "package": "network-bitcoin",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin-Wallet.html#v:walletVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Haskell binding to the bitcoind server.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Bitcoin",
          "name": "Bitcoin",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin.html",
          "type": "module"
        },
        "index": {
          "description": "Haskell binding to the bitcoind server",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "Bitcoin",
          "package": "network-bitcoin",
          "partial": "Bitcoin",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn account on the wallet is just a label to easily specify private keys.\n\u003c/p\u003e\u003cp\u003eThe default account is an empty string.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "Account",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Types.html#Account",
          "type": "type"
        },
        "index": {
          "description": "An account on the wallet is just label to easily specify private keys The default account is an empty string",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "Account",
          "package": "network-bitcoin",
          "partial": "Account",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:Account"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn address for sending or receiving money.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "Address",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Types.html#Address",
          "type": "type"
        },
        "index": {
          "description": "An address for sending or receiving money",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "Address",
          "package": "network-bitcoin",
          "partial": "Address",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:Address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation on a given address.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "AddressInfo",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Wallet.html#AddressInfo",
          "type": "data"
        },
        "index": {
          "description": "Information on given address",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "AddressInfo",
          "package": "network-bitcoin",
          "partial": "Address Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:AddressInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAuth\u003c/a\u003e\u003c/code\u003e describes authentication credentials for\n making API requests to the Bitcoin daemon.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "Auth",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Types.html#Auth",
          "type": "data"
        },
        "index": {
          "description": "Auth describes authentication credentials for making API requests to the Bitcoin daemon",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "Auth",
          "package": "network-bitcoin",
          "partial": "Auth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:Auth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of bitcoin money, represented with a fixed-point number.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "BTC",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Types.html#BTC",
          "type": "type"
        },
        "index": {
          "description": "The type of bitcoin money represented with fixed-point number",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "BTC",
          "package": "network-bitcoin",
          "partial": "BTC",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:BTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBitcoinException\u003c/a\u003e\u003c/code\u003e is thrown when 'callApi encounters an\n   error.  The API error code is represented as an \u003ccode\u003eInt\u003c/code\u003e, the message as\n   a \u003ccode\u003eString\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt may also be thrown when the value returned by the bitcoin API wasn't\n   what we expected.\n\u003c/p\u003e\u003cp\u003eWARNING: Any of the functions in this module's public API may throw this\n            exception. You should plan on handling it.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "BitcoinException",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Types.html#BitcoinException",
          "type": "data"
        },
        "index": {
          "description": "BitcoinException is thrown when callApi encounters an error The API error code is represented as an Int the message as String It may also be thrown when the value returned by the bitcoin API wasn what we expected WARNING Any of the functions in this module public API may throw this exception You should plan on handling it",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "BitcoinException",
          "package": "network-bitcoin",
          "partial": "Bitcoin Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:BitcoinException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA plethora of information about a bitcoind instance.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "BitcoindInfo",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Wallet.html#BitcoindInfo",
          "type": "data"
        },
        "index": {
          "description": "plethora of information about bitcoind instance",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "BitcoindInfo",
          "package": "network-bitcoin",
          "partial": "Bitcoind Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:BitcoindInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about a given block in the block chain.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "Block",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-BlockChain.html#Block",
          "type": "data"
        },
        "index": {
          "description": "Information about given block in the block chain",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "Block",
          "package": "network-bitcoin",
          "partial": "Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe hash of a given block.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "BlockHash",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-BlockChain.html#BlockHash",
          "type": "type"
        },
        "index": {
          "description": "The hash of given block",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "BlockHash",
          "package": "network-bitcoin",
          "partial": "Block Hash",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:BlockHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation on a single block.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "BlockInfo",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-RawTransaction.html#BlockInfo",
          "type": "data"
        },
        "index": {
          "description": "Information on single block",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "BlockInfo",
          "package": "network-bitcoin",
          "partial": "Block Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:BlockInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA template for constructing a block to work on.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ehttps://en.bitcoin.it/wiki/BIP_0022\u003c/a\u003e for the full specification.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "BlockTemplate",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Mining.html#BlockTemplate",
          "type": "data"
        },
        "index": {
          "description": "template for constructing block to work on See https en.bitcoin.it wiki BIP for the full specification",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "BlockTemplate",
          "package": "network-bitcoin",
          "partial": "Block Template",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:BlockTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Bitcoin",
          "name": "CoinBaseAux",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Mining.html#CoinBaseAux",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "CoinBaseAux",
          "package": "network-bitcoin",
          "partial": "Coin Base Aux",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:CoinBaseAux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA successfully decoded raw transaction, from a given serialized,\n   hex-encoded transaction.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "DecodedRawTransaction",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-RawTransaction.html#DecodedRawTransaction",
          "type": "data"
        },
        "index": {
          "description": "successfully decoded raw transaction from given serialized hex-encoded transaction",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "DecodedRawTransaction",
          "package": "network-bitcoin",
          "partial": "Decoded Raw Transaction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:DecodedRawTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe hash data returned from \u003ccode\u003e\u003ca\u003egetWork\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "HashData",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Mining.html#HashData",
          "type": "data"
        },
        "index": {
          "description": "The hash data returned from getWork",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "HashData",
          "package": "network-bitcoin",
          "partial": "Hash Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:HashData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string returned by the bitcoind API, representing data as hex.\n\u003c/p\u003e\u003cp\u003eWhat that data represents depends on the API call, but should be\n   dcumented accordingly.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "HexString",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Types.html#HexString",
          "type": "type"
        },
        "index": {
          "description": "string returned by the bitcoind API representing data as hex What that data represents depends on the API call but should be dcumented accordingly",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "HexString",
          "package": "network-bitcoin",
          "partial": "Hex String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:HexString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation related to the current bitcoind mining operation.\n\u003c/p\u003e\u003cp\u003eIf a field is undocumented here, it's because I don't know what it means.\n   If you DO know what it means, I'd love it if you would submit a patch to\n   help complete this documentation.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "MiningInfo",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Mining.html#MiningInfo",
          "type": "data"
        },
        "index": {
          "description": "Information related to the current bitcoind mining operation If field is undocumented here it because don know what it means If you DO know what it means love it if you would submit patch to help complete this documentation",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "MiningInfo",
          "package": "network-bitcoin",
          "partial": "Mining Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:MiningInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetails about an unspent transaction output.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "OutputInfo",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-BlockChain.html#OutputInfo",
          "type": "data"
        },
        "index": {
          "description": "Details about an unspent transaction output",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "OutputInfo",
          "package": "network-bitcoin",
          "partial": "Output Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:OutputInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation on the unspent transaction in the output set.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "OutputSetInfo",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-BlockChain.html#OutputSetInfo",
          "type": "data"
        },
        "index": {
          "description": "Information on the unspent transaction in the output set",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "OutputSetInfo",
          "package": "network-bitcoin",
          "partial": "Output Set Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:OutputSetInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about a peer node of the Bitcoin network.\n\u003c/p\u003e\u003cp\u003eThe documentation for this data structure is incomplete, as I honestly\n   don't know what some of these fields are for. Patches are welcome!\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "PeerInfo",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Net.html#PeerInfo",
          "type": "data"
        },
        "index": {
          "description": "Information about peer node of the Bitcoin network The documentation for this data structure is incomplete as honestly don know what some of these fields are for Patches are welcome",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "PeerInfo",
          "package": "network-bitcoin",
          "partial": "Peer Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:PeerInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA raw signed transaction contains the raw, signed hexstring and whether or\n   not this transaction has a complete signature set.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "RawSignedTransaction",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-RawTransaction.html#RawSignedTransaction",
          "type": "data"
        },
        "index": {
          "description": "raw signed transaction contains the raw signed hexstring and whether or not this transaction has complete signature set",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "RawSignedTransaction",
          "package": "network-bitcoin",
          "partial": "Raw Signed Transaction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:RawSignedTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust like most binary data retrieved from bitcoind, a raw transaction is\n   represented by a hexstring.\n\u003c/p\u003e\u003cp\u003eThis is a serialized, hex-encoded transaction.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "RawTransaction",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-RawTransaction.html#RawTransaction",
          "type": "type"
        },
        "index": {
          "description": "Just like most binary data retrieved from bitcoind raw transaction is represented by hexstring This is serialized hex-encoded transaction",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "RawTransaction",
          "package": "network-bitcoin",
          "partial": "Raw Transaction",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:RawTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe raw transaction info for a given transaction ID.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "RawTransactionInfo",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-RawTransaction.html#RawTransactionInfo",
          "type": "data"
        },
        "index": {
          "description": "The raw transaction info for given transaction ID",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "RawTransactionInfo",
          "package": "network-bitcoin",
          "partial": "Raw Transaction Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:RawTransactionInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Bitcoin",
          "name": "ReceivedByAccount",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Wallet.html#ReceivedByAccount",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "ReceivedByAccount",
          "package": "network-bitcoin",
          "partial": "Received By Account",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:ReceivedByAccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation on how much was received by a given address.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "ReceivedByAddress",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Wallet.html#ReceivedByAddress",
          "type": "data"
        },
        "index": {
          "description": "Information on how much was received by given address",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "ReceivedByAddress",
          "package": "network-bitcoin",
          "partial": "Received By Address",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:ReceivedByAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA satoshi is the smallest subdivision of bitcoins. For the resolution,\n   use \u003ccode\u003e\u003ca\u003eresolution\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eFixed\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "Satoshi",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Types.html#Satoshi",
          "type": "data"
        },
        "index": {
          "description": "satoshi is the smallest subdivision of bitcoins For the resolution use resolution from Fixed",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "Satoshi",
          "package": "network-bitcoin",
          "partial": "Satoshi",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:Satoshi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA public key of someone we sent money to.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "ScriptPubKey",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-RawTransaction.html#ScriptPubKey",
          "type": "data"
        },
        "index": {
          "description": "public key of someone we sent money to",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "ScriptPubKey",
          "package": "network-bitcoin",
          "partial": "Script Pub Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:ScriptPubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA script signature.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "ScriptSig",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-RawTransaction.html#ScriptSig",
          "type": "data"
        },
        "index": {
          "description": "script signature",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "ScriptSig",
          "package": "network-bitcoin",
          "partial": "Script Sig",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:ScriptSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signature is a base-64 encoded string.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "Signature",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Wallet.html#Signature",
          "type": "type"
        },
        "index": {
          "description": "signature is base-64 encoded string",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "Signature",
          "package": "network-bitcoin",
          "partial": "Signature",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:Signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA transaction to be included in the next block.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "Transaction",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Mining.html#Transaction",
          "type": "data"
        },
        "index": {
          "description": "transaction to be included in the next block",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "Transaction",
          "package": "network-bitcoin",
          "partial": "Transaction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:Transaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hexadecimal string representation of a 256-bit unsigned integer.\n\u003c/p\u003e\u003cp\u003eThis integer is a unique transaction identifier.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "TransactionID",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-Types.html#TransactionID",
          "type": "type"
        },
        "index": {
          "description": "hexadecimal string representation of bit unsigned integer This integer is unique transaction identifier",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "TransactionID",
          "package": "network-bitcoin",
          "partial": "Transaction ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:TransactionID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA transaction into an account. This can either be a coinbase transaction,\n   or a standard transaction with another account.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "TxIn",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-RawTransaction.html#TxIn",
          "type": "data"
        },
        "index": {
          "description": "transaction into an account This can either be coinbase transaction or standard transaction with another account",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "TxIn",
          "package": "network-bitcoin",
          "partial": "Tx In",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:TxIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA transaction out of an account.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "TxOut",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-RawTransaction.html#TxOut",
          "type": "data"
        },
        "index": {
          "description": "transaction out of an account",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "TxOut",
          "package": "network-bitcoin",
          "partial": "Tx Out",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:TxOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a transaction out.\n\u003c/p\u003e\u003cp\u003eMore documentation is needed here. Submit a patch if you know what this is\n   about!\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "TxnOutputType",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-RawTransaction.html#TxnOutputType",
          "type": "data"
        },
        "index": {
          "description": "The type of transaction out More documentation is needed here Submit patch if you know what this is about",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "TxnOutputType",
          "package": "network-bitcoin",
          "partial": "Txn Output Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:TxnOutputType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Bitcoin",
          "name": "UnspentTransaction",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-RawTransaction.html#UnspentTransaction",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "UnspentTransaction",
          "package": "network-bitcoin",
          "partial": "Unspent Transaction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:UnspentTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWho can pay for a given transaction.\n\u003c/p\u003e",
          "module": "Network.Bitcoin",
          "name": "WhoCanPay",
          "package": "network-bitcoin",
          "source": "src/Network-Bitcoin-RawTransaction.html#WhoCanPay",
          "type": "data"
        },
        "index": {
          "description": "Who can pay for given transaction",
          "hierarchy": "Network Bitcoin",
          "module": "Network.Bitcoin",
          "name": "WhoCanPay",
          "package": "network-bitcoin",
          "partial": "Who Can Pay",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-bitcoin/docs/Network-Bitcoin.html#t:WhoCanPay"
      }
    }
  ]
]