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
        "word": "robot"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLow-level wrappers around the XTest protocol.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Robot.Internal.XTest",
          "name": "XTest",
          "package": "robot",
          "source": "src/Test-Robot-Internal-XTest.html",
          "type": "module"
        },
        "index": {
          "description": "Low-level wrappers around the XTest protocol",
          "hierarchy": "Test Robot Internal XTest",
          "module": "Test.Robot.Internal.XTest",
          "name": "XTest",
          "package": "robot",
          "partial": "XTest",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Internal-XTest.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Internal.XTest",
          "name": "button",
          "package": "robot",
          "signature": "Connection -\u003e Bool -\u003e BUTTON -\u003e IO ()",
          "source": "src/Test-Robot-Internal-XTest.html#button",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Internal XTest",
          "module": "Test.Robot.Internal.XTest",
          "name": "button",
          "normalized": "Connection-\u003eBool-\u003eBUTTON-\u003eIO()",
          "package": "robot",
          "signature": "Connection-\u003eBool-\u003eBUTTON-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Internal-XTest.html#v:button"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a structure mapping keysyms to their keycode.\n\u003c/p\u003e",
          "module": "Test.Robot.Internal.XTest",
          "name": "getKeysymMap",
          "package": "robot",
          "signature": "Connection -\u003e IO (Map KEYSYM KEYCODE)",
          "source": "src/Test-Robot-Internal-XTest.html#getKeysymMap",
          "type": "function"
        },
        "index": {
          "description": "Return structure mapping keysyms to their keycode",
          "hierarchy": "Test Robot Internal XTest",
          "module": "Test.Robot.Internal.XTest",
          "name": "getKeysymMap",
          "normalized": "Connection-\u003eIO(Map KEYSYM KEYCODE)",
          "package": "robot",
          "partial": "Keysym Map",
          "signature": "Connection-\u003eIO(Map KEYSYM KEYCODE)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Internal-XTest.html#v:getKeysymMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Internal.XTest",
          "name": "keyboard",
          "package": "robot",
          "signature": "Connection -\u003e Bool -\u003e KEYCODE -\u003e IO ()",
          "source": "src/Test-Robot-Internal-XTest.html#keyboard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Internal XTest",
          "module": "Test.Robot.Internal.XTest",
          "name": "keyboard",
          "normalized": "Connection-\u003eBool-\u003eKEYCODE-\u003eIO()",
          "package": "robot",
          "signature": "Connection-\u003eBool-\u003eKEYCODE-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Internal-XTest.html#v:keyboard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Internal.XTest",
          "name": "motion",
          "package": "robot",
          "signature": "Connection -\u003e Bool -\u003e (Int16, Int16) -\u003e IO ()",
          "source": "src/Test-Robot-Internal-XTest.html#motion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Internal XTest",
          "module": "Test.Robot.Internal.XTest",
          "name": "motion",
          "normalized": "Connection-\u003eBool-\u003e(Int,Int)-\u003eIO()",
          "package": "robot",
          "signature": "Connection-\u003eBool-\u003e(Int,Int)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Internal-XTest.html#v:motion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMiscellaneous low-level functions. You should rarely need to use\n these directly.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Robot.Internal",
          "name": "Internal",
          "package": "robot",
          "source": "src/Test-Robot-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Miscellaneous low-level functions You should rarely need to use these directly",
          "hierarchy": "Test Robot Internal",
          "module": "Test.Robot.Internal",
          "name": "Internal",
          "package": "robot",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Robot monad: a reader monad over IO.\n\u003c/p\u003e",
          "module": "Test.Robot.Internal",
          "name": "Robot",
          "package": "robot",
          "source": "src/Test-Robot-Internal.html#Robot",
          "type": "newtype"
        },
        "index": {
          "description": "The Robot monad reader monad over IO",
          "hierarchy": "Test Robot Internal",
          "module": "Test.Robot.Internal",
          "name": "Robot",
          "package": "robot",
          "partial": "Robot",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Internal.html#t:Robot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Internal",
          "name": "Robot",
          "package": "robot",
          "signature": "Robot",
          "source": "src/Test-Robot-Internal.html#Robot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Internal",
          "module": "Test.Robot.Internal",
          "name": "Robot",
          "package": "robot",
          "partial": "Robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Internal.html#v:Robot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Internal",
          "name": "bracketRobot_",
          "package": "robot",
          "signature": "Robot a -\u003e Robot z -\u003e Robot r -\u003e Robot r",
          "source": "src/Test-Robot-Internal.html#bracketRobot_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Internal",
          "module": "Test.Robot.Internal",
          "name": "bracketRobot_",
          "normalized": "Robot a-\u003eRobot b-\u003eRobot c-\u003eRobot c",
          "package": "robot",
          "partial": "Robot",
          "signature": "Robot a-\u003eRobot z-\u003eRobot r-\u003eRobot r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Internal.html#v:bracketRobot_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Internal",
          "name": "button",
          "package": "robot",
          "signature": "Bool -\u003e Button -\u003e Robot ()",
          "source": "src/Test-Robot-Internal.html#button",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Internal",
          "module": "Test.Robot.Internal",
          "name": "button",
          "normalized": "Bool-\u003eButton-\u003eRobot()",
          "package": "robot",
          "signature": "Bool-\u003eButton-\u003eRobot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Internal.html#v:button"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Internal",
          "name": "keyboard",
          "package": "robot",
          "signature": "Bool -\u003e Key -\u003e Robot ()",
          "source": "src/Test-Robot-Internal.html#keyboard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Internal",
          "module": "Test.Robot.Internal",
          "name": "keyboard",
          "normalized": "Bool-\u003eKey-\u003eRobot()",
          "package": "robot",
          "signature": "Bool-\u003eKey-\u003eRobot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Internal.html#v:keyboard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Internal",
          "name": "mkRobot",
          "package": "robot",
          "signature": "((Connection, Map KEYSYM KEYCODE) -\u003e IO a) -\u003e Robot a",
          "source": "src/Test-Robot-Internal.html#mkRobot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Internal",
          "module": "Test.Robot.Internal",
          "name": "mkRobot",
          "normalized": "((Connection,Map KEYSYM KEYCODE)-\u003eIO a)-\u003eRobot a",
          "package": "robot",
          "partial": "Robot",
          "signature": "((Connection,Map KEYSYM KEYCODE)-\u003eIO a)-\u003eRobot a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Internal.html#v:mkRobot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Internal",
          "name": "mkRobot'",
          "package": "robot",
          "signature": "(Connection -\u003e IO a) -\u003e Robot a",
          "source": "src/Test-Robot-Internal.html#mkRobot%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Internal",
          "module": "Test.Robot.Internal",
          "name": "mkRobot'",
          "normalized": "(Connection-\u003eIO a)-\u003eRobot a",
          "package": "robot",
          "partial": "Robot'",
          "signature": "(Connection-\u003eIO a)-\u003eRobot a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Internal.html#v:mkRobot-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Internal",
          "name": "motion",
          "package": "robot",
          "signature": "Bool -\u003e Int -\u003e Int -\u003e Robot ()",
          "source": "src/Test-Robot-Internal.html#motion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Internal",
          "module": "Test.Robot.Internal",
          "name": "motion",
          "normalized": "Bool-\u003eInt-\u003eInt-\u003eRobot()",
          "package": "robot",
          "signature": "Bool-\u003eInt-\u003eInt-\u003eRobot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Internal.html#v:motion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the robot, connecting to the display automatically.\n\u003c/p\u003e",
          "module": "[\"Test.Robot.Internal\",\"Test.Robot\"]",
          "name": "runRobot",
          "package": "robot",
          "signature": "Robot a -\u003e IO a",
          "source": "src/Test-Robot-Internal.html#runRobot",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/robot/docs/Test-Robot-Internal.html#v:runRobot\",\"http://hackage.haskell.org/package/robot/docs/Test-Robot.html#v:runRobot\"]"
        },
        "index": {
          "description": "Run the robot connecting to the display automatically",
          "hierarchy": "Test Robot Internal",
          "module": "Test.Robot.Internal",
          "name": "runRobot",
          "normalized": "Robot a-\u003eIO a",
          "package": "robot",
          "partial": "Robot",
          "signature": "Robot a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Internal.html#v:runRobot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the robot using an existing connection.\n\u003c/p\u003e",
          "module": "[\"Test.Robot.Internal\",\"Test.Robot\"]",
          "name": "runRobotWithConnection",
          "package": "robot",
          "signature": "Robot a -\u003e Connection -\u003e IO a",
          "source": "src/Test-Robot-Internal.html#runRobotWithConnection",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/robot/docs/Test-Robot-Internal.html#v:runRobotWithConnection\",\"http://hackage.haskell.org/package/robot/docs/Test-Robot.html#v:runRobotWithConnection\"]"
        },
        "index": {
          "description": "Run the robot using an existing connection",
          "hierarchy": "Test Robot Internal",
          "module": "Test.Robot.Internal",
          "name": "runRobotWithConnection",
          "normalized": "Robot a-\u003eConnection-\u003eIO a",
          "package": "robot",
          "partial": "Robot With Connection",
          "signature": "Robot a-\u003eConnection-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Internal.html#v:runRobotWithConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Internal",
          "name": "unRobot",
          "package": "robot",
          "signature": "ReaderT (Connection, Map KEYSYM KEYCODE) IO a",
          "source": "src/Test-Robot-Internal.html#Robot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Internal",
          "module": "Test.Robot.Internal",
          "name": "unRobot",
          "normalized": "ReaderT(Connection,Map KEYSYM KEYCODE)IO a",
          "package": "robot",
          "partial": "Robot",
          "signature": "ReaderT(Connection,Map KEYSYM KEYCODE)IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Internal.html#v:unRobot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines the \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eButton\u003c/a\u003e\u003c/code\u003e types, along with a list of\n constants of those types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Robot.Types",
          "name": "Types",
          "package": "robot",
          "source": "src/Test-Robot-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Defines the Key and Button types along with list of constants of those types",
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "Types",
          "package": "robot",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mouse button or scroll wheel.\n\u003c/p\u003e\u003cp\u003eNote that the scroll wheel is treated as two separate buttons: one\n scrolling up, and one scrolling down.\n\u003c/p\u003e",
          "module": "Test.Robot.Types",
          "name": "Button",
          "package": "robot",
          "source": "src/Test-Robot-Types-Core.html#Button",
          "type": "data"
        },
        "index": {
          "description": "mouse button or scroll wheel Note that the scroll wheel is treated as two separate buttons one scrolling up and one scrolling down",
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "Button",
          "package": "robot",
          "partial": "Button",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#t:Button"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA key on the keyboard.\n\u003c/p\u003e",
          "module": "Test.Robot.Types",
          "name": "Key",
          "package": "robot",
          "source": "src/Test-Robot-Types-Core.html#Key",
          "type": "data"
        },
        "index": {
          "description": "key on the keyboard",
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "Key",
          "package": "robot",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_0",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_0",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_1",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_1",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_2",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_2",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_3",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_3",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_4",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_4",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_5",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_5",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_6",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_6",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_7",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_7",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_8",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_8",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_9",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_9",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_9",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_A",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_A",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Alt",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Alt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Alt",
          "package": "robot",
          "partial": "Alt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Alt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Alt_L",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Alt_L",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Alt_L",
          "package": "robot",
          "partial": "Alt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Alt_L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Alt_R",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Alt_R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Alt_R",
          "package": "robot",
          "partial": "Alt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Alt_R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Ampersand",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Ampersand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Ampersand",
          "package": "robot",
          "partial": "Ampersand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Ampersand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Apostrophe",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Apostrophe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Apostrophe",
          "package": "robot",
          "partial": "Apostrophe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Apostrophe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Asterisk",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Asterisk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Asterisk",
          "package": "robot",
          "partial": "Asterisk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Asterisk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_At",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_At",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_At",
          "package": "robot",
          "partial": "At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_At"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_B",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_B",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Backslash",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Backslash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Backslash",
          "package": "robot",
          "partial": "Backslash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Backslash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Backspace",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Backspace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Backspace",
          "package": "robot",
          "partial": "Backspace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Backspace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Bar",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Bar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Bar",
          "package": "robot",
          "partial": "Bar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Bar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Begin",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Begin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Begin",
          "package": "robot",
          "partial": "Begin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Begin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_BraceLeft",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_BraceLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_BraceLeft",
          "package": "robot",
          "partial": "Brace Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_BraceLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_BraceRight",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_BraceRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_BraceRight",
          "package": "robot",
          "partial": "Brace Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_BraceRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_BracketLeft",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_BracketLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_BracketLeft",
          "package": "robot",
          "partial": "Bracket Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_BracketLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_BracketRight",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_BracketRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_BracketRight",
          "package": "robot",
          "partial": "Bracket Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_BracketRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Break",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Break",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Break",
          "package": "robot",
          "partial": "Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_C",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_C",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Cancel",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Cancel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Cancel",
          "package": "robot",
          "partial": "Cancel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Cancel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_CapsLock",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_CapsLock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_CapsLock",
          "package": "robot",
          "partial": "Caps Lock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_CapsLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Circumflex",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Circumflex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Circumflex",
          "package": "robot",
          "partial": "Circumflex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Circumflex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Clear",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Clear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Clear",
          "package": "robot",
          "partial": "Clear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Clear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Colon",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Colon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Colon",
          "package": "robot",
          "partial": "Colon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Colon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Comma",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Comma",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Comma",
          "package": "robot",
          "partial": "Comma",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Comma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Control",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Control",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Control",
          "package": "robot",
          "partial": "Control",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Control"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Control_L",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Control_L",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Control_L",
          "package": "robot",
          "partial": "Control",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Control_L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Control_R",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Control_R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Control_R",
          "package": "robot",
          "partial": "Control",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Control_R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Ctrl",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Ctrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Ctrl",
          "package": "robot",
          "partial": "Ctrl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Ctrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_D",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_D",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Delete",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Delete",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Delete",
          "package": "robot",
          "partial": "Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Dollar",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Dollar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Dollar",
          "package": "robot",
          "partial": "Dollar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Dollar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Down",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Down",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Down",
          "package": "robot",
          "partial": "Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Down"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_E",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_E",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_End",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_End",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_End",
          "package": "robot",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_End"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Equal",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Equal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Equal",
          "package": "robot",
          "partial": "Equal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Equal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Escape",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Escape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Escape",
          "package": "robot",
          "partial": "Escape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Escape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Exclamation",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Exclamation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Exclamation",
          "package": "robot",
          "partial": "Exclamation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Exclamation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Execute",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Execute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Execute",
          "package": "robot",
          "partial": "Execute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_F",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_F",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_F",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_F1",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_F1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_F1",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_F1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_F10",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_F10",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_F10",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_F10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_F11",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_F11",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_F11",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_F11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_F12",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_F12",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_F12",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_F12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_F13",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_F13",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_F13",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_F13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_F14",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_F14",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_F14",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_F14"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_F15",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_F15",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_F15",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_F15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_F16",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_F16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_F16",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_F16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_F17",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_F17",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_F17",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_F17"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_F18",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_F18",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_F18",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_F18"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_F19",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_F19",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_F19",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_F19"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_F2",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_F2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_F2",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_F2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_F3",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_F3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_F3",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_F3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_F4",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_F4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_F4",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_F4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_F5",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_F5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_F5",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_F5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_F6",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_F6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_F6",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_F6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_F7",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_F7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_F7",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_F7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_F8",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_F8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_F8",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_F8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_F9",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_F9",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_F9",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_F9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Find",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Find",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Find",
          "package": "robot",
          "partial": "Find",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_G",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_G",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_G",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_G"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Grave",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Grave",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Grave",
          "package": "robot",
          "partial": "Grave",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Grave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Greater",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Greater",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Greater",
          "package": "robot",
          "partial": "Greater",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Greater"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_H",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_H",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_H",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_H"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Help",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Help",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Help",
          "package": "robot",
          "partial": "Help",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Help"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Home",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Home",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Home",
          "package": "robot",
          "partial": "Home",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Home"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Hyper",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Hyper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Hyper",
          "package": "robot",
          "partial": "Hyper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Hyper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Hyper_L",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Hyper_L",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Hyper_L",
          "package": "robot",
          "partial": "Hyper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Hyper_L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Hyper_R",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Hyper_R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Hyper_R",
          "package": "robot",
          "partial": "Hyper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Hyper_R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_I",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_I",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_I",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Insert",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Insert",
          "package": "robot",
          "partial": "Insert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_J",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_J",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_J",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_J"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_K",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_K",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_K",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_K"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_0",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_0",
          "package": "robot",
          "partial": "KP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_1",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_1",
          "package": "robot",
          "partial": "KP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_2",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_2",
          "package": "robot",
          "partial": "KP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_3",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_3",
          "package": "robot",
          "partial": "KP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_4",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_4",
          "package": "robot",
          "partial": "KP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_5",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_5",
          "package": "robot",
          "partial": "KP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_6",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_6",
          "package": "robot",
          "partial": "KP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_7",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_7",
          "package": "robot",
          "partial": "KP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_8",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_8",
          "package": "robot",
          "partial": "KP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_9",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_9",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_9",
          "package": "robot",
          "partial": "KP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_Add",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_Add",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_Add",
          "package": "robot",
          "partial": "KP Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_Add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_Begin",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_Begin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_Begin",
          "package": "robot",
          "partial": "KP Begin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_Begin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_Decimal",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_Decimal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_Decimal",
          "package": "robot",
          "partial": "KP Decimal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_Decimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_Delete",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_Delete",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_Delete",
          "package": "robot",
          "partial": "KP Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_Delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_Divide",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_Divide",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_Divide",
          "package": "robot",
          "partial": "KP Divide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_Divide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_Down",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_Down",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_Down",
          "package": "robot",
          "partial": "KP Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_Down"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_End",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_End",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_End",
          "package": "robot",
          "partial": "KP End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_End"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_Enter",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_Enter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_Enter",
          "package": "robot",
          "partial": "KP Enter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_Enter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_Equal",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_Equal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_Equal",
          "package": "robot",
          "partial": "KP Equal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_Equal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_F1",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_F1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_F1",
          "package": "robot",
          "partial": "KP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_F1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_F2",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_F2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_F2",
          "package": "robot",
          "partial": "KP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_F2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_F3",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_F3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_F3",
          "package": "robot",
          "partial": "KP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_F3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_F4",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_F4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_F4",
          "package": "robot",
          "partial": "KP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_F4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_Home",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_Home",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_Home",
          "package": "robot",
          "partial": "KP Home",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_Home"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_Insert",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_Insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_Insert",
          "package": "robot",
          "partial": "KP Insert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_Insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_Left",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_Left",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_Left",
          "package": "robot",
          "partial": "KP Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_Left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_Multiply",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_Multiply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_Multiply",
          "package": "robot",
          "partial": "KP Multiply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_Multiply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_Next",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_Next",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_Next",
          "package": "robot",
          "partial": "KP Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_Next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_PageDown",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_PageDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_PageDown",
          "package": "robot",
          "partial": "KP Page Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_PageDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_PageUp",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_PageUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_PageUp",
          "package": "robot",
          "partial": "KP Page Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_PageUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_Prior",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_Prior",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_Prior",
          "package": "robot",
          "partial": "KP Prior",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_Prior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_Right",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_Right",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_Right",
          "package": "robot",
          "partial": "KP Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_Right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_Separator",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_Separator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_Separator",
          "package": "robot",
          "partial": "KP Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_Separator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_Space",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_Space",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_Space",
          "package": "robot",
          "partial": "KP Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_Space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_Subtract",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_Subtract",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_Subtract",
          "package": "robot",
          "partial": "KP Subtract",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_Subtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_Tab",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_Tab",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_Tab",
          "package": "robot",
          "partial": "KP Tab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_Tab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_KP_Up",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_KP_Up",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_KP_Up",
          "package": "robot",
          "partial": "KP Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_KP_Up"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_L",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_L",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_L",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Left",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Left",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Left",
          "package": "robot",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Less",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Less",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Less",
          "package": "robot",
          "partial": "Less",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Less"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_LineFeed",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_LineFeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_LineFeed",
          "package": "robot",
          "partial": "Line Feed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_LineFeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_M",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_M",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_M",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Menu",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Menu",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Menu",
          "package": "robot",
          "partial": "Menu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Menu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Meta",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Meta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Meta",
          "package": "robot",
          "partial": "Meta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Meta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Meta_L",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Meta_L",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Meta_L",
          "package": "robot",
          "partial": "Meta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Meta_L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Meta_R",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Meta_R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Meta_R",
          "package": "robot",
          "partial": "Meta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Meta_R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Minus",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Minus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Minus",
          "package": "robot",
          "partial": "Minus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Minus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_ModeSwitch",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_ModeSwitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_ModeSwitch",
          "package": "robot",
          "partial": "Mode Switch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_ModeSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_N",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_N",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_N",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Next",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Next",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Next",
          "package": "robot",
          "partial": "Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_NumLock",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_NumLock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_NumLock",
          "package": "robot",
          "partial": "Num Lock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_NumLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_NumberSign",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_NumberSign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_NumberSign",
          "package": "robot",
          "partial": "Number Sign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_NumberSign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_O",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_O",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_O",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_O"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_P",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_P",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_P",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_PageDown",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_PageDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_PageDown",
          "package": "robot",
          "partial": "Page Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_PageDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_PageUp",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_PageUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_PageUp",
          "package": "robot",
          "partial": "Page Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_PageUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_ParenLeft",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_ParenLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_ParenLeft",
          "package": "robot",
          "partial": "Paren Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_ParenLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_ParenRight",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_ParenRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_ParenRight",
          "package": "robot",
          "partial": "Paren Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_ParenRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Pause",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Pause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Pause",
          "package": "robot",
          "partial": "Pause",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Pause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Percent",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Percent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Percent",
          "package": "robot",
          "partial": "Percent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Percent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Period",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Period",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Period",
          "package": "robot",
          "partial": "Period",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Period"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Plus",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Plus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Plus",
          "package": "robot",
          "partial": "Plus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Print",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Print",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Print",
          "package": "robot",
          "partial": "Print",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Print"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Prior",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Prior",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Prior",
          "package": "robot",
          "partial": "Prior",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Prior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Q",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Q",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Q",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Q"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Question",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Question",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Question",
          "package": "robot",
          "partial": "Question",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Question"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Quotation",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Quotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Quotation",
          "package": "robot",
          "partial": "Quotation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Quotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_R",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_R",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Redo",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Redo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Redo",
          "package": "robot",
          "partial": "Redo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Redo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Return",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Return",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Return",
          "package": "robot",
          "partial": "Return",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Right",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Right",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Right",
          "package": "robot",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_S",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_S",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_S",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_ScriptSwitch",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_ScriptSwitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_ScriptSwitch",
          "package": "robot",
          "partial": "Script Switch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_ScriptSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_ScrollLock",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_ScrollLock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_ScrollLock",
          "package": "robot",
          "partial": "Scroll Lock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_ScrollLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Select",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Select",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Select",
          "package": "robot",
          "partial": "Select",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Semicolon",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Semicolon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Semicolon",
          "package": "robot",
          "partial": "Semicolon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Semicolon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Shift",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Shift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Shift",
          "package": "robot",
          "partial": "Shift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Shift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_ShiftLock",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_ShiftLock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_ShiftLock",
          "package": "robot",
          "partial": "Shift Lock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_ShiftLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Shift_L",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Shift_L",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Shift_L",
          "package": "robot",
          "partial": "Shift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Shift_L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Shift_R",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Shift_R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Shift_R",
          "package": "robot",
          "partial": "Shift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Shift_R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Slash",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Slash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Slash",
          "package": "robot",
          "partial": "Slash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Slash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Space",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Space",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Space",
          "package": "robot",
          "partial": "Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Super",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Super",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Super",
          "package": "robot",
          "partial": "Super",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Super"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Super_L",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Super_L",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Super_L",
          "package": "robot",
          "partial": "Super",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Super_L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Super_R",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Super_R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Super_R",
          "package": "robot",
          "partial": "Super",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Super_R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_SysReq",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_SysReq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_SysReq",
          "package": "robot",
          "partial": "Sys Req",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_SysReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_T",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_T",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Tab",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Tab",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Tab",
          "package": "robot",
          "partial": "Tab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Tab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Tilde",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Tilde",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Tilde",
          "package": "robot",
          "partial": "Tilde",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Tilde"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_U",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_U",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_U",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_U"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Underscore",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Underscore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Underscore",
          "package": "robot",
          "partial": "Underscore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Underscore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Undo",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Undo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Undo",
          "package": "robot",
          "partial": "Undo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Undo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Up",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Up",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Up",
          "package": "robot",
          "partial": "Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Up"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_V",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_V",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_V",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_V"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_W",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_W",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_W",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_W"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_X",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_X",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_X",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Y",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Y",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Y",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "_Z",
          "package": "robot",
          "signature": "Key",
          "source": "src/Test-Robot-Types-Keys.html#_Z",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "_Z",
          "package": "robot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:_Z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "backButton",
          "package": "robot",
          "signature": "Button",
          "source": "src/Test-Robot-Types.html#backButton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "backButton",
          "package": "robot",
          "partial": "Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:backButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "customButton",
          "package": "robot",
          "signature": "BUTTON -\u003e Button",
          "source": "src/Test-Robot-Types.html#customButton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "customButton",
          "normalized": "BUTTON-\u003eButton",
          "package": "robot",
          "partial": "Button",
          "signature": "BUTTON-\u003eButton",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:customButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "customKey",
          "package": "robot",
          "signature": "KEYSYM -\u003e Key",
          "source": "src/Test-Robot-Types.html#customKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "customKey",
          "normalized": "KEYSYM-\u003eKey",
          "package": "robot",
          "partial": "Key",
          "signature": "KEYSYM-\u003eKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:customKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "forwardButton",
          "package": "robot",
          "signature": "Button",
          "source": "src/Test-Robot-Types.html#forwardButton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "forwardButton",
          "package": "robot",
          "partial": "Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:forwardButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "leftButton",
          "package": "robot",
          "signature": "Button",
          "source": "src/Test-Robot-Types.html#leftButton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "leftButton",
          "package": "robot",
          "partial": "Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:leftButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "middleButton",
          "package": "robot",
          "signature": "Button",
          "source": "src/Test-Robot-Types.html#middleButton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "middleButton",
          "package": "robot",
          "partial": "Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:middleButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the internal identifier for this button.\n\u003c/p\u003e",
          "module": "Test.Robot.Types",
          "name": "rawButton",
          "package": "robot",
          "signature": "Button -\u003e BUTTON",
          "source": "src/Test-Robot-Types-Core.html#rawButton",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the internal identifier for this button",
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "rawButton",
          "normalized": "Button-\u003eBUTTON",
          "package": "robot",
          "partial": "Button",
          "signature": "Button-\u003eBUTTON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:rawButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the internal identifier for this key.\n\u003c/p\u003e",
          "module": "Test.Robot.Types",
          "name": "rawKey",
          "package": "robot",
          "signature": "Key -\u003e KEYSYM",
          "source": "src/Test-Robot-Types-Core.html#rawKey",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the internal identifier for this key",
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "rawKey",
          "normalized": "Key-\u003eKEYSYM",
          "package": "robot",
          "partial": "Key",
          "signature": "Key-\u003eKEYSYM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:rawKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "rightButton",
          "package": "robot",
          "signature": "Button",
          "source": "src/Test-Robot-Types.html#rightButton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "rightButton",
          "package": "robot",
          "partial": "Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:rightButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "scrollDown",
          "package": "robot",
          "signature": "Button",
          "source": "src/Test-Robot-Types.html#scrollDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "scrollDown",
          "package": "robot",
          "partial": "Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:scrollDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "scrollLeft",
          "package": "robot",
          "signature": "Button",
          "source": "src/Test-Robot-Types.html#scrollLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "scrollLeft",
          "package": "robot",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:scrollLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "scrollRight",
          "package": "robot",
          "signature": "Button",
          "source": "src/Test-Robot-Types.html#scrollRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "scrollRight",
          "package": "robot",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:scrollRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Robot.Types",
          "name": "scrollUp",
          "package": "robot",
          "signature": "Button",
          "source": "src/Test-Robot-Types.html#scrollUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Robot Types",
          "module": "Test.Robot.Types",
          "name": "scrollUp",
          "package": "robot",
          "partial": "Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot-Types.html#v:scrollUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe main Robot interface.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Robot",
          "name": "Robot",
          "package": "robot",
          "source": "src/Test-Robot.html",
          "type": "module"
        },
        "index": {
          "description": "The main Robot interface",
          "hierarchy": "Test Robot",
          "module": "Test.Robot",
          "name": "Robot",
          "package": "robot",
          "partial": "Robot",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents things that can be pressed: either a key on a keyboard\n or a button on a mouse.\n\u003c/p\u003e",
          "module": "Test.Robot",
          "name": "Pressable",
          "package": "robot",
          "source": "src/Test-Robot.html#Pressable",
          "type": "class"
        },
        "index": {
          "description": "Represents things that can be pressed either key on keyboard or button on mouse",
          "hierarchy": "Test Robot",
          "module": "Test.Robot",
          "name": "Pressable",
          "package": "robot",
          "partial": "Pressable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot.html#t:Pressable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Robot monad: a reader monad over IO.\n\u003c/p\u003e",
          "module": "Test.Robot",
          "name": "Robot",
          "package": "robot",
          "source": "src/Test-Robot-Internal.html#Robot",
          "type": "data"
        },
        "index": {
          "description": "The Robot monad reader monad over IO",
          "hierarchy": "Test Robot",
          "module": "Test.Robot",
          "name": "Robot",
          "package": "robot",
          "partial": "Robot",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot.html#t:Robot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ehold x act\u003c/code\u003e holds down \u003ccode\u003ex\u003c/code\u003e while executing \u003ccode\u003eact\u003c/code\u003e. It is\n equivalent to:\n\u003c/p\u003e\u003cpre\u003e\n press x \u003e\u003e act \u003e\u003e release x\n\u003c/pre\u003e\u003cp\u003eexcept \u003ccode\u003ehold\u003c/code\u003e ensures that the argument is released in the event\n of an exception.\n\u003c/p\u003e",
          "module": "Test.Robot",
          "name": "hold",
          "package": "robot",
          "signature": "x -\u003e Robot a -\u003e Robot a",
          "source": "src/Test-Robot.html#hold",
          "type": "method"
        },
        "index": {
          "description": "hold act holds down while executing act It is equivalent to press act release except hold ensures that the argument is released in the event of an exception",
          "hierarchy": "Test Robot",
          "module": "Test.Robot",
          "name": "hold",
          "normalized": "a-\u003eRobot b-\u003eRobot b",
          "package": "robot",
          "signature": "x-\u003eRobot a-\u003eRobot a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot.html#v:hold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove the pointer by an offset.\n\u003c/p\u003e",
          "module": "Test.Robot",
          "name": "moveBy",
          "package": "robot",
          "signature": "Int -\u003e Int -\u003e Robot ()",
          "source": "src/Test-Robot.html#moveBy",
          "type": "function"
        },
        "index": {
          "description": "Move the pointer by an offset",
          "hierarchy": "Test Robot",
          "module": "Test.Robot",
          "name": "moveBy",
          "normalized": "Int-\u003eInt-\u003eRobot()",
          "package": "robot",
          "partial": "By",
          "signature": "Int-\u003eInt-\u003eRobot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot.html#v:moveBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove the pointer to a point on the screen.\n\u003c/p\u003e",
          "module": "Test.Robot",
          "name": "moveTo",
          "package": "robot",
          "signature": "Int -\u003e Int -\u003e Robot ()",
          "source": "src/Test-Robot.html#moveTo",
          "type": "function"
        },
        "index": {
          "description": "Move the pointer to point on the screen",
          "hierarchy": "Test Robot",
          "module": "Test.Robot",
          "name": "moveTo",
          "normalized": "Int-\u003eInt-\u003eRobot()",
          "package": "robot",
          "partial": "To",
          "signature": "Int-\u003eInt-\u003eRobot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot.html#v:moveTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePress a key or button.\n\u003c/p\u003e",
          "module": "Test.Robot",
          "name": "press",
          "package": "robot",
          "signature": "x -\u003e Robot ()",
          "source": "src/Test-Robot.html#press",
          "type": "method"
        },
        "index": {
          "description": "Press key or button",
          "hierarchy": "Test Robot",
          "module": "Test.Robot",
          "name": "press",
          "normalized": "a-\u003eRobot()",
          "package": "robot",
          "signature": "x-\u003eRobot()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot.html#v:press"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelease a key or button.\n\u003c/p\u003e",
          "module": "Test.Robot",
          "name": "release",
          "package": "robot",
          "signature": "x -\u003e Robot ()",
          "source": "src/Test-Robot.html#release",
          "type": "method"
        },
        "index": {
          "description": "Release key or button",
          "hierarchy": "Test Robot",
          "module": "Test.Robot",
          "name": "release",
          "normalized": "a-\u003eRobot()",
          "package": "robot",
          "signature": "x-\u003eRobot()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot.html#v:release"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo nothing for the specified number of seconds.\n\u003c/p\u003e",
          "module": "Test.Robot",
          "name": "sleep",
          "package": "robot",
          "signature": "Rational -\u003e Robot ()",
          "source": "src/Test-Robot.html#sleep",
          "type": "function"
        },
        "index": {
          "description": "Do nothing for the specified number of seconds",
          "hierarchy": "Test Robot",
          "module": "Test.Robot",
          "name": "sleep",
          "normalized": "Rational-\u003eRobot()",
          "package": "robot",
          "signature": "Rational-\u003eRobot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot.html#v:sleep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePress the argument, then release it.\n\u003c/p\u003e",
          "module": "Test.Robot",
          "name": "tap",
          "package": "robot",
          "signature": "x -\u003e Robot ()",
          "source": "src/Test-Robot.html#tap",
          "type": "function"
        },
        "index": {
          "description": "Press the argument then release it",
          "hierarchy": "Test Robot",
          "module": "Test.Robot",
          "name": "tap",
          "normalized": "a-\u003eRobot()",
          "package": "robot",
          "signature": "x-\u003eRobot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/robot/docs/Test-Robot.html#v:tap"
      }
    }
  ]
]