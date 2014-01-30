[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial-Manager.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMany serial devices allow multiple commands to run at once, and\n | return their results as they finish.  To make use of this,\n | multiple commands needs to read and write to the serial port at\n | once, and the return values must somehow be sorted and returned\n | back to the callers.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Serial.Manager",
        "fct-package": "serial",
        "fct-signature": "module",
        "fct-source": "src/System-Serial-Manager.html",
        "fct-type": "module",
        "title": "Manager"
      },
      "index": {
        "description": "Many serial devices allow multiple commands to run at once and return their results as they finish To make use of this multiple commands needs to read and write to the serial port at once and the return values must somehow be sorted and returned back to the callers",
        "hierarchy": "System Serial Manager",
        "module": "System.Serial.Manager",
        "name": "Manager",
        "normalized": "",
        "package": "serial",
        "partial": "Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial-Manager.html#t:SerialCommand",
      "description": {
        "fct-module": "System.Serial.Manager",
        "fct-package": "serial",
        "fct-signature": "data",
        "fct-source": "src/System-Serial-Manager.html#SerialCommand",
        "fct-type": "data",
        "title": "SerialCommand"
      },
      "index": {
        "description": "",
        "hierarchy": "System Serial Manager",
        "module": "System.Serial.Manager",
        "name": "SerialCommand",
        "normalized": "",
        "package": "serial",
        "partial": "Serial Command",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial-Manager.html#t:SerialManager",
      "description": {
        "fct-module": "System.Serial.Manager",
        "fct-package": "serial",
        "fct-signature": "data",
        "fct-source": "src/System-Serial-Manager.html#SerialManager",
        "fct-type": "data",
        "title": "SerialManager"
      },
      "index": {
        "description": "",
        "hierarchy": "System Serial Manager",
        "module": "System.Serial.Manager",
        "name": "SerialManager",
        "normalized": "",
        "package": "serial",
        "partial": "Serial Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial-Manager.html#v:closeSerialManager",
      "description": {
        "fct-descr": "\u003cp\u003eHaving multiple serial managers running on the same port is a disaster waiting\n to happen.  When you're done with a \u003ccode\u003e\u003ca\u003eSerialManager\u003c/a\u003e\u003c/code\u003e, run \u003ccode\u003e\u003ca\u003ecloseSerialManager\u003c/a\u003e\u003c/code\u003e on\n it to shut it down.\n\u003c/p\u003e",
        "fct-module": "System.Serial.Manager",
        "fct-package": "serial",
        "fct-signature": "SerialManager -\u003e IO ()",
        "fct-source": "src/System-Serial-Manager.html#closeSerialManager",
        "fct-type": "function",
        "title": "closeSerialManager"
      },
      "index": {
        "description": "Having multiple serial managers running on the same port is disaster waiting to happen When you re done with SerialManager run closeSerialManager on it to shut it down",
        "hierarchy": "System Serial Manager",
        "module": "System.Serial.Manager",
        "name": "closeSerialManager",
        "normalized": "SerialManager-\u003eIO()",
        "package": "serial",
        "partial": "Serial Manager",
        "signature": "SerialManager-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial-Manager.html#v:serialManager",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eserialManager\u003c/a\u003e\u003c/code\u003e takes produces a structure around a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e to\n | handle multiple callers to the serial port.  The return value is\n | the channel to which all commands will flow.  Users should use\n | the \u003ccode\u003e\u003ca\u003ewrapCommand\u003c/a\u003e\u003c/code\u003e function to access it instead of trying to\n | access its details directly.\n\u003c/p\u003e",
        "fct-module": "System.Serial.Manager",
        "fct-package": "serial",
        "fct-signature": "Handle-\u003e String-\u003e String-\u003e IO SerialManager",
        "fct-type": "function",
        "title": "serialManager"
      },
      "index": {
        "description": "serialManager takes produces structure around Handle to handle multiple callers to the serial port The return value is the channel to which all commands will flow Users should use the wrapCommand function to access it instead of trying to access its details directly",
        "hierarchy": "System Serial Manager",
        "module": "System.Serial.Manager",
        "name": "serialManager",
        "normalized": "Handle-\u003eString-\u003eString-\u003eIO SerialManager",
        "package": "serial",
        "partial": "Manager",
        "signature": "Handle-\u003eString-\u003eString-\u003eIO SerialManager"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial-Manager.html#v:wrapCommand",
      "description": {
        "fct-descr": "\u003cp\u003eAll the commands to operate a \u003ccode\u003e\u003ca\u003eSerialManager\u003c/a\u003e\u003c/code\u003e should be\n specializations of \u003ccode\u003e\u003ca\u003ewrapCommand\u003c/a\u003e\u003c/code\u003e, created by applying it to the\n first three arguments, then using that thereafter as the command to\n the serial port.\n\u003c/p\u003e\u003cp\u003eFor example, the Olympus IX-81 requires a login command from the\n user (\u003ccode\u003e2LOG IN\u003c/code\u003e) followed by \u003ccode\u003ern\u003c/code\u003e as an end of line.  The\n response will be \u003ccode\u003e2LOG +\u003c/code\u003e followed by \u003ccode\u003er\u003c/code\u003e.  So a login command\n would look like\n\u003c/p\u003e\u003cpre\u003e p = (\"2LOG\" `isPrefixOf`)\n\u003c/pre\u003e\u003cpre\u003e login mgr = wrapCommand \"\\r\\n\" \"2LOG IN\" p\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ewrapCommand\u003c/a\u003e\u003c/code\u003e uses functions of type 'String -\u003e Bool' users can choose\n whether or not to match any given command based upon its contents,\n rather than just blindly saying whether it matches or not.\n\u003c/p\u003e",
        "fct-module": "System.Serial.Manager",
        "fct-package": "serial",
        "fct-signature": "String-\u003e (String -\u003e Bool)-\u003e SerialManager-\u003e IO String",
        "fct-type": "function",
        "title": "wrapCommand"
      },
      "index": {
        "description": "All the commands to operate SerialManager should be specializations of wrapCommand created by applying it to the first three arguments then using that thereafter as the command to the serial port For example the Olympus IX-81 requires login command from the user LOG IN followed by rn as an end of line The response will be LOG followed by So login command would look like LOG isPrefixOf login mgr wrapCommand LOG IN wrapCommand uses functions of type String Bool users can choose whether or not to match any given command based upon its contents rather than just blindly saying whether it matches or not",
        "hierarchy": "System Serial Manager",
        "module": "System.Serial.Manager",
        "name": "wrapCommand",
        "normalized": "String-\u003e(String-\u003eBool)-\u003eSerialManager-\u003eIO String",
        "package": "serial",
        "partial": "Command",
        "signature": "String-\u003e(String-\u003eBool)-\u003eSerialManager-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial-Manager.html#v:wrapCommandWithCallback",
      "description": {
        "fct-descr": "\u003cp\u003eSometimes we don't want the current thread to block, but we still \n want some action when the a command returns from the serial port.  To\n that end, \u003ccode\u003e\u003ca\u003ewrapCommandWithCallback\u003c/a\u003e\u003c/code\u003e lets us pass a function of type\n 'String -\u003e IO ()' to be executed when a response is recognized\n by the predicate.\n\u003c/p\u003e",
        "fct-module": "System.Serial.Manager",
        "fct-package": "serial",
        "fct-signature": "String-\u003e (String -\u003e Bool)-\u003e (String -\u003e IO ())-\u003e SerialManager-\u003e IO ThreadId",
        "fct-type": "function",
        "title": "wrapCommandWithCallback"
      },
      "index": {
        "description": "Sometimes we don want the current thread to block but we still want some action when the command returns from the serial port To that end wrapCommandWithCallback lets us pass function of type String IO to be executed when response is recognized by the predicate",
        "hierarchy": "System Serial Manager",
        "module": "System.Serial.Manager",
        "name": "wrapCommandWithCallback",
        "normalized": "String-\u003e(String-\u003eBool)-\u003e(String-\u003eIO())-\u003eSerialManager-\u003eIO ThreadId",
        "package": "serial",
        "partial": "Command With Callback",
        "signature": "String-\u003e(String-\u003eBool)-\u003e(String-\u003eIO())-\u003eSerialManager-\u003eIO ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial-Manager.html#v:wrapDeafCommand",
      "description": {
        "fct-descr": "\u003cp\u003eSome commands don't expect any response from the hardware on the far end.\n For these cases, use \u003ccode\u003e\u003ca\u003ewrapDeafCommand\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Serial.Manager",
        "fct-package": "serial",
        "fct-signature": "String-\u003e SerialManager-\u003e IO ()",
        "fct-type": "function",
        "title": "wrapDeafCommand"
      },
      "index": {
        "description": "Some commands don expect any response from the hardware on the far end For these cases use wrapDeafCommand",
        "hierarchy": "System Serial Manager",
        "module": "System.Serial.Manager",
        "name": "wrapDeafCommand",
        "normalized": "String-\u003eSerialManager-\u003eIO()",
        "package": "serial",
        "partial": "Deaf Command",
        "signature": "String-\u003eSerialManager-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSerial provides access to serial ports on POSIX compatible\n systems.  The utility functions in \u003ca\u003eSystem.Serial\u003c/a\u003e are in\n line-at-a-time mode by default, but you can set other, more raw\n modes with \u003ccode\u003e\u003ca\u003ehSetBuffering\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eSystem.IO\u003c/a\u003e.  The serial port\n managers in \u003ca\u003eSystem.Serial.Manager\u003c/a\u003e and\n \u003ca\u003eSystem.Serial.BlockingManager\u003c/a\u003e only work with line-at-a-time mode.\n\u003c/p\u003e\u003cp\u003eMost devices hanging off of serial ports today work by reading and\n writing commands.  In many cases, commands are non-blocking and you\n can send additional commands before you receive the response to the\n last one.  \u003ca\u003eSystem.Serial.SerialManager\u003c/a\u003e provides a wrapper around\n this access which tries to match up responses to waiting functions\n which have called it.\n\u003c/p\u003e\u003cp\u003eThe only function here is \u003ccode\u003e\u003ca\u003eopenSerial\u003c/a\u003e\u003c/code\u003e, since thereafter the normal\n functions from \u003ca\u003eSystem.IO\u003c/a\u003e such as \u003ccode\u003e\u003ca\u003ehClose\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehGetLine\u003c/a\u003e\u003c/code\u003e, and\n \u003ccode\u003e\u003ca\u003ehPutStr\u003c/a\u003e\u003c/code\u003e work normally.  Just be sure you send the right end of\n line sequence for your hardware!  Some devices want CR-LF, others\n just LF, others just CR, and they may return their results using a\n different end of line than they accept.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Serial",
        "fct-package": "serial",
        "fct-signature": "module",
        "fct-source": "src/System-Serial.html",
        "fct-type": "module",
        "title": "Serial"
      },
      "index": {
        "description": "Serial provides access to serial ports on POSIX compatible systems The utility functions in System.Serial are in line-at-a-time mode by default but you can set other more raw modes with hSetBuffering from System.IO The serial port managers in System.Serial.Manager and System.Serial.BlockingManager only work with line-at-a-time mode Most devices hanging off of serial ports today work by reading and writing commands In many cases commands are non-blocking and you can send additional commands before you receive the response to the last one System.Serial.SerialManager provides wrapper around this access which tries to match up responses to waiting functions which have called it The only function here is openSerial since thereafter the normal functions from System.IO such as hClose hGetLine and hPutStr work normally Just be sure you send the right end of line sequence for your hardware Some devices want CR-LF others just LF others just CR and they may return their results using different end of line than they accept",
        "hierarchy": "System Serial",
        "module": "System.Serial",
        "name": "Serial",
        "normalized": "",
        "package": "serial",
        "partial": "Serial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial.html#t:FlowControl",
      "description": {
        "fct-module": "System.Serial",
        "fct-package": "serial",
        "fct-signature": "data",
        "fct-source": "src/System-Serial.html#FlowControl",
        "fct-type": "data",
        "title": "FlowControl"
      },
      "index": {
        "description": "",
        "hierarchy": "System Serial",
        "module": "System.Serial",
        "name": "FlowControl",
        "normalized": "",
        "package": "serial",
        "partial": "Flow Control",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial.html#t:Parity",
      "description": {
        "fct-module": "System.Serial",
        "fct-package": "serial",
        "fct-signature": "data",
        "fct-source": "src/System-Serial.html#Parity",
        "fct-type": "data",
        "title": "Parity"
      },
      "index": {
        "description": "",
        "hierarchy": "System Serial",
        "module": "System.Serial",
        "name": "Parity",
        "normalized": "",
        "package": "serial",
        "partial": "Parity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial.html#t:StopBits",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ca\u003eSerial\u003c/a\u003e lets the user set the number of stop bits, the parity,\n flow control (there is no hardware flow control, since it isn't\n supported in the \u003ca\u003eSystem.Posix.IO\u003c/a\u003e library), number of bits per\n byte, and the baud rate.  The baud rate is declared by the\n \u003ccode\u003e\u003ca\u003eBaudRate\u003c/a\u003e\u003c/code\u003e in \u003ca\u003eSystem.Posix.Terminal\u003c/a\u003e.  \u003ccode\u003e\u003ca\u003eStopBits\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eParity\u003c/a\u003e\u003c/code\u003e, and\n \u003ccode\u003e\u003ca\u003eFlowControl\u003c/a\u003e\u003c/code\u003e are defined here.\n\u003c/p\u003e",
        "fct-module": "System.Serial",
        "fct-package": "serial",
        "fct-signature": "data",
        "fct-source": "src/System-Serial.html#StopBits",
        "fct-type": "data",
        "title": "StopBits"
      },
      "index": {
        "description": "Serial lets the user set the number of stop bits the parity flow control there is no hardware flow control since it isn supported in the System.Posix.IO library number of bits per byte and the baud rate The baud rate is declared by the BaudRate in System.Posix.Terminal StopBits Parity and FlowControl are defined here",
        "hierarchy": "System Serial",
        "module": "System.Serial",
        "name": "StopBits",
        "normalized": "",
        "package": "serial",
        "partial": "Stop Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial.html#v:Even",
      "description": {
        "fct-module": "System.Serial",
        "fct-package": "serial",
        "fct-signature": "Even",
        "fct-source": "src/System-Serial.html#Parity",
        "fct-type": "function",
        "title": "Even"
      },
      "index": {
        "description": "",
        "hierarchy": "System Serial",
        "module": "System.Serial",
        "name": "Even",
        "normalized": "",
        "package": "serial",
        "partial": "Even",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial.html#v:NoFlowControl",
      "description": {
        "fct-module": "System.Serial",
        "fct-package": "serial",
        "fct-signature": "NoFlowControl",
        "fct-source": "src/System-Serial.html#FlowControl",
        "fct-type": "function",
        "title": "NoFlowControl"
      },
      "index": {
        "description": "",
        "hierarchy": "System Serial",
        "module": "System.Serial",
        "name": "NoFlowControl",
        "normalized": "",
        "package": "serial",
        "partial": "No Flow Control",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial.html#v:NoParity",
      "description": {
        "fct-module": "System.Serial",
        "fct-package": "serial",
        "fct-signature": "NoParity",
        "fct-source": "src/System-Serial.html#Parity",
        "fct-type": "function",
        "title": "NoParity"
      },
      "index": {
        "description": "",
        "hierarchy": "System Serial",
        "module": "System.Serial",
        "name": "NoParity",
        "normalized": "",
        "package": "serial",
        "partial": "No Parity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial.html#v:Odd",
      "description": {
        "fct-module": "System.Serial",
        "fct-package": "serial",
        "fct-signature": "Odd",
        "fct-source": "src/System-Serial.html#Parity",
        "fct-type": "function",
        "title": "Odd"
      },
      "index": {
        "description": "",
        "hierarchy": "System Serial",
        "module": "System.Serial",
        "name": "Odd",
        "normalized": "",
        "package": "serial",
        "partial": "Odd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial.html#v:One",
      "description": {
        "fct-module": "System.Serial",
        "fct-package": "serial",
        "fct-signature": "One",
        "fct-source": "src/System-Serial.html#StopBits",
        "fct-type": "function",
        "title": "One"
      },
      "index": {
        "description": "",
        "hierarchy": "System Serial",
        "module": "System.Serial",
        "name": "One",
        "normalized": "",
        "package": "serial",
        "partial": "One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial.html#v:Software",
      "description": {
        "fct-module": "System.Serial",
        "fct-package": "serial",
        "fct-signature": "Software",
        "fct-source": "src/System-Serial.html#FlowControl",
        "fct-type": "function",
        "title": "Software"
      },
      "index": {
        "description": "",
        "hierarchy": "System Serial",
        "module": "System.Serial",
        "name": "Software",
        "normalized": "",
        "package": "serial",
        "partial": "Software",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial.html#v:Two",
      "description": {
        "fct-module": "System.Serial",
        "fct-package": "serial",
        "fct-signature": "Two",
        "fct-source": "src/System-Serial.html#StopBits",
        "fct-type": "function",
        "title": "Two"
      },
      "index": {
        "description": "",
        "hierarchy": "System Serial",
        "module": "System.Serial",
        "name": "Two",
        "normalized": "",
        "package": "serial",
        "partial": "Two",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial.html#v:openSerial",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eopenSerial\u003c/a\u003e\u003c/code\u003e opens the serial port and sets the options the user\n passes, makes its buffering line oriented, and returns the handle\n to control it.  For example, an Olympus IX-81 microscope attached\n to the first serial port on Linux would be opened with\n\u003c/p\u003e\u003cpre\u003e openSerial \"/dev/ttyS0\" B19200 8 One Even Software\n\u003c/pre\u003e",
        "fct-module": "System.Serial",
        "fct-package": "serial",
        "fct-signature": "String-\u003e BaudRate-\u003e Int-\u003e StopBits-\u003e Parity-\u003e FlowControl-\u003e IO Handle",
        "fct-type": "function",
        "title": "openSerial"
      },
      "index": {
        "description": "openSerial opens the serial port and sets the options the user passes makes its buffering line oriented and returns the handle to control it For example an Olympus IX-81 microscope attached to the first serial port on Linux would be opened with openSerial dev ttyS0 B19200 One Even Software",
        "hierarchy": "System Serial",
        "module": "System.Serial",
        "name": "openSerial",
        "normalized": "String-\u003eBaudRate-\u003eInt-\u003eStopBits-\u003eParity-\u003eFlowControl-\u003eIO Handle",
        "package": "serial",
        "partial": "Serial",
        "signature": "String-\u003eBaudRate-\u003eInt-\u003eStopBits-\u003eParity-\u003eFlowControl-\u003eIO Handle"
      }
    }
  }
]