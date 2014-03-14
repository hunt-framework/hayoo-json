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
        "word": "midi-alsa"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Check",
          "name": "Check",
          "package": "midi-alsa",
          "source": "src/Sound-MIDI-ALSA-Check.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Check",
          "module": "Sound.MIDI.ALSA.Check",
          "name": "Check",
          "package": "midi-alsa",
          "partial": "Check",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Check.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll methods have default implementations that return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\nThis helps implementing event data types\nthat support only a subset of types of events.\n\u003c/p\u003e\u003cp\u003eMaybe a better approach is to provide type classes\nfor every type of event\nand make \u003ccode\u003e\u003ca\u003eC\u003c/a\u003e\u003c/code\u003e a subclass of all of them.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Check",
          "name": "C",
          "package": "midi-alsa",
          "type": "class"
        },
        "index": {
          "description": "All methods have default implementations that return Nothing This helps implementing event data types that support only subset of types of events Maybe better approach is to provide type classes for every type of event and make subclass of all of them",
          "hierarchy": "Sound MIDI ALSA Check",
          "module": "Sound.MIDI.ALSA.Check",
          "name": "C",
          "package": "midi-alsa",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Check.html#t:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Check",
          "name": "anyController",
          "package": "midi-alsa",
          "signature": "Channel -\u003e event -\u003e Maybe (Controller, Int)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Check",
          "module": "Sound.MIDI.ALSA.Check",
          "name": "anyController",
          "normalized": "Channel-\u003ea-\u003eMaybe(Controller,Int)",
          "package": "midi-alsa",
          "partial": "Controller",
          "signature": "Channel-\u003eevent-\u003eMaybe(Controller,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Check.html#v:anyController"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Check",
          "name": "channelPressure",
          "package": "midi-alsa",
          "signature": "Channel -\u003e event -\u003e Maybe Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Check",
          "module": "Sound.MIDI.ALSA.Check",
          "name": "channelPressure",
          "normalized": "Channel-\u003ea-\u003eMaybe Int",
          "package": "midi-alsa",
          "partial": "Pressure",
          "signature": "Channel-\u003eevent-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Check.html#v:channelPressure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Check",
          "name": "controller",
          "package": "midi-alsa",
          "signature": "Channel -\u003e Controller -\u003e event -\u003e Maybe Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Check",
          "module": "Sound.MIDI.ALSA.Check",
          "name": "controller",
          "normalized": "Channel-\u003eController-\u003ea-\u003eMaybe Int",
          "package": "midi-alsa",
          "signature": "Channel-\u003eController-\u003eevent-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Check.html#v:controller"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Check",
          "name": "mode",
          "package": "midi-alsa",
          "signature": "Channel -\u003e event -\u003e Maybe T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Check",
          "module": "Sound.MIDI.ALSA.Check",
          "name": "mode",
          "normalized": "Channel-\u003ea-\u003eMaybe T",
          "package": "midi-alsa",
          "signature": "Channel-\u003eevent-\u003eMaybe T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Check.html#v:mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWarning: This returns note events as they are,\n   that is, a \u003ccode\u003eNoteOff p 64\u003c/code\u003e might be encoded as such or as \u003ccode\u003eNoteOn p 0\u003c/code\u003e\n   depending on the content of \u003ccode\u003eevent\u003c/code\u003e.\n   For normalized results you may use \u003ccode\u003e\u003ca\u003enoteExplicitOff\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Check",
          "name": "note",
          "package": "midi-alsa",
          "signature": "Channel -\u003e event -\u003e Maybe (Velocity, Pitch, Bool)",
          "type": "function"
        },
        "index": {
          "description": "Warning This returns note events as they are that is NoteOff might be encoded as such or as NoteOn depending on the content of event For normalized results you may use noteExplicitOff",
          "hierarchy": "Sound MIDI ALSA Check",
          "module": "Sound.MIDI.ALSA.Check",
          "name": "note",
          "normalized": "Channel-\u003ea-\u003eMaybe(Velocity,Pitch,Bool)",
          "package": "midi-alsa",
          "signature": "Channel-\u003eevent-\u003eMaybe(Velocity,Pitch,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Check.html#v:note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003enote\u003c/a\u003e\u003c/code\u003e, but converts \u003ccode\u003eNoteOn p 0\u003c/code\u003e to \u003ccode\u003eNoteOff p 64\u003c/code\u003e.\nSee \u003ccode\u003e\u003ca\u003eexplicitNoteOff\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Check",
          "name": "noteExplicitOff",
          "package": "midi-alsa",
          "signature": "Channel -\u003e event -\u003e Maybe (Velocity, Pitch, Bool)",
          "type": "function"
        },
        "index": {
          "description": "Like note but converts NoteOn to NoteOff See explicitNoteOff",
          "hierarchy": "Sound MIDI ALSA Check",
          "module": "Sound.MIDI.ALSA.Check",
          "name": "noteExplicitOff",
          "normalized": "Channel-\u003ea-\u003eMaybe(Velocity,Pitch,Bool)",
          "package": "midi-alsa",
          "partial": "Explicit Off",
          "signature": "Channel-\u003eevent-\u003eMaybe(Velocity,Pitch,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Check.html#v:noteExplicitOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003enote\u003c/a\u003e\u003c/code\u003e, but converts \u003ccode\u003eNoteOff p 64\u003c/code\u003e to \u003ccode\u003eNoteOn p 0\u003c/code\u003e.\nSee \u003ccode\u003e\u003ca\u003eimplicitNoteOff\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Check",
          "name": "noteImplicitOff",
          "package": "midi-alsa",
          "signature": "Channel -\u003e event -\u003e Maybe (Velocity, Pitch, Bool)",
          "type": "function"
        },
        "index": {
          "description": "Like note but converts NoteOff to NoteOn See implicitNoteOff",
          "hierarchy": "Sound MIDI ALSA Check",
          "module": "Sound.MIDI.ALSA.Check",
          "name": "noteImplicitOff",
          "normalized": "Channel-\u003ea-\u003eMaybe(Velocity,Pitch,Bool)",
          "package": "midi-alsa",
          "partial": "Implicit Off",
          "signature": "Channel-\u003eevent-\u003eMaybe(Velocity,Pitch,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Check.html#v:noteImplicitOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Check",
          "name": "pitchBend",
          "package": "midi-alsa",
          "signature": "Channel -\u003e event -\u003e Maybe Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Check",
          "module": "Sound.MIDI.ALSA.Check",
          "name": "pitchBend",
          "normalized": "Channel-\u003ea-\u003eMaybe Int",
          "package": "midi-alsa",
          "partial": "Bend",
          "signature": "Channel-\u003eevent-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Check.html#v:pitchBend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Check",
          "name": "program",
          "package": "midi-alsa",
          "signature": "Channel -\u003e event -\u003e Maybe Program",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Check",
          "module": "Sound.MIDI.ALSA.Check",
          "name": "program",
          "normalized": "Channel-\u003ea-\u003eMaybe Program",
          "package": "midi-alsa",
          "signature": "Channel-\u003eevent-\u003eMaybe Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Check.html#v:program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Construct",
          "name": "Construct",
          "package": "midi-alsa",
          "source": "src/Sound-MIDI-ALSA-Construct.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Construct",
          "module": "Sound.MIDI.ALSA.Construct",
          "name": "Construct",
          "package": "midi-alsa",
          "partial": "Construct",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Construct.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Construct",
          "name": "C",
          "package": "midi-alsa",
          "type": "class"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Construct",
          "module": "Sound.MIDI.ALSA.Construct",
          "name": "C",
          "package": "midi-alsa",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Construct.html#t:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Construct",
          "name": "anyController",
          "package": "midi-alsa",
          "signature": "Channel -\u003e (Controller, Int) -\u003e event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Construct",
          "module": "Sound.MIDI.ALSA.Construct",
          "name": "anyController",
          "normalized": "Channel-\u003e(Controller,Int)-\u003ea",
          "package": "midi-alsa",
          "partial": "Controller",
          "signature": "Channel-\u003e(Controller,Int)-\u003eevent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Construct.html#v:anyController"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Construct",
          "name": "channelPressure",
          "package": "midi-alsa",
          "signature": "Channel -\u003e Int -\u003e event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Construct",
          "module": "Sound.MIDI.ALSA.Construct",
          "name": "channelPressure",
          "normalized": "Channel-\u003eInt-\u003ea",
          "package": "midi-alsa",
          "partial": "Pressure",
          "signature": "Channel-\u003eInt-\u003eevent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Construct.html#v:channelPressure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Construct",
          "name": "mode",
          "package": "midi-alsa",
          "signature": "Channel -\u003e T -\u003e event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Construct",
          "module": "Sound.MIDI.ALSA.Construct",
          "name": "mode",
          "normalized": "Channel-\u003eT-\u003ea",
          "package": "midi-alsa",
          "signature": "Channel-\u003eT-\u003eevent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Construct.html#v:mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWarning: This constructs a note events as is,\n   that is, a \u003ccode\u003eNoteOff p 64\u003c/code\u003e is encoded as such\n   and will not be converted to \u003ccode\u003eNoteOn p 0\u003c/code\u003e.\n   If you want such a conversion, you may use \u003ccode\u003e\u003ca\u003enoteImplicitOff\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Construct",
          "name": "note",
          "package": "midi-alsa",
          "signature": "Channel -\u003e (Velocity, Pitch, Bool) -\u003e event",
          "type": "function"
        },
        "index": {
          "description": "Warning This constructs note events as is that is NoteOff is encoded as such and will not be converted to NoteOn If you want such conversion you may use noteImplicitOff",
          "hierarchy": "Sound MIDI ALSA Construct",
          "module": "Sound.MIDI.ALSA.Construct",
          "name": "note",
          "normalized": "Channel-\u003e(Velocity,Pitch,Bool)-\u003ea",
          "package": "midi-alsa",
          "signature": "Channel-\u003e(Velocity,Pitch,Bool)-\u003eevent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Construct.html#v:note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003enote\u003c/a\u003e\u003c/code\u003e, but converts \u003ccode\u003eNoteOn p 0\u003c/code\u003e to \u003ccode\u003eNoteOff p 64\u003c/code\u003e.\nSee \u003ccode\u003e\u003ca\u003eexplicitNoteOff\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Construct",
          "name": "noteExplicitOff",
          "package": "midi-alsa",
          "signature": "Channel -\u003e (Velocity, Pitch, Bool) -\u003e event",
          "type": "function"
        },
        "index": {
          "description": "Like note but converts NoteOn to NoteOff See explicitNoteOff",
          "hierarchy": "Sound MIDI ALSA Construct",
          "module": "Sound.MIDI.ALSA.Construct",
          "name": "noteExplicitOff",
          "normalized": "Channel-\u003e(Velocity,Pitch,Bool)-\u003ea",
          "package": "midi-alsa",
          "partial": "Explicit Off",
          "signature": "Channel-\u003e(Velocity,Pitch,Bool)-\u003eevent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Construct.html#v:noteExplicitOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003enote\u003c/a\u003e\u003c/code\u003e, but converts \u003ccode\u003eNoteOff p 64\u003c/code\u003e to \u003ccode\u003eNoteOn p 0\u003c/code\u003e.\nSee \u003ccode\u003e\u003ca\u003eimplicitNoteOff\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Construct",
          "name": "noteImplicitOff",
          "package": "midi-alsa",
          "signature": "Channel -\u003e (Velocity, Pitch, Bool) -\u003e event",
          "type": "function"
        },
        "index": {
          "description": "Like note but converts NoteOff to NoteOn See implicitNoteOff",
          "hierarchy": "Sound MIDI ALSA Construct",
          "module": "Sound.MIDI.ALSA.Construct",
          "name": "noteImplicitOff",
          "normalized": "Channel-\u003e(Velocity,Pitch,Bool)-\u003ea",
          "package": "midi-alsa",
          "partial": "Implicit Off",
          "signature": "Channel-\u003e(Velocity,Pitch,Bool)-\u003eevent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Construct.html#v:noteImplicitOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Construct",
          "name": "pitchBend",
          "package": "midi-alsa",
          "signature": "Channel -\u003e Int -\u003e event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Construct",
          "module": "Sound.MIDI.ALSA.Construct",
          "name": "pitchBend",
          "normalized": "Channel-\u003eInt-\u003ea",
          "package": "midi-alsa",
          "partial": "Bend",
          "signature": "Channel-\u003eInt-\u003eevent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Construct.html#v:pitchBend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Construct",
          "name": "program",
          "package": "midi-alsa",
          "signature": "Channel -\u003e Program -\u003e event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Construct",
          "module": "Sound.MIDI.ALSA.Construct",
          "name": "program",
          "normalized": "Channel-\u003eProgram-\u003ea",
          "package": "midi-alsa",
          "signature": "Channel-\u003eProgram-\u003eevent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Construct.html#v:program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Query",
          "name": "Query",
          "package": "midi-alsa",
          "source": "src/Sound-MIDI-ALSA-Query.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Query",
          "module": "Sound.MIDI.ALSA.Query",
          "name": "Query",
          "package": "midi-alsa",
          "partial": "Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Query.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll methods have default implementations that return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\nThis helps implementing event data types\nthat support only a subset of types of events.\n\u003c/p\u003e\u003cp\u003eMaybe a better approach is to provide type classes\nfor every type of event\nand make \u003ccode\u003e\u003ca\u003eC\u003c/a\u003e\u003c/code\u003e a subclass of all of them.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Query",
          "name": "C",
          "package": "midi-alsa",
          "type": "class"
        },
        "index": {
          "description": "All methods have default implementations that return Nothing This helps implementing event data types that support only subset of types of events Maybe better approach is to provide type classes for every type of event and make subclass of all of them",
          "hierarchy": "Sound MIDI ALSA Query",
          "module": "Sound.MIDI.ALSA.Query",
          "name": "C",
          "package": "midi-alsa",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Query.html#t:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Query",
          "name": "anyController",
          "package": "midi-alsa",
          "signature": "event -\u003e Maybe (Channel, (Controller, Int))",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Query",
          "module": "Sound.MIDI.ALSA.Query",
          "name": "anyController",
          "normalized": "a-\u003eMaybe(Channel,(Controller,Int))",
          "package": "midi-alsa",
          "partial": "Controller",
          "signature": "event-\u003eMaybe(Channel,(Controller,Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Query.html#v:anyController"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Query",
          "name": "channelPressure",
          "package": "midi-alsa",
          "signature": "event -\u003e Maybe (Channel, Int)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Query",
          "module": "Sound.MIDI.ALSA.Query",
          "name": "channelPressure",
          "normalized": "a-\u003eMaybe(Channel,Int)",
          "package": "midi-alsa",
          "partial": "Pressure",
          "signature": "event-\u003eMaybe(Channel,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Query.html#v:channelPressure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Query",
          "name": "mode",
          "package": "midi-alsa",
          "signature": "event -\u003e Maybe (Channel, T)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Query",
          "module": "Sound.MIDI.ALSA.Query",
          "name": "mode",
          "normalized": "a-\u003eMaybe(Channel,T)",
          "package": "midi-alsa",
          "signature": "event-\u003eMaybe(Channel,T)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Query.html#v:mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWarning: This returns note events as they are,\n   that is, a \u003ccode\u003eNoteOff p 64\u003c/code\u003e might be encoded as such or as \u003ccode\u003eNoteOn p 0\u003c/code\u003e\n   depending on the content of \u003ccode\u003eevent\u003c/code\u003e.\n   For normalized results you may use \u003ccode\u003e\u003ca\u003enoteExplicitOff\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Query",
          "name": "note",
          "package": "midi-alsa",
          "signature": "event -\u003e Maybe (Channel, (Velocity, Pitch, Bool))",
          "type": "function"
        },
        "index": {
          "description": "Warning This returns note events as they are that is NoteOff might be encoded as such or as NoteOn depending on the content of event For normalized results you may use noteExplicitOff",
          "hierarchy": "Sound MIDI ALSA Query",
          "module": "Sound.MIDI.ALSA.Query",
          "name": "note",
          "normalized": "a-\u003eMaybe(Channel,(Velocity,Pitch,Bool))",
          "package": "midi-alsa",
          "signature": "event-\u003eMaybe(Channel,(Velocity,Pitch,Bool))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Query.html#v:note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003enote\u003c/a\u003e\u003c/code\u003e, but converts \u003ccode\u003eNoteOn p 0\u003c/code\u003e to \u003ccode\u003eNoteOff p 64\u003c/code\u003e.\nSee \u003ccode\u003e\u003ca\u003eexplicitNoteOff\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Query",
          "name": "noteExplicitOff",
          "package": "midi-alsa",
          "signature": "event -\u003e Maybe (Channel, (Velocity, Pitch, Bool))",
          "type": "function"
        },
        "index": {
          "description": "Like note but converts NoteOn to NoteOff See explicitNoteOff",
          "hierarchy": "Sound MIDI ALSA Query",
          "module": "Sound.MIDI.ALSA.Query",
          "name": "noteExplicitOff",
          "normalized": "a-\u003eMaybe(Channel,(Velocity,Pitch,Bool))",
          "package": "midi-alsa",
          "partial": "Explicit Off",
          "signature": "event-\u003eMaybe(Channel,(Velocity,Pitch,Bool))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Query.html#v:noteExplicitOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003enote\u003c/a\u003e\u003c/code\u003e, but converts \u003ccode\u003eNoteOff p 64\u003c/code\u003e to \u003ccode\u003eNoteOn p 0\u003c/code\u003e.\nSee \u003ccode\u003e\u003ca\u003eimplicitNoteOff\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Query",
          "name": "noteImplicitOff",
          "package": "midi-alsa",
          "signature": "event -\u003e Maybe (Channel, (Velocity, Pitch, Bool))",
          "type": "function"
        },
        "index": {
          "description": "Like note but converts NoteOff to NoteOn See implicitNoteOff",
          "hierarchy": "Sound MIDI ALSA Query",
          "module": "Sound.MIDI.ALSA.Query",
          "name": "noteImplicitOff",
          "normalized": "a-\u003eMaybe(Channel,(Velocity,Pitch,Bool))",
          "package": "midi-alsa",
          "partial": "Implicit Off",
          "signature": "event-\u003eMaybe(Channel,(Velocity,Pitch,Bool))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Query.html#v:noteImplicitOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Query",
          "name": "pitchBend",
          "package": "midi-alsa",
          "signature": "event -\u003e Maybe (Channel, Int)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Query",
          "module": "Sound.MIDI.ALSA.Query",
          "name": "pitchBend",
          "normalized": "a-\u003eMaybe(Channel,Int)",
          "package": "midi-alsa",
          "partial": "Bend",
          "signature": "event-\u003eMaybe(Channel,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Query.html#v:pitchBend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Query",
          "name": "program",
          "package": "midi-alsa",
          "signature": "event -\u003e Maybe (Channel, Program)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Query",
          "module": "Sound.MIDI.ALSA.Query",
          "name": "program",
          "normalized": "a-\u003eMaybe(Channel,Program)",
          "package": "midi-alsa",
          "signature": "event-\u003eMaybe(Channel,Program)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Query.html#v:program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA",
          "name": "ALSA",
          "package": "midi-alsa",
          "source": "src/Sound-MIDI-ALSA.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA",
          "module": "Sound.MIDI.ALSA",
          "name": "ALSA",
          "package": "midi-alsa",
          "partial": "ALSA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA",
          "name": "ControllerMode",
          "package": "midi-alsa",
          "source": "src/Sound-MIDI-ALSA.html#ControllerMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA",
          "module": "Sound.MIDI.ALSA",
          "name": "ControllerMode",
          "package": "midi-alsa",
          "partial": "Controller Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#t:ControllerMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA",
          "name": "Controller",
          "package": "midi-alsa",
          "signature": "Controller Controller Int",
          "source": "src/Sound-MIDI-ALSA.html#ControllerMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA",
          "module": "Sound.MIDI.ALSA",
          "name": "Controller",
          "package": "midi-alsa",
          "partial": "Controller",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:Controller"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA",
          "name": "Mode",
          "package": "midi-alsa",
          "signature": "Mode T",
          "source": "src/Sound-MIDI-ALSA.html#ControllerMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA",
          "module": "Sound.MIDI.ALSA",
          "name": "Mode",
          "package": "midi-alsa",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA",
          "name": "controllerEvent",
          "package": "midi-alsa",
          "signature": "Channel -\u003e Controller -\u003e Int -\u003e Ctrl",
          "source": "src/Sound-MIDI-ALSA.html#controllerEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA",
          "module": "Sound.MIDI.ALSA",
          "name": "controllerEvent",
          "normalized": "Channel-\u003eController-\u003eInt-\u003eCtrl",
          "package": "midi-alsa",
          "partial": "Event",
          "signature": "Channel-\u003eController-\u003eInt-\u003eCtrl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:controllerEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA",
          "name": "ctrlChannel",
          "package": "midi-alsa",
          "signature": "T Ctrl Channel",
          "source": "src/Sound-MIDI-ALSA.html#ctrlChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA",
          "module": "Sound.MIDI.ALSA",
          "name": "ctrlChannel",
          "package": "midi-alsa",
          "partial": "Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:ctrlChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is undefined, if the controller is no regular controller\nbut a channel mode message.\nBetter use \u003ccode\u003e\u003ca\u003ectrlControllerMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA",
          "name": "ctrlController",
          "package": "midi-alsa",
          "signature": "T Ctrl Controller",
          "source": "src/Sound-MIDI-ALSA.html#ctrlController",
          "type": "function"
        },
        "index": {
          "description": "This is undefined if the controller is no regular controller but channel mode message Better use ctrlControllerMode",
          "hierarchy": "Sound MIDI ALSA",
          "module": "Sound.MIDI.ALSA",
          "name": "ctrlController",
          "package": "midi-alsa",
          "partial": "Controller",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:ctrlController"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA",
          "name": "ctrlControllerMode",
          "package": "midi-alsa",
          "signature": "T Ctrl ControllerMode",
          "source": "src/Sound-MIDI-ALSA.html#ctrlControllerMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA",
          "module": "Sound.MIDI.ALSA",
          "name": "ctrlControllerMode",
          "package": "midi-alsa",
          "partial": "Controller Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:ctrlControllerMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA",
          "name": "ctrlProgram",
          "package": "midi-alsa",
          "signature": "T Ctrl Program",
          "source": "src/Sound-MIDI-ALSA.html#ctrlProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA",
          "module": "Sound.MIDI.ALSA",
          "name": "ctrlProgram",
          "package": "midi-alsa",
          "partial": "Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:ctrlProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA",
          "name": "ctrlValue",
          "package": "midi-alsa",
          "signature": "T Ctrl Int",
          "source": "src/Sound-MIDI-ALSA.html#ctrlValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA",
          "module": "Sound.MIDI.ALSA",
          "name": "ctrlValue",
          "package": "midi-alsa",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:ctrlValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA",
          "name": "fromChannel",
          "package": "midi-alsa",
          "signature": "Channel -\u003e Channel",
          "source": "src/Sound-MIDI-ALSA.html#fromChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA",
          "module": "Sound.MIDI.ALSA",
          "name": "fromChannel",
          "normalized": "Channel-\u003eChannel",
          "package": "midi-alsa",
          "partial": "Channel",
          "signature": "Channel-\u003eChannel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:fromChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA",
          "name": "fromController",
          "package": "midi-alsa",
          "signature": "Controller -\u003e Parameter",
          "source": "src/Sound-MIDI-ALSA.html#fromController",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA",
          "module": "Sound.MIDI.ALSA",
          "name": "fromController",
          "normalized": "Controller-\u003eParameter",
          "package": "midi-alsa",
          "partial": "Controller",
          "signature": "Controller-\u003eParameter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:fromController"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA",
          "name": "fromPitch",
          "package": "midi-alsa",
          "signature": "Pitch -\u003e Pitch",
          "source": "src/Sound-MIDI-ALSA.html#fromPitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA",
          "module": "Sound.MIDI.ALSA",
          "name": "fromPitch",
          "normalized": "Pitch-\u003ePitch",
          "package": "midi-alsa",
          "partial": "Pitch",
          "signature": "Pitch-\u003ePitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:fromPitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA",
          "name": "fromProgram",
          "package": "midi-alsa",
          "signature": "Program -\u003e Value",
          "source": "src/Sound-MIDI-ALSA.html#fromProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA",
          "module": "Sound.MIDI.ALSA",
          "name": "fromProgram",
          "normalized": "Program-\u003eValue",
          "package": "midi-alsa",
          "partial": "Program",
          "signature": "Program-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:fromProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA",
          "name": "fromVelocity",
          "package": "midi-alsa",
          "signature": "Velocity -\u003e Velocity",
          "source": "src/Sound-MIDI-ALSA.html#fromVelocity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA",
          "module": "Sound.MIDI.ALSA",
          "name": "fromVelocity",
          "normalized": "Velocity-\u003eVelocity",
          "package": "midi-alsa",
          "partial": "Velocity",
          "signature": "Velocity-\u003eVelocity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:fromVelocity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA",
          "name": "modeEvent",
          "package": "midi-alsa",
          "signature": "Channel -\u003e T -\u003e Ctrl",
          "source": "src/Sound-MIDI-ALSA.html#modeEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA",
          "module": "Sound.MIDI.ALSA",
          "name": "modeEvent",
          "normalized": "Channel-\u003eT-\u003eCtrl",
          "package": "midi-alsa",
          "partial": "Event",
          "signature": "Channel-\u003eT-\u003eCtrl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:modeEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA",
          "name": "normalNoteFromEvent",
          "package": "midi-alsa",
          "signature": "NoteEv -\u003e Note -\u003e (NoteEv, Velocity)",
          "source": "src/Sound-MIDI-ALSA.html#normalNoteFromEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA",
          "module": "Sound.MIDI.ALSA",
          "name": "normalNoteFromEvent",
          "normalized": "NoteEv-\u003eNote-\u003e(NoteEv,Velocity)",
          "package": "midi-alsa",
          "partial": "Note From Event",
          "signature": "NoteEv-\u003eNote-\u003e(NoteEv,Velocity)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:normalNoteFromEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a \u003ccode\u003eNoteOff\u003c/code\u003e if input is a \u003ccode\u003eNoteOn\u003c/code\u003e with velocity zero.\nThis is a trick of the MIDI standard\nin order to allow compression of a series of note events.\nAfter normalization you can safely match on \u003ccode\u003eNoteOn\u003c/code\u003e and \u003ccode\u003eNoteOff\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA",
          "name": "normalizeNote",
          "package": "midi-alsa",
          "signature": "(NoteEv, Velocity) -\u003e (NoteEv, Velocity)",
          "source": "src/Sound-MIDI-ALSA.html#normalizeNote",
          "type": "function"
        },
        "index": {
          "description": "Return NoteOff if input is NoteOn with velocity zero This is trick of the MIDI standard in order to allow compression of series of note events After normalization you can safely match on NoteOn and NoteOff",
          "hierarchy": "Sound MIDI ALSA",
          "module": "Sound.MIDI.ALSA",
          "name": "normalizeNote",
          "normalized": "(NoteEv,Velocity)-\u003e(NoteEv,Velocity)",
          "package": "midi-alsa",
          "partial": "Note",
          "signature": "(NoteEv,Velocity)-\u003e(NoteEv,Velocity)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:normalizeNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA",
          "name": "noteChannel",
          "package": "midi-alsa",
          "signature": "T Note Channel",
          "source": "src/Sound-MIDI-ALSA.html#noteChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA",
          "module": "Sound.MIDI.ALSA",
          "name": "noteChannel",
          "package": "midi-alsa",
          "partial": "Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:noteChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA",
          "name": "noteEvent",
          "package": "midi-alsa",
          "signature": "Channel -\u003e Pitch -\u003e Velocity -\u003e Velocity -\u003e Int -\u003e Note",
          "source": "src/Sound-MIDI-ALSA.html#noteEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA",
          "module": "Sound.MIDI.ALSA",
          "name": "noteEvent",
          "normalized": "Channel-\u003ePitch-\u003eVelocity-\u003eVelocity-\u003eInt-\u003eNote",
          "package": "midi-alsa",
          "partial": "Event",
          "signature": "Channel-\u003ePitch-\u003eVelocity-\u003eVelocity-\u003eInt-\u003eNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:noteEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA",
          "name": "notePitch",
          "package": "midi-alsa",
          "signature": "T Note Pitch",
          "source": "src/Sound-MIDI-ALSA.html#notePitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA",
          "module": "Sound.MIDI.ALSA",
          "name": "notePitch",
          "package": "midi-alsa",
          "partial": "Pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:notePitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis may not yield what you expect.\nSee \u003ccode\u003e\u003ca\u003enormalizeNote\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA",
          "name": "noteVelocity",
          "package": "midi-alsa",
          "signature": "T Note Velocity",
          "source": "src/Sound-MIDI-ALSA.html#noteVelocity",
          "type": "function"
        },
        "index": {
          "description": "This may not yield what you expect See normalizeNote",
          "hierarchy": "Sound MIDI ALSA",
          "module": "Sound.MIDI.ALSA",
          "name": "noteVelocity",
          "package": "midi-alsa",
          "partial": "Velocity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:noteVelocity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA",
          "name": "programChangeEvent",
          "package": "midi-alsa",
          "signature": "Channel -\u003e Program -\u003e Ctrl",
          "source": "src/Sound-MIDI-ALSA.html#programChangeEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA",
          "module": "Sound.MIDI.ALSA",
          "name": "programChangeEvent",
          "normalized": "Channel-\u003eProgram-\u003eCtrl",
          "package": "midi-alsa",
          "partial": "Change Event",
          "signature": "Channel-\u003eProgram-\u003eCtrl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:programChangeEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA",
          "name": "toChannel",
          "package": "midi-alsa",
          "signature": "Channel -\u003e Channel",
          "source": "src/Sound-MIDI-ALSA.html#toChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA",
          "module": "Sound.MIDI.ALSA",
          "name": "toChannel",
          "normalized": "Channel-\u003eChannel",
          "package": "midi-alsa",
          "partial": "Channel",
          "signature": "Channel-\u003eChannel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:toChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eControllers from \u003ccode\u003e0x78\u003c/code\u003e to \u003ccode\u003e0x7F\u003c/code\u003e are special,\nyou must assert that the controller number is in the range \u003ccode\u003e0\u003c/code\u003e to \u003ccode\u003e0x77\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA",
          "name": "toController",
          "package": "midi-alsa",
          "signature": "Parameter -\u003e Controller",
          "source": "src/Sound-MIDI-ALSA.html#toController",
          "type": "function"
        },
        "index": {
          "description": "Controllers from x78 to x7F are special you must assert that the controller number is in the range to x77",
          "hierarchy": "Sound MIDI ALSA",
          "module": "Sound.MIDI.ALSA",
          "name": "toController",
          "normalized": "Parameter-\u003eController",
          "package": "midi-alsa",
          "partial": "Controller",
          "signature": "Parameter-\u003eController",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:toController"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA",
          "name": "toPitch",
          "package": "midi-alsa",
          "signature": "Pitch -\u003e Pitch",
          "source": "src/Sound-MIDI-ALSA.html#toPitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA",
          "module": "Sound.MIDI.ALSA",
          "name": "toPitch",
          "normalized": "Pitch-\u003ePitch",
          "package": "midi-alsa",
          "partial": "Pitch",
          "signature": "Pitch-\u003ePitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:toPitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA",
          "name": "toProgram",
          "package": "midi-alsa",
          "signature": "Value -\u003e Program",
          "source": "src/Sound-MIDI-ALSA.html#toProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA",
          "module": "Sound.MIDI.ALSA",
          "name": "toProgram",
          "normalized": "Value-\u003eProgram",
          "package": "midi-alsa",
          "partial": "Program",
          "signature": "Value-\u003eProgram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:toProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA",
          "name": "toVelocity",
          "package": "midi-alsa",
          "signature": "Velocity -\u003e Velocity",
          "source": "src/Sound-MIDI-ALSA.html#toVelocity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA",
          "module": "Sound.MIDI.ALSA",
          "name": "toVelocity",
          "normalized": "Velocity-\u003eVelocity",
          "package": "midi-alsa",
          "partial": "Velocity",
          "signature": "Velocity-\u003eVelocity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:toVelocity"
      }
    }
  ]
]