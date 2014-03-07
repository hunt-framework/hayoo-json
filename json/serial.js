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
        "word": "serial"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMany serial devices allow multiple commands to run at once, and\n | return their results as they finish.  To make use of this,\n | multiple commands needs to read and write to the serial port at\n | once, and the return values must somehow be sorted and returned\n | back to the callers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Serial.Manager",
          "name": "Manager",
          "package": "serial",
          "source": "src/System-Serial-Manager.html",
          "type": "module"
        },
        "index": {
          "description": "Many serial devices allow multiple commands to run at once and return their results as they finish To make use of this multiple commands needs to read and write to the serial port at once and the return values must somehow be sorted and returned back to the callers",
          "hierarchy": "System Serial Manager",
          "module": "System.Serial.Manager",
          "name": "Manager",
          "package": "serial",
          "partial": "Manager",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial-Manager.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serial.Manager",
          "name": "SerialCommand",
          "package": "serial",
          "source": "src/System-Serial-Manager.html#SerialCommand",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Serial Manager",
          "module": "System.Serial.Manager",
          "name": "SerialCommand",
          "package": "serial",
          "partial": "Serial Command",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial-Manager.html#t:SerialCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serial.Manager",
          "name": "SerialManager",
          "package": "serial",
          "source": "src/System-Serial-Manager.html#SerialManager",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Serial Manager",
          "module": "System.Serial.Manager",
          "name": "SerialManager",
          "package": "serial",
          "partial": "Serial Manager",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial-Manager.html#t:SerialManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaving multiple serial managers running on the same port is a disaster waiting\n to happen.  When you're done with a \u003ccode\u003e\u003ca\u003eSerialManager\u003c/a\u003e\u003c/code\u003e, run \u003ccode\u003e\u003ca\u003ecloseSerialManager\u003c/a\u003e\u003c/code\u003e on\n it to shut it down.\n\u003c/p\u003e",
          "module": "System.Serial.Manager",
          "name": "closeSerialManager",
          "package": "serial",
          "signature": "SerialManager -\u003e IO ()",
          "source": "src/System-Serial-Manager.html#closeSerialManager",
          "type": "function"
        },
        "index": {
          "description": "Having multiple serial managers running on the same port is disaster waiting to happen When you re done with SerialManager run closeSerialManager on it to shut it down",
          "hierarchy": "System Serial Manager",
          "module": "System.Serial.Manager",
          "name": "closeSerialManager",
          "normalized": "SerialManager-\u003eIO()",
          "package": "serial",
          "partial": "Serial Manager",
          "signature": "SerialManager-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial-Manager.html#v:closeSerialManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eserialManager\u003c/a\u003e\u003c/code\u003e takes produces a structure around a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e to\n | handle multiple callers to the serial port.  The return value is\n | the channel to which all commands will flow.  Users should use\n | the \u003ccode\u003e\u003ca\u003ewrapCommand\u003c/a\u003e\u003c/code\u003e function to access it instead of trying to\n | access its details directly.\n\u003c/p\u003e",
          "module": "System.Serial.Manager",
          "name": "serialManager",
          "package": "serial",
          "signature": "Handle-\u003e String-\u003e String-\u003e IO SerialManager",
          "type": "function"
        },
        "index": {
          "description": "serialManager takes produces structure around Handle to handle multiple callers to the serial port The return value is the channel to which all commands will flow Users should use the wrapCommand function to access it instead of trying to access its details directly",
          "hierarchy": "System Serial Manager",
          "module": "System.Serial.Manager",
          "name": "serialManager",
          "normalized": "Handle-\u003eString-\u003eString-\u003eIO SerialManager",
          "package": "serial",
          "partial": "Manager",
          "signature": "Handle-\u003eString-\u003eString-\u003eIO SerialManager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial-Manager.html#v:serialManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll the commands to operate a \u003ccode\u003e\u003ca\u003eSerialManager\u003c/a\u003e\u003c/code\u003e should be\n specializations of \u003ccode\u003e\u003ca\u003ewrapCommand\u003c/a\u003e\u003c/code\u003e, created by applying it to the\n first three arguments, then using that thereafter as the command to\n the serial port.\n\u003c/p\u003e\u003cp\u003eFor example, the Olympus IX-81 requires a login command from the\n user (\u003ccode\u003e2LOG IN\u003c/code\u003e) followed by \u003ccode\u003ern\u003c/code\u003e as an end of line.  The\n response will be \u003ccode\u003e2LOG +\u003c/code\u003e followed by \u003ccode\u003er\u003c/code\u003e.  So a login command\n would look like\n\u003c/p\u003e\u003cpre\u003e p = (\"2LOG\" `isPrefixOf`)\n\u003c/pre\u003e\u003cpre\u003e login mgr = wrapCommand \"\\r\\n\" \"2LOG IN\" p\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ewrapCommand\u003c/a\u003e\u003c/code\u003e uses functions of type 'String -\u003e Bool' users can choose\n whether or not to match any given command based upon its contents,\n rather than just blindly saying whether it matches or not.\n\u003c/p\u003e",
          "module": "System.Serial.Manager",
          "name": "wrapCommand",
          "package": "serial",
          "signature": "String-\u003e (String -\u003e Bool)-\u003e SerialManager-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "All the commands to operate SerialManager should be specializations of wrapCommand created by applying it to the first three arguments then using that thereafter as the command to the serial port For example the Olympus IX-81 requires login command from the user LOG IN followed by rn as an end of line The response will be LOG followed by So login command would look like LOG isPrefixOf login mgr wrapCommand LOG IN wrapCommand uses functions of type String Bool users can choose whether or not to match any given command based upon its contents rather than just blindly saying whether it matches or not",
          "hierarchy": "System Serial Manager",
          "module": "System.Serial.Manager",
          "name": "wrapCommand",
          "normalized": "String-\u003e(String-\u003eBool)-\u003eSerialManager-\u003eIO String",
          "package": "serial",
          "partial": "Command",
          "signature": "String-\u003e(String-\u003eBool)-\u003eSerialManager-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial-Manager.html#v:wrapCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSometimes we don't want the current thread to block, but we still \n want some action when the a command returns from the serial port.  To\n that end, \u003ccode\u003e\u003ca\u003ewrapCommandWithCallback\u003c/a\u003e\u003c/code\u003e lets us pass a function of type\n 'String -\u003e IO ()' to be executed when a response is recognized\n by the predicate.\n\u003c/p\u003e",
          "module": "System.Serial.Manager",
          "name": "wrapCommandWithCallback",
          "package": "serial",
          "signature": "String-\u003e (String -\u003e Bool)-\u003e (String -\u003e IO ())-\u003e SerialManager-\u003e IO ThreadId",
          "type": "function"
        },
        "index": {
          "description": "Sometimes we don want the current thread to block but we still want some action when the command returns from the serial port To that end wrapCommandWithCallback lets us pass function of type String IO to be executed when response is recognized by the predicate",
          "hierarchy": "System Serial Manager",
          "module": "System.Serial.Manager",
          "name": "wrapCommandWithCallback",
          "normalized": "String-\u003e(String-\u003eBool)-\u003e(String-\u003eIO())-\u003eSerialManager-\u003eIO ThreadId",
          "package": "serial",
          "partial": "Command With Callback",
          "signature": "String-\u003e(String-\u003eBool)-\u003e(String-\u003eIO())-\u003eSerialManager-\u003eIO ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial-Manager.html#v:wrapCommandWithCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome commands don't expect any response from the hardware on the far end.\n For these cases, use \u003ccode\u003e\u003ca\u003ewrapDeafCommand\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Serial.Manager",
          "name": "wrapDeafCommand",
          "package": "serial",
          "signature": "String-\u003e SerialManager-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Some commands don expect any response from the hardware on the far end For these cases use wrapDeafCommand",
          "hierarchy": "System Serial Manager",
          "module": "System.Serial.Manager",
          "name": "wrapDeafCommand",
          "normalized": "String-\u003eSerialManager-\u003eIO()",
          "package": "serial",
          "partial": "Deaf Command",
          "signature": "String-\u003eSerialManager-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial-Manager.html#v:wrapDeafCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSerial provides access to serial ports on POSIX compatible\n systems.  The utility functions in \u003ca\u003eSystem.Serial\u003c/a\u003e are in\n line-at-a-time mode by default, but you can set other, more raw\n modes with \u003ccode\u003e\u003ca\u003ehSetBuffering\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eSystem.IO\u003c/a\u003e.  The serial port\n managers in \u003ca\u003eSystem.Serial.Manager\u003c/a\u003e and\n \u003ca\u003eSystem.Serial.BlockingManager\u003c/a\u003e only work with line-at-a-time mode.\n\u003c/p\u003e\u003cp\u003eMost devices hanging off of serial ports today work by reading and\n writing commands.  In many cases, commands are non-blocking and you\n can send additional commands before you receive the response to the\n last one.  \u003ca\u003eSystem.Serial.SerialManager\u003c/a\u003e provides a wrapper around\n this access which tries to match up responses to waiting functions\n which have called it.\n\u003c/p\u003e\u003cp\u003eThe only function here is \u003ccode\u003e\u003ca\u003eopenSerial\u003c/a\u003e\u003c/code\u003e, since thereafter the normal\n functions from \u003ca\u003eSystem.IO\u003c/a\u003e such as \u003ccode\u003e\u003ca\u003ehClose\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehGetLine\u003c/a\u003e\u003c/code\u003e, and\n \u003ccode\u003e\u003ca\u003ehPutStr\u003c/a\u003e\u003c/code\u003e work normally.  Just be sure you send the right end of\n line sequence for your hardware!  Some devices want CR-LF, others\n just LF, others just CR, and they may return their results using a\n different end of line than they accept.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Serial",
          "name": "Serial",
          "package": "serial",
          "source": "src/System-Serial.html",
          "type": "module"
        },
        "index": {
          "description": "Serial provides access to serial ports on POSIX compatible systems The utility functions in System.Serial are in line-at-a-time mode by default but you can set other more raw modes with hSetBuffering from System.IO The serial port managers in System.Serial.Manager and System.Serial.BlockingManager only work with line-at-a-time mode Most devices hanging off of serial ports today work by reading and writing commands In many cases commands are non-blocking and you can send additional commands before you receive the response to the last one System.Serial.SerialManager provides wrapper around this access which tries to match up responses to waiting functions which have called it The only function here is openSerial since thereafter the normal functions from System.IO such as hClose hGetLine and hPutStr work normally Just be sure you send the right end of line sequence for your hardware Some devices want CR-LF others just LF others just CR and they may return their results using different end of line than they accept",
          "hierarchy": "System Serial",
          "module": "System.Serial",
          "name": "Serial",
          "package": "serial",
          "partial": "Serial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serial",
          "name": "FlowControl",
          "package": "serial",
          "source": "src/System-Serial.html#FlowControl",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Serial",
          "module": "System.Serial",
          "name": "FlowControl",
          "package": "serial",
          "partial": "Flow Control",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial.html#t:FlowControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serial",
          "name": "Parity",
          "package": "serial",
          "source": "src/System-Serial.html#Parity",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Serial",
          "module": "System.Serial",
          "name": "Parity",
          "package": "serial",
          "partial": "Parity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial.html#t:Parity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003eSerial\u003c/a\u003e lets the user set the number of stop bits, the parity,\n flow control (there is no hardware flow control, since it isn't\n supported in the \u003ca\u003eSystem.Posix.IO\u003c/a\u003e library), number of bits per\n byte, and the baud rate.  The baud rate is declared by the\n \u003ccode\u003e\u003ca\u003eBaudRate\u003c/a\u003e\u003c/code\u003e in \u003ca\u003eSystem.Posix.Terminal\u003c/a\u003e.  \u003ccode\u003e\u003ca\u003eStopBits\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eParity\u003c/a\u003e\u003c/code\u003e, and\n \u003ccode\u003e\u003ca\u003eFlowControl\u003c/a\u003e\u003c/code\u003e are defined here.\n\u003c/p\u003e",
          "module": "System.Serial",
          "name": "StopBits",
          "package": "serial",
          "source": "src/System-Serial.html#StopBits",
          "type": "data"
        },
        "index": {
          "description": "Serial lets the user set the number of stop bits the parity flow control there is no hardware flow control since it isn supported in the System.Posix.IO library number of bits per byte and the baud rate The baud rate is declared by the BaudRate in System.Posix.Terminal StopBits Parity and FlowControl are defined here",
          "hierarchy": "System Serial",
          "module": "System.Serial",
          "name": "StopBits",
          "package": "serial",
          "partial": "Stop Bits",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial.html#t:StopBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serial",
          "name": "Even",
          "package": "serial",
          "signature": "Even",
          "source": "src/System-Serial.html#Parity",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Serial",
          "module": "System.Serial",
          "name": "Even",
          "package": "serial",
          "partial": "Even",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial.html#v:Even"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serial",
          "name": "NoFlowControl",
          "package": "serial",
          "signature": "NoFlowControl",
          "source": "src/System-Serial.html#FlowControl",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Serial",
          "module": "System.Serial",
          "name": "NoFlowControl",
          "package": "serial",
          "partial": "No Flow Control",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial.html#v:NoFlowControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serial",
          "name": "NoParity",
          "package": "serial",
          "signature": "NoParity",
          "source": "src/System-Serial.html#Parity",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Serial",
          "module": "System.Serial",
          "name": "NoParity",
          "package": "serial",
          "partial": "No Parity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial.html#v:NoParity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serial",
          "name": "Odd",
          "package": "serial",
          "signature": "Odd",
          "source": "src/System-Serial.html#Parity",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Serial",
          "module": "System.Serial",
          "name": "Odd",
          "package": "serial",
          "partial": "Odd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial.html#v:Odd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serial",
          "name": "One",
          "package": "serial",
          "signature": "One",
          "source": "src/System-Serial.html#StopBits",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Serial",
          "module": "System.Serial",
          "name": "One",
          "package": "serial",
          "partial": "One",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial.html#v:One"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serial",
          "name": "Software",
          "package": "serial",
          "signature": "Software",
          "source": "src/System-Serial.html#FlowControl",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Serial",
          "module": "System.Serial",
          "name": "Software",
          "package": "serial",
          "partial": "Software",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial.html#v:Software"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serial",
          "name": "Two",
          "package": "serial",
          "signature": "Two",
          "source": "src/System-Serial.html#StopBits",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Serial",
          "module": "System.Serial",
          "name": "Two",
          "package": "serial",
          "partial": "Two",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial.html#v:Two"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eopenSerial\u003c/a\u003e\u003c/code\u003e opens the serial port and sets the options the user\n passes, makes its buffering line oriented, and returns the handle\n to control it.  For example, an Olympus IX-81 microscope attached\n to the first serial port on Linux would be opened with\n\u003c/p\u003e\u003cpre\u003e openSerial \"/dev/ttyS0\" B19200 8 One Even Software\n\u003c/pre\u003e",
          "module": "System.Serial",
          "name": "openSerial",
          "package": "serial",
          "signature": "String-\u003e BaudRate-\u003e Int-\u003e StopBits-\u003e Parity-\u003e FlowControl-\u003e IO Handle",
          "type": "function"
        },
        "index": {
          "description": "openSerial opens the serial port and sets the options the user passes makes its buffering line oriented and returns the handle to control it For example an Olympus IX-81 microscope attached to the first serial port on Linux would be opened with openSerial dev ttyS0 B19200 One Even Software",
          "hierarchy": "System Serial",
          "module": "System.Serial",
          "name": "openSerial",
          "normalized": "String-\u003eBaudRate-\u003eInt-\u003eStopBits-\u003eParity-\u003eFlowControl-\u003eIO Handle",
          "package": "serial",
          "partial": "Serial",
          "signature": "String-\u003eBaudRate-\u003eInt-\u003eStopBits-\u003eParity-\u003eFlowControl-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serial/docs/System-Serial.html#v:openSerial"
      }
    }
  ]
]