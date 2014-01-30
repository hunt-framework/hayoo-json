[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Encoder.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eXBee ZNet 2.5 (ZigBee) frame encoder/decoder functions\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Encoder",
        "fct-package": "zigbee-znet25",
        "fct-signature": "module",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Encoder.html",
        "fct-type": "module",
        "title": "Encoder"
      },
      "index": {
        "description": "XBee ZNet ZigBee frame encoder decoder functions",
        "hierarchy": "Network Protocol ZigBee ZNet25 Encoder",
        "module": "Network.Protocol.ZigBee.ZNet25.Encoder",
        "name": "Encoder",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Encoder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Encoder.html#t:DecoderState",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e runs in the \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e monad.  \u003ccode\u003eDecoderState\u003c/code\u003e tracks the\n decoder's in/out-of frame state, current frame length, and other state\n variables.\n\u003c/p\u003e",
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Encoder",
        "fct-package": "zigbee-znet25",
        "fct-signature": "data",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Encoder.html#DecoderState",
        "fct-type": "data",
        "title": "DecoderState"
      },
      "index": {
        "description": "decode runs in the State monad DecoderState tracks the decoder in out-of frame state current frame length and other state variables",
        "hierarchy": "Network Protocol ZigBee ZNet25 Encoder",
        "module": "Network.Protocol.ZigBee.ZNet25.Encoder",
        "name": "DecoderState",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Decoder State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Encoder.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e monad, reversing the \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e\n process.  Once a frame delimiter byte is found, the inner frame payload is\n unescaped, the checksum is verified, and finally a \u003ccode\u003e\u003ca\u003eFrame\u003c/a\u003e\u003c/code\u003e is deserialized.\n\u003c/p\u003e\u003cp\u003eNote that this function may produce zero or more errors or \u003ccode\u003e\u003ca\u003eFrame\u003c/a\u003e\u003c/code\u003es depending\n on the \u003ccode\u003e\u003ca\u003eDecoderState\u003c/a\u003e\u003c/code\u003e and input byte string.  Errors will be reported for\n checksum errors and \u003ccode\u003e\u003ca\u003eFrame\u003c/a\u003e\u003c/code\u003e deserialization failures.\n\u003c/p\u003e\u003cp\u003eHere's a slightly more complex example that \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003es two separate frames,\n runs each array of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es through \u003ccode\u003edecode\u003c/code\u003e and prints the result\n after running the \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e monad:\n\u003c/p\u003e\u003cpre\u003e import Control.Monad.State\n import qualified Data.ByteString as B\n import Network.Protocol.ZigBee.ZNet25\n\n main = putStrLn $ show $ evalState (mapM decode bs) initDecode\n   where\n     bs = concat $ map encode [atndCommand, txRequest]\n     atndCommand = ATCommand 1 (commandName \"ND\") B.empty\n     txRequest = ZigBeeTransmitRequest 2 addr nwaddr 0 0 $ B.singleton 0x55\n     addr = address $ B.pack [ 0xde, 0xad, 0xbe, 0xef, 0xba, 0xda, 0xba, 0xda ]\n     nwaddr = networkAddress $ B.pack [ 0x55, 0xaa ]\n\u003c/pre\u003e\u003cp\u003eThis prints:\n\u003c/p\u003e\u003cpre\u003e [[],[],[],[Right (ATCommand 1 \"ND\" \"\")],[],[],[],[Right (ZigBeeTransmitRequest 2 de:ad:be:ef:ba:da:ba:da 55:aa 0 0 \"U\")]]\n\u003c/pre\u003e\u003cp\u003eNote a few things:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Each call to \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e apparently produced four separate \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n    This is a by-product of the \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e implementation as described above.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003edecode\u003c/code\u003e was only able to produce a result once the final \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n    of each \u003ccode\u003e\u003ca\u003eFrame\u003c/a\u003e\u003c/code\u003e was processed.  In this case the result was\n    \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFrame\u003c/a\u003e\u003c/code\u003e.  If an error had occurred, we'd see \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n    instead.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Encoder",
        "fct-package": "zigbee-znet25",
        "fct-signature": "ByteString -\u003e m [Either String Frame]",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Encoder.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Decode ByteString in the State monad reversing the encode process Once frame delimiter byte is found the inner frame payload is unescaped the checksum is verified and finally Frame is deserialized Note that this function may produce zero or more errors or Frame depending on the DecoderState and input byte string Errors will be reported for checksum errors and Frame deserialization failures Here slightly more complex example that encode two separate frames runs each array of ByteString through decode and prints the result after running the State monad import Control.Monad.State import qualified Data.ByteString as import Network.Protocol.ZigBee.ZNet25 main putStrLn show evalState mapM decode bs initDecode where bs concat map encode atndCommand txRequest atndCommand ATCommand commandName ND B.empty txRequest ZigBeeTransmitRequest addr nwaddr B.singleton x55 addr address B.pack xde xad xbe xef xba xda xba xda nwaddr networkAddress B.pack x55 xaa This prints Right ATCommand ND Right ZigBeeTransmitRequest de ad be ef ba da ba da aa Note few things Each call to encode apparently produced four separate ByteString This is by-product of the encode implementation as described above decode was only able to produce result once the final ByteString of each Frame was processed In this case the result was Right Frame If an error had occurred we see Left String instead",
        "hierarchy": "Network Protocol ZigBee ZNet25 Encoder",
        "module": "Network.Protocol.ZigBee.ZNet25.Encoder",
        "name": "decode",
        "normalized": "ByteString-\u003ea[Either String Frame]",
        "package": "zigbee-znet25",
        "partial": "",
        "signature": "ByteString-\u003em[Either String Frame]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Encoder.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a \u003ccode\u003e\u003ca\u003eFrame\u003c/a\u003e\u003c/code\u003e, escape control characters, and wrap the result with\n framing bytes.  Return an array of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e suitable for transmission\n to the XBee modem.\n\u003c/p\u003e\u003cp\u003eNote that this function returns an array of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.  Encoding\n takes place in a piece-wise manner and for efficiency's sake the individual\n bits are not concatenated to form a single \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.  Typically this is\n a non-issue however if you need a single \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e representation of the\n \u003ccode\u003e\u003ca\u003eFrame\u003c/a\u003e\u003c/code\u003e you can always obtain it by calling \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eHere's an example that illustrates \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e usage as well as the\n on-the-wire frame format:\n\u003c/p\u003e\u003cpre\u003e import qualified Data.ByteString as B\n import Network.Protocol.ZigBee.ZNet25\n import Text.Printf\n\n main = hexdump $ B.concat $ encode (ATCommand 0 (commandName \"ND\") B.empty)\n\n hexdump = mapM_ (putStr . printf \"%02x \") . B.unpack\n\u003c/pre\u003e\u003cp\u003eThis prints:\n\u003c/p\u003e\u003cpre\u003e 7e 00 04 08 00 4e 44 65\n\u003c/pre\u003e\u003cp\u003eThe leading \u003ccode\u003e7e\u003c/code\u003e byte is the frame delimiter.  This is followed by the 16-bit\n frame length (4 bytes in this case), that many bytes of data (the\n serialized \u003ccode\u003e\u003ca\u003eATCommand\u003c/a\u003e\u003c/code\u003e frame), and the final checksum byte.\n\u003c/p\u003e",
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Encoder",
        "fct-package": "zigbee-znet25",
        "fct-signature": "Frame -\u003e [ByteString]",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Encoder.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Serialize Frame escape control characters and wrap the result with framing bytes Return an array of ByteString suitable for transmission to the XBee modem Note that this function returns an array of ByteString Encoding takes place in piece-wise manner and for efficiency sake the individual bits are not concatenated to form single ByteString Typically this is non-issue however if you need single ByteString representation of the Frame you can always obtain it by calling concat Here an example that illustrates encode usage as well as the on-the-wire frame format import qualified Data.ByteString as import Network.Protocol.ZigBee.ZNet25 import Text.Printf main hexdump B.concat encode ATCommand commandName ND B.empty hexdump mapM putStr printf B.unpack This prints The leading byte is the frame delimiter This is followed by the bit frame length bytes in this case that many bytes of data the serialized ATCommand frame and the final checksum byte",
        "hierarchy": "Network Protocol ZigBee ZNet25 Encoder",
        "module": "Network.Protocol.ZigBee.ZNet25.Encoder",
        "name": "encode",
        "normalized": "Frame-\u003e[ByteString]",
        "package": "zigbee-znet25",
        "partial": "",
        "signature": "Frame-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Encoder.html#v:initDecode",
      "description": {
        "fct-descr": "\u003cp\u003eInitial state needed to run \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Encoder",
        "fct-package": "zigbee-znet25",
        "fct-signature": "DecoderState",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Encoder.html#initDecode",
        "fct-type": "function",
        "title": "initDecode"
      },
      "index": {
        "description": "Initial state needed to run decode in the State monad",
        "hierarchy": "Network Protocol ZigBee ZNet25 Encoder",
        "module": "Network.Protocol.ZigBee.ZNet25.Encoder",
        "name": "initDecode",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Decode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eXBee ZNet 2.5 (ZigBee) frame types\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "module",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html",
        "fct-type": "module",
        "title": "Frame"
      },
      "index": {
        "description": "XBee ZNet ZigBee frame types",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "Frame",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Frame",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:Address",
      "description": {
        "fct-descr": "\u003cp\u003eAll XBee ZNet 2.5 modules are identified by a unique (and static)\n 64-bit address.\n\u003c/p\u003e",
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "data",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Address",
        "fct-type": "data",
        "title": "Address"
      },
      "index": {
        "description": "All XBee ZNet modules are identified by unique and static bit address",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "Address",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:AnalogChannelMask",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "type",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#AnalogChannelMask",
        "fct-type": "type",
        "title": "AnalogChannelMask"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "AnalogChannelMask",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Analog Channel Mask",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:BroadcastRadius",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "type",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#BroadcastRadius",
        "fct-type": "type",
        "title": "BroadcastRadius"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "BroadcastRadius",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Broadcast Radius",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:ClusterId",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "type",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#ClusterId",
        "fct-type": "type",
        "title": "ClusterId"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "ClusterId",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Cluster Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:CommandName",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eAT\u003c/code\u003e command names.  These are limited to two bytes, e.g. \u003ccode\u003eND\u003c/code\u003e for\n neightbor discovery.\n\u003c/p\u003e",
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "data",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#CommandName",
        "fct-type": "data",
        "title": "CommandName"
      },
      "index": {
        "description": "AT command names These are limited to two bytes e.g ND for neightbor discovery",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "CommandName",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Command Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:CommandOptions",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "type",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#CommandOptions",
        "fct-type": "type",
        "title": "CommandOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "CommandOptions",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Command Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:CommandStatus",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "type",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#CommandStatus",
        "fct-type": "type",
        "title": "CommandStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "CommandStatus",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Command Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:DeliveryStatus",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "type",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#DeliveryStatus",
        "fct-type": "type",
        "title": "DeliveryStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "DeliveryStatus",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Delivery Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:DestinationEndpoint",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "type",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#DestinationEndpoint",
        "fct-type": "type",
        "title": "DestinationEndpoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "DestinationEndpoint",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Destination Endpoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:DeviceType",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "type",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#DeviceType",
        "fct-type": "type",
        "title": "DeviceType"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "DeviceType",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Device Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:DigitalChannelMask",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "type",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#DigitalChannelMask",
        "fct-type": "type",
        "title": "DigitalChannelMask"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "DigitalChannelMask",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Digital Channel Mask",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:DiscoveryStatus",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "type",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#DiscoveryStatus",
        "fct-type": "type",
        "title": "DiscoveryStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "DiscoveryStatus",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Discovery Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:Frame",
      "description": {
        "fct-descr": "\u003cp\u003eAPI frame types.  See Section 6 of the XBee ZNet 2.5 Product Manual\n (\u003ca\u003eftp://ftp1.digi.com/support/documentation/90000866_C.pdf\u003c/a\u003e)\n for frame type-specific documentation.\n\u003c/p\u003e",
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "data",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
        "fct-type": "data",
        "title": "Frame"
      },
      "index": {
        "description": "API frame types See Section of the XBee ZNet Product Manual ftp ftp1.digi.com support documentation C.pdf for frame type-specific documentation",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "Frame",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Frame",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:FrameId",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "type",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#FrameId",
        "fct-type": "type",
        "title": "FrameId"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "FrameId",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Frame Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:ManufacturerId",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "type",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#ManufacturerId",
        "fct-type": "type",
        "title": "ManufacturerId"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "ManufacturerId",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Manufacturer Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:ModemStatusByte",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "type",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#ModemStatusByte",
        "fct-type": "type",
        "title": "ModemStatusByte"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "ModemStatusByte",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Modem Status Byte",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:NetworkAddress",
      "description": {
        "fct-descr": "\u003cp\u003eWhen XBee ZNet 2.5 modules join the network they are assigned a 16-bit\n address.  Note that unlike \u003ccode\u003e\u003ca\u003eAddress\u003c/a\u003e\u003c/code\u003e which is unique and static for a\n given node, a node's \u003ccode\u003eNetworkAddress\u003c/code\u003e is dynamic and may change over\n time.\n\u003c/p\u003e",
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "data",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#NetworkAddress",
        "fct-type": "data",
        "title": "NetworkAddress"
      },
      "index": {
        "description": "When XBee ZNet modules join the network they are assigned bit address Note that unlike Address which is unique and static for given node node NetworkAddress is dynamic and may change over time",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "NetworkAddress",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Network Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:ParentNetworkAddress",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "type",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#ParentNetworkAddress",
        "fct-type": "type",
        "title": "ParentNetworkAddress"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "ParentNetworkAddress",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Parent Network Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:ProfileId",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "type",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#ProfileId",
        "fct-type": "type",
        "title": "ProfileId"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "ProfileId",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Profile Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:ReceiveOptions",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "type",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#ReceiveOptions",
        "fct-type": "type",
        "title": "ReceiveOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "ReceiveOptions",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Receive Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:RemoteAddress",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "type",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#RemoteAddress",
        "fct-type": "type",
        "title": "RemoteAddress"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "RemoteAddress",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Remote Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:RemoteNetworkAddress",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "type",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#RemoteNetworkAddress",
        "fct-type": "type",
        "title": "RemoteNetworkAddress"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "RemoteNetworkAddress",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Remote Network Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:SampleCount",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "type",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#SampleCount",
        "fct-type": "type",
        "title": "SampleCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "SampleCount",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Sample Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:SourceAction",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "type",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#SourceAction",
        "fct-type": "type",
        "title": "SourceAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "SourceAction",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Source Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:SourceEndpoint",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "type",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#SourceEndpoint",
        "fct-type": "type",
        "title": "SourceEndpoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "SourceEndpoint",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Source Endpoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:TransmitOptions",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "type",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#TransmitOptions",
        "fct-type": "type",
        "title": "TransmitOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "TransmitOptions",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Transmit Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:TransmitRetryCount",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "type",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#TransmitRetryCount",
        "fct-type": "type",
        "title": "TransmitRetryCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "TransmitRetryCount",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Transmit Retry Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#t:XBeeSensorMask",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "type",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#XBeeSensorMask",
        "fct-type": "type",
        "title": "XBeeSensorMask"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "XBeeSensorMask",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "XBee Sensor Mask",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:ATCommand",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "ATCommand FrameId CommandName ByteString",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
        "fct-type": "function",
        "title": "ATCommand"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "ATCommand",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "ATCommand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:ATCommandQueueParameterValue",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "ATCommandQueueParameterValue FrameId CommandName ByteString",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
        "fct-type": "function",
        "title": "ATCommandQueueParameterValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "ATCommandQueueParameterValue",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "ATCommand Queue Parameter Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:ATCommandResponse",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "ATCommandResponse FrameId CommandName CommandStatus ByteString",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
        "fct-type": "function",
        "title": "ATCommandResponse"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "ATCommandResponse",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "ATCommand Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:ApiIdNotImplemented",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "ApiIdNotImplemented Word8",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
        "fct-type": "function",
        "title": "ApiIdNotImplemented"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "ApiIdNotImplemented",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Api Id Not Implemented",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:ExplicitAddressingZigBeeCommandFrame",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "ExplicitAddressingZigBeeCommandFrame FrameId Address NetworkAddress SourceEndpoint DestinationEndpoint ClusterId ProfileId BroadcastRadius TransmitOptions ByteString",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
        "fct-type": "function",
        "title": "ExplicitAddressingZigBeeCommandFrame"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "ExplicitAddressingZigBeeCommandFrame",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Explicit Addressing Zig Bee Command Frame",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:ModemStatus",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "ModemStatus ModemStatusByte",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
        "fct-type": "function",
        "title": "ModemStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "ModemStatus",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Modem Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:NodeIdentificationIndicator",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "NodeIdentificationIndicator Address NetworkAddress ReceiveOptions RemoteNetworkAddress RemoteAddress String ParentNetworkAddress DeviceType SourceAction ProfileId ManufacturerId",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
        "fct-type": "function",
        "title": "NodeIdentificationIndicator"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "NodeIdentificationIndicator",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Node Identification Indicator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:RemoteCommandRequest",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "RemoteCommandRequest FrameId Address NetworkAddress CommandOptions CommandName ByteString",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
        "fct-type": "function",
        "title": "RemoteCommandRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "RemoteCommandRequest",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Remote Command Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:RemoteCommandResponse",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "RemoteCommandResponse FrameId Address NetworkAddress CommandName CommandStatus ByteString",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
        "fct-type": "function",
        "title": "RemoteCommandResponse"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "RemoteCommandResponse",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Remote Command Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:XBeeSensorReadIndicator",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "XBeeSensorReadIndicator Address NetworkAddress ReceiveOptions XBeeSensorMask ByteString",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
        "fct-type": "function",
        "title": "XBeeSensorReadIndicator"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "XBeeSensorReadIndicator",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "XBee Sensor Read Indicator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:ZigBeeExplicitRxIndicator",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "ZigBeeExplicitRxIndicator Address NetworkAddress SourceEndpoint DestinationEndpoint ClusterId ProfileId ReceiveOptions ByteString",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
        "fct-type": "function",
        "title": "ZigBeeExplicitRxIndicator"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "ZigBeeExplicitRxIndicator",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Zig Bee Explicit Rx Indicator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:ZigBeeIODataSampleIndicator",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "ZigBeeIODataSampleIndicator Address NetworkAddress ReceiveOptions SampleCount DigitalChannelMask AnalogChannelMask ByteString",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
        "fct-type": "function",
        "title": "ZigBeeIODataSampleIndicator"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "ZigBeeIODataSampleIndicator",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Zig Bee IOData Sample Indicator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:ZigBeeReceivePacket",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "ZigBeeReceivePacket Address NetworkAddress ReceiveOptions ByteString",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
        "fct-type": "function",
        "title": "ZigBeeReceivePacket"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "ZigBeeReceivePacket",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Zig Bee Receive Packet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:ZigBeeTransmitRequest",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "ZigBeeTransmitRequest FrameId Address NetworkAddress BroadcastRadius TransmitOptions ByteString",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
        "fct-type": "function",
        "title": "ZigBeeTransmitRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "ZigBeeTransmitRequest",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Zig Bee Transmit Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:ZigBeeTransmitStatus",
      "description": {
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "ZigBeeTransmitStatus FrameId NetworkAddress TransmitRetryCount DeliveryStatus DiscoveryStatus",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#Frame",
        "fct-type": "function",
        "title": "ZigBeeTransmitStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "ZigBeeTransmitStatus",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "Zig Bee Transmit Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:address",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an \u003ccode\u003eAddress\u003c/code\u003e.  Beware that this function will \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if\n the address is not exactly eight bytes long.\n\u003c/p\u003e",
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "ByteString -\u003e Address",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#address",
        "fct-type": "function",
        "title": "address"
      },
      "index": {
        "description": "Construct an Address Beware that this function will error if the address is not exactly eight bytes long",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "address",
        "normalized": "ByteString-\u003eAddress",
        "package": "zigbee-znet25",
        "partial": "",
        "signature": "ByteString-\u003eAddress"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:commandName",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003eCommandName\u003c/code\u003e.  Beware that this function will \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if\n the name is not exactly two bytes long.\n\u003c/p\u003e",
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "String -\u003e CommandName",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#commandName",
        "fct-type": "function",
        "title": "commandName"
      },
      "index": {
        "description": "Construct CommandName Beware that this function will error if the name is not exactly two bytes long",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "commandName",
        "normalized": "String-\u003eCommandName",
        "package": "zigbee-znet25",
        "partial": "Name",
        "signature": "String-\u003eCommandName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:networkAddress",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003eNetworkAddress\u003c/code\u003e.  Beware that this function will \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if\n the address is not exactly two bytes long.\n\u003c/p\u003e",
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "ByteString -\u003e NetworkAddress",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#networkAddress",
        "fct-type": "function",
        "title": "networkAddress"
      },
      "index": {
        "description": "Construct NetworkAddress Beware that this function will error if the address is not exactly two bytes long",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "networkAddress",
        "normalized": "ByteString-\u003eNetworkAddress",
        "package": "zigbee-znet25",
        "partial": "Address",
        "signature": "ByteString-\u003eNetworkAddress"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:unAddress",
      "description": {
        "fct-descr": "\u003cp\u003eDeconstruct an \u003ccode\u003eAddress\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "Address -\u003e ByteString",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#unAddress",
        "fct-type": "function",
        "title": "unAddress"
      },
      "index": {
        "description": "Deconstruct an Address",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "unAddress",
        "normalized": "Address-\u003eByteString",
        "package": "zigbee-znet25",
        "partial": "Address",
        "signature": "Address-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:unCommandName",
      "description": {
        "fct-descr": "\u003cp\u003eDeconstruct a \u003ccode\u003eCommandName\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "CommandName -\u003e String",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#unCommandName",
        "fct-type": "function",
        "title": "unCommandName"
      },
      "index": {
        "description": "Deconstruct CommandName",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "unCommandName",
        "normalized": "CommandName-\u003eString",
        "package": "zigbee-znet25",
        "partial": "Command Name",
        "signature": "CommandName-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25-Frame.html#v:unNetworkAddress",
      "description": {
        "fct-descr": "\u003cp\u003eDeconstruct a \u003ccode\u003eNetworkAddress\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "fct-package": "zigbee-znet25",
        "fct-signature": "NetworkAddress -\u003e ByteString",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25-Frame.html#unNetworkAddress",
        "fct-type": "function",
        "title": "unNetworkAddress"
      },
      "index": {
        "description": "Deconstruct NetworkAddress",
        "hierarchy": "Network Protocol ZigBee ZNet25 Frame",
        "module": "Network.Protocol.ZigBee.ZNet25.Frame",
        "name": "unNetworkAddress",
        "normalized": "NetworkAddress-\u003eByteString",
        "package": "zigbee-znet25",
        "partial": "Network Address",
        "signature": "NetworkAddress-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zigbee-znet25/docs/Network-Protocol-ZigBee-ZNet25.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA protocol library enabling wireless communications via\n XBee/XBee-PRO (ZibBee) ZNet 2.5 RF modules.\n\u003c/p\u003e\u003cp\u003eThe library performs binary encoding/decoding, on-the-wire framing,\n and error checking of control and data \u003ca\u003eAPI\u003c/a\u003e frames.  In other words\n the library expects to communicate with an XBee modem that has AP\n parameter = 2, indicating API frames with HDLC-like escape characters.\n This mode provides for 8-bit transparent operation and is described in\n Section 6 of \u003ca\u003eftp://ftp1.digi.com/support/documentation/90000866_C.pdf\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe library code is 100% pure; nothing here depends on the\n IO monad and no particular modem device is assumed.  The code\n depends on the \u003ccode\u003ecereal\u003c/code\u003e package for serialization but is otherwise\n pretty standard.  The test suite is based on \u003ccode\u003eQuickCheck\u003c/code\u003e properties.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Protocol.ZigBee.ZNet25",
        "fct-package": "zigbee-znet25",
        "fct-signature": "module",
        "fct-source": "src/Network-Protocol-ZigBee-ZNet25.html",
        "fct-type": "module",
        "title": "ZNet25"
      },
      "index": {
        "description": "protocol library enabling wireless communications via XBee XBee-PRO ZibBee ZNet RF modules The library performs binary encoding decoding on-the-wire framing and error checking of control and data API frames In other words the library expects to communicate with an XBee modem that has AP parameter indicating API frames with HDLC-like escape characters This mode provides for bit transparent operation and is described in Section of ftp ftp1.digi.com support documentation C.pdf The library code is pure nothing here depends on the IO monad and no particular modem device is assumed The code depends on the cereal package for serialization but is otherwise pretty standard The test suite is based on QuickCheck properties",
        "hierarchy": "Network Protocol ZigBee ZNet25",
        "module": "Network.Protocol.ZigBee.ZNet25",
        "name": "ZNet25",
        "normalized": "",
        "package": "zigbee-znet25",
        "partial": "ZNet",
        "signature": ""
      }
    }
  }
]