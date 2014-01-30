[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol-Arbitrary.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package provides QuickCheck Arbitrary instances for all the protocol\n  data types defined in \u003ccode\u003e\u003ca\u003eProtocol\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Haskoin.Protocol.Arbitrary",
        "fct-package": "haskoin-protocol",
        "fct-signature": "module",
        "fct-source": "src/Network-Haskoin-Protocol-Arbitrary.html",
        "fct-type": "module",
        "title": "Arbitrary"
      },
      "index": {
        "description": "This package provides QuickCheck Arbitrary instances for all the protocol data types defined in Protocol",
        "hierarchy": "Network Haskoin Protocol Arbitrary",
        "module": "Network.Haskoin.Protocol.Arbitrary",
        "name": "Arbitrary",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Arbitrary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package provides all of the basic types used for the Bitcoin \n  networking protocol together with Data.Binary instances for efficiently\n  serializing and de-serializing them. More information on the bitcoin protocol\n  is available here: \u003ca\u003ehttp://en.bitcoin.it/wiki/Protocol_specification\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "module",
        "fct-source": "src/Network-Haskoin-Protocol.html",
        "fct-type": "module",
        "title": "Protocol"
      },
      "index": {
        "description": "This package provides all of the basic types used for the Bitcoin networking protocol together with Data.Binary instances for efficiently serializing and de-serializing them More information on the bitcoin protocol is available here http en.bitcoin.it wiki Protocol specification",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "Protocol",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Protocol",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:Addr",
      "description": {
        "fct-descr": "\u003cp\u003eProvides information on known nodes in the bitcoin network. An \u003ccode\u003e\u003ca\u003eAddr\u003c/a\u003e\u003c/code\u003e\n type is sent inside a \u003ccode\u003eMessage\u003c/code\u003e as a response to a \u003ccode\u003eGetAddr\u003c/code\u003e message.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "data",
        "fct-source": "src/Network-Haskoin-Protocol-Addr.html#Addr",
        "fct-type": "data",
        "title": "Addr"
      },
      "index": {
        "description": "Provides information on known nodes in the bitcoin network An Addr type is sent inside Message as response to GetAddr message",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "Addr",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:Alert",
      "description": {
        "fct-descr": "\u003cp\u003eData type describing signed messages that can be sent between bitcoin\n nodes to display important notifications to end users about the health of\n the network.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "data",
        "fct-source": "src/Network-Haskoin-Protocol-Alert.html#Alert",
        "fct-type": "data",
        "title": "Alert"
      },
      "index": {
        "description": "Data type describing signed messages that can be sent between bitcoin nodes to display important notifications to end users about the health of the network",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "Alert",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Alert",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:Block",
      "description": {
        "fct-descr": "\u003cp\u003eData type describing a block in the bitcoin protocol. Blocks are sent in\n response to \u003ccode\u003eGetData\u003c/code\u003e messages that are requesting information from a\n block hash.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "data",
        "fct-source": "src/Network-Haskoin-Protocol-Block.html#Block",
        "fct-type": "data",
        "title": "Block"
      },
      "index": {
        "description": "Data type describing block in the bitcoin protocol Blocks are sent in response to GetData messages that are requesting information from block hash",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "Block",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:BlockHeader",
      "description": {
        "fct-descr": "\u003cp\u003eData type recording information on a \u003ccode\u003eBlock\u003c/code\u003e. The hash of a block is\n defined as the hash of this data structure. The block mining process\n involves finding a partial hash collision by varying the nonce in the\n \u003ccode\u003e\u003ca\u003eBlockHeader\u003c/a\u003e\u003c/code\u003e and/or additional randomness in the \u003ccode\u003eCoinbaseTx\u003c/code\u003e of this\n \u003ccode\u003eBlock\u003c/code\u003e. Variations in the \u003ccode\u003eCoinbaseTx\u003c/code\u003e will result in different merkle \n roots in the \u003ccode\u003e\u003ca\u003eBlockHeader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "data",
        "fct-source": "src/Network-Haskoin-Protocol-BlockHeader.html#BlockHeader",
        "fct-type": "data",
        "title": "BlockHeader"
      },
      "index": {
        "description": "Data type recording information on Block The hash of block is defined as the hash of this data structure The block mining process involves finding partial hash collision by varying the nonce in the BlockHeader and or additional randomness in the CoinbaseTx of this Block Variations in the CoinbaseTx will result in different merkle roots in the BlockHeader",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "BlockHeader",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Block Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:BlockHeaderCount",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eBlockHeader\u003c/a\u003e\u003c/code\u003e type with a transaction count as \u003ccode\u003e\u003ca\u003eVarInt\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "type",
        "fct-source": "src/Network-Haskoin-Protocol-Headers.html#BlockHeaderCount",
        "fct-type": "type",
        "title": "BlockHeaderCount"
      },
      "index": {
        "description": "BlockHeader type with transaction count as VarInt",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "BlockHeaderCount",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Block Header Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:CoinbaseTx",
      "description": {
        "fct-descr": "\u003cp\u003eData type representing the coinbase transaction of a \u003ccode\u003eBlock\u003c/code\u003e. Coinbase\n transactions are special types of transactions which are created by miners\n when they find a new block. Coinbase transactions have no inputs. They have\n outputs sending the newly generated bitcoins together with all the block's\n fees to a bitcoin address (usually the miners address). Data can be embedded\n in a Coinbase transaction which can be chosen by the miner of a block. This\n data also typically contains some randomness which is used, together with\n the nonce, to find a partial hash collision on the block's hash.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "data",
        "fct-source": "src/Network-Haskoin-Protocol-Tx.html#CoinbaseTx",
        "fct-type": "data",
        "title": "CoinbaseTx"
      },
      "index": {
        "description": "Data type representing the coinbase transaction of Block Coinbase transactions are special types of transactions which are created by miners when they find new block Coinbase transactions have no inputs They have outputs sending the newly generated bitcoins together with all the block fees to bitcoin address usually the miners address Data can be embedded in Coinbase transaction which can be chosen by the miner of block This data also typically contains some randomness which is used together with the nonce to find partial hash collision on the block hash",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "CoinbaseTx",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Coinbase Tx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:GetBlocks",
      "description": {
        "fct-descr": "\u003cp\u003eData type representing a GetBlocks message request. It is used in the\n bitcoin protocol to retrieve blocks from a peer by providing it a\n \u003ccode\u003eBlockLocator\u003c/code\u003e object. The \u003ccode\u003eBlockLocator\u003c/code\u003e is a sparse list of block hashes\n from the caller node with the purpose of informing the receiving node\n about the state of the caller's blockchain. The receiver node will detect\n a wrong branch in the caller's main chain and send the caller appropriate \n \u003ccode\u003eBlocks\u003c/code\u003e. The response to a \u003ccode\u003e\u003ca\u003eGetBlocks\u003c/a\u003e\u003c/code\u003e message is an \u003ccode\u003eInv\u003c/code\u003e message\n containing the list of block hashes pertaining to the request. \n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "data",
        "fct-source": "src/Network-Haskoin-Protocol-GetBlocks.html#GetBlocks",
        "fct-type": "data",
        "title": "GetBlocks"
      },
      "index": {
        "description": "Data type representing GetBlocks message request It is used in the bitcoin protocol to retrieve blocks from peer by providing it BlockLocator object The BlockLocator is sparse list of block hashes from the caller node with the purpose of informing the receiving node about the state of the caller blockchain The receiver node will detect wrong branch in the caller main chain and send the caller appropriate Blocks The response to GetBlocks message is an Inv message containing the list of block hashes pertaining to the request",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "GetBlocks",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Get Blocks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:GetData",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eGetData\u003c/a\u003e\u003c/code\u003e type is used to retrieve information on a specific object\n (\u003ccode\u003eBlock\u003c/code\u003e or \u003ccode\u003eTx\u003c/code\u003e) identified by the objects hash. The payload of a \u003ccode\u003e\u003ca\u003eGetData\u003c/a\u003e\u003c/code\u003e\n request is a list of \u003ccode\u003e\u003ca\u003eInvVector\u003c/a\u003e\u003c/code\u003e which represent all the hashes for which a\n node wants to request information. The response to a \u003ccode\u003eGetBlock\u003c/code\u003e message\n wille be either a \u003ccode\u003eBlock\u003c/code\u003e or a \u003ccode\u003eTx\u003c/code\u003e message depending on the type of the\n object referenced by the hash. Usually, \u003ccode\u003e\u003ca\u003eGetData\u003c/a\u003e\u003c/code\u003e messages are sent after a\n node receives an \u003ccode\u003eInv\u003c/code\u003e message to obtain information on unknown object\n hashes. \n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "data",
        "fct-source": "src/Network-Haskoin-Protocol-GetData.html#GetData",
        "fct-type": "data",
        "title": "GetData"
      },
      "index": {
        "description": "The GetData type is used to retrieve information on specific object Block or Tx identified by the objects hash The payload of GetData request is list of InvVector which represent all the hashes for which node wants to request information The response to GetBlock message wille be either Block or Tx message depending on the type of the object referenced by the hash Usually GetData messages are sent after node receives an Inv message to obtain information on unknown object hashes",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "GetData",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Get Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:GetHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to the \u003ccode\u003eGetBlocks\u003c/code\u003e message type but for retrieving block headers\n only. The response to a \u003ccode\u003e\u003ca\u003eGetHeaders\u003c/a\u003e\u003c/code\u003e request is a \u003ccode\u003eHeaders\u003c/code\u003e message\n containing a list of block headers pertaining to the request. A maximum of\n 2000 block headers can be returned. \u003ccode\u003e\u003ca\u003eGetHeaders\u003c/a\u003e\u003c/code\u003e is used by thin (SPV)\n clients to exclude block contents when synchronizing the blockchain.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "data",
        "fct-source": "src/Network-Haskoin-Protocol-GetHeaders.html#GetHeaders",
        "fct-type": "data",
        "title": "GetHeaders"
      },
      "index": {
        "description": "Similar to the GetBlocks message type but for retrieving block headers only The response to GetHeaders request is Headers message containing list of block headers pertaining to the request maximum of block headers can be returned GetHeaders is used by thin SPV clients to exclude block contents when synchronizing the blockchain",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "GetHeaders",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Get Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:Headers",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eHeaders\u003c/a\u003e\u003c/code\u003e type is used to return a list of block headers in\n response to a \u003ccode\u003eGetHeaders\u003c/code\u003e message.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "data",
        "fct-source": "src/Network-Haskoin-Protocol-Headers.html#Headers",
        "fct-type": "data",
        "title": "Headers"
      },
      "index": {
        "description": "The Headers type is used to return list of block headers in response to GetHeaders message",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "Headers",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:Inv",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eInv\u003c/a\u003e\u003c/code\u003e messages are used by nodes to advertise their knowledge of new\n objects by publishing a list of hashes. \u003ccode\u003e\u003ca\u003eInv\u003c/a\u003e\u003c/code\u003e messages can be sent\n unsolicited or in response to a \u003ccode\u003eGetBlocks\u003c/code\u003e message.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "data",
        "fct-source": "src/Network-Haskoin-Protocol-Inv.html#Inv",
        "fct-type": "data",
        "title": "Inv"
      },
      "index": {
        "description": "Inv messages are used by nodes to advertise their knowledge of new objects by publishing list of hashes Inv messages can be sent unsolicited or in response to GetBlocks message",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "Inv",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Inv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:InvType",
      "description": {
        "fct-descr": "\u003cp\u003eData type identifying the type of an inventory vector. \n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "data",
        "fct-source": "src/Network-Haskoin-Protocol-InvVector.html#InvType",
        "fct-type": "data",
        "title": "InvType"
      },
      "index": {
        "description": "Data type identifying the type of an inventory vector",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "InvType",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Inv Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:InvVector",
      "description": {
        "fct-descr": "\u003cp\u003eInvectory vectors represent hashes identifying objects such as a \u003ccode\u003eBlock\u003c/code\u003e\n or a \u003ccode\u003eTx\u003c/code\u003e. They are sent inside messages to notify other peers about \n new data or data they have requested.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "data",
        "fct-source": "src/Network-Haskoin-Protocol-InvVector.html#InvVector",
        "fct-type": "data",
        "title": "InvVector"
      },
      "index": {
        "description": "Invectory vectors represent hashes identifying objects such as Block or Tx They are sent inside messages to notify other peers about new data or data they have requested",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "InvVector",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Inv Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:Message",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e type is used to identify all the valid messages that can be\n sent between bitcoin peers. Only values of type \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e will be accepted\n by other bitcoin peers as bitcoin protocol messages need to be correctly\n serialized with message headers. Serializing a \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e value will\n include the \u003ccode\u003e\u003ca\u003eMessageHeader\u003c/a\u003e\u003c/code\u003e with the correct checksum value automatically.\n No need to add the \u003ccode\u003e\u003ca\u003eMessageHeader\u003c/a\u003e\u003c/code\u003e separately.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "data",
        "fct-source": "src/Network-Haskoin-Protocol-Message.html#Message",
        "fct-type": "data",
        "title": "Message"
      },
      "index": {
        "description": "The Message type is used to identify all the valid messages that can be sent between bitcoin peers Only values of type Message will be accepted by other bitcoin peers as bitcoin protocol messages need to be correctly serialized with message headers Serializing Message value will include the MessageHeader with the correct checksum value automatically No need to add the MessageHeader separately",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "Message",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:MessageCommand",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMessageCommand\u003c/a\u003e\u003c/code\u003e is included in a \u003ccode\u003e\u003ca\u003eMessageHeader\u003c/a\u003e\u003c/code\u003e in order to identify\n the type of message present in the payload. This allows the message \n de-serialization code to know how to decode a particular message payload.\n Every valid \u003ccode\u003eMessage\u003c/code\u003e constructor has a corresponding \u003ccode\u003e\u003ca\u003eMessageCommand\u003c/a\u003e\u003c/code\u003e\n constructor.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "data",
        "fct-source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
        "fct-type": "data",
        "title": "MessageCommand"
      },
      "index": {
        "description": "MessageCommand is included in MessageHeader in order to identify the type of message present in the payload This allows the message de-serialization code to know how to decode particular message payload Every valid Message constructor has corresponding MessageCommand constructor",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MessageCommand",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Message Command",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:MessageHeader",
      "description": {
        "fct-descr": "\u003cp\u003eData type representing the header of a \u003ccode\u003eMessage\u003c/code\u003e. All messages sent between\n nodes contain a message header.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "data",
        "fct-source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageHeader",
        "fct-type": "data",
        "title": "MessageHeader"
      },
      "index": {
        "description": "Data type representing the header of Message All messages sent between nodes contain message header",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MessageHeader",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Message Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:NetworkAddress",
      "description": {
        "fct-descr": "\u003cp\u003eData type describing a bitcoin network address. Addresses are stored in\n IPv6. IPv4 addresses are mapped to IPv6 using IPv4 mapped IPv6 addresses:\n \u003ca\u003ehttp://en.wikipedia.org/wiki/IPv6#IPv4-mapped_IPv6_addresses\u003c/a\u003e. Sometimes,\n timestamps are sent together with the \u003ccode\u003e\u003ca\u003eNetworkAddress\u003c/a\u003e\u003c/code\u003e such as in the \u003ccode\u003eAddr\u003c/code\u003e\n data type.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "data",
        "fct-source": "src/Network-Haskoin-Protocol-NetworkAddress.html#NetworkAddress",
        "fct-type": "data",
        "title": "NetworkAddress"
      },
      "index": {
        "description": "Data type describing bitcoin network address Addresses are stored in IPv6 IPv4 addresses are mapped to IPv6 using IPv4 mapped IPv6 addresses http en.wikipedia.org wiki IPv6 IPv4-mapped IPv6 addresses Sometimes timestamps are sent together with the NetworkAddress such as in the Addr data type",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "NetworkAddress",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Network Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:NetworkAddressTime",
      "description": {
        "fct-descr": "\u003cp\u003eNetwork address with a timestamp\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "type",
        "fct-source": "src/Network-Haskoin-Protocol-Addr.html#NetworkAddressTime",
        "fct-type": "type",
        "title": "NetworkAddressTime"
      },
      "index": {
        "description": "Network address with timestamp",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "NetworkAddressTime",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Network Address Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:NotFound",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eNotFound\u003c/a\u003e\u003c/code\u003e message is returned as a response to a \u003ccode\u003eGetData\u003c/code\u003e message\n whe one of the requested objects could not be retrieved. This could happen,\n for example, if a tranasaction was requested and was not available in the\n memory pool of the receiving node.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "data",
        "fct-source": "src/Network-Haskoin-Protocol-NotFound.html#NotFound",
        "fct-type": "data",
        "title": "NotFound"
      },
      "index": {
        "description": "NotFound message is returned as response to GetData message whe one of the requested objects could not be retrieved This could happen for example if tranasaction was requested and was not available in the memory pool of the receiving node",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "NotFound",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:OutPoint",
      "description": {
        "fct-descr": "\u003cp\u003eThe OutPoint is used inside a transaction input to reference the previous\n transaction output that it is spending.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "data",
        "fct-source": "src/Network-Haskoin-Protocol-Tx.html#OutPoint",
        "fct-type": "data",
        "title": "OutPoint"
      },
      "index": {
        "description": "The OutPoint is used inside transaction input to reference the previous transaction output that it is spending",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OutPoint",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Out Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:Ping",
      "description": {
        "fct-descr": "\u003cp\u003eA Ping message is sent to bitcoin peers to check if a TCP/IP connection\n is still valid.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "newtype",
        "fct-source": "src/Network-Haskoin-Protocol-Ping.html#Ping",
        "fct-type": "newtype",
        "title": "Ping"
      },
      "index": {
        "description": "Ping message is sent to bitcoin peers to check if TCP IP connection is still valid",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "Ping",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Ping",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:Pong",
      "description": {
        "fct-descr": "\u003cp\u003eA Pong message is sent as a response to a ping message.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "newtype",
        "fct-source": "src/Network-Haskoin-Protocol-Ping.html#Pong",
        "fct-type": "newtype",
        "title": "Pong"
      },
      "index": {
        "description": "Pong message is sent as response to ping message",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "Pong",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Pong",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:Script",
      "description": {
        "fct-descr": "\u003cp\u003eData type representing a transaction script. Scripts are defined as lists\n of script operators \u003ccode\u003e\u003ca\u003eScriptOp\u003c/a\u003e\u003c/code\u003e. Scripts are used to:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Define the spending conditions in the output of a transaction\n\u003c/li\u003e\u003cli\u003e Provide the spending signatures in the input of a transaction\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "data",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#Script",
        "fct-type": "data",
        "title": "Script"
      },
      "index": {
        "description": "Data type representing transaction script Scripts are defined as lists of script operators ScriptOp Scripts are used to Define the spending conditions in the output of transaction Provide the spending signatures in the input of transaction",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "Script",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Script",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:ScriptOp",
      "description": {
        "fct-descr": "\u003cp\u003eData type representing all of the operators allowed inside a \u003ccode\u003e\u003ca\u003eScript\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "data",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
        "fct-type": "data",
        "title": "ScriptOp"
      },
      "index": {
        "description": "Data type representing all of the operators allowed inside Script",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "ScriptOp",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Script Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:Tx",
      "description": {
        "fct-descr": "\u003cp\u003eData type representing a bitcoin transaction\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "data",
        "fct-source": "src/Network-Haskoin-Protocol-Tx.html#Tx",
        "fct-type": "data",
        "title": "Tx"
      },
      "index": {
        "description": "Data type representing bitcoin transaction",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "Tx",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Tx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:TxIn",
      "description": {
        "fct-descr": "\u003cp\u003eData type representing a transaction input.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "data",
        "fct-source": "src/Network-Haskoin-Protocol-Tx.html#TxIn",
        "fct-type": "data",
        "title": "TxIn"
      },
      "index": {
        "description": "Data type representing transaction input",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "TxIn",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Tx In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:TxOut",
      "description": {
        "fct-descr": "\u003cp\u003eData type representing a transaction output.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "data",
        "fct-source": "src/Network-Haskoin-Protocol-Tx.html#TxOut",
        "fct-type": "data",
        "title": "TxOut"
      },
      "index": {
        "description": "Data type representing transaction output",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "TxOut",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Tx Out",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:VarInt",
      "description": {
        "fct-descr": "\u003cp\u003eData type representing a variable length integer. The \u003ccode\u003e\u003ca\u003eVarInt\u003c/a\u003e\u003c/code\u003e type\n usually precedes an array or a string that can vary in length. \n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "newtype",
        "fct-source": "src/Network-Haskoin-Protocol-VarInt.html#VarInt",
        "fct-type": "newtype",
        "title": "VarInt"
      },
      "index": {
        "description": "Data type representing variable length integer The VarInt type usually precedes an array or string that can vary in length",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "VarInt",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Var Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:VarString",
      "description": {
        "fct-descr": "\u003cp\u003eData type for variable length strings. Variable length strings are\n serialized as a \u003ccode\u003e\u003ca\u003eVarInt\u003c/a\u003e\u003c/code\u003e followed by a bytestring.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "newtype",
        "fct-source": "src/Network-Haskoin-Protocol-VarString.html#VarString",
        "fct-type": "newtype",
        "title": "VarString"
      },
      "index": {
        "description": "Data type for variable length strings Variable length strings are serialized as VarInt followed by bytestring",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "VarString",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Var String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:Version",
      "description": {
        "fct-descr": "\u003cp\u003eWhen a bitcoin node creates an outgoing connection to another node,\n the first message it will send is a \u003ccode\u003e\u003ca\u003eVersion\u003c/a\u003e\u003c/code\u003e message. The other node\n will similarly respond with it's own \u003ccode\u003e\u003ca\u003eVersion\u003c/a\u003e\u003c/code\u003e message.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "data",
        "fct-source": "src/Network-Haskoin-Protocol-Version.html#Version",
        "fct-type": "data",
        "title": "Version"
      },
      "index": {
        "description": "When bitcoin node creates an outgoing connection to another node the first message it will send is Version message The other node will similarly respond with it own Version message",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "Version",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:Addr",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "Addr",
        "fct-source": "src/Network-Haskoin-Protocol-Addr.html#Addr",
        "fct-type": "function",
        "title": "Addr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "Addr",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:Alert",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "Alert",
        "fct-source": "src/Network-Haskoin-Protocol-Alert.html#Alert",
        "fct-type": "function",
        "title": "Alert"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "Alert",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Alert",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:Block",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "Block",
        "fct-source": "src/Network-Haskoin-Protocol-Block.html#Block",
        "fct-type": "function",
        "title": "Block"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "Block",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:BlockHeader",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "BlockHeader",
        "fct-source": "src/Network-Haskoin-Protocol-BlockHeader.html#BlockHeader",
        "fct-type": "function",
        "title": "BlockHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "BlockHeader",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Block Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:CoinbaseTx",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "CoinbaseTx",
        "fct-source": "src/Network-Haskoin-Protocol-Tx.html#CoinbaseTx",
        "fct-type": "function",
        "title": "CoinbaseTx"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "CoinbaseTx",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Coinbase Tx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:GetBlocks",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "GetBlocks",
        "fct-source": "src/Network-Haskoin-Protocol-GetBlocks.html#GetBlocks",
        "fct-type": "function",
        "title": "GetBlocks"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "GetBlocks",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Get Blocks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:GetData",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "GetData",
        "fct-source": "src/Network-Haskoin-Protocol-GetData.html#GetData",
        "fct-type": "function",
        "title": "GetData"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "GetData",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Get Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:GetHeaders",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "GetHeaders",
        "fct-source": "src/Network-Haskoin-Protocol-GetHeaders.html#GetHeaders",
        "fct-type": "function",
        "title": "GetHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "GetHeaders",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Get Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:Headers",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "Headers",
        "fct-source": "src/Network-Haskoin-Protocol-Headers.html#Headers",
        "fct-type": "function",
        "title": "Headers"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "Headers",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:Inv",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "Inv",
        "fct-source": "src/Network-Haskoin-Protocol-Inv.html#Inv",
        "fct-type": "function",
        "title": "Inv"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "Inv",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Inv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:InvBlock",
      "description": {
        "fct-descr": "\u003cp\u003eInvVector hash is related to a block\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "InvBlock",
        "fct-source": "src/Network-Haskoin-Protocol-InvVector.html#InvType",
        "fct-type": "function",
        "title": "InvBlock"
      },
      "index": {
        "description": "InvVector hash is related to block",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "InvBlock",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Inv Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:InvError",
      "description": {
        "fct-descr": "\u003cp\u003eError. Data containing this type can be ignored.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "InvError",
        "fct-source": "src/Network-Haskoin-Protocol-InvVector.html#InvType",
        "fct-type": "function",
        "title": "InvError"
      },
      "index": {
        "description": "Error Data containing this type can be ignored",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "InvError",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Inv Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:InvTx",
      "description": {
        "fct-descr": "\u003cp\u003eInvVector hash is related to a transaction \n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "InvTx",
        "fct-source": "src/Network-Haskoin-Protocol-InvVector.html#InvType",
        "fct-type": "function",
        "title": "InvTx"
      },
      "index": {
        "description": "InvVector hash is related to transaction",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "InvTx",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Inv Tx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:InvVector",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "InvVector",
        "fct-source": "src/Network-Haskoin-Protocol-InvVector.html#InvVector",
        "fct-type": "function",
        "title": "InvVector"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "InvVector",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Inv Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MAddr",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MAddr Addr",
        "fct-source": "src/Network-Haskoin-Protocol-Message.html#Message",
        "fct-type": "function",
        "title": "MAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MAddr",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MAddr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MAlert",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MAlert Alert",
        "fct-source": "src/Network-Haskoin-Protocol-Message.html#Message",
        "fct-type": "function",
        "title": "MAlert"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MAlert",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MAlert",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MBlock",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MBlock Block",
        "fct-source": "src/Network-Haskoin-Protocol-Message.html#Message",
        "fct-type": "function",
        "title": "MBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MBlock",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MBlock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCAddr",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MCAddr",
        "fct-source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
        "fct-type": "function",
        "title": "MCAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MCAddr",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MCAddr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCAlert",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MCAlert",
        "fct-source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
        "fct-type": "function",
        "title": "MCAlert"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MCAlert",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MCAlert",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCBlock",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MCBlock",
        "fct-source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
        "fct-type": "function",
        "title": "MCBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MCBlock",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MCBlock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCGetAddr",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MCGetAddr",
        "fct-source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
        "fct-type": "function",
        "title": "MCGetAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MCGetAddr",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MCGet Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCGetBlocks",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MCGetBlocks",
        "fct-source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
        "fct-type": "function",
        "title": "MCGetBlocks"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MCGetBlocks",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MCGet Blocks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCGetData",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MCGetData",
        "fct-source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
        "fct-type": "function",
        "title": "MCGetData"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MCGetData",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MCGet Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCGetHeaders",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MCGetHeaders",
        "fct-source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
        "fct-type": "function",
        "title": "MCGetHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MCGetHeaders",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MCGet Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCHeaders",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MCHeaders",
        "fct-source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
        "fct-type": "function",
        "title": "MCHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MCHeaders",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MCHeaders",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCInv",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MCInv",
        "fct-source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
        "fct-type": "function",
        "title": "MCInv"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MCInv",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MCInv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCNotFound",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MCNotFound",
        "fct-source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
        "fct-type": "function",
        "title": "MCNotFound"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MCNotFound",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MCNot Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCPing",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MCPing",
        "fct-source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
        "fct-type": "function",
        "title": "MCPing"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MCPing",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MCPing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCPong",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MCPong",
        "fct-source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
        "fct-type": "function",
        "title": "MCPong"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MCPong",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MCPong",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCTx",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MCTx",
        "fct-source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
        "fct-type": "function",
        "title": "MCTx"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MCTx",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MCTx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCVerAck",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MCVerAck",
        "fct-source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
        "fct-type": "function",
        "title": "MCVerAck"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MCVerAck",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MCVer Ack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCVersion",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MCVersion",
        "fct-source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
        "fct-type": "function",
        "title": "MCVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MCVersion",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MCVersion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MGetAddr",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MGetAddr",
        "fct-source": "src/Network-Haskoin-Protocol-Message.html#Message",
        "fct-type": "function",
        "title": "MGetAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MGetAddr",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MGet Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MGetBlocks",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MGetBlocks GetBlocks",
        "fct-source": "src/Network-Haskoin-Protocol-Message.html#Message",
        "fct-type": "function",
        "title": "MGetBlocks"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MGetBlocks",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MGet Blocks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MGetData",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MGetData GetData",
        "fct-source": "src/Network-Haskoin-Protocol-Message.html#Message",
        "fct-type": "function",
        "title": "MGetData"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MGetData",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MGet Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MGetHeaders",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MGetHeaders GetHeaders",
        "fct-source": "src/Network-Haskoin-Protocol-Message.html#Message",
        "fct-type": "function",
        "title": "MGetHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MGetHeaders",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MGet Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MHeaders",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MHeaders Headers",
        "fct-source": "src/Network-Haskoin-Protocol-Message.html#Message",
        "fct-type": "function",
        "title": "MHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MHeaders",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MHeaders",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MInv",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MInv Inv",
        "fct-source": "src/Network-Haskoin-Protocol-Message.html#Message",
        "fct-type": "function",
        "title": "MInv"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MInv",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MInv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MNotFound",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MNotFound NotFound",
        "fct-source": "src/Network-Haskoin-Protocol-Message.html#Message",
        "fct-type": "function",
        "title": "MNotFound"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MNotFound",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MNot Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MPing",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MPing Ping",
        "fct-source": "src/Network-Haskoin-Protocol-Message.html#Message",
        "fct-type": "function",
        "title": "MPing"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MPing",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MPing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MPong",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MPong Pong",
        "fct-source": "src/Network-Haskoin-Protocol-Message.html#Message",
        "fct-type": "function",
        "title": "MPong"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MPong",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MPong",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MTx",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MTx Tx",
        "fct-source": "src/Network-Haskoin-Protocol-Message.html#Message",
        "fct-type": "function",
        "title": "MTx"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MTx",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MTx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MVerAck",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MVerAck",
        "fct-source": "src/Network-Haskoin-Protocol-Message.html#Message",
        "fct-type": "function",
        "title": "MVerAck"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MVerAck",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MVer Ack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MVersion",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MVersion Version",
        "fct-source": "src/Network-Haskoin-Protocol-Message.html#Message",
        "fct-type": "function",
        "title": "MVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MVersion",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "MVersion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MessageHeader",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "MessageHeader",
        "fct-source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageHeader",
        "fct-type": "function",
        "title": "MessageHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "MessageHeader",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Message Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:NetworkAddress",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "NetworkAddress",
        "fct-source": "src/Network-Haskoin-Protocol-NetworkAddress.html#NetworkAddress",
        "fct-type": "function",
        "title": "NetworkAddress"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "NetworkAddress",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Network Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:NotFound",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "NotFound",
        "fct-source": "src/Network-Haskoin-Protocol-NotFound.html#NotFound",
        "fct-type": "function",
        "title": "NotFound"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "NotFound",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_0",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "OP_0",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
        "fct-type": "function",
        "title": "OP_0"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OP_0",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "OP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_1",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "OP_1",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
        "fct-type": "function",
        "title": "OP_1"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OP_1",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "OP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_10",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "OP_10",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
        "fct-type": "function",
        "title": "OP_10"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OP_10",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "OP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_11",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "OP_11",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
        "fct-type": "function",
        "title": "OP_11"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OP_11",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "OP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_12",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "OP_12",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
        "fct-type": "function",
        "title": "OP_12"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OP_12",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "OP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_13",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "OP_13",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
        "fct-type": "function",
        "title": "OP_13"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OP_13",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "OP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_14",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "OP_14",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
        "fct-type": "function",
        "title": "OP_14"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OP_14",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "OP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_15",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "OP_15",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
        "fct-type": "function",
        "title": "OP_15"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OP_15",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "OP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_16",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "OP_16",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
        "fct-type": "function",
        "title": "OP_16"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OP_16",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "OP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_1NEGATE",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "OP_1NEGATE",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
        "fct-type": "function",
        "title": "OP_1NEGATE"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OP_1NEGATE",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "OP NEGATE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_2",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "OP_2",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
        "fct-type": "function",
        "title": "OP_2"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OP_2",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "OP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_3",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "OP_3",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
        "fct-type": "function",
        "title": "OP_3"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OP_3",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "OP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_4",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "OP_4",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
        "fct-type": "function",
        "title": "OP_4"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OP_4",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "OP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_5",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "OP_5",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
        "fct-type": "function",
        "title": "OP_5"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OP_5",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "OP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_6",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "OP_6",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
        "fct-type": "function",
        "title": "OP_6"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OP_6",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "OP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_7",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "OP_7",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
        "fct-type": "function",
        "title": "OP_7"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OP_7",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "OP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_8",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "OP_8",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
        "fct-type": "function",
        "title": "OP_8"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OP_8",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "OP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_9",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "OP_9",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
        "fct-type": "function",
        "title": "OP_9"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OP_9",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "OP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_CHECKMULTISIG",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "OP_CHECKMULTISIG",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
        "fct-type": "function",
        "title": "OP_CHECKMULTISIG"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OP_CHECKMULTISIG",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "OP CHECKMULTISIG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_CHECKSIG",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "OP_CHECKSIG",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
        "fct-type": "function",
        "title": "OP_CHECKSIG"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OP_CHECKSIG",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "OP CHECKSIG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_DUP",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "OP_DUP",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
        "fct-type": "function",
        "title": "OP_DUP"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OP_DUP",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "OP DUP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_EQUAL",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "OP_EQUAL",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
        "fct-type": "function",
        "title": "OP_EQUAL"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OP_EQUAL",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "OP EQUAL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_EQUALVERIFY",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "OP_EQUALVERIFY",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
        "fct-type": "function",
        "title": "OP_EQUALVERIFY"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OP_EQUALVERIFY",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "OP EQUALVERIFY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_HASH160",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "OP_HASH160",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
        "fct-type": "function",
        "title": "OP_HASH160"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OP_HASH160",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "OP HASH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_INVALIDOPCODE",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "OP_INVALIDOPCODE Word8",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
        "fct-type": "function",
        "title": "OP_INVALIDOPCODE"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OP_INVALIDOPCODE",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "OP INVALIDOPCODE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_PUBKEY",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "OP_PUBKEY PubKey",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
        "fct-type": "function",
        "title": "OP_PUBKEY"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OP_PUBKEY",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "OP PUBKEY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_PUSHDATA",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "OP_PUSHDATA ByteString",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
        "fct-type": "function",
        "title": "OP_PUSHDATA"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OP_PUSHDATA",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "OP PUSHDATA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_VERIFY",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "OP_VERIFY",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
        "fct-type": "function",
        "title": "OP_VERIFY"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OP_VERIFY",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "OP VERIFY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OutPoint",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "OutPoint",
        "fct-source": "src/Network-Haskoin-Protocol-Tx.html#OutPoint",
        "fct-type": "function",
        "title": "OutPoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "OutPoint",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Out Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:Ping",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "Ping",
        "fct-source": "src/Network-Haskoin-Protocol-Ping.html#Ping",
        "fct-type": "function",
        "title": "Ping"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "Ping",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Ping",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:Pong",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "Pong",
        "fct-source": "src/Network-Haskoin-Protocol-Ping.html#Pong",
        "fct-type": "function",
        "title": "Pong"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "Pong",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Pong",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:Script",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "Script",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#Script",
        "fct-type": "function",
        "title": "Script"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "Script",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Script",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:Tx",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "Tx",
        "fct-source": "src/Network-Haskoin-Protocol-Tx.html#Tx",
        "fct-type": "function",
        "title": "Tx"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "Tx",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Tx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:TxIn",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "TxIn",
        "fct-source": "src/Network-Haskoin-Protocol-Tx.html#TxIn",
        "fct-type": "function",
        "title": "TxIn"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "TxIn",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Tx In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:TxOut",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "TxOut",
        "fct-source": "src/Network-Haskoin-Protocol-Tx.html#TxOut",
        "fct-type": "function",
        "title": "TxOut"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "TxOut",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Tx Out",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:VarInt",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "VarInt",
        "fct-source": "src/Network-Haskoin-Protocol-VarInt.html#VarInt",
        "fct-type": "function",
        "title": "VarInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "VarInt",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Var Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:VarString",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "VarString",
        "fct-source": "src/Network-Haskoin-Protocol-VarString.html#VarString",
        "fct-type": "function",
        "title": "VarString"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "VarString",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Var String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:Version",
      "description": {
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "Version",
        "fct-source": "src/Network-Haskoin-Protocol-Version.html#Version",
        "fct-type": "function",
        "title": "Version"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "Version",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:addrList",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "![NetworkAddressTime]",
        "fct-source": "src/Network-Haskoin-Protocol-Addr.html#Addr",
        "fct-type": "function",
        "title": "addrList"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "addrList",
        "normalized": "[NetworkAddressTime]",
        "package": "haskoin-protocol",
        "partial": "List",
        "signature": "[NetworkAddressTime]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:addrRecv",
      "description": {
        "fct-descr": "\u003cp\u003eNetwork address of the node receiving this message.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!NetworkAddress",
        "fct-source": "src/Network-Haskoin-Protocol-Version.html#Version",
        "fct-type": "function",
        "title": "addrRecv"
      },
      "index": {
        "description": "Network address of the node receiving this message",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "addrRecv",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Recv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:addrSend",
      "description": {
        "fct-descr": "\u003cp\u003eNetwork address of the node sending this message.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!NetworkAddress",
        "fct-source": "src/Network-Haskoin-Protocol-Version.html#Version",
        "fct-type": "function",
        "title": "addrSend"
      },
      "index": {
        "description": "Network address of the node sending this message",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "addrSend",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Send",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:alertPayload",
      "description": {
        "fct-descr": "\u003cp\u003eAlert payload. \n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!VarString",
        "fct-source": "src/Network-Haskoin-Protocol-Alert.html#Alert",
        "fct-type": "function",
        "title": "alertPayload"
      },
      "index": {
        "description": "Alert payload",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "alertPayload",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Payload",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:alertSignature",
      "description": {
        "fct-descr": "\u003cp\u003eECDSA signature of the payload\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!VarString",
        "fct-source": "src/Network-Haskoin-Protocol-Alert.html#Alert",
        "fct-type": "function",
        "title": "alertSignature"
      },
      "index": {
        "description": "ECDSA signature of the payload",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "alertSignature",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Signature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:bhNonce",
      "description": {
        "fct-descr": "\u003cp\u003eA random nonce used to generate this block. Additional\n randomness is included in the coinbase transaction of\n this block.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Haskoin-Protocol-BlockHeader.html#BlockHeader",
        "fct-type": "function",
        "title": "bhNonce"
      },
      "index": {
        "description": "random nonce used to generate this block Additional randomness is included in the coinbase transaction of this block",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "bhNonce",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Nonce",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:blockBits",
      "description": {
        "fct-descr": "\u003cp\u003eThe difficulty target being used for this block\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Haskoin-Protocol-BlockHeader.html#BlockHeader",
        "fct-type": "function",
        "title": "blockBits"
      },
      "index": {
        "description": "The difficulty target being used for this block",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "blockBits",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:blockCoinbaseTx",
      "description": {
        "fct-descr": "\u003cp\u003eCoinbase transaction of this block\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!CoinbaseTx",
        "fct-source": "src/Network-Haskoin-Protocol-Block.html#Block",
        "fct-type": "function",
        "title": "blockCoinbaseTx"
      },
      "index": {
        "description": "Coinbase transaction of this block",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "blockCoinbaseTx",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Coinbase Tx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:blockHeader",
      "description": {
        "fct-descr": "\u003cp\u003eHeader information for this block\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!BlockHeader",
        "fct-source": "src/Network-Haskoin-Protocol-Block.html#Block",
        "fct-type": "function",
        "title": "blockHeader"
      },
      "index": {
        "description": "Header information for this block",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "blockHeader",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:blockTimestamp",
      "description": {
        "fct-descr": "\u003cp\u003eUnix timestamp recording when this block was created\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Haskoin-Protocol-BlockHeader.html#BlockHeader",
        "fct-type": "function",
        "title": "blockTimestamp"
      },
      "index": {
        "description": "Unix timestamp recording when this block was created",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "blockTimestamp",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Timestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:blockTxns",
      "description": {
        "fct-descr": "\u003cp\u003eList of transactions pertaining to this block\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "![Tx]",
        "fct-source": "src/Network-Haskoin-Protocol-Block.html#Block",
        "fct-type": "function",
        "title": "blockTxns"
      },
      "index": {
        "description": "List of transactions pertaining to this block",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "blockTxns",
        "normalized": "[Tx]",
        "package": "haskoin-protocol",
        "partial": "Txns",
        "signature": "[Tx]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:blockVersion",
      "description": {
        "fct-descr": "\u003cp\u003eBlock version information, based on the version of the\n software creating this block.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Haskoin-Protocol-BlockHeader.html#BlockHeader",
        "fct-type": "function",
        "title": "blockVersion"
      },
      "index": {
        "description": "Block version information based on the version of the software creating this block",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "blockVersion",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:cbData",
      "description": {
        "fct-descr": "\u003cp\u003eData embedded inside the coinbase transaction.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!ByteString",
        "fct-source": "src/Network-Haskoin-Protocol-Tx.html#CoinbaseTx",
        "fct-type": "function",
        "title": "cbData"
      },
      "index": {
        "description": "Data embedded inside the coinbase transaction",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "cbData",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:cbLockTime",
      "description": {
        "fct-descr": "\u003cp\u003eThe block number of timestamp at which this \n transaction is locked.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Haskoin-Protocol-Tx.html#CoinbaseTx",
        "fct-type": "function",
        "title": "cbLockTime"
      },
      "index": {
        "description": "The block number of timestamp at which this transaction is locked",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "cbLockTime",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Lock Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:cbOut",
      "description": {
        "fct-descr": "\u003cp\u003eList of transaction outputs.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "![TxOut]",
        "fct-source": "src/Network-Haskoin-Protocol-Tx.html#CoinbaseTx",
        "fct-type": "function",
        "title": "cbOut"
      },
      "index": {
        "description": "List of transaction outputs",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "cbOut",
        "normalized": "[TxOut]",
        "package": "haskoin-protocol",
        "partial": "Out",
        "signature": "[TxOut]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:cbVersion",
      "description": {
        "fct-descr": "\u003cp\u003eTransaction data format version.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Haskoin-Protocol-Tx.html#CoinbaseTx",
        "fct-type": "function",
        "title": "cbVersion"
      },
      "index": {
        "description": "Transaction data format version",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "cbVersion",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:decodeScriptOps",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a \u003ccode\u003e\u003ca\u003eScript\u003c/a\u003e\u003c/code\u003e from a ByteString by omiting the length of the script.\n This is used to produce scripthash addresses.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "ByteString -\u003e Either String Script",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#decodeScriptOps",
        "fct-type": "function",
        "title": "decodeScriptOps"
      },
      "index": {
        "description": "Decode Script from ByteString by omiting the length of the script This is used to produce scripthash addresses",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "decodeScriptOps",
        "normalized": "ByteString-\u003eEither String Script",
        "package": "haskoin-protocol",
        "partial": "Script Ops",
        "signature": "ByteString-\u003eEither String Script"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:decodeTxid",
      "description": {
        "fct-descr": "\u003cp\u003eDecodes a little endian transaction hash in HEX format. \n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "String -\u003e Maybe Hash256",
        "fct-source": "src/Network-Haskoin-Protocol-Tx.html#decodeTxid",
        "fct-type": "function",
        "title": "decodeTxid"
      },
      "index": {
        "description": "Decodes little endian transaction hash in HEX format",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "decodeTxid",
        "normalized": "String-\u003eMaybe Hash",
        "package": "haskoin-protocol",
        "partial": "Txid",
        "signature": "String-\u003eMaybe Hash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:encodeScriptOps",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eScript\u003c/a\u003e\u003c/code\u003e into a ByteString by omiting the length of the script.\n This is used to produce scripthash addresses.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "Script -\u003e ByteString",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#encodeScriptOps",
        "fct-type": "function",
        "title": "encodeScriptOps"
      },
      "index": {
        "description": "Encode Script into ByteString by omiting the length of the script This is used to produce scripthash addresses",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "encodeScriptOps",
        "normalized": "Script-\u003eByteString",
        "package": "haskoin-protocol",
        "partial": "Script Ops",
        "signature": "Script-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:encodeTxid",
      "description": {
        "fct-descr": "\u003cp\u003eEncodes a transaction hash as little endian in HEX format.\n This is mostly used for displaying transaction ids. Internally, these ids\n are handled as big endian but are transformed to little endian when\n displaying them.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "Hash256 -\u003e String",
        "fct-source": "src/Network-Haskoin-Protocol-Tx.html#encodeTxid",
        "fct-type": "function",
        "title": "encodeTxid"
      },
      "index": {
        "description": "Encodes transaction hash as little endian in HEX format This is mostly used for displaying transaction ids Internally these ids are handled as big endian but are transformed to little endian when displaying them",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "encodeTxid",
        "normalized": "Hash-\u003eString",
        "package": "haskoin-protocol",
        "partial": "Txid",
        "signature": "Hash-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:getBlocksHashStop",
      "description": {
        "fct-descr": "\u003cp\u003eHash of the last desired block. If set to zero, the\n maximum number of block hashes is returned (500).\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Hash256",
        "fct-source": "src/Network-Haskoin-Protocol-GetBlocks.html#GetBlocks",
        "fct-type": "function",
        "title": "getBlocksHashStop"
      },
      "index": {
        "description": "Hash of the last desired block If set to zero the maximum number of block hashes is returned",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "getBlocksHashStop",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Blocks Hash Stop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:getBlocksLocator",
      "description": {
        "fct-descr": "\u003cp\u003eBlock locator object. It is a list of block hashes from the\n most recent block back to the genesis block. The list is\n dense at first and sparse towards the end.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!BlockLocator",
        "fct-source": "src/Network-Haskoin-Protocol-GetBlocks.html#GetBlocks",
        "fct-type": "function",
        "title": "getBlocksLocator"
      },
      "index": {
        "description": "Block locator object It is list of block hashes from the most recent block back to the genesis block The list is dense at first and sparse towards the end",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "getBlocksLocator",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Blocks Locator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:getBlocksVersion",
      "description": {
        "fct-descr": "\u003cp\u003eThe protocol version\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Haskoin-Protocol-GetBlocks.html#GetBlocks",
        "fct-type": "function",
        "title": "getBlocksVersion"
      },
      "index": {
        "description": "The protocol version",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "getBlocksVersion",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Blocks Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:getDataList",
      "description": {
        "fct-descr": "\u003cp\u003eList of object hashes \n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "![InvVector]",
        "fct-source": "src/Network-Haskoin-Protocol-GetData.html#GetData",
        "fct-type": "function",
        "title": "getDataList"
      },
      "index": {
        "description": "List of object hashes",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "getDataList",
        "normalized": "[InvVector]",
        "package": "haskoin-protocol",
        "partial": "Data List",
        "signature": "[InvVector]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:getHeadersBL",
      "description": {
        "fct-descr": "\u003cp\u003eBlock locator object. It is a list of block hashes from\n the most recent block back to the Genesis block. The list\n is dense at first and sparse towards the end.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!BlockLocator",
        "fct-source": "src/Network-Haskoin-Protocol-GetHeaders.html#GetHeaders",
        "fct-type": "function",
        "title": "getHeadersBL"
      },
      "index": {
        "description": "Block locator object It is list of block hashes from the most recent block back to the Genesis block The list is dense at first and sparse towards the end",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "getHeadersBL",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Headers BL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:getHeadersHashStop",
      "description": {
        "fct-descr": "\u003cp\u003eHash of the last desired block header. When set to zero,\n the maximum number of block headers is returned (2000)\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Hash256",
        "fct-source": "src/Network-Haskoin-Protocol-GetHeaders.html#GetHeaders",
        "fct-type": "function",
        "title": "getHeadersHashStop"
      },
      "index": {
        "description": "Hash of the last desired block header When set to zero the maximum number of block headers is returned",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "getHeadersHashStop",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Headers Hash Stop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:getHeadersVersion",
      "description": {
        "fct-descr": "\u003cp\u003eThe protocol version\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Haskoin-Protocol-GetHeaders.html#GetHeaders",
        "fct-type": "function",
        "title": "getHeadersVersion"
      },
      "index": {
        "description": "The protocol version",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "getHeadersVersion",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Headers Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:getScriptOps",
      "description": {
        "fct-descr": "\u003cp\u003eDeserialize a list of \u003ccode\u003e\u003ca\u003eScriptOp\u003c/a\u003e\u003c/code\u003e inside the \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e monad.\n This deserialization does not take into account the length of the script.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "Get [ScriptOp]",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#getScriptOps",
        "fct-type": "function",
        "title": "getScriptOps"
      },
      "index": {
        "description": "Deserialize list of ScriptOp inside the Get monad This deserialization does not take into account the length of the script",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "getScriptOps",
        "normalized": "Get[ScriptOp]",
        "package": "haskoin-protocol",
        "partial": "Script Ops",
        "signature": "Get[ScriptOp]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:getVarInt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "Word64",
        "fct-source": "src/Network-Haskoin-Protocol-VarInt.html#VarInt",
        "fct-type": "function",
        "title": "getVarInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "getVarInt",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Var Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:getVarString",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Haskoin-Protocol-VarString.html#VarString",
        "fct-type": "function",
        "title": "getVarString"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "getVarString",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Var String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:headChecksum",
      "description": {
        "fct-descr": "\u003cp\u003eChecksum of the payload. \n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!CheckSum32",
        "fct-source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageHeader",
        "fct-type": "function",
        "title": "headChecksum"
      },
      "index": {
        "description": "Checksum of the payload",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "headChecksum",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Checksum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:headCmd",
      "description": {
        "fct-descr": "\u003cp\u003eMessage command identifying the type of message.\n included in the payload.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!MessageCommand",
        "fct-source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageHeader",
        "fct-type": "function",
        "title": "headCmd"
      },
      "index": {
        "description": "Message command identifying the type of message included in the payload",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "headCmd",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Cmd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:headMagic",
      "description": {
        "fct-descr": "\u003cp\u003eNetwork magic bytes. It is used to differentiate \n messages meant for different bitcoin networks, such as\n prodnet and testnet.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageHeader",
        "fct-type": "function",
        "title": "headMagic"
      },
      "index": {
        "description": "Network magic bytes It is used to differentiate messages meant for different bitcoin networks such as prodnet and testnet",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "headMagic",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Magic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:headPayloadSize",
      "description": {
        "fct-descr": "\u003cp\u003eByte length of the payload.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageHeader",
        "fct-type": "function",
        "title": "headPayloadSize"
      },
      "index": {
        "description": "Byte length of the payload",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "headPayloadSize",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Payload Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:headersList",
      "description": {
        "fct-descr": "\u003cp\u003eList of block headers with respective transaction counts\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "![BlockHeaderCount]",
        "fct-source": "src/Network-Haskoin-Protocol-Headers.html#Headers",
        "fct-type": "function",
        "title": "headersList"
      },
      "index": {
        "description": "List of block headers with respective transaction counts",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "headersList",
        "normalized": "[BlockHeaderCount]",
        "package": "haskoin-protocol",
        "partial": "List",
        "signature": "[BlockHeaderCount]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:invHash",
      "description": {
        "fct-descr": "\u003cp\u003eHash of the object referenced by this inventory vector\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Hash256",
        "fct-source": "src/Network-Haskoin-Protocol-InvVector.html#InvVector",
        "fct-type": "function",
        "title": "invHash"
      },
      "index": {
        "description": "Hash of the object referenced by this inventory vector",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "invHash",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:invList",
      "description": {
        "fct-descr": "\u003cp\u003eInventory vectors\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "![InvVector]",
        "fct-source": "src/Network-Haskoin-Protocol-Inv.html#Inv",
        "fct-type": "function",
        "title": "invList"
      },
      "index": {
        "description": "Inventory vectors",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "invList",
        "normalized": "[InvVector]",
        "package": "haskoin-protocol",
        "partial": "List",
        "signature": "[InvVector]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:invType",
      "description": {
        "fct-descr": "\u003cp\u003eType of the object referenced by this inventory vector\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!InvType",
        "fct-source": "src/Network-Haskoin-Protocol-InvVector.html#InvVector",
        "fct-type": "function",
        "title": "invType"
      },
      "index": {
        "description": "Type of the object referenced by this inventory vector",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "invType",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:merkleRoot",
      "description": {
        "fct-descr": "\u003cp\u003eRoot of the merkle tree of all transactions pertaining\n to this block.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Hash256",
        "fct-source": "src/Network-Haskoin-Protocol-BlockHeader.html#BlockHeader",
        "fct-type": "function",
        "title": "merkleRoot"
      },
      "index": {
        "description": "Root of the merkle tree of all transactions pertaining to this block",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "merkleRoot",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Root",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:naAddress",
      "description": {
        "fct-descr": "\u003cp\u003eIPv6 address serialized as big endian\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!(Word64, Word64)",
        "fct-source": "src/Network-Haskoin-Protocol-NetworkAddress.html#NetworkAddress",
        "fct-type": "function",
        "title": "naAddress"
      },
      "index": {
        "description": "IPv6 address serialized as big endian",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "naAddress",
        "normalized": "(Word,Word)",
        "package": "haskoin-protocol",
        "partial": "Address",
        "signature": "(Word,Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:naPort",
      "description": {
        "fct-descr": "\u003cp\u003ePort number serialized as big endian\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Word16",
        "fct-source": "src/Network-Haskoin-Protocol-NetworkAddress.html#NetworkAddress",
        "fct-type": "function",
        "title": "naPort"
      },
      "index": {
        "description": "Port number serialized as big endian",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "naPort",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:naServices",
      "description": {
        "fct-descr": "\u003cp\u003eBitmask of services available for this address\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Word64",
        "fct-source": "src/Network-Haskoin-Protocol-NetworkAddress.html#NetworkAddress",
        "fct-type": "function",
        "title": "naServices"
      },
      "index": {
        "description": "Bitmask of services available for this address",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "naServices",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Services",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:notFoundList",
      "description": {
        "fct-descr": "\u003cp\u003eInventory vectors related to this request\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "![InvVector]",
        "fct-source": "src/Network-Haskoin-Protocol-NotFound.html#NotFound",
        "fct-type": "function",
        "title": "notFoundList"
      },
      "index": {
        "description": "Inventory vectors related to this request",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "notFoundList",
        "normalized": "[InvVector]",
        "package": "haskoin-protocol",
        "partial": "Found List",
        "signature": "[InvVector]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:outPointHash",
      "description": {
        "fct-descr": "\u003cp\u003eThe hash of the referenced transaction.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Hash256",
        "fct-source": "src/Network-Haskoin-Protocol-Tx.html#OutPoint",
        "fct-type": "function",
        "title": "outPointHash"
      },
      "index": {
        "description": "The hash of the referenced transaction",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "outPointHash",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Point Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:outPointIndex",
      "description": {
        "fct-descr": "\u003cp\u003eThe position of the specific output in the transaction.\n The first output position is 0.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Haskoin-Protocol-Tx.html#OutPoint",
        "fct-type": "function",
        "title": "outPointIndex"
      },
      "index": {
        "description": "The position of the specific output in the transaction The first output position is",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "outPointIndex",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Point Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:outValue",
      "description": {
        "fct-descr": "\u003cp\u003eTransaction output value.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Word64",
        "fct-source": "src/Network-Haskoin-Protocol-Tx.html#TxOut",
        "fct-type": "function",
        "title": "outValue"
      },
      "index": {
        "description": "Transaction output value",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "outValue",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:pingNonce",
      "description": {
        "fct-descr": "\u003cp\u003eA random nonce used to identify the recipient of the ping\n request once a Pong response is received.  \n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "Word64",
        "fct-source": "src/Network-Haskoin-Protocol-Ping.html#Ping",
        "fct-type": "function",
        "title": "pingNonce"
      },
      "index": {
        "description": "random nonce used to identify the recipient of the ping request once Pong response is received",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "pingNonce",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Nonce",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:pongNonce",
      "description": {
        "fct-descr": "\u003cp\u003eWhen responding to a Ping request, the nonce from the Ping\n is copied in the Pong response.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "Word64",
        "fct-source": "src/Network-Haskoin-Protocol-Ping.html#Pong",
        "fct-type": "function",
        "title": "pongNonce"
      },
      "index": {
        "description": "When responding to Ping request the nonce from the Ping is copied in the Pong response",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "pongNonce",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Nonce",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:prevBlock",
      "description": {
        "fct-descr": "\u003cp\u003eHash of the previous block (parent) referenced by this\n block.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Hash256",
        "fct-source": "src/Network-Haskoin-Protocol-BlockHeader.html#BlockHeader",
        "fct-type": "function",
        "title": "prevBlock"
      },
      "index": {
        "description": "Hash of the previous block parent referenced by this block",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "prevBlock",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:prevOutput",
      "description": {
        "fct-descr": "\u003cp\u003eReference the previous transaction output (hash + position)\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!OutPoint",
        "fct-source": "src/Network-Haskoin-Protocol-Tx.html#TxIn",
        "fct-type": "function",
        "title": "prevOutput"
      },
      "index": {
        "description": "Reference the previous transaction output hash position",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "prevOutput",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:putScriptOps",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a list of \u003ccode\u003e\u003ca\u003eScriptOp\u003c/a\u003e\u003c/code\u003e inside the \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e monad.\n This serialization does not take into account the length of the script.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "[ScriptOp] -\u003e Put",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#putScriptOps",
        "fct-type": "function",
        "title": "putScriptOps"
      },
      "index": {
        "description": "Serialize list of ScriptOp inside the Put monad This serialization does not take into account the length of the script",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "putScriptOps",
        "normalized": "[ScriptOp]-\u003ePut",
        "package": "haskoin-protocol",
        "partial": "Script Ops",
        "signature": "[ScriptOp]-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:relay",
      "description": {
        "fct-descr": "\u003cp\u003eWether the remote peer should announce relaying transactions\n or not. This feature is enabled since version \u003e= 70001. See\n BIP37 for more details.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Bool",
        "fct-source": "src/Network-Haskoin-Protocol-Version.html#Version",
        "fct-type": "function",
        "title": "relay"
      },
      "index": {
        "description": "Wether the remote peer should announce relaying transactions or not This feature is enabled since version See BIP37 for more details",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "relay",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:scriptInput",
      "description": {
        "fct-descr": "\u003cp\u003eScript providing the requirements of the previous transaction\n output to spend those coins.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Script",
        "fct-source": "src/Network-Haskoin-Protocol-Tx.html#TxIn",
        "fct-type": "function",
        "title": "scriptInput"
      },
      "index": {
        "description": "Script providing the requirements of the previous transaction output to spend those coins",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "scriptInput",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Input",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:scriptOps",
      "description": {
        "fct-descr": "\u003cp\u003eList of script operators defining this script\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "[ScriptOp]",
        "fct-source": "src/Network-Haskoin-Protocol-Script.html#Script",
        "fct-type": "function",
        "title": "scriptOps"
      },
      "index": {
        "description": "List of script operators defining this script",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "scriptOps",
        "normalized": "[ScriptOp]",
        "package": "haskoin-protocol",
        "partial": "Ops",
        "signature": "[ScriptOp]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:scriptOutput",
      "description": {
        "fct-descr": "\u003cp\u003eScript specifying the conditions to spend this output.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Script",
        "fct-source": "src/Network-Haskoin-Protocol-Tx.html#TxOut",
        "fct-type": "function",
        "title": "scriptOutput"
      },
      "index": {
        "description": "Script specifying the conditions to spend this output",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "scriptOutput",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:services",
      "description": {
        "fct-descr": "\u003cp\u003eBitmask of features to enable for this connection.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Word64",
        "fct-source": "src/Network-Haskoin-Protocol-Version.html#Version",
        "fct-type": "function",
        "title": "services"
      },
      "index": {
        "description": "Bitmask of features to enable for this connection",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "services",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:startHeight",
      "description": {
        "fct-descr": "\u003cp\u003eThe height of the last block received by the sending node.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Haskoin-Protocol-Version.html#Version",
        "fct-type": "function",
        "title": "startHeight"
      },
      "index": {
        "description": "The height of the last block received by the sending node",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "startHeight",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Height",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:timestamp",
      "description": {
        "fct-descr": "\u003cp\u003eUNIX timestamp\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Word64",
        "fct-source": "src/Network-Haskoin-Protocol-Version.html#Version",
        "fct-type": "function",
        "title": "timestamp"
      },
      "index": {
        "description": "UNIX timestamp",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "timestamp",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:txIn",
      "description": {
        "fct-descr": "\u003cp\u003eList of transaction inputs\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "![TxIn]",
        "fct-source": "src/Network-Haskoin-Protocol-Tx.html#Tx",
        "fct-type": "function",
        "title": "txIn"
      },
      "index": {
        "description": "List of transaction inputs",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "txIn",
        "normalized": "[TxIn]",
        "package": "haskoin-protocol",
        "partial": "In",
        "signature": "[TxIn]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:txInSequence",
      "description": {
        "fct-descr": "\u003cp\u003eTransaction version as defined by the sender of the\n transaction. The intended use is for replacing transactions with\n new information before the transaction is included in a block.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Haskoin-Protocol-Tx.html#TxIn",
        "fct-type": "function",
        "title": "txInSequence"
      },
      "index": {
        "description": "Transaction version as defined by the sender of the transaction The intended use is for replacing transactions with new information before the transaction is included in block",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "txInSequence",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "In Sequence",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:txLockTime",
      "description": {
        "fct-descr": "\u003cp\u003eThe block number of timestamp at which this transaction is locked\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Haskoin-Protocol-Tx.html#Tx",
        "fct-type": "function",
        "title": "txLockTime"
      },
      "index": {
        "description": "The block number of timestamp at which this transaction is locked",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "txLockTime",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Lock Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:txOut",
      "description": {
        "fct-descr": "\u003cp\u003eList of transaction outputs\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "![TxOut]",
        "fct-source": "src/Network-Haskoin-Protocol-Tx.html#Tx",
        "fct-type": "function",
        "title": "txOut"
      },
      "index": {
        "description": "List of transaction outputs",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "txOut",
        "normalized": "[TxOut]",
        "package": "haskoin-protocol",
        "partial": "Out",
        "signature": "[TxOut]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:txVersion",
      "description": {
        "fct-descr": "\u003cp\u003eTransaction data format version\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Haskoin-Protocol-Tx.html#Tx",
        "fct-type": "function",
        "title": "txVersion"
      },
      "index": {
        "description": "Transaction data format version",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "txVersion",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:txid",
      "description": {
        "fct-descr": "\u003cp\u003eComputed the hash of a transaction.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "Tx -\u003e Hash256",
        "fct-source": "src/Network-Haskoin-Protocol-Tx.html#txid",
        "fct-type": "function",
        "title": "txid"
      },
      "index": {
        "description": "Computed the hash of transaction",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "txid",
        "normalized": "Tx-\u003eHash",
        "package": "haskoin-protocol",
        "partial": "",
        "signature": "Tx-\u003eHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:userAgent",
      "description": {
        "fct-descr": "\u003cp\u003eUser agent\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!VarString",
        "fct-source": "src/Network-Haskoin-Protocol-Version.html#Version",
        "fct-type": "function",
        "title": "userAgent"
      },
      "index": {
        "description": "User agent",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "userAgent",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Agent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:verNonce",
      "description": {
        "fct-descr": "\u003cp\u003eRandomly generated identifying sent with every version\n message. This nonce is used to detect connection to self.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Word64",
        "fct-source": "src/Network-Haskoin-Protocol-Version.html#Version",
        "fct-type": "function",
        "title": "verNonce"
      },
      "index": {
        "description": "Randomly generated identifying sent with every version message This nonce is used to detect connection to self",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "verNonce",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "Nonce",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:version",
      "description": {
        "fct-descr": "\u003cp\u003eProtocol version being used by the node.\n\u003c/p\u003e",
        "fct-module": "Network.Haskoin.Protocol",
        "fct-package": "haskoin-protocol",
        "fct-signature": "!Word32",
        "fct-source": "src/Network-Haskoin-Protocol-Version.html#Version",
        "fct-type": "function",
        "title": "version"
      },
      "index": {
        "description": "Protocol version being used by the node",
        "hierarchy": "Network Haskoin Protocol",
        "module": "Network.Haskoin.Protocol",
        "name": "version",
        "normalized": "",
        "package": "haskoin-protocol",
        "partial": "",
        "signature": ""
      }
    }
  }
]