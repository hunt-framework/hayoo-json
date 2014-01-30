[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Canonical.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvert a MidiFile into \"canonical\" form - i.e. expand \n any use of Running Status and translate Running Status high, \n NoteOn channel velocity 0 events to NoteOff events.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ZMidi.Core.Canonical",
        "fct-package": "zmidi-core",
        "fct-signature": "module",
        "fct-source": "src/ZMidi-Core-Canonical.html",
        "fct-type": "module",
        "title": "Canonical"
      },
      "index": {
        "description": "Convert MidiFile into canonical form i.e expand any use of Running Status and translate Running Status high NoteOn channel velocity events to NoteOff events",
        "hierarchy": "ZMidi Core Canonical",
        "module": "ZMidi.Core.Canonical",
        "name": "Canonical",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Canonical",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Canonical.html#v:canonical",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an MidiFile into \"canonical\" form where any \n abbreviation introduced by Running Status is expanded.\n\u003c/p\u003e\u003cp\u003eNote - even with Running Status on the syntax tree is almost \n canonical (some expansion takes place in the Parser), so this\n translation is quite simplistic.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Canonical",
        "fct-package": "zmidi-core",
        "fct-signature": "MidiFile -\u003e MidiFile",
        "fct-source": "src/ZMidi-Core-Canonical.html#canonical",
        "fct-type": "function",
        "title": "canonical"
      },
      "index": {
        "description": "Convert an MidiFile into canonical form where any abbreviation introduced by Running Status is expanded Note even with Running Status on the syntax tree is almost canonical some expansion takes place in the Parser so this translation is quite simplistic",
        "hierarchy": "ZMidi Core Canonical",
        "module": "ZMidi.Core.Canonical",
        "name": "canonical",
        "normalized": "MidiFile-\u003eMidiFile",
        "package": "zmidi-core",
        "partial": "",
        "signature": "MidiFile-\u003eMidiFile"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConcrete syntax tree for MIDI files.\n\u003c/p\u003e\u003cp\u003eValues are sometimes not interpreted. This means that the\n the data types do not fully represent the sematics of MIDI \n events, but all the data is either stored within the data type \n or synthesizeable. Hence, \u003ccode\u003e readFile \u003e\u003e= writeFile \u003c/code\u003e will \n produce an identical binary [1]. \n\u003c/p\u003e\u003cp\u003e[1] Or it should, failure indicates a bug...\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "module",
        "fct-source": "src/ZMidi-Core-Datatypes.html",
        "fct-type": "module",
        "title": "Datatypes"
      },
      "index": {
        "description": "Concrete syntax tree for MIDI files Values are sometimes not interpreted This means that the the data types do not fully represent the sematics of MIDI events but all the data is either stored within the data type or synthesizeable Hence readFile writeFile will produce an identical binary Or it should failure indicates bug",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "Datatypes",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Datatypes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:DeltaTime",
      "description": {
        "fct-descr": "\u003cp\u003eAll time values in a MIDI track are represented as a delta \n from the previous event rather than an absolute time. \n\u003c/p\u003e\u003cp\u003eDeltaTime is a newtype wrapper over Word32, note that in MIDI \n files it is represented as a \u003ccode\u003evarlen\u003c/code\u003e to potentially save \n space that would otherwise require a four byte number. \n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "data",
        "fct-source": "src/ZMidi-Core-Datatypes.html#DeltaTime",
        "fct-type": "data",
        "title": "DeltaTime"
      },
      "index": {
        "description": "All time values in MIDI track are represented as delta from the previous event rather than an absolute time DeltaTime is newtype wrapper over Word32 note that in MIDI files it is represented as varlen to potentially save space that would otherwise require four byte number",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "DeltaTime",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Delta Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiDataOther",
      "description": {
        "fct-descr": "\u003cp\u003eData events are events with tags from 0x00 to 0x7F. \n\u003c/p\u003e\u003cp\u003eData events have no payload - they are represented only by the\n tag byte.  \n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "newtype",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiDataOther",
        "fct-type": "newtype",
        "title": "MidiDataOther"
      },
      "index": {
        "description": "Data events are events with tags from x00 to x7F Data events have no payload they are represented only by the tag byte",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MidiDataOther",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Midi Data Other",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiEvent",
      "description": {
        "fct-descr": "\u003cp\u003eRecognised event types - some types (\u003ccode\u003e\u003ca\u003eMidiEventOther\u003c/a\u003e\u003c/code\u003e and \n \u003ccode\u003eSysEx\u003c/code\u003e) are not interpreted.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "data",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiEvent",
        "fct-type": "data",
        "title": "MidiEvent"
      },
      "index": {
        "description": "Recognised event types some types MidiEventOther and SysEx are not interpreted",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MidiEvent",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Midi Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiFile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMidiFile\u003c/a\u003e\u003c/code\u003e : \u003ccode\u003e header * tracks \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "data",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiFile",
        "fct-type": "data",
        "title": "MidiFile"
      },
      "index": {
        "description": "MidiFile header tracks",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MidiFile",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Midi File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiFormat",
      "description": {
        "fct-descr": "\u003cp\u003eThe file format - in a MIDI file this is a big-endian \n word16 with 0,1 or 2 being the only valid values. \n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "data",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiFormat",
        "fct-type": "data",
        "title": "MidiFormat"
      },
      "index": {
        "description": "The file format in MIDI file this is big-endian word16 with or being the only valid values",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MidiFormat",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Midi Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiHeader",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eHeader\u003c/code\u003e : \u003ccode\u003e format * num_tracks * time_division \u003c/code\u003e \n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eTimeDivision\u003c/code\u003e is often 384 or 480 ticks per beat.\n\u003c/p\u003e\u003cp\u003eThe header is the start of a MIDI file, it is indicated by the \n 4 character marker \u003ccode\u003eMThd\u003c/code\u003e.   \n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "data",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiHeader",
        "fct-type": "data",
        "title": "MidiHeader"
      },
      "index": {
        "description": "Header format num tracks time division TimeDivision is often or ticks per beat The header is the start of MIDI file it is indicated by the character marker MThd",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MidiHeader",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Midi Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiMessage",
      "description": {
        "fct-descr": "\u003cp\u003eMIDI messages are pairs of \u003ccode\u003e\u003ca\u003eDeltaTime\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003eEvent\u003c/code\u003e wrapped in \n a newtype. \n\u003c/p\u003e\u003cp\u003eSequential messages with delta time 0 are played \n simultaneously.  \n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "type",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiMessage",
        "fct-type": "type",
        "title": "MidiMessage"
      },
      "index": {
        "description": "MIDI messages are pairs of DeltaTime and Event wrapped in newtype Sequential messages with delta time are played simultaneously",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MidiMessage",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Midi Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiMetaEvent",
      "description": {
        "fct-descr": "\u003cp\u003eMeta event \n\u003c/p\u003e\u003cp\u003eIn Format 1 files general events (e.g. text events) should\n only appear in track 1. Certain events (e.g. end-of-track) \n can appear in any track where necessary. \n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "data",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiMetaEvent",
        "fct-type": "data",
        "title": "MidiMetaEvent"
      },
      "index": {
        "description": "Meta event In Format files general events e.g text events should only appear in track Certain events e.g end-of-track can appear in any track where necessary",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MidiMetaEvent",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Midi Meta Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiRunningStatus",
      "description": {
        "fct-descr": "\u003cp\u003eRunning Status.\n\u003c/p\u003e\u003cp\u003eMIDI allows a compact representation of voice events where\n consecutive events (same event, same channel) only need to\n include the first event-channel byte - subsequent events \n only send payload until the next event or channel change.\n\u003c/p\u003e\u003cp\u003eIncluding \u003ccode\u003eMidiRunningStatus\u003c/code\u003e in the data representation is \n important for ZMidi as an aim is to allow round-tripping\n of exisiting MIDI files. However it makes MIDI generation\n more complicated (there is more scope to generate bad \n output) - if you are only generating MIDI it is wise to always \n set \u003ccode\u003eMidiRunningStatus\u003c/code\u003e to \u003ccode\u003eRS_OFF\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "data",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiRunningStatus",
        "fct-type": "data",
        "title": "MidiRunningStatus"
      },
      "index": {
        "description": "Running Status MIDI allows compact representation of voice events where consecutive events same event same channel only need to include the first event-channel byte subsequent events only send payload until the next event or channel change Including MidiRunningStatus in the data representation is important for ZMidi as an aim is to allow round-tripping of exisiting MIDI files However it makes MIDI generation more complicated there is more scope to generate bad output if you are only generating MIDI it is wise to always set MidiRunningStatus to RS OFF",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MidiRunningStatus",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Midi Running Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiScaleType",
      "description": {
        "fct-descr": "\u003cp\u003eScale type - \u003ccode\u003emajor\u003c/code\u003e or \u003ccode\u003eminor\u003c/code\u003e or \u003ccode\u003eSCALE_OTHER\u003c/code\u003e.  \n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eSCALE_OTHER\u003c/code\u003e represents a parse error.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "data",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiScaleType",
        "fct-type": "data",
        "title": "MidiScaleType"
      },
      "index": {
        "description": "Scale type major or minor or SCALE OTHER SCALE OTHER represents parse error",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MidiScaleType",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Midi Scale Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiSysCommonEvent",
      "description": {
        "fct-descr": "\u003cp\u003eSystem common event.\n\u003c/p\u003e\u003cp\u003eCommon information for all channels in a system. \n\u003c/p\u003e\u003cp\u003eThese events may not be pertinent to MIDI files generated on a \n computer (as opposed to MIDI generated by a synthesizer or \n sequencer).\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "data",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiSysCommonEvent",
        "fct-type": "data",
        "title": "MidiSysCommonEvent"
      },
      "index": {
        "description": "System common event Common information for all channels in system These events may not be pertinent to MIDI files generated on computer as opposed to MIDI generated by synthesizer or sequencer",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MidiSysCommonEvent",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Midi Sys Common Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiSysExContPacket",
      "description": {
        "fct-descr": "\u003cp\u003eContinuation packet for a (non-standard) multi-part SysEx \n event.\n\u003c/p\u003e\u003cp\u003eApprently this format is use by Casio. \n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "data",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiSysExContPacket",
        "fct-type": "data",
        "title": "MidiSysExContPacket"
      },
      "index": {
        "description": "Continuation packet for non-standard multi-part SysEx event Apprently this format is use by Casio",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MidiSysExContPacket",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Midi Sys Ex Cont Packet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiSysExEvent",
      "description": {
        "fct-descr": "\u003cp\u003eSysEx - system exclusive event. \n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "data",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiSysExEvent",
        "fct-type": "data",
        "title": "MidiSysExEvent"
      },
      "index": {
        "description": "SysEx system exclusive event",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MidiSysExEvent",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Midi Sys Ex Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiSysRealTimeEvent",
      "description": {
        "fct-descr": "\u003cp\u003eSystem real-time event.\n\u003c/p\u003e\u003cp\u003eThese events may not be pertinent to MIDI files generated on a \n computer (as opposed to MIDI generated by a synthesizer or \n sequencer).\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "data",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiSysRealTimeEvent",
        "fct-type": "data",
        "title": "MidiSysRealTimeEvent"
      },
      "index": {
        "description": "System real-time event These events may not be pertinent to MIDI files generated on computer as opposed to MIDI generated by synthesizer or sequencer",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MidiSysRealTimeEvent",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Midi Sys Real Time Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiTextType",
      "description": {
        "fct-descr": "\u003cp\u003eEnumeration of the text meta event types.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "data",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiTextType",
        "fct-type": "data",
        "title": "MidiTextType"
      },
      "index": {
        "description": "Enumeration of the text meta event types",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MidiTextType",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Midi Text Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiTimeDivision",
      "description": {
        "fct-descr": "\u003cp\u003eDefault unit of time in the MIDI file.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "data",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiTimeDivision",
        "fct-type": "data",
        "title": "MidiTimeDivision"
      },
      "index": {
        "description": "Default unit of time in the MIDI file",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MidiTimeDivision",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Midi Time Division",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiTrack",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eTrack\u003c/code\u003e : \u003ccode\u003e [message] \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eIn MIDI files, the start of a track is indicated by the 4 \n character marker \u003ccode\u003eMTrk\u003c/code\u003e.  \n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "newtype",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiTrack",
        "fct-type": "newtype",
        "title": "MidiTrack"
      },
      "index": {
        "description": "Track message In MIDI files the start of track is indicated by the character marker MTrk",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MidiTrack",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Midi Track",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:MidiVoiceEvent",
      "description": {
        "fct-descr": "\u003cp\u003eVoice events control the output of the synthesizer.\n\u003c/p\u003e\u003cp\u003eNote - change in v0.5.0 - the constructors have been reordered\n so the Ord instance matches the order of the \u003cem\u003etag\u003c/em\u003e bytes. Any \n code that relied on sorting MIDI events is likely to need \n reworking.\n\u003c/p\u003e\u003cp\u003eIn serialized MIDI data the top 4 bits of the first byte of the \n Voice Event are a tag, the bottom 4 bits are the channel \n number. ZMidi stores the channel number with a Word8 though \n values should be limited to the range 0-15.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "data",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiVoiceEvent",
        "fct-type": "data",
        "title": "MidiVoiceEvent"
      },
      "index": {
        "description": "Voice events control the output of the synthesizer Note change in v0.5.0 the constructors have been reordered so the Ord instance matches the order of the tag bytes Any code that relied on sorting MIDI events is likely to need reworking In serialized MIDI data the top bits of the first byte of the Voice Event are tag the bottom bits are the channel number ZMidi stores the channel number with Word8 though values should be limited to the range",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MidiVoiceEvent",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Midi Voice Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#t:TagByte",
      "description": {
        "fct-descr": "\u003cp\u003eTagByte is an alias to \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "type",
        "fct-source": "src/ZMidi-Core-Datatypes.html#TagByte",
        "fct-type": "type",
        "title": "TagByte"
      },
      "index": {
        "description": "TagByte is an alias to Word8",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "TagByte",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Tag Byte",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:ActiveSensing",
      "description": {
        "fct-descr": "\u003cp\u003eActive sensing\n\u003c/p\u003e\u003cpre\u003e FE\n\u003c/pre\u003e\u003cp\u003eSynchronization pulse...\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "ActiveSensing",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiSysRealTimeEvent",
        "fct-type": "function",
        "title": "ActiveSensing"
      },
      "index": {
        "description": "Active sensing FE Synchronization pulse",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "ActiveSensing",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Active Sensing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:COPYRIGHT_NOTICE",
      "description": {
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "COPYRIGHT_NOTICE",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiTextType",
        "fct-type": "function",
        "title": "COPYRIGHT_NOTICE"
      },
      "index": {
        "description": "",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "COPYRIGHT_NOTICE",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "COPYRIGHT NOTICE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:CUE_POINT",
      "description": {
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "CUE_POINT",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiTextType",
        "fct-type": "function",
        "title": "CUE_POINT"
      },
      "index": {
        "description": "",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "CUE_POINT",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "CUE POINT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:ChanAftertouch",
      "description": {
        "fct-descr": "\u003cp\u003eChannel pressure.\n\u003c/p\u003e\u003cpre\u003e D0 to DF (0 to F is channel number) * pressure_value\n\u003c/pre\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "ChanAftertouch Word8 Word8",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiVoiceEvent",
        "fct-type": "function",
        "title": "ChanAftertouch"
      },
      "index": {
        "description": "Channel pressure D0 to DF to is channel number pressure value",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "ChanAftertouch",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Chan Aftertouch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:ChannelPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eChannel prefix \n\u003c/p\u003e\u003cpre\u003e FF 20 01 * channel\n\u003c/pre\u003e\u003cp\u003eRelay all meta and sys-ex events to the given channel.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "ChannelPrefix Word8",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiMetaEvent",
        "fct-type": "function",
        "title": "ChannelPrefix"
      },
      "index": {
        "description": "Channel prefix FF channel Relay all meta and sys-ex events to the given channel",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "ChannelPrefix",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Channel Prefix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:ContinueSequence",
      "description": {
        "fct-descr": "\u003cp\u003eContinue playing a stopped sequence.\n\u003c/p\u003e\u003cpre\u003e FB\n\u003c/pre\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "ContinueSequence",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiSysRealTimeEvent",
        "fct-type": "function",
        "title": "ContinueSequence"
      },
      "index": {
        "description": "Continue playing stopped sequence FB",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "ContinueSequence",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Continue Sequence",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:Controller",
      "description": {
        "fct-descr": "\u003cp\u003eSet a controller.\n\u003c/p\u003e\u003cpre\u003e B0 to BF (0 to F is channel number) * controller_number * value \n\u003c/pre\u003e\u003cp\u003eController change, e.g. by a footswitch.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "Controller Word8 Word8 Word8",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiVoiceEvent",
        "fct-type": "function",
        "title": "Controller"
      },
      "index": {
        "description": "Set controller B0 to BF to is channel number controller number value Controller change e.g by footswitch",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "Controller",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Controller",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:EOX",
      "description": {
        "fct-descr": "\u003cp\u003eEnd-of-system-exclusive message.\n\u003c/p\u003e\u003cpre\u003e F7\n\u003c/pre\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "EOX",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiSysCommonEvent",
        "fct-type": "function",
        "title": "EOX"
      },
      "index": {
        "description": "End-of-system-exclusive message F7",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "EOX",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "EOX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:EndOfTrack",
      "description": {
        "fct-descr": "\u003cp\u003eEnd-of-track event. \n\u003c/p\u003e\u003cpre\u003e FF 2F 00\n\u003c/pre\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "EndOfTrack",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiMetaEvent",
        "fct-type": "function",
        "title": "EndOfTrack"
      },
      "index": {
        "description": "End-of-track event FF",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "EndOfTrack",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "End Of Track",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:FPS",
      "description": {
        "fct-descr": "\u003cp\u003eFrames-per-second.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "FPS Word16",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiTimeDivision",
        "fct-type": "function",
        "title": "FPS"
      },
      "index": {
        "description": "Frames-per-second",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "FPS",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "FPS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:GENERIC_TEXT",
      "description": {
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "GENERIC_TEXT",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiTextType",
        "fct-type": "function",
        "title": "GENERIC_TEXT"
      },
      "index": {
        "description": "",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "GENERIC_TEXT",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "GENERIC TEXT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:INSTRUMENT_NAME",
      "description": {
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "INSTRUMENT_NAME",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiTextType",
        "fct-type": "function",
        "title": "INSTRUMENT_NAME"
      },
      "index": {
        "description": "",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "INSTRUMENT_NAME",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "INSTRUMENT NAME",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:KeySignature",
      "description": {
        "fct-descr": "\u003cp\u003eKey signature \n\u003c/p\u003e\u003cpre\u003e FF 59 02 * key_type * scale_type\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003ekey_type\u003c/code\u003e is the number of sharps (postive numbers) or \n flats (negative numbers), e.g. (-1) is 1 flat.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003escale_type\u003c/code\u003e indicates major or minor.  \n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "KeySignature Int8 MidiScaleType",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiMetaEvent",
        "fct-type": "function",
        "title": "KeySignature"
      },
      "index": {
        "description": "Key signature FF key type scale type key type is the number of sharps postive numbers or flats negative numbers e.g is flat scale type indicates major or minor",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "KeySignature",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Key Signature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:LYRICS",
      "description": {
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "LYRICS",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiTextType",
        "fct-type": "function",
        "title": "LYRICS"
      },
      "index": {
        "description": "",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "LYRICS",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "LYRICS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MAJOR",
      "description": {
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "MAJOR",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiScaleType",
        "fct-type": "function",
        "title": "MAJOR"
      },
      "index": {
        "description": "",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MAJOR",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "MAJOR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MARKER",
      "description": {
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "MARKER",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiTextType",
        "fct-type": "function",
        "title": "MARKER"
      },
      "index": {
        "description": "",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MARKER",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "MARKER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MF0",
      "description": {
        "fct-descr": "\u003cp\u003eFormat 0 file - single multi-channel track.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "MF0",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiFormat",
        "fct-type": "function",
        "title": "MF0"
      },
      "index": {
        "description": "Format file single multi-channel track",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MF0",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "MF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MF1",
      "description": {
        "fct-descr": "\u003cp\u003eFormat 1 file - 1 or more tracks, played simultaneously.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "MF1",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiFormat",
        "fct-type": "function",
        "title": "MF1"
      },
      "index": {
        "description": "Format file or more tracks played simultaneously",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MF1",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "MF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MF2",
      "description": {
        "fct-descr": "\u003cp\u003eFormat 2 file - 1 or more independent tracks.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "MF2",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiFormat",
        "fct-type": "function",
        "title": "MF2"
      },
      "index": {
        "description": "Format file or more independent tracks",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MF2",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "MF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MINOR",
      "description": {
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "MINOR",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiScaleType",
        "fct-type": "function",
        "title": "MINOR"
      },
      "index": {
        "description": "",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MINOR",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "MINOR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MetaEvent",
      "description": {
        "fct-descr": "\u003cp\u003eMeta event - interpreted (e.g. \u003ccode\u003eend-of-track\u003c/code\u003e, \n \u003ccode\u003eset-tempo\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "MetaEvent MidiMetaEvent",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiEvent",
        "fct-type": "function",
        "title": "MetaEvent"
      },
      "index": {
        "description": "Meta event interpreted e.g end-of-track set-tempo",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MetaEvent",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Meta Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MetaOther",
      "description": {
        "fct-descr": "\u003cp\u003eUnrecognized Meta Event\n\u003c/p\u003e\u003cpre\u003e FF * type * length * data \n\u003c/pre\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "MetaOther Word8 Word32 [Word8]",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiMetaEvent",
        "fct-type": "function",
        "title": "MetaOther"
      },
      "index": {
        "description": "Unrecognized Meta Event FF type length data",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MetaOther",
        "normalized": "MetaOther Word Word[Word]",
        "package": "zmidi-core",
        "partial": "Meta Other",
        "signature": "MetaOther Word Word[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MidiDataOther",
      "description": {
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "MidiDataOther",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiDataOther",
        "fct-type": "function",
        "title": "MidiDataOther"
      },
      "index": {
        "description": "",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MidiDataOther",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Midi Data Other",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MidiEventOther",
      "description": {
        "fct-descr": "\u003cp\u003eAn unrecognized event. This event is not expected in \n well formed MIDI, but the parser may insert it - if it \n encounters ill-formed data.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "MidiEventOther MidiDataOther",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiEvent",
        "fct-type": "function",
        "title": "MidiEventOther"
      },
      "index": {
        "description": "An unrecognized event This event is not expected in well formed MIDI but the parser may insert it if it encounters ill-formed data",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MidiEventOther",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Midi Event Other",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MidiFile",
      "description": {
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "MidiFile",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiFile",
        "fct-type": "function",
        "title": "MidiFile"
      },
      "index": {
        "description": "",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MidiFile",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Midi File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MidiHeader",
      "description": {
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "MidiHeader",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiHeader",
        "fct-type": "function",
        "title": "MidiHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MidiHeader",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Midi Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MidiPort",
      "description": {
        "fct-descr": "\u003cp\u003eMidi port\n\u003c/p\u003e\u003cpre\u003e FF 21 01 * port\n\u003c/pre\u003e\u003cp\u003eMidi port number - used to workaround 16 channel limit...\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "MidiPort Word8",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiMetaEvent",
        "fct-type": "function",
        "title": "MidiPort"
      },
      "index": {
        "description": "Midi port FF port Midi port number used to workaround channel limit",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MidiPort",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Midi Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MidiSysExContPacket",
      "description": {
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "MidiSysExContPacket DeltaTime Word32 [Word8]",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiSysExContPacket",
        "fct-type": "function",
        "title": "MidiSysExContPacket"
      },
      "index": {
        "description": "",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MidiSysExContPacket",
        "normalized": "MidiSysExContPacket DeltaTime Word[Word]",
        "package": "zmidi-core",
        "partial": "Midi Sys Ex Cont Packet",
        "signature": "MidiSysExContPacket DeltaTime Word[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:MidiTrack",
      "description": {
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "MidiTrack",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiTrack",
        "fct-type": "function",
        "title": "MidiTrack"
      },
      "index": {
        "description": "",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "MidiTrack",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Midi Track",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:NoteAftertouch",
      "description": {
        "fct-descr": "\u003cp\u003ePolyphonic key pressure.\n\u003c/p\u003e\u003cpre\u003e A0 to AF (0 to F is channel number) * note * pressure_value\n\u003c/pre\u003e\u003cp\u003eChange of pressure applied to the synthesizer key. \n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "NoteAftertouch Word8 Word8 Word8",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiVoiceEvent",
        "fct-type": "function",
        "title": "NoteAftertouch"
      },
      "index": {
        "description": "Polyphonic key pressure A0 to AF to is channel number note pressure value Change of pressure applied to the synthesizer key",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "NoteAftertouch",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Note Aftertouch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:NoteOff",
      "description": {
        "fct-descr": "\u003cp\u003eNote off.\n\u003c/p\u003e\u003cpre\u003e 80 to 8F (0 to F is channel number) * note * velocity\n\u003c/pre\u003e\u003cp\u003eTurn off a sounding note.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "NoteOff Word8 Word8 Word8",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiVoiceEvent",
        "fct-type": "function",
        "title": "NoteOff"
      },
      "index": {
        "description": "Note off to to is channel number note velocity Turn off sounding note",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "NoteOff",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Note Off",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:NoteOn",
      "description": {
        "fct-descr": "\u003cp\u003eNote on.\n\u003c/p\u003e\u003cpre\u003e 90 to 9F (0 to F is channel number) * note * velocity\n\u003c/pre\u003e\u003cp\u003eStart playing a note.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "NoteOn Word8 Word8 Word8",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiVoiceEvent",
        "fct-type": "function",
        "title": "NoteOn"
      },
      "index": {
        "description": "Note on to to is channel number note velocity Start playing note",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "NoteOn",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Note On",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:PitchBend",
      "description": {
        "fct-descr": "\u003cp\u003ePitch bend \n\u003c/p\u003e\u003cpre\u003e E0 to EF (0 to F is channel number) * value\n\u003c/pre\u003e\u003cp\u003eChange the pitch of a sounding note. Often used to \n approximate microtonal tunings.\n\u003c/p\u003e\u003cp\u003eNOTE - currently value is uninterpreted.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "PitchBend Word8 Word16",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiVoiceEvent",
        "fct-type": "function",
        "title": "PitchBend"
      },
      "index": {
        "description": "Pitch bend E0 to EF to is channel number value Change the pitch of sounding note Often used to approximate microtonal tunings NOTE currently value is uninterpreted",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "PitchBend",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Pitch Bend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:ProgramChange",
      "description": {
        "fct-descr": "\u003cp\u003eSet the program.\n\u003c/p\u003e\u003cpre\u003e C0 to CF (0 to F is channel number) * program_number \n\u003c/pre\u003e\u003cp\u003eChange the instrument \n playing on the specified channel. For playback on \n computers (rather than synthesizers) the program numbers\n will correspond to the \u003cem\u003eGeneral MIDI\u003c/em\u003e instrument numbers.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "ProgramChange Word8 Word8",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiVoiceEvent",
        "fct-type": "function",
        "title": "ProgramChange"
      },
      "index": {
        "description": "Set the program C0 to CF to is channel number program number Change the instrument playing on the specified channel For playback on computers rather than synthesizers the program numbers will correspond to the General MIDI instrument numbers",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "ProgramChange",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Program Change",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:QuarterFrame",
      "description": {
        "fct-descr": "\u003cp\u003eTime code quarter frame.\n\u003c/p\u003e\u003cpre\u003e F1 * payload\n\u003c/pre\u003e\u003cp\u003eNote the payload is really a byte split into two 4-bit \n values, however here it is uninterpreted.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "QuarterFrame Word8",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiSysCommonEvent",
        "fct-type": "function",
        "title": "QuarterFrame"
      },
      "index": {
        "description": "Time code quarter frame F1 payload Note the payload is really byte split into two bit values however here it is uninterpreted",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "QuarterFrame",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Quarter Frame",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:RS_OFF",
      "description": {
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "RS_OFF",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiRunningStatus",
        "fct-type": "function",
        "title": "RS_OFF"
      },
      "index": {
        "description": "",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "RS_OFF",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "RS OFF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:RS_ON",
      "description": {
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "RS_ON",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiRunningStatus",
        "fct-type": "function",
        "title": "RS_ON"
      },
      "index": {
        "description": "",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "RS_ON",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "RS ON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SCALE_OTHER",
      "description": {
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "SCALE_OTHER Word8",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiScaleType",
        "fct-type": "function",
        "title": "SCALE_OTHER"
      },
      "index": {
        "description": "",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "SCALE_OTHER",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "SCALE OTHER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SEQUENCE_NAME",
      "description": {
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "SEQUENCE_NAME",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiTextType",
        "fct-type": "function",
        "title": "SEQUENCE_NAME"
      },
      "index": {
        "description": "",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "SEQUENCE_NAME",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "SEQUENCE NAME",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SMPTEOffset",
      "description": {
        "fct-descr": "\u003cp\u003eSMPTE offest\n\u003c/p\u003e\u003cpre\u003e FF 54 05 * hour * minute * second * frac * subfrac\n\u003c/pre\u003e\u003cp\u003eThe SMPTE time when a track should start. This event \n should occur at the start of a track, before any non-zero \n time events.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "SMPTEOffset Word8 Word8 Word8 Word8 Word8",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiMetaEvent",
        "fct-type": "function",
        "title": "SMPTEOffset"
      },
      "index": {
        "description": "SMPTE offest FF hour minute second frac subfrac The SMPTE time when track should start This event should occur at the start of track before any non-zero time events",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "SMPTEOffset",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "SMPTEOffset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SSME",
      "description": {
        "fct-descr": "\u003cp\u003eSSME \n\u003c/p\u003e\u003cpre\u003e FF 7F * length * data\n\u003c/pre\u003e\u003cp\u003eSequencer specific meta-event - uninterpreted.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "SSME Word32 [Word8]",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiMetaEvent",
        "fct-type": "function",
        "title": "SSME"
      },
      "index": {
        "description": "SSME FF length data Sequencer specific meta-event uninterpreted",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "SSME",
        "normalized": "SSME Word[Word]",
        "package": "zmidi-core",
        "partial": "SSME",
        "signature": "SSME Word[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SequenceNumber",
      "description": {
        "fct-descr": "\u003cp\u003eSequence Number \n\u003c/p\u003e\u003cpre\u003e FF 00 02 * value\n\u003c/pre\u003e\u003cp\u003eFormat 1 files - only track 1 should have a sequence \n number. \n\u003c/p\u003e\u003cp\u003eFormat 2 files - a sequence number should identify each \n track.\n\u003c/p\u003e\u003cp\u003eThe sequence number event should occur at the start of a \n track, before any non-zero time events.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "SequenceNumber Word16",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiMetaEvent",
        "fct-type": "function",
        "title": "SequenceNumber"
      },
      "index": {
        "description": "Sequence Number FF value Format files only track should have sequence number Format files sequence number should identify each track The sequence number event should occur at the start of track before any non-zero time events",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "SequenceNumber",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Sequence Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SetTempo",
      "description": {
        "fct-descr": "\u003cp\u003eSet tempo\n\u003c/p\u003e\u003cpre\u003e FF 51 03 * microseconds_per_quarter_note\n\u003c/pre\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "SetTempo Word32",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiMetaEvent",
        "fct-type": "function",
        "title": "SetTempo"
      },
      "index": {
        "description": "Set tempo FF microseconds per quarter note",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "SetTempo",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Set Tempo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SongPosPointer",
      "description": {
        "fct-descr": "\u003cp\u003eSong position pointer.\n\u003c/p\u003e\u003cpre\u003e F2 * lsb * msb\n\u003c/pre\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "SongPosPointer Word8 Word8",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiSysCommonEvent",
        "fct-type": "function",
        "title": "SongPosPointer"
      },
      "index": {
        "description": "Song position pointer F2 lsb msb",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "SongPosPointer",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Song Pos Pointer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SongSelect",
      "description": {
        "fct-descr": "\u003cp\u003eSong number.\n\u003c/p\u003e\u003cpre\u003e F3 * song_number\n\u003c/pre\u003e\u003cp\u003eSong number should be in the range 0..127.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "SongSelect Word8",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiSysCommonEvent",
        "fct-type": "function",
        "title": "SongSelect"
      },
      "index": {
        "description": "Song number F3 song number Song number should be in the range",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "SongSelect",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Song Select",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:StartSequence",
      "description": {
        "fct-descr": "\u003cp\u003eStart playing a sequence.\n\u003c/p\u003e\u003cpre\u003e FA\n\u003c/pre\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "StartSequence",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiSysRealTimeEvent",
        "fct-type": "function",
        "title": "StartSequence"
      },
      "index": {
        "description": "Start playing sequence FA",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "StartSequence",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Start Sequence",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:StopSequence",
      "description": {
        "fct-descr": "\u003cp\u003eStop playing a sequence.\n\u003c/p\u003e\u003cpre\u003e FC\n\u003c/pre\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "StopSequence",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiSysRealTimeEvent",
        "fct-type": "function",
        "title": "StopSequence"
      },
      "index": {
        "description": "Stop playing sequence FC",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "StopSequence",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Stop Sequence",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SysCommonEvent",
      "description": {
        "fct-descr": "\u003cp\u003eSysCommon - system common event.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "SysCommonEvent MidiSysCommonEvent",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiEvent",
        "fct-type": "function",
        "title": "SysCommonEvent"
      },
      "index": {
        "description": "SysCommon system common event",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "SysCommonEvent",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Sys Common Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SysExCont",
      "description": {
        "fct-descr": "\u003cp\u003eSysEx sent as (non-standard) multiple continuation \n packets.\n\u003c/p\u003e\u003cpre\u003e F0 * length * packet1 ... [SysExContPacket]\n\u003c/pre\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "SysExCont Word32 [Word8] [MidiSysExContPacket]",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiSysExEvent",
        "fct-type": "function",
        "title": "SysExCont"
      },
      "index": {
        "description": "SysEx sent as non-standard multiple continuation packets F0 length packet1 SysExContPacket",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "SysExCont",
        "normalized": "SysExCont Word[Word][MidiSysExContPacket]",
        "package": "zmidi-core",
        "partial": "Sys Ex Cont",
        "signature": "SysExCont Word[Word][MidiSysExContPacket]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SysExEscape",
      "description": {
        "fct-descr": "\u003cp\u003eEscape sequence of one-or-more SysEx events.\n\u003c/p\u003e\u003cpre\u003e F7 * length * data\n\u003c/pre\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "SysExEscape Word32 [Word8]",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiSysExEvent",
        "fct-type": "function",
        "title": "SysExEscape"
      },
      "index": {
        "description": "Escape sequence of one-or-more SysEx events F7 length data",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "SysExEscape",
        "normalized": "SysExEscape Word[Word]",
        "package": "zmidi-core",
        "partial": "Sys Ex Escape",
        "signature": "SysExEscape Word[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SysExEvent",
      "description": {
        "fct-descr": "\u003cp\u003eSysEx - system exclusive event. Usually synthesizer \n specific, not interpreted.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "SysExEvent MidiSysExEvent",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiEvent",
        "fct-type": "function",
        "title": "SysExEvent"
      },
      "index": {
        "description": "SysEx system exclusive event Usually synthesizer specific not interpreted",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "SysExEvent",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Sys Ex Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SysExSingle",
      "description": {
        "fct-descr": "\u003cp\u003eSingle SysEx event.\n\u003c/p\u003e\u003cpre\u003e F0 * length * data\n\u003c/pre\u003e\u003cp\u003eAn uninterpreted sys-ex event.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "SysExSingle Word32 [Word8]",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiSysExEvent",
        "fct-type": "function",
        "title": "SysExSingle"
      },
      "index": {
        "description": "Single SysEx event F0 length data An uninterpreted sys-ex event",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "SysExSingle",
        "normalized": "SysExSingle Word[Word]",
        "package": "zmidi-core",
        "partial": "Sys Ex Single",
        "signature": "SysExSingle Word[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SysRealTimeEvent",
      "description": {
        "fct-descr": "\u003cp\u003eSysRealTime - system realtime event.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "SysRealTimeEvent MidiSysRealTimeEvent",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiEvent",
        "fct-type": "function",
        "title": "SysRealTimeEvent"
      },
      "index": {
        "description": "SysRealTime system realtime event",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "SysRealTimeEvent",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Sys Real Time Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:SystemReset",
      "description": {
        "fct-descr": "\u003cp\u003eReset to power-up status.\n\u003c/p\u003e\u003cpre\u003e FF\n\u003c/pre\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "SystemReset",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiSysRealTimeEvent",
        "fct-type": "function",
        "title": "SystemReset"
      },
      "index": {
        "description": "Reset to power-up status FF",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "SystemReset",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "System Reset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:TPB",
      "description": {
        "fct-descr": "\u003cp\u003eTicks-per-beat, i.e. the number of units for a quarter \n note.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "TPB Word16",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiTimeDivision",
        "fct-type": "function",
        "title": "TPB"
      },
      "index": {
        "description": "Ticks-per-beat i.e the number of units for quarter note",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "TPB",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "TPB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:TextEvent",
      "description": {
        "fct-descr": "\u003cp\u003eText / copywright etc.\n\u003c/p\u003e\u003cpre\u003e FF * text_type * contents\n\u003c/pre\u003e\u003cp\u003eFree text field (e.g. copyright statement). The contents \n can notionally be any length.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "TextEvent MidiTextType String",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiMetaEvent",
        "fct-type": "function",
        "title": "TextEvent"
      },
      "index": {
        "description": "Text copywright etc FF text type contents Free text field e.g copyright statement The contents can notionally be any length",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "TextEvent",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Text Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:TimeSignature",
      "description": {
        "fct-descr": "\u003cp\u003eTime signature \n\u003c/p\u003e\u003cpre\u003e FF 58 04 * numerator * denominator * metro * num_32nd_notes\n\u003c/pre\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "TimeSignature Word8 Word8 Word8 Word8",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiMetaEvent",
        "fct-type": "function",
        "title": "TimeSignature"
      },
      "index": {
        "description": "Time signature FF numerator denominator metro num nd notes",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "TimeSignature",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Time Signature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:TimingClock",
      "description": {
        "fct-descr": "\u003cp\u003eTiming signal.\n\u003c/p\u003e\u003cpre\u003e F8 \n\u003c/pre\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "TimingClock",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiSysRealTimeEvent",
        "fct-type": "function",
        "title": "TimingClock"
      },
      "index": {
        "description": "Timing signal F8",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "TimingClock",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Timing Clock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:TuneRequest",
      "description": {
        "fct-descr": "\u003cp\u003eTune request.\n\u003c/p\u003e\u003cpre\u003e F6\n\u003c/pre\u003e\u003cp\u003eTune request message for analogue synthesizers.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "TuneRequest",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiSysCommonEvent",
        "fct-type": "function",
        "title": "TuneRequest"
      },
      "index": {
        "description": "Tune request F6 Tune request message for analogue synthesizers",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "TuneRequest",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Tune Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:UndefinedF4",
      "description": {
        "fct-descr": "\u003cp\u003eUndefined system common event.\n\u003c/p\u003e\u003cpre\u003e F4\n\u003c/pre\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "UndefinedF4",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiSysCommonEvent",
        "fct-type": "function",
        "title": "UndefinedF4"
      },
      "index": {
        "description": "Undefined system common event F4",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "UndefinedF4",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Undefined",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:UndefinedF5",
      "description": {
        "fct-descr": "\u003cp\u003eUndefined system common event.\n\u003c/p\u003e\u003cpre\u003e F5\n\u003c/pre\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "UndefinedF5",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiSysCommonEvent",
        "fct-type": "function",
        "title": "UndefinedF5"
      },
      "index": {
        "description": "Undefined system common event F5",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "UndefinedF5",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Undefined",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:UndefinedF9",
      "description": {
        "fct-descr": "\u003cp\u003eUndefined real time event.\n\u003c/p\u003e\u003cpre\u003e F9\n\u003c/pre\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "UndefinedF9",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiSysRealTimeEvent",
        "fct-type": "function",
        "title": "UndefinedF9"
      },
      "index": {
        "description": "Undefined real time event F9",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "UndefinedF9",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Undefined",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:UndefinedFD",
      "description": {
        "fct-descr": "\u003cp\u003eUndefined real time event.\n\u003c/p\u003e\u003cpre\u003e FD\n\u003c/pre\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "UndefinedFD",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiSysRealTimeEvent",
        "fct-type": "function",
        "title": "UndefinedFD"
      },
      "index": {
        "description": "Undefined real time event FD",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "UndefinedFD",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Undefined FD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:VoiceEvent",
      "description": {
        "fct-descr": "\u003cp\u003eVoice event (e.g \u003ccode\u003enote-on\u003c/code\u003e, \u003ccode\u003enote-off\u003c/code\u003e) are relayed to \n specific channels. \n\u003c/p\u003e\u003cp\u003eNote - they are tagged with Running Status, this is \n pertinent to parsing MIDI where a input stream may use \n running status to save space. If you are generating MIDI\n use RunningStatus with caution and ensure that consecutive\n events are all of the same sort.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "VoiceEvent MidiRunningStatus MidiVoiceEvent",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiEvent",
        "fct-type": "function",
        "title": "VoiceEvent"
      },
      "index": {
        "description": "Voice event e.g note-on note-off are relayed to specific channels Note they are tagged with Running Status this is pertinent to parsing MIDI where input stream may use running status to save space If you are generating MIDI use RunningStatus with caution and ensure that consecutive events are all of the same sort",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "VoiceEvent",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Voice Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:getMidiDataOther",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "TagByte",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiDataOther",
        "fct-type": "function",
        "title": "getMidiDataOther"
      },
      "index": {
        "description": "",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "getMidiDataOther",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Midi Data Other",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:getTrackMessages",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "[MidiMessage]",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiTrack",
        "fct-type": "function",
        "title": "getTrackMessages"
      },
      "index": {
        "description": "",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "getTrackMessages",
        "normalized": "[MidiMessage]",
        "package": "zmidi-core",
        "partial": "Track Messages",
        "signature": "[MidiMessage]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:hdr_format",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "MidiFormat",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiHeader",
        "fct-type": "function",
        "title": "hdr_format"
      },
      "index": {
        "description": "",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "hdr_format",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:mf_header",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "MidiHeader",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiFile",
        "fct-type": "function",
        "title": "mf_header"
      },
      "index": {
        "description": "",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "mf_header",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:mf_tracks",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "[MidiTrack]",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiFile",
        "fct-type": "function",
        "title": "mf_tracks"
      },
      "index": {
        "description": "",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "mf_tracks",
        "normalized": "[MidiTrack]",
        "package": "zmidi-core",
        "partial": "",
        "signature": "[MidiTrack]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:num_tracks",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "Word16",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiHeader",
        "fct-type": "function",
        "title": "num_tracks"
      },
      "index": {
        "description": "",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "num_tracks",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Datatypes.html#v:time_division",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "ZMidi.Core.Datatypes",
        "fct-package": "zmidi-core",
        "fct-signature": "MidiTimeDivision",
        "fct-source": "src/ZMidi-Core-Datatypes.html#MidiHeader",
        "fct-type": "function",
        "title": "time_division"
      },
      "index": {
        "description": "",
        "hierarchy": "ZMidi Core Datatypes",
        "module": "ZMidi.Core.Datatypes",
        "name": "time_division",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Ascii.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty print MIDI in format based on the \u003cem\u003eASCII format\u003c/em\u003e\n in the book \u003cem\u003eBeyond MIDI\u003c/em\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ZMidi.Core.Pretty.Ascii",
        "fct-package": "zmidi-core",
        "fct-signature": "module",
        "fct-source": "src/ZMidi-Core-Pretty-Ascii.html",
        "fct-type": "module",
        "title": "Ascii"
      },
      "index": {
        "description": "Pretty print MIDI in format based on the ASCII format in the book Beyond MIDI",
        "hierarchy": "ZMidi Core Pretty Ascii",
        "module": "ZMidi.Core.Pretty.Ascii",
        "name": "Ascii",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Ascii",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Ascii.html#v:printAscii",
      "description": {
        "fct-descr": "\u003cp\u003ePrint the MIDI file to a list of Strings (ASCII format based\n on output in the book Beyond MIDI).\n\u003c/p\u003e\u003cp\u003eResults are returned as a list of String to avoid extraneous\n concatenation.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Pretty.Ascii",
        "fct-package": "zmidi-core",
        "fct-signature": "MidiFile -\u003e [String]",
        "fct-source": "src/ZMidi-Core-Pretty-Ascii.html#printAscii",
        "fct-type": "function",
        "title": "printAscii"
      },
      "index": {
        "description": "Print the MIDI file to list of Strings ASCII format based on output in the book Beyond MIDI Results are returned as list of String to avoid extraneous concatenation",
        "hierarchy": "ZMidi Core Pretty Ascii",
        "module": "ZMidi.Core.Pretty.Ascii",
        "name": "printAscii",
        "normalized": "MidiFile-\u003e[String]",
        "package": "zmidi-core",
        "partial": "Ascii",
        "signature": "MidiFile-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Ascii.html#v:putAscii",
      "description": {
        "fct-descr": "\u003cp\u003ePrint the MIDI file to stdout (ASCII format based on \n output in the book Beyond MIDI).\n\u003c/p\u003e\u003cp\u003eOne event is printed per line, so the output may be large.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Pretty.Ascii",
        "fct-package": "zmidi-core",
        "fct-signature": "MidiFile -\u003e IO ()",
        "fct-source": "src/ZMidi-Core-Pretty-Ascii.html#putAscii",
        "fct-type": "function",
        "title": "putAscii"
      },
      "index": {
        "description": "Print the MIDI file to stdout ASCII format based on output in the book Beyond MIDI One event is printed per line so the output may be large",
        "hierarchy": "ZMidi Core Pretty Ascii",
        "module": "ZMidi.Core.Pretty.Ascii",
        "name": "putAscii",
        "normalized": "MidiFile-\u003eIO()",
        "package": "zmidi-core",
        "partial": "Ascii",
        "signature": "MidiFile-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Csv.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty print MIDI to CVS format based on \u003ccode\u003emidicsv\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ZMidi.Core.Pretty.Csv",
        "fct-package": "zmidi-core",
        "fct-signature": "module",
        "fct-source": "src/ZMidi-Core-Pretty-Csv.html",
        "fct-type": "module",
        "title": "Csv"
      },
      "index": {
        "description": "Pretty print MIDI to CVS format based on midicsv",
        "hierarchy": "ZMidi Core Pretty Csv",
        "module": "ZMidi.Core.Pretty.Csv",
        "name": "Csv",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Csv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Csv.html#v:printCsv",
      "description": {
        "fct-descr": "\u003cp\u003ePrint the MIDI file to a list of Strings (CSV format).\n\u003c/p\u003e\u003cp\u003eResults are returned as a list of String to avoid extraneous\n concatenation.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Pretty.Csv",
        "fct-package": "zmidi-core",
        "fct-signature": "MidiFile -\u003e [String]",
        "fct-source": "src/ZMidi-Core-Pretty-Csv.html#printCsv",
        "fct-type": "function",
        "title": "printCsv"
      },
      "index": {
        "description": "Print the MIDI file to list of Strings CSV format Results are returned as list of String to avoid extraneous concatenation",
        "hierarchy": "ZMidi Core Pretty Csv",
        "module": "ZMidi.Core.Pretty.Csv",
        "name": "printCsv",
        "normalized": "MidiFile-\u003e[String]",
        "package": "zmidi-core",
        "partial": "Csv",
        "signature": "MidiFile-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Csv.html#v:putCsv",
      "description": {
        "fct-descr": "\u003cp\u003ePrint the MIDI file to stdout (CSV format).\n\u003c/p\u003e\u003cp\u003eOne event is printed per line, so the output may be large.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Pretty.Csv",
        "fct-package": "zmidi-core",
        "fct-signature": "MidiFile -\u003e IO ()",
        "fct-source": "src/ZMidi-Core-Pretty-Csv.html#putCsv",
        "fct-type": "function",
        "title": "putCsv"
      },
      "index": {
        "description": "Print the MIDI file to stdout CSV format One event is printed per line so the output may be large",
        "hierarchy": "ZMidi Core Pretty Csv",
        "module": "ZMidi.Core.Pretty.Csv",
        "name": "putCsv",
        "normalized": "MidiFile-\u003eIO()",
        "package": "zmidi-core",
        "partial": "Csv",
        "signature": "MidiFile-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHelper functions to pretty print MIDI as text.\n\u003c/p\u003e\u003cp\u003eThe functionality is unstable and may change between \n releases however it is still exposed as it may be useful\n for writing a custom pretty printer. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ZMidi.Core.Pretty.Internal",
        "fct-package": "zmidi-core",
        "fct-signature": "module",
        "fct-source": "src/ZMidi-Core-Pretty-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "Helper functions to pretty print MIDI as text The functionality is unstable and may change between releases however it is still exposed as it may be useful for writing custom pretty printer",
        "hierarchy": "ZMidi Core Pretty Internal",
        "module": "ZMidi.Core.Pretty.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Internal.html#v:byteList",
      "description": {
        "fct-descr": "\u003cp\u003ePrint a short byte-list as Hex. Byte-lists longer than \n 10 chars are printed as ellipses.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Pretty.Internal",
        "fct-package": "zmidi-core",
        "fct-signature": "a -\u003e [Word8] -\u003e WString",
        "fct-source": "src/ZMidi-Core-Pretty-Internal.html#byteList",
        "fct-type": "function",
        "title": "byteList"
      },
      "index": {
        "description": "Print short byte-list as Hex Byte-lists longer than chars are printed as ellipses",
        "hierarchy": "ZMidi Core Pretty Internal",
        "module": "ZMidi.Core.Pretty.Internal",
        "name": "byteList",
        "normalized": "a-\u003e[Word]-\u003eWString",
        "package": "zmidi-core",
        "partial": "List",
        "signature": "a-\u003e[Word]-\u003eWString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Internal.html#v:midi_header_columns",
      "description": {
        "fct-descr": "\u003cp\u003eColumn specs for Header - Header is printed as simple \n name-value pairs (2 columns).\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Pretty.Internal",
        "fct-package": "zmidi-core",
        "fct-signature": "ColumnSpecs",
        "fct-source": "src/ZMidi-Core-Pretty-Internal.html#midi_header_columns",
        "fct-type": "function",
        "title": "midi_header_columns"
      },
      "index": {
        "description": "Column specs for Header Header is printed as simple name-value pairs columns",
        "hierarchy": "ZMidi Core Pretty Internal",
        "module": "ZMidi.Core.Pretty.Internal",
        "name": "midi_header_columns",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Internal.html#v:safeString",
      "description": {
        "fct-descr": "\u003cp\u003eMake a string safe for stdout.\n\u003c/p\u003e\u003cp\u003eThis is a temporary hack - characters above ASCII 163\n cause an (invalid character) error when written to stdout \n on Windows (Cygwin).\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Pretty.Internal",
        "fct-package": "zmidi-core",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/ZMidi-Core-Pretty-Internal.html#safeString",
        "fct-type": "function",
        "title": "safeString"
      },
      "index": {
        "description": "Make string safe for stdout This is temporary hack characters above ASCII cause an invalid character error when written to stdout on Windows Cygwin",
        "hierarchy": "ZMidi Core Pretty Internal",
        "module": "ZMidi.Core.Pretty.Internal",
        "name": "safeString",
        "normalized": "String-\u003eString",
        "package": "zmidi-core",
        "partial": "String",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Internal.html#v:tellMidiHeader",
      "description": {
        "fct-descr": "\u003cp\u003eLog the MidiHeader in the Table monad (cf. Writer).\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Pretty.Internal",
        "fct-package": "zmidi-core",
        "fct-signature": "MidiHeader -\u003e Table ()",
        "fct-source": "src/ZMidi-Core-Pretty-Internal.html#tellMidiHeader",
        "fct-type": "function",
        "title": "tellMidiHeader"
      },
      "index": {
        "description": "Log the MidiHeader in the Table monad cf Writer",
        "hierarchy": "ZMidi Core Pretty Internal",
        "module": "ZMidi.Core.Pretty.Internal",
        "name": "tellMidiHeader",
        "normalized": "MidiHeader-\u003eTable()",
        "package": "zmidi-core",
        "partial": "Midi Header",
        "signature": "MidiHeader-\u003eTable()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Internal.html#v:textType",
      "description": {
        "fct-descr": "\u003cp\u003eDecode Text Type\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Pretty.Internal",
        "fct-package": "zmidi-core",
        "fct-signature": "MidiTextType -\u003e String",
        "fct-source": "src/ZMidi-Core-Pretty-Internal.html#textType",
        "fct-type": "function",
        "title": "textType"
      },
      "index": {
        "description": "Decode Text Type",
        "hierarchy": "ZMidi Core Pretty Internal",
        "module": "ZMidi.Core.Pretty.Internal",
        "name": "textType",
        "normalized": "MidiTextType-\u003eString",
        "package": "zmidi-core",
        "partial": "Type",
        "signature": "MidiTextType-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Interp.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHelper functions to pretty print MIDI as text.\n\u003c/p\u003e\u003cp\u003eThe functionality is unstable and may change between \n releases however it is still exposed as it may be useful\n for writing a custom pretty printer. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ZMidi.Core.Pretty.Interp",
        "fct-package": "zmidi-core",
        "fct-signature": "module",
        "fct-source": "src/ZMidi-Core-Pretty-Interp.html",
        "fct-type": "module",
        "title": "Interp"
      },
      "index": {
        "description": "Helper functions to pretty print MIDI as text The functionality is unstable and may change between releases however it is still exposed as it may be useful for writing custom pretty printer",
        "hierarchy": "ZMidi Core Pretty Interp",
        "module": "ZMidi.Core.Pretty.Interp",
        "name": "Interp",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Interp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Interp.html#t:ScaleMap",
      "description": {
        "fct-descr": "\u003cp\u003eRepresentation of scales mapping the number of accidentals \n to (major,minor) key names.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Pretty.Interp",
        "fct-package": "zmidi-core",
        "fct-signature": "type",
        "fct-source": "src/ZMidi-Core-Pretty-Interp.html#ScaleMap",
        "fct-type": "type",
        "title": "ScaleMap"
      },
      "index": {
        "description": "Representation of scales mapping the number of accidentals to major minor key names",
        "hierarchy": "ZMidi Core Pretty Interp",
        "module": "ZMidi.Core.Pretty.Interp",
        "name": "ScaleMap",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Scale Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Interp.html#v:majorScaleName",
      "description": {
        "fct-descr": "\u003cp\u003eDecode major scale name.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Pretty.Interp",
        "fct-package": "zmidi-core",
        "fct-signature": "Int -\u003e Maybe String",
        "fct-source": "src/ZMidi-Core-Pretty-Interp.html#majorScaleName",
        "fct-type": "function",
        "title": "majorScaleName"
      },
      "index": {
        "description": "Decode major scale name",
        "hierarchy": "ZMidi Core Pretty Interp",
        "module": "ZMidi.Core.Pretty.Interp",
        "name": "majorScaleName",
        "normalized": "Int-\u003eMaybe String",
        "package": "zmidi-core",
        "partial": "Scale Name",
        "signature": "Int-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Interp.html#v:midiScaleName",
      "description": {
        "fct-descr": "\u003cp\u003eDecode scale name.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Pretty.Interp",
        "fct-package": "zmidi-core",
        "fct-signature": "MidiScaleType -\u003e Int -\u003e Maybe String",
        "fct-source": "src/ZMidi-Core-Pretty-Interp.html#midiScaleName",
        "fct-type": "function",
        "title": "midiScaleName"
      },
      "index": {
        "description": "Decode scale name",
        "hierarchy": "ZMidi Core Pretty Interp",
        "module": "ZMidi.Core.Pretty.Interp",
        "name": "midiScaleName",
        "normalized": "MidiScaleType-\u003eInt-\u003eMaybe String",
        "package": "zmidi-core",
        "partial": "Scale Name",
        "signature": "MidiScaleType-\u003eInt-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Interp.html#v:minorScaleName",
      "description": {
        "fct-descr": "\u003cp\u003eDecode minor scale name.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Pretty.Interp",
        "fct-package": "zmidi-core",
        "fct-signature": "Int -\u003e Maybe String",
        "fct-source": "src/ZMidi-Core-Pretty-Interp.html#minorScaleName",
        "fct-type": "function",
        "title": "minorScaleName"
      },
      "index": {
        "description": "Decode minor scale name",
        "hierarchy": "ZMidi Core Pretty Interp",
        "module": "ZMidi.Core.Pretty.Interp",
        "name": "minorScaleName",
        "normalized": "Int-\u003eMaybe String",
        "package": "zmidi-core",
        "partial": "Scale Name",
        "signature": "Int-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Interp.html#v:scale_map",
      "description": {
        "fct-descr": "\u003cp\u003ePopulated ScaleMap.\n\u003c/p\u003e\u003cp\u003ePositive numbers are number of sharps\n Negative numbers are number of flats.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Pretty.Interp",
        "fct-package": "zmidi-core",
        "fct-signature": "ScaleMap",
        "fct-source": "src/ZMidi-Core-Pretty-Interp.html#scale_map",
        "fct-type": "function",
        "title": "scale_map"
      },
      "index": {
        "description": "Populated ScaleMap Positive numbers are number of sharps Negative numbers are number of flats",
        "hierarchy": "ZMidi Core Pretty Interp",
        "module": "ZMidi.Core.Pretty.Interp",
        "name": "scale_map",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Interp.html#v:simpleNoteName",
      "description": {
        "fct-descr": "\u003cp\u003eDecode simple note name.\n\u003c/p\u003e\u003cp\u003eFollows the example of the book \u003cem\u003eBeyond MIDI\u003c/em\u003e - there is \n no enharmonic spelling, all black key notes are named as \n their respective sharp note.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Pretty.Interp",
        "fct-package": "zmidi-core",
        "fct-signature": "Int -\u003e String",
        "fct-source": "src/ZMidi-Core-Pretty-Interp.html#simpleNoteName",
        "fct-type": "function",
        "title": "simpleNoteName"
      },
      "index": {
        "description": "Decode simple note name Follows the example of the book Beyond MIDI there is no enharmonic spelling all black key notes are named as their respective sharp note",
        "hierarchy": "ZMidi Core Pretty Interp",
        "module": "ZMidi.Core.Pretty.Interp",
        "name": "simpleNoteName",
        "normalized": "Int-\u003eString",
        "package": "zmidi-core",
        "partial": "Note Name",
        "signature": "Int-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Interp.html#v:timeSignature",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a time signature.\n\u003c/p\u003e\u003cp\u003eReturned as (numerator, denoimator) pair.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Pretty.Interp",
        "fct-package": "zmidi-core",
        "fct-signature": "Int -\u003e Int -\u003e (Int, Int)",
        "fct-source": "src/ZMidi-Core-Pretty-Interp.html#timeSignature",
        "fct-type": "function",
        "title": "timeSignature"
      },
      "index": {
        "description": "Decode time signature Returned as numerator denoimator pair",
        "hierarchy": "ZMidi Core Pretty Interp",
        "module": "ZMidi.Core.Pretty.Interp",
        "name": "timeSignature",
        "normalized": "Int-\u003eInt-\u003e(Int,Int)",
        "package": "zmidi-core",
        "partial": "Signature",
        "signature": "Int-\u003eInt-\u003e(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty-Interp.html#v:timeSignatureName",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a time signature - and print.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Pretty.Interp",
        "fct-package": "zmidi-core",
        "fct-signature": "Int -\u003e Int -\u003e String",
        "fct-source": "src/ZMidi-Core-Pretty-Interp.html#timeSignatureName",
        "fct-type": "function",
        "title": "timeSignatureName"
      },
      "index": {
        "description": "Decode time signature and print",
        "hierarchy": "ZMidi Core Pretty Interp",
        "module": "ZMidi.Core.Pretty.Interp",
        "name": "timeSignatureName",
        "normalized": "Int-\u003eInt-\u003eString",
        "package": "zmidi-core",
        "partial": "Signature Name",
        "signature": "Int-\u003eInt-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty print the MIDI representation.\n\u003c/p\u003e\u003cp\u003eThe output format is lossy - the content of Meta and SysEx \n events may be abbreviated. This makes the format unsuitable \n as a text representation of MIDI, however it can enable\n quick \u003cem\u003edisassembly\u003c/em\u003e of MIDI files in order to see the note\n events.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ZMidi.Core.Pretty",
        "fct-package": "zmidi-core",
        "fct-signature": "module",
        "fct-source": "src/ZMidi-Core-Pretty.html",
        "fct-type": "module",
        "title": "Pretty"
      },
      "index": {
        "description": "Pretty print the MIDI representation The output format is lossy the content of Meta and SysEx events may be abbreviated This makes the format unsuitable as text representation of MIDI however it can enable quick disassembly of MIDI files in order to see the note events",
        "hierarchy": "ZMidi Core Pretty",
        "module": "ZMidi.Core.Pretty",
        "name": "Pretty",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Pretty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty.html#v:printMidi",
      "description": {
        "fct-descr": "\u003cp\u003ePrint the MIDI file to a list of Strings.\n\u003c/p\u003e\u003cp\u003eResults are returned as a list of String to avoid extraneous\n concatenation.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Pretty",
        "fct-package": "zmidi-core",
        "fct-signature": "MidiFile -\u003e [String]",
        "fct-source": "src/ZMidi-Core-Pretty.html#printMidi",
        "fct-type": "function",
        "title": "printMidi"
      },
      "index": {
        "description": "Print the MIDI file to list of Strings Results are returned as list of String to avoid extraneous concatenation",
        "hierarchy": "ZMidi Core Pretty",
        "module": "ZMidi.Core.Pretty",
        "name": "printMidi",
        "normalized": "MidiFile-\u003e[String]",
        "package": "zmidi-core",
        "partial": "Midi",
        "signature": "MidiFile-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty.html#v:printMidiHeader",
      "description": {
        "fct-descr": "\u003cp\u003ePrint the MIDI header.\n\u003c/p\u003e\u003cp\u003eResults are returned as a list of String to avoid extraneous\n concatenation.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Pretty",
        "fct-package": "zmidi-core",
        "fct-signature": "MidiFile -\u003e [String]",
        "fct-source": "src/ZMidi-Core-Pretty.html#printMidiHeader",
        "fct-type": "function",
        "title": "printMidiHeader"
      },
      "index": {
        "description": "Print the MIDI header Results are returned as list of String to avoid extraneous concatenation",
        "hierarchy": "ZMidi Core Pretty",
        "module": "ZMidi.Core.Pretty",
        "name": "printMidiHeader",
        "normalized": "MidiFile-\u003e[String]",
        "package": "zmidi-core",
        "partial": "Midi Header",
        "signature": "MidiFile-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty.html#v:printMidiTrack",
      "description": {
        "fct-descr": "\u003cp\u003ePrint a track.\n\u003c/p\u003e\u003cp\u003eResults are returned as a list of String to avoid extraneous\n concatenation.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Pretty",
        "fct-package": "zmidi-core",
        "fct-signature": "Int -\u003e MidiFile -\u003e [String]",
        "fct-source": "src/ZMidi-Core-Pretty.html#printMidiTrack",
        "fct-type": "function",
        "title": "printMidiTrack"
      },
      "index": {
        "description": "Print track Results are returned as list of String to avoid extraneous concatenation",
        "hierarchy": "ZMidi Core Pretty",
        "module": "ZMidi.Core.Pretty",
        "name": "printMidiTrack",
        "normalized": "Int-\u003eMidiFile-\u003e[String]",
        "package": "zmidi-core",
        "partial": "Midi Track",
        "signature": "Int-\u003eMidiFile-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-Pretty.html#v:putMidi",
      "description": {
        "fct-descr": "\u003cp\u003ePrint the MIDI file to stdout.\n\u003c/p\u003e\u003cp\u003eOne event is printed per line, so the output may be large.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.Pretty",
        "fct-package": "zmidi-core",
        "fct-signature": "MidiFile -\u003e IO ()",
        "fct-source": "src/ZMidi-Core-Pretty.html#putMidi",
        "fct-type": "function",
        "title": "putMidi"
      },
      "index": {
        "description": "Print the MIDI file to stdout One event is printed per line so the output may be large",
        "hierarchy": "ZMidi Core Pretty",
        "module": "ZMidi.Core.Pretty",
        "name": "putMidi",
        "normalized": "MidiFile-\u003eIO()",
        "package": "zmidi-core",
        "partial": "Midi",
        "signature": "MidiFile-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-ReadFile.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA top down (Parsec style) MIDI file parser. \n\u003c/p\u003e\u003cp\u003eFor valid input, the parser should parse without error \n (i.e all cases of event types are fully enumerated). \n Malformed input (syntactically bad events, or truncated data) \n will cause fatal parse errors.\n\u003c/p\u003e\u003cp\u003eNote - the parser returns a \u003cem\u003eliteral\u003c/em\u003e result if the input \n uses Running Status, i.e, - the answer matches the input - \n where running status uses a NoteOn event with velocity 0 to \n stand for a NoteOff, the parser likewise returns a Note-On. \n Use the \u003ccode\u003eZMidi.Core.Canonical\u003c/code\u003e to translate the input to \n canonical form where note-offs are encoded directly with \n NoteOff.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ZMidi.Core.ReadFile",
        "fct-package": "zmidi-core",
        "fct-signature": "module",
        "fct-source": "src/ZMidi-Core-ReadFile.html",
        "fct-type": "module",
        "title": "ReadFile"
      },
      "index": {
        "description": "top down Parsec style MIDI file parser For valid input the parser should parse without error i.e all cases of event types are fully enumerated Malformed input syntactically bad events or truncated data will cause fatal parse errors Note the parser returns literal result if the input uses Running Status i.e the answer matches the input where running status uses NoteOn event with velocity to stand for NoteOff the parser likewise returns Note-On Use the ZMidi.Core.Canonical to translate the input to canonical form where note-offs are encoded directly with NoteOff",
        "hierarchy": "ZMidi Core ReadFile",
        "module": "ZMidi.Core.ReadFile",
        "name": "ReadFile",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Read File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-ReadFile.html#t:ErrMsg",
      "description": {
        "fct-descr": "\u003cp\u003eError message - alias for String.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.ReadFile",
        "fct-package": "zmidi-core",
        "fct-signature": "type",
        "fct-source": "src/ZMidi-Core-Internal-ParserMonad.html#ErrMsg",
        "fct-type": "type",
        "title": "ErrMsg"
      },
      "index": {
        "description": "Error message alias for String",
        "hierarchy": "ZMidi Core ReadFile",
        "module": "ZMidi.Core.ReadFile",
        "name": "ErrMsg",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Err Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-ReadFile.html#t:ParseErr",
      "description": {
        "fct-descr": "\u003cp\u003eParseErr is the position of the error and a message.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.ReadFile",
        "fct-package": "zmidi-core",
        "fct-signature": "data",
        "fct-source": "src/ZMidi-Core-Internal-ParserMonad.html#ParseErr",
        "fct-type": "data",
        "title": "ParseErr"
      },
      "index": {
        "description": "ParseErr is the position of the error and message",
        "hierarchy": "ZMidi Core ReadFile",
        "module": "ZMidi.Core.ReadFile",
        "name": "ParseErr",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Parse Err",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-ReadFile.html#t:Pos",
      "description": {
        "fct-descr": "\u003cp\u003ePosition of the parser in the input stream.\n\u003c/p\u003e\u003cp\u003eThis is exposed by the ReadFile API and may be useful for \n \u003cem\u003edisassembling\u003c/em\u003e a MIDI file that causes a parse failure.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.ReadFile",
        "fct-package": "zmidi-core",
        "fct-signature": "type",
        "fct-source": "src/ZMidi-Core-Internal-ParserMonad.html#Pos",
        "fct-type": "type",
        "title": "Pos"
      },
      "index": {
        "description": "Position of the parser in the input stream This is exposed by the ReadFile API and may be useful for disassembling MIDI file that causes parse failure",
        "hierarchy": "ZMidi Core ReadFile",
        "module": "ZMidi.Core.ReadFile",
        "name": "Pos",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Pos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-ReadFile.html#v:ParseErr",
      "description": {
        "fct-module": "ZMidi.Core.ReadFile",
        "fct-package": "zmidi-core",
        "fct-signature": "ParseErr !Pos !ErrMsg",
        "fct-source": "src/ZMidi-Core-Internal-ParserMonad.html#ParseErr",
        "fct-type": "function",
        "title": "ParseErr"
      },
      "index": {
        "description": "",
        "hierarchy": "ZMidi Core ReadFile",
        "module": "ZMidi.Core.ReadFile",
        "name": "ParseErr",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Parse Err",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-ReadFile.html#v:readMidi",
      "description": {
        "fct-descr": "\u003cp\u003eRead a well formed MIDI file. \n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.ReadFile",
        "fct-package": "zmidi-core",
        "fct-signature": "FilePath -\u003e IO (Either ParseErr MidiFile)",
        "fct-source": "src/ZMidi-Core-ReadFile.html#readMidi",
        "fct-type": "function",
        "title": "readMidi"
      },
      "index": {
        "description": "Read well formed MIDI file",
        "hierarchy": "ZMidi Core ReadFile",
        "module": "ZMidi.Core.ReadFile",
        "name": "readMidi",
        "normalized": "FilePath-\u003eIO(Either ParseErr MidiFile)",
        "package": "zmidi-core",
        "partial": "Midi",
        "signature": "FilePath-\u003eIO(Either ParseErr MidiFile)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-VersionNumber.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion number\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ZMidi.Core.VersionNumber",
        "fct-package": "zmidi-core",
        "fct-signature": "module",
        "fct-source": "src/ZMidi-Core-VersionNumber.html",
        "fct-type": "module",
        "title": "VersionNumber"
      },
      "index": {
        "description": "Version number",
        "hierarchy": "ZMidi Core VersionNumber",
        "module": "ZMidi.Core.VersionNumber",
        "name": "VersionNumber",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Version Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-VersionNumber.html#v:zmidi_core_version",
      "description": {
        "fct-descr": "\u003cp\u003eVersion number\n\u003c/p\u003e\u003cpre\u003e (0,7,0)\n\u003c/pre\u003e",
        "fct-module": "ZMidi.Core.VersionNumber",
        "fct-package": "zmidi-core",
        "fct-signature": "(Int, Int, Int)",
        "fct-source": "src/ZMidi-Core-VersionNumber.html#zmidi_core_version",
        "fct-type": "function",
        "title": "zmidi_core_version"
      },
      "index": {
        "description": "Version number",
        "hierarchy": "ZMidi Core VersionNumber",
        "module": "ZMidi.Core.VersionNumber",
        "name": "zmidi_core_version",
        "normalized": "(Int,Int,Int)",
        "package": "zmidi-core",
        "partial": "",
        "signature": "(Int,Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-WriteFile.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWrite a MIDI file.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ZMidi.Core.WriteFile",
        "fct-package": "zmidi-core",
        "fct-signature": "module",
        "fct-source": "src/ZMidi-Core-WriteFile.html",
        "fct-type": "module",
        "title": "WriteFile"
      },
      "index": {
        "description": "Write MIDI file",
        "hierarchy": "ZMidi Core WriteFile",
        "module": "ZMidi.Core.WriteFile",
        "name": "WriteFile",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Write File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core-WriteFile.html#v:writeMidi",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a MIDI file.\n\u003c/p\u003e",
        "fct-module": "ZMidi.Core.WriteFile",
        "fct-package": "zmidi-core",
        "fct-signature": "FilePath -\u003e MidiFile -\u003e IO ()",
        "fct-source": "src/ZMidi-Core-WriteFile.html#writeMidi",
        "fct-type": "function",
        "title": "writeMidi"
      },
      "index": {
        "description": "Write MIDI file",
        "hierarchy": "ZMidi Core WriteFile",
        "module": "ZMidi.Core.WriteFile",
        "name": "writeMidi",
        "normalized": "FilePath-\u003eMidiFile-\u003eIO()",
        "package": "zmidi-core",
        "partial": "Midi",
        "signature": "FilePath-\u003eMidiFile-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zmidi-core/docs/ZMidi-Core.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommon interface to \u003ccode\u003eZMidi.Core\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is a \u003cem\u003eshim\u003c/em\u003e module re-exporting types and functions from\n the exposed ZMidi-Core modules. Just import this module to use \n ZMidi-Core. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ZMidi.Core",
        "fct-package": "zmidi-core",
        "fct-signature": "module",
        "fct-source": "src/ZMidi-Core.html",
        "fct-type": "module",
        "title": "Core"
      },
      "index": {
        "description": "Common interface to ZMidi.Core This is shim module re-exporting types and functions from the exposed ZMidi-Core modules Just import this module to use ZMidi-Core",
        "hierarchy": "ZMidi Core",
        "module": "ZMidi.Core",
        "name": "Core",
        "normalized": "",
        "package": "zmidi-core",
        "partial": "Core",
        "signature": ""
      }
    }
  }
]