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
        "word": "zigbee-znet25"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eXBee ZNet 2.5 (ZigBee) frame encoder/decoder functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Protocol.ZigBee.ZNet25.Encoder",
          "name": "Encoder",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Encoder.html",
          "type": "module"
        },
        "index": {
          "description": "XBee ZNet ZigBee frame encoder decoder functions",
          "hierarchy": "Network Protocol ZigBee ZNet25 Encoder",
          "module": "Network.Protocol.ZigBee.ZNet25.Encoder",
          "name": "Encoder",
          "package": "zigbee-znet25",
          "partial": "Encoder",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Encoder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e runs in the \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e monad.  \u003ccode\u003eDecoderState\u003c/code\u003e tracks the\n decoder's in/out-of frame state, current frame length, and other state\n variables.\n\u003c/p\u003e",
          "module": "Network.Protocol.ZigBee.ZNet25.Encoder",
          "name": "DecoderState",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Encoder.html#DecoderState",
          "type": "data"
        },
        "index": {
          "description": "decode runs in the State monad DecoderState tracks the decoder in out-of frame state current frame length and other state variables",
          "hierarchy": "Network Protocol ZigBee ZNet25 Encoder",
          "module": "Network.Protocol.ZigBee.ZNet25.Encoder",
          "name": "DecoderState",
          "package": "zigbee-znet25",
          "partial": "Decoder State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Encoder.html#t:DecoderState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e monad, reversing the \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e\n process.  Once a frame delimiter byte is found, the inner frame payload is\n unescaped, the checksum is verified, and finally a \u003ccode\u003e\u003ca\u003eFrame\u003c/a\u003e\u003c/code\u003e is deserialized.\n\u003c/p\u003e\u003cp\u003eNote that this function may produce zero or more errors or \u003ccode\u003e\u003ca\u003eFrame\u003c/a\u003e\u003c/code\u003es depending\n on the \u003ccode\u003e\u003ca\u003eDecoderState\u003c/a\u003e\u003c/code\u003e and input byte string.  Errors will be reported for\n checksum errors and \u003ccode\u003e\u003ca\u003eFrame\u003c/a\u003e\u003c/code\u003e deserialization failures.\n\u003c/p\u003e\u003cp\u003eHere's a slightly more complex example that \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003es two separate frames,\n runs each array of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es through \u003ccode\u003edecode\u003c/code\u003e and prints the result\n after running the \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e monad:\n\u003c/p\u003e\u003cpre\u003e import Control.Monad.State\n import qualified Data.ByteString as B\n import Network.Protocol.ZigBee.ZNet25\n\n main = putStrLn $ show $ evalState (mapM decode bs) initDecode\n   where\n     bs = concat $ map encode [atndCommand, txRequest]\n     atndCommand = ATCommand 1 (commandName \"ND\") B.empty\n     txRequest = ZigBeeTransmitRequest 2 addr nwaddr 0 0 $ B.singleton 0x55\n     addr = address $ B.pack [ 0xde, 0xad, 0xbe, 0xef, 0xba, 0xda, 0xba, 0xda ]\n     nwaddr = networkAddress $ B.pack [ 0x55, 0xaa ]\n\u003c/pre\u003e\u003cp\u003eThis prints:\n\u003c/p\u003e\u003cpre\u003e [[],[],[],[Right (ATCommand 1 \"ND\" \"\")],[],[],[],[Right (ZigBeeTransmitRequest 2 de:ad:be:ef:ba:da:ba:da 55:aa 0 0 \"U\")]]\n\u003c/pre\u003e\u003cp\u003eNote a few things:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Each call to \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e apparently produced four separate \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n    This is a by-product of the \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e implementation as described above.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003edecode\u003c/code\u003e was only able to produce a result once the final \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n    of each \u003ccode\u003e\u003ca\u003eFrame\u003c/a\u003e\u003c/code\u003e was processed.  In this case the result was\n    \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFrame\u003c/a\u003e\u003c/code\u003e.  If an error had occurred, we'd see \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n    instead.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Protocol.ZigBee.ZNet25.Encoder",
          "name": "decode",
          "package": "zigbee-znet25",
          "signature": "ByteString -\u003e m [Either String Frame]",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Encoder.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Decode ByteString in the State monad reversing the encode process Once frame delimiter byte is found the inner frame payload is unescaped the checksum is verified and finally Frame is deserialized Note that this function may produce zero or more errors or Frame depending on the DecoderState and input byte string Errors will be reported for checksum errors and Frame deserialization failures Here slightly more complex example that encode two separate frames runs each array of ByteString through decode and prints the result after running the State monad import Control.Monad.State import qualified Data.ByteString as import Network.Protocol.ZigBee.ZNet25 main putStrLn show evalState mapM decode bs initDecode where bs concat map encode atndCommand txRequest atndCommand ATCommand commandName ND B.empty txRequest ZigBeeTransmitRequest addr nwaddr B.singleton x55 addr address B.pack xde xad xbe xef xba xda xba xda nwaddr networkAddress B.pack x55 xaa This prints Right ATCommand ND Right ZigBeeTransmitRequest de ad be ef ba da ba da aa Note few things Each call to encode apparently produced four separate ByteString This is by-product of the encode implementation as described above decode was only able to produce result once the final ByteString of each Frame was processed In this case the result was Right Frame If an error had occurred we see Left String instead",
          "hierarchy": "Network Protocol ZigBee ZNet25 Encoder",
          "module": "Network.Protocol.ZigBee.ZNet25.Encoder",
          "name": "decode",
          "normalized": "ByteString-\u003ea[Either String Frame]",
          "package": "zigbee-znet25",
          "signature": "ByteString-\u003em[Either String Frame]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Encoder.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize a \u003ccode\u003e\u003ca\u003eFrame\u003c/a\u003e\u003c/code\u003e, escape control characters, and wrap the result with\n framing bytes.  Return an array of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e suitable for transmission\n to the XBee modem.\n\u003c/p\u003e\u003cp\u003eNote that this function returns an array of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.  Encoding\n takes place in a piece-wise manner and for efficiency's sake the individual\n bits are not concatenated to form a single \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.  Typically this is\n a non-issue however if you need a single \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e representation of the\n \u003ccode\u003e\u003ca\u003eFrame\u003c/a\u003e\u003c/code\u003e you can always obtain it by calling \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eHere's an example that illustrates \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e usage as well as the\n on-the-wire frame format:\n\u003c/p\u003e\u003cpre\u003e import qualified Data.ByteString as B\n import Network.Protocol.ZigBee.ZNet25\n import Text.Printf\n\n main = hexdump $ B.concat $ encode (ATCommand 0 (commandName \"ND\") B.empty)\n\n hexdump = mapM_ (putStr . printf \"%02x \") . B.unpack\n\u003c/pre\u003e\u003cp\u003eThis prints:\n\u003c/p\u003e\u003cpre\u003e 7e 00 04 08 00 4e 44 65\n\u003c/pre\u003e\u003cp\u003eThe leading \u003ccode\u003e7e\u003c/code\u003e byte is the frame delimiter.  This is followed by the 16-bit\n frame length (4 bytes in this case), that many bytes of data (the\n serialized \u003ccode\u003e\u003ca\u003eATCommand\u003c/a\u003e\u003c/code\u003e frame), and the final checksum byte.\n\u003c/p\u003e",
          "module": "Network.Protocol.ZigBee.ZNet25.Encoder",
          "name": "encode",
          "package": "zigbee-znet25",
          "signature": "Frame -\u003e [ByteString]",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Encoder.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Serialize Frame escape control characters and wrap the result with framing bytes Return an array of ByteString suitable for transmission to the XBee modem Note that this function returns an array of ByteString Encoding takes place in piece-wise manner and for efficiency sake the individual bits are not concatenated to form single ByteString Typically this is non-issue however if you need single ByteString representation of the Frame you can always obtain it by calling concat Here an example that illustrates encode usage as well as the on-the-wire frame format import qualified Data.ByteString as import Network.Protocol.ZigBee.ZNet25 import Text.Printf main hexdump B.concat encode ATCommand commandName ND B.empty hexdump mapM putStr printf B.unpack This prints The leading byte is the frame delimiter This is followed by the bit frame length bytes in this case that many bytes of data the serialized ATCommand frame and the final checksum byte",
          "hierarchy": "Network Protocol ZigBee ZNet25 Encoder",
          "module": "Network.Protocol.ZigBee.ZNet25.Encoder",
          "name": "encode",
          "normalized": "Frame-\u003e[ByteString]",
          "package": "zigbee-znet25",
          "signature": "Frame-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Encoder.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitial state needed to run \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Network.Protocol.ZigBee.ZNet25.Encoder",
          "name": "initDecode",
          "package": "zigbee-znet25",
          "signature": "DecoderState",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Encoder.html#initDecode",
          "type": "function"
        },
        "index": {
          "description": "Initial state needed to run decode in the State monad",
          "hierarchy": "Network Protocol ZigBee ZNet25 Encoder",
          "module": "Network.Protocol.ZigBee.ZNet25.Encoder",
          "name": "initDecode",
          "package": "zigbee-znet25",
          "partial": "Decode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Encoder.html#v:initDecode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eXBee ZNet 2.5 (ZigBee) frame types\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "Frame",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html",
          "type": "module"
        },
        "index": {
          "description": "XBee ZNet ZigBee frame types",
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "Frame",
          "package": "zigbee-znet25",
          "partial": "Frame",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll XBee ZNet 2.5 modules are identified by a unique (and static)\n 64-bit address.\n\u003c/p\u003e",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "Address",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Address",
          "type": "data"
        },
        "index": {
          "description": "All XBee ZNet modules are identified by unique and static bit address",
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "Address",
          "package": "zigbee-znet25",
          "partial": "Address",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:Address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "AnalogChannelMask",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#AnalogChannelMask",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "AnalogChannelMask",
          "package": "zigbee-znet25",
          "partial": "Analog Channel Mask",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:AnalogChannelMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "BroadcastRadius",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#BroadcastRadius",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "BroadcastRadius",
          "package": "zigbee-znet25",
          "partial": "Broadcast Radius",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:BroadcastRadius"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ClusterId",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#ClusterId",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ClusterId",
          "package": "zigbee-znet25",
          "partial": "Cluster Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:ClusterId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eAT\u003c/code\u003e command names.  These are limited to two bytes, e.g. \u003ccode\u003eND\u003c/code\u003e for\n neightbor discovery.\n\u003c/p\u003e",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "CommandName",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#CommandName",
          "type": "data"
        },
        "index": {
          "description": "AT command names These are limited to two bytes e.g ND for neightbor discovery",
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "CommandName",
          "package": "zigbee-znet25",
          "partial": "Command Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:CommandName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "CommandOptions",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#CommandOptions",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "CommandOptions",
          "package": "zigbee-znet25",
          "partial": "Command Options",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:CommandOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "CommandStatus",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#CommandStatus",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "CommandStatus",
          "package": "zigbee-znet25",
          "partial": "Command Status",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:CommandStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "DeliveryStatus",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#DeliveryStatus",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "DeliveryStatus",
          "package": "zigbee-znet25",
          "partial": "Delivery Status",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:DeliveryStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "DestinationEndpoint",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#DestinationEndpoint",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "DestinationEndpoint",
          "package": "zigbee-znet25",
          "partial": "Destination Endpoint",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:DestinationEndpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "DeviceType",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#DeviceType",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "DeviceType",
          "package": "zigbee-znet25",
          "partial": "Device Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:DeviceType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "DigitalChannelMask",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#DigitalChannelMask",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "DigitalChannelMask",
          "package": "zigbee-znet25",
          "partial": "Digital Channel Mask",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:DigitalChannelMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "DiscoveryStatus",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#DiscoveryStatus",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "DiscoveryStatus",
          "package": "zigbee-znet25",
          "partial": "Discovery Status",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:DiscoveryStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAPI frame types.  See Section 6 of the XBee ZNet 2.5 Product Manual\n (\u003ca\u003eftp://ftp1.digi.com/support/documentation/90000866_C.pdf\u003c/a\u003e)\n for frame type-specific documentation.\n\u003c/p\u003e",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "Frame",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
          "type": "data"
        },
        "index": {
          "description": "API frame types See Section of the XBee ZNet Product Manual ftp ftp1.digi.com support documentation C.pdf for frame type-specific documentation",
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "Frame",
          "package": "zigbee-znet25",
          "partial": "Frame",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:Frame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "FrameId",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#FrameId",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "FrameId",
          "package": "zigbee-znet25",
          "partial": "Frame Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:FrameId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ManufacturerId",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#ManufacturerId",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ManufacturerId",
          "package": "zigbee-znet25",
          "partial": "Manufacturer Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:ManufacturerId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ModemStatusByte",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#ModemStatusByte",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ModemStatusByte",
          "package": "zigbee-znet25",
          "partial": "Modem Status Byte",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:ModemStatusByte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen XBee ZNet 2.5 modules join the network they are assigned a 16-bit\n address.  Note that unlike \u003ccode\u003e\u003ca\u003eAddress\u003c/a\u003e\u003c/code\u003e which is unique and static for a\n given node, a node's \u003ccode\u003eNetworkAddress\u003c/code\u003e is dynamic and may change over\n time.\n\u003c/p\u003e",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "NetworkAddress",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#NetworkAddress",
          "type": "data"
        },
        "index": {
          "description": "When XBee ZNet modules join the network they are assigned bit address Note that unlike Address which is unique and static for given node node NetworkAddress is dynamic and may change over time",
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "NetworkAddress",
          "package": "zigbee-znet25",
          "partial": "Network Address",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:NetworkAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ParentNetworkAddress",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#ParentNetworkAddress",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ParentNetworkAddress",
          "package": "zigbee-znet25",
          "partial": "Parent Network Address",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:ParentNetworkAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ProfileId",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#ProfileId",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ProfileId",
          "package": "zigbee-znet25",
          "partial": "Profile Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:ProfileId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ReceiveOptions",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#ReceiveOptions",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ReceiveOptions",
          "package": "zigbee-znet25",
          "partial": "Receive Options",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:ReceiveOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "RemoteAddress",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#RemoteAddress",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "RemoteAddress",
          "package": "zigbee-znet25",
          "partial": "Remote Address",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:RemoteAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "RemoteNetworkAddress",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#RemoteNetworkAddress",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "RemoteNetworkAddress",
          "package": "zigbee-znet25",
          "partial": "Remote Network Address",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:RemoteNetworkAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "SampleCount",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#SampleCount",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "SampleCount",
          "package": "zigbee-znet25",
          "partial": "Sample Count",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:SampleCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "SourceAction",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#SourceAction",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "SourceAction",
          "package": "zigbee-znet25",
          "partial": "Source Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:SourceAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "SourceEndpoint",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#SourceEndpoint",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "SourceEndpoint",
          "package": "zigbee-znet25",
          "partial": "Source Endpoint",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:SourceEndpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "TransmitOptions",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#TransmitOptions",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "TransmitOptions",
          "package": "zigbee-znet25",
          "partial": "Transmit Options",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:TransmitOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "TransmitRetryCount",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#TransmitRetryCount",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "TransmitRetryCount",
          "package": "zigbee-znet25",
          "partial": "Transmit Retry Count",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:TransmitRetryCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "XBeeSensorMask",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#XBeeSensorMask",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "XBeeSensorMask",
          "package": "zigbee-znet25",
          "partial": "XBee Sensor Mask",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:XBeeSensorMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ATCommand",
          "package": "zigbee-znet25",
          "signature": "ATCommand FrameId CommandName ByteString",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ATCommand",
          "package": "zigbee-znet25",
          "partial": "ATCommand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:ATCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ATCommandQueueParameterValue",
          "package": "zigbee-znet25",
          "signature": "ATCommandQueueParameterValue FrameId CommandName ByteString",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ATCommandQueueParameterValue",
          "package": "zigbee-znet25",
          "partial": "ATCommand Queue Parameter Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:ATCommandQueueParameterValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ATCommandResponse",
          "package": "zigbee-znet25",
          "signature": "ATCommandResponse FrameId CommandName CommandStatus ByteString",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ATCommandResponse",
          "package": "zigbee-znet25",
          "partial": "ATCommand Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:ATCommandResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ApiIdNotImplemented",
          "package": "zigbee-znet25",
          "signature": "ApiIdNotImplemented Word8",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ApiIdNotImplemented",
          "package": "zigbee-znet25",
          "partial": "Api Id Not Implemented",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:ApiIdNotImplemented"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ExplicitAddressingZigBeeCommandFrame",
          "package": "zigbee-znet25",
          "signature": "ExplicitAddressingZigBeeCommandFrame FrameId Address NetworkAddress SourceEndpoint DestinationEndpoint ClusterId ProfileId BroadcastRadius TransmitOptions ByteString",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ExplicitAddressingZigBeeCommandFrame",
          "package": "zigbee-znet25",
          "partial": "Explicit Addressing Zig Bee Command Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:ExplicitAddressingZigBeeCommandFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ModemStatus",
          "package": "zigbee-znet25",
          "signature": "ModemStatus ModemStatusByte",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ModemStatus",
          "package": "zigbee-znet25",
          "partial": "Modem Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:ModemStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "NodeIdentificationIndicator",
          "package": "zigbee-znet25",
          "signature": "NodeIdentificationIndicator Address NetworkAddress ReceiveOptions RemoteNetworkAddress RemoteAddress String ParentNetworkAddress DeviceType SourceAction ProfileId ManufacturerId",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "NodeIdentificationIndicator",
          "package": "zigbee-znet25",
          "partial": "Node Identification Indicator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:NodeIdentificationIndicator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "RemoteCommandRequest",
          "package": "zigbee-znet25",
          "signature": "RemoteCommandRequest FrameId Address NetworkAddress CommandOptions CommandName ByteString",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "RemoteCommandRequest",
          "package": "zigbee-znet25",
          "partial": "Remote Command Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:RemoteCommandRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "RemoteCommandResponse",
          "package": "zigbee-znet25",
          "signature": "RemoteCommandResponse FrameId Address NetworkAddress CommandName CommandStatus ByteString",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "RemoteCommandResponse",
          "package": "zigbee-znet25",
          "partial": "Remote Command Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:RemoteCommandResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "XBeeSensorReadIndicator",
          "package": "zigbee-znet25",
          "signature": "XBeeSensorReadIndicator Address NetworkAddress ReceiveOptions XBeeSensorMask ByteString",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "XBeeSensorReadIndicator",
          "package": "zigbee-znet25",
          "partial": "XBee Sensor Read Indicator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:XBeeSensorReadIndicator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ZigBeeExplicitRxIndicator",
          "package": "zigbee-znet25",
          "signature": "ZigBeeExplicitRxIndicator Address NetworkAddress SourceEndpoint DestinationEndpoint ClusterId ProfileId ReceiveOptions ByteString",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ZigBeeExplicitRxIndicator",
          "package": "zigbee-znet25",
          "partial": "Zig Bee Explicit Rx Indicator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:ZigBeeExplicitRxIndicator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ZigBeeIODataSampleIndicator",
          "package": "zigbee-znet25",
          "signature": "ZigBeeIODataSampleIndicator Address NetworkAddress ReceiveOptions SampleCount DigitalChannelMask AnalogChannelMask ByteString",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ZigBeeIODataSampleIndicator",
          "package": "zigbee-znet25",
          "partial": "Zig Bee IOData Sample Indicator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:ZigBeeIODataSampleIndicator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ZigBeeReceivePacket",
          "package": "zigbee-znet25",
          "signature": "ZigBeeReceivePacket Address NetworkAddress ReceiveOptions ByteString",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ZigBeeReceivePacket",
          "package": "zigbee-znet25",
          "partial": "Zig Bee Receive Packet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:ZigBeeReceivePacket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ZigBeeTransmitRequest",
          "package": "zigbee-znet25",
          "signature": "ZigBeeTransmitRequest FrameId Address NetworkAddress BroadcastRadius TransmitOptions ByteString",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ZigBeeTransmitRequest",
          "package": "zigbee-znet25",
          "partial": "Zig Bee Transmit Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:ZigBeeTransmitRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ZigBeeTransmitStatus",
          "package": "zigbee-znet25",
          "signature": "ZigBeeTransmitStatus FrameId NetworkAddress TransmitRetryCount DeliveryStatus DiscoveryStatus",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "ZigBeeTransmitStatus",
          "package": "zigbee-znet25",
          "partial": "Zig Bee Transmit Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:ZigBeeTransmitStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an \u003ccode\u003eAddress\u003c/code\u003e.  Beware that this function will \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if\n the address is not exactly eight bytes long.\n\u003c/p\u003e",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "address",
          "package": "zigbee-znet25",
          "signature": "ByteString -\u003e Address",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#address",
          "type": "function"
        },
        "index": {
          "description": "Construct an Address Beware that this function will error if the address is not exactly eight bytes long",
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "address",
          "normalized": "ByteString-\u003eAddress",
          "package": "zigbee-znet25",
          "signature": "ByteString-\u003eAddress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003eCommandName\u003c/code\u003e.  Beware that this function will \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if\n the name is not exactly two bytes long.\n\u003c/p\u003e",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "commandName",
          "package": "zigbee-znet25",
          "signature": "String -\u003e CommandName",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#commandName",
          "type": "function"
        },
        "index": {
          "description": "Construct CommandName Beware that this function will error if the name is not exactly two bytes long",
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "commandName",
          "normalized": "String-\u003eCommandName",
          "package": "zigbee-znet25",
          "partial": "Name",
          "signature": "String-\u003eCommandName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:commandName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003eNetworkAddress\u003c/code\u003e.  Beware that this function will \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if\n the address is not exactly two bytes long.\n\u003c/p\u003e",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "networkAddress",
          "package": "zigbee-znet25",
          "signature": "ByteString -\u003e NetworkAddress",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#networkAddress",
          "type": "function"
        },
        "index": {
          "description": "Construct NetworkAddress Beware that this function will error if the address is not exactly two bytes long",
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "networkAddress",
          "normalized": "ByteString-\u003eNetworkAddress",
          "package": "zigbee-znet25",
          "partial": "Address",
          "signature": "ByteString-\u003eNetworkAddress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:networkAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeconstruct an \u003ccode\u003eAddress\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "unAddress",
          "package": "zigbee-znet25",
          "signature": "Address -\u003e ByteString",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#unAddress",
          "type": "function"
        },
        "index": {
          "description": "Deconstruct an Address",
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "unAddress",
          "normalized": "Address-\u003eByteString",
          "package": "zigbee-znet25",
          "partial": "Address",
          "signature": "Address-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:unAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeconstruct a \u003ccode\u003eCommandName\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "unCommandName",
          "package": "zigbee-znet25",
          "signature": "CommandName -\u003e String",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#unCommandName",
          "type": "function"
        },
        "index": {
          "description": "Deconstruct CommandName",
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "unCommandName",
          "normalized": "CommandName-\u003eString",
          "package": "zigbee-znet25",
          "partial": "Command Name",
          "signature": "CommandName-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:unCommandName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeconstruct a \u003ccode\u003eNetworkAddress\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "unNetworkAddress",
          "package": "zigbee-znet25",
          "signature": "NetworkAddress -\u003e ByteString",
          "source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#unNetworkAddress",
          "type": "function"
        },
        "index": {
          "description": "Deconstruct NetworkAddress",
          "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
          "module": "Network.Protocol.ZigBee.ZNet25.Frame",
          "name": "unNetworkAddress",
          "normalized": "NetworkAddress-\u003eByteString",
          "package": "zigbee-znet25",
          "partial": "Network Address",
          "signature": "NetworkAddress-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:unNetworkAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA protocol library enabling wireless communications via\n XBee/XBee-PRO (ZibBee) ZNet 2.5 RF modules.\n\u003c/p\u003e\u003cp\u003eThe library performs binary encoding/decoding, on-the-wire framing,\n and error checking of control and data \u003ca\u003eAPI\u003c/a\u003e frames.  In other words\n the library expects to communicate with an XBee modem that has AP\n parameter = 2, indicating API frames with HDLC-like escape characters.\n This mode provides for 8-bit transparent operation and is described in\n Section 6 of \u003ca\u003eftp://ftp1.digi.com/support/documentation/90000866_C.pdf\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe library code is 100% pure; nothing here depends on the\n IO monad and no particular modem device is assumed.  The code\n depends on the \u003ccode\u003ecereal\u003c/code\u003e package for serialization but is otherwise\n pretty standard.  The test suite is based on \u003ccode\u003eQuickCheck\u003c/code\u003e properties.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Protocol.ZigBee.ZNet25",
          "name": "ZNet25",
          "package": "zigbee-znet25",
          "source": "src/Network-Protocol-ZigBee-ZNet25.html",
          "type": "module"
        },
        "index": {
          "description": "protocol library enabling wireless communications via XBee XBee-PRO ZibBee ZNet RF modules The library performs binary encoding decoding on-the-wire framing and error checking of control and data API frames In other words the library expects to communicate with an XBee modem that has AP parameter indicating API frames with HDLC-like escape characters This mode provides for bit transparent operation and is described in Section of ftp ftp1.digi.com support documentation C.pdf The library code is pure nothing here depends on the IO monad and no particular modem device is assumed The code depends on the cereal package for serialization but is otherwise pretty standard The test suite is based on QuickCheck properties",
          "hierarchy": "Network Protocol ZigBee ZNet25",
          "module": "Network.Protocol.ZigBee.ZNet25",
          "name": "ZNet25",
          "package": "zigbee-znet25",
          "partial": "ZNet",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25.html#"
      }
    }
  ]
]