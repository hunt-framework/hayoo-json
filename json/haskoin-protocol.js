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
        "word": "haskoin-protocol"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package provides QuickCheck Arbitrary instances for all the protocol\n  data types defined in \u003ccode\u003e\u003ca\u003eProtocol\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Haskoin.Protocol.Arbitrary",
          "name": "Arbitrary",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-Arbitrary.html",
          "type": "module"
        },
        "index": {
          "description": "This package provides QuickCheck Arbitrary instances for all the protocol data types defined in Protocol",
          "hierarchy": "Network Haskoin Protocol Arbitrary",
          "module": "Network.Haskoin.Protocol.Arbitrary",
          "name": "Arbitrary",
          "package": "haskoin-protocol",
          "partial": "Arbitrary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol-Arbitrary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package provides all of the basic types used for the Bitcoin \n  networking protocol together with Data.Binary instances for efficiently\n  serializing and de-serializing them. More information on the bitcoin protocol\n  is available here: \u003ca\u003ehttp://en.bitcoin.it/wiki/Protocol_specification\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "Protocol",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol.html",
          "type": "module"
        },
        "index": {
          "description": "This package provides all of the basic types used for the Bitcoin networking protocol together with Data.Binary instances for efficiently serializing and de-serializing them More information on the bitcoin protocol is available here http en.bitcoin.it wiki Protocol specification",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "Protocol",
          "package": "haskoin-protocol",
          "partial": "Protocol",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides information on known nodes in the bitcoin network. An \u003ccode\u003e\u003ca\u003eAddr\u003c/a\u003e\u003c/code\u003e\n type is sent inside a \u003ccode\u003eMessage\u003c/code\u003e as a response to a \u003ccode\u003eGetAddr\u003c/code\u003e message.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "Addr",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-Addr.html#Addr",
          "type": "data"
        },
        "index": {
          "description": "Provides information on known nodes in the bitcoin network An Addr type is sent inside Message as response to GetAddr message",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "Addr",
          "package": "haskoin-protocol",
          "partial": "Addr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:Addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type describing signed messages that can be sent between bitcoin\n nodes to display important notifications to end users about the health of\n the network.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "Alert",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-Alert.html#Alert",
          "type": "data"
        },
        "index": {
          "description": "Data type describing signed messages that can be sent between bitcoin nodes to display important notifications to end users about the health of the network",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "Alert",
          "package": "haskoin-protocol",
          "partial": "Alert",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:Alert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type describing a block in the bitcoin protocol. Blocks are sent in\n response to \u003ccode\u003eGetData\u003c/code\u003e messages that are requesting information from a\n block hash.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "Block",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-Block.html#Block",
          "type": "data"
        },
        "index": {
          "description": "Data type describing block in the bitcoin protocol Blocks are sent in response to GetData messages that are requesting information from block hash",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "Block",
          "package": "haskoin-protocol",
          "partial": "Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type recording information on a \u003ccode\u003eBlock\u003c/code\u003e. The hash of a block is\n defined as the hash of this data structure. The block mining process\n involves finding a partial hash collision by varying the nonce in the\n \u003ccode\u003e\u003ca\u003eBlockHeader\u003c/a\u003e\u003c/code\u003e and/or additional randomness in the \u003ccode\u003eCoinbaseTx\u003c/code\u003e of this\n \u003ccode\u003eBlock\u003c/code\u003e. Variations in the \u003ccode\u003eCoinbaseTx\u003c/code\u003e will result in different merkle \n roots in the \u003ccode\u003e\u003ca\u003eBlockHeader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "BlockHeader",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-BlockHeader.html#BlockHeader",
          "type": "data"
        },
        "index": {
          "description": "Data type recording information on Block The hash of block is defined as the hash of this data structure The block mining process involves finding partial hash collision by varying the nonce in the BlockHeader and or additional randomness in the CoinbaseTx of this Block Variations in the CoinbaseTx will result in different merkle roots in the BlockHeader",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "BlockHeader",
          "package": "haskoin-protocol",
          "partial": "Block Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:BlockHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eBlockHeader\u003c/a\u003e\u003c/code\u003e type with a transaction count as \u003ccode\u003e\u003ca\u003eVarInt\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "BlockHeaderCount",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-Headers.html#BlockHeaderCount",
          "type": "type"
        },
        "index": {
          "description": "BlockHeader type with transaction count as VarInt",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "BlockHeaderCount",
          "package": "haskoin-protocol",
          "partial": "Block Header Count",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:BlockHeaderCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing the coinbase transaction of a \u003ccode\u003eBlock\u003c/code\u003e. Coinbase\n transactions are special types of transactions which are created by miners\n when they find a new block. Coinbase transactions have no inputs. They have\n outputs sending the newly generated bitcoins together with all the block's\n fees to a bitcoin address (usually the miners address). Data can be embedded\n in a Coinbase transaction which can be chosen by the miner of a block. This\n data also typically contains some randomness which is used, together with\n the nonce, to find a partial hash collision on the block's hash.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "CoinbaseTx",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-Tx.html#CoinbaseTx",
          "type": "data"
        },
        "index": {
          "description": "Data type representing the coinbase transaction of Block Coinbase transactions are special types of transactions which are created by miners when they find new block Coinbase transactions have no inputs They have outputs sending the newly generated bitcoins together with all the block fees to bitcoin address usually the miners address Data can be embedded in Coinbase transaction which can be chosen by the miner of block This data also typically contains some randomness which is used together with the nonce to find partial hash collision on the block hash",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "CoinbaseTx",
          "package": "haskoin-protocol",
          "partial": "Coinbase Tx",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:CoinbaseTx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing a GetBlocks message request. It is used in the\n bitcoin protocol to retrieve blocks from a peer by providing it a\n \u003ccode\u003eBlockLocator\u003c/code\u003e object. The \u003ccode\u003eBlockLocator\u003c/code\u003e is a sparse list of block hashes\n from the caller node with the purpose of informing the receiving node\n about the state of the caller's blockchain. The receiver node will detect\n a wrong branch in the caller's main chain and send the caller appropriate \n \u003ccode\u003eBlocks\u003c/code\u003e. The response to a \u003ccode\u003e\u003ca\u003eGetBlocks\u003c/a\u003e\u003c/code\u003e message is an \u003ccode\u003eInv\u003c/code\u003e message\n containing the list of block hashes pertaining to the request. \n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "GetBlocks",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-GetBlocks.html#GetBlocks",
          "type": "data"
        },
        "index": {
          "description": "Data type representing GetBlocks message request It is used in the bitcoin protocol to retrieve blocks from peer by providing it BlockLocator object The BlockLocator is sparse list of block hashes from the caller node with the purpose of informing the receiving node about the state of the caller blockchain The receiver node will detect wrong branch in the caller main chain and send the caller appropriate Blocks The response to GetBlocks message is an Inv message containing the list of block hashes pertaining to the request",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "GetBlocks",
          "package": "haskoin-protocol",
          "partial": "Get Blocks",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:GetBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eGetData\u003c/a\u003e\u003c/code\u003e type is used to retrieve information on a specific object\n (\u003ccode\u003eBlock\u003c/code\u003e or \u003ccode\u003eTx\u003c/code\u003e) identified by the objects hash. The payload of a \u003ccode\u003e\u003ca\u003eGetData\u003c/a\u003e\u003c/code\u003e\n request is a list of \u003ccode\u003e\u003ca\u003eInvVector\u003c/a\u003e\u003c/code\u003e which represent all the hashes for which a\n node wants to request information. The response to a \u003ccode\u003eGetBlock\u003c/code\u003e message\n wille be either a \u003ccode\u003eBlock\u003c/code\u003e or a \u003ccode\u003eTx\u003c/code\u003e message depending on the type of the\n object referenced by the hash. Usually, \u003ccode\u003e\u003ca\u003eGetData\u003c/a\u003e\u003c/code\u003e messages are sent after a\n node receives an \u003ccode\u003eInv\u003c/code\u003e message to obtain information on unknown object\n hashes. \n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "GetData",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-GetData.html#GetData",
          "type": "data"
        },
        "index": {
          "description": "The GetData type is used to retrieve information on specific object Block or Tx identified by the objects hash The payload of GetData request is list of InvVector which represent all the hashes for which node wants to request information The response to GetBlock message wille be either Block or Tx message depending on the type of the object referenced by the hash Usually GetData messages are sent after node receives an Inv message to obtain information on unknown object hashes",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "GetData",
          "package": "haskoin-protocol",
          "partial": "Get Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:GetData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to the \u003ccode\u003eGetBlocks\u003c/code\u003e message type but for retrieving block headers\n only. The response to a \u003ccode\u003e\u003ca\u003eGetHeaders\u003c/a\u003e\u003c/code\u003e request is a \u003ccode\u003eHeaders\u003c/code\u003e message\n containing a list of block headers pertaining to the request. A maximum of\n 2000 block headers can be returned. \u003ccode\u003e\u003ca\u003eGetHeaders\u003c/a\u003e\u003c/code\u003e is used by thin (SPV)\n clients to exclude block contents when synchronizing the blockchain.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "GetHeaders",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-GetHeaders.html#GetHeaders",
          "type": "data"
        },
        "index": {
          "description": "Similar to the GetBlocks message type but for retrieving block headers only The response to GetHeaders request is Headers message containing list of block headers pertaining to the request maximum of block headers can be returned GetHeaders is used by thin SPV clients to exclude block contents when synchronizing the blockchain",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "GetHeaders",
          "package": "haskoin-protocol",
          "partial": "Get Headers",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:GetHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eHeaders\u003c/a\u003e\u003c/code\u003e type is used to return a list of block headers in\n response to a \u003ccode\u003eGetHeaders\u003c/code\u003e message.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "Headers",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-Headers.html#Headers",
          "type": "data"
        },
        "index": {
          "description": "The Headers type is used to return list of block headers in response to GetHeaders message",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "Headers",
          "package": "haskoin-protocol",
          "partial": "Headers",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:Headers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eInv\u003c/a\u003e\u003c/code\u003e messages are used by nodes to advertise their knowledge of new\n objects by publishing a list of hashes. \u003ccode\u003e\u003ca\u003eInv\u003c/a\u003e\u003c/code\u003e messages can be sent\n unsolicited or in response to a \u003ccode\u003eGetBlocks\u003c/code\u003e message.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "Inv",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-Inv.html#Inv",
          "type": "data"
        },
        "index": {
          "description": "Inv messages are used by nodes to advertise their knowledge of new objects by publishing list of hashes Inv messages can be sent unsolicited or in response to GetBlocks message",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "Inv",
          "package": "haskoin-protocol",
          "partial": "Inv",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:Inv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type identifying the type of an inventory vector. \n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "InvType",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-InvVector.html#InvType",
          "type": "data"
        },
        "index": {
          "description": "Data type identifying the type of an inventory vector",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "InvType",
          "package": "haskoin-protocol",
          "partial": "Inv Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:InvType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvectory vectors represent hashes identifying objects such as a \u003ccode\u003eBlock\u003c/code\u003e\n or a \u003ccode\u003eTx\u003c/code\u003e. They are sent inside messages to notify other peers about \n new data or data they have requested.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "InvVector",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-InvVector.html#InvVector",
          "type": "data"
        },
        "index": {
          "description": "Invectory vectors represent hashes identifying objects such as Block or Tx They are sent inside messages to notify other peers about new data or data they have requested",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "InvVector",
          "package": "haskoin-protocol",
          "partial": "Inv Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:InvVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e type is used to identify all the valid messages that can be\n sent between bitcoin peers. Only values of type \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e will be accepted\n by other bitcoin peers as bitcoin protocol messages need to be correctly\n serialized with message headers. Serializing a \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e value will\n include the \u003ccode\u003e\u003ca\u003eMessageHeader\u003c/a\u003e\u003c/code\u003e with the correct checksum value automatically.\n No need to add the \u003ccode\u003e\u003ca\u003eMessageHeader\u003c/a\u003e\u003c/code\u003e separately.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "Message",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-Message.html#Message",
          "type": "data"
        },
        "index": {
          "description": "The Message type is used to identify all the valid messages that can be sent between bitcoin peers Only values of type Message will be accepted by other bitcoin peers as bitcoin protocol messages need to be correctly serialized with message headers Serializing Message value will include the MessageHeader with the correct checksum value automatically No need to add the MessageHeader separately",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "Message",
          "package": "haskoin-protocol",
          "partial": "Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMessageCommand\u003c/a\u003e\u003c/code\u003e is included in a \u003ccode\u003e\u003ca\u003eMessageHeader\u003c/a\u003e\u003c/code\u003e in order to identify\n the type of message present in the payload. This allows the message \n de-serialization code to know how to decode a particular message payload.\n Every valid \u003ccode\u003eMessage\u003c/code\u003e constructor has a corresponding \u003ccode\u003e\u003ca\u003eMessageCommand\u003c/a\u003e\u003c/code\u003e\n constructor.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "MessageCommand",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
          "type": "data"
        },
        "index": {
          "description": "MessageCommand is included in MessageHeader in order to identify the type of message present in the payload This allows the message de-serialization code to know how to decode particular message payload Every valid Message constructor has corresponding MessageCommand constructor",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MessageCommand",
          "package": "haskoin-protocol",
          "partial": "Message Command",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:MessageCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing the header of a \u003ccode\u003eMessage\u003c/code\u003e. All messages sent between\n nodes contain a message header.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "MessageHeader",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageHeader",
          "type": "data"
        },
        "index": {
          "description": "Data type representing the header of Message All messages sent between nodes contain message header",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MessageHeader",
          "package": "haskoin-protocol",
          "partial": "Message Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:MessageHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type describing a bitcoin network address. Addresses are stored in\n IPv6. IPv4 addresses are mapped to IPv6 using IPv4 mapped IPv6 addresses:\n \u003ca\u003ehttp://en.wikipedia.org/wiki/IPv6#IPv4-mapped_IPv6_addresses\u003c/a\u003e. Sometimes,\n timestamps are sent together with the \u003ccode\u003e\u003ca\u003eNetworkAddress\u003c/a\u003e\u003c/code\u003e such as in the \u003ccode\u003eAddr\u003c/code\u003e\n data type.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "NetworkAddress",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-NetworkAddress.html#NetworkAddress",
          "type": "data"
        },
        "index": {
          "description": "Data type describing bitcoin network address Addresses are stored in IPv6 IPv4 addresses are mapped to IPv6 using IPv4 mapped IPv6 addresses http en.wikipedia.org wiki IPv6 IPv4-mapped IPv6 addresses Sometimes timestamps are sent together with the NetworkAddress such as in the Addr data type",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "NetworkAddress",
          "package": "haskoin-protocol",
          "partial": "Network Address",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:NetworkAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNetwork address with a timestamp\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "NetworkAddressTime",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-Addr.html#NetworkAddressTime",
          "type": "type"
        },
        "index": {
          "description": "Network address with timestamp",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "NetworkAddressTime",
          "package": "haskoin-protocol",
          "partial": "Network Address Time",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:NetworkAddressTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eNotFound\u003c/a\u003e\u003c/code\u003e message is returned as a response to a \u003ccode\u003eGetData\u003c/code\u003e message\n whe one of the requested objects could not be retrieved. This could happen,\n for example, if a tranasaction was requested and was not available in the\n memory pool of the receiving node.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "NotFound",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-NotFound.html#NotFound",
          "type": "data"
        },
        "index": {
          "description": "NotFound message is returned as response to GetData message whe one of the requested objects could not be retrieved This could happen for example if tranasaction was requested and was not available in the memory pool of the receiving node",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "NotFound",
          "package": "haskoin-protocol",
          "partial": "Not Found",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:NotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe OutPoint is used inside a transaction input to reference the previous\n transaction output that it is spending.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "OutPoint",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-Tx.html#OutPoint",
          "type": "data"
        },
        "index": {
          "description": "The OutPoint is used inside transaction input to reference the previous transaction output that it is spending",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OutPoint",
          "package": "haskoin-protocol",
          "partial": "Out Point",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:OutPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Ping message is sent to bitcoin peers to check if a TCP/IP connection\n is still valid.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "Ping",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-Ping.html#Ping",
          "type": "newtype"
        },
        "index": {
          "description": "Ping message is sent to bitcoin peers to check if TCP IP connection is still valid",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "Ping",
          "package": "haskoin-protocol",
          "partial": "Ping",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:Ping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Pong message is sent as a response to a ping message.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "Pong",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-Ping.html#Pong",
          "type": "newtype"
        },
        "index": {
          "description": "Pong message is sent as response to ping message",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "Pong",
          "package": "haskoin-protocol",
          "partial": "Pong",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:Pong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing a transaction script. Scripts are defined as lists\n of script operators \u003ccode\u003e\u003ca\u003eScriptOp\u003c/a\u003e\u003c/code\u003e. Scripts are used to:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Define the spending conditions in the output of a transaction\n\u003c/li\u003e\u003cli\u003e Provide the spending signatures in the input of a transaction\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "Script",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-Script.html#Script",
          "type": "data"
        },
        "index": {
          "description": "Data type representing transaction script Scripts are defined as lists of script operators ScriptOp Scripts are used to Define the spending conditions in the output of transaction Provide the spending signatures in the input of transaction",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "Script",
          "package": "haskoin-protocol",
          "partial": "Script",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:Script"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing all of the operators allowed inside a \u003ccode\u003e\u003ca\u003eScript\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "ScriptOp",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
          "type": "data"
        },
        "index": {
          "description": "Data type representing all of the operators allowed inside Script",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "ScriptOp",
          "package": "haskoin-protocol",
          "partial": "Script Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:ScriptOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing a bitcoin transaction\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "Tx",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-Tx.html#Tx",
          "type": "data"
        },
        "index": {
          "description": "Data type representing bitcoin transaction",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "Tx",
          "package": "haskoin-protocol",
          "partial": "Tx",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:Tx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing a transaction input.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "TxIn",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-Tx.html#TxIn",
          "type": "data"
        },
        "index": {
          "description": "Data type representing transaction input",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "TxIn",
          "package": "haskoin-protocol",
          "partial": "Tx In",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:TxIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing a transaction output.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "TxOut",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-Tx.html#TxOut",
          "type": "data"
        },
        "index": {
          "description": "Data type representing transaction output",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "TxOut",
          "package": "haskoin-protocol",
          "partial": "Tx Out",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:TxOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing a variable length integer. The \u003ccode\u003e\u003ca\u003eVarInt\u003c/a\u003e\u003c/code\u003e type\n usually precedes an array or a string that can vary in length. \n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "VarInt",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-VarInt.html#VarInt",
          "type": "newtype"
        },
        "index": {
          "description": "Data type representing variable length integer The VarInt type usually precedes an array or string that can vary in length",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "VarInt",
          "package": "haskoin-protocol",
          "partial": "Var Int",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:VarInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for variable length strings. Variable length strings are\n serialized as a \u003ccode\u003e\u003ca\u003eVarInt\u003c/a\u003e\u003c/code\u003e followed by a bytestring.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "VarString",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-VarString.html#VarString",
          "type": "newtype"
        },
        "index": {
          "description": "Data type for variable length strings Variable length strings are serialized as VarInt followed by bytestring",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "VarString",
          "package": "haskoin-protocol",
          "partial": "Var String",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:VarString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen a bitcoin node creates an outgoing connection to another node,\n the first message it will send is a \u003ccode\u003e\u003ca\u003eVersion\u003c/a\u003e\u003c/code\u003e message. The other node\n will similarly respond with it's own \u003ccode\u003e\u003ca\u003eVersion\u003c/a\u003e\u003c/code\u003e message.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "Version",
          "package": "haskoin-protocol",
          "source": "src/Network-Haskoin-Protocol-Version.html#Version",
          "type": "data"
        },
        "index": {
          "description": "When bitcoin node creates an outgoing connection to another node the first message it will send is Version message The other node will similarly respond with it own Version message",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "Version",
          "package": "haskoin-protocol",
          "partial": "Version",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#t:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "Addr",
          "package": "haskoin-protocol",
          "signature": "Addr",
          "source": "src/Network-Haskoin-Protocol-Addr.html#Addr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "Addr",
          "package": "haskoin-protocol",
          "partial": "Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:Addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "Alert",
          "package": "haskoin-protocol",
          "signature": "Alert",
          "source": "src/Network-Haskoin-Protocol-Alert.html#Alert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "Alert",
          "package": "haskoin-protocol",
          "partial": "Alert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:Alert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "Block",
          "package": "haskoin-protocol",
          "signature": "Block",
          "source": "src/Network-Haskoin-Protocol-Block.html#Block",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "Block",
          "package": "haskoin-protocol",
          "partial": "Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "BlockHeader",
          "package": "haskoin-protocol",
          "signature": "BlockHeader",
          "source": "src/Network-Haskoin-Protocol-BlockHeader.html#BlockHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "BlockHeader",
          "package": "haskoin-protocol",
          "partial": "Block Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:BlockHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "CoinbaseTx",
          "package": "haskoin-protocol",
          "signature": "CoinbaseTx",
          "source": "src/Network-Haskoin-Protocol-Tx.html#CoinbaseTx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "CoinbaseTx",
          "package": "haskoin-protocol",
          "partial": "Coinbase Tx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:CoinbaseTx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "GetBlocks",
          "package": "haskoin-protocol",
          "signature": "GetBlocks",
          "source": "src/Network-Haskoin-Protocol-GetBlocks.html#GetBlocks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "GetBlocks",
          "package": "haskoin-protocol",
          "partial": "Get Blocks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:GetBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "GetData",
          "package": "haskoin-protocol",
          "signature": "GetData",
          "source": "src/Network-Haskoin-Protocol-GetData.html#GetData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "GetData",
          "package": "haskoin-protocol",
          "partial": "Get Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:GetData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "GetHeaders",
          "package": "haskoin-protocol",
          "signature": "GetHeaders",
          "source": "src/Network-Haskoin-Protocol-GetHeaders.html#GetHeaders",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "GetHeaders",
          "package": "haskoin-protocol",
          "partial": "Get Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:GetHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "Headers",
          "package": "haskoin-protocol",
          "signature": "Headers",
          "source": "src/Network-Haskoin-Protocol-Headers.html#Headers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "Headers",
          "package": "haskoin-protocol",
          "partial": "Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:Headers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "Inv",
          "package": "haskoin-protocol",
          "signature": "Inv",
          "source": "src/Network-Haskoin-Protocol-Inv.html#Inv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "Inv",
          "package": "haskoin-protocol",
          "partial": "Inv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:Inv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvVector hash is related to a block\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "InvBlock",
          "package": "haskoin-protocol",
          "signature": "InvBlock",
          "source": "src/Network-Haskoin-Protocol-InvVector.html#InvType",
          "type": "function"
        },
        "index": {
          "description": "InvVector hash is related to block",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "InvBlock",
          "package": "haskoin-protocol",
          "partial": "Inv Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:InvBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError. Data containing this type can be ignored.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "InvError",
          "package": "haskoin-protocol",
          "signature": "InvError",
          "source": "src/Network-Haskoin-Protocol-InvVector.html#InvType",
          "type": "function"
        },
        "index": {
          "description": "Error Data containing this type can be ignored",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "InvError",
          "package": "haskoin-protocol",
          "partial": "Inv Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:InvError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvVector hash is related to a transaction \n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "InvTx",
          "package": "haskoin-protocol",
          "signature": "InvTx",
          "source": "src/Network-Haskoin-Protocol-InvVector.html#InvType",
          "type": "function"
        },
        "index": {
          "description": "InvVector hash is related to transaction",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "InvTx",
          "package": "haskoin-protocol",
          "partial": "Inv Tx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:InvTx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "InvVector",
          "package": "haskoin-protocol",
          "signature": "InvVector",
          "source": "src/Network-Haskoin-Protocol-InvVector.html#InvVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "InvVector",
          "package": "haskoin-protocol",
          "partial": "Inv Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:InvVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MAddr",
          "package": "haskoin-protocol",
          "signature": "MAddr Addr",
          "source": "src/Network-Haskoin-Protocol-Message.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MAddr",
          "package": "haskoin-protocol",
          "partial": "MAddr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MAlert",
          "package": "haskoin-protocol",
          "signature": "MAlert Alert",
          "source": "src/Network-Haskoin-Protocol-Message.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MAlert",
          "package": "haskoin-protocol",
          "partial": "MAlert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MAlert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MBlock",
          "package": "haskoin-protocol",
          "signature": "MBlock Block",
          "source": "src/Network-Haskoin-Protocol-Message.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MBlock",
          "package": "haskoin-protocol",
          "partial": "MBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MCAddr",
          "package": "haskoin-protocol",
          "signature": "MCAddr",
          "source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MCAddr",
          "package": "haskoin-protocol",
          "partial": "MCAddr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MCAlert",
          "package": "haskoin-protocol",
          "signature": "MCAlert",
          "source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MCAlert",
          "package": "haskoin-protocol",
          "partial": "MCAlert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCAlert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MCBlock",
          "package": "haskoin-protocol",
          "signature": "MCBlock",
          "source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MCBlock",
          "package": "haskoin-protocol",
          "partial": "MCBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MCGetAddr",
          "package": "haskoin-protocol",
          "signature": "MCGetAddr",
          "source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MCGetAddr",
          "package": "haskoin-protocol",
          "partial": "MCGet Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCGetAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MCGetBlocks",
          "package": "haskoin-protocol",
          "signature": "MCGetBlocks",
          "source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MCGetBlocks",
          "package": "haskoin-protocol",
          "partial": "MCGet Blocks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCGetBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MCGetData",
          "package": "haskoin-protocol",
          "signature": "MCGetData",
          "source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MCGetData",
          "package": "haskoin-protocol",
          "partial": "MCGet Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCGetData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MCGetHeaders",
          "package": "haskoin-protocol",
          "signature": "MCGetHeaders",
          "source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MCGetHeaders",
          "package": "haskoin-protocol",
          "partial": "MCGet Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCGetHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MCHeaders",
          "package": "haskoin-protocol",
          "signature": "MCHeaders",
          "source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MCHeaders",
          "package": "haskoin-protocol",
          "partial": "MCHeaders",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MCInv",
          "package": "haskoin-protocol",
          "signature": "MCInv",
          "source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MCInv",
          "package": "haskoin-protocol",
          "partial": "MCInv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MCNotFound",
          "package": "haskoin-protocol",
          "signature": "MCNotFound",
          "source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MCNotFound",
          "package": "haskoin-protocol",
          "partial": "MCNot Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MCPing",
          "package": "haskoin-protocol",
          "signature": "MCPing",
          "source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MCPing",
          "package": "haskoin-protocol",
          "partial": "MCPing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCPing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MCPong",
          "package": "haskoin-protocol",
          "signature": "MCPong",
          "source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MCPong",
          "package": "haskoin-protocol",
          "partial": "MCPong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCPong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MCTx",
          "package": "haskoin-protocol",
          "signature": "MCTx",
          "source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MCTx",
          "package": "haskoin-protocol",
          "partial": "MCTx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCTx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MCVerAck",
          "package": "haskoin-protocol",
          "signature": "MCVerAck",
          "source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MCVerAck",
          "package": "haskoin-protocol",
          "partial": "MCVer Ack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCVerAck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MCVersion",
          "package": "haskoin-protocol",
          "signature": "MCVersion",
          "source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MCVersion",
          "package": "haskoin-protocol",
          "partial": "MCVersion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MCVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MGetAddr",
          "package": "haskoin-protocol",
          "signature": "MGetAddr",
          "source": "src/Network-Haskoin-Protocol-Message.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MGetAddr",
          "package": "haskoin-protocol",
          "partial": "MGet Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MGetAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MGetBlocks",
          "package": "haskoin-protocol",
          "signature": "MGetBlocks GetBlocks",
          "source": "src/Network-Haskoin-Protocol-Message.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MGetBlocks",
          "package": "haskoin-protocol",
          "partial": "MGet Blocks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MGetBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MGetData",
          "package": "haskoin-protocol",
          "signature": "MGetData GetData",
          "source": "src/Network-Haskoin-Protocol-Message.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MGetData",
          "package": "haskoin-protocol",
          "partial": "MGet Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MGetData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MGetHeaders",
          "package": "haskoin-protocol",
          "signature": "MGetHeaders GetHeaders",
          "source": "src/Network-Haskoin-Protocol-Message.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MGetHeaders",
          "package": "haskoin-protocol",
          "partial": "MGet Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MGetHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MHeaders",
          "package": "haskoin-protocol",
          "signature": "MHeaders Headers",
          "source": "src/Network-Haskoin-Protocol-Message.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MHeaders",
          "package": "haskoin-protocol",
          "partial": "MHeaders",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MInv",
          "package": "haskoin-protocol",
          "signature": "MInv Inv",
          "source": "src/Network-Haskoin-Protocol-Message.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MInv",
          "package": "haskoin-protocol",
          "partial": "MInv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MNotFound",
          "package": "haskoin-protocol",
          "signature": "MNotFound NotFound",
          "source": "src/Network-Haskoin-Protocol-Message.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MNotFound",
          "package": "haskoin-protocol",
          "partial": "MNot Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MPing",
          "package": "haskoin-protocol",
          "signature": "MPing Ping",
          "source": "src/Network-Haskoin-Protocol-Message.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MPing",
          "package": "haskoin-protocol",
          "partial": "MPing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MPing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MPong",
          "package": "haskoin-protocol",
          "signature": "MPong Pong",
          "source": "src/Network-Haskoin-Protocol-Message.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MPong",
          "package": "haskoin-protocol",
          "partial": "MPong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MPong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MTx",
          "package": "haskoin-protocol",
          "signature": "MTx Tx",
          "source": "src/Network-Haskoin-Protocol-Message.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MTx",
          "package": "haskoin-protocol",
          "partial": "MTx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MTx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MVerAck",
          "package": "haskoin-protocol",
          "signature": "MVerAck",
          "source": "src/Network-Haskoin-Protocol-Message.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MVerAck",
          "package": "haskoin-protocol",
          "partial": "MVer Ack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MVerAck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MVersion",
          "package": "haskoin-protocol",
          "signature": "MVersion Version",
          "source": "src/Network-Haskoin-Protocol-Message.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MVersion",
          "package": "haskoin-protocol",
          "partial": "MVersion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "MessageHeader",
          "package": "haskoin-protocol",
          "signature": "MessageHeader",
          "source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "MessageHeader",
          "package": "haskoin-protocol",
          "partial": "Message Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:MessageHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "NetworkAddress",
          "package": "haskoin-protocol",
          "signature": "NetworkAddress",
          "source": "src/Network-Haskoin-Protocol-NetworkAddress.html#NetworkAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "NetworkAddress",
          "package": "haskoin-protocol",
          "partial": "Network Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:NetworkAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "NotFound",
          "package": "haskoin-protocol",
          "signature": "NotFound",
          "source": "src/Network-Haskoin-Protocol-NotFound.html#NotFound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "NotFound",
          "package": "haskoin-protocol",
          "partial": "Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:NotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "OP_0",
          "package": "haskoin-protocol",
          "signature": "OP_0",
          "source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OP_0",
          "package": "haskoin-protocol",
          "partial": "OP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "OP_1",
          "package": "haskoin-protocol",
          "signature": "OP_1",
          "source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OP_1",
          "package": "haskoin-protocol",
          "partial": "OP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "OP_10",
          "package": "haskoin-protocol",
          "signature": "OP_10",
          "source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OP_10",
          "package": "haskoin-protocol",
          "partial": "OP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "OP_11",
          "package": "haskoin-protocol",
          "signature": "OP_11",
          "source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OP_11",
          "package": "haskoin-protocol",
          "partial": "OP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "OP_12",
          "package": "haskoin-protocol",
          "signature": "OP_12",
          "source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OP_12",
          "package": "haskoin-protocol",
          "partial": "OP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "OP_13",
          "package": "haskoin-protocol",
          "signature": "OP_13",
          "source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OP_13",
          "package": "haskoin-protocol",
          "partial": "OP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "OP_14",
          "package": "haskoin-protocol",
          "signature": "OP_14",
          "source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OP_14",
          "package": "haskoin-protocol",
          "partial": "OP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_14"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "OP_15",
          "package": "haskoin-protocol",
          "signature": "OP_15",
          "source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OP_15",
          "package": "haskoin-protocol",
          "partial": "OP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "OP_16",
          "package": "haskoin-protocol",
          "signature": "OP_16",
          "source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OP_16",
          "package": "haskoin-protocol",
          "partial": "OP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "OP_1NEGATE",
          "package": "haskoin-protocol",
          "signature": "OP_1NEGATE",
          "source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OP_1NEGATE",
          "package": "haskoin-protocol",
          "partial": "OP NEGATE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_1NEGATE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "OP_2",
          "package": "haskoin-protocol",
          "signature": "OP_2",
          "source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OP_2",
          "package": "haskoin-protocol",
          "partial": "OP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "OP_3",
          "package": "haskoin-protocol",
          "signature": "OP_3",
          "source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OP_3",
          "package": "haskoin-protocol",
          "partial": "OP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "OP_4",
          "package": "haskoin-protocol",
          "signature": "OP_4",
          "source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OP_4",
          "package": "haskoin-protocol",
          "partial": "OP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "OP_5",
          "package": "haskoin-protocol",
          "signature": "OP_5",
          "source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OP_5",
          "package": "haskoin-protocol",
          "partial": "OP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "OP_6",
          "package": "haskoin-protocol",
          "signature": "OP_6",
          "source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OP_6",
          "package": "haskoin-protocol",
          "partial": "OP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "OP_7",
          "package": "haskoin-protocol",
          "signature": "OP_7",
          "source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OP_7",
          "package": "haskoin-protocol",
          "partial": "OP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "OP_8",
          "package": "haskoin-protocol",
          "signature": "OP_8",
          "source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OP_8",
          "package": "haskoin-protocol",
          "partial": "OP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "OP_9",
          "package": "haskoin-protocol",
          "signature": "OP_9",
          "source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OP_9",
          "package": "haskoin-protocol",
          "partial": "OP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "OP_CHECKMULTISIG",
          "package": "haskoin-protocol",
          "signature": "OP_CHECKMULTISIG",
          "source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OP_CHECKMULTISIG",
          "package": "haskoin-protocol",
          "partial": "OP CHECKMULTISIG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_CHECKMULTISIG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "OP_CHECKSIG",
          "package": "haskoin-protocol",
          "signature": "OP_CHECKSIG",
          "source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OP_CHECKSIG",
          "package": "haskoin-protocol",
          "partial": "OP CHECKSIG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_CHECKSIG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "OP_DUP",
          "package": "haskoin-protocol",
          "signature": "OP_DUP",
          "source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OP_DUP",
          "package": "haskoin-protocol",
          "partial": "OP DUP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_DUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "OP_EQUAL",
          "package": "haskoin-protocol",
          "signature": "OP_EQUAL",
          "source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OP_EQUAL",
          "package": "haskoin-protocol",
          "partial": "OP EQUAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_EQUAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "OP_EQUALVERIFY",
          "package": "haskoin-protocol",
          "signature": "OP_EQUALVERIFY",
          "source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OP_EQUALVERIFY",
          "package": "haskoin-protocol",
          "partial": "OP EQUALVERIFY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_EQUALVERIFY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "OP_HASH160",
          "package": "haskoin-protocol",
          "signature": "OP_HASH160",
          "source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OP_HASH160",
          "package": "haskoin-protocol",
          "partial": "OP HASH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_HASH160"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "OP_INVALIDOPCODE",
          "package": "haskoin-protocol",
          "signature": "OP_INVALIDOPCODE Word8",
          "source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OP_INVALIDOPCODE",
          "package": "haskoin-protocol",
          "partial": "OP INVALIDOPCODE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_INVALIDOPCODE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "OP_PUBKEY",
          "package": "haskoin-protocol",
          "signature": "OP_PUBKEY PubKey",
          "source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OP_PUBKEY",
          "package": "haskoin-protocol",
          "partial": "OP PUBKEY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_PUBKEY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "OP_PUSHDATA",
          "package": "haskoin-protocol",
          "signature": "OP_PUSHDATA ByteString",
          "source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OP_PUSHDATA",
          "package": "haskoin-protocol",
          "partial": "OP PUSHDATA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_PUSHDATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "OP_VERIFY",
          "package": "haskoin-protocol",
          "signature": "OP_VERIFY",
          "source": "src/Network-Haskoin-Protocol-Script.html#ScriptOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OP_VERIFY",
          "package": "haskoin-protocol",
          "partial": "OP VERIFY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OP_VERIFY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "OutPoint",
          "package": "haskoin-protocol",
          "signature": "OutPoint",
          "source": "src/Network-Haskoin-Protocol-Tx.html#OutPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "OutPoint",
          "package": "haskoin-protocol",
          "partial": "Out Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:OutPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "Ping",
          "package": "haskoin-protocol",
          "signature": "Ping",
          "source": "src/Network-Haskoin-Protocol-Ping.html#Ping",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "Ping",
          "package": "haskoin-protocol",
          "partial": "Ping",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:Ping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "Pong",
          "package": "haskoin-protocol",
          "signature": "Pong",
          "source": "src/Network-Haskoin-Protocol-Ping.html#Pong",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "Pong",
          "package": "haskoin-protocol",
          "partial": "Pong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:Pong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "Script",
          "package": "haskoin-protocol",
          "signature": "Script",
          "source": "src/Network-Haskoin-Protocol-Script.html#Script",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "Script",
          "package": "haskoin-protocol",
          "partial": "Script",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:Script"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "Tx",
          "package": "haskoin-protocol",
          "signature": "Tx",
          "source": "src/Network-Haskoin-Protocol-Tx.html#Tx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "Tx",
          "package": "haskoin-protocol",
          "partial": "Tx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:Tx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "TxIn",
          "package": "haskoin-protocol",
          "signature": "TxIn",
          "source": "src/Network-Haskoin-Protocol-Tx.html#TxIn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "TxIn",
          "package": "haskoin-protocol",
          "partial": "Tx In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:TxIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "TxOut",
          "package": "haskoin-protocol",
          "signature": "TxOut",
          "source": "src/Network-Haskoin-Protocol-Tx.html#TxOut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "TxOut",
          "package": "haskoin-protocol",
          "partial": "Tx Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:TxOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "VarInt",
          "package": "haskoin-protocol",
          "signature": "VarInt",
          "source": "src/Network-Haskoin-Protocol-VarInt.html#VarInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "VarInt",
          "package": "haskoin-protocol",
          "partial": "Var Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:VarInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "VarString",
          "package": "haskoin-protocol",
          "signature": "VarString",
          "source": "src/Network-Haskoin-Protocol-VarString.html#VarString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "VarString",
          "package": "haskoin-protocol",
          "partial": "Var String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:VarString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "Version",
          "package": "haskoin-protocol",
          "signature": "Version",
          "source": "src/Network-Haskoin-Protocol-Version.html#Version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "Version",
          "package": "haskoin-protocol",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "addrList",
          "package": "haskoin-protocol",
          "signature": "[NetworkAddressTime]",
          "source": "src/Network-Haskoin-Protocol-Addr.html#Addr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "addrList",
          "normalized": "[NetworkAddressTime]",
          "package": "haskoin-protocol",
          "partial": "List",
          "signature": "[NetworkAddressTime]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:addrList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNetwork address of the node receiving this message.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "addrRecv",
          "package": "haskoin-protocol",
          "signature": "NetworkAddress",
          "source": "src/Network-Haskoin-Protocol-Version.html#Version",
          "type": "function"
        },
        "index": {
          "description": "Network address of the node receiving this message",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "addrRecv",
          "package": "haskoin-protocol",
          "partial": "Recv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:addrRecv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNetwork address of the node sending this message.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "addrSend",
          "package": "haskoin-protocol",
          "signature": "NetworkAddress",
          "source": "src/Network-Haskoin-Protocol-Version.html#Version",
          "type": "function"
        },
        "index": {
          "description": "Network address of the node sending this message",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "addrSend",
          "package": "haskoin-protocol",
          "partial": "Send",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:addrSend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlert payload. \n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "alertPayload",
          "package": "haskoin-protocol",
          "signature": "VarString",
          "source": "src/Network-Haskoin-Protocol-Alert.html#Alert",
          "type": "function"
        },
        "index": {
          "description": "Alert payload",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "alertPayload",
          "package": "haskoin-protocol",
          "partial": "Payload",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:alertPayload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eECDSA signature of the payload\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "alertSignature",
          "package": "haskoin-protocol",
          "signature": "VarString",
          "source": "src/Network-Haskoin-Protocol-Alert.html#Alert",
          "type": "function"
        },
        "index": {
          "description": "ECDSA signature of the payload",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "alertSignature",
          "package": "haskoin-protocol",
          "partial": "Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:alertSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA random nonce used to generate this block. Additional\n randomness is included in the coinbase transaction of\n this block.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "bhNonce",
          "package": "haskoin-protocol",
          "signature": "Word32",
          "source": "src/Network-Haskoin-Protocol-BlockHeader.html#BlockHeader",
          "type": "function"
        },
        "index": {
          "description": "random nonce used to generate this block Additional randomness is included in the coinbase transaction of this block",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "bhNonce",
          "package": "haskoin-protocol",
          "partial": "Nonce",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:bhNonce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe difficulty target being used for this block\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "blockBits",
          "package": "haskoin-protocol",
          "signature": "Word32",
          "source": "src/Network-Haskoin-Protocol-BlockHeader.html#BlockHeader",
          "type": "function"
        },
        "index": {
          "description": "The difficulty target being used for this block",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "blockBits",
          "package": "haskoin-protocol",
          "partial": "Bits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:blockBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCoinbase transaction of this block\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "blockCoinbaseTx",
          "package": "haskoin-protocol",
          "signature": "CoinbaseTx",
          "source": "src/Network-Haskoin-Protocol-Block.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Coinbase transaction of this block",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "blockCoinbaseTx",
          "package": "haskoin-protocol",
          "partial": "Coinbase Tx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:blockCoinbaseTx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeader information for this block\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "blockHeader",
          "package": "haskoin-protocol",
          "signature": "BlockHeader",
          "source": "src/Network-Haskoin-Protocol-Block.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Header information for this block",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "blockHeader",
          "package": "haskoin-protocol",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:blockHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnix timestamp recording when this block was created\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "blockTimestamp",
          "package": "haskoin-protocol",
          "signature": "Word32",
          "source": "src/Network-Haskoin-Protocol-BlockHeader.html#BlockHeader",
          "type": "function"
        },
        "index": {
          "description": "Unix timestamp recording when this block was created",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "blockTimestamp",
          "package": "haskoin-protocol",
          "partial": "Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:blockTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of transactions pertaining to this block\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "blockTxns",
          "package": "haskoin-protocol",
          "signature": "[Tx]",
          "source": "src/Network-Haskoin-Protocol-Block.html#Block",
          "type": "function"
        },
        "index": {
          "description": "List of transactions pertaining to this block",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "blockTxns",
          "normalized": "[Tx]",
          "package": "haskoin-protocol",
          "partial": "Txns",
          "signature": "[Tx]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:blockTxns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlock version information, based on the version of the\n software creating this block.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "blockVersion",
          "package": "haskoin-protocol",
          "signature": "Word32",
          "source": "src/Network-Haskoin-Protocol-BlockHeader.html#BlockHeader",
          "type": "function"
        },
        "index": {
          "description": "Block version information based on the version of the software creating this block",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "blockVersion",
          "package": "haskoin-protocol",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:blockVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData embedded inside the coinbase transaction.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "cbData",
          "package": "haskoin-protocol",
          "signature": "ByteString",
          "source": "src/Network-Haskoin-Protocol-Tx.html#CoinbaseTx",
          "type": "function"
        },
        "index": {
          "description": "Data embedded inside the coinbase transaction",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "cbData",
          "package": "haskoin-protocol",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:cbData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe block number of timestamp at which this \n transaction is locked.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "cbLockTime",
          "package": "haskoin-protocol",
          "signature": "Word32",
          "source": "src/Network-Haskoin-Protocol-Tx.html#CoinbaseTx",
          "type": "function"
        },
        "index": {
          "description": "The block number of timestamp at which this transaction is locked",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "cbLockTime",
          "package": "haskoin-protocol",
          "partial": "Lock Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:cbLockTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of transaction outputs.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "cbOut",
          "package": "haskoin-protocol",
          "signature": "[TxOut]",
          "source": "src/Network-Haskoin-Protocol-Tx.html#CoinbaseTx",
          "type": "function"
        },
        "index": {
          "description": "List of transaction outputs",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "cbOut",
          "normalized": "[TxOut]",
          "package": "haskoin-protocol",
          "partial": "Out",
          "signature": "[TxOut]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:cbOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransaction data format version.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "cbVersion",
          "package": "haskoin-protocol",
          "signature": "Word32",
          "source": "src/Network-Haskoin-Protocol-Tx.html#CoinbaseTx",
          "type": "function"
        },
        "index": {
          "description": "Transaction data format version",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "cbVersion",
          "package": "haskoin-protocol",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:cbVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a \u003ccode\u003e\u003ca\u003eScript\u003c/a\u003e\u003c/code\u003e from a ByteString by omiting the length of the script.\n This is used to produce scripthash addresses.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "decodeScriptOps",
          "package": "haskoin-protocol",
          "signature": "ByteString -\u003e Either String Script",
          "source": "src/Network-Haskoin-Protocol-Script.html#decodeScriptOps",
          "type": "function"
        },
        "index": {
          "description": "Decode Script from ByteString by omiting the length of the script This is used to produce scripthash addresses",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "decodeScriptOps",
          "normalized": "ByteString-\u003eEither String Script",
          "package": "haskoin-protocol",
          "partial": "Script Ops",
          "signature": "ByteString-\u003eEither String Script",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:decodeScriptOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecodes a little endian transaction hash in HEX format. \n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "decodeTxid",
          "package": "haskoin-protocol",
          "signature": "String -\u003e Maybe Hash256",
          "source": "src/Network-Haskoin-Protocol-Tx.html#decodeTxid",
          "type": "function"
        },
        "index": {
          "description": "Decodes little endian transaction hash in HEX format",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "decodeTxid",
          "normalized": "String-\u003eMaybe Hash",
          "package": "haskoin-protocol",
          "partial": "Txid",
          "signature": "String-\u003eMaybe Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:decodeTxid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eScript\u003c/a\u003e\u003c/code\u003e into a ByteString by omiting the length of the script.\n This is used to produce scripthash addresses.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "encodeScriptOps",
          "package": "haskoin-protocol",
          "signature": "Script -\u003e ByteString",
          "source": "src/Network-Haskoin-Protocol-Script.html#encodeScriptOps",
          "type": "function"
        },
        "index": {
          "description": "Encode Script into ByteString by omiting the length of the script This is used to produce scripthash addresses",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "encodeScriptOps",
          "normalized": "Script-\u003eByteString",
          "package": "haskoin-protocol",
          "partial": "Script Ops",
          "signature": "Script-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:encodeScriptOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncodes a transaction hash as little endian in HEX format.\n This is mostly used for displaying transaction ids. Internally, these ids\n are handled as big endian but are transformed to little endian when\n displaying them.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "encodeTxid",
          "package": "haskoin-protocol",
          "signature": "Hash256 -\u003e String",
          "source": "src/Network-Haskoin-Protocol-Tx.html#encodeTxid",
          "type": "function"
        },
        "index": {
          "description": "Encodes transaction hash as little endian in HEX format This is mostly used for displaying transaction ids Internally these ids are handled as big endian but are transformed to little endian when displaying them",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "encodeTxid",
          "normalized": "Hash-\u003eString",
          "package": "haskoin-protocol",
          "partial": "Txid",
          "signature": "Hash-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:encodeTxid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHash of the last desired block. If set to zero, the\n maximum number of block hashes is returned (500).\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "getBlocksHashStop",
          "package": "haskoin-protocol",
          "signature": "Hash256",
          "source": "src/Network-Haskoin-Protocol-GetBlocks.html#GetBlocks",
          "type": "function"
        },
        "index": {
          "description": "Hash of the last desired block If set to zero the maximum number of block hashes is returned",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "getBlocksHashStop",
          "package": "haskoin-protocol",
          "partial": "Blocks Hash Stop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:getBlocksHashStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlock locator object. It is a list of block hashes from the\n most recent block back to the genesis block. The list is\n dense at first and sparse towards the end.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "getBlocksLocator",
          "package": "haskoin-protocol",
          "signature": "BlockLocator",
          "source": "src/Network-Haskoin-Protocol-GetBlocks.html#GetBlocks",
          "type": "function"
        },
        "index": {
          "description": "Block locator object It is list of block hashes from the most recent block back to the genesis block The list is dense at first and sparse towards the end",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "getBlocksLocator",
          "package": "haskoin-protocol",
          "partial": "Blocks Locator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:getBlocksLocator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe protocol version\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "getBlocksVersion",
          "package": "haskoin-protocol",
          "signature": "Word32",
          "source": "src/Network-Haskoin-Protocol-GetBlocks.html#GetBlocks",
          "type": "function"
        },
        "index": {
          "description": "The protocol version",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "getBlocksVersion",
          "package": "haskoin-protocol",
          "partial": "Blocks Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:getBlocksVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of object hashes \n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "getDataList",
          "package": "haskoin-protocol",
          "signature": "[InvVector]",
          "source": "src/Network-Haskoin-Protocol-GetData.html#GetData",
          "type": "function"
        },
        "index": {
          "description": "List of object hashes",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "getDataList",
          "normalized": "[InvVector]",
          "package": "haskoin-protocol",
          "partial": "Data List",
          "signature": "[InvVector]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:getDataList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlock locator object. It is a list of block hashes from\n the most recent block back to the Genesis block. The list\n is dense at first and sparse towards the end.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "getHeadersBL",
          "package": "haskoin-protocol",
          "signature": "BlockLocator",
          "source": "src/Network-Haskoin-Protocol-GetHeaders.html#GetHeaders",
          "type": "function"
        },
        "index": {
          "description": "Block locator object It is list of block hashes from the most recent block back to the Genesis block The list is dense at first and sparse towards the end",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "getHeadersBL",
          "package": "haskoin-protocol",
          "partial": "Headers BL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:getHeadersBL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHash of the last desired block header. When set to zero,\n the maximum number of block headers is returned (2000)\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "getHeadersHashStop",
          "package": "haskoin-protocol",
          "signature": "Hash256",
          "source": "src/Network-Haskoin-Protocol-GetHeaders.html#GetHeaders",
          "type": "function"
        },
        "index": {
          "description": "Hash of the last desired block header When set to zero the maximum number of block headers is returned",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "getHeadersHashStop",
          "package": "haskoin-protocol",
          "partial": "Headers Hash Stop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:getHeadersHashStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe protocol version\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "getHeadersVersion",
          "package": "haskoin-protocol",
          "signature": "Word32",
          "source": "src/Network-Haskoin-Protocol-GetHeaders.html#GetHeaders",
          "type": "function"
        },
        "index": {
          "description": "The protocol version",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "getHeadersVersion",
          "package": "haskoin-protocol",
          "partial": "Headers Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:getHeadersVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeserialize a list of \u003ccode\u003e\u003ca\u003eScriptOp\u003c/a\u003e\u003c/code\u003e inside the \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e monad.\n This deserialization does not take into account the length of the script.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "getScriptOps",
          "package": "haskoin-protocol",
          "signature": "Get [ScriptOp]",
          "source": "src/Network-Haskoin-Protocol-Script.html#getScriptOps",
          "type": "function"
        },
        "index": {
          "description": "Deserialize list of ScriptOp inside the Get monad This deserialization does not take into account the length of the script",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "getScriptOps",
          "normalized": "Get[ScriptOp]",
          "package": "haskoin-protocol",
          "partial": "Script Ops",
          "signature": "Get[ScriptOp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:getScriptOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "getVarInt",
          "package": "haskoin-protocol",
          "signature": "Word64",
          "source": "src/Network-Haskoin-Protocol-VarInt.html#VarInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "getVarInt",
          "package": "haskoin-protocol",
          "partial": "Var Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:getVarInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Protocol",
          "name": "getVarString",
          "package": "haskoin-protocol",
          "signature": "ByteString",
          "source": "src/Network-Haskoin-Protocol-VarString.html#VarString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "getVarString",
          "package": "haskoin-protocol",
          "partial": "Var String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:getVarString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecksum of the payload. \n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "headChecksum",
          "package": "haskoin-protocol",
          "signature": "CheckSum32",
          "source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageHeader",
          "type": "function"
        },
        "index": {
          "description": "Checksum of the payload",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "headChecksum",
          "package": "haskoin-protocol",
          "partial": "Checksum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:headChecksum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessage command identifying the type of message.\n included in the payload.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "headCmd",
          "package": "haskoin-protocol",
          "signature": "MessageCommand",
          "source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageHeader",
          "type": "function"
        },
        "index": {
          "description": "Message command identifying the type of message included in the payload",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "headCmd",
          "package": "haskoin-protocol",
          "partial": "Cmd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:headCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNetwork magic bytes. It is used to differentiate \n messages meant for different bitcoin networks, such as\n prodnet and testnet.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "headMagic",
          "package": "haskoin-protocol",
          "signature": "Word32",
          "source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageHeader",
          "type": "function"
        },
        "index": {
          "description": "Network magic bytes It is used to differentiate messages meant for different bitcoin networks such as prodnet and testnet",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "headMagic",
          "package": "haskoin-protocol",
          "partial": "Magic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:headMagic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eByte length of the payload.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "headPayloadSize",
          "package": "haskoin-protocol",
          "signature": "Word32",
          "source": "src/Network-Haskoin-Protocol-MessageHeader.html#MessageHeader",
          "type": "function"
        },
        "index": {
          "description": "Byte length of the payload",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "headPayloadSize",
          "package": "haskoin-protocol",
          "partial": "Payload Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:headPayloadSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of block headers with respective transaction counts\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "headersList",
          "package": "haskoin-protocol",
          "signature": "[BlockHeaderCount]",
          "source": "src/Network-Haskoin-Protocol-Headers.html#Headers",
          "type": "function"
        },
        "index": {
          "description": "List of block headers with respective transaction counts",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "headersList",
          "normalized": "[BlockHeaderCount]",
          "package": "haskoin-protocol",
          "partial": "List",
          "signature": "[BlockHeaderCount]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:headersList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHash of the object referenced by this inventory vector\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "invHash",
          "package": "haskoin-protocol",
          "signature": "Hash256",
          "source": "src/Network-Haskoin-Protocol-InvVector.html#InvVector",
          "type": "function"
        },
        "index": {
          "description": "Hash of the object referenced by this inventory vector",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "invHash",
          "package": "haskoin-protocol",
          "partial": "Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:invHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInventory vectors\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "invList",
          "package": "haskoin-protocol",
          "signature": "[InvVector]",
          "source": "src/Network-Haskoin-Protocol-Inv.html#Inv",
          "type": "function"
        },
        "index": {
          "description": "Inventory vectors",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "invList",
          "normalized": "[InvVector]",
          "package": "haskoin-protocol",
          "partial": "List",
          "signature": "[InvVector]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:invList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of the object referenced by this inventory vector\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "invType",
          "package": "haskoin-protocol",
          "signature": "InvType",
          "source": "src/Network-Haskoin-Protocol-InvVector.html#InvVector",
          "type": "function"
        },
        "index": {
          "description": "Type of the object referenced by this inventory vector",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "invType",
          "package": "haskoin-protocol",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:invType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoot of the merkle tree of all transactions pertaining\n to this block.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "merkleRoot",
          "package": "haskoin-protocol",
          "signature": "Hash256",
          "source": "src/Network-Haskoin-Protocol-BlockHeader.html#BlockHeader",
          "type": "function"
        },
        "index": {
          "description": "Root of the merkle tree of all transactions pertaining to this block",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "merkleRoot",
          "package": "haskoin-protocol",
          "partial": "Root",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:merkleRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIPv6 address serialized as big endian\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "naAddress",
          "package": "haskoin-protocol",
          "signature": "(Word64, Word64)",
          "source": "src/Network-Haskoin-Protocol-NetworkAddress.html#NetworkAddress",
          "type": "function"
        },
        "index": {
          "description": "IPv6 address serialized as big endian",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "naAddress",
          "normalized": "(Word,Word)",
          "package": "haskoin-protocol",
          "partial": "Address",
          "signature": "(Word,Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:naAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePort number serialized as big endian\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "naPort",
          "package": "haskoin-protocol",
          "signature": "Word16",
          "source": "src/Network-Haskoin-Protocol-NetworkAddress.html#NetworkAddress",
          "type": "function"
        },
        "index": {
          "description": "Port number serialized as big endian",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "naPort",
          "package": "haskoin-protocol",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:naPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitmask of services available for this address\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "naServices",
          "package": "haskoin-protocol",
          "signature": "Word64",
          "source": "src/Network-Haskoin-Protocol-NetworkAddress.html#NetworkAddress",
          "type": "function"
        },
        "index": {
          "description": "Bitmask of services available for this address",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "naServices",
          "package": "haskoin-protocol",
          "partial": "Services",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:naServices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInventory vectors related to this request\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "notFoundList",
          "package": "haskoin-protocol",
          "signature": "[InvVector]",
          "source": "src/Network-Haskoin-Protocol-NotFound.html#NotFound",
          "type": "function"
        },
        "index": {
          "description": "Inventory vectors related to this request",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "notFoundList",
          "normalized": "[InvVector]",
          "package": "haskoin-protocol",
          "partial": "Found List",
          "signature": "[InvVector]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:notFoundList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe hash of the referenced transaction.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "outPointHash",
          "package": "haskoin-protocol",
          "signature": "Hash256",
          "source": "src/Network-Haskoin-Protocol-Tx.html#OutPoint",
          "type": "function"
        },
        "index": {
          "description": "The hash of the referenced transaction",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "outPointHash",
          "package": "haskoin-protocol",
          "partial": "Point Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:outPointHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe position of the specific output in the transaction.\n The first output position is 0.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "outPointIndex",
          "package": "haskoin-protocol",
          "signature": "Word32",
          "source": "src/Network-Haskoin-Protocol-Tx.html#OutPoint",
          "type": "function"
        },
        "index": {
          "description": "The position of the specific output in the transaction The first output position is",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "outPointIndex",
          "package": "haskoin-protocol",
          "partial": "Point Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:outPointIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransaction output value.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "outValue",
          "package": "haskoin-protocol",
          "signature": "Word64",
          "source": "src/Network-Haskoin-Protocol-Tx.html#TxOut",
          "type": "function"
        },
        "index": {
          "description": "Transaction output value",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "outValue",
          "package": "haskoin-protocol",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:outValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA random nonce used to identify the recipient of the ping\n request once a Pong response is received.  \n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "pingNonce",
          "package": "haskoin-protocol",
          "signature": "Word64",
          "source": "src/Network-Haskoin-Protocol-Ping.html#Ping",
          "type": "function"
        },
        "index": {
          "description": "random nonce used to identify the recipient of the ping request once Pong response is received",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "pingNonce",
          "package": "haskoin-protocol",
          "partial": "Nonce",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:pingNonce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen responding to a Ping request, the nonce from the Ping\n is copied in the Pong response.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "pongNonce",
          "package": "haskoin-protocol",
          "signature": "Word64",
          "source": "src/Network-Haskoin-Protocol-Ping.html#Pong",
          "type": "function"
        },
        "index": {
          "description": "When responding to Ping request the nonce from the Ping is copied in the Pong response",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "pongNonce",
          "package": "haskoin-protocol",
          "partial": "Nonce",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:pongNonce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHash of the previous block (parent) referenced by this\n block.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "prevBlock",
          "package": "haskoin-protocol",
          "signature": "Hash256",
          "source": "src/Network-Haskoin-Protocol-BlockHeader.html#BlockHeader",
          "type": "function"
        },
        "index": {
          "description": "Hash of the previous block parent referenced by this block",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "prevBlock",
          "package": "haskoin-protocol",
          "partial": "Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:prevBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReference the previous transaction output (hash + position)\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "prevOutput",
          "package": "haskoin-protocol",
          "signature": "OutPoint",
          "source": "src/Network-Haskoin-Protocol-Tx.html#TxIn",
          "type": "function"
        },
        "index": {
          "description": "Reference the previous transaction output hash position",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "prevOutput",
          "package": "haskoin-protocol",
          "partial": "Output",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:prevOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize a list of \u003ccode\u003e\u003ca\u003eScriptOp\u003c/a\u003e\u003c/code\u003e inside the \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e monad.\n This serialization does not take into account the length of the script.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "putScriptOps",
          "package": "haskoin-protocol",
          "signature": "[ScriptOp] -\u003e Put",
          "source": "src/Network-Haskoin-Protocol-Script.html#putScriptOps",
          "type": "function"
        },
        "index": {
          "description": "Serialize list of ScriptOp inside the Put monad This serialization does not take into account the length of the script",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "putScriptOps",
          "normalized": "[ScriptOp]-\u003ePut",
          "package": "haskoin-protocol",
          "partial": "Script Ops",
          "signature": "[ScriptOp]-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:putScriptOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWether the remote peer should announce relaying transactions\n or not. This feature is enabled since version \u003e= 70001. See\n BIP37 for more details.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "relay",
          "package": "haskoin-protocol",
          "signature": "Bool",
          "source": "src/Network-Haskoin-Protocol-Version.html#Version",
          "type": "function"
        },
        "index": {
          "description": "Wether the remote peer should announce relaying transactions or not This feature is enabled since version See BIP37 for more details",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "relay",
          "package": "haskoin-protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:relay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScript providing the requirements of the previous transaction\n output to spend those coins.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "scriptInput",
          "package": "haskoin-protocol",
          "signature": "Script",
          "source": "src/Network-Haskoin-Protocol-Tx.html#TxIn",
          "type": "function"
        },
        "index": {
          "description": "Script providing the requirements of the previous transaction output to spend those coins",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "scriptInput",
          "package": "haskoin-protocol",
          "partial": "Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:scriptInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of script operators defining this script\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "scriptOps",
          "package": "haskoin-protocol",
          "signature": "[ScriptOp]",
          "source": "src/Network-Haskoin-Protocol-Script.html#Script",
          "type": "function"
        },
        "index": {
          "description": "List of script operators defining this script",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "scriptOps",
          "normalized": "[ScriptOp]",
          "package": "haskoin-protocol",
          "partial": "Ops",
          "signature": "[ScriptOp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:scriptOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScript specifying the conditions to spend this output.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "scriptOutput",
          "package": "haskoin-protocol",
          "signature": "Script",
          "source": "src/Network-Haskoin-Protocol-Tx.html#TxOut",
          "type": "function"
        },
        "index": {
          "description": "Script specifying the conditions to spend this output",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "scriptOutput",
          "package": "haskoin-protocol",
          "partial": "Output",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:scriptOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitmask of features to enable for this connection.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "services",
          "package": "haskoin-protocol",
          "signature": "Word64",
          "source": "src/Network-Haskoin-Protocol-Version.html#Version",
          "type": "function"
        },
        "index": {
          "description": "Bitmask of features to enable for this connection",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "services",
          "package": "haskoin-protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:services"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe height of the last block received by the sending node.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "startHeight",
          "package": "haskoin-protocol",
          "signature": "Word32",
          "source": "src/Network-Haskoin-Protocol-Version.html#Version",
          "type": "function"
        },
        "index": {
          "description": "The height of the last block received by the sending node",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "startHeight",
          "package": "haskoin-protocol",
          "partial": "Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:startHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUNIX timestamp\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "timestamp",
          "package": "haskoin-protocol",
          "signature": "Word64",
          "source": "src/Network-Haskoin-Protocol-Version.html#Version",
          "type": "function"
        },
        "index": {
          "description": "UNIX timestamp",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "timestamp",
          "package": "haskoin-protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:timestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of transaction inputs\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "txIn",
          "package": "haskoin-protocol",
          "signature": "[TxIn]",
          "source": "src/Network-Haskoin-Protocol-Tx.html#Tx",
          "type": "function"
        },
        "index": {
          "description": "List of transaction inputs",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "txIn",
          "normalized": "[TxIn]",
          "package": "haskoin-protocol",
          "partial": "In",
          "signature": "[TxIn]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:txIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransaction version as defined by the sender of the\n transaction. The intended use is for replacing transactions with\n new information before the transaction is included in a block.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "txInSequence",
          "package": "haskoin-protocol",
          "signature": "Word32",
          "source": "src/Network-Haskoin-Protocol-Tx.html#TxIn",
          "type": "function"
        },
        "index": {
          "description": "Transaction version as defined by the sender of the transaction The intended use is for replacing transactions with new information before the transaction is included in block",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "txInSequence",
          "package": "haskoin-protocol",
          "partial": "In Sequence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:txInSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe block number of timestamp at which this transaction is locked\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "txLockTime",
          "package": "haskoin-protocol",
          "signature": "Word32",
          "source": "src/Network-Haskoin-Protocol-Tx.html#Tx",
          "type": "function"
        },
        "index": {
          "description": "The block number of timestamp at which this transaction is locked",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "txLockTime",
          "package": "haskoin-protocol",
          "partial": "Lock Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:txLockTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of transaction outputs\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "txOut",
          "package": "haskoin-protocol",
          "signature": "[TxOut]",
          "source": "src/Network-Haskoin-Protocol-Tx.html#Tx",
          "type": "function"
        },
        "index": {
          "description": "List of transaction outputs",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "txOut",
          "normalized": "[TxOut]",
          "package": "haskoin-protocol",
          "partial": "Out",
          "signature": "[TxOut]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:txOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransaction data format version\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "txVersion",
          "package": "haskoin-protocol",
          "signature": "Word32",
          "source": "src/Network-Haskoin-Protocol-Tx.html#Tx",
          "type": "function"
        },
        "index": {
          "description": "Transaction data format version",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "txVersion",
          "package": "haskoin-protocol",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:txVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputed the hash of a transaction.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "txid",
          "package": "haskoin-protocol",
          "signature": "Tx -\u003e Hash256",
          "source": "src/Network-Haskoin-Protocol-Tx.html#txid",
          "type": "function"
        },
        "index": {
          "description": "Computed the hash of transaction",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "txid",
          "normalized": "Tx-\u003eHash",
          "package": "haskoin-protocol",
          "signature": "Tx-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:txid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser agent\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "userAgent",
          "package": "haskoin-protocol",
          "signature": "VarString",
          "source": "src/Network-Haskoin-Protocol-Version.html#Version",
          "type": "function"
        },
        "index": {
          "description": "User agent",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "userAgent",
          "package": "haskoin-protocol",
          "partial": "Agent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:userAgent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandomly generated identifying sent with every version\n message. This nonce is used to detect connection to self.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "verNonce",
          "package": "haskoin-protocol",
          "signature": "Word64",
          "source": "src/Network-Haskoin-Protocol-Version.html#Version",
          "type": "function"
        },
        "index": {
          "description": "Randomly generated identifying sent with every version message This nonce is used to detect connection to self",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "verNonce",
          "package": "haskoin-protocol",
          "partial": "Nonce",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:verNonce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProtocol version being used by the node.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Protocol",
          "name": "version",
          "package": "haskoin-protocol",
          "signature": "Word32",
          "source": "src/Network-Haskoin-Protocol-Version.html#Version",
          "type": "function"
        },
        "index": {
          "description": "Protocol version being used by the node",
          "hierarchy": "Network Haskoin Protocol",
          "module": "Network.Haskoin.Protocol",
          "name": "version",
          "package": "haskoin-protocol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-protocol/docs/Network-Haskoin-Protocol.html#v:version"
      }
    }
  ]
]