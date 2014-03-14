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
        "word": "zmidi-core"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvert a MidiFile into \"canonical\" form - i.e. expand \n any use of Running Status and translate Running Status high, \n NoteOn channel velocity 0 events to NoteOff events.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ZMidi.Core.Canonical",
          "name": "Canonical",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Canonical.html",
          "type": "module"
        },
        "index": {
          "description": "Convert MidiFile into canonical form i.e expand any use of Running Status and translate Running Status high NoteOn channel velocity events to NoteOff events",
          "hierarchy": "ZMidi Core Canonical",
          "module": "ZMidi.Core.Canonical",
          "name": "Canonical",
          "package": "zmidi-core",
          "partial": "Canonical",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Canonical.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an MidiFile into \"canonical\" form where any \n abbreviation introduced by Running Status is expanded.\n\u003c/p\u003e\u003cp\u003eNote - even with Running Status on the syntax tree is almost \n canonical (some expansion takes place in the Parser), so this\n translation is quite simplistic.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Canonical",
          "name": "canonical",
          "package": "zmidi-core",
          "signature": "MidiFile -\u003e MidiFile",
          "source": "src/ZMidi-Core-Canonical.html#canonical",
          "type": "function"
        },
        "index": {
          "description": "Convert an MidiFile into canonical form where any abbreviation introduced by Running Status is expanded Note even with Running Status on the syntax tree is almost canonical some expansion takes place in the Parser so this translation is quite simplistic",
          "hierarchy": "ZMidi Core Canonical",
          "module": "ZMidi.Core.Canonical",
          "name": "canonical",
          "normalized": "MidiFile-\u003eMidiFile",
          "package": "zmidi-core",
          "signature": "MidiFile-\u003eMidiFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Canonical.html#v:canonical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConcrete syntax tree for MIDI files.\n\u003c/p\u003e\u003cp\u003eValues are sometimes not interpreted. This means that the\n the data types do not fully represent the sematics of MIDI \n events, but all the data is either stored within the data type \n or synthesizeable. Hence, \u003ccode\u003e readFile \u003e\u003e= writeFile \u003c/code\u003e will \n produce an identical binary [1]. \n\u003c/p\u003e\u003cp\u003e[1] Or it should, failure indicates a bug...\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "Datatypes",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Datatypes.html",
          "type": "module"
        },
        "index": {
          "description": "Concrete syntax tree for MIDI files Values are sometimes not interpreted This means that the the data types do not fully represent the sematics of MIDI events but all the data is either stored within the data type or synthesizeable Hence readFile writeFile will produce an identical binary Or it should failure indicates bug",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "Datatypes",
          "package": "zmidi-core",
          "partial": "Datatypes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll time values in a MIDI track are represented as a delta \n from the previous event rather than an absolute time. \n\u003c/p\u003e\u003cp\u003eDeltaTime is a newtype wrapper over Word32, note that in MIDI \n files it is represented as a \u003ccode\u003evarlen\u003c/code\u003e to potentially save \n space that would otherwise require a four byte number. \n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "DeltaTime",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Datatypes.html#DeltaTime",
          "type": "data"
        },
        "index": {
          "description": "All time values in MIDI track are represented as delta from the previous event rather than an absolute time DeltaTime is newtype wrapper over Word32 note that in MIDI files it is represented as varlen to potentially save space that would otherwise require four byte number",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "DeltaTime",
          "package": "zmidi-core",
          "partial": "Delta Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:DeltaTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData events are events with tags from 0x00 to 0x7F. \n\u003c/p\u003e\u003cp\u003eData events have no payload - they are represented only by the\n tag byte.  \n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiDataOther",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Datatypes.html#MidiDataOther",
          "type": "newtype"
        },
        "index": {
          "description": "Data events are events with tags from x00 to x7F Data events have no payload they are represented only by the tag byte",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiDataOther",
          "package": "zmidi-core",
          "partial": "Midi Data Other",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiDataOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecognised event types - some types (\u003ccode\u003e\u003ca\u003eMidiEventOther\u003c/a\u003e\u003c/code\u003e and \n \u003ccode\u003eSysEx\u003c/code\u003e) are not interpreted.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiEvent",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Datatypes.html#MidiEvent",
          "type": "data"
        },
        "index": {
          "description": "Recognised event types some types MidiEventOther and SysEx are not interpreted",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiEvent",
          "package": "zmidi-core",
          "partial": "Midi Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMidiFile\u003c/a\u003e\u003c/code\u003e : \u003ccode\u003e header * tracks \u003c/code\u003e\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiFile",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Datatypes.html#MidiFile",
          "type": "data"
        },
        "index": {
          "description": "MidiFile header tracks",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiFile",
          "package": "zmidi-core",
          "partial": "Midi File",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe file format - in a MIDI file this is a big-endian \n word16 with 0,1 or 2 being the only valid values. \n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiFormat",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Datatypes.html#MidiFormat",
          "type": "data"
        },
        "index": {
          "description": "The file format in MIDI file this is big-endian word16 with or being the only valid values",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiFormat",
          "package": "zmidi-core",
          "partial": "Midi Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eHeader\u003c/code\u003e : \u003ccode\u003e format * num_tracks * time_division \u003c/code\u003e \n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eTimeDivision\u003c/code\u003e is often 384 or 480 ticks per beat.\n\u003c/p\u003e\u003cp\u003eThe header is the start of a MIDI file, it is indicated by the \n 4 character marker \u003ccode\u003eMThd\u003c/code\u003e.   \n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiHeader",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Datatypes.html#MidiHeader",
          "type": "data"
        },
        "index": {
          "description": "Header format num tracks time division TimeDivision is often or ticks per beat The header is the start of MIDI file it is indicated by the character marker MThd",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiHeader",
          "package": "zmidi-core",
          "partial": "Midi Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMIDI messages are pairs of \u003ccode\u003e\u003ca\u003eDeltaTime\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003eEvent\u003c/code\u003e wrapped in \n a newtype. \n\u003c/p\u003e\u003cp\u003eSequential messages with delta time 0 are played \n simultaneously.  \n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiMessage",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Datatypes.html#MidiMessage",
          "type": "type"
        },
        "index": {
          "description": "MIDI messages are pairs of DeltaTime and Event wrapped in newtype Sequential messages with delta time are played simultaneously",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiMessage",
          "package": "zmidi-core",
          "partial": "Midi Message",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMeta event \n\u003c/p\u003e\u003cp\u003eIn Format 1 files general events (e.g. text events) should\n only appear in track 1. Certain events (e.g. end-of-track) \n can appear in any track where necessary. \n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiMetaEvent",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Datatypes.html#MidiMetaEvent",
          "type": "data"
        },
        "index": {
          "description": "Meta event In Format files general events e.g text events should only appear in track Certain events e.g end-of-track can appear in any track where necessary",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiMetaEvent",
          "package": "zmidi-core",
          "partial": "Midi Meta Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiMetaEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRunning Status.\n\u003c/p\u003e\u003cp\u003eMIDI allows a compact representation of voice events where\n consecutive events (same event, same channel) only need to\n include the first event-channel byte - subsequent events \n only send payload until the next event or channel change.\n\u003c/p\u003e\u003cp\u003eIncluding \u003ccode\u003eMidiRunningStatus\u003c/code\u003e in the data representation is \n important for ZMidi as an aim is to allow round-tripping\n of exisiting MIDI files. However it makes MIDI generation\n more complicated (there is more scope to generate bad \n output) - if you are only generating MIDI it is wise to always \n set \u003ccode\u003eMidiRunningStatus\u003c/code\u003e to \u003ccode\u003eRS_OFF\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiRunningStatus",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Datatypes.html#MidiRunningStatus",
          "type": "data"
        },
        "index": {
          "description": "Running Status MIDI allows compact representation of voice events where consecutive events same event same channel only need to include the first event-channel byte subsequent events only send payload until the next event or channel change Including MidiRunningStatus in the data representation is important for ZMidi as an aim is to allow round-tripping of exisiting MIDI files However it makes MIDI generation more complicated there is more scope to generate bad output if you are only generating MIDI it is wise to always set MidiRunningStatus to RS OFF",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiRunningStatus",
          "package": "zmidi-core",
          "partial": "Midi Running Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiRunningStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale type - \u003ccode\u003emajor\u003c/code\u003e or \u003ccode\u003eminor\u003c/code\u003e or \u003ccode\u003eSCALE_OTHER\u003c/code\u003e.  \n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eSCALE_OTHER\u003c/code\u003e represents a parse error.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiScaleType",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Datatypes.html#MidiScaleType",
          "type": "data"
        },
        "index": {
          "description": "Scale type major or minor or SCALE OTHER SCALE OTHER represents parse error",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiScaleType",
          "package": "zmidi-core",
          "partial": "Midi Scale Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiScaleType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSystem common event.\n\u003c/p\u003e\u003cp\u003eCommon information for all channels in a system. \n\u003c/p\u003e\u003cp\u003eThese events may not be pertinent to MIDI files generated on a \n computer (as opposed to MIDI generated by a synthesizer or \n sequencer).\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiSysCommonEvent",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Datatypes.html#MidiSysCommonEvent",
          "type": "data"
        },
        "index": {
          "description": "System common event Common information for all channels in system These events may not be pertinent to MIDI files generated on computer as opposed to MIDI generated by synthesizer or sequencer",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiSysCommonEvent",
          "package": "zmidi-core",
          "partial": "Midi Sys Common Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiSysCommonEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContinuation packet for a (non-standard) multi-part SysEx \n event.\n\u003c/p\u003e\u003cp\u003eApprently this format is use by Casio. \n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiSysExContPacket",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Datatypes.html#MidiSysExContPacket",
          "type": "data"
        },
        "index": {
          "description": "Continuation packet for non-standard multi-part SysEx event Apprently this format is use by Casio",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiSysExContPacket",
          "package": "zmidi-core",
          "partial": "Midi Sys Ex Cont Packet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiSysExContPacket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSysEx - system exclusive event. \n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiSysExEvent",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Datatypes.html#MidiSysExEvent",
          "type": "data"
        },
        "index": {
          "description": "SysEx system exclusive event",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiSysExEvent",
          "package": "zmidi-core",
          "partial": "Midi Sys Ex Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiSysExEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSystem real-time event.\n\u003c/p\u003e\u003cp\u003eThese events may not be pertinent to MIDI files generated on a \n computer (as opposed to MIDI generated by a synthesizer or \n sequencer).\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiSysRealTimeEvent",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Datatypes.html#MidiSysRealTimeEvent",
          "type": "data"
        },
        "index": {
          "description": "System real-time event These events may not be pertinent to MIDI files generated on computer as opposed to MIDI generated by synthesizer or sequencer",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiSysRealTimeEvent",
          "package": "zmidi-core",
          "partial": "Midi Sys Real Time Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiSysRealTimeEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumeration of the text meta event types.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiTextType",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Datatypes.html#MidiTextType",
          "type": "data"
        },
        "index": {
          "description": "Enumeration of the text meta event types",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiTextType",
          "package": "zmidi-core",
          "partial": "Midi Text Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiTextType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault unit of time in the MIDI file.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiTimeDivision",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Datatypes.html#MidiTimeDivision",
          "type": "data"
        },
        "index": {
          "description": "Default unit of time in the MIDI file",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiTimeDivision",
          "package": "zmidi-core",
          "partial": "Midi Time Division",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiTimeDivision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eTrack\u003c/code\u003e : \u003ccode\u003e [message] \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eIn MIDI files, the start of a track is indicated by the 4 \n character marker \u003ccode\u003eMTrk\u003c/code\u003e.  \n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiTrack",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Datatypes.html#MidiTrack",
          "type": "newtype"
        },
        "index": {
          "description": "Track message In MIDI files the start of track is indicated by the character marker MTrk",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiTrack",
          "package": "zmidi-core",
          "partial": "Midi Track",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVoice events control the output of the synthesizer.\n\u003c/p\u003e\u003cp\u003eNote - change in v0.5.0 - the constructors have been reordered\n so the Ord instance matches the order of the \u003cem\u003etag\u003c/em\u003e bytes. Any \n code that relied on sorting MIDI events is likely to need \n reworking.\n\u003c/p\u003e\u003cp\u003eIn serialized MIDI data the top 4 bits of the first byte of the \n Voice Event are a tag, the bottom 4 bits are the channel \n number. ZMidi stores the channel number with a Word8 though \n values should be limited to the range 0-15.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiVoiceEvent",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Datatypes.html#MidiVoiceEvent",
          "type": "data"
        },
        "index": {
          "description": "Voice events control the output of the synthesizer Note change in v0.5.0 the constructors have been reordered so the Ord instance matches the order of the tag bytes Any code that relied on sorting MIDI events is likely to need reworking In serialized MIDI data the top bits of the first byte of the Voice Event are tag the bottom bits are the channel number ZMidi stores the channel number with Word8 though values should be limited to the range",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiVoiceEvent",
          "package": "zmidi-core",
          "partial": "Midi Voice Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiVoiceEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTagByte is an alias to \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "TagByte",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Datatypes.html#TagByte",
          "type": "type"
        },
        "index": {
          "description": "TagByte is an alias to Word8",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "TagByte",
          "package": "zmidi-core",
          "partial": "Tag Byte",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:TagByte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActive sensing\n\u003c/p\u003e\u003cpre\u003e FE\n\u003c/pre\u003e\u003cp\u003eSynchronization pulse...\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "ActiveSensing",
          "package": "zmidi-core",
          "signature": "ActiveSensing",
          "source": "src/ZMidi-Core-Datatypes.html#MidiSysRealTimeEvent",
          "type": "function"
        },
        "index": {
          "description": "Active sensing FE Synchronization pulse",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "ActiveSensing",
          "package": "zmidi-core",
          "partial": "Active Sensing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:ActiveSensing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ZMidi.Core.Datatypes",
          "name": "COPYRIGHT_NOTICE",
          "package": "zmidi-core",
          "signature": "COPYRIGHT_NOTICE",
          "source": "src/ZMidi-Core-Datatypes.html#MidiTextType",
          "type": "function"
        },
        "index": {
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "COPYRIGHT_NOTICE",
          "package": "zmidi-core",
          "partial": "COPYRIGHT NOTICE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:COPYRIGHT_NOTICE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ZMidi.Core.Datatypes",
          "name": "CUE_POINT",
          "package": "zmidi-core",
          "signature": "CUE_POINT",
          "source": "src/ZMidi-Core-Datatypes.html#MidiTextType",
          "type": "function"
        },
        "index": {
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "CUE_POINT",
          "package": "zmidi-core",
          "partial": "CUE POINT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:CUE_POINT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChannel pressure.\n\u003c/p\u003e\u003cpre\u003e D0 to DF (0 to F is channel number) * pressure_value\n\u003c/pre\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "ChanAftertouch",
          "package": "zmidi-core",
          "signature": "ChanAftertouch Word8 Word8",
          "source": "src/ZMidi-Core-Datatypes.html#MidiVoiceEvent",
          "type": "function"
        },
        "index": {
          "description": "Channel pressure D0 to DF to is channel number pressure value",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "ChanAftertouch",
          "package": "zmidi-core",
          "partial": "Chan Aftertouch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:ChanAftertouch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChannel prefix \n\u003c/p\u003e\u003cpre\u003e FF 20 01 * channel\n\u003c/pre\u003e\u003cp\u003eRelay all meta and sys-ex events to the given channel.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "ChannelPrefix",
          "package": "zmidi-core",
          "signature": "ChannelPrefix Word8",
          "source": "src/ZMidi-Core-Datatypes.html#MidiMetaEvent",
          "type": "function"
        },
        "index": {
          "description": "Channel prefix FF channel Relay all meta and sys-ex events to the given channel",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "ChannelPrefix",
          "package": "zmidi-core",
          "partial": "Channel Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:ChannelPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContinue playing a stopped sequence.\n\u003c/p\u003e\u003cpre\u003e FB\n\u003c/pre\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "ContinueSequence",
          "package": "zmidi-core",
          "signature": "ContinueSequence",
          "source": "src/ZMidi-Core-Datatypes.html#MidiSysRealTimeEvent",
          "type": "function"
        },
        "index": {
          "description": "Continue playing stopped sequence FB",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "ContinueSequence",
          "package": "zmidi-core",
          "partial": "Continue Sequence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:ContinueSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a controller.\n\u003c/p\u003e\u003cpre\u003e B0 to BF (0 to F is channel number) * controller_number * value \n\u003c/pre\u003e\u003cp\u003eController change, e.g. by a footswitch.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "Controller",
          "package": "zmidi-core",
          "signature": "Controller Word8 Word8 Word8",
          "source": "src/ZMidi-Core-Datatypes.html#MidiVoiceEvent",
          "type": "function"
        },
        "index": {
          "description": "Set controller B0 to BF to is channel number controller number value Controller change e.g by footswitch",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "Controller",
          "package": "zmidi-core",
          "partial": "Controller",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:Controller"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnd-of-system-exclusive message.\n\u003c/p\u003e\u003cpre\u003e F7\n\u003c/pre\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "EOX",
          "package": "zmidi-core",
          "signature": "EOX",
          "source": "src/ZMidi-Core-Datatypes.html#MidiSysCommonEvent",
          "type": "function"
        },
        "index": {
          "description": "End-of-system-exclusive message F7",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "EOX",
          "package": "zmidi-core",
          "partial": "EOX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:EOX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnd-of-track event. \n\u003c/p\u003e\u003cpre\u003e FF 2F 00\n\u003c/pre\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "EndOfTrack",
          "package": "zmidi-core",
          "signature": "EndOfTrack",
          "source": "src/ZMidi-Core-Datatypes.html#MidiMetaEvent",
          "type": "function"
        },
        "index": {
          "description": "End-of-track event FF",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "EndOfTrack",
          "package": "zmidi-core",
          "partial": "End Of Track",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:EndOfTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrames-per-second.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "FPS",
          "package": "zmidi-core",
          "signature": "FPS Word16",
          "source": "src/ZMidi-Core-Datatypes.html#MidiTimeDivision",
          "type": "function"
        },
        "index": {
          "description": "Frames-per-second",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "FPS",
          "package": "zmidi-core",
          "partial": "FPS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:FPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ZMidi.Core.Datatypes",
          "name": "GENERIC_TEXT",
          "package": "zmidi-core",
          "signature": "GENERIC_TEXT",
          "source": "src/ZMidi-Core-Datatypes.html#MidiTextType",
          "type": "function"
        },
        "index": {
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "GENERIC_TEXT",
          "package": "zmidi-core",
          "partial": "GENERIC TEXT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:GENERIC_TEXT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ZMidi.Core.Datatypes",
          "name": "INSTRUMENT_NAME",
          "package": "zmidi-core",
          "signature": "INSTRUMENT_NAME",
          "source": "src/ZMidi-Core-Datatypes.html#MidiTextType",
          "type": "function"
        },
        "index": {
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "INSTRUMENT_NAME",
          "package": "zmidi-core",
          "partial": "INSTRUMENT NAME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:INSTRUMENT_NAME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKey signature \n\u003c/p\u003e\u003cpre\u003e FF 59 02 * key_type * scale_type\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003ekey_type\u003c/code\u003e is the number of sharps (postive numbers) or \n flats (negative numbers), e.g. (-1) is 1 flat.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003escale_type\u003c/code\u003e indicates major or minor.  \n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "KeySignature",
          "package": "zmidi-core",
          "signature": "KeySignature Int8 MidiScaleType",
          "source": "src/ZMidi-Core-Datatypes.html#MidiMetaEvent",
          "type": "function"
        },
        "index": {
          "description": "Key signature FF key type scale type key type is the number of sharps postive numbers or flats negative numbers e.g is flat scale type indicates major or minor",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "KeySignature",
          "package": "zmidi-core",
          "partial": "Key Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:KeySignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ZMidi.Core.Datatypes",
          "name": "LYRICS",
          "package": "zmidi-core",
          "signature": "LYRICS",
          "source": "src/ZMidi-Core-Datatypes.html#MidiTextType",
          "type": "function"
        },
        "index": {
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "LYRICS",
          "package": "zmidi-core",
          "partial": "LYRICS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:LYRICS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ZMidi.Core.Datatypes",
          "name": "MAJOR",
          "package": "zmidi-core",
          "signature": "MAJOR",
          "source": "src/ZMidi-Core-Datatypes.html#MidiScaleType",
          "type": "function"
        },
        "index": {
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MAJOR",
          "package": "zmidi-core",
          "partial": "MAJOR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MAJOR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ZMidi.Core.Datatypes",
          "name": "MARKER",
          "package": "zmidi-core",
          "signature": "MARKER",
          "source": "src/ZMidi-Core-Datatypes.html#MidiTextType",
          "type": "function"
        },
        "index": {
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MARKER",
          "package": "zmidi-core",
          "partial": "MARKER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MARKER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat 0 file - single multi-channel track.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "MF0",
          "package": "zmidi-core",
          "signature": "MF0",
          "source": "src/ZMidi-Core-Datatypes.html#MidiFormat",
          "type": "function"
        },
        "index": {
          "description": "Format file single multi-channel track",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MF0",
          "package": "zmidi-core",
          "partial": "MF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MF0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat 1 file - 1 or more tracks, played simultaneously.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "MF1",
          "package": "zmidi-core",
          "signature": "MF1",
          "source": "src/ZMidi-Core-Datatypes.html#MidiFormat",
          "type": "function"
        },
        "index": {
          "description": "Format file or more tracks played simultaneously",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MF1",
          "package": "zmidi-core",
          "partial": "MF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MF1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat 2 file - 1 or more independent tracks.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "MF2",
          "package": "zmidi-core",
          "signature": "MF2",
          "source": "src/ZMidi-Core-Datatypes.html#MidiFormat",
          "type": "function"
        },
        "index": {
          "description": "Format file or more independent tracks",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MF2",
          "package": "zmidi-core",
          "partial": "MF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MF2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ZMidi.Core.Datatypes",
          "name": "MINOR",
          "package": "zmidi-core",
          "signature": "MINOR",
          "source": "src/ZMidi-Core-Datatypes.html#MidiScaleType",
          "type": "function"
        },
        "index": {
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MINOR",
          "package": "zmidi-core",
          "partial": "MINOR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MINOR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMeta event - interpreted (e.g. \u003ccode\u003eend-of-track\u003c/code\u003e, \n \u003ccode\u003eset-tempo\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "MetaEvent",
          "package": "zmidi-core",
          "signature": "MetaEvent MidiMetaEvent",
          "source": "src/ZMidi-Core-Datatypes.html#MidiEvent",
          "type": "function"
        },
        "index": {
          "description": "Meta event interpreted e.g end-of-track set-tempo",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MetaEvent",
          "package": "zmidi-core",
          "partial": "Meta Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MetaEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnrecognized Meta Event\n\u003c/p\u003e\u003cpre\u003e FF * type * length * data \n\u003c/pre\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "MetaOther",
          "package": "zmidi-core",
          "signature": "MetaOther Word8 Word32 [Word8]",
          "source": "src/ZMidi-Core-Datatypes.html#MidiMetaEvent",
          "type": "function"
        },
        "index": {
          "description": "Unrecognized Meta Event FF type length data",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MetaOther",
          "normalized": "MetaOther Word Word[Word]",
          "package": "zmidi-core",
          "partial": "Meta Other",
          "signature": "MetaOther Word Word[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MetaOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiDataOther",
          "package": "zmidi-core",
          "signature": "MidiDataOther",
          "source": "src/ZMidi-Core-Datatypes.html#MidiDataOther",
          "type": "function"
        },
        "index": {
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiDataOther",
          "package": "zmidi-core",
          "partial": "Midi Data Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MidiDataOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unrecognized event. This event is not expected in \n well formed MIDI, but the parser may insert it - if it \n encounters ill-formed data.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiEventOther",
          "package": "zmidi-core",
          "signature": "MidiEventOther MidiDataOther",
          "source": "src/ZMidi-Core-Datatypes.html#MidiEvent",
          "type": "function"
        },
        "index": {
          "description": "An unrecognized event This event is not expected in well formed MIDI but the parser may insert it if it encounters ill-formed data",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiEventOther",
          "package": "zmidi-core",
          "partial": "Midi Event Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MidiEventOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiFile",
          "package": "zmidi-core",
          "signature": "MidiFile",
          "source": "src/ZMidi-Core-Datatypes.html#MidiFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiFile",
          "package": "zmidi-core",
          "partial": "Midi File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MidiFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiHeader",
          "package": "zmidi-core",
          "signature": "MidiHeader",
          "source": "src/ZMidi-Core-Datatypes.html#MidiHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiHeader",
          "package": "zmidi-core",
          "partial": "Midi Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MidiHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMidi port\n\u003c/p\u003e\u003cpre\u003e FF 21 01 * port\n\u003c/pre\u003e\u003cp\u003eMidi port number - used to workaround 16 channel limit...\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiPort",
          "package": "zmidi-core",
          "signature": "MidiPort Word8",
          "source": "src/ZMidi-Core-Datatypes.html#MidiMetaEvent",
          "type": "function"
        },
        "index": {
          "description": "Midi port FF port Midi port number used to workaround channel limit",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiPort",
          "package": "zmidi-core",
          "partial": "Midi Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MidiPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiSysExContPacket",
          "package": "zmidi-core",
          "signature": "MidiSysExContPacket DeltaTime Word32 [Word8]",
          "source": "src/ZMidi-Core-Datatypes.html#MidiSysExContPacket",
          "type": "function"
        },
        "index": {
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiSysExContPacket",
          "normalized": "MidiSysExContPacket DeltaTime Word[Word]",
          "package": "zmidi-core",
          "partial": "Midi Sys Ex Cont Packet",
          "signature": "MidiSysExContPacket DeltaTime Word[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MidiSysExContPacket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiTrack",
          "package": "zmidi-core",
          "signature": "MidiTrack",
          "source": "src/ZMidi-Core-Datatypes.html#MidiTrack",
          "type": "function"
        },
        "index": {
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "MidiTrack",
          "package": "zmidi-core",
          "partial": "Midi Track",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MidiTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolyphonic key pressure.\n\u003c/p\u003e\u003cpre\u003e A0 to AF (0 to F is channel number) * note * pressure_value\n\u003c/pre\u003e\u003cp\u003eChange of pressure applied to the synthesizer key. \n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "NoteAftertouch",
          "package": "zmidi-core",
          "signature": "NoteAftertouch Word8 Word8 Word8",
          "source": "src/ZMidi-Core-Datatypes.html#MidiVoiceEvent",
          "type": "function"
        },
        "index": {
          "description": "Polyphonic key pressure A0 to AF to is channel number note pressure value Change of pressure applied to the synthesizer key",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "NoteAftertouch",
          "package": "zmidi-core",
          "partial": "Note Aftertouch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:NoteAftertouch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote off.\n\u003c/p\u003e\u003cpre\u003e 80 to 8F (0 to F is channel number) * note * velocity\n\u003c/pre\u003e\u003cp\u003eTurn off a sounding note.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "NoteOff",
          "package": "zmidi-core",
          "signature": "NoteOff Word8 Word8 Word8",
          "source": "src/ZMidi-Core-Datatypes.html#MidiVoiceEvent",
          "type": "function"
        },
        "index": {
          "description": "Note off to to is channel number note velocity Turn off sounding note",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "NoteOff",
          "package": "zmidi-core",
          "partial": "Note Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:NoteOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote on.\n\u003c/p\u003e\u003cpre\u003e 90 to 9F (0 to F is channel number) * note * velocity\n\u003c/pre\u003e\u003cp\u003eStart playing a note.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "NoteOn",
          "package": "zmidi-core",
          "signature": "NoteOn Word8 Word8 Word8",
          "source": "src/ZMidi-Core-Datatypes.html#MidiVoiceEvent",
          "type": "function"
        },
        "index": {
          "description": "Note on to to is channel number note velocity Start playing note",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "NoteOn",
          "package": "zmidi-core",
          "partial": "Note On",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:NoteOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePitch bend \n\u003c/p\u003e\u003cpre\u003e E0 to EF (0 to F is channel number) * value\n\u003c/pre\u003e\u003cp\u003eChange the pitch of a sounding note. Often used to \n approximate microtonal tunings.\n\u003c/p\u003e\u003cp\u003eNOTE - currently value is uninterpreted.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "PitchBend",
          "package": "zmidi-core",
          "signature": "PitchBend Word8 Word16",
          "source": "src/ZMidi-Core-Datatypes.html#MidiVoiceEvent",
          "type": "function"
        },
        "index": {
          "description": "Pitch bend E0 to EF to is channel number value Change the pitch of sounding note Often used to approximate microtonal tunings NOTE currently value is uninterpreted",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "PitchBend",
          "package": "zmidi-core",
          "partial": "Pitch Bend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:PitchBend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the program.\n\u003c/p\u003e\u003cpre\u003e C0 to CF (0 to F is channel number) * program_number \n\u003c/pre\u003e\u003cp\u003eChange the instrument \n playing on the specified channel. For playback on \n computers (rather than synthesizers) the program numbers\n will correspond to the \u003cem\u003eGeneral MIDI\u003c/em\u003e instrument numbers.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "ProgramChange",
          "package": "zmidi-core",
          "signature": "ProgramChange Word8 Word8",
          "source": "src/ZMidi-Core-Datatypes.html#MidiVoiceEvent",
          "type": "function"
        },
        "index": {
          "description": "Set the program C0 to CF to is channel number program number Change the instrument playing on the specified channel For playback on computers rather than synthesizers the program numbers will correspond to the General MIDI instrument numbers",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "ProgramChange",
          "package": "zmidi-core",
          "partial": "Program Change",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:ProgramChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime code quarter frame.\n\u003c/p\u003e\u003cpre\u003e F1 * payload\n\u003c/pre\u003e\u003cp\u003eNote the payload is really a byte split into two 4-bit \n values, however here it is uninterpreted.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "QuarterFrame",
          "package": "zmidi-core",
          "signature": "QuarterFrame Word8",
          "source": "src/ZMidi-Core-Datatypes.html#MidiSysCommonEvent",
          "type": "function"
        },
        "index": {
          "description": "Time code quarter frame F1 payload Note the payload is really byte split into two bit values however here it is uninterpreted",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "QuarterFrame",
          "package": "zmidi-core",
          "partial": "Quarter Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:QuarterFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ZMidi.Core.Datatypes",
          "name": "RS_OFF",
          "package": "zmidi-core",
          "signature": "RS_OFF",
          "source": "src/ZMidi-Core-Datatypes.html#MidiRunningStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "RS_OFF",
          "package": "zmidi-core",
          "partial": "RS OFF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:RS_OFF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ZMidi.Core.Datatypes",
          "name": "RS_ON",
          "package": "zmidi-core",
          "signature": "RS_ON",
          "source": "src/ZMidi-Core-Datatypes.html#MidiRunningStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "RS_ON",
          "package": "zmidi-core",
          "partial": "RS ON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:RS_ON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ZMidi.Core.Datatypes",
          "name": "SCALE_OTHER",
          "package": "zmidi-core",
          "signature": "SCALE_OTHER Word8",
          "source": "src/ZMidi-Core-Datatypes.html#MidiScaleType",
          "type": "function"
        },
        "index": {
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "SCALE_OTHER",
          "package": "zmidi-core",
          "partial": "SCALE OTHER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SCALE_OTHER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ZMidi.Core.Datatypes",
          "name": "SEQUENCE_NAME",
          "package": "zmidi-core",
          "signature": "SEQUENCE_NAME",
          "source": "src/ZMidi-Core-Datatypes.html#MidiTextType",
          "type": "function"
        },
        "index": {
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "SEQUENCE_NAME",
          "package": "zmidi-core",
          "partial": "SEQUENCE NAME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SEQUENCE_NAME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSMPTE offest\n\u003c/p\u003e\u003cpre\u003e FF 54 05 * hour * minute * second * frac * subfrac\n\u003c/pre\u003e\u003cp\u003eThe SMPTE time when a track should start. This event \n should occur at the start of a track, before any non-zero \n time events.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "SMPTEOffset",
          "package": "zmidi-core",
          "signature": "SMPTEOffset Word8 Word8 Word8 Word8 Word8",
          "source": "src/ZMidi-Core-Datatypes.html#MidiMetaEvent",
          "type": "function"
        },
        "index": {
          "description": "SMPTE offest FF hour minute second frac subfrac The SMPTE time when track should start This event should occur at the start of track before any non-zero time events",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "SMPTEOffset",
          "package": "zmidi-core",
          "partial": "SMPTEOffset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SMPTEOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSSME \n\u003c/p\u003e\u003cpre\u003e FF 7F * length * data\n\u003c/pre\u003e\u003cp\u003eSequencer specific meta-event - uninterpreted.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "SSME",
          "package": "zmidi-core",
          "signature": "SSME Word32 [Word8]",
          "source": "src/ZMidi-Core-Datatypes.html#MidiMetaEvent",
          "type": "function"
        },
        "index": {
          "description": "SSME FF length data Sequencer specific meta-event uninterpreted",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "SSME",
          "normalized": "SSME Word[Word]",
          "package": "zmidi-core",
          "partial": "SSME",
          "signature": "SSME Word[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SSME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence Number \n\u003c/p\u003e\u003cpre\u003e FF 00 02 * value\n\u003c/pre\u003e\u003cp\u003eFormat 1 files - only track 1 should have a sequence \n number. \n\u003c/p\u003e\u003cp\u003eFormat 2 files - a sequence number should identify each \n track.\n\u003c/p\u003e\u003cp\u003eThe sequence number event should occur at the start of a \n track, before any non-zero time events.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "SequenceNumber",
          "package": "zmidi-core",
          "signature": "SequenceNumber Word16",
          "source": "src/ZMidi-Core-Datatypes.html#MidiMetaEvent",
          "type": "function"
        },
        "index": {
          "description": "Sequence Number FF value Format files only track should have sequence number Format files sequence number should identify each track The sequence number event should occur at the start of track before any non-zero time events",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "SequenceNumber",
          "package": "zmidi-core",
          "partial": "Sequence Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SequenceNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet tempo\n\u003c/p\u003e\u003cpre\u003e FF 51 03 * microseconds_per_quarter_note\n\u003c/pre\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "SetTempo",
          "package": "zmidi-core",
          "signature": "SetTempo Word32",
          "source": "src/ZMidi-Core-Datatypes.html#MidiMetaEvent",
          "type": "function"
        },
        "index": {
          "description": "Set tempo FF microseconds per quarter note",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "SetTempo",
          "package": "zmidi-core",
          "partial": "Set Tempo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SetTempo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSong position pointer.\n\u003c/p\u003e\u003cpre\u003e F2 * lsb * msb\n\u003c/pre\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "SongPosPointer",
          "package": "zmidi-core",
          "signature": "SongPosPointer Word8 Word8",
          "source": "src/ZMidi-Core-Datatypes.html#MidiSysCommonEvent",
          "type": "function"
        },
        "index": {
          "description": "Song position pointer F2 lsb msb",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "SongPosPointer",
          "package": "zmidi-core",
          "partial": "Song Pos Pointer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SongPosPointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSong number.\n\u003c/p\u003e\u003cpre\u003e F3 * song_number\n\u003c/pre\u003e\u003cp\u003eSong number should be in the range 0..127.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "SongSelect",
          "package": "zmidi-core",
          "signature": "SongSelect Word8",
          "source": "src/ZMidi-Core-Datatypes.html#MidiSysCommonEvent",
          "type": "function"
        },
        "index": {
          "description": "Song number F3 song number Song number should be in the range",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "SongSelect",
          "package": "zmidi-core",
          "partial": "Song Select",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SongSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart playing a sequence.\n\u003c/p\u003e\u003cpre\u003e FA\n\u003c/pre\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "StartSequence",
          "package": "zmidi-core",
          "signature": "StartSequence",
          "source": "src/ZMidi-Core-Datatypes.html#MidiSysRealTimeEvent",
          "type": "function"
        },
        "index": {
          "description": "Start playing sequence FA",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "StartSequence",
          "package": "zmidi-core",
          "partial": "Start Sequence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:StartSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop playing a sequence.\n\u003c/p\u003e\u003cpre\u003e FC\n\u003c/pre\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "StopSequence",
          "package": "zmidi-core",
          "signature": "StopSequence",
          "source": "src/ZMidi-Core-Datatypes.html#MidiSysRealTimeEvent",
          "type": "function"
        },
        "index": {
          "description": "Stop playing sequence FC",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "StopSequence",
          "package": "zmidi-core",
          "partial": "Stop Sequence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:StopSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSysCommon - system common event.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "SysCommonEvent",
          "package": "zmidi-core",
          "signature": "SysCommonEvent MidiSysCommonEvent",
          "source": "src/ZMidi-Core-Datatypes.html#MidiEvent",
          "type": "function"
        },
        "index": {
          "description": "SysCommon system common event",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "SysCommonEvent",
          "package": "zmidi-core",
          "partial": "Sys Common Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SysCommonEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSysEx sent as (non-standard) multiple continuation \n packets.\n\u003c/p\u003e\u003cpre\u003e F0 * length * packet1 ... [SysExContPacket]\n\u003c/pre\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "SysExCont",
          "package": "zmidi-core",
          "signature": "SysExCont Word32 [Word8] [MidiSysExContPacket]",
          "source": "src/ZMidi-Core-Datatypes.html#MidiSysExEvent",
          "type": "function"
        },
        "index": {
          "description": "SysEx sent as non-standard multiple continuation packets F0 length packet1 SysExContPacket",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "SysExCont",
          "normalized": "SysExCont Word[Word][MidiSysExContPacket]",
          "package": "zmidi-core",
          "partial": "Sys Ex Cont",
          "signature": "SysExCont Word[Word][MidiSysExContPacket]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SysExCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscape sequence of one-or-more SysEx events.\n\u003c/p\u003e\u003cpre\u003e F7 * length * data\n\u003c/pre\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "SysExEscape",
          "package": "zmidi-core",
          "signature": "SysExEscape Word32 [Word8]",
          "source": "src/ZMidi-Core-Datatypes.html#MidiSysExEvent",
          "type": "function"
        },
        "index": {
          "description": "Escape sequence of one-or-more SysEx events F7 length data",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "SysExEscape",
          "normalized": "SysExEscape Word[Word]",
          "package": "zmidi-core",
          "partial": "Sys Ex Escape",
          "signature": "SysExEscape Word[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SysExEscape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSysEx - system exclusive event. Usually synthesizer \n specific, not interpreted.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "SysExEvent",
          "package": "zmidi-core",
          "signature": "SysExEvent MidiSysExEvent",
          "source": "src/ZMidi-Core-Datatypes.html#MidiEvent",
          "type": "function"
        },
        "index": {
          "description": "SysEx system exclusive event Usually synthesizer specific not interpreted",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "SysExEvent",
          "package": "zmidi-core",
          "partial": "Sys Ex Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SysExEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle SysEx event.\n\u003c/p\u003e\u003cpre\u003e F0 * length * data\n\u003c/pre\u003e\u003cp\u003eAn uninterpreted sys-ex event.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "SysExSingle",
          "package": "zmidi-core",
          "signature": "SysExSingle Word32 [Word8]",
          "source": "src/ZMidi-Core-Datatypes.html#MidiSysExEvent",
          "type": "function"
        },
        "index": {
          "description": "Single SysEx event F0 length data An uninterpreted sys-ex event",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "SysExSingle",
          "normalized": "SysExSingle Word[Word]",
          "package": "zmidi-core",
          "partial": "Sys Ex Single",
          "signature": "SysExSingle Word[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SysExSingle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSysRealTime - system realtime event.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "SysRealTimeEvent",
          "package": "zmidi-core",
          "signature": "SysRealTimeEvent MidiSysRealTimeEvent",
          "source": "src/ZMidi-Core-Datatypes.html#MidiEvent",
          "type": "function"
        },
        "index": {
          "description": "SysRealTime system realtime event",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "SysRealTimeEvent",
          "package": "zmidi-core",
          "partial": "Sys Real Time Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SysRealTimeEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReset to power-up status.\n\u003c/p\u003e\u003cpre\u003e FF\n\u003c/pre\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "SystemReset",
          "package": "zmidi-core",
          "signature": "SystemReset",
          "source": "src/ZMidi-Core-Datatypes.html#MidiSysRealTimeEvent",
          "type": "function"
        },
        "index": {
          "description": "Reset to power-up status FF",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "SystemReset",
          "package": "zmidi-core",
          "partial": "System Reset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SystemReset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTicks-per-beat, i.e. the number of units for a quarter \n note.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "TPB",
          "package": "zmidi-core",
          "signature": "TPB Word16",
          "source": "src/ZMidi-Core-Datatypes.html#MidiTimeDivision",
          "type": "function"
        },
        "index": {
          "description": "Ticks-per-beat i.e the number of units for quarter note",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "TPB",
          "package": "zmidi-core",
          "partial": "TPB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:TPB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText / copywright etc.\n\u003c/p\u003e\u003cpre\u003e FF * text_type * contents\n\u003c/pre\u003e\u003cp\u003eFree text field (e.g. copyright statement). The contents \n can notionally be any length.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "TextEvent",
          "package": "zmidi-core",
          "signature": "TextEvent MidiTextType String",
          "source": "src/ZMidi-Core-Datatypes.html#MidiMetaEvent",
          "type": "function"
        },
        "index": {
          "description": "Text copywright etc FF text type contents Free text field e.g copyright statement The contents can notionally be any length",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "TextEvent",
          "package": "zmidi-core",
          "partial": "Text Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:TextEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime signature \n\u003c/p\u003e\u003cpre\u003e FF 58 04 * numerator * denominator * metro * num_32nd_notes\n\u003c/pre\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "TimeSignature",
          "package": "zmidi-core",
          "signature": "TimeSignature Word8 Word8 Word8 Word8",
          "source": "src/ZMidi-Core-Datatypes.html#MidiMetaEvent",
          "type": "function"
        },
        "index": {
          "description": "Time signature FF numerator denominator metro num nd notes",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "TimeSignature",
          "package": "zmidi-core",
          "partial": "Time Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:TimeSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTiming signal.\n\u003c/p\u003e\u003cpre\u003e F8 \n\u003c/pre\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "TimingClock",
          "package": "zmidi-core",
          "signature": "TimingClock",
          "source": "src/ZMidi-Core-Datatypes.html#MidiSysRealTimeEvent",
          "type": "function"
        },
        "index": {
          "description": "Timing signal F8",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "TimingClock",
          "package": "zmidi-core",
          "partial": "Timing Clock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:TimingClock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTune request.\n\u003c/p\u003e\u003cpre\u003e F6\n\u003c/pre\u003e\u003cp\u003eTune request message for analogue synthesizers.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "TuneRequest",
          "package": "zmidi-core",
          "signature": "TuneRequest",
          "source": "src/ZMidi-Core-Datatypes.html#MidiSysCommonEvent",
          "type": "function"
        },
        "index": {
          "description": "Tune request F6 Tune request message for analogue synthesizers",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "TuneRequest",
          "package": "zmidi-core",
          "partial": "Tune Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:TuneRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUndefined system common event.\n\u003c/p\u003e\u003cpre\u003e F4\n\u003c/pre\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "UndefinedF4",
          "package": "zmidi-core",
          "signature": "UndefinedF4",
          "source": "src/ZMidi-Core-Datatypes.html#MidiSysCommonEvent",
          "type": "function"
        },
        "index": {
          "description": "Undefined system common event F4",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "UndefinedF4",
          "package": "zmidi-core",
          "partial": "Undefined",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:UndefinedF4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUndefined system common event.\n\u003c/p\u003e\u003cpre\u003e F5\n\u003c/pre\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "UndefinedF5",
          "package": "zmidi-core",
          "signature": "UndefinedF5",
          "source": "src/ZMidi-Core-Datatypes.html#MidiSysCommonEvent",
          "type": "function"
        },
        "index": {
          "description": "Undefined system common event F5",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "UndefinedF5",
          "package": "zmidi-core",
          "partial": "Undefined",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:UndefinedF5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUndefined real time event.\n\u003c/p\u003e\u003cpre\u003e F9\n\u003c/pre\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "UndefinedF9",
          "package": "zmidi-core",
          "signature": "UndefinedF9",
          "source": "src/ZMidi-Core-Datatypes.html#MidiSysRealTimeEvent",
          "type": "function"
        },
        "index": {
          "description": "Undefined real time event F9",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "UndefinedF9",
          "package": "zmidi-core",
          "partial": "Undefined",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:UndefinedF9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUndefined real time event.\n\u003c/p\u003e\u003cpre\u003e FD\n\u003c/pre\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "UndefinedFD",
          "package": "zmidi-core",
          "signature": "UndefinedFD",
          "source": "src/ZMidi-Core-Datatypes.html#MidiSysRealTimeEvent",
          "type": "function"
        },
        "index": {
          "description": "Undefined real time event FD",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "UndefinedFD",
          "package": "zmidi-core",
          "partial": "Undefined FD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:UndefinedFD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVoice event (e.g \u003ccode\u003enote-on\u003c/code\u003e, \u003ccode\u003enote-off\u003c/code\u003e) are relayed to \n specific channels. \n\u003c/p\u003e\u003cp\u003eNote - they are tagged with Running Status, this is \n pertinent to parsing MIDI where a input stream may use \n running status to save space. If you are generating MIDI\n use RunningStatus with caution and ensure that consecutive\n events are all of the same sort.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Datatypes",
          "name": "VoiceEvent",
          "package": "zmidi-core",
          "signature": "VoiceEvent MidiRunningStatus MidiVoiceEvent",
          "source": "src/ZMidi-Core-Datatypes.html#MidiEvent",
          "type": "function"
        },
        "index": {
          "description": "Voice event e.g note-on note-off are relayed to specific channels Note they are tagged with Running Status this is pertinent to parsing MIDI where input stream may use running status to save space If you are generating MIDI use RunningStatus with caution and ensure that consecutive events are all of the same sort",
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "VoiceEvent",
          "package": "zmidi-core",
          "partial": "Voice Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:VoiceEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ZMidi.Core.Datatypes",
          "name": "getMidiDataOther",
          "package": "zmidi-core",
          "signature": "TagByte",
          "source": "src/ZMidi-Core-Datatypes.html#MidiDataOther",
          "type": "function"
        },
        "index": {
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "getMidiDataOther",
          "package": "zmidi-core",
          "partial": "Midi Data Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:getMidiDataOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ZMidi.Core.Datatypes",
          "name": "getTrackMessages",
          "package": "zmidi-core",
          "signature": "[MidiMessage]",
          "source": "src/ZMidi-Core-Datatypes.html#MidiTrack",
          "type": "function"
        },
        "index": {
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "getTrackMessages",
          "normalized": "[MidiMessage]",
          "package": "zmidi-core",
          "partial": "Track Messages",
          "signature": "[MidiMessage]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:getTrackMessages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ZMidi.Core.Datatypes",
          "name": "hdr_format",
          "package": "zmidi-core",
          "signature": "MidiFormat",
          "source": "src/ZMidi-Core-Datatypes.html#MidiHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "hdr_format",
          "package": "zmidi-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:hdr_format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ZMidi.Core.Datatypes",
          "name": "mf_header",
          "package": "zmidi-core",
          "signature": "MidiHeader",
          "source": "src/ZMidi-Core-Datatypes.html#MidiFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "mf_header",
          "package": "zmidi-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:mf_header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ZMidi.Core.Datatypes",
          "name": "mf_tracks",
          "package": "zmidi-core",
          "signature": "[MidiTrack]",
          "source": "src/ZMidi-Core-Datatypes.html#MidiFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "mf_tracks",
          "normalized": "[MidiTrack]",
          "package": "zmidi-core",
          "signature": "[MidiTrack]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:mf_tracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ZMidi.Core.Datatypes",
          "name": "num_tracks",
          "package": "zmidi-core",
          "signature": "Word16",
          "source": "src/ZMidi-Core-Datatypes.html#MidiHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "num_tracks",
          "package": "zmidi-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:num_tracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ZMidi.Core.Datatypes",
          "name": "time_division",
          "package": "zmidi-core",
          "signature": "MidiTimeDivision",
          "source": "src/ZMidi-Core-Datatypes.html#MidiHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "ZMidi Core Datatypes",
          "module": "ZMidi.Core.Datatypes",
          "name": "time_division",
          "package": "zmidi-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:time_division"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty print MIDI in format based on the \u003cem\u003eASCII format\u003c/em\u003e\n in the book \u003cem\u003eBeyond MIDI\u003c/em\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ZMidi.Core.Pretty.Ascii",
          "name": "Ascii",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Pretty-Ascii.html",
          "type": "module"
        },
        "index": {
          "description": "Pretty print MIDI in format based on the ASCII format in the book Beyond MIDI",
          "hierarchy": "ZMidi Core Pretty Ascii",
          "module": "ZMidi.Core.Pretty.Ascii",
          "name": "Ascii",
          "package": "zmidi-core",
          "partial": "Ascii",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Ascii.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint the MIDI file to a list of Strings (ASCII format based\n on output in the book Beyond MIDI).\n\u003c/p\u003e\u003cp\u003eResults are returned as a list of String to avoid extraneous\n concatenation.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Pretty.Ascii",
          "name": "printAscii",
          "package": "zmidi-core",
          "signature": "MidiFile -\u003e [String]",
          "source": "src/ZMidi-Core-Pretty-Ascii.html#printAscii",
          "type": "function"
        },
        "index": {
          "description": "Print the MIDI file to list of Strings ASCII format based on output in the book Beyond MIDI Results are returned as list of String to avoid extraneous concatenation",
          "hierarchy": "ZMidi Core Pretty Ascii",
          "module": "ZMidi.Core.Pretty.Ascii",
          "name": "printAscii",
          "normalized": "MidiFile-\u003e[String]",
          "package": "zmidi-core",
          "partial": "Ascii",
          "signature": "MidiFile-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Ascii.html#v:printAscii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint the MIDI file to stdout (ASCII format based on \n output in the book Beyond MIDI).\n\u003c/p\u003e\u003cp\u003eOne event is printed per line, so the output may be large.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Pretty.Ascii",
          "name": "putAscii",
          "package": "zmidi-core",
          "signature": "MidiFile -\u003e IO ()",
          "source": "src/ZMidi-Core-Pretty-Ascii.html#putAscii",
          "type": "function"
        },
        "index": {
          "description": "Print the MIDI file to stdout ASCII format based on output in the book Beyond MIDI One event is printed per line so the output may be large",
          "hierarchy": "ZMidi Core Pretty Ascii",
          "module": "ZMidi.Core.Pretty.Ascii",
          "name": "putAscii",
          "normalized": "MidiFile-\u003eIO()",
          "package": "zmidi-core",
          "partial": "Ascii",
          "signature": "MidiFile-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Ascii.html#v:putAscii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty print MIDI to CVS format based on \u003ccode\u003emidicsv\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ZMidi.Core.Pretty.Csv",
          "name": "Csv",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Pretty-Csv.html",
          "type": "module"
        },
        "index": {
          "description": "Pretty print MIDI to CVS format based on midicsv",
          "hierarchy": "ZMidi Core Pretty Csv",
          "module": "ZMidi.Core.Pretty.Csv",
          "name": "Csv",
          "package": "zmidi-core",
          "partial": "Csv",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Csv.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint the MIDI file to a list of Strings (CSV format).\n\u003c/p\u003e\u003cp\u003eResults are returned as a list of String to avoid extraneous\n concatenation.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Pretty.Csv",
          "name": "printCsv",
          "package": "zmidi-core",
          "signature": "MidiFile -\u003e [String]",
          "source": "src/ZMidi-Core-Pretty-Csv.html#printCsv",
          "type": "function"
        },
        "index": {
          "description": "Print the MIDI file to list of Strings CSV format Results are returned as list of String to avoid extraneous concatenation",
          "hierarchy": "ZMidi Core Pretty Csv",
          "module": "ZMidi.Core.Pretty.Csv",
          "name": "printCsv",
          "normalized": "MidiFile-\u003e[String]",
          "package": "zmidi-core",
          "partial": "Csv",
          "signature": "MidiFile-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Csv.html#v:printCsv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint the MIDI file to stdout (CSV format).\n\u003c/p\u003e\u003cp\u003eOne event is printed per line, so the output may be large.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Pretty.Csv",
          "name": "putCsv",
          "package": "zmidi-core",
          "signature": "MidiFile -\u003e IO ()",
          "source": "src/ZMidi-Core-Pretty-Csv.html#putCsv",
          "type": "function"
        },
        "index": {
          "description": "Print the MIDI file to stdout CSV format One event is printed per line so the output may be large",
          "hierarchy": "ZMidi Core Pretty Csv",
          "module": "ZMidi.Core.Pretty.Csv",
          "name": "putCsv",
          "normalized": "MidiFile-\u003eIO()",
          "package": "zmidi-core",
          "partial": "Csv",
          "signature": "MidiFile-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Csv.html#v:putCsv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHelper functions to pretty print MIDI as text.\n\u003c/p\u003e\u003cp\u003eThe functionality is unstable and may change between \n releases however it is still exposed as it may be useful\n for writing a custom pretty printer. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "ZMidi.Core.Pretty.Internal",
          "name": "Internal",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Pretty-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Helper functions to pretty print MIDI as text The functionality is unstable and may change between releases however it is still exposed as it may be useful for writing custom pretty printer",
          "hierarchy": "ZMidi Core Pretty Internal",
          "module": "ZMidi.Core.Pretty.Internal",
          "name": "Internal",
          "package": "zmidi-core",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a short byte-list as Hex. Byte-lists longer than \n 10 chars are printed as ellipses.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Pretty.Internal",
          "name": "byteList",
          "package": "zmidi-core",
          "signature": "a -\u003e [Word8] -\u003e WString",
          "source": "src/ZMidi-Core-Pretty-Internal.html#byteList",
          "type": "function"
        },
        "index": {
          "description": "Print short byte-list as Hex Byte-lists longer than chars are printed as ellipses",
          "hierarchy": "ZMidi Core Pretty Internal",
          "module": "ZMidi.Core.Pretty.Internal",
          "name": "byteList",
          "normalized": "a-\u003e[Word]-\u003eWString",
          "package": "zmidi-core",
          "partial": "List",
          "signature": "a-\u003e[Word]-\u003eWString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Internal.html#v:byteList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColumn specs for Header - Header is printed as simple \n name-value pairs (2 columns).\n\u003c/p\u003e",
          "module": "ZMidi.Core.Pretty.Internal",
          "name": "midi_header_columns",
          "package": "zmidi-core",
          "signature": "ColumnSpecs",
          "source": "src/ZMidi-Core-Pretty-Internal.html#midi_header_columns",
          "type": "function"
        },
        "index": {
          "description": "Column specs for Header Header is printed as simple name-value pairs columns",
          "hierarchy": "ZMidi Core Pretty Internal",
          "module": "ZMidi.Core.Pretty.Internal",
          "name": "midi_header_columns",
          "package": "zmidi-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Internal.html#v:midi_header_columns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a string safe for stdout.\n\u003c/p\u003e\u003cp\u003eThis is a temporary hack - characters above ASCII 163\n cause an (invalid character) error when written to stdout \n on Windows (Cygwin).\n\u003c/p\u003e",
          "module": "ZMidi.Core.Pretty.Internal",
          "name": "safeString",
          "package": "zmidi-core",
          "signature": "String -\u003e String",
          "source": "src/ZMidi-Core-Pretty-Internal.html#safeString",
          "type": "function"
        },
        "index": {
          "description": "Make string safe for stdout This is temporary hack characters above ASCII cause an invalid character error when written to stdout on Windows Cygwin",
          "hierarchy": "ZMidi Core Pretty Internal",
          "module": "ZMidi.Core.Pretty.Internal",
          "name": "safeString",
          "normalized": "String-\u003eString",
          "package": "zmidi-core",
          "partial": "String",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Internal.html#v:safeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog the MidiHeader in the Table monad (cf. Writer).\n\u003c/p\u003e",
          "module": "ZMidi.Core.Pretty.Internal",
          "name": "tellMidiHeader",
          "package": "zmidi-core",
          "signature": "MidiHeader -\u003e Table ()",
          "source": "src/ZMidi-Core-Pretty-Internal.html#tellMidiHeader",
          "type": "function"
        },
        "index": {
          "description": "Log the MidiHeader in the Table monad cf Writer",
          "hierarchy": "ZMidi Core Pretty Internal",
          "module": "ZMidi.Core.Pretty.Internal",
          "name": "tellMidiHeader",
          "normalized": "MidiHeader-\u003eTable()",
          "package": "zmidi-core",
          "partial": "Midi Header",
          "signature": "MidiHeader-\u003eTable()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Internal.html#v:tellMidiHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode Text Type\n\u003c/p\u003e",
          "module": "ZMidi.Core.Pretty.Internal",
          "name": "textType",
          "package": "zmidi-core",
          "signature": "MidiTextType -\u003e String",
          "source": "src/ZMidi-Core-Pretty-Internal.html#textType",
          "type": "function"
        },
        "index": {
          "description": "Decode Text Type",
          "hierarchy": "ZMidi Core Pretty Internal",
          "module": "ZMidi.Core.Pretty.Internal",
          "name": "textType",
          "normalized": "MidiTextType-\u003eString",
          "package": "zmidi-core",
          "partial": "Type",
          "signature": "MidiTextType-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Internal.html#v:textType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHelper functions to pretty print MIDI as text.\n\u003c/p\u003e\u003cp\u003eThe functionality is unstable and may change between \n releases however it is still exposed as it may be useful\n for writing a custom pretty printer. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "ZMidi.Core.Pretty.Interp",
          "name": "Interp",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Pretty-Interp.html",
          "type": "module"
        },
        "index": {
          "description": "Helper functions to pretty print MIDI as text The functionality is unstable and may change between releases however it is still exposed as it may be useful for writing custom pretty printer",
          "hierarchy": "ZMidi Core Pretty Interp",
          "module": "ZMidi.Core.Pretty.Interp",
          "name": "Interp",
          "package": "zmidi-core",
          "partial": "Interp",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Interp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of scales mapping the number of accidentals \n to (major,minor) key names.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Pretty.Interp",
          "name": "ScaleMap",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Pretty-Interp.html#ScaleMap",
          "type": "type"
        },
        "index": {
          "description": "Representation of scales mapping the number of accidentals to major minor key names",
          "hierarchy": "ZMidi Core Pretty Interp",
          "module": "ZMidi.Core.Pretty.Interp",
          "name": "ScaleMap",
          "package": "zmidi-core",
          "partial": "Scale Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Interp.html#t:ScaleMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode major scale name.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Pretty.Interp",
          "name": "majorScaleName",
          "package": "zmidi-core",
          "signature": "Int -\u003e Maybe String",
          "source": "src/ZMidi-Core-Pretty-Interp.html#majorScaleName",
          "type": "function"
        },
        "index": {
          "description": "Decode major scale name",
          "hierarchy": "ZMidi Core Pretty Interp",
          "module": "ZMidi.Core.Pretty.Interp",
          "name": "majorScaleName",
          "normalized": "Int-\u003eMaybe String",
          "package": "zmidi-core",
          "partial": "Scale Name",
          "signature": "Int-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Interp.html#v:majorScaleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode scale name.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Pretty.Interp",
          "name": "midiScaleName",
          "package": "zmidi-core",
          "signature": "MidiScaleType -\u003e Int -\u003e Maybe String",
          "source": "src/ZMidi-Core-Pretty-Interp.html#midiScaleName",
          "type": "function"
        },
        "index": {
          "description": "Decode scale name",
          "hierarchy": "ZMidi Core Pretty Interp",
          "module": "ZMidi.Core.Pretty.Interp",
          "name": "midiScaleName",
          "normalized": "MidiScaleType-\u003eInt-\u003eMaybe String",
          "package": "zmidi-core",
          "partial": "Scale Name",
          "signature": "MidiScaleType-\u003eInt-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Interp.html#v:midiScaleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode minor scale name.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Pretty.Interp",
          "name": "minorScaleName",
          "package": "zmidi-core",
          "signature": "Int -\u003e Maybe String",
          "source": "src/ZMidi-Core-Pretty-Interp.html#minorScaleName",
          "type": "function"
        },
        "index": {
          "description": "Decode minor scale name",
          "hierarchy": "ZMidi Core Pretty Interp",
          "module": "ZMidi.Core.Pretty.Interp",
          "name": "minorScaleName",
          "normalized": "Int-\u003eMaybe String",
          "package": "zmidi-core",
          "partial": "Scale Name",
          "signature": "Int-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Interp.html#v:minorScaleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePopulated ScaleMap.\n\u003c/p\u003e\u003cp\u003ePositive numbers are number of sharps\n Negative numbers are number of flats.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Pretty.Interp",
          "name": "scale_map",
          "package": "zmidi-core",
          "signature": "ScaleMap",
          "source": "src/ZMidi-Core-Pretty-Interp.html#scale_map",
          "type": "function"
        },
        "index": {
          "description": "Populated ScaleMap Positive numbers are number of sharps Negative numbers are number of flats",
          "hierarchy": "ZMidi Core Pretty Interp",
          "module": "ZMidi.Core.Pretty.Interp",
          "name": "scale_map",
          "package": "zmidi-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Interp.html#v:scale_map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode simple note name.\n\u003c/p\u003e\u003cp\u003eFollows the example of the book \u003cem\u003eBeyond MIDI\u003c/em\u003e - there is \n no enharmonic spelling, all black key notes are named as \n their respective sharp note.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Pretty.Interp",
          "name": "simpleNoteName",
          "package": "zmidi-core",
          "signature": "Int -\u003e String",
          "source": "src/ZMidi-Core-Pretty-Interp.html#simpleNoteName",
          "type": "function"
        },
        "index": {
          "description": "Decode simple note name Follows the example of the book Beyond MIDI there is no enharmonic spelling all black key notes are named as their respective sharp note",
          "hierarchy": "ZMidi Core Pretty Interp",
          "module": "ZMidi.Core.Pretty.Interp",
          "name": "simpleNoteName",
          "normalized": "Int-\u003eString",
          "package": "zmidi-core",
          "partial": "Note Name",
          "signature": "Int-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Interp.html#v:simpleNoteName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a time signature.\n\u003c/p\u003e\u003cp\u003eReturned as (numerator, denoimator) pair.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Pretty.Interp",
          "name": "timeSignature",
          "package": "zmidi-core",
          "signature": "Int -\u003e Int -\u003e (Int, Int)",
          "source": "src/ZMidi-Core-Pretty-Interp.html#timeSignature",
          "type": "function"
        },
        "index": {
          "description": "Decode time signature Returned as numerator denoimator pair",
          "hierarchy": "ZMidi Core Pretty Interp",
          "module": "ZMidi.Core.Pretty.Interp",
          "name": "timeSignature",
          "normalized": "Int-\u003eInt-\u003e(Int,Int)",
          "package": "zmidi-core",
          "partial": "Signature",
          "signature": "Int-\u003eInt-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Interp.html#v:timeSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a time signature - and print.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Pretty.Interp",
          "name": "timeSignatureName",
          "package": "zmidi-core",
          "signature": "Int -\u003e Int -\u003e String",
          "source": "src/ZMidi-Core-Pretty-Interp.html#timeSignatureName",
          "type": "function"
        },
        "index": {
          "description": "Decode time signature and print",
          "hierarchy": "ZMidi Core Pretty Interp",
          "module": "ZMidi.Core.Pretty.Interp",
          "name": "timeSignatureName",
          "normalized": "Int-\u003eInt-\u003eString",
          "package": "zmidi-core",
          "partial": "Signature Name",
          "signature": "Int-\u003eInt-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Interp.html#v:timeSignatureName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty print the MIDI representation.\n\u003c/p\u003e\u003cp\u003eThe output format is lossy - the content of Meta and SysEx \n events may be abbreviated. This makes the format unsuitable \n as a text representation of MIDI, however it can enable\n quick \u003cem\u003edisassembly\u003c/em\u003e of MIDI files in order to see the note\n events.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ZMidi.Core.Pretty",
          "name": "Pretty",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Pretty.html",
          "type": "module"
        },
        "index": {
          "description": "Pretty print the MIDI representation The output format is lossy the content of Meta and SysEx events may be abbreviated This makes the format unsuitable as text representation of MIDI however it can enable quick disassembly of MIDI files in order to see the note events",
          "hierarchy": "ZMidi Core Pretty",
          "module": "ZMidi.Core.Pretty",
          "name": "Pretty",
          "package": "zmidi-core",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint the MIDI file to a list of Strings.\n\u003c/p\u003e\u003cp\u003eResults are returned as a list of String to avoid extraneous\n concatenation.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Pretty",
          "name": "printMidi",
          "package": "zmidi-core",
          "signature": "MidiFile -\u003e [String]",
          "source": "src/ZMidi-Core-Pretty.html#printMidi",
          "type": "function"
        },
        "index": {
          "description": "Print the MIDI file to list of Strings Results are returned as list of String to avoid extraneous concatenation",
          "hierarchy": "ZMidi Core Pretty",
          "module": "ZMidi.Core.Pretty",
          "name": "printMidi",
          "normalized": "MidiFile-\u003e[String]",
          "package": "zmidi-core",
          "partial": "Midi",
          "signature": "MidiFile-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty.html#v:printMidi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint the MIDI header.\n\u003c/p\u003e\u003cp\u003eResults are returned as a list of String to avoid extraneous\n concatenation.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Pretty",
          "name": "printMidiHeader",
          "package": "zmidi-core",
          "signature": "MidiFile -\u003e [String]",
          "source": "src/ZMidi-Core-Pretty.html#printMidiHeader",
          "type": "function"
        },
        "index": {
          "description": "Print the MIDI header Results are returned as list of String to avoid extraneous concatenation",
          "hierarchy": "ZMidi Core Pretty",
          "module": "ZMidi.Core.Pretty",
          "name": "printMidiHeader",
          "normalized": "MidiFile-\u003e[String]",
          "package": "zmidi-core",
          "partial": "Midi Header",
          "signature": "MidiFile-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty.html#v:printMidiHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a track.\n\u003c/p\u003e\u003cp\u003eResults are returned as a list of String to avoid extraneous\n concatenation.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Pretty",
          "name": "printMidiTrack",
          "package": "zmidi-core",
          "signature": "Int -\u003e MidiFile -\u003e [String]",
          "source": "src/ZMidi-Core-Pretty.html#printMidiTrack",
          "type": "function"
        },
        "index": {
          "description": "Print track Results are returned as list of String to avoid extraneous concatenation",
          "hierarchy": "ZMidi Core Pretty",
          "module": "ZMidi.Core.Pretty",
          "name": "printMidiTrack",
          "normalized": "Int-\u003eMidiFile-\u003e[String]",
          "package": "zmidi-core",
          "partial": "Midi Track",
          "signature": "Int-\u003eMidiFile-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty.html#v:printMidiTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint the MIDI file to stdout.\n\u003c/p\u003e\u003cp\u003eOne event is printed per line, so the output may be large.\n\u003c/p\u003e",
          "module": "ZMidi.Core.Pretty",
          "name": "putMidi",
          "package": "zmidi-core",
          "signature": "MidiFile -\u003e IO ()",
          "source": "src/ZMidi-Core-Pretty.html#putMidi",
          "type": "function"
        },
        "index": {
          "description": "Print the MIDI file to stdout One event is printed per line so the output may be large",
          "hierarchy": "ZMidi Core Pretty",
          "module": "ZMidi.Core.Pretty",
          "name": "putMidi",
          "normalized": "MidiFile-\u003eIO()",
          "package": "zmidi-core",
          "partial": "Midi",
          "signature": "MidiFile-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty.html#v:putMidi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA top down (Parsec style) MIDI file parser. \n\u003c/p\u003e\u003cp\u003eFor valid input, the parser should parse without error \n (i.e all cases of event types are fully enumerated). \n Malformed input (syntactically bad events, or truncated data) \n will cause fatal parse errors.\n\u003c/p\u003e\u003cp\u003eNote - the parser returns a \u003cem\u003eliteral\u003c/em\u003e result if the input \n uses Running Status, i.e, - the answer matches the input - \n where running status uses a NoteOn event with velocity 0 to \n stand for a NoteOff, the parser likewise returns a Note-On. \n Use the \u003ccode\u003eZMidi.Core.Canonical\u003c/code\u003e to translate the input to \n canonical form where note-offs are encoded directly with \n NoteOff.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ZMidi.Core.ReadFile",
          "name": "ReadFile",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-ReadFile.html",
          "type": "module"
        },
        "index": {
          "description": "top down Parsec style MIDI file parser For valid input the parser should parse without error i.e all cases of event types are fully enumerated Malformed input syntactically bad events or truncated data will cause fatal parse errors Note the parser returns literal result if the input uses Running Status i.e the answer matches the input where running status uses NoteOn event with velocity to stand for NoteOff the parser likewise returns Note-On Use the ZMidi.Core.Canonical to translate the input to canonical form where note-offs are encoded directly with NoteOff",
          "hierarchy": "ZMidi Core ReadFile",
          "module": "ZMidi.Core.ReadFile",
          "name": "ReadFile",
          "package": "zmidi-core",
          "partial": "Read File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-ReadFile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError message - alias for String.\n\u003c/p\u003e",
          "module": "ZMidi.Core.ReadFile",
          "name": "ErrMsg",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Internal-ParserMonad.html#ErrMsg",
          "type": "type"
        },
        "index": {
          "description": "Error message alias for String",
          "hierarchy": "ZMidi Core ReadFile",
          "module": "ZMidi.Core.ReadFile",
          "name": "ErrMsg",
          "package": "zmidi-core",
          "partial": "Err Msg",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-ReadFile.html#t:ErrMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParseErr is the position of the error and a message.\n\u003c/p\u003e",
          "module": "ZMidi.Core.ReadFile",
          "name": "ParseErr",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Internal-ParserMonad.html#ParseErr",
          "type": "data"
        },
        "index": {
          "description": "ParseErr is the position of the error and message",
          "hierarchy": "ZMidi Core ReadFile",
          "module": "ZMidi.Core.ReadFile",
          "name": "ParseErr",
          "package": "zmidi-core",
          "partial": "Parse Err",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-ReadFile.html#t:ParseErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePosition of the parser in the input stream.\n\u003c/p\u003e\u003cp\u003eThis is exposed by the ReadFile API and may be useful for \n \u003cem\u003edisassembling\u003c/em\u003e a MIDI file that causes a parse failure.\n\u003c/p\u003e",
          "module": "ZMidi.Core.ReadFile",
          "name": "Pos",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-Internal-ParserMonad.html#Pos",
          "type": "type"
        },
        "index": {
          "description": "Position of the parser in the input stream This is exposed by the ReadFile API and may be useful for disassembling MIDI file that causes parse failure",
          "hierarchy": "ZMidi Core ReadFile",
          "module": "ZMidi.Core.ReadFile",
          "name": "Pos",
          "package": "zmidi-core",
          "partial": "Pos",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-ReadFile.html#t:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ZMidi.Core.ReadFile",
          "name": "ParseErr",
          "package": "zmidi-core",
          "signature": "ParseErr !Pos !ErrMsg",
          "source": "src/ZMidi-Core-Internal-ParserMonad.html#ParseErr",
          "type": "function"
        },
        "index": {
          "hierarchy": "ZMidi Core ReadFile",
          "module": "ZMidi.Core.ReadFile",
          "name": "ParseErr",
          "package": "zmidi-core",
          "partial": "Parse Err",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-ReadFile.html#v:ParseErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a well formed MIDI file. \n\u003c/p\u003e",
          "module": "ZMidi.Core.ReadFile",
          "name": "readMidi",
          "package": "zmidi-core",
          "signature": "FilePath -\u003e IO (Either ParseErr MidiFile)",
          "source": "src/ZMidi-Core-ReadFile.html#readMidi",
          "type": "function"
        },
        "index": {
          "description": "Read well formed MIDI file",
          "hierarchy": "ZMidi Core ReadFile",
          "module": "ZMidi.Core.ReadFile",
          "name": "readMidi",
          "normalized": "FilePath-\u003eIO(Either ParseErr MidiFile)",
          "package": "zmidi-core",
          "partial": "Midi",
          "signature": "FilePath-\u003eIO(Either ParseErr MidiFile)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-ReadFile.html#v:readMidi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion number\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ZMidi.Core.VersionNumber",
          "name": "VersionNumber",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-VersionNumber.html",
          "type": "module"
        },
        "index": {
          "description": "Version number",
          "hierarchy": "ZMidi Core VersionNumber",
          "module": "ZMidi.Core.VersionNumber",
          "name": "VersionNumber",
          "package": "zmidi-core",
          "partial": "Version Number",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-VersionNumber.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion number\n\u003c/p\u003e\u003cpre\u003e (0,7,0)\n\u003c/pre\u003e",
          "module": "ZMidi.Core.VersionNumber",
          "name": "zmidi_core_version",
          "package": "zmidi-core",
          "signature": "(Int, Int, Int)",
          "source": "src/ZMidi-Core-VersionNumber.html#zmidi_core_version",
          "type": "function"
        },
        "index": {
          "description": "Version number",
          "hierarchy": "ZMidi Core VersionNumber",
          "module": "ZMidi.Core.VersionNumber",
          "name": "zmidi_core_version",
          "normalized": "(Int,Int,Int)",
          "package": "zmidi-core",
          "signature": "(Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-VersionNumber.html#v:zmidi_core_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWrite a MIDI file.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ZMidi.Core.WriteFile",
          "name": "WriteFile",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core-WriteFile.html",
          "type": "module"
        },
        "index": {
          "description": "Write MIDI file",
          "hierarchy": "ZMidi Core WriteFile",
          "module": "ZMidi.Core.WriteFile",
          "name": "WriteFile",
          "package": "zmidi-core",
          "partial": "Write File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-WriteFile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a MIDI file.\n\u003c/p\u003e",
          "module": "ZMidi.Core.WriteFile",
          "name": "writeMidi",
          "package": "zmidi-core",
          "signature": "FilePath -\u003e MidiFile -\u003e IO ()",
          "source": "src/ZMidi-Core-WriteFile.html#writeMidi",
          "type": "function"
        },
        "index": {
          "description": "Write MIDI file",
          "hierarchy": "ZMidi Core WriteFile",
          "module": "ZMidi.Core.WriteFile",
          "name": "writeMidi",
          "normalized": "FilePath-\u003eMidiFile-\u003eIO()",
          "package": "zmidi-core",
          "partial": "Midi",
          "signature": "FilePath-\u003eMidiFile-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-WriteFile.html#v:writeMidi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommon interface to \u003ccode\u003eZMidi.Core\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is a \u003cem\u003eshim\u003c/em\u003e module re-exporting types and functions from\n the exposed ZMidi-Core modules. Just import this module to use \n ZMidi-Core. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "ZMidi.Core",
          "name": "Core",
          "package": "zmidi-core",
          "source": "src/ZMidi-Core.html",
          "type": "module"
        },
        "index": {
          "description": "Common interface to ZMidi.Core This is shim module re-exporting types and functions from the exposed ZMidi-Core modules Just import this module to use ZMidi-Core",
          "hierarchy": "ZMidi Core",
          "module": "ZMidi.Core",
          "name": "Core",
          "package": "zmidi-core",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core.html#"
      }
    }
  ]
]