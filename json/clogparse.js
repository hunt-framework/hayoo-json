[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-CLog-Parse.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse events from \u003ccode\u003eclog\u003c/code\u003e output, such as the files\n at \u003ca\u003ehttp://tunes.org/~nef/logs/haskell/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIRC has no single standard character encoding.  This\n module decodes messages as UTF-8 following common\n practice on Freenode.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.IRC.CLog.Parse",
        "fct-package": "clogparse",
        "fct-signature": "module",
        "fct-source": "src/Data-IRC-CLog-Parse.html",
        "fct-type": "module",
        "title": "Parse"
      },
      "index": {
        "description": "Parse events from clog output such as the files at http tunes.org nef logs haskell IRC has no single standard character encoding This module decodes messages as UTF-8 following common practice on Freenode",
        "hierarchy": "Data IRC CLog Parse",
        "module": "Data.IRC.CLog.Parse",
        "name": "Parse",
        "normalized": "",
        "package": "clogparse",
        "partial": "Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-CLog-Parse.html#t:Config",
      "description": {
        "fct-descr": "\u003cp\u003eConfiguring the parser.\n\u003c/p\u003e",
        "fct-module": "Data.IRC.CLog.Parse",
        "fct-package": "clogparse",
        "fct-signature": "data",
        "fct-source": "src/Data-IRC-CLog-Parse.html#Config",
        "fct-type": "data",
        "title": "Config"
      },
      "index": {
        "description": "Configuring the parser",
        "hierarchy": "Data IRC CLog Parse",
        "module": "Data.IRC.CLog.Parse",
        "name": "Config",
        "normalized": "",
        "package": "clogparse",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-CLog-Parse.html#v:Config",
      "description": {
        "fct-module": "Data.IRC.CLog.Parse",
        "fct-package": "clogparse",
        "fct-signature": "Config",
        "fct-source": "src/Data-IRC-CLog-Parse.html#Config",
        "fct-type": "function",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "Data IRC CLog Parse",
        "module": "Data.IRC.CLog.Parse",
        "name": "Config",
        "normalized": "",
        "package": "clogparse",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-CLog-Parse.html#v:haskellConfig",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e value suitable for parsing \u003ccode\u003e#haskell\u003c/code\u003e logs on Linux.\n\u003c/p\u003e",
        "fct-module": "Data.IRC.CLog.Parse",
        "fct-package": "clogparse",
        "fct-signature": "Config",
        "fct-source": "src/Data-IRC-CLog-Parse.html#haskellConfig",
        "fct-type": "function",
        "title": "haskellConfig"
      },
      "index": {
        "description": "Config value suitable for parsing haskell logs on Linux",
        "hierarchy": "Data IRC CLog Parse",
        "module": "Data.IRC.CLog.Parse",
        "name": "haskellConfig",
        "normalized": "",
        "package": "clogparse",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-CLog-Parse.html#v:parseLog",
      "description": {
        "fct-descr": "\u003cp\u003eParse a log file.\n\u003c/p\u003e\u003cp\u003eThe file name (after any directory) is significant.\n It is used to set the date for timestamps.\n It should have the form \u003ccode\u003eYY.MM.DD\u003c/code\u003e, as do the files on\n \u003ccode\u003etunes.org\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.IRC.CLog.Parse",
        "fct-package": "clogparse",
        "fct-signature": "Config -\u003e FilePath -\u003e IO [EventAt]",
        "fct-source": "src/Data-IRC-CLog-Parse.html#parseLog",
        "fct-type": "function",
        "title": "parseLog"
      },
      "index": {
        "description": "Parse log file The file name after any directory is significant It is used to set the date for timestamps It should have the form YY.MM.DD as do the files on tunes.org",
        "hierarchy": "Data IRC CLog Parse",
        "module": "Data.IRC.CLog.Parse",
        "name": "parseLog",
        "normalized": "Config-\u003eFilePath-\u003eIO[EventAt]",
        "package": "clogparse",
        "partial": "Log",
        "signature": "Config-\u003eFilePath-\u003eIO[EventAt]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-CLog-Parse.html#v:timeZone",
      "description": {
        "fct-descr": "\u003cp\u003eTimestamp time zone; an Olson time zone name.\n\u003c/p\u003e",
        "fct-module": "Data.IRC.CLog.Parse",
        "fct-package": "clogparse",
        "fct-signature": "String",
        "fct-source": "src/Data-IRC-CLog-Parse.html#Config",
        "fct-type": "function",
        "title": "timeZone"
      },
      "index": {
        "description": "Timestamp time zone an Olson time zone name",
        "hierarchy": "Data IRC CLog Parse",
        "module": "Data.IRC.CLog.Parse",
        "name": "timeZone",
        "normalized": "",
        "package": "clogparse",
        "partial": "Zone",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-CLog-Parse.html#v:zoneInfo",
      "description": {
        "fct-descr": "\u003cp\u003eDirectory for time zone files; \u003ccode\u003e$TZDIR\u003c/code\u003e overrides.\n\u003c/p\u003e",
        "fct-module": "Data.IRC.CLog.Parse",
        "fct-package": "clogparse",
        "fct-signature": "FilePath",
        "fct-source": "src/Data-IRC-CLog-Parse.html#Config",
        "fct-type": "function",
        "title": "zoneInfo"
      },
      "index": {
        "description": "Directory for time zone files TZDIR overrides",
        "hierarchy": "Data IRC CLog Parse",
        "module": "Data.IRC.CLog.Parse",
        "name": "zoneInfo",
        "normalized": "",
        "package": "clogparse",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRepresents events in an IRC channel.\n These do not correspond precisely to messages of the IRC\n protocol.  They provide a somewhat higher-level view.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.IRC.Event",
        "fct-package": "clogparse",
        "fct-signature": "module",
        "fct-source": "src/Data-IRC-Event.html",
        "fct-type": "module",
        "title": "Event"
      },
      "index": {
        "description": "Represents events in an IRC channel These do not correspond precisely to messages of the IRC protocol They provide somewhat higher-level view",
        "hierarchy": "Data IRC Event",
        "module": "Data.IRC.Event",
        "name": "Event",
        "normalized": "",
        "package": "clogparse",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#t:Event",
      "description": {
        "fct-descr": "\u003cp\u003eEvents in an IRC channel.\n\u003c/p\u003e",
        "fct-module": "Data.IRC.Event",
        "fct-package": "clogparse",
        "fct-signature": "data",
        "fct-source": "src/Data-IRC-Event.html#Event",
        "fct-type": "data",
        "title": "Event"
      },
      "index": {
        "description": "Events in an IRC channel",
        "hierarchy": "Data IRC Event",
        "module": "Data.IRC.Event",
        "name": "Event",
        "normalized": "",
        "package": "clogparse",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#t:EventAt",
      "description": {
        "fct-descr": "\u003cp\u003eEvent with timestamp.\n\u003c/p\u003e",
        "fct-module": "Data.IRC.Event",
        "fct-package": "clogparse",
        "fct-signature": "data",
        "fct-source": "src/Data-IRC-Event.html#EventAt",
        "fct-type": "data",
        "title": "EventAt"
      },
      "index": {
        "description": "Event with timestamp",
        "hierarchy": "Data IRC Event",
        "module": "Data.IRC.Event",
        "name": "EventAt",
        "normalized": "",
        "package": "clogparse",
        "partial": "Event At",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#t:GenericEvent",
      "description": {
        "fct-descr": "\u003cp\u003eFor working with \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e\u003c/code\u003es generically.\n\u003c/p\u003e\u003cp\u003eIndicates the \"subject\" of an event, if any, followed\n by other text.\n\u003c/p\u003e\u003cp\u003eThe subject of a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eReNick\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e event is the old nick.\n\u003c/p\u003e",
        "fct-module": "Data.IRC.Event",
        "fct-package": "clogparse",
        "fct-signature": "data",
        "fct-source": "src/Data-IRC-Event.html#GenericEvent",
        "fct-type": "data",
        "title": "GenericEvent"
      },
      "index": {
        "description": "For working with Event generically Indicates the subject of an event if any followed by other text The subject of ReNick event is the old nick",
        "hierarchy": "Data IRC Event",
        "module": "Data.IRC.Event",
        "name": "GenericEvent",
        "normalized": "",
        "package": "clogparse",
        "partial": "Generic Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#t:Nick",
      "description": {
        "fct-descr": "\u003cp\u003eIRC nicks.\n\u003c/p\u003e",
        "fct-module": "Data.IRC.Event",
        "fct-package": "clogparse",
        "fct-signature": "newtype",
        "fct-source": "src/Data-IRC-Event.html#Nick",
        "fct-type": "newtype",
        "title": "Nick"
      },
      "index": {
        "description": "IRC nicks",
        "hierarchy": "Data IRC Event",
        "module": "Data.IRC.Event",
        "name": "Nick",
        "normalized": "",
        "package": "clogparse",
        "partial": "Nick",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:Act",
      "description": {
        "fct-descr": "\u003cp\u003eUser acted (\u003ccode\u003eCTCP ACTION\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.IRC.Event",
        "fct-package": "clogparse",
        "fct-signature": "Act Nick Text",
        "fct-source": "src/Data-IRC-Event.html#Event",
        "fct-type": "function",
        "title": "Act"
      },
      "index": {
        "description": "User acted CTCP ACTION",
        "hierarchy": "Data IRC Event",
        "module": "Data.IRC.Event",
        "name": "Act",
        "normalized": "",
        "package": "clogparse",
        "partial": "Act",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:EventAt",
      "description": {
        "fct-descr": "\u003cp\u003eEvent with timestamp.\n\u003c/p\u003e",
        "fct-module": "Data.IRC.Event",
        "fct-package": "clogparse",
        "fct-signature": "EventAt UTCTime Event",
        "fct-source": "src/Data-IRC-Event.html#EventAt",
        "fct-type": "function",
        "title": "EventAt"
      },
      "index": {
        "description": "Event with timestamp",
        "hierarchy": "Data IRC Event",
        "module": "Data.IRC.Event",
        "name": "EventAt",
        "normalized": "",
        "package": "clogparse",
        "partial": "Event At",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:GenericEvent",
      "description": {
        "fct-module": "Data.IRC.Event",
        "fct-package": "clogparse",
        "fct-signature": "GenericEvent Constr (Maybe Nick) [Text]",
        "fct-source": "src/Data-IRC-Event.html#GenericEvent",
        "fct-type": "function",
        "title": "GenericEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Data IRC Event",
        "module": "Data.IRC.Event",
        "name": "GenericEvent",
        "normalized": "GenericEvent Constr(Maybe Nick)[Text]",
        "package": "clogparse",
        "partial": "Generic Event",
        "signature": "GenericEvent Constr(Maybe Nick)[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:Join",
      "description": {
        "fct-descr": "\u003cp\u003eUser joined.\n\u003c/p\u003e",
        "fct-module": "Data.IRC.Event",
        "fct-package": "clogparse",
        "fct-signature": "Join Nick Text",
        "fct-source": "src/Data-IRC-Event.html#Event",
        "fct-type": "function",
        "title": "Join"
      },
      "index": {
        "description": "User joined",
        "hierarchy": "Data IRC Event",
        "module": "Data.IRC.Event",
        "name": "Join",
        "normalized": "",
        "package": "clogparse",
        "partial": "Join",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:Kick",
      "description": {
        "fct-descr": "\u003cp\u003eUser was kicked by user.\n\u003c/p\u003e",
        "fct-module": "Data.IRC.Event",
        "fct-package": "clogparse",
        "fct-signature": "Kick Nick Nick Text",
        "fct-source": "src/Data-IRC-Event.html#Event",
        "fct-type": "function",
        "title": "Kick"
      },
      "index": {
        "description": "User was kicked by user",
        "hierarchy": "Data IRC Event",
        "module": "Data.IRC.Event",
        "name": "Kick",
        "normalized": "",
        "package": "clogparse",
        "partial": "Kick",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:Log",
      "description": {
        "fct-descr": "\u003cp\u003eLogging started or stopped.\n\u003c/p\u003e",
        "fct-module": "Data.IRC.Event",
        "fct-package": "clogparse",
        "fct-signature": "Log Text",
        "fct-source": "src/Data-IRC-Event.html#Event",
        "fct-type": "function",
        "title": "Log"
      },
      "index": {
        "description": "Logging started or stopped",
        "hierarchy": "Data IRC Event",
        "module": "Data.IRC.Event",
        "name": "Log",
        "normalized": "",
        "package": "clogparse",
        "partial": "Log",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:Mode",
      "description": {
        "fct-descr": "\u003cp\u003eUser set mode on the channel.\n\u003c/p\u003e",
        "fct-module": "Data.IRC.Event",
        "fct-package": "clogparse",
        "fct-signature": "Mode Nick Text",
        "fct-source": "src/Data-IRC-Event.html#Event",
        "fct-type": "function",
        "title": "Mode"
      },
      "index": {
        "description": "User set mode on the channel",
        "hierarchy": "Data IRC Event",
        "module": "Data.IRC.Event",
        "name": "Mode",
        "normalized": "",
        "package": "clogparse",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:Names",
      "description": {
        "fct-descr": "\u003cp\u003eUsers list.\n\u003c/p\u003e",
        "fct-module": "Data.IRC.Event",
        "fct-package": "clogparse",
        "fct-signature": "Names Text",
        "fct-source": "src/Data-IRC-Event.html#Event",
        "fct-type": "function",
        "title": "Names"
      },
      "index": {
        "description": "Users list",
        "hierarchy": "Data IRC Event",
        "module": "Data.IRC.Event",
        "name": "Names",
        "normalized": "",
        "package": "clogparse",
        "partial": "Names",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:Nick",
      "description": {
        "fct-module": "Data.IRC.Event",
        "fct-package": "clogparse",
        "fct-signature": "Nick Text",
        "fct-source": "src/Data-IRC-Event.html#Nick",
        "fct-type": "function",
        "title": "Nick"
      },
      "index": {
        "description": "",
        "hierarchy": "Data IRC Event",
        "module": "Data.IRC.Event",
        "name": "Nick",
        "normalized": "",
        "package": "clogparse",
        "partial": "Nick",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:NoParse",
      "description": {
        "fct-descr": "\u003cp\u003eUnparsable line.\n\u003c/p\u003e",
        "fct-module": "Data.IRC.Event",
        "fct-package": "clogparse",
        "fct-signature": "NoParse Text",
        "fct-source": "src/Data-IRC-Event.html#EventAt",
        "fct-type": "function",
        "title": "NoParse"
      },
      "index": {
        "description": "Unparsable line",
        "hierarchy": "Data IRC Event",
        "module": "Data.IRC.Event",
        "name": "NoParse",
        "normalized": "",
        "package": "clogparse",
        "partial": "No Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:Notice",
      "description": {
        "fct-descr": "\u003cp\u003eUser spoke (\u003ccode\u003eNOTICE\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.IRC.Event",
        "fct-package": "clogparse",
        "fct-signature": "Notice Nick Text",
        "fct-source": "src/Data-IRC-Event.html#Event",
        "fct-type": "function",
        "title": "Notice"
      },
      "index": {
        "description": "User spoke NOTICE",
        "hierarchy": "Data IRC Event",
        "module": "Data.IRC.Event",
        "name": "Notice",
        "normalized": "",
        "package": "clogparse",
        "partial": "Notice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:Part",
      "description": {
        "fct-descr": "\u003cp\u003eUser left the channel.\n\u003c/p\u003e",
        "fct-module": "Data.IRC.Event",
        "fct-package": "clogparse",
        "fct-signature": "Part Nick Text",
        "fct-source": "src/Data-IRC-Event.html#Event",
        "fct-type": "function",
        "title": "Part"
      },
      "index": {
        "description": "User left the channel",
        "hierarchy": "Data IRC Event",
        "module": "Data.IRC.Event",
        "name": "Part",
        "normalized": "",
        "package": "clogparse",
        "partial": "Part",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:Quit",
      "description": {
        "fct-descr": "\u003cp\u003eUser quit the server.\n\u003c/p\u003e",
        "fct-module": "Data.IRC.Event",
        "fct-package": "clogparse",
        "fct-signature": "Quit Nick Text",
        "fct-source": "src/Data-IRC-Event.html#Event",
        "fct-type": "function",
        "title": "Quit"
      },
      "index": {
        "description": "User quit the server",
        "hierarchy": "Data IRC Event",
        "module": "Data.IRC.Event",
        "name": "Quit",
        "normalized": "",
        "package": "clogparse",
        "partial": "Quit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:ReNick",
      "description": {
        "fct-descr": "\u003cp\u003eUser changed from one to another nick.\n\u003c/p\u003e",
        "fct-module": "Data.IRC.Event",
        "fct-package": "clogparse",
        "fct-signature": "ReNick Nick Nick",
        "fct-source": "src/Data-IRC-Event.html#Event",
        "fct-type": "function",
        "title": "ReNick"
      },
      "index": {
        "description": "User changed from one to another nick",
        "hierarchy": "Data IRC Event",
        "module": "Data.IRC.Event",
        "name": "ReNick",
        "normalized": "",
        "package": "clogparse",
        "partial": "Re Nick",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:Talk",
      "description": {
        "fct-descr": "\u003cp\u003eUser spoke (\u003ccode\u003ePRIVMSG\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.IRC.Event",
        "fct-package": "clogparse",
        "fct-signature": "Talk Nick Text",
        "fct-source": "src/Data-IRC-Event.html#Event",
        "fct-type": "function",
        "title": "Talk"
      },
      "index": {
        "description": "User spoke PRIVMSG",
        "hierarchy": "Data IRC Event",
        "module": "Data.IRC.Event",
        "name": "Talk",
        "normalized": "",
        "package": "clogparse",
        "partial": "Talk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:Topic",
      "description": {
        "fct-descr": "\u003cp\u003eTopic listing or change.\n\u003c/p\u003e",
        "fct-module": "Data.IRC.Event",
        "fct-package": "clogparse",
        "fct-signature": "Topic Text",
        "fct-source": "src/Data-IRC-Event.html#Event",
        "fct-type": "function",
        "title": "Topic"
      },
      "index": {
        "description": "Topic listing or change",
        "hierarchy": "Data IRC Event",
        "module": "Data.IRC.Event",
        "name": "Topic",
        "normalized": "",
        "package": "clogparse",
        "partial": "Topic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:decompose",
      "description": {
        "fct-descr": "\u003cp\u003eDecompose an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eGenericEvent\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.IRC.Event",
        "fct-package": "clogparse",
        "fct-signature": "Event -\u003e GenericEvent",
        "fct-source": "src/Data-IRC-Event.html#decompose",
        "fct-type": "function",
        "title": "decompose"
      },
      "index": {
        "description": "Decompose an Event into GenericEvent",
        "hierarchy": "Data IRC Event",
        "module": "Data.IRC.Event",
        "name": "decompose",
        "normalized": "Event-\u003eGenericEvent",
        "package": "clogparse",
        "partial": "",
        "signature": "Event-\u003eGenericEvent"
      }
    }
  }
]