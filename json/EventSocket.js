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
        "word": "EventSocket"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides an interface for the FreeSwitch event socket - \u003ca\u003ehttp://wiki.freeswitch.org/wiki/Event_Socket\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eDeveloped by David Austin (\u003ca\u003emailto:vulpyne+haskelleventsocket@teliax.com\u003c/a\u003e)\n\u003c/p\u003e\u003cp\u003eReleased to the Open Source Software community by Teliax Inc (\u003ca\u003ehttp://www.teliax.com/\u003c/a\u003e)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.EventSocket",
          "name": "EventSocket",
          "package": "EventSocket",
          "source": "src/Network-EventSocket.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides an interface for the FreeSwitch event socket http wiki.freeswitch.org wiki Event Socket Developed by David Austin mailto vulpyne haskelleventsocket@teliax.com Released to the Open Source Software community by Teliax Inc http www.teliax.com",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "EventSocket",
          "package": "EventSocket",
          "partial": "Event Socket",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUUIDs are currently just bytestrings.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "ESUUID",
          "package": "EventSocket",
          "source": "src/Network-EventSocket.html#ESUUID",
          "type": "type"
        },
        "index": {
          "description": "UUIDs are currently just bytestrings",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "ESUUID",
          "package": "EventSocket",
          "partial": "ESUUID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#t:ESUUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "EventHandlerFunc",
          "package": "EventSocket",
          "source": "src/Network-EventSocket.html#EventHandlerFunc",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "EventHandlerFunc",
          "package": "EventSocket",
          "partial": "Event Handler Func",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#t:EventHandlerFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "EventHandlerResult",
          "package": "EventSocket",
          "source": "src/Network-EventSocket.html#EventHandlerResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "EventHandlerResult",
          "package": "EventSocket",
          "partial": "Event Handler Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#t:EventHandlerResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "EventId",
          "package": "EventSocket",
          "source": "src/Network-EventSocket.html#EventId",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "EventId",
          "package": "EventSocket",
          "partial": "Event Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#t:EventId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent Socket commands. This list is far from complete.\n\u003c/p\u003e\u003cp\u003eMore information is available: \u003ca\u003ehttp://wiki.freeswitch.org/wiki/Command_reference\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "EventSocketCommand",
          "package": "EventSocket",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "data"
        },
        "index": {
          "description": "Event Socket commands This list is far from complete More information is available http wiki.freeswitch.org wiki Command reference",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "EventSocketCommand",
          "package": "EventSocket",
          "partial": "Event Socket Command",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#t:EventSocketCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError type thrown when something goes boom.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "EventSocketError",
          "package": "EventSocket",
          "source": "src/Network-EventSocket.html#EventSocketError",
          "type": "data"
        },
        "index": {
          "description": "Error type thrown when something goes boom",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "EventSocketError",
          "package": "EventSocket",
          "partial": "Event Socket Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#t:EventSocketError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYou may instance this class if you'd like to use a different handle type (or just read/write to the normal Handle in some special way.)\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "EventSocketIO",
          "package": "EventSocket",
          "source": "src/Network-EventSocket.html#EventSocketIO",
          "type": "class"
        },
        "index": {
          "description": "You may instance this class if you like to use different handle type or just read write to the normal Handle in some special way",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "EventSocketIO",
          "package": "EventSocket",
          "partial": "Event Socket IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#t:EventSocketIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasically, an event. Used and returned by some of the lower level Eventsocket routines.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "EventSocketMessage",
          "package": "EventSocket",
          "source": "src/Network-EventSocket.html#EventSocketMessage",
          "type": "data"
        },
        "index": {
          "description": "Basically an event Used and returned by some of the lower level Eventsocket routines",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "EventSocketMessage",
          "package": "EventSocket",
          "partial": "Event Socket Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#t:EventSocketMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state of the event socket connection.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "EventSocketState",
          "package": "EventSocket",
          "source": "src/Network-EventSocket.html#EventSocketState",
          "type": "data"
        },
        "index": {
          "description": "The state of the event socket connection",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "EventSocketState",
          "package": "EventSocket",
          "partial": "Event Socket State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#t:EventSocketState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "EventSocketT",
          "package": "EventSocket",
          "source": "src/Network-EventSocket.html#EventSocketT",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "EventSocketT",
          "package": "EventSocket",
          "partial": "Event Socket",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#t:EventSocketT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMainly FreeSwitch events.\n\u003c/p\u003e\u003cp\u003eMore information for FreeSwitch-specific events: \u003ca\u003ehttp://wiki.freeswitch.org/wiki/Event_list\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "EventType",
          "package": "EventSocket",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "data"
        },
        "index": {
          "description": "Mainly FreeSwitch events More information for FreeSwitch-specific events http wiki.freeswitch.org wiki Event list",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "EventType",
          "package": "EventSocket",
          "partial": "Event Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#t:EventType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust a simple map ByteString to ByteString.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "EvtKVMap",
          "package": "EventSocket",
          "source": "src/Network-EventSocket.html#EvtKVMap",
          "type": "type"
        },
        "index": {
          "description": "Just simple map ByteString to ByteString",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "EvtKVMap",
          "package": "EventSocket",
          "partial": "Evt KVMap",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#t:EvtKVMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStores a session. Two user accessible fields exist:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e sessUUID :: \u003ccode\u003e\u003ca\u003eESUUID\u003c/a\u003e\u003c/code\u003e -- The UUID this session is associated with.\n\u003c/li\u003e\u003cli\u003e sessVariables :: \u003ccode\u003e\u003ca\u003eEvtKVMap\u003c/a\u003e\u003c/code\u003e -- Variables associated with this channel, updated when receiving CHANNEL_DATA events from FreeSwitch.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.EventSocket",
          "name": "SessionState",
          "package": "EventSocket",
          "source": "src/Network-EventSocket.html#SessionState",
          "type": "data"
        },
        "index": {
          "description": "Stores session Two user accessible fields exist sessUUID ESUUID The UUID this session is associated with sessVariables EvtKVMap Variables associated with this channel updated when receiving CHANNEL DATA events from FreeSwitch",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "SessionState",
          "package": "EventSocket",
          "partial": "Session State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#t:SessionState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnswers the call.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "CmdAnswer",
          "package": "EventSocket",
          "signature": "CmdAnswer",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "description": "Answers the call",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "CmdAnswer",
          "package": "EventSocket",
          "partial": "Cmd Answer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:CmdAnswer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBridges a call. \u003ca\u003ehttp://wiki.freeswitch.org/wiki/Misc._Dialplan_Tools_bridgecall\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "CmdBridge",
          "package": "EventSocket",
          "signature": "CmdBridge",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "description": "Bridges call http wiki.freeswitch.org wiki Misc Dialplan Tools bridgecall",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "CmdBridge",
          "package": "EventSocket",
          "partial": "Cmd Bridge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:CmdBridge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://wiki.freeswitch.org/wiki/Event_Socket#event\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "CmdEvents",
          "package": "EventSocket",
          "signature": "CmdEvents",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "description": "http wiki.freeswitch.org wiki Event Socket event",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "CmdEvents",
          "package": "EventSocket",
          "partial": "Cmd Events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:CmdEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://wiki.freeswitch.org/wiki/Event_Socket#filter\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "CmdFilter",
          "package": "EventSocket",
          "signature": "CmdFilter",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "description": "http wiki.freeswitch.org wiki Event Socket filter",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "CmdFilter",
          "package": "EventSocket",
          "partial": "Cmd Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:CmdFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHangs up the call. (Uses the UUID in the event socket state.)\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "CmdHangup",
          "package": "EventSocket",
          "signature": "CmdHangup",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "description": "Hangs up the call Uses the UUID in the event socket state",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "CmdHangup",
          "package": "EventSocket",
          "partial": "Cmd Hangup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:CmdHangup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns on event socket linger, causing the event socket to send all remaining events before closing the connection.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "CmdLinger",
          "package": "EventSocket",
          "signature": "CmdLinger",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "description": "Turns on event socket linger causing the event socket to send all remaining events before closing the connection",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "CmdLinger",
          "package": "EventSocket",
          "partial": "Cmd Linger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:CmdLinger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinds a meta application. \u003ca\u003ehttp://wiki.freeswitch.org/wiki/Misc._Dialplan_Tools_bind_meta_app\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "CmdMetaApp",
          "package": "EventSocket",
          "signature": "CmdMetaApp",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "description": "Binds meta application http wiki.freeswitch.org wiki Misc Dialplan Tools bind meta app",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "CmdMetaApp",
          "package": "EventSocket",
          "partial": "Cmd Meta App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:CmdMetaApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlays a sound file. \u003ca\u003ehttp://wiki.freeswitch.org/wiki/Misc._Dialplan_Tools_playback\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "CmdPlay",
          "package": "EventSocket",
          "signature": "CmdPlay",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "description": "Plays sound file http wiki.freeswitch.org wiki Misc Dialplan Tools playback",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "CmdPlay",
          "package": "EventSocket",
          "partial": "Cmd Play",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:CmdPlay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlays a sound file and waits for input. \u003ca\u003ehttp://wiki.freeswitch.org/wiki/Misc._Dialplan_Tools_play_and_get_digits\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "CmdPlayGather",
          "package": "EventSocket",
          "signature": "CmdPlayGather",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "description": "Plays sound file and waits for input http wiki.freeswitch.org wiki Misc Dialplan Tools play and get digits",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "CmdPlayGather",
          "package": "EventSocket",
          "partial": "Cmd Play Gather",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:CmdPlayGather"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecords a sound file. \u003ca\u003ehttp://wiki.freeswitch.org/wiki/Misc._Dialplan_Tools_record\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "CmdRecord",
          "package": "EventSocket",
          "signature": "CmdRecord",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "description": "Records sound file http wiki.freeswitch.org wiki Misc Dialplan Tools record",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "CmdRecord",
          "package": "EventSocket",
          "partial": "Cmd Record",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:CmdRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCan speak simple output like digits or time. \u003ca\u003ehttp://wiki.freeswitch.org/wiki/Misc._Dialplan_Tools_say\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "CmdSay",
          "package": "EventSocket",
          "signature": "CmdSay",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "description": "Can speak simple output like digits or time http wiki.freeswitch.org wiki Misc Dialplan Tools say",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "CmdSay",
          "package": "EventSocket",
          "partial": "Cmd Say",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:CmdSay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets a channel variable.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "CmdSet",
          "package": "EventSocket",
          "signature": "CmdSet",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "description": "Sets channel variable",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "CmdSet",
          "package": "EventSocket",
          "partial": "Cmd Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:CmdSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSleeps the specified number of milliseconds. \u003ca\u003ehttp://wiki.freeswitch.org/wiki/Misc._Dialplan_Tools_sleep\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "CmdSleep",
          "package": "EventSocket",
          "signature": "CmdSleep",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "description": "Sleeps the specified number of milliseconds http wiki.freeswitch.org wiki Misc Dialplan Tools sleep",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "CmdSleep",
          "package": "EventSocket",
          "partial": "Cmd Sleep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:CmdSleep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCan speak arbitrary text using a TTS engine. \u003ca\u003ehttp://wiki.freeswitch.org/wiki/Misc._Dialplan_Tools_speak\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "CmdSpeak",
          "package": "EventSocket",
          "signature": "CmdSpeak",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "description": "Can speak arbitrary text using TTS engine http wiki.freeswitch.org wiki Misc Dialplan Tools speak",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "CmdSpeak",
          "package": "EventSocket",
          "partial": "Cmd Speak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:CmdSpeak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSync point.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "CmdSync",
          "package": "EventSocket",
          "signature": "CmdSync",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "description": "Sync point",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "CmdSync",
          "package": "EventSocket",
          "partial": "Cmd Sync",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:CmdSync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "EHContinue",
          "package": "EventSocket",
          "signature": "EHContinue",
          "source": "src/Network-EventSocket.html#EventHandlerResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "EHContinue",
          "package": "EventSocket",
          "partial": "EHContinue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:EHContinue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "EHStopEvents",
          "package": "EventSocket",
          "signature": "EHStopEvents",
          "source": "src/Network-EventSocket.html#EventHandlerResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "EHStopEvents",
          "package": "EventSocket",
          "partial": "EHStop Events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:EHStopEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "EHStopReading",
          "package": "EventSocket",
          "signature": "EHStopReading",
          "source": "src/Network-EventSocket.html#EventHandlerResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "EHStopReading",
          "package": "EventSocket",
          "partial": "EHStop Reading",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:EHStopReading"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_ADD_SCHEDULE",
          "package": "EventSocket",
          "signature": "E_ADD_SCHEDULE",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_ADD_SCHEDULE",
          "package": "EventSocket",
          "partial": "ADD SCHEDULE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_ADD_SCHEDULE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_ALL",
          "package": "EventSocket",
          "signature": "E_ALL",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_ALL",
          "package": "EventSocket",
          "partial": "ALL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_ALL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_API",
          "package": "EventSocket",
          "signature": "E_API",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_API",
          "package": "EventSocket",
          "partial": "API",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_API"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFreeSwitch API reply.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "E_APIResponse",
          "package": "EventSocket",
          "signature": "E_APIResponse",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "description": "FreeSwitch API reply",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_APIResponse",
          "package": "EventSocket",
          "partial": "APIResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_APIResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_BACKGROUND_JOB",
          "package": "EventSocket",
          "signature": "E_BACKGROUND_JOB",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_BACKGROUND_JOB",
          "package": "EventSocket",
          "partial": "BACKGROUND JOB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_BACKGROUND_JOB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_CALL_SECURE",
          "package": "EventSocket",
          "signature": "E_CALL_SECURE",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_CALL_SECURE",
          "package": "EventSocket",
          "partial": "CALL SECURE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_CALL_SECURE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_CALL_UPDATE",
          "package": "EventSocket",
          "signature": "E_CALL_UPDATE",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_CALL_UPDATE",
          "package": "EventSocket",
          "partial": "CALL UPDATE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_CALL_UPDATE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_ANSWER",
          "package": "EventSocket",
          "signature": "E_CHANNEL_ANSWER",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_ANSWER",
          "package": "EventSocket",
          "partial": "CHANNEL ANSWER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_CHANNEL_ANSWER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_APPLICATION",
          "package": "EventSocket",
          "signature": "E_CHANNEL_APPLICATION",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_APPLICATION",
          "package": "EventSocket",
          "partial": "CHANNEL APPLICATION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_CHANNEL_APPLICATION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_BRIDGE",
          "package": "EventSocket",
          "signature": "E_CHANNEL_BRIDGE",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_BRIDGE",
          "package": "EventSocket",
          "partial": "CHANNEL BRIDGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_CHANNEL_BRIDGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_CREATE",
          "package": "EventSocket",
          "signature": "E_CHANNEL_CREATE",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_CREATE",
          "package": "EventSocket",
          "partial": "CHANNEL CREATE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_CHANNEL_CREATE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_DATA",
          "package": "EventSocket",
          "signature": "E_CHANNEL_DATA",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_DATA",
          "package": "EventSocket",
          "partial": "CHANNEL DATA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_CHANNEL_DATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_DESTROY",
          "package": "EventSocket",
          "signature": "E_CHANNEL_DESTROY",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_DESTROY",
          "package": "EventSocket",
          "partial": "CHANNEL DESTROY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_CHANNEL_DESTROY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_EXECUTE",
          "package": "EventSocket",
          "signature": "E_CHANNEL_EXECUTE",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_EXECUTE",
          "package": "EventSocket",
          "partial": "CHANNEL EXECUTE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_CHANNEL_EXECUTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_EXECUTE_COMPLETE",
          "package": "EventSocket",
          "signature": "E_CHANNEL_EXECUTE_COMPLETE",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_EXECUTE_COMPLETE",
          "package": "EventSocket",
          "partial": "CHANNEL EXECUTE COMPLETE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_CHANNEL_EXECUTE_COMPLETE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_HANGUP",
          "package": "EventSocket",
          "signature": "E_CHANNEL_HANGUP",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_HANGUP",
          "package": "EventSocket",
          "partial": "CHANNEL HANGUP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_CHANNEL_HANGUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_HANGUP_COMPLETE",
          "package": "EventSocket",
          "signature": "E_CHANNEL_HANGUP_COMPLETE",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_HANGUP_COMPLETE",
          "package": "EventSocket",
          "partial": "CHANNEL HANGUP COMPLETE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_CHANNEL_HANGUP_COMPLETE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_ORIGINATE",
          "package": "EventSocket",
          "signature": "E_CHANNEL_ORIGINATE",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_ORIGINATE",
          "package": "EventSocket",
          "partial": "CHANNEL ORIGINATE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_CHANNEL_ORIGINATE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_OUTGOING",
          "package": "EventSocket",
          "signature": "E_CHANNEL_OUTGOING",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_OUTGOING",
          "package": "EventSocket",
          "partial": "CHANNEL OUTGOING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_CHANNEL_OUTGOING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_PARK",
          "package": "EventSocket",
          "signature": "E_CHANNEL_PARK",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_PARK",
          "package": "EventSocket",
          "partial": "CHANNEL PARK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_CHANNEL_PARK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_PROGRESS",
          "package": "EventSocket",
          "signature": "E_CHANNEL_PROGRESS",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_PROGRESS",
          "package": "EventSocket",
          "partial": "CHANNEL PROGRESS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_CHANNEL_PROGRESS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_PROGRESS_MEDIA",
          "package": "EventSocket",
          "signature": "E_CHANNEL_PROGRESS_MEDIA",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_PROGRESS_MEDIA",
          "package": "EventSocket",
          "partial": "CHANNEL PROGRESS MEDIA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_CHANNEL_PROGRESS_MEDIA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_STATE",
          "package": "EventSocket",
          "signature": "E_CHANNEL_STATE",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_STATE",
          "package": "EventSocket",
          "partial": "CHANNEL STATE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_CHANNEL_STATE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_UNBRIDGE",
          "package": "EventSocket",
          "signature": "E_CHANNEL_UNBRIDGE",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_UNBRIDGE",
          "package": "EventSocket",
          "partial": "CHANNEL UNBRIDGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_CHANNEL_UNBRIDGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_UNPARK",
          "package": "EventSocket",
          "signature": "E_CHANNEL_UNPARK",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_UNPARK",
          "package": "EventSocket",
          "partial": "CHANNEL UNPARK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_CHANNEL_UNPARK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_UUID",
          "package": "EventSocket",
          "signature": "E_CHANNEL_UUID",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_CHANNEL_UUID",
          "package": "EventSocket",
          "partial": "CHANNEL UUID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_CHANNEL_UUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_CLIENT_DISCONNECTED",
          "package": "EventSocket",
          "signature": "E_CLIENT_DISCONNECTED",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_CLIENT_DISCONNECTED",
          "package": "EventSocket",
          "partial": "CLIENT DISCONNECTED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_CLIENT_DISCONNECTED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_CODEC",
          "package": "EventSocket",
          "signature": "E_CODEC",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_CODEC",
          "package": "EventSocket",
          "partial": "CODEC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_CODEC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_COMMAND",
          "package": "EventSocket",
          "signature": "E_COMMAND",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_COMMAND",
          "package": "EventSocket",
          "partial": "COMMAND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_COMMAND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_CUSTOM",
          "package": "EventSocket",
          "signature": "E_CUSTOM",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_CUSTOM",
          "package": "EventSocket",
          "partial": "CUSTOM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_CUSTOM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFreeSwitch command reply.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "E_CommandReply",
          "package": "EventSocket",
          "signature": "E_CommandReply",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "description": "FreeSwitch command reply",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_CommandReply",
          "package": "EventSocket",
          "partial": "Command Reply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_CommandReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_DEL_SCHEDULE",
          "package": "EventSocket",
          "signature": "E_DEL_SCHEDULE",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_DEL_SCHEDULE",
          "package": "EventSocket",
          "partial": "DEL SCHEDULE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_DEL_SCHEDULE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_DETECTED_SPEECH",
          "package": "EventSocket",
          "signature": "E_DETECTED_SPEECH",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_DETECTED_SPEECH",
          "package": "EventSocket",
          "partial": "DETECTED SPEECH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_DETECTED_SPEECH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_DETECTED_TONE",
          "package": "EventSocket",
          "signature": "E_DETECTED_TONE",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_DETECTED_TONE",
          "package": "EventSocket",
          "partial": "DETECTED TONE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_DETECTED_TONE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_DTMF",
          "package": "EventSocket",
          "signature": "E_DTMF",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_DTMF",
          "package": "EventSocket",
          "partial": "DTMF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_DTMF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_EXE_SCHEDULE",
          "package": "EventSocket",
          "signature": "E_EXE_SCHEDULE",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_EXE_SCHEDULE",
          "package": "EventSocket",
          "partial": "EXE SCHEDULE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_EXE_SCHEDULE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSent when ending.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "E_End",
          "package": "EventSocket",
          "signature": "E_End",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "description": "Sent when ending",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_End",
          "package": "EventSocket",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_End"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_GENERAL",
          "package": "EventSocket",
          "signature": "E_GENERAL",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_GENERAL",
          "package": "EventSocket",
          "partial": "GENERAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_GENERAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_HEARTBEAT",
          "package": "EventSocket",
          "signature": "E_HEARTBEAT",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_HEARTBEAT",
          "package": "EventSocket",
          "partial": "HEARTBEAT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_HEARTBEAT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_INBOUND_CHAN",
          "package": "EventSocket",
          "signature": "E_INBOUND_CHAN",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_INBOUND_CHAN",
          "package": "EventSocket",
          "partial": "INBOUND CHAN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_INBOUND_CHAN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_LOG",
          "package": "EventSocket",
          "signature": "E_LOG",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_LOG",
          "package": "EventSocket",
          "partial": "LOG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_LOG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_MESSAGE",
          "package": "EventSocket",
          "signature": "E_MESSAGE",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_MESSAGE",
          "package": "EventSocket",
          "partial": "MESSAGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_MESSAGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_MESSAGE_QUERY",
          "package": "EventSocket",
          "signature": "E_MESSAGE_QUERY",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_MESSAGE_QUERY",
          "package": "EventSocket",
          "partial": "MESSAGE QUERY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_MESSAGE_QUERY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_MESSAGE_WAITING",
          "package": "EventSocket",
          "signature": "E_MESSAGE_WAITING",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_MESSAGE_WAITING",
          "package": "EventSocket",
          "partial": "MESSAGE WAITING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_MESSAGE_WAITING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_MODULE_LOAD",
          "package": "EventSocket",
          "signature": "E_MODULE_LOAD",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_MODULE_LOAD",
          "package": "EventSocket",
          "partial": "MODULE LOAD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_MODULE_LOAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_MODULE_UNLOAD",
          "package": "EventSocket",
          "signature": "E_MODULE_UNLOAD",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_MODULE_UNLOAD",
          "package": "EventSocket",
          "partial": "MODULE UNLOAD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_MODULE_UNLOAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_NAT",
          "package": "EventSocket",
          "signature": "E_NAT",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_NAT",
          "package": "EventSocket",
          "partial": "NAT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_NAT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_NOTALK",
          "package": "EventSocket",
          "signature": "E_NOTALK",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_NOTALK",
          "package": "EventSocket",
          "partial": "NOTALK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_NOTALK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_NOTIFY",
          "package": "EventSocket",
          "signature": "E_NOTIFY",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_NOTIFY",
          "package": "EventSocket",
          "partial": "NOTIFY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_NOTIFY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_OUTBOUND_CHAN",
          "package": "EventSocket",
          "signature": "E_OUTBOUND_CHAN",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_OUTBOUND_CHAN",
          "package": "EventSocket",
          "partial": "OUTBOUND CHAN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_OUTBOUND_CHAN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSent when the Freeswitch event name could not be parsed.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "E_Other",
          "package": "EventSocket",
          "signature": "E_Other ByteString",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "description": "Sent when the Freeswitch event name could not be parsed",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_Other",
          "package": "EventSocket",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_Other"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_PRESENCE_IN",
          "package": "EventSocket",
          "signature": "E_PRESENCE_IN",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_PRESENCE_IN",
          "package": "EventSocket",
          "partial": "PRESENCE IN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_PRESENCE_IN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_PRESENCE_OUT",
          "package": "EventSocket",
          "signature": "E_PRESENCE_OUT",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_PRESENCE_OUT",
          "package": "EventSocket",
          "partial": "PRESENCE OUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_PRESENCE_OUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_PRESENCE_PROBE",
          "package": "EventSocket",
          "signature": "E_PRESENCE_PROBE",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_PRESENCE_PROBE",
          "package": "EventSocket",
          "partial": "PRESENCE PROBE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_PRESENCE_PROBE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_PRIVATE_COMMAND",
          "package": "EventSocket",
          "signature": "E_PRIVATE_COMMAND",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_PRIVATE_COMMAND",
          "package": "EventSocket",
          "partial": "PRIVATE COMMAND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_PRIVATE_COMMAND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_PUBLISH",
          "package": "EventSocket",
          "signature": "E_PUBLISH",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_PUBLISH",
          "package": "EventSocket",
          "partial": "PUBLISH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_PUBLISH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_RECORD_START",
          "package": "EventSocket",
          "signature": "E_RECORD_START",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_RECORD_START",
          "package": "EventSocket",
          "partial": "RECORD START",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_RECORD_START"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_RECORD_STOP",
          "package": "EventSocket",
          "signature": "E_RECORD_STOP",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_RECORD_STOP",
          "package": "EventSocket",
          "partial": "RECORD STOP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_RECORD_STOP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_RECV_INFO",
          "package": "EventSocket",
          "signature": "E_RECV_INFO",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_RECV_INFO",
          "package": "EventSocket",
          "partial": "RECV INFO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_RECV_INFO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_RECV_MESSAGE",
          "package": "EventSocket",
          "signature": "E_RECV_MESSAGE",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_RECV_MESSAGE",
          "package": "EventSocket",
          "partial": "RECV MESSAGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_RECV_MESSAGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_RELOADXML",
          "package": "EventSocket",
          "signature": "E_RELOADXML",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_RELOADXML",
          "package": "EventSocket",
          "partial": "RELOADXML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_RELOADXML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_REQUEST_PARMS",
          "package": "EventSocket",
          "signature": "E_REQUEST_PARMS",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_REQUEST_PARMS",
          "package": "EventSocket",
          "partial": "REQUEST PARMS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_REQUEST_PARMS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_RE_SCHEDULE",
          "package": "EventSocket",
          "signature": "E_RE_SCHEDULE",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_RE_SCHEDULE",
          "package": "EventSocket",
          "partial": "RE SCHEDULE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_RE_SCHEDULE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_ROSTER",
          "package": "EventSocket",
          "signature": "E_ROSTER",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_ROSTER",
          "package": "EventSocket",
          "partial": "ROSTER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_ROSTER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_SEND_INFO",
          "package": "EventSocket",
          "signature": "E_SEND_INFO",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_SEND_INFO",
          "package": "EventSocket",
          "partial": "SEND INFO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_SEND_INFO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_SEND_MESSAGE",
          "package": "EventSocket",
          "signature": "E_SEND_MESSAGE",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_SEND_MESSAGE",
          "package": "EventSocket",
          "partial": "SEND MESSAGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_SEND_MESSAGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_SERVER_DISCONNECTED",
          "package": "EventSocket",
          "signature": "E_SERVER_DISCONNECTED",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_SERVER_DISCONNECTED",
          "package": "EventSocket",
          "partial": "SERVER DISCONNECTED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_SERVER_DISCONNECTED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_SESSION_CRASH",
          "package": "EventSocket",
          "signature": "E_SESSION_CRASH",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_SESSION_CRASH",
          "package": "EventSocket",
          "partial": "SESSION CRASH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_SESSION_CRASH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_SESSION_HEARTBEAT",
          "package": "EventSocket",
          "signature": "E_SESSION_HEARTBEAT",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_SESSION_HEARTBEAT",
          "package": "EventSocket",
          "partial": "SESSION HEARTBEAT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_SESSION_HEARTBEAT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_SHUTDOWN",
          "package": "EventSocket",
          "signature": "E_SHUTDOWN",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_SHUTDOWN",
          "package": "EventSocket",
          "partial": "SHUTDOWN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_SHUTDOWN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_STARTUP",
          "package": "EventSocket",
          "signature": "E_STARTUP",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_STARTUP",
          "package": "EventSocket",
          "partial": "STARTUP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_STARTUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSent when the initial negotiation is done.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "E_Start",
          "package": "EventSocket",
          "signature": "E_Start",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "description": "Sent when the initial negotiation is done",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_Start",
          "package": "EventSocket",
          "partial": "Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_Start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_TALK",
          "package": "EventSocket",
          "signature": "E_TALK",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_TALK",
          "package": "EventSocket",
          "partial": "TALK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_TALK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_TRAP",
          "package": "EventSocket",
          "signature": "E_TRAP",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_TRAP",
          "package": "EventSocket",
          "partial": "TRAP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_TRAP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "E_UNPUBLISH",
          "package": "EventSocket",
          "signature": "E_UNPUBLISH",
          "source": "src/Network-EventSocket.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "E_UNPUBLISH",
          "package": "EventSocket",
          "partial": "UNPUBLISH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:E_UNPUBLISH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "EventHandlerFunc",
          "package": "EventSocket",
          "signature": "EventHandlerFunc (EventSocketMessage -\u003e EventSocketT h m (Maybe (EventHandlerFunc h m), EventHandlerResult))",
          "source": "src/Network-EventSocket.html#EventHandlerFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "EventHandlerFunc",
          "normalized": "EventHandlerFunc(EventSocketMessage-\u003eEventSocketT a b(Maybe(EventHandlerFunc a b),EventHandlerResult))",
          "package": "EventSocket",
          "partial": "Event Handler Func",
          "signature": "EventHandlerFunc(EventSocketMessage-\u003eEventSocketT h m(Maybe(EventHandlerFunc h m),EventHandlerResult))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:EventHandlerFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "EventSocketMessage",
          "package": "EventSocket",
          "signature": "EventSocketMessage",
          "source": "src/Network-EventSocket.html#EventSocketMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "EventSocketMessage",
          "package": "EventSocket",
          "partial": "Event Socket Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:EventSocketMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "GeneralError",
          "package": "EventSocket",
          "signature": "GeneralError String",
          "source": "src/Network-EventSocket.html#EventSocketError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "GeneralError",
          "package": "EventSocket",
          "partial": "General Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:GeneralError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "NetworkError",
          "package": "EventSocket",
          "signature": "NetworkError String",
          "source": "src/Network-EventSocket.html#EventSocketError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "NetworkError",
          "package": "EventSocket",
          "partial": "Network Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:NetworkError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "ParseError",
          "package": "EventSocket",
          "signature": "ParseError String",
          "source": "src/Network-EventSocket.html#EventSocketError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "ParseError",
          "package": "EventSocket",
          "partial": "Parse Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "ProtocolError",
          "package": "EventSocket",
          "signature": "ProtocolError String",
          "source": "src/Network-EventSocket.html#EventSocketError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "ProtocolError",
          "package": "EventSocket",
          "partial": "Protocol Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:ProtocolError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "UnknownError",
          "package": "EventSocket",
          "signature": "UnknownError",
          "source": "src/Network-EventSocket.html#EventSocketError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "UnknownError",
          "package": "EventSocket",
          "partial": "Unknown Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:UnknownError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a raw command (such as an API command) to the event socket and waits for the response.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "apiAndReply",
          "package": "EventSocket",
          "signature": "ByteString-\u003e ByteString-\u003e EventSocketT h m [EventSocketMessage]",
          "type": "function"
        },
        "index": {
          "description": "Sends raw command such as an API command to the event socket and waits for the response",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "apiAndReply",
          "normalized": "ByteString-\u003eByteString-\u003eEventSocketT a b[EventSocketMessage]",
          "package": "EventSocket",
          "partial": "And Reply",
          "signature": "ByteString-\u003eByteString-\u003eEventSocketT h m[EventSocketMessage]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:apiAndReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "appString",
          "package": "EventSocket",
          "signature": "ByteString",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "appString",
          "package": "EventSocket",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:appString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a command and then waits for a response.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "commandAndReply",
          "package": "EventSocket",
          "signature": "ByteString-\u003e ByteString-\u003e EventSocketT h m [EventSocketMessage]",
          "type": "function"
        },
        "index": {
          "description": "Sends command and then waits for response",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "commandAndReply",
          "normalized": "ByteString-\u003eByteString-\u003eEventSocketT a b[EventSocketMessage]",
          "package": "EventSocket",
          "partial": "And Reply",
          "signature": "ByteString-\u003eByteString-\u003eEventSocketT h m[EventSocketMessage]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:commandAndReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends the initial connect message and receives a response.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "connectInbound",
          "package": "EventSocket",
          "signature": "EventSocketT h m EventSocketMessage",
          "source": "src/Network-EventSocket.html#connectInbound",
          "type": "function"
        },
        "index": {
          "description": "Sends the initial connect message and receives response",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "connectInbound",
          "package": "EventSocket",
          "partial": "Inbound",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:connectInbound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "destinations",
          "package": "EventSocket",
          "signature": "[ByteString]",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "destinations",
          "normalized": "[ByteString]",
          "package": "EventSocket",
          "signature": "[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:destinations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDuration to sleep.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "duration",
          "package": "EventSocket",
          "signature": "Int",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "description": "Duration to sleep",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "duration",
          "package": "EventSocket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a command of type \u003ccode\u003e\u003ca\u003eEventSocketCommand\u003c/a\u003e\u003c/code\u003e. Behaves roughly the same as \u003ccode\u003e\u003ca\u003ecommandAndReply\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "esRun",
          "package": "EventSocket",
          "signature": "EventSocketCommand-\u003e EventSocketT h m [EventSocketMessage]",
          "type": "function"
        },
        "index": {
          "description": "Runs command of type EventSocketCommand Behaves roughly the same as commandAndReply",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "esRun",
          "normalized": "EventSocketCommand-\u003eEventSocketT a b[EventSocketMessage]",
          "package": "EventSocket",
          "partial": "Run",
          "signature": "EventSocketCommand-\u003eEventSocketT h m[EventSocketMessage]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:esRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a sequence of \u003ccode\u003e\u003ca\u003eEventSocketCommand\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "esRunActions",
          "package": "EventSocket",
          "signature": "[EventSocketCommand]-\u003e EventSocketT h m [EventSocketMessage]",
          "type": "function"
        },
        "index": {
          "description": "Runs sequence of EventSocketCommand",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "esRunActions",
          "normalized": "[EventSocketCommand]-\u003eEventSocketT a b[EventSocketMessage]",
          "package": "EventSocket",
          "partial": "Run Actions",
          "signature": "[EventSocketCommand]-\u003eEventSocketT h m[EventSocketMessage]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:esRunActions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "esioBRead",
          "package": "EventSocket",
          "signature": "esioBRead",
          "source": "src/Network-EventSocket.html#esioBRead",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "esioBRead",
          "package": "EventSocket",
          "partial": "BRead",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:esioBRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "esioBReadLine",
          "package": "EventSocket",
          "signature": "esioBReadLine",
          "source": "src/Network-EventSocket.html#esioBReadLine",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "esioBReadLine",
          "package": "EventSocket",
          "partial": "BRead Line",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:esioBReadLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "esioBWrite",
          "package": "EventSocket",
          "signature": "esioBWrite",
          "source": "src/Network-EventSocket.html#esioBWrite",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "esioBWrite",
          "package": "EventSocket",
          "partial": "BWrite",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:esioBWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "esioFlush",
          "package": "EventSocket",
          "signature": "esioFlush",
          "source": "src/Network-EventSocket.html#esioFlush",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "esioFlush",
          "package": "EventSocket",
          "partial": "Flush",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:esioFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "esioReady",
          "package": "EventSocket",
          "signature": "esioReady",
          "source": "src/Network-EventSocket.html#esioReady",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "esioReady",
          "package": "EventSocket",
          "partial": "Ready",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:esioReady"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEither a ByteString or a parsed KV map depending on the type of response.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "esmData",
          "package": "EventSocket",
          "signature": "Either ByteString EvtKVMap",
          "source": "src/Network-EventSocket.html#EventSocketMessage",
          "type": "function"
        },
        "index": {
          "description": "Either ByteString or parsed KV map depending on the type of response",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "esmData",
          "package": "EventSocket",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:esmData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe headers FreeSwitch sent.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "esmHeaders",
          "package": "EventSocket",
          "signature": "EvtKVMap",
          "source": "src/Network-EventSocket.html#EventSocketMessage",
          "type": "function"
        },
        "index": {
          "description": "The headers FreeSwitch sent",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "esmHeaders",
          "package": "EventSocket",
          "partial": "Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:esmHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs this a positive response?\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "esmSuccess",
          "package": "EventSocket",
          "signature": "Bool",
          "source": "src/Network-EventSocket.html#EventSocketMessage",
          "type": "function"
        },
        "index": {
          "description": "Is this positive response",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "esmSuccess",
          "package": "EventSocket",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:esmSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of the event.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "esmType",
          "package": "EventSocket",
          "signature": "EventType",
          "source": "src/Network-EventSocket.html#EventSocketMessage",
          "type": "function"
        },
        "index": {
          "description": "Type of the event",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "esmType",
          "package": "EventSocket",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:esmType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeader to allow.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "eventHeader",
          "package": "EventSocket",
          "signature": "ByteString",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "description": "Header to allow",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "eventHeader",
          "package": "EventSocket",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:eventHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads messages from the event socket until a condition is true.\n\u003c/p\u003e\u003cp\u003eThe handler is called with Nothing to detect whether messages should be read (for example, check if the socket has data waiting.)\n\u003c/p\u003e\u003cp\u003eAt that point, the handler returns whether more messages should be read (True for more messages, False to stop reading messages.)\n\u003c/p\u003e\u003cp\u003eThe handler is called on each received message.\n\u003c/p\u003e\u003cp\u003eAt that the handler returns whether it is done (True for no more messages, False to continue reading messages.)\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "eventSocketReadEventsUntil",
          "package": "EventSocket",
          "signature": "(Maybe EventSocketMessage -\u003e EventSocketT h m Bool)-\u003e EventSocketT h m (Bool, [EventSocketMessage])",
          "type": "function"
        },
        "index": {
          "description": "Reads messages from the event socket until condition is true The handler is called with Nothing to detect whether messages should be read for example check if the socket has data waiting At that point the handler returns whether more messages should be read True for more messages False to stop reading messages The handler is called on each received message At that the handler returns whether it is done True for no more messages False to continue reading messages",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "eventSocketReadEventsUntil",
          "normalized": "(Maybe EventSocketMessage-\u003eEventSocketT a b Bool)-\u003eEventSocketT a b(Bool,[EventSocketMessage])",
          "package": "EventSocket",
          "partial": "Socket Read Events Until",
          "signature": "(Maybe EventSocketMessage-\u003eEventSocketT h m Bool)-\u003eEventSocketT h m(Bool,[EventSocketMessage])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:eventSocketReadEventsUntil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue to allow.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "eventValue",
          "package": "EventSocket",
          "signature": "ByteString",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "description": "Value to allow",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "eventValue",
          "package": "EventSocket",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:eventValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent types.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "events",
          "package": "EventSocket",
          "signature": "[ByteString]",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "description": "Event types",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "events",
          "normalized": "[ByteString]",
          "package": "EventSocket",
          "signature": "[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:events"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "file",
          "package": "EventSocket",
          "signature": "ByteString",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "file",
          "package": "EventSocket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "filename",
          "package": "EventSocket",
          "signature": "ByteString",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "filename",
          "package": "EventSocket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:filename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent format, either plain or XML.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "format",
          "package": "EventSocket",
          "signature": "ByteString",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "description": "Event format either plain or XML",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "format",
          "package": "EventSocket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets a session if it exists.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "getSession",
          "package": "EventSocket",
          "signature": "ESUUID-\u003e EventSocketT h m (Maybe (SessionState h m))",
          "type": "function"
        },
        "index": {
          "description": "Gets session if it exists",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "getSession",
          "normalized": "ESUUID-\u003eEventSocketT a b(Maybe(SessionState a b))",
          "package": "EventSocket",
          "partial": "Session",
          "signature": "ESUUID-\u003eEventSocketT h m(Maybe(SessionState h m))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:getSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the UUID of the main session.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "getUUID",
          "package": "EventSocket",
          "signature": "EventSocketT h m ESUUID",
          "source": "src/Network-EventSocket.html#getUUID",
          "type": "function"
        },
        "index": {
          "description": "Get the UUID of the main session",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "getUUID",
          "package": "EventSocket",
          "partial": "UUID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:getUUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "invalidFile",
          "package": "EventSocket",
          "signature": "ByteString",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "invalidFile",
          "package": "EventSocket",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:invalidFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete this filter instead of creating.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "isDelete",
          "package": "EventSocket",
          "signature": "Bool",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "description": "Delete this filter instead of creating",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "isDelete",
          "package": "EventSocket",
          "partial": "Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:isDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet key.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "key",
          "package": "EventSocket",
          "signature": "ByteString",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "description": "Set key",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "key",
          "package": "EventSocket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "listenKey",
          "package": "EventSocket",
          "signature": "Char",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "listenKey",
          "package": "EventSocket",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:listenKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "listenTo",
          "package": "EventSocket",
          "signature": "Char",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "listenTo",
          "package": "EventSocket",
          "partial": "To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:listenTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "maxDigits",
          "package": "EventSocket",
          "signature": "Int",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "maxDigits",
          "package": "EventSocket",
          "partial": "Digits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:maxDigits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "maxLength",
          "package": "EventSocket",
          "signature": "Int",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "maxLength",
          "package": "EventSocket",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:maxLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "minDigits",
          "package": "EventSocket",
          "signature": "Int",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "minDigits",
          "package": "EventSocket",
          "partial": "Digits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:minDigits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies the debug level. At high values, the event socket library will spit out massive amounts of data to the console.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "modifyDebugLevel",
          "package": "EventSocket",
          "signature": "(Int -\u003e Int) -\u003e EventSocketT h m Int",
          "source": "src/Network-EventSocket.html#modifyDebugLevel",
          "type": "function"
        },
        "index": {
          "description": "Modifies the debug level At high values the event socket library will spit out massive amounts of data to the console",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "modifyDebugLevel",
          "normalized": "(Int-\u003eInt)-\u003eEventSocketT a b Int",
          "package": "EventSocket",
          "partial": "Debug Level",
          "signature": "(Int-\u003eInt)-\u003eEventSocketT h m Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:modifyDebugLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSyncMode controls whether \u003ca\u003eEvent-Lock: true\u003c/a\u003e is sent with commands.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "modifySyncMode",
          "package": "EventSocket",
          "signature": "(Bool -\u003e Bool) -\u003e EventSocketT h m Bool",
          "source": "src/Network-EventSocket.html#modifySyncMode",
          "type": "function"
        },
        "index": {
          "description": "SyncMode controls whether Event-Lock true is sent with commands",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "modifySyncMode",
          "normalized": "(Bool-\u003eBool)-\u003eEventSocketT a b Bool",
          "package": "EventSocket",
          "partial": "Sync Mode",
          "signature": "(Bool-\u003eBool)-\u003eEventSocketT h m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:modifySyncMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new EventSocketState. You may use your own handle type and functions for reading and writing data to it.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "newEventSocketState",
          "package": "EventSocket",
          "signature": "h-\u003e HostName-\u003e PortNumber-\u003e EventSocketState h m",
          "type": "function"
        },
        "index": {
          "description": "Creates new EventSocketState You may use your own handle type and functions for reading and writing data to it",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "newEventSocketState",
          "normalized": "a-\u003eHostName-\u003ePortNumber-\u003eEventSocketState a b",
          "package": "EventSocket",
          "partial": "Event Socket State",
          "signature": "h-\u003eHostName-\u003ePortNumber-\u003eEventSocketState h m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:newEventSocketState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReason for hangup: \u003ca\u003ehttp://wiki.freeswitch.org/wiki/Hangup_causes\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "reason",
          "package": "EventSocket",
          "signature": "ByteString",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "description": "Reason for hangup http wiki.freeswitch.org wiki Hangup causes",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "reason",
          "package": "EventSocket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:reason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "regexp",
          "package": "EventSocket",
          "signature": "ByteString",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "regexp",
          "package": "EventSocket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:regexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegisters an event handler. If the UUID is left blank, it will trigger globally on all events of the appropriate type.\n\u003c/p\u003e\u003cp\u003eSome event types (example E_CommandReply, E_APIResponse) do not have a UUID and therefore must be added as an global event if you wish to catch it.\n\u003c/p\u003e\u003cp\u003eSince the event may return a new handler function on each invocation, an event handler may maintain private state this way.\n\u003c/p\u003e\u003cp\u003eThe event handler may return EHContinue to continue processing, EHStopEvents to stop processing events for that message or\n   EHStopReading to exit the event reading loop entirely.\n\u003c/p\u003e\u003cp\u003eEvent handlers are only called from within \u003ccode\u003e\u003ca\u003eeventSocketReadEventsUntil\u003c/a\u003e\u003c/code\u003e (and functions that use this: \u003ccode\u003e\u003ca\u003ewaitForEvent\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecommandAndReply\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eapiAndReply\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eGlobal events are processed first, then session events.\n\u003c/p\u003e\u003cp\u003eYou may not recurse into \u003ccode\u003eeventSocketReadEventUntil\u003c/code\u003e from within an event handler.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "registerEventHandler",
          "package": "EventSocket",
          "signature": "ByteString-\u003e EventType-\u003e Int-\u003e EventHandlerFunc h m-\u003e EventSocketT h m EventId",
          "type": "function"
        },
        "index": {
          "description": "Registers an event handler If the UUID is left blank it will trigger globally on all events of the appropriate type Some event types example CommandReply APIResponse do not have UUID and therefore must be added as an global event if you wish to catch it Since the event may return new handler function on each invocation an event handler may maintain private state this way The event handler may return EHContinue to continue processing EHStopEvents to stop processing events for that message or EHStopReading to exit the event reading loop entirely Event handlers are only called from within eventSocketReadEventsUntil and functions that use this waitForEvent commandAndReply apiAndReply Global events are processed first then session events You may not recurse into eventSocketReadEventUntil from within an event handler",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "registerEventHandler",
          "normalized": "ByteString-\u003eEventType-\u003eInt-\u003eEventHandlerFunc a b-\u003eEventSocketT a b EventId",
          "package": "EventSocket",
          "partial": "Event Handler",
          "signature": "ByteString-\u003eEventType-\u003eInt-\u003eEventHandlerFunc h m-\u003eEventSocketT h m EventId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:registerEventHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "respondOn",
          "package": "EventSocket",
          "signature": "Char",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "respondOn",
          "package": "EventSocket",
          "partial": "On",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:respondOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the event socket monad transformer.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "runEventSocketT",
          "package": "EventSocket",
          "signature": "EventSocketT h m a-\u003e EventSocketState h m-\u003e m (Either EventSocketError a, EventSocketState h m)",
          "type": "function"
        },
        "index": {
          "description": "Runs the event socket monad transformer",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "runEventSocketT",
          "normalized": "EventSocketT a b c-\u003eEventSocketState a b-\u003eb(Either EventSocketError c,EventSocketState a b)",
          "package": "EventSocket",
          "partial": "Event Socket",
          "signature": "EventSocketT h m a-\u003eEventSocketState h m-\u003em(Either EventSocketError a,EventSocketState h m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:runEventSocketT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a raw command to the event socket.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "sendAPI",
          "package": "EventSocket",
          "signature": "ByteString-\u003e ByteString-\u003e EventSocketT h m ()",
          "type": "function"
        },
        "index": {
          "description": "Sends raw command to the event socket",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "sendAPI",
          "normalized": "ByteString-\u003eByteString-\u003eEventSocketT a b()",
          "package": "EventSocket",
          "partial": "API",
          "signature": "ByteString-\u003eByteString-\u003eEventSocketT h m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:sendAPI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a command to the event socket.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "sendCommand",
          "package": "EventSocket",
          "signature": "ByteString-\u003e ByteString-\u003e EventSocketT h m ()",
          "type": "function"
        },
        "index": {
          "description": "Sends command to the event socket",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "sendCommand",
          "normalized": "ByteString-\u003eByteString-\u003eEventSocketT a b()",
          "package": "EventSocket",
          "partial": "Command",
          "signature": "ByteString-\u003eByteString-\u003eEventSocketT h m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:sendCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarts a listen socket for incoming EventSocket connections. You'll generally want to call \u003ccode\u003e\u003ca\u003econnectInbound\u003c/a\u003e\u003c/code\u003e after the handler is triggered.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "startEventSocket",
          "package": "EventSocket",
          "signature": "HostName-\u003e PortNumber-\u003e (EventSocketState Handle m -\u003e IO ())-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Starts listen socket for incoming EventSocket connections You ll generally want to call connectInbound after the handler is triggered",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "startEventSocket",
          "normalized": "HostName-\u003ePortNumber-\u003e(EventSocketState Handle a-\u003eIO())-\u003eIO()",
          "package": "EventSocket",
          "partial": "Event Socket",
          "signature": "HostName-\u003ePortNumber-\u003e(EventSocketState Handle m-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:startEventSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlays a 0 length tone stream to force a CHANNEL_EXECUTE_COMPLETE event as a synchronization point. Will wait forever if events aren't turned on.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "syncPoint",
          "package": "EventSocket",
          "signature": "EventSocketT h m [EventSocketMessage]",
          "source": "src/Network-EventSocket.html#syncPoint",
          "type": "function"
        },
        "index": {
          "description": "Plays length tone stream to force CHANNEL EXECUTE COMPLETE event as synchronization point Will wait forever if events aren turned on",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "syncPoint",
          "normalized": "EventSocketT a b[EventSocketMessage]",
          "package": "EventSocket",
          "partial": "Point",
          "signature": "EventSocketT h m[EventSocketMessage]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:syncPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "terminators",
          "package": "EventSocket",
          "signature": "ByteString",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "terminators",
          "package": "EventSocket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:terminators"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "text",
          "package": "EventSocket",
          "signature": "ByteString",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "text",
          "package": "EventSocket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "timeout",
          "package": "EventSocket",
          "signature": "Int",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "timeout",
          "package": "EventSocket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:timeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "tries",
          "package": "EventSocket",
          "signature": "Int",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "tries",
          "package": "EventSocket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:tries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an event ID, it will remove that event if it exists.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "unregisterEventHandler",
          "package": "EventSocket",
          "signature": "EventId-\u003e EventSocketT h m ()",
          "type": "function"
        },
        "index": {
          "description": "Given an event ID it will remove that event if it exists",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "unregisterEventHandler",
          "normalized": "EventId-\u003eEventSocketT a b()",
          "package": "EventSocket",
          "partial": "Event Handler",
          "signature": "EventId-\u003eEventSocketT h m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:unregisterEventHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet value.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "val",
          "package": "EventSocket",
          "signature": "ByteString",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "description": "Set value",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "val",
          "package": "EventSocket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.EventSocket",
          "name": "varName",
          "package": "EventSocket",
          "signature": "ByteString",
          "source": "src/Network-EventSocket.html#EventSocketCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "varName",
          "package": "EventSocket",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:varName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWaits forever for the specified event type.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "waitForEvent",
          "package": "EventSocket",
          "signature": "EventType-\u003e EventSocketT h m [EventSocketMessage]",
          "type": "function"
        },
        "index": {
          "description": "Waits forever for the specified event type",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "waitForEvent",
          "normalized": "EventType-\u003eEventSocketT a b[EventSocketMessage]",
          "package": "EventSocket",
          "partial": "For Event",
          "signature": "EventType-\u003eEventSocketT h m[EventSocketMessage]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:waitForEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a monadic action with the specified UUID as the current UUID.\n   Once the action completes, the previous UUID is restored iff it is the same as the original UUID.\n\u003c/p\u003e",
          "module": "Network.EventSocket",
          "name": "withUUID",
          "package": "EventSocket",
          "signature": "ByteString-\u003e EventSocketT h m a-\u003e EventSocketT h m a",
          "type": "function"
        },
        "index": {
          "description": "Run monadic action with the specified UUID as the current UUID Once the action completes the previous UUID is restored iff it is the same as the original UUID",
          "hierarchy": "Network EventSocket",
          "module": "Network.EventSocket",
          "name": "withUUID",
          "normalized": "ByteString-\u003eEventSocketT a b c-\u003eEventSocketT a b c",
          "package": "EventSocket",
          "partial": "UUID",
          "signature": "ByteString-\u003eEventSocketT h m a-\u003eEventSocketT h m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EventSocket/docs/Network-EventSocket.html#v:withUUID"
      }
    }
  ]
]