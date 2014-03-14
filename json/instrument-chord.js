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
        "word": "instrument-chord"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Instrument.Chord",
          "name": "Chord",
          "package": "instrument-chord",
          "source": "src/Music-Instrument-Chord.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Music Instrument Chord",
          "module": "Music.Instrument.Chord",
          "name": "Chord",
          "package": "instrument-chord",
          "partial": "Chord",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/instrument-chord/docs/Music-Instrument-Chord.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Instrument.Chord",
          "name": "ControlAnnotation",
          "package": "instrument-chord",
          "source": "src/Music-Instrument-Common.html#ControlAnnotation",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Instrument Chord",
          "module": "Music.Instrument.Chord",
          "name": "ControlAnnotation",
          "package": "instrument-chord",
          "partial": "Control Annotation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/instrument-chord/docs/Music-Instrument-Chord.html#t:ControlAnnotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Instrument.Chord",
          "name": "AnnotateMarking",
          "package": "instrument-chord",
          "signature": "AnnotateMarking",
          "source": "src/Music-Instrument-Common.html#ControlAnnotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Instrument Chord",
          "module": "Music.Instrument.Chord",
          "name": "AnnotateMarking",
          "package": "instrument-chord",
          "partial": "Annotate Marking",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instrument-chord/docs/Music-Instrument-Chord.html#v:AnnotateMarking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Instrument.Chord",
          "name": "AnnotateNote",
          "package": "instrument-chord",
          "signature": "AnnotateNote",
          "source": "src/Music-Instrument-Common.html#ControlAnnotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Instrument Chord",
          "module": "Music.Instrument.Chord",
          "name": "AnnotateNote",
          "package": "instrument-chord",
          "partial": "Annotate Note",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instrument-chord/docs/Music-Instrument-Chord.html#v:AnnotateNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Instrument.Chord",
          "name": "AnnotatePositionHorizontal",
          "package": "instrument-chord",
          "signature": "AnnotatePositionHorizontal",
          "source": "src/Music-Instrument-Common.html#ControlAnnotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Instrument Chord",
          "module": "Music.Instrument.Chord",
          "name": "AnnotatePositionHorizontal",
          "package": "instrument-chord",
          "partial": "Annotate Position Horizontal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instrument-chord/docs/Music-Instrument-Chord.html#v:AnnotatePositionHorizontal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Instrument.Chord",
          "name": "AnnotatePositionVertical",
          "package": "instrument-chord",
          "signature": "AnnotatePositionVertical",
          "source": "src/Music-Instrument-Common.html#ControlAnnotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Instrument Chord",
          "module": "Music.Instrument.Chord",
          "name": "AnnotatePositionVertical",
          "package": "instrument-chord",
          "partial": "Annotate Position Vertical",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instrument-chord/docs/Music-Instrument-Chord.html#v:AnnotatePositionVertical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Instrument.Chord",
          "name": "dropD",
          "package": "instrument-chord",
          "signature": "[Note]",
          "source": "src/Music-Instrument-Guitar.html#dropD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Instrument Chord",
          "module": "Music.Instrument.Chord",
          "name": "dropD",
          "normalized": "[Note]",
          "package": "instrument-chord",
          "signature": "[Note]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instrument-chord/docs/Music-Instrument-Chord.html#v:dropD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Instrument.Chord",
          "name": "findPositionPatterns",
          "package": "instrument-chord",
          "signature": "s -\u003e [Note] -\u003e Int -\u003e [[[Int]]]",
          "source": "src/Music-Instrument-Guitar.html#findPositionPatterns",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Instrument Chord",
          "module": "Music.Instrument.Chord",
          "name": "findPositionPatterns",
          "normalized": "a-\u003e[Note]-\u003eInt-\u003e[[[Int]]]",
          "package": "instrument-chord",
          "partial": "Position Patterns",
          "signature": "s-\u003e[Note]-\u003eInt-\u003e[[[Int]]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instrument-chord/docs/Music-Instrument-Chord.html#v:findPositionPatterns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Instrument.Chord",
          "name": "getPositionPatternRange",
          "package": "instrument-chord",
          "signature": "[[c]] -\u003e (c, c)",
          "source": "src/Music-Instrument-Guitar.html#getPositionPatternRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Instrument Chord",
          "module": "Music.Instrument.Chord",
          "name": "getPositionPatternRange",
          "normalized": "[[a]]-\u003e(a,a)",
          "package": "instrument-chord",
          "partial": "Position Pattern Range",
          "signature": "[[c]]-\u003e(c,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instrument-chord/docs/Music-Instrument-Chord.html#v:getPositionPatternRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Instrument.Chord",
          "name": "renderGuitarChord",
          "package": "instrument-chord",
          "signature": "ControlAnnotation -\u003e Bool -\u003e Bool -\u003e [Note] -\u003e Chord -\u003e Int -\u003e Int -\u003e [Char]",
          "source": "src/Music-Instrument-GuitarRender.html#renderGuitarChord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Instrument Chord",
          "module": "Music.Instrument.Chord",
          "name": "renderGuitarChord",
          "normalized": "ControlAnnotation-\u003eBool-\u003eBool-\u003e[Note]-\u003eChord-\u003eInt-\u003eInt-\u003e[Char]",
          "package": "instrument-chord",
          "partial": "Guitar Chord",
          "signature": "ControlAnnotation-\u003eBool-\u003eBool-\u003e[Note]-\u003eChord-\u003eInt-\u003eInt-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instrument-chord/docs/Music-Instrument-Chord.html#v:renderGuitarChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Instrument.Chord",
          "name": "renderPianoChord",
          "package": "instrument-chord",
          "signature": "Int -\u003e ControlAnnotation -\u003e Chord -\u003e String",
          "source": "src/Music-Instrument-Piano.html#renderPianoChord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Instrument Chord",
          "module": "Music.Instrument.Chord",
          "name": "renderPianoChord",
          "normalized": "Int-\u003eControlAnnotation-\u003eChord-\u003eString",
          "package": "instrument-chord",
          "partial": "Piano Chord",
          "signature": "Int-\u003eControlAnnotation-\u003eChord-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instrument-chord/docs/Music-Instrument-Chord.html#v:renderPianoChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Instrument.Chord",
          "name": "standardTuning",
          "package": "instrument-chord",
          "signature": "[Note]",
          "source": "src/Music-Instrument-Guitar.html#standardTuning",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Instrument Chord",
          "module": "Music.Instrument.Chord",
          "name": "standardTuning",
          "normalized": "[Note]",
          "package": "instrument-chord",
          "partial": "Tuning",
          "signature": "[Note]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instrument-chord/docs/Music-Instrument-Chord.html#v:standardTuning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Instrument.Chord",
          "name": "ukelele",
          "package": "instrument-chord",
          "signature": "[Note]",
          "source": "src/Music-Instrument-Guitar.html#ukelele",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Instrument Chord",
          "module": "Music.Instrument.Chord",
          "name": "ukelele",
          "normalized": "[Note]",
          "package": "instrument-chord",
          "signature": "[Note]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/instrument-chord/docs/Music-Instrument-Chord.html#v:ukelele"
      }
    }
  ]
]