[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "module",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html",
        "fct-type": "module",
        "title": "Causal"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "Causal",
        "normalized": "",
        "package": "streamed",
        "partial": "Causal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#t:Pattern",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "class",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#Pattern",
        "fct-type": "class",
        "title": "Pattern"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "Pattern",
        "normalized": "",
        "package": "streamed",
        "partial": "Pattern",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#t:T",
      "description": {
        "fct-descr": "\u003cp\u003eThe list of scheduled triggers must be finite.\n\u003c/p\u003e\u003cp\u003eThis process cannot drop an incoming event.\nIn order to do so, you must write something of type \u003ccode\u003eT a (Maybe b)\u003c/code\u003e.\nFor convenience you could wrap this in something like \u003ccode\u003eExt a b\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "data",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#T",
        "fct-type": "data",
        "title": "T"
      },
      "index": {
        "description": "The list of scheduled triggers must be finite This process cannot drop an incoming event In order to do so you must write something of type Maybe For convenience you could wrap this in something like Ext",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "T",
        "normalized": "",
        "package": "streamed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#t:TempoControl",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "type",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#TempoControl",
        "fct-type": "type",
        "title": "TempoControl"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "TempoControl",
        "normalized": "",
        "package": "streamed",
        "partial": "Tempo Control",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:cyclePrograms",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "[Program] -\u003e T Data [Data]",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#cyclePrograms",
        "fct-type": "function",
        "title": "cyclePrograms"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "cyclePrograms",
        "normalized": "[Program]-\u003eT Data[Data]",
        "package": "streamed",
        "partial": "Programs",
        "signature": "[Program]-\u003eT Data[Data]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:cycleProgramsDefer",
      "description": {
        "fct-descr": "\u003cpre\u003e cycleProgramsDefer t\n\u003c/pre\u003e\u003cp\u003eAfter a note that triggers a program change,\nwe won't change the program in the next \u003ccode\u003et\u003c/code\u003e seconds.\nThis is in order to allow chords being played\nand in order to skip accidentally played notes.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "Time -\u003e [Program] -\u003e T Data [Data]",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#cycleProgramsDefer",
        "fct-type": "function",
        "title": "cycleProgramsDefer"
      },
      "index": {
        "description": "cycleProgramsDefer After note that triggers program change we won change the program in the next seconds This is in order to allow chords being played and in order to skip accidentally played notes",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "cycleProgramsDefer",
        "normalized": "Time-\u003e[Program]-\u003eT Data[Data]",
        "package": "streamed",
        "partial": "Programs Defer",
        "signature": "Time-\u003e[Program]-\u003eT Data[Data]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:delayAdd",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "Word8 -\u003e Time -\u003e T Data EventDataBundle",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#delayAdd",
        "fct-type": "function",
        "title": "delayAdd"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "delayAdd",
        "normalized": "Word-\u003eTime-\u003eT Data EventDataBundle",
        "package": "streamed",
        "partial": "Add",
        "signature": "Word-\u003eTime-\u003eT Data EventDataBundle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:eitherIn",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "T a c -\u003e T b c -\u003e T (Either a b) c",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#eitherIn",
        "fct-type": "function",
        "title": "eitherIn"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "eitherIn",
        "normalized": "T a b-\u003eT c b-\u003eT(Either a c)b",
        "package": "streamed",
        "partial": "In",
        "signature": "T a c-\u003eT b c-\u003eT(Either a b)c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:flatten",
      "description": {
        "fct-descr": "\u003cp\u003einput is most oftenly of type \u003ccode\u003e\u003ca\u003eEventDataBundle\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "T (Bundle a) (Maybe a)",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#flatten",
        "fct-type": "function",
        "title": "flatten"
      },
      "index": {
        "description": "input is most oftenly of type EventDataBundle",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "flatten",
        "normalized": "",
        "package": "streamed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:groupLatch",
      "description": {
        "fct-descr": "\u003cp\u003eAll pressed keys are latched until a key is pressed after a pause\n(i.e. all keys released).\nFor aborting the pattern you have to send\na \u003ccode\u003e\u003ca\u003eAllNotesOff\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eAllSoundOff\u003c/a\u003e\u003c/code\u003e message.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "T Data [Data]",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#groupLatch",
        "fct-type": "function",
        "title": "groupLatch"
      },
      "index": {
        "description": "All pressed keys are latched until key is pressed after pause i.e all keys released For aborting the pattern you have to send AllNotesOff or AllSoundOff message",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "groupLatch",
        "normalized": "T Data[Data]",
        "package": "streamed",
        "partial": "Latch",
        "signature": "T Data[Data]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:guide",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "(a -\u003e Bool) -\u003e T a b -\u003e T a b -\u003e T a b",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#guide",
        "fct-type": "function",
        "title": "guide"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "guide",
        "normalized": "(a-\u003eBool)-\u003eT a b-\u003eT a b-\u003eT a b",
        "package": "streamed",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eT a b-\u003eT a b-\u003eT a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:guideWithMode",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "(Data -\u003e Bool) -\u003e T Data b -\u003e T Data b -\u003e T Data b",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#guideWithMode",
        "fct-type": "function",
        "title": "guideWithMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "guideWithMode",
        "normalized": "(Data-\u003eBool)-\u003eT Data a-\u003eT Data a-\u003eT Data a",
        "package": "streamed",
        "partial": "With Mode",
        "signature": "(Data-\u003eBool)-\u003eT Data b-\u003eT Data b-\u003eT Data b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:guitar",
      "description": {
        "fct-descr": "\u003cp\u003eTry for instance \u003ccode\u003eguitar 0.05 0.03\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis process simulates playing chords on a guitar.\nIf you press some keys like C, E, G on the keyboard,\nthen this process figures out what tones would be played on a guitar\nand plays them one after another with short delays.\nIf you release the keys then the chord is played in reverse order.\nThis simulates the hand going up and down on the guitar strings.\nUnfortunatley it is not possible to go up twice or go down twice this way.\nThe octaves of the pressed keys are ignored.\n\u003c/p\u003e\u003cp\u003eIn detail calling \u003ccode\u003eguitar collectTime stepTime\u003c/code\u003e means:\nIf a key is pressed,\nthen collect all key-press events for the next \u003ccode\u003ecollectTime\u003c/code\u003e seconds.\nAfter this period, send out a guitar-like chord pattern for the pressed keys\nwith a delay of \u003ccode\u003estepTime\u003c/code\u003e between the notes.\nNow wait until all keys are released.\nNote that in the meantime keys could have been pressed or released.\nThey are registered, but not played.\nIf all keys are released then send out the reverse chord.\n\u003c/p\u003e\u003cp\u003eOn an AllSoundOff message, release all played tones.\n\u003c/p\u003e\u003cp\u003eI don't know whether emitted key-events are always consistent.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "Time -\u003e Time -\u003e T Data EventDataBundle",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#guitar",
        "fct-type": "function",
        "title": "guitar"
      },
      "index": {
        "description": "Try for instance guitar This process simulates playing chords on guitar If you press some keys like on the keyboard then this process figures out what tones would be played on guitar and plays them one after another with short delays If you release the keys then the chord is played in reverse order This simulates the hand going up and down on the guitar strings Unfortunatley it is not possible to go up twice or go down twice this way The octaves of the pressed keys are ignored In detail calling guitar collectTime stepTime means If key is pressed then collect all key-press events for the next collectTime seconds After this period send out guitar-like chord pattern for the pressed keys with delay of stepTime between the notes Now wait until all keys are released Note that in the meantime keys could have been pressed or released They are registered but not played If all keys are released then send out the reverse chord On an AllSoundOff message release all played tones don know whether emitted key-events are always consistent",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "guitar",
        "normalized": "Time-\u003eTime-\u003eT Data EventDataBundle",
        "package": "streamed",
        "partial": "",
        "signature": "Time-\u003eTime-\u003eT Data EventDataBundle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:latch",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "T Data (Maybe Data)",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#latch",
        "fct-type": "function",
        "title": "latch"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "latch",
        "normalized": "",
        "package": "streamed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:lift",
      "description": {
        "fct-descr": "\u003cp\u003eHere we abuse the \u003ccode\u003eApplicative\u003c/code\u003e constraint.\nActually we only need \u003ccode\u003epure\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "T a b -\u003e T (t a) (t b)",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#lift",
        "fct-type": "function",
        "title": "lift"
      },
      "index": {
        "description": "Here we abuse the Applicative constraint Actually we only need pure",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "lift",
        "normalized": "T a b-\u003eT(c a)(c b)",
        "package": "streamed",
        "partial": "",
        "signature": "T a b-\u003eT(t a)(t b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:liftPoint",
      "description": {
        "fct-descr": "\u003cp\u003eTypical instance for the traversable type \u003ccode\u003et\u003c/code\u003e are '[]' and \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "(b -\u003e t b) -\u003e T a b -\u003e T (t a) (t b)",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#liftPoint",
        "fct-type": "function",
        "title": "liftPoint"
      },
      "index": {
        "description": "Typical instance for the traversable type are and Maybe",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "liftPoint",
        "normalized": "(a-\u003eb a)-\u003eT c a-\u003eT(b c)(b a)",
        "package": "streamed",
        "partial": "Point",
        "signature": "(b-\u003et b)-\u003eT a b-\u003eT(t a)(t b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:map",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "(a -\u003e b) -\u003e T a b",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eT a b",
        "package": "streamed",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eT a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:parallel",
      "description": {
        "fct-descr": "\u003cp\u003eRun two stream processor in parallel.\nWe cannot use the \u003ccode\u003eArrow\u003c/code\u003e method \u003ccode\u003e&&&\u003c/code\u003e\nsince we cannot define the \u003ccode\u003efirst\u003c/code\u003e method of the \u003ccode\u003eArrow\u003c/code\u003e class.\nConsider \u003ccode\u003efirst :: arrow a b -\u003e arrow (c,a) (c,b)\u003c/code\u003e\nand a trigger where \u003ccode\u003earrow a b\u003c/code\u003e generates an event of type \u003ccode\u003eb\u003c/code\u003e.\nHow could we generate additionally an event of type \u003ccode\u003ec\u003c/code\u003e\nwithout having an input event?\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "T a b -\u003e T a b -\u003e T a b",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#parallel",
        "fct-type": "function",
        "title": "parallel"
      },
      "index": {
        "description": "Run two stream processor in parallel We cannot use the Arrow method since we cannot define the first method of the Arrow class Consider first arrow arrow and trigger where arrow generates an event of type How could we generate additionally an event of type without having an input event",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "parallel",
        "normalized": "T a b-\u003eT a b-\u003eT a b",
        "package": "streamed",
        "partial": "",
        "signature": "T a b-\u003eT a b-\u003eT a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:partition",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "(a -\u003e Bool) -\u003e T a (Maybe a, Maybe a)",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "partition",
        "normalized": "(a-\u003eBool)-\u003eT a(Maybe a,Maybe a)",
        "package": "streamed",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eT a(Maybe a,Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:patternMono",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "PatternMono i -\u003e Time -\u003e T Data EventDataBundle",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#patternMono",
        "fct-type": "function",
        "title": "patternMono"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "patternMono",
        "normalized": "PatternMono a-\u003eTime-\u003eT Data EventDataBundle",
        "package": "streamed",
        "partial": "Mono",
        "signature": "PatternMono i-\u003eTime-\u003eT Data EventDataBundle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:patternMonoTempo",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "PatternMono i -\u003e TempoControl -\u003e T Data EventDataBundle",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#patternMonoTempo",
        "fct-type": "function",
        "title": "patternMonoTempo"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "patternMonoTempo",
        "normalized": "PatternMono a-\u003eTempoControl-\u003eT Data EventDataBundle",
        "package": "streamed",
        "partial": "Mono Tempo",
        "signature": "PatternMono i-\u003eTempoControl-\u003eT Data EventDataBundle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:patternPolyTempo",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "PatternPoly i -\u003e TempoControl -\u003e T Data EventDataBundle",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#patternPolyTempo",
        "fct-type": "function",
        "title": "patternPolyTempo"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "patternPolyTempo",
        "normalized": "PatternPoly a-\u003eTempoControl-\u003eT Data EventDataBundle",
        "package": "streamed",
        "partial": "Poly Tempo",
        "signature": "PatternPoly i-\u003eTempoControl-\u003eT Data EventDataBundle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:patternSerialTempo",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e PatternMono i -\u003e TempoControl -\u003e T Data EventDataBundle",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#patternSerialTempo",
        "fct-type": "function",
        "title": "patternSerialTempo"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "patternSerialTempo",
        "normalized": "Int-\u003ePatternMono a-\u003eTempoControl-\u003eT Data EventDataBundle",
        "package": "streamed",
        "partial": "Serial Tempo",
        "signature": "Int-\u003ePatternMono i-\u003eTempoControl-\u003eT Data EventDataBundle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:patternTempo",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "pat -\u003e TempoControl -\u003e T Data EventDataBundle",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#patternTempo",
        "fct-type": "method",
        "title": "patternTempo"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "patternTempo",
        "normalized": "a-\u003eTempoControl-\u003eT Data EventDataBundle",
        "package": "streamed",
        "partial": "Tempo",
        "signature": "pat-\u003eTempoControl-\u003eT Data EventDataBundle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:process",
      "description": {
        "fct-descr": "\u003cp\u003eTODO:\nWe should allow the process to access and modify the ALSA port number.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "T Data EventDataBundle -\u003e ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#process",
        "fct-type": "function",
        "title": "process"
      },
      "index": {
        "description": "TODO We should allow the process to access and modify the ALSA port number",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "process",
        "normalized": "T Data EventDataBundle-\u003eReaderT Handle IO()",
        "package": "streamed",
        "partial": "",
        "signature": "T Data EventDataBundle-\u003eReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:reverse",
      "description": {
        "fct-descr": "\u003cp\u003eSwap order of keys.\nThis is a funny effect and a new challenge to playing a keyboard.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "T Data (Maybe Data)",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#reverse",
        "fct-type": "function",
        "title": "reverse"
      },
      "index": {
        "description": "Swap order of keys This is funny effect and new challenge to playing keyboard",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "reverse",
        "normalized": "",
        "package": "streamed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:serialLatch",
      "description": {
        "fct-descr": "\u003cp\u003eA key is hold until \u003ccode\u003en\u003c/code\u003e times further keys are pressed.\nThe \u003ccode\u003en\u003c/code\u003e-th pressed key replaces the current one.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e T Data [Data]",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#serialLatch",
        "fct-type": "function",
        "title": "serialLatch"
      },
      "index": {
        "description": "key is hold until times further keys are pressed The th pressed key replaces the current one",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "serialLatch",
        "normalized": "Int-\u003eT Data[Data]",
        "package": "streamed",
        "partial": "Latch",
        "signature": "Int-\u003eT Data[Data]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:sweep",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "Channel -\u003e Time -\u003e (Controller, (Time, Time)) -\u003e Controller -\u003e Controller -\u003e (Double -\u003e Double) -\u003e T Data [Data]",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#sweep",
        "fct-type": "function",
        "title": "sweep"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "sweep",
        "normalized": "Channel-\u003eTime-\u003e(Controller,(Time,Time))-\u003eController-\u003eController-\u003e(Double-\u003eDouble)-\u003eT Data[Data]",
        "package": "streamed",
        "partial": "",
        "signature": "Channel-\u003eTime-\u003e(Controller,(Time,Time))-\u003eController-\u003eController-\u003e(Double-\u003eDouble)-\u003eT Data[Data]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:trainer",
      "description": {
        "fct-descr": "\u003cp\u003eAudio perception trainer\n\u003c/p\u003e\u003cp\u003ePlay sets of notes and\nlet the human player answer to them according to a given scheme.\nRepeat playing the notes sets until the trainee answers correctly.\nThen continue with other sequences, maybe more complicated ones.\n\u003c/p\u003e\u003cp\u003epossible tasks:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e replay a sequence of pitches on the keyboard:\n      single notes for training abolute pitches,\n      intervals all with the same base notes,\n      intervals with different base notes\n\u003c/li\u003e\u003cli\u003e transpose a set of pitches:\n      tranpose to a certain base note,\n      transpose by a certain interval\n\u003c/li\u003e\u003cli\u003e play a set of pitches in a different order:\n      reversed order,\n      in increasing pitch\n\u003c/li\u003e\u003cli\u003e replay a set of simultaneously pressed keys\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe difficulty can be increased by not connecting\nthe keyboard directly with the sound generator.\nThis way, the trainee cannot verify,\nhow the pressed keys differ from the target keys.\n\u003c/p\u003e\u003cp\u003eSometimes it seems that you are catched in an infinite loop.\nThis happens if there were too many keys pressed.\nThe trainer collects all key press events,\nnot only the ones that occur after the target set is played.\nThis way you can correct yourself immediately,\nbefore the target is repeatedly played.\nThe downside is, that there may be key press events hanging around.\nYou can get rid of them by pressing a key again and again,\nbut slowly, until the target is played, again.\nThen the queue of registered keys should be empty\nand you can proceed training.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "Channel -\u003e Time -\u003e Time -\u003e [([Pitch], [Pitch])] -\u003e T Data EventDataBundle",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#trainer",
        "fct-type": "function",
        "title": "trainer"
      },
      "index": {
        "description": "Audio perception trainer Play sets of notes and let the human player answer to them according to given scheme Repeat playing the notes sets until the trainee answers correctly Then continue with other sequences maybe more complicated ones possible tasks replay sequence of pitches on the keyboard single notes for training abolute pitches intervals all with the same base notes intervals with different base notes transpose set of pitches tranpose to certain base note transpose by certain interval play set of pitches in different order reversed order in increasing pitch replay set of simultaneously pressed keys The difficulty can be increased by not connecting the keyboard directly with the sound generator This way the trainee cannot verify how the pressed keys differ from the target keys Sometimes it seems that you are catched in an infinite loop This happens if there were too many keys pressed The trainer collects all key press events not only the ones that occur after the target set is played This way you can correct yourself immediately before the target is repeatedly played The downside is that there may be key press events hanging around You can get rid of them by pressing key again and again but slowly until the target is played again Then the queue of registered keys should be empty and you can proceed training",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "trainer",
        "normalized": "Channel-\u003eTime-\u003eTime-\u003e[([Pitch],[Pitch])]-\u003eT Data EventDataBundle",
        "package": "streamed",
        "partial": "",
        "signature": "Channel-\u003eTime-\u003eTime-\u003e[([Pitch],[Pitch])]-\u003eT Data EventDataBundle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:transpose",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e T Data (Maybe Data)",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#transpose",
        "fct-type": "function",
        "title": "transpose"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "transpose",
        "normalized": "Int-\u003eT Data(Maybe Data)",
        "package": "streamed",
        "partial": "",
        "signature": "Int-\u003eT Data(Maybe Data)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:traverse",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Causal",
        "fct-package": "streamed",
        "fct-signature": "s -\u003e (a -\u003e State s b) -\u003e T a b",
        "fct-source": "src/Sound-MIDI-ALSA-Causal.html#traverse",
        "fct-type": "function",
        "title": "traverse"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Causal",
        "module": "Sound.MIDI.ALSA.Causal",
        "name": "traverse",
        "normalized": "a-\u003e(b-\u003eState a c)-\u003eT b c",
        "package": "streamed",
        "partial": "",
        "signature": "s-\u003e(a-\u003eState s b)-\u003eT a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "module",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html",
        "fct-type": "module",
        "title": "CausalExample"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "CausalExample",
        "normalized": "",
        "package": "streamed",
        "partial": "Causal Example",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:binary",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
        "fct-type": "function",
        "title": "binary"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "binary",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:bruijn",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
        "fct-type": "function",
        "title": "bruijn"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "bruijn",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:crossSum",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
        "fct-type": "function",
        "title": "crossSum"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "crossSum",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "Sum",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:cyclePrograms",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
        "fct-type": "function",
        "title": "cyclePrograms"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "cyclePrograms",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "Programs",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:cycleProgramsDefer",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
        "fct-type": "function",
        "title": "cycleProgramsDefer"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "cycleProgramsDefer",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "Programs Defer",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:cycleUp",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
        "fct-type": "function",
        "title": "cycleUp"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "cycleUp",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "Up",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:cycleUpPoly",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
        "fct-type": "function",
        "title": "cycleUpPoly"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "cycleUpPoly",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "Up Poly",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:cycleUpTempo",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
        "fct-type": "function",
        "title": "cycleUpTempo"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "cycleUpTempo",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "Up Tempo",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:defaultTempo",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "TempoControl",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#defaultTempo",
        "fct-type": "function",
        "title": "defaultTempo"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "defaultTempo",
        "normalized": "",
        "package": "streamed",
        "partial": "Tempo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:delay",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
        "fct-type": "function",
        "title": "delay"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "delay",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:filterKey",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
        "fct-type": "function",
        "title": "filterKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "filterKey",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "Key",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:groupBinary",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
        "fct-type": "function",
        "title": "groupBinary"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "groupBinary",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "Binary",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:groupBruijn",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
        "fct-type": "function",
        "title": "groupBruijn"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "groupBruijn",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "Bruijn",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:groupCrossSum",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
        "fct-type": "function",
        "title": "groupCrossSum"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "groupCrossSum",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "Cross Sum",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:groupCycleUp",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
        "fct-type": "function",
        "title": "groupCycleUp"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "groupCycleUp",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "Cycle Up",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:groupLatch",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
        "fct-type": "function",
        "title": "groupLatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "groupLatch",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "Latch",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:groupRandom",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
        "fct-type": "function",
        "title": "groupRandom"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "groupRandom",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "Random",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:groupRandomInversions",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
        "fct-type": "function",
        "title": "groupRandomInversions"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "groupRandomInversions",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "Random Inversions",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:guitar",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
        "fct-type": "function",
        "title": "guitar"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "guitar",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:latch",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
        "fct-type": "function",
        "title": "latch"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "latch",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:pass",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
        "fct-type": "function",
        "title": "pass"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "pass",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:releaseAllKeys",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
        "fct-type": "function",
        "title": "releaseAllKeys"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "releaseAllKeys",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "All Keys",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:reverse",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
        "fct-type": "function",
        "title": "reverse"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "reverse",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:run",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO a -\u003e IO a",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "run",
        "normalized": "ReaderT Handle IO a-\u003eIO a",
        "package": "streamed",
        "partial": "",
        "signature": "ReaderT Handle IO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:sendMode",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
        "fct-type": "function",
        "title": "sendMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "sendMode",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "Mode",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:sendProgram",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
        "fct-type": "function",
        "title": "sendProgram"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "sendProgram",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "Program",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:serialLatch",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
        "fct-type": "function",
        "title": "serialLatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "serialLatch",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "Latch",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:serialPattern",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
        "fct-type": "function",
        "title": "serialPattern"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "serialPattern",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "Pattern",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:split",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "split",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:splitPattern",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
        "fct-type": "function",
        "title": "splitPattern"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "splitPattern",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "Pattern",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:sweep",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
        "fct-type": "function",
        "title": "sweep"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "sweep",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:trainer",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "g -\u003e ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#trainer",
        "fct-type": "function",
        "title": "trainer"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "trainer",
        "normalized": "a-\u003eReaderT Handle IO()",
        "package": "streamed",
        "partial": "",
        "signature": "g-\u003eReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:withGroup",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.CausalExample",
        "fct-package": "streamed",
        "fct-signature": "pat -\u003e ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-CausalExample.html#withGroup",
        "fct-type": "function",
        "title": "withGroup"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA CausalExample",
        "module": "Sound.MIDI.ALSA.CausalExample",
        "name": "withGroup",
        "normalized": "a-\u003eReaderT Handle IO()",
        "package": "streamed",
        "partial": "Group",
        "signature": "pat-\u003eReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "module",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html",
        "fct-type": "module",
        "title": "Common"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "Common",
        "normalized": "",
        "package": "streamed",
        "partial": "Common",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#t:Bundle",
      "description": {
        "fct-descr": "\u003cp\u003eThe times are relative to the start time of the bundle\nand do not need to be ordered.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "type",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#Bundle",
        "fct-type": "type",
        "title": "Bundle"
      },
      "index": {
        "description": "The times are relative to the start time of the bundle and do not need to be ordered",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "Bundle",
        "normalized": "",
        "package": "streamed",
        "partial": "Bundle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#t:EventDataBundle",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "type",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#EventDataBundle",
        "fct-type": "type",
        "title": "EventDataBundle"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "EventDataBundle",
        "normalized": "",
        "package": "streamed",
        "partial": "Event Data Bundle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#t:Handle",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "data",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#Handle",
        "fct-type": "data",
        "title": "Handle"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "Handle",
        "normalized": "",
        "package": "streamed",
        "partial": "Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#t:IndexNote",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "data",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#IndexNote",
        "fct-type": "data",
        "title": "IndexNote"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "IndexNote",
        "normalized": "",
        "package": "streamed",
        "partial": "Index Note",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#t:KeyQueue",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "type",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#KeyQueue",
        "fct-type": "type",
        "title": "KeyQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "KeyQueue",
        "normalized": "",
        "package": "streamed",
        "partial": "Key Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#t:KeySet",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "type",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#KeySet",
        "fct-type": "type",
        "title": "KeySet"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "KeySet",
        "normalized": "",
        "package": "streamed",
        "partial": "Key Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#t:PatternMono",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "data",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#PatternMono",
        "fct-type": "data",
        "title": "PatternMono"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "PatternMono",
        "normalized": "",
        "package": "streamed",
        "partial": "Pattern Mono",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#t:PatternPoly",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "data",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#PatternPoly",
        "fct-type": "data",
        "title": "PatternPoly"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "PatternPoly",
        "normalized": "",
        "package": "streamed",
        "partial": "Pattern Poly",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#t:Selector",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "type",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#Selector",
        "fct-type": "type",
        "title": "Selector"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "Selector",
        "normalized": "",
        "package": "streamed",
        "partial": "Selector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#t:SweepState",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "data",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#SweepState",
        "fct-type": "data",
        "title": "SweepState"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "SweepState",
        "normalized": "",
        "package": "streamed",
        "partial": "Sweep State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#t:Time",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "newtype",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#Time",
        "fct-type": "newtype",
        "title": "Time"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "Time",
        "normalized": "",
        "package": "streamed",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#t:TimeAbs",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eTime\u003c/a\u003e\u003c/code\u003e types are used instead of floating point types,\nbecause the latter ones caused unpredictable 'negative number' errors.\nThe denominator must always be a power of 10,\nthis way we can prevent unlimited grow of denominators.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "type",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#TimeAbs",
        "fct-type": "type",
        "title": "TimeAbs"
      },
      "index": {
        "description": "The Time types are used instead of floating point types because the latter ones caused unpredictable negative number errors The denominator must always be power of this way we can prevent unlimited grow of denominators",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "TimeAbs",
        "normalized": "",
        "package": "streamed",
        "partial": "Time Abs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#t:Trie",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "data",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#Trie",
        "fct-type": "data",
        "title": "Trie"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "Trie",
        "normalized": "",
        "package": "streamed",
        "partial": "Trie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:Branch",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Branch [(a, Trie a b)]",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#Trie",
        "fct-type": "function",
        "title": "Branch"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "Branch",
        "normalized": "Branch[(a,Trie a b)]",
        "package": "streamed",
        "partial": "Branch",
        "signature": "Branch[(a,Trie a b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:Handle",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Handle",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#Handle",
        "fct-type": "function",
        "title": "Handle"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "Handle",
        "normalized": "",
        "package": "streamed",
        "partial": "Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:IndexNote",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "IndexNote Int i",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#IndexNote",
        "fct-type": "function",
        "title": "IndexNote"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "IndexNote",
        "normalized": "",
        "package": "streamed",
        "partial": "Index Note",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:Leaf",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Leaf b",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#Trie",
        "fct-type": "function",
        "title": "Leaf"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "Leaf",
        "normalized": "",
        "package": "streamed",
        "partial": "Leaf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:PatternMono",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "PatternMono (Selector i) [i]",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#PatternMono",
        "fct-type": "function",
        "title": "PatternMono"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "PatternMono",
        "normalized": "PatternMono(Selector a)[a]",
        "package": "streamed",
        "partial": "Pattern Mono",
        "signature": "PatternMono(Selector i)[i]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:PatternPoly",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "PatternPoly (Selector i) (T Int [IndexNote i])",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#PatternPoly",
        "fct-type": "function",
        "title": "PatternPoly"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "PatternPoly",
        "normalized": "PatternPoly(Selector a)(T Int[IndexNote a])",
        "package": "streamed",
        "partial": "Pattern Poly",
        "signature": "PatternPoly(Selector i)(T Int[IndexNote i])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:SweepState",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "SweepState",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#SweepState",
        "fct-type": "function",
        "title": "SweepState"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "SweepState",
        "normalized": "",
        "package": "streamed",
        "partial": "Sweep State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:Time",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Time",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#Time",
        "fct-type": "function",
        "title": "Time"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "Time",
        "normalized": "",
        "package": "streamed",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:binaryAccident",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "PatternPoly Int",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#binaryStaccato",
        "fct-type": "function",
        "title": "binaryAccident"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "binaryAccident",
        "normalized": "",
        "package": "streamed",
        "partial": "Accident",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:binaryLegato",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "PatternPoly Int",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#binaryStaccato",
        "fct-type": "function",
        "title": "binaryLegato"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "binaryLegato",
        "normalized": "",
        "package": "streamed",
        "partial": "Legato",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:binaryStaccato",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "PatternPoly Int",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#binaryStaccato",
        "fct-type": "function",
        "title": "binaryStaccato"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "binaryStaccato",
        "normalized": "",
        "package": "streamed",
        "partial": "Staccato",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:bruijn",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ebruijn n k\u003c/code\u003e is a sequence with length n^k\nwhere \u003ccode\u003ecycle (bruijn n k)\u003c/code\u003e contains all n-ary numbers with k digits as infixes.\nThe function computes the lexicographically smallest of such sequences.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e Int -\u003e [Int]",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#bruijn",
        "fct-type": "function",
        "title": "bruijn"
      },
      "index": {
        "description": "bruijn is sequence with length where cycle bruijn contains all n-ary numbers with digits as infixes The function computes the lexicographically smallest of such sequences",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "bruijn",
        "normalized": "Int-\u003eInt-\u003e[Int]",
        "package": "streamed",
        "partial": "",
        "signature": "Int-\u003eInt-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:bruijnAll",
      "description": {
        "fct-descr": "\u003cp\u003eAll Bruijn sequences with a certain \n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e Int -\u003e [[Int]]",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#bruijnAll",
        "fct-type": "function",
        "title": "bruijnAll"
      },
      "index": {
        "description": "All Bruijn sequences with certain",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "bruijnAll",
        "normalized": "Int-\u003eInt-\u003e[[Int]]",
        "package": "streamed",
        "partial": "All",
        "signature": "Int-\u003eInt-\u003e[[Int]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:bruijnAllBits",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e Int -\u003e [[Int]]",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#bruijnAllBits",
        "fct-type": "function",
        "title": "bruijnAllBits"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "bruijnAllBits",
        "normalized": "Int-\u003eInt-\u003e[[Int]]",
        "package": "streamed",
        "partial": "All Bits",
        "signature": "Int-\u003eInt-\u003e[[Int]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:bruijnAllMap",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e Int -\u003e [[Int]]",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#bruijnAllMap",
        "fct-type": "function",
        "title": "bruijnAllMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "bruijnAllMap",
        "normalized": "Int-\u003eInt-\u003e[[Int]]",
        "package": "streamed",
        "partial": "All Map",
        "signature": "Int-\u003eInt-\u003e[[Int]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:bruijnAllTrie",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e Int -\u003e [[Int]]",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#bruijnAllTrie",
        "fct-type": "function",
        "title": "bruijnAllTrie"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "bruijnAllTrie",
        "normalized": "Int-\u003eInt-\u003e[[Int]]",
        "package": "streamed",
        "partial": "All Trie",
        "signature": "Int-\u003eInt-\u003e[[Int]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:bruijnPat",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e Int -\u003e PatternMono Int",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#bruijnPat",
        "fct-type": "function",
        "title": "bruijnPat"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "bruijnPat",
        "normalized": "Int-\u003eInt-\u003ePatternMono Int",
        "package": "streamed",
        "partial": "Pat",
        "signature": "Int-\u003eInt-\u003ePatternMono Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:channel",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e Channel",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#channel",
        "fct-type": "function",
        "title": "channel"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "channel",
        "normalized": "Int-\u003eChannel",
        "package": "streamed",
        "partial": "",
        "signature": "Int-\u003eChannel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:checkChannel",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "(Channel -\u003e Bool) -\u003e Data -\u003e Bool",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#checkChannel",
        "fct-type": "function",
        "title": "checkChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "checkChannel",
        "normalized": "(Channel-\u003eBool)-\u003eData-\u003eBool",
        "package": "streamed",
        "partial": "Channel",
        "signature": "(Channel-\u003eBool)-\u003eData-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:checkController",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "(Controller -\u003e Bool) -\u003e Data -\u003e Bool",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#checkController",
        "fct-type": "function",
        "title": "checkController"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "checkController",
        "normalized": "(Controller-\u003eBool)-\u003eData-\u003eBool",
        "package": "streamed",
        "partial": "Controller",
        "signature": "(Controller-\u003eBool)-\u003eData-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:checkMode",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "(T -\u003e Bool) -\u003e Data -\u003e Bool",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#checkMode",
        "fct-type": "function",
        "title": "checkMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "checkMode",
        "normalized": "(T-\u003eBool)-\u003eData-\u003eBool",
        "package": "streamed",
        "partial": "Mode",
        "signature": "(T-\u003eBool)-\u003eData-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:checkPitch",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "(Pitch -\u003e Bool) -\u003e Data -\u003e Bool",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#checkPitch",
        "fct-type": "function",
        "title": "checkPitch"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "checkPitch",
        "normalized": "(Pitch-\u003eBool)-\u003eData-\u003eBool",
        "package": "streamed",
        "partial": "Pitch",
        "signature": "(Pitch-\u003eBool)-\u003eData-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:checkProgram",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "(Program -\u003e Bool) -\u003e Data -\u003e Bool",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#checkProgram",
        "fct-type": "function",
        "title": "checkProgram"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "checkProgram",
        "normalized": "(Program-\u003eBool)-\u003eData-\u003eBool",
        "package": "streamed",
        "partial": "Program",
        "signature": "(Program-\u003eBool)-\u003eData-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:client",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "T",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#Handle",
        "fct-type": "function",
        "title": "client"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "client",
        "normalized": "",
        "package": "streamed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:connect",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "String -\u003e String -\u003e ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#connect",
        "fct-type": "function",
        "title": "connect"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "connect",
        "normalized": "String-\u003eString-\u003eReaderT Handle IO()",
        "package": "streamed",
        "partial": "",
        "signature": "String-\u003eString-\u003eReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:connectLLVM",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#connectLLVM",
        "fct-type": "function",
        "title": "connectLLVM"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "connectLLVM",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "LLVM",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:connectSuperCollider",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#connectSuperCollider",
        "fct-type": "function",
        "title": "connectSuperCollider"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "connectSuperCollider",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "Super Collider",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:connectTimidity",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#connectTimidity",
        "fct-type": "function",
        "title": "connectTimidity"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "connectTimidity",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "Timidity",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:consTime",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "String -\u003e Rational -\u003e Time",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#consTime",
        "fct-type": "function",
        "title": "consTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "consTime",
        "normalized": "String-\u003eRational-\u003eTime",
        "package": "streamed",
        "partial": "Time",
        "signature": "String-\u003eRational-\u003eTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:controller",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e Controller",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#controller",
        "fct-type": "function",
        "title": "controller"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "controller",
        "normalized": "Int-\u003eController",
        "package": "streamed",
        "partial": "",
        "signature": "Int-\u003eController"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:controllerFromNote",
      "description": {
        "fct-descr": "\u003cp\u003eMap NoteOn events to a controller value.\nThis way you may play notes via the resonance frequency of a filter.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "(Int -\u003e Int) -\u003e Controller -\u003e Data -\u003e Maybe Data",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#controllerFromNote",
        "fct-type": "function",
        "title": "controllerFromNote"
      },
      "index": {
        "description": "Map NoteOn events to controller value This way you may play notes via the resonance frequency of filter",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "controllerFromNote",
        "normalized": "(Int-\u003eInt)-\u003eController-\u003eData-\u003eMaybe Data",
        "package": "streamed",
        "partial": "From Note",
        "signature": "(Int-\u003eInt)-\u003eController-\u003eData-\u003eMaybe Data"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:controllerMatch",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Channel -\u003e Controller -\u003e Ctrl -\u003e Bool",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#controllerMatch",
        "fct-type": "function",
        "title": "controllerMatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "controllerMatch",
        "normalized": "Channel-\u003eController-\u003eCtrl-\u003eBool",
        "package": "streamed",
        "partial": "Match",
        "signature": "Channel-\u003eController-\u003eCtrl-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:crossSum",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e PatternMono Int",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#cycleUp",
        "fct-type": "function",
        "title": "crossSum"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "crossSum",
        "normalized": "Int-\u003ePatternMono Int",
        "package": "streamed",
        "partial": "Sum",
        "signature": "Int-\u003ePatternMono Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:crossSumAuto",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "PatternMono Integer",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#cycleUpAuto",
        "fct-type": "function",
        "title": "crossSumAuto"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "crossSumAuto",
        "normalized": "",
        "package": "streamed",
        "partial": "Sum Auto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:cycleDown",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e PatternMono Int",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#cycleUp",
        "fct-type": "function",
        "title": "cycleDown"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "cycleDown",
        "normalized": "Int-\u003ePatternMono Int",
        "package": "streamed",
        "partial": "Down",
        "signature": "Int-\u003ePatternMono Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:cycleDownAuto",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "PatternMono Integer",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#cycleUpAuto",
        "fct-type": "function",
        "title": "cycleDownAuto"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "cycleDownAuto",
        "normalized": "",
        "package": "streamed",
        "partial": "Down Auto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:cycleUp",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e PatternMono Int",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#cycleUp",
        "fct-type": "function",
        "title": "cycleUp"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "cycleUp",
        "normalized": "Int-\u003ePatternMono Int",
        "package": "streamed",
        "partial": "Up",
        "signature": "Int-\u003ePatternMono Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:cycleUpAuto",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "PatternMono Integer",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#cycleUpAuto",
        "fct-type": "function",
        "title": "cycleUpAuto"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "cycleUpAuto",
        "normalized": "",
        "package": "streamed",
        "partial": "Up Auto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:cycleUpInversions",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e PatternMono Double",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#cycleUpInversions",
        "fct-type": "function",
        "title": "cycleUpInversions"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "cycleUpInversions",
        "normalized": "Int-\u003ePatternMono Double",
        "package": "streamed",
        "partial": "Up Inversions",
        "signature": "Int-\u003ePatternMono Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:cycleUpOctave",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e PatternMono Int",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#cycleUpOctave",
        "fct-type": "function",
        "title": "cycleUpOctave"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "cycleUpOctave",
        "normalized": "Int-\u003ePatternMono Int",
        "package": "streamed",
        "partial": "Up Octave",
        "signature": "Int-\u003ePatternMono Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:decomposePositional",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Integer -\u003e Integer -\u003e [Integer]",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#decomposePositional",
        "fct-type": "function",
        "title": "decomposePositional"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "decomposePositional",
        "normalized": "Integer-\u003eInteger-\u003e[Integer]",
        "package": "streamed",
        "partial": "Positional",
        "signature": "Integer-\u003eInteger-\u003e[Integer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:deconsTime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Rational",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#Time",
        "fct-type": "function",
        "title": "deconsTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "deconsTime",
        "normalized": "",
        "package": "streamed",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:defaultTempoCtrl",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "(Channel, Controller)",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#defaultTempoCtrl",
        "fct-type": "function",
        "title": "defaultTempoCtrl"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "defaultTempoCtrl",
        "normalized": "(Channel,Controller)",
        "package": "streamed",
        "partial": "Tempo Ctrl",
        "signature": "(Channel,Controller)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:delayAdd",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Word8 -\u003e Time -\u003e Data -\u003e EventDataBundle",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#delayAdd",
        "fct-type": "function",
        "title": "delayAdd"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "delayAdd",
        "normalized": "Word-\u003eTime-\u003eData-\u003eEventDataBundle",
        "package": "streamed",
        "partial": "Add",
        "signature": "Word-\u003eTime-\u003eData-\u003eEventDataBundle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:deleteWord",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "b -\u003e [a] -\u003e Trie a [b] -\u003e Trie a [b]",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#deleteWord",
        "fct-type": "function",
        "title": "deleteWord"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "deleteWord",
        "normalized": "a-\u003e[b]-\u003eTrie b[a]-\u003eTrie b[a]",
        "package": "streamed",
        "partial": "Word",
        "signature": "b-\u003e[a]-\u003eTrie a[b]-\u003eTrie a[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:eventsFromKey",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Time -\u003e ((Pitch, Channel), Velocity) -\u003e EventDataBundle",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#eventsFromKey",
        "fct-type": "function",
        "title": "eventsFromKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "eventsFromKey",
        "normalized": "Time-\u003e((Pitch,Channel),Velocity)-\u003eEventDataBundle",
        "package": "streamed",
        "partial": "From Key",
        "signature": "Time-\u003e((Pitch,Channel),Velocity)-\u003eEventDataBundle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:examplePatternPolyTempo0",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "T Int [IndexNote Int]",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#examplePatternPolyTempo0",
        "fct-type": "function",
        "title": "examplePatternPolyTempo0"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "examplePatternPolyTempo0",
        "normalized": "T Int[IndexNote Int]",
        "package": "streamed",
        "partial": "Pattern Poly Tempo",
        "signature": "T Int[IndexNote Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:examplePatternPolyTempo1",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "T Int [IndexNote Int]",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#examplePatternPolyTempo1",
        "fct-type": "function",
        "title": "examplePatternPolyTempo1"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "examplePatternPolyTempo1",
        "normalized": "T Int[IndexNote Int]",
        "package": "streamed",
        "partial": "Pattern Poly Tempo",
        "signature": "T Int[IndexNote Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:exit",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Handle -\u003e IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#exit",
        "fct-type": "function",
        "title": "exit"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "exit",
        "normalized": "Handle-\u003eIO()",
        "package": "streamed",
        "partial": "",
        "signature": "Handle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:flipSeq",
      "description": {
        "fct-descr": "\u003cp\u003eSee Haskore/FlipSong\n\u003c/p\u003e\u003cp\u003eflipSeq m !! n = cross sum of the m-ary representation of n modulo m.\n\u003c/p\u003e\u003cp\u003eFor m=2 this yields\n  http:\u003cem/\u003ewww.research.att.com\u003cem\u003ecgi-bin\u003c/em\u003eaccess.cgi\u003cem\u003eas\u003c/em\u003enjas\u003cem\u003esequences\u003c/em\u003eeisA.cgi?Anum=A010060\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e [Int]",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#flipSeq",
        "fct-type": "function",
        "title": "flipSeq"
      },
      "index": {
        "description": "See Haskore FlipSong flipSeq cross sum of the m-ary representation of modulo For this yields http www.research.att.com cgi-bin access.cgi as njas sequences eisA.cgi Anum A010060",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "flipSeq",
        "normalized": "Int-\u003e[Int]",
        "package": "streamed",
        "partial": "Seq",
        "signature": "Int-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:fraction",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#fraction",
        "fct-type": "function",
        "title": "fraction"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "fraction",
        "normalized": "a-\u003ea",
        "package": "streamed",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:fullTrie",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "b -\u003e [a] -\u003e Int -\u003e Trie a b",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#fullTrie",
        "fct-type": "function",
        "title": "fullTrie"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "fullTrie",
        "normalized": "a-\u003e[b]-\u003eInt-\u003eTrie b a",
        "package": "streamed",
        "partial": "Trie",
        "signature": "b-\u003e[a]-\u003eInt-\u003eTrie a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:immediateBundle",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "[a] -\u003e Bundle a",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#immediateBundle",
        "fct-type": "function",
        "title": "immediateBundle"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "immediateBundle",
        "normalized": "[a]-\u003eBundle a",
        "package": "streamed",
        "partial": "Bundle",
        "signature": "[a]-\u003eBundle a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:incTime",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Time -\u003e TimeAbs -\u003e TimeAbs",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#incTime",
        "fct-type": "function",
        "title": "incTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "incTime",
        "normalized": "Time-\u003eTimeAbs-\u003eTimeAbs",
        "package": "streamed",
        "partial": "Time",
        "signature": "Time-\u003eTimeAbs-\u003eTimeAbs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:increasePitch",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e Pitch -\u003e Maybe Pitch",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#increasePitch",
        "fct-type": "function",
        "title": "increasePitch"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "increasePitch",
        "normalized": "Int-\u003ePitch-\u003eMaybe Pitch",
        "package": "streamed",
        "partial": "Pitch",
        "signature": "Int-\u003ePitch-\u003eMaybe Pitch"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:init",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "IO Handle",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#init",
        "fct-type": "function",
        "title": "init"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "init",
        "normalized": "",
        "package": "streamed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:inversions",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "[Double] -\u003e PatternMono Double",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#inversions",
        "fct-type": "function",
        "title": "inversions"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "inversions",
        "normalized": "[Double]-\u003ePatternMono Double",
        "package": "streamed",
        "partial": "",
        "signature": "[Double]-\u003ePatternMono Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:item",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "i -\u003e Int -\u003e IndexNote i",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#item",
        "fct-type": "function",
        "title": "item"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "item",
        "normalized": "a-\u003eInt-\u003eIndexNote a",
        "package": "streamed",
        "partial": "",
        "signature": "i-\u003eInt-\u003eIndexNote i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:lookupWord",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "[a] -\u003e Trie a b -\u003e Maybe b",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#lookupWord",
        "fct-type": "function",
        "title": "lookupWord"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "lookupWord",
        "normalized": "[a]-\u003eTrie a b-\u003eMaybe b",
        "package": "streamed",
        "partial": "Word",
        "signature": "[a]-\u003eTrie a b-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:makeEcho",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Handle -\u003e TimeAbs -\u003e Custom -\u003e T",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#makeEcho",
        "fct-type": "function",
        "title": "makeEcho"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "makeEcho",
        "normalized": "Handle-\u003eTimeAbs-\u003eCustom-\u003eT",
        "package": "streamed",
        "partial": "Echo",
        "signature": "Handle-\u003eTimeAbs-\u003eCustom-\u003eT"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:makeEvent",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Handle -\u003e TimeAbs -\u003e Data -\u003e T",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#makeEvent",
        "fct-type": "function",
        "title": "makeEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "makeEvent",
        "normalized": "Handle-\u003eTimeAbs-\u003eData-\u003eT",
        "package": "streamed",
        "partial": "Event",
        "signature": "Handle-\u003eTimeAbs-\u003eData-\u003eT"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:maybePitch",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e Maybe Pitch",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#maybePitch",
        "fct-type": "function",
        "title": "maybePitch"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "maybePitch",
        "normalized": "Int-\u003eMaybe Pitch",
        "package": "streamed",
        "partial": "Pitch",
        "signature": "Int-\u003eMaybe Pitch"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:mergeEither",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "T time a -\u003e T time b -\u003e T time (Either a b)",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#mergeEither",
        "fct-type": "function",
        "title": "mergeEither"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "mergeEither",
        "normalized": "T a b-\u003eT a c-\u003eT a(Either b c)",
        "package": "streamed",
        "partial": "Either",
        "signature": "T time a-\u003eT time b-\u003eT time(Either a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:mergeStable",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "T time body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#mergeStable",
        "fct-type": "function",
        "title": "mergeStable"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "mergeStable",
        "normalized": "T a b-\u003eT a b-\u003eT a b",
        "package": "streamed",
        "partial": "Stable",
        "signature": "T time body-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:nano",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "a",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#nano",
        "fct-type": "function",
        "title": "nano"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "nano",
        "normalized": "",
        "package": "streamed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:nextProgram",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Note -\u003e State [Program] [Data]",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#nextProgram",
        "fct-type": "function",
        "title": "nextProgram"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "nextProgram",
        "normalized": "Note-\u003eState[Program][Data]",
        "package": "streamed",
        "partial": "Program",
        "signature": "Note-\u003eState[Program][Data]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:normalVelocity",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Velocity",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#normalVelocity",
        "fct-type": "function",
        "title": "normalVelocity"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "normalVelocity",
        "normalized": "",
        "package": "streamed",
        "partial": "Velocity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:nullTrie",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Trie a [b] -\u003e Bool",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#nullTrie",
        "fct-type": "function",
        "title": "nullTrie"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "nullTrie",
        "normalized": "Trie a[b]-\u003eBool",
        "package": "streamed",
        "partial": "Trie",
        "signature": "Trie a[b]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:outputEvent",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "TimeAbs -\u003e Data -\u003e ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#outputEvent",
        "fct-type": "function",
        "title": "outputEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "outputEvent",
        "normalized": "TimeAbs-\u003eData-\u003eReaderT Handle IO()",
        "package": "streamed",
        "partial": "Event",
        "signature": "TimeAbs-\u003eData-\u003eReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:pingPong",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e PatternMono Int",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#cycleUp",
        "fct-type": "function",
        "title": "pingPong"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "pingPong",
        "normalized": "Int-\u003ePatternMono Int",
        "package": "streamed",
        "partial": "Pong",
        "signature": "Int-\u003ePatternMono Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:pingPongAuto",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "PatternMono Integer",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#cycleUpAuto",
        "fct-type": "function",
        "title": "pingPongAuto"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "pingPongAuto",
        "normalized": "",
        "package": "streamed",
        "partial": "Pong Auto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:pitch",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e Pitch",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#pitch",
        "fct-type": "function",
        "title": "pitch"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "pitch",
        "normalized": "Int-\u003ePitch",
        "package": "streamed",
        "partial": "",
        "signature": "Int-\u003ePitch"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:portPrivate",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "T",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#Handle",
        "fct-type": "function",
        "title": "portPrivate"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "portPrivate",
        "normalized": "",
        "package": "streamed",
        "partial": "Private",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:portPublic",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "T",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#Handle",
        "fct-type": "function",
        "title": "portPublic"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "portPublic",
        "normalized": "",
        "package": "streamed",
        "partial": "Public",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:powerRationalFromFloat",
      "description": {
        "fct-descr": "\u003cp\u003eCompute \u003ccode\u003ebase ** expo\u003c/code\u003e\napproximately to result type \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e\nsuch that the result has a denominator which is a power of \u003ccode\u003edigitBase\u003c/code\u003e\nand a relative precision of numerator of \u003ccode\u003eprecision\u003c/code\u003e digits\nwith respect to \u003ccode\u003edigitBase\u003c/code\u003e-ary numbers.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e Int -\u003e a -\u003e a -\u003e Rational",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#powerRationalFromFloat",
        "fct-type": "function",
        "title": "powerRationalFromFloat"
      },
      "index": {
        "description": "Compute base expo approximately to result type Rational such that the result has denominator which is power of digitBase and relative precision of numerator of precision digits with respect to digitBase ary numbers",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "powerRationalFromFloat",
        "normalized": "Int-\u003eInt-\u003ea-\u003ea-\u003eRational",
        "package": "streamed",
        "partial": "Rational From Float",
        "signature": "Int-\u003eInt-\u003ea-\u003ea-\u003eRational"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:program",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e Program",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#program",
        "fct-type": "function",
        "title": "program"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "program",
        "normalized": "Int-\u003eProgram",
        "package": "streamed",
        "partial": "",
        "signature": "Int-\u003eProgram"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:programFromBanks",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "[Int32] -\u003e [Int32] -\u003e Int32",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#programFromBanks",
        "fct-type": "function",
        "title": "programFromBanks"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "programFromBanks",
        "normalized": "[Int]-\u003e[Int]-\u003eInt",
        "package": "streamed",
        "partial": "From Banks",
        "signature": "[Int]-\u003e[Int]-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:programsAsBanks",
      "description": {
        "fct-descr": "\u003cp\u003eInterpret program changes as a kind of bank switches\nin order to increase the range of instruments\nthat can be selected via a block of patch select buttons.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eprogramAsBanks ns\u003c/code\u003e divides the first \u003ccode\u003esum ns\u003c/code\u003e instruments\ninto sections of sizes \u003ccode\u003ens!!0, ns!!1, ...\u003c/code\u003e.\nEach program in those sections is interpreted as a bank in a hierarchy,\nwhere the lower program numbers are the least significant banks.\nPrograms from \u003ccode\u003esum ns\u003c/code\u003e on are passed through as they are.\n\u003ccode\u003eproduct ns\u003c/code\u003e is the number of instruments\nthat you can address using this trick.\nIn order to avoid overflow it should be less than 128.\n\u003c/p\u003e\u003cp\u003eE.g. \u003ccode\u003eprogramAsBanks [n,m]\u003c/code\u003e interprets subsequent program changes to\n\u003ccode\u003ea\u003c/code\u003e (\u003ccode\u003e0\u003c=a\u003cn\u003c/code\u003e) and \u003ccode\u003en+b\u003c/code\u003e (\u003ccode\u003e0\u003c=b\u003cm\u003c/code\u003e)\nas a program change to \u003ccode\u003eb*n+a\u003c/code\u003e.\n\u003ccode\u003eprogramAsBanks [8,8]\u003c/code\u003e allows to select 64 instruments\nby 16 program change buttons,\nwhereas \u003ccode\u003eprogramAsBanks [8,4,4]\u003c/code\u003e\nallows to address the full range of MIDI 128 instruments\nwith the same number of buttons.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "[Int32] -\u003e Data -\u003e State [Int32] Data",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#programsAsBanks",
        "fct-type": "function",
        "title": "programsAsBanks"
      },
      "index": {
        "description": "Interpret program changes as kind of bank switches in order to increase the range of instruments that can be selected via block of patch select buttons programAsBanks ns divides the first sum ns instruments into sections of sizes ns ns Each program in those sections is interpreted as bank in hierarchy where the lower program numbers are the least significant banks Programs from sum ns on are passed through as they are product ns is the number of instruments that you can address using this trick In order to avoid overflow it should be less than E.g programAsBanks interprets subsequent program changes to and as program change to programAsBanks allows to select instruments by program change buttons whereas programAsBanks allows to address the full range of MIDI instruments with the same number of buttons",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "programsAsBanks",
        "normalized": "[Int]-\u003eData-\u003eState[Int]Data",
        "package": "streamed",
        "partial": "As Banks",
        "signature": "[Int]-\u003eData-\u003eState[Int]Data"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:queue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "T",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#Handle",
        "fct-type": "function",
        "title": "queue"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "queue",
        "normalized": "",
        "package": "streamed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:random",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "PatternMono Double",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#random",
        "fct-type": "function",
        "title": "random"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "random",
        "normalized": "",
        "package": "streamed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:randomInversions",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "PatternMono Double",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#random",
        "fct-type": "function",
        "title": "randomInversions"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "randomInversions",
        "normalized": "",
        "package": "streamed",
        "partial": "Inversions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:reduceNoteVelocity",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Word8 -\u003e Note -\u003e Note",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#reduceNoteVelocity",
        "fct-type": "function",
        "title": "reduceNoteVelocity"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "reduceNoteVelocity",
        "normalized": "Word-\u003eNote-\u003eNote",
        "package": "streamed",
        "partial": "Note Velocity",
        "signature": "Word-\u003eNote-\u003eNote"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:replaceProgram",
      "description": {
        "fct-descr": "\u003cpre\u003e \u003e replaceProgram [1,2,3,4] 5 [10,11,12,13]\n (True,[10,11,2,13])\n\u003c/pre\u003e",
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "[Int32] -\u003e Int32 -\u003e [Int32] -\u003e (Bool, [Int32])",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#replaceProgram",
        "fct-type": "function",
        "title": "replaceProgram"
      },
      "index": {
        "description": "replaceProgram True",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "replaceProgram",
        "normalized": "[Int]-\u003eInt-\u003e[Int]-\u003e(Bool,[Int])",
        "package": "streamed",
        "partial": "Program",
        "signature": "[Int]-\u003eInt-\u003e[Int]-\u003e(Bool,[Int])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:reverse",
      "description": {
        "fct-descr": "\u003cp\u003eSwap order of keys.\nNon-note events are returned without modification.\nIf by reversing a note leaves the range of representable MIDI notes,\nthen we return Nothing.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Data -\u003e Maybe Data",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#reverse",
        "fct-type": "function",
        "title": "reverse"
      },
      "index": {
        "description": "Swap order of keys Non-note events are returned without modification If by reversing note leaves the range of representable MIDI notes then we return Nothing",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "reverse",
        "normalized": "Data-\u003eMaybe Data",
        "package": "streamed",
        "partial": "",
        "signature": "Data-\u003eMaybe Data"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:selectFromChord",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Integer -\u003e Time -\u003e KeyQueue -\u003e EventDataBundle",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#selectFromChord",
        "fct-type": "function",
        "title": "selectFromChord"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "selectFromChord",
        "normalized": "Integer-\u003eTime-\u003eKeyQueue-\u003eEventDataBundle",
        "package": "streamed",
        "partial": "From Chord",
        "signature": "Integer-\u003eTime-\u003eKeyQueue-\u003eEventDataBundle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:selectFromChordRatio",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Double -\u003e Time -\u003e KeyQueue -\u003e EventDataBundle",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#selectFromChordRatio",
        "fct-type": "function",
        "title": "selectFromChordRatio"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "selectFromChordRatio",
        "normalized": "Double-\u003eTime-\u003eKeyQueue-\u003eEventDataBundle",
        "package": "streamed",
        "partial": "From Chord Ratio",
        "signature": "Double-\u003eTime-\u003eKeyQueue-\u003eEventDataBundle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:selectFromLimittedChord",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e Time -\u003e KeyQueue -\u003e EventDataBundle",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#selectFromLimittedChord",
        "fct-type": "function",
        "title": "selectFromLimittedChord"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "selectFromLimittedChord",
        "normalized": "Int-\u003eTime-\u003eKeyQueue-\u003eEventDataBundle",
        "package": "streamed",
        "partial": "From Limitted Chord",
        "signature": "Int-\u003eTime-\u003eKeyQueue-\u003eEventDataBundle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:selectFromOctaveChord",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate notes according to the key set,\nwhere notes for negative and too large indices\nare padded with keys that are transposed by octaves.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e Time -\u003e KeyQueue -\u003e EventDataBundle",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#selectFromOctaveChord",
        "fct-type": "function",
        "title": "selectFromOctaveChord"
      },
      "index": {
        "description": "Generate notes according to the key set where notes for negative and too large indices are padded with keys that are transposed by octaves",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "selectFromOctaveChord",
        "normalized": "Int-\u003eTime-\u003eKeyQueue-\u003eEventDataBundle",
        "package": "streamed",
        "partial": "From Octave Chord",
        "signature": "Int-\u003eTime-\u003eKeyQueue-\u003eEventDataBundle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:selectInversion",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Double -\u003e Time -\u003e KeyQueue -\u003e EventDataBundle",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#selectInversion",
        "fct-type": "function",
        "title": "selectInversion"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "selectInversion",
        "normalized": "Double-\u003eTime-\u003eKeyQueue-\u003eEventDataBundle",
        "package": "streamed",
        "partial": "Inversion",
        "signature": "Double-\u003eTime-\u003eKeyQueue-\u003eEventDataBundle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:sendController",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Channel -\u003e Controller -\u003e Int -\u003e ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#sendController",
        "fct-type": "function",
        "title": "sendController"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "sendController",
        "normalized": "Channel-\u003eController-\u003eInt-\u003eReaderT Handle IO()",
        "package": "streamed",
        "partial": "Controller",
        "signature": "Channel-\u003eController-\u003eInt-\u003eReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:sendKey",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Channel -\u003e Bool -\u003e Velocity -\u003e Pitch -\u003e ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#sendKey",
        "fct-type": "function",
        "title": "sendKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "sendKey",
        "normalized": "Channel-\u003eBool-\u003eVelocity-\u003ePitch-\u003eReaderT Handle IO()",
        "package": "streamed",
        "partial": "Key",
        "signature": "Channel-\u003eBool-\u003eVelocity-\u003ePitch-\u003eReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:sendMode",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Channel -\u003e T -\u003e ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#sendMode",
        "fct-type": "function",
        "title": "sendMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "sendMode",
        "normalized": "Channel-\u003eT-\u003eReaderT Handle IO()",
        "package": "streamed",
        "partial": "Mode",
        "signature": "Channel-\u003eT-\u003eReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:sendNote",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Channel -\u003e Time -\u003e Velocity -\u003e Pitch -\u003e ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#sendNote",
        "fct-type": "function",
        "title": "sendNote"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "sendNote",
        "normalized": "Channel-\u003eTime-\u003eVelocity-\u003ePitch-\u003eReaderT Handle IO()",
        "package": "streamed",
        "partial": "Note",
        "signature": "Channel-\u003eTime-\u003eVelocity-\u003ePitch-\u003eReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:sendProgram",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Channel -\u003e Program -\u003e ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#sendProgram",
        "fct-type": "function",
        "title": "sendProgram"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "sendProgram",
        "normalized": "Channel-\u003eProgram-\u003eReaderT Handle IO()",
        "package": "streamed",
        "partial": "Program",
        "signature": "Channel-\u003eProgram-\u003eReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:sequ",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "T DuplexMode",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#Handle",
        "fct-type": "function",
        "title": "sequ"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "sequ",
        "normalized": "",
        "package": "streamed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:setChannel",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Channel -\u003e Data -\u003e Data",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#setChannel",
        "fct-type": "function",
        "title": "setChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "setChannel",
        "normalized": "Channel-\u003eData-\u003eData",
        "package": "streamed",
        "partial": "Channel",
        "signature": "Channel-\u003eData-\u003eData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:setTimeStamping",
      "description": {
        "fct-descr": "\u003cp\u003emake ALSA set the time stamps in incoming events\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#setTimeStamping",
        "fct-type": "function",
        "title": "setTimeStamping"
      },
      "index": {
        "description": "make ALSA set the time stamps in incoming events",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "setTimeStamping",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "Time Stamping",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:simpleNote",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Channel -\u003e Pitch -\u003e Velocity -\u003e Note",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#simpleNote",
        "fct-type": "function",
        "title": "simpleNote"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "simpleNote",
        "normalized": "Channel-\u003ePitch-\u003eVelocity-\u003eNote",
        "package": "streamed",
        "partial": "Note",
        "signature": "Channel-\u003ePitch-\u003eVelocity-\u003eNote"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:singletonBundle",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "a -\u003e Bundle a",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#singletonBundle",
        "fct-type": "function",
        "title": "singletonBundle"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "singletonBundle",
        "normalized": "a-\u003eBundle a",
        "package": "streamed",
        "partial": "Bundle",
        "signature": "a-\u003eBundle a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:startQueue",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#startQueue",
        "fct-type": "function",
        "title": "startQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "startQueue",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "Queue",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:sweepCenter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Double",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#SweepState",
        "fct-type": "function",
        "title": "sweepCenter"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "sweepCenter",
        "normalized": "",
        "package": "streamed",
        "partial": "Center",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:sweepDepth",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Double",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#SweepState",
        "fct-type": "function",
        "title": "sweepDepth"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "sweepDepth",
        "normalized": "",
        "package": "streamed",
        "partial": "Depth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:sweepPhase",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Double",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#SweepState",
        "fct-type": "function",
        "title": "sweepPhase"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "sweepPhase",
        "normalized": "",
        "package": "streamed",
        "partial": "Phase",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:sweepSpeed",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Double",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#SweepState",
        "fct-type": "function",
        "title": "sweepSpeed"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "sweepSpeed",
        "normalized": "",
        "package": "streamed",
        "partial": "Speed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:testBruijn",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e Int -\u003e [Int] -\u003e Bool",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#testBruijn",
        "fct-type": "function",
        "title": "testBruijn"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "testBruijn",
        "normalized": "Int-\u003eInt-\u003e[Int]-\u003eBool",
        "package": "streamed",
        "partial": "Bruijn",
        "signature": "Int-\u003eInt-\u003e[Int]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:testBruijnAll",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e Int -\u003e Bool",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#testBruijnAll",
        "fct-type": "function",
        "title": "testBruijnAll"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "testBruijnAll",
        "normalized": "Int-\u003eInt-\u003eBool",
        "package": "streamed",
        "partial": "Bruijn All",
        "signature": "Int-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:timeFromStamp",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "TimeStamp -\u003e Time",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#timeFromStamp",
        "fct-type": "function",
        "title": "timeFromStamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "timeFromStamp",
        "normalized": "TimeStamp-\u003eTime",
        "package": "streamed",
        "partial": "From Stamp",
        "signature": "TimeStamp-\u003eTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:transpose",
      "description": {
        "fct-descr": "\u003cp\u003eTranspose a note event by the given number of semitones.\nNon-note events are returned without modification.\nIf by transposition a note leaves the range of representable MIDI notes,\nthen we return Nothing.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e Data -\u003e Maybe Data",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#transpose",
        "fct-type": "function",
        "title": "transpose"
      },
      "index": {
        "description": "Transpose note event by the given number of semitones Non-note events are returned without modification If by transposition note leaves the range of representable MIDI notes then we return Nothing",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "transpose",
        "normalized": "Int-\u003eData-\u003eMaybe Data",
        "package": "streamed",
        "partial": "",
        "signature": "Int-\u003eData-\u003eMaybe Data"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:traversePrograms",
      "description": {
        "fct-descr": "\u003cp\u003eBefore every note switch to another instrument\naccording to a list of programs given as state of the State monad.\nI do not know how to handle multiple channels in a reasonable way.\nCurrently I just switch the instrument independent from the channel,\nand send the program switch to the same channel as the beginning note.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Data -\u003e State [Program] [Data]",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#traversePrograms",
        "fct-type": "function",
        "title": "traversePrograms"
      },
      "index": {
        "description": "Before every note switch to another instrument according to list of programs given as state of the State monad do not know how to handle multiple channels in reasonable way Currently just switch the instrument independent from the channel and send the program switch to the same channel as the beginning note",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "traversePrograms",
        "normalized": "Data-\u003eState[Program][Data]",
        "package": "streamed",
        "partial": "Programs",
        "signature": "Data-\u003eState[Program][Data]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:traverseProgramsSeek",
      "description": {
        "fct-descr": "\u003cp\u003eThis function extends \u003ccode\u003e\u003ca\u003etraversePrograms\u003c/a\u003e\u003c/code\u003e.\nIt reacts on external program changes\nby seeking an according program in the list.\nThis way we can reset the pointer into the instrument list.\nHowever the search must be limited in order to prevent an infinite loop\nif we receive a program that is not contained in the list.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e Data -\u003e State [Program] [Data]",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#traverseProgramsSeek",
        "fct-type": "function",
        "title": "traverseProgramsSeek"
      },
      "index": {
        "description": "This function extends traversePrograms It reacts on external program changes by seeking an according program in the list This way we can reset the pointer into the instrument list However the search must be limited in order to prevent an infinite loop if we receive program that is not contained in the list",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "traverseProgramsSeek",
        "normalized": "Int-\u003eData-\u003eState[Program][Data]",
        "package": "streamed",
        "partial": "Programs Seek",
        "signature": "Int-\u003eData-\u003eState[Program][Data]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:updateChord",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "NoteEv -\u003e Note -\u003e KeySet -\u003e KeySet",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#updateChord",
        "fct-type": "function",
        "title": "updateChord"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "updateChord",
        "normalized": "NoteEv-\u003eNote-\u003eKeySet-\u003eKeySet",
        "package": "streamed",
        "partial": "Chord",
        "signature": "NoteEv-\u003eNote-\u003eKeySet-\u003eKeySet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:updateDur",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Ctrl -\u003e (Time, Time) -\u003e Time",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#updateDur",
        "fct-type": "function",
        "title": "updateDur"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "updateDur",
        "normalized": "Ctrl-\u003e(Time,Time)-\u003eTime",
        "package": "streamed",
        "partial": "Dur",
        "signature": "Ctrl-\u003e(Time,Time)-\u003eTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:updateDurExponential",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Ctrl -\u003e (Time, Time) -\u003e Time",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#updateDurExponential",
        "fct-type": "function",
        "title": "updateDurExponential"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "updateDurExponential",
        "normalized": "Ctrl-\u003e(Time,Time)-\u003eTime",
        "package": "streamed",
        "partial": "Dur Exponential",
        "signature": "Ctrl-\u003e(Time,Time)-\u003eTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:updateDurLinear",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Ctrl -\u003e (Time, Time) -\u003e Time",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#updateDurLinear",
        "fct-type": "function",
        "title": "updateDurLinear"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "updateDurLinear",
        "normalized": "Ctrl-\u003e(Time,Time)-\u003eTime",
        "package": "streamed",
        "partial": "Dur Linear",
        "signature": "Ctrl-\u003e(Time,Time)-\u003eTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:velocity",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e Velocity",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#velocity",
        "fct-type": "function",
        "title": "velocity"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "velocity",
        "normalized": "Int-\u003eVelocity",
        "package": "streamed",
        "partial": "",
        "signature": "Int-\u003eVelocity"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:with",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Common",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO a -\u003e IO a",
        "fct-source": "src/Sound-MIDI-ALSA-Common.html#with",
        "fct-type": "function",
        "title": "with"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Common",
        "module": "Sound.MIDI.ALSA.Common",
        "name": "with",
        "normalized": "ReaderT Handle IO a-\u003eIO a",
        "package": "streamed",
        "partial": "",
        "signature": "ReaderT Handle IO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "module",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html",
        "fct-type": "module",
        "title": "EventList"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "EventList",
        "normalized": "",
        "package": "streamed",
        "partial": "Event List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#t:EventDataTrigger",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "type",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#EventDataTrigger",
        "fct-type": "type",
        "title": "EventDataTrigger"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "EventDataTrigger",
        "normalized": "",
        "package": "streamed",
        "partial": "Event Data Trigger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#t:Pattern",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "class",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#Pattern",
        "fct-type": "class",
        "title": "Pattern"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "Pattern",
        "normalized": "",
        "package": "streamed",
        "partial": "Pattern",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#t:Trigger",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "data",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#Trigger",
        "fct-type": "data",
        "title": "Trigger"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "Trigger",
        "normalized": "",
        "package": "streamed",
        "partial": "Trigger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:Regular",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "Regular a",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#Trigger",
        "fct-type": "function",
        "title": "Regular"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "Regular",
        "normalized": "",
        "package": "streamed",
        "partial": "Regular",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:Trigger",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "Trigger",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#Trigger",
        "fct-type": "function",
        "title": "Trigger"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "Trigger",
        "normalized": "",
        "package": "streamed",
        "partial": "Trigger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:equidistantEvents",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "Time -\u003e [a] -\u003e T Time a",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#equidistantEvents",
        "fct-type": "function",
        "title": "equidistantEvents"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "equidistantEvents",
        "normalized": "Time-\u003e[a]-\u003eT Time a",
        "package": "streamed",
        "partial": "Events",
        "signature": "Time-\u003e[a]-\u003eT Time a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003eThe function maintains empty bundles\nin order to maintain laziness breaks.\nThese breaks are import for later merging of the streams.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "(a -\u003e Bool) -\u003e State (T Time (Bundle a)) (T Time (Bundle a))",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "The function maintains empty bundles in order to maintain laziness breaks These breaks are import for later merging of the streams",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eState(T Time(Bundle a))(T Time(Bundle a))",
        "package": "streamed",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eState(T Time(Bundle a))(T Time(Bundle a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:filterSimple",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "(a -\u003e Bool) -\u003e T Time (Bundle a) -\u003e T Time (Bundle a)",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#filterSimple",
        "fct-type": "function",
        "title": "filterSimple"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "filterSimple",
        "normalized": "(a-\u003eBool)-\u003eT Time(Bundle a)-\u003eT Time(Bundle a)",
        "package": "streamed",
        "partial": "Simple",
        "signature": "(a-\u003eBool)-\u003eT Time(Bundle a)-\u003eT Time(Bundle a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:inputEvents",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO (T Time Data)",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#inputEvents",
        "fct-type": "function",
        "title": "inputEvents"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "inputEvents",
        "normalized": "",
        "package": "streamed",
        "partial": "Events",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:inputEventsCore",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO [T]",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#inputEventsCore",
        "fct-type": "function",
        "title": "inputEventsCore"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "inputEventsCore",
        "normalized": "ReaderT Handle IO[T]",
        "package": "streamed",
        "partial": "Events Core",
        "signature": "ReaderT Handle IO[T]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:ioToLazyList",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "IO a -\u003e IO [a]",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#ioToLazyList",
        "fct-type": "function",
        "title": "ioToLazyList"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "ioToLazyList",
        "normalized": "IO a-\u003eIO[a]",
        "package": "streamed",
        "partial": "To Lazy List",
        "signature": "IO a-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:main",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#main",
        "fct-type": "function",
        "title": "main"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "main",
        "normalized": "IO()",
        "package": "streamed",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:makeTriggerEvent",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "Handle -\u003e TimeAbs -\u003e Trigger Data -\u003e T",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#makeTriggerEvent",
        "fct-type": "function",
        "title": "makeTriggerEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "makeTriggerEvent",
        "normalized": "Handle-\u003eTimeAbs-\u003eTrigger Data-\u003eT",
        "package": "streamed",
        "partial": "Trigger Event",
        "signature": "Handle-\u003eTimeAbs-\u003eTrigger Data-\u003eT"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:makeTriggerEvents",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "Handle -\u003e TimeAbs -\u003e EventDataTrigger -\u003e [T]",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#makeTriggerEvents",
        "fct-type": "function",
        "title": "makeTriggerEvents"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "makeTriggerEvents",
        "normalized": "Handle-\u003eTimeAbs-\u003eEventDataTrigger-\u003e[T]",
        "package": "streamed",
        "partial": "Trigger Events",
        "signature": "Handle-\u003eTimeAbs-\u003eEventDataTrigger-\u003e[T]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:merge",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "T Time (Bundle a) -\u003e T Time (Bundle a) -\u003e T Time (Bundle a)",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#merge",
        "fct-type": "function",
        "title": "merge"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "merge",
        "normalized": "T Time(Bundle a)-\u003eT Time(Bundle a)-\u003eT Time(Bundle a)",
        "package": "streamed",
        "partial": "",
        "signature": "T Time(Bundle a)-\u003eT Time(Bundle a)-\u003eT Time(Bundle a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:mergeGenerated",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "T Time (Bundle a) -\u003e T Time (Bundle a) -\u003e T Time (Bundle (Trigger a))",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#mergeGenerated",
        "fct-type": "function",
        "title": "mergeGenerated"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "mergeGenerated",
        "normalized": "T Time(Bundle a)-\u003eT Time(Bundle a)-\u003eT Time(Bundle(Trigger a))",
        "package": "streamed",
        "partial": "Generated",
        "signature": "T Time(Bundle a)-\u003eT Time(Bundle a)-\u003eT Time(Bundle(Trigger a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:mergeGeneratedAtoms",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "(Time -\u003e a) -\u003e T Time a -\u003e T Time a -\u003e T Time a",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#mergeGeneratedAtoms",
        "fct-type": "function",
        "title": "mergeGeneratedAtoms"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "mergeGeneratedAtoms",
        "normalized": "(Time-\u003ea)-\u003eT Time a-\u003eT Time a-\u003eT Time a",
        "package": "streamed",
        "partial": "Generated Atoms",
        "signature": "(Time-\u003ea)-\u003eT Time a-\u003eT Time a-\u003eT Time a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:outputEventBundled",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "T Time EventDataBundle -\u003e ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#outputEventBundled",
        "fct-type": "function",
        "title": "outputEventBundled"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "outputEventBundled",
        "normalized": "T Time EventDataBundle-\u003eReaderT Handle IO()",
        "package": "streamed",
        "partial": "Event Bundled",
        "signature": "T Time EventDataBundle-\u003eReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:outputEventBundles",
      "description": {
        "fct-descr": "\u003cp\u003eSends (drain) each event individually\nsince the events in the bundle might be created in a lazy manner.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "T Time EventDataBundle -\u003e ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#outputEventBundles",
        "fct-type": "function",
        "title": "outputEventBundles"
      },
      "index": {
        "description": "Sends drain each event individually since the events in the bundle might be created in lazy manner",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "outputEventBundles",
        "normalized": "T Time EventDataBundle-\u003eReaderT Handle IO()",
        "package": "streamed",
        "partial": "Event Bundles",
        "signature": "T Time EventDataBundle-\u003eReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:outputEvents",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "T Time Data -\u003e ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#outputEvents",
        "fct-type": "function",
        "title": "outputEvents"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "outputEvents",
        "normalized": "T Time Data-\u003eReaderT Handle IO()",
        "package": "streamed",
        "partial": "Events",
        "signature": "T Time Data-\u003eReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:outputTriggerEvents",
      "description": {
        "fct-descr": "\u003cp\u003eThis function distinguishes between events from portIn\nand events that are generated by us.\nOur generated events must also send an echo to the input port\nin order to break \u003ccode\u003eevent_input\u003c/code\u003e and thus trigger their delivery.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "T Time EventDataTrigger -\u003e ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#outputTriggerEvents",
        "fct-type": "function",
        "title": "outputTriggerEvents"
      },
      "index": {
        "description": "This function distinguishes between events from portIn and events that are generated by us Our generated events must also send an echo to the input port in order to break event input and thus trigger their delivery",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "outputTriggerEvents",
        "normalized": "T Time EventDataTrigger-\u003eReaderT Handle IO()",
        "package": "streamed",
        "partial": "Trigger Events",
        "signature": "T Time EventDataTrigger-\u003eReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:pairListFromRelativeEvents",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "T Time a -\u003e [(TimeAbs, a)]",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#pairListFromRelativeEvents",
        "fct-type": "function",
        "title": "pairListFromRelativeEvents"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "pairListFromRelativeEvents",
        "normalized": "T Time a-\u003e[(TimeAbs,a)]",
        "package": "streamed",
        "partial": "List From Relative Events",
        "signature": "T Time a-\u003e[(TimeAbs,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:patternMono",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "PatternMono i -\u003e Time -\u003e T Time Data -\u003e T Time EventDataTrigger",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#patternMono",
        "fct-type": "function",
        "title": "patternMono"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "patternMono",
        "normalized": "PatternMono a-\u003eTime-\u003eT Time Data-\u003eT Time EventDataTrigger",
        "package": "streamed",
        "partial": "Mono",
        "signature": "PatternMono i-\u003eTime-\u003eT Time Data-\u003eT Time EventDataTrigger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:patternMonoTempo",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "PatternMono i -\u003e ((Channel, Controller), (Time, Time, Time)) -\u003e T Time Data -\u003e T Time EventDataTrigger",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#patternMonoTempo",
        "fct-type": "function",
        "title": "patternMonoTempo"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "patternMonoTempo",
        "normalized": "PatternMono a-\u003e((Channel,Controller),(Time,Time,Time))-\u003eT Time Data-\u003eT Time EventDataTrigger",
        "package": "streamed",
        "partial": "Mono Tempo",
        "signature": "PatternMono i-\u003e((Channel,Controller),(Time,Time,Time))-\u003eT Time Data-\u003eT Time EventDataTrigger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:patternPolyTempo",
      "description": {
        "fct-descr": "\u003cp\u003eThis allows more complex patterns including pauses,\nnotes of different lengths and simultaneous notes.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "PatternPoly i -\u003e ((Channel, Controller), (Time, Time, Time)) -\u003e T Time Data -\u003e T Time EventDataTrigger",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#patternPolyTempo",
        "fct-type": "function",
        "title": "patternPolyTempo"
      },
      "index": {
        "description": "This allows more complex patterns including pauses notes of different lengths and simultaneous notes",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "patternPolyTempo",
        "normalized": "PatternPoly a-\u003e((Channel,Controller),(Time,Time,Time))-\u003eT Time Data-\u003eT Time EventDataTrigger",
        "package": "streamed",
        "partial": "Poly Tempo",
        "signature": "PatternPoly i-\u003e((Channel,Controller),(Time,Time,Time))-\u003eT Time Data-\u003eT Time EventDataTrigger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:patternTempo",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "pat -\u003e ((Channel, Controller), (Time, Time, Time)) -\u003e T Time Data -\u003e T Time EventDataTrigger",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#patternTempo",
        "fct-type": "method",
        "title": "patternTempo"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "patternTempo",
        "normalized": "a-\u003e((Channel,Controller),(Time,Time,Time))-\u003eT Time Data-\u003eT Time EventDataTrigger",
        "package": "streamed",
        "partial": "Tempo",
        "signature": "pat-\u003e((Channel,Controller),(Time,Time,Time))-\u003eT Time Data-\u003eT Time EventDataTrigger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:process",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "(T Time Data -\u003e T Time EventDataTrigger) -\u003e ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#process",
        "fct-type": "function",
        "title": "process"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "process",
        "normalized": "(T Time Data-\u003eT Time EventDataTrigger)-\u003eReaderT Handle IO()",
        "package": "streamed",
        "partial": "",
        "signature": "(T Time Data-\u003eT Time EventDataTrigger)-\u003eReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:processSimple",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "(T Time Data -\u003e T Time EventDataBundle) -\u003e ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#processSimple",
        "fct-type": "function",
        "title": "processSimple"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "processSimple",
        "normalized": "(T Time Data-\u003eT Time EventDataBundle)-\u003eReaderT Handle IO()",
        "package": "streamed",
        "partial": "Simple",
        "signature": "(T Time Data-\u003eT Time EventDataBundle)-\u003eReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:runCyclePrograms",
      "description": {
        "fct-descr": "\u003cpre\u003e runCyclePrograms (map VoiceMsg.toProgram [8..12])\n\u003c/pre\u003e",
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "[Program] -\u003e ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#runCyclePrograms",
        "fct-type": "function",
        "title": "runCyclePrograms"
      },
      "index": {
        "description": "runCyclePrograms map VoiceMsg.toProgram",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "runCyclePrograms",
        "normalized": "[Program]-\u003eReaderT Handle IO()",
        "package": "streamed",
        "partial": "Cycle Programs",
        "signature": "[Program]-\u003eReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:runDelay",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#runDelay",
        "fct-type": "function",
        "title": "runDelay"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "runDelay",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "Delay",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:runFilterSweep",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#runFilterSweep",
        "fct-type": "function",
        "title": "runFilterSweep"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "runFilterSweep",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "Filter Sweep",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:runKeyboardSplit",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#runKeyboardSplit",
        "fct-type": "function",
        "title": "runKeyboardSplit"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "runKeyboardSplit",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "Keyboard Split",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:runKeyboardSplitHigh",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#runKeyboardSplitHigh",
        "fct-type": "function",
        "title": "runKeyboardSplitHigh"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "runKeyboardSplitHigh",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "Keyboard Split High",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:runKeyboardSplitLow",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#runKeyboardSplitLow",
        "fct-type": "function",
        "title": "runKeyboardSplitLow"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "runKeyboardSplitLow",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "Keyboard Split Low",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:runPattern",
      "description": {
        "fct-descr": "\u003cpre\u003e runPattern 0.12 (cycleUp 4)\n\u003c/pre\u003e",
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "Time -\u003e PatternMono i -\u003e ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#runPattern",
        "fct-type": "function",
        "title": "runPattern"
      },
      "index": {
        "description": "runPattern cycleUp",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "runPattern",
        "normalized": "Time-\u003ePatternMono a-\u003eReaderT Handle IO()",
        "package": "streamed",
        "partial": "Pattern",
        "signature": "Time-\u003ePatternMono i-\u003eReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:runPatternTempo",
      "description": {
        "fct-descr": "\u003cpre\u003e runPatternTempo 0.12 (cycleUp 4)\n\u003c/pre\u003e\u003cpre\u003e runPatternTempo 0.2 (PatternMono selectFromOctaveChord (cycle [0,1,2,0,1,2,0,1]))\n\u003c/pre\u003e\u003cpre\u003e runPatternTempo 0.1 (PatternPoly selectFromLimittedChord (let pat = [item 0 1] ./ 1 /. [item 1 1] ./ 2 /. [item 1 1] ./ 1 /. [item 0 1] ./ 2 /. pat in 0 /. pat))\n\u003c/pre\u003e",
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "Time -\u003e pat -\u003e ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#runPatternTempo",
        "fct-type": "function",
        "title": "runPatternTempo"
      },
      "index": {
        "description": "runPatternTempo cycleUp runPatternTempo PatternMono selectFromOctaveChord cycle runPatternTempo PatternPoly selectFromLimittedChord let pat item item item item pat in pat",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "runPatternTempo",
        "normalized": "Time-\u003ea-\u003eReaderT Handle IO()",
        "package": "streamed",
        "partial": "Pattern Tempo",
        "signature": "Time-\u003epat-\u003eReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:runProgramsAsBanks",
      "description": {
        "fct-descr": "\u003cpre\u003e runProgramsAsBanks [8,4,4]\n\u003c/pre\u003e",
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "[Int32] -\u003e ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#runProgramsAsBanks",
        "fct-type": "function",
        "title": "runProgramsAsBanks"
      },
      "index": {
        "description": "runProgramsAsBanks",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "runProgramsAsBanks",
        "normalized": "[Int]-\u003eReaderT Handle IO()",
        "package": "streamed",
        "partial": "Programs As Banks",
        "signature": "[Int]-\u003eReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:runWhirl",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "ReaderT Handle IO ()",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#runWhirl",
        "fct-type": "function",
        "title": "runWhirl"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "runWhirl",
        "normalized": "ReaderT Handle IO()",
        "package": "streamed",
        "partial": "Whirl",
        "signature": "ReaderT Handle IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:sweep",
      "description": {
        "fct-descr": "\u003cp\u003eAutomatically changes the value of a MIDI controller\nevery \u003ccode\u003eperiod\u003c/code\u003e seconds according to a periodic wave.\nThe wave function is a mapping\nfrom the phase in \u003ccode\u003e[0,1)\u003c/code\u003e\nto a controller value in the range \u003ccode\u003e(-1,1)\u003c/code\u003e.\nThe generation of the wave is controlled by a speed controller\n(\u003ccode\u003eminSpeed\u003c/code\u003e and \u003ccode\u003emaxSpeed\u003c/code\u003e are in waves per second),\nthe modulation depth and the center value.\nThe center controller is also the one where we emit our wave.\nThat is, when modulation depth is zero\nthen this effect is almost the same\nas forwarding the controller without modification.\nThe small difference is, that we emit a controller value at a regular patternMono,\nwhereas direct control would mean\nthat only controller value changes are transfered.\n\u003c/p\u003e\u003cpre\u003e sweep channel\n    period (speedCtrl, (minSpeed, maxSpeed)) depthCtrl centerCtrl\n    (ctrlRange (-1,1) (sin . (2*pi*)))\n\u003c/pre\u003e\u003cp\u003eWe could use the nice Wave abstraction from the synthesizer package,\nbut that's a heavy dependency because of multi-parameter type classes.\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "Channel -\u003e Time -\u003e (Controller, (Time, Time)) -\u003e Controller -\u003e Controller -\u003e (Double -\u003e Double) -\u003e T Time Data -\u003e T Time EventDataTrigger",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#sweep",
        "fct-type": "function",
        "title": "sweep"
      },
      "index": {
        "description": "Automatically changes the value of MIDI controller every period seconds according to periodic wave The wave function is mapping from the phase in to controller value in the range The generation of the wave is controlled by speed controller minSpeed and maxSpeed are in waves per second the modulation depth and the center value The center controller is also the one where we emit our wave That is when modulation depth is zero then this effect is almost the same as forwarding the controller without modification The small difference is that we emit controller value at regular patternMono whereas direct control would mean that only controller value changes are transfered sweep channel period speedCtrl minSpeed maxSpeed depthCtrl centerCtrl ctrlRange sin pi We could use the nice Wave abstraction from the synthesizer package but that heavy dependency because of multi-parameter type classes",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "sweep",
        "normalized": "Channel-\u003eTime-\u003e(Controller,(Time,Time))-\u003eController-\u003eController-\u003e(Double-\u003eDouble)-\u003eT Time Data-\u003eT Time EventDataTrigger",
        "package": "streamed",
        "partial": "",
        "signature": "Channel-\u003eTime-\u003e(Controller,(Time,Time))-\u003eController-\u003eController-\u003e(Double-\u003eDouble)-\u003eT Time Data-\u003eT Time EventDataTrigger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:whirl",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.EventList",
        "fct-package": "streamed",
        "fct-signature": "T Time EventDataBundle",
        "fct-source": "src/Sound-MIDI-ALSA-EventList.html#whirl",
        "fct-type": "function",
        "title": "whirl"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA EventList",
        "module": "Sound.MIDI.ALSA.EventList",
        "name": "whirl",
        "normalized": "",
        "package": "streamed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Guitar.html#",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Guitar",
        "fct-package": "streamed",
        "fct-signature": "module",
        "fct-source": "src/Sound-MIDI-ALSA-Guitar.html",
        "fct-type": "module",
        "title": "Guitar"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Guitar",
        "module": "Sound.MIDI.ALSA.Guitar",
        "name": "Guitar",
        "normalized": "",
        "package": "streamed",
        "partial": "Guitar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Guitar.html#t:Transpose",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Guitar",
        "fct-package": "streamed",
        "fct-signature": "class",
        "fct-source": "src/Sound-MIDI-ALSA-Guitar.html#Transpose",
        "fct-type": "class",
        "title": "Transpose"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Guitar",
        "module": "Sound.MIDI.ALSA.Guitar",
        "name": "Transpose",
        "normalized": "",
        "package": "streamed",
        "partial": "Transpose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Guitar.html#v:choosePitchForString",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Guitar",
        "fct-package": "streamed",
        "fct-signature": "[pitch] -\u003e Pitch -\u003e Maybe pitch",
        "fct-source": "src/Sound-MIDI-ALSA-Guitar.html#choosePitchForString",
        "fct-type": "function",
        "title": "choosePitchForString"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Guitar",
        "module": "Sound.MIDI.ALSA.Guitar",
        "name": "choosePitchForString",
        "normalized": "[a]-\u003ePitch-\u003eMaybe a",
        "package": "streamed",
        "partial": "Pitch For String",
        "signature": "[pitch]-\u003ePitch-\u003eMaybe pitch"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Guitar.html#v:getPitch",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Guitar",
        "fct-package": "streamed",
        "fct-signature": "pitch -\u003e Int",
        "fct-source": "src/Sound-MIDI-ALSA-Guitar.html#getPitch",
        "fct-type": "method",
        "title": "getPitch"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Guitar",
        "module": "Sound.MIDI.ALSA.Guitar",
        "name": "getPitch",
        "normalized": "a-\u003eInt",
        "package": "streamed",
        "partial": "Pitch",
        "signature": "pitch-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Guitar.html#v:mapChordToString",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Guitar",
        "fct-package": "streamed",
        "fct-signature": "[Pitch] -\u003e [pitch] -\u003e [pitch]",
        "fct-source": "src/Sound-MIDI-ALSA-Guitar.html#mapChordToString",
        "fct-type": "function",
        "title": "mapChordToString"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Guitar",
        "module": "Sound.MIDI.ALSA.Guitar",
        "name": "mapChordToString",
        "normalized": "[Pitch]-\u003e[a]-\u003e[a]",
        "package": "streamed",
        "partial": "Chord To String",
        "signature": "[Pitch]-\u003e[pitch]-\u003e[pitch]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Guitar.html#v:stringPitches",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Guitar",
        "fct-package": "streamed",
        "fct-signature": "[Pitch]",
        "fct-source": "src/Sound-MIDI-ALSA-Guitar.html#stringPitches",
        "fct-type": "function",
        "title": "stringPitches"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Guitar",
        "module": "Sound.MIDI.ALSA.Guitar",
        "name": "stringPitches",
        "normalized": "[Pitch]",
        "package": "streamed",
        "partial": "Pitches",
        "signature": "[Pitch]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Guitar.html#v:transpose",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Guitar",
        "fct-package": "streamed",
        "fct-signature": "Int -\u003e pitch -\u003e Maybe pitch",
        "fct-source": "src/Sound-MIDI-ALSA-Guitar.html#transpose",
        "fct-type": "method",
        "title": "transpose"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Guitar",
        "module": "Sound.MIDI.ALSA.Guitar",
        "name": "transpose",
        "normalized": "Int-\u003ea-\u003eMaybe a",
        "package": "streamed",
        "partial": "",
        "signature": "Int-\u003epitch-\u003eMaybe pitch"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Training.html#",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Training",
        "fct-package": "streamed",
        "fct-signature": "module",
        "fct-source": "src/Sound-MIDI-ALSA-Training.html",
        "fct-type": "module",
        "title": "Training"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Training",
        "module": "Sound.MIDI.ALSA.Training",
        "name": "Training",
        "normalized": "",
        "package": "streamed",
        "partial": "Training",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Training.html#v:all",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Training",
        "fct-package": "streamed",
        "fct-signature": "g -\u003e [([Pitch], [Pitch])]",
        "fct-source": "src/Sound-MIDI-ALSA-Training.html#all",
        "fct-type": "function",
        "title": "all"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Training",
        "module": "Sound.MIDI.ALSA.Training",
        "name": "all",
        "normalized": "a-\u003e[([Pitch],[Pitch])]",
        "package": "streamed",
        "partial": "",
        "signature": "g-\u003e[([Pitch],[Pitch])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Training.html#v:intervals",
      "description": {
        "fct-descr": "\u003cp\u003eintervals within an octave, all starting with a C\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Training",
        "fct-package": "streamed",
        "fct-signature": "g -\u003e [([Pitch], [Pitch])]",
        "fct-source": "src/Sound-MIDI-ALSA-Training.html#intervals",
        "fct-type": "function",
        "title": "intervals"
      },
      "index": {
        "description": "intervals within an octave all starting with",
        "hierarchy": "Sound MIDI ALSA Training",
        "module": "Sound.MIDI.ALSA.Training",
        "name": "intervals",
        "normalized": "a-\u003e[([Pitch],[Pitch])]",
        "package": "streamed",
        "partial": "",
        "signature": "g-\u003e[([Pitch],[Pitch])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Training.html#v:reverseThreeNotes",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Training",
        "fct-package": "streamed",
        "fct-signature": "g -\u003e [([Pitch], [Pitch])]",
        "fct-source": "src/Sound-MIDI-ALSA-Training.html#reverseThreeNotes",
        "fct-type": "function",
        "title": "reverseThreeNotes"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Training",
        "module": "Sound.MIDI.ALSA.Training",
        "name": "reverseThreeNotes",
        "normalized": "a-\u003e[([Pitch],[Pitch])]",
        "package": "streamed",
        "partial": "Three Notes",
        "signature": "g-\u003e[([Pitch],[Pitch])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Training.html#v:sortThreeNotes",
      "description": {
        "fct-module": "Sound.MIDI.ALSA.Training",
        "fct-package": "streamed",
        "fct-signature": "g -\u003e [([Pitch], [Pitch])]",
        "fct-source": "src/Sound-MIDI-ALSA-Training.html#sortThreeNotes",
        "fct-type": "function",
        "title": "sortThreeNotes"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound MIDI ALSA Training",
        "module": "Sound.MIDI.ALSA.Training",
        "name": "sortThreeNotes",
        "normalized": "a-\u003e[([Pitch],[Pitch])]",
        "package": "streamed",
        "partial": "Three Notes",
        "signature": "g-\u003e[([Pitch],[Pitch])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Training.html#v:threeNotes",
      "description": {
        "fct-descr": "\u003cp\u003echoose three arbitrary notes from an increasing set of notes\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Training",
        "fct-package": "streamed",
        "fct-signature": "g -\u003e [([Pitch], [Pitch])]",
        "fct-source": "src/Sound-MIDI-ALSA-Training.html#threeNotes",
        "fct-type": "function",
        "title": "threeNotes"
      },
      "index": {
        "description": "choose three arbitrary notes from an increasing set of notes",
        "hierarchy": "Sound MIDI ALSA Training",
        "module": "Sound.MIDI.ALSA.Training",
        "name": "threeNotes",
        "normalized": "a-\u003e[([Pitch],[Pitch])]",
        "package": "streamed",
        "partial": "Notes",
        "signature": "g-\u003e[([Pitch],[Pitch])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Training.html#v:transposeTwoNotes",
      "description": {
        "fct-descr": "\u003cp\u003etranspose an interval to begin with C\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Training",
        "fct-package": "streamed",
        "fct-signature": "g -\u003e [([Pitch], [Pitch])]",
        "fct-source": "src/Sound-MIDI-ALSA-Training.html#transposeTwoNotes",
        "fct-type": "function",
        "title": "transposeTwoNotes"
      },
      "index": {
        "description": "transpose an interval to begin with",
        "hierarchy": "Sound MIDI ALSA Training",
        "module": "Sound.MIDI.ALSA.Training",
        "name": "transposeTwoNotes",
        "normalized": "a-\u003e[([Pitch],[Pitch])]",
        "package": "streamed",
        "partial": "Two Notes",
        "signature": "g-\u003e[([Pitch],[Pitch])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Training.html#v:twoNotes",
      "description": {
        "fct-descr": "\u003cp\u003echoose two arbitrary notes from an increasing set of notes\n\u003c/p\u003e",
        "fct-module": "Sound.MIDI.ALSA.Training",
        "fct-package": "streamed",
        "fct-signature": "g -\u003e [([Pitch], [Pitch])]",
        "fct-source": "src/Sound-MIDI-ALSA-Training.html#twoNotes",
        "fct-type": "function",
        "title": "twoNotes"
      },
      "index": {
        "description": "choose two arbitrary notes from an increasing set of notes",
        "hierarchy": "Sound MIDI ALSA Training",
        "module": "Sound.MIDI.ALSA.Training",
        "name": "twoNotes",
        "normalized": "a-\u003e[([Pitch],[Pitch])]",
        "package": "streamed",
        "partial": "Notes",
        "signature": "g-\u003e[([Pitch],[Pitch])]"
      }
    }
  }
]