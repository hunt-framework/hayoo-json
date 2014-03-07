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
        "word": "clogparse"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse events from \u003ccode\u003eclog\u003c/code\u003e output, such as the files\n at \u003ca\u003ehttp://tunes.org/~nef/logs/haskell/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIRC has no single standard character encoding.  This\n module decodes messages as UTF-8 following common\n practice on Freenode.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.IRC.CLog.Parse",
          "name": "Parse",
          "package": "clogparse",
          "source": "src/Data-IRC-CLog-Parse.html",
          "type": "module"
        },
        "index": {
          "description": "Parse events from clog output such as the files at http tunes.org nef logs haskell IRC has no single standard character encoding This module decodes messages as UTF-8 following common practice on Freenode",
          "hierarchy": "Data IRC CLog Parse",
          "module": "Data.IRC.CLog.Parse",
          "name": "Parse",
          "package": "clogparse",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-CLog-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguring the parser.\n\u003c/p\u003e",
          "module": "Data.IRC.CLog.Parse",
          "name": "Config",
          "package": "clogparse",
          "source": "src/Data-IRC-CLog-Parse.html#Config",
          "type": "data"
        },
        "index": {
          "description": "Configuring the parser",
          "hierarchy": "Data IRC CLog Parse",
          "module": "Data.IRC.CLog.Parse",
          "name": "Config",
          "package": "clogparse",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-CLog-Parse.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IRC.CLog.Parse",
          "name": "Config",
          "package": "clogparse",
          "signature": "Config",
          "source": "src/Data-IRC-CLog-Parse.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IRC CLog Parse",
          "module": "Data.IRC.CLog.Parse",
          "name": "Config",
          "package": "clogparse",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-CLog-Parse.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e value suitable for parsing \u003ccode\u003e#haskell\u003c/code\u003e logs on Linux.\n\u003c/p\u003e",
          "module": "Data.IRC.CLog.Parse",
          "name": "haskellConfig",
          "package": "clogparse",
          "signature": "Config",
          "source": "src/Data-IRC-CLog-Parse.html#haskellConfig",
          "type": "function"
        },
        "index": {
          "description": "Config value suitable for parsing haskell logs on Linux",
          "hierarchy": "Data IRC CLog Parse",
          "module": "Data.IRC.CLog.Parse",
          "name": "haskellConfig",
          "package": "clogparse",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-CLog-Parse.html#v:haskellConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a log file.\n\u003c/p\u003e\u003cp\u003eThe file name (after any directory) is significant.\n It is used to set the date for timestamps.\n It should have the form \u003ccode\u003eYY.MM.DD\u003c/code\u003e, as do the files on\n \u003ccode\u003etunes.org\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IRC.CLog.Parse",
          "name": "parseLog",
          "package": "clogparse",
          "signature": "Config -\u003e FilePath -\u003e IO [EventAt]",
          "source": "src/Data-IRC-CLog-Parse.html#parseLog",
          "type": "function"
        },
        "index": {
          "description": "Parse log file The file name after any directory is significant It is used to set the date for timestamps It should have the form YY.MM.DD as do the files on tunes.org",
          "hierarchy": "Data IRC CLog Parse",
          "module": "Data.IRC.CLog.Parse",
          "name": "parseLog",
          "normalized": "Config-\u003eFilePath-\u003eIO[EventAt]",
          "package": "clogparse",
          "partial": "Log",
          "signature": "Config-\u003eFilePath-\u003eIO[EventAt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-CLog-Parse.html#v:parseLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTimestamp time zone; an Olson time zone name.\n\u003c/p\u003e",
          "module": "Data.IRC.CLog.Parse",
          "name": "timeZone",
          "package": "clogparse",
          "signature": "String",
          "source": "src/Data-IRC-CLog-Parse.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Timestamp time zone an Olson time zone name",
          "hierarchy": "Data IRC CLog Parse",
          "module": "Data.IRC.CLog.Parse",
          "name": "timeZone",
          "package": "clogparse",
          "partial": "Zone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-CLog-Parse.html#v:timeZone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirectory for time zone files; \u003ccode\u003e$TZDIR\u003c/code\u003e overrides.\n\u003c/p\u003e",
          "module": "Data.IRC.CLog.Parse",
          "name": "zoneInfo",
          "package": "clogparse",
          "signature": "FilePath",
          "source": "src/Data-IRC-CLog-Parse.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Directory for time zone files TZDIR overrides",
          "hierarchy": "Data IRC CLog Parse",
          "module": "Data.IRC.CLog.Parse",
          "name": "zoneInfo",
          "package": "clogparse",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-CLog-Parse.html#v:zoneInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRepresents events in an IRC channel.\n These do not correspond precisely to messages of the IRC\n protocol.  They provide a somewhat higher-level view.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.IRC.Event",
          "name": "Event",
          "package": "clogparse",
          "source": "src/Data-IRC-Event.html",
          "type": "module"
        },
        "index": {
          "description": "Represents events in an IRC channel These do not correspond precisely to messages of the IRC protocol They provide somewhat higher-level view",
          "hierarchy": "Data IRC Event",
          "module": "Data.IRC.Event",
          "name": "Event",
          "package": "clogparse",
          "partial": "Event",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvents in an IRC channel.\n\u003c/p\u003e",
          "module": "Data.IRC.Event",
          "name": "Event",
          "package": "clogparse",
          "source": "src/Data-IRC-Event.html#Event",
          "type": "data"
        },
        "index": {
          "description": "Events in an IRC channel",
          "hierarchy": "Data IRC Event",
          "module": "Data.IRC.Event",
          "name": "Event",
          "package": "clogparse",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent with timestamp.\n\u003c/p\u003e",
          "module": "Data.IRC.Event",
          "name": "EventAt",
          "package": "clogparse",
          "source": "src/Data-IRC-Event.html#EventAt",
          "type": "data"
        },
        "index": {
          "description": "Event with timestamp",
          "hierarchy": "Data IRC Event",
          "module": "Data.IRC.Event",
          "name": "EventAt",
          "package": "clogparse",
          "partial": "Event At",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#t:EventAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor working with \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e\u003c/code\u003es generically.\n\u003c/p\u003e\u003cp\u003eIndicates the \"subject\" of an event, if any, followed\n by other text.\n\u003c/p\u003e\u003cp\u003eThe subject of a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eReNick\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e event is the old nick.\n\u003c/p\u003e",
          "module": "Data.IRC.Event",
          "name": "GenericEvent",
          "package": "clogparse",
          "source": "src/Data-IRC-Event.html#GenericEvent",
          "type": "data"
        },
        "index": {
          "description": "For working with Event generically Indicates the subject of an event if any followed by other text The subject of ReNick event is the old nick",
          "hierarchy": "Data IRC Event",
          "module": "Data.IRC.Event",
          "name": "GenericEvent",
          "package": "clogparse",
          "partial": "Generic Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#t:GenericEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIRC nicks.\n\u003c/p\u003e",
          "module": "Data.IRC.Event",
          "name": "Nick",
          "package": "clogparse",
          "source": "src/Data-IRC-Event.html#Nick",
          "type": "newtype"
        },
        "index": {
          "description": "IRC nicks",
          "hierarchy": "Data IRC Event",
          "module": "Data.IRC.Event",
          "name": "Nick",
          "package": "clogparse",
          "partial": "Nick",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#t:Nick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser acted (\u003ccode\u003eCTCP ACTION\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.IRC.Event",
          "name": "Act",
          "package": "clogparse",
          "signature": "Act Nick Text",
          "source": "src/Data-IRC-Event.html#Event",
          "type": "function"
        },
        "index": {
          "description": "User acted CTCP ACTION",
          "hierarchy": "Data IRC Event",
          "module": "Data.IRC.Event",
          "name": "Act",
          "package": "clogparse",
          "partial": "Act",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:Act"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent with timestamp.\n\u003c/p\u003e",
          "module": "Data.IRC.Event",
          "name": "EventAt",
          "package": "clogparse",
          "signature": "EventAt UTCTime Event",
          "source": "src/Data-IRC-Event.html#EventAt",
          "type": "function"
        },
        "index": {
          "description": "Event with timestamp",
          "hierarchy": "Data IRC Event",
          "module": "Data.IRC.Event",
          "name": "EventAt",
          "package": "clogparse",
          "partial": "Event At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:EventAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IRC.Event",
          "name": "GenericEvent",
          "package": "clogparse",
          "signature": "GenericEvent Constr (Maybe Nick) [Text]",
          "source": "src/Data-IRC-Event.html#GenericEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IRC Event",
          "module": "Data.IRC.Event",
          "name": "GenericEvent",
          "normalized": "GenericEvent Constr(Maybe Nick)[Text]",
          "package": "clogparse",
          "partial": "Generic Event",
          "signature": "GenericEvent Constr(Maybe Nick)[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:GenericEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser joined.\n\u003c/p\u003e",
          "module": "Data.IRC.Event",
          "name": "Join",
          "package": "clogparse",
          "signature": "Join Nick Text",
          "source": "src/Data-IRC-Event.html#Event",
          "type": "function"
        },
        "index": {
          "description": "User joined",
          "hierarchy": "Data IRC Event",
          "module": "Data.IRC.Event",
          "name": "Join",
          "package": "clogparse",
          "partial": "Join",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:Join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser was kicked by user.\n\u003c/p\u003e",
          "module": "Data.IRC.Event",
          "name": "Kick",
          "package": "clogparse",
          "signature": "Kick Nick Nick Text",
          "source": "src/Data-IRC-Event.html#Event",
          "type": "function"
        },
        "index": {
          "description": "User was kicked by user",
          "hierarchy": "Data IRC Event",
          "module": "Data.IRC.Event",
          "name": "Kick",
          "package": "clogparse",
          "partial": "Kick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:Kick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogging started or stopped.\n\u003c/p\u003e",
          "module": "Data.IRC.Event",
          "name": "Log",
          "package": "clogparse",
          "signature": "Log Text",
          "source": "src/Data-IRC-Event.html#Event",
          "type": "function"
        },
        "index": {
          "description": "Logging started or stopped",
          "hierarchy": "Data IRC Event",
          "module": "Data.IRC.Event",
          "name": "Log",
          "package": "clogparse",
          "partial": "Log",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:Log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser set mode on the channel.\n\u003c/p\u003e",
          "module": "Data.IRC.Event",
          "name": "Mode",
          "package": "clogparse",
          "signature": "Mode Nick Text",
          "source": "src/Data-IRC-Event.html#Event",
          "type": "function"
        },
        "index": {
          "description": "User set mode on the channel",
          "hierarchy": "Data IRC Event",
          "module": "Data.IRC.Event",
          "name": "Mode",
          "package": "clogparse",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsers list.\n\u003c/p\u003e",
          "module": "Data.IRC.Event",
          "name": "Names",
          "package": "clogparse",
          "signature": "Names Text",
          "source": "src/Data-IRC-Event.html#Event",
          "type": "function"
        },
        "index": {
          "description": "Users list",
          "hierarchy": "Data IRC Event",
          "module": "Data.IRC.Event",
          "name": "Names",
          "package": "clogparse",
          "partial": "Names",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:Names"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IRC.Event",
          "name": "Nick",
          "package": "clogparse",
          "signature": "Nick Text",
          "source": "src/Data-IRC-Event.html#Nick",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IRC Event",
          "module": "Data.IRC.Event",
          "name": "Nick",
          "package": "clogparse",
          "partial": "Nick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:Nick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnparsable line.\n\u003c/p\u003e",
          "module": "Data.IRC.Event",
          "name": "NoParse",
          "package": "clogparse",
          "signature": "NoParse Text",
          "source": "src/Data-IRC-Event.html#EventAt",
          "type": "function"
        },
        "index": {
          "description": "Unparsable line",
          "hierarchy": "Data IRC Event",
          "module": "Data.IRC.Event",
          "name": "NoParse",
          "package": "clogparse",
          "partial": "No Parse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:NoParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser spoke (\u003ccode\u003eNOTICE\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.IRC.Event",
          "name": "Notice",
          "package": "clogparse",
          "signature": "Notice Nick Text",
          "source": "src/Data-IRC-Event.html#Event",
          "type": "function"
        },
        "index": {
          "description": "User spoke NOTICE",
          "hierarchy": "Data IRC Event",
          "module": "Data.IRC.Event",
          "name": "Notice",
          "package": "clogparse",
          "partial": "Notice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:Notice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser left the channel.\n\u003c/p\u003e",
          "module": "Data.IRC.Event",
          "name": "Part",
          "package": "clogparse",
          "signature": "Part Nick Text",
          "source": "src/Data-IRC-Event.html#Event",
          "type": "function"
        },
        "index": {
          "description": "User left the channel",
          "hierarchy": "Data IRC Event",
          "module": "Data.IRC.Event",
          "name": "Part",
          "package": "clogparse",
          "partial": "Part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:Part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser quit the server.\n\u003c/p\u003e",
          "module": "Data.IRC.Event",
          "name": "Quit",
          "package": "clogparse",
          "signature": "Quit Nick Text",
          "source": "src/Data-IRC-Event.html#Event",
          "type": "function"
        },
        "index": {
          "description": "User quit the server",
          "hierarchy": "Data IRC Event",
          "module": "Data.IRC.Event",
          "name": "Quit",
          "package": "clogparse",
          "partial": "Quit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:Quit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser changed from one to another nick.\n\u003c/p\u003e",
          "module": "Data.IRC.Event",
          "name": "ReNick",
          "package": "clogparse",
          "signature": "ReNick Nick Nick",
          "source": "src/Data-IRC-Event.html#Event",
          "type": "function"
        },
        "index": {
          "description": "User changed from one to another nick",
          "hierarchy": "Data IRC Event",
          "module": "Data.IRC.Event",
          "name": "ReNick",
          "package": "clogparse",
          "partial": "Re Nick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:ReNick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser spoke (\u003ccode\u003ePRIVMSG\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.IRC.Event",
          "name": "Talk",
          "package": "clogparse",
          "signature": "Talk Nick Text",
          "source": "src/Data-IRC-Event.html#Event",
          "type": "function"
        },
        "index": {
          "description": "User spoke PRIVMSG",
          "hierarchy": "Data IRC Event",
          "module": "Data.IRC.Event",
          "name": "Talk",
          "package": "clogparse",
          "partial": "Talk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:Talk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTopic listing or change.\n\u003c/p\u003e",
          "module": "Data.IRC.Event",
          "name": "Topic",
          "package": "clogparse",
          "signature": "Topic Text",
          "source": "src/Data-IRC-Event.html#Event",
          "type": "function"
        },
        "index": {
          "description": "Topic listing or change",
          "hierarchy": "Data IRC Event",
          "module": "Data.IRC.Event",
          "name": "Topic",
          "package": "clogparse",
          "partial": "Topic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:Topic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecompose an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eGenericEvent\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IRC.Event",
          "name": "decompose",
          "package": "clogparse",
          "signature": "Event -\u003e GenericEvent",
          "source": "src/Data-IRC-Event.html#decompose",
          "type": "function"
        },
        "index": {
          "description": "Decompose an Event into GenericEvent",
          "hierarchy": "Data IRC Event",
          "module": "Data.IRC.Event",
          "name": "decompose",
          "normalized": "Event-\u003eGenericEvent",
          "package": "clogparse",
          "signature": "Event-\u003eGenericEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clogparse/docs/Data-IRC-Event.html#v:decompose"
      }
    }
  ]
]