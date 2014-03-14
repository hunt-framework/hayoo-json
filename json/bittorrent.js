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
        "word": "bittorrent"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBlocks are used to transfer pieces.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Torrent.Block",
          "name": "Block",
          "package": "bittorrent",
          "source": "src/Data-Torrent-Block.html",
          "type": "module"
        },
        "index": {
          "description": "Blocks are used to transfer pieces",
          "hierarchy": "Data Torrent Block",
          "module": "Data.Torrent.Block",
          "name": "Block",
          "package": "bittorrent",
          "partial": "Block",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Block.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Block",
          "name": "Block",
          "package": "bittorrent",
          "source": "src/Data-Torrent-Block.html#Block",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Torrent Block",
          "module": "Data.Torrent.Block",
          "name": "Block",
          "package": "bittorrent",
          "partial": "Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Block.html#t:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of block in a piece of a torrent. Used to distinguish\n block count from piece count.\n\u003c/p\u003e",
          "module": "Data.Torrent.Block",
          "name": "BlockCount",
          "package": "bittorrent",
          "source": "src/Data-Torrent-Block.html#BlockCount",
          "type": "type"
        },
        "index": {
          "description": "Number of block in piece of torrent Used to distinguish block count from piece count",
          "hierarchy": "Data Torrent Block",
          "module": "Data.Torrent.Block",
          "name": "BlockCount",
          "package": "bittorrent",
          "partial": "Block Count",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Block.html#t:BlockCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlockIx correspond.\n\u003c/p\u003e",
          "module": "Data.Torrent.Block",
          "name": "BlockIx",
          "package": "bittorrent",
          "source": "src/Data-Torrent-Block.html#BlockIx",
          "type": "data"
        },
        "index": {
          "description": "BlockIx correspond",
          "hierarchy": "Data Torrent Block",
          "module": "Data.Torrent.Block",
          "name": "BlockIx",
          "package": "bittorrent",
          "partial": "Block Ix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Block.html#t:BlockIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOffset of a block in a piece in bytes. Should be multiple of\n the choosen block size.\n\u003c/p\u003e",
          "module": "Data.Torrent.Block",
          "name": "BlockOffset",
          "package": "bittorrent",
          "source": "src/Data-Torrent-Block.html#BlockOffset",
          "type": "type"
        },
        "index": {
          "description": "Offset of block in piece in bytes Should be multiple of the choosen block size",
          "hierarchy": "Data Torrent Block",
          "module": "Data.Torrent.Block",
          "name": "BlockOffset",
          "package": "bittorrent",
          "partial": "Block Offset",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Block.html#t:BlockOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of a block in bytes. Should be power of 2.\n\u003c/p\u003e\u003cp\u003eNormally block size is equal to \u003ccode\u003e\u003ca\u003edefaultTransferSize\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Torrent.Block",
          "name": "BlockSize",
          "package": "bittorrent",
          "source": "src/Data-Torrent-Block.html#BlockSize",
          "type": "type"
        },
        "index": {
          "description": "Size of block in bytes Should be power of Normally block size is equal to defaultTransferSize",
          "hierarchy": "Data Torrent Block",
          "module": "Data.Torrent.Block",
          "name": "BlockSize",
          "package": "bittorrent",
          "partial": "Block Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Block.html#t:BlockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZero-based index of piece in torrent content.\n\u003c/p\u003e",
          "module": "Data.Torrent.Block",
          "name": "PieceIx",
          "package": "bittorrent",
          "source": "src/Data-Torrent-Block.html#PieceIx",
          "type": "type"
        },
        "index": {
          "description": "Zero-based index of piece in torrent content",
          "hierarchy": "Data Torrent Block",
          "module": "Data.Torrent.Block",
          "name": "PieceIx",
          "package": "bittorrent",
          "partial": "Piece Ix",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Block.html#t:PieceIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of piece in bytes. Should be a power of 2.\n\u003c/p\u003e\u003cp\u003eNOTE: Have max and min size constrained to wide used\n   semi-standard values. This bounds should be used to make decision\n   about piece size for new torrents.\n\u003c/p\u003e",
          "module": "Data.Torrent.Block",
          "name": "PieceSize",
          "package": "bittorrent",
          "source": "src/Data-Torrent-Block.html#PieceSize",
          "type": "type"
        },
        "index": {
          "description": "Size of piece in bytes Should be power of NOTE Have max and min size constrained to wide used semi-standard values This bounds should be used to make decision about piece size for new torrents",
          "hierarchy": "Data Torrent Block",
          "module": "Data.Torrent.Block",
          "name": "PieceSize",
          "package": "bittorrent",
          "partial": "Piece Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Block.html#t:PieceSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Block",
          "name": "Block",
          "package": "bittorrent",
          "signature": "Block",
          "source": "src/Data-Torrent-Block.html#Block",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Block",
          "module": "Data.Torrent.Block",
          "name": "Block",
          "package": "bittorrent",
          "partial": "Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Block.html#v:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Block",
          "name": "BlockIx",
          "package": "bittorrent",
          "signature": "BlockIx",
          "source": "src/Data-Torrent-Block.html#BlockIx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Block",
          "module": "Data.Torrent.Block",
          "name": "BlockIx",
          "package": "bittorrent",
          "partial": "Block Ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Block.html#v:BlockIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePayload bytes.\n\u003c/p\u003e",
          "module": "Data.Torrent.Block",
          "name": "blkData",
          "package": "bittorrent",
          "signature": "payload",
          "source": "src/Data-Torrent-Block.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Payload bytes",
          "hierarchy": "Data Torrent Block",
          "module": "Data.Torrent.Block",
          "name": "blkData",
          "package": "bittorrent",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Block.html#v:blkData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZero-based byte offset within the piece.\n\u003c/p\u003e",
          "module": "Data.Torrent.Block",
          "name": "blkOffset",
          "package": "bittorrent",
          "signature": "BlockOffset",
          "source": "src/Data-Torrent-Block.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Zero-based byte offset within the piece",
          "hierarchy": "Data Torrent Block",
          "module": "Data.Torrent.Block",
          "name": "blkOffset",
          "package": "bittorrent",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Block.html#v:blkOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZero-based piece index.\n\u003c/p\u003e",
          "module": "Data.Torrent.Block",
          "name": "blkPiece",
          "package": "bittorrent",
          "signature": "PieceIx",
          "source": "src/Data-Torrent-Block.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Zero-based piece index",
          "hierarchy": "Data Torrent Block",
          "module": "Data.Torrent.Block",
          "name": "blkPiece",
          "package": "bittorrent",
          "partial": "Piece",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Block.html#v:blkPiece"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet block index of a block.\n\u003c/p\u003e",
          "module": "Data.Torrent.Block",
          "name": "blockIx",
          "package": "bittorrent",
          "signature": "Block Lazy.ByteString -\u003e BlockIx",
          "source": "src/Data-Torrent-Block.html#blockIx",
          "type": "function"
        },
        "index": {
          "description": "Get block index of block",
          "hierarchy": "Data Torrent Block",
          "module": "Data.Torrent.Block",
          "name": "blockIx",
          "normalized": "Block Lazy.ByteString-\u003eBlockIx",
          "package": "bittorrent",
          "partial": "Ix",
          "signature": "Block Lazy.ByteString-\u003eBlockIx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Block.html#v:blockIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet location of payload bytes in the torrent content.\n\u003c/p\u003e",
          "module": "Data.Torrent.Block",
          "name": "blockIxRange",
          "package": "bittorrent",
          "signature": "PieceSize -\u003e BlockIx -\u003e (a, a)",
          "source": "src/Data-Torrent-Block.html#blockIxRange",
          "type": "function"
        },
        "index": {
          "description": "Get location of payload bytes in the torrent content",
          "hierarchy": "Data Torrent Block",
          "module": "Data.Torrent.Block",
          "name": "blockIxRange",
          "normalized": "PieceSize-\u003eBlockIx-\u003e(a,a)",
          "package": "bittorrent",
          "partial": "Ix Range",
          "signature": "PieceSize-\u003eBlockIx-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Block.html#v:blockIxRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet location of payload bytes in the torrent content.\n\u003c/p\u003e",
          "module": "Data.Torrent.Block",
          "name": "blockRange",
          "package": "bittorrent",
          "signature": "PieceSize -\u003e Block Lazy.ByteString -\u003e (a, a)",
          "source": "src/Data-Torrent-Block.html#blockRange",
          "type": "function"
        },
        "index": {
          "description": "Get location of payload bytes in the torrent content",
          "hierarchy": "Data Torrent Block",
          "module": "Data.Torrent.Block",
          "name": "blockRange",
          "normalized": "PieceSize-\u003eBlock Lazy.ByteString-\u003e(a,a)",
          "package": "bittorrent",
          "partial": "Range",
          "signature": "PieceSize-\u003eBlock Lazy.ByteString-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Block.html#v:blockRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet size of block \u003cem\u003epayload\u003c/em\u003e in bytes.\n\u003c/p\u003e",
          "module": "Data.Torrent.Block",
          "name": "blockSize",
          "package": "bittorrent",
          "signature": "Block Lazy.ByteString -\u003e BlockSize",
          "source": "src/Data-Torrent-Block.html#blockSize",
          "type": "function"
        },
        "index": {
          "description": "Get size of block payload in bytes",
          "hierarchy": "Data Torrent Block",
          "module": "Data.Torrent.Block",
          "name": "blockSize",
          "normalized": "Block Lazy.ByteString-\u003eBlockSize",
          "package": "bittorrent",
          "partial": "Size",
          "signature": "Block Lazy.ByteString-\u003eBlockSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Block.html#v:blockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidely used semi-official block size. Some clients can ignore if\n block size of BlockIx in Request message is not equal to this\n value.\n\u003c/p\u003e",
          "module": "Data.Torrent.Block",
          "name": "defaultTransferSize",
          "package": "bittorrent",
          "signature": "BlockSize",
          "source": "src/Data-Torrent-Block.html#defaultTransferSize",
          "type": "function"
        },
        "index": {
          "description": "Widely used semi-official block size Some clients can ignore if block size of BlockIx in Request message is not equal to this value",
          "hierarchy": "Data Torrent Block",
          "module": "Data.Torrent.Block",
          "name": "defaultTransferSize",
          "package": "bittorrent",
          "partial": "Transfer Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Block.html#v:defaultTransferSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlock size starting from offset.\n\u003c/p\u003e",
          "module": "Data.Torrent.Block",
          "name": "ixLength",
          "package": "bittorrent",
          "signature": "BlockSize",
          "source": "src/Data-Torrent-Block.html#BlockIx",
          "type": "function"
        },
        "index": {
          "description": "Block size starting from offset",
          "hierarchy": "Data Torrent Block",
          "module": "Data.Torrent.Block",
          "name": "ixLength",
          "package": "bittorrent",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Block.html#v:ixLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZero-based byte offset within the piece.\n\u003c/p\u003e",
          "module": "Data.Torrent.Block",
          "name": "ixOffset",
          "package": "bittorrent",
          "signature": "BlockOffset",
          "source": "src/Data-Torrent-Block.html#BlockIx",
          "type": "function"
        },
        "index": {
          "description": "Zero-based byte offset within the piece",
          "hierarchy": "Data Torrent Block",
          "module": "Data.Torrent.Block",
          "name": "ixOffset",
          "package": "bittorrent",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Block.html#v:ixOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZero-based piece index.\n\u003c/p\u003e",
          "module": "Data.Torrent.Block",
          "name": "ixPiece",
          "package": "bittorrent",
          "signature": "PieceIx",
          "source": "src/Data-Torrent-Block.html#BlockIx",
          "type": "function"
        },
        "index": {
          "description": "Zero-based piece index",
          "hierarchy": "Data Torrent Block",
          "module": "Data.Torrent.Block",
          "name": "ixPiece",
          "package": "bittorrent",
          "partial": "Piece",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Block.html#v:ixPiece"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eClientInfo\u003c/a\u003e\u003c/code\u003e is used to identify the client implementation and\n   version which also contained in \u003ccode\u003ePeer\u003c/code\u003e. For exsample first 6\n   bytes of peer id of this this library are \u003ccode\u003e-HS0100-\u003c/code\u003e while for\n   mainline we have \u003ccode\u003eM4-3-6--\u003c/code\u003e.  We could extract this info and\n   print in human-friendly form: this is useful for debugging and\n   logging.\n\u003c/p\u003e\u003cp\u003eFor more information see:\n   \u003ca\u003ehttp://bittorrent.org/beps/bep_0020.html\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eNOTE: Do _not_ use this information to control client\n   capabilities (such as supported enchancements), this should be\n   done using \u003ccode\u003e\u003ca\u003eExtension\u003c/a\u003e\u003c/code\u003e!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Torrent.Client",
          "name": "Client",
          "package": "bittorrent",
          "source": "src/Data-Torrent-Client.html",
          "type": "module"
        },
        "index": {
          "description": "ClientInfo is used to identify the client implementation and version which also contained in Peer For exsample first bytes of peer id of this this library are HS0100 while for mainline we have M4-3-6 We could extract this info and print in human-friendly form this is useful for debugging and logging For more information see http bittorrent.org beps bep html NOTE Do not use this information to control client capabilities such as supported enchancements this should be done using Extension",
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "Client",
          "package": "bittorrent",
          "partial": "Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of registered client versions + IlibHSbittorrent (this\n package) + Unknown (for not recognized software). All names are\n prefixed by \u003ca\u003eI\u003c/a\u003e because some of them starts from lowercase letter\n but that is not a valid Haskell constructor name.\n\u003c/p\u003e",
          "module": "Data.Torrent.Client",
          "name": "ClientImpl",
          "package": "bittorrent",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "data"
        },
        "index": {
          "description": "List of registered client versions IlibHSbittorrent this package Unknown for not recognized software All names are prefixed by because some of them starts from lowercase letter but that is not valid Haskell constructor name",
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "ClientImpl",
          "package": "bittorrent",
          "partial": "Client Impl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#t:ClientImpl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe all sensible infomation that can be obtained from a peer\n identifier or torrent \u003cem\u003ecreatedBy\u003c/em\u003e field.\n\u003c/p\u003e",
          "module": "Data.Torrent.Client",
          "name": "ClientInfo",
          "package": "bittorrent",
          "source": "src/Data-Torrent-Client.html#ClientInfo",
          "type": "data"
        },
        "index": {
          "description": "The all sensible infomation that can be obtained from peer identifier or torrent createdBy field",
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "ClientInfo",
          "package": "bittorrent",
          "partial": "Client Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#t:ClientInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "ClientInfo",
          "package": "bittorrent",
          "signature": "ClientInfo",
          "source": "src/Data-Torrent-Client.html#ClientInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "ClientInfo",
          "package": "bittorrent",
          "partial": "Client Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:ClientInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IABC",
          "package": "bittorrent",
          "signature": "IABC",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IABC",
          "package": "bittorrent",
          "partial": "IABC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IABC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IArctic",
          "package": "bittorrent",
          "signature": "IArctic",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IArctic",
          "package": "bittorrent",
          "partial": "IArctic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IArctic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IAres",
          "package": "bittorrent",
          "signature": "IAres",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IAres",
          "package": "bittorrent",
          "partial": "IAres",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IAres"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IAvicora",
          "package": "bittorrent",
          "signature": "IAvicora",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IAvicora",
          "package": "bittorrent",
          "partial": "IAvicora",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IAvicora"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IAzureus",
          "package": "bittorrent",
          "signature": "IAzureus",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IAzureus",
          "package": "bittorrent",
          "partial": "IAzureus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IAzureus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IBTG",
          "package": "bittorrent",
          "signature": "IBTG",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IBTG",
          "package": "bittorrent",
          "partial": "IBTG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IBTG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IBTQueue",
          "package": "bittorrent",
          "signature": "IBTQueue",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IBTQueue",
          "package": "bittorrent",
          "partial": "IBTQueue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IBTQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IBTSlave",
          "package": "bittorrent",
          "signature": "IBTSlave",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IBTSlave",
          "package": "bittorrent",
          "partial": "IBTSlave",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IBTSlave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IBitBuddy",
          "package": "bittorrent",
          "signature": "IBitBuddy",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IBitBuddy",
          "package": "bittorrent",
          "partial": "IBit Buddy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IBitBuddy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IBitComet",
          "package": "bittorrent",
          "signature": "IBitComet",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IBitComet",
          "package": "bittorrent",
          "partial": "IBit Comet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IBitComet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IBitLet",
          "package": "bittorrent",
          "signature": "IBitLet",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IBitLet",
          "package": "bittorrent",
          "partial": "IBit Let",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IBitLet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IBitLord",
          "package": "bittorrent",
          "signature": "IBitLord",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IBitLord",
          "package": "bittorrent",
          "partial": "IBit Lord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IBitLord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IBitPump",
          "package": "bittorrent",
          "signature": "IBitPump",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IBitPump",
          "package": "bittorrent",
          "partial": "IBit Pump",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IBitPump"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IBitRocket",
          "package": "bittorrent",
          "signature": "IBitRocket",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IBitRocket",
          "package": "bittorrent",
          "partial": "IBit Rocket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IBitRocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IBitTornado",
          "package": "bittorrent",
          "signature": "IBitTornado",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IBitTornado",
          "package": "bittorrent",
          "partial": "IBit Tornado",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IBitTornado"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IBitflu",
          "package": "bittorrent",
          "signature": "IBitflu",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IBitflu",
          "package": "bittorrent",
          "partial": "IBitflu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IBitflu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IBittorrentX",
          "package": "bittorrent",
          "signature": "IBittorrentX",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IBittorrentX",
          "package": "bittorrent",
          "partial": "IBittorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IBittorrentX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "ICTorrent",
          "package": "bittorrent",
          "signature": "ICTorrent",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "ICTorrent",
          "package": "bittorrent",
          "partial": "ICTorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:ICTorrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IDelugeTorrent",
          "package": "bittorrent",
          "signature": "IDelugeTorrent",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IDelugeTorrent",
          "package": "bittorrent",
          "partial": "IDeluge Torrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IDelugeTorrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IEBit",
          "package": "bittorrent",
          "signature": "IEBit",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IEBit",
          "package": "bittorrent",
          "partial": "IEBit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IEBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IElectricSheep",
          "package": "bittorrent",
          "signature": "IElectricSheep",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IElectricSheep",
          "package": "bittorrent",
          "partial": "IElectric Sheep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IElectricSheep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IEnhancedCTorrent",
          "package": "bittorrent",
          "signature": "IEnhancedCTorrent",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IEnhancedCTorrent",
          "package": "bittorrent",
          "partial": "IEnhanced CTorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IEnhancedCTorrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IFireTorrent",
          "package": "bittorrent",
          "signature": "IFireTorrent",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IFireTorrent",
          "package": "bittorrent",
          "partial": "IFire Torrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IFireTorrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IFoxTorrent",
          "package": "bittorrent",
          "signature": "IFoxTorrent",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IFoxTorrent",
          "package": "bittorrent",
          "partial": "IFox Torrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IFoxTorrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IGSTorrent",
          "package": "bittorrent",
          "signature": "IGSTorrent",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IGSTorrent",
          "package": "bittorrent",
          "partial": "IGSTorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IGSTorrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IHalite",
          "package": "bittorrent",
          "signature": "IHalite",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IHalite",
          "package": "bittorrent",
          "partial": "IHalite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IHalite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IHydranode",
          "package": "bittorrent",
          "signature": "IHydranode",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IHydranode",
          "package": "bittorrent",
          "partial": "IHydranode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IHydranode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IKGet",
          "package": "bittorrent",
          "signature": "IKGet",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IKGet",
          "package": "bittorrent",
          "partial": "IKGet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IKGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IKTorrent",
          "package": "bittorrent",
          "signature": "IKTorrent",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IKTorrent",
          "package": "bittorrent",
          "partial": "IKTorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IKTorrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "ILH_ABC",
          "package": "bittorrent",
          "signature": "ILH_ABC",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "ILH_ABC",
          "package": "bittorrent",
          "partial": "ILH ABC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:ILH_ABC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "ILibTorrent",
          "package": "bittorrent",
          "signature": "ILibTorrent",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "ILibTorrent",
          "package": "bittorrent",
          "partial": "ILib Torrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:ILibTorrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "ILibtorrent",
          "package": "bittorrent",
          "signature": "ILibtorrent",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "ILibtorrent",
          "package": "bittorrent",
          "partial": "ILibtorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:ILibtorrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "ILimeWire",
          "package": "bittorrent",
          "signature": "ILimeWire",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "ILimeWire",
          "package": "bittorrent",
          "partial": "ILime Wire",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:ILimeWire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "ILphant",
          "package": "bittorrent",
          "signature": "ILphant",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "ILphant",
          "package": "bittorrent",
          "partial": "ILphant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:ILphant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IMLdonkey",
          "package": "bittorrent",
          "signature": "IMLdonkey",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IMLdonkey",
          "package": "bittorrent",
          "partial": "IMLdonkey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IMLdonkey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IMainline",
          "package": "bittorrent",
          "signature": "IMainline",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IMainline",
          "package": "bittorrent",
          "partial": "IMainline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IMainline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IMiro",
          "package": "bittorrent",
          "signature": "IMiro",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IMiro",
          "package": "bittorrent",
          "partial": "IMiro",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IMiro"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IMonoTorrent",
          "package": "bittorrent",
          "signature": "IMonoTorrent",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IMonoTorrent",
          "package": "bittorrent",
          "partial": "IMono Torrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IMonoTorrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IMooPolice",
          "package": "bittorrent",
          "signature": "IMooPolice",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IMooPolice",
          "package": "bittorrent",
          "partial": "IMoo Police",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IMooPolice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IMoonlightTorrent",
          "package": "bittorrent",
          "signature": "IMoonlightTorrent",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IMoonlightTorrent",
          "package": "bittorrent",
          "partial": "IMoonlight Torrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IMoonlightTorrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "INetTransport",
          "package": "bittorrent",
          "signature": "INetTransport",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "INetTransport",
          "package": "bittorrent",
          "partial": "INet Transport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:INetTransport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IOpera",
          "package": "bittorrent",
          "signature": "IOpera",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IOpera",
          "package": "bittorrent",
          "partial": "IOpera",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IOpera"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IOspreyPermaseed",
          "package": "bittorrent",
          "signature": "IOspreyPermaseed",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IOspreyPermaseed",
          "package": "bittorrent",
          "partial": "IOsprey Permaseed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IOspreyPermaseed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IPando",
          "package": "bittorrent",
          "signature": "IPando",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IPando",
          "package": "bittorrent",
          "partial": "IPando",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IPando"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IPropagateDataClient",
          "package": "bittorrent",
          "signature": "IPropagateDataClient",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IPropagateDataClient",
          "package": "bittorrent",
          "partial": "IPropagate Data Client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IPropagateDataClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IQQDownload",
          "package": "bittorrent",
          "signature": "IQQDownload",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IQQDownload",
          "package": "bittorrent",
          "partial": "IQQDownload",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IQQDownload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IQt4TorrentExample",
          "package": "bittorrent",
          "signature": "IQt4TorrentExample",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IQt4TorrentExample",
          "package": "bittorrent",
          "partial": "IQt Torrent Example",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IQt4TorrentExample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IRetriever",
          "package": "bittorrent",
          "signature": "IRetriever",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IRetriever",
          "package": "bittorrent",
          "partial": "IRetriever",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IRetriever"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IShadow",
          "package": "bittorrent",
          "signature": "IShadow",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IShadow",
          "package": "bittorrent",
          "partial": "IShadow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IShadow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IShareaza",
          "package": "bittorrent",
          "signature": "IShareaza",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IShareaza",
          "package": "bittorrent",
          "partial": "IShareaza",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IShareaza"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "ISwarmScope",
          "package": "bittorrent",
          "signature": "ISwarmScope",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "ISwarmScope",
          "package": "bittorrent",
          "partial": "ISwarm Scope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:ISwarmScope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "ISwiftbit",
          "package": "bittorrent",
          "signature": "ISwiftbit",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "ISwiftbit",
          "package": "bittorrent",
          "partial": "ISwiftbit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:ISwiftbit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "ISymTorrent",
          "package": "bittorrent",
          "signature": "ISymTorrent",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "ISymTorrent",
          "package": "bittorrent",
          "partial": "ISym Torrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:ISymTorrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "ITorrentDotNET",
          "package": "bittorrent",
          "signature": "ITorrentDotNET",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "ITorrentDotNET",
          "package": "bittorrent",
          "partial": "ITorrent Dot NET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:ITorrentDotNET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "ITorrentstorm",
          "package": "bittorrent",
          "signature": "ITorrentstorm",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "ITorrentstorm",
          "package": "bittorrent",
          "partial": "ITorrentstorm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:ITorrentstorm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "ITransmission",
          "package": "bittorrent",
          "signature": "ITransmission",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "ITransmission",
          "package": "bittorrent",
          "partial": "ITransmission",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:ITransmission"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "ITribler",
          "package": "bittorrent",
          "signature": "ITribler",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "ITribler",
          "package": "bittorrent",
          "partial": "ITribler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:ITribler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "ITuoTu",
          "package": "bittorrent",
          "signature": "ITuoTu",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "ITuoTu",
          "package": "bittorrent",
          "partial": "ITuo Tu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:ITuoTu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IUnknown",
          "package": "bittorrent",
          "signature": "IUnknown",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IUnknown",
          "package": "bittorrent",
          "partial": "IUnknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IVagaa",
          "package": "bittorrent",
          "signature": "IVagaa",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IVagaa",
          "package": "bittorrent",
          "partial": "IVagaa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IVagaa"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IXanTorrent",
          "package": "bittorrent",
          "signature": "IXanTorrent",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IXanTorrent",
          "package": "bittorrent",
          "partial": "IXan Torrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IXanTorrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IXtorrent",
          "package": "bittorrent",
          "signature": "IXtorrent",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IXtorrent",
          "package": "bittorrent",
          "partial": "IXtorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IXtorrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IXunlei",
          "package": "bittorrent",
          "signature": "IXunlei",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IXunlei",
          "package": "bittorrent",
          "partial": "IXunlei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IXunlei"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IZipTorrent",
          "package": "bittorrent",
          "signature": "IZipTorrent",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IZipTorrent",
          "package": "bittorrent",
          "partial": "IZip Torrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IZipTorrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IlibHSbittorrent",
          "package": "bittorrent",
          "signature": "IlibHSbittorrent",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IlibHSbittorrent",
          "package": "bittorrent",
          "partial": "Ilib HSbittorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IlibHSbittorrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IqBittorrent",
          "package": "bittorrent",
          "signature": "IqBittorrent",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IqBittorrent",
          "package": "bittorrent",
          "partial": "Iq Bittorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IqBittorrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "Isharktorrent",
          "package": "bittorrent",
          "signature": "Isharktorrent",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "Isharktorrent",
          "package": "bittorrent",
          "partial": "Isharktorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:Isharktorrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IuLeecher",
          "package": "bittorrent",
          "signature": "IuLeecher",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IuLeecher",
          "package": "bittorrent",
          "partial": "Iu Leecher",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IuLeecher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "IuTorrent",
          "package": "bittorrent",
          "signature": "IuTorrent",
          "source": "src/Data-Torrent-Client.html#ClientImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "IuTorrent",
          "package": "bittorrent",
          "partial": "Iu Torrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:IuTorrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "ciImpl",
          "package": "bittorrent",
          "signature": "ClientImpl",
          "source": "src/Data-Torrent-Client.html#ClientInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "ciImpl",
          "package": "bittorrent",
          "partial": "Impl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:ciImpl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Client",
          "name": "ciVersion",
          "package": "bittorrent",
          "signature": "Version",
          "source": "src/Data-Torrent-Client.html#ClientInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "ciVersion",
          "package": "bittorrent",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:ciVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClient info of this (the bittorrent library) package. Normally,\n applications should introduce its own idenitifiers, otherwise they\n can use \u003ccode\u003e\u003ca\u003elibClientInfo\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Data.Torrent.Client",
          "name": "libClientInfo",
          "package": "bittorrent",
          "signature": "ClientInfo",
          "source": "src/Data-Torrent-Client.html#libClientInfo",
          "type": "function"
        },
        "index": {
          "description": "Client info of this the bittorrent library package Normally applications should introduce its own idenitifiers otherwise they can use libClientInfo value",
          "hierarchy": "Data Torrent Client",
          "module": "Data.Torrent.Client",
          "name": "libClientInfo",
          "package": "bittorrent",
          "partial": "Client Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Client.html#v:libClientInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInfohash is a unique identifier of torrent.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Torrent.InfoHash",
          "name": "InfoHash",
          "package": "bittorrent",
          "source": "src/Data-Torrent-InfoHash.html",
          "type": "module"
        },
        "index": {
          "description": "Infohash is unique identifier of torrent",
          "hierarchy": "Data Torrent InfoHash",
          "module": "Data.Torrent.InfoHash",
          "name": "InfoHash",
          "package": "bittorrent",
          "partial": "Info Hash",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-InfoHash.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExactly 20 bytes long SHA1 hash of the info part of torrent file.\n\u003c/p\u003e",
          "module": "Data.Torrent.InfoHash",
          "name": "InfoHash",
          "package": "bittorrent",
          "source": "src/Data-Torrent-InfoHash.html#InfoHash",
          "type": "newtype"
        },
        "index": {
          "description": "Exactly bytes long SHA1 hash of the info part of torrent file",
          "hierarchy": "Data Torrent InfoHash",
          "module": "Data.Torrent.InfoHash",
          "name": "InfoHash",
          "package": "bittorrent",
          "partial": "Info Hash",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-InfoHash.html#t:InfoHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.InfoHash",
          "name": "InfoHash",
          "package": "bittorrent",
          "signature": "InfoHash",
          "source": "src/Data-Torrent-InfoHash.html#InfoHash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent InfoHash",
          "module": "Data.Torrent.InfoHash",
          "name": "InfoHash",
          "package": "bittorrent",
          "partial": "Info Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-InfoHash.html#v:InfoHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd query info hash parameter to uri.\n\u003c/p\u003e\u003cpre\u003e info_hash=\u003curl_encoded_info_hash\u003e\n\u003c/pre\u003e",
          "module": "Data.Torrent.InfoHash",
          "name": "addHashToURI",
          "package": "bittorrent",
          "signature": "URI -\u003e InfoHash -\u003e URI",
          "source": "src/Data-Torrent-InfoHash.html#addHashToURI",
          "type": "function"
        },
        "index": {
          "description": "Add query info hash parameter to uri info hash url encoded info hash",
          "hierarchy": "Data Torrent InfoHash",
          "module": "Data.Torrent.InfoHash",
          "name": "addHashToURI",
          "normalized": "URI-\u003eInfoHash-\u003eURI",
          "package": "bittorrent",
          "partial": "Hash To URI",
          "signature": "URI-\u003eInfoHash-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-InfoHash.html#v:addHashToURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.InfoHash",
          "name": "getInfoHash",
          "package": "bittorrent",
          "signature": "BS.ByteString",
          "source": "src/Data-Torrent-InfoHash.html#InfoHash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent InfoHash",
          "module": "Data.Torrent.InfoHash",
          "name": "getInfoHash",
          "package": "bittorrent",
          "partial": "Info Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-InfoHash.html#v:getInfoHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHash strict bytestring using SHA1 algorithm.\n\u003c/p\u003e",
          "module": "Data.Torrent.InfoHash",
          "name": "hash",
          "package": "bittorrent",
          "signature": "BS.ByteString -\u003e InfoHash",
          "source": "src/Data-Torrent-InfoHash.html#hash",
          "type": "function"
        },
        "index": {
          "description": "Hash strict bytestring using SHA1 algorithm",
          "hierarchy": "Data Torrent InfoHash",
          "module": "Data.Torrent.InfoHash",
          "name": "hash",
          "normalized": "BS.ByteString-\u003eInfoHash",
          "package": "bittorrent",
          "signature": "BS.ByteString-\u003eInfoHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-InfoHash.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHash lazy bytestring using SHA1 algorithm.\n\u003c/p\u003e",
          "module": "Data.Torrent.InfoHash",
          "name": "hashlazy",
          "package": "bittorrent",
          "signature": "BL.ByteString -\u003e InfoHash",
          "source": "src/Data-Torrent-InfoHash.html#hashlazy",
          "type": "function"
        },
        "index": {
          "description": "Hash lazy bytestring using SHA1 algorithm",
          "hierarchy": "Data Torrent InfoHash",
          "module": "Data.Torrent.InfoHash",
          "name": "hashlazy",
          "normalized": "BL.ByteString-\u003eInfoHash",
          "package": "bittorrent",
          "signature": "BL.ByteString-\u003eInfoHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-InfoHash.html#v:hashlazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHex encode infohash to text, full length.\n\u003c/p\u003e",
          "module": "Data.Torrent.InfoHash",
          "name": "longHex",
          "package": "bittorrent",
          "signature": "InfoHash -\u003e Text",
          "source": "src/Data-Torrent-InfoHash.html#longHex",
          "type": "function"
        },
        "index": {
          "description": "Hex encode infohash to text full length",
          "hierarchy": "Data Torrent InfoHash",
          "module": "Data.Torrent.InfoHash",
          "name": "longHex",
          "normalized": "InfoHash-\u003eText",
          "package": "bittorrent",
          "partial": "Hex",
          "signature": "InfoHash-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-InfoHash.html#v:longHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003elongHex\u003c/a\u003e\u003c/code\u003e, but 7 character long.\n\u003c/p\u003e",
          "module": "Data.Torrent.InfoHash",
          "name": "shortHex",
          "package": "bittorrent",
          "signature": "InfoHash -\u003e Text",
          "source": "src/Data-Torrent-InfoHash.html#shortHex",
          "type": "function"
        },
        "index": {
          "description": "The same as longHex but character long",
          "hierarchy": "Data Torrent InfoHash",
          "module": "Data.Torrent.InfoHash",
          "name": "shortHex",
          "normalized": "InfoHash-\u003eText",
          "package": "bittorrent",
          "partial": "Hex",
          "signature": "InfoHash-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-InfoHash.html#v:shortHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries both base16 and base32 while decoding info hash.\n\u003c/p\u003e",
          "module": "Data.Torrent.InfoHash",
          "name": "textToInfoHash",
          "package": "bittorrent",
          "signature": "Text -\u003e Maybe InfoHash",
          "source": "src/Data-Torrent-InfoHash.html#textToInfoHash",
          "type": "function"
        },
        "index": {
          "description": "Tries both base16 and base32 while decoding info hash",
          "hierarchy": "Data Torrent InfoHash",
          "module": "Data.Torrent.InfoHash",
          "name": "textToInfoHash",
          "normalized": "Text-\u003eMaybe InfoHash",
          "package": "bittorrent",
          "partial": "To Info Hash",
          "signature": "Text-\u003eMaybe InfoHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-InfoHash.html#v:textToInfoHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLayout of files in torrent.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Torrent.Layout",
          "name": "Layout",
          "package": "bittorrent",
          "source": "src/Data-Torrent-Layout.html",
          "type": "module"
        },
        "index": {
          "description": "Layout of files in torrent",
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "Layout",
          "package": "bittorrent",
          "partial": "Layout",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContain metainfo about one single file.\n\u003c/p\u003e",
          "module": "Data.Torrent.Layout",
          "name": "FileInfo",
          "package": "bittorrent",
          "source": "src/Data-Torrent-Layout.html#FileInfo",
          "type": "data"
        },
        "index": {
          "description": "Contain metainfo about one single file",
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "FileInfo",
          "package": "bittorrent",
          "partial": "File Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#t:FileInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Layout",
          "name": "FileOffset",
          "package": "bittorrent",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "FileOffset",
          "package": "bittorrent",
          "partial": "File Offset",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#t:FileOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of a file in bytes.\n\u003c/p\u003e",
          "module": "Data.Torrent.Layout",
          "name": "FileSize",
          "package": "bittorrent",
          "source": "src/Data-Torrent-Layout.html#FileSize",
          "type": "type"
        },
        "index": {
          "description": "Size of file in bytes",
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "FileSize",
          "package": "bittorrent",
          "partial": "File Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#t:FileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile layout specifies the order and the size of each file in the\n   storage. Note that order of files is highly important since we\n   coalesce all the files in the given order to get the linear block\n   address space.\n\u003c/p\u003e",
          "module": "Data.Torrent.Layout",
          "name": "Layout",
          "package": "bittorrent",
          "source": "src/Data-Torrent-Layout.html#Layout",
          "type": "type"
        },
        "index": {
          "description": "File layout specifies the order and the size of each file in the storage Note that order of files is highly important since we coalesce all the files in the given order to get the linear block address space",
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "Layout",
          "package": "bittorrent",
          "partial": "Layout",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#t:Layout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOriginal (found in torrent file) layout info is either:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Single file with its \u003cem\u003ename\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e Multiple files with its relative file \u003cem\u003epaths\u003c/em\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Torrent.Layout",
          "name": "LayoutInfo",
          "package": "bittorrent",
          "source": "src/Data-Torrent-Layout.html#LayoutInfo",
          "type": "data"
        },
        "index": {
          "description": "Original found in torrent file layout info is either Single file with its name Multiple files with its relative file paths",
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "LayoutInfo",
          "package": "bittorrent",
          "partial": "Layout Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#t:LayoutInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Layout",
          "name": "FileInfo",
          "package": "bittorrent",
          "signature": "FileInfo",
          "source": "src/Data-Torrent-Layout.html#FileInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "FileInfo",
          "package": "bittorrent",
          "partial": "File Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#v:FileInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Layout",
          "name": "MultiFile",
          "package": "bittorrent",
          "signature": "MultiFile",
          "source": "src/Data-Torrent-Layout.html#LayoutInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "MultiFile",
          "package": "bittorrent",
          "partial": "Multi File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#v:MultiFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Layout",
          "name": "SingleFile",
          "package": "bittorrent",
          "signature": "SingleFile",
          "source": "src/Data-Torrent-Layout.html#LayoutInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "SingleFile",
          "package": "bittorrent",
          "partial": "Single File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#v:SingleFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate offset of each file based on its length, incrementally.\n\u003c/p\u003e",
          "module": "Data.Torrent.Layout",
          "name": "accumOffsets",
          "package": "bittorrent",
          "signature": "Layout FileSize -\u003e Layout FileOffset",
          "source": "src/Data-Torrent-Layout.html#accumOffsets",
          "type": "function"
        },
        "index": {
          "description": "Calculate offset of each file based on its length incrementally",
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "accumOffsets",
          "normalized": "Layout FileSize-\u003eLayout FileOffset",
          "package": "bittorrent",
          "partial": "Offsets",
          "signature": "Layout FileSize-\u003eLayout FileOffset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#v:accumOffsets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind number of blocks of the specified size. If torrent size is\n not a multiple of block size then the count is rounded up.\n\u003c/p\u003e",
          "module": "Data.Torrent.Layout",
          "name": "blockCount",
          "package": "bittorrent",
          "signature": "BlockSize -\u003e LayoutInfo -\u003e Int",
          "source": "src/Data-Torrent-Layout.html#blockCount",
          "type": "function"
        },
        "index": {
          "description": "Find number of blocks of the specified size If torrent size is not multiple of block size then the count is rounded up",
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "blockCount",
          "normalized": "BlockSize-\u003eLayoutInfo-\u003eInt",
          "package": "bittorrent",
          "partial": "Count",
          "signature": "BlockSize-\u003eLayoutInfo-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#v:blockCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind sum of sizes of the all torrent files.\n\u003c/p\u003e",
          "module": "Data.Torrent.Layout",
          "name": "contentLength",
          "package": "bittorrent",
          "signature": "LayoutInfo -\u003e FileSize",
          "source": "src/Data-Torrent-Layout.html#contentLength",
          "type": "function"
        },
        "index": {
          "description": "Find sum of sizes of the all torrent files",
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "contentLength",
          "normalized": "LayoutInfo-\u003eFileSize",
          "package": "bittorrent",
          "partial": "Length",
          "signature": "LayoutInfo-\u003eFileSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#v:contentLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength of the file in bytes.\n\u003c/p\u003e",
          "module": "Data.Torrent.Layout",
          "name": "fiLength",
          "package": "bittorrent",
          "signature": "FileSize",
          "source": "src/Data-Torrent-Layout.html#FileInfo",
          "type": "function"
        },
        "index": {
          "description": "Length of the file in bytes",
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "fiLength",
          "package": "bittorrent",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#v:fiLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e32 character long MD5 sum of the file.  Used by third-party\n tools, not by bittorrent protocol itself.\n\u003c/p\u003e",
          "module": "Data.Torrent.Layout",
          "name": "fiMD5Sum",
          "package": "bittorrent",
          "signature": "(Maybe BS.ByteString)",
          "source": "src/Data-Torrent-Layout.html#FileInfo",
          "type": "function"
        },
        "index": {
          "description": "character long MD5 sum of the file Used by third-party tools not by bittorrent protocol itself",
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "fiMD5Sum",
          "package": "bittorrent",
          "partial": "MD Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#v:fiMD5Sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne or more string elements that together represent the\n path and filename. Each element in the list corresponds to\n either a directory name or (in the case of the last element)\n the filename.  For example, the file:\n\u003c/p\u003e\u003cpre\u003e \"dir1/dir2/file.ext\"\n\u003c/pre\u003e\u003cp\u003ewould consist of three string elements:\n\u003c/p\u003e\u003cpre\u003e [\"dir1\", \"dir2\", \"file.ext\"]\n\u003c/pre\u003e",
          "module": "Data.Torrent.Layout",
          "name": "fiName",
          "package": "bittorrent",
          "signature": "a",
          "source": "src/Data-Torrent-Layout.html#FileInfo",
          "type": "function"
        },
        "index": {
          "description": "One or more string elements that together represent the path and filename Each element in the list corresponds to either directory name or in the case of the last element the filename For example the file dir1 dir2 file.ext would consist of three string elements dir1 dir2 file.ext",
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "fiName",
          "package": "bittorrent",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#v:fiName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet number of all files in torrent.\n\u003c/p\u003e",
          "module": "Data.Torrent.Layout",
          "name": "fileCount",
          "package": "bittorrent",
          "signature": "LayoutInfo -\u003e Int",
          "source": "src/Data-Torrent-Layout.html#fileCount",
          "type": "function"
        },
        "index": {
          "description": "Get number of all files in torrent",
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "fileCount",
          "normalized": "LayoutInfo-\u003eInt",
          "package": "bittorrent",
          "partial": "Count",
          "signature": "LayoutInfo-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#v:fileCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Layout",
          "name": "fileLength",
          "package": "bittorrent",
          "signature": "forall a.  Lens' (FileInfo a) FileSize",
          "source": "src/Data-Torrent-Layout.html#fileLength",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "fileLength",
          "package": "bittorrent",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#v:fileLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Layout",
          "name": "fileMD5Sum",
          "package": "bittorrent",
          "signature": "forall a.  Lens' (FileInfo a) (Maybe BS.ByteString)",
          "source": "src/Data-Torrent-Layout.html#fileMD5Sum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "fileMD5Sum",
          "package": "bittorrent",
          "partial": "MD Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#v:fileMD5Sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives global offset of a content file for a given full path.\n\u003c/p\u003e",
          "module": "Data.Torrent.Layout",
          "name": "fileOffset",
          "package": "bittorrent",
          "signature": "FilePath -\u003e Layout FileOffset -\u003e Maybe FileOffset",
          "source": "src/Data-Torrent-Layout.html#fileOffset",
          "type": "function"
        },
        "index": {
          "description": "Gives global offset of content file for given full path",
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "fileOffset",
          "normalized": "FilePath-\u003eLayout FileOffset-\u003eMaybe FileOffset",
          "package": "bittorrent",
          "partial": "Offset",
          "signature": "FilePath-\u003eLayout FileOffset-\u003eMaybe FileOffset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#v:fileOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Layout",
          "name": "filePath",
          "package": "bittorrent",
          "signature": "forall a a.  Lens (FileInfo a) (FileInfo a) a a",
          "source": "src/Data-Torrent-Layout.html#filePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "filePath",
          "package": "bittorrent",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#v:filePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract files layout from torrent info with the given root path.\n\u003c/p\u003e",
          "module": "Data.Torrent.Layout",
          "name": "flatLayout",
          "package": "bittorrent",
          "signature": "FilePath-\u003e LayoutInfo-\u003e Layout FileSize",
          "type": "function"
        },
        "index": {
          "description": "Extract files layout from torrent info with the given root path",
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "flatLayout",
          "normalized": "FilePath-\u003eLayoutInfo-\u003eLayout FileSize",
          "package": "bittorrent",
          "partial": "Layout",
          "signature": "FilePath-\u003eLayoutInfo-\u003eLayout FileSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#v:flatLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Layout",
          "name": "getLayoutInfo",
          "package": "bittorrent",
          "signature": "Get LayoutInfo",
          "source": "src/Data-Torrent-Layout.html#getLayoutInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "getLayoutInfo",
          "package": "bittorrent",
          "partial": "Layout Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#v:getLayoutInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if this is multifile torrent.\n\u003c/p\u003e",
          "module": "Data.Torrent.Layout",
          "name": "isMultiFile",
          "package": "bittorrent",
          "signature": "LayoutInfo -\u003e Bool",
          "source": "src/Data-Torrent-Layout.html#isMultiFile",
          "type": "function"
        },
        "index": {
          "description": "Test if this is multifile torrent",
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "isMultiFile",
          "normalized": "LayoutInfo-\u003eBool",
          "package": "bittorrent",
          "partial": "Multi File",
          "signature": "LayoutInfo-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#v:isMultiFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if this is single file torrent.\n\u003c/p\u003e",
          "module": "Data.Torrent.Layout",
          "name": "isSingleFile",
          "package": "bittorrent",
          "signature": "LayoutInfo -\u003e Bool",
          "source": "src/Data-Torrent-Layout.html#isSingleFile",
          "type": "function"
        },
        "index": {
          "description": "Test if this is single file torrent",
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "isSingleFile",
          "normalized": "LayoutInfo-\u003eBool",
          "package": "bittorrent",
          "partial": "Single File",
          "signature": "LayoutInfo-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#v:isSingleFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin file path.\n\u003c/p\u003e",
          "module": "Data.Torrent.Layout",
          "name": "joinFilePath",
          "package": "bittorrent",
          "signature": "FileInfo [BS.ByteString] -\u003e FileInfo BS.ByteString",
          "source": "src/Data-Torrent-Layout.html#joinFilePath",
          "type": "function"
        },
        "index": {
          "description": "Join file path",
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "joinFilePath",
          "normalized": "FileInfo[BS.ByteString]-\u003eFileInfo BS.ByteString",
          "package": "bittorrent",
          "partial": "File Path",
          "signature": "FileInfo[BS.ByteString]-\u003eFileInfo BS.ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#v:joinFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003cem\u003esuggested\u003c/em\u003e name of the root directory in which to\n store all the files.\n\u003c/p\u003e",
          "module": "Data.Torrent.Layout",
          "name": "liDirName",
          "package": "bittorrent",
          "signature": "BS.ByteString",
          "source": "src/Data-Torrent-Layout.html#LayoutInfo",
          "type": "function"
        },
        "index": {
          "description": "The suggested name of the root directory in which to store all the files",
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "liDirName",
          "package": "bittorrent",
          "partial": "Dir Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#v:liDirName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle file info.\n\u003c/p\u003e",
          "module": "Data.Torrent.Layout",
          "name": "liFile",
          "package": "bittorrent",
          "signature": "(FileInfo BS.ByteString)",
          "source": "src/Data-Torrent-Layout.html#LayoutInfo",
          "type": "function"
        },
        "index": {
          "description": "Single file info",
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "liFile",
          "package": "bittorrent",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#v:liFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of the all files that torrent contains.\n\u003c/p\u003e",
          "module": "Data.Torrent.Layout",
          "name": "liFiles",
          "package": "bittorrent",
          "signature": "[FileInfo [BS.ByteString]]",
          "source": "src/Data-Torrent-Layout.html#LayoutInfo",
          "type": "function"
        },
        "index": {
          "description": "List of the all files that torrent contains",
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "liFiles",
          "normalized": "[FileInfo[BS.ByteString]]",
          "package": "bittorrent",
          "partial": "Files",
          "signature": "[FileInfo[BS.ByteString]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#v:liFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Layout",
          "name": "multiFile",
          "package": "bittorrent",
          "signature": "Traversal' LayoutInfo [FileInfo [BS.ByteString]]",
          "source": "src/Data-Torrent-Layout.html#multiFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "multiFile",
          "normalized": "Traversal' LayoutInfo[FileInfo[BS.ByteString]]",
          "package": "bittorrent",
          "partial": "File",
          "signature": "Traversal' LayoutInfo[FileInfo[BS.ByteString]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#v:multiFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Layout",
          "name": "putLayoutInfo",
          "package": "bittorrent",
          "signature": "Put LayoutInfo",
          "source": "src/Data-Torrent-Layout.html#putLayoutInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "putLayoutInfo",
          "package": "bittorrent",
          "partial": "Layout Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#v:putLayoutInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Layout",
          "name": "rootDirName",
          "package": "bittorrent",
          "signature": "Traversal' LayoutInfo BS.ByteString",
          "source": "src/Data-Torrent-Layout.html#rootDirName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "rootDirName",
          "package": "bittorrent",
          "partial": "Dir Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#v:rootDirName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Layout",
          "name": "singleFile",
          "package": "bittorrent",
          "signature": "Traversal' LayoutInfo (FileInfo BS.ByteString)",
          "source": "src/Data-Torrent-Layout.html#singleFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "singleFile",
          "package": "bittorrent",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#v:singleFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet name of the torrent based on the root path piece.\n\u003c/p\u003e",
          "module": "Data.Torrent.Layout",
          "name": "suggestedName",
          "package": "bittorrent",
          "signature": "LayoutInfo -\u003e BS.ByteString",
          "source": "src/Data-Torrent-Layout.html#suggestedName",
          "type": "function"
        },
        "index": {
          "description": "Get name of the torrent based on the root path piece",
          "hierarchy": "Data Torrent Layout",
          "module": "Data.Torrent.Layout",
          "name": "suggestedName",
          "normalized": "LayoutInfo-\u003eBS.ByteString",
          "package": "bittorrent",
          "partial": "Name",
          "signature": "LayoutInfo-\u003eBS.ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Layout.html#v:suggestedName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing and rendering of magnet URIs.\n\u003c/p\u003e\u003cp\u003eFor more info see:\n   \u003ca\u003ehttp://magnet-uri.sourceforge.net/magnet-draft-overview.txt\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eBittorrent specific info:\n   \u003ca\u003ehttp://www.bittorrent.org/beps/bep_0009.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Torrent.Magnet",
          "name": "Magnet",
          "package": "bittorrent",
          "source": "src/Data-Torrent-Magnet.html",
          "type": "module"
        },
        "index": {
          "description": "Parsing and rendering of magnet URIs For more info see http magnet-uri.sourceforge.net magnet-draft-overview.txt Bittorrent specific info http www.bittorrent.org beps bep html",
          "hierarchy": "Data Torrent Magnet",
          "module": "Data.Torrent.Magnet",
          "name": "Magnet",
          "package": "bittorrent",
          "partial": "Magnet",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Magnet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn URI used to identify torrent.\n\u003c/p\u003e",
          "module": "Data.Torrent.Magnet",
          "name": "Magnet",
          "package": "bittorrent",
          "source": "src/Data-Torrent-Magnet.html#Magnet",
          "type": "data"
        },
        "index": {
          "description": "An URI used to identify torrent",
          "hierarchy": "Data Torrent Magnet",
          "module": "Data.Torrent.Magnet",
          "name": "Magnet",
          "package": "bittorrent",
          "partial": "Magnet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Magnet.html#t:Magnet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Magnet",
          "name": "Magnet",
          "package": "bittorrent",
          "signature": "Magnet",
          "source": "src/Data-Torrent-Magnet.html#Magnet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Magnet",
          "module": "Data.Torrent.Magnet",
          "name": "Magnet",
          "package": "bittorrent",
          "partial": "Magnet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Magnet.html#v:Magnet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Magnet",
          "name": "acceptableSource",
          "package": "bittorrent",
          "signature": "Maybe URI",
          "source": "src/Data-Torrent-Magnet.html#Magnet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Magnet",
          "module": "Data.Torrent.Magnet",
          "name": "acceptableSource",
          "package": "bittorrent",
          "partial": "Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Magnet.html#v:acceptableSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esimpleMagnet\u003c/a\u003e\u003c/code\u003e but also include exactLength (\u003ccode\u003exl\u003c/code\u003e param) and\n tracker (\u003ccode\u003etr\u003c/code\u003e param).\n\u003c/p\u003e",
          "module": "Data.Torrent.Magnet",
          "name": "detailedMagnet",
          "package": "bittorrent",
          "signature": "Torrent -\u003e Magnet",
          "source": "src/Data-Torrent-Magnet.html#detailedMagnet",
          "type": "function"
        },
        "index": {
          "description": "Like simpleMagnet but also include exactLength xl param and tracker tr param",
          "hierarchy": "Data Torrent Magnet",
          "module": "Data.Torrent.Magnet",
          "name": "detailedMagnet",
          "normalized": "Torrent-\u003eMagnet",
          "package": "bittorrent",
          "partial": "Magnet",
          "signature": "Torrent-\u003eMagnet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Magnet.html#v:detailedMagnet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMight be used to display name while waiting for metadata.\n\u003c/p\u003e",
          "module": "Data.Torrent.Magnet",
          "name": "displayName",
          "package": "bittorrent",
          "signature": "Maybe Text",
          "source": "src/Data-Torrent-Magnet.html#Magnet",
          "type": "function"
        },
        "index": {
          "description": "Might be used to display name while waiting for metadata",
          "hierarchy": "Data Torrent Magnet",
          "module": "Data.Torrent.Magnet",
          "name": "displayName",
          "package": "bittorrent",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Magnet.html#v:displayName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of the resource in bytes.\n\u003c/p\u003e",
          "module": "Data.Torrent.Magnet",
          "name": "exactLength",
          "package": "bittorrent",
          "signature": "Maybe Integer",
          "source": "src/Data-Torrent-Magnet.html#Magnet",
          "type": "function"
        },
        "index": {
          "description": "Size of the resource in bytes",
          "hierarchy": "Data Torrent Magnet",
          "module": "Data.Torrent.Magnet",
          "name": "exactLength",
          "package": "bittorrent",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Magnet.html#v:exactLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Magnet",
          "name": "exactSource",
          "package": "bittorrent",
          "signature": "Maybe URI",
          "source": "src/Data-Torrent-Magnet.html#Magnet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Magnet",
          "module": "Data.Torrent.Magnet",
          "name": "exactSource",
          "package": "bittorrent",
          "partial": "Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Magnet.html#v:exactSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResource hash.\n\u003c/p\u003e",
          "module": "Data.Torrent.Magnet",
          "name": "exactTopic",
          "package": "bittorrent",
          "signature": "InfoHash",
          "source": "src/Data-Torrent-Magnet.html#Magnet",
          "type": "function"
        },
        "index": {
          "description": "Resource hash",
          "hierarchy": "Data Torrent Magnet",
          "module": "Data.Torrent.Magnet",
          "name": "exactTopic",
          "package": "bittorrent",
          "partial": "Topic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Magnet.html#v:exactTopic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003eparseMagnet\u003c/a\u003e\u003c/code\u003e but useful if you alread have a parsed\n uri.\n\u003c/p\u003e",
          "module": "Data.Torrent.Magnet",
          "name": "fromURI",
          "package": "bittorrent",
          "signature": "URI -\u003e Either String Magnet",
          "source": "src/Data-Torrent-Magnet.html#fromURI",
          "type": "function"
        },
        "index": {
          "description": "The same as parseMagnet but useful if you alread have parsed uri",
          "hierarchy": "Data Torrent Magnet",
          "module": "Data.Torrent.Magnet",
          "name": "fromURI",
          "normalized": "URI-\u003eEither String Magnet",
          "package": "bittorrent",
          "partial": "URI",
          "signature": "URI-\u003eEither String Magnet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Magnet.html#v:fromURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch string.\n\u003c/p\u003e",
          "module": "Data.Torrent.Magnet",
          "name": "keywordTopic",
          "package": "bittorrent",
          "signature": "Maybe String",
          "source": "src/Data-Torrent-Magnet.html#Magnet",
          "type": "function"
        },
        "index": {
          "description": "Search string",
          "hierarchy": "Data Torrent Magnet",
          "module": "Data.Torrent.Magnet",
          "name": "keywordTopic",
          "package": "bittorrent",
          "partial": "Topic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Magnet.html#v:keywordTopic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Magnet",
          "name": "manifest",
          "package": "bittorrent",
          "signature": "Maybe String",
          "source": "src/Data-Torrent-Magnet.html#Magnet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Magnet",
          "module": "Data.Torrent.Magnet",
          "name": "manifest",
          "package": "bittorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Magnet.html#v:manifest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet exact topic only, other params are empty.\n\u003c/p\u003e",
          "module": "Data.Torrent.Magnet",
          "name": "nullMagnet",
          "package": "bittorrent",
          "signature": "InfoHash -\u003e Magnet",
          "source": "src/Data-Torrent-Magnet.html#nullMagnet",
          "type": "function"
        },
        "index": {
          "description": "Set exact topic only other params are empty",
          "hierarchy": "Data Torrent Magnet",
          "module": "Data.Torrent.Magnet",
          "name": "nullMagnet",
          "normalized": "InfoHash-\u003eMagnet",
          "package": "bittorrent",
          "partial": "Magnet",
          "signature": "InfoHash-\u003eMagnet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Magnet.html#v:nullMagnet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to parse magnet link from urlencoded string.\n\u003c/p\u003e",
          "module": "Data.Torrent.Magnet",
          "name": "parseMagnet",
          "package": "bittorrent",
          "signature": "String -\u003e Maybe Magnet",
          "source": "src/Data-Torrent-Magnet.html#parseMagnet",
          "type": "function"
        },
        "index": {
          "description": "Try to parse magnet link from urlencoded string",
          "hierarchy": "Data Torrent Magnet",
          "module": "Data.Torrent.Magnet",
          "name": "parseMagnet",
          "normalized": "String-\u003eMaybe Magnet",
          "package": "bittorrent",
          "partial": "Magnet",
          "signature": "String-\u003eMaybe Magnet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Magnet.html#v:parseMagnet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender magnet link to urlencoded string\n\u003c/p\u003e",
          "module": "Data.Torrent.Magnet",
          "name": "renderMagnet",
          "package": "bittorrent",
          "signature": "Magnet -\u003e String",
          "source": "src/Data-Torrent-Magnet.html#renderMagnet",
          "type": "function"
        },
        "index": {
          "description": "Render magnet link to urlencoded string",
          "hierarchy": "Data Torrent Magnet",
          "module": "Data.Torrent.Magnet",
          "name": "renderMagnet",
          "normalized": "Magnet-\u003eString",
          "package": "bittorrent",
          "partial": "Magnet",
          "signature": "Magnet-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Magnet.html#v:renderMagnet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple magnet link including infohash (\u003ccode\u003ext\u003c/code\u003e param) and display\n name (\u003ccode\u003edn\u003c/code\u003e param).\n\u003c/p\u003e",
          "module": "Data.Torrent.Magnet",
          "name": "simpleMagnet",
          "package": "bittorrent",
          "signature": "Torrent -\u003e Magnet",
          "source": "src/Data-Torrent-Magnet.html#simpleMagnet",
          "type": "function"
        },
        "index": {
          "description": "simple magnet link including infohash xt param and display name dn param",
          "hierarchy": "Data Torrent Magnet",
          "module": "Data.Torrent.Magnet",
          "name": "simpleMagnet",
          "normalized": "Torrent-\u003eMagnet",
          "package": "bittorrent",
          "partial": "Magnet",
          "signature": "Torrent-\u003eMagnet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Magnet.html#v:simpleMagnet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Magnet",
          "name": "supplement",
          "package": "bittorrent",
          "signature": "Map Text Text",
          "source": "src/Data-Torrent-Magnet.html#Magnet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Magnet",
          "module": "Data.Torrent.Magnet",
          "name": "supplement",
          "package": "bittorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Magnet.html#v:supplement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003erenderMagnet\u003c/a\u003e\u003c/code\u003e but useful if you need an uri.\n\u003c/p\u003e",
          "module": "Data.Torrent.Magnet",
          "name": "toURI",
          "package": "bittorrent",
          "signature": "Magnet -\u003e URI",
          "source": "src/Data-Torrent-Magnet.html#toURI",
          "type": "function"
        },
        "index": {
          "description": "The same as renderMagnet but useful if you need an uri",
          "hierarchy": "Data Torrent Magnet",
          "module": "Data.Torrent.Magnet",
          "name": "toURI",
          "normalized": "Magnet-\u003eURI",
          "package": "bittorrent",
          "partial": "URI",
          "signature": "Magnet-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Magnet.html#v:toURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Magnet",
          "name": "tracker",
          "package": "bittorrent",
          "signature": "Maybe URI",
          "source": "src/Data-Torrent-Magnet.html#Magnet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Magnet",
          "module": "Data.Torrent.Magnet",
          "name": "tracker",
          "package": "bittorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Magnet.html#v:tracker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePieces are used to validate torrent content.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Torrent.Piece",
          "name": "Piece",
          "package": "bittorrent",
          "source": "src/Data-Torrent-Piece.html",
          "type": "module"
        },
        "index": {
          "description": "Pieces are used to validate torrent content",
          "hierarchy": "Data Torrent Piece",
          "module": "Data.Torrent.Piece",
          "name": "Piece",
          "package": "bittorrent",
          "partial": "Piece",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Piece.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA flat array of SHA1 sums of each piece.\n\u003c/p\u003e",
          "module": "Data.Torrent.Piece",
          "name": "HashArray",
          "package": "bittorrent",
          "source": "src/Data-Torrent-Piece.html#HashArray",
          "type": "newtype"
        },
        "index": {
          "description": "flat array of SHA1 sums of each piece",
          "hierarchy": "Data Torrent Piece",
          "module": "Data.Torrent.Piece",
          "name": "HashArray",
          "package": "bittorrent",
          "partial": "Hash Array",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Piece.html#t:HashArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePiece payload should be strict or lazy bytestring.\n\u003c/p\u003e",
          "module": "Data.Torrent.Piece",
          "name": "Piece",
          "package": "bittorrent",
          "source": "src/Data-Torrent-Piece.html#Piece",
          "type": "data"
        },
        "index": {
          "description": "Piece payload should be strict or lazy bytestring",
          "hierarchy": "Data Torrent Piece",
          "module": "Data.Torrent.Piece",
          "name": "Piece",
          "package": "bittorrent",
          "partial": "Piece",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Piece.html#t:Piece"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of pieces in torrent or a part of torrent.\n\u003c/p\u003e",
          "module": "Data.Torrent.Piece",
          "name": "PieceCount",
          "package": "bittorrent",
          "source": "src/Data-Torrent-Piece.html#PieceCount",
          "type": "type"
        },
        "index": {
          "description": "Number of pieces in torrent or part of torrent",
          "hierarchy": "Data Torrent Piece",
          "module": "Data.Torrent.Piece",
          "name": "PieceCount",
          "package": "bittorrent",
          "partial": "Piece Count",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Piece.html#t:PieceCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePart of torrent file used for torrent content validation.\n\u003c/p\u003e",
          "module": "Data.Torrent.Piece",
          "name": "PieceInfo",
          "package": "bittorrent",
          "source": "src/Data-Torrent-Piece.html#PieceInfo",
          "type": "data"
        },
        "index": {
          "description": "Part of torrent file used for torrent content validation",
          "hierarchy": "Data Torrent Piece",
          "module": "Data.Torrent.Piece",
          "name": "PieceInfo",
          "package": "bittorrent",
          "partial": "Piece Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Piece.html#t:PieceInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZero-based index of piece in torrent content.\n\u003c/p\u003e",
          "module": "Data.Torrent.Piece",
          "name": "PieceIx",
          "package": "bittorrent",
          "source": "src/Data-Torrent-Block.html#PieceIx",
          "type": "type"
        },
        "index": {
          "description": "Zero-based index of piece in torrent content",
          "hierarchy": "Data Torrent Piece",
          "module": "Data.Torrent.Piece",
          "name": "PieceIx",
          "package": "bittorrent",
          "partial": "Piece Ix",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Piece.html#t:PieceIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of piece in bytes. Should be a power of 2.\n\u003c/p\u003e\u003cp\u003eNOTE: Have max and min size constrained to wide used\n   semi-standard values. This bounds should be used to make decision\n   about piece size for new torrents.\n\u003c/p\u003e",
          "module": "Data.Torrent.Piece",
          "name": "PieceSize",
          "package": "bittorrent",
          "source": "src/Data-Torrent-Block.html#PieceSize",
          "type": "type"
        },
        "index": {
          "description": "Size of piece in bytes Should be power of NOTE Have max and min size constrained to wide used semi-standard values This bounds should be used to make decision about piece size for new torrents",
          "hierarchy": "Data Torrent Piece",
          "module": "Data.Torrent.Piece",
          "name": "PieceSize",
          "package": "bittorrent",
          "partial": "Piece Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Piece.html#t:PieceSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Piece",
          "name": "HashArray",
          "package": "bittorrent",
          "signature": "HashArray",
          "source": "src/Data-Torrent-Piece.html#HashArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Piece",
          "module": "Data.Torrent.Piece",
          "name": "HashArray",
          "package": "bittorrent",
          "partial": "Hash Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Piece.html#v:HashArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Piece",
          "name": "Piece",
          "package": "bittorrent",
          "signature": "Piece",
          "source": "src/Data-Torrent-Piece.html#Piece",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Piece",
          "module": "Data.Torrent.Piece",
          "name": "Piece",
          "package": "bittorrent",
          "partial": "Piece",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Piece.html#v:Piece"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Piece",
          "name": "PieceInfo",
          "package": "bittorrent",
          "signature": "PieceInfo",
          "source": "src/Data-Torrent-Piece.html#PieceInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Piece",
          "module": "Data.Torrent.Piece",
          "name": "PieceInfo",
          "package": "bittorrent",
          "partial": "Piece Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Piece.html#v:PieceInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidate piece with metainfo hash.\n\u003c/p\u003e",
          "module": "Data.Torrent.Piece",
          "name": "checkPieceLazy",
          "package": "bittorrent",
          "signature": "PieceInfo -\u003e Piece BL.ByteString -\u003e Bool",
          "source": "src/Data-Torrent-Piece.html#checkPieceLazy",
          "type": "function"
        },
        "index": {
          "description": "Validate piece with metainfo hash",
          "hierarchy": "Data Torrent Piece",
          "module": "Data.Torrent.Piece",
          "name": "checkPieceLazy",
          "normalized": "PieceInfo-\u003ePiece BL.ByteString-\u003eBool",
          "package": "bittorrent",
          "partial": "Piece Lazy",
          "signature": "PieceInfo-\u003ePiece BL.ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Piece.html#v:checkPieceLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the optimal piece size for a given torrent size.\n\u003c/p\u003e",
          "module": "Data.Torrent.Piece",
          "name": "defaultPieceSize",
          "package": "bittorrent",
          "signature": "Int64 -\u003e Int",
          "source": "src/Data-Torrent-Piece.html#defaultPieceSize",
          "type": "function"
        },
        "index": {
          "description": "Find the optimal piece size for given torrent size",
          "hierarchy": "Data Torrent Piece",
          "module": "Data.Torrent.Piece",
          "name": "defaultPieceSize",
          "normalized": "Int-\u003eInt",
          "package": "bittorrent",
          "partial": "Piece Size",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Piece.html#v:defaultPieceSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Piece",
          "name": "getPieceInfo",
          "package": "bittorrent",
          "signature": "Get PieceInfo",
          "source": "src/Data-Torrent-Piece.html#getPieceInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Piece",
          "module": "Data.Torrent.Piece",
          "name": "getPieceInfo",
          "package": "bittorrent",
          "partial": "Piece Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Piece.html#v:getPieceInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a block can be safely turned into a piece.\n\u003c/p\u003e",
          "module": "Data.Torrent.Piece",
          "name": "isPiece",
          "package": "bittorrent",
          "signature": "PieceSize -\u003e Block BL.ByteString -\u003e Bool",
          "source": "src/Data-Torrent-Piece.html#isPiece",
          "type": "function"
        },
        "index": {
          "description": "Test if block can be safely turned into piece",
          "hierarchy": "Data Torrent Piece",
          "module": "Data.Torrent.Piece",
          "name": "isPiece",
          "normalized": "PieceSize-\u003eBlock BL.ByteString-\u003eBool",
          "package": "bittorrent",
          "partial": "Piece",
          "signature": "PieceSize-\u003eBlock BL.ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Piece.html#v:isPiece"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo prevent transfer degradation piece size should not exceed this\n value.\n\u003c/p\u003e",
          "module": "Data.Torrent.Piece",
          "name": "maxPieceSize",
          "package": "bittorrent",
          "signature": "Int",
          "source": "src/Data-Torrent-Piece.html#maxPieceSize",
          "type": "function"
        },
        "index": {
          "description": "To prevent transfer degradation piece size should not exceed this value",
          "hierarchy": "Data Torrent Piece",
          "module": "Data.Torrent.Piece",
          "name": "maxPieceSize",
          "package": "bittorrent",
          "partial": "Piece Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Piece.html#v:maxPieceSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePiece size should not be less than this value.\n\u003c/p\u003e",
          "module": "Data.Torrent.Piece",
          "name": "minPieceSize",
          "package": "bittorrent",
          "signature": "Int",
          "source": "src/Data-Torrent-Piece.html#minPieceSize",
          "type": "function"
        },
        "index": {
          "description": "Piece size should not be less than this value",
          "hierarchy": "Data Torrent Piece",
          "module": "Data.Torrent.Piece",
          "name": "minPieceSize",
          "package": "bittorrent",
          "partial": "Piece Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Piece.html#v:minPieceSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenation of all 20-byte SHA1 hash values.\n\u003c/p\u003e",
          "module": "Data.Torrent.Piece",
          "name": "piPieceHashes",
          "package": "bittorrent",
          "signature": "HashArray",
          "source": "src/Data-Torrent-Piece.html#PieceInfo",
          "type": "function"
        },
        "index": {
          "description": "Concatenation of all byte SHA1 hash values",
          "hierarchy": "Data Torrent Piece",
          "module": "Data.Torrent.Piece",
          "name": "piPieceHashes",
          "package": "bittorrent",
          "partial": "Piece Hashes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Piece.html#v:piPieceHashes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of bytes in each piece.\n\u003c/p\u003e",
          "module": "Data.Torrent.Piece",
          "name": "piPieceLength",
          "package": "bittorrent",
          "signature": "PieceSize",
          "source": "src/Data-Torrent-Piece.html#PieceInfo",
          "type": "function"
        },
        "index": {
          "description": "Number of bytes in each piece",
          "hierarchy": "Data Torrent Piece",
          "module": "Data.Torrent.Piece",
          "name": "piPieceLength",
          "package": "bittorrent",
          "partial": "Piece Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Piece.html#v:piPieceLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind count of pieces in the torrent. If torrent size is not a\n multiple of piece size then the count is rounded up.\n\u003c/p\u003e",
          "module": "Data.Torrent.Piece",
          "name": "pieceCount",
          "package": "bittorrent",
          "signature": "PieceInfo -\u003e PieceCount",
          "source": "src/Data-Torrent-Piece.html#pieceCount",
          "type": "function"
        },
        "index": {
          "description": "Find count of pieces in the torrent If torrent size is not multiple of piece size then the count is rounded up",
          "hierarchy": "Data Torrent Piece",
          "module": "Data.Torrent.Piece",
          "name": "pieceCount",
          "normalized": "PieceInfo-\u003ePieceCount",
          "package": "bittorrent",
          "partial": "Count",
          "signature": "PieceInfo-\u003ePieceCount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Piece.html#v:pieceCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePayload.\n\u003c/p\u003e",
          "module": "Data.Torrent.Piece",
          "name": "pieceData",
          "package": "bittorrent",
          "signature": "a",
          "source": "src/Data-Torrent-Piece.html#Piece",
          "type": "function"
        },
        "index": {
          "description": "Payload",
          "hierarchy": "Data Torrent Piece",
          "module": "Data.Torrent.Piece",
          "name": "pieceData",
          "package": "bittorrent",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Piece.html#v:pieceData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract validation hash by specified piece index.\n\u003c/p\u003e",
          "module": "Data.Torrent.Piece",
          "name": "pieceHash",
          "package": "bittorrent",
          "signature": "PieceInfo -\u003e PieceIx -\u003e BS.ByteString",
          "source": "src/Data-Torrent-Piece.html#pieceHash",
          "type": "function"
        },
        "index": {
          "description": "Extract validation hash by specified piece index",
          "hierarchy": "Data Torrent Piece",
          "module": "Data.Torrent.Piece",
          "name": "pieceHash",
          "normalized": "PieceInfo-\u003ePieceIx-\u003eBS.ByteString",
          "package": "bittorrent",
          "partial": "Hash",
          "signature": "PieceInfo-\u003ePieceIx-\u003eBS.ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Piece.html#v:pieceHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenation of all 20-byte SHA1 hash values.\n\u003c/p\u003e",
          "module": "Data.Torrent.Piece",
          "name": "pieceHashes",
          "package": "bittorrent",
          "signature": "Lens' PieceInfo HashArray",
          "source": "src/Data-Torrent-Piece.html#pieceHashes",
          "type": "function"
        },
        "index": {
          "description": "Concatenation of all byte SHA1 hash values",
          "hierarchy": "Data Torrent Piece",
          "module": "Data.Torrent.Piece",
          "name": "pieceHashes",
          "package": "bittorrent",
          "partial": "Hashes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Piece.html#v:pieceHashes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZero-based piece index in torrent.\n\u003c/p\u003e",
          "module": "Data.Torrent.Piece",
          "name": "pieceIndex",
          "package": "bittorrent",
          "signature": "PieceIx",
          "source": "src/Data-Torrent-Piece.html#Piece",
          "type": "function"
        },
        "index": {
          "description": "Zero-based piece index in torrent",
          "hierarchy": "Data Torrent Piece",
          "module": "Data.Torrent.Piece",
          "name": "pieceIndex",
          "package": "bittorrent",
          "partial": "Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Piece.html#v:pieceIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of bytes in each piece.\n\u003c/p\u003e",
          "module": "Data.Torrent.Piece",
          "name": "pieceLength",
          "package": "bittorrent",
          "signature": "Lens' PieceInfo PieceSize",
          "source": "src/Data-Torrent-Piece.html#pieceLength",
          "type": "function"
        },
        "index": {
          "description": "Number of bytes in each piece",
          "hierarchy": "Data Torrent Piece",
          "module": "Data.Torrent.Piece",
          "name": "pieceLength",
          "package": "bittorrent",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Piece.html#v:pieceLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet size of piece in bytes.\n\u003c/p\u003e",
          "module": "Data.Torrent.Piece",
          "name": "pieceSize",
          "package": "bittorrent",
          "signature": "Piece BL.ByteString -\u003e PieceSize",
          "source": "src/Data-Torrent-Piece.html#pieceSize",
          "type": "function"
        },
        "index": {
          "description": "Get size of piece in bytes",
          "hierarchy": "Data Torrent Piece",
          "module": "Data.Torrent.Piece",
          "name": "pieceSize",
          "normalized": "Piece BL.ByteString-\u003ePieceSize",
          "package": "bittorrent",
          "partial": "Size",
          "signature": "Piece BL.ByteString-\u003ePieceSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Piece.html#v:pieceSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Piece",
          "name": "putPieceInfo",
          "package": "bittorrent",
          "signature": "PieceInfo -\u003e BDict -\u003e BDict",
          "source": "src/Data-Torrent-Piece.html#putPieceInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Piece",
          "module": "Data.Torrent.Piece",
          "name": "putPieceInfo",
          "normalized": "PieceInfo-\u003eBDict-\u003eBDict",
          "package": "bittorrent",
          "partial": "Piece Info",
          "signature": "PieceInfo-\u003eBDict-\u003eBDict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Piece.html#v:putPieceInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Piece",
          "name": "unHashArray",
          "package": "bittorrent",
          "signature": "BS.ByteString",
          "source": "src/Data-Torrent-Piece.html#HashArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Piece",
          "module": "Data.Torrent.Piece",
          "name": "unHashArray",
          "package": "bittorrent",
          "partial": "Hash Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Piece.html#v:unHashArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e used to track amount downloaded/left/upload bytes\n   either on per client or per torrent basis. This value is used to\n   notify the tracker and usually shown to the user. To aggregate\n   total progress you can use the Monoid instance.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Torrent.Progress",
          "name": "Progress",
          "package": "bittorrent",
          "source": "src/Data-Torrent-Progress.html",
          "type": "module"
        },
        "index": {
          "description": "Progress used to track amount downloaded left upload bytes either on per client or per torrent basis This value is used to notify the tracker and usually shown to the user To aggregate total progress you can use the Monoid instance",
          "hierarchy": "Data Torrent Progress",
          "module": "Data.Torrent.Progress",
          "name": "Progress",
          "package": "bittorrent",
          "partial": "Progress",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Progress.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProgress data is considered as dynamic within one client\n session. This data also should be shared across client application\n sessions (e.g. files), otherwise use \u003ccode\u003e\u003ca\u003estartProgress\u003c/a\u003e\u003c/code\u003e to get initial\n \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Data.Torrent.Progress",
          "name": "Progress",
          "package": "bittorrent",
          "source": "src/Data-Torrent-Progress.html#Progress",
          "type": "data"
        },
        "index": {
          "description": "Progress data is considered as dynamic within one client session This data also should be shared across client application sessions e.g files otherwise use startProgress to get initial Progress value",
          "hierarchy": "Data Torrent Progress",
          "module": "Data.Torrent.Progress",
          "name": "Progress",
          "package": "bittorrent",
          "partial": "Progress",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Progress.html#t:Progress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Progress",
          "name": "Progress",
          "package": "bittorrent",
          "signature": "Progress",
          "source": "src/Data-Torrent-Progress.html#Progress",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Progress",
          "module": "Data.Torrent.Progress",
          "name": "Progress",
          "package": "bittorrent",
          "partial": "Progress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Progress.html#v:Progress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal amount of bytes downloaded;\n\u003c/p\u003e",
          "module": "Data.Torrent.Progress",
          "name": "_downloaded",
          "package": "bittorrent",
          "signature": "Word64",
          "source": "src/Data-Torrent-Progress.html#Progress",
          "type": "function"
        },
        "index": {
          "description": "Total amount of bytes downloaded",
          "hierarchy": "Data Torrent Progress",
          "module": "Data.Torrent.Progress",
          "name": "_downloaded",
          "package": "bittorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Progress.html#v:_downloaded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal amount of bytes left;\n\u003c/p\u003e",
          "module": "Data.Torrent.Progress",
          "name": "_left",
          "package": "bittorrent",
          "signature": "Word64",
          "source": "src/Data-Torrent-Progress.html#Progress",
          "type": "function"
        },
        "index": {
          "description": "Total amount of bytes left",
          "hierarchy": "Data Torrent Progress",
          "module": "Data.Torrent.Progress",
          "name": "_left",
          "package": "bittorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Progress.html#v:_left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal amount of bytes uploaded.\n\u003c/p\u003e",
          "module": "Data.Torrent.Progress",
          "name": "_uploaded",
          "package": "bittorrent",
          "signature": "Word64",
          "source": "src/Data-Torrent-Progress.html#Progress",
          "type": "function"
        },
        "index": {
          "description": "Total amount of bytes uploaded",
          "hierarchy": "Data Torrent Progress",
          "module": "Data.Torrent.Progress",
          "name": "_uploaded",
          "package": "bittorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Progress.html#v:_uploaded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck global \u003cem\u003edownload\u003c/em\u003e limit by uploaded / downloaded ratio.\n\u003c/p\u003e",
          "module": "Data.Torrent.Progress",
          "name": "canDownload",
          "package": "bittorrent",
          "signature": "Ratio Int -\u003e Progress -\u003e Bool",
          "source": "src/Data-Torrent-Progress.html#canDownload",
          "type": "function"
        },
        "index": {
          "description": "Check global download limit by uploaded downloaded ratio",
          "hierarchy": "Data Torrent Progress",
          "module": "Data.Torrent.Progress",
          "name": "canDownload",
          "normalized": "Ratio Int-\u003eProgress-\u003eBool",
          "package": "bittorrent",
          "partial": "Download",
          "signature": "Ratio Int-\u003eProgress-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Progress.html#v:canDownload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck global \u003cem\u003eupload\u003c/em\u003e limit by downloaded / uploaded ratio.\n\u003c/p\u003e",
          "module": "Data.Torrent.Progress",
          "name": "canUpload",
          "package": "bittorrent",
          "signature": "Ratio Int -\u003e Progress -\u003e Bool",
          "source": "src/Data-Torrent-Progress.html#canUpload",
          "type": "function"
        },
        "index": {
          "description": "Check global upload limit by downloaded uploaded ratio",
          "hierarchy": "Data Torrent Progress",
          "module": "Data.Torrent.Progress",
          "name": "canUpload",
          "normalized": "Ratio Int-\u003eProgress-\u003eBool",
          "package": "bittorrent",
          "partial": "Upload",
          "signature": "Ratio Int-\u003eProgress-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Progress.html#v:canUpload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed when leecher leave client session.\n   (e.g. user deletes not completed torrent)\n\u003c/p\u003e",
          "module": "Data.Torrent.Progress",
          "name": "dequeuedProgress",
          "package": "bittorrent",
          "signature": "Integer -\u003e Progress -\u003e Progress",
          "source": "src/Data-Torrent-Progress.html#dequeuedProgress",
          "type": "function"
        },
        "index": {
          "description": "Used when leecher leave client session e.g user deletes not completed torrent",
          "hierarchy": "Data Torrent Progress",
          "module": "Data.Torrent.Progress",
          "name": "dequeuedProgress",
          "normalized": "Integer-\u003eProgress-\u003eProgress",
          "package": "bittorrent",
          "partial": "Progress",
          "signature": "Integer-\u003eProgress-\u003eProgress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Progress.html#v:dequeuedProgress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Progress",
          "name": "downloaded",
          "package": "bittorrent",
          "signature": "Lens' Progress Word64",
          "source": "src/Data-Torrent-Progress.html#downloaded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Progress",
          "module": "Data.Torrent.Progress",
          "name": "downloaded",
          "package": "bittorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Progress.html#v:downloaded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed when the client download some data from \u003cem\u003eany\u003c/em\u003e peer.\n\u003c/p\u003e",
          "module": "Data.Torrent.Progress",
          "name": "downloadedProgress",
          "package": "bittorrent",
          "signature": "Int -\u003e Progress -\u003e Progress",
          "source": "src/Data-Torrent-Progress.html#downloadedProgress",
          "type": "function"
        },
        "index": {
          "description": "Used when the client download some data from any peer",
          "hierarchy": "Data Torrent Progress",
          "module": "Data.Torrent.Progress",
          "name": "downloadedProgress",
          "normalized": "Int-\u003eProgress-\u003eProgress",
          "package": "bittorrent",
          "partial": "Progress",
          "signature": "Int-\u003eProgress-\u003eProgress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Progress.html#v:downloadedProgress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed when leecher join client session.\n\u003c/p\u003e",
          "module": "Data.Torrent.Progress",
          "name": "enqueuedProgress",
          "package": "bittorrent",
          "signature": "Integer -\u003e Progress -\u003e Progress",
          "source": "src/Data-Torrent-Progress.html#enqueuedProgress",
          "type": "function"
        },
        "index": {
          "description": "Used when leecher join client session",
          "hierarchy": "Data Torrent Progress",
          "module": "Data.Torrent.Progress",
          "name": "enqueuedProgress",
          "normalized": "Integer-\u003eProgress-\u003eProgress",
          "package": "bittorrent",
          "partial": "Progress",
          "signature": "Integer-\u003eProgress-\u003eProgress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Progress.html#v:enqueuedProgress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Progress",
          "name": "left",
          "package": "bittorrent",
          "signature": "Lens' Progress Word64",
          "source": "src/Data-Torrent-Progress.html#left",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Progress",
          "module": "Data.Torrent.Progress",
          "name": "left",
          "package": "bittorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Progress.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitial progress is used when there are no session before.\n\u003c/p\u003e\u003cp\u003ePlease note that tracker might penalize client some way if the do\n not accumulate progress. If possible and save \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e between\n client sessions to avoid that.\n\u003c/p\u003e",
          "module": "Data.Torrent.Progress",
          "name": "startProgress",
          "package": "bittorrent",
          "signature": "Integer -\u003e Progress",
          "source": "src/Data-Torrent-Progress.html#startProgress",
          "type": "function"
        },
        "index": {
          "description": "Initial progress is used when there are no session before Please note that tracker might penalize client some way if the do not accumulate progress If possible and save Progress between client sessions to avoid that",
          "hierarchy": "Data Torrent Progress",
          "module": "Data.Torrent.Progress",
          "name": "startProgress",
          "normalized": "Integer-\u003eProgress",
          "package": "bittorrent",
          "partial": "Progress",
          "signature": "Integer-\u003eProgress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Progress.html#v:startProgress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Progress",
          "name": "uploaded",
          "package": "bittorrent",
          "signature": "Lens' Progress Word64",
          "source": "src/Data-Torrent-Progress.html#uploaded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Progress",
          "module": "Data.Torrent.Progress",
          "name": "uploaded",
          "package": "bittorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Progress.html#v:uploaded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed when the client upload some data to \u003cem\u003eany\u003c/em\u003e peer.\n\u003c/p\u003e",
          "module": "Data.Torrent.Progress",
          "name": "uploadedProgress",
          "package": "bittorrent",
          "signature": "Int -\u003e Progress -\u003e Progress",
          "source": "src/Data-Torrent-Progress.html#uploadedProgress",
          "type": "function"
        },
        "index": {
          "description": "Used when the client upload some data to any peer",
          "hierarchy": "Data Torrent Progress",
          "module": "Data.Torrent.Progress",
          "name": "uploadedProgress",
          "normalized": "Int-\u003eProgress-\u003eProgress",
          "package": "bittorrent",
          "partial": "Progress",
          "signature": "Int-\u003eProgress-\u003eProgress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Progress.html#v:uploadedProgress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDirectory tree can be used to easily manipulate file layout info.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Torrent.Tree",
          "name": "Tree",
          "package": "bittorrent",
          "source": "src/Data-Torrent-Tree.html",
          "type": "module"
        },
        "index": {
          "description": "Directory tree can be used to easily manipulate file layout info",
          "hierarchy": "Data Torrent Tree",
          "module": "Data.Torrent.Tree",
          "name": "Tree",
          "package": "bittorrent",
          "partial": "Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Tree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eDirTree\u003c/a\u003e\u003c/code\u003e is more convenient form of \u003ccode\u003e\u003ca\u003eLayoutInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Torrent.Tree",
          "name": "DirTree",
          "package": "bittorrent",
          "source": "src/Data-Torrent-Tree.html#DirTree",
          "type": "data"
        },
        "index": {
          "description": "DirTree is more convenient form of LayoutInfo",
          "hierarchy": "Data Torrent Tree",
          "module": "Data.Torrent.Tree",
          "name": "DirTree",
          "package": "bittorrent",
          "partial": "Dir Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Tree.html#t:DirTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Tree",
          "name": "Dir",
          "package": "bittorrent",
          "signature": "Dir",
          "source": "src/Data-Torrent-Tree.html#DirTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Tree",
          "module": "Data.Torrent.Tree",
          "name": "Dir",
          "package": "bittorrent",
          "partial": "Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Tree.html#v:Dir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Tree",
          "name": "File",
          "package": "bittorrent",
          "signature": "File",
          "source": "src/Data-Torrent-Tree.html#DirTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Tree",
          "module": "Data.Torrent.Tree",
          "name": "File",
          "package": "bittorrent",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Tree.html#v:File"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild directory tree from a list of files.\n\u003c/p\u003e",
          "module": "Data.Torrent.Tree",
          "name": "build",
          "package": "bittorrent",
          "signature": "LayoutInfo -\u003e DirTree ()",
          "source": "src/Data-Torrent-Tree.html#build",
          "type": "function"
        },
        "index": {
          "description": "Build directory tree from list of files",
          "hierarchy": "Data Torrent Tree",
          "module": "Data.Torrent.Tree",
          "name": "build",
          "normalized": "LayoutInfo-\u003eDirTree()",
          "package": "bittorrent",
          "signature": "LayoutInfo-\u003eDirTree()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Tree.html#v:build"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Tree",
          "name": "children",
          "package": "bittorrent",
          "signature": "Map BS.ByteString (DirTree a)",
          "source": "src/Data-Torrent-Tree.html#DirTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Tree",
          "module": "Data.Torrent.Tree",
          "name": "children",
          "package": "bittorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Tree.html#v:children"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet total count of directories in the directory and subdirectories.\n\u003c/p\u003e",
          "module": "Data.Torrent.Tree",
          "name": "dirNumber",
          "package": "bittorrent",
          "signature": "DirTree a -\u003e Sum Int",
          "source": "src/Data-Torrent-Tree.html#dirNumber",
          "type": "function"
        },
        "index": {
          "description": "Get total count of directories in the directory and subdirectories",
          "hierarchy": "Data Torrent Tree",
          "module": "Data.Torrent.Tree",
          "name": "dirNumber",
          "normalized": "DirTree a-\u003eSum Int",
          "package": "bittorrent",
          "partial": "Number",
          "signature": "DirTree a-\u003eSum Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Tree.html#v:dirNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet total count of files in directory and subdirectories.\n\u003c/p\u003e",
          "module": "Data.Torrent.Tree",
          "name": "fileNumber",
          "package": "bittorrent",
          "signature": "DirTree a -\u003e Sum Int",
          "source": "src/Data-Torrent-Tree.html#fileNumber",
          "type": "function"
        },
        "index": {
          "description": "Get total count of files in directory and subdirectories",
          "hierarchy": "Data Torrent Tree",
          "module": "Data.Torrent.Tree",
          "name": "fileNumber",
          "normalized": "DirTree a-\u003eSum Int",
          "package": "bittorrent",
          "partial": "Number",
          "signature": "DirTree a-\u003eSum Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Tree.html#v:fileNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup file by path.\n\u003c/p\u003e",
          "module": "Data.Torrent.Tree",
          "name": "lookup",
          "package": "bittorrent",
          "signature": "[FilePath] -\u003e DirTree a -\u003e Maybe (DirTree a)",
          "source": "src/Data-Torrent-Tree.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Lookup file by path",
          "hierarchy": "Data Torrent Tree",
          "module": "Data.Torrent.Tree",
          "name": "lookup",
          "normalized": "[FilePath]-\u003eDirTree a-\u003eMaybe(DirTree a)",
          "package": "bittorrent",
          "signature": "[FilePath]-\u003eDirTree a-\u003eMaybe(DirTree a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Tree.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup directory by path.\n\u003c/p\u003e",
          "module": "Data.Torrent.Tree",
          "name": "lookupDir",
          "package": "bittorrent",
          "signature": "[FilePath] -\u003e DirTree a -\u003e Maybe [(BS.ByteString, DirTree a)]",
          "source": "src/Data-Torrent-Tree.html#lookupDir",
          "type": "function"
        },
        "index": {
          "description": "Lookup directory by path",
          "hierarchy": "Data Torrent Tree",
          "module": "Data.Torrent.Tree",
          "name": "lookupDir",
          "normalized": "[FilePath]-\u003eDirTree a-\u003eMaybe[(BS.ByteString,DirTree a)]",
          "package": "bittorrent",
          "partial": "Dir",
          "signature": "[FilePath]-\u003eDirTree a-\u003eMaybe[(BS.ByteString,DirTree a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Tree.html#v:lookupDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Tree",
          "name": "node",
          "package": "bittorrent",
          "signature": "FileInfo a",
          "source": "src/Data-Torrent-Tree.html#DirTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Tree",
          "module": "Data.Torrent.Tree",
          "name": "node",
          "package": "bittorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent-Tree.html#v:node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTorrent file contains metadata about files and folders but not\n   content itself. The files are bencoded dictionaries. There is\n   also other info which is used to help join the swarm.\n\u003c/p\u003e\u003cp\u003eThis module provides torrent metainfo serialization and info hash\n   extraction.\n\u003c/p\u003e\u003cp\u003eFor more info see:\n   \u003ca\u003ehttp://www.bittorrent.org/beps/bep_0003.html#metainfo-files\u003c/a\u003e,\n   \u003ca\u003ehttps://wiki.theory.org/BitTorrentSpecification#Metainfo_File_Structure\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Torrent",
          "name": "Torrent",
          "package": "bittorrent",
          "source": "src/Data-Torrent.html",
          "type": "module"
        },
        "index": {
          "description": "Torrent file contains metadata about files and folders but not content itself The files are bencoded dictionaries There is also other info which is used to help join the swarm This module provides torrent metainfo serialization and info hash extraction For more info see http www.bittorrent.org beps bep html metainfo-files https wiki.theory.org BitTorrentSpecification Metainfo File Structure",
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "Torrent",
          "package": "bittorrent",
          "partial": "Torrent",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfo part of the .torrent file contain info about each content file.\n\u003c/p\u003e",
          "module": "Data.Torrent",
          "name": "InfoDict",
          "package": "bittorrent",
          "source": "src/Data-Torrent.html#InfoDict",
          "type": "data"
        },
        "index": {
          "description": "Info part of the torrent file contain info about each content file",
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "InfoDict",
          "package": "bittorrent",
          "partial": "Info Dict",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#t:InfoDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMetainfo about particular torrent.\n\u003c/p\u003e",
          "module": "Data.Torrent",
          "name": "Torrent",
          "package": "bittorrent",
          "source": "src/Data-Torrent.html#Torrent",
          "type": "data"
        },
        "index": {
          "description": "Metainfo about particular torrent",
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "Torrent",
          "package": "bittorrent",
          "partial": "Torrent",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#t:Torrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent",
          "name": "InfoDict",
          "package": "bittorrent",
          "signature": "InfoDict",
          "source": "src/Data-Torrent.html#InfoDict",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "InfoDict",
          "package": "bittorrent",
          "partial": "Info Dict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:InfoDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent",
          "name": "Torrent",
          "package": "bittorrent",
          "signature": "Torrent",
          "source": "src/Data-Torrent.html#Torrent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "Torrent",
          "package": "bittorrent",
          "partial": "Torrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:Torrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent",
          "name": "announce",
          "package": "bittorrent",
          "signature": "Lens' Torrent URI",
          "source": "src/Data-Torrent.html#announce",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "announce",
          "package": "bittorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:announce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent",
          "name": "announceList",
          "package": "bittorrent",
          "signature": "Lens' Torrent (Maybe [[URI]])",
          "source": "src/Data-Torrent.html#announceList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "announceList",
          "normalized": "Lens' Torrent(Maybe[[URI]])",
          "package": "bittorrent",
          "partial": "List",
          "signature": "Lens' Torrent(Maybe[[URI]])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:announceList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent",
          "name": "comment",
          "package": "bittorrent",
          "signature": "Lens' Torrent (Maybe Text)",
          "source": "src/Data-Torrent.html#comment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "comment",
          "package": "bittorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent",
          "name": "createdBy",
          "package": "bittorrent",
          "signature": "Lens' Torrent (Maybe Text)",
          "source": "src/Data-Torrent.html#createdBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "createdBy",
          "package": "bittorrent",
          "partial": "By",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:createdBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent",
          "name": "creationDate",
          "package": "bittorrent",
          "signature": "Lens' Torrent (Maybe POSIXTime)",
          "source": "src/Data-Torrent.html#creationDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "creationDate",
          "package": "bittorrent",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:creationDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent",
          "name": "encoding",
          "package": "bittorrent",
          "signature": "Lens' Torrent (Maybe Text)",
          "source": "src/Data-Torrent.html#encoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "encoding",
          "package": "bittorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:encoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead and decode a .torrent file.\n\u003c/p\u003e",
          "module": "Data.Torrent",
          "name": "fromFile",
          "package": "bittorrent",
          "signature": "FilePath -\u003e IO Torrent",
          "source": "src/Data-Torrent.html#fromFile",
          "type": "function"
        },
        "index": {
          "description": "Read and decode torrent file",
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "fromFile",
          "normalized": "FilePath-\u003eIO Torrent",
          "package": "bittorrent",
          "partial": "File",
          "signature": "FilePath-\u003eIO Torrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:fromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSHA1 hash of the (other) \u003ccode\u003eDictInfo\u003c/code\u003e fields.\n\u003c/p\u003e",
          "module": "Data.Torrent",
          "name": "idInfoHash",
          "package": "bittorrent",
          "signature": "InfoHash",
          "source": "src/Data-Torrent.html#InfoDict",
          "type": "function"
        },
        "index": {
          "description": "SHA1 hash of the other DictInfo fields",
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "idInfoHash",
          "package": "bittorrent",
          "partial": "Info Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:idInfoHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent",
          "name": "idLayoutInfo",
          "package": "bittorrent",
          "signature": "LayoutInfo",
          "source": "src/Data-Torrent.html#InfoDict",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "idLayoutInfo",
          "package": "bittorrent",
          "partial": "Layout Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:idLayoutInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent",
          "name": "idPieceInfo",
          "package": "bittorrent",
          "signature": "PieceInfo",
          "source": "src/Data-Torrent.html#InfoDict",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "idPieceInfo",
          "package": "bittorrent",
          "partial": "Piece Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:idPieceInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf set the client MUST publish its presence to get other\n peers ONLY via the trackers explicity described in the\n metainfo file.\n\u003c/p\u003e\u003cp\u003eBEP 27: \u003ca\u003ehttp://www.bittorrent.org/beps/bep_0027.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.Torrent",
          "name": "idPrivate",
          "package": "bittorrent",
          "signature": "Bool",
          "source": "src/Data-Torrent.html#InfoDict",
          "type": "function"
        },
        "index": {
          "description": "If set the client MUST publish its presence to get other peers ONLY via the trackers explicity described in the metainfo file BEP http www.bittorrent.org beps bep html",
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "idPrivate",
          "package": "bittorrent",
          "partial": "Private",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:idPrivate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent",
          "name": "infoDict",
          "package": "bittorrent",
          "signature": "Lens' Torrent InfoDict",
          "source": "src/Data-Torrent.html#infoDict",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "infoDict",
          "package": "bittorrent",
          "partial": "Dict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:infoDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmart constructor: add a info hash to info dictionary.\n\u003c/p\u003e",
          "module": "Data.Torrent",
          "name": "infoDictionary",
          "package": "bittorrent",
          "signature": "LayoutInfo -\u003e PieceInfo -\u003e Bool -\u003e InfoDict",
          "source": "src/Data-Torrent.html#infoDictionary",
          "type": "function"
        },
        "index": {
          "description": "Smart constructor add info hash to info dictionary",
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "infoDictionary",
          "normalized": "LayoutInfo-\u003ePieceInfo-\u003eBool-\u003eInfoDict",
          "package": "bittorrent",
          "partial": "Dictionary",
          "signature": "LayoutInfo-\u003ePieceInfo-\u003eBool-\u003eInfoDict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:infoDictionary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent",
          "name": "infohash",
          "package": "bittorrent",
          "signature": "Lens' InfoDict InfoHash",
          "source": "src/Data-Torrent.html#infohash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "infohash",
          "package": "bittorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:infohash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent",
          "name": "isPrivate",
          "package": "bittorrent",
          "signature": "Lens' InfoDict Bool",
          "source": "src/Data-Torrent.html#isPrivate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "isPrivate",
          "package": "bittorrent",
          "partial": "Private",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:isPrivate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if this path has proper extension.\n\u003c/p\u003e",
          "module": "Data.Torrent",
          "name": "isTorrentPath",
          "package": "bittorrent",
          "signature": "FilePath -\u003e Bool",
          "source": "src/Data-Torrent.html#isTorrentPath",
          "type": "function"
        },
        "index": {
          "description": "Test if this path has proper extension",
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "isTorrentPath",
          "normalized": "FilePath-\u003eBool",
          "package": "bittorrent",
          "partial": "Torrent Path",
          "signature": "FilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:isTorrentPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent",
          "name": "layoutInfo",
          "package": "bittorrent",
          "signature": "Lens' InfoDict LayoutInfo",
          "source": "src/Data-Torrent.html#layoutInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "layoutInfo",
          "package": "bittorrent",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:layoutInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple torrent contains only required fields.\n\u003c/p\u003e",
          "module": "Data.Torrent",
          "name": "nullTorrent",
          "package": "bittorrent",
          "signature": "URI -\u003e InfoDict -\u003e Torrent",
          "source": "src/Data-Torrent.html#nullTorrent",
          "type": "function"
        },
        "index": {
          "description": "simple torrent contains only required fields",
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "nullTorrent",
          "normalized": "URI-\u003eInfoDict-\u003eTorrent",
          "package": "bittorrent",
          "partial": "Torrent",
          "signature": "URI-\u003eInfoDict-\u003eTorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:nullTorrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent",
          "name": "pieceInfo",
          "package": "bittorrent",
          "signature": "Lens' InfoDict PieceInfo",
          "source": "src/Data-Torrent.html#pieceInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "pieceInfo",
          "package": "bittorrent",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:pieceInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent",
          "name": "publisher",
          "package": "bittorrent",
          "signature": "Lens' Torrent (Maybe URI)",
          "source": "src/Data-Torrent.html#publisher",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "publisher",
          "package": "bittorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:publisher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent",
          "name": "publisherURL",
          "package": "bittorrent",
          "signature": "Lens' Torrent (Maybe URI)",
          "source": "src/Data-Torrent.html#publisherURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "publisherURL",
          "package": "bittorrent",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:publisherURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent",
          "name": "signature",
          "package": "bittorrent",
          "signature": "Lens' Torrent (Maybe BS.ByteString)",
          "source": "src/Data-Torrent.html#signature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "signature",
          "package": "bittorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe URL of the tracker.\n\u003c/p\u003e",
          "module": "Data.Torrent",
          "name": "tAnnounce",
          "package": "bittorrent",
          "signature": "URI",
          "source": "src/Data-Torrent.html#Torrent",
          "type": "function"
        },
        "index": {
          "description": "The URL of the tracker",
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "tAnnounce",
          "package": "bittorrent",
          "partial": "Announce",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:tAnnounce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnounce list add multiple tracker support.\n\u003c/p\u003e\u003cp\u003eBEP 12: \u003ca\u003ehttp://www.bittorrent.org/beps/bep_0012.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.Torrent",
          "name": "tAnnounceList",
          "package": "bittorrent",
          "signature": "(Maybe [[URI]])",
          "source": "src/Data-Torrent.html#Torrent",
          "type": "function"
        },
        "index": {
          "description": "Announce list add multiple tracker support BEP http www.bittorrent.org beps bep html",
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "tAnnounceList",
          "normalized": "(Maybe[[URI]])",
          "package": "bittorrent",
          "partial": "Announce List",
          "signature": "(Maybe[[URI]])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:tAnnounceList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFree-form comments of the author.\n\u003c/p\u003e",
          "module": "Data.Torrent",
          "name": "tComment",
          "package": "bittorrent",
          "signature": "(Maybe Text)",
          "source": "src/Data-Torrent.html#Torrent",
          "type": "function"
        },
        "index": {
          "description": "Free-form comments of the author",
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "tComment",
          "package": "bittorrent",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:tComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName and version of the program used to create the .torrent.\n\u003c/p\u003e",
          "module": "Data.Torrent",
          "name": "tCreatedBy",
          "package": "bittorrent",
          "signature": "(Maybe Text)",
          "source": "src/Data-Torrent.html#Torrent",
          "type": "function"
        },
        "index": {
          "description": "Name and version of the program used to create the torrent",
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "tCreatedBy",
          "package": "bittorrent",
          "partial": "Created By",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:tCreatedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreation time of the torrent, in standard UNIX epoch.\n\u003c/p\u003e",
          "module": "Data.Torrent",
          "name": "tCreationDate",
          "package": "bittorrent",
          "signature": "(Maybe POSIXTime)",
          "source": "src/Data-Torrent.html#Torrent",
          "type": "function"
        },
        "index": {
          "description": "Creation time of the torrent in standard UNIX epoch",
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "tCreationDate",
          "package": "bittorrent",
          "partial": "Creation Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:tCreationDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString encoding format used to generate the pieces part of\n   the info dictionary in the .torrent metafile.\n\u003c/p\u003e",
          "module": "Data.Torrent",
          "name": "tEncoding",
          "package": "bittorrent",
          "signature": "(Maybe Text)",
          "source": "src/Data-Torrent.html#Torrent",
          "type": "function"
        },
        "index": {
          "description": "String encoding format used to generate the pieces part of the info dictionary in the torrent metafile",
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "tEncoding",
          "package": "bittorrent",
          "partial": "Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:tEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfo about each content file.\n\u003c/p\u003e",
          "module": "Data.Torrent",
          "name": "tInfoDict",
          "package": "bittorrent",
          "signature": "InfoDict",
          "source": "src/Data-Torrent.html#Torrent",
          "type": "function"
        },
        "index": {
          "description": "Info about each content file",
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "tInfoDict",
          "package": "bittorrent",
          "partial": "Info Dict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:tInfoDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContaining the RSA public key of the publisher of the\n torrent.  Private counterpart of this key that has the\n authority to allow new peers onto the swarm.\n\u003c/p\u003e",
          "module": "Data.Torrent",
          "name": "tPublisher",
          "package": "bittorrent",
          "signature": "(Maybe URI)",
          "source": "src/Data-Torrent.html#Torrent",
          "type": "function"
        },
        "index": {
          "description": "Containing the RSA public key of the publisher of the torrent Private counterpart of this key that has the authority to allow new peers onto the swarm",
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "tPublisher",
          "package": "bittorrent",
          "partial": "Publisher",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:tPublisher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent",
          "name": "tPublisherURL",
          "package": "bittorrent",
          "signature": "(Maybe URI)",
          "source": "src/Data-Torrent.html#Torrent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "tPublisherURL",
          "package": "bittorrent",
          "partial": "Publisher URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:tPublisherURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe RSA signature of the info dictionary (specifically, the\n   encrypted SHA-1 hash of the info dictionary).\n\u003c/p\u003e",
          "module": "Data.Torrent",
          "name": "tSignature",
          "package": "bittorrent",
          "signature": "(Maybe BS.ByteString)",
          "source": "src/Data-Torrent.html#Torrent",
          "type": "function"
        },
        "index": {
          "description": "The RSA signature of the info dictionary specifically the encrypted SHA-1 hash of the info dictionary",
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "tSignature",
          "package": "bittorrent",
          "partial": "Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:tSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode and write a .torrent file.\n\u003c/p\u003e",
          "module": "Data.Torrent",
          "name": "toFile",
          "package": "bittorrent",
          "signature": "FilePath -\u003e Torrent -\u003e IO ()",
          "source": "src/Data-Torrent.html#toFile",
          "type": "function"
        },
        "index": {
          "description": "Encode and write torrent file",
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "toFile",
          "normalized": "FilePath-\u003eTorrent-\u003eIO()",
          "package": "bittorrent",
          "partial": "File",
          "signature": "FilePath-\u003eTorrent-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:toFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtension usually used for torrent files.\n\u003c/p\u003e",
          "module": "Data.Torrent",
          "name": "torrentExt",
          "package": "bittorrent",
          "signature": "String",
          "source": "src/Data-Torrent.html#torrentExt",
          "type": "function"
        },
        "index": {
          "description": "Extension usually used for torrent files",
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "torrentExt",
          "package": "bittorrent",
          "partial": "Ext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:torrentExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMime type of torrent files.\n\u003c/p\u003e",
          "module": "Data.Torrent",
          "name": "typeTorrent",
          "package": "bittorrent",
          "signature": "BS.ByteString",
          "source": "src/Data-Torrent.html#typeTorrent",
          "type": "function"
        },
        "index": {
          "description": "Mime type of torrent files",
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "typeTorrent",
          "package": "bittorrent",
          "partial": "Torrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Data-Torrent.html#v:typeTorrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ePeerAddr\u003c/a\u003e\u003c/code\u003e is used to represent peer address. Currently it's\n   just peer IP and peer port but this might change in future.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.BitTorrent.Core.PeerAddr",
          "name": "PeerAddr",
          "package": "bittorrent",
          "source": "src/Network-BitTorrent-Core-PeerAddr.html",
          "type": "module"
        },
        "index": {
          "description": "PeerAddr is used to represent peer address Currently it just peer IP and peer port but this might change in future",
          "hierarchy": "Network BitTorrent Core PeerAddr",
          "module": "Network.BitTorrent.Core.PeerAddr",
          "name": "PeerAddr",
          "package": "bittorrent",
          "partial": "Peer Addr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Network-BitTorrent-Core-PeerAddr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePeer address info normally extracted from peer list or peer\n compact list encoding.\n\u003c/p\u003e",
          "module": "Network.BitTorrent.Core.PeerAddr",
          "name": "PeerAddr",
          "package": "bittorrent",
          "source": "src/Network-BitTorrent-Core-PeerAddr.html#PeerAddr",
          "type": "data"
        },
        "index": {
          "description": "Peer address info normally extracted from peer list or peer compact list encoding",
          "hierarchy": "Network BitTorrent Core PeerAddr",
          "module": "Network.BitTorrent.Core.PeerAddr",
          "name": "PeerAddr",
          "package": "bittorrent",
          "partial": "Peer Addr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Network-BitTorrent-Core-PeerAddr.html#t:PeerAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BitTorrent.Core.PeerAddr",
          "name": "PeerAddr",
          "package": "bittorrent",
          "signature": "PeerAddr",
          "source": "src/Network-BitTorrent-Core-PeerAddr.html#PeerAddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network BitTorrent Core PeerAddr",
          "module": "Network.BitTorrent.Core.PeerAddr",
          "name": "PeerAddr",
          "package": "bittorrent",
          "partial": "Peer Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Network-BitTorrent-Core-PeerAddr.html#v:PeerAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to connect to peer using reasonable default parameters.\n\u003c/p\u003e",
          "module": "Network.BitTorrent.Core.PeerAddr",
          "name": "connectToPeer",
          "package": "bittorrent",
          "signature": "PeerAddr -\u003e IO Socket",
          "source": "src/Network-BitTorrent-Core-PeerAddr.html#connectToPeer",
          "type": "function"
        },
        "index": {
          "description": "Tries to connect to peer using reasonable default parameters",
          "hierarchy": "Network BitTorrent Core PeerAddr",
          "module": "Network.BitTorrent.Core.PeerAddr",
          "name": "connectToPeer",
          "normalized": "PeerAddr-\u003eIO Socket",
          "package": "bittorrent",
          "partial": "To Peer",
          "signature": "PeerAddr-\u003eIO Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Network-BitTorrent-Core-PeerAddr.html#v:connectToPeer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePorts typically reserved for bittorrent P2P listener.\n\u003c/p\u003e",
          "module": "Network.BitTorrent.Core.PeerAddr",
          "name": "defaultPorts",
          "package": "bittorrent",
          "signature": "[PortNumber]",
          "source": "src/Network-BitTorrent-Core-PeerAddr.html#defaultPorts",
          "type": "function"
        },
        "index": {
          "description": "Ports typically reserved for bittorrent P2P listener",
          "hierarchy": "Network BitTorrent Core PeerAddr",
          "module": "Network.BitTorrent.Core.PeerAddr",
          "name": "defaultPorts",
          "normalized": "[PortNumber]",
          "package": "bittorrent",
          "partial": "Ports",
          "signature": "[PortNumber]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Network-BitTorrent-Core-PeerAddr.html#v:defaultPorts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BitTorrent.Core.PeerAddr",
          "name": "peerID",
          "package": "bittorrent",
          "signature": "(Maybe PeerId)",
          "source": "src/Network-BitTorrent-Core-PeerAddr.html#PeerAddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network BitTorrent Core PeerAddr",
          "module": "Network.BitTorrent.Core.PeerAddr",
          "name": "peerID",
          "package": "bittorrent",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Network-BitTorrent-Core-PeerAddr.html#v:peerID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BitTorrent.Core.PeerAddr",
          "name": "peerIP",
          "package": "bittorrent",
          "signature": "HostAddress",
          "source": "src/Network-BitTorrent-Core-PeerAddr.html#PeerAddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network BitTorrent Core PeerAddr",
          "module": "Network.BitTorrent.Core.PeerAddr",
          "name": "peerIP",
          "package": "bittorrent",
          "partial": "IP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Network-BitTorrent-Core-PeerAddr.html#v:peerIP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.BitTorrent.Core.PeerAddr",
          "name": "peerPort",
          "package": "bittorrent",
          "signature": "PortNumber",
          "source": "src/Network-BitTorrent-Core-PeerAddr.html#PeerAddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network BitTorrent Core PeerAddr",
          "module": "Network.BitTorrent.Core.PeerAddr",
          "name": "peerPort",
          "package": "bittorrent",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Network-BitTorrent-Core-PeerAddr.html#v:peerPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert peer info from tracker response to socket address.  Used\n   for establish connection between peers.\n\u003c/p\u003e",
          "module": "Network.BitTorrent.Core.PeerAddr",
          "name": "peerSockAddr",
          "package": "bittorrent",
          "signature": "PeerAddr -\u003e SockAddr",
          "source": "src/Network-BitTorrent-Core-PeerAddr.html#peerSockAddr",
          "type": "function"
        },
        "index": {
          "description": "Convert peer info from tracker response to socket address Used for establish connection between peers",
          "hierarchy": "Network BitTorrent Core PeerAddr",
          "module": "Network.BitTorrent.Core.PeerAddr",
          "name": "peerSockAddr",
          "normalized": "PeerAddr-\u003eSockAddr",
          "package": "bittorrent",
          "partial": "Sock Addr",
          "signature": "PeerAddr-\u003eSockAddr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Network-BitTorrent-Core-PeerAddr.html#v:peerSockAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003ePeerID\u003c/code\u003e represent self assigned peer identificator. Ideally each\n  host in the network should have unique peer id to avoid\n  collisions, therefore for peer ID generation we use good entropy\n  source. (FIX not really) Peer ID is sent in \u003cem\u003etracker request\u003c/em\u003e,\n  sent and received in \u003cem\u003epeer handshakes\u003c/em\u003e and used in /distributed\n  hash table/ queries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.BitTorrent.Core.PeerId",
          "name": "PeerId",
          "package": "bittorrent",
          "source": "src/Network-BitTorrent-Core-PeerId.html",
          "type": "module"
        },
        "index": {
          "description": "PeerID represent self assigned peer identificator Ideally each host in the network should have unique peer id to avoid collisions therefore for peer ID generation we use good entropy source FIX not really Peer ID is sent in tracker request sent and received in peer handshakes and used in distributed hash table queries",
          "hierarchy": "Network BitTorrent Core PeerId",
          "module": "Network.BitTorrent.Core.PeerId",
          "name": "PeerId",
          "package": "bittorrent",
          "partial": "Peer Id",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Network-BitTorrent-Core-PeerId.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePeer identifier is exactly 20 bytes long bytestring.\n\u003c/p\u003e",
          "module": "Network.BitTorrent.Core.PeerId",
          "name": "PeerId",
          "package": "bittorrent",
          "source": "src/Network-BitTorrent-Core-PeerId.html#PeerId",
          "type": "data"
        },
        "index": {
          "description": "Peer identifier is exactly bytes long bytestring",
          "hierarchy": "Network BitTorrent Core PeerId",
          "module": "Network.BitTorrent.Core.PeerId",
          "name": "PeerId",
          "package": "bittorrent",
          "partial": "Peer Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Network-BitTorrent-Core-PeerId.html#t:PeerId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAzureus-style encoding have the following layout:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1  byte : \u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e 2  bytes: client id\n\u003c/li\u003e\u003cli\u003e 4  bytes: version number\n\u003c/li\u003e\u003cli\u003e 1  byte : \u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e 12 bytes: random number\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.BitTorrent.Core.PeerId",
          "name": "azureusStyle",
          "package": "bittorrent",
          "signature": "BS.ByteString-\u003e BS.ByteString-\u003e BS.ByteString-\u003e PeerId",
          "type": "function"
        },
        "index": {
          "description": "Azureus-style encoding have the following layout byte bytes client id bytes version number byte bytes random number",
          "hierarchy": "Network BitTorrent Core PeerId",
          "module": "Network.BitTorrent.Core.PeerId",
          "name": "azureusStyle",
          "normalized": "BS.ByteString-\u003eBS.ByteString-\u003eBS.ByteString-\u003ePeerId",
          "package": "bittorrent",
          "partial": "Style",
          "signature": "BS.ByteString-\u003eBS.ByteString-\u003eBS.ByteString-\u003ePeerId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Network-BitTorrent-Core-PeerId.html#v:azureusStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePad bytestring so it's becomes exactly request length. Conversion\n is done like so:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e length \u003c size: Complete bytestring by given charaters.\n\u003c/li\u003e\u003cli\u003e length = size: Output bytestring as is.\n\u003c/li\u003e\u003cli\u003e length \u003e size: Drop last (length - size) charaters from a\n     given bytestring.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.BitTorrent.Core.PeerId",
          "name": "byteStringPadded",
          "package": "bittorrent",
          "signature": "BS.ByteString-\u003e Int-\u003e Char-\u003e BS.Builder",
          "type": "function"
        },
        "index": {
          "description": "Pad bytestring so it becomes exactly request length Conversion is done like so length size Complete bytestring by given charaters length size Output bytestring as is length size Drop last length size charaters from given bytestring",
          "hierarchy": "Network BitTorrent Core PeerId",
          "module": "Network.BitTorrent.Core.PeerId",
          "name": "byteStringPadded",
          "normalized": "BS.ByteString-\u003eInt-\u003eChar-\u003eBS.Builder",
          "package": "bittorrent",
          "partial": "String Padded",
          "signature": "BS.ByteString-\u003eInt-\u003eChar-\u003eBS.Builder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Network-BitTorrent-Core-PeerId.html#v:byteStringPadded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to extract meaningful information from peer ID bytes. If\n peer id uses unknown coding style then client info returned is\n \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.BitTorrent.Core.PeerId",
          "name": "clientInfo",
          "package": "bittorrent",
          "signature": "PeerId -\u003e ClientInfo",
          "source": "src/Network-BitTorrent-Core-PeerId.html#clientInfo",
          "type": "function"
        },
        "index": {
          "description": "Tries to extract meaningful information from peer ID bytes If peer id uses unknown coding style then client info returned is def",
          "hierarchy": "Network BitTorrent Core PeerId",
          "module": "Network.BitTorrent.Core.PeerId",
          "name": "clientInfo",
          "normalized": "PeerId-\u003eClientInfo",
          "package": "bittorrent",
          "partial": "Info",
          "signature": "PeerId-\u003eClientInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Network-BitTorrent-Core-PeerId.html#v:clientInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003eHS\u003c/a\u003e - 2 bytes long client identifier.\n\u003c/p\u003e",
          "module": "Network.BitTorrent.Core.PeerId",
          "name": "defaultClientId",
          "package": "bittorrent",
          "signature": "BS.ByteString",
          "source": "src/Network-BitTorrent-Core-PeerId.html#defaultClientId",
          "type": "function"
        },
        "index": {
          "description": "HS bytes long client identifier",
          "hierarchy": "Network BitTorrent Core PeerId",
          "module": "Network.BitTorrent.Core.PeerId",
          "name": "defaultClientId",
          "package": "bittorrent",
          "partial": "Client Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Network-BitTorrent-Core-PeerId.html#v:defaultClientId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives exactly 4 bytes long version number for any version of the\n package.  Version is taken from .cabal.\n\u003c/p\u003e",
          "module": "Network.BitTorrent.Core.PeerId",
          "name": "defaultVersionNumber",
          "package": "bittorrent",
          "signature": "BS.ByteString",
          "source": "src/Network-BitTorrent-Core-PeerId.html#defaultVersionNumber",
          "type": "function"
        },
        "index": {
          "description": "Gives exactly bytes long version number for any version of the package Version is taken from cabal",
          "hierarchy": "Network BitTorrent Core PeerId",
          "module": "Network.BitTorrent.Core.PeerId",
          "name": "defaultVersionNumber",
          "package": "bittorrent",
          "partial": "Version Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Network-BitTorrent-Core-PeerId.html#v:defaultVersionNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives 15 character long random bytestring. This is more robust\n method for generation of random part of peer ID than timestamp.\n\u003c/p\u003e",
          "module": "Network.BitTorrent.Core.PeerId",
          "name": "entropy",
          "package": "bittorrent",
          "signature": "IO BS.ByteString",
          "source": "src/Network-BitTorrent-Core-PeerId.html#entropy",
          "type": "function"
        },
        "index": {
          "description": "Gives character long random bytestring This is more robust method for generation of random part of peer ID than timestamp",
          "hierarchy": "Network BitTorrent Core PeerId",
          "module": "Network.BitTorrent.Core.PeerId",
          "name": "entropy",
          "package": "bittorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Network-BitTorrent-Core-PeerId.html#v:entropy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHere we use Azureus-style encoding with the following args:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eHS\u003c/code\u003e for the client id.\n\u003c/li\u003e\u003cli\u003e Version of the package for the version number\n\u003c/li\u003e\u003cli\u003e UTC time day ++ day time for the random number.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.BitTorrent.Core.PeerId",
          "name": "genPeerId",
          "package": "bittorrent",
          "signature": "IO PeerId",
          "source": "src/Network-BitTorrent-Core-PeerId.html#genPeerId",
          "type": "function"
        },
        "index": {
          "description": "Here we use Azureus-style encoding with the following args HS for the client id Version of the package for the version number UTC time day day time for the random number",
          "hierarchy": "Network BitTorrent Core PeerId",
          "module": "Network.BitTorrent.Core.PeerId",
          "name": "genPeerId",
          "package": "bittorrent",
          "partial": "Peer Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Network-BitTorrent-Core-PeerId.html#v:genPeerId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShadow-style encoding have the following layout:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1 byte   : client id.\n\u003c/li\u003e\u003cli\u003e 0-4 bytes: version number. If less than 4 then padded with\n     \u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e char.\n\u003c/li\u003e\u003cli\u003e 15 bytes : random number. If length is less than 15 then\n     padded with '0' char.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.BitTorrent.Core.PeerId",
          "name": "shadowStyle",
          "package": "bittorrent",
          "signature": "Char-\u003e BS.ByteString-\u003e BS.ByteString-\u003e PeerId",
          "type": "function"
        },
        "index": {
          "description": "Shadow-style encoding have the following layout byte client id bytes version number If less than then padded with char bytes random number If length is less than then padded with char",
          "hierarchy": "Network BitTorrent Core PeerId",
          "module": "Network.BitTorrent.Core.PeerId",
          "name": "shadowStyle",
          "normalized": "Char-\u003eBS.ByteString-\u003eBS.ByteString-\u003ePeerId",
          "package": "bittorrent",
          "partial": "Style",
          "signature": "Char-\u003eBS.ByteString-\u003eBS.ByteString-\u003ePeerId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Network-BitTorrent-Core-PeerId.html#v:shadowStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives 15 characters long decimal timestamp such that:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 6 bytes   : first 6 characters from picoseconds obtained with %q.\n\u003c/li\u003e\u003cli\u003e 1 bytes   : character \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e for readability.\n\u003c/li\u003e\u003cli\u003e 9..* bytes: number of whole seconds since the Unix epoch\n     (!)REVERSED.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eCan be used both with shadow and azureus style encoding. This\n   format is used to make the ID's readable(for debugging) and more\n   or less random.\n\u003c/p\u003e",
          "module": "Network.BitTorrent.Core.PeerId",
          "name": "timestamp",
          "package": "bittorrent",
          "signature": "IO BS.ByteString",
          "source": "src/Network-BitTorrent-Core-PeerId.html#timestamp",
          "type": "function"
        },
        "index": {
          "description": "Gives characters long decimal timestamp such that bytes first characters from picoseconds obtained with bytes character for readability bytes number of whole seconds since the Unix epoch REVERSED Can be used both with shadow and azureus style encoding This format is used to make the ID readable for debugging and more or less random",
          "hierarchy": "Network BitTorrent Core PeerId",
          "module": "Network.BitTorrent.Core.PeerId",
          "name": "timestamp",
          "package": "bittorrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bittorrent/docs/Network-BitTorrent-Core-PeerId.html#v:timestamp"
      }
    }
  ]
]