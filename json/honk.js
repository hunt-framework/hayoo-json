[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLow level FFI interface. You should never need to use this directly.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.Honk.Internal",
        "fct-package": "honk",
        "fct-signature": "module",
        "fct-source": "src/Sound-Honk-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "Low level FFI interface You should never need to use this directly",
        "hierarchy": "Sound Honk Internal",
        "module": "Sound.Honk.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "honk",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Internal.html#t:BeepFd",
      "description": {
        "fct-module": "Sound.Honk.Internal",
        "fct-package": "honk",
        "fct-signature": "newtype",
        "fct-source": "src/Sound-Honk-Internal.html#BeepFd",
        "fct-type": "newtype",
        "title": "BeepFd"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Honk Internal",
        "module": "Sound.Honk.Internal",
        "name": "BeepFd",
        "normalized": "",
        "package": "honk",
        "partial": "Beep Fd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Internal.html#v:BeepFd",
      "description": {
        "fct-module": "Sound.Honk.Internal",
        "fct-package": "honk",
        "fct-signature": "BeepFd CInt",
        "fct-source": "src/Sound-Honk-Internal.html#BeepFd",
        "fct-type": "function",
        "title": "BeepFd"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Honk Internal",
        "module": "Sound.Honk.Internal",
        "name": "BeepFd",
        "normalized": "",
        "package": "honk",
        "partial": "Beep Fd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Internal.html#v:beepClose",
      "description": {
        "fct-descr": "\u003cp\u003eClose the handle.\n\u003c/p\u003e",
        "fct-module": "Sound.Honk.Internal",
        "fct-package": "honk",
        "fct-signature": "BeepFd -\u003e IO ()",
        "fct-source": "src/Sound-Honk-Internal.html#beepClose",
        "fct-type": "function",
        "title": "beepClose"
      },
      "index": {
        "description": "Close the handle",
        "hierarchy": "Sound Honk Internal",
        "module": "Sound.Honk.Internal",
        "name": "beepClose",
        "normalized": "BeepFd-\u003eIO()",
        "package": "honk",
        "partial": "Close",
        "signature": "BeepFd-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Internal.html#v:beepDo",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a beep.\n\u003c/p\u003e",
        "fct-module": "Sound.Honk.Internal",
        "fct-package": "honk",
        "fct-signature": "BeepFd-\u003e Rational-\u003e Double-\u003e IO ()",
        "fct-type": "function",
        "title": "beepDo"
      },
      "index": {
        "description": "Perform beep",
        "hierarchy": "Sound Honk Internal",
        "module": "Sound.Honk.Internal",
        "name": "beepDo",
        "normalized": "BeepFd-\u003eRational-\u003eDouble-\u003eIO()",
        "package": "honk",
        "partial": "Do",
        "signature": "BeepFd-\u003eRational-\u003eDouble-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Internal.html#v:beepOpen",
      "description": {
        "fct-descr": "\u003cp\u003eOpen a handle to the console.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003ewithBeepFd\u003c/a\u003e\u003c/code\u003e instead if possible, since it keeps track of closing\n the handle automatically.\n\u003c/p\u003e",
        "fct-module": "Sound.Honk.Internal",
        "fct-package": "honk",
        "fct-signature": "IO BeepFd",
        "fct-source": "src/Sound-Honk-Internal.html#beepOpen",
        "fct-type": "function",
        "title": "beepOpen"
      },
      "index": {
        "description": "Open handle to the console Use withBeepFd instead if possible since it keeps track of closing the handle automatically",
        "hierarchy": "Sound Honk Internal",
        "module": "Sound.Honk.Internal",
        "name": "beepOpen",
        "normalized": "",
        "package": "honk",
        "partial": "Open",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Internal.html#v:withBeepFd",
      "description": {
        "fct-descr": "\u003cp\u003eRun a function that uses a \u003ccode\u003e\u003ca\u003eBeepFd\u003c/a\u003e\u003c/code\u003e, opening and closing the\n handle automatically.\n\u003c/p\u003e",
        "fct-module": "Sound.Honk.Internal",
        "fct-package": "honk",
        "fct-signature": "(BeepFd -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Sound-Honk-Internal.html#withBeepFd",
        "fct-type": "function",
        "title": "withBeepFd"
      },
      "index": {
        "description": "Run function that uses BeepFd opening and closing the handle automatically",
        "hierarchy": "Sound Honk Internal",
        "module": "Sound.Honk.Internal",
        "name": "withBeepFd",
        "normalized": "(BeepFd-\u003eIO a)-\u003eIO a",
        "package": "honk",
        "partial": "Beep Fd",
        "signature": "(BeepFd-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCore data types used by Honk.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.Honk.Types",
        "fct-package": "honk",
        "fct-signature": "module",
        "fct-source": "src/Sound-Honk-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Core data types used by Honk",
        "hierarchy": "Sound Honk Types",
        "module": "Sound.Honk.Types",
        "name": "Types",
        "normalized": "",
        "package": "honk",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Types.html#t:Note",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a single note, with a duration in seconds and a\n frequency in hertz.\n\u003c/p\u003e",
        "fct-module": "Sound.Honk.Types",
        "fct-package": "honk",
        "fct-signature": "data",
        "fct-source": "src/Sound-Honk-Types.html#Note",
        "fct-type": "data",
        "title": "Note"
      },
      "index": {
        "description": "Represents single note with duration in seconds and frequency in hertz",
        "hierarchy": "Sound Honk Types",
        "module": "Sound.Honk.Types",
        "name": "Note",
        "normalized": "",
        "package": "honk",
        "partial": "Note",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Types.html#v:Note",
      "description": {
        "fct-module": "Sound.Honk.Types",
        "fct-package": "honk",
        "fct-signature": "Note",
        "fct-source": "src/Sound-Honk-Types.html#Note",
        "fct-type": "function",
        "title": "Note"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Honk Types",
        "module": "Sound.Honk.Types",
        "name": "Note",
        "normalized": "",
        "package": "honk",
        "partial": "Note",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Types.html#v:duration",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sound.Honk.Types",
        "fct-package": "honk",
        "fct-signature": "Rational",
        "fct-source": "src/Sound-Honk-Types.html#Note",
        "fct-type": "function",
        "title": "duration"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Honk Types",
        "module": "Sound.Honk.Types",
        "name": "duration",
        "normalized": "",
        "package": "honk",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Types.html#v:frequency",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sound.Honk.Types",
        "fct-package": "honk",
        "fct-signature": "Double",
        "fct-source": "src/Sound-Honk-Types.html#Note",
        "fct-type": "function",
        "title": "frequency"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Honk Types",
        "module": "Sound.Honk.Types",
        "name": "frequency",
        "normalized": "",
        "package": "honk",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Util.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRandom utility functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.Honk.Util",
        "fct-package": "honk",
        "fct-signature": "module",
        "fct-source": "src/Sound-Honk-Util.html",
        "fct-type": "module",
        "title": "Util"
      },
      "index": {
        "description": "Random utility functions",
        "hierarchy": "Sound Honk Util",
        "module": "Sound.Honk.Util",
        "name": "Util",
        "normalized": "",
        "package": "honk",
        "partial": "Util",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Util.html#v:freqToMidi",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a frequency to a MIDI note value.\n\u003c/p\u003e",
        "fct-module": "Sound.Honk.Util",
        "fct-package": "honk",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Sound-Honk-Util.html#freqToMidi",
        "fct-type": "function",
        "title": "freqToMidi"
      },
      "index": {
        "description": "Convert frequency to MIDI note value",
        "hierarchy": "Sound Honk Util",
        "module": "Sound.Honk.Util",
        "name": "freqToMidi",
        "normalized": "a-\u003ea",
        "package": "honk",
        "partial": "To Midi",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Util.html#v:loop",
      "description": {
        "fct-descr": "\u003cp\u003eRepeat a sequence a specified number of times.\n\u003c/p\u003e",
        "fct-module": "Sound.Honk.Util",
        "fct-package": "honk",
        "fct-signature": "Int -\u003e [a] -\u003e [a]",
        "fct-source": "src/Sound-Honk-Util.html#loop",
        "fct-type": "function",
        "title": "loop"
      },
      "index": {
        "description": "Repeat sequence specified number of times",
        "hierarchy": "Sound Honk Util",
        "module": "Sound.Honk.Util",
        "name": "loop",
        "normalized": "Int-\u003e[a]-\u003e[a]",
        "package": "honk",
        "partial": "",
        "signature": "Int-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Util.html#v:midiToFreq",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a MIDI note value to a frequency.\n\u003c/p\u003e",
        "fct-module": "Sound.Honk.Util",
        "fct-package": "honk",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Sound-Honk-Util.html#midiToFreq",
        "fct-type": "function",
        "title": "midiToFreq"
      },
      "index": {
        "description": "Convert MIDI note value to frequency",
        "hierarchy": "Sound Honk Util",
        "module": "Sound.Honk.Util",
        "name": "midiToFreq",
        "normalized": "a-\u003ea",
        "package": "honk",
        "partial": "To Freq",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCross-platform interface to the PC speaker.\n\u003c/p\u003e\u003cp\u003eHere's an example:\n\u003c/p\u003e\u003cpre\u003e simpleBeep = play [Note 1.0 440]\n\u003c/pre\u003e\u003cp\u003eFor more examples, see the readme.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.Honk",
        "fct-package": "honk",
        "fct-signature": "module",
        "fct-source": "src/Sound-Honk.html",
        "fct-type": "module",
        "title": "Honk"
      },
      "index": {
        "description": "Cross-platform interface to the PC speaker Here an example simpleBeep play Note For more examples see the readme",
        "hierarchy": "Sound Honk",
        "module": "Sound.Honk",
        "name": "Honk",
        "normalized": "",
        "package": "honk",
        "partial": "Honk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk.html#v:play",
      "description": {
        "fct-descr": "\u003cp\u003ePlay multiple notes in order, one after the other.\n\u003c/p\u003e",
        "fct-module": "Sound.Honk",
        "fct-package": "honk",
        "fct-signature": "[Note] -\u003e IO ()",
        "fct-source": "src/Sound-Honk.html#play",
        "fct-type": "function",
        "title": "play"
      },
      "index": {
        "description": "Play multiple notes in order one after the other",
        "hierarchy": "Sound Honk",
        "module": "Sound.Honk",
        "name": "play",
        "normalized": "[Note]-\u003eIO()",
        "package": "honk",
        "partial": "",
        "signature": "[Note]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk.html#v:playOne",
      "description": {
        "fct-descr": "\u003cp\u003ePlay a single note.\n\u003c/p\u003e",
        "fct-module": "Sound.Honk",
        "fct-package": "honk",
        "fct-signature": "Note -\u003e IO ()",
        "fct-source": "src/Sound-Honk.html#playOne",
        "fct-type": "function",
        "title": "playOne"
      },
      "index": {
        "description": "Play single note",
        "hierarchy": "Sound Honk",
        "module": "Sound.Honk",
        "name": "playOne",
        "normalized": "Note-\u003eIO()",
        "package": "honk",
        "partial": "One",
        "signature": "Note-\u003eIO()"
      }
    }
  }
]