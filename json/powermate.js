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
        "word": "powermate"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MPD",
          "name": "MPD",
          "package": "powermate",
          "source": "src/MPD.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "MPD",
          "module": "MPD",
          "name": "MPD",
          "package": "powermate",
          "partial": "MPD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/MPD.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MPD",
          "name": "Connection",
          "package": "powermate",
          "source": "src/MPD.html#Connection",
          "type": "type"
        },
        "index": {
          "hierarchy": "MPD",
          "module": "MPD",
          "name": "Connection",
          "package": "powermate",
          "partial": "Connection",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/MPD.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MPD",
          "name": "ReconnectableConnection",
          "package": "powermate",
          "source": "src/MPD.html#ReconnectableConnection",
          "type": "type"
        },
        "index": {
          "hierarchy": "MPD",
          "module": "MPD",
          "name": "ReconnectableConnection",
          "package": "powermate",
          "partial": "Reconnectable Connection",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/MPD.html#t:ReconnectableConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MPD",
          "name": "connect",
          "package": "powermate",
          "signature": "(String, Int) -\u003e IO Connection",
          "source": "src/MPD.html#connect",
          "type": "function"
        },
        "index": {
          "hierarchy": "MPD",
          "module": "MPD",
          "name": "connect",
          "normalized": "(String,Int)-\u003eIO Connection",
          "package": "powermate",
          "signature": "(String,Int)-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/MPD.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MPD",
          "name": "getVolume",
          "package": "powermate",
          "signature": "Connection -\u003e IO Int",
          "source": "src/MPD.html#getVolume",
          "type": "function"
        },
        "index": {
          "hierarchy": "MPD",
          "module": "MPD",
          "name": "getVolume",
          "normalized": "Connection-\u003eIO Int",
          "package": "powermate",
          "partial": "Volume",
          "signature": "Connection-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/MPD.html#v:getVolume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MPD",
          "name": "rcConnect",
          "package": "powermate",
          "signature": "(String, Int) -\u003e IO ReconnectableConnection",
          "source": "src/MPD.html#rcConnect",
          "type": "function"
        },
        "index": {
          "hierarchy": "MPD",
          "module": "MPD",
          "name": "rcConnect",
          "normalized": "(String,Int)-\u003eIO ReconnectableConnection",
          "package": "powermate",
          "partial": "Connect",
          "signature": "(String,Int)-\u003eIO ReconnectableConnection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/MPD.html#v:rcConnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MPD",
          "name": "rcConnection",
          "package": "powermate",
          "signature": "ReconnectableConnection -\u003e IO Connection",
          "source": "src/MPD.html#rcConnection",
          "type": "function"
        },
        "index": {
          "hierarchy": "MPD",
          "module": "MPD",
          "name": "rcConnection",
          "normalized": "ReconnectableConnection-\u003eIO Connection",
          "package": "powermate",
          "partial": "Connection",
          "signature": "ReconnectableConnection-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/MPD.html#v:rcConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MPD",
          "name": "rcDo",
          "package": "powermate",
          "signature": "ReconnectableConnection -\u003e (Connection -\u003e IO a) -\u003e IO a",
          "source": "src/MPD.html#rcDo",
          "type": "function"
        },
        "index": {
          "hierarchy": "MPD",
          "module": "MPD",
          "name": "rcDo",
          "normalized": "ReconnectableConnection-\u003e(Connection-\u003eIO a)-\u003eIO a",
          "package": "powermate",
          "partial": "Do",
          "signature": "ReconnectableConnection-\u003e(Connection-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/MPD.html#v:rcDo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MPD",
          "name": "runCommand",
          "package": "powermate",
          "signature": "Handle -\u003e String -\u003e IO [String]",
          "source": "src/MPD.html#runCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "MPD",
          "module": "MPD",
          "name": "runCommand",
          "normalized": "Handle-\u003eString-\u003eIO[String]",
          "package": "powermate",
          "partial": "Command",
          "signature": "Handle-\u003eString-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/MPD.html#v:runCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MPD",
          "name": "runCommand_",
          "package": "powermate",
          "signature": "Handle -\u003e String -\u003e IO ()",
          "source": "src/MPD.html#runCommand_",
          "type": "function"
        },
        "index": {
          "hierarchy": "MPD",
          "module": "MPD",
          "name": "runCommand_",
          "normalized": "Handle-\u003eString-\u003eIO()",
          "package": "powermate",
          "partial": "Command",
          "signature": "Handle-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/MPD.html#v:runCommand_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MPD",
          "name": "setVolume",
          "package": "powermate",
          "signature": "Connection -\u003e Int -\u003e IO ()",
          "source": "src/MPD.html#setVolume",
          "type": "function"
        },
        "index": {
          "hierarchy": "MPD",
          "module": "MPD",
          "name": "setVolume",
          "normalized": "Connection-\u003eInt-\u003eIO()",
          "package": "powermate",
          "partial": "Volume",
          "signature": "Connection-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/MPD.html#v:setVolume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PowerMate",
          "name": "PowerMate",
          "package": "powermate",
          "source": "src/PowerMate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "PowerMate",
          "module": "PowerMate",
          "name": "PowerMate",
          "package": "powermate",
          "partial": "Power Mate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PowerMate",
          "name": "Event",
          "package": "powermate",
          "source": "src/PowerMate.html#Event",
          "type": "data"
        },
        "index": {
          "hierarchy": "PowerMate",
          "module": "PowerMate",
          "name": "Event",
          "package": "powermate",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PowerMate",
          "name": "Status",
          "package": "powermate",
          "source": "src/PowerMate.html#Status",
          "type": "data"
        },
        "index": {
          "hierarchy": "PowerMate",
          "module": "PowerMate",
          "name": "Status",
          "package": "powermate",
          "partial": "Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#t:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PowerMate",
          "name": "Button",
          "package": "powermate",
          "signature": "Button Bool",
          "source": "src/PowerMate.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "PowerMate",
          "module": "PowerMate",
          "name": "Button",
          "package": "powermate",
          "partial": "Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:Button"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PowerMate",
          "name": "Rotate",
          "package": "powermate",
          "signature": "Rotate Int",
          "source": "src/PowerMate.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "PowerMate",
          "module": "PowerMate",
          "name": "Rotate",
          "package": "powermate",
          "partial": "Rotate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:Rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PowerMate",
          "name": "Status",
          "package": "powermate",
          "signature": "Status",
          "source": "src/PowerMate.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "PowerMate",
          "module": "PowerMate",
          "name": "Status",
          "package": "powermate",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PowerMate",
          "name": "StatusChange",
          "package": "powermate",
          "signature": "StatusChange Status",
          "source": "src/PowerMate.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "PowerMate",
          "module": "PowerMate",
          "name": "StatusChange",
          "package": "powermate",
          "partial": "Status Change",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:StatusChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PowerMate",
          "name": "brightness",
          "package": "powermate",
          "signature": "Int",
          "source": "src/PowerMate.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "PowerMate",
          "module": "PowerMate",
          "name": "brightness",
          "package": "powermate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:brightness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PowerMate",
          "name": "getUSBName",
          "package": "powermate",
          "signature": "FilePath -\u003e IO String",
          "source": "src/PowerMate.html#getUSBName",
          "type": "function"
        },
        "index": {
          "hierarchy": "PowerMate",
          "module": "PowerMate",
          "name": "getUSBName",
          "normalized": "FilePath-\u003eIO String",
          "package": "powermate",
          "partial": "USBName",
          "signature": "FilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:getUSBName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PowerMate",
          "name": "openDevice",
          "package": "powermate",
          "signature": "FilePath -\u003e IO Handle",
          "source": "src/PowerMate.html#openDevice",
          "type": "function"
        },
        "index": {
          "hierarchy": "PowerMate",
          "module": "PowerMate",
          "name": "openDevice",
          "normalized": "FilePath-\u003eIO Handle",
          "package": "powermate",
          "partial": "Device",
          "signature": "FilePath-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:openDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PowerMate",
          "name": "pulse_asleep",
          "package": "powermate",
          "signature": "Bool",
          "source": "src/PowerMate.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "PowerMate",
          "module": "PowerMate",
          "name": "pulse_asleep",
          "package": "powermate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:pulse_asleep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PowerMate",
          "name": "pulse_awake",
          "package": "powermate",
          "signature": "Bool",
          "source": "src/PowerMate.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "PowerMate",
          "module": "PowerMate",
          "name": "pulse_awake",
          "package": "powermate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:pulse_awake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PowerMate",
          "name": "pulse_mode",
          "package": "powermate",
          "signature": "Int",
          "source": "src/PowerMate.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "PowerMate",
          "module": "PowerMate",
          "name": "pulse_mode",
          "package": "powermate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:pulse_mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PowerMate",
          "name": "pulse_speed",
          "package": "powermate",
          "signature": "Int",
          "source": "src/PowerMate.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "PowerMate",
          "module": "PowerMate",
          "name": "pulse_speed",
          "package": "powermate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:pulse_speed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PowerMate",
          "name": "readEvent",
          "package": "powermate",
          "signature": "Handle -\u003e IO (Maybe Event)",
          "source": "src/PowerMate.html#readEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "PowerMate",
          "module": "PowerMate",
          "name": "readEvent",
          "normalized": "Handle-\u003eIO(Maybe Event)",
          "package": "powermate",
          "partial": "Event",
          "signature": "Handle-\u003eIO(Maybe Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:readEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PowerMate",
          "name": "readEventWithSkip",
          "package": "powermate",
          "signature": "Handle -\u003e Maybe Event -\u003e IO (Maybe Event)",
          "source": "src/PowerMate.html#readEventWithSkip",
          "type": "function"
        },
        "index": {
          "hierarchy": "PowerMate",
          "module": "PowerMate",
          "name": "readEventWithSkip",
          "normalized": "Handle-\u003eMaybe Event-\u003eIO(Maybe Event)",
          "package": "powermate",
          "partial": "Event With Skip",
          "signature": "Handle-\u003eMaybe Event-\u003eIO(Maybe Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:readEventWithSkip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PowerMate",
          "name": "searchForDevice",
          "package": "powermate",
          "signature": "IO (Maybe FilePath)",
          "source": "src/PowerMate.html#searchForDevice",
          "type": "function"
        },
        "index": {
          "hierarchy": "PowerMate",
          "module": "PowerMate",
          "name": "searchForDevice",
          "package": "powermate",
          "partial": "For Device",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:searchForDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PowerMate",
          "name": "statusInit",
          "package": "powermate",
          "signature": "Status",
          "source": "src/PowerMate.html#statusInit",
          "type": "function"
        },
        "index": {
          "hierarchy": "PowerMate",
          "module": "PowerMate",
          "name": "statusInit",
          "package": "powermate",
          "partial": "Init",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:statusInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PowerMate",
          "name": "writeStatus",
          "package": "powermate",
          "signature": "Handle -\u003e Status -\u003e IO ()",
          "source": "src/PowerMate.html#writeStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "PowerMate",
          "module": "PowerMate",
          "name": "writeStatus",
          "normalized": "Handle-\u003eStatus-\u003eIO()",
          "package": "powermate",
          "partial": "Status",
          "signature": "Handle-\u003eStatus-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:writeStatus"
      }
    }
  ]
]