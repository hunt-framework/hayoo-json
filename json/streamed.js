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
        "word": "streamed"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "Causal",
          "package": "streamed",
          "source": "src/Sound-MIDI-ALSA-Causal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "Causal",
          "package": "streamed",
          "partial": "Causal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "Pattern",
          "package": "streamed",
          "source": "src/Sound-MIDI-ALSA-Causal.html#Pattern",
          "type": "class"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "Pattern",
          "package": "streamed",
          "partial": "Pattern",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#t:Pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of scheduled triggers must be finite.\n\u003c/p\u003e\u003cp\u003eThis process cannot drop an incoming event.\nIn order to do so, you must write something of type \u003ccode\u003eT a (Maybe b)\u003c/code\u003e.\nFor convenience you could wrap this in something like \u003ccode\u003eExt a b\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "T",
          "package": "streamed",
          "source": "src/Sound-MIDI-ALSA-Causal.html#T",
          "type": "data"
        },
        "index": {
          "description": "The list of scheduled triggers must be finite This process cannot drop an incoming event In order to do so you must write something of type Maybe For convenience you could wrap this in something like Ext",
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "T",
          "package": "streamed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "TempoControl",
          "package": "streamed",
          "source": "src/Sound-MIDI-ALSA-Causal.html#TempoControl",
          "type": "type"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "TempoControl",
          "package": "streamed",
          "partial": "Tempo Control",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#t:TempoControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "cyclePrograms",
          "package": "streamed",
          "signature": "[Program] -\u003e T Data [Data]",
          "source": "src/Sound-MIDI-ALSA-Causal.html#cyclePrograms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "cyclePrograms",
          "normalized": "[Program]-\u003eT Data[Data]",
          "package": "streamed",
          "partial": "Programs",
          "signature": "[Program]-\u003eT Data[Data]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:cyclePrograms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e cycleProgramsDefer t\n\u003c/pre\u003e\u003cp\u003eAfter a note that triggers a program change,\nwe won't change the program in the next \u003ccode\u003et\u003c/code\u003e seconds.\nThis is in order to allow chords being played\nand in order to skip accidentally played notes.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "cycleProgramsDefer",
          "package": "streamed",
          "signature": "Time -\u003e [Program] -\u003e T Data [Data]",
          "source": "src/Sound-MIDI-ALSA-Causal.html#cycleProgramsDefer",
          "type": "function"
        },
        "index": {
          "description": "cycleProgramsDefer After note that triggers program change we won change the program in the next seconds This is in order to allow chords being played and in order to skip accidentally played notes",
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "cycleProgramsDefer",
          "normalized": "Time-\u003e[Program]-\u003eT Data[Data]",
          "package": "streamed",
          "partial": "Programs Defer",
          "signature": "Time-\u003e[Program]-\u003eT Data[Data]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:cycleProgramsDefer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "delayAdd",
          "package": "streamed",
          "signature": "Word8 -\u003e Time -\u003e T Data EventDataBundle",
          "source": "src/Sound-MIDI-ALSA-Causal.html#delayAdd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "delayAdd",
          "normalized": "Word-\u003eTime-\u003eT Data EventDataBundle",
          "package": "streamed",
          "partial": "Add",
          "signature": "Word-\u003eTime-\u003eT Data EventDataBundle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:delayAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "eitherIn",
          "package": "streamed",
          "signature": "T a c -\u003e T b c -\u003e T (Either a b) c",
          "source": "src/Sound-MIDI-ALSA-Causal.html#eitherIn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "eitherIn",
          "normalized": "T a b-\u003eT c b-\u003eT(Either a c)b",
          "package": "streamed",
          "partial": "In",
          "signature": "T a c-\u003eT b c-\u003eT(Either a b)c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:eitherIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einput is most oftenly of type \u003ccode\u003e\u003ca\u003eEventDataBundle\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "flatten",
          "package": "streamed",
          "signature": "T (Bundle a) (Maybe a)",
          "source": "src/Sound-MIDI-ALSA-Causal.html#flatten",
          "type": "function"
        },
        "index": {
          "description": "input is most oftenly of type EventDataBundle",
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "flatten",
          "package": "streamed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll pressed keys are latched until a key is pressed after a pause\n(i.e. all keys released).\nFor aborting the pattern you have to send\na \u003ccode\u003e\u003ca\u003eAllNotesOff\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eAllSoundOff\u003c/a\u003e\u003c/code\u003e message.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "groupLatch",
          "package": "streamed",
          "signature": "T Data [Data]",
          "source": "src/Sound-MIDI-ALSA-Causal.html#groupLatch",
          "type": "function"
        },
        "index": {
          "description": "All pressed keys are latched until key is pressed after pause i.e all keys released For aborting the pattern you have to send AllNotesOff or AllSoundOff message",
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "groupLatch",
          "normalized": "T Data[Data]",
          "package": "streamed",
          "partial": "Latch",
          "signature": "T Data[Data]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:groupLatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "guide",
          "package": "streamed",
          "signature": "(a -\u003e Bool) -\u003e T a b -\u003e T a b -\u003e T a b",
          "source": "src/Sound-MIDI-ALSA-Causal.html#guide",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "guide",
          "normalized": "(a-\u003eBool)-\u003eT a b-\u003eT a b-\u003eT a b",
          "package": "streamed",
          "signature": "(a-\u003eBool)-\u003eT a b-\u003eT a b-\u003eT a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:guide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "guideWithMode",
          "package": "streamed",
          "signature": "(Data -\u003e Bool) -\u003e T Data b -\u003e T Data b -\u003e T Data b",
          "source": "src/Sound-MIDI-ALSA-Causal.html#guideWithMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "guideWithMode",
          "normalized": "(Data-\u003eBool)-\u003eT Data a-\u003eT Data a-\u003eT Data a",
          "package": "streamed",
          "partial": "With Mode",
          "signature": "(Data-\u003eBool)-\u003eT Data b-\u003eT Data b-\u003eT Data b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:guideWithMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry for instance \u003ccode\u003eguitar 0.05 0.03\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis process simulates playing chords on a guitar.\nIf you press some keys like C, E, G on the keyboard,\nthen this process figures out what tones would be played on a guitar\nand plays them one after another with short delays.\nIf you release the keys then the chord is played in reverse order.\nThis simulates the hand going up and down on the guitar strings.\nUnfortunatley it is not possible to go up twice or go down twice this way.\nThe octaves of the pressed keys are ignored.\n\u003c/p\u003e\u003cp\u003eIn detail calling \u003ccode\u003eguitar collectTime stepTime\u003c/code\u003e means:\nIf a key is pressed,\nthen collect all key-press events for the next \u003ccode\u003ecollectTime\u003c/code\u003e seconds.\nAfter this period, send out a guitar-like chord pattern for the pressed keys\nwith a delay of \u003ccode\u003estepTime\u003c/code\u003e between the notes.\nNow wait until all keys are released.\nNote that in the meantime keys could have been pressed or released.\nThey are registered, but not played.\nIf all keys are released then send out the reverse chord.\n\u003c/p\u003e\u003cp\u003eOn an AllSoundOff message, release all played tones.\n\u003c/p\u003e\u003cp\u003eI don't know whether emitted key-events are always consistent.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "guitar",
          "package": "streamed",
          "signature": "Time -\u003e Time -\u003e T Data EventDataBundle",
          "source": "src/Sound-MIDI-ALSA-Causal.html#guitar",
          "type": "function"
        },
        "index": {
          "description": "Try for instance guitar This process simulates playing chords on guitar If you press some keys like on the keyboard then this process figures out what tones would be played on guitar and plays them one after another with short delays If you release the keys then the chord is played in reverse order This simulates the hand going up and down on the guitar strings Unfortunatley it is not possible to go up twice or go down twice this way The octaves of the pressed keys are ignored In detail calling guitar collectTime stepTime means If key is pressed then collect all key-press events for the next collectTime seconds After this period send out guitar-like chord pattern for the pressed keys with delay of stepTime between the notes Now wait until all keys are released Note that in the meantime keys could have been pressed or released They are registered but not played If all keys are released then send out the reverse chord On an AllSoundOff message release all played tones don know whether emitted key-events are always consistent",
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "guitar",
          "normalized": "Time-\u003eTime-\u003eT Data EventDataBundle",
          "package": "streamed",
          "signature": "Time-\u003eTime-\u003eT Data EventDataBundle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:guitar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "latch",
          "package": "streamed",
          "signature": "T Data (Maybe Data)",
          "source": "src/Sound-MIDI-ALSA-Causal.html#latch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "latch",
          "package": "streamed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:latch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHere we abuse the \u003ccode\u003eApplicative\u003c/code\u003e constraint.\nActually we only need \u003ccode\u003epure\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "lift",
          "package": "streamed",
          "signature": "T a b -\u003e T (t a) (t b)",
          "source": "src/Sound-MIDI-ALSA-Causal.html#lift",
          "type": "function"
        },
        "index": {
          "description": "Here we abuse the Applicative constraint Actually we only need pure",
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "lift",
          "normalized": "T a b-\u003eT(c a)(c b)",
          "package": "streamed",
          "signature": "T a b-\u003eT(t a)(t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypical instance for the traversable type \u003ccode\u003et\u003c/code\u003e are '[]' and \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "liftPoint",
          "package": "streamed",
          "signature": "(b -\u003e t b) -\u003e T a b -\u003e T (t a) (t b)",
          "source": "src/Sound-MIDI-ALSA-Causal.html#liftPoint",
          "type": "function"
        },
        "index": {
          "description": "Typical instance for the traversable type are and Maybe",
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "liftPoint",
          "normalized": "(a-\u003eb a)-\u003eT c a-\u003eT(b c)(b a)",
          "package": "streamed",
          "partial": "Point",
          "signature": "(b-\u003et b)-\u003eT a b-\u003eT(t a)(t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:liftPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "map",
          "package": "streamed",
          "signature": "(a -\u003e b) -\u003e T a b",
          "source": "src/Sound-MIDI-ALSA-Causal.html#map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eT a b",
          "package": "streamed",
          "signature": "(a-\u003eb)-\u003eT a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun two stream processor in parallel.\nWe cannot use the \u003ccode\u003eArrow\u003c/code\u003e method \u003ccode\u003e&&&\u003c/code\u003e\nsince we cannot define the \u003ccode\u003efirst\u003c/code\u003e method of the \u003ccode\u003eArrow\u003c/code\u003e class.\nConsider \u003ccode\u003efirst :: arrow a b -\u003e arrow (c,a) (c,b)\u003c/code\u003e\nand a trigger where \u003ccode\u003earrow a b\u003c/code\u003e generates an event of type \u003ccode\u003eb\u003c/code\u003e.\nHow could we generate additionally an event of type \u003ccode\u003ec\u003c/code\u003e\nwithout having an input event?\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "parallel",
          "package": "streamed",
          "signature": "T a b -\u003e T a b -\u003e T a b",
          "source": "src/Sound-MIDI-ALSA-Causal.html#parallel",
          "type": "function"
        },
        "index": {
          "description": "Run two stream processor in parallel We cannot use the Arrow method since we cannot define the first method of the Arrow class Consider first arrow arrow and trigger where arrow generates an event of type How could we generate additionally an event of type without having an input event",
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "parallel",
          "normalized": "T a b-\u003eT a b-\u003eT a b",
          "package": "streamed",
          "signature": "T a b-\u003eT a b-\u003eT a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:parallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "partition",
          "package": "streamed",
          "signature": "(a -\u003e Bool) -\u003e T a (Maybe a, Maybe a)",
          "source": "src/Sound-MIDI-ALSA-Causal.html#partition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eT a(Maybe a,Maybe a)",
          "package": "streamed",
          "signature": "(a-\u003eBool)-\u003eT a(Maybe a,Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "patternMono",
          "package": "streamed",
          "signature": "PatternMono i -\u003e Time -\u003e T Data EventDataBundle",
          "source": "src/Sound-MIDI-ALSA-Causal.html#patternMono",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "patternMono",
          "normalized": "PatternMono a-\u003eTime-\u003eT Data EventDataBundle",
          "package": "streamed",
          "partial": "Mono",
          "signature": "PatternMono i-\u003eTime-\u003eT Data EventDataBundle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:patternMono"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "patternMonoTempo",
          "package": "streamed",
          "signature": "PatternMono i -\u003e TempoControl -\u003e T Data EventDataBundle",
          "source": "src/Sound-MIDI-ALSA-Causal.html#patternMonoTempo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "patternMonoTempo",
          "normalized": "PatternMono a-\u003eTempoControl-\u003eT Data EventDataBundle",
          "package": "streamed",
          "partial": "Mono Tempo",
          "signature": "PatternMono i-\u003eTempoControl-\u003eT Data EventDataBundle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:patternMonoTempo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "patternPolyTempo",
          "package": "streamed",
          "signature": "PatternPoly i -\u003e TempoControl -\u003e T Data EventDataBundle",
          "source": "src/Sound-MIDI-ALSA-Causal.html#patternPolyTempo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "patternPolyTempo",
          "normalized": "PatternPoly a-\u003eTempoControl-\u003eT Data EventDataBundle",
          "package": "streamed",
          "partial": "Poly Tempo",
          "signature": "PatternPoly i-\u003eTempoControl-\u003eT Data EventDataBundle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:patternPolyTempo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "patternSerialTempo",
          "package": "streamed",
          "signature": "Int -\u003e PatternMono i -\u003e TempoControl -\u003e T Data EventDataBundle",
          "source": "src/Sound-MIDI-ALSA-Causal.html#patternSerialTempo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "patternSerialTempo",
          "normalized": "Int-\u003ePatternMono a-\u003eTempoControl-\u003eT Data EventDataBundle",
          "package": "streamed",
          "partial": "Serial Tempo",
          "signature": "Int-\u003ePatternMono i-\u003eTempoControl-\u003eT Data EventDataBundle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:patternSerialTempo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "patternTempo",
          "package": "streamed",
          "signature": "pat -\u003e TempoControl -\u003e T Data EventDataBundle",
          "source": "src/Sound-MIDI-ALSA-Causal.html#patternTempo",
          "type": "method"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "patternTempo",
          "normalized": "a-\u003eTempoControl-\u003eT Data EventDataBundle",
          "package": "streamed",
          "partial": "Tempo",
          "signature": "pat-\u003eTempoControl-\u003eT Data EventDataBundle",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:patternTempo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTODO:\nWe should allow the process to access and modify the ALSA port number.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "process",
          "package": "streamed",
          "signature": "T Data EventDataBundle -\u003e ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-Causal.html#process",
          "type": "function"
        },
        "index": {
          "description": "TODO We should allow the process to access and modify the ALSA port number",
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "process",
          "normalized": "T Data EventDataBundle-\u003eReaderT Handle IO()",
          "package": "streamed",
          "signature": "T Data EventDataBundle-\u003eReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:process"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwap order of keys.\nThis is a funny effect and a new challenge to playing a keyboard.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "reverse",
          "package": "streamed",
          "signature": "T Data (Maybe Data)",
          "source": "src/Sound-MIDI-ALSA-Causal.html#reverse",
          "type": "function"
        },
        "index": {
          "description": "Swap order of keys This is funny effect and new challenge to playing keyboard",
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "reverse",
          "package": "streamed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA key is hold until \u003ccode\u003en\u003c/code\u003e times further keys are pressed.\nThe \u003ccode\u003en\u003c/code\u003e-th pressed key replaces the current one.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "serialLatch",
          "package": "streamed",
          "signature": "Int -\u003e T Data [Data]",
          "source": "src/Sound-MIDI-ALSA-Causal.html#serialLatch",
          "type": "function"
        },
        "index": {
          "description": "key is hold until times further keys are pressed The th pressed key replaces the current one",
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "serialLatch",
          "normalized": "Int-\u003eT Data[Data]",
          "package": "streamed",
          "partial": "Latch",
          "signature": "Int-\u003eT Data[Data]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:serialLatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "sweep",
          "package": "streamed",
          "signature": "Channel -\u003e Time -\u003e (Controller, (Time, Time)) -\u003e Controller -\u003e Controller -\u003e (Double -\u003e Double) -\u003e T Data [Data]",
          "source": "src/Sound-MIDI-ALSA-Causal.html#sweep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "sweep",
          "normalized": "Channel-\u003eTime-\u003e(Controller,(Time,Time))-\u003eController-\u003eController-\u003e(Double-\u003eDouble)-\u003eT Data[Data]",
          "package": "streamed",
          "signature": "Channel-\u003eTime-\u003e(Controller,(Time,Time))-\u003eController-\u003eController-\u003e(Double-\u003eDouble)-\u003eT Data[Data]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:sweep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAudio perception trainer\n\u003c/p\u003e\u003cp\u003ePlay sets of notes and\nlet the human player answer to them according to a given scheme.\nRepeat playing the notes sets until the trainee answers correctly.\nThen continue with other sequences, maybe more complicated ones.\n\u003c/p\u003e\u003cp\u003epossible tasks:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e replay a sequence of pitches on the keyboard:\n      single notes for training abolute pitches,\n      intervals all with the same base notes,\n      intervals with different base notes\n\u003c/li\u003e\u003cli\u003e transpose a set of pitches:\n      tranpose to a certain base note,\n      transpose by a certain interval\n\u003c/li\u003e\u003cli\u003e play a set of pitches in a different order:\n      reversed order,\n      in increasing pitch\n\u003c/li\u003e\u003cli\u003e replay a set of simultaneously pressed keys\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe difficulty can be increased by not connecting\nthe keyboard directly with the sound generator.\nThis way, the trainee cannot verify,\nhow the pressed keys differ from the target keys.\n\u003c/p\u003e\u003cp\u003eSometimes it seems that you are catched in an infinite loop.\nThis happens if there were too many keys pressed.\nThe trainer collects all key press events,\nnot only the ones that occur after the target set is played.\nThis way you can correct yourself immediately,\nbefore the target is repeatedly played.\nThe downside is, that there may be key press events hanging around.\nYou can get rid of them by pressing a key again and again,\nbut slowly, until the target is played, again.\nThen the queue of registered keys should be empty\nand you can proceed training.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "trainer",
          "package": "streamed",
          "signature": "Channel -\u003e Time -\u003e Time -\u003e [([Pitch], [Pitch])] -\u003e T Data EventDataBundle",
          "source": "src/Sound-MIDI-ALSA-Causal.html#trainer",
          "type": "function"
        },
        "index": {
          "description": "Audio perception trainer Play sets of notes and let the human player answer to them according to given scheme Repeat playing the notes sets until the trainee answers correctly Then continue with other sequences maybe more complicated ones possible tasks replay sequence of pitches on the keyboard single notes for training abolute pitches intervals all with the same base notes intervals with different base notes transpose set of pitches tranpose to certain base note transpose by certain interval play set of pitches in different order reversed order in increasing pitch replay set of simultaneously pressed keys The difficulty can be increased by not connecting the keyboard directly with the sound generator This way the trainee cannot verify how the pressed keys differ from the target keys Sometimes it seems that you are catched in an infinite loop This happens if there were too many keys pressed The trainer collects all key press events not only the ones that occur after the target set is played This way you can correct yourself immediately before the target is repeatedly played The downside is that there may be key press events hanging around You can get rid of them by pressing key again and again but slowly until the target is played again Then the queue of registered keys should be empty and you can proceed training",
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "trainer",
          "normalized": "Channel-\u003eTime-\u003eTime-\u003e[([Pitch],[Pitch])]-\u003eT Data EventDataBundle",
          "package": "streamed",
          "signature": "Channel-\u003eTime-\u003eTime-\u003e[([Pitch],[Pitch])]-\u003eT Data EventDataBundle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:trainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "transpose",
          "package": "streamed",
          "signature": "Int -\u003e T Data (Maybe Data)",
          "source": "src/Sound-MIDI-ALSA-Causal.html#transpose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "transpose",
          "normalized": "Int-\u003eT Data(Maybe Data)",
          "package": "streamed",
          "signature": "Int-\u003eT Data(Maybe Data)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "traverse",
          "package": "streamed",
          "signature": "s -\u003e (a -\u003e State s b) -\u003e T a b",
          "source": "src/Sound-MIDI-ALSA-Causal.html#traverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Causal",
          "module": "Sound.MIDI.ALSA.Causal",
          "name": "traverse",
          "normalized": "a-\u003e(b-\u003eState a c)-\u003eT b c",
          "package": "streamed",
          "signature": "s-\u003e(a-\u003eState s b)-\u003eT a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Causal.html#v:traverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "CausalExample",
          "package": "streamed",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "CausalExample",
          "package": "streamed",
          "partial": "Causal Example",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "binary",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "binary",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "bruijn",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "bruijn",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:bruijn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "crossSum",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "crossSum",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "Sum",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:crossSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "cyclePrograms",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "cyclePrograms",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "Programs",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:cyclePrograms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "cycleProgramsDefer",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "cycleProgramsDefer",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "Programs Defer",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:cycleProgramsDefer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "cycleUp",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "cycleUp",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "Up",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:cycleUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "cycleUpPoly",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "cycleUpPoly",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "Up Poly",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:cycleUpPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "cycleUpTempo",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "cycleUpTempo",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "Up Tempo",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:cycleUpTempo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "defaultTempo",
          "package": "streamed",
          "signature": "TempoControl",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#defaultTempo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "defaultTempo",
          "package": "streamed",
          "partial": "Tempo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:defaultTempo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "delay",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "delay",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "filterKey",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "filterKey",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "Key",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:filterKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "groupBinary",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "groupBinary",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "Binary",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:groupBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "groupBruijn",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "groupBruijn",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "Bruijn",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:groupBruijn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "groupCrossSum",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "groupCrossSum",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "Cross Sum",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:groupCrossSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "groupCycleUp",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "groupCycleUp",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "Cycle Up",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:groupCycleUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "groupLatch",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "groupLatch",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "Latch",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:groupLatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "groupRandom",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "groupRandom",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "Random",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:groupRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "groupRandomInversions",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "groupRandomInversions",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "Random Inversions",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:groupRandomInversions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "guitar",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "guitar",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:guitar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "latch",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "latch",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:latch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "pass",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "pass",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:pass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "releaseAllKeys",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "releaseAllKeys",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "All Keys",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:releaseAllKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "reverse",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "reverse",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "run",
          "package": "streamed",
          "signature": "ReaderT Handle IO a -\u003e IO a",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#run",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "run",
          "normalized": "ReaderT Handle IO a-\u003eIO a",
          "package": "streamed",
          "signature": "ReaderT Handle IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "sendMode",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "sendMode",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "Mode",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:sendMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "sendProgram",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "sendProgram",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "Program",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:sendProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "serialLatch",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "serialLatch",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "Latch",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:serialLatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "serialPattern",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "serialPattern",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "Pattern",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:serialPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "split",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "split",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "splitPattern",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "splitPattern",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "Pattern",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:splitPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "sweep",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "sweep",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:sweep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "trainer",
          "package": "streamed",
          "signature": "g -\u003e ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#trainer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "trainer",
          "normalized": "a-\u003eReaderT Handle IO()",
          "package": "streamed",
          "signature": "g-\u003eReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:trainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "withGroup",
          "package": "streamed",
          "signature": "pat -\u003e ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-CausalExample.html#withGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA CausalExample",
          "module": "Sound.MIDI.ALSA.CausalExample",
          "name": "withGroup",
          "normalized": "a-\u003eReaderT Handle IO()",
          "package": "streamed",
          "partial": "Group",
          "signature": "pat-\u003eReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-CausalExample.html#v:withGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "Common",
          "package": "streamed",
          "source": "src/Sound-MIDI-ALSA-Common.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "Common",
          "package": "streamed",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe times are relative to the start time of the bundle\nand do not need to be ordered.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "Bundle",
          "package": "streamed",
          "source": "src/Sound-MIDI-ALSA-Common.html#Bundle",
          "type": "type"
        },
        "index": {
          "description": "The times are relative to the start time of the bundle and do not need to be ordered",
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "Bundle",
          "package": "streamed",
          "partial": "Bundle",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#t:Bundle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "EventDataBundle",
          "package": "streamed",
          "source": "src/Sound-MIDI-ALSA-Common.html#EventDataBundle",
          "type": "type"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "EventDataBundle",
          "package": "streamed",
          "partial": "Event Data Bundle",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#t:EventDataBundle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "Handle",
          "package": "streamed",
          "source": "src/Sound-MIDI-ALSA-Common.html#Handle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "Handle",
          "package": "streamed",
          "partial": "Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#t:Handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "IndexNote",
          "package": "streamed",
          "source": "src/Sound-MIDI-ALSA-Common.html#IndexNote",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "IndexNote",
          "package": "streamed",
          "partial": "Index Note",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#t:IndexNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "KeyQueue",
          "package": "streamed",
          "source": "src/Sound-MIDI-ALSA-Common.html#KeyQueue",
          "type": "type"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "KeyQueue",
          "package": "streamed",
          "partial": "Key Queue",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#t:KeyQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "KeySet",
          "package": "streamed",
          "source": "src/Sound-MIDI-ALSA-Common.html#KeySet",
          "type": "type"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "KeySet",
          "package": "streamed",
          "partial": "Key Set",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#t:KeySet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "PatternMono",
          "package": "streamed",
          "source": "src/Sound-MIDI-ALSA-Common.html#PatternMono",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "PatternMono",
          "package": "streamed",
          "partial": "Pattern Mono",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#t:PatternMono"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "PatternPoly",
          "package": "streamed",
          "source": "src/Sound-MIDI-ALSA-Common.html#PatternPoly",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "PatternPoly",
          "package": "streamed",
          "partial": "Pattern Poly",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#t:PatternPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "Selector",
          "package": "streamed",
          "source": "src/Sound-MIDI-ALSA-Common.html#Selector",
          "type": "type"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "Selector",
          "package": "streamed",
          "partial": "Selector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#t:Selector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "SweepState",
          "package": "streamed",
          "source": "src/Sound-MIDI-ALSA-Common.html#SweepState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "SweepState",
          "package": "streamed",
          "partial": "Sweep State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#t:SweepState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "Time",
          "package": "streamed",
          "source": "src/Sound-MIDI-ALSA-Common.html#Time",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "Time",
          "package": "streamed",
          "partial": "Time",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#t:Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eTime\u003c/a\u003e\u003c/code\u003e types are used instead of floating point types,\nbecause the latter ones caused unpredictable 'negative number' errors.\nThe denominator must always be a power of 10,\nthis way we can prevent unlimited grow of denominators.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "TimeAbs",
          "package": "streamed",
          "source": "src/Sound-MIDI-ALSA-Common.html#TimeAbs",
          "type": "type"
        },
        "index": {
          "description": "The Time types are used instead of floating point types because the latter ones caused unpredictable negative number errors The denominator must always be power of this way we can prevent unlimited grow of denominators",
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "TimeAbs",
          "package": "streamed",
          "partial": "Time Abs",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#t:TimeAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "Trie",
          "package": "streamed",
          "source": "src/Sound-MIDI-ALSA-Common.html#Trie",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "Trie",
          "package": "streamed",
          "partial": "Trie",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#t:Trie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "Branch",
          "package": "streamed",
          "signature": "Branch [(a, Trie a b)]",
          "source": "src/Sound-MIDI-ALSA-Common.html#Trie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "Branch",
          "normalized": "Branch[(a,Trie a b)]",
          "package": "streamed",
          "partial": "Branch",
          "signature": "Branch[(a,Trie a b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:Branch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "Handle",
          "package": "streamed",
          "signature": "Handle",
          "source": "src/Sound-MIDI-ALSA-Common.html#Handle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "Handle",
          "package": "streamed",
          "partial": "Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:Handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "IndexNote",
          "package": "streamed",
          "signature": "IndexNote Int i",
          "source": "src/Sound-MIDI-ALSA-Common.html#IndexNote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "IndexNote",
          "package": "streamed",
          "partial": "Index Note",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:IndexNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "Leaf",
          "package": "streamed",
          "signature": "Leaf b",
          "source": "src/Sound-MIDI-ALSA-Common.html#Trie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "Leaf",
          "package": "streamed",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "PatternMono",
          "package": "streamed",
          "signature": "PatternMono (Selector i) [i]",
          "source": "src/Sound-MIDI-ALSA-Common.html#PatternMono",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "PatternMono",
          "normalized": "PatternMono(Selector a)[a]",
          "package": "streamed",
          "partial": "Pattern Mono",
          "signature": "PatternMono(Selector i)[i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:PatternMono"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "PatternPoly",
          "package": "streamed",
          "signature": "PatternPoly (Selector i) (T Int [IndexNote i])",
          "source": "src/Sound-MIDI-ALSA-Common.html#PatternPoly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "PatternPoly",
          "normalized": "PatternPoly(Selector a)(T Int[IndexNote a])",
          "package": "streamed",
          "partial": "Pattern Poly",
          "signature": "PatternPoly(Selector i)(T Int[IndexNote i])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:PatternPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "SweepState",
          "package": "streamed",
          "signature": "SweepState",
          "source": "src/Sound-MIDI-ALSA-Common.html#SweepState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "SweepState",
          "package": "streamed",
          "partial": "Sweep State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:SweepState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "Time",
          "package": "streamed",
          "signature": "Time",
          "source": "src/Sound-MIDI-ALSA-Common.html#Time",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "Time",
          "package": "streamed",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "binaryAccident",
          "package": "streamed",
          "signature": "PatternPoly Int",
          "source": "src/Sound-MIDI-ALSA-Common.html#binaryStaccato",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "binaryAccident",
          "package": "streamed",
          "partial": "Accident",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:binaryAccident"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "binaryLegato",
          "package": "streamed",
          "signature": "PatternPoly Int",
          "source": "src/Sound-MIDI-ALSA-Common.html#binaryStaccato",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "binaryLegato",
          "package": "streamed",
          "partial": "Legato",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:binaryLegato"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "binaryStaccato",
          "package": "streamed",
          "signature": "PatternPoly Int",
          "source": "src/Sound-MIDI-ALSA-Common.html#binaryStaccato",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "binaryStaccato",
          "package": "streamed",
          "partial": "Staccato",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:binaryStaccato"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebruijn n k\u003c/code\u003e is a sequence with length n^k\nwhere \u003ccode\u003ecycle (bruijn n k)\u003c/code\u003e contains all n-ary numbers with k digits as infixes.\nThe function computes the lexicographically smallest of such sequences.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "bruijn",
          "package": "streamed",
          "signature": "Int -\u003e Int -\u003e [Int]",
          "source": "src/Sound-MIDI-ALSA-Common.html#bruijn",
          "type": "function"
        },
        "index": {
          "description": "bruijn is sequence with length where cycle bruijn contains all n-ary numbers with digits as infixes The function computes the lexicographically smallest of such sequences",
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "bruijn",
          "normalized": "Int-\u003eInt-\u003e[Int]",
          "package": "streamed",
          "signature": "Int-\u003eInt-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:bruijn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll Bruijn sequences with a certain \n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "bruijnAll",
          "package": "streamed",
          "signature": "Int -\u003e Int -\u003e [[Int]]",
          "source": "src/Sound-MIDI-ALSA-Common.html#bruijnAll",
          "type": "function"
        },
        "index": {
          "description": "All Bruijn sequences with certain",
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "bruijnAll",
          "normalized": "Int-\u003eInt-\u003e[[Int]]",
          "package": "streamed",
          "partial": "All",
          "signature": "Int-\u003eInt-\u003e[[Int]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:bruijnAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "bruijnAllBits",
          "package": "streamed",
          "signature": "Int -\u003e Int -\u003e [[Int]]",
          "source": "src/Sound-MIDI-ALSA-Common.html#bruijnAllBits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "bruijnAllBits",
          "normalized": "Int-\u003eInt-\u003e[[Int]]",
          "package": "streamed",
          "partial": "All Bits",
          "signature": "Int-\u003eInt-\u003e[[Int]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:bruijnAllBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "bruijnAllMap",
          "package": "streamed",
          "signature": "Int -\u003e Int -\u003e [[Int]]",
          "source": "src/Sound-MIDI-ALSA-Common.html#bruijnAllMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "bruijnAllMap",
          "normalized": "Int-\u003eInt-\u003e[[Int]]",
          "package": "streamed",
          "partial": "All Map",
          "signature": "Int-\u003eInt-\u003e[[Int]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:bruijnAllMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "bruijnAllTrie",
          "package": "streamed",
          "signature": "Int -\u003e Int -\u003e [[Int]]",
          "source": "src/Sound-MIDI-ALSA-Common.html#bruijnAllTrie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "bruijnAllTrie",
          "normalized": "Int-\u003eInt-\u003e[[Int]]",
          "package": "streamed",
          "partial": "All Trie",
          "signature": "Int-\u003eInt-\u003e[[Int]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:bruijnAllTrie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "bruijnPat",
          "package": "streamed",
          "signature": "Int -\u003e Int -\u003e PatternMono Int",
          "source": "src/Sound-MIDI-ALSA-Common.html#bruijnPat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "bruijnPat",
          "normalized": "Int-\u003eInt-\u003ePatternMono Int",
          "package": "streamed",
          "partial": "Pat",
          "signature": "Int-\u003eInt-\u003ePatternMono Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:bruijnPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "channel",
          "package": "streamed",
          "signature": "Int -\u003e Channel",
          "source": "src/Sound-MIDI-ALSA-Common.html#channel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "channel",
          "normalized": "Int-\u003eChannel",
          "package": "streamed",
          "signature": "Int-\u003eChannel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:channel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "checkChannel",
          "package": "streamed",
          "signature": "(Channel -\u003e Bool) -\u003e Data -\u003e Bool",
          "source": "src/Sound-MIDI-ALSA-Common.html#checkChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "checkChannel",
          "normalized": "(Channel-\u003eBool)-\u003eData-\u003eBool",
          "package": "streamed",
          "partial": "Channel",
          "signature": "(Channel-\u003eBool)-\u003eData-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:checkChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "checkController",
          "package": "streamed",
          "signature": "(Controller -\u003e Bool) -\u003e Data -\u003e Bool",
          "source": "src/Sound-MIDI-ALSA-Common.html#checkController",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "checkController",
          "normalized": "(Controller-\u003eBool)-\u003eData-\u003eBool",
          "package": "streamed",
          "partial": "Controller",
          "signature": "(Controller-\u003eBool)-\u003eData-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:checkController"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "checkMode",
          "package": "streamed",
          "signature": "(T -\u003e Bool) -\u003e Data -\u003e Bool",
          "source": "src/Sound-MIDI-ALSA-Common.html#checkMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "checkMode",
          "normalized": "(T-\u003eBool)-\u003eData-\u003eBool",
          "package": "streamed",
          "partial": "Mode",
          "signature": "(T-\u003eBool)-\u003eData-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:checkMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "checkPitch",
          "package": "streamed",
          "signature": "(Pitch -\u003e Bool) -\u003e Data -\u003e Bool",
          "source": "src/Sound-MIDI-ALSA-Common.html#checkPitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "checkPitch",
          "normalized": "(Pitch-\u003eBool)-\u003eData-\u003eBool",
          "package": "streamed",
          "partial": "Pitch",
          "signature": "(Pitch-\u003eBool)-\u003eData-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:checkPitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "checkProgram",
          "package": "streamed",
          "signature": "(Program -\u003e Bool) -\u003e Data -\u003e Bool",
          "source": "src/Sound-MIDI-ALSA-Common.html#checkProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "checkProgram",
          "normalized": "(Program-\u003eBool)-\u003eData-\u003eBool",
          "package": "streamed",
          "partial": "Program",
          "signature": "(Program-\u003eBool)-\u003eData-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:checkProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "client",
          "package": "streamed",
          "signature": "T",
          "source": "src/Sound-MIDI-ALSA-Common.html#Handle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "client",
          "package": "streamed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:client"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "connect",
          "package": "streamed",
          "signature": "String -\u003e String -\u003e ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-Common.html#connect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "connect",
          "normalized": "String-\u003eString-\u003eReaderT Handle IO()",
          "package": "streamed",
          "signature": "String-\u003eString-\u003eReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "connectLLVM",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-Common.html#connectLLVM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "connectLLVM",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "LLVM",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:connectLLVM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "connectSuperCollider",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-Common.html#connectSuperCollider",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "connectSuperCollider",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "Super Collider",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:connectSuperCollider"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "connectTimidity",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-Common.html#connectTimidity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "connectTimidity",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "Timidity",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:connectTimidity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "consTime",
          "package": "streamed",
          "signature": "String -\u003e Rational -\u003e Time",
          "source": "src/Sound-MIDI-ALSA-Common.html#consTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "consTime",
          "normalized": "String-\u003eRational-\u003eTime",
          "package": "streamed",
          "partial": "Time",
          "signature": "String-\u003eRational-\u003eTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:consTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "controller",
          "package": "streamed",
          "signature": "Int -\u003e Controller",
          "source": "src/Sound-MIDI-ALSA-Common.html#controller",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "controller",
          "normalized": "Int-\u003eController",
          "package": "streamed",
          "signature": "Int-\u003eController",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:controller"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap NoteOn events to a controller value.\nThis way you may play notes via the resonance frequency of a filter.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "controllerFromNote",
          "package": "streamed",
          "signature": "(Int -\u003e Int) -\u003e Controller -\u003e Data -\u003e Maybe Data",
          "source": "src/Sound-MIDI-ALSA-Common.html#controllerFromNote",
          "type": "function"
        },
        "index": {
          "description": "Map NoteOn events to controller value This way you may play notes via the resonance frequency of filter",
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "controllerFromNote",
          "normalized": "(Int-\u003eInt)-\u003eController-\u003eData-\u003eMaybe Data",
          "package": "streamed",
          "partial": "From Note",
          "signature": "(Int-\u003eInt)-\u003eController-\u003eData-\u003eMaybe Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:controllerFromNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "controllerMatch",
          "package": "streamed",
          "signature": "Channel -\u003e Controller -\u003e Ctrl -\u003e Bool",
          "source": "src/Sound-MIDI-ALSA-Common.html#controllerMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "controllerMatch",
          "normalized": "Channel-\u003eController-\u003eCtrl-\u003eBool",
          "package": "streamed",
          "partial": "Match",
          "signature": "Channel-\u003eController-\u003eCtrl-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:controllerMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "crossSum",
          "package": "streamed",
          "signature": "Int -\u003e PatternMono Int",
          "source": "src/Sound-MIDI-ALSA-Common.html#cycleUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "crossSum",
          "normalized": "Int-\u003ePatternMono Int",
          "package": "streamed",
          "partial": "Sum",
          "signature": "Int-\u003ePatternMono Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:crossSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "crossSumAuto",
          "package": "streamed",
          "signature": "PatternMono Integer",
          "source": "src/Sound-MIDI-ALSA-Common.html#cycleUpAuto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "crossSumAuto",
          "package": "streamed",
          "partial": "Sum Auto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:crossSumAuto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "cycleDown",
          "package": "streamed",
          "signature": "Int -\u003e PatternMono Int",
          "source": "src/Sound-MIDI-ALSA-Common.html#cycleUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "cycleDown",
          "normalized": "Int-\u003ePatternMono Int",
          "package": "streamed",
          "partial": "Down",
          "signature": "Int-\u003ePatternMono Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:cycleDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "cycleDownAuto",
          "package": "streamed",
          "signature": "PatternMono Integer",
          "source": "src/Sound-MIDI-ALSA-Common.html#cycleUpAuto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "cycleDownAuto",
          "package": "streamed",
          "partial": "Down Auto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:cycleDownAuto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "cycleUp",
          "package": "streamed",
          "signature": "Int -\u003e PatternMono Int",
          "source": "src/Sound-MIDI-ALSA-Common.html#cycleUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "cycleUp",
          "normalized": "Int-\u003ePatternMono Int",
          "package": "streamed",
          "partial": "Up",
          "signature": "Int-\u003ePatternMono Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:cycleUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "cycleUpAuto",
          "package": "streamed",
          "signature": "PatternMono Integer",
          "source": "src/Sound-MIDI-ALSA-Common.html#cycleUpAuto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "cycleUpAuto",
          "package": "streamed",
          "partial": "Up Auto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:cycleUpAuto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "cycleUpInversions",
          "package": "streamed",
          "signature": "Int -\u003e PatternMono Double",
          "source": "src/Sound-MIDI-ALSA-Common.html#cycleUpInversions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "cycleUpInversions",
          "normalized": "Int-\u003ePatternMono Double",
          "package": "streamed",
          "partial": "Up Inversions",
          "signature": "Int-\u003ePatternMono Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:cycleUpInversions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "cycleUpOctave",
          "package": "streamed",
          "signature": "Int -\u003e PatternMono Int",
          "source": "src/Sound-MIDI-ALSA-Common.html#cycleUpOctave",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "cycleUpOctave",
          "normalized": "Int-\u003ePatternMono Int",
          "package": "streamed",
          "partial": "Up Octave",
          "signature": "Int-\u003ePatternMono Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:cycleUpOctave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "decomposePositional",
          "package": "streamed",
          "signature": "Integer -\u003e Integer -\u003e [Integer]",
          "source": "src/Sound-MIDI-ALSA-Common.html#decomposePositional",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "decomposePositional",
          "normalized": "Integer-\u003eInteger-\u003e[Integer]",
          "package": "streamed",
          "partial": "Positional",
          "signature": "Integer-\u003eInteger-\u003e[Integer]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:decomposePositional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "deconsTime",
          "package": "streamed",
          "signature": "Rational",
          "source": "src/Sound-MIDI-ALSA-Common.html#Time",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "deconsTime",
          "package": "streamed",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:deconsTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "defaultTempoCtrl",
          "package": "streamed",
          "signature": "(Channel, Controller)",
          "source": "src/Sound-MIDI-ALSA-Common.html#defaultTempoCtrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "defaultTempoCtrl",
          "normalized": "(Channel,Controller)",
          "package": "streamed",
          "partial": "Tempo Ctrl",
          "signature": "(Channel,Controller)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:defaultTempoCtrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "delayAdd",
          "package": "streamed",
          "signature": "Word8 -\u003e Time -\u003e Data -\u003e EventDataBundle",
          "source": "src/Sound-MIDI-ALSA-Common.html#delayAdd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "delayAdd",
          "normalized": "Word-\u003eTime-\u003eData-\u003eEventDataBundle",
          "package": "streamed",
          "partial": "Add",
          "signature": "Word-\u003eTime-\u003eData-\u003eEventDataBundle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:delayAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "deleteWord",
          "package": "streamed",
          "signature": "b -\u003e [a] -\u003e Trie a [b] -\u003e Trie a [b]",
          "source": "src/Sound-MIDI-ALSA-Common.html#deleteWord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "deleteWord",
          "normalized": "a-\u003e[b]-\u003eTrie b[a]-\u003eTrie b[a]",
          "package": "streamed",
          "partial": "Word",
          "signature": "b-\u003e[a]-\u003eTrie a[b]-\u003eTrie a[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:deleteWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "eventsFromKey",
          "package": "streamed",
          "signature": "Time -\u003e ((Pitch, Channel), Velocity) -\u003e EventDataBundle",
          "source": "src/Sound-MIDI-ALSA-Common.html#eventsFromKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "eventsFromKey",
          "normalized": "Time-\u003e((Pitch,Channel),Velocity)-\u003eEventDataBundle",
          "package": "streamed",
          "partial": "From Key",
          "signature": "Time-\u003e((Pitch,Channel),Velocity)-\u003eEventDataBundle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:eventsFromKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "examplePatternPolyTempo0",
          "package": "streamed",
          "signature": "T Int [IndexNote Int]",
          "source": "src/Sound-MIDI-ALSA-Common.html#examplePatternPolyTempo0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "examplePatternPolyTempo0",
          "normalized": "T Int[IndexNote Int]",
          "package": "streamed",
          "partial": "Pattern Poly Tempo",
          "signature": "T Int[IndexNote Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:examplePatternPolyTempo0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "examplePatternPolyTempo1",
          "package": "streamed",
          "signature": "T Int [IndexNote Int]",
          "source": "src/Sound-MIDI-ALSA-Common.html#examplePatternPolyTempo1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "examplePatternPolyTempo1",
          "normalized": "T Int[IndexNote Int]",
          "package": "streamed",
          "partial": "Pattern Poly Tempo",
          "signature": "T Int[IndexNote Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:examplePatternPolyTempo1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "exit",
          "package": "streamed",
          "signature": "Handle -\u003e IO ()",
          "source": "src/Sound-MIDI-ALSA-Common.html#exit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "exit",
          "normalized": "Handle-\u003eIO()",
          "package": "streamed",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:exit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee Haskore/FlipSong\n\u003c/p\u003e\u003cp\u003eflipSeq m !! n = cross sum of the m-ary representation of n modulo m.\n\u003c/p\u003e\u003cp\u003eFor m=2 this yields\n  http:\u003cem/\u003ewww.research.att.com\u003cem\u003ecgi-bin\u003c/em\u003eaccess.cgi\u003cem\u003eas\u003c/em\u003enjas\u003cem\u003esequences\u003c/em\u003eeisA.cgi?Anum=A010060\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "flipSeq",
          "package": "streamed",
          "signature": "Int -\u003e [Int]",
          "source": "src/Sound-MIDI-ALSA-Common.html#flipSeq",
          "type": "function"
        },
        "index": {
          "description": "See Haskore FlipSong flipSeq cross sum of the m-ary representation of modulo For this yields http www.research.att.com cgi-bin access.cgi as njas sequences eisA.cgi Anum A010060",
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "flipSeq",
          "normalized": "Int-\u003e[Int]",
          "package": "streamed",
          "partial": "Seq",
          "signature": "Int-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:flipSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "fraction",
          "package": "streamed",
          "signature": "a -\u003e a",
          "source": "src/Sound-MIDI-ALSA-Common.html#fraction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "fraction",
          "normalized": "a-\u003ea",
          "package": "streamed",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:fraction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "fullTrie",
          "package": "streamed",
          "signature": "b -\u003e [a] -\u003e Int -\u003e Trie a b",
          "source": "src/Sound-MIDI-ALSA-Common.html#fullTrie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "fullTrie",
          "normalized": "a-\u003e[b]-\u003eInt-\u003eTrie b a",
          "package": "streamed",
          "partial": "Trie",
          "signature": "b-\u003e[a]-\u003eInt-\u003eTrie a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:fullTrie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "immediateBundle",
          "package": "streamed",
          "signature": "[a] -\u003e Bundle a",
          "source": "src/Sound-MIDI-ALSA-Common.html#immediateBundle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "immediateBundle",
          "normalized": "[a]-\u003eBundle a",
          "package": "streamed",
          "partial": "Bundle",
          "signature": "[a]-\u003eBundle a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:immediateBundle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "incTime",
          "package": "streamed",
          "signature": "Time -\u003e TimeAbs -\u003e TimeAbs",
          "source": "src/Sound-MIDI-ALSA-Common.html#incTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "incTime",
          "normalized": "Time-\u003eTimeAbs-\u003eTimeAbs",
          "package": "streamed",
          "partial": "Time",
          "signature": "Time-\u003eTimeAbs-\u003eTimeAbs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:incTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "increasePitch",
          "package": "streamed",
          "signature": "Int -\u003e Pitch -\u003e Maybe Pitch",
          "source": "src/Sound-MIDI-ALSA-Common.html#increasePitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "increasePitch",
          "normalized": "Int-\u003ePitch-\u003eMaybe Pitch",
          "package": "streamed",
          "partial": "Pitch",
          "signature": "Int-\u003ePitch-\u003eMaybe Pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:increasePitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "init",
          "package": "streamed",
          "signature": "IO Handle",
          "source": "src/Sound-MIDI-ALSA-Common.html#init",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "init",
          "package": "streamed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "inversions",
          "package": "streamed",
          "signature": "[Double] -\u003e PatternMono Double",
          "source": "src/Sound-MIDI-ALSA-Common.html#inversions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "inversions",
          "normalized": "[Double]-\u003ePatternMono Double",
          "package": "streamed",
          "signature": "[Double]-\u003ePatternMono Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:inversions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "item",
          "package": "streamed",
          "signature": "i -\u003e Int -\u003e IndexNote i",
          "source": "src/Sound-MIDI-ALSA-Common.html#item",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "item",
          "normalized": "a-\u003eInt-\u003eIndexNote a",
          "package": "streamed",
          "signature": "i-\u003eInt-\u003eIndexNote i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:item"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "lookupWord",
          "package": "streamed",
          "signature": "[a] -\u003e Trie a b -\u003e Maybe b",
          "source": "src/Sound-MIDI-ALSA-Common.html#lookupWord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "lookupWord",
          "normalized": "[a]-\u003eTrie a b-\u003eMaybe b",
          "package": "streamed",
          "partial": "Word",
          "signature": "[a]-\u003eTrie a b-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:lookupWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "makeEcho",
          "package": "streamed",
          "signature": "Handle -\u003e TimeAbs -\u003e Custom -\u003e T",
          "source": "src/Sound-MIDI-ALSA-Common.html#makeEcho",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "makeEcho",
          "normalized": "Handle-\u003eTimeAbs-\u003eCustom-\u003eT",
          "package": "streamed",
          "partial": "Echo",
          "signature": "Handle-\u003eTimeAbs-\u003eCustom-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:makeEcho"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "makeEvent",
          "package": "streamed",
          "signature": "Handle -\u003e TimeAbs -\u003e Data -\u003e T",
          "source": "src/Sound-MIDI-ALSA-Common.html#makeEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "makeEvent",
          "normalized": "Handle-\u003eTimeAbs-\u003eData-\u003eT",
          "package": "streamed",
          "partial": "Event",
          "signature": "Handle-\u003eTimeAbs-\u003eData-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:makeEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "maybePitch",
          "package": "streamed",
          "signature": "Int -\u003e Maybe Pitch",
          "source": "src/Sound-MIDI-ALSA-Common.html#maybePitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "maybePitch",
          "normalized": "Int-\u003eMaybe Pitch",
          "package": "streamed",
          "partial": "Pitch",
          "signature": "Int-\u003eMaybe Pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:maybePitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "mergeEither",
          "package": "streamed",
          "signature": "T time a -\u003e T time b -\u003e T time (Either a b)",
          "source": "src/Sound-MIDI-ALSA-Common.html#mergeEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "mergeEither",
          "normalized": "T a b-\u003eT a c-\u003eT a(Either b c)",
          "package": "streamed",
          "partial": "Either",
          "signature": "T time a-\u003eT time b-\u003eT time(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:mergeEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "mergeStable",
          "package": "streamed",
          "signature": "T time body -\u003e T time body -\u003e T time body",
          "source": "src/Sound-MIDI-ALSA-Common.html#mergeStable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "mergeStable",
          "normalized": "T a b-\u003eT a b-\u003eT a b",
          "package": "streamed",
          "partial": "Stable",
          "signature": "T time body-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:mergeStable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "nano",
          "package": "streamed",
          "signature": "a",
          "source": "src/Sound-MIDI-ALSA-Common.html#nano",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "nano",
          "package": "streamed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:nano"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "nextProgram",
          "package": "streamed",
          "signature": "Note -\u003e State [Program] [Data]",
          "source": "src/Sound-MIDI-ALSA-Common.html#nextProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "nextProgram",
          "normalized": "Note-\u003eState[Program][Data]",
          "package": "streamed",
          "partial": "Program",
          "signature": "Note-\u003eState[Program][Data]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:nextProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "normalVelocity",
          "package": "streamed",
          "signature": "Velocity",
          "source": "src/Sound-MIDI-ALSA-Common.html#normalVelocity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "normalVelocity",
          "package": "streamed",
          "partial": "Velocity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:normalVelocity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "nullTrie",
          "package": "streamed",
          "signature": "Trie a [b] -\u003e Bool",
          "source": "src/Sound-MIDI-ALSA-Common.html#nullTrie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "nullTrie",
          "normalized": "Trie a[b]-\u003eBool",
          "package": "streamed",
          "partial": "Trie",
          "signature": "Trie a[b]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:nullTrie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "outputEvent",
          "package": "streamed",
          "signature": "TimeAbs -\u003e Data -\u003e ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-Common.html#outputEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "outputEvent",
          "normalized": "TimeAbs-\u003eData-\u003eReaderT Handle IO()",
          "package": "streamed",
          "partial": "Event",
          "signature": "TimeAbs-\u003eData-\u003eReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:outputEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "pingPong",
          "package": "streamed",
          "signature": "Int -\u003e PatternMono Int",
          "source": "src/Sound-MIDI-ALSA-Common.html#cycleUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "pingPong",
          "normalized": "Int-\u003ePatternMono Int",
          "package": "streamed",
          "partial": "Pong",
          "signature": "Int-\u003ePatternMono Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:pingPong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "pingPongAuto",
          "package": "streamed",
          "signature": "PatternMono Integer",
          "source": "src/Sound-MIDI-ALSA-Common.html#cycleUpAuto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "pingPongAuto",
          "package": "streamed",
          "partial": "Pong Auto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:pingPongAuto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "pitch",
          "package": "streamed",
          "signature": "Int -\u003e Pitch",
          "source": "src/Sound-MIDI-ALSA-Common.html#pitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "pitch",
          "normalized": "Int-\u003ePitch",
          "package": "streamed",
          "signature": "Int-\u003ePitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:pitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "portPrivate",
          "package": "streamed",
          "signature": "T",
          "source": "src/Sound-MIDI-ALSA-Common.html#Handle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "portPrivate",
          "package": "streamed",
          "partial": "Private",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:portPrivate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "portPublic",
          "package": "streamed",
          "signature": "T",
          "source": "src/Sound-MIDI-ALSA-Common.html#Handle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "portPublic",
          "package": "streamed",
          "partial": "Public",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:portPublic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute \u003ccode\u003ebase ** expo\u003c/code\u003e\napproximately to result type \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e\nsuch that the result has a denominator which is a power of \u003ccode\u003edigitBase\u003c/code\u003e\nand a relative precision of numerator of \u003ccode\u003eprecision\u003c/code\u003e digits\nwith respect to \u003ccode\u003edigitBase\u003c/code\u003e-ary numbers.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "powerRationalFromFloat",
          "package": "streamed",
          "signature": "Int -\u003e Int -\u003e a -\u003e a -\u003e Rational",
          "source": "src/Sound-MIDI-ALSA-Common.html#powerRationalFromFloat",
          "type": "function"
        },
        "index": {
          "description": "Compute base expo approximately to result type Rational such that the result has denominator which is power of digitBase and relative precision of numerator of precision digits with respect to digitBase ary numbers",
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "powerRationalFromFloat",
          "normalized": "Int-\u003eInt-\u003ea-\u003ea-\u003eRational",
          "package": "streamed",
          "partial": "Rational From Float",
          "signature": "Int-\u003eInt-\u003ea-\u003ea-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:powerRationalFromFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "program",
          "package": "streamed",
          "signature": "Int -\u003e Program",
          "source": "src/Sound-MIDI-ALSA-Common.html#program",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "program",
          "normalized": "Int-\u003eProgram",
          "package": "streamed",
          "signature": "Int-\u003eProgram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "programFromBanks",
          "package": "streamed",
          "signature": "[Int32] -\u003e [Int32] -\u003e Int32",
          "source": "src/Sound-MIDI-ALSA-Common.html#programFromBanks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "programFromBanks",
          "normalized": "[Int]-\u003e[Int]-\u003eInt",
          "package": "streamed",
          "partial": "From Banks",
          "signature": "[Int]-\u003e[Int]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:programFromBanks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterpret program changes as a kind of bank switches\nin order to increase the range of instruments\nthat can be selected via a block of patch select buttons.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eprogramAsBanks ns\u003c/code\u003e divides the first \u003ccode\u003esum ns\u003c/code\u003e instruments\ninto sections of sizes \u003ccode\u003ens!!0, ns!!1, ...\u003c/code\u003e.\nEach program in those sections is interpreted as a bank in a hierarchy,\nwhere the lower program numbers are the least significant banks.\nPrograms from \u003ccode\u003esum ns\u003c/code\u003e on are passed through as they are.\n\u003ccode\u003eproduct ns\u003c/code\u003e is the number of instruments\nthat you can address using this trick.\nIn order to avoid overflow it should be less than 128.\n\u003c/p\u003e\u003cp\u003eE.g. \u003ccode\u003eprogramAsBanks [n,m]\u003c/code\u003e interprets subsequent program changes to\n\u003ccode\u003ea\u003c/code\u003e (\u003ccode\u003e0\u003c=a\u003cn\u003c/code\u003e) and \u003ccode\u003en+b\u003c/code\u003e (\u003ccode\u003e0\u003c=b\u003cm\u003c/code\u003e)\nas a program change to \u003ccode\u003eb*n+a\u003c/code\u003e.\n\u003ccode\u003eprogramAsBanks [8,8]\u003c/code\u003e allows to select 64 instruments\nby 16 program change buttons,\nwhereas \u003ccode\u003eprogramAsBanks [8,4,4]\u003c/code\u003e\nallows to address the full range of MIDI 128 instruments\nwith the same number of buttons.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "programsAsBanks",
          "package": "streamed",
          "signature": "[Int32] -\u003e Data -\u003e State [Int32] Data",
          "source": "src/Sound-MIDI-ALSA-Common.html#programsAsBanks",
          "type": "function"
        },
        "index": {
          "description": "Interpret program changes as kind of bank switches in order to increase the range of instruments that can be selected via block of patch select buttons programAsBanks ns divides the first sum ns instruments into sections of sizes ns ns Each program in those sections is interpreted as bank in hierarchy where the lower program numbers are the least significant banks Programs from sum ns on are passed through as they are product ns is the number of instruments that you can address using this trick In order to avoid overflow it should be less than E.g programAsBanks interprets subsequent program changes to and as program change to programAsBanks allows to select instruments by program change buttons whereas programAsBanks allows to address the full range of MIDI instruments with the same number of buttons",
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "programsAsBanks",
          "normalized": "[Int]-\u003eData-\u003eState[Int]Data",
          "package": "streamed",
          "partial": "As Banks",
          "signature": "[Int]-\u003eData-\u003eState[Int]Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:programsAsBanks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "queue",
          "package": "streamed",
          "signature": "T",
          "source": "src/Sound-MIDI-ALSA-Common.html#Handle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "queue",
          "package": "streamed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:queue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "random",
          "package": "streamed",
          "signature": "PatternMono Double",
          "source": "src/Sound-MIDI-ALSA-Common.html#random",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "random",
          "package": "streamed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:random"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "randomInversions",
          "package": "streamed",
          "signature": "PatternMono Double",
          "source": "src/Sound-MIDI-ALSA-Common.html#random",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "randomInversions",
          "package": "streamed",
          "partial": "Inversions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:randomInversions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "reduceNoteVelocity",
          "package": "streamed",
          "signature": "Word8 -\u003e Note -\u003e Note",
          "source": "src/Sound-MIDI-ALSA-Common.html#reduceNoteVelocity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "reduceNoteVelocity",
          "normalized": "Word-\u003eNote-\u003eNote",
          "package": "streamed",
          "partial": "Note Velocity",
          "signature": "Word-\u003eNote-\u003eNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:reduceNoteVelocity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e \u003e replaceProgram [1,2,3,4] 5 [10,11,12,13]\n (True,[10,11,2,13])\n\u003c/pre\u003e",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "replaceProgram",
          "package": "streamed",
          "signature": "[Int32] -\u003e Int32 -\u003e [Int32] -\u003e (Bool, [Int32])",
          "source": "src/Sound-MIDI-ALSA-Common.html#replaceProgram",
          "type": "function"
        },
        "index": {
          "description": "replaceProgram True",
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "replaceProgram",
          "normalized": "[Int]-\u003eInt-\u003e[Int]-\u003e(Bool,[Int])",
          "package": "streamed",
          "partial": "Program",
          "signature": "[Int]-\u003eInt-\u003e[Int]-\u003e(Bool,[Int])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:replaceProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwap order of keys.\nNon-note events are returned without modification.\nIf by reversing a note leaves the range of representable MIDI notes,\nthen we return Nothing.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "reverse",
          "package": "streamed",
          "signature": "Data -\u003e Maybe Data",
          "source": "src/Sound-MIDI-ALSA-Common.html#reverse",
          "type": "function"
        },
        "index": {
          "description": "Swap order of keys Non-note events are returned without modification If by reversing note leaves the range of representable MIDI notes then we return Nothing",
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "reverse",
          "normalized": "Data-\u003eMaybe Data",
          "package": "streamed",
          "signature": "Data-\u003eMaybe Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "selectFromChord",
          "package": "streamed",
          "signature": "Integer -\u003e Time -\u003e KeyQueue -\u003e EventDataBundle",
          "source": "src/Sound-MIDI-ALSA-Common.html#selectFromChord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "selectFromChord",
          "normalized": "Integer-\u003eTime-\u003eKeyQueue-\u003eEventDataBundle",
          "package": "streamed",
          "partial": "From Chord",
          "signature": "Integer-\u003eTime-\u003eKeyQueue-\u003eEventDataBundle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:selectFromChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "selectFromChordRatio",
          "package": "streamed",
          "signature": "Double -\u003e Time -\u003e KeyQueue -\u003e EventDataBundle",
          "source": "src/Sound-MIDI-ALSA-Common.html#selectFromChordRatio",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "selectFromChordRatio",
          "normalized": "Double-\u003eTime-\u003eKeyQueue-\u003eEventDataBundle",
          "package": "streamed",
          "partial": "From Chord Ratio",
          "signature": "Double-\u003eTime-\u003eKeyQueue-\u003eEventDataBundle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:selectFromChordRatio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "selectFromLimittedChord",
          "package": "streamed",
          "signature": "Int -\u003e Time -\u003e KeyQueue -\u003e EventDataBundle",
          "source": "src/Sound-MIDI-ALSA-Common.html#selectFromLimittedChord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "selectFromLimittedChord",
          "normalized": "Int-\u003eTime-\u003eKeyQueue-\u003eEventDataBundle",
          "package": "streamed",
          "partial": "From Limitted Chord",
          "signature": "Int-\u003eTime-\u003eKeyQueue-\u003eEventDataBundle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:selectFromLimittedChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate notes according to the key set,\nwhere notes for negative and too large indices\nare padded with keys that are transposed by octaves.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "selectFromOctaveChord",
          "package": "streamed",
          "signature": "Int -\u003e Time -\u003e KeyQueue -\u003e EventDataBundle",
          "source": "src/Sound-MIDI-ALSA-Common.html#selectFromOctaveChord",
          "type": "function"
        },
        "index": {
          "description": "Generate notes according to the key set where notes for negative and too large indices are padded with keys that are transposed by octaves",
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "selectFromOctaveChord",
          "normalized": "Int-\u003eTime-\u003eKeyQueue-\u003eEventDataBundle",
          "package": "streamed",
          "partial": "From Octave Chord",
          "signature": "Int-\u003eTime-\u003eKeyQueue-\u003eEventDataBundle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:selectFromOctaveChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "selectInversion",
          "package": "streamed",
          "signature": "Double -\u003e Time -\u003e KeyQueue -\u003e EventDataBundle",
          "source": "src/Sound-MIDI-ALSA-Common.html#selectInversion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "selectInversion",
          "normalized": "Double-\u003eTime-\u003eKeyQueue-\u003eEventDataBundle",
          "package": "streamed",
          "partial": "Inversion",
          "signature": "Double-\u003eTime-\u003eKeyQueue-\u003eEventDataBundle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:selectInversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "sendController",
          "package": "streamed",
          "signature": "Channel -\u003e Controller -\u003e Int -\u003e ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-Common.html#sendController",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "sendController",
          "normalized": "Channel-\u003eController-\u003eInt-\u003eReaderT Handle IO()",
          "package": "streamed",
          "partial": "Controller",
          "signature": "Channel-\u003eController-\u003eInt-\u003eReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:sendController"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "sendKey",
          "package": "streamed",
          "signature": "Channel -\u003e Bool -\u003e Velocity -\u003e Pitch -\u003e ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-Common.html#sendKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "sendKey",
          "normalized": "Channel-\u003eBool-\u003eVelocity-\u003ePitch-\u003eReaderT Handle IO()",
          "package": "streamed",
          "partial": "Key",
          "signature": "Channel-\u003eBool-\u003eVelocity-\u003ePitch-\u003eReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:sendKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "sendMode",
          "package": "streamed",
          "signature": "Channel -\u003e T -\u003e ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-Common.html#sendMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "sendMode",
          "normalized": "Channel-\u003eT-\u003eReaderT Handle IO()",
          "package": "streamed",
          "partial": "Mode",
          "signature": "Channel-\u003eT-\u003eReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:sendMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "sendNote",
          "package": "streamed",
          "signature": "Channel -\u003e Time -\u003e Velocity -\u003e Pitch -\u003e ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-Common.html#sendNote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "sendNote",
          "normalized": "Channel-\u003eTime-\u003eVelocity-\u003ePitch-\u003eReaderT Handle IO()",
          "package": "streamed",
          "partial": "Note",
          "signature": "Channel-\u003eTime-\u003eVelocity-\u003ePitch-\u003eReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:sendNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "sendProgram",
          "package": "streamed",
          "signature": "Channel -\u003e Program -\u003e ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-Common.html#sendProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "sendProgram",
          "normalized": "Channel-\u003eProgram-\u003eReaderT Handle IO()",
          "package": "streamed",
          "partial": "Program",
          "signature": "Channel-\u003eProgram-\u003eReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:sendProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "sequ",
          "package": "streamed",
          "signature": "T DuplexMode",
          "source": "src/Sound-MIDI-ALSA-Common.html#Handle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "sequ",
          "package": "streamed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:sequ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "setChannel",
          "package": "streamed",
          "signature": "Channel -\u003e Data -\u003e Data",
          "source": "src/Sound-MIDI-ALSA-Common.html#setChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "setChannel",
          "normalized": "Channel-\u003eData-\u003eData",
          "package": "streamed",
          "partial": "Channel",
          "signature": "Channel-\u003eData-\u003eData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:setChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake ALSA set the time stamps in incoming events\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "setTimeStamping",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-Common.html#setTimeStamping",
          "type": "function"
        },
        "index": {
          "description": "make ALSA set the time stamps in incoming events",
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "setTimeStamping",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "Time Stamping",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:setTimeStamping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "simpleNote",
          "package": "streamed",
          "signature": "Channel -\u003e Pitch -\u003e Velocity -\u003e Note",
          "source": "src/Sound-MIDI-ALSA-Common.html#simpleNote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "simpleNote",
          "normalized": "Channel-\u003ePitch-\u003eVelocity-\u003eNote",
          "package": "streamed",
          "partial": "Note",
          "signature": "Channel-\u003ePitch-\u003eVelocity-\u003eNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:simpleNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "singletonBundle",
          "package": "streamed",
          "signature": "a -\u003e Bundle a",
          "source": "src/Sound-MIDI-ALSA-Common.html#singletonBundle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "singletonBundle",
          "normalized": "a-\u003eBundle a",
          "package": "streamed",
          "partial": "Bundle",
          "signature": "a-\u003eBundle a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:singletonBundle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "startQueue",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-Common.html#startQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "startQueue",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "Queue",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:startQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "sweepCenter",
          "package": "streamed",
          "signature": "Double",
          "source": "src/Sound-MIDI-ALSA-Common.html#SweepState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "sweepCenter",
          "package": "streamed",
          "partial": "Center",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:sweepCenter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "sweepDepth",
          "package": "streamed",
          "signature": "Double",
          "source": "src/Sound-MIDI-ALSA-Common.html#SweepState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "sweepDepth",
          "package": "streamed",
          "partial": "Depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:sweepDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "sweepPhase",
          "package": "streamed",
          "signature": "Double",
          "source": "src/Sound-MIDI-ALSA-Common.html#SweepState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "sweepPhase",
          "package": "streamed",
          "partial": "Phase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:sweepPhase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "sweepSpeed",
          "package": "streamed",
          "signature": "Double",
          "source": "src/Sound-MIDI-ALSA-Common.html#SweepState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "sweepSpeed",
          "package": "streamed",
          "partial": "Speed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:sweepSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "testBruijn",
          "package": "streamed",
          "signature": "Int -\u003e Int -\u003e [Int] -\u003e Bool",
          "source": "src/Sound-MIDI-ALSA-Common.html#testBruijn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "testBruijn",
          "normalized": "Int-\u003eInt-\u003e[Int]-\u003eBool",
          "package": "streamed",
          "partial": "Bruijn",
          "signature": "Int-\u003eInt-\u003e[Int]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:testBruijn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "testBruijnAll",
          "package": "streamed",
          "signature": "Int -\u003e Int -\u003e Bool",
          "source": "src/Sound-MIDI-ALSA-Common.html#testBruijnAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "testBruijnAll",
          "normalized": "Int-\u003eInt-\u003eBool",
          "package": "streamed",
          "partial": "Bruijn All",
          "signature": "Int-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:testBruijnAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "timeFromStamp",
          "package": "streamed",
          "signature": "TimeStamp -\u003e Time",
          "source": "src/Sound-MIDI-ALSA-Common.html#timeFromStamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "timeFromStamp",
          "normalized": "TimeStamp-\u003eTime",
          "package": "streamed",
          "partial": "From Stamp",
          "signature": "TimeStamp-\u003eTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:timeFromStamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranspose a note event by the given number of semitones.\nNon-note events are returned without modification.\nIf by transposition a note leaves the range of representable MIDI notes,\nthen we return Nothing.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "transpose",
          "package": "streamed",
          "signature": "Int -\u003e Data -\u003e Maybe Data",
          "source": "src/Sound-MIDI-ALSA-Common.html#transpose",
          "type": "function"
        },
        "index": {
          "description": "Transpose note event by the given number of semitones Non-note events are returned without modification If by transposition note leaves the range of representable MIDI notes then we return Nothing",
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "transpose",
          "normalized": "Int-\u003eData-\u003eMaybe Data",
          "package": "streamed",
          "signature": "Int-\u003eData-\u003eMaybe Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBefore every note switch to another instrument\naccording to a list of programs given as state of the State monad.\nI do not know how to handle multiple channels in a reasonable way.\nCurrently I just switch the instrument independent from the channel,\nand send the program switch to the same channel as the beginning note.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "traversePrograms",
          "package": "streamed",
          "signature": "Data -\u003e State [Program] [Data]",
          "source": "src/Sound-MIDI-ALSA-Common.html#traversePrograms",
          "type": "function"
        },
        "index": {
          "description": "Before every note switch to another instrument according to list of programs given as state of the State monad do not know how to handle multiple channels in reasonable way Currently just switch the instrument independent from the channel and send the program switch to the same channel as the beginning note",
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "traversePrograms",
          "normalized": "Data-\u003eState[Program][Data]",
          "package": "streamed",
          "partial": "Programs",
          "signature": "Data-\u003eState[Program][Data]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:traversePrograms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function extends \u003ccode\u003e\u003ca\u003etraversePrograms\u003c/a\u003e\u003c/code\u003e.\nIt reacts on external program changes\nby seeking an according program in the list.\nThis way we can reset the pointer into the instrument list.\nHowever the search must be limited in order to prevent an infinite loop\nif we receive a program that is not contained in the list.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "traverseProgramsSeek",
          "package": "streamed",
          "signature": "Int -\u003e Data -\u003e State [Program] [Data]",
          "source": "src/Sound-MIDI-ALSA-Common.html#traverseProgramsSeek",
          "type": "function"
        },
        "index": {
          "description": "This function extends traversePrograms It reacts on external program changes by seeking an according program in the list This way we can reset the pointer into the instrument list However the search must be limited in order to prevent an infinite loop if we receive program that is not contained in the list",
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "traverseProgramsSeek",
          "normalized": "Int-\u003eData-\u003eState[Program][Data]",
          "package": "streamed",
          "partial": "Programs Seek",
          "signature": "Int-\u003eData-\u003eState[Program][Data]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:traverseProgramsSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "updateChord",
          "package": "streamed",
          "signature": "NoteEv -\u003e Note -\u003e KeySet -\u003e KeySet",
          "source": "src/Sound-MIDI-ALSA-Common.html#updateChord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "updateChord",
          "normalized": "NoteEv-\u003eNote-\u003eKeySet-\u003eKeySet",
          "package": "streamed",
          "partial": "Chord",
          "signature": "NoteEv-\u003eNote-\u003eKeySet-\u003eKeySet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:updateChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "updateDur",
          "package": "streamed",
          "signature": "Ctrl -\u003e (Time, Time) -\u003e Time",
          "source": "src/Sound-MIDI-ALSA-Common.html#updateDur",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "updateDur",
          "normalized": "Ctrl-\u003e(Time,Time)-\u003eTime",
          "package": "streamed",
          "partial": "Dur",
          "signature": "Ctrl-\u003e(Time,Time)-\u003eTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:updateDur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "updateDurExponential",
          "package": "streamed",
          "signature": "Ctrl -\u003e (Time, Time) -\u003e Time",
          "source": "src/Sound-MIDI-ALSA-Common.html#updateDurExponential",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "updateDurExponential",
          "normalized": "Ctrl-\u003e(Time,Time)-\u003eTime",
          "package": "streamed",
          "partial": "Dur Exponential",
          "signature": "Ctrl-\u003e(Time,Time)-\u003eTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:updateDurExponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "updateDurLinear",
          "package": "streamed",
          "signature": "Ctrl -\u003e (Time, Time) -\u003e Time",
          "source": "src/Sound-MIDI-ALSA-Common.html#updateDurLinear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "updateDurLinear",
          "normalized": "Ctrl-\u003e(Time,Time)-\u003eTime",
          "package": "streamed",
          "partial": "Dur Linear",
          "signature": "Ctrl-\u003e(Time,Time)-\u003eTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:updateDurLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "velocity",
          "package": "streamed",
          "signature": "Int -\u003e Velocity",
          "source": "src/Sound-MIDI-ALSA-Common.html#velocity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "velocity",
          "normalized": "Int-\u003eVelocity",
          "package": "streamed",
          "signature": "Int-\u003eVelocity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:velocity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Common",
          "name": "with",
          "package": "streamed",
          "signature": "ReaderT Handle IO a -\u003e IO a",
          "source": "src/Sound-MIDI-ALSA-Common.html#with",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Common",
          "module": "Sound.MIDI.ALSA.Common",
          "name": "with",
          "normalized": "ReaderT Handle IO a-\u003eIO a",
          "package": "streamed",
          "signature": "ReaderT Handle IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Common.html#v:with"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "EventList",
          "package": "streamed",
          "source": "src/Sound-MIDI-ALSA-EventList.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "EventList",
          "package": "streamed",
          "partial": "Event List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "EventDataTrigger",
          "package": "streamed",
          "source": "src/Sound-MIDI-ALSA-EventList.html#EventDataTrigger",
          "type": "type"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "EventDataTrigger",
          "package": "streamed",
          "partial": "Event Data Trigger",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#t:EventDataTrigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "Pattern",
          "package": "streamed",
          "source": "src/Sound-MIDI-ALSA-EventList.html#Pattern",
          "type": "class"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "Pattern",
          "package": "streamed",
          "partial": "Pattern",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#t:Pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "Trigger",
          "package": "streamed",
          "source": "src/Sound-MIDI-ALSA-EventList.html#Trigger",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "Trigger",
          "package": "streamed",
          "partial": "Trigger",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#t:Trigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "Regular",
          "package": "streamed",
          "signature": "Regular a",
          "source": "src/Sound-MIDI-ALSA-EventList.html#Trigger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "Regular",
          "package": "streamed",
          "partial": "Regular",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:Regular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "Trigger",
          "package": "streamed",
          "signature": "Trigger",
          "source": "src/Sound-MIDI-ALSA-EventList.html#Trigger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "Trigger",
          "package": "streamed",
          "partial": "Trigger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:Trigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "equidistantEvents",
          "package": "streamed",
          "signature": "Time -\u003e [a] -\u003e T Time a",
          "source": "src/Sound-MIDI-ALSA-EventList.html#equidistantEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "equidistantEvents",
          "normalized": "Time-\u003e[a]-\u003eT Time a",
          "package": "streamed",
          "partial": "Events",
          "signature": "Time-\u003e[a]-\u003eT Time a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:equidistantEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function maintains empty bundles\nin order to maintain laziness breaks.\nThese breaks are import for later merging of the streams.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "filter",
          "package": "streamed",
          "signature": "(a -\u003e Bool) -\u003e State (T Time (Bundle a)) (T Time (Bundle a))",
          "source": "src/Sound-MIDI-ALSA-EventList.html#filter",
          "type": "function"
        },
        "index": {
          "description": "The function maintains empty bundles in order to maintain laziness breaks These breaks are import for later merging of the streams",
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eState(T Time(Bundle a))(T Time(Bundle a))",
          "package": "streamed",
          "signature": "(a-\u003eBool)-\u003eState(T Time(Bundle a))(T Time(Bundle a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "filterSimple",
          "package": "streamed",
          "signature": "(a -\u003e Bool) -\u003e T Time (Bundle a) -\u003e T Time (Bundle a)",
          "source": "src/Sound-MIDI-ALSA-EventList.html#filterSimple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "filterSimple",
          "normalized": "(a-\u003eBool)-\u003eT Time(Bundle a)-\u003eT Time(Bundle a)",
          "package": "streamed",
          "partial": "Simple",
          "signature": "(a-\u003eBool)-\u003eT Time(Bundle a)-\u003eT Time(Bundle a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:filterSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "inputEvents",
          "package": "streamed",
          "signature": "ReaderT Handle IO (T Time Data)",
          "source": "src/Sound-MIDI-ALSA-EventList.html#inputEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "inputEvents",
          "package": "streamed",
          "partial": "Events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:inputEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "inputEventsCore",
          "package": "streamed",
          "signature": "ReaderT Handle IO [T]",
          "source": "src/Sound-MIDI-ALSA-EventList.html#inputEventsCore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "inputEventsCore",
          "normalized": "ReaderT Handle IO[T]",
          "package": "streamed",
          "partial": "Events Core",
          "signature": "ReaderT Handle IO[T]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:inputEventsCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "ioToLazyList",
          "package": "streamed",
          "signature": "IO a -\u003e IO [a]",
          "source": "src/Sound-MIDI-ALSA-EventList.html#ioToLazyList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "ioToLazyList",
          "normalized": "IO a-\u003eIO[a]",
          "package": "streamed",
          "partial": "To Lazy List",
          "signature": "IO a-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:ioToLazyList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "main",
          "package": "streamed",
          "signature": "IO ()",
          "source": "src/Sound-MIDI-ALSA-EventList.html#main",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "main",
          "normalized": "IO()",
          "package": "streamed",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:main"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "makeTriggerEvent",
          "package": "streamed",
          "signature": "Handle -\u003e TimeAbs -\u003e Trigger Data -\u003e T",
          "source": "src/Sound-MIDI-ALSA-EventList.html#makeTriggerEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "makeTriggerEvent",
          "normalized": "Handle-\u003eTimeAbs-\u003eTrigger Data-\u003eT",
          "package": "streamed",
          "partial": "Trigger Event",
          "signature": "Handle-\u003eTimeAbs-\u003eTrigger Data-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:makeTriggerEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "makeTriggerEvents",
          "package": "streamed",
          "signature": "Handle -\u003e TimeAbs -\u003e EventDataTrigger -\u003e [T]",
          "source": "src/Sound-MIDI-ALSA-EventList.html#makeTriggerEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "makeTriggerEvents",
          "normalized": "Handle-\u003eTimeAbs-\u003eEventDataTrigger-\u003e[T]",
          "package": "streamed",
          "partial": "Trigger Events",
          "signature": "Handle-\u003eTimeAbs-\u003eEventDataTrigger-\u003e[T]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:makeTriggerEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "merge",
          "package": "streamed",
          "signature": "T Time (Bundle a) -\u003e T Time (Bundle a) -\u003e T Time (Bundle a)",
          "source": "src/Sound-MIDI-ALSA-EventList.html#merge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "merge",
          "normalized": "T Time(Bundle a)-\u003eT Time(Bundle a)-\u003eT Time(Bundle a)",
          "package": "streamed",
          "signature": "T Time(Bundle a)-\u003eT Time(Bundle a)-\u003eT Time(Bundle a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "mergeGenerated",
          "package": "streamed",
          "signature": "T Time (Bundle a) -\u003e T Time (Bundle a) -\u003e T Time (Bundle (Trigger a))",
          "source": "src/Sound-MIDI-ALSA-EventList.html#mergeGenerated",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "mergeGenerated",
          "normalized": "T Time(Bundle a)-\u003eT Time(Bundle a)-\u003eT Time(Bundle(Trigger a))",
          "package": "streamed",
          "partial": "Generated",
          "signature": "T Time(Bundle a)-\u003eT Time(Bundle a)-\u003eT Time(Bundle(Trigger a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:mergeGenerated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "mergeGeneratedAtoms",
          "package": "streamed",
          "signature": "(Time -\u003e a) -\u003e T Time a -\u003e T Time a -\u003e T Time a",
          "source": "src/Sound-MIDI-ALSA-EventList.html#mergeGeneratedAtoms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "mergeGeneratedAtoms",
          "normalized": "(Time-\u003ea)-\u003eT Time a-\u003eT Time a-\u003eT Time a",
          "package": "streamed",
          "partial": "Generated Atoms",
          "signature": "(Time-\u003ea)-\u003eT Time a-\u003eT Time a-\u003eT Time a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:mergeGeneratedAtoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "outputEventBundled",
          "package": "streamed",
          "signature": "T Time EventDataBundle -\u003e ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-EventList.html#outputEventBundled",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "outputEventBundled",
          "normalized": "T Time EventDataBundle-\u003eReaderT Handle IO()",
          "package": "streamed",
          "partial": "Event Bundled",
          "signature": "T Time EventDataBundle-\u003eReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:outputEventBundled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends (drain) each event individually\nsince the events in the bundle might be created in a lazy manner.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "outputEventBundles",
          "package": "streamed",
          "signature": "T Time EventDataBundle -\u003e ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-EventList.html#outputEventBundles",
          "type": "function"
        },
        "index": {
          "description": "Sends drain each event individually since the events in the bundle might be created in lazy manner",
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "outputEventBundles",
          "normalized": "T Time EventDataBundle-\u003eReaderT Handle IO()",
          "package": "streamed",
          "partial": "Event Bundles",
          "signature": "T Time EventDataBundle-\u003eReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:outputEventBundles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "outputEvents",
          "package": "streamed",
          "signature": "T Time Data -\u003e ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-EventList.html#outputEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "outputEvents",
          "normalized": "T Time Data-\u003eReaderT Handle IO()",
          "package": "streamed",
          "partial": "Events",
          "signature": "T Time Data-\u003eReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:outputEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function distinguishes between events from portIn\nand events that are generated by us.\nOur generated events must also send an echo to the input port\nin order to break \u003ccode\u003eevent_input\u003c/code\u003e and thus trigger their delivery.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "outputTriggerEvents",
          "package": "streamed",
          "signature": "T Time EventDataTrigger -\u003e ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-EventList.html#outputTriggerEvents",
          "type": "function"
        },
        "index": {
          "description": "This function distinguishes between events from portIn and events that are generated by us Our generated events must also send an echo to the input port in order to break event input and thus trigger their delivery",
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "outputTriggerEvents",
          "normalized": "T Time EventDataTrigger-\u003eReaderT Handle IO()",
          "package": "streamed",
          "partial": "Trigger Events",
          "signature": "T Time EventDataTrigger-\u003eReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:outputTriggerEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "pairListFromRelativeEvents",
          "package": "streamed",
          "signature": "T Time a -\u003e [(TimeAbs, a)]",
          "source": "src/Sound-MIDI-ALSA-EventList.html#pairListFromRelativeEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "pairListFromRelativeEvents",
          "normalized": "T Time a-\u003e[(TimeAbs,a)]",
          "package": "streamed",
          "partial": "List From Relative Events",
          "signature": "T Time a-\u003e[(TimeAbs,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:pairListFromRelativeEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "patternMono",
          "package": "streamed",
          "signature": "PatternMono i -\u003e Time -\u003e T Time Data -\u003e T Time EventDataTrigger",
          "source": "src/Sound-MIDI-ALSA-EventList.html#patternMono",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "patternMono",
          "normalized": "PatternMono a-\u003eTime-\u003eT Time Data-\u003eT Time EventDataTrigger",
          "package": "streamed",
          "partial": "Mono",
          "signature": "PatternMono i-\u003eTime-\u003eT Time Data-\u003eT Time EventDataTrigger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:patternMono"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "patternMonoTempo",
          "package": "streamed",
          "signature": "PatternMono i -\u003e ((Channel, Controller), (Time, Time, Time)) -\u003e T Time Data -\u003e T Time EventDataTrigger",
          "source": "src/Sound-MIDI-ALSA-EventList.html#patternMonoTempo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "patternMonoTempo",
          "normalized": "PatternMono a-\u003e((Channel,Controller),(Time,Time,Time))-\u003eT Time Data-\u003eT Time EventDataTrigger",
          "package": "streamed",
          "partial": "Mono Tempo",
          "signature": "PatternMono i-\u003e((Channel,Controller),(Time,Time,Time))-\u003eT Time Data-\u003eT Time EventDataTrigger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:patternMonoTempo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis allows more complex patterns including pauses,\nnotes of different lengths and simultaneous notes.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "patternPolyTempo",
          "package": "streamed",
          "signature": "PatternPoly i -\u003e ((Channel, Controller), (Time, Time, Time)) -\u003e T Time Data -\u003e T Time EventDataTrigger",
          "source": "src/Sound-MIDI-ALSA-EventList.html#patternPolyTempo",
          "type": "function"
        },
        "index": {
          "description": "This allows more complex patterns including pauses notes of different lengths and simultaneous notes",
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "patternPolyTempo",
          "normalized": "PatternPoly a-\u003e((Channel,Controller),(Time,Time,Time))-\u003eT Time Data-\u003eT Time EventDataTrigger",
          "package": "streamed",
          "partial": "Poly Tempo",
          "signature": "PatternPoly i-\u003e((Channel,Controller),(Time,Time,Time))-\u003eT Time Data-\u003eT Time EventDataTrigger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:patternPolyTempo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "patternTempo",
          "package": "streamed",
          "signature": "pat -\u003e ((Channel, Controller), (Time, Time, Time)) -\u003e T Time Data -\u003e T Time EventDataTrigger",
          "source": "src/Sound-MIDI-ALSA-EventList.html#patternTempo",
          "type": "method"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "patternTempo",
          "normalized": "a-\u003e((Channel,Controller),(Time,Time,Time))-\u003eT Time Data-\u003eT Time EventDataTrigger",
          "package": "streamed",
          "partial": "Tempo",
          "signature": "pat-\u003e((Channel,Controller),(Time,Time,Time))-\u003eT Time Data-\u003eT Time EventDataTrigger",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:patternTempo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "process",
          "package": "streamed",
          "signature": "(T Time Data -\u003e T Time EventDataTrigger) -\u003e ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-EventList.html#process",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "process",
          "normalized": "(T Time Data-\u003eT Time EventDataTrigger)-\u003eReaderT Handle IO()",
          "package": "streamed",
          "signature": "(T Time Data-\u003eT Time EventDataTrigger)-\u003eReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:process"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "processSimple",
          "package": "streamed",
          "signature": "(T Time Data -\u003e T Time EventDataBundle) -\u003e ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-EventList.html#processSimple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "processSimple",
          "normalized": "(T Time Data-\u003eT Time EventDataBundle)-\u003eReaderT Handle IO()",
          "package": "streamed",
          "partial": "Simple",
          "signature": "(T Time Data-\u003eT Time EventDataBundle)-\u003eReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:processSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e runCyclePrograms (map VoiceMsg.toProgram [8..12])\n\u003c/pre\u003e",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "runCyclePrograms",
          "package": "streamed",
          "signature": "[Program] -\u003e ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-EventList.html#runCyclePrograms",
          "type": "function"
        },
        "index": {
          "description": "runCyclePrograms map VoiceMsg.toProgram",
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "runCyclePrograms",
          "normalized": "[Program]-\u003eReaderT Handle IO()",
          "package": "streamed",
          "partial": "Cycle Programs",
          "signature": "[Program]-\u003eReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:runCyclePrograms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "runDelay",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-EventList.html#runDelay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "runDelay",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "Delay",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:runDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "runFilterSweep",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-EventList.html#runFilterSweep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "runFilterSweep",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "Filter Sweep",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:runFilterSweep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "runKeyboardSplit",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-EventList.html#runKeyboardSplit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "runKeyboardSplit",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "Keyboard Split",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:runKeyboardSplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "runKeyboardSplitHigh",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-EventList.html#runKeyboardSplitHigh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "runKeyboardSplitHigh",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "Keyboard Split High",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:runKeyboardSplitHigh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "runKeyboardSplitLow",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-EventList.html#runKeyboardSplitLow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "runKeyboardSplitLow",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "Keyboard Split Low",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:runKeyboardSplitLow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e runPattern 0.12 (cycleUp 4)\n\u003c/pre\u003e",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "runPattern",
          "package": "streamed",
          "signature": "Time -\u003e PatternMono i -\u003e ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-EventList.html#runPattern",
          "type": "function"
        },
        "index": {
          "description": "runPattern cycleUp",
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "runPattern",
          "normalized": "Time-\u003ePatternMono a-\u003eReaderT Handle IO()",
          "package": "streamed",
          "partial": "Pattern",
          "signature": "Time-\u003ePatternMono i-\u003eReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:runPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e runPatternTempo 0.12 (cycleUp 4)\n\u003c/pre\u003e\u003cpre\u003e runPatternTempo 0.2 (PatternMono selectFromOctaveChord (cycle [0,1,2,0,1,2,0,1]))\n\u003c/pre\u003e\u003cpre\u003e runPatternTempo 0.1 (PatternPoly selectFromLimittedChord (let pat = [item 0 1] ./ 1 /. [item 1 1] ./ 2 /. [item 1 1] ./ 1 /. [item 0 1] ./ 2 /. pat in 0 /. pat))\n\u003c/pre\u003e",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "runPatternTempo",
          "package": "streamed",
          "signature": "Time -\u003e pat -\u003e ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-EventList.html#runPatternTempo",
          "type": "function"
        },
        "index": {
          "description": "runPatternTempo cycleUp runPatternTempo PatternMono selectFromOctaveChord cycle runPatternTempo PatternPoly selectFromLimittedChord let pat item item item item pat in pat",
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "runPatternTempo",
          "normalized": "Time-\u003ea-\u003eReaderT Handle IO()",
          "package": "streamed",
          "partial": "Pattern Tempo",
          "signature": "Time-\u003epat-\u003eReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:runPatternTempo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e runProgramsAsBanks [8,4,4]\n\u003c/pre\u003e",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "runProgramsAsBanks",
          "package": "streamed",
          "signature": "[Int32] -\u003e ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-EventList.html#runProgramsAsBanks",
          "type": "function"
        },
        "index": {
          "description": "runProgramsAsBanks",
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "runProgramsAsBanks",
          "normalized": "[Int]-\u003eReaderT Handle IO()",
          "package": "streamed",
          "partial": "Programs As Banks",
          "signature": "[Int]-\u003eReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:runProgramsAsBanks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "runWhirl",
          "package": "streamed",
          "signature": "ReaderT Handle IO ()",
          "source": "src/Sound-MIDI-ALSA-EventList.html#runWhirl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "runWhirl",
          "normalized": "ReaderT Handle IO()",
          "package": "streamed",
          "partial": "Whirl",
          "signature": "ReaderT Handle IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:runWhirl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAutomatically changes the value of a MIDI controller\nevery \u003ccode\u003eperiod\u003c/code\u003e seconds according to a periodic wave.\nThe wave function is a mapping\nfrom the phase in \u003ccode\u003e[0,1)\u003c/code\u003e\nto a controller value in the range \u003ccode\u003e(-1,1)\u003c/code\u003e.\nThe generation of the wave is controlled by a speed controller\n(\u003ccode\u003eminSpeed\u003c/code\u003e and \u003ccode\u003emaxSpeed\u003c/code\u003e are in waves per second),\nthe modulation depth and the center value.\nThe center controller is also the one where we emit our wave.\nThat is, when modulation depth is zero\nthen this effect is almost the same\nas forwarding the controller without modification.\nThe small difference is, that we emit a controller value at a regular patternMono,\nwhereas direct control would mean\nthat only controller value changes are transfered.\n\u003c/p\u003e\u003cpre\u003e sweep channel\n    period (speedCtrl, (minSpeed, maxSpeed)) depthCtrl centerCtrl\n    (ctrlRange (-1,1) (sin . (2*pi*)))\n\u003c/pre\u003e\u003cp\u003eWe could use the nice Wave abstraction from the synthesizer package,\nbut that's a heavy dependency because of multi-parameter type classes.\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "sweep",
          "package": "streamed",
          "signature": "Channel -\u003e Time -\u003e (Controller, (Time, Time)) -\u003e Controller -\u003e Controller -\u003e (Double -\u003e Double) -\u003e T Time Data -\u003e T Time EventDataTrigger",
          "source": "src/Sound-MIDI-ALSA-EventList.html#sweep",
          "type": "function"
        },
        "index": {
          "description": "Automatically changes the value of MIDI controller every period seconds according to periodic wave The wave function is mapping from the phase in to controller value in the range The generation of the wave is controlled by speed controller minSpeed and maxSpeed are in waves per second the modulation depth and the center value The center controller is also the one where we emit our wave That is when modulation depth is zero then this effect is almost the same as forwarding the controller without modification The small difference is that we emit controller value at regular patternMono whereas direct control would mean that only controller value changes are transfered sweep channel period speedCtrl minSpeed maxSpeed depthCtrl centerCtrl ctrlRange sin pi We could use the nice Wave abstraction from the synthesizer package but that heavy dependency because of multi-parameter type classes",
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "sweep",
          "normalized": "Channel-\u003eTime-\u003e(Controller,(Time,Time))-\u003eController-\u003eController-\u003e(Double-\u003eDouble)-\u003eT Time Data-\u003eT Time EventDataTrigger",
          "package": "streamed",
          "signature": "Channel-\u003eTime-\u003e(Controller,(Time,Time))-\u003eController-\u003eController-\u003e(Double-\u003eDouble)-\u003eT Time Data-\u003eT Time EventDataTrigger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:sweep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "whirl",
          "package": "streamed",
          "signature": "T Time EventDataBundle",
          "source": "src/Sound-MIDI-ALSA-EventList.html#whirl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA EventList",
          "module": "Sound.MIDI.ALSA.EventList",
          "name": "whirl",
          "package": "streamed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-EventList.html#v:whirl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Guitar",
          "name": "Guitar",
          "package": "streamed",
          "source": "src/Sound-MIDI-ALSA-Guitar.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Guitar",
          "module": "Sound.MIDI.ALSA.Guitar",
          "name": "Guitar",
          "package": "streamed",
          "partial": "Guitar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Guitar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Guitar",
          "name": "Transpose",
          "package": "streamed",
          "source": "src/Sound-MIDI-ALSA-Guitar.html#Transpose",
          "type": "class"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Guitar",
          "module": "Sound.MIDI.ALSA.Guitar",
          "name": "Transpose",
          "package": "streamed",
          "partial": "Transpose",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Guitar.html#t:Transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Guitar",
          "name": "choosePitchForString",
          "package": "streamed",
          "signature": "[pitch] -\u003e Pitch -\u003e Maybe pitch",
          "source": "src/Sound-MIDI-ALSA-Guitar.html#choosePitchForString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Guitar",
          "module": "Sound.MIDI.ALSA.Guitar",
          "name": "choosePitchForString",
          "normalized": "[a]-\u003ePitch-\u003eMaybe a",
          "package": "streamed",
          "partial": "Pitch For String",
          "signature": "[pitch]-\u003ePitch-\u003eMaybe pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Guitar.html#v:choosePitchForString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Guitar",
          "name": "getPitch",
          "package": "streamed",
          "signature": "pitch -\u003e Int",
          "source": "src/Sound-MIDI-ALSA-Guitar.html#getPitch",
          "type": "method"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Guitar",
          "module": "Sound.MIDI.ALSA.Guitar",
          "name": "getPitch",
          "normalized": "a-\u003eInt",
          "package": "streamed",
          "partial": "Pitch",
          "signature": "pitch-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Guitar.html#v:getPitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Guitar",
          "name": "mapChordToString",
          "package": "streamed",
          "signature": "[Pitch] -\u003e [pitch] -\u003e [pitch]",
          "source": "src/Sound-MIDI-ALSA-Guitar.html#mapChordToString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Guitar",
          "module": "Sound.MIDI.ALSA.Guitar",
          "name": "mapChordToString",
          "normalized": "[Pitch]-\u003e[a]-\u003e[a]",
          "package": "streamed",
          "partial": "Chord To String",
          "signature": "[Pitch]-\u003e[pitch]-\u003e[pitch]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Guitar.html#v:mapChordToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Guitar",
          "name": "stringPitches",
          "package": "streamed",
          "signature": "[Pitch]",
          "source": "src/Sound-MIDI-ALSA-Guitar.html#stringPitches",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Guitar",
          "module": "Sound.MIDI.ALSA.Guitar",
          "name": "stringPitches",
          "normalized": "[Pitch]",
          "package": "streamed",
          "partial": "Pitches",
          "signature": "[Pitch]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Guitar.html#v:stringPitches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Guitar",
          "name": "transpose",
          "package": "streamed",
          "signature": "Int -\u003e pitch -\u003e Maybe pitch",
          "source": "src/Sound-MIDI-ALSA-Guitar.html#transpose",
          "type": "method"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Guitar",
          "module": "Sound.MIDI.ALSA.Guitar",
          "name": "transpose",
          "normalized": "Int-\u003ea-\u003eMaybe a",
          "package": "streamed",
          "signature": "Int-\u003epitch-\u003eMaybe pitch",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Guitar.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Training",
          "name": "Training",
          "package": "streamed",
          "source": "src/Sound-MIDI-ALSA-Training.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Training",
          "module": "Sound.MIDI.ALSA.Training",
          "name": "Training",
          "package": "streamed",
          "partial": "Training",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Training.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Training",
          "name": "all",
          "package": "streamed",
          "signature": "g -\u003e [([Pitch], [Pitch])]",
          "source": "src/Sound-MIDI-ALSA-Training.html#all",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Training",
          "module": "Sound.MIDI.ALSA.Training",
          "name": "all",
          "normalized": "a-\u003e[([Pitch],[Pitch])]",
          "package": "streamed",
          "signature": "g-\u003e[([Pitch],[Pitch])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Training.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eintervals within an octave, all starting with a C\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Training",
          "name": "intervals",
          "package": "streamed",
          "signature": "g -\u003e [([Pitch], [Pitch])]",
          "source": "src/Sound-MIDI-ALSA-Training.html#intervals",
          "type": "function"
        },
        "index": {
          "description": "intervals within an octave all starting with",
          "hierarchy": "Sound MIDI ALSA Training",
          "module": "Sound.MIDI.ALSA.Training",
          "name": "intervals",
          "normalized": "a-\u003e[([Pitch],[Pitch])]",
          "package": "streamed",
          "signature": "g-\u003e[([Pitch],[Pitch])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Training.html#v:intervals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Training",
          "name": "reverseThreeNotes",
          "package": "streamed",
          "signature": "g -\u003e [([Pitch], [Pitch])]",
          "source": "src/Sound-MIDI-ALSA-Training.html#reverseThreeNotes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Training",
          "module": "Sound.MIDI.ALSA.Training",
          "name": "reverseThreeNotes",
          "normalized": "a-\u003e[([Pitch],[Pitch])]",
          "package": "streamed",
          "partial": "Three Notes",
          "signature": "g-\u003e[([Pitch],[Pitch])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Training.html#v:reverseThreeNotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.MIDI.ALSA.Training",
          "name": "sortThreeNotes",
          "package": "streamed",
          "signature": "g -\u003e [([Pitch], [Pitch])]",
          "source": "src/Sound-MIDI-ALSA-Training.html#sortThreeNotes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound MIDI ALSA Training",
          "module": "Sound.MIDI.ALSA.Training",
          "name": "sortThreeNotes",
          "normalized": "a-\u003e[([Pitch],[Pitch])]",
          "package": "streamed",
          "partial": "Three Notes",
          "signature": "g-\u003e[([Pitch],[Pitch])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Training.html#v:sortThreeNotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echoose three arbitrary notes from an increasing set of notes\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Training",
          "name": "threeNotes",
          "package": "streamed",
          "signature": "g -\u003e [([Pitch], [Pitch])]",
          "source": "src/Sound-MIDI-ALSA-Training.html#threeNotes",
          "type": "function"
        },
        "index": {
          "description": "choose three arbitrary notes from an increasing set of notes",
          "hierarchy": "Sound MIDI ALSA Training",
          "module": "Sound.MIDI.ALSA.Training",
          "name": "threeNotes",
          "normalized": "a-\u003e[([Pitch],[Pitch])]",
          "package": "streamed",
          "partial": "Notes",
          "signature": "g-\u003e[([Pitch],[Pitch])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Training.html#v:threeNotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etranspose an interval to begin with C\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Training",
          "name": "transposeTwoNotes",
          "package": "streamed",
          "signature": "g -\u003e [([Pitch], [Pitch])]",
          "source": "src/Sound-MIDI-ALSA-Training.html#transposeTwoNotes",
          "type": "function"
        },
        "index": {
          "description": "transpose an interval to begin with",
          "hierarchy": "Sound MIDI ALSA Training",
          "module": "Sound.MIDI.ALSA.Training",
          "name": "transposeTwoNotes",
          "normalized": "a-\u003e[([Pitch],[Pitch])]",
          "package": "streamed",
          "partial": "Two Notes",
          "signature": "g-\u003e[([Pitch],[Pitch])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Training.html#v:transposeTwoNotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echoose two arbitrary notes from an increasing set of notes\n\u003c/p\u003e",
          "module": "Sound.MIDI.ALSA.Training",
          "name": "twoNotes",
          "package": "streamed",
          "signature": "g -\u003e [([Pitch], [Pitch])]",
          "source": "src/Sound-MIDI-ALSA-Training.html#twoNotes",
          "type": "function"
        },
        "index": {
          "description": "choose two arbitrary notes from an increasing set of notes",
          "hierarchy": "Sound MIDI ALSA Training",
          "module": "Sound.MIDI.ALSA.Training",
          "name": "twoNotes",
          "normalized": "a-\u003e[([Pitch],[Pitch])]",
          "package": "streamed",
          "partial": "Notes",
          "signature": "g-\u003e[([Pitch],[Pitch])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streamed/docs/Sound-MIDI-ALSA-Training.html#v:twoNotes"
      }
    }
  ]
]