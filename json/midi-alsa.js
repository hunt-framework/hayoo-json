[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Check.html#",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Check",
        "fct-package": "midi-alsa",
        "fct-signature": "module",
        "fct-source": "src/Sound-MIDI-ALSA-Check.html",
        "fct-type": "module",
        "title": "Check"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Check",
        "module": "Sound.MIDI.ALSA.Check",
        "name": "Check",
        "normalized": "",
        "package": "midi-alsa",
        "partial": "Check",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Check.html#t:C",
      "description": {
        "fct-descr": "\u003cp\u003eAll methods have default implementations that return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\nThis helps implementing event data types\nthat support only a subset of types of events.\n\u003c/p\u003e\u003cp\u003eMaybe a better approach is to provide type classes\nfor every type of event\nand make \u003ccode\u003e\u003ca\u003eC\u003c/a\u003e\u003c/code\u003e a subclass of all of them.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Check",
        "fct-package": "midi-alsa",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "C"
      },
      "index": {
        "description": "All methods have default implementations that return Nothing This helps implementing event data types that support only subset of types of events Maybe better approach is to provide type classes for every type of event and make subclass of all of them",
        "hierarchy": "Sound MIDI ALSA Check",
        "module": "Sound.MIDI.ALSA.Check",
        "name": "C",
        "normalized": "",
        "package": "midi-alsa",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Check.html#v:anyController",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Check",
        "fct-package": "midi-alsa",
        "fct-signature": "Channel -\u003e event -\u003e Maybe (Controller, Int)",
        "fct-type": "function",
        "title": "anyController"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Check",
        "module": "Sound.MIDI.ALSA.Check",
        "name": "anyController",
        "normalized": "Channel-\u003ea-\u003eMaybe(Controller,Int)",
        "package": "midi-alsa",
        "partial": "Controller",
        "signature": "Channel-\u003eevent-\u003eMaybe(Controller,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Check.html#v:channelPressure",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Check",
        "fct-package": "midi-alsa",
        "fct-signature": "Channel -\u003e event -\u003e Maybe Int",
        "fct-type": "function",
        "title": "channelPressure"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Check",
        "module": "Sound.MIDI.ALSA.Check",
        "name": "channelPressure",
        "normalized": "Channel-\u003ea-\u003eMaybe Int",
        "package": "midi-alsa",
        "partial": "Pressure",
        "signature": "Channel-\u003eevent-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Check.html#v:controller",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Check",
        "fct-package": "midi-alsa",
        "fct-signature": "Channel -\u003e Controller -\u003e event -\u003e Maybe Int",
        "fct-type": "function",
        "title": "controller"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Check",
        "module": "Sound.MIDI.ALSA.Check",
        "name": "controller",
        "normalized": "Channel-\u003eController-\u003ea-\u003eMaybe Int",
        "package": "midi-alsa",
        "partial": "",
        "signature": "Channel-\u003eController-\u003eevent-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Check.html#v:mode",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Check",
        "fct-package": "midi-alsa",
        "fct-signature": "Channel -\u003e event -\u003e Maybe T",
        "fct-type": "function",
        "title": "mode"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Check",
        "module": "Sound.MIDI.ALSA.Check",
        "name": "mode",
        "normalized": "Channel-\u003ea-\u003eMaybe T",
        "package": "midi-alsa",
        "partial": "",
        "signature": "Channel-\u003eevent-\u003eMaybe T"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Check.html#v:note",
      "description": {
        "fct-descr": "\u003cp\u003eWarning: This returns note events as they are,\n   that is, a \u003ccode\u003eNoteOff p 64\u003c/code\u003e might be encoded as such or as \u003ccode\u003eNoteOn p 0\u003c/code\u003e\n   depending on the content of \u003ccode\u003eevent\u003c/code\u003e.\n   For normalized results you may use \u003ccode\u003e\u003ca\u003enoteExplicitOff\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Check",
        "fct-package": "midi-alsa",
        "fct-signature": "Channel -\u003e event -\u003e Maybe (Velocity, Pitch, Bool)",
        "fct-type": "function",
        "title": "note"
      },
      "index": {
        "description": "Warning This returns note events as they are that is NoteOff might be encoded as such or as NoteOn depending on the content of event For normalized results you may use noteExplicitOff",
        "hierarchy": "Sound MIDI ALSA Check",
        "module": "Sound.MIDI.ALSA.Check",
        "name": "note",
        "normalized": "Channel-\u003ea-\u003eMaybe(Velocity,Pitch,Bool)",
        "package": "midi-alsa",
        "partial": "",
        "signature": "Channel-\u003eevent-\u003eMaybe(Velocity,Pitch,Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Check.html#v:noteExplicitOff",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003enote\u003c/a\u003e\u003c/code\u003e, but converts \u003ccode\u003eNoteOn p 0\u003c/code\u003e to \u003ccode\u003eNoteOff p 64\u003c/code\u003e.\nSee \u003ccode\u003e\u003ca\u003eexplicitNoteOff\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Check",
        "fct-package": "midi-alsa",
        "fct-signature": "Channel -\u003e event -\u003e Maybe (Velocity, Pitch, Bool)",
        "fct-type": "function",
        "title": "noteExplicitOff"
      },
      "index": {
        "description": "Like note but converts NoteOn to NoteOff See explicitNoteOff",
        "hierarchy": "Sound MIDI ALSA Check",
        "module": "Sound.MIDI.ALSA.Check",
        "name": "noteExplicitOff",
        "normalized": "Channel-\u003ea-\u003eMaybe(Velocity,Pitch,Bool)",
        "package": "midi-alsa",
        "partial": "Explicit Off",
        "signature": "Channel-\u003eevent-\u003eMaybe(Velocity,Pitch,Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Check.html#v:noteImplicitOff",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003enote\u003c/a\u003e\u003c/code\u003e, but converts \u003ccode\u003eNoteOff p 64\u003c/code\u003e to \u003ccode\u003eNoteOn p 0\u003c/code\u003e.\nSee \u003ccode\u003e\u003ca\u003eimplicitNoteOff\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Check",
        "fct-package": "midi-alsa",
        "fct-signature": "Channel -\u003e event -\u003e Maybe (Velocity, Pitch, Bool)",
        "fct-type": "function",
        "title": "noteImplicitOff"
      },
      "index": {
        "description": "Like note but converts NoteOff to NoteOn See implicitNoteOff",
        "hierarchy": "Sound MIDI ALSA Check",
        "module": "Sound.MIDI.ALSA.Check",
        "name": "noteImplicitOff",
        "normalized": "Channel-\u003ea-\u003eMaybe(Velocity,Pitch,Bool)",
        "package": "midi-alsa",
        "partial": "Implicit Off",
        "signature": "Channel-\u003eevent-\u003eMaybe(Velocity,Pitch,Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Check.html#v:pitchBend",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Check",
        "fct-package": "midi-alsa",
        "fct-signature": "Channel -\u003e event -\u003e Maybe Int",
        "fct-type": "function",
        "title": "pitchBend"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Check",
        "module": "Sound.MIDI.ALSA.Check",
        "name": "pitchBend",
        "normalized": "Channel-\u003ea-\u003eMaybe Int",
        "package": "midi-alsa",
        "partial": "Bend",
        "signature": "Channel-\u003eevent-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Check.html#v:program",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Check",
        "fct-package": "midi-alsa",
        "fct-signature": "Channel -\u003e event -\u003e Maybe Program",
        "fct-type": "function",
        "title": "program"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Check",
        "module": "Sound.MIDI.ALSA.Check",
        "name": "program",
        "normalized": "Channel-\u003ea-\u003eMaybe Program",
        "package": "midi-alsa",
        "partial": "",
        "signature": "Channel-\u003eevent-\u003eMaybe Program"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Construct.html#",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Construct",
        "fct-package": "midi-alsa",
        "fct-signature": "module",
        "fct-source": "src/Sound-MIDI-ALSA-Construct.html",
        "fct-type": "module",
        "title": "Construct"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Construct",
        "module": "Sound.MIDI.ALSA.Construct",
        "name": "Construct",
        "normalized": "",
        "package": "midi-alsa",
        "partial": "Construct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Construct.html#t:C",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Construct",
        "fct-package": "midi-alsa",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "C"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Construct",
        "module": "Sound.MIDI.ALSA.Construct",
        "name": "C",
        "normalized": "",
        "package": "midi-alsa",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Construct.html#v:anyController",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Construct",
        "fct-package": "midi-alsa",
        "fct-signature": "Channel -\u003e (Controller, Int) -\u003e event",
        "fct-type": "function",
        "title": "anyController"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Construct",
        "module": "Sound.MIDI.ALSA.Construct",
        "name": "anyController",
        "normalized": "Channel-\u003e(Controller,Int)-\u003ea",
        "package": "midi-alsa",
        "partial": "Controller",
        "signature": "Channel-\u003e(Controller,Int)-\u003eevent"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Construct.html#v:channelPressure",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Construct",
        "fct-package": "midi-alsa",
        "fct-signature": "Channel -\u003e Int -\u003e event",
        "fct-type": "function",
        "title": "channelPressure"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Construct",
        "module": "Sound.MIDI.ALSA.Construct",
        "name": "channelPressure",
        "normalized": "Channel-\u003eInt-\u003ea",
        "package": "midi-alsa",
        "partial": "Pressure",
        "signature": "Channel-\u003eInt-\u003eevent"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Construct.html#v:mode",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Construct",
        "fct-package": "midi-alsa",
        "fct-signature": "Channel -\u003e T -\u003e event",
        "fct-type": "function",
        "title": "mode"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Construct",
        "module": "Sound.MIDI.ALSA.Construct",
        "name": "mode",
        "normalized": "Channel-\u003eT-\u003ea",
        "package": "midi-alsa",
        "partial": "",
        "signature": "Channel-\u003eT-\u003eevent"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Construct.html#v:note",
      "description": {
        "fct-descr": "\u003cp\u003eWarning: This constructs a note events as is,\n   that is, a \u003ccode\u003eNoteOff p 64\u003c/code\u003e is encoded as such\n   and will not be converted to \u003ccode\u003eNoteOn p 0\u003c/code\u003e.\n   If you want such a conversion, you may use \u003ccode\u003e\u003ca\u003enoteImplicitOff\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Construct",
        "fct-package": "midi-alsa",
        "fct-signature": "Channel -\u003e (Velocity, Pitch, Bool) -\u003e event",
        "fct-type": "function",
        "title": "note"
      },
      "index": {
        "description": "Warning This constructs note events as is that is NoteOff is encoded as such and will not be converted to NoteOn If you want such conversion you may use noteImplicitOff",
        "hierarchy": "Sound MIDI ALSA Construct",
        "module": "Sound.MIDI.ALSA.Construct",
        "name": "note",
        "normalized": "Channel-\u003e(Velocity,Pitch,Bool)-\u003ea",
        "package": "midi-alsa",
        "partial": "",
        "signature": "Channel-\u003e(Velocity,Pitch,Bool)-\u003eevent"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Construct.html#v:noteExplicitOff",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003enote\u003c/a\u003e\u003c/code\u003e, but converts \u003ccode\u003eNoteOn p 0\u003c/code\u003e to \u003ccode\u003eNoteOff p 64\u003c/code\u003e.\nSee \u003ccode\u003e\u003ca\u003eexplicitNoteOff\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Construct",
        "fct-package": "midi-alsa",
        "fct-signature": "Channel -\u003e (Velocity, Pitch, Bool) -\u003e event",
        "fct-type": "function",
        "title": "noteExplicitOff"
      },
      "index": {
        "description": "Like note but converts NoteOn to NoteOff See explicitNoteOff",
        "hierarchy": "Sound MIDI ALSA Construct",
        "module": "Sound.MIDI.ALSA.Construct",
        "name": "noteExplicitOff",
        "normalized": "Channel-\u003e(Velocity,Pitch,Bool)-\u003ea",
        "package": "midi-alsa",
        "partial": "Explicit Off",
        "signature": "Channel-\u003e(Velocity,Pitch,Bool)-\u003eevent"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Construct.html#v:noteImplicitOff",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003enote\u003c/a\u003e\u003c/code\u003e, but converts \u003ccode\u003eNoteOff p 64\u003c/code\u003e to \u003ccode\u003eNoteOn p 0\u003c/code\u003e.\nSee \u003ccode\u003e\u003ca\u003eimplicitNoteOff\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Construct",
        "fct-package": "midi-alsa",
        "fct-signature": "Channel -\u003e (Velocity, Pitch, Bool) -\u003e event",
        "fct-type": "function",
        "title": "noteImplicitOff"
      },
      "index": {
        "description": "Like note but converts NoteOff to NoteOn See implicitNoteOff",
        "hierarchy": "Sound MIDI ALSA Construct",
        "module": "Sound.MIDI.ALSA.Construct",
        "name": "noteImplicitOff",
        "normalized": "Channel-\u003e(Velocity,Pitch,Bool)-\u003ea",
        "package": "midi-alsa",
        "partial": "Implicit Off",
        "signature": "Channel-\u003e(Velocity,Pitch,Bool)-\u003eevent"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Construct.html#v:pitchBend",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Construct",
        "fct-package": "midi-alsa",
        "fct-signature": "Channel -\u003e Int -\u003e event",
        "fct-type": "function",
        "title": "pitchBend"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Construct",
        "module": "Sound.MIDI.ALSA.Construct",
        "name": "pitchBend",
        "normalized": "Channel-\u003eInt-\u003ea",
        "package": "midi-alsa",
        "partial": "Bend",
        "signature": "Channel-\u003eInt-\u003eevent"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Construct.html#v:program",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Construct",
        "fct-package": "midi-alsa",
        "fct-signature": "Channel -\u003e Program -\u003e event",
        "fct-type": "function",
        "title": "program"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Construct",
        "module": "Sound.MIDI.ALSA.Construct",
        "name": "program",
        "normalized": "Channel-\u003eProgram-\u003ea",
        "package": "midi-alsa",
        "partial": "",
        "signature": "Channel-\u003eProgram-\u003eevent"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Query.html#",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Query",
        "fct-package": "midi-alsa",
        "fct-signature": "module",
        "fct-source": "src/Sound-MIDI-ALSA-Query.html",
        "fct-type": "module",
        "title": "Query"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Query",
        "module": "Sound.MIDI.ALSA.Query",
        "name": "Query",
        "normalized": "",
        "package": "midi-alsa",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Query.html#t:C",
      "description": {
        "fct-descr": "\u003cp\u003eAll methods have default implementations that return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\nThis helps implementing event data types\nthat support only a subset of types of events.\n\u003c/p\u003e\u003cp\u003eMaybe a better approach is to provide type classes\nfor every type of event\nand make \u003ccode\u003e\u003ca\u003eC\u003c/a\u003e\u003c/code\u003e a subclass of all of them.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Query",
        "fct-package": "midi-alsa",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "C"
      },
      "index": {
        "description": "All methods have default implementations that return Nothing This helps implementing event data types that support only subset of types of events Maybe better approach is to provide type classes for every type of event and make subclass of all of them",
        "hierarchy": "Sound MIDI ALSA Query",
        "module": "Sound.MIDI.ALSA.Query",
        "name": "C",
        "normalized": "",
        "package": "midi-alsa",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Query.html#v:anyController",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Query",
        "fct-package": "midi-alsa",
        "fct-signature": "event -\u003e Maybe (Channel, (Controller, Int))",
        "fct-type": "function",
        "title": "anyController"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Query",
        "module": "Sound.MIDI.ALSA.Query",
        "name": "anyController",
        "normalized": "a-\u003eMaybe(Channel,(Controller,Int))",
        "package": "midi-alsa",
        "partial": "Controller",
        "signature": "event-\u003eMaybe(Channel,(Controller,Int))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Query.html#v:channelPressure",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Query",
        "fct-package": "midi-alsa",
        "fct-signature": "event -\u003e Maybe (Channel, Int)",
        "fct-type": "function",
        "title": "channelPressure"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Query",
        "module": "Sound.MIDI.ALSA.Query",
        "name": "channelPressure",
        "normalized": "a-\u003eMaybe(Channel,Int)",
        "package": "midi-alsa",
        "partial": "Pressure",
        "signature": "event-\u003eMaybe(Channel,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Query.html#v:mode",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Query",
        "fct-package": "midi-alsa",
        "fct-signature": "event -\u003e Maybe (Channel, T)",
        "fct-type": "function",
        "title": "mode"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Query",
        "module": "Sound.MIDI.ALSA.Query",
        "name": "mode",
        "normalized": "a-\u003eMaybe(Channel,T)",
        "package": "midi-alsa",
        "partial": "",
        "signature": "event-\u003eMaybe(Channel,T)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Query.html#v:note",
      "description": {
        "fct-descr": "\u003cp\u003eWarning: This returns note events as they are,\n   that is, a \u003ccode\u003eNoteOff p 64\u003c/code\u003e might be encoded as such or as \u003ccode\u003eNoteOn p 0\u003c/code\u003e\n   depending on the content of \u003ccode\u003eevent\u003c/code\u003e.\n   For normalized results you may use \u003ccode\u003e\u003ca\u003enoteExplicitOff\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Query",
        "fct-package": "midi-alsa",
        "fct-signature": "event -\u003e Maybe (Channel, (Velocity, Pitch, Bool))",
        "fct-type": "function",
        "title": "note"
      },
      "index": {
        "description": "Warning This returns note events as they are that is NoteOff might be encoded as such or as NoteOn depending on the content of event For normalized results you may use noteExplicitOff",
        "hierarchy": "Sound MIDI ALSA Query",
        "module": "Sound.MIDI.ALSA.Query",
        "name": "note",
        "normalized": "a-\u003eMaybe(Channel,(Velocity,Pitch,Bool))",
        "package": "midi-alsa",
        "partial": "",
        "signature": "event-\u003eMaybe(Channel,(Velocity,Pitch,Bool))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Query.html#v:noteExplicitOff",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003enote\u003c/a\u003e\u003c/code\u003e, but converts \u003ccode\u003eNoteOn p 0\u003c/code\u003e to \u003ccode\u003eNoteOff p 64\u003c/code\u003e.\nSee \u003ccode\u003e\u003ca\u003eexplicitNoteOff\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Query",
        "fct-package": "midi-alsa",
        "fct-signature": "event -\u003e Maybe (Channel, (Velocity, Pitch, Bool))",
        "fct-type": "function",
        "title": "noteExplicitOff"
      },
      "index": {
        "description": "Like note but converts NoteOn to NoteOff See explicitNoteOff",
        "hierarchy": "Sound MIDI ALSA Query",
        "module": "Sound.MIDI.ALSA.Query",
        "name": "noteExplicitOff",
        "normalized": "a-\u003eMaybe(Channel,(Velocity,Pitch,Bool))",
        "package": "midi-alsa",
        "partial": "Explicit Off",
        "signature": "event-\u003eMaybe(Channel,(Velocity,Pitch,Bool))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Query.html#v:noteImplicitOff",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003enote\u003c/a\u003e\u003c/code\u003e, but converts \u003ccode\u003eNoteOff p 64\u003c/code\u003e to \u003ccode\u003eNoteOn p 0\u003c/code\u003e.\nSee \u003ccode\u003e\u003ca\u003eimplicitNoteOff\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Query",
        "fct-package": "midi-alsa",
        "fct-signature": "event -\u003e Maybe (Channel, (Velocity, Pitch, Bool))",
        "fct-type": "function",
        "title": "noteImplicitOff"
      },
      "index": {
        "description": "Like note but converts NoteOff to NoteOn See implicitNoteOff",
        "hierarchy": "Sound MIDI ALSA Query",
        "module": "Sound.MIDI.ALSA.Query",
        "name": "noteImplicitOff",
        "normalized": "a-\u003eMaybe(Channel,(Velocity,Pitch,Bool))",
        "package": "midi-alsa",
        "partial": "Implicit Off",
        "signature": "event-\u003eMaybe(Channel,(Velocity,Pitch,Bool))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Query.html#v:pitchBend",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Query",
        "fct-package": "midi-alsa",
        "fct-signature": "event -\u003e Maybe (Channel, Int)",
        "fct-type": "function",
        "title": "pitchBend"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Query",
        "module": "Sound.MIDI.ALSA.Query",
        "name": "pitchBend",
        "normalized": "a-\u003eMaybe(Channel,Int)",
        "package": "midi-alsa",
        "partial": "Bend",
        "signature": "event-\u003eMaybe(Channel,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA-Query.html#v:program",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Query",
        "fct-package": "midi-alsa",
        "fct-signature": "event -\u003e Maybe (Channel, Program)",
        "fct-type": "function",
        "title": "program"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Query",
        "module": "Sound.MIDI.ALSA.Query",
        "name": "program",
        "normalized": "a-\u003eMaybe(Channel,Program)",
        "package": "midi-alsa",
        "partial": "",
        "signature": "event-\u003eMaybe(Channel,Program)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#",
      "description": {
        "fct-module": "Sound.MIDI.ALSA",
        "fct-package": "midi-alsa",
        "fct-signature": "module",
        "fct-source": "src/Sound-MIDI-ALSA.html",
        "fct-type": "module",
        "title": "ALSA"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA",
        "module": "Sound.MIDI.ALSA",
        "name": "ALSA",
        "normalized": "",
        "package": "midi-alsa",
        "partial": "ALSA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#t:ControllerMode",
      "description": {
        "fct-module": "Sound.MIDI.ALSA",
        "fct-package": "midi-alsa",
        "fct-signature": "data",
        "fct-source": "src/Sound-MIDI-ALSA.html#ControllerMode",
        "fct-type": "data",
        "title": "ControllerMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA",
        "module": "Sound.MIDI.ALSA",
        "name": "ControllerMode",
        "normalized": "",
        "package": "midi-alsa",
        "partial": "Controller Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:Controller",
      "description": {
        "fct-module": "Sound.MIDI.ALSA",
        "fct-package": "midi-alsa",
        "fct-signature": "Controller Controller Int",
        "fct-source": "src/Sound-MIDI-ALSA.html#ControllerMode",
        "fct-type": "function",
        "title": "Controller"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA",
        "module": "Sound.MIDI.ALSA",
        "name": "Controller",
        "normalized": "",
        "package": "midi-alsa",
        "partial": "Controller",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:Mode",
      "description": {
        "fct-module": "Sound.MIDI.ALSA",
        "fct-package": "midi-alsa",
        "fct-signature": "Mode T",
        "fct-source": "src/Sound-MIDI-ALSA.html#ControllerMode",
        "fct-type": "function",
        "title": "Mode"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA",
        "module": "Sound.MIDI.ALSA",
        "name": "Mode",
        "normalized": "",
        "package": "midi-alsa",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:controllerEvent",
      "description": {
        "fct-module": "Sound.MIDI.ALSA",
        "fct-package": "midi-alsa",
        "fct-signature": "Channel -\u003e Controller -\u003e Int -\u003e Ctrl",
        "fct-source": "src/Sound-MIDI-ALSA.html#controllerEvent",
        "fct-type": "function",
        "title": "controllerEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA",
        "module": "Sound.MIDI.ALSA",
        "name": "controllerEvent",
        "normalized": "Channel-\u003eController-\u003eInt-\u003eCtrl",
        "package": "midi-alsa",
        "partial": "Event",
        "signature": "Channel-\u003eController-\u003eInt-\u003eCtrl"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:ctrlChannel",
      "description": {
        "fct-module": "Sound.MIDI.ALSA",
        "fct-package": "midi-alsa",
        "fct-signature": "T Ctrl Channel",
        "fct-source": "src/Sound-MIDI-ALSA.html#ctrlChannel",
        "fct-type": "function",
        "title": "ctrlChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA",
        "module": "Sound.MIDI.ALSA",
        "name": "ctrlChannel",
        "normalized": "",
        "package": "midi-alsa",
        "partial": "Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:ctrlController",
      "description": {
        "fct-descr": "\u003cp\u003eThis is undefined, if the controller is no regular controller\nbut a channel mode message.\nBetter use \u003ccode\u003e\u003ca\u003ectrlControllerMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA",
        "fct-package": "midi-alsa",
        "fct-signature": "T Ctrl Controller",
        "fct-source": "src/Sound-MIDI-ALSA.html#ctrlController",
        "fct-type": "function",
        "title": "ctrlController"
      },
      "index": {
        "description": "This is undefined if the controller is no regular controller but channel mode message Better use ctrlControllerMode",
        "hierarchy": "Sound MIDI ALSA",
        "module": "Sound.MIDI.ALSA",
        "name": "ctrlController",
        "normalized": "",
        "package": "midi-alsa",
        "partial": "Controller",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:ctrlControllerMode",
      "description": {
        "fct-module": "Sound.MIDI.ALSA",
        "fct-package": "midi-alsa",
        "fct-signature": "T Ctrl ControllerMode",
        "fct-source": "src/Sound-MIDI-ALSA.html#ctrlControllerMode",
        "fct-type": "function",
        "title": "ctrlControllerMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA",
        "module": "Sound.MIDI.ALSA",
        "name": "ctrlControllerMode",
        "normalized": "",
        "package": "midi-alsa",
        "partial": "Controller Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:ctrlProgram",
      "description": {
        "fct-module": "Sound.MIDI.ALSA",
        "fct-package": "midi-alsa",
        "fct-signature": "T Ctrl Program",
        "fct-source": "src/Sound-MIDI-ALSA.html#ctrlProgram",
        "fct-type": "function",
        "title": "ctrlProgram"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA",
        "module": "Sound.MIDI.ALSA",
        "name": "ctrlProgram",
        "normalized": "",
        "package": "midi-alsa",
        "partial": "Program",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:ctrlValue",
      "description": {
        "fct-module": "Sound.MIDI.ALSA",
        "fct-package": "midi-alsa",
        "fct-signature": "T Ctrl Int",
        "fct-source": "src/Sound-MIDI-ALSA.html#ctrlValue",
        "fct-type": "function",
        "title": "ctrlValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA",
        "module": "Sound.MIDI.ALSA",
        "name": "ctrlValue",
        "normalized": "",
        "package": "midi-alsa",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:fromChannel",
      "description": {
        "fct-module": "Sound.MIDI.ALSA",
        "fct-package": "midi-alsa",
        "fct-signature": "Channel -\u003e Channel",
        "fct-source": "src/Sound-MIDI-ALSA.html#fromChannel",
        "fct-type": "function",
        "title": "fromChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA",
        "module": "Sound.MIDI.ALSA",
        "name": "fromChannel",
        "normalized": "Channel-\u003eChannel",
        "package": "midi-alsa",
        "partial": "Channel",
        "signature": "Channel-\u003eChannel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:fromController",
      "description": {
        "fct-module": "Sound.MIDI.ALSA",
        "fct-package": "midi-alsa",
        "fct-signature": "Controller -\u003e Parameter",
        "fct-source": "src/Sound-MIDI-ALSA.html#fromController",
        "fct-type": "function",
        "title": "fromController"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA",
        "module": "Sound.MIDI.ALSA",
        "name": "fromController",
        "normalized": "Controller-\u003eParameter",
        "package": "midi-alsa",
        "partial": "Controller",
        "signature": "Controller-\u003eParameter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:fromPitch",
      "description": {
        "fct-module": "Sound.MIDI.ALSA",
        "fct-package": "midi-alsa",
        "fct-signature": "Pitch -\u003e Pitch",
        "fct-source": "src/Sound-MIDI-ALSA.html#fromPitch",
        "fct-type": "function",
        "title": "fromPitch"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA",
        "module": "Sound.MIDI.ALSA",
        "name": "fromPitch",
        "normalized": "Pitch-\u003ePitch",
        "package": "midi-alsa",
        "partial": "Pitch",
        "signature": "Pitch-\u003ePitch"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:fromProgram",
      "description": {
        "fct-module": "Sound.MIDI.ALSA",
        "fct-package": "midi-alsa",
        "fct-signature": "Program -\u003e Value",
        "fct-source": "src/Sound-MIDI-ALSA.html#fromProgram",
        "fct-type": "function",
        "title": "fromProgram"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA",
        "module": "Sound.MIDI.ALSA",
        "name": "fromProgram",
        "normalized": "Program-\u003eValue",
        "package": "midi-alsa",
        "partial": "Program",
        "signature": "Program-\u003eValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:fromVelocity",
      "description": {
        "fct-module": "Sound.MIDI.ALSA",
        "fct-package": "midi-alsa",
        "fct-signature": "Velocity -\u003e Velocity",
        "fct-source": "src/Sound-MIDI-ALSA.html#fromVelocity",
        "fct-type": "function",
        "title": "fromVelocity"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA",
        "module": "Sound.MIDI.ALSA",
        "name": "fromVelocity",
        "normalized": "Velocity-\u003eVelocity",
        "package": "midi-alsa",
        "partial": "Velocity",
        "signature": "Velocity-\u003eVelocity"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:modeEvent",
      "description": {
        "fct-module": "Sound.MIDI.ALSA",
        "fct-package": "midi-alsa",
        "fct-signature": "Channel -\u003e T -\u003e Ctrl",
        "fct-source": "src/Sound-MIDI-ALSA.html#modeEvent",
        "fct-type": "function",
        "title": "modeEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA",
        "module": "Sound.MIDI.ALSA",
        "name": "modeEvent",
        "normalized": "Channel-\u003eT-\u003eCtrl",
        "package": "midi-alsa",
        "partial": "Event",
        "signature": "Channel-\u003eT-\u003eCtrl"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:normalNoteFromEvent",
      "description": {
        "fct-module": "Sound.MIDI.ALSA",
        "fct-package": "midi-alsa",
        "fct-signature": "NoteEv -\u003e Note -\u003e (NoteEv, Velocity)",
        "fct-source": "src/Sound-MIDI-ALSA.html#normalNoteFromEvent",
        "fct-type": "function",
        "title": "normalNoteFromEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA",
        "module": "Sound.MIDI.ALSA",
        "name": "normalNoteFromEvent",
        "normalized": "NoteEv-\u003eNote-\u003e(NoteEv,Velocity)",
        "package": "midi-alsa",
        "partial": "Note From Event",
        "signature": "NoteEv-\u003eNote-\u003e(NoteEv,Velocity)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:normalizeNote",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a \u003ccode\u003eNoteOff\u003c/code\u003e if input is a \u003ccode\u003eNoteOn\u003c/code\u003e with velocity zero.\nThis is a trick of the MIDI standard\nin order to allow compression of a series of note events.\nAfter normalization you can safely match on \u003ccode\u003eNoteOn\u003c/code\u003e and \u003ccode\u003eNoteOff\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA",
        "fct-package": "midi-alsa",
        "fct-signature": "(NoteEv, Velocity) -\u003e (NoteEv, Velocity)",
        "fct-source": "src/Sound-MIDI-ALSA.html#normalizeNote",
        "fct-type": "function",
        "title": "normalizeNote"
      },
      "index": {
        "description": "Return NoteOff if input is NoteOn with velocity zero This is trick of the MIDI standard in order to allow compression of series of note events After normalization you can safely match on NoteOn and NoteOff",
        "hierarchy": "Sound MIDI ALSA",
        "module": "Sound.MIDI.ALSA",
        "name": "normalizeNote",
        "normalized": "(NoteEv,Velocity)-\u003e(NoteEv,Velocity)",
        "package": "midi-alsa",
        "partial": "Note",
        "signature": "(NoteEv,Velocity)-\u003e(NoteEv,Velocity)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:noteChannel",
      "description": {
        "fct-module": "Sound.MIDI.ALSA",
        "fct-package": "midi-alsa",
        "fct-signature": "T Note Channel",
        "fct-source": "src/Sound-MIDI-ALSA.html#noteChannel",
        "fct-type": "function",
        "title": "noteChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA",
        "module": "Sound.MIDI.ALSA",
        "name": "noteChannel",
        "normalized": "",
        "package": "midi-alsa",
        "partial": "Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:noteEvent",
      "description": {
        "fct-module": "Sound.MIDI.ALSA",
        "fct-package": "midi-alsa",
        "fct-signature": "Channel -\u003e Pitch -\u003e Velocity -\u003e Velocity -\u003e Int -\u003e Note",
        "fct-source": "src/Sound-MIDI-ALSA.html#noteEvent",
        "fct-type": "function",
        "title": "noteEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA",
        "module": "Sound.MIDI.ALSA",
        "name": "noteEvent",
        "normalized": "Channel-\u003ePitch-\u003eVelocity-\u003eVelocity-\u003eInt-\u003eNote",
        "package": "midi-alsa",
        "partial": "Event",
        "signature": "Channel-\u003ePitch-\u003eVelocity-\u003eVelocity-\u003eInt-\u003eNote"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:notePitch",
      "description": {
        "fct-module": "Sound.MIDI.ALSA",
        "fct-package": "midi-alsa",
        "fct-signature": "T Note Pitch",
        "fct-source": "src/Sound-MIDI-ALSA.html#notePitch",
        "fct-type": "function",
        "title": "notePitch"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA",
        "module": "Sound.MIDI.ALSA",
        "name": "notePitch",
        "normalized": "",
        "package": "midi-alsa",
        "partial": "Pitch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:noteVelocity",
      "description": {
        "fct-descr": "\u003cp\u003eThis may not yield what you expect.\nSee \u003ccode\u003e\u003ca\u003enormalizeNote\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA",
        "fct-package": "midi-alsa",
        "fct-signature": "T Note Velocity",
        "fct-source": "src/Sound-MIDI-ALSA.html#noteVelocity",
        "fct-type": "function",
        "title": "noteVelocity"
      },
      "index": {
        "description": "This may not yield what you expect See normalizeNote",
        "hierarchy": "Sound MIDI ALSA",
        "module": "Sound.MIDI.ALSA",
        "name": "noteVelocity",
        "normalized": "",
        "package": "midi-alsa",
        "partial": "Velocity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:programChangeEvent",
      "description": {
        "fct-module": "Sound.MIDI.ALSA",
        "fct-package": "midi-alsa",
        "fct-signature": "Channel -\u003e Program -\u003e Ctrl",
        "fct-source": "src/Sound-MIDI-ALSA.html#programChangeEvent",
        "fct-type": "function",
        "title": "programChangeEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA",
        "module": "Sound.MIDI.ALSA",
        "name": "programChangeEvent",
        "normalized": "Channel-\u003eProgram-\u003eCtrl",
        "package": "midi-alsa",
        "partial": "Change Event",
        "signature": "Channel-\u003eProgram-\u003eCtrl"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:toChannel",
      "description": {
        "fct-module": "Sound.MIDI.ALSA",
        "fct-package": "midi-alsa",
        "fct-signature": "Channel -\u003e Channel",
        "fct-source": "src/Sound-MIDI-ALSA.html#toChannel",
        "fct-type": "function",
        "title": "toChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA",
        "module": "Sound.MIDI.ALSA",
        "name": "toChannel",
        "normalized": "Channel-\u003eChannel",
        "package": "midi-alsa",
        "partial": "Channel",
        "signature": "Channel-\u003eChannel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:toController",
      "description": {
        "fct-descr": "\u003cp\u003eControllers from \u003ccode\u003e0x78\u003c/code\u003e to \u003ccode\u003e0x7F\u003c/code\u003e are special,\nyou must assert that the controller number is in the range \u003ccode\u003e0\u003c/code\u003e to \u003ccode\u003e0x77\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA",
        "fct-package": "midi-alsa",
        "fct-signature": "Parameter -\u003e Controller",
        "fct-source": "src/Sound-MIDI-ALSA.html#toController",
        "fct-type": "function",
        "title": "toController"
      },
      "index": {
        "description": "Controllers from x78 to x7F are special you must assert that the controller number is in the range to x77",
        "hierarchy": "Sound MIDI ALSA",
        "module": "Sound.MIDI.ALSA",
        "name": "toController",
        "normalized": "Parameter-\u003eController",
        "package": "midi-alsa",
        "partial": "Controller",
        "signature": "Parameter-\u003eController"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:toPitch",
      "description": {
        "fct-module": "Sound.MIDI.ALSA",
        "fct-package": "midi-alsa",
        "fct-signature": "Pitch -\u003e Pitch",
        "fct-source": "src/Sound-MIDI-ALSA.html#toPitch",
        "fct-type": "function",
        "title": "toPitch"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA",
        "module": "Sound.MIDI.ALSA",
        "name": "toPitch",
        "normalized": "Pitch-\u003ePitch",
        "package": "midi-alsa",
        "partial": "Pitch",
        "signature": "Pitch-\u003ePitch"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:toProgram",
      "description": {
        "fct-module": "Sound.MIDI.ALSA",
        "fct-package": "midi-alsa",
        "fct-signature": "Value -\u003e Program",
        "fct-source": "src/Sound-MIDI-ALSA.html#toProgram",
        "fct-type": "function",
        "title": "toProgram"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA",
        "module": "Sound.MIDI.ALSA",
        "name": "toProgram",
        "normalized": "Value-\u003eProgram",
        "package": "midi-alsa",
        "partial": "Program",
        "signature": "Value-\u003eProgram"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/midi-alsa/docs/Sound-MIDI-ALSA.html#v:toVelocity",
      "description": {
        "fct-module": "Sound.MIDI.ALSA",
        "fct-package": "midi-alsa",
        "fct-signature": "Velocity -\u003e Velocity",
        "fct-source": "src/Sound-MIDI-ALSA.html#toVelocity",
        "fct-type": "function",
        "title": "toVelocity"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA",
        "module": "Sound.MIDI.ALSA",
        "name": "toVelocity",
        "normalized": "Velocity-\u003eVelocity",
        "package": "midi-alsa",
        "partial": "Velocity",
        "signature": "Velocity-\u003eVelocity"
      }
    }
  }
]