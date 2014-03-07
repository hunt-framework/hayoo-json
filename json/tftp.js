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
        "word": "tftp"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEncapsulates parsing and generation of TFTP Messages\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.TFTP.Message",
          "name": "Message",
          "package": "tftp",
          "source": "src/Network-TFTP-Message.html",
          "type": "module"
        },
        "index": {
          "description": "Encapsulates parsing and generation of TFTP Messages",
          "hierarchy": "Network TFTP Message",
          "module": "Network.TFTP.Message",
          "name": "Message",
          "package": "tftp",
          "partial": "Message",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Message.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTFTP message type.\n\u003c/p\u003e",
          "module": "Network.TFTP.Message",
          "name": "Message",
          "package": "tftp",
          "source": "src/Network-TFTP-Message.html#Message",
          "type": "data"
        },
        "index": {
          "description": "TFTP message type",
          "hierarchy": "Network TFTP Message",
          "module": "Network.TFTP.Message",
          "name": "Message",
          "package": "tftp",
          "partial": "Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Message.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data mode to encode the data with\n\u003c/p\u003e",
          "module": "Network.TFTP.Message",
          "name": "Mode",
          "package": "tftp",
          "source": "src/Network-TFTP-Message.html#Mode",
          "type": "data"
        },
        "index": {
          "description": "The data mode to encode the data with",
          "hierarchy": "Network TFTP Message",
          "module": "Network.TFTP.Message",
          "name": "Mode",
          "package": "tftp",
          "partial": "Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Message.html#t:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe error codes as defined in the RFC 1350\n\u003c/p\u003e",
          "module": "Network.TFTP.Message",
          "name": "TFTPError",
          "package": "tftp",
          "source": "src/Network-TFTP-Message.html#TFTPError",
          "type": "data"
        },
        "index": {
          "description": "The error codes as defined in the RFC",
          "hierarchy": "Network TFTP Message",
          "module": "Network.TFTP.Message",
          "name": "TFTPError",
          "package": "tftp",
          "partial": "TFTPError",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Message.html#t:TFTPError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAcknowledge message\n\u003c/p\u003e",
          "module": "Network.TFTP.Message",
          "name": "ACK",
          "package": "tftp",
          "signature": "ACK BlockNumber",
          "source": "src/Network-TFTP-Message.html#Message",
          "type": "function"
        },
        "index": {
          "description": "Acknowledge message",
          "hierarchy": "Network TFTP Message",
          "module": "Network.TFTP.Message",
          "name": "ACK",
          "package": "tftp",
          "partial": "ACK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Message.html#v:ACK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TFTP.Message",
          "name": "AccessViolation",
          "package": "tftp",
          "signature": "AccessViolation",
          "source": "src/Network-TFTP-Message.html#TFTPError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TFTP Message",
          "module": "Network.TFTP.Message",
          "name": "AccessViolation",
          "package": "tftp",
          "partial": "Access Violation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Message.html#v:AccessViolation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData block with a raw bytestring\n\u003c/p\u003e",
          "module": "Network.TFTP.Message",
          "name": "DATA",
          "package": "tftp",
          "signature": "DATA BlockNumber ByteString",
          "source": "src/Network-TFTP-Message.html#Message",
          "type": "function"
        },
        "index": {
          "description": "Data block with raw bytestring",
          "hierarchy": "Network TFTP Message",
          "module": "Network.TFTP.Message",
          "name": "DATA",
          "package": "tftp",
          "partial": "DATA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Message.html#v:DATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TFTP.Message",
          "name": "DiskFull",
          "package": "tftp",
          "signature": "DiskFull",
          "source": "src/Network-TFTP-Message.html#TFTPError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TFTP Message",
          "module": "Network.TFTP.Message",
          "name": "DiskFull",
          "package": "tftp",
          "partial": "Disk Full",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Message.html#v:DiskFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError message\n\u003c/p\u003e",
          "module": "Network.TFTP.Message",
          "name": "Error",
          "package": "tftp",
          "signature": "Error TFTPError",
          "source": "src/Network-TFTP-Message.html#Message",
          "type": "function"
        },
        "index": {
          "description": "Error message",
          "hierarchy": "Network TFTP Message",
          "module": "Network.TFTP.Message",
          "name": "Error",
          "package": "tftp",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Message.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncapsulates a custom message for a non-standard error\n\u003c/p\u003e",
          "module": "Network.TFTP.Message",
          "name": "ErrorMessage",
          "package": "tftp",
          "signature": "ErrorMessage String",
          "source": "src/Network-TFTP-Message.html#TFTPError",
          "type": "function"
        },
        "index": {
          "description": "Encapsulates custom message for non-standard error",
          "hierarchy": "Network TFTP Message",
          "module": "Network.TFTP.Message",
          "name": "ErrorMessage",
          "package": "tftp",
          "partial": "Error Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Message.html#v:ErrorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TFTP.Message",
          "name": "FileAlreadyExists",
          "package": "tftp",
          "signature": "FileAlreadyExists",
          "source": "src/Network-TFTP-Message.html#TFTPError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TFTP Message",
          "module": "Network.TFTP.Message",
          "name": "FileAlreadyExists",
          "package": "tftp",
          "partial": "File Already Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Message.html#v:FileAlreadyExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TFTP.Message",
          "name": "FileNotFound",
          "package": "tftp",
          "signature": "FileNotFound",
          "source": "src/Network-TFTP-Message.html#TFTPError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TFTP Message",
          "module": "Network.TFTP.Message",
          "name": "FileNotFound",
          "package": "tftp",
          "partial": "File Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Message.html#v:FileNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TFTP.Message",
          "name": "IllegalTFTPOperation",
          "package": "tftp",
          "signature": "IllegalTFTPOperation",
          "source": "src/Network-TFTP-Message.html#TFTPError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TFTP Message",
          "module": "Network.TFTP.Message",
          "name": "IllegalTFTPOperation",
          "package": "tftp",
          "partial": "Illegal TFTPOperation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Message.html#v:IllegalTFTPOperation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003enetascii\u003c/a\u003e mode\n\u003c/p\u003e",
          "module": "Network.TFTP.Message",
          "name": "NetASCII",
          "package": "tftp",
          "signature": "NetASCII",
          "source": "src/Network-TFTP-Message.html#Mode",
          "type": "function"
        },
        "index": {
          "description": "netascii mode",
          "hierarchy": "Network TFTP Message",
          "module": "Network.TFTP.Message",
          "name": "NetASCII",
          "package": "tftp",
          "partial": "Net ASCII",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Message.html#v:NetASCII"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TFTP.Message",
          "name": "NoSuchUser",
          "package": "tftp",
          "signature": "NoSuchUser",
          "source": "src/Network-TFTP-Message.html#TFTPError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TFTP Message",
          "module": "Network.TFTP.Message",
          "name": "NoSuchUser",
          "package": "tftp",
          "partial": "No Such User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Message.html#v:NoSuchUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003eoctet\u003c/a\u003e mode\n\u003c/p\u003e",
          "module": "Network.TFTP.Message",
          "name": "Octet",
          "package": "tftp",
          "signature": "Octet",
          "source": "src/Network-TFTP-Message.html#Mode",
          "type": "function"
        },
        "index": {
          "description": "octet mode",
          "hierarchy": "Network TFTP Message",
          "module": "Network.TFTP.Message",
          "name": "Octet",
          "package": "tftp",
          "partial": "Octet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Message.html#v:Octet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead request\n\u003c/p\u003e",
          "module": "Network.TFTP.Message",
          "name": "RRQ",
          "package": "tftp",
          "signature": "RRQ String Mode",
          "source": "src/Network-TFTP-Message.html#Message",
          "type": "function"
        },
        "index": {
          "description": "Read request",
          "hierarchy": "Network TFTP Message",
          "module": "Network.TFTP.Message",
          "name": "RRQ",
          "package": "tftp",
          "partial": "RRQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Message.html#v:RRQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TFTP.Message",
          "name": "UnknownTransferID",
          "package": "tftp",
          "signature": "UnknownTransferID",
          "source": "src/Network-TFTP-Message.html#TFTPError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TFTP Message",
          "module": "Network.TFTP.Message",
          "name": "UnknownTransferID",
          "package": "tftp",
          "partial": "Unknown Transfer ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Message.html#v:UnknownTransferID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite request\n\u003c/p\u003e",
          "module": "Network.TFTP.Message",
          "name": "WRQ",
          "package": "tftp",
          "signature": "WRQ String Mode",
          "source": "src/Network-TFTP-Message.html#Message",
          "type": "function"
        },
        "index": {
          "description": "Write request",
          "hierarchy": "Network TFTP Message",
          "module": "Network.TFTP.Message",
          "name": "WRQ",
          "package": "tftp",
          "partial": "WRQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Message.html#v:WRQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e encoded in \u003ccode\u003efromMode\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e encoded in\n \u003ccode\u003etoMode\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.TFTP.Message",
          "name": "convertMode",
          "package": "tftp",
          "signature": "Mode -\u003e Mode -\u003e ByteString -\u003e ByteString",
          "source": "src/Network-TFTP-Message.html#convertMode",
          "type": "function"
        },
        "index": {
          "description": "Convert ByteString encoded in fromMode to ByteString encoded in toMode",
          "hierarchy": "Network TFTP Message",
          "module": "Network.TFTP.Message",
          "name": "convertMode",
          "normalized": "Mode-\u003eMode-\u003eByteString-\u003eByteString",
          "package": "tftp",
          "partial": "Mode",
          "signature": "Mode-\u003eMode-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Message.html#v:convertMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a value from a lazy ByteString, reconstructing the original structure.\n\u003c/p\u003e",
          "module": "Network.TFTP.Message",
          "name": "decode",
          "package": "tftp",
          "signature": "ByteString -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Decode value from lazy ByteString reconstructing the original structure",
          "hierarchy": "Network TFTP Message",
          "module": "Network.TFTP.Message",
          "name": "decode",
          "normalized": "ByteString-\u003ea",
          "package": "tftp",
          "signature": "ByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Message.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a value using binary serialisation to a lazy ByteString.\n\u003c/p\u003e",
          "module": "Network.TFTP.Message",
          "name": "encode",
          "package": "tftp",
          "signature": "a -\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Encode value using binary serialisation to lazy ByteString",
          "hierarchy": "Network TFTP Message",
          "module": "Network.TFTP.Message",
          "name": "encode",
          "normalized": "a-\u003eByteString",
          "package": "tftp",
          "signature": "a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Message.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTransmission of data via TFTP. This implements the stop-and-wait style data\n transmission protocol.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.TFTP.Protocol",
          "name": "Protocol",
          "package": "tftp",
          "source": "src/Network-TFTP-Protocol.html",
          "type": "module"
        },
        "index": {
          "description": "Transmission of data via TFTP This implements the stop-and-wait style data transmission protocol",
          "hierarchy": "Network TFTP Protocol",
          "module": "Network.TFTP.Protocol",
          "name": "Protocol",
          "package": "tftp",
          "partial": "Protocol",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Protocol.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal state record for a transfer\n\u003c/p\u003e",
          "module": "Network.TFTP.Protocol",
          "name": "XFerState",
          "package": "tftp",
          "source": "src/Network-TFTP-Protocol.html#XFerState",
          "type": "data"
        },
        "index": {
          "description": "Internal state record for transfer",
          "hierarchy": "Network TFTP Protocol",
          "module": "Network.TFTP.Protocol",
          "name": "XFerState",
          "package": "tftp",
          "partial": "XFer State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Protocol.html#t:XFerState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eXFer monad parameterised over a (MessageIO) monad.\n\u003c/p\u003e",
          "module": "Network.TFTP.Protocol",
          "name": "XFerT",
          "package": "tftp",
          "source": "src/Network-TFTP-Protocol.html#XFerT",
          "type": "type"
        },
        "index": {
          "description": "XFer monad parameterised over MessageIO monad",
          "hierarchy": "Network TFTP Protocol",
          "module": "Network.TFTP.Protocol",
          "name": "XFerT",
          "package": "tftp",
          "partial": "XFer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Protocol.html#t:XFerT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TFTP.Protocol",
          "name": "XFerState",
          "package": "tftp",
          "signature": "XFerState",
          "source": "src/Network-TFTP-Protocol.html#XFerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TFTP Protocol",
          "module": "Network.TFTP.Protocol",
          "name": "XFerState",
          "package": "tftp",
          "partial": "XFer State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Protocol.html#v:XFerState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default time \u003ccode\u003e\u003ca\u003econtinueAfterACK\u003c/a\u003e\u003c/code\u003e waits for an ACK.\n\u003c/p\u003e",
          "module": "Network.TFTP.Protocol",
          "name": "ackTimeOut",
          "package": "tftp",
          "signature": "Maybe Int",
          "source": "src/Network-TFTP-Protocol.html#ackTimeOut",
          "type": "function"
        },
        "index": {
          "description": "The default time continueAfterACK waits for an ACK",
          "hierarchy": "Network TFTP Protocol",
          "module": "Network.TFTP.Protocol",
          "name": "ackTimeOut",
          "package": "tftp",
          "partial": "Time Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Protocol.html#v:ackTimeOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive the next message from the client, if the client anserws with the\n correct ack call \u003ccode\u003esuccess\u003c/code\u003e. If there was a timeout or the ack was for an\n invalid index call \u003ccode\u003eretry\u003c/code\u003e, if an error occured call 'error\n\u003c/p\u003e",
          "module": "Network.TFTP.Protocol",
          "name": "continueAfterACK",
          "package": "tftp",
          "signature": "StateT (XFerState address) m b -\u003e StateT (XFerState address) m b -\u003e StateT (XFerState address) m b -\u003e StateT (XFerState address) m b",
          "source": "src/Network-TFTP-Protocol.html#continueAfterACK",
          "type": "function"
        },
        "index": {
          "description": "Receive the next message from the client if the client anserws with the correct ack call success If there was timeout or the ack was for an invalid index call retry if an error occured call error",
          "hierarchy": "Network TFTP Protocol",
          "module": "Network.TFTP.Protocol",
          "name": "continueAfterACK",
          "normalized": "StateT(XFerState a)b c-\u003eStateT(XFerState a)b c-\u003eStateT(XFerState a)b c-\u003eStateT(XFerState a)b c",
          "package": "tftp",
          "partial": "After ACK",
          "signature": "StateT(XFerState address)m b-\u003eStateT(XFerState address)m b-\u003eStateT(XFerState address)m b-\u003eStateT(XFerState address)m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Protocol.html#v:continueAfterACK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the current block index for an ongoing transfer\n\u003c/p\u003e",
          "module": "Network.TFTP.Protocol",
          "name": "getBlockIndex",
          "package": "tftp",
          "signature": "XFerT m address Word16",
          "source": "src/Network-TFTP-Protocol.html#getBlockIndex",
          "type": "function"
        },
        "index": {
          "description": "Read the current block index for an ongoing transfer",
          "hierarchy": "Network TFTP Protocol",
          "module": "Network.TFTP.Protocol",
          "name": "getBlockIndex",
          "package": "tftp",
          "partial": "Block Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Protocol.html#v:getBlockIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the origin(\u003ccode\u003eAddress\u003c/code\u003e) of the message last received, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.TFTP.Protocol",
          "name": "getLastPeer",
          "package": "tftp",
          "signature": "XFerT m address (Maybe address)",
          "source": "src/Network-TFTP-Protocol.html#getLastPeer",
          "type": "function"
        },
        "index": {
          "description": "Return the origin Address of the message last received or Nothing",
          "hierarchy": "Network TFTP Protocol",
          "module": "Network.TFTP.Protocol",
          "name": "getLastPeer",
          "package": "tftp",
          "partial": "Last Peer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Protocol.html#v:getLastPeer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrement the current block index for an ongoing transfer\n\u003c/p\u003e",
          "module": "Network.TFTP.Protocol",
          "name": "incBlockIndex",
          "package": "tftp",
          "signature": "XFerT m address Word16",
          "source": "src/Network-TFTP-Protocol.html#incBlockIndex",
          "type": "function"
        },
        "index": {
          "description": "Increment the current block index for an ongoing transfer",
          "hierarchy": "Network TFTP Protocol",
          "module": "Network.TFTP.Protocol",
          "name": "incBlockIndex",
          "package": "tftp",
          "partial": "Block Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Protocol.html#v:incBlockIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog message with custom priority\n\u003c/p\u003e",
          "module": "Network.TFTP.Protocol",
          "name": "logWith",
          "package": "tftp",
          "signature": "(String -\u003e String -\u003e IO ()) -\u003e String -\u003e XFerT m address ()",
          "source": "src/Network-TFTP-Protocol.html#logWith",
          "type": "function"
        },
        "index": {
          "description": "Log message with custom priority",
          "hierarchy": "Network TFTP Protocol",
          "module": "Network.TFTP.Protocol",
          "name": "logWith",
          "normalized": "(String-\u003eString-\u003eIO())-\u003eString-\u003eXFerT a b()",
          "package": "tftp",
          "partial": "With",
          "signature": "(String-\u003eString-\u003eIO())-\u003eString-\u003eXFerT m address()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Protocol.html#v:logWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default number of re-transmits during \u003ccode\u003e\u003ca\u003ewriteData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.TFTP.Protocol",
          "name": "maxRetries",
          "package": "tftp",
          "signature": "Int",
          "source": "src/Network-TFTP-Protocol.html#maxRetries",
          "type": "function"
        },
        "index": {
          "description": "The default number of re-transmits during writeData",
          "hierarchy": "Network TFTP Protocol",
          "module": "Network.TFTP.Protocol",
          "name": "maxRetries",
          "package": "tftp",
          "partial": "Retries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Protocol.html#v:maxRetries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple server action that will wait for a RRQ for its file.\n\u003c/p\u003e",
          "module": "Network.TFTP.Protocol",
          "name": "offerSingleFile",
          "package": "tftp",
          "signature": "Maybe Int -\u003e String -\u003e ByteString -\u003e XFerT m address Bool",
          "source": "src/Network-TFTP-Protocol.html#offerSingleFile",
          "type": "function"
        },
        "index": {
          "description": "simple server action that will wait for RRQ for its file",
          "hierarchy": "Network TFTP Protocol",
          "module": "Network.TFTP.Protocol",
          "name": "offerSingleFile",
          "normalized": "Maybe Int-\u003eString-\u003eByteString-\u003eXFerT a b Bool",
          "package": "tftp",
          "partial": "Single File",
          "signature": "Maybe Int-\u003eString-\u003eByteString-\u003eXFerT m address Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Protocol.html#v:offerSingleFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog error message\n\u003c/p\u003e",
          "module": "Network.TFTP.Protocol",
          "name": "printErr",
          "package": "tftp",
          "signature": "String -\u003e XFerT m address ()",
          "source": "src/Network-TFTP-Protocol.html#printErr",
          "type": "function"
        },
        "index": {
          "description": "Log error message",
          "hierarchy": "Network TFTP Protocol",
          "module": "Network.TFTP.Protocol",
          "name": "printErr",
          "normalized": "String-\u003eXFerT a b()",
          "package": "tftp",
          "partial": "Err",
          "signature": "String-\u003eXFerT m address()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Protocol.html#v:printErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog debug message\n\u003c/p\u003e",
          "module": "Network.TFTP.Protocol",
          "name": "printInfo",
          "package": "tftp",
          "signature": "String -\u003e XFerT m address ()",
          "source": "src/Network-TFTP-Protocol.html#printInfo",
          "type": "function"
        },
        "index": {
          "description": "Log debug message",
          "hierarchy": "Network TFTP Protocol",
          "module": "Network.TFTP.Protocol",
          "name": "printInfo",
          "normalized": "String-\u003eXFerT a b()",
          "package": "tftp",
          "partial": "Info",
          "signature": "String-\u003eXFerT m address()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Protocol.html#v:printInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog warning message\n\u003c/p\u003e",
          "module": "Network.TFTP.Protocol",
          "name": "printWarn",
          "package": "tftp",
          "signature": "String -\u003e XFerT m address ()",
          "source": "src/Network-TFTP-Protocol.html#printWarn",
          "type": "function"
        },
        "index": {
          "description": "Log warning message",
          "hierarchy": "Network TFTP Protocol",
          "module": "Network.TFTP.Protocol",
          "name": "printWarn",
          "normalized": "String-\u003eXFerT a b()",
          "package": "tftp",
          "partial": "Warn",
          "signature": "String-\u003eXFerT m address()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Protocol.html#v:printWarn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereceive a message and remeber the sender for \u003ccode\u003e\u003ca\u003egetLastPeer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.TFTP.Protocol",
          "name": "receive",
          "package": "tftp",
          "signature": "Maybe Int -\u003e XFerT m address (Maybe Message)",
          "source": "src/Network-TFTP-Protocol.html#receive",
          "type": "function"
        },
        "index": {
          "description": "receive message and remeber the sender for getLastPeer",
          "hierarchy": "Network TFTP Protocol",
          "module": "Network.TFTP.Protocol",
          "name": "receive",
          "normalized": "Maybe Int-\u003eXFerT a b(Maybe Message)",
          "package": "tftp",
          "signature": "Maybe Int-\u003eXFerT m address(Maybe Message)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Protocol.html#v:receive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend any \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e to the address to where the last message received from\n\u003c/p\u003e",
          "module": "Network.TFTP.Protocol",
          "name": "reply",
          "package": "tftp",
          "signature": "Message -\u003e XFerT m address ()",
          "source": "src/Network-TFTP-Protocol.html#reply",
          "type": "function"
        },
        "index": {
          "description": "Send any Message to the address to where the last message received from",
          "hierarchy": "Network TFTP Protocol",
          "module": "Network.TFTP.Protocol",
          "name": "reply",
          "normalized": "Message-\u003eXFerT a b()",
          "package": "tftp",
          "signature": "Message-\u003eXFerT m address()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Protocol.html#v:reply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a \u003ccode\u003e\u003ca\u003eDATA\u003c/a\u003e\u003c/code\u003e packet to the origin(\u003ccode\u003eAddress\u003c/code\u003e) of the message last received with the current block index\n\u003c/p\u003e",
          "module": "Network.TFTP.Protocol",
          "name": "replyData",
          "package": "tftp",
          "signature": "ByteString -\u003e XFerT m address ()",
          "source": "src/Network-TFTP-Protocol.html#replyData",
          "type": "function"
        },
        "index": {
          "description": "Send DATA packet to the origin Address of the message last received with the current block index",
          "hierarchy": "Network TFTP Protocol",
          "module": "Network.TFTP.Protocol",
          "name": "replyData",
          "normalized": "ByteString-\u003eXFerT a b()",
          "package": "tftp",
          "partial": "Data",
          "signature": "ByteString-\u003eXFerT m address()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Protocol.html#v:replyData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReset the current block index for an ongoing transfer to 0\n\u003c/p\u003e",
          "module": "Network.TFTP.Protocol",
          "name": "resetBlockIndex",
          "package": "tftp",
          "signature": "XFerT m address ()",
          "source": "src/Network-TFTP-Protocol.html#resetBlockIndex",
          "type": "function"
        },
        "index": {
          "description": "Reset the current block index for an ongoing transfer to",
          "hierarchy": "Network TFTP Protocol",
          "module": "Network.TFTP.Protocol",
          "name": "resetBlockIndex",
          "normalized": "XFerT a b()",
          "package": "tftp",
          "partial": "Block Index",
          "signature": "XFerT m address()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Protocol.html#v:resetBlockIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a transfer action.\n\u003c/p\u003e",
          "module": "Network.TFTP.Protocol",
          "name": "runTFTP",
          "package": "tftp",
          "signature": "XFerT m address result -\u003e m result",
          "source": "src/Network-TFTP-Protocol.html#runTFTP",
          "type": "function"
        },
        "index": {
          "description": "Execute transfer action",
          "hierarchy": "Network TFTP Protocol",
          "module": "Network.TFTP.Protocol",
          "name": "runTFTP",
          "normalized": "XFerT a b c-\u003ea c",
          "package": "tftp",
          "partial": "TFTP",
          "signature": "XFerT m address result-\u003em result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Protocol.html#v:runTFTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend any \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003eAddress\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.TFTP.Protocol",
          "name": "send",
          "package": "tftp",
          "signature": "address -\u003e Message -\u003e XFerT m address ()",
          "source": "src/Network-TFTP-Protocol.html#send",
          "type": "function"
        },
        "index": {
          "description": "Send any Message to an Address",
          "hierarchy": "Network TFTP Protocol",
          "module": "Network.TFTP.Protocol",
          "name": "send",
          "normalized": "a-\u003eMessage-\u003eXFerT b a()",
          "package": "tftp",
          "signature": "address-\u003eMessage-\u003eXFerT m address()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Protocol.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOverwrite the origin(\u003ccode\u003eAddress\u003c/code\u003e) of the message last received\n\u003c/p\u003e",
          "module": "Network.TFTP.Protocol",
          "name": "setLastPeer",
          "package": "tftp",
          "signature": "Maybe address -\u003e XFerT m address ()",
          "source": "src/Network-TFTP-Protocol.html#setLastPeer",
          "type": "function"
        },
        "index": {
          "description": "Overwrite the origin Address of the message last received",
          "hierarchy": "Network TFTP Protocol",
          "module": "Network.TFTP.Protocol",
          "name": "setLastPeer",
          "normalized": "Maybe a-\u003eXFerT b a()",
          "package": "tftp",
          "partial": "Last Peer",
          "signature": "Maybe address-\u003eXFerT m address()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Protocol.html#v:setLastPeer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA transfer action that sends a large chunk of data via TFTP DATA messages\n to a destination.\n\u003c/p\u003e",
          "module": "Network.TFTP.Protocol",
          "name": "writeData",
          "package": "tftp",
          "signature": "ByteString -\u003e XFerT m address Bool",
          "source": "src/Network-TFTP-Protocol.html#writeData",
          "type": "function"
        },
        "index": {
          "description": "transfer action that sends large chunk of data via TFTP DATA messages to destination",
          "hierarchy": "Network TFTP Protocol",
          "module": "Network.TFTP.Protocol",
          "name": "writeData",
          "normalized": "ByteString-\u003eXFerT a b Bool",
          "package": "tftp",
          "partial": "Data",
          "signature": "ByteString-\u003eXFerT m address Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Protocol.html#v:writeData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe block index of an ongoing transfer\n\u003c/p\u003e",
          "module": "Network.TFTP.Protocol",
          "name": "xsBlockIndex",
          "package": "tftp",
          "signature": "Word16",
          "source": "src/Network-TFTP-Protocol.html#XFerState",
          "type": "function"
        },
        "index": {
          "description": "The block index of an ongoing transfer",
          "hierarchy": "Network TFTP Protocol",
          "module": "Network.TFTP.Protocol",
          "name": "xsBlockIndex",
          "package": "tftp",
          "partial": "Block Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Protocol.html#v:xsBlockIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrigin of the last message received\n\u003c/p\u003e",
          "module": "Network.TFTP.Protocol",
          "name": "xsFrom",
          "package": "tftp",
          "signature": "Maybe address",
          "source": "src/Network-TFTP-Protocol.html#XFerState",
          "type": "function"
        },
        "index": {
          "description": "Origin of the last message received",
          "hierarchy": "Network TFTP Protocol",
          "module": "Network.TFTP.Protocol",
          "name": "xsFrom",
          "package": "tftp",
          "partial": "From",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Protocol.html#v:xsFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHigh-level API for building simple TFTP Servers, currently restricted to answering read requests.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.TFTP.Server",
          "name": "Server",
          "package": "tftp",
          "source": "src/Network-TFTP-Server.html",
          "type": "module"
        },
        "index": {
          "description": "High-level API for building simple TFTP Servers currently restricted to answering read requests",
          "hierarchy": "Network TFTP Server",
          "module": "Network.TFTP.Server",
          "name": "Server",
          "package": "tftp",
          "partial": "Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Server.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a simple server that answers a single read request from a single client for\n a file, and return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e when the transfer was successfully completed,\n or 'Just \u003ca\u003emessage\u003c/a\u003e'\n\u003c/p\u003e",
          "module": "Network.TFTP.Server",
          "name": "singleBinary",
          "package": "tftp",
          "signature": "Maybe Int -\u003e FilePath -\u003e String -\u003e Maybe String -\u003e Maybe String -\u003e IO (Maybe String)",
          "source": "src/Network-TFTP-Server.html#singleBinary",
          "type": "function"
        },
        "index": {
          "description": "Create simple server that answers single read request from single client for file and return Nothing when the transfer was successfully completed or Just message",
          "hierarchy": "Network TFTP Server",
          "module": "Network.TFTP.Server",
          "name": "singleBinary",
          "normalized": "Maybe Int-\u003eFilePath-\u003eString-\u003eMaybe String-\u003eMaybe String-\u003eIO(Maybe String)",
          "package": "tftp",
          "partial": "Binary",
          "signature": "Maybe Int-\u003eFilePath-\u003eString-\u003eMaybe String-\u003eMaybe String-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Server.html#v:singleBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommon types used internally. Re-exports the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e type to use as well as some monad transformer stuff, exceptions, logging, \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e and printf.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.TFTP.Types",
          "name": "Types",
          "package": "tftp",
          "source": "src/Network-TFTP-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Common types used internally Re-exports the ByteString type to use as well as some monad transformer stuff exceptions logging Word and printf",
          "hierarchy": "Network TFTP Types",
          "module": "Network.TFTP.Types",
          "name": "Types",
          "package": "tftp",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for the Lazy ByteString that is used internally\n\u003c/p\u003e",
          "module": "Network.TFTP.Types",
          "name": "ByteString",
          "package": "tftp",
          "source": "src/Network-TFTP-Types.html#ByteString",
          "type": "type"
        },
        "index": {
          "description": "Alias for the Lazy ByteString that is used internally",
          "hierarchy": "Network TFTP Types",
          "module": "Network.TFTP.Types",
          "name": "ByteString",
          "package": "tftp",
          "partial": "Byte String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Types.html#t:ByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for monads that can send/receive messages\n\u003c/p\u003e",
          "module": "Network.TFTP.Types",
          "name": "MessageIO",
          "package": "tftp",
          "source": "src/Network-TFTP-Types.html#MessageIO",
          "type": "class"
        },
        "index": {
          "description": "Type class for monads that can send receive messages",
          "hierarchy": "Network TFTP Types",
          "module": "Network.TFTP.Types",
          "name": "MessageIO",
          "package": "tftp",
          "partial": "Message IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Types.html#t:MessageIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCandy for ByteString.pack to not interfere with Prelude(drop)\n\u003c/p\u003e",
          "module": "Network.TFTP.Types",
          "name": "bdrop",
          "package": "tftp",
          "signature": "Int64 -\u003e ByteString -\u003e ByteString",
          "source": "src/Network-TFTP-Types.html#bdrop",
          "type": "function"
        },
        "index": {
          "description": "Candy for ByteString.pack to not interfere with Prelude drop",
          "hierarchy": "Network TFTP Types",
          "module": "Network.TFTP.Types",
          "name": "bdrop",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "tftp",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Types.html#v:bdrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCandy for ByteString.length\n\u003c/p\u003e",
          "module": "Network.TFTP.Types",
          "name": "blength",
          "package": "tftp",
          "signature": "ByteString -\u003e Int64",
          "source": "src/Network-TFTP-Types.html#blength",
          "type": "function"
        },
        "index": {
          "description": "Candy for ByteString.length",
          "hierarchy": "Network TFTP Types",
          "module": "Network.TFTP.Types",
          "name": "blength",
          "normalized": "ByteString-\u003eInt",
          "package": "tftp",
          "signature": "ByteString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Types.html#v:blength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCandy for ByteString.take\n\u003c/p\u003e",
          "module": "Network.TFTP.Types",
          "name": "btake",
          "package": "tftp",
          "signature": "Int64 -\u003e ByteString -\u003e ByteString",
          "source": "src/Network-TFTP-Types.html#btake",
          "type": "function"
        },
        "index": {
          "description": "Candy for ByteString.take",
          "hierarchy": "Network TFTP Types",
          "module": "Network.TFTP.Types",
          "name": "btake",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "tftp",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Types.html#v:btake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the address that \u003ccode\u003e\u003ca\u003ereceiveFrom\u003c/a\u003e\u003c/code\u003e receives on\n\u003c/p\u003e",
          "module": "Network.TFTP.Types",
          "name": "localAddress",
          "package": "tftp",
          "signature": "m address",
          "source": "src/Network-TFTP-Types.html#localAddress",
          "type": "method"
        },
        "index": {
          "description": "Return the address that receiveFrom receives on",
          "hierarchy": "Network TFTP Types",
          "module": "Network.TFTP.Types",
          "name": "localAddress",
          "package": "tftp",
          "partial": "Address",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Types.html#v:localAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a '[Word8]' into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Network.TFTP.Types",
          "name": "pack",
          "package": "tftp",
          "signature": "[Word8] -\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Convert Word8 into ByteString",
          "hierarchy": "Network TFTP Types",
          "module": "Network.TFTP.Types",
          "name": "pack",
          "normalized": "[Word]-\u003eByteString",
          "package": "tftp",
          "signature": "[Word]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Types.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an entire file \u003cem\u003elazily\u003c/em\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n The Handle will be held open until EOF is encountered.\n\u003c/p\u003e",
          "module": "Network.TFTP.Types",
          "name": "readFile",
          "package": "tftp",
          "signature": "FilePath -\u003e IO ByteString",
          "type": "function"
        },
        "index": {
          "description": "Read an entire file lazily into ByteString The Handle will be held open until EOF is encountered",
          "hierarchy": "Network TFTP Types",
          "module": "Network.TFTP.Types",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO ByteString",
          "package": "tftp",
          "partial": "File",
          "signature": "FilePath-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Types.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive a message, failing if no message was receive after a timeout\n (measured in seconds)\n\u003c/p\u003e",
          "module": "Network.TFTP.Types",
          "name": "receiveFrom",
          "package": "tftp",
          "signature": "Maybe Int -\u003e m (Maybe (address, ByteString))",
          "source": "src/Network-TFTP-Types.html#receiveFrom",
          "type": "method"
        },
        "index": {
          "description": "Receive message failing if no message was receive after timeout measured in seconds",
          "hierarchy": "Network TFTP Types",
          "module": "Network.TFTP.Types",
          "name": "receiveFrom",
          "normalized": "Maybe Int-\u003ea(Maybe(b,ByteString))",
          "package": "tftp",
          "partial": "From",
          "signature": "Maybe Int-\u003em(Maybe(address,ByteString))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Types.html#v:receiveFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a message or return \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e when there was an error\n\u003c/p\u003e",
          "module": "Network.TFTP.Types",
          "name": "sendTo",
          "package": "tftp",
          "signature": "address -\u003e ByteString -\u003e m Bool",
          "source": "src/Network-TFTP-Types.html#sendTo",
          "type": "method"
        },
        "index": {
          "description": "Send message or return False when there was an error",
          "hierarchy": "Network TFTP Types",
          "module": "Network.TFTP.Types",
          "name": "sendTo",
          "normalized": "a-\u003eByteString-\u003eb Bool",
          "package": "tftp",
          "partial": "To",
          "signature": "address-\u003eByteString-\u003em Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Types.html#v:sendTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Converts a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a '[Word8]'.\n\u003c/p\u003e",
          "module": "Network.TFTP.Types",
          "name": "unpack",
          "package": "tftp",
          "signature": "ByteString -\u003e [Word8]",
          "type": "function"
        },
        "index": {
          "description": "Converts ByteString to Word8",
          "hierarchy": "Network TFTP Types",
          "module": "Network.TFTP.Types",
          "name": "unpack",
          "normalized": "ByteString-\u003e[Word]",
          "package": "tftp",
          "signature": "ByteString-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-Types.html#v:unpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBuffered UDP IO utility module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.TFTP.UDPIO",
          "name": "UDPIO",
          "package": "tftp",
          "source": "src/Network-TFTP-UDPIO.html",
          "type": "module"
        },
        "index": {
          "description": "Buffered UDP IO utility module",
          "hierarchy": "Network TFTP UDPIO",
          "module": "Network.TFTP.UDPIO",
          "name": "UDPIO",
          "package": "tftp",
          "partial": "UDPIO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-UDPIO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNetwork address of a UDP sender/receiver\n\u003c/p\u003e",
          "module": "Network.TFTP.UDPIO",
          "name": "Address",
          "package": "tftp",
          "source": "src/Network-TFTP-UDPIO.html#Address",
          "type": "type"
        },
        "index": {
          "description": "Network address of UDP sender receiver",
          "hierarchy": "Network TFTP UDPIO",
          "module": "Network.TFTP.UDPIO",
          "name": "Address",
          "package": "tftp",
          "partial": "Address",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-UDPIO.html#t:Address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad for UDP IO\n\u003c/p\u003e",
          "module": "Network.TFTP.UDPIO",
          "name": "UDPIO",
          "package": "tftp",
          "source": "src/Network-TFTP-UDPIO.html#UDPIO",
          "type": "newtype"
        },
        "index": {
          "description": "monad for UDP IO",
          "hierarchy": "Network TFTP UDPIO",
          "module": "Network.TFTP.UDPIO",
          "name": "UDPIO",
          "package": "tftp",
          "partial": "UDPIO",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-UDPIO.html#t:UDPIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TFTP.UDPIO",
          "name": "UDPIO",
          "package": "tftp",
          "signature": "UDPIO",
          "source": "src/Network-TFTP-UDPIO.html#UDPIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TFTP UDPIO",
          "module": "Network.TFTP.UDPIO",
          "name": "UDPIO",
          "package": "tftp",
          "partial": "UDPIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-UDPIO.html#v:UDPIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TFTP.UDPIO",
          "name": "runUDPIO",
          "package": "tftp",
          "signature": "StateT UDPIOSt IO a",
          "source": "src/Network-TFTP-UDPIO.html#UDPIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TFTP UDPIO",
          "module": "Network.TFTP.UDPIO",
          "name": "runUDPIO",
          "package": "tftp",
          "partial": "UDPIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-UDPIO.html#v:runUDPIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an action on a bound UDP port providing access to UDP IO via\n two functions that read and write data to/from UDP sockets.\n When the action returns, the socket is closed.\n\u003c/p\u003e",
          "module": "Network.TFTP.UDPIO",
          "name": "udpIO",
          "package": "tftp",
          "signature": "Maybe String-\u003e Maybe String-\u003e UDPIO a-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Execute an action on bound UDP port providing access to UDP IO via two functions that read and write data to from UDP sockets When the action returns the socket is closed",
          "hierarchy": "Network TFTP UDPIO",
          "module": "Network.TFTP.UDPIO",
          "name": "udpIO",
          "normalized": "Maybe String-\u003eMaybe String-\u003eUDPIO a-\u003eIO a",
          "package": "tftp",
          "partial": "IO",
          "signature": "Maybe String-\u003eMaybe String-\u003eUDPIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tftp/docs/Network-TFTP-UDPIO.html#v:udpIO"
      }
    }
  ]
]