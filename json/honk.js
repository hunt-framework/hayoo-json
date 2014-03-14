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
        "word": "honk"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLow level FFI interface. You should never need to use this directly.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.Honk.Internal",
          "name": "Internal",
          "package": "honk",
          "source": "src/Sound-Honk-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Low level FFI interface You should never need to use this directly",
          "hierarchy": "Sound Honk Internal",
          "module": "Sound.Honk.Internal",
          "name": "Internal",
          "package": "honk",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Honk.Internal",
          "name": "BeepFd",
          "package": "honk",
          "source": "src/Sound-Honk-Internal.html#BeepFd",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Sound Honk Internal",
          "module": "Sound.Honk.Internal",
          "name": "BeepFd",
          "package": "honk",
          "partial": "Beep Fd",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Internal.html#t:BeepFd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Honk.Internal",
          "name": "BeepFd",
          "package": "honk",
          "signature": "BeepFd CInt",
          "source": "src/Sound-Honk-Internal.html#BeepFd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Honk Internal",
          "module": "Sound.Honk.Internal",
          "name": "BeepFd",
          "package": "honk",
          "partial": "Beep Fd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Internal.html#v:BeepFd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose the handle.\n\u003c/p\u003e",
          "module": "Sound.Honk.Internal",
          "name": "beepClose",
          "package": "honk",
          "signature": "BeepFd -\u003e IO ()",
          "source": "src/Sound-Honk-Internal.html#beepClose",
          "type": "function"
        },
        "index": {
          "description": "Close the handle",
          "hierarchy": "Sound Honk Internal",
          "module": "Sound.Honk.Internal",
          "name": "beepClose",
          "normalized": "BeepFd-\u003eIO()",
          "package": "honk",
          "partial": "Close",
          "signature": "BeepFd-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Internal.html#v:beepClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a beep.\n\u003c/p\u003e",
          "module": "Sound.Honk.Internal",
          "name": "beepDo",
          "package": "honk",
          "signature": "BeepFd-\u003e Rational-\u003e Double-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Perform beep",
          "hierarchy": "Sound Honk Internal",
          "module": "Sound.Honk.Internal",
          "name": "beepDo",
          "normalized": "BeepFd-\u003eRational-\u003eDouble-\u003eIO()",
          "package": "honk",
          "partial": "Do",
          "signature": "BeepFd-\u003eRational-\u003eDouble-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Internal.html#v:beepDo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a handle to the console.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003ewithBeepFd\u003c/a\u003e\u003c/code\u003e instead if possible, since it keeps track of closing\n the handle automatically.\n\u003c/p\u003e",
          "module": "Sound.Honk.Internal",
          "name": "beepOpen",
          "package": "honk",
          "signature": "IO BeepFd",
          "source": "src/Sound-Honk-Internal.html#beepOpen",
          "type": "function"
        },
        "index": {
          "description": "Open handle to the console Use withBeepFd instead if possible since it keeps track of closing the handle automatically",
          "hierarchy": "Sound Honk Internal",
          "module": "Sound.Honk.Internal",
          "name": "beepOpen",
          "package": "honk",
          "partial": "Open",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Internal.html#v:beepOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a function that uses a \u003ccode\u003e\u003ca\u003eBeepFd\u003c/a\u003e\u003c/code\u003e, opening and closing the\n handle automatically.\n\u003c/p\u003e",
          "module": "Sound.Honk.Internal",
          "name": "withBeepFd",
          "package": "honk",
          "signature": "(BeepFd -\u003e IO a) -\u003e IO a",
          "source": "src/Sound-Honk-Internal.html#withBeepFd",
          "type": "function"
        },
        "index": {
          "description": "Run function that uses BeepFd opening and closing the handle automatically",
          "hierarchy": "Sound Honk Internal",
          "module": "Sound.Honk.Internal",
          "name": "withBeepFd",
          "normalized": "(BeepFd-\u003eIO a)-\u003eIO a",
          "package": "honk",
          "partial": "Beep Fd",
          "signature": "(BeepFd-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Internal.html#v:withBeepFd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCore data types used by Honk.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.Honk.Types",
          "name": "Types",
          "package": "honk",
          "source": "src/Sound-Honk-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Core data types used by Honk",
          "hierarchy": "Sound Honk Types",
          "module": "Sound.Honk.Types",
          "name": "Types",
          "package": "honk",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a single note, with a duration in seconds and a\n frequency in hertz.\n\u003c/p\u003e",
          "module": "Sound.Honk.Types",
          "name": "Note",
          "package": "honk",
          "source": "src/Sound-Honk-Types.html#Note",
          "type": "data"
        },
        "index": {
          "description": "Represents single note with duration in seconds and frequency in hertz",
          "hierarchy": "Sound Honk Types",
          "module": "Sound.Honk.Types",
          "name": "Note",
          "package": "honk",
          "partial": "Note",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Types.html#t:Note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Honk.Types",
          "name": "Note",
          "package": "honk",
          "signature": "Note",
          "source": "src/Sound-Honk-Types.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Honk Types",
          "module": "Sound.Honk.Types",
          "name": "Note",
          "package": "honk",
          "partial": "Note",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Types.html#v:Note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Honk.Types",
          "name": "duration",
          "package": "honk",
          "signature": "Rational",
          "source": "src/Sound-Honk-Types.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Honk Types",
          "module": "Sound.Honk.Types",
          "name": "duration",
          "package": "honk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Types.html#v:duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Honk.Types",
          "name": "frequency",
          "package": "honk",
          "signature": "Double",
          "source": "src/Sound-Honk-Types.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Honk Types",
          "module": "Sound.Honk.Types",
          "name": "frequency",
          "package": "honk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Types.html#v:frequency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRandom utility functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.Honk.Util",
          "name": "Util",
          "package": "honk",
          "source": "src/Sound-Honk-Util.html",
          "type": "module"
        },
        "index": {
          "description": "Random utility functions",
          "hierarchy": "Sound Honk Util",
          "module": "Sound.Honk.Util",
          "name": "Util",
          "package": "honk",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a frequency to a MIDI note value.\n\u003c/p\u003e",
          "module": "Sound.Honk.Util",
          "name": "freqToMidi",
          "package": "honk",
          "signature": "a -\u003e a",
          "source": "src/Sound-Honk-Util.html#freqToMidi",
          "type": "function"
        },
        "index": {
          "description": "Convert frequency to MIDI note value",
          "hierarchy": "Sound Honk Util",
          "module": "Sound.Honk.Util",
          "name": "freqToMidi",
          "normalized": "a-\u003ea",
          "package": "honk",
          "partial": "To Midi",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Util.html#v:freqToMidi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeat a sequence a specified number of times.\n\u003c/p\u003e",
          "module": "Sound.Honk.Util",
          "name": "loop",
          "package": "honk",
          "signature": "Int -\u003e [a] -\u003e [a]",
          "source": "src/Sound-Honk-Util.html#loop",
          "type": "function"
        },
        "index": {
          "description": "Repeat sequence specified number of times",
          "hierarchy": "Sound Honk Util",
          "module": "Sound.Honk.Util",
          "name": "loop",
          "normalized": "Int-\u003e[a]-\u003e[a]",
          "package": "honk",
          "signature": "Int-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Util.html#v:loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a MIDI note value to a frequency.\n\u003c/p\u003e",
          "module": "Sound.Honk.Util",
          "name": "midiToFreq",
          "package": "honk",
          "signature": "a -\u003e a",
          "source": "src/Sound-Honk-Util.html#midiToFreq",
          "type": "function"
        },
        "index": {
          "description": "Convert MIDI note value to frequency",
          "hierarchy": "Sound Honk Util",
          "module": "Sound.Honk.Util",
          "name": "midiToFreq",
          "normalized": "a-\u003ea",
          "package": "honk",
          "partial": "To Freq",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk-Util.html#v:midiToFreq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCross-platform interface to the PC speaker.\n\u003c/p\u003e\u003cp\u003eHere's an example:\n\u003c/p\u003e\u003cpre\u003e simpleBeep = play [Note 1.0 440]\n\u003c/pre\u003e\u003cp\u003eFor more examples, see the readme.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.Honk",
          "name": "Honk",
          "package": "honk",
          "source": "src/Sound-Honk.html",
          "type": "module"
        },
        "index": {
          "description": "Cross-platform interface to the PC speaker Here an example simpleBeep play Note For more examples see the readme",
          "hierarchy": "Sound Honk",
          "module": "Sound.Honk",
          "name": "Honk",
          "package": "honk",
          "partial": "Honk",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlay multiple notes in order, one after the other.\n\u003c/p\u003e",
          "module": "Sound.Honk",
          "name": "play",
          "package": "honk",
          "signature": "[Note] -\u003e IO ()",
          "source": "src/Sound-Honk.html#play",
          "type": "function"
        },
        "index": {
          "description": "Play multiple notes in order one after the other",
          "hierarchy": "Sound Honk",
          "module": "Sound.Honk",
          "name": "play",
          "normalized": "[Note]-\u003eIO()",
          "package": "honk",
          "signature": "[Note]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk.html#v:play"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlay a single note.\n\u003c/p\u003e",
          "module": "Sound.Honk",
          "name": "playOne",
          "package": "honk",
          "signature": "Note -\u003e IO ()",
          "source": "src/Sound-Honk.html#playOne",
          "type": "function"
        },
        "index": {
          "description": "Play single note",
          "hierarchy": "Sound Honk",
          "module": "Sound.Honk",
          "name": "playOne",
          "normalized": "Note-\u003eIO()",
          "package": "honk",
          "partial": "One",
          "signature": "Note-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/honk/docs/Sound-Honk.html#v:playOne"
      }
    }
  ]
]