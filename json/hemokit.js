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
        "word": "hemokit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit.Conduit",
          "name": "Conduit",
          "package": "hemokit",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hemokit Conduit",
          "module": "Hemokit.Conduit",
          "name": "Conduit",
          "package": "hemokit",
          "partial": "Conduit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit-Conduit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit.Conduit",
          "name": "emotivPackets",
          "package": "hemokit",
          "signature": "EmotivDevice -\u003e Source m EmotivPacket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit Conduit",
          "module": "Hemokit.Conduit",
          "name": "emotivPackets",
          "normalized": "EmotivDevice-\u003eSource a EmotivPacket",
          "package": "hemokit",
          "partial": "Packets",
          "signature": "EmotivDevice-\u003eSource m EmotivPacket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit-Conduit.html#v:emotivPackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit.Conduit",
          "name": "emotivStates",
          "package": "hemokit",
          "signature": "EmotivDevice -\u003e Source m EmotivState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit Conduit",
          "module": "Hemokit.Conduit",
          "name": "emotivStates",
          "normalized": "EmotivDevice-\u003eSource a EmotivState",
          "package": "hemokit",
          "partial": "States",
          "signature": "EmotivDevice-\u003eSource m EmotivState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit-Conduit.html#v:emotivStates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit.Conduit",
          "name": "jsonConduit",
          "package": "hemokit",
          "signature": "Conduit i m ByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit Conduit",
          "module": "Hemokit.Conduit",
          "name": "jsonConduit",
          "package": "hemokit",
          "partial": "Conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit-Conduit.html#v:jsonConduit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit.Conduit",
          "name": "parsePackets",
          "package": "hemokit",
          "signature": "EmotivDevice -\u003e Conduit EmotivRawData m (EmotivState, EmotivPacket)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit Conduit",
          "module": "Hemokit.Conduit",
          "name": "parsePackets",
          "normalized": "EmotivDevice-\u003eConduit EmotivRawData a(EmotivState,EmotivPacket)",
          "package": "hemokit",
          "partial": "Packets",
          "signature": "EmotivDevice-\u003eConduit EmotivRawData m(EmotivState,EmotivPacket)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit-Conduit.html#v:parsePackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit.Conduit",
          "name": "rawSource",
          "package": "hemokit",
          "signature": "EmotivDevice -\u003e Source m EmotivRawData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit Conduit",
          "module": "Hemokit.Conduit",
          "name": "rawSource",
          "normalized": "EmotivDevice-\u003eSource a EmotivRawData",
          "package": "hemokit",
          "partial": "Source",
          "signature": "EmotivDevice-\u003eSource m EmotivRawData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit-Conduit.html#v:rawSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit.Conduit",
          "name": "tcpSink",
          "package": "hemokit",
          "signature": "String -\u003e Int -\u003e Sink ByteString m ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit Conduit",
          "module": "Hemokit.Conduit",
          "name": "tcpSink",
          "normalized": "String-\u003eInt-\u003eSink ByteString a()",
          "package": "hemokit",
          "partial": "Sink",
          "signature": "String-\u003eInt-\u003eSink ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit-Conduit.html#v:tcpSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit.Conduit",
          "name": "websocketSink",
          "package": "hemokit",
          "signature": "String -\u003e Int -\u003e Sink ByteString m ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit Conduit",
          "module": "Hemokit.Conduit",
          "name": "websocketSink",
          "normalized": "String-\u003eInt-\u003eSink ByteString a()",
          "package": "hemokit",
          "partial": "Sink",
          "signature": "String-\u003eInt-\u003eSink ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit-Conduit.html#v:websocketSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit.Internal.Utils",
          "name": "Utils",
          "package": "hemokit",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hemokit Internal Utils",
          "module": "Hemokit.Internal.Utils",
          "name": "Utils",
          "package": "hemokit",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit-Internal-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the monadic action as long as the producer returns Justs.\n Returns True if the action was ever executed.\n\u003c/p\u003e",
          "module": "Hemokit.Internal.Utils",
          "name": "untilNothing",
          "package": "hemokit",
          "signature": "m (Maybe a) -\u003e (a -\u003e m ()) -\u003e m Bool",
          "type": "function"
        },
        "index": {
          "description": "Runs the monadic action as long as the producer returns Justs Returns True if the action was ever executed",
          "hierarchy": "Hemokit Internal Utils",
          "module": "Hemokit.Internal.Utils",
          "name": "untilNothing",
          "normalized": "a(Maybe b)-\u003e(b-\u003ea())-\u003ea Bool",
          "package": "hemokit",
          "partial": "Nothing",
          "signature": "m(Maybe a)-\u003e(a-\u003em())-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit-Internal-Utils.html#v:untilNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the monad retuns a Just, runs the function on its contents.\n Returns True if the action was executed.\n\u003c/p\u003e",
          "module": "Hemokit.Internal.Utils",
          "name": "withJustM",
          "package": "hemokit",
          "signature": "m (Maybe a) -\u003e (a -\u003e m ()) -\u003e m Bool",
          "type": "function"
        },
        "index": {
          "description": "If the monad retuns Just runs the function on its contents Returns True if the action was executed",
          "hierarchy": "Hemokit Internal Utils",
          "module": "Hemokit.Internal.Utils",
          "name": "withJustM",
          "normalized": "a(Maybe b)-\u003e(b-\u003ea())-\u003ea Bool",
          "package": "hemokit",
          "partial": "Just",
          "signature": "m(Maybe a)-\u003e(a-\u003em())-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit-Internal-Utils.html#v:withJustM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome convenience for building applications that want to read Emotiv data.\n\u003c/p\u003e\u003cp\u003eYou can use this if you are writing an EEG application and don't want to do\n the whole device selection / opening yourself.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hemokit.Start",
          "name": "Start",
          "package": "hemokit",
          "type": "module"
        },
        "index": {
          "description": "Some convenience for building applications that want to read Emotiv data You can use this if you are writing an EEG application and don want to do the whole device selection opening yourself",
          "hierarchy": "Hemokit Start",
          "module": "Hemokit.Start",
          "name": "Start",
          "package": "hemokit",
          "partial": "Start",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit-Start.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommonly used options for EEG command line applications.\n Mainly deals with input selection.\n\u003c/p\u003e",
          "module": "Hemokit.Start",
          "name": "EmotivArgs",
          "package": "hemokit",
          "type": "data"
        },
        "index": {
          "description": "Commonly used options for EEG command line applications Mainly deals with input selection",
          "hierarchy": "Hemokit Start",
          "module": "Hemokit.Start",
          "name": "EmotivArgs",
          "package": "hemokit",
          "partial": "Emotiv Args",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit-Start.html#t:EmotivArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit.Start",
          "name": "EmotivArgs",
          "package": "hemokit",
          "signature": "EmotivArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit Start",
          "module": "Hemokit.Start",
          "name": "EmotivArgs",
          "package": "hemokit",
          "partial": "Emotiv Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit-Start.html#v:EmotivArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommand line parser for EEG selection. See \u003ccode\u003e\u003ca\u003eEmotivArgs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hemokit.Start",
          "name": "emotivArgsParser",
          "package": "hemokit",
          "signature": "Parser EmotivArgs",
          "type": "function"
        },
        "index": {
          "description": "Command line parser for EEG selection See EmotivArgs",
          "hierarchy": "Hemokit Start",
          "module": "Hemokit.Start",
          "name": "emotivArgsParser",
          "package": "hemokit",
          "partial": "Args Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit-Start.html#v:emotivArgsParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the given device or dump file for input.\n   If not given, HIDAPI is used.\n\u003c/p\u003e",
          "module": "Hemokit.Start",
          "name": "fromFile",
          "package": "hemokit",
          "signature": "Maybe FilePath",
          "type": "function"
        },
        "index": {
          "description": "Use the given device or dump file for input If not given HIDAPI is used",
          "hierarchy": "Hemokit Start",
          "module": "Hemokit.Start",
          "name": "fromFile",
          "package": "hemokit",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit-Start.html#v:fromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDepending on some common EEG-choice-related user input, list devices or\n try to open the correct device.\n\u003c/p\u003e",
          "module": "Hemokit.Start",
          "name": "getEmotivDeviceFromArgs",
          "package": "hemokit",
          "signature": "EmotivArgs -\u003e IO (Either String EmotivDevice)",
          "type": "function"
        },
        "index": {
          "description": "Depending on some common EEG-choice-related user input list devices or try to open the correct device",
          "hierarchy": "Hemokit Start",
          "module": "Hemokit.Start",
          "name": "getEmotivDeviceFromArgs",
          "normalized": "EmotivArgs-\u003eIO(Either String EmotivDevice)",
          "package": "hemokit",
          "partial": "Emotiv Device From Args",
          "signature": "EmotivArgs-\u003eIO(Either String EmotivDevice)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit-Start.html#v:getEmotivDeviceFromArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat model to use for decryption.\n\u003c/p\u003e",
          "module": "Hemokit.Start",
          "name": "model",
          "package": "hemokit",
          "signature": "EmotivModel",
          "type": "function"
        },
        "index": {
          "description": "What model to use for decryption",
          "hierarchy": "Hemokit Start",
          "module": "Hemokit.Start",
          "name": "model",
          "package": "hemokit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit-Start.html#v:model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a command line parser. The given program description is used for the\n --help message.\n\u003c/p\u003e",
          "module": "Hemokit.Start",
          "name": "parseArgs",
          "package": "hemokit",
          "signature": "String -\u003e Parser a -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Runs command line parser The given program description is used for the help message",
          "hierarchy": "Hemokit Start",
          "module": "Hemokit.Start",
          "name": "parseArgs",
          "normalized": "String-\u003eParser a-\u003eIO a",
          "package": "hemokit",
          "partial": "Args",
          "signature": "String-\u003eParser a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit-Start.html#v:parseArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEEG model command line parser.\n\u003c/p\u003e",
          "module": "Hemokit.Start",
          "name": "parseModel",
          "package": "hemokit",
          "signature": "String -\u003e m EmotivModel",
          "type": "function"
        },
        "index": {
          "description": "EEG model command line parser",
          "hierarchy": "Hemokit Start",
          "module": "Hemokit.Start",
          "name": "parseModel",
          "normalized": "String-\u003ea EmotivModel",
          "package": "hemokit",
          "partial": "Model",
          "signature": "String-\u003em EmotivModel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit-Start.html#v:parseModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat serial to use for decryption.\n   Also allows to pick a certain device.\n\u003c/p\u003e",
          "module": "Hemokit.Start",
          "name": "serial",
          "package": "hemokit",
          "signature": "Maybe SerialNumber",
          "type": "function"
        },
        "index": {
          "description": "What serial to use for decryption Also allows to pick certain device",
          "hierarchy": "Hemokit Start",
          "module": "Hemokit.Start",
          "name": "serial",
          "package": "hemokit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit-Start.html#v:serial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library for reading from an Emotic EPOC EEG.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Use \u003ccode\u003e\u003ca\u003egetEmotivDevices\u003c/a\u003e\u003c/code\u003e to list available EEGs.\n\u003c/li\u003e\u003cli\u003e Use \u003ccode\u003e\u003ca\u003eopenEmotivDevice\u003c/a\u003e\u003c/code\u003e to open a device for reading.\n\u003c/li\u003e\u003cli\u003e Use \u003ccode\u003e\u003ca\u003ereadEmotiv\u003c/a\u003e\u003c/code\u003e read from an open device.\n\u003c/li\u003e\u003cli\u003e You will obtain \u003ccode\u003e\u003ca\u003eEmotivPacket\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eEmotivState\u003c/a\u003e\u003c/code\u003es.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Hemokit",
          "name": "Hemokit",
          "package": "hemokit",
          "type": "module"
        },
        "index": {
          "description": "library for reading from an Emotic EPOC EEG Use getEmotivDevices to list available EEGs Use openEmotivDevice to open device for reading Use readEmotiv read from an open device You will obtain EmotivPacket and EmotivState",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "Hemokit",
          "package": "hemokit",
          "partial": "Hemokit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes the indices of bits to make up a certain value.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "BitMask",
          "package": "hemokit",
          "type": "newtype"
        },
        "index": {
          "description": "Describes the indices of bits to make up certain value",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "BitMask",
          "package": "hemokit",
          "partial": "Bit Mask",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#t:BitMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifies an open Emotiv device.\n Also contains the cumulative \u003ccode\u003e\u003ca\u003eEmotivState\u003c/a\u003e\u003c/code\u003e of the EEG.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "EmotivDevice",
          "package": "hemokit",
          "type": "data"
        },
        "index": {
          "description": "Identifies an open Emotiv device Also contains the cumulative EmotivState of the EEG",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "EmotivDevice",
          "package": "hemokit",
          "partial": "Emotiv Device",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#t:EmotivDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifies an Emotiv device.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "EmotivDeviceInfo",
          "package": "hemokit",
          "type": "data"
        },
        "index": {
          "description": "Identifies an Emotiv device",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "EmotivDeviceInfo",
          "package": "hemokit",
          "partial": "Emotiv Device Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#t:EmotivDeviceInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmotiv related errors.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "EmotivException",
          "package": "hemokit",
          "type": "data"
        },
        "index": {
          "description": "Emotiv related errors",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "EmotivException",
          "package": "hemokit",
          "partial": "Emotiv Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#t:EmotivException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether the EPOC is a consumer or developer model.\n\u003c/p\u003e\u003cp\u003eThis affects how the EEG data is to be decrypted.\n\u003c/p\u003e\u003cp\u003eYou can check if you are using the correct model by seeing if the packet\n \u003ccode\u003e\u003ca\u003ecounter\u003c/a\u003e\u003c/code\u003e increases from 0 until 128 on subsequent packets.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "EmotivModel",
          "package": "hemokit",
          "type": "data"
        },
        "index": {
          "description": "Whether the EPOC is consumer or developer model This affects how the EEG data is to be decrypted You can check if you are using the correct model by seeing if the packet counter increases from until on subsequent packets",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "EmotivModel",
          "package": "hemokit",
          "partial": "Emotiv Model",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#t:EmotivModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains the data of a single packet sent from the device.\n Accumulated data (the current state) is available in \u003ccode\u003e\u003ca\u003eEmotivState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "EmotivPacket",
          "package": "hemokit",
          "type": "data"
        },
        "index": {
          "description": "Contains the data of single packet sent from the device Accumulated data the current state is available in EmotivState",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "EmotivPacket",
          "package": "hemokit",
          "partial": "Emotiv Packet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#t:EmotivPacket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps (unencrypted) Emotiv raw data. Ensures that it is 32 bytes.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "EmotivRawData",
          "package": "hemokit",
          "type": "newtype"
        },
        "index": {
          "description": "Wraps unencrypted Emotiv raw data Ensures that it is bytes",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "EmotivRawData",
          "package": "hemokit",
          "partial": "Emotiv Raw Data",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#t:EmotivRawData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ca\u003eopen\u003c/a\u003e data source to read bytes from.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "EmotivRawDevice",
          "package": "hemokit",
          "type": "data"
        },
        "index": {
          "description": "An open data source to read bytes from",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "EmotivRawDevice",
          "package": "hemokit",
          "partial": "Emotiv Raw Device",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#t:EmotivRawDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains the \u003ca\u003ecurrent state\u003c/a\u003e of the EEG, cumulateively updated by\n incoming \u003ccode\u003e\u003ca\u003eEmotivPacket\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "EmotivState",
          "package": "hemokit",
          "type": "data"
        },
        "index": {
          "description": "Contains the current state of the EEG cumulateively updated by incoming EmotivPacket",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "EmotivState",
          "package": "hemokit",
          "partial": "Emotiv State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#t:EmotivState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sensors of an Emotiv EPOC.\n Uses the names from the International 10-20 system.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "Sensor",
          "package": "hemokit",
          "type": "data"
        },
        "index": {
          "description": "The sensors of an Emotiv EPOC Uses the names from the International system",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "Sensor",
          "package": "hemokit",
          "partial": "Sensor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#t:Sensor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA valid Emotiv serial number. 16 bytes.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "SerialNumber",
          "package": "hemokit",
          "type": "data"
        },
        "index": {
          "description": "valid Emotiv serial number bytes",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "SerialNumber",
          "package": "hemokit",
          "partial": "Serial Number",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#t:SerialNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit",
          "name": "AF3",
          "package": "hemokit",
          "signature": "AF3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "AF3",
          "package": "hemokit",
          "partial": "AF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:AF3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit",
          "name": "AF4",
          "package": "hemokit",
          "signature": "AF4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "AF4",
          "package": "hemokit",
          "partial": "AF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:AF4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit",
          "name": "BitMask",
          "package": "hemokit",
          "signature": "BitMask [Word8]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "BitMask",
          "normalized": "BitMask[Word]",
          "package": "hemokit",
          "partial": "Bit Mask",
          "signature": "BitMask[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:BitMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit",
          "name": "Consumer",
          "package": "hemokit",
          "signature": "Consumer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "Consumer",
          "package": "hemokit",
          "partial": "Consumer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:Consumer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe could not read the serial from the device.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "CouldNotReadSerial",
          "package": "hemokit",
          "signature": "CouldNotReadSerial DevicePath",
          "type": "function"
        },
        "index": {
          "description": "We could not read the serial from the device",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "CouldNotReadSerial",
          "package": "hemokit",
          "partial": "Could Not Read Serial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:CouldNotReadSerial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit",
          "name": "Developer",
          "package": "hemokit",
          "signature": "Developer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "Developer",
          "package": "hemokit",
          "partial": "Developer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:Developer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit",
          "name": "EmotivDevice",
          "package": "hemokit",
          "signature": "EmotivDevice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "EmotivDevice",
          "package": "hemokit",
          "partial": "Emotiv Device",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:EmotivDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit",
          "name": "EmotivDeviceInfo",
          "package": "hemokit",
          "signature": "EmotivDeviceInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "EmotivDeviceInfo",
          "package": "hemokit",
          "partial": "Emotiv Device Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:EmotivDeviceInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit",
          "name": "EmotivPacket",
          "package": "hemokit",
          "signature": "EmotivPacket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "EmotivPacket",
          "package": "hemokit",
          "partial": "Emotiv Packet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:EmotivPacket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit",
          "name": "EmotivRawData",
          "package": "hemokit",
          "signature": "EmotivRawData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "EmotivRawData",
          "package": "hemokit",
          "partial": "Emotiv Raw Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:EmotivRawData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit",
          "name": "EmotivState",
          "package": "hemokit",
          "signature": "EmotivState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "EmotivState",
          "package": "hemokit",
          "partial": "Emotiv State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:EmotivState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit",
          "name": "F3",
          "package": "hemokit",
          "signature": "F3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "F3",
          "package": "hemokit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:F3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit",
          "name": "F4",
          "package": "hemokit",
          "signature": "F4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "F4",
          "package": "hemokit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:F4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit",
          "name": "F7",
          "package": "hemokit",
          "signature": "F7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "F7",
          "package": "hemokit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:F7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit",
          "name": "F8",
          "package": "hemokit",
          "signature": "F8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "F8",
          "package": "hemokit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:F8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit",
          "name": "FC5",
          "package": "hemokit",
          "signature": "FC5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "FC5",
          "package": "hemokit",
          "partial": "FC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:FC5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit",
          "name": "FC6",
          "package": "hemokit",
          "signature": "FC6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "FC6",
          "package": "hemokit",
          "partial": "FC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:FC6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit",
          "name": "HandleDevice",
          "package": "hemokit",
          "signature": "HandleDevice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "HandleDevice",
          "package": "hemokit",
          "partial": "Handle Device",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:HandleDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit",
          "name": "HidapiDevice",
          "package": "hemokit",
          "signature": "HidapiDevice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "HidapiDevice",
          "package": "hemokit",
          "partial": "Hidapi Device",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:HidapiDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerial does not have right format.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "InvalidSerialNumber",
          "package": "hemokit",
          "signature": "InvalidSerialNumber SerialNumber",
          "type": "function"
        },
        "index": {
          "description": "Serial does not have right format",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "InvalidSerialNumber",
          "package": "hemokit",
          "partial": "Invalid Serial Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:InvalidSerialNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit",
          "name": "O1",
          "package": "hemokit",
          "signature": "O1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "O1",
          "package": "hemokit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:O1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit",
          "name": "O2",
          "package": "hemokit",
          "signature": "O2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "O2",
          "package": "hemokit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:O2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit",
          "name": "OtherEmotivException",
          "package": "hemokit",
          "signature": "OtherEmotivException String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "OtherEmotivException",
          "package": "hemokit",
          "partial": "Other Emotiv Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:OtherEmotivException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit",
          "name": "P7",
          "package": "hemokit",
          "signature": "P7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "P7",
          "package": "hemokit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:P7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit",
          "name": "P8",
          "package": "hemokit",
          "signature": "P8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "P8",
          "package": "hemokit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:P8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit",
          "name": "T7",
          "package": "hemokit",
          "signature": "T7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "T7",
          "package": "hemokit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:T7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit",
          "name": "T8",
          "package": "hemokit",
          "signature": "T8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "T8",
          "package": "hemokit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:T8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe USB product ID of the Emotiv EPOC.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "_EMOTIV_PRODUCT_ID",
          "package": "hemokit",
          "signature": "ProductID",
          "type": "function"
        },
        "index": {
          "description": "The USB product ID of the Emotiv EPOC",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "_EMOTIV_PRODUCT_ID",
          "package": "hemokit",
          "partial": "EMOTIV PRODUCT ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:_EMOTIV_PRODUCT_ID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe USB vendor ID of the Emotiv EPOC.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "_EMOTIV_VENDOR_ID",
          "package": "hemokit",
          "signature": "VendorID",
          "type": "function"
        },
        "index": {
          "description": "The USB vendor ID of the Emotiv EPOC",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "_EMOTIV_VENDOR_ID",
          "package": "hemokit",
          "partial": "EMOTIV VENDOR ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:_EMOTIV_VENDOR_ID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains all \u003ccode\u003e\u003ca\u003eSensor\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "allSensors",
          "package": "hemokit",
          "signature": "[Sensor]",
          "type": "function"
        },
        "index": {
          "description": "Contains all Sensor",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "allSensors",
          "normalized": "[Sensor]",
          "package": "hemokit",
          "partial": "Sensors",
          "signature": "[Sensor]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:allSensors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe current battery percentage\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "battery",
          "package": "hemokit",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "description": "the current battery percentage",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "battery",
          "package": "hemokit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:battery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a battery percentage value from a byte.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "batteryValue",
          "package": "hemokit",
          "signature": "Word8 -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "Parses battery percentage value from byte",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "batteryValue",
          "normalized": "Word-\u003eInt",
          "package": "hemokit",
          "partial": "Value",
          "signature": "Word-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:batteryValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecounts up from 0 to 127 (128 Hz)\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "counter",
          "package": "hemokit",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "description": "counts up from to Hz",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "counter",
          "package": "hemokit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:counter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a 32 bytes encrypted EEG data, returns 32 bytes decrypted EEG data.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "decrypt",
          "package": "hemokit",
          "signature": "SerialNumber -\u003e EmotivModel -\u003e ByteString -\u003e EmotivRawData",
          "type": "function"
        },
        "index": {
          "description": "Takes bytes encrypted EEG data returns bytes decrypted EEG data",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "decrypt",
          "normalized": "SerialNumber-\u003eEmotivModel-\u003eByteString-\u003eEmotivRawData",
          "package": "hemokit",
          "signature": "SerialNumber-\u003eEmotivModel-\u003eByteString-\u003eEmotivRawData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConveniently expose the serial number of a device.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "deviceInfoSerial",
          "package": "hemokit",
          "signature": "EmotivDeviceInfo -\u003e Maybe SerialNumber",
          "type": "function"
        },
        "index": {
          "description": "Conveniently expose the serial number of device",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "deviceInfoSerial",
          "normalized": "EmotivDeviceInfo-\u003eMaybe SerialNumber",
          "package": "hemokit",
          "partial": "Info Serial",
          "signature": "EmotivDeviceInfo-\u003eMaybe SerialNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:deviceInfoSerial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether the EEG is a consumer or developer model.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "emotivModel",
          "package": "hemokit",
          "signature": "EmotivModel",
          "type": "function"
        },
        "index": {
          "description": "Whether the EEG is consumer or developer model",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "emotivModel",
          "package": "hemokit",
          "partial": "Model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:emotivModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hemokit",
          "name": "emotivRawDataBytes",
          "package": "hemokit",
          "signature": "ByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "emotivRawDataBytes",
          "package": "hemokit",
          "partial": "Raw Data Bytes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:emotivRawDataBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLists all EPOC devices, ordered by interface number.\n If you do not actively choose amongst them, the last one is usually the one\n you want (especially if only 1 EEG is connected).\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "getEmotivDevices",
          "package": "hemokit",
          "signature": "IO [EmotivDeviceInfo]",
          "type": "function"
        },
        "index": {
          "description": "Lists all EPOC devices ordered by interface number If you do not actively choose amongst them the last one is usually the one you want especially if only EEG is connected",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "getEmotivDevices",
          "normalized": "IO[EmotivDeviceInfo]",
          "package": "hemokit",
          "partial": "Emotiv Devices",
          "signature": "IO[EmotivDeviceInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:getEmotivDevices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the sensor value for the given sensor from Emotiv raw data.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "getLevel",
          "package": "hemokit",
          "signature": "EmotivRawData -\u003e BitMask -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "Extracts the sensor value for the given sensor from Emotiv raw data",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "getLevel",
          "normalized": "EmotivRawData-\u003eBitMask-\u003eInt",
          "package": "hemokit",
          "partial": "Level",
          "signature": "EmotivRawData-\u003eBitMask-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:getLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes which bits in a raw data packet make up the given sensor.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "getSensorMask",
          "package": "hemokit",
          "signature": "Sensor -\u003e BitMask",
          "type": "function"
        },
        "index": {
          "description": "Describes which bits in raw data packet make up the given sensor",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "getSensorMask",
          "normalized": "Sensor-\u003eBitMask",
          "package": "hemokit",
          "partial": "Sensor Mask",
          "signature": "Sensor-\u003eBitMask",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:getSensorMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eturning \u003ca\u003eleft\u003c/a\u003e gives positive numbers\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "gyroX",
          "package": "hemokit",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "description": "turning left gives positive numbers",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "gyroX",
          "package": "hemokit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:gyroX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eturning \u003ca\u003edown\u003c/a\u003e gives positive numbers\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "gyroY",
          "package": "hemokit",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "description": "turning down gives positive numbers",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "gyroY",
          "package": "hemokit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:gyroY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA conventional \u003ccode\u003eHandle\u003c/code\u003e, e.g. an open file.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "handleDevice",
          "package": "hemokit",
          "signature": "Handle",
          "type": "function"
        },
        "index": {
          "description": "conventional Handle e.g an open file",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "handleDevice",
          "package": "hemokit",
          "partial": "Device",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:handleDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe open hidapi device.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "hidapiDevice",
          "package": "hemokit",
          "signature": "Device",
          "type": "function"
        },
        "index": {
          "description": "The open hidapi device",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "hidapiDevice",
          "package": "hemokit",
          "partial": "Device",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:hidapiDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe hidapi device info.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "hidapiDeviceInfo",
          "package": "hemokit",
          "signature": "DeviceInfo",
          "type": "function"
        },
        "index": {
          "description": "The hidapi device info",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "hidapiDeviceInfo",
          "package": "hemokit",
          "partial": "Device Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:hidapiDeviceInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTreat a \u003ccode\u003eByteString\u003c/code\u003e as Emotiv raw data.\n Errors if the input is non 32 bytes.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "makeEmotivRawData",
          "package": "hemokit",
          "signature": "ByteString -\u003e EmotivRawData",
          "type": "function"
        },
        "index": {
          "description": "Treat ByteString as Emotiv raw data Errors if the input is non bytes",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "makeEmotivRawData",
          "normalized": "ByteString-\u003eEmotivRawData",
          "package": "hemokit",
          "partial": "Emotiv Raw Data",
          "signature": "ByteString-\u003eEmotivRawData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:makeEmotivRawData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks an Emotiv serial, returning a \u003ccode\u003e\u003ca\u003eSerialNumber\u003c/a\u003e\u003c/code\u003e if it's valid.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "makeSerialNumber",
          "package": "hemokit",
          "signature": "ByteString -\u003e Maybe SerialNumber",
          "type": "function"
        },
        "index": {
          "description": "Checks an Emotiv serial returning SerialNumber if it valid",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "makeSerialNumber",
          "normalized": "ByteString-\u003eMaybe SerialNumber",
          "package": "hemokit",
          "partial": "Serial Number",
          "signature": "ByteString-\u003eMaybe SerialNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:makeSerialNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emakeSerialNumber\u003c/a\u003e\u003c/code\u003e, using a \u003ccode\u003eString\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "makeSerialNumberFromString",
          "package": "hemokit",
          "signature": "String -\u003e Maybe SerialNumber",
          "type": "function"
        },
        "index": {
          "description": "Like makeSerialNumber using String",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "makeSerialNumberFromString",
          "normalized": "String-\u003eMaybe SerialNumber",
          "package": "hemokit",
          "partial": "Serial Number From String",
          "signature": "String-\u003eMaybe SerialNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:makeSerialNumberFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpens a given Emotiv device.\n Returns an \u003ccode\u003e\u003ca\u003eEmotivDevice\u003c/a\u003e\u003c/code\u003e to read from with \u003ccode\u003e\u003ca\u003ereadEmotiv\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "openEmotivDevice",
          "package": "hemokit",
          "signature": "EmotivModel -\u003e EmotivDeviceInfo -\u003e IO EmotivDevice",
          "type": "function"
        },
        "index": {
          "description": "Opens given Emotiv device Returns an EmotivDevice to read from with readEmotiv",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "openEmotivDevice",
          "normalized": "EmotivModel-\u003eEmotivDeviceInfo-\u003eIO EmotivDevice",
          "package": "hemokit",
          "partial": "Emotiv Device",
          "signature": "EmotivModel-\u003eEmotivDeviceInfo-\u003eIO EmotivDevice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:openEmotivDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an \u003ccode\u003e\u003ca\u003eEmotivDevice\u003c/a\u003e\u003c/code\u003e device from a path, e.g. a device like\n \u003ccode\u003e\u003cem\u003edev\u003c/em\u003ehidraw1\u003c/code\u003e or a normal file containing dumped binary data.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "openEmotivDeviceFile",
          "package": "hemokit",
          "signature": "EmotivModel -\u003e SerialNumber -\u003e String -\u003e IO EmotivDevice",
          "type": "function"
        },
        "index": {
          "description": "Creates an EmotivDevice device from path e.g device like dev hidraw1 or normal file containing dumped binary data",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "openEmotivDeviceFile",
          "normalized": "EmotivModel-\u003eSerialNumber-\u003eString-\u003eIO EmotivDevice",
          "package": "hemokit",
          "partial": "Emotiv Device File",
          "signature": "EmotivModel-\u003eSerialNumber-\u003eString-\u003eIO EmotivDevice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:openEmotivDeviceFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an \u003ccode\u003e\u003ca\u003eEmotivDevice\u003c/a\u003e\u003c/code\u003e device from an open file handle.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "openEmotivDeviceHandle",
          "package": "hemokit",
          "signature": "EmotivModel -\u003e SerialNumber -\u003e Handle -\u003e IO EmotivDevice",
          "type": "function"
        },
        "index": {
          "description": "Creates an EmotivDevice device from an open file handle",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "openEmotivDeviceHandle",
          "normalized": "EmotivModel-\u003eSerialNumber-\u003eHandle-\u003eIO EmotivDevice",
          "package": "hemokit",
          "partial": "Emotiv Device Handle",
          "signature": "EmotivModel-\u003eSerialNumber-\u003eHandle-\u003eIO EmotivDevice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:openEmotivDeviceHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe current battery percentage\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "packetBattery",
          "package": "hemokit",
          "signature": "Maybe Int",
          "type": "function"
        },
        "index": {
          "description": "the current battery percentage",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "packetBattery",
          "package": "hemokit",
          "partial": "Battery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:packetBattery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecounts up from 0 to 127 (128 Hz)\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "packetCounter",
          "package": "hemokit",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "description": "counts up from to Hz",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "packetCounter",
          "package": "hemokit",
          "partial": "Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:packetCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eturning \u003ca\u003eleft\u003c/a\u003e gives positive numbers\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "packetGyroX",
          "package": "hemokit",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "description": "turning left gives positive numbers",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "packetGyroX",
          "package": "hemokit",
          "partial": "Gyro",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:packetGyroX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eturning \u003ca\u003edown\u003c/a\u003e gives positive numbers\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "packetGyroY",
          "package": "hemokit",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "description": "turning down gives positive numbers",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "packetGyroY",
          "package": "hemokit",
          "partial": "Gyro",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:packetGyroY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEEG sensor-to-skin connectivity\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "packetQuality",
          "package": "hemokit",
          "signature": "Maybe (Sensor, Int)",
          "type": "function"
        },
        "index": {
          "description": "EEG sensor-to-skin connectivity",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "packetQuality",
          "normalized": "Maybe(Sensor,Int)",
          "package": "hemokit",
          "partial": "Quality",
          "signature": "Maybe(Sensor,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:packetQuality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEEG sensor values\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "packetSensors",
          "package": "hemokit",
          "signature": "Vector Int",
          "type": "function"
        },
        "index": {
          "description": "EEG sensor values",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "packetSensors",
          "package": "hemokit",
          "partial": "Sensors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:packetSensors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses an \u003ccode\u003e\u003ca\u003eEmotivPacket\u003c/a\u003e\u003c/code\u003e from raw bytes.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "parsePacket",
          "package": "hemokit",
          "signature": "EmotivRawData -\u003e EmotivPacket",
          "type": "function"
        },
        "index": {
          "description": "Parses an EmotivPacket from raw bytes",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "parsePacket",
          "normalized": "EmotivRawData-\u003eEmotivPacket",
          "package": "hemokit",
          "partial": "Packet",
          "signature": "EmotivRawData-\u003eEmotivPacket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:parsePacket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEEG sensor-to-skin connectivity\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "qualities",
          "package": "hemokit",
          "signature": "Vector Int",
          "type": "function"
        },
        "index": {
          "description": "EEG sensor-to-skin connectivity",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "qualities",
          "package": "hemokit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:qualities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes which bits in a raw data packat make up a sensor quality value.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "qualityMask",
          "package": "hemokit",
          "signature": "BitMask",
          "type": "function"
        },
        "index": {
          "description": "Describes which bits in raw data packat make up sensor quality value",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "qualityMask",
          "package": "hemokit",
          "partial": "Mask",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:qualityMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhich sensor's quality is transmitted in the packet\n (depends on first byte, the packet counter).\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "qualitySensorFromByte0",
          "package": "hemokit",
          "signature": "Word8 -\u003e Maybe Sensor",
          "type": "function"
        },
        "index": {
          "description": "Which sensor quality is transmitted in the packet depends on first byte the packet counter",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "qualitySensorFromByte0",
          "normalized": "Word-\u003eMaybe Sensor",
          "package": "hemokit",
          "partial": "Sensor From Byte",
          "signature": "Word-\u003eMaybe Sensor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:qualitySensorFromByte0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhere we get our data from, some form of \u003ca\u003eopen handle\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "rawDevice",
          "package": "hemokit",
          "signature": "EmotivRawDevice",
          "type": "function"
        },
        "index": {
          "description": "Where we get our data from some form of open handle",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "rawDevice",
          "package": "hemokit",
          "partial": "Device",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:rawDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads one 32 byte packet from the device, parses the raw bytes into an\n \u003ccode\u003e\u003ca\u003eEmotivPacket\u003c/a\u003e\u003c/code\u003e and updates the cumulative \u003ccode\u003e\u003ca\u003eEmotivState\u003c/a\u003e\u003c/code\u003e that we maintain\n for that device.\n\u003c/p\u003e\u003cp\u003eReturns both the packet read from the device and the updated state.\n\u003c/p\u003e\u003cp\u003eReturns Nothing on end of input (or if there are \u003c 32 bytes before it).\n\u003c/p\u003e\u003cp\u003eNote that if the EEG is (turned) off, this function block until\n it is turned on again.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "readEmotiv",
          "package": "hemokit",
          "signature": "EmotivDevice -\u003e IO (Maybe (EmotivState, EmotivPacket))",
          "type": "function"
        },
        "index": {
          "description": "Reads one byte packet from the device parses the raw bytes into an EmotivPacket and updates the cumulative EmotivState that we maintain for that device Returns both the packet read from the device and the updated state Returns Nothing on end of input or if there are bytes before it Note that if the EEG is turned off this function block until it is turned on again",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "readEmotiv",
          "normalized": "EmotivDevice-\u003eIO(Maybe(EmotivState,EmotivPacket))",
          "package": "hemokit",
          "partial": "Emotiv",
          "signature": "EmotivDevice-\u003eIO(Maybe(EmotivState,EmotivPacket))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:readEmotiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads one 32 byte packet from the device and decrypts it to raw data.\n\u003c/p\u003e\u003cp\u003eReturns Nothing on end of input (or if there are \u003c 32 bytes before it).\n\u003c/p\u003e\u003cp\u003eNote that if the EEG is (turned) off, this function block until\n it is turned on again.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "readEmotivRaw",
          "package": "hemokit",
          "signature": "EmotivDevice -\u003e IO (Maybe EmotivRawData)",
          "type": "function"
        },
        "index": {
          "description": "Reads one byte packet from the device and decrypts it to raw data Returns Nothing on end of input or if there are bytes before it Note that if the EEG is turned off this function block until it is turned on again",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "readEmotivRaw",
          "normalized": "EmotivDevice-\u003eIO(Maybe EmotivRawData)",
          "package": "hemokit",
          "partial": "Emotiv Raw",
          "signature": "EmotivDevice-\u003eIO(Maybe EmotivRawData)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:readEmotivRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEEG sensor values\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "sensors",
          "package": "hemokit",
          "signature": "Vector Int",
          "type": "function"
        },
        "index": {
          "description": "EEG sensor values",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "sensors",
          "package": "hemokit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:sensors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe EEG's serial.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "serial",
          "package": "hemokit",
          "signature": "SerialNumber",
          "type": "function"
        },
        "index": {
          "description": "The EEG serial",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "serial",
          "package": "hemokit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:serial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe EEG's cumulative state.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "stateRef",
          "package": "hemokit",
          "signature": "IORef (Maybe EmotivState)",
          "type": "function"
        },
        "index": {
          "description": "The EEG cumulative state",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "stateRef",
          "package": "hemokit",
          "partial": "Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:stateRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a device and a Emotiv raw data, parses the raw data into an\n \u003ccode\u003e\u003ca\u003eEmotivPacket\u003c/a\u003e\u003c/code\u003e and updates the cumulative \u003ccode\u003e\u003ca\u003eEmotivState\u003c/a\u003e\u003c/code\u003e that we maintain\n for that device.\n\u003c/p\u003e\u003cp\u003eCare should be taken that raw data is fed into this function in the right\n order (e.g. respecting the EEG's increasing sequence numbers and quality\n updates).\n\u003c/p\u003e\u003cp\u003eThis function is only neededif you want to obtain both raw data and\n parsed packages.\n If you are not interested in raw data, use \u003ccode\u003e\u003ca\u003ereadEmotiv\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eReturns both the packet read from the device and the updated state.\n\u003c/p\u003e",
          "module": "Hemokit",
          "name": "updateEmotivState",
          "package": "hemokit",
          "signature": "EmotivDevice -\u003e EmotivRawData -\u003e IO (EmotivState, EmotivPacket)",
          "type": "function"
        },
        "index": {
          "description": "Given device and Emotiv raw data parses the raw data into an EmotivPacket and updates the cumulative EmotivState that we maintain for that device Care should be taken that raw data is fed into this function in the right order e.g respecting the EEG increasing sequence numbers and quality updates This function is only neededif you want to obtain both raw data and parsed packages If you are not interested in raw data use readEmotiv instead Returns both the packet read from the device and the updated state",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "updateEmotivState",
          "normalized": "EmotivDevice-\u003eEmotivRawData-\u003eIO(EmotivState,EmotivPacket)",
          "package": "hemokit",
          "partial": "Emotiv State",
          "signature": "EmotivDevice-\u003eEmotivRawData-\u003eIO(EmotivState,EmotivPacket)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:updateEmotivState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpens and reads from the last available device, giving all data from it\n to the given function. Stops if end of input is reached.\n\u003c/p\u003e\u003cp\u003eIntended for use with ghci.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003ewithDataFromLastEEG Consumer print\nwithDataFromLastEEG Consumer (print . packetQuality . snd)\nwithDataFromLastEEG Consumer (putStrLn . unwords . map show . V.toList . qualities . fst)\n\u003c/pre\u003e",
          "module": "Hemokit",
          "name": "withDataFromLastEEG",
          "package": "hemokit",
          "signature": "EmotivModel -\u003e ((EmotivState, EmotivPacket) -\u003e IO ()) -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Opens and reads from the last available device giving all data from it to the given function Stops if end of input is reached Intended for use with ghci Examples withDataFromLastEEG Consumer print withDataFromLastEEG Consumer print packetQuality snd withDataFromLastEEG Consumer putStrLn unwords map show V.toList qualities fst",
          "hierarchy": "Hemokit",
          "module": "Hemokit",
          "name": "withDataFromLastEEG",
          "normalized": "EmotivModel-\u003e((EmotivState,EmotivPacket)-\u003eIO())-\u003eIO()",
          "package": "hemokit",
          "partial": "Data From Last EEG",
          "signature": "EmotivModel-\u003e((EmotivState,EmotivPacket)-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemokit/docs/Hemokit.html#v:withDataFromLastEEG"
      }
    }
  ]
]