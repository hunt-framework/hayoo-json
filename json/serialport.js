[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the serial port interface.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.ByteString.Char8 as B\n import System.Hardware.Serialport\n let port = \"COM3\"          -- Windows\n let port = \"/dev/ttyUSB0\"  -- Linux\n s \u003c- openSerial port defaultSerialSettings { commSpeed = CS2400 }\n send s $ B.pack \"AT\\r\"\n recv s 10 \u003e\u003e= print\n closeSerial s\n\u003c/pre\u003e\u003cp\u003eOr use the experimental interface with standard handles:\n\u003c/p\u003e\u003cpre\u003e import System.IO\n import System.Hardware.Serialport\n let port = \"COM3\"           -- Windows\n let port = \"/dev/ttyUSB0\"   -- Linux\n h \u003c- hOpenSerial port defaultSerialSettings\n hPutStr h \"AT\\r\"\n hGetLine h \u003e\u003e= print\n hClose h\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "module",
        "fct-source": "src/System-Hardware-Serialport.html",
        "fct-type": "module",
        "title": "Serialport"
      },
      "index": {
        "description": "This module provides the serial port interface import qualified Data.ByteString.Char8 as import System.Hardware.Serialport let port COM3 Windows let port dev ttyUSB0 Linux openSerial port defaultSerialSettings commSpeed CS2400 send B.pack AT recv print closeSerial Or use the experimental interface with standard handles import System.IO import System.Hardware.Serialport let port COM3 Windows let port dev ttyUSB0 Linux hOpenSerial port defaultSerialSettings hPutStr AT hGetLine print hClose",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "Serialport",
        "normalized": "",
        "package": "serialport",
        "partial": "Serialport",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#t:CommSpeed",
      "description": {
        "fct-descr": "\u003cp\u003eSupported baudrates\n\u003c/p\u003e",
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "data",
        "fct-source": "src/System-Hardware-Serialport-Types.html#CommSpeed",
        "fct-type": "data",
        "title": "CommSpeed"
      },
      "index": {
        "description": "Supported baudrates",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "CommSpeed",
        "normalized": "",
        "package": "serialport",
        "partial": "Comm Speed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#t:FlowControl",
      "description": {
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "data",
        "fct-source": "src/System-Hardware-Serialport-Types.html#FlowControl",
        "fct-type": "data",
        "title": "FlowControl"
      },
      "index": {
        "description": "",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "FlowControl",
        "normalized": "",
        "package": "serialport",
        "partial": "Flow Control",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#t:Parity",
      "description": {
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "data",
        "fct-source": "src/System-Hardware-Serialport-Types.html#Parity",
        "fct-type": "data",
        "title": "Parity"
      },
      "index": {
        "description": "",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "Parity",
        "normalized": "",
        "package": "serialport",
        "partial": "Parity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#t:SerialPort",
      "description": {
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "data",
        "fct-source": "src/System-Hardware-Serialport-Posix.html#SerialPort",
        "fct-type": "data",
        "title": "SerialPort"
      },
      "index": {
        "description": "",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "SerialPort",
        "normalized": "",
        "package": "serialport",
        "partial": "Serial Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#t:SerialPortSettings",
      "description": {
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "data",
        "fct-source": "src/System-Hardware-Serialport-Types.html#SerialPortSettings",
        "fct-type": "data",
        "title": "SerialPortSettings"
      },
      "index": {
        "description": "",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "SerialPortSettings",
        "normalized": "",
        "package": "serialport",
        "partial": "Serial Port Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#t:StopBits",
      "description": {
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "data",
        "fct-source": "src/System-Hardware-Serialport-Types.html#StopBits",
        "fct-type": "data",
        "title": "StopBits"
      },
      "index": {
        "description": "",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "StopBits",
        "normalized": "",
        "package": "serialport",
        "partial": "Stop Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:CS110",
      "description": {
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "CS110",
        "fct-source": "src/System-Hardware-Serialport-Types.html#CommSpeed",
        "fct-type": "function",
        "title": "CS110"
      },
      "index": {
        "description": "",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "CS110",
        "normalized": "",
        "package": "serialport",
        "partial": "CS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:CS115200",
      "description": {
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "CS115200",
        "fct-source": "src/System-Hardware-Serialport-Types.html#CommSpeed",
        "fct-type": "function",
        "title": "CS115200"
      },
      "index": {
        "description": "",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "CS115200",
        "normalized": "",
        "package": "serialport",
        "partial": "CS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:CS1200",
      "description": {
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "CS1200",
        "fct-source": "src/System-Hardware-Serialport-Types.html#CommSpeed",
        "fct-type": "function",
        "title": "CS1200"
      },
      "index": {
        "description": "",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "CS1200",
        "normalized": "",
        "package": "serialport",
        "partial": "CS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:CS19200",
      "description": {
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "CS19200",
        "fct-source": "src/System-Hardware-Serialport-Types.html#CommSpeed",
        "fct-type": "function",
        "title": "CS19200"
      },
      "index": {
        "description": "",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "CS19200",
        "normalized": "",
        "package": "serialport",
        "partial": "CS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:CS2400",
      "description": {
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "CS2400",
        "fct-source": "src/System-Hardware-Serialport-Types.html#CommSpeed",
        "fct-type": "function",
        "title": "CS2400"
      },
      "index": {
        "description": "",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "CS2400",
        "normalized": "",
        "package": "serialport",
        "partial": "CS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:CS300",
      "description": {
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "CS300",
        "fct-source": "src/System-Hardware-Serialport-Types.html#CommSpeed",
        "fct-type": "function",
        "title": "CS300"
      },
      "index": {
        "description": "",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "CS300",
        "normalized": "",
        "package": "serialport",
        "partial": "CS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:CS38400",
      "description": {
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "CS38400",
        "fct-source": "src/System-Hardware-Serialport-Types.html#CommSpeed",
        "fct-type": "function",
        "title": "CS38400"
      },
      "index": {
        "description": "",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "CS38400",
        "normalized": "",
        "package": "serialport",
        "partial": "CS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:CS4800",
      "description": {
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "CS4800",
        "fct-source": "src/System-Hardware-Serialport-Types.html#CommSpeed",
        "fct-type": "function",
        "title": "CS4800"
      },
      "index": {
        "description": "",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "CS4800",
        "normalized": "",
        "package": "serialport",
        "partial": "CS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:CS57600",
      "description": {
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "CS57600",
        "fct-source": "src/System-Hardware-Serialport-Types.html#CommSpeed",
        "fct-type": "function",
        "title": "CS57600"
      },
      "index": {
        "description": "",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "CS57600",
        "normalized": "",
        "package": "serialport",
        "partial": "CS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:CS600",
      "description": {
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "CS600",
        "fct-source": "src/System-Hardware-Serialport-Types.html#CommSpeed",
        "fct-type": "function",
        "title": "CS600"
      },
      "index": {
        "description": "",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "CS600",
        "normalized": "",
        "package": "serialport",
        "partial": "CS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:CS9600",
      "description": {
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "CS9600",
        "fct-source": "src/System-Hardware-Serialport-Types.html#CommSpeed",
        "fct-type": "function",
        "title": "CS9600"
      },
      "index": {
        "description": "",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "CS9600",
        "normalized": "",
        "package": "serialport",
        "partial": "CS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:Even",
      "description": {
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "Even",
        "fct-source": "src/System-Hardware-Serialport-Types.html#Parity",
        "fct-type": "function",
        "title": "Even"
      },
      "index": {
        "description": "",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "Even",
        "normalized": "",
        "package": "serialport",
        "partial": "Even",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:NoFlowControl",
      "description": {
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "NoFlowControl",
        "fct-source": "src/System-Hardware-Serialport-Types.html#FlowControl",
        "fct-type": "function",
        "title": "NoFlowControl"
      },
      "index": {
        "description": "",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "NoFlowControl",
        "normalized": "",
        "package": "serialport",
        "partial": "No Flow Control",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:NoParity",
      "description": {
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "NoParity",
        "fct-source": "src/System-Hardware-Serialport-Types.html#Parity",
        "fct-type": "function",
        "title": "NoParity"
      },
      "index": {
        "description": "",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "NoParity",
        "normalized": "",
        "package": "serialport",
        "partial": "No Parity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:Odd",
      "description": {
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "Odd",
        "fct-source": "src/System-Hardware-Serialport-Types.html#Parity",
        "fct-type": "function",
        "title": "Odd"
      },
      "index": {
        "description": "",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "Odd",
        "normalized": "",
        "package": "serialport",
        "partial": "Odd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:One",
      "description": {
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "One",
        "fct-source": "src/System-Hardware-Serialport-Types.html#StopBits",
        "fct-type": "function",
        "title": "One"
      },
      "index": {
        "description": "",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "One",
        "normalized": "",
        "package": "serialport",
        "partial": "One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:SerialPortSettings",
      "description": {
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "SerialPortSettings",
        "fct-source": "src/System-Hardware-Serialport-Types.html#SerialPortSettings",
        "fct-type": "function",
        "title": "SerialPortSettings"
      },
      "index": {
        "description": "",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "SerialPortSettings",
        "normalized": "",
        "package": "serialport",
        "partial": "Serial Port Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:Software",
      "description": {
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "Software",
        "fct-source": "src/System-Hardware-Serialport-Types.html#FlowControl",
        "fct-type": "function",
        "title": "Software"
      },
      "index": {
        "description": "",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "Software",
        "normalized": "",
        "package": "serialport",
        "partial": "Software",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:Two",
      "description": {
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "Two",
        "fct-source": "src/System-Hardware-Serialport-Types.html#StopBits",
        "fct-type": "function",
        "title": "Two"
      },
      "index": {
        "description": "",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "Two",
        "normalized": "",
        "package": "serialport",
        "partial": "Two",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:bitsPerWord",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of bits in a word\n\u003c/p\u003e",
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "Word8",
        "fct-source": "src/System-Hardware-Serialport-Types.html#SerialPortSettings",
        "fct-type": "function",
        "title": "bitsPerWord"
      },
      "index": {
        "description": "Number of bits in word",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "bitsPerWord",
        "normalized": "",
        "package": "serialport",
        "partial": "Per Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:closeSerial",
      "description": {
        "fct-descr": "\u003cp\u003eClose the serial port\n\u003c/p\u003e",
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "SerialPort -\u003e IO ()",
        "fct-source": "src/System-Hardware-Serialport-Posix.html#closeSerial",
        "fct-type": "function",
        "title": "closeSerial"
      },
      "index": {
        "description": "Close the serial port",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "closeSerial",
        "normalized": "SerialPort-\u003eIO()",
        "package": "serialport",
        "partial": "Serial",
        "signature": "SerialPort-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:commSpeed",
      "description": {
        "fct-descr": "\u003cp\u003ebaudrate\n\u003c/p\u003e",
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "CommSpeed",
        "fct-source": "src/System-Hardware-Serialport-Types.html#SerialPortSettings",
        "fct-type": "function",
        "title": "commSpeed"
      },
      "index": {
        "description": "baudrate",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "commSpeed",
        "normalized": "",
        "package": "serialport",
        "partial": "Speed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:defaultSerialSettings",
      "description": {
        "fct-descr": "\u003cp\u003eMost commonly used configuration\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 9600 baud\n\u003c/li\u003e\u003cli\u003e 8 data bits\n\u003c/li\u003e\u003cli\u003e 1 stop bit\n\u003c/li\u003e\u003cli\u003e no parity\n\u003c/li\u003e\u003cli\u003e no flow control\n\u003c/li\u003e\u003cli\u003e 0.1 second receive timeout\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "SerialPortSettings",
        "fct-source": "src/System-Hardware-Serialport-Types.html#defaultSerialSettings",
        "fct-type": "function",
        "title": "defaultSerialSettings"
      },
      "index": {
        "description": "Most commonly used configuration baud data bits stop bit no parity no flow control second receive timeout",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "defaultSerialSettings",
        "normalized": "",
        "package": "serialport",
        "partial": "Serial Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:flowControl",
      "description": {
        "fct-descr": "\u003cp\u003eType of flowcontrol\n\u003c/p\u003e",
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "FlowControl",
        "fct-source": "src/System-Hardware-Serialport-Types.html#SerialPortSettings",
        "fct-type": "function",
        "title": "flowControl"
      },
      "index": {
        "description": "Type of flowcontrol",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "flowControl",
        "normalized": "",
        "package": "serialport",
        "partial": "Control",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:flush",
      "description": {
        "fct-descr": "\u003cp\u003eFlush buffers\n\u003c/p\u003e",
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "SerialPort -\u003e IO ()",
        "fct-source": "src/System-Hardware-Serialport-Posix.html#flush",
        "fct-type": "function",
        "title": "flush"
      },
      "index": {
        "description": "Flush buffers",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "flush",
        "normalized": "SerialPort-\u003eIO()",
        "package": "serialport",
        "partial": "",
        "signature": "SerialPort-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:getSerialSettings",
      "description": {
        "fct-descr": "\u003cp\u003eGet configuration from serial port\n\u003c/p\u003e",
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "SerialPort -\u003e SerialPortSettings",
        "fct-source": "src/System-Hardware-Serialport-Posix.html#getSerialSettings",
        "fct-type": "function",
        "title": "getSerialSettings"
      },
      "index": {
        "description": "Get configuration from serial port",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "getSerialSettings",
        "normalized": "SerialPort-\u003eSerialPortSettings",
        "package": "serialport",
        "partial": "Serial Settings",
        "signature": "SerialPort-\u003eSerialPortSettings"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:hOpenSerial",
      "description": {
        "fct-descr": "\u003cp\u003eOpen and configure a serial port returning a standard Handle\n\u003c/p\u003e",
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "FilePath -\u003e SerialPortSettings -\u003e IO Handle",
        "fct-source": "src/System-Hardware-Serialport-Posix.html#hOpenSerial",
        "fct-type": "function",
        "title": "hOpenSerial"
      },
      "index": {
        "description": "Open and configure serial port returning standard Handle",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "hOpenSerial",
        "normalized": "FilePath-\u003eSerialPortSettings-\u003eIO Handle",
        "package": "serialport",
        "partial": "Open Serial",
        "signature": "FilePath-\u003eSerialPortSettings-\u003eIO Handle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:openSerial",
      "description": {
        "fct-descr": "\u003cp\u003eOpen and configure a serial port\n\u003c/p\u003e",
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "FilePath-\u003e SerialPortSettings-\u003e IO SerialPort",
        "fct-type": "function",
        "title": "openSerial"
      },
      "index": {
        "description": "Open and configure serial port",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "openSerial",
        "normalized": "FilePath-\u003eSerialPortSettings-\u003eIO SerialPort",
        "package": "serialport",
        "partial": "Serial",
        "signature": "FilePath-\u003eSerialPortSettings-\u003eIO SerialPort"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:parity",
      "description": {
        "fct-descr": "\u003cp\u003eType of parity\n\u003c/p\u003e",
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "Parity",
        "fct-source": "src/System-Hardware-Serialport-Types.html#SerialPortSettings",
        "fct-type": "function",
        "title": "parity"
      },
      "index": {
        "description": "Type of parity",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "parity",
        "normalized": "",
        "package": "serialport",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:recv",
      "description": {
        "fct-descr": "\u003cp\u003eReceive bytes, given the maximum number\n\u003c/p\u003e",
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "SerialPort -\u003e Int -\u003e IO ByteString",
        "fct-source": "src/System-Hardware-Serialport-Posix.html#recv",
        "fct-type": "function",
        "title": "recv"
      },
      "index": {
        "description": "Receive bytes given the maximum number",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "recv",
        "normalized": "SerialPort-\u003eInt-\u003eIO ByteString",
        "package": "serialport",
        "partial": "",
        "signature": "SerialPort-\u003eInt-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eSend bytes\n\u003c/p\u003e",
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "SerialPort-\u003e ByteString-\u003e IO Int",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "Send bytes",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "send",
        "normalized": "SerialPort-\u003eByteString-\u003eIO Int",
        "package": "serialport",
        "partial": "",
        "signature": "SerialPort-\u003eByteString-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:setDTR",
      "description": {
        "fct-descr": "\u003cp\u003eSet the Data Terminal Ready level\n\u003c/p\u003e",
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "SerialPort -\u003e Bool -\u003e IO ()",
        "fct-source": "src/System-Hardware-Serialport-Posix.html#setDTR",
        "fct-type": "function",
        "title": "setDTR"
      },
      "index": {
        "description": "Set the Data Terminal Ready level",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "setDTR",
        "normalized": "SerialPort-\u003eBool-\u003eIO()",
        "package": "serialport",
        "partial": "DTR",
        "signature": "SerialPort-\u003eBool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:setRTS",
      "description": {
        "fct-descr": "\u003cp\u003eSet the Ready to send level\n\u003c/p\u003e",
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "SerialPort -\u003e Bool -\u003e IO ()",
        "fct-source": "src/System-Hardware-Serialport-Posix.html#setRTS",
        "fct-type": "function",
        "title": "setRTS"
      },
      "index": {
        "description": "Set the Ready to send level",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "setRTS",
        "normalized": "SerialPort-\u003eBool-\u003eIO()",
        "package": "serialport",
        "partial": "RTS",
        "signature": "SerialPort-\u003eBool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:setSerialSettings",
      "description": {
        "fct-descr": "\u003cp\u003eConfigure the serial port\n\u003c/p\u003e",
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "SerialPort-\u003e SerialPortSettings-\u003e IO SerialPort",
        "fct-type": "function",
        "title": "setSerialSettings"
      },
      "index": {
        "description": "Configure the serial port",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "setSerialSettings",
        "normalized": "SerialPort-\u003eSerialPortSettings-\u003eIO SerialPort",
        "package": "serialport",
        "partial": "Serial Settings",
        "signature": "SerialPort-\u003eSerialPortSettings-\u003eIO SerialPort"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:stopb",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of stop bits\n\u003c/p\u003e",
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "StopBits",
        "fct-source": "src/System-Hardware-Serialport-Types.html#SerialPortSettings",
        "fct-type": "function",
        "title": "stopb"
      },
      "index": {
        "description": "Number of stop bits",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "stopb",
        "normalized": "",
        "package": "serialport",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:timeout",
      "description": {
        "fct-descr": "\u003cp\u003eTimeout when receiving a char in tenth of seconds\n\u003c/p\u003e",
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "Int",
        "fct-source": "src/System-Hardware-Serialport-Types.html#SerialPortSettings",
        "fct-type": "function",
        "title": "timeout"
      },
      "index": {
        "description": "Timeout when receiving char in tenth of seconds",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "timeout",
        "normalized": "",
        "package": "serialport",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serialport/docs/System-Hardware-Serialport.html#v:withSerial",
      "description": {
        "fct-descr": "\u003cp\u003eSafer device function, so you don't forget to close the device\n\u003c/p\u003e",
        "fct-module": "System.Hardware.Serialport",
        "fct-package": "serialport",
        "fct-signature": "String -\u003e SerialPortSettings -\u003e (SerialPort -\u003e IO a) -\u003e IO a",
        "fct-source": "src/System-Hardware-Serialport.html#withSerial",
        "fct-type": "function",
        "title": "withSerial"
      },
      "index": {
        "description": "Safer device function so you don forget to close the device",
        "hierarchy": "System Hardware Serialport",
        "module": "System.Hardware.Serialport",
        "name": "withSerial",
        "normalized": "String-\u003eSerialPortSettings-\u003e(SerialPort-\u003eIO a)-\u003eIO a",
        "package": "serialport",
        "partial": "Serial",
        "signature": "String-\u003eSerialPortSettings-\u003e(SerialPort-\u003eIO a)-\u003eIO a"
      }
    }
  }
]