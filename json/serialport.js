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
        "word": "serialport"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the serial port interface.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.ByteString.Char8 as B\n import System.Hardware.Serialport\n let port = \"COM3\"          -- Windows\n let port = \"/dev/ttyUSB0\"  -- Linux\n s \u003c- openSerial port defaultSerialSettings { commSpeed = CS2400 }\n send s $ B.pack \"AT\\r\"\n recv s 10 \u003e\u003e= print\n closeSerial s\n\u003c/pre\u003e\u003cp\u003eOr use the experimental interface with standard handles:\n\u003c/p\u003e\u003cpre\u003e import System.IO\n import System.Hardware.Serialport\n let port = \"COM3\"           -- Windows\n let port = \"/dev/ttyUSB0\"   -- Linux\n h \u003c- hOpenSerial port defaultSerialSettings\n hPutStr h \"AT\\r\"\n hGetLine h \u003e\u003e= print\n hClose h\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "System.Hardware.Serialport",
          "name": "Serialport",
          "package": "serialport",
          "source": "src/System-Hardware-Serialport.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the serial port interface import qualified Data.ByteString.Char8 as import System.Hardware.Serialport let port COM3 Windows let port dev ttyUSB0 Linux openSerial port defaultSerialSettings commSpeed CS2400 send B.pack AT recv print closeSerial Or use the experimental interface with standard handles import System.IO import System.Hardware.Serialport let port COM3 Windows let port dev ttyUSB0 Linux hOpenSerial port defaultSerialSettings hPutStr AT hGetLine print hClose",
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "Serialport",
          "package": "serialport",
          "partial": "Serialport",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupported baudrates\n\u003c/p\u003e",
          "module": "System.Hardware.Serialport",
          "name": "CommSpeed",
          "package": "serialport",
          "source": "src/System-Hardware-Serialport-Types.html#CommSpeed",
          "type": "data"
        },
        "index": {
          "description": "Supported baudrates",
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "CommSpeed",
          "package": "serialport",
          "partial": "Comm Speed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#t:CommSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Serialport",
          "name": "FlowControl",
          "package": "serialport",
          "source": "src/System-Hardware-Serialport-Types.html#FlowControl",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "FlowControl",
          "package": "serialport",
          "partial": "Flow Control",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#t:FlowControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Serialport",
          "name": "Parity",
          "package": "serialport",
          "source": "src/System-Hardware-Serialport-Types.html#Parity",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "Parity",
          "package": "serialport",
          "partial": "Parity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#t:Parity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Serialport",
          "name": "SerialPort",
          "package": "serialport",
          "source": "src/System-Hardware-Serialport-Posix.html#SerialPort",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "SerialPort",
          "package": "serialport",
          "partial": "Serial Port",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#t:SerialPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Serialport",
          "name": "SerialPortSettings",
          "package": "serialport",
          "source": "src/System-Hardware-Serialport-Types.html#SerialPortSettings",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "SerialPortSettings",
          "package": "serialport",
          "partial": "Serial Port Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#t:SerialPortSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Serialport",
          "name": "StopBits",
          "package": "serialport",
          "source": "src/System-Hardware-Serialport-Types.html#StopBits",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "StopBits",
          "package": "serialport",
          "partial": "Stop Bits",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#t:StopBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Serialport",
          "name": "CS110",
          "package": "serialport",
          "signature": "CS110",
          "source": "src/System-Hardware-Serialport-Types.html#CommSpeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "CS110",
          "package": "serialport",
          "partial": "CS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:CS110"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Serialport",
          "name": "CS115200",
          "package": "serialport",
          "signature": "CS115200",
          "source": "src/System-Hardware-Serialport-Types.html#CommSpeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "CS115200",
          "package": "serialport",
          "partial": "CS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:CS115200"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Serialport",
          "name": "CS1200",
          "package": "serialport",
          "signature": "CS1200",
          "source": "src/System-Hardware-Serialport-Types.html#CommSpeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "CS1200",
          "package": "serialport",
          "partial": "CS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:CS1200"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Serialport",
          "name": "CS19200",
          "package": "serialport",
          "signature": "CS19200",
          "source": "src/System-Hardware-Serialport-Types.html#CommSpeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "CS19200",
          "package": "serialport",
          "partial": "CS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:CS19200"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Serialport",
          "name": "CS2400",
          "package": "serialport",
          "signature": "CS2400",
          "source": "src/System-Hardware-Serialport-Types.html#CommSpeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "CS2400",
          "package": "serialport",
          "partial": "CS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:CS2400"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Serialport",
          "name": "CS300",
          "package": "serialport",
          "signature": "CS300",
          "source": "src/System-Hardware-Serialport-Types.html#CommSpeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "CS300",
          "package": "serialport",
          "partial": "CS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:CS300"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Serialport",
          "name": "CS38400",
          "package": "serialport",
          "signature": "CS38400",
          "source": "src/System-Hardware-Serialport-Types.html#CommSpeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "CS38400",
          "package": "serialport",
          "partial": "CS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:CS38400"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Serialport",
          "name": "CS4800",
          "package": "serialport",
          "signature": "CS4800",
          "source": "src/System-Hardware-Serialport-Types.html#CommSpeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "CS4800",
          "package": "serialport",
          "partial": "CS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:CS4800"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Serialport",
          "name": "CS57600",
          "package": "serialport",
          "signature": "CS57600",
          "source": "src/System-Hardware-Serialport-Types.html#CommSpeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "CS57600",
          "package": "serialport",
          "partial": "CS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:CS57600"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Serialport",
          "name": "CS600",
          "package": "serialport",
          "signature": "CS600",
          "source": "src/System-Hardware-Serialport-Types.html#CommSpeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "CS600",
          "package": "serialport",
          "partial": "CS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:CS600"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Serialport",
          "name": "CS9600",
          "package": "serialport",
          "signature": "CS9600",
          "source": "src/System-Hardware-Serialport-Types.html#CommSpeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "CS9600",
          "package": "serialport",
          "partial": "CS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:CS9600"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Serialport",
          "name": "Even",
          "package": "serialport",
          "signature": "Even",
          "source": "src/System-Hardware-Serialport-Types.html#Parity",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "Even",
          "package": "serialport",
          "partial": "Even",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:Even"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Serialport",
          "name": "NoFlowControl",
          "package": "serialport",
          "signature": "NoFlowControl",
          "source": "src/System-Hardware-Serialport-Types.html#FlowControl",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "NoFlowControl",
          "package": "serialport",
          "partial": "No Flow Control",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:NoFlowControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Serialport",
          "name": "NoParity",
          "package": "serialport",
          "signature": "NoParity",
          "source": "src/System-Hardware-Serialport-Types.html#Parity",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "NoParity",
          "package": "serialport",
          "partial": "No Parity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:NoParity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Serialport",
          "name": "Odd",
          "package": "serialport",
          "signature": "Odd",
          "source": "src/System-Hardware-Serialport-Types.html#Parity",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "Odd",
          "package": "serialport",
          "partial": "Odd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:Odd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Serialport",
          "name": "One",
          "package": "serialport",
          "signature": "One",
          "source": "src/System-Hardware-Serialport-Types.html#StopBits",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "One",
          "package": "serialport",
          "partial": "One",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:One"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Serialport",
          "name": "SerialPortSettings",
          "package": "serialport",
          "signature": "SerialPortSettings",
          "source": "src/System-Hardware-Serialport-Types.html#SerialPortSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "SerialPortSettings",
          "package": "serialport",
          "partial": "Serial Port Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:SerialPortSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Serialport",
          "name": "Software",
          "package": "serialport",
          "signature": "Software",
          "source": "src/System-Hardware-Serialport-Types.html#FlowControl",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "Software",
          "package": "serialport",
          "partial": "Software",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:Software"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Serialport",
          "name": "Two",
          "package": "serialport",
          "signature": "Two",
          "source": "src/System-Hardware-Serialport-Types.html#StopBits",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "Two",
          "package": "serialport",
          "partial": "Two",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:Two"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of bits in a word\n\u003c/p\u003e",
          "module": "System.Hardware.Serialport",
          "name": "bitsPerWord",
          "package": "serialport",
          "signature": "Word8",
          "source": "src/System-Hardware-Serialport-Types.html#SerialPortSettings",
          "type": "function"
        },
        "index": {
          "description": "Number of bits in word",
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "bitsPerWord",
          "package": "serialport",
          "partial": "Per Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:bitsPerWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose the serial port\n\u003c/p\u003e",
          "module": "System.Hardware.Serialport",
          "name": "closeSerial",
          "package": "serialport",
          "signature": "SerialPort -\u003e IO ()",
          "source": "src/System-Hardware-Serialport-Posix.html#closeSerial",
          "type": "function"
        },
        "index": {
          "description": "Close the serial port",
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "closeSerial",
          "normalized": "SerialPort-\u003eIO()",
          "package": "serialport",
          "partial": "Serial",
          "signature": "SerialPort-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:closeSerial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebaudrate\n\u003c/p\u003e",
          "module": "System.Hardware.Serialport",
          "name": "commSpeed",
          "package": "serialport",
          "signature": "CommSpeed",
          "source": "src/System-Hardware-Serialport-Types.html#SerialPortSettings",
          "type": "function"
        },
        "index": {
          "description": "baudrate",
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "commSpeed",
          "package": "serialport",
          "partial": "Speed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:commSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMost commonly used configuration\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 9600 baud\n\u003c/li\u003e\u003cli\u003e 8 data bits\n\u003c/li\u003e\u003cli\u003e 1 stop bit\n\u003c/li\u003e\u003cli\u003e no parity\n\u003c/li\u003e\u003cli\u003e no flow control\n\u003c/li\u003e\u003cli\u003e 0.1 second receive timeout\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Hardware.Serialport",
          "name": "defaultSerialSettings",
          "package": "serialport",
          "signature": "SerialPortSettings",
          "source": "src/System-Hardware-Serialport-Types.html#defaultSerialSettings",
          "type": "function"
        },
        "index": {
          "description": "Most commonly used configuration baud data bits stop bit no parity no flow control second receive timeout",
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "defaultSerialSettings",
          "package": "serialport",
          "partial": "Serial Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:defaultSerialSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of flowcontrol\n\u003c/p\u003e",
          "module": "System.Hardware.Serialport",
          "name": "flowControl",
          "package": "serialport",
          "signature": "FlowControl",
          "source": "src/System-Hardware-Serialport-Types.html#SerialPortSettings",
          "type": "function"
        },
        "index": {
          "description": "Type of flowcontrol",
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "flowControl",
          "package": "serialport",
          "partial": "Control",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:flowControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlush buffers\n\u003c/p\u003e",
          "module": "System.Hardware.Serialport",
          "name": "flush",
          "package": "serialport",
          "signature": "SerialPort -\u003e IO ()",
          "source": "src/System-Hardware-Serialport-Posix.html#flush",
          "type": "function"
        },
        "index": {
          "description": "Flush buffers",
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "flush",
          "normalized": "SerialPort-\u003eIO()",
          "package": "serialport",
          "signature": "SerialPort-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:flush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet configuration from serial port\n\u003c/p\u003e",
          "module": "System.Hardware.Serialport",
          "name": "getSerialSettings",
          "package": "serialport",
          "signature": "SerialPort -\u003e SerialPortSettings",
          "source": "src/System-Hardware-Serialport-Posix.html#getSerialSettings",
          "type": "function"
        },
        "index": {
          "description": "Get configuration from serial port",
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "getSerialSettings",
          "normalized": "SerialPort-\u003eSerialPortSettings",
          "package": "serialport",
          "partial": "Serial Settings",
          "signature": "SerialPort-\u003eSerialPortSettings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:getSerialSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen and configure a serial port returning a standard Handle\n\u003c/p\u003e",
          "module": "System.Hardware.Serialport",
          "name": "hOpenSerial",
          "package": "serialport",
          "signature": "FilePath -\u003e SerialPortSettings -\u003e IO Handle",
          "source": "src/System-Hardware-Serialport-Posix.html#hOpenSerial",
          "type": "function"
        },
        "index": {
          "description": "Open and configure serial port returning standard Handle",
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "hOpenSerial",
          "normalized": "FilePath-\u003eSerialPortSettings-\u003eIO Handle",
          "package": "serialport",
          "partial": "Open Serial",
          "signature": "FilePath-\u003eSerialPortSettings-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:hOpenSerial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen and configure a serial port\n\u003c/p\u003e",
          "module": "System.Hardware.Serialport",
          "name": "openSerial",
          "package": "serialport",
          "signature": "FilePath-\u003e SerialPortSettings-\u003e IO SerialPort",
          "type": "function"
        },
        "index": {
          "description": "Open and configure serial port",
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "openSerial",
          "normalized": "FilePath-\u003eSerialPortSettings-\u003eIO SerialPort",
          "package": "serialport",
          "partial": "Serial",
          "signature": "FilePath-\u003eSerialPortSettings-\u003eIO SerialPort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:openSerial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of parity\n\u003c/p\u003e",
          "module": "System.Hardware.Serialport",
          "name": "parity",
          "package": "serialport",
          "signature": "Parity",
          "source": "src/System-Hardware-Serialport-Types.html#SerialPortSettings",
          "type": "function"
        },
        "index": {
          "description": "Type of parity",
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "parity",
          "package": "serialport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:parity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive bytes, given the maximum number\n\u003c/p\u003e",
          "module": "System.Hardware.Serialport",
          "name": "recv",
          "package": "serialport",
          "signature": "SerialPort -\u003e Int -\u003e IO ByteString",
          "source": "src/System-Hardware-Serialport-Posix.html#recv",
          "type": "function"
        },
        "index": {
          "description": "Receive bytes given the maximum number",
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "recv",
          "normalized": "SerialPort-\u003eInt-\u003eIO ByteString",
          "package": "serialport",
          "signature": "SerialPort-\u003eInt-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:recv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend bytes\n\u003c/p\u003e",
          "module": "System.Hardware.Serialport",
          "name": "send",
          "package": "serialport",
          "signature": "SerialPort-\u003e ByteString-\u003e IO Int",
          "type": "function"
        },
        "index": {
          "description": "Send bytes",
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "send",
          "normalized": "SerialPort-\u003eByteString-\u003eIO Int",
          "package": "serialport",
          "signature": "SerialPort-\u003eByteString-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the Data Terminal Ready level\n\u003c/p\u003e",
          "module": "System.Hardware.Serialport",
          "name": "setDTR",
          "package": "serialport",
          "signature": "SerialPort -\u003e Bool -\u003e IO ()",
          "source": "src/System-Hardware-Serialport-Posix.html#setDTR",
          "type": "function"
        },
        "index": {
          "description": "Set the Data Terminal Ready level",
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "setDTR",
          "normalized": "SerialPort-\u003eBool-\u003eIO()",
          "package": "serialport",
          "partial": "DTR",
          "signature": "SerialPort-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:setDTR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the Ready to send level\n\u003c/p\u003e",
          "module": "System.Hardware.Serialport",
          "name": "setRTS",
          "package": "serialport",
          "signature": "SerialPort -\u003e Bool -\u003e IO ()",
          "source": "src/System-Hardware-Serialport-Posix.html#setRTS",
          "type": "function"
        },
        "index": {
          "description": "Set the Ready to send level",
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "setRTS",
          "normalized": "SerialPort-\u003eBool-\u003eIO()",
          "package": "serialport",
          "partial": "RTS",
          "signature": "SerialPort-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:setRTS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfigure the serial port\n\u003c/p\u003e",
          "module": "System.Hardware.Serialport",
          "name": "setSerialSettings",
          "package": "serialport",
          "signature": "SerialPort-\u003e SerialPortSettings-\u003e IO SerialPort",
          "type": "function"
        },
        "index": {
          "description": "Configure the serial port",
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "setSerialSettings",
          "normalized": "SerialPort-\u003eSerialPortSettings-\u003eIO SerialPort",
          "package": "serialport",
          "partial": "Serial Settings",
          "signature": "SerialPort-\u003eSerialPortSettings-\u003eIO SerialPort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:setSerialSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of stop bits\n\u003c/p\u003e",
          "module": "System.Hardware.Serialport",
          "name": "stopb",
          "package": "serialport",
          "signature": "StopBits",
          "source": "src/System-Hardware-Serialport-Types.html#SerialPortSettings",
          "type": "function"
        },
        "index": {
          "description": "Number of stop bits",
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "stopb",
          "package": "serialport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:stopb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTimeout when receiving a char in tenth of seconds\n\u003c/p\u003e",
          "module": "System.Hardware.Serialport",
          "name": "timeout",
          "package": "serialport",
          "signature": "Int",
          "source": "src/System-Hardware-Serialport-Types.html#SerialPortSettings",
          "type": "function"
        },
        "index": {
          "description": "Timeout when receiving char in tenth of seconds",
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "timeout",
          "package": "serialport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:timeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafer device function, so you don't forget to close the device\n\u003c/p\u003e",
          "module": "System.Hardware.Serialport",
          "name": "withSerial",
          "package": "serialport",
          "signature": "String -\u003e SerialPortSettings -\u003e (SerialPort -\u003e IO a) -\u003e IO a",
          "source": "src/System-Hardware-Serialport.html#withSerial",
          "type": "function"
        },
        "index": {
          "description": "Safer device function so you don forget to close the device",
          "hierarchy": "System Hardware Serialport",
          "module": "System.Hardware.Serialport",
          "name": "withSerial",
          "normalized": "String-\u003eSerialPortSettings-\u003e(SerialPort-\u003eIO a)-\u003eIO a",
          "package": "serialport",
          "partial": "Serial",
          "signature": "String-\u003eSerialPortSettings-\u003e(SerialPort-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:withSerial"
      }
    }
  ]
]