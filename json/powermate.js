[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/MPD.html#",
      "description": {
        "fct-module": "MPD",
        "fct-package": "powermate",
        "fct-signature": "module",
        "fct-source": "src/MPD.html",
        "fct-type": "module",
        "title": "MPD"
      },
      "index": {
        "description": "",
        "hierarchy": "MPD",
        "module": "MPD",
        "name": "MPD",
        "normalized": "",
        "package": "powermate",
        "partial": "MPD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/MPD.html#t:Connection",
      "description": {
        "fct-module": "MPD",
        "fct-package": "powermate",
        "fct-signature": "type",
        "fct-source": "src/MPD.html#Connection",
        "fct-type": "type",
        "title": "Connection"
      },
      "index": {
        "description": "",
        "hierarchy": "MPD",
        "module": "MPD",
        "name": "Connection",
        "normalized": "",
        "package": "powermate",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/MPD.html#t:ReconnectableConnection",
      "description": {
        "fct-module": "MPD",
        "fct-package": "powermate",
        "fct-signature": "type",
        "fct-source": "src/MPD.html#ReconnectableConnection",
        "fct-type": "type",
        "title": "ReconnectableConnection"
      },
      "index": {
        "description": "",
        "hierarchy": "MPD",
        "module": "MPD",
        "name": "ReconnectableConnection",
        "normalized": "",
        "package": "powermate",
        "partial": "Reconnectable Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/MPD.html#v:connect",
      "description": {
        "fct-module": "MPD",
        "fct-package": "powermate",
        "fct-signature": "(String, Int) -\u003e IO Connection",
        "fct-source": "src/MPD.html#connect",
        "fct-type": "function",
        "title": "connect"
      },
      "index": {
        "description": "",
        "hierarchy": "MPD",
        "module": "MPD",
        "name": "connect",
        "normalized": "(String,Int)-\u003eIO Connection",
        "package": "powermate",
        "partial": "",
        "signature": "(String,Int)-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/MPD.html#v:getVolume",
      "description": {
        "fct-module": "MPD",
        "fct-package": "powermate",
        "fct-signature": "Connection -\u003e IO Int",
        "fct-source": "src/MPD.html#getVolume",
        "fct-type": "function",
        "title": "getVolume"
      },
      "index": {
        "description": "",
        "hierarchy": "MPD",
        "module": "MPD",
        "name": "getVolume",
        "normalized": "Connection-\u003eIO Int",
        "package": "powermate",
        "partial": "Volume",
        "signature": "Connection-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/MPD.html#v:rcConnect",
      "description": {
        "fct-module": "MPD",
        "fct-package": "powermate",
        "fct-signature": "(String, Int) -\u003e IO ReconnectableConnection",
        "fct-source": "src/MPD.html#rcConnect",
        "fct-type": "function",
        "title": "rcConnect"
      },
      "index": {
        "description": "",
        "hierarchy": "MPD",
        "module": "MPD",
        "name": "rcConnect",
        "normalized": "(String,Int)-\u003eIO ReconnectableConnection",
        "package": "powermate",
        "partial": "Connect",
        "signature": "(String,Int)-\u003eIO ReconnectableConnection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/MPD.html#v:rcConnection",
      "description": {
        "fct-module": "MPD",
        "fct-package": "powermate",
        "fct-signature": "ReconnectableConnection -\u003e IO Connection",
        "fct-source": "src/MPD.html#rcConnection",
        "fct-type": "function",
        "title": "rcConnection"
      },
      "index": {
        "description": "",
        "hierarchy": "MPD",
        "module": "MPD",
        "name": "rcConnection",
        "normalized": "ReconnectableConnection-\u003eIO Connection",
        "package": "powermate",
        "partial": "Connection",
        "signature": "ReconnectableConnection-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/MPD.html#v:rcDo",
      "description": {
        "fct-module": "MPD",
        "fct-package": "powermate",
        "fct-signature": "ReconnectableConnection -\u003e (Connection -\u003e IO a) -\u003e IO a",
        "fct-source": "src/MPD.html#rcDo",
        "fct-type": "function",
        "title": "rcDo"
      },
      "index": {
        "description": "",
        "hierarchy": "MPD",
        "module": "MPD",
        "name": "rcDo",
        "normalized": "ReconnectableConnection-\u003e(Connection-\u003eIO a)-\u003eIO a",
        "package": "powermate",
        "partial": "Do",
        "signature": "ReconnectableConnection-\u003e(Connection-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/MPD.html#v:runCommand",
      "description": {
        "fct-module": "MPD",
        "fct-package": "powermate",
        "fct-signature": "Handle -\u003e String -\u003e IO [String]",
        "fct-source": "src/MPD.html#runCommand",
        "fct-type": "function",
        "title": "runCommand"
      },
      "index": {
        "description": "",
        "hierarchy": "MPD",
        "module": "MPD",
        "name": "runCommand",
        "normalized": "Handle-\u003eString-\u003eIO[String]",
        "package": "powermate",
        "partial": "Command",
        "signature": "Handle-\u003eString-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/MPD.html#v:runCommand_",
      "description": {
        "fct-module": "MPD",
        "fct-package": "powermate",
        "fct-signature": "Handle -\u003e String -\u003e IO ()",
        "fct-source": "src/MPD.html#runCommand_",
        "fct-type": "function",
        "title": "runCommand_"
      },
      "index": {
        "description": "",
        "hierarchy": "MPD",
        "module": "MPD",
        "name": "runCommand_",
        "normalized": "Handle-\u003eString-\u003eIO()",
        "package": "powermate",
        "partial": "Command",
        "signature": "Handle-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/MPD.html#v:setVolume",
      "description": {
        "fct-module": "MPD",
        "fct-package": "powermate",
        "fct-signature": "Connection -\u003e Int -\u003e IO ()",
        "fct-source": "src/MPD.html#setVolume",
        "fct-type": "function",
        "title": "setVolume"
      },
      "index": {
        "description": "",
        "hierarchy": "MPD",
        "module": "MPD",
        "name": "setVolume",
        "normalized": "Connection-\u003eInt-\u003eIO()",
        "package": "powermate",
        "partial": "Volume",
        "signature": "Connection-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#",
      "description": {
        "fct-module": "PowerMate",
        "fct-package": "powermate",
        "fct-signature": "module",
        "fct-source": "src/PowerMate.html",
        "fct-type": "module",
        "title": "PowerMate"
      },
      "index": {
        "description": "",
        "hierarchy": "PowerMate",
        "module": "PowerMate",
        "name": "PowerMate",
        "normalized": "",
        "package": "powermate",
        "partial": "Power Mate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#t:Event",
      "description": {
        "fct-module": "PowerMate",
        "fct-package": "powermate",
        "fct-signature": "data",
        "fct-source": "src/PowerMate.html#Event",
        "fct-type": "data",
        "title": "Event"
      },
      "index": {
        "description": "",
        "hierarchy": "PowerMate",
        "module": "PowerMate",
        "name": "Event",
        "normalized": "",
        "package": "powermate",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#t:Status",
      "description": {
        "fct-module": "PowerMate",
        "fct-package": "powermate",
        "fct-signature": "data",
        "fct-source": "src/PowerMate.html#Status",
        "fct-type": "data",
        "title": "Status"
      },
      "index": {
        "description": "",
        "hierarchy": "PowerMate",
        "module": "PowerMate",
        "name": "Status",
        "normalized": "",
        "package": "powermate",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:Button",
      "description": {
        "fct-module": "PowerMate",
        "fct-package": "powermate",
        "fct-signature": "Button Bool",
        "fct-source": "src/PowerMate.html#Event",
        "fct-type": "function",
        "title": "Button"
      },
      "index": {
        "description": "",
        "hierarchy": "PowerMate",
        "module": "PowerMate",
        "name": "Button",
        "normalized": "",
        "package": "powermate",
        "partial": "Button",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:Rotate",
      "description": {
        "fct-module": "PowerMate",
        "fct-package": "powermate",
        "fct-signature": "Rotate Int",
        "fct-source": "src/PowerMate.html#Event",
        "fct-type": "function",
        "title": "Rotate"
      },
      "index": {
        "description": "",
        "hierarchy": "PowerMate",
        "module": "PowerMate",
        "name": "Rotate",
        "normalized": "",
        "package": "powermate",
        "partial": "Rotate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:Status",
      "description": {
        "fct-module": "PowerMate",
        "fct-package": "powermate",
        "fct-signature": "Status",
        "fct-source": "src/PowerMate.html#Status",
        "fct-type": "function",
        "title": "Status"
      },
      "index": {
        "description": "",
        "hierarchy": "PowerMate",
        "module": "PowerMate",
        "name": "Status",
        "normalized": "",
        "package": "powermate",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:StatusChange",
      "description": {
        "fct-module": "PowerMate",
        "fct-package": "powermate",
        "fct-signature": "StatusChange Status",
        "fct-source": "src/PowerMate.html#Event",
        "fct-type": "function",
        "title": "StatusChange"
      },
      "index": {
        "description": "",
        "hierarchy": "PowerMate",
        "module": "PowerMate",
        "name": "StatusChange",
        "normalized": "",
        "package": "powermate",
        "partial": "Status Change",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:brightness",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "PowerMate",
        "fct-package": "powermate",
        "fct-signature": "Int",
        "fct-source": "src/PowerMate.html#Status",
        "fct-type": "function",
        "title": "brightness"
      },
      "index": {
        "description": "",
        "hierarchy": "PowerMate",
        "module": "PowerMate",
        "name": "brightness",
        "normalized": "",
        "package": "powermate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:getUSBName",
      "description": {
        "fct-module": "PowerMate",
        "fct-package": "powermate",
        "fct-signature": "FilePath -\u003e IO String",
        "fct-source": "src/PowerMate.html#getUSBName",
        "fct-type": "function",
        "title": "getUSBName"
      },
      "index": {
        "description": "",
        "hierarchy": "PowerMate",
        "module": "PowerMate",
        "name": "getUSBName",
        "normalized": "FilePath-\u003eIO String",
        "package": "powermate",
        "partial": "USBName",
        "signature": "FilePath-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:openDevice",
      "description": {
        "fct-module": "PowerMate",
        "fct-package": "powermate",
        "fct-signature": "FilePath -\u003e IO Handle",
        "fct-source": "src/PowerMate.html#openDevice",
        "fct-type": "function",
        "title": "openDevice"
      },
      "index": {
        "description": "",
        "hierarchy": "PowerMate",
        "module": "PowerMate",
        "name": "openDevice",
        "normalized": "FilePath-\u003eIO Handle",
        "package": "powermate",
        "partial": "Device",
        "signature": "FilePath-\u003eIO Handle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:pulse_asleep",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "PowerMate",
        "fct-package": "powermate",
        "fct-signature": "Bool",
        "fct-source": "src/PowerMate.html#Status",
        "fct-type": "function",
        "title": "pulse_asleep"
      },
      "index": {
        "description": "",
        "hierarchy": "PowerMate",
        "module": "PowerMate",
        "name": "pulse_asleep",
        "normalized": "",
        "package": "powermate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:pulse_awake",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "PowerMate",
        "fct-package": "powermate",
        "fct-signature": "Bool",
        "fct-source": "src/PowerMate.html#Status",
        "fct-type": "function",
        "title": "pulse_awake"
      },
      "index": {
        "description": "",
        "hierarchy": "PowerMate",
        "module": "PowerMate",
        "name": "pulse_awake",
        "normalized": "",
        "package": "powermate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:pulse_mode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "PowerMate",
        "fct-package": "powermate",
        "fct-signature": "Int",
        "fct-source": "src/PowerMate.html#Status",
        "fct-type": "function",
        "title": "pulse_mode"
      },
      "index": {
        "description": "",
        "hierarchy": "PowerMate",
        "module": "PowerMate",
        "name": "pulse_mode",
        "normalized": "",
        "package": "powermate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:pulse_speed",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "PowerMate",
        "fct-package": "powermate",
        "fct-signature": "Int",
        "fct-source": "src/PowerMate.html#Status",
        "fct-type": "function",
        "title": "pulse_speed"
      },
      "index": {
        "description": "",
        "hierarchy": "PowerMate",
        "module": "PowerMate",
        "name": "pulse_speed",
        "normalized": "",
        "package": "powermate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:readEvent",
      "description": {
        "fct-module": "PowerMate",
        "fct-package": "powermate",
        "fct-signature": "Handle -\u003e IO (Maybe Event)",
        "fct-source": "src/PowerMate.html#readEvent",
        "fct-type": "function",
        "title": "readEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "PowerMate",
        "module": "PowerMate",
        "name": "readEvent",
        "normalized": "Handle-\u003eIO(Maybe Event)",
        "package": "powermate",
        "partial": "Event",
        "signature": "Handle-\u003eIO(Maybe Event)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:readEventWithSkip",
      "description": {
        "fct-module": "PowerMate",
        "fct-package": "powermate",
        "fct-signature": "Handle -\u003e Maybe Event -\u003e IO (Maybe Event)",
        "fct-source": "src/PowerMate.html#readEventWithSkip",
        "fct-type": "function",
        "title": "readEventWithSkip"
      },
      "index": {
        "description": "",
        "hierarchy": "PowerMate",
        "module": "PowerMate",
        "name": "readEventWithSkip",
        "normalized": "Handle-\u003eMaybe Event-\u003eIO(Maybe Event)",
        "package": "powermate",
        "partial": "Event With Skip",
        "signature": "Handle-\u003eMaybe Event-\u003eIO(Maybe Event)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:searchForDevice",
      "description": {
        "fct-module": "PowerMate",
        "fct-package": "powermate",
        "fct-signature": "IO (Maybe FilePath)",
        "fct-source": "src/PowerMate.html#searchForDevice",
        "fct-type": "function",
        "title": "searchForDevice"
      },
      "index": {
        "description": "",
        "hierarchy": "PowerMate",
        "module": "PowerMate",
        "name": "searchForDevice",
        "normalized": "",
        "package": "powermate",
        "partial": "For Device",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:statusInit",
      "description": {
        "fct-module": "PowerMate",
        "fct-package": "powermate",
        "fct-signature": "Status",
        "fct-source": "src/PowerMate.html#statusInit",
        "fct-type": "function",
        "title": "statusInit"
      },
      "index": {
        "description": "",
        "hierarchy": "PowerMate",
        "module": "PowerMate",
        "name": "statusInit",
        "normalized": "",
        "package": "powermate",
        "partial": "Init",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/powermate/docs/PowerMate.html#v:writeStatus",
      "description": {
        "fct-module": "PowerMate",
        "fct-package": "powermate",
        "fct-signature": "Handle -\u003e Status -\u003e IO ()",
        "fct-source": "src/PowerMate.html#writeStatus",
        "fct-type": "function",
        "title": "writeStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "PowerMate",
        "module": "PowerMate",
        "name": "writeStatus",
        "normalized": "Handle-\u003eStatus-\u003eIO()",
        "package": "powermate",
        "partial": "Status",
        "signature": "Handle-\u003eStatus-\u003eIO()"
      }
    }
  }
]